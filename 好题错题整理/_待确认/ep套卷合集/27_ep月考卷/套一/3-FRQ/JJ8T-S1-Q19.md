---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套一/FRQ
  - 计算题
  - 等价无穷小
  - 泰勒公式
  - 高阶无穷小
  - 极限四则运算
points:
level:
---

# FRQ 第 19 题

![[_Attachments/题目识别/JJ8T/JJ8T-S1-Q19_题目.png|题目]]

19. (本题满分 12 分) 设 $f(x)$ 在 $x = 0$ 某邻域内有定义，且满足 $\lim\limits_{x \to 0} \frac{f(x) \tan x - \sin 4x}{x^3} = 0$，求极限 $\lim\limits_{x \to 0} \frac{f(x) - 4}{x^2}$.


---

## DeepSeek V4 Flash Max

【考点】本题考查由无穷小阶的比较反推函数展开式中特定阶系数。类似算法竞赛中“已知两个表达式的差是 $o(x^3)$，用低阶项匹配确定系数”，用泰勒展开到 $x^3$ 即可。

【解】令
\[
\eta(x)=\frac{f(x)\tan x-\sin4x}{x^3},
\]
则 $\eta(x)\to 0$，故
\[
f(x)\tan x=\sin4x+x^3\eta(x)=\sin4x+o(x^3).
\]
由于 $\tan x\sim x$，在 $x\ne 0$ 的小邻域内 $\tan x\ne 0$，所以
\[
f(x)=\frac{\sin4x+o(x^3)}{\tan x}.
\]
于是
\[
\frac{f(x)-4}{x^2}
=\frac{\sin4x+o(x^3)-4\tan x}{x^2\tan x}.
\]
将 $\sin4x$ 和 $4\tan x$ 在 $x=0$ 处展开到 $x^3$ 项：
\[
\sin4x=4x-\frac{(4x)^3}{6}+o(x^3)
=4x-\frac{32}{3}x^3+o(x^3),
\]
\[
\tan x=x+\frac{x^3}{3}+o(x^3),\quad
4\tan x=4x+\frac{4}{3}x^3+o(x^3).
\]
因此
\[
\sin4x-4\tan x
=\left(4x-\frac{32}{3}x^3\right)-\left(4x+\frac{4}{3}x^3\right)+o(x^3)
=-12x^3+o(x^3).
\]
所以
\[
\frac{f(x)-4}{x^2}
=\frac{-12x^3+o(x^3)}{x^2\tan x}
=\frac{-12+o(1)}{\tan x/x}
\to -12.
\]

【答案】
\[
\boxed{\lim_{x\to0}\frac{f(x)-4}{x^2}=-12}
\]

关键给分点：
- 由题设写成 $f(x)\tan x=\sin4x+o(x^3)$（2分）；
- 将目标式化为 $\dfrac{\sin4x-4\tan x+o(x^3)}{x^2\tan x}$（3分）；
- 写出 $\sin4x$、$4\tan x$ 到 $x^3$ 的泰勒展开（4分）；
- 算出 $x^3$ 系数为 $-12$ 并取极限（3分）。

【易错点】常见错误是只把 $\tan x\sim x$ 代入，得到 $\sin4x-4x$，从而算成 $-\frac{32}{3}$。必须保留 $\tan x$ 的 $x^3/3$ 项；分母是 $x^3$ 阶，所以分子也要精确到 $x^3$ 阶。另外不能先令 $f(x)\sim4$ 再减，因为需要二阶信息。防错方法：先写出 $f\tan x=\sin4x+o(x^3)$，展开到同一阶再相除。

【命题规律】这类题常以“某表达式差为高阶无穷小”给出条件，求另一个极限；本质是泰勒展开中低阶项匹配。复习时熟记 $\sin x,\tan x$ 的麦克劳林展开；看到分母为 $x^k$，就把分子相关函数展开到 $x^k$ 项。
