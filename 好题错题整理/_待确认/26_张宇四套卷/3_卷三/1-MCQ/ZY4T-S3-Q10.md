---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - PS
  - 26_张宇四套卷/卷三/MCQ
  - 计算题
  - 依概率收敛
  - 大数定律
  - 数学期望计算
  - 独立随机变量
  - 概率密度函数
points:
level:
---

# 选择题 第 10 题

![[_Attachments/题目识别/ZY4T/ZY4T-S3-Q10_题目.png|题目]]

设总体 $X$ 的概率密度为 $f(x) = \begin{cases} 6x(1-x), & 0 < x < 1, \\ 0, & \text{其他}, \end{cases}$ $X_1, X_2, \cdots, X_n, \cdots$ 为来自总体 $X$ 的简单随机样本，且对任意的 $\varepsilon > 0$，有 $\lim_{n \to \infty} P\left\{ \left| \sum_{i=1}^n \frac{X_{2i}}{nX_{2i-1}} - a \right| < \varepsilon \right\} = 1$，则 $a =$.
(A) $\frac{1}{2}$
(B) $1$
(C) $\frac{3}{2}$
(D) $\frac{5}{2}$

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S3-Q10_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由大数定律，$\frac{1}{n}\sum_{i=1}^n \frac{X_{2i}}{X_{2i-1}}$ 依概率收敛于其期望 $E\left(\frac{X_{2i}}{X_{2i-1}}\right)$。由于 $X_{2i}$ 与 $X_{2i-1}$ 独立同分布，故 $E\left(\frac{X_{2i}}{X_{2i-1}}\right)=E(X_{2i})E\left(\frac1{X_{2i-1}}\right)=E(X)E\left(\frac1X\right)$。

计算 $E(X)=\int_0^1 x\cdot6x(1-x)\,dx=6\int_0^1 (x^2-x^3)\,dx=6\left(\frac13-\frac14\right)=\frac12$。

$E\left(\frac1X\right)=\int_0^1 \frac1x\cdot6x(1-x)\,dx=6\int_0^1 (1-x)\,dx=6\cdot\frac12=3$。

故 $a=\frac12\times3=\frac32$，对应选项 (C)。

【推演】选项 (A) $\frac12$ 为 $E(X)$；(B) $1$ 无直接对应；(D) $\frac52$ 是 $E(X)+E\left(\frac1X\right)/2$ 等错误运算。

**解题切入点**

识别到依概率收敛条件即大数定律，将问题转化为求比值 $Y_i=X_{2i}/X_{2i-1}$ 的期望，利用独立性和密度函数计算两个期望的乘积。

**推演**

1. 由题设，$\lim_{n\to\infty}P\left\{|\frac1n\sum_{i=1}^n\frac{X_{2i}}{X_{2i-1}}-a|<\varepsilon\right\}=1$，表明 $\frac1n\sum_{i=1}^n\frac{X_{2i}}{X_{2i-1}}$ 依概率收敛于 $a$。
2. 因为 $X_1,X_2,\cdots$ 来自同一总体且相互独立，故 $Y_i=\frac{X_{2i}}{X_{2i-1}}$ 独立同分布。
3. 根据辛钦大数定律，若 $Y_i$ 的期望存在，则样本均值依概率收敛于期望 $E(Y_1)$，因此 $a=E(Y_1)=E\left(\frac{X_{2}}{X_{1}}\right)$。
4. 由 $X_1$ 与 $X_2$ 独立，$E\left(\frac{X_{2}}{X_{1}}\right)=E(X_2)E\left(\frac1{X_1}\right)=E(X)E\left(\frac1X\right)$（注意：期望的乘积成立，因为独立）。
5. 计算 $E(X)=\int_0^1 x\cdot6x(1-x)\,dx=6\int_0^1 (x^2-x^3)\,dx=6\left(\frac13-\frac14\right)=\frac12$。
6. 计算 $E\left(\frac1X\right)=\int_0^1 \frac1x\cdot6x(1-x)\,dx=6\int_0^1 (1-x)\,dx=6\left[x-\frac{x^2}{2}\right]_0^1=6\left(1-\frac12\right)=3$。
7. 得 $a=\frac12\times3=\frac32$，故选 (C)。

**易错点**

- 误以为 $\frac{X_{2i}}{X_{2i-1}}$ 的期望可以直接用 $E(X)/E(X)$ 计算，而忽略独立性和期望的乘积公式。
- 计算 $E(1/X)$ 时忘掉被积函数中的 $1/x$ 与 $f(x)$ 中的 $x$ 约分，直接积分导致错误。
- 混淆大数定律与中心极限定理，本题仅需依概率收敛，期望存在即可。

**命题规律**

- 常将大数定律与参数估计结合，考查依概率收敛的极限值。
- 计算期望时需熟练运用密度函数，可能涉及 $E(1/X)$ 等变形。
- 复习时注意独立随机变量乘积的期望性质，以及常见分布的期望计算。


> 来源：《26_张宇四套卷（数一）》卷三 第 10 题
