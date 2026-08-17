---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套四/FIB
  - 计算题
  - 傅里叶余弦级数
  - 系数积分公式
  - 偶延拓
  - 三角函数积分
  - 数列求和
points:
level:
---

# FIB 第 15 题

![[_Attachments/题目识别/JJ8T/JJ8T-S4-Q15_题目.png|题目]]

15. 设 $f(x) = 1 - x$, $x \in [0,1)$。若 $f(x) = \dfrac{a_0}{2} + \sum\limits_{n=1}^{\infty} a_n \cos n\pi x$ 则 $\sum\limits_{n=1}^{\infty} a_{2n} =$\_\_\_\_\_\_


---

## DeepSeek V4 Flash Max

【考点】本题考查傅里叶余弦级数的系数计算。类比算法竞赛中的“积分查表”——系数公式是固定模板，代入函数后积分即可，难点在于识别奇偶项系数是否为零。

【解】
将 $f(x)=1-x$ 在 $[0,1)$ 上展开为余弦级数 $f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}a_n\cos n\pi x$，系数公式为
$$
a_n = 2\int_0^1 f(x)\cos(n\pi x)\,dx \quad (n=0,1,2,\dots)
$$
（注意 $a_0$ 也适用，但本题只需求 $n\ge 1$ 的偶数项）。

对 $n\ge 1$，计算积分
$$
I_n = \int_0^1 (1-x)\cos(n\pi x)\,dx
$$
分部积分：令 $u=1-x$，$dv=\cos(n\pi x)\,dx$，则 $du=-dx$，$v=\frac{\sin(n\pi x)}{n\pi}$，有
$$
\begin{aligned}
I_n &= \left[(1-x)\frac{\sin(n\pi x)}{n\pi}\right]_0^1 - \int_0^1 \frac{\sin(n\pi x)}{n\pi}(-dx) \\
&= 0 + \frac{1}{n\pi}\int_0^1 \sin(n\pi x)\,dx \\
&= \frac{1}{n\pi}\left[-\frac{\cos(n\pi x)}{n\pi}\right]_0^1 \\
&= \frac{1}{n^2\pi^2}(1-\cos n\pi) \\
&= \frac{1-(-1)^n}{n^2\pi^2}.
\end{aligned}
$$
所以
$$
a_n = 2I_n = \frac{2(1-(-1)^n)}{n^2\pi^2}.
$$
当 $n$ 为偶数时，$(-1)^n=1$，故 $a_n=0$。特别地，$a_{2n}=0$ 对任意正整数 $n$ 成立。因此
$$
\sum_{n=1}^{\infty} a_{2n} = \sum_{n=1}^{\infty} 0 = 0.
$$

【答案】
$$\boxed{0}$$

【易错点】容易误以为所有 $a_n$ 均非零，漏算 $\cos(n\pi)=(-1)^n$ 导致的偶项为零。注意 $a_n$ 的表达式与 $1-(-1)^n$ 的奇偶性判别相关。另外，本题区间为 $[0,1)$，但系数积分仍取 $[0,1]$，端点处值不影响积分结果。

题面按 $f(x)=1-x$ 在 $[0,1)$ 上做余弦级数展开理解（OCR 疑误，请核对原书）。

【命题规律】此类题常考傅里叶级数系数的计算，尤其是奇偶项系数的特性。复习时应熟练分部积分法，并记住 $\int_0^1 \cos(n\pi x)dx$ 与 $\int_0^1 \sin(n\pi x)dx$ 的基本结果，结合 $(-1)^n$ 快速判断。
