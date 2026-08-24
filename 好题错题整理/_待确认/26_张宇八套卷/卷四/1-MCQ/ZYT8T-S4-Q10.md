---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - PS
  - 26_张宇八套卷/卷四/MCQ
  - 计算题
  - 样本方差分布
  - 卡方分布
  - 方差计算
  - 无偏估计比较
points:
level:
---

# MCQ 第 10 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S4-Q10_题目.png|题目]]

设 $X,Y$ 独立同分布于 $N(0,\sigma^2)$，$X_1,\dots,X_9$ 与 $Y_1,\dots,Y_{11}$ 是分别来自总体 $X$ 与 $Y$ 的简单随机样本，样本方差分别为 $S_X^2$ 与 $S_Y^2$，记 $S_1^2 = \frac{1}{2}(S_X^2 + S_Y^2)$，$S_2^2 = \frac{1}{9}(4S_X^2 + 5S_Y^2)$，则方差最小的是.
(A). $S_X^2$.
(B). $S_Y^2$.
(C). $S_1^2$.
(D). $S_2^2$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S4-Q10_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(D)

【推演】选项A: $S_X^2$方差为$\sigma^4/4=0.25\sigma^4$；选项B: $S_Y^2$方差为$\sigma^4/5=0.2\sigma^4$；选项C: $S_1^2$方差为$9\sigma^4/80\approx0.1125\sigma^4$；选项D: $S_2^2$方差为$\sigma^4/9\approx0.1111\sigma^4$。经比较，D的方差最小。故答案选D。

**解题切入点**

本题考察正态总体样本方差的分布及方差，利用卡方分布性质计算方差，比较无偏估计的有效性。类比算法竞赛：已知两个独立随机变量的方差，求线性组合的方差最小化，类似于加权平均的最优权重选取。

**推演**

设总体$X,Y\sim N(0,\sigma^2)$，样本容量$n_1=9,n_2=11$。样本方差$S_X^2,S_Y^2$独立，且满足：
$(n_1-1)S_X^2/\sigma^2\sim\chi^2(n_1-1)$，$(n_2-1)S_Y^2/\sigma^2\sim\chi^2(n_2-1)$。

由卡方分布方差公式：$\mathrm{Var}(\chi^2_k)=2k$，得：
$\mathrm{Var}((n_1-1)S_X^2/\sigma^2)=2(n_1-1)\Rightarrow\mathrm{Var}(S_X^2)=2\sigma^4/(n_1-1)=2\sigma^4/8=\sigma^4/4$。
同理，$\mathrm{Var}(S_Y^2)=2\sigma^4/(n_2-1)=2\sigma^4/10=\sigma^4/5$。

计算$S_1^2=(S_X^2+S_Y^2)/2$的方差：
$\mathrm{Var}(S_1^2)=\frac14[\mathrm{Var}(S_X^2)+\mathrm{Var}(S_Y^2)]=\frac14(\sigma^4/4+\sigma^4/5)=\frac14\cdot\frac{9\sigma^4}{20}=9\sigma^4/80$。

计算$S_2^2=(4S_X^2+5S_Y^2)/9$的方差：
$\mathrm{Var}(S_2^2)=\frac1{81}[16\mathrm{Var}(S_X^2)+25\mathrm{Var}(S_Y^2)]=\frac1{81}(16\cdot\sigma^4/4+25\cdot\sigma^4/5)=\frac1{81}(4\sigma^4+5\sigma^4)=9\sigma^4/81=\sigma^4/9$。

比较：$\sigma^4/4=0.25\sigma^4$，$\sigma^4/5=0.2\sigma^4$，$9\sigma^4/80\approx0.1125\sigma^4$，$\sigma^4/9\approx0.1111\sigma^4$。显然$S_2^2$方差最小，故选择(D)。

**易错点**

1. 混淆样本方差与总体方差，错用$\mathrm{Var}(S^2)=\sigma^4/n$等公式。正确公式：对于正态总体，样本方差$S^2$满足$\mathrm{Var}(S^2)=2\sigma^4/(n-1)$。
2. 忽略了样本方差独立性的条件，直接使用线性组合方差公式。
3. 计算时系数错误，如$S_2^2$的系数平方时漏乘。

**命题规律**

常见于无偏估计量的有效性比较，给定样本方差的不同线性组合，考察方差计算与比较。解题关键在于熟记样本方差的分布及方差，并灵活运用方差性质。复习时应重点掌握正态总体下样本均值、样本方差的分布，以及卡方分布、t分布、F分布的性质。


> 来源：《26_张宇八套卷（数一）》卷四 第 10 题
