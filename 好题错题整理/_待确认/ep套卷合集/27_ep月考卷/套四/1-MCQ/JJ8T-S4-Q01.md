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

## 解析（AI 生成，仅供参考）

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

> AI 生成，仅供参考。

