(async () => {
/******************************************************************
 * Obsidian 题目推荐与目录筛选系统 V15
 * （支持标签推荐、目录筛选、随机二刷、评级排期与 PDF 导出）
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
 * 10. 支持将当前筛选结果打印或另存为 PDF
 * 11. 支持按当前标签无放回随机抽取 X 道已刷题二刷
 * 12. 支持固定当前题目顺序，评级刷新后不再重新排序
 * 13. 支持按 _待确认 的真实文件夹目录逐题快速筛选
 ******************************************************************/

/* ================================================================
 * 0. 配置
 * ================================================================ */

const CONFIG = {
    questionMarker: "题目",
    answerMarker: "答案",

    /* 目录模式只扫描这个题目候选根目录。 */
    directoryRoot: "好题错题整理/_待确认",

    maxResults: 100,
    randomReviewDefaultCount: 10,
    historyLimit: 20,

    /* 打印前等待每张题图完成加载的最长时间 */
    printImageLoadTimeoutMs: 15000,

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

/*
 * 默认调用保持完整推荐列表；专用二刷入口会传入 mode: "random-review"。
 * Dataview 自定义视图通过全局 input 提供调用参数。
 */
const VIEW_OPTIONS = (
    typeof input === "object" &&
    input !== null &&
    !Array.isArray(input)
)
    ? input
    : {};

const RANDOM_REVIEW_MODE =
    String(VIEW_OPTIONS.mode ?? "").trim().toLowerCase() ===
    "random-review";

const DIRECTORY_MODE = ["directory", "book-toc"].includes(
    String(VIEW_OPTIONS.mode ?? "").trim().toLowerCase()
);

/* 运行期只读对象：避免全库扫描和排序时重复创建排序规则。 */
const QUESTION_NAME_COLLATOR = new Intl.Collator(
    "zh-CN",
    { numeric: true }
);

const QUESTION_MARKER = String(CONFIG.questionMarker ?? "").trim();
const MARKDOWN_EMBED_PATTERN = /^!\[([^\]]*)\]\s*\(/;
const WIKI_EMBED_PATTERN = /^!?\[\[([\s\S]*)\]\]$/;
const PRINT_BINARY_READ_CONCURRENCY = 4;

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

if (RANDOM_REVIEW_MODE) {
    dv.container.classList.add("question-random-review-view");
}

if (DIRECTORY_MODE) {
    dv.container.classList.add("question-directory-view");
}

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

function normalizedTagKey(normalizedTag) {
    return normalizedTag
        .replace(/\/+$/g, "")
        .toLocaleLowerCase();
}

/* 标签比较忽略大小写，并移除末尾多余的斜杠 */
function tagKey(tag) {
    return normalizedTagKey(normalizeTag(tag));
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
 * 使用预计算后的目标标签键匹配页面。
 * 与 getPageTags() + every()/some() 的 AND 语义相同，但每个原始标签
 * 只规范化一次，并在全部目标均命中后立即结束扫描。
 */
function pageMatchesAllTagRequirements(page, requirements) {
    const matched = new Array(requirements.length).fill(false);
    let matchedCount = 0;

    const inspectTags = rawTags => {
        for (const rawTag of asArray(rawTags)) {
            const candidateKey = tagKey(rawTag);

            if (!candidateKey) continue;

            for (let index = 0; index < requirements.length; index++) {
                if (matched[index]) continue;

                const requirement = requirements[index];

                if (
                    candidateKey === requirement.key ||
                    candidateKey.startsWith(requirement.descendantPrefix)
                ) {
                    matched[index] = true;
                    matchedCount++;

                    if (matchedCount === requirements.length) {
                        return true;
                    }
                }
            }
        }

        return false;
    };

    return inspectTags(page.tags) || inspectTags(page.file?.etags);
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

        if (!normalized) continue;

        const key = normalizedTagKey(normalized);

        if (visited.has(key)) continue;

        visited.add(key);
        result.push(normalized);
    }

    return result;
}

function parseIntegerScalar(value) {
    if (typeof value === "number") {
        return Number.isSafeInteger(value) ? value : null;
    }

    if (typeof value !== "string") return null;

    const normalized = value.trim();

    if (!/^[+-]?\d+$/.test(normalized)) return null;

    const parsed = Number(normalized);

    return Number.isSafeInteger(parsed) ? parsed : null;
}

function parseLevel(value) {
    const parsed = parseIntegerScalar(value);

    if (parsed === null || parsed < 0 || parsed > 5) {
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
    return value === true ||
        String(value).trim().toLowerCase() === "true";
}

function parseNonNegativeInteger(value) {
    const parsed = parseIntegerScalar(value);

    return parsed !== null && parsed >= 0
        ? parsed
        : 0;
}

function hasValidReviewCount(value) {
    const parsed = parseIntegerScalar(value);

    return parsed !== null && parsed >= 0;
}

function parseBooleanOption(value, fallback) {
    if (value === undefined || value === null || value === "") {
        return fallback;
    }

    if (typeof value === "boolean") return value;

    const normalized = String(value).trim().toLowerCase();

    if (["true", "1", "yes", "on"].includes(normalized)) {
        return true;
    }

    if (["false", "0", "no", "off"].includes(normalized)) {
        return false;
    }

    return fallback;
}

function clampRandomReviewCount(value) {
    const parsed = Math.floor(Number(value));

    if (!Number.isFinite(parsed)) {
        return CONFIG.randomReviewDefaultCount;
    }

    return Math.min(
        CONFIG.maxResults,
        Math.max(1, parsed)
    );
}

/**
 * 部分 Fisher-Yates 洗牌：从完整候选池无放回抽取，不受默认排序影响。
 */
function sampleWithoutReplacement(candidates, count, rng = Math.random) {
    const pool = Array.from(candidates ?? []);
    const wantedCount = Math.min(
        pool.length,
        Math.max(0, Math.floor(Number(count) || 0))
    );

    for (let index = 0; index < wantedCount; index++) {
        const remainingCount = pool.length - index;
        const randomValue = Number(rng());
        const safeRandomValue = Number.isFinite(randomValue)
            ? Math.min(Math.max(randomValue, 0), 1 - Number.EPSILON)
            : 0;
        const swapIndex = index + Math.floor(
            safeRandomValue * remainingCount
        );

        [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
    }

    return pool.slice(0, wantedCount);
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
const directoryRoot = normalizeVaultPath(
    VIEW_OPTIONS.root ?? CONFIG.directoryRoot
);

if (!DIRECTORY_MODE && currentTags.length === 0) {
    dv.paragraph("💡 **提示**：当前专题笔记没有 tags，无法推荐同类题。");
    return;
}

const currentTagRequirements = currentTags.map(tag => {
    const key = normalizedTagKey(tag);

    return {
        key,
        descendantPrefix: `${key}/`
    };
});


/* ================================================================
 * 5. 查询整个仓库
 * ================================================================ */

let candidatePages;

try {
    candidatePages = DIRECTORY_MODE
        ? Array.from(dv.pages(`"${directoryRoot}"`))
        : Array.from(dv.pages());
} catch (error) {
    console.error("Dataview 题目查询失败：", error);
    dv.paragraph("❌ Dataview 无法读取题目页面。");
    return;
}

/* ================================================================
 * 6. 获取题目图片
 * ================================================================ */

/**
 * 只把嵌入别名/替代文字中的独立“题目”字段视为题目标记。
 * 支持 |题目、|宽度|题目、|题目|宽度；不会因文件名含“题目”而误判。
 */
function hasMarkerToken(value, marker) {
    const tokens = String(value ?? "").split("|");

    for (const token of tokens) {
        if (token.trim() === marker) return true;
    }

    return false;
}

function hasQuestionMarkerToken(value) {
    return hasMarkerToken(value, QUESTION_MARKER);
}

function embedHasMarker(embed, marker) {
    if (!marker) return false;

    const original = String(embed?.original ?? "").trim();
    if (!original) return hasMarkerToken(embed?.displayText, marker);

    const markdownMatch = original.match(MARKDOWN_EMBED_PATTERN);
    if (markdownMatch) {
        return hasMarkerToken(markdownMatch[1], marker);
    }

    const wikiMatch = original.match(WIKI_EMBED_PATTERN);
    const inner = wikiMatch ? wikiMatch[1] : original;
    const parts = inner.split("|");

    for (let index = 1; index < parts.length; index++) {
        if (parts[index].trim() === marker) return true;
    }

    return false;
}

function embedHasQuestionMarker(embed) {
    return embedHasMarker(embed, QUESTION_MARKER);
}

function getMarkedImages(page, marker, knownSourceFile = undefined) {
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
        if (!embedHasMarker(embed, marker)) {
            continue;
        }

        const targetFile = app.metadataCache.getFirstLinkpathDest(
            embed.link,
            sourceFile.path
        );

        if (
            !targetFile ||
            !getPrintImageMimeType(targetFile) ||
            visitedPaths.has(targetFile.path)
        ) {
            continue;
        }

        visitedPaths.add(targetFile.path);
        result.push(dv.fileLink(targetFile.path, true));
    }

    return result;
}

function getQuestionImages(page, knownSourceFile = undefined) {
    return getMarkedImages(
        page,
        QUESTION_MARKER,
        knownSourceFile
    );
}

function getAnswerImages(page, knownSourceFile = undefined) {
    return getMarkedImages(
        page,
        String(CONFIG.answerMarker ?? "答案").trim(),
        knownSourceFile
    );
}

/* ================================================================
 * 7. 筛选与构建题目数据
 * ================================================================ */

function getDirectoryPageMetadata(page) {
    const pagePath = normalizeVaultPath(page?.file?.path);
    const rootPrefix = directoryRoot ? `${directoryRoot}/` : "";

    if (!rootPrefix || !pagePath.startsWith(rootPrefix)) {
        return null;
    }

    const relativePath = pagePath.slice(rootPrefix.length);
    const parts = relativePath.split("/").filter(Boolean);

    /* 至少需要“书文件夹/题目.md”，排除根目录里的汇总页。 */
    if (parts.length < 2) return null;

    const filename = parts[parts.length - 1];
    const basename = filename.replace(/\.md$/i, "");

    if (
        !/\.md$/i.test(filename) ||
        /^(?:index|.*索引)$/iu.test(basename)
    ) {
        return null;
    }

    return {
        book: parts[0],
        directoryParts: parts.slice(1, -1),
        relativePath,
        directoryPath: parts.slice(1, -1).join("/")
    };
}

function normalizeCuration(value) {
    const normalized = String(value ?? "").trim().toLowerCase();
    return ["keep", "skip"].includes(normalized)
        ? normalized
        : null;
}

const items = [];

for (const page of candidatePages) {
    if (page.file.path === currentFile.file.path) continue;

    const directoryMetadata = DIRECTORY_MODE
        ? getDirectoryPageMetadata(page)
        : null;

    if (DIRECTORY_MODE && !directoryMetadata) continue;

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
    if (
        !DIRECTORY_MODE &&
        !pageMatchesAllTagRequirements(page, currentTagRequirements)
    ) {
        continue;
    }

    const sourceFile = app.vault.getAbstractFileByPath(page.file.path);
    if (!sourceFile || sourceFile.extension !== "md") continue;

    /* 目录模式只在当前题显示/导出时解析图片，避免启动时解析上万附件。 */
    const images = DIRECTORY_MODE
        ? null
        : getQuestionImages(page, sourceFile);
    const answerImages = DIRECTORY_MODE ? null : [];

    /* 目录模式保留解析册重建的无题图题，其余模式维持原契约。 */
    if (!DIRECTORY_MODE && images.length === 0) continue;

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

    /* review_count 只解析一次，两个派生字段共用同一份解析结果。 */
    const parsedReviewCount = parseIntegerScalar(page.review_count);
    const hasRecordedReviewCount =
        parsedReviewCount !== null && parsedReviewCount >= 0;

    items.push({
        page,
        sourceFile,
        images,
        answerImages,
        directory: directoryMetadata,
        curation: normalizeCuration(page.curation),
        curationAt: String(page.curation_at ?? "").trim() || null,
        level,
        peakLevel,
        regressed,
        hasLegacyRegressionNotice,
        hasRecordedReviewCount,
        reviewCount: hasRecordedReviewCount ? parsedReviewCount : 0,
        nextReview: normalizeIsoDate(page.next_review)
    });
}

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
let printButtonEl = null;
let orderLockButtonEl = null;
let printInProgress = false;
let randomReviewPool = [];
let randomReviewControls = null;

const QUESTION_ORDER_LOCK_VERSION = 2;
const LEGACY_QUESTION_ORDER_LOCK_VERSION = 1;
const questionOrderScopeSignature = JSON.stringify(
    currentTagRequirements
        .map(requirement => requirement.key)
        .sort()
);
const questionOrderStorageKey =
    "question-recommender:order-lock:" +
    encodeURIComponent(String(app.vault.getName?.() ?? "vault")) + ":" +
    normalizeVaultPath(currentFile.file.path);

function getQuestionOrderPath(item) {
    return normalizeVaultPath(
        item?.sourceFile?.path ?? item?.page?.file?.path
    );
}

/*
 * 题目标题会参与笔记路径，因此路径不能作为“固定顺序”的唯一标识。
 * 优先保存显式 ID、文件创建时间和题图组合；它们在笔记重命名后仍保持不变。
 */
function getQuestionOrderAnchors(item) {
    const anchors = [];
    const explicitId = item?.page?.question_id ??
        item?.page?.question_uid;

    if (
        (typeof explicitId === "string" ||
            typeof explicitId === "number") &&
        String(explicitId).trim()
    ) {
        anchors.push(`question-id:${String(explicitId).trim()}`);
    }

    /* 候选条目构建时已持有 TFile，直接复用，避免对同一路径再次走 vault 查找。 */
    const sourceFile = item?.sourceFile ??
        app.vault.getAbstractFileByPath(
            getQuestionOrderPath(item)
        );
    const sourceCtime = Number(
        sourceFile?.stat?.ctime ??
        item?.page?.file?.ctime?.valueOf?.()
    );

    if (Number.isFinite(sourceCtime) && sourceCtime > 0) {
        anchors.push(`note-ctime:${Math.trunc(sourceCtime)}`);
    }

    const imagePaths = asArray(item?.images)
        .map(imageLink => normalizeVaultPath(imageLink?.path))
        .filter(Boolean)
        .sort();

    if (imagePaths.length > 0) {
        anchors.push(`question-images:${imagePaths.join("\u0000")}`);
    }

    return Array.from(new Set(anchors));
}

function createQuestionOrderEntry(item) {
    const path = getQuestionOrderPath(item);
    const anchors = getQuestionOrderAnchors(item);

    return path || anchors.length > 0
        ? { path, anchors }
        : null;
}

function normalizeStoredQuestionOrderEntry(entry) {
    if (typeof entry === "string") {
        const path = normalizeVaultPath(entry);
        return path ? { path, anchors: [] } : null;
    }

    const path = normalizeVaultPath(entry?.path);
    const anchors = Array.from(new Set(
        asArray(entry?.anchors)
            .map(anchor => String(anchor ?? "").trim())
            .filter(Boolean)
    ));

    return path || anchors.length > 0
        ? { path, anchors }
        : null;
}

function getQuestionOrderPathParts(path) {
    const normalizedPath = normalizeVaultPath(path);
    const slashIndex = normalizedPath.lastIndexOf("/");
    const directory = slashIndex >= 0
        ? normalizedPath.slice(0, slashIndex)
        : "";
    const filename = slashIndex >= 0
        ? normalizedPath.slice(slashIndex + 1)
        : normalizedPath;

    return {
        directory: directory.toLocaleLowerCase(),
        stem: filename.replace(/\.md$/i, "").toLocaleLowerCase()
    };
}

/* 兼容旧版仅保存路径的锁：识别“原名 + 后缀”这一类重命名。 */
function isLikelyRenamedQuestionPath(storedPath, currentPath) {
    const stored = getQuestionOrderPathParts(storedPath);
    const current = getQuestionOrderPathParts(currentPath);

    if (
        !stored.stem ||
        !current.stem ||
        stored.directory !== current.directory ||
        stored.stem === current.stem
    ) {
        return false;
    }

    const shorter = stored.stem.length <= current.stem.length
        ? stored.stem
        : current.stem;
    const longer = shorter === stored.stem
        ? current.stem
        : stored.stem;

    if (!longer.startsWith(shorter)) return false;

    return /^[\s~\-_—－（(【\[]/.test(longer.slice(shorter.length));
}

function getQuestionOrderEntries(state) {
    const rawEntries = Array.isArray(state?.entries)
        ? state.entries
        : asArray(state?.paths);

    return rawEntries
        .map(normalizeStoredQuestionOrderEntry)
        .filter(Boolean);
}

function buildQuestionOrderLookup(entries) {
    const orderByPath = new Map();
    const orderByAnchor = new Map();

    entries.forEach((entry, index) => {
        if (entry.path && !orderByPath.has(entry.path)) {
            orderByPath.set(entry.path, index);
        }

        for (const anchor of entry.anchors) {
            if (!orderByAnchor.has(anchor)) {
                orderByAnchor.set(anchor, index);
            } else if (orderByAnchor.get(anchor) !== index) {
                /* 重复锚点不具备唯一性，禁止据此误配题目。 */
                orderByAnchor.set(anchor, null);
            }
        }
    });

    return { entries, orderByPath, orderByAnchor };
}

function findQuestionOrderIndex(item, lookup) {
    for (const anchor of getQuestionOrderAnchors(item)) {
        const index = lookup.orderByAnchor.get(anchor);
        if (Number.isInteger(index)) return index;
    }

    const path = getQuestionOrderPath(item);
    const exactIndex = lookup.orderByPath.get(path);

    if (Number.isInteger(exactIndex)) return exactIndex;

    const renamedMatches = [];

    lookup.entries.forEach((entry, index) => {
        if (
            entry.anchors.length === 0 &&
            isLikelyRenamedQuestionPath(entry.path, path)
        ) {
            renamedMatches.push(index);
        }
    });

    return renamedMatches.length === 1
        ? renamedMatches[0]
        : undefined;
}

function mergeQuestionOrderEntries(questionItems, previousState = null) {
    const previousEntries = getQuestionOrderEntries(previousState);

    if (previousEntries.length === 0) {
        return questionItems
            .map(createQuestionOrderEntry)
            .filter(Boolean);
    }

    const mergedEntries = previousEntries.map(entry => ({
        path: entry.path,
        anchors: [...entry.anchors]
    }));
    const lookup = buildQuestionOrderLookup(previousEntries);
    const claimedIndexes = new Set();

    for (const item of questionItems) {
        const currentEntry = createQuestionOrderEntry(item);
        if (!currentEntry) continue;

        const matchedIndex = findQuestionOrderIndex(item, lookup);

        if (
            Number.isInteger(matchedIndex) &&
            !claimedIndexes.has(matchedIndex)
        ) {
            const previousEntry = mergedEntries[matchedIndex];
            previousEntry.path = currentEntry.path || previousEntry.path;
            previousEntry.anchors = Array.from(new Set([
                ...previousEntry.anchors,
                ...currentEntry.anchors
            ]));
            claimedIndexes.add(matchedIndex);
        } else {
            mergedEntries.push(currentEntry);
        }
    }

    /*
     * 未出现的旧条目暂时保留：重命名时 Dataview 可能短暂返回空档，
     * 若立即删除锁记录，下一次索引完成后该题仍会被误当成新题。
     */
    return mergedEntries;
}

/*
 * 预计算排序键（Schwartzian 变换）：降级标记、等级与文件名在首次渲染前
 * 一次性读取，避免比较器在每次比较时重复访问字段与转换类型。
 * 评级只会更新行内元素并刷新筛选 UI，不会重新排序，因此键不会过期。
 */
const questionPriorityKeyByItem = new Map();

for (const item of items) {
    questionPriorityKeyByItem.set(item, {
        regressed: Number(item.regressed),
        level: item.level ?? -1,
        name: item.page.file.name
    });
}

function compareQuestionPriority(a, b) {
    const keyA = questionPriorityKeyByItem.get(a);
    const keyB = questionPriorityKeyByItem.get(b);

    const regressionDifference =
        (keyB ? keyB.regressed : Number(b.regressed)) -
        (keyA ? keyA.regressed : Number(a.regressed));

    if (regressionDifference !== 0) {
        return regressionDifference;
    }

    const levelA = keyA ? keyA.level : (a.level ?? -1);
    const levelB = keyB ? keyB.level : (b.level ?? -1);

    if (levelA !== levelB) {
        return levelA - levelB;
    }

    return QUESTION_NAME_COLLATOR.compare(
        keyA ? keyA.name : a.page.file.name,
        keyB ? keyB.name : b.page.file.name
    );
}

function getQuestionOrderStorage() {
    try {
        return dv.container.ownerDocument?.defaultView?.localStorage ?? null;
    } catch (error) {
        console.warn("题目顺序存储不可用：", error);
        return null;
    }
}

function readQuestionOrderLock() {
    try {
        const storage = getQuestionOrderStorage();
        const rawState = storage?.getItem(questionOrderStorageKey);
        const state = rawState ? JSON.parse(rawState) : null;

        const scopeMatches =
            state?.scopeSignature === questionOrderScopeSignature;
        const hasCurrentEntries =
            state?.version === QUESTION_ORDER_LOCK_VERSION &&
            Array.isArray(state.entries);
        const hasLegacyPaths =
            state?.version === LEGACY_QUESTION_ORDER_LOCK_VERSION &&
            Array.isArray(state.paths);

        if (scopeMatches && (hasCurrentEntries || hasLegacyPaths)) {
            const entries = getQuestionOrderEntries(state);
            if (entries.length > 0) return { ...state, entries };
        }

        if (rawState) storage?.removeItem(questionOrderStorageKey);
    } catch (error) {
        console.warn("固定题目顺序读取失败：", error);
    }

    return null;
}

function writeQuestionOrderLock(
    questionItems = items,
    previousState = null
) {
    const entries = mergeQuestionOrderEntries(
        questionItems,
        previousState
    );
    const paths = entries
        .map(entry => entry.path)
        .filter(Boolean);

    if (entries.length === 0) return false;

    try {
        const storage = getQuestionOrderStorage();
        if (!storage) return false;

        storage.setItem(
            questionOrderStorageKey,
            JSON.stringify({
                version: QUESTION_ORDER_LOCK_VERSION,
                scopeSignature: questionOrderScopeSignature,
                entries,
                paths
            })
        );
        return true;
    } catch (error) {
        console.warn("固定题目顺序保存失败：", error);
        return false;
    }
}

function clearQuestionOrderLock() {
    try {
        getQuestionOrderStorage()?.removeItem(questionOrderStorageKey);
        return true;
    } catch (error) {
        console.warn("固定题目顺序清除失败：", error);
        return false;
    }
}

function applyLockedQuestionOrder(questionItems, state) {
    const lookup = buildQuestionOrderLookup(
        getQuestionOrderEntries(state)
    );

    /*
     * 预计算每个题目的固定顺序下标：findQuestionOrderIndex 内部会重建
     * 题图锚点（含路径排序）并在极端情况下线性扫描全部条目，比较器里
     * 每比较一次就调用两次开销过大；一次性算好后排序只做整数比较。
     */
    const orderIndexByItem = new Map();

    for (const item of questionItems) {
        orderIndexByItem.set(item, findQuestionOrderIndex(item, lookup));
    }

    questionItems.sort((a, b) => {
        const orderA = orderIndexByItem.get(a);
        const orderB = orderIndexByItem.get(b);
        const hasOrderA = orderA !== undefined;
        const hasOrderB = orderB !== undefined;

        if (hasOrderA && hasOrderB) return orderA - orderB;
        if (hasOrderA) return -1;
        if (hasOrderB) return 1;
        return compareQuestionPriority(a, b);
    });
}

/*
 * 旧版曾在每次刷新时直接覆写路径锁，因此重命名可能已经把题目追加到末尾。
 * 迁移到稳定锚点前，仅针对末尾连续的“名称带明显后缀”题目做一次
 * 保守修复；普通题名和用户原有的固定相对顺序均保持不动。
 */
function hasLikelyQuestionTitleSuffix(item) {
    const filename = getQuestionOrderPath(item)
        .split("/")
        .pop()
        ?.replace(/\.md$/i, "") ?? "";

    return /(?:\s[-—－]\s*[^\s-].*|\s~+\s*)$/u.test(filename);
}

function repairLegacyAppendedRenames(questionItems, state) {
    if (state?.version !== LEGACY_QUESTION_ORDER_LOCK_VERSION) {
        return false;
    }

    let appendedBlockStart = questionItems.length;

    while (
        appendedBlockStart > 0 &&
        hasLikelyQuestionTitleSuffix(
            questionItems[appendedBlockStart - 1]
        )
    ) {
        appendedBlockStart--;
    }

    const candidates = questionItems
        .slice(appendedBlockStart)
        .map(item => ({
            item,
            currentIndex: questionItems.indexOf(item)
        }))
        .filter(({ item }) => hasLikelyQuestionTitleSuffix(item))
        .sort((a, b) => (
            compareQuestionPriority(a.item, b.item) ||
            a.currentIndex - b.currentIndex
        ));
    const candidateItems = new Set(
        candidates.map(entry => entry.item)
    );
    const alreadyMovedItems = new Set();
    let candidateBlockStart = null;
    let repaired = false;

    for (const { item: candidate } of candidates) {
        const currentIndex = questionItems.indexOf(candidate);
        const peers = questionItems.filter(item => item !== candidate);
        const pendingCandidateIndexes = peers
            .map((item, index) => (
                candidateItems.has(item) &&
                !alreadyMovedItems.has(item)
                    ? index
                    : -1
            ))
            .filter(index => index >= 0);
        const currentGroupBoundary = pendingCandidateIndexes.length > 0
            ? Math.min(...pendingCandidateIndexes)
            : peers.length;
        const movedIndexes = peers
            .map((item, index) => (
                alreadyMovedItems.has(item) ? index : -1
            ))
            .filter(index => index >= 0);
        const afterMovedIndex = movedIndexes.length > 0
            ? Math.max(...movedIndexes) + 1
            : 0;
        const priorityTargetIndex = candidateBlockStart === null
            ? peers.findIndex(
                (item, index) => (
                    index < currentGroupBoundary &&
                    compareQuestionPriority(candidate, item) < 0
                )
            )
            : -1;
        const insertionIndex = priorityTargetIndex >= 0
            ? priorityTargetIndex
            : Math.min(afterMovedIndex, currentGroupBoundary);

        /* 只前移，不会把正常锁定的题目推到更后。 */
        if (insertionIndex >= currentIndex) {
            alreadyMovedItems.add(candidate);
            continue;
        }

        questionItems.splice(currentIndex, 1);
        questionItems.splice(insertionIndex, 0, candidate);
        if (candidateBlockStart === null) {
            candidateBlockStart = insertionIndex;
        }
        alreadyMovedItems.add(candidate);
        repaired = true;
    }

    return repaired;
}

function createCurrentQuestionOrderState(questionItems) {
    const entries = questionItems
        .map(createQuestionOrderEntry)
        .filter(Boolean);

    return {
        version: QUESTION_ORDER_LOCK_VERSION,
        scopeSignature: questionOrderScopeSignature,
        entries,
        paths: entries
            .map(entry => entry.path)
            .filter(Boolean)
    };
}

items.sort(compareQuestionPriority);

const storedQuestionOrderLock = (RANDOM_REVIEW_MODE || DIRECTORY_MODE)
    ? null
    : readQuestionOrderLock();
let questionOrderLocked = Boolean(storedQuestionOrderLock);

if (storedQuestionOrderLock) {
    applyLockedQuestionOrder(items, storedQuestionOrderLock);
    const repairedLegacyOrder = repairLegacyAppendedRenames(
        items,
        storedQuestionOrderLock
    );
    const previousStateForMigration = repairedLegacyOrder
        ? createCurrentQuestionOrderState(items)
        : storedQuestionOrderLock;

    /* 把锁定后新增的匹配题追加到末尾，后续刷新也保持同一位置。 */
    if (!writeQuestionOrderLock(items, previousStateForMigration)) {
        questionOrderLocked = false;
    }
}

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

        const targetFile = resolveQuestionSourceFile(item);

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

/* 随机二刷只负责抽题，不在打开面板时批量迁移整个候选池。 */
if (
    CONFIG.cleanupLegacyRegressionNoticesOnLoad &&
    !RANDOM_REVIEW_MODE &&
    !DIRECTORY_MODE
) {
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

    const submitButtonEl = RANDOM_REVIEW_MODE
        ? document.createElement("button")
        : null;

    if (submitButtonEl) {
        submitButtonEl.type = "button";
        submitButtonEl.className = "question-level-submit-button";
    }

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

    function refreshSubmissionUI() {
        const selectedLevel = Number(selectEl.value);
        selectEl.title = getLevelOptionText(
            selectedLevel === -1 ? null : selectedLevel
        );

        if (!submitButtonEl) return;

        submitButtonEl.textContent = selectedLevel === -1
            ? "清除评级"
            : "记录本轮";
        submitButtonEl.title = selectedLevel === -1
            ? "清除当前评级和未完成复习任务"
            : "提交本轮反馈并安排下次复习";
        submitButtonEl.disabled =
            selectEl.disabled ||
            (selectedLevel === -1 && currentLevel === null);
    }

    async function persistSelectedLevel(allowSameLevel = false) {
        const newLevel = Number(selectEl.value);
        const oldUiLevel = currentLevel;
        const isSameLevel = newLevel === (currentLevel ?? -1);

        if (
            isSameLevel &&
            (!allowSameLevel || newLevel === -1)
        ) {
            return;
        }

        const targetFile = resolveQuestionSourceFile(item);

        if (!targetFile || targetFile.extension !== "md") {
            selectEl.value = String(oldUiLevel ?? -1);
            refreshSubmissionUI();
            new Notice("❌ 无法定位对应题目笔记。");
            return;
        }

        selectEl.disabled = true;
        refreshSubmissionUI();
        let updateResult = null;

        try {
            const reviewTime = localDateTime();

            await app.fileManager.processFrontMatter(
                targetFile,
                frontmatter => {
                    const storedLevel = parseLevel(frontmatter.level);
                    const storedPeak = parseLevel(frontmatter.peak_level);
                    const hasStoredReviewCount = hasValidReviewCount(
                        frontmatter.review_count
                    );
                    const storedReviewCount =
                        parseNonNegativeInteger(frontmatter.review_count);
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
                            newLevel: null,
                            hasRecordedReviewCount: hasStoredReviewCount,
                            reviewCount: storedReviewCount
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

                    const newReviewCount = storedReviewCount + 1;
                    frontmatter.review_count = newReviewCount;

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
                        reviewIntervalDays,
                        hasRecordedReviewCount: true,
                        reviewCount: newReviewCount
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
            item.hasRecordedReviewCount = Boolean(
                updateResult?.hasRecordedReviewCount
            );
            item.reviewCount = parseNonNegativeInteger(
                updateResult?.reviewCount
            );

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
            refreshSubmissionUI();
        }
    }

    if (submitButtonEl) {
        selectEl.addEventListener("change", refreshSubmissionUI);
        submitButtonEl.addEventListener("click", () => {
            void persistSelectedLevel(true);
        });
    } else {
        selectEl.addEventListener("change", () => {
            void persistSelectedLevel(false);
        });
    }

    wrapper.appendChild(selectEl);
    if (submitButtonEl) wrapper.appendChild(submitButtonEl);
    wrapper.appendChild(badgeEl);
    refreshSubmissionUI();

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
 * 10. 打印当前筛选结果
 * ================================================================ */

function getCurrentlyPrintableItems() {
    if (DIRECTORY_MODE) return displayedItems;

    return regressionOnly
        ? displayedItems.filter(item => item.regressed)
        : displayedItems;
}

function getPrintImageMimeType(file) {
    const extension = String(file?.extension ?? "").toLowerCase();

    switch (extension) {
        case "png":
            return "image/png";
        case "jpg":
        case "jpeg":
        case "jfif":
            return "image/jpeg";
        case "gif":
            return "image/gif";
        case "webp":
            return "image/webp";
        case "bmp":
            return "image/bmp";
        case "svg":
            return "image/svg+xml";
        case "avif":
            return "image/avif";
        default:
            return null;
    }
}

function resolvePrintImageFile(item, imageLink) {
    const imagePath = String(imageLink?.path ?? "");

    if (!imagePath) return null;

    const directFile = app.vault.getAbstractFileByPath(imagePath);

    if (directFile?.extension) {
        return directFile;
    }

    const linkedFile = app.metadataCache.getFirstLinkpathDest(
        imagePath,
        item.page.file.path
    );

    return linkedFile?.extension ? linkedFile : null;
}

function waitForPrintImage(imageEl, timeoutMs) {
    return new Promise((resolve, reject) => {
        let settled = false;

        const finish = callback => {
            if (settled) return;

            settled = true;
            clearTimeout(timeoutId);
            imageEl.removeEventListener("load", handleLoad);
            imageEl.removeEventListener("error", handleError);
            callback();
        };

        const handleLoad = () => {
            finish(resolve);
        };

        const handleError = () => {
            finish(() => {
                reject(new Error(`题图加载失败：${imageEl.alt}`));
            });
        };

        const timeoutId = setTimeout(() => {
            finish(() => {
                reject(new Error(`题图加载超时：${imageEl.alt}`));
            });
        }, timeoutMs);

        imageEl.addEventListener("load", handleLoad, { once: true });
        imageEl.addEventListener("error", handleError, { once: true });

        if (imageEl.complete) {
            Promise.resolve().then(() => {
                if (imageEl.naturalWidth > 0) {
                    handleLoad();
                } else {
                    handleError();
                }
            });
        }
    });
}

function waitForPrintLayout(targetWindow) {
    return new Promise(resolve => {
        targetWindow.requestAnimationFrame(() => {
            resolve();
        });
    });
}

function createPrintRoot(printDocument) {
    const printRootEl = printDocument.createElement("main");

    printRootEl.className = "question-print-root";
    /*
     * 不要设置 aria-hidden：Electron 根据可访问性标题结构生成 PDF
     * outline；隐藏根节点会让页面上的 h1 无法进入书签目录。
     */
    printRootEl.setAttribute("role", "document");
    printRootEl.style.position = "fixed";
    printRootEl.style.left = "-10000px";
    printRootEl.style.top = "0";
    printRootEl.style.width = "186mm";
    printRootEl.style.margin = "0";
    printRootEl.style.padding = "0";
    printRootEl.style.opacity = "0";
    printRootEl.style.pointerEvents = "none";
    printRootEl.style.background = "#ffffff";
    printRootEl.style.color = "#000000";
    printDocument.body.appendChild(printRootEl);

    return printRootEl;
}

function createPrintStyle(printDocument) {
    const styleEl = printDocument.createElement("style");

    styleEl.className = "question-print-runtime-style";
    styleEl.textContent = `
        .question-print-root,
        .question-print-root * {
            box-sizing: border-box;
        }

        .question-print-root {
            /*
             * Electron 37 / Chromium 138 在 PDF outline 模式下使用
             * Microsoft YaHei 会把第 2 页后的 H1 文本重复拼接。
             * Microsoft YaHei UI 外观接近且不会触发该引擎 bug。
             */
            font-family: "Microsoft YaHei UI", "PingFang SC",
                "Noto Sans CJK SC", "Source Han Sans SC", sans-serif;
        }

        .question-print-item {
            margin: 0;
            break-inside: avoid-page;
            page-break-inside: avoid;
            break-after: page;
            page-break-after: always;
        }

        .question-print-item:last-child {
            break-after: auto;
            page-break-after: auto;
        }

        .question-print-title {
            margin: 0 0 2mm;
            font-size: 18pt;
            font-weight: 700;
            line-height: 1.25;
            break-after: avoid-page;
            page-break-after: avoid;
        }

        .question-print-source {
            margin: 0 0 3mm;
            font-size: 10.5pt;
            font-weight: 600;
            line-height: 1.45;
            overflow-wrap: anywhere;
            break-after: avoid-page;
            page-break-after: avoid;
        }

        .question-print-images {
            display: flex;
            flex-direction: column;
            align-items: center;
            /* 题图紧跟来源置顶，余下空间留给手写作答。 */
            justify-content: flex-start;
            width: 100%;
            height: 236mm;
            gap: 3mm;
            overflow: hidden;
        }

        .question-print-image {
            display: block;
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: var(--question-print-image-max-height, 236mm);
            margin: 0 auto;
            object-fit: contain;
        }

        @media print {
            @page {
                size: A4 portrait;
                margin: 12mm 12mm 14mm;
            }

            html.question-print-mode,
            body.question-print-mode {
                width: auto !important;
                height: auto !important;
                min-height: 0 !important;
                margin: 0 !important;
                padding: 0 !important;
                overflow: visible !important;
                background: #ffffff !important;
                color: #000000 !important;
            }

            body.question-print-mode > :not(.question-print-root) {
                display: none !important;
            }

            body.question-print-mode > .question-print-root {
                display: block !important;
                position: static !important;
                left: auto !important;
                top: auto !important;
                width: auto !important;
                height: auto !important;
                margin: 0 !important;
                padding: 0 !important;
                overflow: visible !important;
                visibility: visible !important;
                opacity: 1 !important;
                pointer-events: auto !important;
                background: #ffffff !important;
                color: #000000 !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }

            body.question-print-mode .question-print-root,
            body.question-print-mode .question-print-root * {
                visibility: visible !important;
            }
        }
    `;

    printDocument.head.appendChild(styleEl);

    return styleEl;
}

function sanitizePdfFileName(value, fallback = "题目筛选") {
    const sanitized = String(value ?? "")
        .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "-")
        .replace(/[. ]+$/g, "")
        .trim();

    return sanitized || fallback;
}

function getQuestionPdfDefaultName(questionCount) {
    const sourceName = currentFile?.file?.name ??
        currentFile?.file?.basename ??
        "题目筛选";

    return sanitizePdfFileName(
        `${sourceName}-题目筛选-${questionCount}题`
    ) + ".pdf";
}

function getPdfExportBridge(printWindow) {
    const remote = printWindow?.electron?.remote ??
        globalThis?.electron?.remote;
    const webContents = remote?.getCurrentWebContents?.();

    if (
        !remote?.dialog?.showSaveDialog ||
        typeof webContents?.printToPDF !== "function"
    ) {
        throw new Error(
            "当前环境不支持带目录 PDF 导出，请在 Obsidian 桌面版中使用"
        );
    }

    return { remote, webContents };
}

function getNodeFileSystem(remote) {
    try {
        if (typeof require === "function") {
            return require("fs");
        }
    } catch (error) {
        console.warn("Node 文件系统模块读取失败：", error);
    }

    try {
        if (typeof remote?.require === "function") {
            const remoteFs = remote.require("fs");

            return {
                promises: {
                    writeFile(filePath, data) {
                        return new Promise((resolve, reject) => {
                            remoteFs.writeFile(
                                filePath,
                                data,
                                error => error ? reject(error) : resolve()
                            );
                        });
                    }
                }
            };
        }
    } catch (error) {
        console.warn("Electron 文件系统模块读取失败：", error);
    }

    throw new Error("无法取得本地文件写入权限");
}

async function choosePdfSavePath(remote, defaultFileName) {
    const result = await remote.dialog.showSaveDialog({
        title: "导出带目录 PDF",
        defaultPath: defaultFileName,
        buttonLabel: "保存 PDF",
        filters: [
            { name: "PDF 文件", extensions: ["pdf"] }
        ],
        properties: ["showOverwriteConfirmation"]
    });

    return result?.canceled ? null : result?.filePath ?? null;
}

async function exportPdfWithOutline(remote, webContents, filePath) {
    const pdfData = await webContents.printToPDF({
        printBackground: true,
        preferCSSPageSize: true,
        generateTaggedPDF: true,
        generateDocumentOutline: true
    });

    if (!pdfData || Number(pdfData.byteLength ?? pdfData.length) === 0) {
        throw new Error("Electron 未生成 PDF 数据");
    }

    await getNodeFileSystem(remote).promises.writeFile(filePath, pdfData);
}

/**
 * 以有限并发读取题图，避免大量题目打印时逐张等待磁盘 I/O。
 * 全部读取任务结束后才抛出最靠前题图的错误，确保不会留下仍在运行、
 * 却已脱离清理流程的异步读取。
 */
async function readPrintImageData(descriptors) {
    let nextIndex = 0;
    let firstFailure = null;

    const readNext = async () => {
        while (nextIndex < descriptors.length) {
            const index = nextIndex++;

            try {
                descriptors[index].imageData =
                    await app.vault.readBinary(
                        descriptors[index].imageFile
                    );
            } catch (error) {
                if (!firstFailure || index < firstFailure.index) {
                    firstFailure = { index, error };
                }
            }
        }
    };

    const workerCount = Math.min(
        PRINT_BINARY_READ_CONCURRENCY,
        descriptors.length
    );

    await Promise.all(
        Array.from({ length: workerCount }, () => readNext())
    );

    if (firstFailure) throw firstFailure.error;
}

async function printCurrentQuestions() {
    if (printInProgress) return;

    const printableItems = getCurrentlyPrintableItems();

    if (printableItems.length === 0) {
        new Notice("💡 当前筛选中没有可打印的题目。", 4000);
        return;
    }

    printInProgress = true;
    refreshRegressionFilterUI();

    const printDocument = dv.container.ownerDocument;
    const printWindow = printDocument?.defaultView;

    if (!printDocument?.head || !printDocument.body || !printWindow) {
        printInProgress = false;
        refreshRegressionFilterUI();
        new Notice("❌ 无法取得当前 Obsidian 打印窗口。", 6000);
        return;
    }

    const urlApi = printWindow.URL ?? URL;
    const BlobClass = printWindow.Blob ?? Blob;
    const objectUrls = [];
    let printRootEl = null;
    let printStyleEl = null;
    let cleanedUp = false;

    const cleanup = () => {
        if (cleanedUp) return;

        cleanedUp = true;

        for (const objectUrl of objectUrls) {
            urlApi.revokeObjectURL(objectUrl);
        }

        printDocument.documentElement.classList.remove(
            "question-print-mode"
        );
        printDocument.body.classList.remove("question-print-mode");
        printRootEl?.remove();
        printStyleEl?.remove();
        printInProgress = false;
        refreshRegressionFilterUI();
    };

    try {
        const { remote, webContents } = getPdfExportBridge(printWindow);
        const outputPath = await choosePdfSavePath(
            remote,
            getQuestionPdfDefaultName(printableItems.length)
        );

        if (!outputPath) {
            cleanup();
            return;
        }

        printStyleEl = createPrintStyle(printDocument);
        printRootEl = createPrintRoot(printDocument);

        const imageLoadPromises = [];
        const imageElements = [];
        const imageDescriptors = [];
        let imageCount = 0;

        for (const [printIndex, item] of printableItems.entries()) {
            const questionNumber = printIndex + 1;
            const itemEl = printDocument.createElement("section");
            itemEl.className = "question-print-item";

            const titleEl = printDocument.createElement("h1");
            titleEl.className = "question-print-title";
            titleEl.id = `question-${questionNumber}`;
            titleEl.textContent = `第 ${questionNumber} 题`;

            const sourceEl = printDocument.createElement("p");
            sourceEl.className = "question-print-source";
            sourceEl.textContent = `题目来源：${item.page.file.name}`;

            const imagesEl = printDocument.createElement("div");
            imagesEl.className = "question-print-images";

            const itemImageCount = Math.max(1, item.images.length);
            const imageGapMm = 3;
            const availableImageHeightMm = 236;
            const maxImageHeightMm = Math.max(
                20,
                (
                    availableImageHeightMm -
                    imageGapMm * (itemImageCount - 1)
                ) / itemImageCount
            );

            itemEl.appendChild(titleEl);
            itemEl.appendChild(sourceEl);
            itemEl.appendChild(imagesEl);
            printRootEl.appendChild(itemEl);

            for (const imageLink of item.images) {
                const imageFile = resolvePrintImageFile(item, imageLink);

                if (!imageFile) {
                    throw new Error(
                        `无法定位题图：${item.page.file.path}`
                    );
                }

                const mimeType = getPrintImageMimeType(imageFile);

                if (!mimeType) {
                    throw new Error(
                        `不支持打印的题图格式：${imageFile.path}`
                    );
                }

                const imageEl = printDocument.createElement("img");
                imageEl.className = "question-print-image";
                imageEl.alt = `${item.page.file.name} · ${imageFile.name}`;
                imageEl.style.setProperty(
                    "--question-print-image-max-height",
                    `${maxImageHeightMm}mm`
                );

                imagesEl.appendChild(imageEl);
                imageDescriptors.push({
                    imageFile,
                    imageEl,
                    mimeType,
                    imageData: null
                });
                imageCount++;
            }
        }

        if (imageCount === 0) {
            throw new Error("当前筛选结果中没有可打印的题图");
        }

        await readPrintImageData(imageDescriptors);

        const imageLoadTimeoutMs = Math.max(
            1000,
            Number(CONFIG.printImageLoadTimeoutMs) || 15000
        );

        for (const descriptor of imageDescriptors) {
            const objectUrl = urlApi.createObjectURL(
                new BlobClass(
                    [descriptor.imageData],
                    { type: descriptor.mimeType }
                )
            );

            descriptor.imageData = null;
            objectUrls.push(objectUrl);
            imageElements.push(descriptor.imageEl);
            descriptor.imageEl.src = objectUrl;
            imageLoadPromises.push(
                waitForPrintImage(
                    descriptor.imageEl,
                    imageLoadTimeoutMs
                )
            );
        }

        await Promise.all(imageLoadPromises);

        await Promise.all(
            imageElements.map(imageEl => {
                if (typeof imageEl.decode !== "function") {
                    return Promise.resolve();
                }

                return imageEl.decode();
            })
        );

        if (printDocument.fonts?.ready) {
            await printDocument.fonts.ready;
        }

        printDocument.documentElement.classList.add(
            "question-print-mode"
        );
        printDocument.body.classList.add("question-print-mode");

        await waitForPrintLayout(printWindow);
        await waitForPrintLayout(printWindow);

        new Notice(
            `⏳ 正在生成 ${printableItems.length} 道题的带目录 PDF…`,
            5000
        );

        await exportPdfWithOutline(remote, webContents, outputPath);
        cleanup();

        new Notice(
            `✅ PDF 已保存；目录含 ${printableItems.length} 个一级题目书签。`,
            6500
        );
    } catch (error) {
        console.error("题目 PDF 导出失败：", error);
        cleanup();

        new Notice(
            `❌ PDF 导出失败：${error?.message ?? "未知错误"}`,
            7000
        );
    }
}

/* ================================================================
 * 11. 标签随机二刷模式
 * ================================================================ */

function isSecondReviewCandidate(item) {
    /* 旧题以 level 兼容识别；新题以实际 review_count 为准。 */
    return item.hasRecordedReviewCount
        ? item.reviewCount > 0
        : item.level !== null;
}

function getQuestionSignature(item) {
    const imagePaths = asArray(item?.images)
        .map(imageLink => normalizeVaultPath(imageLink?.path))
        .filter(Boolean)
        .sort();

    if (imagePaths.length > 0) {
        return imagePaths.join("\u0000");
    }

    return normalizeVaultPath(item?.page?.file?.path);
}

function deduplicateQuestionItems(questionItems) {
    const result = [];
    const visitedSignatures = new Set();

    for (const item of questionItems) {
        const signature = getQuestionSignature(item);

        if (signature && visitedSignatures.has(signature)) continue;

        if (signature) visitedSignatures.add(signature);
        result.push(item);
    }

    return result;
}

function resolveQuestionSourceFile(item) {
    const storedFile = item?.sourceFile;
    const storedPath = normalizeVaultPath(storedFile?.path);

    if (storedPath) {
        const resolvedStoredFile =
            app.vault.getAbstractFileByPath(storedPath);

        if (resolvedStoredFile?.extension === "md") {
            return resolvedStoredFile;
        }
    }

    const pagePath = normalizeVaultPath(item?.page?.file?.path);
    const pageFile = pagePath
        ? app.vault.getAbstractFileByPath(pagePath)
        : null;

    return pageFile?.extension === "md" ? pageFile : null;
}

function createRandomReviewSourceLink(item, viewDocument) {
    const sourceLinkEl = viewDocument.createElement("a");
    sourceLinkEl.className =
        "internal-link question-random-source-link";

    const updateSourceLink = event => {
        const sourceFile = resolveQuestionSourceFile(item);

        if (!sourceFile) {
            event?.preventDefault?.();
            event?.stopPropagation?.();

            if (!event || event.type === "click") {
                new Notice(
                    `❌ 题目笔记已删除或无法定位：` +
                    `${item.page.file.path}`,
                    6000
                );
            }

            return false;
        }

        sourceLinkEl.href = sourceFile.path;
        sourceLinkEl.dataset.href = sourceFile.path;
        sourceLinkEl.textContent = sourceFile.basename;
        return true;
    };

    updateSourceLink();
    sourceLinkEl.addEventListener("pointerdown", updateSourceLink);
    sourceLinkEl.addEventListener("click", updateSourceLink);

    return sourceLinkEl;
}

function createRandomReviewImages(item, viewDocument) {
    const imageListEl = viewDocument.createElement("ul");
    imageListEl.className = "question-random-images";
    const sourceName = resolveQuestionSourceFile(item)?.basename ??
        item.page.file.name;

    for (const imageLink of item.images) {
        const imageItemEl = viewDocument.createElement("li");
        imageItemEl.className = "question-random-image-item";
        const imageFile = resolvePrintImageFile(item, imageLink);

        if (!imageFile) {
            const placeholderEl = viewDocument.createElement("div");
            placeholderEl.className = "question-random-image-placeholder";
            placeholderEl.textContent = "题图已移动或无法定位";
            imageItemEl.appendChild(placeholderEl);
            imageListEl.appendChild(imageItemEl);
            continue;
        }

        const imageEl = viewDocument.createElement("img");
        imageEl.className = "question-random-image";
        imageEl.loading = "lazy";
        imageEl.alt = `${sourceName} · ${imageFile.name}`;
        imageEl.src = app.vault.getResourcePath(imageFile);
        imageEl.addEventListener("error", () => {
            const placeholderEl = viewDocument.createElement("div");
            placeholderEl.className = "question-random-image-placeholder";
            placeholderEl.textContent =
                `题图预览加载失败：${imageFile.name}`;
            imageEl.replaceWith(placeholderEl);
        }, { once: true });

        imageItemEl.appendChild(imageEl);
        imageListEl.appendChild(imageItemEl);
    }

    return imageListEl;
}

function renderRandomReviewMode() {
    const viewDocument = dv.container.ownerDocument ?? document;
    const configuredCount = clampRandomReviewCount(
        VIEW_OPTIONS.count ?? VIEW_OPTIONS.defaultCount
    );
    const configuredReviewedOnly = parseBooleanOption(
        VIEW_OPTIONS.reviewedOnly,
        true
    );
    const inputSignature = JSON.stringify([
        configuredCount,
        configuredReviewedOnly
    ]);
    const storageKeySuffix = String(
        VIEW_OPTIONS.storageKey ?? currentFile.file.path
    );
    const sessionStorageKey =
        `question-recommender:random-review:${storageKeySuffix}`;

    function readRandomReviewState() {
        try {
            const rawState =
                viewDocument.defaultView?.sessionStorage?.getItem(
                    sessionStorageKey
                );
            const parsedState = rawState ? JSON.parse(rawState) : null;

            return (
                parsedState &&
                parsedState.inputSignature === inputSignature &&
                Array.isArray(parsedState.paths)
            )
                ? parsedState
                : null;
        } catch (error) {
            console.warn("随机二刷会话状态读取失败：", error);
            return null;
        }
    }

    function writeRandomReviewState(state) {
        try {
            viewDocument.defaultView?.sessionStorage?.setItem(
                sessionStorageKey,
                JSON.stringify({
                    inputSignature,
                    count: state.count,
                    reviewedOnly: state.reviewedOnly,
                    regressionOnly: Boolean(state.regressionOnly),
                    paths: state.paths
                })
            );
        } catch (error) {
            console.warn("随机二刷会话状态保存失败：", error);
        }
    }

    const storedState = readRandomReviewState();
    const initialCount = storedState
        ? clampRandomReviewCount(storedState.count)
        : configuredCount;
    const initialReviewedOnly = storedState
        ? Boolean(storedState.reviewedOnly)
        : configuredReviewedOnly;
    let lastDrawnCount = initialCount;

    if (
        storedState &&
        typeof storedState.regressionOnly === "boolean"
    ) {
        regressionOnly = storedState.regressionOnly;
    }

    const headerEl = viewDocument.createElement("header");
    headerEl.className = "question-random-header";

    titleEl = viewDocument.createElement("h3");
    titleEl.className = "question-random-title";

    const tagSummaryEl = viewDocument.createElement("p");
    tagSummaryEl.className = "question-random-tags";
    tagSummaryEl.textContent = `当前标签：${currentTags.join("、")}`;

    headerEl.appendChild(titleEl);
    headerEl.appendChild(tagSummaryEl);

    const controlsEl = viewDocument.createElement("div");
    controlsEl.className = "question-filter-bar question-random-controls";

    const countLabelEl = viewDocument.createElement("label");
    countLabelEl.className = "question-random-count-label";
    countLabelEl.append("抽题数");

    const countInputEl = viewDocument.createElement("input");
    countInputEl.className = "question-random-count-input";
    countInputEl.type = "number";
    countInputEl.min = "1";
    countInputEl.max = String(CONFIG.maxResults);
    countInputEl.step = "1";
    countInputEl.inputMode = "numeric";
    countInputEl.value = String(initialCount);
    countInputEl.setAttribute("aria-label", "随机二刷抽题数");
    countLabelEl.appendChild(countInputEl);

    const reviewedLabelEl = viewDocument.createElement("label");
    reviewedLabelEl.className = "question-random-reviewed-label";

    const reviewedOnlyEl = viewDocument.createElement("input");
    reviewedOnlyEl.type = "checkbox";
    reviewedOnlyEl.checked = initialReviewedOnly;
    reviewedOnlyEl.setAttribute("aria-label", "仅抽已刷题");
    reviewedLabelEl.appendChild(reviewedOnlyEl);
    reviewedLabelEl.append("仅抽已刷题");

    const drawButtonEl = viewDocument.createElement("button");
    drawButtonEl.type = "button";
    drawButtonEl.className = "question-random-draw-button";
    drawButtonEl.title = "从当前标签匹配的二刷池中无放回随机抽题";

    filterButtonEl = viewDocument.createElement("button");
    filterButtonEl.type = "button";
    filterButtonEl.className = "question-regression-filter-button";

    printButtonEl = viewDocument.createElement("button");
    printButtonEl.type = "button";
    printButtonEl.className = "question-print-button";
    printButtonEl.title = "只打印本组当前可见题目的来源和题图";

    randomReviewControls = {
        countInputEl,
        reviewedOnlyEl,
        drawButtonEl
    };

    controlsEl.appendChild(countLabelEl);
    controlsEl.appendChild(reviewedLabelEl);
    controlsEl.appendChild(drawButtonEl);
    controlsEl.appendChild(filterButtonEl);
    controlsEl.appendChild(printButtonEl);

    const statusEl = viewDocument.createElement("div");
    statusEl.className = "question-random-status";
    statusEl.setAttribute("aria-live", "polite");

    const poolSummaryEl = viewDocument.createElement("span");
    poolSummaryEl.className = "question-random-pool-summary";

    filterSummaryEl = viewDocument.createElement("span");
    filterSummaryEl.className = "question-filter-summary";

    statusEl.appendChild(poolSummaryEl);
    statusEl.appendChild(filterSummaryEl);

    const poolEmptyEl = viewDocument.createElement("div");
    poolEmptyEl.className = "question-filter-empty";
    poolEmptyEl.setAttribute("role", "status");
    poolEmptyEl.hidden = true;

    filterEmptyEl = viewDocument.createElement("div");
    filterEmptyEl.className = "question-filter-empty";
    filterEmptyEl.textContent = "本组没有待恢复的降级题。";
    filterEmptyEl.hidden = true;

    const tableWrapEl = viewDocument.createElement("div");
    tableWrapEl.className = "question-random-table-wrap";

    const tableEl = viewDocument.createElement("table");
    tableEl.className = "question-random-table";

    const tableHeadEl = viewDocument.createElement("thead");
    const headRowEl = viewDocument.createElement("tr");

    for (const heading of ["题号", "题目", "题图预览", "本轮反馈"]) {
        const headingEl = viewDocument.createElement("th");
        headingEl.textContent = heading;
        headRowEl.appendChild(headingEl);
    }

    tableHeadEl.appendChild(headRowEl);

    const tableBodyEl = viewDocument.createElement("tbody");
    tableEl.appendChild(tableHeadEl);
    tableEl.appendChild(tableBodyEl);
    tableWrapEl.appendChild(tableEl);

    dv.container.appendChild(headerEl);
    dv.container.appendChild(controlsEl);
    dv.container.appendChild(statusEl);
    dv.container.appendChild(poolEmptyEl);
    dv.container.appendChild(filterEmptyEl);
    dv.container.appendChild(tableWrapEl);

    function renderRows() {
        tableBodyEl.replaceChildren();

        for (const item of items) {
            item.tableRow = null;
            item.filterMarker = null;
            item.orderNumberEl = null;
        }

        if (displayedItems.length === 0) {
            tableWrapEl.hidden = true;
            return;
        }

        const rowsFragment =
            viewDocument.createDocumentFragment?.() ?? null;
        const rowsParent = rowsFragment ?? tableBodyEl;

        displayedItems.forEach((item, index) => {
            const rowEl = viewDocument.createElement("tr");
            item.tableRow = rowEl;

            const numberCellEl = viewDocument.createElement("td");
            numberCellEl.dataset.label = "题号";
            const numberEl = viewDocument.createElement("span");
            numberEl.className = "question-random-number";
            numberEl.textContent = String(index + 1);
            item.orderNumberEl = numberEl;
            numberCellEl.appendChild(numberEl);

            const sourceCellEl = viewDocument.createElement("td");
            sourceCellEl.className = "question-random-source";
            sourceCellEl.dataset.label = "题目";
            sourceCellEl.appendChild(
                createRandomReviewSourceLink(item, viewDocument)
            );

            const imageCellEl = viewDocument.createElement("td");
            imageCellEl.dataset.label = "题图";
            imageCellEl.appendChild(
                createRandomReviewImages(item, viewDocument)
            );

            const feedbackCellEl = viewDocument.createElement("td");
            feedbackCellEl.dataset.label = "反馈";
            feedbackCellEl.appendChild(createLevelControl(item));

            rowEl.appendChild(numberCellEl);
            rowEl.appendChild(sourceCellEl);
            rowEl.appendChild(imageCellEl);
            rowEl.appendChild(feedbackCellEl);
            rowsParent.appendChild(rowEl);
        });

        if (rowsFragment) tableBodyEl.appendChild(rowsFragment);
        tableWrapEl.hidden = false;
    }

    function drawRandomReview(reuseStoredSelection = false) {
        const requestedCount = clampRandomReviewCount(
            countInputEl.value
        );
        countInputEl.value = String(requestedCount);
        lastDrawnCount = requestedCount;

        const eligibleItems = reviewedOnlyEl.checked
            ? items.filter(isSecondReviewCandidate)
            : [...items];
        randomReviewPool = deduplicateQuestionItems(eligibleItems);

        const poolByPath = new Map(
            randomReviewPool.map(item => [
                normalizeVaultPath(item.page.file.path),
                item
            ])
        );
        const reusableState = reuseStoredSelection
            ? readRandomReviewState()
            : null;
        const previousSelectionKey = displayedItems
            .map(item => normalizeVaultPath(item.page.file.path))
            .sort()
            .join("\u0000");
        let nextItems = [];

        if (
            reusableState &&
            clampRandomReviewCount(reusableState.count) ===
                requestedCount &&
            Boolean(reusableState.reviewedOnly) ===
                reviewedOnlyEl.checked
        ) {
            const selectedPaths = new Set();

            for (const path of reusableState.paths) {
                const normalizedPath = normalizeVaultPath(path);
                const item = poolByPath.get(normalizedPath);

                if (!item || selectedPaths.has(normalizedPath)) continue;

                selectedPaths.add(normalizedPath);
                nextItems.push(item);

                if (nextItems.length === requestedCount) break;
            }

            if (nextItems.length < requestedCount) {
                const remainingItems = randomReviewPool.filter(item => (
                    !selectedPaths.has(
                        normalizeVaultPath(item.page.file.path)
                    )
                ));

                nextItems.push(...sampleWithoutReplacement(
                    remainingItems,
                    requestedCount - nextItems.length
                ));
            }
        } else {
            nextItems = sampleWithoutReplacement(
                randomReviewPool,
                requestedCount
            );

            if (
                previousSelectionKey &&
                randomReviewPool.length > nextItems.length
            ) {
                let nextSelectionKey = nextItems
                    .map(item => normalizeVaultPath(item.page.file.path))
                    .sort()
                    .join("\u0000");

                for (
                    let attempt = 0;
                    attempt < 4 &&
                    nextSelectionKey === previousSelectionKey;
                    attempt++
                ) {
                    nextItems = sampleWithoutReplacement(
                        randomReviewPool,
                        requestedCount
                    );
                    nextSelectionKey = nextItems
                        .map(item => normalizeVaultPath(item.page.file.path))
                        .sort()
                        .join("\u0000");
                }

                if (nextSelectionKey === previousSelectionKey) {
                    const previousPaths = new Set(
                        displayedItems.map(item => normalizeVaultPath(
                            item.page.file.path
                        ))
                    );
                    const replacement = randomReviewPool.find(item => (
                        !previousPaths.has(normalizeVaultPath(
                            item.page.file.path
                        ))
                    ));

                    if (replacement && nextItems.length > 0) {
                        nextItems[nextItems.length - 1] = replacement;
                    }
                }
            }
        }

        displayedItems = nextItems;
        writeRandomReviewState({
            count: requestedCount,
            reviewedOnly: reviewedOnlyEl.checked,
            regressionOnly,
            paths: displayedItems.map(item => item.page.file.path)
        });

        const actualCount = displayedItems.length;
        const shortage = Math.max(0, requestedCount - actualCount);
        const duplicateCount =
            eligibleItems.length - randomReviewPool.length;
        const poolType = reviewedOnlyEl.checked
            ? "二刷池"
            : "全部匹配题";

        poolSummaryEl.textContent =
            `标签匹配 ${items.length} 道；${poolType} ` +
            `${randomReviewPool.length} 道；本组 ${actualCount} 道` +
            (duplicateCount > 0
                ? `；按相同题图去重 ${duplicateCount} 道`
                : "") +
            (shortage > 0 ? `；库存不足 ${shortage} 道` : "");

        poolEmptyEl.textContent = reviewedOnlyEl.checked
            ? "当前标签下没有已刷题；关闭“仅抽已刷题”可查看全部匹配题。"
            : "当前标签下没有可抽取的题目。";
        poolEmptyEl.hidden = actualCount > 0;
        drawButtonEl.disabled =
            printInProgress ||
            randomReviewPool.length === 0;
        drawButtonEl.textContent = "再抽一组";

        renderRows();
        refreshRegressionFilterUI();
    }

    countInputEl.addEventListener("keydown", event => {
        if (event.key === "Enter") drawRandomReview();
    });

    reviewedOnlyEl.addEventListener("change", () => {
        drawRandomReview();
    });
    drawButtonEl.addEventListener("click", () => {
        drawRandomReview();
    });

    filterButtonEl.addEventListener("click", () => {
        regressionOnly = !regressionOnly;
        writeRandomReviewState({
            count: lastDrawnCount,
            reviewedOnly: reviewedOnlyEl.checked,
            regressionOnly,
            paths: displayedItems.map(item => item.page.file.path)
        });
        refreshRegressionFilterUI();
    });

    printButtonEl.addEventListener("click", () => {
        void printCurrentQuestions();
    });

    drawRandomReview(true);
}

/* ================================================================
 * 12. 习题册目录快速筛选模式
 * ================================================================ */

function getCurationCounts(questionItems) {
    const counts = {
        total: questionItems.length,
        pending: 0,
        keep: 0,
        skip: 0
    };

    for (const item of questionItems) {
        if (item.curation === "keep") counts.keep++;
        else if (item.curation === "skip") counts.skip++;
        else counts.pending++;
    }

    return counts;
}

function buildDirectoryTree(bookItems) {
    const root = {
        name: "全部目录",
        pathParts: [],
        pathKey: "",
        children: new Map(),
        items: [...bookItems]
    };

    for (const item of bookItems) {
        let node = root;

        for (const part of item.directory?.directoryParts ?? []) {
            if (!node.children.has(part)) {
                const pathParts = [...node.pathParts, part];

                node.children.set(part, {
                    name: part,
                    pathParts,
                    pathKey: pathParts.join("/"),
                    children: new Map(),
                    items: []
                });
            }

            node = node.children.get(part);
            node.items.push(item);
        }
    }

    return root;
}

function findDirectoryNode(root, pathKey) {
    if (!pathKey) return root;

    let node = root;

    for (const part of String(pathKey).split("/").filter(Boolean)) {
        node = node.children.get(part);
        if (!node) return null;
    }

    return node;
}

function renderDirectoryMode() {
    const viewDocument = dv.container.ownerDocument ?? document;
    const books = Array.from(new Set(
        items.map(item => item.directory?.book).filter(Boolean)
    )).sort(QUESTION_NAME_COLLATOR.compare);

    if (books.length === 0) {
        dv.paragraph(
            `💡 ${directoryRoot} 下没有找到可筛选的题目笔记。`
        );
        return;
    }

    items.sort((a, b) => QUESTION_NAME_COLLATOR.compare(
        a.directory?.relativePath ?? a.page.file.path,
        b.directory?.relativePath ?? b.page.file.path
    ));

    const storageKey =
        "question-recommender:directory:" +
        encodeURIComponent(String(app.vault.getName?.() ?? "vault")) +
        ":" + normalizeVaultPath(currentFile.file.path);

    function readState() {
        try {
            const storage = viewDocument.defaultView?.localStorage;
            const raw = storage?.getItem(storageKey);
            const state = raw ? JSON.parse(raw) : null;
            return state && typeof state === "object" ? state : {};
        } catch (error) {
            console.warn("目录筛选进度读取失败：", error);
            return {};
        }
    }

    function writeState() {
        try {
            viewDocument.defaultView?.localStorage?.setItem(
                storageKey,
                JSON.stringify({
                    book: selectedBook,
                    directoryPath: selectedDirectoryPath,
                    stateFilter,
                    searchText,
                    basketPaths: Array.from(basketPaths),
                    basketMode,
                    batchPanelOpen,
                    currentItemPath:
                        queueItems[currentIndex]?.page?.file?.path ?? null
                })
            );
        } catch (error) {
            console.warn("目录筛选进度保存失败：", error);
        }
    }

    const storedState = readState();
    const itemByPath = new Map(items.map(item => [
        normalizeVaultPath(item.page.file.path),
        item
    ]));
    const configuredBook = String(VIEW_OPTIONS.book ?? "").trim();
    let selectedBook = books.includes(configuredBook)
        ? configuredBook
        : books.includes(storedState.book)
            ? storedState.book
            : books[0];
    let selectedDirectoryPath = String(
        storedState.directoryPath ?? ""
    );
    let stateFilter = ["pending", "keep", "skip", "all"].includes(
        storedState.stateFilter
    )
        ? storedState.stateFilter
        : "pending";
    let searchText = String(storedState.searchText ?? "").trim();
    let basketPaths = new Set(
        (Array.isArray(storedState.basketPaths)
            ? storedState.basketPaths
            : [])
            .map(normalizeVaultPath)
            .filter(path => itemByPath.has(path))
    );
    let basketMode = Boolean(
        storedState.basketMode && basketPaths.size > 0
    );
    let batchPanelOpen = Boolean(storedState.batchPanelOpen);
    let currentIndex = 0;
    let bookItems = [];
    let directoryTree = null;
    let selectedDirectoryNode = null;
    let queueItems = [];
    let curationWriteInProgress = false;

    dv.container.tabIndex = 0;

    const headerEl = viewDocument.createElement("header");
    headerEl.className = "question-directory-header";

    const headingEl = viewDocument.createElement("h3");
    headingEl.className = "question-directory-title";
    headingEl.textContent = "📚 按习题册目录筛选";

    const descriptionEl = viewDocument.createElement("p");
    descriptionEl.className = "question-directory-description";
    descriptionEl.textContent =
        "按目录批量装入刷题篮，再集中刷题；1 保留 · 2 跳过 · 0 待筛。";

    headerEl.appendChild(headingEl);
    headerEl.appendChild(descriptionEl);

    const toolbarEl = viewDocument.createElement("div");
    toolbarEl.className = "question-directory-toolbar";

    const bookSelectEl = viewDocument.createElement("select");
    bookSelectEl.className = "question-directory-select";
    bookSelectEl.setAttribute("aria-label", "选择习题册");

    for (const book of books) {
        const optionEl = viewDocument.createElement("option");
        optionEl.value = book;
        optionEl.textContent = book;
        bookSelectEl.appendChild(optionEl);
    }

    bookSelectEl.value = selectedBook;

    const filterSelectEl = viewDocument.createElement("select");
    filterSelectEl.className = "question-directory-select";
    filterSelectEl.setAttribute("aria-label", "选择筛选状态");

    for (const option of [
        ["pending", "只看待筛"],
        ["keep", "只看已保留"],
        ["skip", "只看已跳过"],
        ["all", "全部状态"]
    ]) {
        const optionEl = viewDocument.createElement("option");
        optionEl.value = option[0];
        optionEl.textContent = option[1];
        filterSelectEl.appendChild(optionEl);
    }

    filterSelectEl.value = stateFilter;

    const searchInputEl = viewDocument.createElement("input");
    searchInputEl.className = "question-directory-search";
    searchInputEl.type = "search";
    searchInputEl.placeholder = "搜索题目 ID / 文件名";
    searchInputEl.value = searchText;
    searchInputEl.setAttribute("aria-label", "搜索题目");

    const exportButtonEl = viewDocument.createElement("button");
    exportButtonEl.type = "button";
    exportButtonEl.className = "question-print-button";

    toolbarEl.appendChild(bookSelectEl);
    toolbarEl.appendChild(filterSelectEl);
    toolbarEl.appendChild(searchInputEl);
    toolbarEl.appendChild(exportButtonEl);

    const summaryEl = viewDocument.createElement("div");
    summaryEl.className = "question-directory-summary";
    summaryEl.setAttribute("aria-live", "polite");

    const progressTrackEl = viewDocument.createElement("div");
    progressTrackEl.className = "question-directory-progress-track";

    const progressBarEl = viewDocument.createElement("div");
    progressBarEl.className = "question-directory-progress-bar";
    progressTrackEl.appendChild(progressBarEl);

    const basketBarEl = viewDocument.createElement("section");
    basketBarEl.className = "question-directory-basket-bar";
    basketBarEl.setAttribute("aria-live", "polite");

    const batchPanelEl = viewDocument.createElement("section");
    batchPanelEl.className = "question-directory-batch-panel";

    const layoutEl = viewDocument.createElement("div");
    layoutEl.className = "question-directory-layout";

    const sidebarEl = viewDocument.createElement("aside");
    sidebarEl.className = "question-directory-sidebar";

    const sidebarTitleEl = viewDocument.createElement("h4");
    sidebarTitleEl.textContent = "目录";

    const directoryListEl = viewDocument.createElement("div");
    directoryListEl.className = "question-directory-list";

    sidebarEl.appendChild(sidebarTitleEl);
    sidebarEl.appendChild(directoryListEl);

    const mainEl = viewDocument.createElement("main");
    mainEl.className = "question-directory-main";

    const cardEl = viewDocument.createElement("article");
    cardEl.className = "question-directory-card";
    mainEl.appendChild(cardEl);

    layoutEl.appendChild(sidebarEl);
    layoutEl.appendChild(mainEl);

    dv.container.appendChild(headerEl);
    dv.container.appendChild(toolbarEl);
    dv.container.appendChild(summaryEl);
    dv.container.appendChild(progressTrackEl);
    dv.container.appendChild(basketBarEl);
    dv.container.appendChild(batchPanelEl);
    dv.container.appendChild(layoutEl);

    function itemMatchesState(item) {
        if (stateFilter === "all") return true;
        if (stateFilter === "pending") return item.curation === null;
        return item.curation === stateFilter;
    }

    function itemMatchesSearch(item) {
        const wanted = searchText.toLocaleLowerCase("zh-CN");
        if (!wanted) return true;

        return [
            item.page.file.name,
            item.page.file.path,
            item.directory?.relativePath
        ].some(value => String(value ?? "")
            .toLocaleLowerCase("zh-CN")
            .includes(wanted));
    }

    function getSortedChildren(node) {
        return Array.from(node.children.values()).sort((a, b) =>
            QUESTION_NAME_COLLATOR.compare(a.name, b.name)
        );
    }

    function rebuildBookTree() {
        bookItems = items.filter(
            item => item.directory?.book === selectedBook
        );
        directoryTree = buildDirectoryTree(bookItems);
        selectedDirectoryNode = findDirectoryNode(
            directoryTree,
            selectedDirectoryPath
        );

        if (!selectedDirectoryNode) {
            selectedDirectoryPath = "";
            selectedDirectoryNode = directoryTree;
        }
    }

    function rebuildQueue(options = {}) {
        const previousIndex = currentIndex;
        const wantedPath = options.currentItemPath ?? null;

        queueItems = basketMode
            ? Array.from(basketPaths)
                .map(path => itemByPath.get(path))
                .filter(Boolean)
            : getDirectoryCandidateItems();

        if (wantedPath) {
            const matchedIndex = queueItems.findIndex(
                item => item.page.file.path === wantedPath
            );

            currentIndex = matchedIndex >= 0 ? matchedIndex : 0;
        } else if (options.keepIndex) {
            currentIndex = Math.min(
                previousIndex,
                Math.max(0, queueItems.length - 1)
            );
        } else {
            currentIndex = 0;
        }

        displayedItems = queueItems[currentIndex]
            ? [queueItems[currentIndex]]
            : [];
    }

    function getDirectoryCandidateItems() {
        return selectedDirectoryNode.items.filter(item =>
            itemMatchesState(item) && itemMatchesSearch(item)
        );
    }

    function getItemPath(item) {
        return normalizeVaultPath(item?.page?.file?.path);
    }

    function goToQueueIndex(nextIndex, options = {}) {
        if (queueItems.length === 0) return;

        const numericIndex = Number(nextIndex);
        if (!Number.isFinite(numericIndex)) return;

        currentIndex = Math.max(
            0,
            Math.min(queueItems.length - 1, Math.trunc(numericIndex))
        );
        displayedItems = [queueItems[currentIndex]];
        renderAll();

        if (options.scrollToCard) {
            requestAnimationFrame(() => {
                cardEl.scrollIntoView?.({
                    behavior: "smooth",
                    block: "start"
                });
            });
        }
    }

    function createImageGallery(item, imageLinks, kind) {
        const galleryEl = viewDocument.createElement("div");
        galleryEl.className =
            `question-directory-images is-${kind}`;

        for (const imageLink of imageLinks) {
            const imageFile = resolvePrintImageFile(item, imageLink);

            if (!imageFile) {
                const missingEl = viewDocument.createElement("p");
                missingEl.className = "question-directory-image-missing";
                missingEl.textContent = "图片已移动或无法定位。";
                galleryEl.appendChild(missingEl);
                continue;
            }

            const imageEl = viewDocument.createElement("img");
            imageEl.className = "question-directory-image";
            imageEl.loading = "lazy";
            imageEl.alt = `${item.page.file.name} · ${imageFile.name}`;
            imageEl.src = app.vault.getResourcePath(imageFile);
            imageEl.addEventListener("error", () => {
                const missingEl = viewDocument.createElement("p");
                missingEl.className = "question-directory-image-missing";
                missingEl.textContent = `图片加载失败：${imageFile.name}`;
                imageEl.replaceWith(missingEl);
            }, { once: true });

            galleryEl.appendChild(imageEl);
        }

        return galleryEl;
    }

    function ensureItemImages(item) {
        if (!Array.isArray(item.images)) {
            item.images = getQuestionImages(item.page, item.sourceFile);
        }

        if (!Array.isArray(item.answerImages)) {
            item.answerImages = getAnswerImages(
                item.page,
                item.sourceFile
            );
        }
    }

    function getCurationLabel(item) {
        if (item.curation === "keep") return "✅ 已保留";
        if (item.curation === "skip") return "⏭ 已跳过";
        return "🕓 待筛";
    }

    function getDirectoryQuestionName(item) {
        const file = item?.page?.file ?? {};
        const pathName = normalizeVaultPath(file.path)
            .split("/")
            .filter(Boolean)
            .pop() ?? "";
        const fallbackName = pathName.replace(/\.md$/i, "");

        return String(
            file.basename ??
            file.name ??
            fallbackName ??
            "未命名题目"
        ).replace(/\.md$/i, "");
    }

    function parseQuestionIndexExpression(expression, maximum) {
        const indices = [];
        const seen = new Set();
        const invalidTokens = [];
        const normalized = String(expression ?? "")
            .replace(/[，、；;]/g, ",")
            .trim();

        for (const rawToken of normalized.split(/[\s,]+/)) {
            const token = rawToken.trim();
            if (!token) continue;

            const singleMatch = token.match(/^(\d+)$/);
            const rangeMatch = token.match(/^(\d+)\s*[-~～—至]\s*(\d+)$/);
            let numbers = [];

            if (singleMatch) {
                numbers = [Number(singleMatch[1])];
            } else if (rangeMatch) {
                const start = Number(rangeMatch[1]);
                const end = Number(rangeMatch[2]);
                const step = start <= end ? 1 : -1;

                for (let value = start; ; value += step) {
                    numbers.push(value);
                    if (value === end) break;
                }
            } else {
                invalidTokens.push(token);
                continue;
            }

            for (const number of numbers) {
                if (number < 1 || number > maximum) {
                    invalidTokens.push(String(number));
                    continue;
                }

                const index = number - 1;
                if (seen.has(index)) continue;
                seen.add(index);
                indices.push(index);
            }
        }

        return { indices, invalidTokens };
    }

    function addItemsToBasket(candidates) {
        let added = 0;

        for (const candidate of candidates) {
            const path = getItemPath(candidate);
            if (!path || basketPaths.has(path)) continue;
            basketPaths.add(path);
            added += 1;
        }

        return added;
    }

    function removeItemsFromBasket(candidates) {
        let removed = 0;

        for (const candidate of candidates) {
            if (basketPaths.delete(getItemPath(candidate))) removed += 1;
        }

        if (basketPaths.size === 0) basketMode = false;
        return removed;
    }

    function normalizeBasketOrder() {
        basketPaths = new Set(
            items
                .map(getItemPath)
                .filter(path => basketPaths.has(path))
        );
    }

    function renderBasketBar() {
        basketBarEl.replaceChildren();
        basketBarEl.classList.toggle("is-active", basketMode);

        const copyEl = viewDocument.createElement("div");
        copyEl.className = "question-directory-basket-copy";

        const titleEl = viewDocument.createElement("strong");
        titleEl.textContent = basketMode
            ? `🧺 正在刷题篮 · ${basketPaths.size} 题`
            : `🧺 刷题篮 · 已选 ${basketPaths.size} 题`;

        const hintEl = viewDocument.createElement("span");
        hintEl.textContent = basketMode
            ? "当前只在已选题目之间切换。"
            : "按真实文件路径保存，可跨目录、跨习题册组合。";

        copyEl.appendChild(titleEl);
        copyEl.appendChild(hintEl);

        const actionsEl = viewDocument.createElement("div");
        actionsEl.className = "question-directory-basket-actions";

        const batchButtonEl = viewDocument.createElement("button");
        batchButtonEl.type = "button";
        batchButtonEl.setAttribute("aria-label", "打开批量选题");
        batchButtonEl.textContent = basketMode
            ? "← 返回目录选题"
            : batchPanelOpen
                ? "收起批量选题"
                : "＋ 批量选题";
        batchButtonEl.addEventListener("click", () => {
            if (basketMode) {
                basketMode = false;
                batchPanelOpen = true;
                rebuildQueue();
            } else {
                batchPanelOpen = !batchPanelOpen;
            }
            renderAll();
        });

        const startButtonEl = viewDocument.createElement("button");
        startButtonEl.type = "button";
        startButtonEl.className = "question-directory-basket-start";
        startButtonEl.setAttribute("aria-label", "开始刷题篮");
        startButtonEl.textContent = basketMode
            ? `刷题篮进行中（${basketPaths.size}）`
            : `▶ 开始刷这 ${basketPaths.size} 题`;
        startButtonEl.disabled = basketMode || basketPaths.size === 0;
        startButtonEl.addEventListener("click", () => {
            const currentPath = getItemPath(queueItems[currentIndex]);
            normalizeBasketOrder();
            basketMode = true;
            batchPanelOpen = false;
            rebuildQueue({
                currentItemPath: basketPaths.has(currentPath)
                    ? currentPath
                    : null
            });
            renderAll();
        });

        const clearButtonEl = viewDocument.createElement("button");
        clearButtonEl.type = "button";
        clearButtonEl.className = "question-directory-basket-clear";
        clearButtonEl.setAttribute("aria-label", "清空刷题篮");
        clearButtonEl.textContent = "清空";
        clearButtonEl.disabled = basketPaths.size === 0;
        clearButtonEl.addEventListener("click", () => {
            basketPaths.clear();
            basketMode = false;
            rebuildQueue();
            renderAll();
        });

        actionsEl.appendChild(batchButtonEl);
        actionsEl.appendChild(startButtonEl);
        actionsEl.appendChild(clearButtonEl);
        basketBarEl.appendChild(copyEl);
        basketBarEl.appendChild(actionsEl);
    }

    function renderBatchPanel() {
        batchPanelEl.replaceChildren();
        batchPanelEl.hidden = !batchPanelOpen || basketMode;
        if (batchPanelEl.hidden) return;

        const candidates = getDirectoryCandidateItems();
        const getSelectedHere = () => candidates.filter(item =>
            basketPaths.has(getItemPath(item))
        ).length;

        const headerEl = viewDocument.createElement("div");
        headerEl.className = "question-directory-batch-header";

        const headerCopyEl = viewDocument.createElement("div");
        const titleEl = viewDocument.createElement("strong");
        titleEl.textContent = "批量选择当前目录";
        const subtitleEl = viewDocument.createElement("span");
        subtitleEl.textContent =
            `${selectedBook} / ${selectedDirectoryPath || "全部目录"} · ` +
            `已选 ${getSelectedHere()}/${candidates.length}`;
        headerCopyEl.appendChild(titleEl);
        headerCopyEl.appendChild(subtitleEl);

        const closeButtonEl = viewDocument.createElement("button");
        closeButtonEl.type = "button";
        closeButtonEl.textContent = "关闭";
        closeButtonEl.addEventListener("click", () => {
            batchPanelOpen = false;
            renderAll();
        });

        headerEl.appendChild(headerCopyEl);
        headerEl.appendChild(closeButtonEl);

        const rangeEl = viewDocument.createElement("div");
        rangeEl.className = "question-directory-batch-range";

        const rangeInputEl = viewDocument.createElement("input");
        rangeInputEl.type = "text";
        rangeInputEl.placeholder = "按当前目录序号，如 1,3-5,8";
        rangeInputEl.setAttribute("aria-label", "输入批量题号或区间");

        const rangeButtonEl = viewDocument.createElement("button");
        rangeButtonEl.type = "button";
        rangeButtonEl.textContent = "加入刷题篮";
        rangeButtonEl.setAttribute("aria-label", "按题号加入刷题篮");

        const addByExpression = () => {
            const result = parseQuestionIndexExpression(
                rangeInputEl.value,
                candidates.length
            );
            const added = addItemsToBasket(
                result.indices.map(index => candidates[index])
            );

            if (result.indices.length === 0) {
                new Notice("请输入有效序号，例如 1,3-5,8。", 4000);
                return;
            }

            if (result.invalidTokens.length > 0) {
                new Notice(
                    `已加入 ${added} 题；忽略无效项：` +
                    result.invalidTokens.slice(0, 6).join("、"),
                    5000
                );
            } else {
                new Notice(`已向刷题篮加入 ${added} 题。`, 2600);
            }

            rangeInputEl.value = "";
            renderAll();
        };

        rangeButtonEl.addEventListener("click", addByExpression);
        rangeInputEl.addEventListener("keydown", event => {
            if (event.key !== "Enter") return;
            event.preventDefault();
            addByExpression();
        });

        rangeEl.appendChild(rangeInputEl);
        rangeEl.appendChild(rangeButtonEl);

        const bulkActionsEl = viewDocument.createElement("div");
        bulkActionsEl.className = "question-directory-batch-actions";

        for (const [label, ariaLabel, handler] of [
            ["全选当前目录", "全选当前目录题目", () => {
                addItemsToBasket(candidates);
            }],
            ["反选当前目录", "反选当前目录题目", () => {
                for (const candidate of candidates) {
                    const path = getItemPath(candidate);
                    if (basketPaths.has(path)) basketPaths.delete(path);
                    else basketPaths.add(path);
                }
            }],
            ["移除当前目录", "移除当前目录题目", () => {
                removeItemsFromBasket(candidates);
            }]
        ]) {
            const buttonEl = viewDocument.createElement("button");
            buttonEl.type = "button";
            buttonEl.textContent = label;
            buttonEl.setAttribute("aria-label", ariaLabel);
            buttonEl.disabled = candidates.length === 0;
            buttonEl.addEventListener("click", () => {
                handler();
                renderAll();
            });
            bulkActionsEl.appendChild(buttonEl);
        }

        const coordinateHintEl = viewDocument.createElement("p");
        coordinateHintEl.className = "question-directory-coordinate-hint";
        coordinateHintEl.textContent =
            "刷题篮保存真实路径；后续可直接接入 1.1.1 目录坐标清单。";

        const listEl = viewDocument.createElement("div");
        listEl.className = "question-directory-batch-list";

        if (candidates.length === 0) {
            const emptyEl = viewDocument.createElement("div");
            emptyEl.className = "question-directory-batch-empty";
            emptyEl.textContent = "当前目录与筛选条件下没有可选题目。";
            listEl.appendChild(emptyEl);
        } else {
            const numberWidth = Math.max(2, String(candidates.length).length);

            candidates.forEach((candidate, index) => {
                const rowEl = viewDocument.createElement("label");
                rowEl.className = "question-directory-batch-row";

                const checkboxEl = viewDocument.createElement("input");
                checkboxEl.type = "checkbox";
                checkboxEl.checked = basketPaths.has(getItemPath(candidate));
                checkboxEl.setAttribute(
                    "aria-label",
                    `选择第 ${index + 1} 题`
                );
                checkboxEl.addEventListener("change", () => {
                    if (checkboxEl.checked) addItemsToBasket([candidate]);
                    else removeItemsFromBasket([candidate]);
                    renderBasketBar();
                    subtitleEl.textContent =
                        `${selectedBook} / ` +
                        `${selectedDirectoryPath || "全部目录"} · ` +
                        `已选 ${getSelectedHere()}/${candidates.length}`;
                    writeState();
                });

                const indexEl = viewDocument.createElement("span");
                indexEl.className = "question-directory-batch-index";
                indexEl.textContent = String(index + 1)
                    .padStart(numberWidth, "0");

                const nameEl = viewDocument.createElement("span");
                nameEl.className = "question-directory-batch-name";
                nameEl.textContent = getDirectoryQuestionName(candidate);

                const stateEl = viewDocument.createElement("span");
                stateEl.className = "question-directory-batch-state";
                stateEl.textContent = candidate.curation === "keep"
                    ? "保留"
                    : candidate.curation === "skip"
                        ? "跳过"
                        : "待筛";

                rowEl.appendChild(checkboxEl);
                rowEl.appendChild(indexEl);
                rowEl.appendChild(nameEl);
                rowEl.appendChild(stateEl);
                listEl.appendChild(rowEl);
            });
        }

        batchPanelEl.appendChild(headerEl);
        batchPanelEl.appendChild(rangeEl);
        batchPanelEl.appendChild(bulkActionsEl);
        batchPanelEl.appendChild(coordinateHintEl);
        batchPanelEl.appendChild(listEl);
    }

    async function persistCuration(item, nextCuration) {
        if (curationWriteInProgress) return;

        const targetFile = resolveQuestionSourceFile(item);

        if (!targetFile || targetFile.extension !== "md") {
            new Notice("❌ 无法定位对应题目笔记。", 5000);
            return;
        }

        curationWriteInProgress = true;
        renderCard();

        try {
            const changedAt = localDateTime();

            await app.fileManager.processFrontMatter(
                targetFile,
                frontmatter => {
                    if (nextCuration === null) {
                        delete frontmatter.curation;
                        delete frontmatter.curation_at;
                    } else {
                        frontmatter.curation = nextCuration;
                        frontmatter.curation_at = changedAt;
                    }
                }
            );

            item.curation = nextCuration;
            item.curationAt = nextCuration === null ? null : changedAt;

            const oldIndex = currentIndex;
            rebuildQueue({ keepIndex: true });
            currentIndex = Math.min(
                oldIndex,
                Math.max(0, queueItems.length - 1)
            );
            displayedItems = queueItems[currentIndex]
                ? [queueItems[currentIndex]]
                : [];

            new Notice(
                nextCuration === "keep"
                    ? `✅ 已保留：${item.page.file.name}`
                    : nextCuration === "skip"
                        ? `⏭ 已跳过：${item.page.file.name}`
                        : `↩ 已恢复待筛：${item.page.file.name}`,
                2600
            );
        } catch (error) {
            console.error("目录筛选状态写入失败：", error);
            new Notice("❌ 筛选状态写入失败，请重试。", 5000);
        } finally {
            curationWriteInProgress = false;
            renderAll();
            dv.container.focus?.({ preventScroll: true });
        }
    }

    function renderDirectoryList() {
        directoryListEl.replaceChildren();

        function appendNode(node, depth) {
            const counts = getCurationCounts(node.items);
            const buttonEl = viewDocument.createElement("button");
            buttonEl.type = "button";
            buttonEl.className = "question-directory-node";
            buttonEl.classList.toggle(
                "is-active",
                node.pathKey === selectedDirectoryPath
            );
            buttonEl.style.setProperty(
                "--question-directory-depth",
                String(depth)
            );
            const labelEl = viewDocument.createElement("span");
            labelEl.className = "question-directory-node-label";
            labelEl.textContent =
                `${depth > 0 ? "↳ " : ""}${node.name}`;

            const countEl = viewDocument.createElement("span");
            countEl.className = "question-directory-node-count";
            countEl.textContent = `${counts.pending}/${counts.total}`;

            buttonEl.appendChild(labelEl);
            buttonEl.appendChild(countEl);
            buttonEl.title =
                `待筛 ${counts.pending} · 保留 ${counts.keep} · ` +
                `跳过 ${counts.skip} · 共 ${counts.total}`;
            buttonEl.addEventListener("click", () => {
                basketMode = false;
                selectedDirectoryPath = node.pathKey;
                selectedDirectoryNode = node;
                rebuildQueue();
                renderAll();
            });
            directoryListEl.appendChild(buttonEl);

            for (const child of getSortedChildren(node)) {
                appendNode(child, depth + 1);
            }
        }

        appendNode(directoryTree, 0);
    }

    function renderCard() {
        cardEl.replaceChildren();

        const item = queueItems[currentIndex];

        if (!item) {
            const emptyEl = viewDocument.createElement("div");
            emptyEl.className = "question-directory-empty";
            emptyEl.textContent = stateFilter === "pending"
                ? "🎉 当前目录已经没有待筛题目。"
                : "当前目录和筛选条件下没有题目。";
            cardEl.appendChild(emptyEl);
            return;
        }

        ensureItemImages(item);

        const cardHeaderEl = viewDocument.createElement("div");
        cardHeaderEl.className = "question-directory-card-header";

        const cardTitleEl = viewDocument.createElement("div");
        cardTitleEl.className = "question-directory-card-title";
        cardTitleEl.appendChild(
            createRandomReviewSourceLink(item, viewDocument)
        );

        const badgeEl = viewDocument.createElement("span");
        badgeEl.className =
            `question-directory-curation-badge ` +
            `is-${item.curation ?? "pending"}`;
        badgeEl.textContent = getCurationLabel(item);

        cardHeaderEl.appendChild(cardTitleEl);
        cardHeaderEl.appendChild(badgeEl);

        const pathEl = viewDocument.createElement("p");
        pathEl.className = "question-directory-path";
        pathEl.textContent = [
            item.directory.book,
            ...item.directory.directoryParts
        ].join(" / ");

        const actionEl = viewDocument.createElement("div");
        actionEl.className = "question-directory-actions";

        for (const action of [
            ["keep", "1 · 保留", "is-keep"],
            ["skip", "2 · 跳过", "is-skip"],
            [null, "0 · 恢复待筛", "is-reset"]
        ]) {
            const buttonEl = viewDocument.createElement("button");
            buttonEl.type = "button";
            buttonEl.className =
                `question-directory-action ${action[2]}`;
            buttonEl.textContent = action[1];
            buttonEl.disabled = curationWriteInProgress;
            buttonEl.addEventListener("click", () => {
                void persistCuration(item, action[0]);
            });
            actionEl.appendChild(buttonEl);
        }

        const basketToggleButtonEl = viewDocument.createElement("button");
        basketToggleButtonEl.type = "button";
        basketToggleButtonEl.className =
            "question-directory-action is-basket";
        basketToggleButtonEl.setAttribute(
            "aria-label",
            "切换当前题目的刷题篮状态"
        );
        basketToggleButtonEl.textContent = basketPaths.has(getItemPath(item))
            ? "✓ 已在刷题篮"
            : "＋ 加入刷题篮";
        basketToggleButtonEl.addEventListener("click", () => {
            const path = getItemPath(item);

            if (basketPaths.has(path)) {
                basketPaths.delete(path);

                if (basketMode) {
                    if (basketPaths.size === 0) basketMode = false;
                    rebuildQueue({ keepIndex: true });
                }
            } else {
                basketPaths.add(path);
            }

            renderAll();
        });
        actionEl.appendChild(basketToggleButtonEl);

        const levelPanelEl = viewDocument.createElement("div");
        levelPanelEl.className = "question-directory-level-panel";

        const levelLabelEl = viewDocument.createElement("span");
        levelLabelEl.textContent = "掌握度";
        levelPanelEl.appendChild(levelLabelEl);
        levelPanelEl.appendChild(createLevelControl(item));

        const locatorEl = viewDocument.createElement("div");
        locatorEl.className = "question-directory-locator";

        const locatorTitleEl = viewDocument.createElement("div");
        locatorTitleEl.className = "question-directory-locator-title";
        locatorTitleEl.textContent = basketMode
            ? `刷题篮 · ${currentIndex + 1}/${queueItems.length}`
            : `当前目录题目 · ${currentIndex + 1}/${queueItems.length}`;

        const locatorControlsEl = viewDocument.createElement("div");
        locatorControlsEl.className = "question-directory-locator-controls";

        const questionSelectEl = viewDocument.createElement("select");
        questionSelectEl.className = "question-directory-question-select";
        questionSelectEl.setAttribute("aria-label", "选择当前目录题目");

        const numberWidth = Math.max(2, String(queueItems.length).length);
        queueItems.forEach((candidate, index) => {
            const optionEl = viewDocument.createElement("option");
            const statusMark = candidate.curation === "keep"
                ? "✓"
                : candidate.curation === "skip"
                    ? "—"
                    : "○";
            optionEl.value = String(index);
            optionEl.textContent =
                `${String(index + 1).padStart(numberWidth, "0")} ` +
                `${statusMark}  ${getDirectoryQuestionName(candidate)}`;
            questionSelectEl.appendChild(optionEl);
        });
        questionSelectEl.value = String(currentIndex);
        questionSelectEl.addEventListener("change", () => {
            goToQueueIndex(Number(questionSelectEl.value), {
                scrollToCard: false
            });
        });

        const jumpEl = viewDocument.createElement("div");
        jumpEl.className = "question-directory-jump";

        const jumpInputEl = viewDocument.createElement("input");
        jumpInputEl.className = "question-directory-jump-input";
        jumpInputEl.type = "number";
        jumpInputEl.min = "1";
        jumpInputEl.max = String(queueItems.length);
        jumpInputEl.step = "1";
        jumpInputEl.value = String(currentIndex + 1);
        jumpInputEl.setAttribute("aria-label", "输入题目序号");
        jumpInputEl.title = `输入 1～${queueItems.length}`;

        const jumpButtonEl = viewDocument.createElement("button");
        jumpButtonEl.type = "button";
        jumpButtonEl.className = "question-directory-jump-button";
        jumpButtonEl.textContent = "跳转";
        jumpButtonEl.setAttribute("aria-label", "跳转到输入题号");

        const jumpToInput = () => {
            const requestedNumber = Number(jumpInputEl.value);
            if (!Number.isFinite(requestedNumber)) return;
            goToQueueIndex(requestedNumber - 1, {
                scrollToCard: false
            });
        };

        jumpButtonEl.addEventListener("click", jumpToInput);
        jumpInputEl.addEventListener("keydown", event => {
            if (event.key !== "Enter") return;
            event.preventDefault();
            jumpToInput();
        });

        jumpEl.appendChild(jumpInputEl);
        jumpEl.appendChild(jumpButtonEl);
        locatorControlsEl.appendChild(questionSelectEl);
        locatorControlsEl.appendChild(jumpEl);
        locatorEl.appendChild(locatorTitleEl);
        locatorEl.appendChild(locatorControlsEl);

        const navigationEl = viewDocument.createElement("div");
        navigationEl.className = "question-directory-navigation";

        const previousButtonEl = viewDocument.createElement("button");
        previousButtonEl.type = "button";
        previousButtonEl.textContent = "← 上一题 K";
        previousButtonEl.disabled = currentIndex <= 0;
        previousButtonEl.addEventListener("click", () => {
            goToQueueIndex(currentIndex - 1);
        });

        const positionEl = viewDocument.createElement("span");
        positionEl.textContent =
            `第 ${currentIndex + 1} / ${queueItems.length} 题`;

        const nextButtonEl = viewDocument.createElement("button");
        nextButtonEl.type = "button";
        nextButtonEl.textContent = "下一题 J →";
        nextButtonEl.disabled = currentIndex >= queueItems.length - 1;
        nextButtonEl.addEventListener("click", () => {
            goToQueueIndex(currentIndex + 1);
        });

        navigationEl.appendChild(previousButtonEl);
        navigationEl.appendChild(positionEl);
        navigationEl.appendChild(nextButtonEl);

        cardEl.appendChild(cardHeaderEl);
        cardEl.appendChild(pathEl);
        cardEl.appendChild(actionEl);
        cardEl.appendChild(levelPanelEl);
        cardEl.appendChild(locatorEl);
        cardEl.appendChild(navigationEl);

        if (item.images.length > 0) {
            cardEl.appendChild(
                createImageGallery(item, item.images, "question")
            );
        } else {
            const noImageEl = viewDocument.createElement("div");
            noImageEl.className = "question-directory-no-image";
            noImageEl.textContent =
                "本题做题本漏印或没有题图；点击题目名称打开 OCR 重建文本。";
            cardEl.appendChild(noImageEl);
        }

        if (item.answerImages.length > 0) {
            const answerDetailsEl = viewDocument.createElement("details");
            answerDetailsEl.className = "question-directory-answer";

            const answerSummaryEl = viewDocument.createElement("summary");
            answerSummaryEl.textContent =
                `展开答案图（${item.answerImages.length}）`;
            answerDetailsEl.appendChild(answerSummaryEl);
            answerDetailsEl.appendChild(
                createImageGallery(item, item.answerImages, "answer")
            );
            cardEl.appendChild(answerDetailsEl);
        }
    }

    function renderSummary() {
        const bookCounts = getCurationCounts(bookItems);
        const directoryCounts = getCurationCounts(
            selectedDirectoryNode.items
        );
        const completed = bookCounts.keep + bookCounts.skip;
        const percent = bookCounts.total > 0
            ? Math.round(completed / bookCounts.total * 100)
            : 0;
        const directoryLabel = selectedDirectoryPath || "全部目录";

        summaryEl.textContent = basketMode
            ? `刷题篮模式：共 ${queueItems.length} 题，` +
                `可跨习题册连续切题；目录筛选暂不影响当前队列。`
            : `${selectedBook} · ${directoryLabel}：` +
                `待筛 ${directoryCounts.pending}，保留 ${directoryCounts.keep}，` +
                `跳过 ${directoryCounts.skip}，共 ${directoryCounts.total}；` +
                `当前队列 ${queueItems.length} 题。`;
        progressBarEl.style.width = `${percent}%`;
        progressBarEl.title =
            `${selectedBook} 已筛 ${completed}/${bookCounts.total}（${percent}%）`;

        exportButtonEl.disabled =
            printInProgress || queueItems.length === 0;
        exportButtonEl.textContent = printInProgress
            ? "⏳ 正在导出…"
            : `📑 导出当前队列（${Math.min(
                queueItems.length,
                CONFIG.maxResults
            )}）`;
    }

    function renderAll() {
        renderDirectoryList();
        renderSummary();
        renderBasketBar();
        renderBatchPanel();
        renderCard();
        writeState();
    }

    bookSelectEl.addEventListener("change", () => {
        basketMode = false;
        selectedBook = bookSelectEl.value;
        selectedDirectoryPath = "";
        rebuildBookTree();
        rebuildQueue();
        renderAll();
    });

    filterSelectEl.addEventListener("change", () => {
        basketMode = false;
        stateFilter = filterSelectEl.value;
        rebuildQueue();
        renderAll();
    });

    searchInputEl.addEventListener("input", () => {
        basketMode = false;
        searchText = searchInputEl.value.trim();
        rebuildQueue();
        renderAll();
    });

    exportButtonEl.addEventListener("click", async () => {
        if (printInProgress || queueItems.length === 0) return;

        const originalDisplayedItems = displayedItems;
        const exportItems = queueItems.slice(0, CONFIG.maxResults);

        for (const item of exportItems) ensureItemImages(item);

        if (queueItems.length > exportItems.length) {
            new Notice(
                `ℹ️ 当前队列 ${queueItems.length} 题，` +
                `本次按上限导出前 ${exportItems.length} 题。`,
                5000
            );
        }

        displayedItems = exportItems;
        renderSummary();

        try {
            await printCurrentQuestions();
        } finally {
            displayedItems = originalDisplayedItems;
            renderSummary();
        }
    });

    dv.container.addEventListener("keydown", event => {
        const tagName = String(event.target?.tagName ?? "").toUpperCase();

        if (["INPUT", "SELECT", "TEXTAREA"].includes(tagName)) {
            return;
        }

        const item = queueItems[currentIndex];
        if (!item || curationWriteInProgress) return;

        const key = String(event.key ?? "").toLowerCase();

        if (key === "1") {
            event.preventDefault();
            void persistCuration(item, "keep");
        } else if (key === "2") {
            event.preventDefault();
            void persistCuration(item, "skip");
        } else if (key === "0") {
            event.preventDefault();
            void persistCuration(item, null);
        } else if (key === "j" || key === "arrowright") {
            event.preventDefault();
            goToQueueIndex(currentIndex + 1);
        } else if (key === "k" || key === "arrowleft") {
            event.preventDefault();
            goToQueueIndex(currentIndex - 1);
        }
    });

    rebuildBookTree();
    rebuildQueue({
        currentItemPath: storedState.currentItemPath ?? null
    });
    renderAll();
    requestAnimationFrame(() => {
        dv.container.focus?.({ preventScroll: true });
    });
}

/* ================================================================
 * 13. 渲染推荐结果
 * ================================================================ */

if (DIRECTORY_MODE) {
    renderDirectoryMode();
    return;
}

if (items.length === 0) {
    const currentTagText = currentTags.join("、");

    dv.paragraph(
        `✅ 暂时没有找到同时包含 ${currentTagText}，` +
        "并且带有『题目』图片的页面。"
    );

    return;
}

if (RANDOM_REVIEW_MODE) {
    renderRandomReviewMode();
    return;
}

displayedItems = items.slice(0, CONFIG.maxResults);

const rows = displayedItems.map((item, index) => {
    const numberEl = document.createElement("span");
    numberEl.className = "question-order-number";
    numberEl.textContent = String(index + 1);
    item.orderNumberEl = numberEl;

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
        numberEl,
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

orderLockButtonEl = document.createElement("button");
orderLockButtonEl.type = "button";
orderLockButtonEl.className = "question-order-lock-button";

printButtonEl = document.createElement("button");
printButtonEl.type = "button";
printButtonEl.className = "question-print-button";
printButtonEl.title = "只打印当前可见题目的来源和题图";

filterSummaryEl = document.createElement("span");
filterSummaryEl.className = "question-filter-summary";

filterBarEl.appendChild(filterButtonEl);
filterBarEl.appendChild(orderLockButtonEl);
filterBarEl.appendChild(printButtonEl);
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

orderLockButtonEl.addEventListener("click", () => {
    if (questionOrderLocked) {
        if (!clearQuestionOrderLock()) {
            new Notice("❌ 无法解除当前题目顺序。", 4500);
            return;
        }

        questionOrderLocked = false;
        refreshRegressionFilterUI();
        new Notice("🔓 已解除固定；下次刷新将恢复动态排序。", 4000);
        return;
    }

    if (!writeQuestionOrderLock(items)) {
        new Notice("❌ 无法保存当前题目顺序。", 4500);
        return;
    }

    questionOrderLocked = true;
    refreshRegressionFilterUI();
    new Notice("📌 已固定当前题目顺序；评级刷新后也不会乱跳。", 4500);
});

printButtonEl.addEventListener("click", () => {
    void printCurrentQuestions();
});

dv.table(
    ["题号", "题目", "题图预览", "状态反馈"],
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
    if (DIRECTORY_MODE) return;

    const regressionScope = RANDOM_REVIEW_MODE
        ? displayedItems
        : items;
    let totalRegressedCount = 0;

    for (const item of regressionScope) {
        if (item.regressed) totalRegressedCount++;
    }

    let displayedRegressedCount = 0;
    let visibleQuestionNumber = 0;

    for (const item of displayedItems) {
        if (item.regressed) displayedRegressedCount++;

        const row = item.tableRow ??
            item.filterMarker?.closest("tr");
        const rowHidden = regressionOnly && !item.regressed;

        if (row) {
            item.tableRow = row;
            row.hidden = rowHidden;
        }

        if (!rowHidden) {
            visibleQuestionNumber++;

            if (item.orderNumberEl) {
                item.orderNumberEl.textContent = String(
                    visibleQuestionNumber
                );
            }
        }

        if (item.filterMarker) {
            item.filterMarker.inert = printInProgress;
            item.filterMarker.classList.toggle(
                "is-print-locked",
                printInProgress
            );
        }
    }

    const printableCount = regressionOnly
        ? displayedRegressedCount
        : displayedItems.length;

    if (titleEl) {
        if (RANDOM_REVIEW_MODE) {
            titleEl.textContent = regressionOnly
                ? `标签随机二刷 · 本组降级题 ${displayedRegressedCount} 道`
                : `标签随机二刷 · ${displayedItems.length} / ` +
                    `${randomReviewPool.length} 道`;
        } else {
            titleEl.textContent = regressionOnly
                ? `🚨 同类弱点题专项突破 · ${totalRegressedCount}题`
                : `🔗 同类题推荐拓展 · ${items.length}题`;
        }
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
        filterButtonEl.disabled =
            printInProgress ||
            displayedItems.length === 0;

        filterButtonEl.textContent = regressionOnly
            ? `🚨 仅看降级题：开（${totalRegressedCount}）`
            : `仅看降级题：关（${totalRegressedCount}）`;

        filterButtonEl.title = regressionOnly
            ? (RANDOM_REVIEW_MODE
                ? "点击显示本组全部题目"
                : "点击显示全部同类题")
            : "点击只显示当前等级低于历史峰值的题目";
    }

    if (filterSummaryEl) {
        if (RANDOM_REVIEW_MODE) {
            filterSummaryEl.textContent = regressionOnly
                ? `当前显示本组 ${displayedRegressedCount} 道待恢复题`
                : `当前显示本组 ${displayedItems.length} 道题`;
        } else {
            filterSummaryEl.textContent = regressionOnly
                ? `当前显示 ${displayedRegressedCount} 道待恢复题`
                : `当前显示 ${displayedItems.length} 道同类题`;
        }
    }

    if (printButtonEl) {
        printButtonEl.disabled =
            printInProgress ||
            printableCount === 0;

        printButtonEl.textContent =
            printInProgress
                ? "⏳ 正在导出…"
                : `📑 导出带目录 PDF（${printableCount}）`;
    }

    if (orderLockButtonEl) {
        orderLockButtonEl.classList.toggle(
            "is-active",
            questionOrderLocked
        );
        orderLockButtonEl.setAttribute(
            "aria-pressed",
            String(questionOrderLocked)
        );
        orderLockButtonEl.disabled =
            printInProgress || displayedItems.length === 0;
        orderLockButtonEl.textContent = questionOrderLocked
            ? "📌 当前顺序：已固定"
            : "📍 固定当前顺序";
        orderLockButtonEl.title = questionOrderLocked
            ? "点击解除固定；解除后下次刷新恢复动态优先级排序"
            : "保存当前完整题目顺序，评级导致视图刷新时仍保持不变";
    }

    if (randomReviewControls) {
        randomReviewControls.countInputEl.disabled = printInProgress;
        randomReviewControls.reviewedOnlyEl.disabled = printInProgress;
        randomReviewControls.drawButtonEl.disabled =
            printInProgress ||
            randomReviewPool.length === 0;
    }

    if (filterEmptyEl) {
        filterEmptyEl.hidden = !(
            regressionOnly &&
            totalRegressedCount === 0 &&
            displayedItems.length > 0
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
 * 13. 一次性修复旧任务
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

})();
