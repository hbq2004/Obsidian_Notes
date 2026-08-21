(async () => {
/******************************************************************
 * 错题打卡 + 错题筛选视图 V1
 *
 * 定位：补全题库闭环中缺失的一环 —— 做题结果记录。
 * question-recommender 管"掌握程度"（0~5 级评级 + 复习排期），
 * 本视图管"单次做题结果"（对 / 错 / 半对 / 蒙对），并据此：
 *
 * 1. 一键打卡：把当前状态写入笔记 frontmatter：
 *    - status         wrong | half | guessed | correct（清除=删除字段）
 *    - last_result    最近一次结果（同上）
 *    - wrong_count    累计做错次数（wrong/half/guessed 各 +1）
 *    - result_history 最近结果时间线（"YYYY-MM-DD HH:mm:ss | 结果"）
 *    - last_reviewed  最近打卡时间
 * 2. 错题筛选：默认只看 status ∈ {wrong, half, guessed} 的题；
 *    可切换"全部题目"模式批量打卡；
 *    可按学科 / 书 / 知识点收窄范围；
 *    统计面板实时汇总错题分布。
 * 3. 兼容旧数据：level ≤ 1（看不懂/首次看懂）与 regressed（降级）
 *    在"候选错题"模式中一并纳入，便于尚未打卡的老题也能被捞出来。
 * 4. 打印：复用 question-recommender 的带目录 PDF 导出。
 *
 * 使用：在笔记中插入 DataviewJS 代码块
 *   ```dataviewjs
 *   dv.view("_Scripts/wrong-question-filter")
 *   ```
 * 可选参数（input 对象）：
 *   dv.view("_Scripts/wrong-question-filter", {
 *       mode: "wrong" | "all",           // 初始范围
 *       subject: "AM",                   // 初始学科
 *       book: "27_900",                  // 初始书
 *       knowledge: "分部积分"             // 初始知识点
 *   })
 ******************************************************************/

/* ================================================================
 * 0. 配置
 * ================================================================ */
const CONFIG = {
    questionMarker: "题目",

    maxResults: 500,

    /* 打印前等待每张题图完成加载的最长时间 */
    printImageLoadTimeoutMs: 15000,

    /* 结果历史保留条数 */
    historyLimit: 30,

    /* 打卡状态（值 → 展示文案/颜色类名） */
    statusOptions: [
        { value: "correct",  label: "✅ 对",   cssClass: "is-correct" },
        { value: "wrong",    label: "❌ 错",   cssClass: "is-wrong" },
        { value: "half",     label: "🟡 半对", cssClass: "is-half" },
        { value: "guessed",  label: "🎲 蒙对", cssClass: "is-guessed" }
    ],

    /* 错题集合（默认筛选） */
    wrongStatuses: ["wrong", "half", "guessed"],

    /* 学科根标签（与 daily-review 口径一致） */
    subjects: [
        { id: "AM", label: "高数",     tagRoots: ["#AM", "#高数", "#高等数学"] },
        { id: "LA", label: "线代",     tagRoots: ["#LA", "#线代", "#线性代数"] },
        { id: "PS", label: "概率",     tagRoots: ["#PS", "#概率", "#概率论", "#概率统计", "#概率论与数理统计"] },
        { id: "DS", label: "数据结构", tagRoots: ["#DS", "#数据结构"] },
        { id: "CO", label: "计组",     tagRoots: ["#CO", "#计组", "#计算机组成原理"] },
        { id: "OS", label: "操作系统", tagRoots: ["#OS", "#操作系统"] },
        { id: "CN", label: "计网",     tagRoots: ["#CN", "#计网", "#计算机网络"] }
    ],

    /* 题型细分标签（不是知识点） */
    natureTags: [
        "概念题", "计算题", "证明题", "综合题",
        "选择题", "填空题", "解答题", "多选题"
    ],

    /* 书根识别前缀：tags 中以这些开头的路径标签第一段即书名 */
    bookRootPatterns: [
        /^\d{2}_/,      // 27_900 / 26_杨威 / 27_方浩概统500题 …
        /^880/,
        /^XDSM/,
        /^YW-/,
        /^JJ8T/,
        /^OJD/,
        /^ep/,
        /^大计算量/,
        /^真题/
    ]
};

/* ================================================================
 * 1. 通用函数（与 question-recommender 同一套实现，保证口径一致）
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

function tagKey(tag) {
    return normalizedTagKey(normalizeTag(tag));
}

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

function isSameTagOrDescendant(candidate, required) {
    const candidateKey = tagKey(candidate);
    const requiredKey = tagKey(required);

    return (
        candidateKey === requiredKey ||
        candidateKey.startsWith(`${requiredKey}/`)
    );
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

function parseNonNegativeInteger(value) {
    const parsed = parseIntegerScalar(value);

    return parsed !== null && parsed >= 0
        ? parsed
        : 0;
}

function isTrue(value) {
    return value === true ||
        String(value).trim().toLowerCase() === "true";
}

function normalizeVaultPath(path) {
    return String(path ?? "")
        .replace(/\\/g, "/")
        .replace(/\/+/g, "/")
        .replace(/^\/+|\/+$/g, "");
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

const QUESTION_NAME_COLLATOR = new Intl.Collator(
    "zh-CN",
    { numeric: true }
);

const MARKDOWN_EMBED_PATTERN = /^!\[([^\]]*)\]\s*\(/;
const WIKI_EMBED_PATTERN = /^!?\[\[([\s\S]*)\]\]$/;
const PRINT_BINARY_READ_CONCURRENCY = 4;

/* ================================================================
 * 2. 题图提取（复用 question-recommender 实现）
 * ================================================================ */
function embedHasQuestionMarker(embed) {
    const marker = String(CONFIG.questionMarker ?? "").trim();
    if (!marker) return false;

    const hasMarkerToken = value => String(value ?? "")
        .split("|")
        .some(token => token.trim() === marker);

    const original = String(embed?.original ?? "").trim();
    if (!original) return hasMarkerToken(embed?.displayText);

    const markdownMatch = original.match(MARKDOWN_EMBED_PATTERN);
    if (markdownMatch) return hasMarkerToken(markdownMatch[1]);

    const wikiMatch = original.match(WIKI_EMBED_PATTERN);
    const inner = wikiMatch ? wikiMatch[1] : original;
    const parts = inner.split("|");

    for (let index = 1; index < parts.length; index++) {
        if (parts[index].trim() === marker) return true;
    }

    return false;
}

function getQuestionImages(page, knownSourceFile = undefined) {
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

/* ================================================================
 * 3. 学科 / 书 / 知识点 标签归类
 * ================================================================ */
const SUBJECT_OPTIONS = CONFIG.subjects.map(subject => ({
    id: subject.id,
    label: subject.label,
    tagRoots: subject.tagRoots
}));

function getSubjectOfPage(page) {
    const tags = getPageTags(page);

    for (const subject of SUBJECT_OPTIONS) {
        for (const root of subject.tagRoots) {
            for (const tag of tags) {
                if (isSameTagOrDescendant(tag, root)) {
                    return subject.id;
                }
            }
        }
    }

    return null;
}

/* tags 中第一个命中书根前缀的路径标签第一段，如 27_900 / 27_方浩概统500题 */
function getBookTagOfPage(page) {
    const tags = getPageTags(page);

    for (const tag of tags) {
        const firstSegment = tag.replace(/^#/, "")
            .split("/")[0]
            .trim();

        if (!firstSegment) continue;

        for (const pattern of CONFIG.bookRootPatterns) {
            if (pattern.test(firstSegment)) {
                return firstSegment;
            }
        }
    }

    return null;
}

function getKnowledgeTagsOfPage(page) {
    const subjectIds = new Set(SUBJECT_OPTIONS.map(item => item.id));
    const subjectTagRootKeys = new Set(
        SUBJECT_OPTIONS.flatMap(item => item.tagRoots.map(tagKey))
    );
    const natureKeys = new Set(
        CONFIG.natureTags.map(tag => tagKey(`#${tag}`))
    );

    const result = [];

    for (const tag of getPageTags(page)) {
        const key = tagKey(tag);
        const bare = tag.replace(/^#/, "");

        if (subjectIds.has(bare)) continue;

        const firstSegment = bare.split("/")[0].toLocaleLowerCase();
        let isSubjectRoot = false;

        for (const rootKey of subjectTagRootKeys) {
            const rootBare = rootKey.replace(/^#/, "");
            if (
                firstSegment === rootBare ||
                firstSegment.startsWith(`${rootBare}/`) ||
                key.startsWith(rootKey)
            ) {
                isSubjectRoot = true;
                break;
            }
        }

        if (isSubjectRoot) continue;

        if (natureKeys.has(key)) continue;

        if (CONFIG.bookRootPatterns.some(pattern => pattern.test(firstSegment))) {
            continue;
        }

        result.push(bare);
    }

    return result;
}

/* ================================================================
 * 4. 全库扫描，构建题目条目
 * ================================================================ */
let candidatePages;

try {
    candidatePages = Array.from(dv.pages());
} catch (error) {
    console.error("Dataview 全库查询失败：", error);
    dv.paragraph("❌ Dataview 无法读取仓库页面。");
    return;
}

const items = [];

for (const page of candidatePages) {
    if (page.file.path === currentFile?.file?.path) continue;

    const sourceFile = app.vault.getAbstractFileByPath(page.file.path);
    if (!sourceFile || sourceFile.extension !== "md") continue;

    const images = getQuestionImages(page, sourceFile);
    if (images.length === 0) continue;

    const statusRaw = String(page.status ?? "").trim().toLowerCase();
    const status = statusRaw &&
        ["wrong", "half", "guessed", "correct"].includes(statusRaw)
        ? statusRaw
        : null;

    const level = parseLevel(page.level);
    const peakLevel = parseLevel(page.peak_level) ?? level;

    const regressed = isTrue(page.regressed) || (
        level !== null &&
        peakLevel !== null &&
        level < peakLevel
    );

    items.push({
        page,
        sourceFile,
        images,
        status,
        level,
        peakLevel,
        regressed,
        wrongCount: parseNonNegativeInteger(page.wrong_count),
        lastResult: String(page.last_result ?? "").trim() || null,
        lastReviewed: normalizeIsoDate(page.last_reviewed),
        reviewCount: parseNonNegativeInteger(page.review_count),
        subject: getSubjectOfPage(page),
        book: getBookTagOfPage(page),
        knowledgeTags: getKnowledgeTagsOfPage(page)
    });
}

items.sort((a, b) => {
    /* 错题优先 → 错次数多优先 → 未复习优先 → 名称排序 */
    const wrongRank = value => CONFIG.wrongStatuses.includes(value.status)
        ? 0
        : (value.status === null ? 2 : 1);

    const rankA = wrongRank(a);
    const rankB = wrongRank(b);

    if (rankA !== rankB) return rankA - rankB;

    if (a.wrongCount !== b.wrongCount) return b.wrongCount - a.wrongCount;

    const reviewedA = a.lastReviewed ? 1 : 0;
    const reviewedB = b.lastReviewed ? 1 : 0;

    if (reviewedA !== reviewedB) return reviewedA - reviewedB;

    return QUESTION_NAME_COLLATOR.compare(
        a.page.file.name,
        b.page.file.name
    );
});

/* ================================================================
 * 5. 视图状态
 * ================================================================ */
const VIEW_OPTIONS = (
    typeof input === "object" &&
    input !== null &&
    !Array.isArray(input)
)
    ? input
    : {};

const hasAnyStatusMark = items.some(item => item.status !== null);

/* 范围：wrong = 只看错题集合；all = 全部题目（打卡模式）
 * 默认始终进入 wrong 模式：未打卡时为空列表而非全库 6000+ 题，
 * 避免页面一次性渲染过多题目；明确切换"全部题目"才展示全部。 */
let viewMode = String(VIEW_OPTIONS.mode ?? "").toLowerCase() === "all"
    ? "all"
    : "wrong";
let subjectFilter = String(VIEW_OPTIONS.subject ?? "").trim().toUpperCase();
let bookFilter = String(VIEW_OPTIONS.book ?? "").trim();
let knowledgeFilter = String(VIEW_OPTIONS.knowledge ?? "").trim().toLocaleLowerCase("zh-CN");

/* 候选错题开关：把 level≤1 与降级题并入"错题"范围 */
let includeWeakCandidates = true;

let displayedItems = [];
let displayCapped = false;
let displayTotalCount = 0;
let printInProgress = false;

const viewDocument = dv.container.ownerDocument ?? document;

/* 题图去重签名（与 question-recommender 一致） */
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

/* ================================================================
 * 6. 筛选逻辑
 * ================================================================ */
function isCandidateWrongItem(item) {
    if (CONFIG.wrongStatuses.includes(item.status)) return true;
    if (!includeWeakCandidates) return false;
    if (item.regressed) return true;
    if (item.level !== null && item.level <= 1) return true;
    return false;
}

function matchesDimensionFilters(item) {
    if (subjectFilter && item.subject !== subjectFilter) return false;
    if (bookFilter && item.book !== bookFilter) return false;
    if (knowledgeFilter) {
        const matched = item.knowledgeTags.some(tag =>
            tag.toLocaleLowerCase("zh-CN").includes(knowledgeFilter)
        );
        if (!matched) return false;
    }
    return true;
}

function recomputeDisplayedItems() {
    const filtered = items.filter(item => {
        if (!matchesDimensionFilters(item)) return false;
        return viewMode === "all" || isCandidateWrongItem(item);
    });

    /* 全部题目模式限制显示上限，避免一次性渲染数千行 */
    const maxAll = CONFIG.maxResults;

    if (viewMode === "all" && filtered.length > maxAll) {
        displayedItems = filtered.slice(0, maxAll);
        displayCapped = true;
        displayTotalCount = filtered.length;
    } else {
        displayedItems = filtered;
        displayCapped = false;
        displayTotalCount = filtered.length;
    }
}

/* ================================================================
 * 7. 统计面板
 * ================================================================ */
let statTitleEl = null;
let statSummaryEl = null;
let statTableEl = null;
let statEmptyEl = null;

function getScopeItems() {
    return items.filter(matchesDimensionFilters);
}

function renderStats() {
    const scopeItems = getScopeItems();

    const countByStatus = {
        wrong: 0,
        half: 0,
        guessed: 0,
        correct: 0
    };

    let markedCount = 0;
    let weakCount = 0;

    for (const item of scopeItems) {
        if (item.status) {
            markedCount++;
            if (countByStatus[item.status] !== undefined) {
                countByStatus[item.status]++;
            }
        }

        if (
            item.regressed ||
            (item.level !== null && item.level <= 1)
        ) {
            weakCount++;
        }
    }

    const unmarkedCount = scopeItems.length - markedCount;

    if (statSummaryEl) {
        statSummaryEl.textContent =
            `范围内共 ${scopeItems.length} 道题；` +
            `已打卡 ${markedCount}（❌错 ${countByStatus.wrong} · ` +
            `🟡半对 ${countByStatus.half} · 🎲蒙对 ${countByStatus.guessed} · ` +
            `✅对 ${countByStatus.correct}）；` +
            `未打卡 ${unmarkedCount}；` +
            `候选错题（含低级/降级）${weakCount}`;
    }

    /* 按学科统计错题 */
    const rows = [];

    for (const subject of SUBJECT_OPTIONS) {
        const subjectItems = scopeItems.filter(
            item => item.subject === subject.id
        );

        if (subjectItems.length === 0) continue;

        const wrongItems = subjectItems.filter(isCandidateWrongItem);

        rows.push([
            `${subject.id} ${subject.label}`,
            String(subjectItems.length),
            String(wrongItems.length)
        ]);
    }

    if (statTableEl) {
        statTableEl.replaceChildren();

        const tableEl = viewDocument.createElement("table");
        tableEl.className = "wqf-stat-table";

        const headRowEl = viewDocument.createElement("tr");
        for (const heading of ["学科", "题数", "错题/候选"]) {
            const headingEl = viewDocument.createElement("th");
            headingEl.textContent = heading;
            headRowEl.appendChild(headingEl);
        }
        tableEl.appendChild(headRowEl);

        if (rows.length === 0) {
            const rowEl = viewDocument.createElement("tr");
            const cellEl = viewDocument.createElement("td");
            cellEl.colSpan = 3;
            cellEl.textContent = "当前筛选范围内没有题目。";
            rowEl.appendChild(cellEl);
            tableEl.appendChild(rowEl);
        } else {
            for (const row of rows) {
                const rowEl = viewDocument.createElement("tr");
                for (const cell of row) {
                    const cellEl = viewDocument.createElement("td");
                    cellEl.textContent = cell;
                    rowEl.appendChild(cellEl);
                }
                tableEl.appendChild(rowEl);
            }
        }

        statTableEl.appendChild(tableEl);
    }

    if (statEmptyEl) {
        statEmptyEl.hidden = scopeItems.length > 0;
    }
}

/* ================================================================
 * 8. 打卡控件
 * ================================================================ */
function createStatusControl(item) {
    const wrapper = viewDocument.createElement("div");
    wrapper.className = "wqf-status-wrapper";
    item.filterMarker = wrapper;

    const badgeEl = viewDocument.createElement("span");
    badgeEl.className = "wqf-status-badge";

    const buttonsEl = viewDocument.createElement("div");
    buttonsEl.className = "wqf-status-buttons";

    const levelEl = viewDocument.createElement("span");
    levelEl.className = "wqf-level-info";

    function refreshBadge() {
        const statusOption = CONFIG.statusOptions.find(
            option => option.value === item.status
        );

        if (!statusOption) {
            badgeEl.textContent = "未标记";
            badgeEl.className = "wqf-status-badge is-unmarked";
            badgeEl.title = "尚未打卡；做一遍后点右侧按钮记录结果";
            return;
        }

        badgeEl.textContent = statusOption.label;
        badgeEl.className =
            `wqf-status-badge ${statusOption.cssClass}`;
        badgeEl.title = item.lastReviewed
            ? `最近打卡：${item.lastReviewed}`
            : "已打卡";
    }

    function refreshLevelInfo() {
        const parts = [];

        parts.push(`评级${getLevelText(item.level)}`);

        if (item.regressed) {
            parts.push(`峰值${getLevelText(item.peakLevel)}`);
        }

        if (item.wrongCount > 0) {
            parts.push(`错${item.wrongCount}次`);
        }

        if (item.reviewCount > 0) {
            parts.push(`刷${item.reviewCount}次`);
        }

        levelEl.textContent = parts.join(" · ");
        levelEl.className = item.regressed
            ? "wqf-level-info is-regressed"
            : "wqf-level-info";
    }

    async function persistStatus(statusValue) {
        const targetFile = resolveQuestionSourceFile(item);

        if (!targetFile || targetFile.extension !== "md") {
            new Notice("❌ 无法定位对应题目笔记。");
            return;
        }

        let writeError = null;
        let newWrongCount = item.wrongCount;

        try {
            await app.fileManager.processFrontMatter(
                targetFile,
                frontmatter => {
                    const previousStatus = String(
                        frontmatter.status ?? ""
                    ).trim().toLowerCase();

                    if (statusValue === null) {
                        delete frontmatter.status;
                        delete frontmatter.last_result;
                    } else {
                        frontmatter.status = statusValue;
                        frontmatter.last_result = statusValue;
                    }

                    /* 错类结果累计 wrong_count */
                    const storedWrongCount = parseNonNegativeInteger(
                        frontmatter.wrong_count
                    );

                    if (CONFIG.wrongStatuses.includes(statusValue)) {
                        frontmatter.wrong_count = storedWrongCount + 1;
                        newWrongCount = storedWrongCount + 1;
                    } else {
                        frontmatter.wrong_count = storedWrongCount;
                        newWrongCount = storedWrongCount;
                    }

                    /* 结果时间线 */
                    let history = [];

                    if (Array.isArray(frontmatter.result_history)) {
                        history = [...frontmatter.result_history];
                    } else if (frontmatter.result_history) {
                        history = [String(frontmatter.result_history)];
                    }

                    history.push(
                        `${localDateTime()} | ` +
                        `${statusValue ?? "清除标记"}` +
                        (previousStatus && statusValue !== previousStatus
                            ? `（${previousStatus}→${statusValue ?? "未标记"}）`
                            : "")
                    );

                    frontmatter.result_history = history.slice(
                        -CONFIG.historyLimit
                    );

                    frontmatter.last_reviewed = localDateTime();
                }
            );
        } catch (error) {
            console.error("打卡写入失败：", error);
            writeError = error;
        }
        if (writeError) {
            new Notice("❌ 打卡写入失败，请重试。", 5000);
            return;
        }

        /* 同步内存状态，立即刷新视图 */
        item.status = statusValue;
        item.wrongCount = newWrongCount;

        item.lastResult = statusValue;
        item.lastReviewed = localDate();

        refreshBadge();
        refreshLevelInfo();
        refreshFilterUI();
        renderStats();

        const statusLabel = CONFIG.statusOptions.find(
            option => option.value === statusValue
        )?.label ?? "未标记";

        new Notice(
            statusValue === null
                ? "🧹 已清除该题的打卡标记。"
                : `📝 ${item.page.file.name} → ${statusLabel}`,
            3000
        );
    }

    function buildButton(option) {
        const buttonEl = viewDocument.createElement("button");
        buttonEl.type = "button";
        buttonEl.className =
            `wqf-status-button ${option.cssClass}`;
        buttonEl.textContent = option.label;
        buttonEl.title = `标记为「${option.label}」并记录打卡时间`;
        buttonEl.addEventListener("click", () => {
            void persistStatus(option.value);
        });
        return buttonEl;
    }

    for (const option of CONFIG.statusOptions) {
        buttonsEl.appendChild(buildButton(option));
    }

    const clearButtonEl = viewDocument.createElement("button");
    clearButtonEl.type = "button";
    clearButtonEl.className = "wqf-status-button is-clear";
    clearButtonEl.textContent = "清除";
    clearButtonEl.title = "清除打卡标记（保留历史记录）";
    clearButtonEl.addEventListener("click", () => {
        void persistStatus(null);
    });
    buttonsEl.appendChild(clearButtonEl);

    wrapper.appendChild(badgeEl);
    wrapper.appendChild(buttonsEl);
    wrapper.appendChild(levelEl);

    refreshBadge();
    refreshLevelInfo();

    return wrapper;
}

/* ================================================================
 * 9. 筛选栏 / 表格渲染
 * ================================================================ */
let titleEl = null;
let filterButtonEl = null;
let filterSummaryEl = null;
let filterEmptyEl = null;
let printButtonEl = null;
let modeAllButtonEl = null;
let modeWrongButtonEl = null;
let weakToggleEl = null;
let subjectSelectEl = null;
let bookSelectEl = null;
let knowledgeInputEl = null;

const availableBooks = Array.from(new Set(
    items.map(item => item.book).filter(Boolean)
)).sort(QUESTION_NAME_COLLATOR.compare);

function buildFilterBar() {
    const filterBarEl = viewDocument.createElement("div");
    filterBarEl.className = "wqf-filter-bar";

    /* 范围切换 */
    const modeGroupEl = viewDocument.createElement("div");
    modeGroupEl.className = "wqf-mode-group";

    modeAllButtonEl = viewDocument.createElement("button");
    modeAllButtonEl.type = "button";
    modeAllButtonEl.className = "wqf-mode-button";
    modeAllButtonEl.textContent = "全部题目";
    modeAllButtonEl.title = "浏览范围内全部题目，批量打卡";

    modeWrongButtonEl = viewDocument.createElement("button");
    modeWrongButtonEl.type = "button";
    modeWrongButtonEl.className = "wqf-mode-button";
    modeWrongButtonEl.textContent = "只看错题";
    modeWrongButtonEl.title = "只显示标记为错/半对/蒙对，以及低级、降级的题";

    modeGroupEl.appendChild(modeAllButtonEl);
    modeGroupEl.appendChild(modeWrongButtonEl);
    filterBarEl.appendChild(modeGroupEl);

    /* 候选错题开关 */
    weakToggleEl = viewDocument.createElement("label");
    weakToggleEl.className = "wqf-weak-toggle";

    const weakCheckboxEl = viewDocument.createElement("input");
    weakCheckboxEl.type = "checkbox";
    weakCheckboxEl.checked = includeWeakCandidates;
    weakCheckboxEl.setAttribute("aria-label", "错题范围包含低级/降级题");
    weakCheckboxEl.addEventListener("change", () => {
        includeWeakCandidates = weakCheckboxEl.checked;
        recomputeDisplayedItems();
        refreshFilterUI();
        renderStats();
    });
    weakToggleEl.appendChild(weakCheckboxEl);
    weakToggleEl.append("含低级/降级");
    filterBarEl.appendChild(weakToggleEl);

    /* 学科筛选 */
    subjectSelectEl = viewDocument.createElement("select");
    subjectSelectEl.className = "wqf-filter-select";
    subjectSelectEl.title = "按学科筛选";

    const allSubjectOption = viewDocument.createElement("option");
    allSubjectOption.value = "";
    allSubjectOption.textContent = "全部学科";
    subjectSelectEl.appendChild(allSubjectOption);

    for (const subject of SUBJECT_OPTIONS) {
        const optionEl = viewDocument.createElement("option");
        optionEl.value = subject.id;
        optionEl.textContent = `${subject.id} ${subject.label}`;
        subjectSelectEl.appendChild(optionEl);
    }

    subjectSelectEl.value = subjectFilter;
    subjectSelectEl.addEventListener("change", () => {
        subjectFilter = subjectSelectEl.value;
        recomputeDisplayedItems();
        refreshFilterUI();
        renderStats();
    });
    filterBarEl.appendChild(subjectSelectEl);

    /* 书筛选 */
    bookSelectEl = viewDocument.createElement("select");
    bookSelectEl.className = "wqf-filter-select";
    bookSelectEl.title = "按书筛选";

    const allBookOption = viewDocument.createElement("option");
    allBookOption.value = "";
    allBookOption.textContent = "全部书籍";
    bookSelectEl.appendChild(allBookOption);

    for (const book of availableBooks) {
        const optionEl = viewDocument.createElement("option");
        optionEl.value = book;
        optionEl.textContent = book;
        bookSelectEl.appendChild(optionEl);
    }

    bookSelectEl.value = bookFilter;
    bookSelectEl.addEventListener("change", () => {
        bookFilter = bookSelectEl.value;
        recomputeDisplayedItems();
        refreshFilterUI();
        renderStats();
    });
    filterBarEl.appendChild(bookSelectEl);

    /* 知识点搜索 */
    knowledgeInputEl = viewDocument.createElement("input");
    knowledgeInputEl.className = "wqf-knowledge-input";
    knowledgeInputEl.type = "search";
    knowledgeInputEl.placeholder = "按知识点过滤（如：分部积分）";
    knowledgeInputEl.value = knowledgeFilter;
    knowledgeInputEl.setAttribute("aria-label", "按知识点过滤");
    knowledgeInputEl.addEventListener("keydown", event => {
        if (event.key !== "Enter") return;
        knowledgeFilter = knowledgeInputEl.value.trim().toLocaleLowerCase("zh-CN");
        recomputeDisplayedItems();
        refreshFilterUI();
        renderStats();
    });
    knowledgeInputEl.addEventListener("search", () => {
        knowledgeFilter = knowledgeInputEl.value.trim().toLocaleLowerCase("zh-CN");
        recomputeDisplayedItems();
        refreshFilterUI();
        renderStats();
    });
    filterBarEl.appendChild(knowledgeInputEl);

    /* 打印 */
    printButtonEl = viewDocument.createElement("button");
    printButtonEl.type = "button";
    printButtonEl.className = "wqf-print-button";
    printButtonEl.title = "只打印当前可见题目的来源和题图";
    printButtonEl.addEventListener("click", () => {
        void printCurrentQuestions();
    });
    filterBarEl.appendChild(printButtonEl);

    /* 摘要 */
    filterSummaryEl = viewDocument.createElement("span");
    filterSummaryEl.className = "wqf-filter-summary";
    filterBarEl.appendChild(filterSummaryEl);

    return filterBarEl;
}

function renderTable() {
    const tableWrapEl = viewDocument.createElement("div");
    tableWrapEl.className = "wqf-table-wrap";

    const tableEl = viewDocument.createElement("table");
    tableEl.className = "wqf-question-table";

    const tableHeadEl = viewDocument.createElement("thead");
    const headRowEl = viewDocument.createElement("tr");

    for (const heading of ["题号", "题目", "题图预览", "打卡 / 状态"]) {
        const headingEl = viewDocument.createElement("th");
        headingEl.textContent = heading;
        headRowEl.appendChild(headingEl);
    }

    tableHeadEl.appendChild(headRowEl);
    tableEl.appendChild(tableHeadEl);

    const tableBodyEl = viewDocument.createElement("tbody");
    tableEl.appendChild(tableBodyEl);
    tableWrapEl.appendChild(tableEl);

    dv.container.appendChild(tableWrapEl);

    function renderRows() {
        tableBodyEl.replaceChildren();

        for (const item of items) {
            item.tableRow = null;
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
            numberEl.className = "wqf-order-number";
            numberEl.textContent = String(index + 1);
            item.orderNumberEl = numberEl;
            numberCellEl.appendChild(numberEl);
            rowEl.appendChild(numberCellEl);

            const sourceCellEl = viewDocument.createElement("td");
            sourceCellEl.dataset.label = "题目";

            const sourceLinkEl = viewDocument.createElement("a");
            sourceLinkEl.className =
                "internal-link wqf-source-link";
            sourceLinkEl.href = item.page.file.path;
            sourceLinkEl.dataset.href = item.page.file.path;
            sourceLinkEl.textContent = item.page.file.name;

            const metaEl = viewDocument.createElement("span");
            metaEl.className = "wqf-source-meta";
            metaEl.textContent = [
                item.subject ? item.subject : "",
                item.book ? item.book : "",
                item.knowledgeTags.slice(0, 3).join(" / ")
            ].filter(Boolean).join(" · ");

            sourceCellEl.appendChild(sourceLinkEl);
            sourceCellEl.appendChild(metaEl);
            rowEl.appendChild(sourceCellEl);

            const imageCellEl = viewDocument.createElement("td");
            imageCellEl.dataset.label = "题图";
            const imageListEl = viewDocument.createElement("ul");
            imageListEl.className = "wqf-images";

            for (const imageLink of item.images) {
                const imageItemEl = viewDocument.createElement("li");
                const imageFile = resolvePrintImageFile(item, imageLink);

                if (!imageFile) {
                    const placeholderEl =
                        viewDocument.createElement("div");
                    placeholderEl.className =
                        "wqf-image-placeholder";
                    placeholderEl.textContent = "题图已移动或无法定位";
                    imageItemEl.appendChild(placeholderEl);
                } else {
                    const imageEl = viewDocument.createElement("img");
                    imageEl.className = "wqf-image";
                    imageEl.loading = "lazy";
                    imageEl.alt =
                        `${item.page.file.name} · ${imageFile.name}`;
                    imageEl.src = app.vault.getResourcePath(imageFile);
                    imageEl.addEventListener("error", () => {
                        const placeholderEl =
                            viewDocument.createElement("div");
                        placeholderEl.className =
                            "wqf-image-placeholder";
                        placeholderEl.textContent =
                            `题图预览加载失败：${imageFile.name}`;
                        imageEl.replaceWith(placeholderEl);
                    }, { once: true });
                    imageItemEl.appendChild(imageEl);
                }

                imageListEl.appendChild(imageItemEl);
            }

            imageCellEl.appendChild(imageListEl);
            rowEl.appendChild(imageCellEl);

            const feedbackCellEl = viewDocument.createElement("td");
            feedbackCellEl.dataset.label = "打卡";
            feedbackCellEl.appendChild(createStatusControl(item));
            rowEl.appendChild(feedbackCellEl);

            rowsParent.appendChild(rowEl);
        });

        if (rowsFragment) tableBodyEl.appendChild(rowsFragment);
        tableWrapEl.hidden = false;
    }

    return { tableWrapEl, renderRows };
}

/* ================================================================
 * 10. 筛选 UI 刷新（不重查询，只切换行显隐与按钮文案）
 * ================================================================ */
function refreshFilterUI() {
    const totalWrongCount = items.filter(
        item => matchesDimensionFilters(item) && isCandidateWrongItem(item)
    ).length;

    const totalAllCount = items.filter(
        item => matchesDimensionFilters(item)
    ).length;

    let visibleNumber = 0;

    for (const item of displayedItems) {
        const row = item.tableRow ??
            item.filterMarker?.closest("tr");

        if (row) {
            item.tableRow = row;
            row.hidden = false;
        }

        visibleNumber++;

        if (item.orderNumberEl) {
            item.orderNumberEl.textContent = String(visibleNumber);
        }

        if (item.filterMarker) {
            item.filterMarker.inert = printInProgress;
            item.filterMarker.classList.toggle(
                "is-print-locked",
                printInProgress
            );
        }
    }

    const isWrongMode = viewMode === "wrong";

    if (titleEl) {
        titleEl.textContent = isWrongMode
            ? `🚨 错题筛选 · ${visibleNumber} 道`
            : displayCapped
                ? `📚 全部题目 · 显示前 ${visibleNumber} / ${displayTotalCount} 道（打卡模式）`
                : `📚 全部题目 · ${visibleNumber} 道（打卡模式）`;
    }

    if (modeAllButtonEl) {
        modeAllButtonEl.classList.toggle("is-active", !isWrongMode);
        modeAllButtonEl.disabled = printInProgress;
    }

    if (modeWrongButtonEl) {
        modeWrongButtonEl.classList.toggle("is-active", isWrongMode);
        modeWrongButtonEl.disabled = printInProgress;
    }

    if (weakToggleEl) {
        weakToggleEl.querySelector("input").disabled = printInProgress;
    }

    if (subjectSelectEl) subjectSelectEl.disabled = printInProgress;
    if (bookSelectEl) bookSelectEl.disabled = printInProgress;
    if (knowledgeInputEl) knowledgeInputEl.disabled = printInProgress;

    if (filterSummaryEl) {
        const summaryParts = [];

        if (subjectFilter) summaryParts.push(subjectFilter);
        if (bookFilter) summaryParts.push(bookFilter);
        if (knowledgeFilter) summaryParts.push(`知识点:${knowledgeFilter}`);

        summaryParts.push(isWrongMode
            ? `范围内错题/候选 ${totalWrongCount} 道`
            : `范围内共 ${totalAllCount} 道`);

        summaryParts.push(displayCapped
            ? `当前显示前 ${visibleNumber} 道（请用学科/书/知识点缩小范围）`
            : `当前显示 ${visibleNumber} 道`);

        filterSummaryEl.textContent = summaryParts.join(" · ");

    if (filterEmptyEl) {
        filterEmptyEl.hidden = !(
            displayedItems.length === 0 &&
            totalAllCount > 0
        );
    }

    if (printButtonEl) {
        const printableCount = displayedItems.length;

        printButtonEl.disabled =
            printInProgress || printableCount === 0;

        printButtonEl.textContent =
            printInProgress
                ? "⏳ 正在导出…"
                : `📑 导出带目录 PDF（${printableCount}）`;
    }
}

/* ================================================================
 * 11. 打印当前筛选结果（复用 question-recommender 实现）
 * ================================================================ */
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

function sanitizePdfFileName(value, fallback = "错题筛选") {
    const sanitized = String(value ?? "")
        .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "-")
        .replace(/[. ]+$/g, "")
        .trim();

    return sanitized || fallback;
}

function getQuestionPdfDefaultName(questionCount) {
    const sourceName = currentFile?.file?.name ??
        currentFile?.file?.basename ??
        "错题筛选";

    return sanitizePdfFileName(
        `${sourceName}-错题-${questionCount}题`
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

    const printableItems = displayedItems;

    if (printableItems.length === 0) {
        new Notice("💡 当前筛选中没有可打印的题目。", 4000);
        return;
    }

    printInProgress = true;
    refreshFilterUI();

    const printDocument = dv.container.ownerDocument;
    const printWindow = printDocument?.defaultView;

    if (!printDocument?.head || !printDocument.body || !printWindow) {
        printInProgress = false;
        refreshFilterUI();
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
        refreshFilterUI();
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
 * 12. 组装渲染
 * ================================================================ */
dv.container.classList.add("wqf-view");

/* 说明 */
const introEl = viewDocument.createElement("p");
introEl.className = "wqf-intro";
introEl.textContent =
    "每题一行四按钮打卡（对/错/半对/蒙对），结果写入笔记 frontmatter；" +
    "「只看错题」按错题集合筛选，可打印成卷。";
dv.container.appendChild(introEl);

/* 标题 */
titleEl = viewDocument.createElement("h3");
dv.container.appendChild(titleEl);

/* 统计面板 */
const statPanelEl = viewDocument.createElement("div");
statPanelEl.className = "wqf-stat-panel";

statTitleEl = viewDocument.createElement("h4");
statTitleEl.textContent = "📊 范围内统计";
statPanelEl.appendChild(statTitleEl);

statSummaryEl = viewDocument.createElement("p");
statSummaryEl.className = "wqf-stat-summary";
statPanelEl.appendChild(statSummaryEl);

statTableEl = viewDocument.createElement("div");
statTableEl.className = "wqf-stat-table-wrap";
statPanelEl.appendChild(statTableEl);

statEmptyEl = viewDocument.createElement("p");
statEmptyEl.className = "wqf-stat-empty";
statEmptyEl.textContent = "当前筛选范围内没有题目；换用「全部学科/全部书籍」试试。";
statEmptyEl.hidden = true;
statPanelEl.appendChild(statEmptyEl);

dv.container.appendChild(statPanelEl);

/* 筛选栏 */
dv.container.appendChild(buildFilterBar());

/* 空状态提示 */
filterEmptyEl = viewDocument.createElement("div");
filterEmptyEl.className = "wqf-filter-empty";
filterEmptyEl.textContent =
    "🎉 当前筛选范围内没有符合条件的题。" +
    "如果还没有任何打卡记录，请切到「全部题目」模式，做一题标记一题。";
filterEmptyEl.hidden = true;
dv.container.appendChild(filterEmptyEl);

/* 表格 */
const { renderRows } = renderTable();

/* 事件绑定：范围切换 */
modeAllButtonEl.addEventListener("click", () => {
    viewMode = "all";
    recomputeDisplayedItems();
    refreshFilterUI();
    renderStats();
});

modeWrongButtonEl.addEventListener("click", () => {
    viewMode = "wrong";
    recomputeDisplayedItems();
    refreshFilterUI();
    renderStats();
});

/* 初始渲染 */
recomputeDisplayedItems();
renderStats();
renderRows();
refreshFilterUI();

requestAnimationFrame(() => {
    refreshFilterUI();
});
})();
