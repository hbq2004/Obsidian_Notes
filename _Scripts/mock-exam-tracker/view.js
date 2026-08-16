/******************************************************************
 * 模考成绩追踪 V1
 *
 * 记录每次模考各科得分，自动计算：
 * - 总分 / 目标分达标情况 / 得分率
 * - 总分趋势折线图（纯 SVG）
 * - 各科平均得分率条形图（低于阈值标红）
 * - 全部模考明细表
 *
 * 记录方式：每场模考一篇笔记，放在 _Mock_Exams/ 目录，frontmatter：
 *   mock_exam: true
 *   exam_date: 2026-08-01
 *   paper_type: math1        # math1 | cs408
 *   target: 135              # 可选，缺省用试卷类型默认目标
 *   scores:
 *     AM: 75
 *     LA: 30
 *     PS: 30
 *   note: "选择题崩了"        # 可选
 *
 * 使用：在笔记中插入 DataviewJS 代码块
 *   ```dataviewjs
 *   dv.view("_Scripts/mock-exam-tracker")
 *   ```
 ******************************************************************/

/* ================================================================
 * 0. 配置
 * ================================================================ */

const CONFIG = {
    /* 模考记录存放目录 */
    examFolder: "_Mock_Exams",

    /* 得分率低于该值视为薄弱科目 */
    weakRateThreshold: 0.7,

    paperTypes: [
        {
            id: "math1",
            label: "数学一",
            maxScore: 150,
            defaultTarget: 135,
            subjects: [
                { id: "AM",  label: "高数", color: "#e15759", maxScore: 84 },
                { id: "LA",  label: "线代", color: "#4e79a7", maxScore: 33 },
                { id: "PS", label: "概率", color: "#59a14f", maxScore: 33 }
            ]
        },
        {
            id: "cs408",
            label: "408",
            maxScore: 150,
            defaultTarget: 125,
            subjects: [
                { id: "DS", label: "数据结构", color: "#f28e2b", maxScore: 45 },
                { id: "CO", label: "计组",   color: "#76b7b2", maxScore: 45 },
                { id: "OS", label: "操作系统", color: "#edc948", maxScore: 35 },
                { id: "CN", label: "计网",   color: "#b07aa1", maxScore: 25 }
            ]
        }
    ]
};

dv.container.classList.add("mock-exam-tracker-view");

const viewDocument = dv.container.ownerDocument;

/* 全部科目（固定顺序，用于明细表列） */
const ALL_SUBJECTS = [
    { id: "AM",  label: "高数",   color: "#e15759", maxScore: 84 },
    { id: "LA",  label: "线代",   color: "#4e79a7", maxScore: 33 },
    { id: "PS", label: "概率",   color: "#59a14f", maxScore: 33 },
    { id: "DS",  label: "数据结构", color: "#f28e2b", maxScore: 45 },
    { id: "CO",  label: "计组",   color: "#76b7b2", maxScore: 45 },
    { id: "OS",  label: "操作系统", color: "#edc948", maxScore: 35 },
    { id: "CN",  label: "计网",   color: "#b07aa1", maxScore: 25 }
];

/* 热路径查表：避免扫描每一条模考记录时重复线性查找配置。 */
const PAPER_TYPE_BY_ID = new Map(
    CONFIG.paperTypes.map(paperType => [paperType.id, paperType])
);
const SUBJECT_INDEX_BY_ID = new Map(
    ALL_SUBJECTS.map((subject, index) => [subject.id, index])
);

/* 每个试卷类型包含的科目 ID 集合：明细表逐列判断归属用 O(1) 查表。 */
const PAPER_TYPE_SUBJECT_IDS = new Map(
    CONFIG.paperTypes.map(paperType => [
        paperType.id,
        new Set(paperType.subjects.map(subject => subject.id))
    ])
);
const EMPTY_SUBJECT_SET = new Set();

/* ================================================================
 * 1. 通用函数
 * ================================================================ */

/* 正则常量：提升到模块顶层，避免热路径循环中重复构造。 */
const PATH_BACKSLASH_RE = /\\/g;
const PATH_SLASH_RUN_RE = /\/+/g;
const PATH_EDGE_SLASH_RE = /^\/+|\/+$/g;
const ISO_DATE_FULL_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
const ISO_DATE_SEARCH_RE = /(\d{4}-\d{2}-\d{2})/;

function normalizeVaultPath(path) {
    return String(path ?? "")
        .replace(PATH_BACKSLASH_RE, "/")
        .replace(PATH_SLASH_RUN_RE, "/")
        .replace(PATH_EDGE_SLASH_RE, "");
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

function isValidIsoDate(value) {
    const match = String(value ?? "").match(ISO_DATE_FULL_RE);

    if (!match) return false;

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    const daysInMonth = [
        31, leapYear ? 29 : 28, 31, 30, 31, 30,
        31, 31, 30, 31, 30, 31
    ];

    return month >= 1 && month <= 12 &&
        day >= 1 && day <= daysInMonth[month - 1];
}

function normalizeIsoDate(value) {
    if (value === undefined || value === null || value === "") {
        return null;
    }

    if (value instanceof Date) {
        if (!Number.isFinite(value.getTime())) return null;

        const iso = [
            value.getFullYear(),
            "-",
            pad2(value.getMonth() + 1),
            "-",
            pad2(value.getDate())
        ].join("");

        return isValidIsoDate(iso) ? iso : null;
    }

    if (value && typeof value.toISODate === "function") {
        const iso = value.toISODate();
        return isValidIsoDate(iso) ? iso : null;
    }

    const text = String(value);
    const directMatch = text.match(ISO_DATE_SEARCH_RE);

    if (directMatch && isValidIsoDate(directMatch[0])) {
        return directMatch[0];
    }

    return null;
}

function formatDateShort(iso) {
    const match = String(iso ?? "").match(ISO_DATE_FULL_RE);
    if (!match) return String(iso ?? "");
    return `${match[1]}.${match[2]}.${match[3]}`;
}

function clamp01(value) {
    return Math.min(1, Math.max(0, Number(value) || 0));
}

function formatPercent(value) {
    return `${Math.round(clamp01(value) * 100)}%`;
}

function formatNumber(value, digits = 1) {
    return value === null || value === undefined || !Number.isFinite(value)
        ? "—"
        : Number(value).toFixed(digits);
}

function getPaperType(paperTypeId) {
    const normalizedId = String(paperTypeId ?? "").trim();
    return PAPER_TYPE_BY_ID.get(normalizedId) ?? null;
}

function parseFiniteNumber(value) {
    if (typeof value === "number") {
        return Number.isFinite(value) ? value : null;
    }

    if (typeof value !== "string" || value.trim() === "") {
        return null;
    }

    const number = Number(value);
    return Number.isFinite(number) ? number : null;
}

function parseScores(raw) {
    const result = {};

    if (!raw || typeof raw !== "object") {
        return result;
    }

    for (const [key, value] of Object.entries(raw)) {
        const num = parseFiniteNumber(value);

        if (num !== null) {
            result[key] = num;
        }
    }

    return result;
}/* ================================================================
 * 2. 扫描与统计
 * ================================================================ */

function buildExam(page) {
    const paperType = getPaperType(page.paper_type);
    const scores = parseScores(page.scores);
    const validationErrors = [];

    /* 日期：优先 exam_date，其次文件名中的日期 */
    let date = normalizeIsoDate(page.exam_date);

    if (!date) {
        const nameMatch = String(page.file.name ?? "").match(
            ISO_DATE_SEARCH_RE
        );
        date = nameMatch ? normalizeIsoDate(nameMatch[1]) : null;
    }

    if (!date) {
        validationErrors.push("缺少有效考试日期");
    }

    if (!paperType) {
        validationErrors.push("试卷类型无效");
    }

    /* 只统计已知试卷类型中完整、合法的各科分数。 */
    let total = 0;
    let scoreCount = 0;

    for (const subject of paperType?.subjects ?? []) {
        const score = scores[subject.id];

        if (!Number.isFinite(score)) {
            validationErrors.push(`${subject.label}缺少有效分数`);
            continue;
        }

        if (score < 0 || score > subject.maxScore) {
            validationErrors.push(
                `${subject.label}分数应在 0～${subject.maxScore} 之间`
            );
            continue;
        }

        total += score;
        scoreCount++;
    }

    const maxScore = paperType?.maxScore ?? 150;
    const defaultTarget = paperType?.defaultTarget ?? 150;
    const targetWasProvided = page.target !== undefined &&
        page.target !== null && String(page.target).trim() !== "";
    const parsedTarget = parseFiniteNumber(page.target);
    const targetIsValid = parsedTarget !== null &&
        parsedTarget > 0 && parsedTarget <= maxScore;
    const target = targetIsValid
        ? parsedTarget
        : defaultTarget;

    if (targetWasProvided && !targetIsValid) {
        validationErrors.push(`目标分应在 1～${maxScore} 之间`);
    }

    return {
        page,
        date,
        paperType,
        scores,
        total,
        scoreCount,
        maxScore,
        target,
        rate: maxScore > 0 ? total / maxScore : 0,
        met: total >= target,
        note: page.note ? String(page.note) : "",
        validationErrors
    };
}

function scanExams() {
    let pages;

    try {
        pages = Array.from(dv.pages());
    } catch (error) {
        console.error("模考追踪读取全库失败：", error);
        return { error: new Error("Dataview 无法读取全库页面") };
    }

    let validExams = [];
    const invalidExams = [];

    for (const page of pages) {
        if (!isTrue(page.mock_exam)) continue;

        const pagePath = normalizeVaultPath(page?.file?.path);
        if (!pagePath) continue;

        const exam = buildExam(page);

        if (exam.validationErrors.length > 0) {
            invalidExams.push(exam);
        } else {
            validExams.push(exam);
        }
    }

    /* Schwartzian transform：先一次性取出排序键，
       避免比较器在 O(n log n) 次调用中反复转换路径字符串。 */
    const keyedExams = validExams.map(exam => ({
        exam,
        date: exam.date,
        path: String(exam.page.file.path)
    }));
    keyedExams.sort((a, b) => (
        a.date.localeCompare(b.date) ||
        a.path.localeCompare(b.path)
    ));
    validExams = keyedExams.map(entry => entry.exam);

    if (invalidExams.length > 0) {
        console.warn(
            "模考追踪忽略了无效记录：",
            invalidExams.map(exam => ({
                path: exam.page.file.path,
                errors: exam.validationErrors
            }))
        );
    }

    return {
        exams: validExams,
        invalidCount: invalidExams.length,
        invalidExams
    };
}

function computeOverall(exams) {
    const count = exams.length;

    if (count === 0) {
        return {
            count: 0,
            avgTotal: null,
            avgRate: 0,
            meetCount: 0,
            meetRate: 0,
            latest: null,
            best: null,
            worst: null
        };
    }

    let totalSum = 0;
    let rateSum = 0;
    let meetCount = 0;
    const latest = exams[exams.length - 1];
    let best = exams[0];
    let worst = exams[0];

    for (const exam of exams) {
        totalSum += exam.total;
        rateSum += exam.rate;
        if (exam.met) meetCount++;
        if (exam.total > best.total) best = exam;
        if (exam.total < worst.total) worst = exam;
    }

    return {
        count,
        avgTotal: totalSum / count,
        avgRate: rateSum / count,
        meetCount,
        meetRate: meetCount / count,
        latest,
        best,
        worst
    };
}

function computeSubjectStats(exams) {
    const accumulators = ALL_SUBJECTS.map(() => ({
        coveredCount: 0,
        sampleCount: 0,
        scoreSum: 0,
        minScore: null,
        maxScore: null,
        firstScore: null,
        lastScore: null
    }));

    /* 一次遍历同时累计七科，避免每科都重新扫描全部模考。 */
    for (const exam of exams) {
        for (const subject of exam.paperType?.subjects ?? []) {
            const subjectIndex = SUBJECT_INDEX_BY_ID.get(subject.id);
            if (subjectIndex === undefined) continue;

            const accumulator = accumulators[subjectIndex];
            accumulator.coveredCount++;

            const score = exam.scores[subject.id];
            if (!Number.isFinite(score)) continue;

            accumulator.sampleCount++;
            accumulator.scoreSum += score;
            accumulator.minScore = accumulator.minScore === null
                ? score
                : Math.min(accumulator.minScore, score);
            accumulator.maxScore = accumulator.maxScore === null
                ? score
                : Math.max(accumulator.maxScore, score);
            if (accumulator.firstScore === null) {
                accumulator.firstScore = score;
            }
            accumulator.lastScore = score;
        }
    }

    return ALL_SUBJECTS.map((subjectDef, index) => {
        const accumulator = accumulators[index];
        const avgScore = accumulator.sampleCount > 0
            ? accumulator.scoreSum / accumulator.sampleCount
            : null;
        const avgRate = avgScore !== null && subjectDef.maxScore > 0
            ? avgScore / subjectDef.maxScore
            : 0;

        return {
            subject: subjectDef,
            coveredCount: accumulator.coveredCount,
            sampleCount: accumulator.sampleCount,
            avgScore,
            avgRate,
            minScore: accumulator.minScore,
            maxScore: accumulator.maxScore,
            firstScore: accumulator.firstScore,
            lastScore: accumulator.lastScore,
            trend: accumulator.firstScore !== null &&
                accumulator.lastScore !== null
                ? accumulator.lastScore - accumulator.firstScore
                : null,
            weak: avgScore !== null && avgRate < CONFIG.weakRateThreshold
        };
    });
}/* ================================================================
 * 3. SVG 图表
 * ================================================================ */

const SVG_NS = "http://www.w3.org/2000/svg";

function createSvgEl(tagName, attributes = {}) {
    const el = viewDocument.createElementNS(SVG_NS, tagName);

    for (const [key, value] of Object.entries(attributes)) {
        el.setAttribute(key, String(value));
    }

    return el;
}

const TYPE_COLORS = {
    math1: "#4e79a7",
    cs408: "#b07aa1"
};

function createTrendSvg(exams) {
    const width = 960;
    const height = 380;
    const margin = { top: 30, right: 26, bottom: 48, left: 54 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const maxY = 150;

    const svg = createSvgEl("svg", {
        viewBox: `0 0 ${width} ${height}`,
        class: "me-trend-svg",
        role: "img",
        "aria-label": "模考总分趋势折线图"
    });

    const xFor = index => {
        if (exams.length === 1) {
            /* 单场模考时把点画在图表中央 */
            return margin.left + innerWidth / 2;
        }

        /* 按场次均匀排布，避免同一天的多场模考完全重叠。 */
        return margin.left + index / (exams.length - 1) * innerWidth;
    };
    const yFor = score => (
        margin.top + innerHeight - clamp01(score / maxY) * innerHeight
    );

    /* 全部子元素先拼成字符串，最后一次性写入 innerHTML，
       避免逐点 createElementNS + appendChild。 */
    const parts = [];

    /* 网格线与 Y 轴刻度 */
    for (let value = 0; value <= maxY; value += 25) {
        const y = yFor(value);

        parts.push(
            `<line x1="${margin.left}" y1="${y.toFixed(2)}" ` +
            `x2="${width - margin.right}" y2="${y.toFixed(2)}" class="me-trend-grid"/>`,
            `<text x="${(margin.left - 8).toFixed(2)}" y="${(y + 4).toFixed(2)}" ` +
            `class="me-trend-axis-label" text-anchor="end">${value}</text>`
        );
    }

    /* X 轴日期刻度（点过多时每隔一个显示） */
    const step = Math.max(1, Math.ceil(exams.length / 10));

    for (let index = 0; index < exams.length; index += step) {
        const exam = exams[index];
        const x = xFor(index);

        parts.push(
            `<text x="${x.toFixed(2)}" y="${(height - margin.bottom + 18).toFixed(2)}" ` +
            `class="me-trend-axis-label" text-anchor="middle">${formatDateShort(exam.date)}</text>`
        );
    }

    /* 折线 */
    const linePoints = exams.map((exam, index) => {
        const x = xFor(index);
        const y = yFor(exam.total);
        return { x, y, exam };
    });

    if (linePoints.length > 1) {
        parts.push(
            `<polyline points="${linePoints
                .map(point => `${point.x.toFixed(2)},${point.y.toFixed(2)}`)
                .join(" ")}" class="me-trend-line"/>`
        );
    }

    /* 每个模考点：目标虚线刻度 + 得分点 */
    for (const point of linePoints) {
        const { exam } = point;
        const targetY = yFor(exam.target);
        const typeColor = exam.paperType
            ? TYPE_COLORS[exam.paperType.id] ?? "#888888"
            : "#888888";
        const met = exam.met;

        /* 目标刻度 */
        parts.push(
            `<line x1="${(point.x - 5).toFixed(2)}" y1="${targetY.toFixed(2)}" ` +
            `x2="${(point.x + 5).toFixed(2)}" y2="${targetY.toFixed(2)}" ` +
            `class="${met ? "me-trend-target met" : "me-trend-target"}"/>`
        );

        /* 得分点 */
        parts.push(
            `<circle cx="${point.x.toFixed(2)}" cy="${point.y.toFixed(2)}" r="5" ` +
            `class="${met ? "me-trend-dot met" : "me-trend-dot miss"}" fill="${typeColor}"/>`
        );

        /* 分数标签 */
        parts.push(
            `<text x="${point.x.toFixed(2)}" y="${(point.y - 10).toFixed(2)}" ` +
            `class="me-trend-score" text-anchor="middle">${Math.round(exam.total)}</text>`
        );
    }

    svg.innerHTML = parts.join("");
    return svg;
}

function createRateBars(subjectStats) {
    const wrapEl = viewDocument.createElement("div");
    wrapEl.className = "me-rate-bars";

    for (const stat of subjectStats) {
        const row = viewDocument.createElement("div");
        row.className = "me-bar-row";

        const labelEl = viewDocument.createElement("span");
        labelEl.className = "me-bar-label";
        labelEl.textContent = stat.subject.label;
        labelEl.style.color = stat.subject.color;

        const trackEl = viewDocument.createElement("div");
        trackEl.className = "me-bar-track";

        const fillEl = viewDocument.createElement("div");
        fillEl.className = "me-bar-fill";
        fillEl.style.width = `${Math.round(clamp01(stat.avgRate) * 100)}%`;
        fillEl.style.background = stat.subject.color;

        if (stat.sampleCount > 0) {
            fillEl.classList.add("has-data");
        }

        if (stat.weak) {
            fillEl.classList.add("is-weak");
        }

        trackEl.appendChild(fillEl);

        const valueEl = viewDocument.createElement("span");
        valueEl.className = "me-bar-value";
        valueEl.textContent = stat.avgScore === null
            ? "—"
            : `${formatNumber(stat.avgScore, 0)}（${formatPercent(stat.avgRate)}）`;

        if (stat.weak) {
            valueEl.textContent = `⚠ ${valueEl.textContent}`;
            valueEl.classList.add("is-weak");
        }

        row.append(labelEl, trackEl, valueEl);
        wrapEl.appendChild(row);
    }

    return wrapEl;
}

/* ================================================================
 * 4. 新建模考记录表单
 * ================================================================ */

let formVisible = false;
let formTypeId = CONFIG.paperTypes[0].id;
let scoreInputs = {};
let submitInProgress = false;

function buildScoreInputs(containerEl) {
    containerEl.replaceChildren();
    scoreInputs = {};

    const paperType = getPaperType(formTypeId) ?? CONFIG.paperTypes[0];

    for (const subject of paperType.subjects) {
        const labelEl = viewDocument.createElement("label");
        labelEl.className = "me-form-field me-form-score";

        const textEl = viewDocument.createElement("span");
        textEl.className = "me-form-label";
        textEl.textContent = `${subject.label}（满分 ${subject.maxScore}）`;

        const inputEl = viewDocument.createElement("input");
        inputEl.type = "number";
        inputEl.min = "0";
        inputEl.max = String(subject.maxScore);
        inputEl.step = "1";
        inputEl.placeholder = "得分";
        inputEl.className = "me-form-input";
        inputEl.dataset.subject = subject.id;

        scoreInputs[subject.id] = inputEl;

        labelEl.append(textEl, inputEl);
        containerEl.appendChild(labelEl);
    }
}

function createFormEl() {
    const formEl = viewDocument.createElement("div");
    formEl.className = "me-form";
    formEl.hidden = !formVisible;

    /* 收起时只保留隐藏容器，展开时再创建输入控件与监听器。 */
    if (!formVisible) return formEl;

    /* 日期 */
    const dateField = viewDocument.createElement("label");
    dateField.className = "me-form-field";

    const dateLabel = viewDocument.createElement("span");
    dateLabel.className = "me-form-label";
    dateLabel.textContent = "考试日期";

    const dateInput = viewDocument.createElement("input");
    dateInput.type = "date";
    dateInput.placeholder = "YYYY-MM-DD";
    dateInput.value = localDate();
    dateInput.className = "me-form-input me-form-date";

    dateField.append(dateLabel, dateInput);

    /* 试卷类型 */
    const typeField = viewDocument.createElement("label");
    typeField.className = "me-form-field";

    const typeLabel = viewDocument.createElement("span");
    typeLabel.className = "me-form-label";
    typeLabel.textContent = "试卷类型";

    const typeSelect = viewDocument.createElement("select");
    typeSelect.className = "me-form-input me-form-select";

    for (const paperType of CONFIG.paperTypes) {
        const optionEl = viewDocument.createElement("option");
        optionEl.value = paperType.id;
        optionEl.textContent = paperType.label;
        optionEl.selected = paperType.id === formTypeId;
        typeSelect.appendChild(optionEl);
    }

    typeSelect.addEventListener("change", () => {
        formTypeId = typeSelect.value;
        buildScoreInputs(scoreFieldsEl);
    });

    typeField.append(typeLabel, typeSelect);

    /* 目标分 */
    const targetField = viewDocument.createElement("label");
    targetField.className = "me-form-field";

    const targetLabel = viewDocument.createElement("span");
    targetLabel.className = "me-form-label";
    targetLabel.textContent = "目标分（可留空用默认）";

    const targetInput = viewDocument.createElement("input");
    targetInput.type = "number";
    targetInput.min = "0";
    targetInput.max = "150";
    targetInput.placeholder = "默认 135 / 125";
    targetInput.className = "me-form-input me-form-target";

    targetField.append(targetLabel, targetInput);

    /* 各科得分 */
    const scoreFieldsEl = viewDocument.createElement("div");
    scoreFieldsEl.className = "me-form-scores";
    buildScoreInputs(scoreFieldsEl);

    /* 备注 */
    const noteField = viewDocument.createElement("label");
    noteField.className = "me-form-field me-form-note";

    const noteLabel = viewDocument.createElement("span");
    noteLabel.className = "me-form-label";
    noteLabel.textContent = "备注";

    const noteInput = viewDocument.createElement("input");
    noteInput.type = "text";
    noteInput.placeholder = "例如：选择填空崩了 / 时间不够";
    noteInput.className = "me-form-input";

    noteField.append(noteLabel, noteInput);

    /* 按钮 */
    const actionsEl = viewDocument.createElement("div");
    actionsEl.className = "me-form-actions";

    const submitButton = viewDocument.createElement("button");
    submitButton.type = "button";
    submitButton.className = "me-button me-button-primary";
    submitButton.textContent = "💾 保存记录";

    const cancelButton = viewDocument.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "me-button";
    cancelButton.textContent = "取消";

    actionsEl.append(submitButton, cancelButton);

    formEl.append(
        dateField,
        typeField,
        targetField,
        scoreFieldsEl,
        noteField,
        actionsEl
    );

    submitButton.addEventListener("click", async () => {
        if (submitInProgress) return;

        submitInProgress = true;
        submitButton.disabled = true;
        cancelButton.disabled = true;
        submitButton.textContent = "保存中…";

        try {
            await submitExam({
                date: dateInput.value.trim(),
                paperTypeId: typeSelect.value,
                targetText: targetInput.value.trim(),
                note: noteInput.value.trim()
            });
        } finally {
            submitInProgress = false;

            if (submitButton.isConnected) {
                submitButton.disabled = false;
                cancelButton.disabled = false;
                submitButton.textContent = "💾 保存记录";
            }
        }
    });

    cancelButton.addEventListener("click", () => {
        formVisible = false;
        render();
    });

    return formEl;
}

function yamlEscape(value) {
    return String(value ?? "")
        .replace(/\\/g, "\\\\")
        .replace(/"/g, "\\\"")
        .replace(/\r/g, "\\r")
        .replace(/\n/g, "\\n")
        .replace(/\t/g, "\\t");
}

async function ensureParentFolders(filePath) {
    const folderParts = normalizeVaultPath(filePath)
        .split("/")
        .slice(0, -1);
    let currentPath = "";

    for (const part of folderParts) {
        currentPath = currentPath ? `${currentPath}/${part}` : part;
        let existing = app.vault.getAbstractFileByPath(currentPath);

        if (!existing) {
            try {
                await app.vault.createFolder(currentPath);
            } catch (error) {
                /* 另一个视图可能刚好创建了同一目录，创建失败后复查。 */
                existing = app.vault.getAbstractFileByPath(currentPath);

                if (!existing) throw error;
            }

            existing = app.vault.getAbstractFileByPath(currentPath);
        }

        if (!existing || !Array.isArray(existing.children)) {
            throw new Error(`${currentPath} 已被同名文件占用`);
        }
    }
}

async function createUniqueExamFile(folder, baseName, content) {
    for (let suffix = 1; suffix < 10000; suffix++) {
        const fileName = suffix === 1
            ? `${baseName}.md`
            : `${baseName}-${suffix}.md`;
        const targetPath = folder ? `${folder}/${fileName}` : fileName;

        if (app.vault.getAbstractFileByPath(targetPath)) continue;

        try {
            await app.vault.create(targetPath, content);
            return targetPath;
        } catch (error) {
            /* 多个视图同时提交时，若路径刚被占用则继续尝试后缀。 */
            if (app.vault.getAbstractFileByPath(targetPath)) continue;
            throw error;
        }
    }

    throw new Error("同日期同类型的记录过多，无法生成唯一文件名");
}

async function submitExam({ date, paperTypeId, targetText, note }) {
    if (!isValidIsoDate(date)) {
        new Notice("❌ 请填写真实有效的考试日期（YYYY-MM-DD）。", 5000);
        return;
    }

    const paperType = getPaperType(paperTypeId);

    if (!paperType) {
        new Notice("❌ 未知的试卷类型。", 4000);
        return;
    }

    const scores = {};

    for (const subject of paperType.subjects) {
        const inputEl = scoreInputs[subject.id];
        const rawValue = String(inputEl?.value ?? "").trim();
        const value = parseFiniteNumber(rawValue);

        if (value === null) {
            new Notice(`❌ 请填写${subject.label}的有效得分。`, 5000);
            return;
        }

        if (value < 0 || value > subject.maxScore) {
            new Notice(
                `❌ ${subject.label}得分应在 0～${subject.maxScore} 之间。`,
                5000
            );
            return;
        }

        scores[subject.id] = value;
    }

    const parsedTarget = parseFiniteNumber(targetText);
    const hasTarget = targetText !== "";

    if (hasTarget && parsedTarget === null) {
        new Notice("❌ 目标分必须是有效数字。", 5000);
        return;
    }

    if (hasTarget && (parsedTarget <= 0 || parsedTarget > paperType.maxScore)) {
        new Notice(
            `❌ 目标分应在 1～${paperType.maxScore} 之间。`,
            5000
        );
        return;
    }

    const folder = normalizeVaultPath(CONFIG.examFolder);
    const baseName = `${date}-${paperType.label}模考`;

    const lines = [
        "---",
        "mock_exam: true",
        `exam_date: ${date}`,
        `paper_type: ${paperType.id}`
    ];

    if (hasTarget) {
        lines.push(`target: ${parsedTarget}`);
    }

    lines.push("scores:");

    for (const subject of paperType.subjects) {
        lines.push(`  ${subject.id}: ${scores[subject.id]}`);
    }

    if (note.trim()) {
        lines.push(`note: "${yamlEscape(note.trim())}"`);
    }

    lines.push("---", "");

    const content = lines.join("\n") +
        `\n# ${date} ${paperType.label}模考` +
        "\n\n> 由「模考成绩追踪」脚本创建，分数请直接在 Frontmatter 中修改。\n";

    let targetPath;

    try {
        const provisionalPath = folder
            ? `${folder}/${baseName}.md`
            : `${baseName}.md`;
        await ensureParentFolders(provisionalPath);
        targetPath = await createUniqueExamFile(folder, baseName, content);
    } catch (error) {
        console.error("模考记录创建失败：", error);
        new Notice(`❌ 记录创建失败：${error?.message ?? "未知错误"}`, 6000);
        return;
    }

    new Notice(
        `✅ 已创建模考记录：${targetPath}。` +
        "Dataview 索引刷新后会自动出现在下方。",
        5000
    );

    formVisible = false;

    /* 立即收起表单；索引刷新前仍展示原统计数据。 */
    render();

    /* Dataview 索引可能需要一点时间，稍后自动刷新视图 */
    setTimeout(() => {
        if (dv.container.isConnected !== false) render();
    }, 1200);
}

/* ================================================================
 * 5. 渲染
 * ================================================================ */

const rootEl = viewDocument.createElement("div");
rootEl.className = "me-root";
dv.container.appendChild(rootEl);

function createStatusChip(text, status) {
    const chipEl = viewDocument.createElement("span");
    chipEl.className = "me-status-chip";
    chipEl.dataset.status = status;
    chipEl.textContent = text;
    return chipEl;
}

function createInvalidWarning(scanResult) {
    if (!scanResult.invalidCount) return null;

    const warningEl = viewDocument.createElement("p");
    warningEl.className = "me-warning";
    warningEl.textContent =
        `⚠️ 有 ${scanResult.invalidCount} 条记录的数据不完整或超出范围，` +
        "已从统计中排除；鼠标悬停可查看详情。";
    warningEl.title = scanResult.invalidExams
        .slice(0, 20)
        .map(exam => (
            `${exam.page.file.path}：${exam.validationErrors.join("；")}`
        ))
        .join("\n");

    return warningEl;
}

function createStatsTable(exams) {
    const table = viewDocument.createElement("table");
    table.className = "me-table";

    const thead = viewDocument.createElement("thead");
    const headRow = viewDocument.createElement("tr");

    const headings = [
        "日期", "类型", ...ALL_SUBJECTS.map(subject => subject.label),
        "总分", "目标", "达标", "备注"
    ];

    for (const heading of headings) {
        const th = viewDocument.createElement("th");
        th.textContent = heading;
        headRow.appendChild(th);
    }

    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = viewDocument.createElement("tbody");

    /* 行先写入 DocumentFragment，最后一次性挂到 tbody，减少布局抖动。 */
    const rowFragment = viewDocument.createDocumentFragment();

    for (const exam of exams) {
        const tr = viewDocument.createElement("tr");

        /* 每场模考只查一次科目归属集合，替代原先双重循环里的线性查找。 */
        const subjectIdSet = PAPER_TYPE_SUBJECT_IDS.get(exam.paperType?.id) ?? EMPTY_SUBJECT_SET;

        const dateTd = viewDocument.createElement("td");
        dateTd.className = "me-table-num";
        dateTd.textContent = exam.date;

        const typeTd = viewDocument.createElement("td");
        typeTd.className = "me-table-type";
        typeTd.textContent = exam.paperType?.label ?? "未知";

        const subjectTds = [];

        for (const subject of ALL_SUBJECTS) {
            const scoreTd = viewDocument.createElement("td");
            scoreTd.className = "me-table-num";

            const score = exam.scores[subject.id];
            const inPaper = subjectIdSet.has(subject.id);

            if (!inPaper) {
                scoreTd.textContent = "—";
            } else if (Number.isFinite(score)) {
                const maxScore = subject.maxScore;
                const rate = score / maxScore;

                scoreTd.textContent = String(Math.round(score));

                if (rate < CONFIG.weakRateThreshold) {
                    scoreTd.classList.add("is-weak");
                }
            } else {
                scoreTd.textContent = "—";
            }

            subjectTds.push(scoreTd);
        }

        const totalTd = viewDocument.createElement("td");
        totalTd.className = "me-table-num me-table-total";
        totalTd.textContent = `${Math.round(exam.total)}/${exam.maxScore}`;

        const targetTd = viewDocument.createElement("td");
        targetTd.className = "me-table-num";
        targetTd.textContent = String(Math.round(exam.target));

        const metTd = viewDocument.createElement("td");
        metTd.appendChild(createStatusChip(
            exam.met ? "✅ 达标" : "❌ 未达标",
            exam.met ? "met" : "miss"
        ));

        const noteTd = viewDocument.createElement("td");
        noteTd.className = "me-table-note";
        noteTd.textContent = exam.note;

        tr.append(dateTd, typeTd, ...subjectTds, totalTd, targetTd, metTd, noteTd);

        rowFragment.appendChild(tr);
    }

    tbody.appendChild(rowFragment);
    table.appendChild(tbody);
    return table;
}

function render() {
    const scanResult = scanExams();

    if (scanResult.error) {
        rootEl.replaceChildren();

        const errorEl = viewDocument.createElement("p");
        errorEl.className = "me-error";
        errorEl.textContent = `❌ ${scanResult.error.message}`;
        rootEl.appendChild(errorEl);
        return;
    }

    const exams = scanResult.exams;
    const overall = computeOverall(exams);

    /* 头部 */
    const headerEl = viewDocument.createElement("div");
    headerEl.className = "me-header";

    const titleEl = viewDocument.createElement("h3");
    titleEl.className = "me-title";
    titleEl.textContent = "📈 模考成绩追踪";

    const descriptionEl = viewDocument.createElement("p");
    descriptionEl.className = "me-description";
    descriptionEl.textContent =
        "记录每场模考各科得分，跟踪总分趋势、达标情况与薄弱科目；" +
        "每场模考对应 _Mock_Exams 目录下的一篇笔记。";

    headerEl.appendChild(titleEl);
    headerEl.appendChild(descriptionEl);

    /* 工具栏：新建记录 */
    const controlsEl = viewDocument.createElement("div");
    controlsEl.className = "me-controls";

    const toggleButton = viewDocument.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "me-button me-button-primary";
    toggleButton.textContent = formVisible
        ? "收起新建表单"
        : "➕ 新建模考记录";

    toggleButton.addEventListener("click", () => {
        formVisible = !formVisible;
        render();
    });

    controlsEl.appendChild(toggleButton);

    const formEl = createFormEl();

    /* 汇总 chips */
    const summaryEl = viewDocument.createElement("div");
    summaryEl.className = "me-summary";

    if (overall.count > 0) {
        const chips = [
            { label: "模考次数", value: String(overall.count) },
            { label: "平均总分", value: formatNumber(overall.avgTotal, 0) },
            { label: "平均得分率", value: formatPercent(overall.avgRate) },
            { label: "达标率", value: formatPercent(overall.meetRate) },
            {
                label: "最近总分",
                value: overall.latest
                    ? `${Math.round(overall.latest.total)}/${overall.latest.maxScore}`
                    : "—"
            },
            {
                label: "最高 / 最低",
                value: overall.best && overall.worst
                    ? `${Math.round(overall.best.total)} / ${Math.round(overall.worst.total)}`
                    : "—"
            }
        ];

        for (const chip of chips) {
            const chipEl = viewDocument.createElement("span");
            chipEl.className = "me-chip";

            const labelEl = viewDocument.createElement("span");
            labelEl.className = "me-chip-label";
            labelEl.textContent = chip.label;

            const valueEl = viewDocument.createElement("span");
            valueEl.className = "me-chip-value";
            valueEl.textContent = chip.value;

            chipEl.append(labelEl, valueEl);
            summaryEl.appendChild(chipEl);
        }
    } else {
        summaryEl.textContent = "";
    }

    rootEl.replaceChildren(headerEl, controlsEl, formEl, summaryEl);

    if (overall.count === 0) {
        const emptyEl = viewDocument.createElement("div");
        emptyEl.className = "me-empty";
        emptyEl.textContent = scanResult.invalidCount > 0
            ? "目前没有可统计的有效模考记录。请修正下方提示中的记录，" +
                "或点击“➕ 新建模考记录”重新录入。"
            : "还没有模考记录。点击“➕ 新建模考记录”录入第一场模考；" +
                "或在 _Mock_Exams 目录下手动创建带 mock_exam 属性的笔记。";

        rootEl.appendChild(emptyEl);

        const warningEl = createInvalidWarning(scanResult);
        if (warningEl) rootEl.appendChild(warningEl);
        return;
    }

    /* 总分趋势 */
    const trendCardEl = viewDocument.createElement("div");
    trendCardEl.className = "me-card me-trend-card";

    const trendTitleEl = viewDocument.createElement("h4");
    trendTitleEl.className = "me-section-title";
    trendTitleEl.textContent = "总分趋势（满分 150）";

    trendCardEl.appendChild(trendTitleEl);
    trendCardEl.appendChild(createTrendSvg(exams));
    rootEl.appendChild(trendCardEl);

    /* 各科得分率 */
    const subjectStats = computeSubjectStats(exams);
    const rateCardEl = viewDocument.createElement("div");
    rateCardEl.className = "me-card me-rate-card";

    const rateTitleEl = viewDocument.createElement("h4");
    rateTitleEl.className = "me-section-title";
    rateTitleEl.textContent =
        `各科平均得分率（低于 ${Math.round(CONFIG.weakRateThreshold * 100)}% 标 ⚠）`;

    rateCardEl.appendChild(rateTitleEl);
    rateCardEl.appendChild(createRateBars(subjectStats));
    rootEl.appendChild(rateCardEl);

    /* 明细表 */
    const tableWrapEl = viewDocument.createElement("div");
    tableWrapEl.className = "me-table-wrap";

    const tableTitleEl = viewDocument.createElement("h4");
    tableTitleEl.className = "me-section-title";
    tableTitleEl.textContent = "全部模考记录";

    tableWrapEl.appendChild(tableTitleEl);
    tableWrapEl.appendChild(createStatsTable(exams));
    rootEl.appendChild(tableWrapEl);

    const warningEl = createInvalidWarning(scanResult);
    if (warningEl) rootEl.appendChild(warningEl);
}

render();
