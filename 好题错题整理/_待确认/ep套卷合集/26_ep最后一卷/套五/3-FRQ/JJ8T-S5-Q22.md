---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
tags:
  - PS
  - 26_ep最后一卷/套五/FRQ
  - 计算题
  - 矩估计法
  - 极大似然估计
  - 似然函数求导
  - 函数单调性
  - 边界极值
points:
level:
---

# FRQ 第 22 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q22_题目.png|题目]]

22. （本题满分 12 分）

已知随机变量 $X$ 的概率密度为 $f(x) = \begin{cases} \frac{1 + \theta x}{2}, & -1 \leq x \leq 1, \\ 0, & 其余, \end{cases} (\theta \geq 0)$，设 $X_1, X_2, \ldots, X_n$ 为来自总体 $X$ 的简单随机样本。

（1）求 $\theta$ 的矩估计量；

（2）若 $S = \sum\limits_{i=1}^{n} X_i < 0$，求 $\theta$ 的极大似然估计量 $\hat{\theta}$.


---

## 解析（AI 生成，仅供参考）

【考点】本题考查矩估计与极大似然估计，并与函数单调性结合。类似算法竞赛中在约束条件下求极值，需先分析函数单调性再取边界。

【解】
(1) 总体一阶矩：
$$ E(X)=\int_{-1}^{1}x\frac{1+\theta x}{2}dx =\frac{1}{2}\int_{-1}^{1}x dx+\frac{\theta}{2}\int_{-1}^{1}x^2 dx =0+\frac{\theta}{2}\cdot\frac{2}{3}=\frac{\theta}{3} $$
令样本均值 $\bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i$ 等于 $E(X)$，得
$$\bar{X}=\frac{\theta}{3}\Rightarrow \hat{\theta}_{M}=\theta_{矩}=3\bar{X}.$$

(2) 似然函数为
$$L(\theta)=\prod_{i=1}^{n}\frac{1+\theta X_i}{2}=\frac{1}{2^n}\prod_{i=1}^{n}(1+\theta X_i),\quad 0\le\theta\le1$$
（因密度非负需 $1+\theta x\ge0$ 对一切 $x\in[-1,1]$ 成立，故 $\theta\le1$。）

取对数：
$$\ell(\theta)=\ln L(\theta)=\sum_{i=1}^{n}\ln(1+\theta X_i)-n\ln2.$$
求导：
$$\ell'(\theta)=\sum_{i=1}^{n}\frac{X_i}{1+\theta X_i},\quad \ell''(\theta)=-\sum_{i=1}^{n}\frac{X_i^2}{(1+\theta X_i)^2}<0,$$
故 $\ell'(\theta)$ 严格单调递减。又已知 $S=\sum_{i=1}^{n}X_i<0$，于是
$$\ell'(0)=\sum_{i=1}^{n}X_i=S<0.$$
由 $\ell'(\theta)$ 递减可知，对任意 $\theta>0$，有 $\ell'(\theta)<\ell'(0)<0$，所以 $\ell(\theta)$ 在 $[0,1]$ 上严格单调递减。因此 $\ell(\theta)$ 的最大值在左端点 $\theta=0$ 处取得，故
$$\hat{\theta}_{MLE}=0.$$

【答案】
(1) $\theta$ 的矩估计量为 $\hat{\theta}_{M}=3\bar{X}$（$\bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i$）。
(2) 当 $S=\sum_{i=1}^{n}X_i<0$ 时，$\theta$ 的极大似然估计为 $\hat{\theta}_{MLE}=0$。

关键给分点：
- 矩估计：正确计算 $E(X)=\theta/3$，并令等于样本均值，得 $3\bar{X}$。
- 极大似然：写出似然函数、对数似然，求导，利用 $\ell'(0)=S<0$ 及单调性判断最大值在 $\theta=0$。

【易错点】
- 矩估计可能得到 $3\bar{X}<0$，但 $\theta\ge0$，若题目要求非负估计应取 $\max(0,3\bar{X})$，本题未要求，但需注意。
- 极大似然中，不能直接令 $\ell'(\theta)=0$ 去解方程，因为 $S<0$ 时无内点解，最大值在边界 $\theta=0$。
- 不要忽略密度对 $\theta\le1$ 的限制，但本题条件 $S<0$ 下不影响结果。

【命题规律】矩估计和极大似然估计是数一高频考点，常结合密度函数形式，考查求导与单调性。复习时需熟练掌握似然函数的构造及极值判断，尤其注意边界情形。

> AI 生成，仅供参考。

