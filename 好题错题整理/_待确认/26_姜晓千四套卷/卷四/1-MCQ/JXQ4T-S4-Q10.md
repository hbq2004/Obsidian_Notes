---
ctime: 2026-08-23 23:04:13
mtime: 2026-08-23 23:04:13
tags:
  - PS
  - 26_姜晓千四套卷/卷四/MCQ
  - 概念题
  - 正态总体抽样分布
  - 无偏估计
  - 卡方分布
  - 完备充分统计量
  - 最小方差无偏估计
points:
level:
---

# MCQ 第 10 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S4-Q10_题目.png|题目]]

设 $X_1, X_2, \cdots, X_n$ ($n>1$) 为来自总体 $X \sim N(0, \sigma^2)$ 的简单随机样本, $\bar{X}$ 与 $S^2$ 分别为样本均值与样本方差, 则下列统计量为 $\sigma^2$ 的无偏估计且方差最小的是 ( ) .
(A) $X_1^2$
(B) $\bar{X}^2$
(C) $S^2$
(D) $\frac{1}{n}\sum_{i=1}^{n}X_i^2$

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S4-Q10_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(D)

$D=\frac1n\sum_{i=1}^nX_i^2$ 是 $\sigma^2$ 的无偏估计，且方差在所给选项中最小（实为 UMVUE）。

**解题切入点**

考查正态总体参数估计的无偏性与有效性。类似算法竞赛中先排除不合法状态，再在合法状态中取最优：这里“合法”=无偏，“最优”=方差最小。

**推演**

由于 $X_i\sim N(0,\sigma^2)$，$n>1$：

1. 对选项 (A)：$X_1^2/\sigma^2\sim\chi_1^2$，故 $E(X_1^2)=\sigma^2$，$\operatorname{Var}(X_1^2)=2\sigma^4$。它无偏，但只用了一个样本，方差较大。

2. 对选项 (B)：$\bar X\sim N(0,\sigma^2/n)$，所以 $E(\bar X^2)=\operatorname{Var}(\bar X)=\sigma^2/n\neq\sigma^2$，不是无偏估计，排除。

3. 对选项 (C)：按考研常规，$S^2=\frac1{n-1}\sum_{i=1}^n(X_i-\bar X)^2$，有 $(n-1)S^2/\sigma^2\sim\chi_{n-1}^2$，故 $E(S^2)=\sigma^2$，$\operatorname{Var}(S^2)=2\sigma^4/(n-1)$。无偏但方差比 (D) 大。

4. 对选项 (D)：令 $T=\sum_{i=1}^nX_i^2$，则 $T/\sigma^2\sim\chi_n^2$。因此 $E(D)=E(T/n)=\sigma^2$，$\operatorname{Var}(D)=\frac{\sigma^4}{n^2}\cdot 2n=\frac{2\sigma^4}{n}$。比较：
$$
\operatorname{Var}(D)=\frac{2\sigma^4}{n}<\frac{2\sigma^4}{n-1}=\operatorname{Var}(S^2),\quad n>1,
$$
且 $2\sigma^4/n<2\sigma^4=\operatorname{Var}(X_1^2)$。

进一步，由 $N(0,\sigma^2)$ 样本联合密度可知 $T=\sum X_i^2$ 是 $\sigma^2$ 的完备充分统计量，$D=T/n$ 是其无偏函数，依 Lehmann-Scheffé 定理，$D$ 是 $\sigma^2$ 的 UMVUE，所以方差最小。故 (D) 正确。

**易错点**

- 误以为 $S^2$ 是最小方差无偏估计：虽然 $S^2$ 无偏，但它不是充分统计量 $T$ 的函数，方差不是最小。
- 容易漏掉 $E(\bar X^2)=\sigma^2/n$，把样本均值的平方误当成 $\sigma^2$ 的无偏估计。
- 注意比较方差时使用 $\chi^2$ 分布：$\operatorname{Var}(\chi_k^2)=2k$，不是 $k$。

**命题规律**

常把“无偏性”“有效性（方差最小）”“正态抽样分布”放在同一道选择题中，借 $\chi^2$ 分布计算方差，或用 Lehmann-Scheffé/UMVUE 判断。复习时应熟练掌握正态总体三大抽样分布、$S^2$ 与样本二阶矩的无偏性，并能由完备充分统计量快速定位 UMVUE。


> 来源：《26_姜晓千四套卷（数一）》卷四 第 10 题
