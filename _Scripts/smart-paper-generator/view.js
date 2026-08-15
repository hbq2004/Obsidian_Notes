/******************************************************************
 * 数学一 / 408 独立智能组卷 V2
 *
 * - 数学一与 408 分开组卷，不再混入同一份试卷
 * - 通过唯一科目标签识别题目：AM / LA / P&S / DS / CO / OS / CN
 * - 数学一按 3:1:1，408 按 45:45:35:25 分配题量
 * - 题量不足时按同一试卷内的剩余科目权重自动补位
 * - 结合 level、降级、到期日期和复习次数加权抽题
 * - 独立预览本卷，并可按每页一题打印或另存为 PDF
 * - 支持固定当前卷面题序，视图刷新后仍按原顺序恢复
 ******************************************************************/

const CONFIG = {
    questionMarker: "题目",
    defaultQuestionCount: 20,
    questionCountOptions: [10, 20, 30, 40, 60, 100],
    maxQuestionCount: 100,
    printImageLoadTimeoutMs: 15000,
    defaultPaperType: "math1",

    /*
     * 当前 points 大多为空，因此先按题目数量模拟真题分值比例。
     * 标签大小写不敏感，并兼容层级标签，例如 #DS/链表。
     */
    paperTypes: [
        {
            id: "math1",
            label: "数学一",
            ratioLabel: "高数 / 线代 / 概率 = 3:1:1",
            subjects: [
                {
                    id: "calculus",
                    label: "高数",
                    weight: 3,
                    tagRoots: ["#AM", "#高数", "#高等数学"]
                },
                {
                    id: "linear",
                    label: "线代",
                    weight: 1,
                    tagRoots: ["#LA", "#线代", "#线性代数"]
                },
                {
                    id: "probability",
                    label: "概率",
                    weight: 1,
                    tagRoots: [
                        "#P&S",
                        "#PS",
                        "#概率",
                        "#概率论",
                        "#概率统计",
                        "#概率论与数理统计"
                    ]
                }
            ]
        },
        {
            id: "cs408",
            label: "408",
            ratioLabel: "数据结构 / 计组 / 操作系统 / 计网 = 45:45:35:25",
            subjects: [
                {
                    id: "data-structures",
                    label: "数据结构",
                    weight: 45,
                    tagRoots: ["#DS", "#数据结构"]
                },
                {
                    id: "computer-organization",
                    label: "计组",
                    weight: 45,
                    tagRoots: ["#CO", "#计组", "#计算机组成原理"]
                },
                {
                    id: "operating-systems",
                    label: "操作系统",
                    weight: 35,
                    tagRoots: ["#OS", "#操作系统"]
                },
                {
                    id: "computer-networks",
                    label: "计网",
                    weight: 25,
                    tagRoots: ["#CN", "#计网", "#计算机网络"]
                }
            ]
        }
    ]
};

dv.container.classList.add("smart-paper-view");

const viewDocument = dv.container.ownerDocument;
const viewWindow = viewDocument?.defaultView;

/* 配置在一次视图执行期间保持不变，提前编译热点查询所需的只读索引。 */
const IMAGE_MIME_TYPES = Object.freeze({
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    jfif: "image/jpeg",
    gif: "image/gif",
    webp: "image/webp",
    bmp: "image/bmp",
    svg: "image/svg+xml",
    avif: "image/avif"
});
const ALL_SUBJECTS = CONFIG.paperTypes.flatMap(type => type.subjects);

/*
 * 预建“标签根 → 科目”索引：把科目识别从逐页的多重线性扫描降为
 * 按标签前缀的 Map 查找。一个标签根理论上可能属于多个科目，
 * 因此值为数组，与原有的多重匹配语义保持一致。
 */
const SUBJECT_BY_TAG_KEY = new Map();

for (const subject of ALL_SUBJECTS) {
    for (const rootKey of asArray(subject.tagRoots).map(tagKey)) {
        const owners = SUBJECT_BY_TAG_KEY.get(rootKey);
        if (owners) {
            owners.push(subject);
        } else {
            SUBJECT_BY_TAG_KEY.set(rootKey, [subject]);
        }
    }
}

/* 打印前批量读取题图：并发数仅影响读取速度，不影响输出顺序与结果。 */
const PRINT_BINARY_READ_CONCURRENCY = 8;

/* ================================================================
 * 1. 通用函数
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

function normalizeText(value) {
    return String(value ?? "")
        .trim()
        .toLocaleLowerCase("zh-CN");
}

function getPaperType(paperTypeId) {
    return CONFIG.paperTypes.find(type => type.id === paperTypeId) ??
        CONFIG.paperTypes[0];
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

function getPageTags(page) {
    const rawTags = [
        ...asArray(page?.tags),
        ...asArray(page?.file?.etags)
    ];
    const tags = [];
    const visited = new Set();

    for (const rawTag of rawTags) {
        const normalized = normalizeTag(rawTag);
        const key = normalized
            .replace(/\/+$/g, "")
            .toLocaleLowerCase();

        if (!normalized || visited.has(key)) continue;

        visited.add(key);
        tags.push(normalized);
    }

    return tags;
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

function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function getLevelText(level) {
    return level === null || level === undefined
        ? "未评级"
        : `${level}级`;
}

function getImageMimeType(file) {
    const extension = String(file?.extension ?? "").toLowerCase();

    return IMAGE_MIME_TYPES[extension] ?? null;
}

/**
 * 只把嵌入别名/替代文字中的独立“题目”字段视为题目标记。
 * 支持 |题目、|宽度|题目、|题目|宽度；不会因文件名含“题目”而误判。
 */
function embedHasQuestionMarker(embed) {
    const marker = String(CONFIG.questionMarker ?? "").trim();
    if (!marker) return false;

    const hasMarkerToken = value => String(value ?? "")
        .split("|")
        .some(token => token.trim() === marker);

    const original = String(embed?.original ?? "").trim();
    if (!original) return hasMarkerToken(embed?.displayText);

    const markdownMatch = original.match(/^!\[([^\]]*)\]\s*\(/);
    if (markdownMatch) return hasMarkerToken(markdownMatch[1]);

    const wikiMatch = original.match(/^!?\[\[([\s\S]*)\]\]$/);
    const inner = wikiMatch ? wikiMatch[1] : original;
    const parts = inner.split("|");

    return parts.length > 1 &&
        parts.slice(1).some(token => token.trim() === marker);
}

/*
 * Dataview 页面对象是一次查询的快照，题目笔记在组卷后被移动或重命名时，
 * page.file.path / name 不会随之更新；Obsidian 的 TFile 对象则会更新 path。
 * 所有后续链接和打印标题优先重新解析保存的 TFile，避免指向旧位置。
 */
function resolveQuestionSourceFile(item) {
    const storedFile = item?.sourceFile;
    const storedPath = normalizeVaultPath(storedFile?.path);

    if (storedPath) {
        const resolvedStoredFile = app.vault.getAbstractFileByPath(storedPath);

        if (resolvedStoredFile?.extension === "md") {
            item.sourceFile = resolvedStoredFile;
            return resolvedStoredFile;
        }
    }

    const snapshotPath = normalizeVaultPath(item?.page?.file?.path);

    if (snapshotPath) {
        const resolvedSnapshotFile = app.vault.getAbstractFileByPath(
            snapshotPath
        );

        if (resolvedSnapshotFile?.extension === "md") {
            item.sourceFile = resolvedSnapshotFile;
            return resolvedSnapshotFile;
        }
    }

    return null;
}

function getQuestionSourcePath(item) {
    return resolveQuestionSourceFile(item)?.path ??
        normalizeVaultPath(item?.page?.file?.path);
}

/*
 * 笔记标题会参与路径，重命名后路径必然变化；固定卷面不能只依赖路径。
 * 下列锚点均不依赖标题，可在笔记重命名后继续识别同一道题。
 */
function getPaperQuestionOrderAnchors(item) {
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

    const sourceFile = resolveQuestionSourceFile(item);
    const sourceCtime = Number(
        sourceFile?.stat?.ctime ??
        item?.page?.file?.ctime?.valueOf?.()
    );

    if (Number.isFinite(sourceCtime) && sourceCtime > 0) {
        anchors.push(`note-ctime:${Math.trunc(sourceCtime)}`);
    }

    const imagePaths = asArray(item?.imageFiles)
        .map(imageFile => normalizeVaultPath(imageFile?.path))
        .filter(Boolean)
        .sort();

    if (imagePaths.length > 0) {
        anchors.push(`question-images:${imagePaths.join("\u0000")}`);
    }

    return Array.from(new Set(anchors));
}

function createPaperOrderEntry(item) {
    const path = normalizeVaultPath(getQuestionSourcePath(item));
    const anchors = getPaperQuestionOrderAnchors(item);

    return path || anchors.length > 0
        ? { path, anchors }
        : null;
}

function normalizeStoredPaperOrderEntry(entry) {
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

function getStoredPaperOrderEntries(state) {
    const rawEntries = Array.isArray(state?.entries)
        ? state.entries
        : asArray(state?.paths);

    return rawEntries
        .map(normalizeStoredPaperOrderEntry)
        .filter(Boolean);
}

function getPaperOrderPathParts(path) {
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

/* 兼容旧版仅保存路径的锁，识别“原名 + 后缀”式重命名。 */
function isLikelyRenamedPaperQuestionPath(storedPath, currentPath) {
    const stored = getPaperOrderPathParts(storedPath);
    const current = getPaperOrderPathParts(currentPath);

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

function buildPaperOrderEntryLookup(entries) {
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
                orderByAnchor.set(anchor, null);
            }
        }
    });

    return { entries, orderByPath, orderByAnchor };
}

function findPaperOrderEntryIndex(item, lookup) {
    for (const anchor of getPaperQuestionOrderAnchors(item)) {
        const index = lookup.orderByAnchor.get(anchor);
        if (Number.isInteger(index)) return index;
    }

    const path = normalizeVaultPath(getQuestionSourcePath(item));
    const exactIndex = lookup.orderByPath.get(path);

    if (Number.isInteger(exactIndex)) return exactIndex;

    const renamedMatches = [];

    lookup.entries.forEach((entry, index) => {
        if (
            entry.anchors.length === 0 &&
            isLikelyRenamedPaperQuestionPath(entry.path, path)
        ) {
            renamedMatches.push(index);
        }
    });

    return renamedMatches.length === 1
        ? renamedMatches[0]
        : undefined;
}

function mergePaperOrderEntries(currentItems, previousState = null) {
    const previousEntries = getStoredPaperOrderEntries(previousState);

    if (previousEntries.length === 0) {
        return currentItems
            .map(createPaperOrderEntry)
            .filter(Boolean);
    }

    const mergedEntries = previousEntries.map(entry => ({
        path: entry.path,
        anchors: [...entry.anchors]
    }));
    const lookup = buildPaperOrderEntryLookup(previousEntries);
    const claimedIndexes = new Set();

    for (const item of currentItems) {
        const currentEntry = createPaperOrderEntry(item);
        if (!currentEntry) continue;

        const matchedIndex = findPaperOrderEntryIndex(item, lookup);

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

    return mergedEntries;
}

/* ================================================================
 * 2. 题库扫描与科目识别
 * ================================================================ */

function detectSubject(page, allowedSubjectIds) {
    const pageTagKeys = getPageTags(page).map(tagKey);
    const matchedSubjects = new Set();

    /*
     * 原匹配规则等价于“标签根 == 候选标签 或 候选标签以 根/ 开头”：
     * 从完整标签起逐级向上截断到各级前缀，每级做一次 Map 查找即可覆盖
     * 全部前缀匹配，替代原先的 科目×标签根×候选标签 三重线性扫描。
     */
    for (const candidateKey of pageTagKeys) {
        let key = candidateKey;

        while (key) {
            const owners = SUBJECT_BY_TAG_KEY.get(key);
            if (owners) {
                for (const owner of owners) matchedSubjects.add(owner);
            }

            const slashIndex = key.lastIndexOf("/");
            if (slashIndex < 0) break;
            key = key.slice(0, slashIndex);
        }
    }

    if (matchedSubjects.size !== 1) return null;

    const matchedSubject = Array.from(matchedSubjects)[0];
    return allowedSubjectIds.has(matchedSubject.id)
        ? matchedSubject
        : null;
}

function getQuestionImageFiles(page, sourceFile = undefined) {
    const liveSourceFile = sourceFile === undefined
        ? app.vault.getAbstractFileByPath(page.file.path)
        : sourceFile;

    if (!liveSourceFile || liveSourceFile.extension !== "md") {
        return [];
    }

    const cache = app.metadataCache.getFileCache(liveSourceFile);
    const embeds = cache?.embeds ?? [];
    const imageFiles = [];
    const visitedPaths = new Set();

    for (const embed of embeds) {
        if (!embedHasQuestionMarker(embed)) continue;

        const imageFile = app.metadataCache.getFirstLinkpathDest(
            embed.link,
            liveSourceFile.path
        );

        if (
            !imageFile ||
            !getImageMimeType(imageFile) ||
            visitedPaths.has(imageFile.path)
        ) {
            continue;
        }

        visitedPaths.add(imageFile.path);
        imageFiles.push(imageFile);
    }

    return imageFiles;
}

function buildQuestionItem(page, subject, imageFiles, sourceFile = undefined) {
    const level = parseLevel(page.level);
    const peakLevel = parseLevel(page.peak_level) ?? level;
    const regressed =
        isTrue(page.regressed) ||
        (
            level !== null &&
            peakLevel !== null &&
            level < peakLevel
        );

    return {
        page,
        sourceFile: sourceFile === undefined
            ? app.vault.getAbstractFileByPath(page.file.path)
            : sourceFile,
        imageFiles,
        subjectId: subject.id,
        subjectLabel: subject.label,
        level,
        peakLevel,
        regressed,
        nextReview: normalizeIsoDate(page.next_review),
        reviewCount: Math.max(0, Number(page.review_count) || 0)
    };
}

function scanQuestionBank(paperType, providedPages = null) {
    const subjects = asArray(paperType?.subjects);

    if (subjects.length === 0) {
        throw new Error("当前试卷没有配置科目");
    }

    let pages = providedPages;

    /* 未提供页面数组（签名查询失败的回退路径）时再自行扫描一次全库。 */
    if (!pages) {
        try {
            pages = Array.from(dv.pages());
        } catch (error) {
            console.error("智能组卷读取全库失败：", error);
            throw new Error("Dataview 无法读取全库页面");
        }
    }

    const items = [];
    const allowedSubjectIds = new Set(subjects.map(subject => subject.id));
    const availableCounts = Object.fromEntries(
        subjects.map(subject => [subject.id, 0])
    );
    const visitedPaths = new Set();
    const visitedQuestionSignatures = new Set();
    let categorizedWithoutQuestionImage = 0;
    let skippedDuplicateQuestions = 0;

    for (const page of pages) {
        const pagePath = normalizeVaultPath(page?.file?.path);

        if (!pagePath || visitedPaths.has(pagePath)) continue;

        const subject = detectSubject(page, allowedSubjectIds);

        if (!subject) continue;

        const sourceFile = app.vault.getAbstractFileByPath(page.file.path);
        const imageFiles = getQuestionImageFiles(page, sourceFile);

        if (imageFiles.length === 0) {
            categorizedWithoutQuestionImage++;
            continue;
        }

        const questionSignature = imageFiles
            .map(imageFile => normalizeText(
                normalizeVaultPath(imageFile.path)
            ))
            .sort()
            .join("\u0000");

        if (
            questionSignature &&
            visitedQuestionSignatures.has(questionSignature)
        ) {
            skippedDuplicateQuestions++;
            continue;
        }

        visitedPaths.add(pagePath);
        if (questionSignature) {
            visitedQuestionSignatures.add(questionSignature);
        }
        items.push(buildQuestionItem(
            page,
            subject,
            imageFiles,
            sourceFile
        ));
        availableCounts[subject.id]++;
    }

    const sourcePaths = new Map(
        items.map(item => [item, getQuestionSourcePath(item)])
    );
    items.sort((a, b) => sourcePaths.get(a).localeCompare(
        sourcePaths.get(b),
        "zh-CN",
        { numeric: true }
    ));

    return {
        items,
        availableCounts,
        categorizedWithoutQuestionImage,
        skippedDuplicateQuestions
    };
}

/* ================================================================
 * 3. 配额与个性化抽题
 * ================================================================ */

function allocateLargestRemainder(totalCount, subjects) {
    const safeTotal = Math.max(0, Math.floor(Number(totalCount) || 0));
    const rows = subjects.map((subject, index) => ({
        subject,
        index,
        weight: Math.max(0, Number(subject.weight) || 0),
        count: 0,
        remainder: 0
    }));
    const totalWeight = rows.reduce(
        (sum, row) => sum + row.weight,
        0
    );

    if (safeTotal === 0 || totalWeight === 0) {
        return Object.fromEntries(
            rows.map(row => [row.subject.id, 0])
        );
    }

    for (const row of rows) {
        const exactCount = safeTotal * row.weight / totalWeight;
        row.count = Math.floor(exactCount);
        row.remainder = exactCount - row.count;
    }

    const unallocated = safeTotal - rows.reduce(
        (sum, row) => sum + row.count,
        0
    );
    const remainderOrder = [...rows].sort((a, b) => (
        b.remainder - a.remainder ||
        a.index - b.index
    ));

    for (let index = 0; index < unallocated; index++) {
        remainderOrder[index % remainderOrder.length].count++;
    }

    return Object.fromEntries(
        rows.map(row => [row.subject.id, row.count])
    );
}

function calculateQuotas(requestedCount, availableCounts, subjects) {
    const targetCounts = allocateLargestRemainder(
        requestedCount,
        subjects
    );
    const actualCounts = Object.fromEntries(
        subjects.map(subject => [subject.id, 0])
    );
    const availableTotal = subjects.reduce(
        (sum, subject) => (
            sum + Math.max(
                0,
                Number(availableCounts[subject.id]) || 0
            )
        ),
        0
    );
    let remaining = Math.min(requestedCount, availableTotal);
    let activeSubjects = subjects.filter(subject => (
        Number(availableCounts[subject.id]) > 0
    ));
    let safetyCounter = 0;

    while (
        remaining > 0 &&
        activeSubjects.length > 0 &&
        safetyCounter < CONFIG.maxQuestionCount + subjects.length + 10
    ) {
        safetyCounter++;

        const roundCounts = allocateLargestRemainder(
            remaining,
            activeSubjects
        );
        let addedThisRound = 0;

        for (const subject of activeSubjects) {
            const room = Math.max(
                0,
                Number(availableCounts[subject.id]) -
                actualCounts[subject.id]
            );
            const addition = Math.min(
                room,
                Math.max(0, Number(roundCounts[subject.id]) || 0)
            );

            actualCounts[subject.id] += addition;
            addedThisRound += addition;
        }

        remaining -= addedThisRound;
        activeSubjects = activeSubjects.filter(subject => (
            actualCounts[subject.id] <
            Number(availableCounts[subject.id])
        ));

        if (addedThisRound === 0 && activeSubjects.length > 0) {
            const fallbackSubject = [...activeSubjects].sort((a, b) => (
                Number(b.weight) - Number(a.weight)
            ))[0];

            actualCounts[fallbackSubject.id]++;
            remaining--;
        }
    }

    return {
        targetCounts,
        actualCounts,
        shortage: Math.max(0, requestedCount - availableTotal),
        adjusted: subjects.some(subject => (
            targetCounts[subject.id] !== actualCounts[subject.id]
        ))
    };
}

function deterministicUnitHash(value) {
    let hash = 2166136261;
    const text = String(value ?? "");

    for (let index = 0; index < text.length; index++) {
        hash ^= text.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }

    return ((hash >>> 0) + 1) / 4294967297;
}

function getSelectionProfile(
    item,
    today = localDate(),
    preparedTodayMoment = null
) {
    const levelWeakness = item.level === null
        ? 0.65
        : (5 - Math.min(5, Math.max(0, item.level))) / 5;
    const regressionGap =
        item.level !== null && item.peakLevel !== null
            ? Math.min(
                1,
                Math.max(0, item.peakLevel - item.level) / 5
            )
            : 0;
    const reviewDate = normalizeIsoDate(item.nextReview);
    const reviewCount = Math.max(0, Number(item.reviewCount) || 0);
    let overdueDays = null;
    let dueScore = 0;

    if (reviewDate) {
        const todayMoment = preparedTodayMoment ??
            moment(today).startOf("day");
        const reviewMoment = moment(reviewDate).startOf("day");

        if (todayMoment.isValid() && reviewMoment.isValid()) {
            overdueDays = todayMoment.diff(reviewMoment, "days");

            if (overdueDays >= 0) {
                dueScore = 1 + Math.min(overdueDays, 30) / 30;
            }
        }
    }

    const noveltyScore = 1 / Math.sqrt(1 + reviewCount);
    const weight = Math.min(
        8,
        Math.max(
            0.5,
            1 +
            2.8 * levelWeakness +
            1.8 * Number(item.regressed) +
            regressionGap +
            1.2 * dueScore +
            0.4 * noveltyScore
        )
    );
    const reasons = [];

    if (item.regressed) reasons.push("降级题");

    if (item.level === null) {
        reasons.push("未评级");
    } else if (item.level <= 2) {
        reasons.push(`当前${item.level}级`);
    }

    if (overdueDays !== null && overdueDays >= 0) {
        reasons.push(overdueDays === 0 ? "今天到期" : `逾期${overdueDays}天`);
    }

    if (reviewCount === 0) reasons.push("尚未复习");

    return { weight, reasons, overdueDays };
}

function selectWeightedItems(candidates, count, seed, subjectId) {
    const today = localDate();
    const todayMoment = moment(today).startOf("day");

    return candidates
        .map(item => {
            const sourcePath = getQuestionSourcePath(item);
            const selection = getSelectionProfile(
                item,
                today,
                todayMoment
            );
            const randomValue = deterministicUnitHash(
                `${seed}\u0000${subjectId}\u0000${sourcePath}`
            );
            const selectionCost = -Math.log(
                Math.max(randomValue, 1e-12)
            ) / selection.weight;

            return { item, sourcePath, selection, selectionCost };
        })
        .sort((a, b) => (
            a.selectionCost - b.selectionCost ||
            a.sourcePath.localeCompare(
                b.sourcePath,
                "zh-CN",
                { numeric: true }
            )
        ))
        .slice(0, Math.max(0, count))
        .map(entry => ({
            ...entry.item,
            selection: entry.selection
        }));
}

function composePaper(bank, requestedCount, paperType) {
    const subjects = asArray(paperType?.subjects);
    const safeRequestedCount = Math.min(
        Math.max(1, Math.floor(Number(requestedCount) || 1)),
        CONFIG.maxQuestionCount
    );
    const quotaResult = calculateQuotas(
        safeRequestedCount,
        bank.availableCounts,
        subjects
    );
    const seed = `${Date.now()}-${Math.random()}`;
    const selectedItems = [];
    const candidatesBySubject = new Map(
        subjects.map(subject => [subject.id, []])
    );

    for (const item of bank.items) {
        candidatesBySubject.get(item.subjectId)?.push(item);
    }

    for (const subject of subjects) {
        const candidates = candidatesBySubject.get(subject.id) ?? [];

        selectedItems.push(...selectWeightedItems(
            candidates,
            quotaResult.actualCounts[subject.id],
            seed,
            subject.id
        ));
    }

    const uniquePathCount = new Set(
        selectedItems.map(item => getQuestionSourcePath(item))
    ).size;

    if (uniquePathCount !== selectedItems.length) {
        throw new Error("检测到重复题目，已停止生成");
    }

    return {
        ...quotaResult,
        requestedCount: safeRequestedCount,
        actualCount: selectedItems.length,
        items: selectedItems,
        paperTypeId: paperType.id,
        paperTypeLabel: paperType.label,
        ratioLabel: paperType.ratioLabel,
        subjects,
        availableCounts: bank.availableCounts,
        categorizedWithoutQuestionImage:
            bank.categorizedWithoutQuestionImage,
        skippedDuplicateQuestions: bank.skippedDuplicateQuestions
    };
}

function getCountText(counts, subjects) {
    return subjects
        .map(subject => `${subject.label}${Number(counts[subject.id]) || 0}`)
        .join(" / ");
}

function getSelectionStats(items) {
    return items.reduce(
        (stats, item) => {
            if (item.regressed) stats.regressed++;
            if (item.level !== null && item.level <= 2) stats.weak++;
            if (item.level === null) stats.unrated++;
            if (
                item.selection?.overdueDays !== null &&
                item.selection?.overdueDays >= 0
            ) {
                stats.due++;
            }

            return stats;
        },
        { regressed: 0, weak: 0, unrated: 0, due: 0 }
    );
}

/* ================================================================
 * 4. 独立界面
 * ================================================================ */

const headerEl = viewDocument.createElement("header");
headerEl.className = "smart-paper-header";

const titleEl = viewDocument.createElement("h3");
titleEl.className = "smart-paper-title";
titleEl.textContent = "🧠 数学一 / 408 智能组卷";

const descriptionEl = viewDocument.createElement("p");
descriptionEl.className = "smart-paper-description";
descriptionEl.textContent =
    "数学一与 408 分开扫描、独立组卷；低等级、降级和已到复习日的题目" +
    "会获得更高抽取概率。";

headerEl.appendChild(titleEl);
headerEl.appendChild(descriptionEl);

const controlsEl = viewDocument.createElement("div");
controlsEl.className = "smart-paper-controls";

const paperTypeLabelEl = viewDocument.createElement("label");
paperTypeLabelEl.className = "smart-paper-type-label";
paperTypeLabelEl.append("试卷类型");

const paperTypeSelectEl = viewDocument.createElement("select");
paperTypeSelectEl.className = "smart-paper-type-select";
paperTypeSelectEl.setAttribute("aria-label", "智能组卷试卷类型");

for (const paperType of CONFIG.paperTypes) {
    const optionEl = viewDocument.createElement("option");
    optionEl.value = paperType.id;
    optionEl.textContent = paperType.label;
    optionEl.selected = paperType.id === CONFIG.defaultPaperType;
    paperTypeSelectEl.appendChild(optionEl);
}

paperTypeLabelEl.appendChild(paperTypeSelectEl);

const countLabelEl = viewDocument.createElement("label");
countLabelEl.className = "smart-paper-count-label";
countLabelEl.append("组卷题数");

const countSelectEl = viewDocument.createElement("select");
countSelectEl.className = "smart-paper-count-select";
countSelectEl.setAttribute("aria-label", "智能组卷题数");

for (const count of CONFIG.questionCountOptions) {
    const optionEl = viewDocument.createElement("option");
    optionEl.value = String(count);
    optionEl.textContent = `${count} 题`;
    optionEl.selected = count === CONFIG.defaultQuestionCount;
    countSelectEl.appendChild(optionEl);
}

countLabelEl.appendChild(countSelectEl);

const generateButtonEl = viewDocument.createElement("button");
generateButtonEl.type = "button";
generateButtonEl.className = "smart-paper-generate-button";

const printButtonEl = viewDocument.createElement("button");
printButtonEl.type = "button";
printButtonEl.className = "smart-paper-print-button";

const orderLockButtonEl = viewDocument.createElement("button");
orderLockButtonEl.type = "button";
orderLockButtonEl.className = "smart-paper-order-lock-button";

const summaryEl = viewDocument.createElement("div");
summaryEl.className = "smart-paper-summary";

controlsEl.appendChild(paperTypeLabelEl);
controlsEl.appendChild(countLabelEl);
controlsEl.appendChild(generateButtonEl);
controlsEl.appendChild(orderLockButtonEl);
controlsEl.appendChild(printButtonEl);
controlsEl.appendChild(summaryEl);

const basisEl = viewDocument.createElement("p");
basisEl.className = "smart-paper-basis";
basisEl.textContent =
    "只按唯一科目标签分类；一篇题目笔记计为一道题，多张『题目』图片" +
    "视为同一道题的连续页面。";

const emptyEl = viewDocument.createElement("div");
emptyEl.className = "smart-paper-empty";
emptyEl.textContent = "选择题数并点击“智能组卷”，本卷题目会显示在这里。";

const tableWrapEl = viewDocument.createElement("div");
tableWrapEl.className = "smart-paper-table-wrap";
tableWrapEl.hidden = true;

const tableEl = viewDocument.createElement("table");
tableEl.className = "smart-paper-table";

const tableHeadEl = viewDocument.createElement("thead");
const headRowEl = viewDocument.createElement("tr");

for (const heading of ["题号", "科目", "来源", "题图", "选题依据"]) {
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
dv.container.appendChild(basisEl);
dv.container.appendChild(emptyEl);
dv.container.appendChild(tableWrapEl);

let buildInProgress = false;
let printInProgress = false;
let paperItems = [];
let paperComposition = null;
let paperOrderLocked = false;

const PAPER_ORDER_LOCK_VERSION = 2;
const LEGACY_PAPER_ORDER_LOCK_VERSION = 1;
const paperOrderStorageKey =
    "smart-paper-generator:order-lock:" +
    encodeURIComponent(String(app.vault.getName?.() ?? "vault")) + ":" +
    normalizeVaultPath(dv.current()?.file?.path ?? "default");

function getPaperOrderStorage() {
    try {
        return viewWindow?.localStorage ?? null;
    } catch (error) {
        console.warn("智能组卷顺序存储不可用：", error);
        return null;
    }
}

function readPaperOrderLock() {
    try {
        const storage = getPaperOrderStorage();
        const rawState = storage?.getItem(paperOrderStorageKey);
        const state = rawState ? JSON.parse(rawState) : null;

        const hasKnownPaperType = CONFIG.paperTypes.some(
            type => type.id === state?.paperTypeId
        );
        const hasCurrentEntries =
            state?.version === PAPER_ORDER_LOCK_VERSION &&
            Array.isArray(state.entries);
        const hasLegacyPaths =
            state?.version === LEGACY_PAPER_ORDER_LOCK_VERSION &&
            Array.isArray(state.paths);

        if (
            hasKnownPaperType &&
            (hasCurrentEntries || hasLegacyPaths)
        ) {
            const entries = getStoredPaperOrderEntries(state);
            if (entries.length > 0) return { ...state, entries };
        }

        if (rawState) storage?.removeItem(paperOrderStorageKey);
    } catch (error) {
        console.warn("固定卷面顺序读取失败：", error);
    }

    return null;
}

function writePaperOrderLock(previousState = null) {
    const entries = mergePaperOrderEntries(
        paperItems,
        previousState
    );
    const paths = entries
        .map(entry => entry.path)
        .filter(Boolean);

    if (entries.length === 0 || !paperComposition) return false;

    try {
        const storage = getPaperOrderStorage();
        if (!storage) return false;

        storage.setItem(
            paperOrderStorageKey,
            JSON.stringify({
                version: PAPER_ORDER_LOCK_VERSION,
                paperTypeId: paperComposition.paperTypeId,
                requestedCount: paperComposition.requestedCount,
                entries,
                paths
            })
        );
        return true;
    } catch (error) {
        console.warn("固定卷面顺序保存失败：", error);
        return false;
    }
}

function clearPaperOrderLock() {
    try {
        getPaperOrderStorage()?.removeItem(paperOrderStorageKey);
        return true;
    } catch (error) {
        console.warn("固定卷面顺序清除失败：", error);
        return false;
    }
}

/* 题库缓存：重复点击“生成”时跳过全库扫描；任一笔记变化后签名失效并自动重建。 */
let bankCache = null;

/*
 * 一次性物化 dv.pages()：同一份页面数组既用于计算版本签名，也直接交给
 * scanQuestionBank 复用，避免首次加载或缓存失效时对全库执行两次扫描。
 * 查询失败时返回 null 签名，调用方会强制重新扫描且不写缓存。
 */
function collectAllPages() {
    let pages = null;
    let pageCount = 0;
    let maxMtime = 0;

    try {
        pages = Array.from(dv.pages());

        for (const page of pages) {
            pageCount++;

            const mtime = page?.file?.mtime?.valueOf?.();
            if (typeof mtime === "number" && mtime > maxMtime) {
                maxMtime = mtime;
            }
        }
    } catch (error) {
        return { pages: null, signature: null };
    }

    return { pages, signature: `${pageCount}:${maxMtime}` };
}

function getCachedQuestionBank(paperType) {
    const { pages, signature: versionSignature } = collectAllPages();

    if (
        bankCache &&
        bankCache.paperTypeId === paperType.id &&
        versionSignature !== null &&
        bankCache.signature === versionSignature
    ) {
        return bankCache.bank;
    }

    const bank = scanQuestionBank(paperType, pages);

    if (versionSignature !== null) {
        bankCache = {
            paperTypeId: paperType.id,
            signature: versionSignature,
            bank
        };
    }

    return bank;
}

function restoreLockedPaper() {
    const state = readPaperOrderLock();
    if (!state) return false;

    try {
        const paperType = getPaperType(state.paperTypeId);
        const bank = getCachedQuestionBank(paperType);
        const storedEntries = getStoredPaperOrderEntries(state);
        const lookup = buildPaperOrderEntryLookup(storedEntries);
        const itemByOrderIndex = new Map();

        for (const item of bank.items) {
            const orderIndex = findPaperOrderEntryIndex(item, lookup);

            if (
                Number.isInteger(orderIndex) &&
                !itemByOrderIndex.has(orderIndex)
            ) {
                itemByOrderIndex.set(orderIndex, item);
            }
        }

        /* 今天日期与 moment 只构造一次，供全部恢复题共用，避免逐题重复计算。 */
        const restoredToday = localDate();
        const restoredTodayMoment = moment(restoredToday).startOf("day");
        const restoredItems = Array.from(
            { length: storedEntries.length },
            (_, index) => itemByOrderIndex.get(index)
        )
            .filter(Boolean)
            .map(item => ({
                ...item,
                selection: getSelectionProfile(
                    item,
                    restoredToday,
                    restoredTodayMoment
                )
            }));

        if (restoredItems.length === 0) {
            clearPaperOrderLock();
            return false;
        }

        const requestedCount = Math.min(
            CONFIG.maxQuestionCount,
            Math.max(
                1,
                Math.floor(
                    Number(state.requestedCount) || restoredItems.length
                )
            )
        );
        const targetCounts = allocateLargestRemainder(
            requestedCount,
            paperType.subjects
        );
        const actualCounts = Object.fromEntries(
            paperType.subjects.map(subject => [subject.id, 0])
        );

        for (const item of restoredItems) {
            if (Object.prototype.hasOwnProperty.call(
                actualCounts,
                item.subjectId
            )) {
                actualCounts[item.subjectId]++;
            }
        }

        paperTypeSelectEl.value = paperType.id;

        if (Array.from(countSelectEl.options).some(
            option => Number(option.value) === requestedCount
        )) {
            countSelectEl.value = String(requestedCount);
        }

        paperItems = restoredItems;
        paperComposition = {
            requestedCount,
            actualCount: restoredItems.length,
            targetCounts,
            actualCounts,
            shortage: Math.max(0, requestedCount - restoredItems.length),
            adjusted: paperType.subjects.some(subject => (
                targetCounts[subject.id] !== actualCounts[subject.id]
            )),
            paperTypeId: paperType.id,
            paperTypeLabel: paperType.label,
            ratioLabel: paperType.ratioLabel,
            subjects: paperType.subjects,
            availableCounts: bank.availableCounts,
            categorizedWithoutQuestionImage:
                bank.categorizedWithoutQuestionImage,
            skippedDuplicateQuestions: bank.skippedDuplicateQuestions
        };
        paperOrderLocked = true;

        if (!writePaperOrderLock(state)) {
            paperOrderLocked = false;
        }

        return true;
    } catch (error) {
        console.error("固定卷面恢复失败：", error);
        paperOrderLocked = false;
        return false;
    }
}

function updatePaperTypeCopy() {
    const paperType = getPaperType(paperTypeSelectEl.value);
    const primaryTags = paperType.subjects
        .map(subject => subject.tagRoots[0])
        .join(" / ");

    titleEl.textContent = `🧠 ${paperType.label}智能组卷`;
    descriptionEl.textContent =
        `${paperType.label}独立扫描全库，按 ${paperType.ratioLabel} 组卷；` +
        "低等级、降级和已到复习日的题目会获得更高抽取概率。";
    basisEl.textContent =
        `科目仅按唯一标签 ${primaryTags} 分类；` +
        "一篇题目笔记计为一道题，多张『题目』图片视为同一道题的连续页面。";
    emptyEl.textContent =
        `选择题数并点击“智能组卷”，${paperType.label}题目会显示在这里。`;
}

function createStatusChip(text, status) {
    const chipEl = viewDocument.createElement("span");
    chipEl.className = "smart-paper-status-chip";
    chipEl.dataset.status = status;
    chipEl.textContent = text;
    return chipEl;
}

function renderPaper() {
    tableBodyEl.replaceChildren();

    if (!paperComposition || paperItems.length === 0) {
        tableWrapEl.hidden = true;
        emptyEl.hidden = false;
        summaryEl.textContent = "";
        return;
    }

    const subjects = paperComposition.subjects;
    const stats = getSelectionStats(paperItems);
    const parts = [
        `${paperComposition.paperTypeLabel}本卷 ${paperComposition.actualCount} 题`,
        `题库：${getCountText(paperComposition.availableCounts, subjects)}`,
        `实际：${getCountText(paperComposition.actualCounts, subjects)}`,
        `弱项命中：降级${stats.regressed}、0～2级${stats.weak}、` +
        `到期${stats.due}、未评级${stats.unrated}`
    ];

    if (paperComposition.adjusted) {
        parts.splice(
            2,
            0,
            `${paperComposition.paperTypeLabel}目标：` +
            getCountText(paperComposition.targetCounts, subjects)
        );
        parts.push("缺题科目已按剩余科目权重自动补位");
    } else {
        parts.push(`符合 ${paperComposition.ratioLabel} 配额`);
    }

    if (paperComposition.shortage > 0) {
        parts.push(`全库仍缺 ${paperComposition.shortage} 题`);
    }

    if (paperComposition.skippedDuplicateQuestions > 0) {
        parts.push(
            `已按相同题图去重 ${paperComposition.skippedDuplicateQuestions} 题`
        );
    }

    summaryEl.textContent = parts.join("；") + "。";
    const rowsFragment = viewDocument.createDocumentFragment?.() ?? null;
    const rowsParent = rowsFragment ?? tableBodyEl;

    paperItems.forEach((item, index) => {
        const rowEl = viewDocument.createElement("tr");

        const numberCellEl = viewDocument.createElement("td");
        const numberEl = viewDocument.createElement("span");
        numberEl.className = "smart-paper-question-number";
        numberEl.textContent = String(index + 1);
        numberCellEl.appendChild(numberEl);

        const subjectCellEl = viewDocument.createElement("td");
        const subjectEl = viewDocument.createElement("span");
        subjectEl.className = "smart-paper-subject";
        subjectEl.textContent = item.subjectLabel;
        subjectCellEl.appendChild(subjectEl);

        const sourceCellEl = viewDocument.createElement("td");
        sourceCellEl.className = "smart-paper-source";
        const sourceLinkEl = viewDocument.createElement("a");
        sourceLinkEl.className = "internal-link smart-paper-source-link";
        sourceLinkEl.href = item.page.file.path;
        sourceLinkEl.dataset.href = item.page.file.path;
        sourceLinkEl.textContent = item.page.file.name;
        let renderedSourceFile = null;
        const updateSourceLink = event => {
            const sourceFile = resolveQuestionSourceFile(item);

            if (!sourceFile) {
                renderedSourceFile = null;
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

            renderedSourceFile = sourceFile;
            sourceLinkEl.href = sourceFile.path;
            sourceLinkEl.dataset.href = sourceFile.path;
            sourceLinkEl.textContent = sourceFile.basename;
            return true;
        };

        updateSourceLink();
        /* 在 Obsidian 处理 internal-link 的冒泡事件前刷新移动后的路径。 */
        sourceLinkEl.addEventListener("pointerdown", updateSourceLink);
        sourceLinkEl.addEventListener("click", updateSourceLink);
        sourceCellEl.appendChild(sourceLinkEl);

        const imageCellEl = viewDocument.createElement("td");
        const imageListEl = viewDocument.createElement("ul");
        imageListEl.className = "smart-paper-images";
        const renderedSourceName = renderedSourceFile?.basename ??
            renderedSourceFile?.name?.replace(/\.md$/i, "") ??
            String(item?.page?.file?.name ?? "未知题目");

        for (const imageFile of item.imageFiles) {
            const imageItemEl = viewDocument.createElement("li");
            imageItemEl.className = "smart-paper-image-item";
            const imageEl = viewDocument.createElement("img");
            imageEl.className = "smart-paper-image";
            imageEl.loading = "lazy";
            imageEl.alt = `${renderedSourceName} · ${imageFile.name}`;
            imageEl.addEventListener("error", () => {
                const placeholderEl = viewDocument.createElement("div");
                placeholderEl.className = "smart-paper-image-placeholder";
                placeholderEl.textContent = `题图预览加载失败：${imageFile.name}`;
                imageEl.replaceWith(placeholderEl);
            }, { once: true });
            imageEl.src = app.vault.getResourcePath(imageFile);
            imageItemEl.appendChild(imageEl);
            imageListEl.appendChild(imageItemEl);
        }

        imageCellEl.appendChild(imageListEl);

        const basisCellEl = viewDocument.createElement("td");
        const chipsEl = viewDocument.createElement("div");
        chipsEl.className = "smart-paper-status-chips";
        chipsEl.appendChild(createStatusChip(
            getLevelText(item.level),
            "level"
        ));

        if (item.regressed) {
            chipsEl.appendChild(createStatusChip("降级题", "downgraded"));
        }

        if (
            item.selection?.overdueDays !== null &&
            item.selection?.overdueDays >= 0
        ) {
            const dueText = item.selection.overdueDays === 0
                ? "今天到期"
                : `逾期${item.selection.overdueDays}天`;
            chipsEl.appendChild(createStatusChip(dueText, "overdue"));
        }

        if (item.reviewCount === 0) {
            chipsEl.appendChild(createStatusChip("尚未复习", "new"));
        }

        const reasonEl = viewDocument.createElement("p");
        reasonEl.className = "smart-paper-basis";
        reasonEl.textContent = item.selection?.reasons?.length > 0
            ? item.selection.reasons.join("、")
            : "均衡巩固题";

        basisCellEl.appendChild(chipsEl);
        basisCellEl.appendChild(reasonEl);

        rowEl.appendChild(numberCellEl);
        rowEl.appendChild(subjectCellEl);
        rowEl.appendChild(sourceCellEl);
        rowEl.appendChild(imageCellEl);
        rowEl.appendChild(basisCellEl);
        rowsParent.appendChild(rowEl);
    });

    if (rowsFragment) tableBodyEl.appendChild(rowsFragment);

    emptyEl.hidden = true;
    tableWrapEl.hidden = false;
}

function refreshControls() {
    const busy = buildInProgress || printInProgress;

    paperTypeSelectEl.disabled = busy;
    countSelectEl.disabled = busy;
    generateButtonEl.disabled = busy;
    orderLockButtonEl.disabled = busy || paperItems.length === 0;
    printButtonEl.disabled = busy || paperItems.length === 0;

    paperTypeSelectEl.classList.toggle("smart-paper-busy", busy);
    countSelectEl.classList.toggle("smart-paper-busy", busy);
    generateButtonEl.classList.toggle("smart-paper-busy", busy);
    orderLockButtonEl.classList.toggle("smart-paper-busy", busy);
    printButtonEl.classList.toggle("smart-paper-busy", busy);

    orderLockButtonEl.classList.toggle(
        "is-active",
        paperOrderLocked
    );
    orderLockButtonEl.setAttribute(
        "aria-pressed",
        String(paperOrderLocked)
    );
    orderLockButtonEl.textContent = paperOrderLocked
        ? "📌 当前题序：已固定"
        : "📍 固定当前题序";
    orderLockButtonEl.title = paperOrderLocked
        ? "点击解除固定；当前卷面暂时保持不变"
        : "保存当前卷面题序，评级触发视图刷新后仍按原题号恢复";

    generateButtonEl.textContent = buildInProgress
        ? "⏳ 正在扫描全库…"
        : paperComposition
            ? "🎲 重新组卷"
            : "🧠 智能组卷";

    printButtonEl.textContent = printInProgress
        ? "⏳ 正在导出 PDF…"
        : `📑 导出带目录 PDF（${paperItems.length}）`;
}

async function generatePaper() {
    if (buildInProgress || printInProgress) return;

    buildInProgress = true;
    refreshControls();

    try {
        await wait(0);

        const paperType = getPaperType(paperTypeSelectEl.value);
        const requestedCount = Number(countSelectEl.value);
        const bank = getCachedQuestionBank(paperType);
        const nextComposition = composePaper(
            bank,
            requestedCount,
            paperType
        );

        if (nextComposition.actualCount === 0) {
            throw new Error(
                `没有找到带 ${paperType.subjects
                    .map(subject => subject.tagRoots[0])
                    .join(" / ")} 标签并且含『题目』图片的笔记`
            );
        }

        paperComposition = nextComposition;
        paperItems = [...nextComposition.items];

        if (paperOrderLocked && !writePaperOrderLock()) {
            paperOrderLocked = false;
        }

        renderPaper();

        const message = nextComposition.adjusted
            ? `⚠️ 已生成 ${paperType.label} ${nextComposition.actualCount} 题，` +
                "部分科目库存不足，比例已自动调整。"
            : `✅ 已按 ${paperType.ratioLabel} 生成 ` +
                `${nextComposition.actualCount} 题。`;

        new Notice(message, 5500);
    } catch (error) {
        console.error("独立智能组卷失败：", error);
        new Notice(
            `❌ 智能组卷失败：${error?.message ?? "未知错误"}`,
            7000
        );
    } finally {
        buildInProgress = false;
        refreshControls();
    }
}

/* ================================================================
 * 5. 打印本卷
 * ================================================================ */

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
        const handleLoad = () => finish(resolve);
        const handleError = () => finish(() => {
            reject(new Error(`题图加载失败：${imageEl.alt}`));
        });
        const timeoutId = setTimeout(() => finish(() => {
            reject(new Error(`题图加载超时：${imageEl.alt}`));
        }), timeoutMs);

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
        targetWindow.requestAnimationFrame(resolve);
    });
}

async function mapWithConcurrency(values, concurrency, mapper) {
    const entries = Array.from(values);
    if (entries.length === 0) return [];

    const results = new Array(entries.length);
    const errors = new Array(entries.length);
    const failed = new Array(entries.length).fill(false);
    const workerCount = Math.min(
        entries.length,
        Math.max(1, Math.floor(Number(concurrency) || 1))
    );
    let nextIndex = 0;

    const worker = async () => {
        while (nextIndex < entries.length) {
            const index = nextIndex++;

            try {
                results[index] = await mapper(entries[index], index);
            } catch (error) {
                errors[index] = error;
                failed[index] = true;
            }
        }
    };

    await Promise.all(Array.from({ length: workerCount }, worker));

    const firstFailedIndex = failed.findIndex(Boolean);
    if (firstFailedIndex >= 0) throw errors[firstFailedIndex];

    return results;
}

function createPrintRoot(printDocument) {
    const rootEl = printDocument.createElement("main");
    rootEl.className = "smart-paper-print-root";
    /* 保留标题的可访问性语义，供 Electron 生成 PDF outline。 */
    rootEl.setAttribute("role", "document");
    rootEl.style.position = "fixed";
    rootEl.style.left = "-10000px";
    rootEl.style.top = "0";
    rootEl.style.width = "186mm";
    rootEl.style.margin = "0";
    rootEl.style.padding = "0";
    rootEl.style.opacity = "0";
    rootEl.style.pointerEvents = "none";
    rootEl.style.background = "#ffffff";
    rootEl.style.color = "#000000";
    printDocument.body.appendChild(rootEl);
    return rootEl;
}

function createPrintStyle(printDocument) {
    const styleEl = printDocument.createElement("style");
    styleEl.className = "smart-paper-runtime-print-style";
    styleEl.textContent = `
        .smart-paper-print-root,
        .smart-paper-print-root * {
            box-sizing: border-box;
        }

        .smart-paper-print-root {
            /* 避免 Electron 37 将第 2 页后的 PDF 书签标题重复拼接。 */
            font-family: "Microsoft YaHei UI", "PingFang SC",
                "Noto Sans CJK SC", "Source Han Sans SC", sans-serif;
        }

        .smart-paper-print-item {
            margin: 0;
            break-inside: avoid-page;
            page-break-inside: avoid;
            break-after: page;
            page-break-after: always;
        }

        .smart-paper-print-item:last-child {
            break-after: auto;
            page-break-after: auto;
        }

        .smart-paper-print-title {
            margin: 0 0 2mm;
            font-size: 18pt;
            font-weight: 700;
            line-height: 1.25;
            break-after: avoid-page;
            page-break-after: avoid;
        }

        .smart-paper-print-source {
            margin: 0 0 3mm;
            font-size: 10.5pt;
            font-weight: 600;
            line-height: 1.45;
            overflow-wrap: anywhere;
            break-after: avoid-page;
            page-break-after: avoid;
        }

        .smart-paper-print-images {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            height: 236mm;
            gap: 3mm;
            overflow: hidden;
        }

        .smart-paper-print-image {
            display: block;
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: var(--smart-paper-image-max-height, 236mm);
            margin: 0 auto;
            object-fit: contain;
        }

        @media print {
            @page {
                size: A4 portrait;
                margin: 12mm 12mm 14mm;
            }

            html.smart-paper-print-mode,
            body.smart-paper-print-mode {
                width: auto !important;
                height: auto !important;
                min-height: 0 !important;
                margin: 0 !important;
                padding: 0 !important;
                overflow: visible !important;
                background: #ffffff !important;
                color: #000000 !important;
            }

            body.smart-paper-print-mode > :not(.smart-paper-print-root) {
                display: none !important;
            }

            body.smart-paper-print-mode > .smart-paper-print-root {
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

            body.smart-paper-print-mode .smart-paper-print-root,
            body.smart-paper-print-mode .smart-paper-print-root * {
                visibility: visible !important;
            }
        }
    `;

    printDocument.head.appendChild(styleEl);
    return styleEl;
}

function sanitizePdfFileName(value, fallback = "智能组卷") {
    const sanitized = String(value ?? "")
        .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "-")
        .replace(/[. ]+$/g, "")
        .trim();

    return sanitized || fallback;
}

function getPaperPdfDefaultName(questionCount) {
    const paperType = getPaperType(paperTypeSelectEl.value);

    return sanitizePdfFileName(
        `${paperType.label}-智能组卷-${questionCount}题`
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

async function printPaper() {
    if (buildInProgress || printInProgress) return;

    const printableItems = [...paperItems];

    if (printableItems.length === 0) {
        new Notice("💡 请先生成一份试卷。", 4000);
        return;
    }

    const printDocument = dv.container.ownerDocument;
    const printWindow = printDocument?.defaultView;

    if (!printDocument?.head || !printDocument.body || !printWindow) {
        new Notice("❌ 无法取得当前 Obsidian 打印窗口。", 6000);
        return;
    }

    printInProgress = true;
    refreshControls();

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
            "smart-paper-print-mode"
        );
        printDocument.body.classList.remove("smart-paper-print-mode");
        printRootEl?.remove();
        printStyleEl?.remove();
        printInProgress = false;
        refreshControls();
    };

    try {
        const { remote, webContents } = getPdfExportBridge(printWindow);
        const outputPath = await choosePdfSavePath(
            remote,
            getPaperPdfDefaultName(printableItems.length)
        );

        if (!outputPath) {
            cleanup();
            return;
        }

        printStyleEl = createPrintStyle(printDocument);
        printRootEl = createPrintRoot(printDocument);

        /* 超时上限对整卷恒定，提前算好避免在逐图循环里重复计算。 */
        const printImageTimeoutMs = Math.max(
            1000,
            Number(CONFIG.printImageLoadTimeoutMs) || 15000
        );
        const imageLoadPromises = [];
        const imageElements = [];
        let imageCount = 0;
        const printEntries = printableItems.map((item, index) => {
            const sourceFile = resolveQuestionSourceFile(item);

            if (!sourceFile) {
                throw new Error(
                    `题目笔记已删除或无法定位，请重新组卷：` +
                    `${item.page.file.path}`
                );
            }

            const itemImageCount = Math.max(1, item.imageFiles.length);
            const imageGapMm = 3;
            const availableImageHeightMm = 236;

            return {
                item,
                questionNumber: index + 1,
                sourceFile,
                maxImageHeightMm: Math.max(
                    20,
                    (
                        availableImageHeightMm -
                        imageGapMm * (itemImageCount - 1)
                    ) / itemImageCount
                )
            };
        });
        const imageReadTasks = printEntries.flatMap(entry => (
            entry.item.imageFiles.map(imageFile => ({ entry, imageFile }))
        ));
        const imagePayloads = await mapWithConcurrency(
            imageReadTasks,
            PRINT_BINARY_READ_CONCURRENCY,
            async ({ imageFile }) => {
                const mimeType = getImageMimeType(imageFile);

                if (!mimeType) {
                    throw new Error(
                        `不支持的题图格式：${imageFile.path}`
                    );
                }

                return {
                    imageFile,
                    mimeType,
                    imageData: await app.vault.readBinary(imageFile)
                };
            }
        );
        let imagePayloadIndex = 0;

        for (const entry of printEntries) {
            const {
                item,
                questionNumber,
                sourceFile,
                maxImageHeightMm
            } = entry;

            const itemEl = printDocument.createElement("section");
            itemEl.className = "smart-paper-print-item";

            const titleEl = printDocument.createElement("h1");
            titleEl.className = "smart-paper-print-title";
            titleEl.id = `question-${questionNumber}`;
            titleEl.textContent = `第 ${questionNumber} 题`;

            const sourceEl = printDocument.createElement("p");
            sourceEl.className = "smart-paper-print-source";
            sourceEl.textContent = `题目来源：${sourceFile.basename}`;

            const imagesEl = printDocument.createElement("div");
            imagesEl.className = "smart-paper-print-images";

            itemEl.appendChild(titleEl);
            itemEl.appendChild(sourceEl);
            itemEl.appendChild(imagesEl);
            printRootEl.appendChild(itemEl);

            for (const imageFile of item.imageFiles) {
                const payload = imagePayloads[imagePayloadIndex++];
                const objectUrl = urlApi.createObjectURL(
                    new BlobClass(
                        [payload.imageData],
                        { type: payload.mimeType }
                    )
                );
                payload.imageData = null;
                objectUrls.push(objectUrl);

                const imageEl = printDocument.createElement("img");
                imageEl.className = "smart-paper-print-image";
                imageEl.alt = `${sourceFile.basename} · ${imageFile.name}`;
                imageEl.style.setProperty(
                    "--smart-paper-image-max-height",
                    `${maxImageHeightMm}mm`
                );
                imagesEl.appendChild(imageEl);
                imageEl.src = objectUrl;
                imageElements.push(imageEl);
                imageLoadPromises.push(
                    waitForPrintImage(
                        imageEl,
                        printImageTimeoutMs
                    ).then(
                        () => null,
                        imageError => imageError
                    )
                );
                imageCount++;
            }
        }

        if (imageCount === 0) {
            throw new Error("本卷没有可打印的题图");
        }

        const imageLoadErrors = (await Promise.all(
            imageLoadPromises
        )).filter(Boolean);

        if (imageLoadErrors.length > 0) {
            throw imageLoadErrors[0];
        }
        await Promise.all(imageElements.map(imageEl => (
            typeof imageEl.decode === "function"
                ? imageEl.decode()
                : Promise.resolve()
        )));

        if (printDocument.fonts?.ready) {
            await printDocument.fonts.ready;
        }

        printDocument.documentElement.classList.add(
            "smart-paper-print-mode"
        );
        printDocument.body.classList.add("smart-paper-print-mode");

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
        console.error("智能试卷 PDF 导出失败：", error);
        cleanup();
        new Notice(
            `❌ PDF 导出失败：${error?.message ?? "未知错误"}`,
            7000
        );
    }
}

paperTypeSelectEl.addEventListener("change", () => {
    paperItems = [];
    paperComposition = null;
    paperOrderLocked = false;
    clearPaperOrderLock();
    updatePaperTypeCopy();
    renderPaper();
    refreshControls();
});

generateButtonEl.addEventListener("click", () => {
    void generatePaper();
});

orderLockButtonEl.addEventListener("click", () => {
    if (paperOrderLocked) {
        if (!clearPaperOrderLock()) {
            new Notice("❌ 无法解除当前卷面题序。", 4500);
            return;
        }

        paperOrderLocked = false;
        refreshControls();
        new Notice("🔓 已解除固定；当前卷面不会立即改变。", 4000);
        return;
    }

    if (!writePaperOrderLock()) {
        new Notice("❌ 无法保存当前卷面题序。", 4500);
        return;
    }

    paperOrderLocked = true;
    refreshControls();
    new Notice("📌 已固定当前卷面题序；刷新后仍按原题号恢复。", 4500);
});

printButtonEl.addEventListener("click", () => {
    void printPaper();
});

restoreLockedPaper();
updatePaperTypeCopy();
renderPaper();
refreshControls();
