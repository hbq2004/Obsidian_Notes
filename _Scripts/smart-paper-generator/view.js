/******************************************************************
 * 数学一 / 408 独立智能组卷 V2
 *
 * - 数学一与 408 分开组卷，不再混入同一份试卷
 * - 通过唯一科目标签识别题目：AM / LA / P&S / DS / CO / OS / CN
 * - 数学一按 3:1:1，408 按 45:45:35:25 分配题量
 * - 题量不足时按同一试卷内的剩余科目权重自动补位
 * - 结合 level、降级、到期日期和复习次数加权抽题
 * - 独立预览本卷，并可按每页一题打印或另存为 PDF
 ******************************************************************/

const CONFIG = {
    questionMarker: "题目",
    defaultQuestionCount: 20,
    questionCountOptions: [10, 20, 30, 40, 60, 100],
    maxQuestionCount: 100,
    printImageLoadTimeoutMs: 15000,
    /* Windows“打印到 PDF”关闭对话框后仍可能继续写文件，暂缓释放题图资源。 */
    printResourceReleaseDelayMs: 12000,
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

function getAllSubjects() {
    return CONFIG.paperTypes.flatMap(type => type.subjects);
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

function getPageTags(page) {
    const rawTags = [
        ...asArray(page?.tags),
        ...asArray(page?.file?.etags)
    ];
    const tags = [];
    const visited = new Set();

    for (const rawTag of rawTags) {
        const normalized = normalizeTag(rawTag);
        const key = tagKey(normalized);

        if (!normalized || visited.has(key)) continue;

        visited.add(key);
        tags.push(normalized);
    }

    return tags;
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
    const mimeTypes = {
        png: "image/png",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        jfif: "image/jpeg",
        gif: "image/gif",
        webp: "image/webp",
        bmp: "image/bmp",
        svg: "image/svg+xml",
        avif: "image/avif"
    };

    return mimeTypes[extension] ?? null;
}

/* ================================================================
 * 2. 题库扫描与科目识别
 * ================================================================ */

function detectSubject(page, allowedSubjects) {
    const pageTags = getPageTags(page);
    const tagMatches = getAllSubjects().filter(subject => (
        asArray(subject.tagRoots).some(requiredTag => (
            pageTags.some(candidateTag => (
                isSameTagOrDescendant(candidateTag, requiredTag)
            ))
        ))
    ));

    if (tagMatches.length !== 1) return null;

    const matchedSubject = tagMatches[0];
    return allowedSubjects.some(subject => subject.id === matchedSubject.id)
        ? matchedSubject
        : null;
}

function getQuestionImageFiles(page) {
    const sourceFile = app.vault.getAbstractFileByPath(page.file.path);

    if (!sourceFile || sourceFile.extension !== "md") {
        return [];
    }

    const cache = app.metadataCache.getFileCache(sourceFile);
    const embeds = cache?.embeds ?? [];
    const imageFiles = [];
    const visitedPaths = new Set();

    for (const embed of embeds) {
        const markerText = [
            embed.original ?? "",
            embed.displayText ?? "",
            embed.link ?? ""
        ].join(" ");

        if (!markerText.includes(CONFIG.questionMarker)) continue;

        const imageFile = app.metadataCache.getFirstLinkpathDest(
            embed.link,
            sourceFile.path
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

function buildQuestionItem(page, subject, imageFiles) {
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
        sourceFile: app.vault.getAbstractFileByPath(page.file.path),
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

function scanQuestionBank(paperType) {
    const subjects = asArray(paperType?.subjects);

    if (subjects.length === 0) {
        throw new Error("当前试卷没有配置科目");
    }

    let pages;

    try {
        pages = Array.from(dv.pages());
    } catch (error) {
        console.error("智能组卷读取全库失败：", error);
        throw new Error("Dataview 无法读取全库页面");
    }

    const items = [];
    const visitedPaths = new Set();
    const visitedQuestionSignatures = new Set();
    let categorizedWithoutQuestionImage = 0;
    let skippedDuplicateQuestions = 0;

    for (const page of pages) {
        const pagePath = normalizeVaultPath(page?.file?.path);

        if (!pagePath || visitedPaths.has(pagePath)) continue;

        const subject = detectSubject(page, subjects);

        if (!subject) continue;

        const imageFiles = getQuestionImageFiles(page);

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
        items.push(buildQuestionItem(page, subject, imageFiles));
    }

    items.sort((a, b) => a.page.file.path.localeCompare(
        b.page.file.path,
        "zh-CN",
        { numeric: true }
    ));

    const availableCounts = Object.fromEntries(
        subjects.map(subject => [
            subject.id,
            items.filter(item => item.subjectId === subject.id).length
        ])
    );

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

function getSelectionProfile(item, today = localDate()) {
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
        const todayMoment = moment(today).startOf("day");
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
    return candidates
        .map(item => {
            const selection = getSelectionProfile(item);
            const randomValue = deterministicUnitHash(
                `${seed}\u0000${subjectId}\u0000${item.page.file.path}`
            );
            const selectionCost = -Math.log(
                Math.max(randomValue, 1e-12)
            ) / selection.weight;

            return { item, selection, selectionCost };
        })
        .sort((a, b) => (
            a.selectionCost - b.selectionCost ||
            a.item.page.file.path.localeCompare(
                b.item.page.file.path,
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

    for (const subject of subjects) {
        const candidates = bank.items.filter(item => (
            item.subjectId === subject.id
        ));

        selectedItems.push(...selectWeightedItems(
            candidates,
            quotaResult.actualCounts[subject.id],
            seed,
            subject.id
        ));
    }

    const uniquePathCount = new Set(
        selectedItems.map(item => item.page.file.path)
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

const summaryEl = viewDocument.createElement("div");
summaryEl.className = "smart-paper-summary";

controlsEl.appendChild(paperTypeLabelEl);
controlsEl.appendChild(countLabelEl);
controlsEl.appendChild(generateButtonEl);
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
        sourceCellEl.appendChild(sourceLinkEl);

        const imageCellEl = viewDocument.createElement("td");
        const imageListEl = viewDocument.createElement("ul");
        imageListEl.className = "smart-paper-images";

        for (const imageFile of item.imageFiles) {
            const imageItemEl = viewDocument.createElement("li");
            imageItemEl.className = "smart-paper-image-item";
            const imageEl = viewDocument.createElement("img");
            imageEl.className = "smart-paper-image";
            imageEl.loading = "lazy";
            imageEl.alt = `${item.page.file.name} · ${imageFile.name}`;
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
        tableBodyEl.appendChild(rowEl);
    });

    emptyEl.hidden = true;
    tableWrapEl.hidden = false;
}

function refreshControls() {
    const busy = buildInProgress || printInProgress;

    paperTypeSelectEl.disabled = busy;
    countSelectEl.disabled = busy;
    generateButtonEl.disabled = busy;
    printButtonEl.disabled = busy || paperItems.length === 0;

    paperTypeSelectEl.classList.toggle("smart-paper-busy", busy);
    countSelectEl.classList.toggle("smart-paper-busy", busy);
    generateButtonEl.classList.toggle("smart-paper-busy", busy);
    printButtonEl.classList.toggle("smart-paper-busy", busy);

    generateButtonEl.textContent = buildInProgress
        ? "⏳ 正在扫描全库…"
        : paperComposition
            ? "🎲 重新组卷"
            : "🧠 智能组卷";

    printButtonEl.textContent = printInProgress
        ? "⏳ 正在准备打印…"
        : `🖨️ 打印本卷（${paperItems.length}）`;
}

async function generatePaper() {
    if (buildInProgress || printInProgress) return;

    buildInProgress = true;
    refreshControls();

    try {
        await wait(0);

        const paperType = getPaperType(paperTypeSelectEl.value);
        const requestedCount = Number(countSelectEl.value);
        const bank = scanQuestionBank(paperType);
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

function createPrintRoot(printDocument) {
    const rootEl = printDocument.createElement("main");
    rootEl.className = "smart-paper-print-root";
    rootEl.setAttribute("aria-hidden", "true");
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
            font-family: "Microsoft YaHei", "PingFang SC",
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
            height: 245mm;
            gap: 3mm;
            overflow: hidden;
        }

        .smart-paper-print-image {
            display: block;
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: var(--smart-paper-image-max-height, 245mm);
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
    let cleanupTimer = null;
    let afterPrintTimer = null;
    let afterPrintHandler = null;
    let cleanedUp = false;

    const cleanup = () => {
        if (cleanedUp) return;
        cleanedUp = true;

        if (cleanupTimer !== null) clearTimeout(cleanupTimer);
        if (afterPrintTimer !== null) clearTimeout(afterPrintTimer);

        for (const objectUrl of objectUrls) {
            urlApi.revokeObjectURL(objectUrl);
        }

        if (afterPrintHandler) {
            printWindow.removeEventListener("afterprint", afterPrintHandler);
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
        printStyleEl = createPrintStyle(printDocument);
        printRootEl = createPrintRoot(printDocument);

        const imageLoadPromises = [];
        const imageElements = [];
        let imageCount = 0;

        for (const item of printableItems) {
            const itemEl = printDocument.createElement("section");
            itemEl.className = "smart-paper-print-item";

            const sourceEl = printDocument.createElement("p");
            sourceEl.className = "smart-paper-print-source";
            sourceEl.textContent = `题目来源：${item.page.file.name}`;

            const imagesEl = printDocument.createElement("div");
            imagesEl.className = "smart-paper-print-images";

            const itemImageCount = Math.max(1, item.imageFiles.length);
            const imageGapMm = 3;
            const availableImageHeightMm = 245;
            const maxImageHeightMm = Math.max(
                20,
                (
                    availableImageHeightMm -
                    imageGapMm * (itemImageCount - 1)
                ) / itemImageCount
            );

            itemEl.appendChild(sourceEl);
            itemEl.appendChild(imagesEl);
            printRootEl.appendChild(itemEl);

            for (const imageFile of item.imageFiles) {
                const mimeType = getImageMimeType(imageFile);

                if (!mimeType) {
                    throw new Error(`不支持的题图格式：${imageFile.path}`);
                }

                const imageData = await app.vault.readBinary(imageFile);
                const objectUrl = urlApi.createObjectURL(
                    new BlobClass([imageData], { type: mimeType })
                );
                objectUrls.push(objectUrl);

                const imageEl = printDocument.createElement("img");
                imageEl.className = "smart-paper-print-image";
                imageEl.alt = `${item.page.file.name} · ${imageFile.name}`;
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
                        Math.max(
                            1000,
                            Number(CONFIG.printImageLoadTimeoutMs) || 15000
                        )
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

        const resourceReleaseDelayMs = Math.max(
            3000,
            Number(CONFIG.printResourceReleaseDelayMs) || 12000
        );

        afterPrintHandler = () => {
            new Notice(
                `⏳ Windows 正在完成 PDF 写入，请等待约 ` +
                `${Math.ceil(resourceReleaseDelayMs / 1000)} 秒后再打开文件。`,
                resourceReleaseDelayMs
            );

            afterPrintTimer = setTimeout(() => {
                cleanup();
                new Notice(
                    "✅ 打印资源已安全释放；若已保存，现在可以打开 PDF。",
                    5000
                );
            }, resourceReleaseDelayMs);
        };
        printWindow.addEventListener(
            "afterprint",
            afterPrintHandler,
            { once: true }
        );
        cleanupTimer = setTimeout(cleanup, 10 * 60 * 1000);

        new Notice(
            `🖨️ 已按每页 1 题准备 ${printableItems.length} 道题、` +
            `${imageCount} 张题图；请选择“另存为 PDF”。`,
            6000
        );

        printWindow.focus();
        printWindow.print();
    } catch (error) {
        console.error("智能试卷打印失败：", error);
        cleanup();
        new Notice(
            `❌ 打印准备失败：${error?.message ?? "未知错误"}`,
            7000
        );
    }
}

paperTypeSelectEl.addEventListener("change", () => {
    paperItems = [];
    paperComposition = null;
    updatePaperTypeCopy();
    renderPaper();
    refreshControls();
});

generateButtonEl.addEventListener("click", () => {
    void generatePaper();
});

printButtonEl.addEventListener("click", () => {
    void printPaper();
});

updatePaperTypeCopy();
renderPaper();
refreshControls();
