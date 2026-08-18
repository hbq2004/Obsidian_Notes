---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套四/MCQ
  - 计算题
  - 渐近线定义
  - 水平渐近线
  - 垂直渐近线
  - 斜渐近线
  - 无穷小量比较
points:
level:
---

# MCQ 第 1 题

![[_Attachments/题目识别/JJ8T/JJ8T-S4-Q01_题目.png|题目]]

1. 曲线 $y = \frac{1}{2x} + \ln(1 + e^x)$ 的渐近线条数为(\_)。
A. 0
B. 1
C. 2
D. 3


---

## DeepSeek V4 Flash Max

【考点】本题考查渐近线的分类与求法。类似于算法竞赛中分析函数的极限行为，需分别考察 $x\to\pm\infty$（水平/斜）和趋向无定义点（垂直）的情况。

【解】函数 $y = \frac{1}{2x} + \ln(1+e^x)$，定义域为 $x\ne 0$。

1. **垂直渐近线**：只在无定义点 $x=0$ 处可能取得。
   - $\lim\limits_{x\to 0^+} y = \lim\limits_{x\to 0^+}\left(\frac{1}{2x}+\ln(1+e^x)\right) = +\infty + \ln 2 = +\infty$
   - $\lim\limits_{x\to 0^-} y = \lim\limits_{x\to 0^-}\left(\frac{1}{2x}+\ln(1+e^x)\right) = -\infty + \ln 2 = -\infty$
   - 故 $x=0$ 为垂直渐近线。

2. **水平渐近线**：考察 $x\to\pm\infty$ 时 $y$ 的极限。
   - 当 $x\to +\infty$：$\ln(1+e^x) = x + \ln(1+e^{-x})$，于是 $y = x + \frac{1}{2x} + \ln(1+e^{-x}) \to +\infty$，无水平渐近线。
   - 当 $x\to -\infty$：$e^x\to 0$，$\ln(1+e^x)\sim e^x$，且 $\frac{1}{2x}\to 0$，故 $\lim\limits_{x\to -\infty} y = 0 + 0 = 0$。
   - 所以 $y=0$ 为水平渐近线（仅 $x\to-\infty$ 方向）。

3. **斜渐近线**：考察 $x\to +\infty$ 时 $y/x$ 的极限及 $y - kx$ 的极限（因为 $x\to-\infty$ 已有水平渐近线，不再有斜渐近线）。
   - $k = \lim\limits_{x\to +\infty} \frac{y}{x} = \lim\limits_{x\to +\infty} \left(\frac{1}{2x^2} + \frac{\ln(1+e^x)}{x}\right) = 0 + \lim\limits_{x\to +\infty} \frac{x+\ln(1+e^{-x})}{x} = 1$。
   - $b = \lim\limits_{x\to +\infty} (y - kx) = \lim\limits_{x\to +\infty} \left(\frac{1}{2x} + \ln(1+e^x) - x\right) = \lim\limits_{x\to +\infty} \left(\frac{1}{2x} + \ln(1+e^{-x})\right) = 0+0=0$。
   - 故斜渐近线为 $y=x$。

综上，共有 3 条渐近线：$x=0$，$y=0$，$y=x$。

【答案】选 **(D)**。
- (A) 0：漏算了所有渐近线，错误。
- (B) 1：只看到垂直渐进线，忽略水平和斜渐近线，错误。
- (C) 2：常见错误是漏掉水平渐近线（$x\to-\infty$）或漏掉斜渐近线，错误。
- (D) 3：正确。

【易错点】
1. 忘记考察 $x\to-\infty$ 的水平渐近线，只习惯看 $+\infty$。
2. 忽略 $x=0$ 处的垂直渐近线，因为对数部分在该点有定义，但分式部分导致无穷。
3. 求斜渐近线时误用 $y/x$ 的极限，需确认 $\lim y/x$ 存在且有限，且 $y-kx$ 的极限也为有限值。
4. 水平渐近线与斜渐近线不会在同一方向同时存在，但不同方向可以各有一条。

题面按标准函数 $y = \frac{1}{2x} + \ln(1+e^x)$ 理解（OCR 疑误，请核对原书）。

---

## V4 Flash Max 解析

**答案**: D。共有 3 条渐近线：$x=0$ 是垂直渐近线；$x\to+\infty$ 时有斜渐近线 $y=x$；$x\to-\infty$ 时有水平渐近线 $y=0$。

**解题切入点**: 渐近线题先按三类极限“有限点、$+\infty$、$-\infty$”分治，类似算法竞赛按不同数据范围分类讨论。本函数只有 $\frac1{2x}$ 在 $x=0$ 可能无穷大；$x\to+\infty$ 时 $\ln(1+e^x)$ 与 $x$ 同阶，应找斜渐近线；$x\to-\infty$ 时 $e^x\to0$，函数趋于常数，应找水平渐近线。

**推演**:

1. 垂直渐近线

函数在 $x\neq0$ 处有限且连续，只需检查 $x=0$：

$$
\lim_{x\to0^+}\left(\frac1{2x}+\ln(1+e^x)\right)=+\infty,
$$

$$
\lim_{x\to0^-}\left(\frac1{2x}+\ln(1+e^x)\right)=-\infty.
$$

所以 $x=0$ 是一条垂直渐近线。

2. $x\to+\infty$ 的斜渐近线

使用恒等式

$$
\ln(1+e^x)=x+\ln(1+e^{-x}),
$$

则

$$
f(x)=x+\frac1{2x}+\ln(1+e^{-x}).
$$

因此

$$
\lim_{x\to+\infty}\frac{f(x)}x=1,
$$

且

$$
\lim_{x\to+\infty}[f(x)-x]
=\lim_{x\to+\infty}\left[\frac1{2x}+\ln(1+e^{-x})\right]=0.
$$

所以 $x\to+\infty$ 时有斜渐近线

$$
y=x.
$$

3. $x\to-\infty$ 的水平渐近线

当 $x\to-\infty$ 时，$e^x\to0$，所以

$$
\ln(1+e^x)\to0,\qquad \frac1{2x}\to0.
$$

于是

$$
\lim_{x\to-\infty}f(x)=0.
$$

所以 $x\to-\infty$ 时有水平渐近线

$$
y=0.
$$

综上，渐近线共有 3 条，选 D。

**易错点**: 
- 容易只算垂直渐近线，或只算 $+\infty$ 的斜渐近线，漏掉 $x\to-\infty$ 的水平渐近线。要强制分成三个极限过程。
- 在 $+\infty$ 求斜渐近线时，不能写成“渐近线为 $y=x+\frac1{2x}$”或带上 $\ln(1+e^{-x})$；渐近线必须是直线，只要 $f(x)-(\text{直线})\to0$ 即可。
- 自检：$f(x)-x=\frac1{2x}+\ln(1+e^{-x})\to0$，说明 $y=x$ 合理；$x\to-\infty$ 时 $f(x)\to0$，说明 $y=0$ 合理。

**命题规律**: 渐近线是数一高频小题。命题常把“分式函数 + 指数/对数/反三角”组合，主要考察正负无穷方向是否分别有水平/斜渐近线，以及分母零点处是否有垂直渐近线。常见变式如 $y=\frac{x^2}{x-1}$、含 $\arctan x$ 或 $\ln(1+e^x)$ 的函数等，本质都是求三类极限；也可与等价无穷小、泰勒展开（如 $\ln(1+e^{-x})\sim e^{-x}$）结合出题。
