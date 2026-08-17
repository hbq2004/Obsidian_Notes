---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套一/FRQ
  - 计算题
  - 渐近线
  - 垂直渐近线
  - 斜渐近线
  - 泰勒展开
  - 函数定义域
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/JJ8T/JJ8T-S1-Q20_题目.png|题目]]

20. （本题满分 12 分）求曲线 $y = e^{-\frac{1}{x}} \sqrt{x^2 - 4x + 1}$ 的渐近线方程.


---

## 解析（AI 生成，仅供参考）

【考点】本题考查渐近线的判定与计算，切入点是：垂直渐近线看无定义点处单侧极限，无穷远渐近线看 $f(x)=ax+b+o(1)$。算法竞赛类比：像同时检查“边界数据”和“数据规模趋于无穷”时的主部行为。

【解】

1. 定义域与可疑点
$$
x^2-4x+1\ge0 \Rightarrow x\le 2-\sqrt3 \text{ 或 } x\ge2+\sqrt3,\quad x\ne0.
$$
故 $x=0$ 是无定义点；$x=2\pm\sqrt3$ 处根式为 $0$，函数值趋向 $0$，不产生渐近线。

2. 垂直渐近线
$$
\lim_{x\to0^-}e^{-1/x}\sqrt{x^2-4x+1}=+\infty,
$$
因为 $x\to0^-$ 时 $-1/x\to+\infty$，根式趋于 $1$。因此 $x=0$ 是一条垂直渐近线。

3. $x\to+\infty$ 的斜渐近线
$$
a_+=\lim_{x\to+\infty}\frac{f(x)}{x}=\lim_{x\to+\infty}e^{-1/x}\sqrt{1-\frac4x+\frac1{x^2}}=1.
$$
又
$$
\sqrt{x^2-4x+1}=x-2-\frac{3}{2x}+o\left(\frac1x\right),
\quad e^{-1/x}=1-\frac1x+\frac1{2x^2}+o\left(\frac1{x^2}\right).
$$
相乘得
$$
f(x)=x-3+\frac1x+o\left(\frac1x\right).
$$
所以 $b_+=\lim_{x\to+\infty}(f(x)-x)=-3$，斜渐近线为 $y=x-3$。

4. $x\to-\infty$ 的斜渐近线
当 $x<0$ 时 $\frac{\sqrt{x^2-4x+1}}{x}=-\sqrt{1-\frac4x+\frac1{x^2}}$，故
$$
a_-=\lim_{x\to-\infty}\frac{f(x)}{x}=-1.
$$
同时
$$
\sqrt{x^2-4x+1}=-x+2+\frac{3}{2x}+o\left(\frac1x\right),
\quad e^{-1/x}=1-\frac1x+\frac1{2x^2}+o\left(\frac1{x^2}\right).
$$
相乘得
$$
f(x)=-x+3-\frac1x+o\left(\frac1x\right).
$$
所以 $b_-=\lim_{x\to-\infty}(f(x)+x)=3$，斜渐近线为 $y=-x+3$。

5. 水平渐近线：因 $f(x)/x$ 的极限分别为 $1$ 和 $-1$，不存在水平渐近线。

【答案】渐近线方程为
$$
\boxed{x=0,\quad y=x-3,\quad y=-x+3.}
$$
关键给分点：求出可疑点 $x=0$ 并判定垂直渐近线（约3分）；分别求 $x\to+\infty$、$x\to-\infty$ 时 $f(x)/x$ 的极限（约4分）；求对应截距（约4分）；结论（约1分）。

【易错点】
- 容易漏掉 $x=0$ 的垂直渐近线：$x=0$ 虽然不在定义域中，但 $x\to0^-$ 时 $e^{-1/x}\to+\infty$，故必须算渐近线。
- 求 $x\to-\infty$ 时一定要用 $\sqrt{x^2}/x=-1$，否则斜率符号会错。
- 截距来自 $f(x)-ax$ 的极限，需保留 $1/x$ 阶展开；只取首项会误判。
- $x=2\pm\sqrt3$ 处根式为 $0$ 但函数趋于 $0$，不是垂直渐近线。

【命题规律】渐近线题常把根式与指数/分式组合，制造“定义域缺口”和“正负无穷方向符号不同”的陷阱。复习时应把水平/斜渐近线统一为 $f(x)=ax+b+o(1)$，并用 Taylor 展开求 $b$；同时留意无定义点的单侧极限。

> AI 生成，仅供参考。

