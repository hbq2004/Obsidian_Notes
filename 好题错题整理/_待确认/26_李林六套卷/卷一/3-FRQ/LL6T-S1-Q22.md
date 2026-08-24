---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - PS
  - 26_李林六套卷/卷一/FRQ
  - 计算题
  - 随机变量函数分布
  - 均匀分布
  - 正态分布
  - 卷积公式
  - 分布函数法
points:
level:
---

# 解答题 第 22 题

![[_Attachments/题目识别/LL6T/LL6T-S1-Q22_题目.png|题目]]

(22) (本题满分 12 分)

设随机变量 $X$ 的概率密度为 $f(x) = \frac{1}{\pi(1+x^2)} (-\infty < x < +\infty)$ , $Y = \operatorname{arc cot} X$ , 随机变量 $Z \sim N(0,1)$ , 且 $Y$ 与 $Z$ 相互独立.

(I) 求 $Y$ 的分布函数与概率密度;

(II) 求 $U = Z + Y$ 的概率密度.

![[_Attachments/题目识别/LL6T-答案/LL6T-S1-Q22_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
(I) Y 的分布函数为 $F_Y(y)=\begin{cases}0, & y<0\\ y/\pi, & 0\le y \le \pi \\ 1, & y>\pi\end{cases}$，概率密度为 $f_Y(y)=\frac{1}{\pi}, 0<y<\pi$（其它为0）。即 $Y\sim U(0,\pi)$。

(II) $U=Z+Y$ 的概率密度为 $f_U(u)=\frac{1}{\pi}[\Phi(u)-\Phi(u-\pi)]$，其中 $\Phi(\cdot)$ 为标准正态分布函数。

关键给分点：①利用反函数单调性求分布函数；②得到均匀分布；③卷积积分。

**解题切入点**
本题类比算法中的变量替换与卷积：Y 的分布利用单调变换，Z+Y 的分布利用卷积积分。核心是分布函数法与卷积公式。

**推演**
(I) 设 $X$ 的概率密度 $f_X(x)=\frac{1}{\pi(1+x^2)}$。$Y=\operatorname{arc cot}X$ 的值域为 $(0,\pi)$，且 $X=\cot Y$。对 $0<y<\pi$，有 $F_Y(y)=P(Y\le y)=P(X\ge \cot y)=1-F_X(\cot y)$。而 $F_X(x)=\int_{-\infty}^x \frac{dt}{\pi(1+t^2)}=\frac{1}{2}+\frac{1}{\pi}\arctan x$，故 $F_Y(y)=1-\left(\frac12+\frac{1}{\pi}\arctan(\cot y)\right)=\frac12-\frac{1}{\pi}\arctan(\cot y)$。由于 $y\in(0,\pi)$ 时 $\arctan(\cot y)=\frac{\pi}{2}-y$，所以 $F_Y(y)=\frac12-\frac{1}{\pi}(\frac{\pi}{2}-y)=\frac{y}{\pi}$。当 $y\le0$ 时 $F_Y(y)=0$；$y\ge\pi$ 时 $F_Y(y)=1$。因此 $Y\sim U(0,\pi)$，密度 $f_Y(y)=\frac{1}{\pi},0<y<\pi$。

(II) 因 $Y$ 与 $Z$ 独立，$U=Z+Y$ 的密度为卷积 $f_U(u)=\int_{-\infty}^{+\infty} f_Z(u-y)f_Y(y)dy$。代入 $f_Z(z)=\frac{1}{\sqrt{2\pi}}e^{-z^2/2}$，$f_Y(y)=\frac{1}{\pi}\mathbf{1}_{(0,\pi)}(y)$，得 $f_U(u)=\frac{1}{\pi}\int_0^\pi \frac{1}{\sqrt{2\pi}}e^{-(u-y)^2/2}dy$。令 $t=u-y$，则 $y=0$ 时 $t=u$，$y=\pi$ 时 $t=u-\pi$，$dy=-dt$，故 $f_U(u)=\frac{1}{\pi}\int_{u-\pi}^{u} \frac{1}{\sqrt{2\pi}}e^{-t^2/2}dt=\frac{1}{\pi}[\Phi(u)-\Phi(u-\pi)]$。

**易错点**
1. 求 $F_Y(y)$ 时要注意 $Y=\operatorname{arc cot}X$ 单调递减，不等号方向勿反。
2. $\arctan(\cot y)= \frac{\pi}{2}-y$ 仅在 $y\in(0,\pi)$ 成立，要利用主值区间。
3. 卷积积分限要准确对应 $Y$ 的支撑 $(0,\pi)$，换元时注意上下限变化。

**命题规律**
此类题常将常见分布（如均匀、正态、指数）混合，求函数分布或和分布。复习时应熟练分布函数法、卷积公式及常见分布的性质，注意单调变换时反函数处理。


> 来源：《26_李林六套卷（数一）》卷一 第 22 题
