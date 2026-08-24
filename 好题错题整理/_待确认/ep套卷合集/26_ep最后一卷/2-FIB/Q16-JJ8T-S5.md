---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-20 01:32:04
tags:
  - PS
  - 26_ep最后一卷/套五/FIB
  - 计算题
  - 相关系数计算
  - 协方差性质
  - 二维正态分布
  - 条件期望
  - 示性函数
points:
level:
---

# FIB 第 16 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q16_题目.png|题目]]

16. 设随机变量 $X, Y$ 均服从 $N(0, 1)$，且相互独立，随机变量 $Z = \begin{cases} 1, & X > 2Y, \\ 0, & X \leq 2Y, \end{cases}$，则 $X$ 与 $Z$ 的相关系数是 \_ .


---

## DeepSeek V4 Flash Max

【考点】本题考查随机变量相关系数的计算，核心是求解 $X$ 与示性函数 $Z=I(X>2Y)$ 的协方差。可类比算法竞赛中的“期望线性性 + 条件期望”技巧：先把复杂期望分解，再利用正态分布的条件期望化简。

【解】设 $W = X - 2Y$。由于 $X,Y$ 独立且均服从 $N(0,1)$，故 $W \sim N(0, 1^2 + (-2)^2) = N(0,5)$。且 $Z = I(W>0)$。

计算 $\mathrm{Cov}(X,Z) = E[XZ] - E[X]E[Z]$。因 $E[X]=0$，故 $\mathrm{Cov}(X,Z)=E[XZ]$。

先求 $E[XZ] = E[X I(W>0)]$。利用条件期望：
$$
E[X I(W>0)] = E\left[ E[X I(W>0) \mid W] \right] = E\left[ I(W>0) E[X \mid W] \right].
$$
考察 $(X,W)$ 的联合分布。因 $W = X-2Y$，且 $X,Y$ 独立，故 $(X,W)$ 服从二维正态分布。均值均为0，方差分别为 $\mathrm{Var}(X)=1$，$\mathrm{Var}(W)=5$，协方差为
$$
\mathrm{Cov}(X,W) = \mathrm{Cov}(X, X-2Y) = \mathrm{Cov}(X,X)-2\mathrm{Cov}(X,Y) = 1 - 0 = 1.
$$
相关系数 $\rho_{XW} = \frac{1}{\sqrt{1\cdot 5}} = \frac{1}{\sqrt5}$。由二维正态条件期望公式：
$$
E[X \mid W] = \rho_{XW} \frac{\sigma_X}{\sigma_W} W = \frac{1}{\sqrt5} \cdot \frac{1}{\sqrt5} W = \frac{W}{5}.
$$
因此
$$
E[XZ] = E\left[ I(W>0) \frac{W}{5} \right] = \frac{1}{5} E[W I(W>0)].
$$
由于 $W \sim N(0,5)$，其密度为 $f_W(w) = \frac{1}{\sqrt{10\pi}} e^{-w^2/10}$，故
$$
E[W I(W>0)] = \int_0^\infty w \cdot \frac{1}{\sqrt{10\pi}} e^{-w^2/10} \, dw.
$$
计算积分：令 $t = w^2/10$，则 $dw = \frac{10}{2\sqrt{10t}}?$ 更直接利用公式 $\int_0^\infty w e^{-a w^2} dw = \frac{1}{2a}$，此处 $a=1/10$，得
$$
\int_0^\infty w e^{-w^2/10} dw = \frac{1}{2 \cdot (1/10)} = 5.
$$
所以 $E[W I(W>0)] = \frac{1}{\sqrt{10\pi}} \cdot 5 = \frac{5}{\sqrt{10\pi}}$。

于是 $E[XZ] = \frac{1}{5} \cdot \frac{5}{\sqrt{10\pi}} = \frac{1}{\sqrt{10\pi}}$。

又 $E[Z] = P(Z=1) = P(X>2Y) = P(W>0) = \frac{1}{2}$，故 $\mathrm{Var}(Z) = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$。

因此
$$
\rho_{XZ} = \frac{\mathrm{Cov}(X,Z)}{\sqrt{\mathrm{Var}(X)\mathrm{Var}(Z)}} = \frac{1/\sqrt{10\pi}}{\sqrt{1 \cdot 1/4}} = \frac{2}{\sqrt{10\pi}}.
$$

【答案】
$$
\boxed{\frac{2}{\sqrt{10\pi}}}
$$

【易错点】易错点包括：①忘记 $E[X]E[Z]$ 项，但此题 $E[X]=0$ 不影响；②将 $Z$ 的方差算成 $1/2$ 而忽略期望为 $1/2$；③计算 $E[XZ]$ 时直接积分容易出错，应利用条件期望简化；④注意 $W$ 的方差为 $5$，不是 $3$。

【命题规律】本题属于概率论中的综合计算题，常见套路是构造正态变量的线性组合，利用条件期望处理示性函数，再求相关系数。复习时需熟练掌握二维正态分布的条件期望公式、协方差性质以及二值随机变量的方差计算。

---

## V4 Flash Max 解析

**答案**：$\rho_{XZ} = \sqrt{\frac{2}{5\pi}} = \frac{2}{\sqrt{10\pi}}$（约为 $0.357$）。

**解题切入点**：$Z$ 是 0-1 变量，所以求相关系数只需算 $E[XZ]$、$E[Z]$、$\mathrm{Var}(Z)$。关键是算 $E[XZ]=E[X\mathbf 1_{\{X>2Y\}}]$。把阈值线换元成 $U=X-2Y$，事件变成 $U>0$，再用条件期望处理。这类似算法里的“换元降维”：把二维判断变成一维状态 $U>0$，再按分支合并。

**推演**：

令 $U=X-2Y$。因为 $X,Y$ 独立且均服从 $N(0,1)$，所以

$$
U\sim N(0,5),
$$

且

$$
\mathrm{Cov}(X,U)=\mathrm{Cov}(X,X-2Y)=\mathrm{Var}(X)-2\mathrm{Cov}(X,Y)=1.
$$

线性变换下 $(X,U)$ 仍为二维正态，因此由二维正态条件期望公式：

$$
E[X\mid U]=\frac{\mathrm{Cov}(X,U)}{\mathrm{Var}(U)}U=\frac15 U.
$$

又因

$$
Z=\mathbf 1_{\{X>2Y\}}=\mathbf 1_{\{U>0\}},
$$

所以

$$
E[XZ]
=E[X\mathbf 1_{\{U>0\}}]
=E\left[E[X\mathbf 1_{\{U>0\}}\mid U]\right]
=E\left[\mathbf 1_{\{U>0\}}E[X\mid U]\right].
$$

代入条件期望：

$$
E[XZ]=\frac15 E[U\mathbf 1_{\{U>0\}}].
$$

而

$$
E[U\mathbf 1_{\{U>0\}}]
=\int_0^\infty u\frac{1}{\sqrt{2\pi}\sqrt{5}}e^{-u^2/10}\,du
=\sqrt{\frac5{2\pi}},
$$

故

$$
E[XZ]=\frac15\sqrt{\frac5{2\pi}}
=\frac1{\sqrt{10\pi}}.
$$

又

$$
P(Z=1)=P(X>2Y)=P(U>0)=\frac12,
$$

所以

$$
E[Z]=\frac12,\qquad \mathrm{Var}(Z)=\frac12\left(1-\frac12\right)=\frac14.
$$

且 $E[X]=0,\ \mathrm{Var}(X)=1$，因此

$$
\mathrm{Cov}(X,Z)=E[XZ]-E[X]E[Z]=\frac1{\sqrt{10\pi}}.
$$

最终

$$
\rho_{XZ}
=\frac{\mathrm{Cov}(X,Z)}{\sqrt{\mathrm{Var}(X)}\sqrt{\mathrm{Var}(Z)}}
=\frac{1/\sqrt{10\pi}}{1/2}
=\frac{2}{\sqrt{10\pi}}
=\sqrt{\frac2{5\pi}}.
$$

**易错点**：

- 不要认为 $X$ 与 $Z$ 独立：$Z$ 的定义依赖 $X$，所以 $E[XZ]\neq E[X]E[Z]$。
- 不要把 $\mathrm{Var}(Z)$ 当成 $1$，$Z$ 是 Bernoulli 变量，$\mathrm{Var}(Z)=p(1-p)=1/4$。
- 条件期望公式中的系数是 $\frac{\mathrm{Cov}(X,U)}{\mathrm{Var}(U)}=\frac15$，漏掉这个系数会差 5 倍。
- 不要忘记最后除以 $\sqrt{\mathrm{Var}(Z)}=1/2$；$1/\sqrt{10\pi}$ 是协方差，不是相关系数。
- 自检：$\rho\approx0.357$，在 $[-1,1]$ 内；且 $X$ 越大，$P(Z=1\mid X=x)=P(Y<x/2)$ 越大，所以 $X$ 与 $Z$ 应正相关，符号一致。

**命题规律**：正态变量与阈值型 0-1 变量结合的相关系数是常见考点。核心是计算 $E[X\mathbf 1_{\{aX+bY>c\}}]$，通常做法是令 $U=aX+bY$，利用二维正态条件期望，或写成 $E[X\Phi(\cdot)]$ 后用分部积分。变式可换成 $Z=\mathbf 1_{\{X>Y\}}$、$Z=\mathbf 1_{\{X^2+Y^2\le 1\}}$ 等。记忆要点：二值化变量的相关系数，分母记得 $p(1-p)$，分子主要算半平面期望。
