---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 线性变换
  - 泊松分布
  - 指数分布
  - 正态分布
points:
level:
---

# MCQ 第 492 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q492_题目.png|题目]]

492 下列结论不正确的是( ).
(A) 若$X \sim P(\lambda)$，则$2X \sim P(2\lambda)$
(B) 若$X \sim U[a,b]$，则$2X \sim U[2a,2b]$
(C) 若$X \sim E(\lambda)$，则$2X \sim E\left(\frac{\lambda}{2}\right)$
(D) 若$X \sim N(\mu, \sigma^2) (\sigma > 0)$，则$2X \sim N(2\mu, 4\sigma^2)$

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 A。$X\sim P(\lambda)$（$\lambda>0$）时，$2X$ 只取偶数，不可能服从在所有非负整数上都有正概率的泊松分布 $P(2\lambda)$。

**解题切入点**：看到“某个分布经过 $2X$ 后仍服从同族分布”，应先判断该分布族对线性变换是否封闭。连续型用密度变换公式；离散型要检查取值集合和概率。泊松分布只对独立变量之和具有可加性，对常数倍伸缩一般不封闭，因此 A 最可疑。

**推演**：

设 $Y=2X$。对连续型随机变量，$Y=2X$ 的密度满足

$
f_Y(y)=\frac12 f_X\left(\frac y2\right).
$

逐项判断：

### (A) $X\sim P(\lambda)$，$\lambda>0$

若 $Y=2X$，则 $Y$ 只能取 $0,2,4,\dots$，即

$
P(Y=1)=0.
$

但如果 $Y\sim P(2\lambda)$，则

$
P(Y=1)=2\lambda e^{-2\lambda}>0,
$

矛盾。因此

$
2X\not\sim P(2\lambda).
$

所以 A 不正确。

### (B) $X\sim U[a,b]$

均匀分布密度为

$
f_X(x)=\frac1{b-a},\quad a\le x\le b.
$

于是

$
f_Y(y)=\frac12\cdot \frac1{b-a}
=\frac1{2b-2a},\quad 2a\le y\le 2b.
$

所以

$
2X\sim U[2a,2b].
$

B 正确。

### (C) $X\sim E(\lambda)$

指数分布密度按通常约定为

$
f_X(x)=\lambda e^{-\lambda x},\quad x>0.
$

则

$
f_Y(y)=\frac12\cdot \lambda e^{-\lambda y/2}
=\frac{\lambda}{2}e^{-(\lambda/2)y},\quad y>0.
$

所以

$
2X\sim E\left(\frac{\lambda}{2}\right).
$

C 正确。

### (D) $X\sim N(\mu,\sigma^2)$

正态分布密度为

$
f_X(x)=\frac1{\sqrt{2\pi}\sigma}
\exp\left[-\frac{(x-\mu)^2}{2\sigma^2}\right].
$

则

$
f_Y(y)=\frac12\cdot \frac1{\sqrt{2\pi}\sigma}
\exp\left[-\frac{(\frac y2-\mu)^2}{2\sigma^2}\right]
=\frac1{\sqrt{2\pi}(2\sigma)}
\exp\left[-\frac{(y-2\mu)^2}{2(4\sigma^2)}\right].
$

所以

$
2X\sim N(2\mu,4\sigma^2).
$

D 正确。

综上，不正确的是 A。

**易错点**：

1. 误以为泊松分布对常数倍也封闭。泊松分布的可加性是指独立变量之和，不是同一个变量乘以常数。
2. 只用期望判断分布。A 中 $E(2X)=2\lambda$，与 $P(2\lambda)$ 的期望相同，但方差不同，且取值集合不同；应严格验证分布。
3. 连续型线性变换漏掉 Jacobian 系数。例如 $Y=2X$ 时密度要乘 $\frac12$，不能直接把 $f_X(x)$ 中的 $x$ 换成 $\frac y2$。
4. 指数分布参数含义可能因教材而异。本题按密度 $\lambda e^{-\lambda x}$ 理解；若把 $\lambda$ 理解为均值，结论会不同，考试中要注意约定。

**命题规律**：常见分布在线性变换下的分布是考研选择题高频考点。常见变式有：求 $aX+b$ 的分布，例如 $X\sim N(\mu,\sigma^2)$ 时 $2X-1$ 的分布；$X\sim E(\lambda)$ 时 $aX$ 的参数变化；$X\sim U[a,b]$ 时 $cX+d$ 的区间变化。复习时应熟记常见分布的密度、均值、方差，并掌握随机变量函数的密度变换公式。

**知识点**：常见分布的线性变换、泊松分布、指数分布、正态分布

---

> 来源：方浩概率统计进阶500题做题本 第180页 · C组
