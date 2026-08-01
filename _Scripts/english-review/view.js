/*
 * 英语一复习面板。
 * 用法：在任意英语首页插入
 *   ```dataviewjs
 *   await dv.view("_Scripts/english-review");
 *   ```
 */

const ROOT = "03 - 英语";
const SESSIONS = `${ROOT}/02 - 真题复盘/复习记录`;
const READING = `${ROOT}/02 - 真题复盘/阅读`;
const WRITING = `${ROOT}/02 - 真题复盘/作文`;
const REVIEW_STAGES = [1, 3, 7, 21];

dv.container.classList.add("english-review-view");

const today = dv.date("today");
const start = today.minus({ days: 6 });
const asNumber = value => {
    const number = Number(value);
    return Number.isFinite(number) ? number : 0;
};
const asDate = value => {
    if (!value) return null;
    try {
        const date = dv.date(value);
        return date && date.isValid !== false ? date : null;
    } catch (_) {
        return null;
    }
};
const asMillis = date => typeof date.toMillis === "function" ? date.toMillis() : Number(date);
const inRange = page => {
    const date = asDate(page.date);
    return date && asMillis(date) >= asMillis(start) && asMillis(date) <= asMillis(today);
};
const sum = (pages, key) => pages.reduce((total, page) => total + asNumber(page[key]), 0);

const sessions = dv.pages(`"${SESSIONS}"`).where(p => p.type === "english-session" && inRange(p)).array();
const reads = dv.pages(`"${READING}"`).where(p => p.type === "english-reading").array();
const recentReads = reads.filter(inRange);
const essays = dv.pages(`"${WRITING}"`).where(p => p.type === "english-writing" && inRange(p)).array();
const correct = sum(recentReads, "correct");
const total = sum(recentReads, "total");
const rate = total ? `${Math.round(correct / total * 100)}%` : "暂无数据";
const vocabAmount = sessions
    .filter(page => page.kind === "词汇")
    .reduce((totalAmount, page) => totalAmount + asNumber(page.amount), 0);

dv.header(2, "最近 7 天");
dv.table(["有效分钟", "词汇复习量", "阅读首做", "作文复盘"], [[
    sum(sessions, "minutes"),
    vocabAmount || "-",
    `${correct}/${total}（${rate}）`,
    essays.length
]]);

const minutesByKind = new Map();
sessions.forEach(page => {
    const kind = String(page.kind || "未分类");
    minutesByKind.set(kind, (minutesByKind.get(kind) || 0) + asNumber(page.minutes));
});
const breakdown = [...minutesByKind.entries()].sort((a, b) => b[1] - a[1]);
if (breakdown.length) {
    dv.table(["训练类型", "分钟"], breakdown);
}

const dueDate = page => {
    for (const stage of REVIEW_STAGES) {
        if (page[`review_${stage}_done`] === true) continue;
        const date = asDate(page[`review_${stage}`]);
        if (date) return { stage, date };
    }
    return null;
};
const due = reads
    .map(page => ({ page, due: dueDate(page) }))
    .filter(item => item.due && asMillis(item.due.date) <= asMillis(today))
    .sort((a, b) => asMillis(a.due.date) - asMillis(b.due.date));

dv.header(2, "今天要回炉的阅读");
if (due.length === 0) {
    dv.paragraph("没有到期阅读。今天完成一篇新阅读，或把时间给长难句和作文二稿。");
} else {
    dv.table(["笔记", "到期阶段", "首做", "主错因"], due.slice(0, 12).map(({ page, due: next }) => [
        page.file.link,
        `${next.stage} 天｜${next.date.toFormat("MM-dd")}`,
        `${asNumber(page.correct)}/${asNumber(page.total)}`,
        page.error_tags || "未填写"
    ]));
}

dv.header(2, "最近重复错因");
const counts = new Map();
recentReads.forEach(page => {
    const tags = page.error_tags == null
        ? []
        : Array.isArray(page.error_tags)
            ? page.error_tags
            : typeof page.error_tags === "string"
                ? [page.error_tags]
                : Array.from(page.error_tags);
    tags.filter(Boolean).forEach(tag => counts.set(String(tag), (counts.get(String(tag)) || 0) + 1));
});
const frequent = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
dv.table(["错因", "篇数"], frequent.length ? frequent : [["尚无数据", "-"]]);

dv.paragraph("时间只统计 QuickAdd 生成的复习记录；阅读复盘脚本会自动记时，不要再重复运行“记录复习会话”。");
