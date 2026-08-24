---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - AM
  - 26_张宇四套卷/卷三/FIB
  - 计算题
  - 定积分计算
  - 奇偶性
  - 分部积分法
  - 三角函数积分
points:
level:
---

# 填空题 第 11 题

![[_Attachments/题目识别/ZY4T/ZY4T-S3-Q11_题目.png|题目]]

11. $\int_{-\pi}^{\pi} (x + \cos x)^3 dx = \_\_\_\_\_\_\_\_$ .

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S3-Q11_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结论：$\int_{-\pi}^{\pi} (x + \cos x)^3 dx = -12\pi$。

填空题【答案】：$\boxed{-12\pi}$。

**解题切入点**

考查定积分计算，利用对称区间奇偶性简化运算。类似于算法竞赛中利用对称性化简复杂积分，避免直接展开暴力计算。破题点：展开立方，分别判断奇偶性，将非零项转化为偶函数积分，再用分部积分计算。

**推演**

$$
\begin{aligned}
\int_{-\pi}^{\pi} (x + \cos x)^3 dx &= \int_{-\pi}^{\pi} (x^3 + 3x^2\cos x + 3x\cos^2 x + \cos^3 x) dx \\
&= \int_{-\pi}^{\pi} x^3 dx + 3\int_{-\pi}^{\pi} x^2\cos x dx + 3\int_{-\pi}^{\pi} x\cos^2 x dx + \int_{-\pi}^{\pi} \cos^3 x dx.
\end{aligned}
$$

由于 $x^3$ 是奇函数，$x\cos^2 x$ 是奇函数，它们在对称区间 $[-\pi,\pi]$ 上的积分为零。而 $x^2\cos x$ 和 $\cos^3 x$ 是偶函数，所以

$$
\begin{aligned}
\text{原式} &= 2 \cdot 3 \int_{0}^{\pi} x^2 \cos x dx + 2 \int_{0}^{\pi} \cos^3 x dx \\
&= 6 \int_{0}^{\pi} x^2 \cos x dx + 2 \int_{0}^{\pi} \cos^3 x dx.
\end{aligned}
$$

计算 $I_1 = \int_{0}^{\pi} x^2 \cos x dx$，使用分部积分法：

$$
\begin{aligned}
\int x^2 \cos x dx &= x^2 \sin x - \int 2x \sin x dx \\
&= x^2 \sin x - 2\left( -x \cos x + \int \cos x dx \right) \\
&= x^2 \sin x + 2x \cos x - 2 \sin x.
\end{aligned}
$$

所以 $I_1 = \left[ x^2 \sin x + 2x \cos x - 2 \sin x \right]_{0}^{\pi} = (0 + 2\pi (-1) - 0) - (0) = -2\pi$.

计算 $I_2 = \int_{0}^{\pi} \cos^3 x dx$：

$$
\begin{aligned}
\int \cos^3 x dx &= \int \cos x (1 - \sin^2 x) dx = \sin x - \frac{1}{3} \sin^3 x + C,
\end{aligned}
$$

所以 $I_2 = \left[ \sin x - \frac{1}{3} \sin^3 x \right]_{0}^{\pi} = 0 - 0 = 0$.

因此原积分 $= 6 \times (-2\pi) + 2 \times 0 = -12\pi$.

所以 $\int_{-\pi}^{\pi} (x + \cos x)^3 dx = -12\pi$.

**易错点**

1. 展开后各项奇偶性判断：$x^2\cos x$ 是偶函数，$x\cos^2 x$ 是奇函数，$\cos^3 x$ 是偶函数。
2. 分部积分中容易出错，注意符号和积分限代入。
3. 忽略 $\cos^3 x$ 在 $[0,\pi]$ 积分可能为0，但不能直接认为偶函数积分非零。

**命题规律**

这类题常见于利用对称性和分部积分计算定积分，是考研数学一常考题型。复习时需熟练掌握奇偶性、分部积分和常见积分公式，注意积累对称区间积分的简化技巧。


> 来源：《26_张宇四套卷（数一）》卷三 第 11 题
