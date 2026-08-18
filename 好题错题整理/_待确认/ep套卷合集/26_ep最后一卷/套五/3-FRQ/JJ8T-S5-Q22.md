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

## DeepSeek V4 Flash Max

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

---

## V4 Flash Max 解析

**答案**：  
（题干中写“\(\theta\ge0\)”应理解为 \(0\le\theta\le1\)，否则密度在 \(x=-1\) 附近会取负值。）  
(1) \(\theta\) 的矩估计量为  
\[
\tilde\theta=3\bar X=\frac{3}{n}\sum_{i=1}^n X_i.
\]  
(2) 若 \(S=\sum\limits_{i=1}^n X_i<0\)，则极大似然估计量为  
\[
\hat\theta=0.
\]

**解题切入点**：  
矩估计的思路很直接：总体只有一个未知参数，就用总体一阶矩等于样本一阶矩来反解参数。  
极大似然估计则需要先写出似然函数，再判断最大值点。本题第(2)问的关键不是直接解似然方程，而是先看 \(\theta=0\) 处的导数：若导数已为负，且对数似然函数是凹函数，那么函数只会继续下降，最大值只能在边界 \(\theta=0\) 取到。这有点像算法里“三分/二分判断单调性”：左端点斜率已经为负，且斜率单调递减，则峰值在左端点。

**推演**：  

### （1）矩估计

总体一阶矩为  
\[
E(X)=\int_{-1}^{1}x\frac{1+\theta x}{2}\,dx
=\frac12\left(\int_{-1}^{1}x\,dx+\theta\int_{-1}^{1}x^2\,dx\right).
\]

其中  
\[
\int_{-1}^{1}x\,dx=0,\qquad
\int_{-1}^{1}x^2\,dx=\frac23.
\]

所以  
\[
E(X)=\frac12\cdot \theta\cdot\frac23=\frac{\theta}{3}.
\]

令样本一阶矩等于总体一阶矩：  
\[
\bar X=\frac{\theta}{3},
\]

解得矩估计量  
\[
\tilde\theta=3\bar X=\frac{3}{n}\sum_{i=1}^n X_i.
\]

### （2）极大似然估计

似然函数为  
\[
L(\theta)=\prod_{i=1}^n \frac{1+\theta X_i}{2}
=2^{-n}\prod_{i=1}^n (1+\theta X_i).
\]

取对数得  
\[
\ell(\theta)=\ln L(\theta)
=-n\ln2+\sum_{i=1}^n \ln(1+\theta X_i).
\]

求导：  
\[
\ell'(\theta)=\sum_{i=1}^n\frac{X_i}{1+\theta X_i}.
\]

再求二阶导：  
\[
\ell''(\theta)=-\sum_{i=1}^n\frac{X_i^2}{(1+\theta X_i)^2}<0.
\]

所以 \(\ell(\theta)\) 是关于 \(\theta\) 的严格凹函数，\(\ell'(\theta)\) 单调递减。

已知  
\[
S=\sum_{i=1}^n X_i<0,
\]

于是  
\[
\ell'(0)=\sum_{i=1}^n X_i=S<0.
\]

因为 \(\ell'(\theta)\) 单调递减，所以对所有 \(\theta>0\)，都有  
\[
\ell'(\theta)<\ell'(0)<0.
\]

也就是说，\(\ell(\theta)\) 在 \(\theta\ge0\) 上严格单调递减，因此最大值只能在左端点 \(\theta=0\) 处取得。

故  
\[
\hat\theta_{\text{MLE}}=0.
\]

**易错点**：  

- 矩估计不要误用二阶矩：这里  
\[
E(X^2)=\int_{-1}^{1}x^2\frac{1+\theta x}{2}\,dx=\frac13
\]  
根本不含 \(\theta\)，所以二阶矩无法估计 \(\theta\)，必须用一阶矩。

- 求极大似然估计时，不能只令 \(\ell'(\theta)=0\) 解方程，还要检查边界。本题 \(S<0\) 时，\(\ell'(0)<0\)，且 \(\ell'(\theta)\) 单调递减，所以似然方程没有正根，最大值在边界 \(\theta=0\)。

- 注意“矩估计”和“极大似然估计”的区别：第(1)问矩估计会得到 \(3\bar X\)，当 \(S<0\) 时它可能为负；但参数 \(\theta\ge0\)，MLE 在边界取 \(0\)，不要混为一谈。

- 密度函数要满足非负性：  
\[
f(x)=\frac{1+\theta x}{2}\ge0,\quad -1\le x\le1,
\]  
因此必须有 \(0\le\theta\le1\)。题干若只写 \(\theta\ge0\)，是 OCR 或抄录不完整。

注：按OCR最合理读法。

**命题规律**：  

本题属于考研数学一中“参数估计”的经典综合题，常考矩估计与极大似然估计。命题角度主要有：  

- 给一个非标准线性密度函数，先求矩估计；  
- 对似然函数求导，判断单调性或解似然方程；  
- 通过样本和的正负，考查“边界最大值”的分类讨论能力。

常见变式包括：密度中含参数但二阶矩与参数无关；MLE 无显式解，需要写成似然方程形式；或者继续考查相合性、无偏性、Fisher 信息量等。矩估计常和大数定律结合判断相合性，MLE 常和渐近正态性、Cramér-Rao 不等式联系。
