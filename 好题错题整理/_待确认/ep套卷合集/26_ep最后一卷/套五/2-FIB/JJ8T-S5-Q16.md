---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
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

## 解析（AI 生成，仅供参考）

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

> AI 生成，仅供参考。

