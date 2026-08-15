/*
 * 当前标签随机二刷入口。
 * 匹配、题图、评级、Tasks 与打印均复用 question-recommender。
 */
const options = (
    typeof input === "object" &&
    input !== null &&
    !Array.isArray(input)
)
    ? input
    : {};

return dv.view(
    "_Scripts/question-recommender",
    {
        ...options,
        mode: "random-review"
    }
);
