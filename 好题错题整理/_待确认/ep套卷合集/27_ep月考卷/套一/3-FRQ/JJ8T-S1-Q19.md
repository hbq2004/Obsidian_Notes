---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-20 01:07:44
tags:
  - AM
  - 27_ep月考卷/套一/FRQ
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
$$
\eta(x)=\frac{f(x)\tan x-\sin4x}{x^3},
$$
则 $\eta(x)\to 0$，故
$$
f(x)\tan x=\sin4x+x^3\eta(x)=\sin4x+o(x^3).
$$
由于 $\tan x\sim x$，在 $x\ne 0$ 的小邻域内 $\tan x\ne 0$，所以
$$
f(x)=\frac{\sin4x+o(x^3)}{\tan x}.
$$
于是
$$
\frac{f(x)-4}{x^2}
=\frac{\sin4x+o(x^3)-4\tan x}{x^2\tan x}.
$$
将 $\sin4x$ 和 $4\tan x$ 在 $x=0$ 处展开到 $x^3$ 项：
$$
\sin4x=4x-\frac{(4x)^3}{6}+o(x^3)
=4x-\frac{32}{3}x^3+o(x^3),
$$
$$
\tan x=x+\frac{x^3}{3}+o(x^3),\quad
4\tan x=4x+\frac{4}{3}x^3+o(x^3).
$$
因此
$$
\sin4x-4\tan x
=\left(4x-\frac{32}{3}x^3\right)-\left(4x+\frac{4}{3}x^3\right)+o(x^3)
=-12x^3+o(x^3).
$$
所以
$$
\frac{f(x)-4}{x^2}
=\frac{-12x^3+o(x^3)}{x^2\tan x}
=\frac{-12+o(1)}{\tan x/x}
\to -12.
$$

【答案】
$$
\boxed{\lim_{x\to0}\frac{f(x)-4}{x^2}=-12}
$$

关键给分点：
- 由题设写成 $f(x)\tan x=\sin4x+o(x^3)$（2分）；
- 将目标式化为 $\dfrac{\sin4x-4\tan x+o(x^3)}{x^2\tan x}$（3分）；
- 写出 $\sin4x$、$4\tan x$ 到 $x^3$ 的泰勒展开（4分）；
- 算出 $x^3$ 系数为 $-12$ 并取极限（3分）。

【易错点】常见错误是只把 $\tan x\sim x$ 代入，得到 $\sin4x-4x$，从而算成 $-\frac{32}{3}$。必须保留 $\tan x$ 的 $x^3/3$ 项；分母是 $x^3$ 阶，所以分子也要精确到 $x^3$ 阶。另外不能先令 $f(x)\sim4$ 再减，因为需要二阶信息。防错方法：先写出 $f\tan x=\sin4x+o(x^3)$，展开到同一阶再相除。

【命题规律】这类题常以“某表达式差为高阶无穷小”给出条件，求另一个极限；本质是泰勒展开中低阶项匹配。复习时熟记 $\sin x,\tan x$ 的麦克劳林展开；看到分母为 $x^k$，就把分子相关函数展开到 $x^k$ 项。

---

## V4 Flash Max 解析

**答案**:
$$
\boxed{\lim_{x\to 0}\frac{f(x)-4}{x^2}=-12}
$$

**解题切入点**:
目标式出现 $f(x)-4$，已知条件里却有 $f(x)\tan x$。第一步自然想到“补项拆项”：
$$
f(x)\tan x-\sin4x=(f(x)-4)\tan x+4\tan x-\sin4x.
$$
这相当于把未知量 $(f(x)-4)/x^2$ 从混合式中分离出来，剩余的 $4\tan x-\sin4x$ 完全可以用 Taylor 展开算出。注意：$\tan x$ 必须展开到 $x^3$，不能只换成 $x$。

**推演**:
由题设：
$$
\frac{f(x)\tan x-\sin4x}{x^3}\to 0
$$
即
$$
f(x)\tan x-\sin4x=o(x^3).
$$

拆项：
$$
f(x)\tan x-\sin4x=(f(x)-4)\tan x+4\tan x-\sin4x.
$$

两边除以 $x^3$：
$$
\frac{f(x)-4}{x^2}\cdot\frac{\tan x}{x}
=
\frac{f(x)\tan x-\sin4x}{x^3}
-
\frac{4\tan x-\sin4x}{x^3}.
$$

右边第一项趋于 $0$。再展开到三阶：
$$
\tan x=x+\frac{x^3}{3}+o(x^3),
$$
$$
\sin4x=4x-\frac{32}{3}x^3+o(x^3).
$$

所以
$$
4\tan x-\sin4x
=
4\left(x+\frac{x^3}{3}\right)-\left(4x-\frac{32}{3}x^3\right)+o(x^3)
=
12x^3+o(x^3).
$$

因此
$$
\frac{4\tan x-\sin4x}{x^3}\to 12.
$$

于是
$$
\frac{f(x)-4}{x^2}\cdot\frac{\tan x}{x}\to -12.
$$

又因为
$$
\frac{\tan x}{x}\to 1,
$$
且在去心邻域内 $\tan x\ne 0$，所以
$$
\frac{f(x)-4}{x^2}
=
\frac{\frac{f(x)-4}{x^2}\cdot\frac{\tan x}{x}}{\frac{\tan x}{x}}
\to -12.
$$

故
$$
\boxed{\lim_{x\to 0}\frac{f(x)-4}{x^2}=-12}.
$$

**易错点**:
- 常见错误：只把 $\tan x\sim x$，会得到
  $$
  f(x)x-\sin4x=o(x^3)\Rightarrow f(x)\sim 4-\frac{32}{3}x^2,
  $$
  从而误答 $-\frac{32}{3}$。错因是忽略了 $\tan x$ 的 $x^3/3$ 项与 $f(x)\to4$ 相乘会产生 $x^3$ 量级贡献。
- 不能对 $f(x)$ 用洛必达法则：题目没有假设 $f(x)$ 可导，只能用极限四则运算和 Taylor 展开。
- 注意符号：$4\tan x-\sin4x\sim 12x^3$，而总误差是 $o(x^3)$，所以 $(f(x)-4)\tan x$ 必须抵消掉这一项，结果为负。
- 自检：取 $f(x)=4-12x^2$，代入有
  $$
  f(x)\tan x-\sin4x=o(x^3),
  $$
  且目标极限恰为 $-12$，说明结果自洽。

**命题规律**:
这是“由混合极限反求函数增量比”的经典题型，本质是 Taylor 展开与无穷小比阶。常见变式包括：把 $\tan x,\sin4x$ 换成其他函数，或把分母 $x^3$ 改成 $x^n$，通过比较 $x^n$ 的系数反求参数。这类题常与等价无穷小、高阶无穷小、极限四则运算结合；若题目额外给出 $f(x)$ 可导或二阶可导，也可能与导数定义、Taylor 公式综合考查。
