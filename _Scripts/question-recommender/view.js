/******************************************************************
 * Obsidian 全库同类题推荐系统 V12
 * （中文字体修正版，支持层级标签、Templater 与降级题按钮筛选）
 *
 * 1. 在整个仓库中搜索，不限制文件夹
 * 2. 读取当前文件的全部 tags
 * 3. 候选题必须同时属于当前文件全部 tags 的标签树
 * 4. 只显示包含“题目”标记图片的页面
 * 5. 支持六级评级、历史峰值、结构化降级检测
 * 6. 自动生成 next_review
 * 7. 自动生成 Tasks 复习任务
 * 8. 支持在表格上方即时切换“仅看降级题”
 * 9. 不再创建 Notice 降级警告属性
 ******************************************************************/

/* ================================================================
 * 0. 配置
 * ================================================================ */

const CONFIG = {
    questionMarker: "题目",

    maxResults: 100,
    historyLimit: 20,

    /*
     * 复习强度：normal（常规）/ accelerated（加速）/ sprint（冲刺）。
     * 当前默认使用 accelerated；数组下标对应 0～5 级。
     */
    reviewMode: "accelerated",
    reviewSchedules: {
        normal: [0, 1, 3, 7, 14, 30],
        accelerated: [0, 1, 2, 4, 7, 14],
        sprint: [0, 1, 1, 2, 4, 7]
    },

    /* 降级题在当前模式基础上再压缩为 50%，至少间隔 1 天 */
    regressedReviewFactor: 0.5,

    /* 你的日记目录 */
    dailyNoteFolder: "_Daily_Tasks",
    dailyNoteFormat: "YYYY-MM-DD",

    /* 自动任务插入到这个标题下面；没有就自动创建 */
    dailyTaskHeading: "## 自动复习任务",
    reviewTaskPrefix: "复习题目",

    /*
     * 新日记会先以空文件创建，让 Templater 的文件夹模板有机会执行。
     * 脚本检测到模板内容写入并稳定后，才追加自动复习任务。
     *
     * 如果你的模板执行特别慢，可以适当增大 templaterWaitTimeoutMs。
     */
    templaterWaitTimeoutMs: 5000,
    templaterPollIntervalMs: 100,
    templaterStableTimeMs: 300,

    /*
     * 自动删除旧版本生成的 Notice / notice 降级警告属性。
     * 只删除内容中包含“降级警告”的属性，不影响其他同名用途。
     */
    cleanupLegacyRegressionNoticesOnLoad: true,

    /* Tasks 开启了 Global Filter 时填写，例如 "#task" */
    tasksGlobalFilter: "",

    /*
     * 第一次迁移旧任务时临时改成 true：
     * - 清理旧任务里的 %%408-review:...%%
     * - 补建已有 next_review 对应的任务
     * 完成后务必改回 false。
     */
    repairExistingTasksOnLoad: false
};

/* ================================================================
 * 1. 六级分类
 * ================================================================ */

const LEVEL_OPTIONS = [
    {
        val: -1,
        text: "暂未评级",
        detail: "暂未进行六级习题分类"
    },
    {
        val: 0,
        text: "0级｜无法看懂",
        detail: "0级：无法看懂答案思路"
    },
    {
        val: 1,
        text: "1级｜首次看懂",
        detail: "1级：首次看懂答案思路，但还不能独立完成"
    },
    {
        val: 2,
        text: "2级｜模仿做对",
        detail: "2级：需要查看答案或关键提示，模仿着把题做对"
    },
    {
        val: 3,
        text: "3级｜查资料做对",
        detail: "3级：不看答案，只查询公式或知识资料后把题做对"
    },
    {
        val: 4,
        text: "4级｜独立做对",
        detail: "4级：不查找任何资料，闭卷独立把题做对"
    },
    {
        val: 5,
        text: "5级｜熟练掌握",
        detail: "5级：看到题目就知道完整解题流程，已经熟练掌握"
    }
];

/* view.css 会由 dv.view() 自动加载 */
dv.container.classList.add("question-recommend-view");

/* ================================================================
 * 2. 通用函数
 * ================================================================ */

const currentFile = dv.current();

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

function normalizeTag(tag) {
    const value = String(tag ?? "").trim();
    if (!value) return "";
    return value.startsWith("#") ? value : `#${value}`;
}

/* 标签比较忽略大小写，并移除末尾多余的斜杠 */
function tagKey(tag) {
    return normalizeTag(tag)
        .replace(/\/+$/g, "")
        .toLocaleLowerCase();
}

/**
 * 判断候选标签是否等于目标标签，或属于目标标签的任意层级子标签。
 *
 * required:  #27_ep
 * candidate: #27_ep                  -> true
 * candidate: #27_ep/大雪深埋        -> true
 * candidate: #27_ep/大雪深埋/一阶   -> true
 * candidate: #27_ep2                 -> false
 * candidate: #27_ep_other            -> false
 *
 * 使用 `${required}/` 作为前缀，可以避免把 #27_ep2
 * 错误识别成 #27_ep 的子标签。
 */
function isSameTagOrDescendant(candidate, required) {
    const candidateKey = tagKey(candidate);
    const requiredKey = tagKey(required);

    return (
        candidateKey === requiredKey ||
        candidateKey.startsWith(`${requiredKey}/`)
    );
}

/**
 * 读取页面的全部真实标签。
 *
 * - page.tags：属性面板 / YAML 中显式填写的 tags
 * - file.etags：正文中的精确标签（不展开父级标签）
 *
 * 不使用 file.tags，避免 #a/b 被额外展开为 #a，
 * 从而制造并不存在于属性中的匹配条件。
 */
function getPageTags(page) {
    const rawTags = [
        ...asArray(page.tags),
        ...asArray(page.file?.etags)
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

function parseLevel(value) {
    if (value === undefined || value === null || value === "") {
        return null;
    }

    const parsed = Number(value);

    if (!Number.isInteger(parsed) || parsed < 0 || parsed > 5) {
        return null;
    }

    return parsed;
}

/**
 * 根据当前复习模式、题目等级和降级状态动态计算间隔。
 * 0 级始终安排在当天；降级题会进一步缩短非零间隔。
 */
function getReviewIntervalDays(level, regressed = false) {
    const schedules = CONFIG.reviewSchedules ?? {};
    const normalSchedule = Array.isArray(schedules.normal)
        ? schedules.normal
        : [0, 1, 3, 7, 14, 30];
    const selectedSchedule = Array.isArray(
        schedules[CONFIG.reviewMode]
    )
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

function isTrue(value) {
    return value === true || String(value).toLowerCase() === "true";
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

function normalizeVaultPath(path) {
    return String(path ?? "")
        .replace(/\\/g, "/")
        .replace(/\/+/g, "/")
        .replace(/^\/+|\/+$/g, "");
}

function normalizeIsoDate(value) {
    if (value === undefined || value === null || value === "") {
        return null;
    }

    if (value instanceof Date) {
        return [
            value.getFullYear(),
            "-",
            pad2(value.getMonth() + 1),
            "-",
            pad2(value.getDate())
        ].join("");
    }

    if (value && typeof value.toISODate === "function") {
        return value.toISODate();
    }

    const text = String(value);
    const directMatch = text.match(/\d{4}-\d{2}-\d{2}/);

    if (directMatch) return directMatch[0];

    const parsed = moment(value);
    return parsed.isValid() ? parsed.format("YYYY-MM-DD") : null;
}

function getLevelText(level) {
    return level === null || level === undefined ? "未评级" : `${level}级`;
}

function getLevelOptionText(level) {
    const option = LEVEL_OPTIONS.find(
        item => item.val === (level ?? -1)
    );

    return option?.detail ?? option?.text ?? "暂未评级";
}

function isLegacyRegressionNotice(value) {
    return String(value ?? "").includes("降级警告");
}

/**
 * 删除旧版脚本生成的 Notice 降级警告。
 * 返回是否实际删除了属性。
 */
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

function wait(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

/* ================================================================
 * 3. Daily Notes + Tasks
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

/**
 * 等待 Templater 完成文件夹模板写入。
 *
 * Templater 监听新建空文件事件。文件出现非空内容后，
 * 还会再等待一小段稳定时间，避免我们过早写入任务，
 * 与 Templater 的异步修改互相覆盖。
 */
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

    /*
     * 必须创建空文件：
     * Templater 的 Folder templates 只会接管新建的空文件。
     * 旧版直接写入 "# 日期" 和任务标题，导致模板无法触发。
     */
    const dailyFile = await app.vault.create(dailyPath, "");

    /*
     * 等待 Templater 写入 tasks dashboard。
     * 若 Templater 未启用、没有匹配规则或执行超时，
     * 后续仍会正常追加自动复习任务，不会阻断评级流程。
     */
    await waitForTemplaterTemplate(dailyFile);

    return dailyFile;
}

/* 不使用 %%隐藏标记%%，用任务前缀 + 完整题目链接识别任务 */
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

/**
 * 清理 V8 及更早版本自动生成的日期一级标题。
 *
 * 只删除日记开头与文件日期完全一致的 "# YYYY-MM-DD"，
 * 不会处理模板中的其他标题。
 */
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

/*
 * 创建日期、开始日期：任务实际创建当天
 * 计划日期、截止日期：next_review
 * 🔺：Highest
 */
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
        /*
         * 先清理旧版脚本留下的 "# 日期"，再处理任务。
         * 新建日记则保留 Templater 已写入的完整 dashboard。
         */
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

async function removeOpenReviewTask({
    sourceFile,
    reviewDate
}) {
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
}

/* ================================================================
 * 4. 当前文件标签
 *
 * 层级标签 AND 逻辑：
 * 当前文件有几个 tags，候选题必须分别命中每一棵标签树。
 * “命中”包括标签本身，以及该标签下任意深度的子标签。
 *
 * 例如当前文件：#AM、#27_ep
 * - 候选题：#AM、#27_ep                         -> 匹配
 * - 候选题：#AM、#27_ep/大雪深埋               -> 匹配
 * - 候选题：#AM/高数、#27_ep/大雪深埋/一阶方程 -> 匹配
 * - 候选题：#AM                                 -> 不匹配
 * - 候选题：#27_ep/大雪深埋                     -> 不匹配（缺少 AM）
 *
 * 当前文件只有 #27_ep 时，#27_ep/... 无论有多少级都能匹配。
 * ================================================================ */

const currentTags = getPageTags(currentFile);

if (currentTags.length === 0) {
    dv.paragraph("💡 **提示**：当前专题笔记没有 tags，无法推荐同类题。");
    return;
}


/* ================================================================
 * 5. 查询整个仓库
 * ================================================================ */

let candidatePages;

try {
    candidatePages = Array.from(dv.pages());
} catch (error) {
    console.error("Dataview 全库查询失败：", error);
    dv.paragraph("❌ Dataview 无法读取仓库页面。");
    return;
}

candidatePages = candidatePages.filter(
    page => page.file.path !== currentFile.file.path
);

/* ================================================================
 * 6. 获取题目图片
 * ================================================================ */

function getQuestionImages(page) {
    const sourceFile = app.vault.getAbstractFileByPath(page.file.path);

    if (!sourceFile || sourceFile.extension !== "md") {
        return [];
    }

    const cache = app.metadataCache.getFileCache(sourceFile);
    const embeds = cache?.embeds ?? [];

    const result = [];
    const visitedPaths = new Set();

    for (const embed of embeds) {
        const markerText = [
            embed.original ?? "",
            embed.displayText ?? "",
            embed.link ?? ""
        ].join(" ");

        if (!markerText.includes(CONFIG.questionMarker)) {
            continue;
        }

        const targetFile = app.metadataCache.getFirstLinkpathDest(
            embed.link,
            sourceFile.path
        );

        if (!targetFile || visitedPaths.has(targetFile.path)) {
            continue;
        }

        visitedPaths.add(targetFile.path);
        result.push(dv.fileLink(targetFile.path, true));
    }

    return result;
}

/* ================================================================
 * 7. 筛选与构建题目数据
 * ================================================================ */

let items = candidatePages
    .map(page => {
        const pageTags = getPageTags(page);

        /**
         * 当前文件的每一个标签，都必须在候选页面中找到：
         * 1. 完全相同的标签；或
         * 2. 该标签下任意深度的子标签。
         *
         * 当前 #27_ep 可以匹配：
         * #27_ep
         * #27_ep/大雪深埋
         * #27_ep/大雪深埋/一阶方程/可分离变量
         */
        const matchesAllTags = currentTags.every(
            requiredTag => pageTags.some(
                candidateTag => isSameTagOrDescendant(
                    candidateTag,
                    requiredTag
                )
            )
        );

        return { page, matchesAllTags };
    })
    .filter(item => item.matchesAllTags)
    .map(item => {
        const page = item.page;
        const level = parseLevel(page.level);
        const peakLevel = parseLevel(page.peak_level) ?? level;
        const hasLegacyRegressionNotice =
            isLegacyRegressionNotice(page.Notice) ||
            isLegacyRegressionNotice(page.notice);

        const regressed =
            isTrue(page.regressed) ||
            (
                level !== null &&
                peakLevel !== null &&
                level < peakLevel
            );

        return {
            page,
            images: getQuestionImages(page),
            level,
            peakLevel,
            regressed,
            hasLegacyRegressionNotice,
            nextReview: normalizeIsoDate(page.next_review)
        };
    })
    .filter(item => item.images.length > 0);

/*
 * weak_only 只作为按钮的初始状态。
 * 用户可以在当前视图中随时切换，不再需要修改笔记属性。
 */
let regressionOnly = isTrue(currentFile.weak_only);
let displayedItems = [];
let filterButtonEl = null;
let filterSummaryEl = null;
let filterEmptyEl = null;
let titleEl = null;

items.sort((a, b) => {
    const regressionDifference =
        Number(b.regressed) - Number(a.regressed);

    if (regressionDifference !== 0) {
        return regressionDifference;
    }

    const levelA = a.level ?? -1;
    const levelB = b.level ?? -1;

    if (levelA !== levelB) {
        return levelA - levelB;
    }

    return a.page.file.name.localeCompare(
        b.page.file.name,
        "zh-CN",
        { numeric: true }
    );
});

/**
 * 一次性清理当前筛选结果中旧版生成的 Notice 降级警告属性。
 *
 * 降级状态仍由 regressed、level 和 peak_level 判断，
 * 删除 Notice 不会影响红色“待恢复”提示。
 */
async function cleanupLegacyRegressionNotices(questionItems) {
    let removedCount = 0;

    for (const item of questionItems) {
        if (!item.hasLegacyRegressionNotice) {
            continue;
        }

        const targetFile = app.vault.getAbstractFileByPath(
            item.page.file.path
        );

        if (!targetFile || targetFile.extension !== "md") {
            continue;
        }

        let removed = false;

        await app.fileManager.processFrontMatter(
            targetFile,
            frontmatter => {
                removed =
                    removeLegacyRegressionNoticeFromFrontmatter(
                        frontmatter
                    );
            }
        );

        if (removed) {
            item.hasLegacyRegressionNotice = false;
            removedCount++;
        }
    }

    return removedCount;
}

if (CONFIG.cleanupLegacyRegressionNoticesOnLoad) {
    try {
        const removedNoticeCount =
            await cleanupLegacyRegressionNotices(items);

        if (removedNoticeCount > 0) {
            new Notice(
                `🧹 已移除 ${removedNoticeCount} 道题的旧 Notice 降级警告属性。`,
                4500
            );
        }
    } catch (error) {
        console.error("旧 Notice 属性清理失败：", error);

        new Notice(
            "⚠️ 部分旧 Notice 降级警告属性未能清理。",
            5000
        );
    }
}

/* ================================================================
 * 8. 等级控件
 * ================================================================ */

function createLevelControl(item) {
    let currentLevel = item.level;

    const wrapper = document.createElement("div");
    wrapper.className = "question-level-wrapper";
    item.filterMarker = wrapper;

    const selectEl = document.createElement("select");
    selectEl.className = "question-level-select";
    selectEl.title = getLevelOptionText(currentLevel);

    const badgeEl = document.createElement("span");
    badgeEl.className = "question-regression-badge";

    for (const option of LEVEL_OPTIONS) {
        const optionEl = document.createElement("option");
        optionEl.value = String(option.val);
        optionEl.textContent = option.text;

        if (option.val === (currentLevel ?? -1)) {
            optionEl.selected = true;
        }

        selectEl.appendChild(optionEl);
    }

    function updateBadge(regressed, peakLevel, level) {
        if (!regressed) {
            badgeEl.textContent = "";
            badgeEl.title = "";
            badgeEl.hidden = true;
            return;
        }

        badgeEl.hidden = false;

        const message =
            peakLevel !== null && level !== null
                ? `⚠ 待恢复：峰值${peakLevel}级，当前${level}级`
                : "⚠ 当前属于降级弱点题";

        badgeEl.textContent = message;
        badgeEl.title = message;
    }

    updateBadge(item.regressed, item.peakLevel, item.level);

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

                    /*
                     * V10 不再使用 Notice 表示降级。
                     * 若文件中仍有旧版降级警告，在本次评级时一并删除。
                     */
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
                            newLevel: null
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
                        Math.max(
                            0,
                            Number(frontmatter.review_count) || 0
                        ) + 1;

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

                    frontmatter.level_history = history.slice(
                        -CONFIG.historyLimit
                    );

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

            /*
             * 同步内存中的题目状态，使按钮筛选和题数立即更新。
             */
            item.level = updateResult?.newLevel ?? null;
            item.peakLevel = updateResult?.peakAfter ?? null;
            item.regressed = Boolean(updateResult?.regressed);
            item.nextReview = updateResult?.newNextReview ?? null;
            item.hasLegacyRegressionNotice = false;

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
                updateBadge(false, updateResult.peakAfter, null);
                new Notice("🧹 已清除评级和未完成复习任务。");
            } else if (updateResult?.regressed) {
                updateBadge(
                    true,
                    updateResult.peakBefore,
                    updateResult.newLevel
                );

                new Notice(
                    `⚠️ 发生降级：峰值${updateResult.peakBefore}级，` +
                    `当前${updateResult.newLevel}级；` +
                    `下次复习：${updateResult.newNextReview}` +
                    `（加速间隔${updateResult.reviewIntervalDays}天）。`,
                    5000
                );
            } else {
                updateBadge(
                    false,
                    updateResult.peakAfter,
                    updateResult.newLevel
                );

                new Notice(
                    `✅ 已更新为${updateResult.newLevel}级，` +
                    `下次复习：${updateResult.newNextReview}` +
                    `（间隔${updateResult.reviewIntervalDays}天）。`,
                    4000
                );
            }

            refreshRegressionFilterUI();
        } catch (error) {
            console.error("评级写入失败：", error);
            selectEl.value = String(oldUiLevel ?? -1);
            selectEl.title = getLevelOptionText(oldUiLevel);

            new Notice(
                "❌ 评级写入失败，已恢复原选项。",
                5000
            );
        } finally {
            selectEl.disabled = false;
        }
    });

    wrapper.appendChild(selectEl);
    wrapper.appendChild(badgeEl);

    return wrapper;
}

/* ================================================================
 * 9. 修复旧任务
 * ================================================================ */

async function repairExistingReviewTasks(questionItems) {
    let repairedCount = 0;

    for (const item of questionItems) {
        if (!item.nextReview) continue;

        const sourceFile = app.vault.getAbstractFileByPath(
            item.page.file.path
        );

        if (!sourceFile || sourceFile.extension !== "md") {
            continue;
        }

        await upsertReviewTask({
            sourceFile,
            reviewDate: item.nextReview,
            level: item.level,
            peakLevel: item.peakLevel
        });

        repairedCount++;
    }

    return repairedCount;
}

/* ================================================================
 * 10. 渲染三列表格
 * ================================================================ */

if (items.length === 0) {
    const currentTagText = currentTags.join("、");

    dv.paragraph(
        `✅ 暂时没有找到同时包含 ${currentTagText}，并且带有『题目』图片的页面。`
    );

    return;
}

displayedItems = items.slice(0, CONFIG.maxResults);

const rows = displayedItems.map(item => {
    const imageDisplay =
        item.images.length === 1
            ? item.images[0]
            : item.images;

    const fullQuestionLink = dv.fileLink(
        item.page.file.path,
        false,
        item.page.file.name
    );

    return [
        fullQuestionLink,
        imageDisplay,
        createLevelControl(item)
    ];
});

titleEl = document.createElement("h3");
dv.container.appendChild(titleEl);

const filterBarEl = document.createElement("div");
filterBarEl.className = "question-filter-bar";

filterButtonEl = document.createElement("button");
filterButtonEl.type = "button";
filterButtonEl.className = "question-regression-filter-button";

filterSummaryEl = document.createElement("span");
filterSummaryEl.className = "question-filter-summary";

filterBarEl.appendChild(filterButtonEl);
filterBarEl.appendChild(filterSummaryEl);
dv.container.appendChild(filterBarEl);

filterEmptyEl = document.createElement("div");
filterEmptyEl.className = "question-filter-empty";
filterEmptyEl.textContent = "🎉 当前标签范围内没有待恢复的降级题。";
filterEmptyEl.hidden = true;
dv.container.appendChild(filterEmptyEl);

filterButtonEl.addEventListener("click", () => {
    regressionOnly = !regressionOnly;
    refreshRegressionFilterUI();
});

dv.table(
    ["题目", "题图预览", "状态反馈"],
    rows
);

if (items.length > CONFIG.maxResults) {
    dv.paragraph(
        `ℹ️ 共找到 ${items.length} 道题，` +
        `当前仅展示前 ${CONFIG.maxResults} 道。`
    );
}

/**
 * 即时切换表格行，不重新查询仓库，也不修改题目或专题属性。
 */
function refreshRegressionFilterUI() {
    const totalRegressedCount = items.filter(
        item => item.regressed
    ).length;

    const displayedRegressedCount = displayedItems.filter(
        item => item.regressed
    ).length;

    for (const item of displayedItems) {
        const row = item.filterMarker?.closest("tr");

        if (row) {
            row.hidden =
                regressionOnly &&
                !item.regressed;
        }
    }

    if (titleEl) {
        titleEl.textContent = regressionOnly
            ? `🚨 同类弱点题专项突破 · ${totalRegressedCount}题`
            : `🔗 同类题推荐拓展 · ${items.length}题`;
    }

    if (filterButtonEl) {
        filterButtonEl.classList.toggle(
            "is-active",
            regressionOnly
        );

        filterButtonEl.setAttribute(
            "aria-pressed",
            String(regressionOnly)
        );

        filterButtonEl.textContent = regressionOnly
            ? `🚨 仅看降级题：开（${totalRegressedCount}）`
            : `仅看降级题：关（${totalRegressedCount}）`;

        filterButtonEl.title = regressionOnly
            ? "点击显示全部同类题"
            : "点击只显示当前等级低于历史峰值的题目";
    }

    if (filterSummaryEl) {
        filterSummaryEl.textContent = regressionOnly
            ? `当前显示 ${displayedRegressedCount} 道待恢复题`
            : `当前显示 ${displayedItems.length} 道同类题`;
    }

    if (filterEmptyEl) {
        filterEmptyEl.hidden = !(
            regressionOnly &&
            totalRegressedCount === 0
        );
    }
}

/*
 * 等 Dataview 把表格节点插入页面后，再应用初始筛选状态。
 */
refreshRegressionFilterUI();
requestAnimationFrame(() => {
    refreshRegressionFilterUI();
});

/* ================================================================
 * 11. 一次性修复旧任务
 * ================================================================ */

if (CONFIG.repairExistingTasksOnLoad) {
    try {
        const repairedCount = await repairExistingReviewTasks(items);

        if (repairedCount > 0) {
            new Notice(
                `✅ 已检查并修复 ${repairedCount} 道题的复习任务。`,
                5000
            );
        }
    } catch (error) {
        console.error("旧任务修复失败：", error);

        new Notice(
            "⚠️ 旧任务修复失败，请检查 _Daily_Tasks 目录。",
            6000
        );
    }
}
