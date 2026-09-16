---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷四/MCQ
  - 概念题
  - 斜渐近线判定
  - 水平渐近线
  - 泰勒展开
  - 极限计算
points:
level:
---

# MCQ 第 1 题

![[_Attachments/题目识别/YBS5T/YBS5T-S4-Q01_题目.png|题目]]

下列结论正确的是( ).
(A) 曲线 $y = x \sin \frac{1}{x}$ 和 $y = x \cos \frac{1}{x}$ 均有斜渐近线
(B) 曲线 $y = x \sin \frac{1}{x}$ 和 $y = x \cos \frac{1}{x}$ 均没有斜渐近线
(C) 曲线 $y = x \sin \frac{1}{x}$ 有斜渐近线，$y = x \cos \frac{1}{x}$ 没有斜渐近线
(D) 曲线 $y = x \sin \frac{1}{x}$ 没有斜渐近线，$y = x \cos \frac{1}{x}$ 有斜渐近线

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S4-Q01_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
【答案】(D)

曲线 $y=x\sin\frac{1}{x}$ 只有水平渐近线 $y=1$，没有斜渐近线；曲线 $y=x\cos\frac{1}{x}$ 有斜渐近线 $y=x$。故选 (D)。

**解题切入点**

考查斜渐近线的判定：先看斜率 $a=\lim_{x\to\infty}\frac{f(x)}{x}$，再看截距 $b=\lim_{x\to\infty}(f(x)-a x)$。类似算法竞赛中“抓主部”：$x\to\infty$ 时令 $t=\frac{1}{x}\to0$，用 $\sin t\sim t$、$\cos t\sim1-\frac{t^2}{2}$ 确定主项。

**推演**

对 $f(x)=x\sin\frac{1}{x}$：

令 $t=\frac{1}{x}$，当 $x\to\infty$ 时 $t\to0$。

$$
f(x)=x\sin t=\frac{\sin t}{t}
=1-\frac{t^2}{6}+o(t^2)
=1-\frac{1}{6x^2}+o\left(\frac{1}{x^2}\right).
$$

所以 $f(x)\to1$，有水平渐近线 $y=1$；且

$$
\lim_{x\to\infty}\frac{f(x)}{x}
=\lim_{x\to\infty}\sin\frac{1}{x}=0,
$$

故不存在斜渐近线（水平渐近线不是斜渐近线）。

对 $g(x)=x\cos\frac{1}{x}$：

令 $t=\frac{1}{x}\to0$，

$$
\cos t=1-\frac{t^2}{2}+o(t^2)
=1-\frac{1}{2x^2}+o\left(\frac{1}{x^2}\right).
$$

于是

$$
g(x)=x-\frac{1}{2x}+o\left(\frac{1}{x}\right).
$$

因此

$$
a=\lim_{x\to\infty}\frac{g(x)}{x}
=\lim_{x\to\infty}\cos\frac{1}{x}=1,
$$

$$
b=\lim_{x\to\infty}(g(x)-x)
=\lim_{x\to\infty}x\left(\cos\frac{1}{x}-1\right)
=\lim_{x\to\infty}\left(-\frac{1}{2x}+o\left(\frac{1}{x}\right)\right)=0.
$$

所以 $g(x)$ 有斜渐近线 $y=x$。

逐项判断：

(A) 错：$y=x\sin\frac{1}{x}$ 没有斜渐近线。

(B) 错：$y=x\cos\frac{1}{x}$ 有斜渐近线，故“均没有”不成立。

(C) 错：两个半句均错。

(D) 对：符合上述结论。

**易错点**

- 把水平渐近线 $y=1$ 误认为“斜渐近线”。考研中斜渐近线通常指斜率 $a\neq0$ 的情形，与水平渐近线并列。
- 对 $x\sin\frac{1}{x}$ 不能只看到 $x$ 乘以 $0$ 得 $0$；应展开到足够阶数，否则会漏掉极限 $1$。
- 计算 $b$ 时要用泰勒展开，不能只取 $\cos\frac{1}{x}\approx1$，否则会误以为 $b$ 不存在或算错。

**命题规律**

渐近线常考“抓主部”思想：令 $t=\frac{1}{x}$ 后做泰勒展开，分别求 $a,b$。复习时把水平、垂直、斜渐近线的定义和求法整理清楚，并注意区分“有水平渐近线”与“有斜渐近线”。类似题还常与极限、无穷小比较结合。


> 来源：《26_余丙森五套卷（数一）》卷四 第 1 题
