---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - PS
  - 26_姜晓千四套卷/卷二/FRQ
  - 计算题
  - 矩估计
  - 最大似然估计
  - 无偏性
  - 正态总体抽样分布
  - 样本均值与样本方差
points:
level:
---

# FRQ 第 22 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S2-Q22_题目.png|题目]]

设 $X_1, X_2, \cdots, X_n$ 为来自总体 $X \sim N(\mu, \sigma^2)$ 的简单随机样本，其中 $\mu, \sigma^2$ 为未知参数.

(I) 求 $\mu$ 与 $\sigma^2$ 的矩估计量;

(II) 求 $\mu$ 与 $\sigma^2$ 的最大似然估计量;

(III) 讨论上述估计量的无偏性.

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S2-Q22_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

- 矩估计量：
$$
\hat\mu_M=\bar X=\frac1n\sum_{i=1}^n X_i,\qquad
\hat\sigma_M^2=\frac1n\sum_{i=1}^n X_i^2-\bar X^2
=\frac1n\sum_{i=1}^n (X_i-\bar X)^2.
$$

- 最大似然估计量：
$$
\hat\mu_{ML}=\bar X,\qquad
\hat\sigma_{ML}^2=\frac1n\sum_{i=1}^n (X_i-\bar X)^2.
$$

- 无偏性：
$$
E(\hat\mu_M)=E(\hat\mu_{ML})=\mu,
$$
所以 $\hat\mu$ 是无偏的。
$$
E(\hat\sigma_M^2)=E(\hat\sigma_{ML}^2)=\frac{n-1}{n}\sigma^2\neq\sigma^2,
$$
所以矩估计量/最大似然估计量的 $\sigma^2$ 估计是有偏的；若改用
$$
S^2=\frac1{n-1}\sum_{i=1}^n (X_i-\bar X)^2
$$
则 $E(S^2)=\sigma^2$，是 $\sigma^2$ 的无偏估计。

**关键给分点**：矩方程；似然函数/对数似然；求导置零；$\mu$ 的无偏性；$\sigma^2$ 的期望为 $\frac{n-1}{n}\sigma^2$。

**解题切入点**

矩估计就是“用样本矩去匹配总体矩”：本题只需一阶矩、二阶矩。最大似然估计就是写出联合密度（似然函数），取对数后求导置零；类似算法竞赛中先构造目标函数再优化。关键在于识别 $\mu$ 的 MLE 是样本均值，$\sigma^2$ 的 MLE 是（有偏的）样本二阶中心矩。

**推演**

（1）矩估计。

因 $X\sim N(\mu,\sigma^2)$，有
$$
E(X)=\mu,\qquad E(X^2)=\mu^2+\sigma^2.
$$
令样本矩等于总体矩：
$$
\frac1n\sum_{i=1}^n X_i=E(X),\qquad
\frac1n\sum_{i=1}^n X_i^2=E(X^2).
$$
于是
$$
\hat\mu=\bar X,
$$
且
$$
\hat\sigma^2=\frac1n\sum_{i=1}^n X_i^2-\bar X^2
=\frac1n\sum_{i=1}^n(X_i-\bar X)^2.
$$

（2）最大似然估计。

似然函数为
$$
L(\mu,\sigma^2)=\prod_{i=1}^n\frac1{\sqrt{2\pi\sigma^2}}
\exp\left[-\frac{(X_i-\mu)^2}{2\sigma^2}\right]
=(2\pi\sigma^2)^{-n/2}
\exp\left[-\frac1{2\sigma^2}\sum_{i=1}^n(X_i-\mu)^2\right].
$$
对数似然：
$$
\ell(\mu,\sigma^2)=-\frac n2\ln(2\pi)-\frac n2\ln(\sigma^2)
-\frac1{2\sigma^2}\sum_{i=1}^n(X_i-\mu)^2.
$$
对 $\mu$ 求偏导：
$$
\frac{\partial\ell}{\partial\mu}
=\frac1{\sigma^2}\sum_{i=1}^n(X_i-\mu).
$$
令其为 0，得
$$
\hat\mu=\bar X.
$$
再将 $\hat\mu=\bar X$ 代入，对 $\sigma^2$ 求偏导：
$$
\frac{\partial\ell}{\partial\sigma^2}
=-\frac n{2\sigma^2}
+\frac1{2\sigma^4}\sum_{i=1}^n(X_i-\mu)^2.
$$
令其为 0，得
$$
\hat\sigma^2=\frac1n\sum_{i=1}^n(X_i-\bar X)^2.
$$
所以最大似然估计量为
$$
\hat\mu_{ML}=\bar X,\qquad
\hat\sigma_{ML}^2=\frac1n\sum_{i=1}^n(X_i-\bar X)^2.
$$

（3）无偏性。

由 $\bar X=\frac1n\sum X_i$，
$$
E(\bar X)=\frac1n\sum E(X_i)=\mu,
$$
故 $\bar X$ 是 $\mu$ 的无偏估计。

计算 $\sigma^2$ 估计量的期望。令
$$
Q=\sum_{i=1}^n(X_i-\bar X)^2.
$$
由正态总体抽样分布，
$$
\frac{Q}{\sigma^2}\sim\chi^2(n-1),
$$
因此
$$
E(Q)=(n-1)\sigma^2.
$$
故
$$
E(\hat\sigma_M^2)=E(\hat\sigma_{ML}^2)
=E\left(\frac{Q}{n}\right)=\frac{n-1}{n}\sigma^2.
$$
因为 $\frac{n-1}{n}<1$，所以 $\hat\sigma_M^2,\hat\sigma_{ML}^2$ 都不是 $\sigma^2$ 的无偏估计，而是偏小的有偏估计。若取 $S^2=Q/(n-1)$，则 $E(S^2)=\sigma^2$。

**易错点**

1. 矩估计中不能写成 $\frac1n\sum(X_i-\mu)^2$，因为 $\mu$ 未知；要先由一阶矩得到 $\bar X$，再算二阶中心矩。
2. MLE 求 $\sigma^2$ 时需要先解出 $\hat\mu=\bar X$，再代回似然函数求导；不要对 $\sigma^2$ 求导时仍把 $\mu$ 当作已知常数。
3. 注意 $Q/\sigma^2\sim\chi^2(n-1)$ 而不是 $\chi^2(n)$；这是 $\bar X$ 代替 $\mu$ 损失一个自由度的结果。
4. 无偏性讨论中，$\frac1n\sum(X_i-\bar X)^2$ 有偏，无偏估计的分母应为 $n-1$。不要只回答“MLE 是 $\frac1n$，矩估计也是 $\frac1n$”而忽略偏差。

**命题规律**

本题是参数估计中的高频基础题：矩估计、MLE、无偏性“三件套”。正态总体下矩估计与 MLE 的 $\mu,\sigma^2$ 估计量通常相同；无偏性常借助 $\chi^2$ 分布或期望展开考查。复习时应熟练掌握：样本矩与总体矩的对应、对数似然求导、$E(\bar X)=\mu$、$E(Q)=(n-1)\sigma^2$。这类题步骤固定，拿分关键是写清分母 $n$ 与 $n-1$ 的区别。


> 来源：《26_姜晓千四套卷（数一）》卷二 第 22 题
