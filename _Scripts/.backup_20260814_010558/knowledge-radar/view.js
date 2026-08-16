/******************************************************************
 * 知识点掌握度雷达图 V1
 *
 * 按 #AM / #LA / #PS / #DS / #CO / #OS / #CN 七科分别统计：
 *   - 平均等级（0～5 级，未评级不计入均值）
 *   - 降级率（regressed，或 level < peak_level 的题目占比）
 *   - 到期率（next_review <= 今天的题目占比）
 *
 * 输出（纯 SVG / CSS，无外部插件依赖）：
 *   1. 综合掌握度雷达图
 *   2. 平均等级 / 降级率 / 到期率 三项条形图
 *   3. 各科目明细表
 *
 * 综合掌握度 = 平均等级(未评级按 0 级) x 50%
 *            + 健康度(1 - 降级率) x 25%
 *            + 规划度(1 - 到期率) x 25%
 *
 * 使用：在笔记中插入 DataviewJS 代码块
 *   ```dataviewjs
 *   dv.view("_Scripts/knowledge-radar")
 *   ```
 ******************************************************************/

/* ================================================================
 * 0. 配置
 * ================================================================ */

const CONFIG = {
    questionMarker: "题目",

    /* 七科：科目标签根（兼容层级标签与中文别名）、雷达图颜色 */
    subjects: [
        { id: "AM",  label: "高数",   color: "#e15759", tagRoots: ["#AM", "#高数", "#高等数学"] },
        { id: "LA",  label: "线代",   color: "#4e79a7", tagRoots: ["#LA", "#线代", "#线性代数"] },
        { id: "PS", label: "概率",   color: "#59a14f", tagRoots: ["#PS", "#PS", "#概率", "#概率论", "#概率统计", "#概率论与数理统计"] },
        { id: "DS",  label: "数据结构", color: "#f28e2b", tagRoots: ["#DS", "#数据结构"] },
        { id: "CO",  label: "计组",   color: "#76b7b2", tagRoots: ["#CO", "#计组", "#计算机组成原理"] },
        { id: "OS",  label: "操作系统", color: "#edc948", tagRoots: ["#OS", "#操作系统"] },
        { id: "CN",  label: "计网",   color: "#b07aa1", tagRoots: ["#CN", "#计网", "#计算机网络"] }
    ],

    /* 默认统计范围：question=只统计带“题目”图片的题目页；all=所有含科目标签的页面 */
    defaultScope: "question",

    /* 雷达图网格环数量 */
    radarRingCount: 5
};

/* Chromium/Obsidian can render these attachment types in an <img>. */
const IMAGE_EXTENSIONS = new Set([
    "avif", "bmp", "gif", "jfif", "jpeg", "jpg",
    "png", "svg", "webp"
]);

const QUESTION_MARKER = String(CONFIG.questionMarker ?? "").trim();

dv.container.classList.add("knowledge-radar-view");

const viewDocument = dv.container.ownerDocument;

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

/**
 * 判断候选标签是否等于目标标签，或属于目标标签的任意层级子标签。
 * 例如 #AM 可命中 #AM 与 #AM/极限/等价无穷小，但不会误命中 #AM2。
 */
function isSameTagOrDescendant(candidate, required) {
    const candidateKey = tagKey(candidate);
    const requiredKey = tagKey(required);

    return (
        candidateKey === requiredKey ||
        candidateKey.startsWith(`${requiredKey}/`)
    );
}

/* 根标签只规范化一次；扫描时直接比较规范化后的键。 */
const SUBJECT_MATCHERS = CONFIG.subjects.map(subject => ({
    subject,
    tagRootKeys: subject.tagRoots.map(tagKey)
}));

/* 读取页面真实标签：YAML/属性 tags + 正文精确标签 etags */
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

/* 扫描只消费规范化后的键，避免为每页创建无用的标签文本中间数组。 */
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

function diffDays(fromIso, toIso) {
    const from = moment(fromIso, "YYYY-MM-DD", true);
    const to = moment(toIso, "YYYY-MM-DD", true);

    if (!from.isValid() || !to.isValid()) return 0;

    return to.diff(from, "days");
}

function clamp01(value) {
    return Math.min(1, Math.max(0, Number(value) || 0));
}

function formatPercent(value) {
    return `${Math.round(clamp01(value) * 100)}%`;
}

function formatNumber(value, digits = 1) {
    return value === null || value === undefined
        ? "—"
        : Number(value).toFixed(digits);
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

/** 页面是否包含带“题目”标记的嵌入图片（与另外两个脚本口径一致） */
function hasQuestionMarker(page) {
    const sourceFile = app.vault.getAbstractFileByPath(page.file.path);

    if (!sourceFile || sourceFile.extension !== "md") {
        return false;
    }

    const cache = app.metadataCache.getFileCache(sourceFile);
    const embeds = cache?.embeds ?? [];

    return embeds.some(embed => {
        if (!embedHasQuestionMarker(embed)) return false;

        const targetFile = app.metadataCache.getFirstLinkpathDest(
            embed.link,
            sourceFile.path
        );

        return isImageFile(targetFile);
    });
}

/* ================================================================
 * 2. 扫描与统计
 * ================================================================ */

function computeStats(
    subject,
    pages,
    today = localDate(),
    pageFactsCache = null
) {
    const total = pages.length;
    let ratedCount = 0;
    let levelSum = 0;
    let peakCount = 0;
    let peakSum = 0;
    let regressedCount = 0;
    let dueCount = 0;
    let overdueCount = 0;
    let overdueDaysSum = 0;

    for (const page of pages) {
        let facts = pageFactsCache?.get(page);

        if (!facts) {
            const level = parseLevel(page.level);
            const peakLevel = parseLevel(page.peak_level) ?? level;
            const regressed =
                isTrue(page.regressed) ||
                (level !== null && peakLevel !== null && level < peakLevel);
            const nextReview = normalizeIsoDate(page.next_review);
            const isDue = Boolean(nextReview && nextReview <= today);
            const isOverdue = Boolean(nextReview && nextReview < today);

            facts = {
                level,
                peakLevel,
                regressed,
                isDue,
                isOverdue,
                overdueDays: isOverdue
                    ? diffDays(nextReview, today)
                    : 0
            };

            pageFactsCache?.set(page, facts);
        }

        const { level, peakLevel, regressed } = facts;

        if (level !== null) {
            ratedCount++;
            levelSum += level;
        }

        if (peakLevel !== null) {
            peakCount++;
            peakSum += peakLevel;
        }

        if (regressed) regressedCount++;

        if (facts.isDue) {
            dueCount++;

            if (facts.isOverdue) {
                overdueCount++;
                overdueDaysSum += facts.overdueDays;
            }
        }
    }

    const avgLevel = ratedCount > 0 ? levelSum / ratedCount : null;
    const avgPeak = peakCount > 0 ? peakSum / peakCount : null;
    const regressedRate = total > 0 ? regressedCount / total : 0;
    const dueRate = total > 0 ? dueCount / total : 0;
    const meanLevelAll = total > 0 ? levelSum / total : 0;

    /* 综合掌握度：未评级按 0 级参与平均，突出“还没掌握”的科目 */
    const mastery = total > 0
        ? 0.5 * (meanLevelAll / 5) +
          0.25 * (1 - regressedRate) +
          0.25 * (1 - dueRate)
        : 0;

    return {
        subject,
        pages,
        total,
        ratedCount,
        unratedCount: total - ratedCount,
        avgLevel,
        avgPeak,
        regressedCount,
        regressedRate,
        dueCount,
        dueRate,
        overdueCount,
        avgOverdueDays: overdueCount > 0 ? overdueDaysSum / overdueCount : null,
        mastery
    };
}

function scanAll(scope) {
    let pages;

    try {
        pages = Array.from(dv.pages());
    } catch (error) {
        console.error("掌握度雷达读取全库失败：", error);
        return { error: new Error("Dataview 无法读取全库页面") };
    }

    const matchedBySubject = SUBJECT_MATCHERS.map(() => []);
    const seenBySubject = SUBJECT_MATCHERS.map(() => new Set());

    /* 全库只遍历一次：每页的标签与题目标记也只解析一次。 */
    for (const page of pages) {
        const pagePath = normalizeVaultPath(page?.file?.path);
        if (!pagePath) continue;

        const pageTagKeys = getPageTagKeys(page);
        const matchedIndexes = [];

        for (let index = 0; index < SUBJECT_MATCHERS.length; index++) {
            if (seenBySubject[index].has(pagePath)) continue;

            const hitSubject = SUBJECT_MATCHERS[index].tagRootKeys.some(
                requiredKey => pageTagKeys.some(candidateKey => (
                    candidateKey === requiredKey ||
                    candidateKey.startsWith(`${requiredKey}/`)
                ))
            );

            if (hitSubject) matchedIndexes.push(index);
        }

        if (matchedIndexes.length === 0) continue;
        if (scope === "question" && !hasQuestionMarker(page)) continue;

        for (const index of matchedIndexes) {
            seenBySubject[index].add(pagePath);
            matchedBySubject[index].push(page);
        }
    }

    const today = localDate();
    const pageFactsCache = new Map();
    const subjectStats = SUBJECT_MATCHERS.map((matcher, index) => (
        computeStats(
            matcher.subject,
            matchedBySubject[index],
            today,
            pageFactsCache
        )
    ));

    /* 汇总口径：跨科目去重后的全部页面（同一页含多个科目标签只计一次） */
    const union = [];
    const unionSeen = new Set();

    for (const stat of subjectStats) {
        for (const page of stat.pages) {
            if (unionSeen.has(page.file.path)) continue;
            unionSeen.add(page.file.path);
            union.push(page);
        }
    }

    const overall = computeStats(
        { id: "ALL", label: "全库", color: "#888888" },
        union,
        today,
        pageFactsCache
    );

    return { subjectStats, overall };
}

/* ================================================================
 * 3. SVG 雷达图
 * ================================================================ */

const SVG_NS = "http://www.w3.org/2000/svg";

function createSvgEl(tagName, attributes = {}) {
    const el = viewDocument.createElementNS(SVG_NS, tagName);

    for (const [key, value] of Object.entries(attributes)) {
        el.setAttribute(key, String(value));
    }

    return el;
}

function polarPoint(cx, cy, radius, angleDeg) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;

    return {
        x: cx + radius * Math.cos(rad),
        y: cy + radius * Math.sin(rad)
    };
}

function polygonPoints(cx, cy, radius, count) {
    const points = [];

    for (let index = 0; index < count; index++) {
        const point = polarPoint(cx, cy, radius, (360 / count) * index);
        points.push(`${point.x.toFixed(2)},${point.y.toFixed(2)}`);
    }

    return points.join(" ");
}

function axisTextAnchor(angleDeg) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    const cos = Math.cos(rad);

    if (cos > 0.3) return "start";
    if (cos < -0.3) return "end";
    return "middle";
}

function createRadarSvg(statsList) {
    const count = statsList.length;
    const cx = 250;
    const cy = 238;
    const radius = 158;

    const svg = createSvgEl("svg", {
        viewBox: "0 0 500 476",
        class: "kr-radar-svg",
        role: "img",
        "aria-label": "七科综合掌握度雷达图"
    });

    /* 网格环 */
    for (let ring = 1; ring <= CONFIG.radarRingCount; ring++) {
        const ringRadius = (radius * ring) / CONFIG.radarRingCount;

        svg.appendChild(createSvgEl("polygon", {
            points: polygonPoints(cx, cy, ringRadius, count),
            class: "kr-radar-ring"
        }));
    }

    /* 轴线与科目标签 */
    for (let index = 0; index < count; index++) {
        const stat = statsList[index];
        const angle = (360 / count) * index;
        const outer = polarPoint(cx, cy, radius, angle);
        const labelPos = polarPoint(cx, cy, radius + 22, angle);
        const anchor = axisTextAnchor(angle);

        svg.appendChild(createSvgEl("line", {
            x1: cx,
            y1: cy,
            x2: outer.x.toFixed(2),
            y2: outer.y.toFixed(2),
            class: "kr-radar-axis"
        }));

        const labelEl = createSvgEl("text", {
            x: labelPos.x.toFixed(2),
            y: labelPos.y.toFixed(2),
            class: "kr-radar-label",
            "text-anchor": anchor,
            fill: stat.subject.color
        });
        labelEl.textContent = stat.subject.label;
        svg.appendChild(labelEl);

        const valueEl = createSvgEl("text", {
            x: labelPos.x.toFixed(2),
            y: (labelPos.y + 14).toFixed(2),
            class: "kr-radar-value",
            "text-anchor": anchor
        });
        valueEl.textContent = formatPercent(stat.mastery);
        svg.appendChild(valueEl);
    }

    /* 数据多边形与顶点 */
    const dataPoints = statsList.map((stat, index) => {
        const point = polarPoint(
            cx,
            cy,
            radius * clamp01(stat.mastery),
            (360 / count) * index
        );

        return { point, stat };
    });

    svg.appendChild(createSvgEl("polygon", {
        points: dataPoints
            .map(entry => `${entry.point.x.toFixed(2)},${entry.point.y.toFixed(2)}`)
            .join(" "),
        class: "kr-radar-data"
    }));

    for (const entry of dataPoints) {
        svg.appendChild(createSvgEl("circle", {
            cx: entry.point.x.toFixed(2),
            cy: entry.point.y.toFixed(2),
            r: 3.5,
            class: "kr-radar-dot",
            fill: entry.stat.subject.color
        }));
    }

    return svg;
}

/* ================================================================
 * 4. 条形图
 * ================================================================ */

function createBarRow(stat, valueRatio, valueText) {
    const row = viewDocument.createElement("div");
    row.className = "kr-bar-row";

    const labelEl = viewDocument.createElement("span");
    labelEl.className = "kr-bar-label";
    labelEl.textContent = stat.subject.label;
    labelEl.style.color = stat.subject.color;
    labelEl.title = stat.subject.id;

    const trackEl = viewDocument.createElement("div");
    trackEl.className = "kr-bar-track";

    const fillEl = viewDocument.createElement("div");
    fillEl.className = "kr-bar-fill";
    fillEl.style.width = `${Math.round(clamp01(valueRatio) * 100)}%`;
    fillEl.style.background = stat.subject.color;
    trackEl.appendChild(fillEl);

    const valueEl = viewDocument.createElement("span");
    valueEl.className = "kr-bar-value";
    valueEl.textContent = valueText;

    row.append(labelEl, trackEl, valueEl);
    return row;
}

function createMetricPanel(title, note, statsList, getValue) {
    const panel = viewDocument.createElement("div");
    panel.className = "kr-metric-panel";

    const titleEl = viewDocument.createElement("h4");
    titleEl.className = "kr-metric-title";
    titleEl.textContent = title;

    if (note) {
        const noteEl = viewDocument.createElement("span");
        noteEl.className = "kr-metric-note";
        noteEl.textContent = note;
        titleEl.appendChild(noteEl);
    }

    panel.appendChild(titleEl);

    for (const stat of statsList) {
        const rawValue = getValue(stat);
        panel.appendChild(createBarRow(stat, rawValue.ratio, rawValue.text));
    }

    return panel;
}

/* ================================================================
 * 5. 明细表
 * ================================================================ */

function createStatsTable(statsList) {
    const table = viewDocument.createElement("table");
    table.className = "kr-table";

    const thead = viewDocument.createElement("thead");
    const headRow = viewDocument.createElement("tr");

    for (const heading of [
        "科目", "题目数", "已评级/未评级",
        "平均等级", "平均峰值",
        "降级（率）", "到期（率）", "平均逾期"
    ]) {
        const th = viewDocument.createElement("th");
        th.textContent = heading;
        headRow.appendChild(th);
    }

    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = viewDocument.createElement("tbody");

    for (const stat of statsList) {
        const tr = viewDocument.createElement("tr");

        const subjectTd = viewDocument.createElement("td");
        subjectTd.className = "kr-table-subject";

        const dotEl = viewDocument.createElement("span");
        dotEl.className = "kr-table-dot";
        dotEl.style.background = stat.subject.color;

        const subjectTextEl = viewDocument.createElement("span");
        subjectTextEl.textContent = stat.subject.label;

        const tagEl = viewDocument.createElement("span");
        tagEl.className = "kr-table-tag";
        tagEl.textContent = stat.subject.id;

        subjectTd.append(dotEl, subjectTextEl, tagEl);

        const totalTd = viewDocument.createElement("td");
        totalTd.className = "kr-table-num";
        totalTd.textContent = String(stat.total);

        const ratedTd = viewDocument.createElement("td");
        ratedTd.className = "kr-table-num";
        ratedTd.textContent = `${stat.ratedCount} / ${stat.unratedCount}`;

        const avgLevelTd = viewDocument.createElement("td");
        avgLevelTd.className = "kr-table-num";
        avgLevelTd.textContent = formatNumber(stat.avgLevel, 2);

        const avgPeakTd = viewDocument.createElement("td");
        avgPeakTd.className = "kr-table-num";
        avgPeakTd.textContent = formatNumber(stat.avgPeak, 2);

        const regressedTd = viewDocument.createElement("td");
        regressedTd.className = "kr-table-num";
        regressedTd.textContent =
            `${stat.regressedCount}（${formatPercent(stat.regressedRate)}）`;

        const dueTd = viewDocument.createElement("td");
        dueTd.className = "kr-table-num";
        dueTd.textContent = `${stat.dueCount}（${formatPercent(stat.dueRate)}）`;

        const overdueTd = viewDocument.createElement("td");
        overdueTd.className = "kr-table-num";
        overdueTd.textContent = stat.avgOverdueDays === null
            ? "—"
            : `${Math.round(stat.avgOverdueDays)} 天`;

        tr.append(
            subjectTd, totalTd, ratedTd,
            avgLevelTd, avgPeakTd,
            regressedTd, dueTd, overdueTd
        );
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    return table;
}

/* ================================================================
 * 6. 渲染
 * ================================================================ */

let currentScope = CONFIG.defaultScope;
const rootEl = viewDocument.createElement("div");
rootEl.className = "kr-root";
dv.container.appendChild(rootEl);

function render() {
    const result = scanAll(currentScope);

    if (result.error) {
        rootEl.replaceChildren();

        const errorEl = viewDocument.createElement("p");
        errorEl.className = "kr-error";
        errorEl.textContent = `❌ ${result.error.message}`;
        rootEl.appendChild(errorEl);
        return;
    }

    const { subjectStats, overall } = result;

    /* 头部 */
    const headerEl = viewDocument.createElement("div");
    headerEl.className = "kr-header";

    const titleEl = viewDocument.createElement("h3");
    titleEl.className = "kr-title";
    titleEl.textContent = "🧭 知识点掌握度雷达";

    const descriptionEl = viewDocument.createElement("p");
    descriptionEl.className = "kr-description";
    descriptionEl.textContent =
        "按 高数 / 线代 / 概率 / 数据结构 / 计组 / 操作系统 / 计网 七科统计" +
        "平均等级、降级率与到期率；未评级题目按 0 级计入综合掌握度。";

    headerEl.appendChild(titleEl);
    headerEl.appendChild(descriptionEl);

    /* 工具栏 */
    const controlsEl = viewDocument.createElement("div");
    controlsEl.className = "kr-controls";

    const scopeButtonEl = viewDocument.createElement("button");
    scopeButtonEl.type = "button";
    scopeButtonEl.className = "kr-scope-button";
    scopeButtonEl.textContent = currentScope === "question"
        ? "统计范围：题目页"
        : "统计范围：全部页";
    scopeButtonEl.title = currentScope === "question"
        ? "当前只统计带『题目』图片的页面；点击改为统计所有含科目标签的页面"
        : "当前统计所有含科目标签的页面；点击改为只统计带『题目』图片的页面";

    scopeButtonEl.addEventListener("click", () => {
        currentScope = currentScope === "question" ? "all" : "question";
        render();
    });

    controlsEl.appendChild(scopeButtonEl);

    if (overall.total === 0) {
        const warningEl = viewDocument.createElement("p");
        warningEl.className = "kr-warning";
        warningEl.textContent = currentScope === "question"
            ? "⚠️ 当前统计范围内没有找到带『题目』图片的页面，可切换为“全部页”试试。"
            : "⚠️ 当前统计范围内没有任何含科目标签的页面。";

        rootEl.replaceChildren(headerEl, controlsEl, warningEl);
        return;
    }

    /* 汇总 chips */
    const summaryEl = viewDocument.createElement("div");
    summaryEl.className = "kr-summary";

    const chips = [
        { label: "统计页数", value: String(overall.total) },
        {
            label: "已评级率",
            value: formatPercent(overall.ratedCount / Math.max(1, overall.total))
        },
        { label: "降级率", value: formatPercent(overall.regressedRate) },
        { label: "到期率", value: formatPercent(overall.dueRate) },
        { label: "综合掌握度", value: formatPercent(overall.mastery) }
    ];

    for (const chip of chips) {
        const chipEl = viewDocument.createElement("span");
        chipEl.className = "kr-chip";

        const labelEl = viewDocument.createElement("span");
        labelEl.className = "kr-chip-label";
        labelEl.textContent = chip.label;

        const valueEl = viewDocument.createElement("span");
        valueEl.className = "kr-chip-value";
        valueEl.textContent = chip.value;

        chipEl.append(labelEl, valueEl);
        summaryEl.appendChild(chipEl);
    }

    /* 雷达图 */
    const radarWrapEl = viewDocument.createElement("div");
    radarWrapEl.className = "kr-radar-wrap";

    const radarCardEl = viewDocument.createElement("div");
    radarCardEl.className = "kr-card kr-radar-card";

    const radarTitleEl = viewDocument.createElement("h4");
    radarTitleEl.className = "kr-section-title";
    radarTitleEl.textContent = "综合掌握度雷达图";

    radarCardEl.appendChild(radarTitleEl);
    radarCardEl.appendChild(createRadarSvg(subjectStats));

    const formulaEl = viewDocument.createElement("p");
    formulaEl.className = "kr-formula";
    formulaEl.textContent =
        "综合掌握度 = 平均等级(未评级按0级) × 50% + (1−降级率) × 25% + (1−到期率) × 25%";
    radarCardEl.appendChild(formulaEl);

    radarWrapEl.appendChild(radarCardEl);

    /* 三项指标条形图 */
    const metricsGridEl = viewDocument.createElement("div");
    metricsGridEl.className = "kr-metrics-grid";

    metricsGridEl.appendChild(createMetricPanel(
        "平均等级",
        "（已评级题目，0～5 级）",
        subjectStats,
        stat => ({
            ratio: (stat.avgLevel ?? 0) / 5,
            text: formatNumber(stat.avgLevel, 2)
        })
    ));

    metricsGridEl.appendChild(createMetricPanel(
        "降级率",
        "（越低越好）",
        subjectStats,
        stat => ({
            ratio: stat.regressedRate,
            text: formatPercent(stat.regressedRate)
        })
    ));

    metricsGridEl.appendChild(createMetricPanel(
        "到期率",
        "（越低越好）",
        subjectStats,
        stat => ({
            ratio: stat.dueRate,
            text: formatPercent(stat.dueRate)
        })
    ));

    /* 明细表 */
    const tableWrapEl = viewDocument.createElement("div");
    tableWrapEl.className = "kr-table-wrap";
    tableWrapEl.appendChild(createStatsTable(subjectStats));

    rootEl.replaceChildren(
        headerEl,
        controlsEl,
        summaryEl,
        radarWrapEl,
        metricsGridEl,
        tableWrapEl
    );
}

render();
