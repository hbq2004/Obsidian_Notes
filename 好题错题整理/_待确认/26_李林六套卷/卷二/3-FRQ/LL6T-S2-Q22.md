---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - PS
  - 26_李林六套卷/卷二/FRQ
  - 计算题
  - 概率密度归一化
  - 一阶线性微分方程
  - 随机变量函数的分布
  - 瑞利分布
  - 方差计算
points:
level:
---

# 解答题 第 22 题

![[_Attachments/题目识别/LL6T/LL6T-S2-Q22_题目.png|题目]]

设随机变量 $X$ 与 $Y$ 相互独立且服从同一分布，当 $x \leqslant 0$ 时，$X$ 的概率密度 $f(x) = 0$，当 $x > 0$ 时，$f(x)$ 满足方程 $f'(x) + 2xf(x) = 0$. $Z = \sqrt{X^2 + Y^2}$，求:
$ (I) Z $ 的分布函数与概率密度.
$ (II) D(Z). $

![[_Attachments/题目识别/LL6T-答案/LL6T-S2-Q22_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
由题设，当 $x>0$ 时
$$
f'(x)+2xf(x)=0
\Rightarrow \frac{f'(x)}{f(x)}=-2x
\Rightarrow f(x)=Ce^{-x^2}.
$$
归一化：
$$
1=\int_0^{+\infty} Ce^{-x^2}\,dx=\frac{C\sqrt{\pi}}2
\Rightarrow C=\frac2{\sqrt{\pi}}.
$$
所以
$$
f_X(x)=f_Y(x)=\frac2{\sqrt{\pi}}e^{-x^2},\quad x>0.
$$
设 $A,B\sim N(0,1)$ 独立，则 $X=|A|/\sqrt2$，$Y=|B|/\sqrt2$，故
$$
X^2+Y^2=\frac{A^2+B^2}{2}\sim \mathrm{Exp}(1).
$$
因此，当 $z>0$ 时
$$
F_Z(z)=P(Z\le z)=P(X^2+Y^2\le z^2)=1-e^{-z^2};
$$
且 $F_Z(z)=0$（$z\le0$）。所以
$$
f_Z(z)=F_Z'(z)=2ze^{-z^2},\quad z>0;
\qquad f_Z(z)=0,\ z\le0.
$$
又
$$
E(Z)=\int_0^\infty 2z^2e^{-z^2}\,dz=\frac{\sqrt{\pi}}2,
\qquad
E(Z^2)=\int_0^\infty 2z^3e^{-z^2}\,dz=1,
$$
故
$$
D(Z)=E(Z^2)-[E(Z)]^2=1-\frac{\pi}{4}=\frac{4-\pi}{4}.
$$

关键给分点：解出 $f(x)$ 并由 $\int f=1$ 定常数；得到 $X^2+Y^2$ 的分布；由 $F_Z'$ 求 $f_Z$；用 $E(Z^2)$、$E(Z)$ 计算方差。

**解题切入点**
考查一阶 ODE 给密度、独立随机变量函数分布与方差。破题思路：先用总概率为 $1$ 归一化定出 $X$ 的密度；看见“两个独立同分布变量的平方和再开根号”，立即联想到 Rayleigh 分布/卡方分布。这类似于算法题中先确定输入随机变量的分布，再做输出变换。

**推演**
（1）求 $X$ 的密度。对 $x>0$，
$$
\frac{d}{dx}\ln f(x)=-2x,
$$
积分得 $f(x)=Ce^{-x^2}$。由于 $x\le0$ 时密度为 $0$，所以
$$
1=\int_0^\infty Ce^{-x^2}\,dx=\frac{C\sqrt{\pi}}2,
$$
故 $C=2/\sqrt{\pi}$，即 $f(x)=2e^{-x^2}/\sqrt{\pi}$。这里 $x=0$ 单点不影响密度/分布。

（2）求 $Z$ 的分布。由独立性，$X,Y$ 的联合密度为
$$
f_{X,Y}(x,y)=\frac{4}{\pi} e^{-x^2-y^2},\quad x>0,\ y>0.
$$
对 $z>0$，
$$
F_Z(z)=\iint_{x>0,y>0,x^2+y^2\le z^2}\frac{4}{\pi} e^{-x^2-y^2}\,dx\,dy.
$$
令 $x=r\cos\theta,y=r\sin\theta$，则 $0\le r\le z$，$0\le\theta\le\pi/2$，$dxdy=r\,dr\,d\theta$，所以
$$
F_Z(z)=\int_0^{\pi/2}\int_0^z \frac{4}{\pi} e^{-r^2}r\,dr\,d\theta
=1-e^{-z^2}.
$$
因此 $F_Z(z)=0(z\le0)$，且
$$
f_Z(z)=F_Z'(z)=2ze^{-z^2}\quad(z>0).
$$
（也可用 $A,B\sim N(0,1)$ 将 $X^2+Y^2$ 化为 $(A^2+B^2)/2\sim\mathrm{Exp}(1)$，更快。）

（3）求方差。
$$
E(Z)=\int_0^\infty z\cdot 2ze^{-z^2}\,dz
=2\int_0^\infty z^2e^{-z^2}\,dz=\frac{\sqrt{\pi}}2.
$$
$$
E(Z^2)=\int_0^\infty z^2\cdot 2ze^{-z^2}\,dz
=\int_0^\infty u e^{-u}\,du=1,
$$
其中换元 $u=z^2$。故
$$
D(Z)=E(Z^2)-[E(Z)]^2=1-\frac{\pi}{4}.
$$

回代自检：$f_Z(z)\ge0$，且
$$
\int_0^\infty 2ze^{-z^2}\,dz=1;
$$
求导 $F_Z'(z)=2ze^{-z^2}$，结果自洽。

**易错点**
- 解 ODE 后忘记归一化：$C$ 不是任意常数，必须由 $\int_0^\infty f=1$ 确定为 $2/\sqrt{\pi}$。
- 分布函数分段时，$z\le0$ 必须为 $0$；对 $z>0$ 求导时不要丢掉因子 $2z$。
- 方差是 $E(Z^2)-[E(Z)]^2$，不是 $E(Z^2)-E(Z)$；这里 $E(Z)=\sqrt{\pi}/2$，$E(Z^2)=1$。
- 不要把 $X$ 的密度与标准正态密度混淆；本题是半正态型密度，归一化常数为 $2/\sqrt{\pi}$。

**命题规律**
本题是“用微分方程给密度”的典型包装，实际落点是独立随机变量平方和开根号。复习时应熟记常见分布（正态、卡方、指数、Rayleigh）的密度和数字特征；遇到 $\sqrt{X^2+Y^2}$ 优先看 $X^2+Y^2$ 的分布，并注意归一化常数。


> 来源：《26_李林六套卷（数一）》卷二 第 22 题
