# 修改日志（2026-08-21 会话）

> 由 AI 助手在本会话中对 `D:\Desktop\Obsidian_Notes\_Scripts` 目录的修改记录。

## 新增：错题打卡 + 错题筛选视图（wrong-question-filter）

- **目录**：`_Scripts\wrong-question-filter\view.js` + `view.css`（新建）。
- **用途**：补全题库闭环中缺失的一环——做题结果记录。与 question-recommender（0~5 级评级 + 复习排期）互补：本视图管"单次做题结果"（对 / 错 / 半对 / 蒙对），question-recommender 管"掌握程度"。
- **打卡写入 frontmatter 字段**（对已有笔记无破坏，只新增）：
  - `status`：`wrong` / `half` / `guessed` / `correct`（清除=删除字段）
  - `wrong_count`：累计做错次数（错/半对/蒙对各 +1）
  - `result_history`：最近 30 条结果时间线（`YYYY-MM-DD HH:mm:ss | 结果（旧→新）`）
  - `last_reviewed`：最近打卡时间
- **错题筛选**：默认只显示 `status ∈ {wrong, half, guessed}`；未打卡老题若 `level ≤ 1` 或 `regressed` 降级，也作为"候选错题"纳入（可勾选开关关闭）。
- **维度筛选**：学科（AM/LA/PS/DS/CO/OS/CN，标签根口径与 daily-review 一致）、书（从 `27_`/`880`/`XDSM`/`YW-`/`JJ8T`/`OJD`/`ep`/`大计算量`/`真题` 前缀标签提取）、知识点关键词（Enter 确认）。
- **统计面板**：范围内总题数 / 已打卡分布（错/半对/蒙对/对）/ 未打卡数 / 候选错题数，按学科分表。
- **导出**：复用 question-recommender 的带目录 PDF 打印（一页一题，A4）。
- **数据口径**：`getQuestionImages`（`|题目` 嵌入标记）、`getPageTags`、`parseLevel`、`normalizeIsoDate` 等全部复用 question-recommender 同款实现，保证兼容。
- **入口**：`好题错题整理\错题打卡与筛选.md`（新建，`dv.view("_Scripts/wrong-question-filter")`）。

## 验证

- `node --check` 语法通过；
- 标签归类验证：6106 个唯一 tag 组合，学科/书/知识点识别 0 失败；
- mock Dataview 环境执行测试：注入 8 篇测试状态（2错/1半对/1蒙对/1对/3未标记）后，错题集合正确显示 4 道，统计面板正确渲染；
- 抽查 12 本书的 OCR 笔记（27_900 / 27_方浩 / 27_张宇36讲 / 27_王道408 / 27_零壹 / 大计算量 / 27_ep / 26_杨威 / ep套卷 / 27_880 / 27_1000 / 26_没咋了），学科与书归类全部正确。

## 备注

- 26_杨威 / 26_没咋了等早期手动整理的笔记无书根标签，在"书"筛选中归为"无书"，属数据本身情况，不影响学科/知识点筛选。
