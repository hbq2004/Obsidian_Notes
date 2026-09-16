---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - χ²分布
  - F分布
  - 正态总体抽样分布
  - 两独立样本方差比
points:
level:
---

# MCQ 第 521 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q521_题目.png|题目]]

521 设 $X_1,X_2,\cdots,X_n$ 为来自总体 $N(\mu_1,\sigma^2)$ 的简单随机样本，$Y_1,Y_2,\cdots,Y_n$ 为来自总体 $N(\mu_2,2\sigma^2)$ 的简单随机样本，且两样本相互独立，记 $\overline{X}=\frac{1}{n}\sum_{i=1}^n X_i,\overline{Y}=\frac{1}{n}\sum_{i=1}^n Y_i,$
$S_1^2=\frac{1}{n-1}\sum_{i=1}^n (X_i-\overline{X})^2,\quad S_2^2=\frac{1}{n-1}\sum_{i=1}^n (X_i-\mu_1)^2,$
$S_3^2=\frac{1}{n-1}\sum_{i=1}^n (Y_i-\overline{Y})^2,\quad S_4^2=\frac{1}{n-1}\sum_{i=1}^n (Y_i-\mu_2)^2,$
则下列结论中错误的是( ).
(A) $\frac{2S_1^2}{S_3^2}\sim F(n-1,n-1)$
(B) $\frac{2S_2^2}{S_4^2}\sim F(n,n)$
(C) $\frac{2S_1^2}{S_4^2}\sim F(n-1,n)$
(D) $\frac{2S_2^2}{S_3^2}\cdot\frac{n-1}{n}\sim F(n,n-1)$

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 (C)。因为 $\frac{2S_1^2}{S_4^2}$ 相当于 $\chi^2(n-1)$ 与 $\chi^2(n)$ 的未按自由度修正之比，正确的 $F(n-1,n)$ 统计量应为 $\frac{2n}{n-1}\frac{S_1^2}{S_4^2}$，故 (C) 错误。

**解题切入点**：拿到题先不要硬代，先做“类型识别”：下标中用 $\overline X,\overline Y$ 的是样本方差，对应自由度减 1；下标中直接用 $\mu_1,\mu_2$ 的是已知均值平方和，对应自由度不减 1。就像算法竞赛中先看数据范围和输入类型，再决定用哪套模板；这里就是先判自由度，再套 $F$ 分布模板。

**推演**：由正态总体抽样分布基本结论，记
$$
P=\frac{\sum_{i=1}^n(X_i-\overline X)^2}{\sigma^2}\sim \chi^2(n-1),\qquad
Q=\frac{\sum_{i=1}^n(Y_i-\overline Y)^2}{2\sigma^2}\sim \chi^2(n-1),
$$
$$
U=\frac{\sum_{i=1}^n(X_i-\mu_1)^2}{\sigma^2}\sim \chi^2(n),\qquad
V=\frac{\sum_{i=1}^n(Y_i-\mu_2)^2}{2\sigma^2}\sim \chi^2(n).
$$

由于两样本相互独立，含 $X_i$ 的统计量与含 $Y_i$ 的统计量独立，因此下列构造的 $F$ 统计量分子分母均独立。

选项 (A)：
$$
S_1^2=\frac{\sigma^2P}{n-1},\qquad S_3^2=\frac{2\sigma^2Q}{n-1},
$$
所以
$$
\frac{2S_1^2}{S_3^2}
=\frac{P}{Q}
=\frac{P/(n-1)}{Q/(n-1)}
\sim F(n-1,n-1).
$$
故 (A) 正确。

选项 (B)：
$$
S_2^2=\frac{\sigma^2U}{n-1},\qquad S_4^2=\frac{2\sigma^2V}{n-1},
$$
所以
$$
\frac{2S_2^2}{S_4^2}
=\frac{U}{V}
=\frac{U/n}{V/n}
\sim F(n,n).
$$
故 (B) 正确。

选项 (C)：
$$
S_1^2=\frac{\sigma^2P}{n-1},\qquad S_4^2=\frac{2\sigma^2V}{n-1},
$$
所以
$$
\frac{2S_1^2}{S_4^2}=\frac{P}{V}.
$$
但 $\frac{P}{V}$ 不是 $F$ 分布，正确的 $F(n-1,n)$ 统计量应为
$$
\frac{P/(n-1)}{V/n}
=\frac{n}{n-1}\cdot\frac{P}{V}
=\frac{2n}{n-1}\cdot\frac{S_1^2}{S_4^2}
\sim F(n-1,n).
$$
故 (C) 中缺少因子 $\frac{n}{n-1}$，错误。

选项 (D)：
$$
S_2^2=\frac{\sigma^2U}{n-1},\qquad S_3^2=\frac{2\sigma^2Q}{n-1},
$$
所以
$$
\frac{2S_2^2}{S_3^2}=\frac{U}{Q}.
$$
于是
$$
\frac{2S_2^2}{S_3^2}\cdot\frac{n-1}{n}
=\frac{U/n}{Q/(n-1)}
\sim F(n,n-1).
$$
故 (D) 正确。

因此错误的是 (C)。

**易错点**：

- 把 $S_2^2,S_4^2$ 的分母 $n-1$ 误认为自由度。已知总体均值时，$\sum(X_i-\mu)^2/\sigma^2\sim\chi^2(n)$，自由度是 $n$，不是 $n-1$。
- 把两个 $\chi^2$ 变量之比直接当成 $F$ 分布。正确形式是
$$
\frac{\chi_m^2/m}{\chi_n^2/n}\sim F(m,n),
$$
而不是 $\frac{\chi_m^2}{\chi_n^2}$。
- 忽略 $Y$ 总体方差为 $2\sigma^2$ 带来的系数影响，导致忘记乘或除相应的因子。
- 忽略独立性。若两样本不独立，则不能随便构造 $F$ 统计量；本题中两样本独立，条件满足。

**命题规律**：本题属于数一“正态总体的抽样分布”中的经典考点，重点考查 $\chi^2$ 分布与 $F$ 分布的构造，尤其区分“已知均值”与“样本均值”对自由度的影响。常见变式有：把两个总体方差比改为一般比例 $\sigma_1^2:\sigma_2^2$，或考察 $t$ 分布。复习时应熟记
$$
\frac{(n-1)S^2}{\sigma^2}\sim\chi^2(n-1),\qquad
\frac{\sum_{i=1}^n(X_i-\mu)^2}{\sigma^2}\sim\chi^2(n),
$$
并严格按 $F$ 分布的定义配自由度与系数。

**知识点**：$\chi^2$ 分布、$F$ 分布、正态总体抽样分布、两独立样本的方差比

---

> 来源：方浩概率统计进阶500题做题本 第192页 · C组
