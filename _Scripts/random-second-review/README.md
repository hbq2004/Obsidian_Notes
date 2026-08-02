# 当前标签随机二刷

在需要按当前笔记标签抽题的位置加入：

```dataviewjs
await dv.view("_Scripts/random-second-review", { count: 10 });
```

`count` 是初始抽题数，默认 10，范围 1～100。页面内可以改题数并重新抽取。

## 二刷口径

- 默认只抽已经刷过的题。
- 新数据以 `review_count > 0` 为准。
- 尚未生成 `review_count` 的旧题，以合法的 `level: 0`～`level: 5` 兼容识别。
- 可以在面板中关闭“仅抽已刷题”，临时纳入全部标签匹配题。

一次抽取无重复；相同题图的重复笔记会去重。评级后引发 Dataview 刷新时，本组题目保存在当前 Obsidian 窗口会话中，不会自动换组。点击“再抽一组”才会重抽。

做完一道题后选择本轮等级，再点“记录本轮”。即使等级与上次相同，也会正常增加一次 `review_count` 并更新下次复习时间。

同一篇笔记放置多个随机二刷面板时，请为它们提供不同的 `storageKey`：

```dataviewjs
await dv.view("_Scripts/random-second-review", {
    count: 5,
    storageKey: "morning-review"
});
```

## 题库要求

- Dataview 的 JavaScript 查询必须启用。
- 当前笔记必须有 `tags`。
- 候选题必须命中当前笔记的全部标签或对应层级子标签。
- 题目图片的嵌入别名或 alt 必须包含独立的 `题目` 标记，例如 `![[图片.png|题目]]`。
