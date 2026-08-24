---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - PS
  - 26_李林六套卷/卷四/FRQ
  - 计算题
  - 最大似然估计
  - 相关系数
  - 正态分布
  - 样本方差
  - 独立样本
points:
level:
---

# 解答题 第 22 题

![[_Attachments/题目识别/LL6T/LL6T-S4-Q22_题目.png|题目]]

设随机变量 $X$ 与 $Y$ 相互独立，且服从同一分布 $N\left(\mu, \frac{\sigma^2}{2}\right)$，其中 $\sigma(\sigma>0)$ 是未知参数，记 $Z = X - Y$.

(I) 若 $Z_1, Z_2, \cdots, Z_{2n}(n \geq 2)$ 是总体 $Z$ 的简单随机样本，求 $\sigma^2$ 的最大似然估计量 $\widehat{\sigma^2}$;

(II) 记 $U = \sum_{i=1}^{n+1} Z_i, V = \sum_{i=n}^{2n} Z_i$，利用 (I) 的 $\widehat{\sigma^2}$，求相关系数 $\rho_{UV}$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S4-Q22_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(I) $\sigma^2$ 的最大似然估计量为
$$
\widehat{\sigma^2} = \frac{1}{2n} \sum_{i=1}^{2n} Z_i^2.
$$

(II) 相关系数为
$$
\rho_{UV} = \frac{2}{n+1}.
$$

关键给分点：
- 正确写出 $Z \sim N(0,\sigma^2)$；
- 正确构造似然函数并求导；
- 明确 $U,V$ 重叠项个数为 2；
- 用公式 $\rho = \frac{\operatorname{Cov}(U,V)}{\sqrt{\operatorname{Var}(U)\operatorname{Var}(V)}}$ 计算。

**解题切入点**

本题类似算法竞赛中的“随机变量线性组合与参数估计”套路。首先利用正态分布可加性得到 $Z$ 的分布，再用最大似然估计求方差；第二问只需计算线性组合的协方差与方差，注意重叠项即可。

**推演**

(I) 由于 $X,Y$ 独立且均服从 $N\left(\mu, \frac{\sigma^2}{2}\right)$，故
$$
Z = X - Y \sim N(0, \sigma^2)
$$
其密度为
$$
f(z;\sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{z^2}{2\sigma^2}\right).
$$
样本 $Z_1, Z_2, \ldots, Z_{2n}$ 的似然函数为
$$
L(\sigma^2) = \prod_{i=1}^{2n} f(z_i;\sigma^2) = (2\pi\sigma^2)^{-n} \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^{2n} z_i^2\right).
$$
对数似然：
$$
\ln L = -n\ln(2\pi) - n\ln(\sigma^2) - \frac{1}{2\sigma^2} \sum_{i=1}^{2n} z_i^2.
$$
对 $\sigma^2$ 求导并令其为零：
$$
\frac{\mathrm{d} \ln L}{\mathrm{d} \sigma^2} = -\frac{n}{\sigma^2} + \frac{1}{2\sigma^4} \sum_{i=1}^{2n} z_i^2 = 0,
$$
解得
$$
\widehat{\sigma^2} = \frac{1}{2n} \sum_{i=1}^{2n} Z_i^2.
$$

(II) 记 $U = \sum_{i=1}^{n+1} Z_i$，$V = \sum_{i=n}^{2n} Z_i$。由于 $Z_i$ 独立且 $E(Z_i)=0$，故
$$
\operatorname{Cov}(U,V) = \operatorname{Cov}\left(\sum_{i\in A} Z_i, \sum_{j\in B} Z_j\right) = \sigma^2 |A \cap B|,
$$
其中 $A = \{1,2,\ldots,n+1\}$，$B = \{n, n+1, \ldots, 2n\}$。交集 $A \cap B = \{n, n+1\}$，故 $|A \cap B| = 2$，所以
$$
\operatorname{Cov}(U,V) = 2\sigma^2.
$$
又 $U,V$ 均包含 $n+1$ 个独立随机变量，故
$$
\operatorname{Var}(U) = (n+1)\sigma^2, \quad \operatorname{Var}(V) = (n+1)\sigma^2.
$$
因此
$$
\rho_{UV} = \frac{\operatorname{Cov}(U,V)}{\sqrt{\operatorname{Var}(U)\operatorname{Var}(V)}} = \frac{2\sigma^2}{(n+1)\sigma^2} = \frac{2}{n+1}.
$$

**易错点**

- 容易把样本量误认为 $n$，而本题是 $2n$ 个样本；
- 忘记 $Z$ 的均值为 $0$，导致最大似然估计写成带样本均值的式子；
- 求 $\rho$ 时忽略 $U,V$ 的重叠项，或错算重叠项个数；
- 混淆 $U,V$ 中各自包含的项数，导致方差计算错误。

**命题规律**

本题是典型的“正态总体参数估计 + 线性组合相关性”综合题。命题人常将最大似然估计与相关系数结合，考查对独立性和协方差基本运算的掌握。复习时应熟练记忆正态随机变量的线性组合分布，以及最大似然估计的通用步骤（构造似然、取对数、求导、解方程）。注意细节如样本量、重叠项个数等，此类题目难度不大但极易出错。


> 来源：《26_李林六套卷（数一）》卷四 第 22 题
