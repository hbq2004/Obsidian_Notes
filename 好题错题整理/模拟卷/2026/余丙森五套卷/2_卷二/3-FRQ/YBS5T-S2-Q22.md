---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - PS
  - 26_余丙森五套卷/卷二/FRQ
  - 综合题
  - 最大似然估计
  - 密度函数归一性
  - 分段概率事件化简
  - 最大似然估计不变性
points:
level:
---

# FRQ 第 22 题

![[_Attachments/题目识别/YBS5T/YBS5T-S2-Q22_题目.png|题目]]

设总体 $X$ 的概率密度为
$$
f(x)=\begin{cases} ax, & 0 \leqslant x < 2, \\ \frac{b}{x}, & 2 \leqslant x \leqslant 4, \\ 0, & \text{其他}, \end{cases}
$$
其中正数 $a, b$ 均未知，且样本观察值为 $\frac{3}{2}, \frac{12}{5}, \frac{1}{3}, \frac{4}{5}, \frac{8}{3}, \frac{5}{2}, \frac{3}{4}, \frac{5}{4}$.

(1) 分别求 $a, b$ 的最大似然估计值 $\hat{a}, \hat{b}$;

(2) 令
$$
Y=\begin{cases} 2X+1, & X \leqslant 1, \\ 4-X, & 1 < X < 3, \\ 2X-5, & X \geqslant 3, \end{cases}
$$
求 $p = P\left\{ Y \geqslant \frac{1}{4} X^2 + 1 \right\}$ 的最大似然估计值 $\hat{p}$.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S2-Q22_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(1) 由密度归一性：
$$1=\int_0^2 ax\,dx+\int_2^4 \frac{b}{x}\,dx=2a+b\ln 2.$$

样本中落入 $[0,2)$ 的观察值有 5 个，落入 $[2,4]$ 的观察值有 3 个，且
$$\prod_{x_i<2}x_i=\frac{3}{8},\qquad \prod_{x_i\ge2}\frac{1}{x_i}=\frac{1}{16}.$$

所以似然函数
$$L(a,b)=\left(\frac{3}{8}\right)a^5\left(\frac{1}{16}\right)b^3=\frac{3}{128}a^5b^3.$$

令 $b=(1-2a)/\ln2$，则
$$\ell(a)=\ln\frac{3}{128}+5\ln a+3\ln(1-2a)-3\ln(\ln2),$$
$$\ell'(a)=\frac{5}{a}-\frac{6}{1-2a}=0\Rightarrow a=\frac{5}{16}.$$

于是
$$b=\frac{1-2\cdot5/16}{\ln2}=\frac{3}{8\ln2}.$$

故
$$\hat a=\frac{5}{16},\qquad \hat b=\frac{3}{8\ln2}.$$

关键给分点：密度归一性 1 分；似然函数 2 分；约束下求导得解 3 分；第二问事件化简 3 分；最终 $\hat p=5/8$ 1 分。

(2) 设 $g(x)=\frac{1}{4}x^2+1$，分段化简：
- $0\le X\le1$：$2X+1\ge g(X)\iff X(8-X)\ge0$，在 $[0,1]$ 上恒成立；
- $1<X<3$：$4-X\ge g(X)\iff (X+6)(X-2)\le0\iff X\le2$，故该段中只取 $1<X\le2$；
- $X\ge3$：$2X-5\ge g(X)\iff X^2-8X+24\le0$，判别式 $<0$，无解。

因此
$$p=P\{Y\ge \frac{1}{4}X^2+1\}=P\{0\le X\le2\} =\int_0^2 ax\,dx=2a.$$

由最大似然估计的不变性，
$$\hat p=2\hat a=2\cdot\frac{5}{16}=\frac{5}{8}.$$

**解题切入点**

本题可类比算法竞赛中的“带约束最优化 + 分段逻辑判断”：第(1)问先列似然函数，再用归一化约束消元；第(2)问不要硬算 $Y$ 的分布，先把事件 $Y\ge\frac{1}{4}X^2+1$ 化简成关于 $X$ 的区间，最后用 $p=2a$ 与 MLE 不变性求解。

**推演**

(1) 密度正则性要求：
$$\int_{-\infty}^{+\infty}f(x)\,dx=\int_0^2 ax\,dx+\int_2^4\frac{b}{x}\,dx=1,$$
得 $2a+b\ln2=1$。

样本中前一段 $[0,2)$ 有 5 个，后一段 $[2,4]$ 有 3 个；代入密度相乘得
$$L(a,b)=a^5b^3\cdot\left(\frac{3}{2}\cdot\frac{1}{3}\cdot\frac{4}{5}\cdot\frac{3}{4}\cdot\frac{5}{4}\right)\cdot\left(\frac{5}{12}\cdot\frac{3}{8}\cdot\frac{2}{5}\right)=\frac{3}{128}a^5b^3.$$

用约束消去 $b$：$b=(1-2a)/\ln2$，故
$$\ell(a)=\ln\frac{3}{128}+5\ln a+3\ln(1-2a)-3\ln(\ln2).$$
求导：
$$\ell'(a)=\frac{5}{a}-\frac{6}{1-2a}.$$
令 $\ell'(a)=0$，得 $5(1-2a)=6a$，所以 $a=5/16$。又
$$\ell''(a)=-\frac{5}{a^2}-\frac{12}{(1-2a)^2}<0,$$
且端点 $a\to0^+$ 或 $a\to(1/2)^-$ 时 $\ell\to-\infty$，故为全局最大。代回得 $b=3/(8\ln2)$。

回代检验：$2\hat a+\hat b\ln2=2\cdot\frac{5}{16}+\frac{3}{8\ln2}\cdot\ln2=\frac{5}{8}+\frac{3}{8}=1$。

(2) 令 $g(x)=\frac{1}{4}x^2+1$。

当 $0\le X\le1$ 时，$Y=2X+1$，
$$2X+1\ge g(X)\iff 2X\ge\frac{1}{4}X^2\iff X(8-X)\ge0,$$
在 $[0,1]$ 上恒成立。

当 $1<X<3$ 时，$Y=4-X$，
$$4-X\ge g(X)\iff X^2+4X-12\le0\iff (X+6)(X-2)\le0\iff X\le2,$$
所以取 $1<X\le2$。

当 $X\ge3$ 时，$Y=2X-5$，
$$2X-5\ge g(X)\iff X^2-8X+24\le0,$$
判别式 $\Delta=64-96=-32<0$，无解。

综上，$Y\ge\frac{1}{4}X^2+1\iff 0\le X\le2$（单点不影响概率），故
$$p=P(0\le X\le2)=\int_0^2 ax\,dx=2a.$$

由MLE不变性，$\hat p=2\hat a=5/8$。

**易错点**

- 忘记密度归一化约束 $2a+b\ln2=1$，会把 $a,b$ 误当独立自由参数。
- 似然函数中的样本常数 $3/128$ 要仔细算，漏乘或分子分母颠倒会错。
- 对 $\ln(1-2a)$ 求导时，链式法则容易漏掉因子 $-2$。
- 第二问直接求 $Y$ 的分布会走弯路，应先化简随机事件。
- 分段点 $X=2$ 的等号不影响概率，但不等式化简中要写清。

**命题规律**

本题是典型“分段密度 + 最大似然估计 + 随机事件概率”的综合题。考研中常先用归一化给出参数约束，再构造似然函数；第二问则利用随机变量函数的分段表达式化简概率，最后用 MLE 不变性。复习时应熟练“有条件最优化”的求法，并养成先化简事件再积分的习惯。


> 来源：《26_余丙森五套卷（数一）》卷二 第 22 题
