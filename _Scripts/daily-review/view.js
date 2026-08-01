/******************************************************************
 * 今日复习面板 V1
 *
 * 全局复习入口：列出今天到期（含逾期）的全部题目，
 * 按科目分组、按逾期天数排序，可直接内联评级，
 * 评级后自动更新 next_review 并同步日记 Tasks 复习任务。
 *
 * 数据口径与 question-recommender 完全一致：
 * - 题目页 = 带“题目”标记嵌入图片的笔记
 * - 降级 = regressed 属性，或 level < peak_level
 * - 复习间隔按 reviewMode 分级计算，降级题再压缩 50%
 *
 * 使用：在笔记中插入 DataviewJS 代码块
 *   ```dataviewjs
 *   dv.view("_Scripts/daily-review")
 *   ```
 ******************************************************************/

/* ================================================================
 * 0. 配置
 * ================================================================ */

const CONFIG = {
    questionMarker: "题目",

    maxResults: 200,

    /* 复习强度：normal / accelerated / sprint；数组下标对应 0～5 级 */
    reviewMode: "accelerated",
    reviewSchedules: {
        normal: [0, 1, 3, 7, 14, 30],
        accelerated: [0, 1, 2, 4, 7, 14],
        sprint: [0, 1, 1, 2, 4, 7]
    },

    /* 降级题间隔再压缩为 50%，至少 1 天 */
    regressedReviewFactor: 0.5,

    /* 你的日记目录 */
    dailyNoteFolder: "_Daily_Tasks",
    dailyNoteFormat: "YYYY-MM-DD",

    /* 自动任务插入到这个标题下面；没有就自动创建 */
    dailyTaskHeading: "## 自动复习任务",
    reviewTaskPrefix: "复习题目",

    templaterWaitTimeoutMs: 5000,
    templaterPollIntervalMs: 100,
    templaterStableTimeMs: 300,

    /* Tasks 开启 Global Filter 时填写，例如 "#task" */
    tasksGlobalFilter: "",

    /* 科目分组（用于给题目归类上色） */
    subjects: [
        { id: "AM",  label: "高数",   color: "#e15759", tagRoots: ["#AM", "#高数", "#高等数学"] },
        { id: "LA",  label: "线代",   color: "#4e79a7", tagRoots: ["#LA", "#线代", "#线性代数"] },
        { id: "P&S", label: "概率",   color: "#59a14f", tagRoots: ["#P&S", "#PS", "#概率", "#概率论", "#概率统计", "#概率论与数理统计"] },
        { id: "DS",  label: "数据结构", color: "#f28e2b", tagRoots: ["#DS", "#数据结构"] },
        { id: "CO",  label: "计组",   color: "#76b7b2", tagRoots: ["#CO", "#计组", "#计算机组成原理"] },
        { id: "OS",  label: "操作系统", color: "#edc948", tagRoots: ["#OS", "#操作系统"] },
        { id: "CN",  label: "计网",   color: "#b07aa1", tagRoots: ["#CN", "#计网", "#计算机网络"] }
    ]
};

/* Chromium/Obsidian can render these attachment types in an <img>. */
const IMAGE_EXTENSIONS = new Set([
    "avif", "bmp", "gif", "jfif", "jpeg", "jpg",
    "png", "svg", "webp"
]);

const QUESTION_MARKER = String(CONFIG.questionMarker ?? "").trim();

dv.container.classList.add("daily-review-view");

const viewDocument = dv.container.ownerDocument;

/* ================================================================
 * 1. 六级分类
 * ================================================================ */

const LEVEL_OPTIONS = [
    { val: -1, text: "暂未评级", detail: "暂未进行六级习题分类" },
    { val: 0, text: "0级｜无法看懂", detail: "0级：无法看懂答案思路" },
    { val: 1, text: "1级｜首次看懂", detail: "1级：首次看懂答案思路，但还不能独立完成" },
    { val: 2, text: "2级｜模仿做对", detail: "2级：需要查看答案或关键提示，模仿着把题做对" },
    { val: 3, text: "3级｜查资料做对", detail: "3级：不看答案，只查询公式或知识资料后把题做对" },
    { val: 4, text: "4级｜独立做对", detail: "4级：不查找任何资料，闭卷独立把题做对" },
    { val: 5, text: "5级｜熟练掌握", detail: "5级：看到题目就知道完整解题流程，已经熟练掌握" }
];

/* ================================================================
 * 2. 通用函数
 * ================================================================ */

function asArray(value) {
    if (value === undefined || value === null) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === "string") return [value];

    try {
        return Array.from(value);
    } catch {
        return [value];
    }
}

function normalizeVaultPath(path) {
    return String(path ?? "")
        .replace(/\\/g, "/")
        .replace(/\/+/g, "/")
        .replace(/^\/+|\/+$/g, "");
}

function normalizeTag(tag) {
    const value = String(tag ?? "").trim();
    if (!value) return "";
    return value.startsWith("#") ? value : `#${value}`;
}

function tagKey(tag) {
    return normalizeTag(tag)
        .replace(/\/+$/g, "")
        .toLocaleLowerCase();
}

function isSameTagOrDescendant(candidate, required) {
    const candidateKey = tagKey(candidate);
    const requiredKey = tagKey(required);

    return (
        candidateKey === requiredKey ||
        candidateKey.startsWith(`${requiredKey}/`)
    );
}

/* 科目根标签在视图加载时只规范化一次，避免扫描每道题时重复处理。 */
const SUBJECT_MATCHERS = CONFIG.subjects.map((subject, index) => ({
    subject,
    index,
    tagRootKeys: subject.tagRoots.map(tagKey)
}));

const SUBJECT_INDEX_BY_ID = new Map(
    SUBJECT_MATCHERS.map(entry => [entry.subject.id, entry.index])
);

function getPageTags(page) {
    const rawTags = [
        ...asArray(page?.tags),
        ...asArray(page?.file?.etags)
    ];
    const result = [];
    const visited = new Set();

    for (const rawTag of rawTags) {
        const normalized = normalizeTag(rawTag);
        const key = tagKey(normalized);

        if (!normalized || visited.has(key)) continue;

        visited.add(key);
        result.push(normalized);
    }

    return result;
}

/* 扫描热路径只需要比较键，跳过“规范化文本再规范化为键”的中间数组。 */
function getPageTagKeys(page) {
    const result = [];
    const visited = new Set();

    for (const rawTags of [
        asArray(page?.tags),
        asArray(page?.file?.etags)
    ]) {
        for (const rawTag of rawTags) {
            const key = tagKey(rawTag);
            if (!key || visited.has(key)) continue;

            visited.add(key);
            result.push(key);
        }
    }

    return result;
}

function parseLevel(value) {
    if (
        value === undefined ||
        value === null ||
        (typeof value === "string" && value.trim() === "")
    ) {
        return null;
    }

    const parsed = Number(value);

    if (!Number.isInteger(parsed) || parsed < 0 || parsed > 5) {
        return null;
    }

    return parsed;
}

function isTrue(value) {
    return value === true ||
        String(value).trim().toLowerCase() === "true";
}

function parseNonNegativeInteger(value) {
    const parsed = Number(value);

    return Number.isFinite(parsed) && parsed >= 0
        ? Math.floor(parsed)
        : 0;
}

function pad2(value) {
    return String(value).padStart(2, "0");
}

function localDate() {
    const date = new Date();

    return [
        date.getFullYear(),
        "-",
        pad2(date.getMonth() + 1),
        "-",
        pad2(date.getDate())
    ].join("");
}

function localDateTime() {
    const date = new Date();

    return [
        date.getFullYear(),
        "-",
        pad2(date.getMonth() + 1),
        "-",
        pad2(date.getDate()),
        " ",
        pad2(date.getHours()),
        ":",
        pad2(date.getMinutes()),
        ":",
        pad2(date.getSeconds())
    ].join("");
}

function localDateAfter(days) {
    const date = new Date();
    date.setDate(date.getDate() + Number(days));

    return [
        date.getFullYear(),
        "-",
        pad2(date.getMonth() + 1),
        "-",
        pad2(date.getDate())
    ].join("");
}

function normalizeIsoDate(value) {
    if (value === undefined || value === null || value === "") {
        return null;
    }

    if (value instanceof Date) {
        if (Number.isNaN(value.getTime())) return null;

        return [
            value.getFullYear(),
            "-",
            pad2(value.getMonth() + 1),
            "-",
            pad2(value.getDate())
        ].join("");
    }

    if (value && typeof value.toISODate === "function") {
        const isoDate = value.toISODate();
        const parsed = moment(isoDate, "YYYY-MM-DD", true);

        return parsed.isValid() ? parsed.format("YYYY-MM-DD") : null;
    }

    const text = String(value);
    const directMatch = text.match(/\d{4}-\d{2}-\d{2}/);

    if (directMatch) {
        const parsedDirect = moment(
            directMatch[0],
            "YYYY-MM-DD",
            true
        );

        return parsedDirect.isValid()
            ? parsedDirect.format("YYYY-MM-DD")
            : null;
    }

    const parsed = moment(value);
    return parsed.isValid() ? parsed.format("YYYY-MM-DD") : null;
}

function diffDays(fromIso, toIso) {
    const from = moment(fromIso, "YYYY-MM-DD", true);
    const to = moment(toIso, "YYYY-MM-DD", true);

    if (!from.isValid() || !to.isValid()) return 0;

    return to.diff(from, "days");
}

function getLevelText(level) {
    return level === null || level === undefined
        ? "未评级"
        : `${level}级`;
}

function getLevelOptionText(level) {
    const option = LEVEL_OPTIONS.find(
        item => item.val === (level ?? -1)
    );

    return option?.detail ?? option?.text ?? "暂未评级";
}

function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

/* 根据当前复习模式、题目等级和降级状态动态计算间隔 */
function getReviewIntervalDays(level, regressed = false) {
    const schedules = CONFIG.reviewSchedules ?? {};
    const normalSchedule = Array.isArray(schedules.normal)
        ? schedules.normal
        : [0, 1, 3, 7, 14, 30];
    const selectedSchedule = Array.isArray(schedules[CONFIG.reviewMode])
        ? schedules[CONFIG.reviewMode]
        : normalSchedule;

    const configuredDays = Number(selectedSchedule[level]);
    const fallbackDays = Number(normalSchedule[level]);
    const baseDays = Number.isFinite(configuredDays)
        ? Math.max(0, Math.round(configuredDays))
        : Math.max(0, Math.round(fallbackDays || 0));

    if (!regressed || baseDays === 0) {
        return baseDays;
    }

    const configuredFactor = Number(CONFIG.regressedReviewFactor);
    const factor = Number.isFinite(configuredFactor)
        ? Math.min(1, Math.max(0.1, configuredFactor))
        : 0.5;

    return Math.max(1, Math.ceil(baseDays * factor));
}

function isLegacyRegressionNotice(value) {
    return String(value ?? "").includes("降级警告");
}

function removeLegacyRegressionNoticeFromFrontmatter(frontmatter) {
    let removed = false;

    for (const key of ["Notice", "notice"]) {
        if (isLegacyRegressionNotice(frontmatter[key])) {
            delete frontmatter[key];
            removed = true;
        }
    }

    return removed;
}

/**
 * 只把嵌入别名/替代文字中的独立“题目”字段视为题目标记。
 * 支持 |题目、|宽度|题目、|题目|宽度；不会因文件名含“题目”而误判。
 */
function embedHasQuestionMarker(embed) {
    const marker = QUESTION_MARKER;
    if (!marker) return false;

    const hasMarkerToken = value => String(value ?? "")
        .split("|")
        .some(token => token.trim() === marker);

    const original = String(embed?.original ?? "").trim();
    if (!original) return hasMarkerToken(embed?.displayText);

    /* 标准 Markdown 图片：![题目](image.png) */
    const markdownMatch = original.match(/^!\[([^\]]*)\]\s*\(/);
    if (markdownMatch) return hasMarkerToken(markdownMatch[1]);

    /* Wiki 嵌入；CachedMetadata.original 可能含或不含 ![[...]] 外壳。 */
    const wikiMatch = original.match(/^!?\[\[([\s\S]*)\]\]$/);
    const inner = wikiMatch ? wikiMatch[1] : original;
    const parts = inner.split("|");

    return parts.length > 1 &&
        parts.slice(1).some(token => token.trim() === marker);
}

function isImageFile(file) {
    return Boolean(
        file &&
        typeof file.extension === "string" &&
        IMAGE_EXTENSIONS.has(file.extension.toLowerCase())
    );
}

/* ================================================================
 * 3. Daily Notes + Tasks（与 question-recommender 一致）
 * ================================================================ */

function getDailyNotePath(isoDate) {
    const date = moment(isoDate, "YYYY-MM-DD", true);

    if (!date.isValid()) {
        throw new Error(`无效复习日期：${isoDate}`);
    }

    const formattedName = date.format(CONFIG.dailyNoteFormat);
    const folder = normalizeVaultPath(CONFIG.dailyNoteFolder);
    const relativePath = folder
        ? `${folder}/${formattedName}`
        : formattedName;

    return `${normalizeVaultPath(relativePath)}.md`;
}

async function ensureParentFolders(filePath) {
    const folderParts = normalizeVaultPath(filePath)
        .split("/")
        .slice(0, -1);

    let currentPath = "";

    for (const part of folderParts) {
        currentPath = currentPath
            ? `${currentPath}/${part}`
            : part;

        const existing = app.vault.getAbstractFileByPath(currentPath);

        if (!existing) {
            await app.vault.createFolder(currentPath);
            continue;
        }

        if (!Array.isArray(existing.children)) {
            throw new Error(`${currentPath} 已被同名文件占用`);
        }
    }
}

function isTemplaterEnabled() {
    const pluginId = "templater-obsidian";

    return Boolean(
        app.plugins?.getPlugin?.(pluginId) ??
        app.plugins?.plugins?.[pluginId]
    );
}

async function waitForTemplaterTemplate(dailyFile) {
    if (!isTemplaterEnabled()) {
        return false;
    }

    const timeoutMs = Math.max(
        0,
        Number(CONFIG.templaterWaitTimeoutMs) || 0
    );
    const pollIntervalMs = Math.max(
        50,
        Number(CONFIG.templaterPollIntervalMs) || 100
    );
    const stableTimeMs = Math.max(
        pollIntervalMs,
        Number(CONFIG.templaterStableTimeMs) || 300
    );

    const deadline = Date.now() + timeoutMs;
    let lastContent = "";
    let lastChangedAt = Date.now();

    while (Date.now() <= deadline) {
        const content = await app.vault.read(dailyFile);

        if (content !== lastContent) {
            lastContent = content;
            lastChangedAt = Date.now();
        }

        if (
            content.trim() !== "" &&
            Date.now() - lastChangedAt >= stableTimeMs
        ) {
            return true;
        }

        await wait(pollIntervalMs);
    }

    return false;
}

async function getOrCreateDailyNote(isoDate) {
    const dailyPath = getDailyNotePath(isoDate);
    const existing = app.vault.getAbstractFileByPath(dailyPath);

    if (existing) {
        if (existing.extension !== "md") {
            throw new Error(`${dailyPath} 不是 Markdown 文件`);
        }

        return existing;
    }

    await ensureParentFolders(dailyPath);

    /* 必须创建空文件，让 Templater 的文件夹模板有机会执行 */
    const dailyFile = await app.vault.create(dailyPath, "");

    await waitForTemplaterTemplate(dailyFile);

    return dailyFile;
}

function getReviewTaskIdentity(sourceFile) {
    const linkPath = sourceFile.path.replace(/\.md$/i, "");

    return (
        `${CONFIG.reviewTaskPrefix} ` +
        `[[${linkPath}|${sourceFile.basename}]]`
    );
}

function isOpenTaskLine(line) {
    return /^\s*[-*+]\s+\[ \]\s+/.test(line);
}

function extractTaskDate(line, emoji) {
    const escapedEmoji = String(emoji)
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(
        `${escapedEmoji}\\s*(\\d{4}-\\d{2}-\\d{2})`
    );

    return line.match(regex)?.[1] ?? null;
}

function removeLegacyDateHeading(content, isoDate) {
    const lines = String(content ?? "").split(/\r?\n/);

    const firstContentIndex = lines.findIndex(
        line => line.trim() !== ""
    );

    if (
        firstContentIndex < 0 ||
        lines[firstContentIndex].trim() !== `# ${isoDate}`
    ) {
        return String(content ?? "");
    }

    lines.splice(firstContentIndex, 1);

    if (
        firstContentIndex < lines.length &&
        lines[firstContentIndex].trim() === ""
    ) {
        lines.splice(firstContentIndex, 1);
    }

    return lines.join("\n");
}

function buildReviewTaskLine({
    sourceFile,
    reviewDate,
    level,
    peakLevel,
    createdDate = localDate()
}) {
    const globalFilter = String(CONFIG.tasksGlobalFilter ?? "").trim();
    const descriptionParts = [];

    if (globalFilter) descriptionParts.push(globalFilter);

    descriptionParts.push(
        getReviewTaskIdentity(sourceFile),
        `（当前${getLevelText(level)}｜峰值${getLevelText(peakLevel)}）`
    );

    return [
        "- [ ]",
        descriptionParts.join(" "),
        "🔺",
        `➕ ${createdDate}`,
        `🛫 ${createdDate}`,
        `⏳ ${reviewDate}`,
        `📅 ${reviewDate}`
    ].join(" ");
}

async function upsertReviewTask({
    sourceFile,
    reviewDate,
    level,
    peakLevel
}) {
    const dailyFile = await getOrCreateDailyNote(reviewDate);
    const identity = getReviewTaskIdentity(sourceFile);

    await app.vault.process(dailyFile, originalContent => {
        const cleanedContent = removeLegacyDateHeading(
            originalContent,
            reviewDate
        );

        const lines = cleanedContent.split(/\r?\n/);
        const matchedIndexes = [];

        for (let index = 0; index < lines.length; index++) {
            if (
                lines[index].includes(identity) &&
                isOpenTaskLine(lines[index])
            ) {
                matchedIndexes.push(index);
            }
        }

        if (matchedIndexes.length > 0) {
            const firstIndex = matchedIndexes[0];
            const oldLine = lines[firstIndex];

            const createdDate =
                extractTaskDate(oldLine, "➕") ??
                localDate();

            lines[firstIndex] = buildReviewTaskLine({
                sourceFile,
                reviewDate,
                level,
                peakLevel,
                createdDate
            });

            for (
                let index = matchedIndexes.length - 1;
                index >= 1;
                index--
            ) {
                lines.splice(matchedIndexes[index], 1);
            }

            return lines.join("\n");
        }

        const taskLine = buildReviewTaskLine({
            sourceFile,
            reviewDate,
            level,
            peakLevel,
            createdDate: localDate()
        });

        const wantedHeading = CONFIG.dailyTaskHeading.trim();
        const headingIndex = lines.findIndex(
            line => line.trim() === wantedHeading
        );

        if (headingIndex >= 0) {
            let insertIndex = headingIndex + 1;

            while (
                insertIndex < lines.length &&
                lines[insertIndex].trim() === ""
            ) {
                insertIndex++;
            }

            lines.splice(insertIndex, 0, taskLine);
        } else {
            while (
                lines.length > 0 &&
                lines[lines.length - 1].trim() === ""
            ) {
                lines.pop();
            }

            lines.push(
                "",
                CONFIG.dailyTaskHeading,
                "",
                taskLine,
                ""
            );
        }

        return lines.join("\n");
    });
}

async function removeOpenReviewTask({ sourceFile, reviewDate }) {
    if (!reviewDate) return;

    const dailyPath = getDailyNotePath(reviewDate);
    const dailyFile = app.vault.getAbstractFileByPath(dailyPath);

    if (!dailyFile || dailyFile.extension !== "md") return;

    const identity = getReviewTaskIdentity(sourceFile);

    await app.vault.process(dailyFile, originalContent => {
        const originalLines = originalContent.split(/\r?\n/);

        const newLines = originalLines.filter(line => {
            const isTarget =
                line.includes(identity) &&
                isOpenTaskLine(line);

            return !isTarget;
        });

        return newLines.join("\n");
    });
}

async function syncReviewTask({
    sourceFile,
    oldReviewDate,
    newReviewDate,
    level,
    peakLevel
}) {
    const oldDate = normalizeIsoDate(oldReviewDate);
    const newDate = normalizeIsoDate(newReviewDate);

    if (oldDate && oldDate !== newDate) {
        await removeOpenReviewTask({
            sourceFile,
            reviewDate: oldDate
        });
    }

    if (!newDate) return;

    await upsertReviewTask({
        sourceFile,
        reviewDate: newDate,
        level,
        peakLevel
    });
}/* ================================================================
 * 4. 题目扫描
 * ================================================================ */

function getQuestionImageFiles(
    page,
    knownSourceFile,
    maxResults = Number.POSITIVE_INFINITY
) {
    const sourceFile = knownSourceFile === undefined
        ? app.vault.getAbstractFileByPath(page.file.path)
        : knownSourceFile;

    if (!sourceFile || sourceFile.extension !== "md") {
        return [];
    }

    const cache = app.metadataCache.getFileCache(sourceFile);
    const embeds = cache?.embeds ?? [];
    const result = [];
    const visitedPaths = new Set();

    for (const embed of embeds) {
        if (!embedHasQuestionMarker(embed)) {
            continue;
        }

        const targetFile = app.metadataCache.getFirstLinkpathDest(
            embed.link,
            sourceFile.path
        );

        if (
            !isImageFile(targetFile) ||
            visitedPaths.has(targetFile.path)
        ) {
            continue;
        }

        visitedPaths.add(targetFile.path);
        result.push(targetFile);

        if (result.length >= maxResults) break;
    }

    return result;
}

function detectSubject(page) {
    const pageTagKeys = getPageTagKeys(page);

    for (const matcher of SUBJECT_MATCHERS) {
        const hitSubject = matcher.tagRootKeys.some(requiredKey => (
            pageTagKeys.some(candidateKey => (
                candidateKey === requiredKey ||
                candidateKey.startsWith(`${requiredKey}/`)
            ))
        ));

        if (hitSubject) return matcher.subject;
    }

    return null;
}

function buildItem(page, context = {}) {
    const sourceFile = context.sourceFile === undefined
        ? app.vault.getAbstractFileByPath(page.file.path)
        : context.sourceFile;
    const level = parseLevel(page.level);
    const peakLevel = parseLevel(page.peak_level) ?? level;
    const regressed =
        isTrue(page.regressed) ||
        (level !== null && peakLevel !== null && level < peakLevel);
    const nextReview = context.nextReview === undefined
        ? normalizeIsoDate(page.next_review)
        : context.nextReview;
    const today = context.today ?? localDate();
    const overdueDays =
        nextReview && nextReview < today
            ? diffDays(nextReview, today)
            : 0;

    return {
        page,
        sourceFile,
        imageFiles: getQuestionImageFiles(page, sourceFile, 2),
        level,
        peakLevel,
        regressed,
        nextReview,
        overdueDays,
        isOverdue: overdueDays > 0,
        isDueToday: nextReview === today,
        reviewCount: parseNonNegativeInteger(page.review_count),
        lastReviewed: page.last_reviewed
            ? String(page.last_reviewed)
            : null,
        subject: detectSubject(page)
    };
}

function scanDueQuestions() {
    let pages;

    try {
        pages = Array.from(dv.pages());
    } catch (error) {
        console.error("今日复习面板读取全库失败：", error);
        return { error: new Error("Dataview 无法读取全库页面") };
    }

    const today = localDate();
    const items = [];

    for (const page of pages) {
        const pagePath = normalizeVaultPath(page?.file?.path);
        if (!pagePath) continue;

        const nextReview = normalizeIsoDate(page.next_review);

        if (!nextReview || nextReview > today) continue;

        const sourceFile = app.vault.getAbstractFileByPath(page.file.path);
        const item = buildItem(page, {
            sourceFile,
            nextReview,
            today
        });

        if (item.imageFiles.length === 0) continue;

        items.push(item);
    }

    items.sort((a, b) => {
        const overdueDifference = b.overdueDays - a.overdueDays;

        if (overdueDifference !== 0) {
            return overdueDifference;
        }

        const regressedDifference =
            Number(b.regressed) - Number(a.regressed);

        if (regressedDifference !== 0) {
            return regressedDifference;
        }

        const subjectIndexA = a.subject
            ? (SUBJECT_INDEX_BY_ID.get(a.subject.id) ?? 999)
            : 999;
        const subjectIndexB = b.subject
            ? (SUBJECT_INDEX_BY_ID.get(b.subject.id) ?? 999)
            : 999;

        if (subjectIndexA !== subjectIndexB) {
            return subjectIndexA - subjectIndexB;
        }

        return a.page.file.name.localeCompare(
            b.page.file.name,
            "zh-CN",
            { numeric: true }
        );
    });

    return { items };
}/* ================================================================
 * 5. 界面
 * ================================================================ */

const rootEl = viewDocument.createElement("div");
rootEl.className = "dr-root";
dv.container.appendChild(rootEl);

let filterMode = "all"; // "all" | "overdue" | "regressed"
let items = [];

function getRenderState() {
    const counts = {
        total: items.length,
        overdue: 0,
        regressed: 0,
        maxOverdueDays: 0
    };
    const displayedItems = [];

    for (const item of items) {
        if (item.isOverdue) counts.overdue++;
        if (item.regressed) counts.regressed++;
        counts.maxOverdueDays = Math.max(
            counts.maxOverdueDays,
            item.overdueDays
        );

        const isDisplayed =
            filterMode === "all" ||
            (filterMode === "overdue" && item.isOverdue) ||
            (filterMode === "regressed" && item.regressed);

        if (
            isDisplayed &&
            displayedItems.length < CONFIG.maxResults
        ) {
            displayedItems.push(item);
        }
    }

    return { counts, displayedItems };
}

function createSubjectChip(subject) {
    const spanEl = viewDocument.createElement("span");
    spanEl.className = "dr-subject-chip";

    if (!subject) {
        spanEl.textContent = "其他";
        spanEl.dataset.status = "other";
        return spanEl;
    }

    spanEl.textContent = subject.label;
    spanEl.style.borderColor = subject.color;
    spanEl.style.color = subject.color;
    spanEl.dataset.status = "subject";
    return spanEl;
}

function createDueText(item) {
    const spanEl = viewDocument.createElement("span");
    spanEl.className = "dr-due-text";

    if (item.isOverdue) {
        spanEl.dataset.status = "overdue";
        spanEl.textContent =
            `${item.nextReview} · 逾期 ${item.overdueDays} 天`;
    } else {
        spanEl.dataset.status = "today";
        spanEl.textContent = `${item.nextReview} · 今天到期`;
    }

    return spanEl;
}

function createStatusText(item) {
    const wrapEl = viewDocument.createElement("div");
    wrapEl.className = "dr-status-text";

    const levelEl = viewDocument.createElement("span");
    levelEl.className = "dr-level-text";
    levelEl.textContent = getLevelText(item.level);

    wrapEl.appendChild(levelEl);

    if (item.regressed) {
        const badgeEl = viewDocument.createElement("span");
        badgeEl.className = "dr-regression-badge";
        const message =
            item.peakLevel !== null && item.level !== null
                ? `⚠ 待恢复：峰值${item.peakLevel}级`
                : "⚠ 降级弱点题";
        badgeEl.textContent = message;
        badgeEl.title = message;
        wrapEl.appendChild(badgeEl);
    }

    if (item.reviewCount > 0) {
        const countEl = viewDocument.createElement("span");
        countEl.className = "dr-review-count";
        countEl.textContent = `已复习 ${item.reviewCount} 次`;
        wrapEl.appendChild(countEl);
    }

    return wrapEl;
}

function createImagePreview(item) {
    const wrapEl = viewDocument.createElement("div");
    wrapEl.className = "dr-image-preview";

    for (const imageFile of item.imageFiles.slice(0, 2)) {
        const imageEl = viewDocument.createElement("img");
        imageEl.className = "dr-image";
        imageEl.loading = "lazy";
        imageEl.alt = `${item.page.file.name} · ${imageFile.name}`;
        imageEl.addEventListener("error", () => {
            const placeholderEl = viewDocument.createElement("span");
            placeholderEl.className = "dr-image-placeholder";
            placeholderEl.textContent = "题图加载失败";
            imageEl.replaceWith(placeholderEl);
        }, { once: true });

        imageEl.src = app.vault.getResourcePath(imageFile);
        wrapEl.appendChild(imageEl);
    }

    return wrapEl;
}

function createQuestionLink(item) {
    const linkEl = viewDocument.createElement("a");
    linkEl.className = "internal-link dr-question-link";
    linkEl.href = item.page.file.path;
    linkEl.dataset.href = item.page.file.path;
    linkEl.textContent = item.page.file.name;
    return linkEl;
}

function createLevelControl(item) {
    let currentLevel = item.level;

    const wrapper = viewDocument.createElement("div");
    wrapper.className = "dr-level-wrapper";

    const selectEl = viewDocument.createElement("select");
    selectEl.className = "dr-level-select";
    selectEl.title = getLevelOptionText(currentLevel);

    for (const option of LEVEL_OPTIONS) {
        const optionEl = viewDocument.createElement("option");
        optionEl.value = String(option.val);
        optionEl.textContent = option.text;

        if (option.val === (currentLevel ?? -1)) {
            optionEl.selected = true;
        }

        selectEl.appendChild(optionEl);
    }

    selectEl.addEventListener("change", async () => {
        const newLevel = Number(selectEl.value);
        const oldUiLevel = currentLevel;

        if (newLevel === (currentLevel ?? -1)) return;

        const targetFile = app.vault.getAbstractFileByPath(
            item.page.file.path
        );

        if (!targetFile || targetFile.extension !== "md") {
            selectEl.value = String(oldUiLevel ?? -1);
            new Notice("❌ 无法定位对应题目笔记。");
            return;
        }

        selectEl.disabled = true;
        let updateResult = null;

        try {
            const reviewTime = localDateTime();

            await app.fileManager.processFrontMatter(
                targetFile,
                frontmatter => {
                    const storedLevel = parseLevel(frontmatter.level);
                    const storedPeak = parseLevel(frontmatter.peak_level);
                    const oldNextReview = normalizeIsoDate(
                        frontmatter.next_review
                    );

                    removeLegacyRegressionNoticeFromFrontmatter(
                        frontmatter
                    );

                    if (newLevel === -1) {
                        delete frontmatter.level;
                        delete frontmatter.previous_level;
                        delete frontmatter.regressed;
                        delete frontmatter.regressed_from;
                        delete frontmatter.next_review;

                        updateResult = {
                            cleared: true,
                            oldNextReview,
                            newNextReview: null,
                            peakAfter: storedPeak,
                            newLevel: null,
                            reviewIntervalDays: 0
                        };

                        return;
                    }

                    const peakBefore = Math.max(
                        storedPeak ?? -1,
                        storedLevel ?? -1
                    );

                    const regressed =
                        peakBefore >= 0 &&
                        newLevel < peakBefore;

                    if (storedLevel === null) {
                        delete frontmatter.previous_level;
                    } else {
                        frontmatter.previous_level = storedLevel;
                    }

                    frontmatter.level = newLevel;

                    const peakAfter = Math.max(
                        peakBefore,
                        newLevel
                    );

                    frontmatter.peak_level = peakAfter;

                    frontmatter.review_count =
                        parseNonNegativeInteger(frontmatter.review_count) + 1;

                    frontmatter.last_reviewed = reviewTime;

                    const reviewIntervalDays = getReviewIntervalDays(
                        newLevel,
                        regressed
                    );
                    const newNextReview = localDateAfter(
                        reviewIntervalDays
                    );

                    frontmatter.next_review = newNextReview;

                    if (regressed) {
                        frontmatter.regressed = true;
                        frontmatter.regressed_from = peakBefore;
                    } else {
                        delete frontmatter.regressed;
                        delete frontmatter.regressed_from;
                    }

                    let history = [];

                    if (Array.isArray(frontmatter.level_history)) {
                        history = [...frontmatter.level_history];
                    } else if (frontmatter.level_history) {
                        history = [String(frontmatter.level_history)];
                    }

                    history.push(
                        `${reviewTime} | ` +
                        `${storedLevel ?? "未评级"} → ${newLevel}`
                    );

                    frontmatter.level_history = history.slice(-20);

                    updateResult = {
                        cleared: false,
                        regressed,
                        peakBefore,
                        peakAfter,
                        newLevel,
                        oldNextReview,
                        newNextReview,
                        reviewIntervalDays
                    };
                }
            );

            currentLevel = newLevel === -1 ? null : newLevel;
            selectEl.title = getLevelOptionText(currentLevel);

            item.level = updateResult?.newLevel ?? null;
            item.peakLevel = updateResult?.peakAfter ?? null;
            item.regressed = Boolean(updateResult?.regressed);
            item.nextReview = updateResult?.newNextReview ?? null;
            item.isOverdue = false;
            item.isDueToday = false;
            if (!updateResult?.cleared) {
                item.reviewCount += 1;
            }

            try {
                await syncReviewTask({
                    sourceFile: targetFile,
                    oldReviewDate: updateResult?.oldNextReview,
                    newReviewDate: updateResult?.newNextReview,
                    level: updateResult?.newLevel,
                    peakLevel: updateResult?.peakAfter
                });
            } catch (taskError) {
                console.error("Tasks 同步失败：", taskError);
                new Notice(
                    "⚠️ 等级已更新，但复习任务同步失败。",
                    6000
                );
            }

            if (updateResult?.cleared) {
                new Notice("🧹 已清除评级和未完成复习任务。");
            } else if (updateResult?.regressed) {
                new Notice(
                    `⚠️ 降级：峰值${updateResult.peakBefore}级 → ` +
                    `${updateResult.newLevel}级；下次复习 ` +
                    `${updateResult.newNextReview}（间隔` +
                    `${updateResult.reviewIntervalDays}天）。`,
                    5000
                );
            } else {
                new Notice(
                    `✅ 已更新为${updateResult.newLevel}级，下次复习 ` +
                    `${updateResult.newNextReview}（间隔` +
                    `${updateResult.reviewIntervalDays}天）。`,
                    4000
                );
            }

            /* 已刷完的题目（下次复习在未来）从今天面板移除 */
            const today = localDate();
            items = items.filter(entry => {
                if (entry.page.file.path !== item.page.file.path) {
                    return true;
                }

                return Boolean(entry.nextReview) &&
                    entry.nextReview <= today;
            });

            render();
        } catch (error) {
            console.error("评级写入失败：", error);
            selectEl.value = String(oldUiLevel ?? -1);
            selectEl.title = getLevelOptionText(oldUiLevel);

            new Notice("❌ 评级写入失败，已恢复原选项。", 5000);
        } finally {
            selectEl.disabled = false;
        }
    });

    wrapper.appendChild(selectEl);
    return wrapper;
}

function render(options = {}) {
    if (options.rescan !== false) {
        const scanResult = scanDueQuestions();

        if (scanResult.error) {
            rootEl.replaceChildren();

            const errorEl = viewDocument.createElement("p");
            errorEl.className = "dr-error";
            errorEl.textContent = `❌ ${scanResult.error.message}`;
            rootEl.appendChild(errorEl);
            return;
        }

        items = scanResult.items;
    }
    const { counts, displayedItems } = getRenderState();

    /* 头部 */
    const headerEl = viewDocument.createElement("div");
    headerEl.className = "dr-header";

    const titleEl = viewDocument.createElement("h3");
    titleEl.className = "dr-title";
    titleEl.textContent = `📋 今日复习面板 · ${localDate()}`;

    const descriptionEl = viewDocument.createElement("p");
    descriptionEl.className = "dr-description";
    descriptionEl.textContent =
        "今天到期（含逾期）的题目都在这里；直接在下拉框评级，" +
        "脚本会自动更新 next_review 并在对应日记里同步 Tasks 复习任务。";

    headerEl.appendChild(titleEl);
    headerEl.appendChild(descriptionEl);

    /* 汇总 chips */
    const summaryEl = viewDocument.createElement("div");
    summaryEl.className = "dr-summary";

    const chips = [
        { label: "今日待复习", value: String(counts.total) },
        { label: "其中逾期", value: String(counts.overdue) },
        { label: "降级题", value: String(counts.regressed) },
        { label: "最高逾期", value: counts.maxOverdueDays > 0
            ? `${counts.maxOverdueDays} 天`
            : "无" }
    ];

    for (const chip of chips) {
        const chipEl = viewDocument.createElement("span");
        chipEl.className = "dr-chip";

        const labelEl = viewDocument.createElement("span");
        labelEl.className = "dr-chip-label";
        labelEl.textContent = chip.label;

        const valueEl = viewDocument.createElement("span");
        valueEl.className = "dr-chip-value";
        valueEl.textContent = chip.value;

        chipEl.append(labelEl, valueEl);
        summaryEl.appendChild(chipEl);
    }

    /* 筛选栏 */
    const controlsEl = viewDocument.createElement("div");
    controlsEl.className = "dr-controls";

    const filterOptions = [
        { id: "all", label: `全部（${counts.total}）` },
        { id: "overdue", label: `仅逾期（${counts.overdue}）` },
        { id: "regressed", label: `仅降级（${counts.regressed}）` }
    ];

    for (const option of filterOptions) {
        const buttonEl = viewDocument.createElement("button");
        buttonEl.type = "button";
        buttonEl.className = "dr-filter-button";
        buttonEl.dataset.filter = option.id;
        buttonEl.textContent = option.label;

        if (option.id === filterMode) {
            buttonEl.classList.add("is-active");
        }

        buttonEl.addEventListener("click", () => {
            filterMode = option.id;
            render();
        });

        controlsEl.appendChild(buttonEl);
    }

    if (counts.total === 0) {
        const emptyEl = viewDocument.createElement("div");
        emptyEl.className = "dr-empty";
        emptyEl.textContent =
            "🎉 今天没有到期的题目，去刷新题或休息一下吧。";

        rootEl.replaceChildren(
            headerEl,
            summaryEl,
            controlsEl,
            emptyEl
        );
        return;
    }

    /* 表格 */
    const tableWrapEl = viewDocument.createElement("div");
    tableWrapEl.className = "dr-table-wrap";

    const tableEl = viewDocument.createElement("table");
    tableEl.className = "dr-table";

    const thead = viewDocument.createElement("thead");
    const headRow = viewDocument.createElement("tr");

    for (const heading of ["题图", "题目", "科目", "到期", "状态", "评级"]) {
        const th = viewDocument.createElement("th");
        th.textContent = heading;
        headRow.appendChild(th);
    }

    thead.appendChild(headRow);
    tableEl.appendChild(thead);

    const tbody = viewDocument.createElement("tbody");

    for (const item of displayedItems) {
        const tr = viewDocument.createElement("tr");

        const imageTd = viewDocument.createElement("td");
        imageTd.className = "dr-image-cell";
        imageTd.appendChild(createImagePreview(item));

        const linkTd = viewDocument.createElement("td");
        linkTd.appendChild(createQuestionLink(item));

        const subjectTd = viewDocument.createElement("td");
        subjectTd.appendChild(createSubjectChip(item.subject));

        const dueTd = viewDocument.createElement("td");
        dueTd.appendChild(createDueText(item));

        const statusTd = viewDocument.createElement("td");
        statusTd.appendChild(createStatusText(item));

        const levelTd = viewDocument.createElement("td");
        levelTd.appendChild(createLevelControl(item));

        tr.append(
            imageTd, linkTd, subjectTd, dueTd, statusTd, levelTd
        );
        tbody.appendChild(tr);
    }

    tableEl.appendChild(tbody);
    tableWrapEl.appendChild(tableEl);

    rootEl.replaceChildren(
        headerEl,
        summaryEl,
        controlsEl,
        tableWrapEl
    );
}

render();
