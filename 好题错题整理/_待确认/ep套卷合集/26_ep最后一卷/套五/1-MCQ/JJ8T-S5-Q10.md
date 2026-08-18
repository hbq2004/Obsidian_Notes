---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
tags:
  - PS
  - 26_ep最后一卷/套五/MCQ
  - 概念题
  - 无偏估计
  - 相合估计
  - 矩估计
  - 最大似然估计
  - 拉普拉斯分布
points:
level:
---

# MCQ 第 10 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q10_题目.png|题目]]

10. 设总体 $X$ 的概率密度为 $f(x;\sigma)=\frac{1}{2\sigma}e^{-\frac{|x|}{\sigma}}$，$\sigma\in(0,+\infty)$ 为未知参数，$X_1,X_2,\ldots,X_n$ 为来自总体 $X$ 的简单随机样本。记 $T=\frac{1}{n}\sum\limits_{i=1}^{n}|X_i|$，则下列说法错误的是( )

A. $T$ 是 $\sigma$ 的无偏估计量

B. $T$ 是 $\sigma$ 的相合估计量（即一致估计量）

C. $T$ 是 $\sigma$ 的矩估计量

D. $T$ 是 $\sigma$ 的最大似然估计量


---

## DeepSeek V4 Flash Max

【考点】本题考查点估计的常用评价准则（无偏性、相合性）以及矩估计和最大似然估计的构造方法。可类比算法竞赛中“用样本统计量估计总体参数”——就像用蒙特卡洛模拟的均值近似期望，需验证偏差和收敛性。

【解】总体 $X$ 的概率密度为 $f(x;\sigma)=\frac{1}{2\sigma}e^{-|x|/\sigma}$（拉普拉斯分布，尺度参数 $\sigma$）。先求 $|X|$ 的分布：令 $Y=|X|$，则对 $y>0$，有
$$
P(Y\le y)=P(|X|\le y)=1-2\int_{y}^{+\infty}\frac{1}{2\sigma}e^{-x/\sigma}dx=1-e^{-y/\sigma},
$$
所以 $Y\sim \mathrm{Exp}(1/\sigma)$，其期望 $E(Y)=\sigma$，方差 $D(Y)=\sigma^2$。

样本统计量 $T=\frac{1}{n}\sum_{i=1}^n |X_i|$ 恰为 $Y$ 的样本均值。

**选项 A（无偏性）**：
$$E(T)=\frac{1}{n}\sum_{i=1}^n E(|X_i|)=\sigma,$$
故 $T$ 是 $\sigma$ 的无偏估计。A 正确。

**选项 B（相合性）**：由大数定律，$T\xrightarrow{P}E(|X|)=\sigma$，故 $T$ 是 $\sigma$ 的相合估计。B 正确。

**选项 C（矩估计）**：矩估计法通常将总体原点矩（或中心矩）与样本对应矩相等。总体一阶原点矩 $E(X)=0$ 恒为常数，无法解出 $\sigma$；若用二阶原点矩 $E(X^2)=\operatorname{Var}(X)+[E(X)]^2=2\sigma^2$，令 $\frac{1}{n}\sum X_i^2=2\sigma^2$，解出 $\hat\sigma=\sqrt{\frac{1}{2n}\sum X_i^2}$，而非 $T$。虽然 $T$ 对应的是总体一阶绝对矩，但“矩”通常指原点矩或中心矩，绝对矩不属于常规矩，因此 $T$ 不是矩估计量。C 错误。

**选项 D（最大似然估计）**：似然函数为
$$L(\sigma)=\prod_{i=1}^n \frac{1}{2\sigma}e^{-|x_i|/\sigma}=(2\sigma)^{-n}e^{-\frac{1}{\sigma}\sum |x_i|}.$$
对数似然：
$$\ell(\sigma)=-n\ln(2\sigma)-\frac{1}{\sigma}\sum |x_i|.$$
求导：
$$\frac{d\ell}{d\sigma}=-\frac{n}{\sigma}+\frac{1}{\sigma^2}\sum |x_i|=0\Rightarrow \sigma=\frac{1}{n}\sum |x_i|=T.$$
且二阶导为负，确为最大值，故 $T$ 是 $\sigma$ 的最大似然估计。D 正确。

【答案】综上，错误的是 **(C)**。

- A：无偏性正确；
- B：相合性正确；
- C：矩估计量应使用 $E(X)$ 或 $E(X^2)$ 构造，$T$ 不是矩估计，错误；
- D：最大似然估计正确。

【易错点】易将“一阶绝对矩”误认为“一阶矩”，从而把 $T$ 当作矩估计。矩估计必须基于常规原点矩（如 $E(X)$, $E(X^2)$）或中心矩，不能随意代入 $E|X|$。另外，拉普拉斯分布的期望为 0，一阶矩失效，需用二阶矩。防错提醒：先写出 $E(X)$ 与 $E(X^2)$，再令对应样本矩相等。

【命题规律】本题是点估计基本概念的综合题，常与指数族、充分统计量结合。复习时应熟练掌握无偏性、相合性的定义及验证步骤，注意矩估计和最大似然估计的构造差异，尤其警惕“绝对矩”这一陷阱。多做类似拉普拉斯分布、均匀分布等参数估计的典型题。

---

## V4 Flash Max 解析

**答案**: C。按考研矩估计法，$T$ 不是 $\sigma$ 的矩估计量；矩估计应令  
$$
EX^2=\frac1n\sum X_i^2
$$
得 $\hat\sigma_{MM}=\sqrt{\frac{1}{2n}\sum X_i^2}$。而 $T$ 是 $\sigma$ 的无偏、相合、最大似然估计量。

**解题切入点**:  
看到密度含绝对值，先令 $Y=|X|$。拉普拉斯分布的绝对值服从指数分布，于是 $E|X|=\sigma$。这个事实直接决定无偏性和相合性；最大似然估计只需对 $\sigma$ 做优化；矩估计则要看“普通原点矩”，不能只看到 $E|X|=\sigma$ 就说它是矩估计。  
算法竞赛类比：最大似然估计相当于“最小化负对数损失”，矩估计相当于“用样本统计量反推全局参数”。

**推演**:  
令 $Y_i=|X_i|$。因为
$$
P(Y_i>y)=P(|X_i|>y)=e^{-y/\sigma},\quad y>0
$$
所以
$$
Y_i\sim Exp(1/\sigma),
$$
且
$$
EY_i=\sigma,\qquad EY_i^2=2\sigma^2.
$$

A. 无偏性：
$$
ET=\frac1n\sum_{i=1}^n E|X_i|=\sigma
$$
所以 A 正确。

B. 相合性：
$$
\operatorname{Var}(T)=\frac{\operatorname{Var}(|X_1|)}{n}
=\frac{EY_1^2-(EY_1)^2}{n}
=\frac{2\sigma^2-\sigma^2}{n}
=\frac{\sigma^2}{n}\to 0
$$
无偏且方差趋于 0，所以 $T$ 是相合估计量，B 正确。

C. 矩估计：
先看普通一阶原点矩：
$$
EX=0
$$
不含参数 $\sigma$，不能用来求 $\sigma$。因此改用二阶原点矩：
$$
EX^2=2\sigma^2
$$
令
$$
2\sigma^2=\frac1n\sum_{i=1}^n X_i^2
$$
解得矩估计量为
$$
\hat\sigma_{MM}=\sqrt{\frac{1}{2n}\sum_{i=1}^n X_i^2}
$$
不是
$$
T=\frac1n\sum_{i=1}^n |X_i|.
$$
所以 C 错误。

D. 最大似然估计：
似然函数为
$$
L(\sigma)=\prod_{i=1}^n \frac1{2\sigma}e^{-|X_i|/\sigma}
=(2\sigma)^{-n}e^{-nT/\sigma}
$$
对数似然为
$$
\ell(\sigma)=-n\ln(2\sigma)-\frac{nT}{\sigma}
$$
求导：
$$
\ell'(\sigma)=-\frac n\sigma+\frac{nT}{\sigma^2}
=\frac{n(T-\sigma)}{\sigma^2}
$$
当 $\sigma<T$ 时 $\ell'(\sigma)>0$，当 $\sigma>T$ 时 $\ell'(\sigma)<0$，所以 $\ell(\sigma)$ 在 $\sigma=T$ 处取最大值，故
$$
\hat\sigma_{MLE}=T.
$$
D 正确。

**易错点**:  
1. 看到 $E|X|=\sigma$ 就认为 $T$ 是矩估计，这是最常见的错误。考研矩估计法中的“矩”通常指普通原点矩 $EX^k$，不是绝对矩。  
2. 不要混淆 $EX=0$ 和 $E|X|=\sigma$。本题的分布关于 0 对称，一阶矩失效，必须用二阶矩。  
3. 最大似然求导后注意符号：
$$
\ell'(\sigma)=\frac{n(T-\sigma)}{\sigma^2}
$$
符号看反会误判为最小值。  
4. 自检：取 $n=1,x_1=1$，则 $T=1$，MLE 也是 1，但矩估计为 $\sqrt{1/2}$，可见 C 错。  
注：以上按考研数学中矩估计法的通常定义；若把绝对矩也广义地视为矩，C 会有争议，但考研单选常规答案按普通矩估计法处理。

**命题规律**:  
这类题常把“无偏性、相合性、矩估计、最大似然估计”放在一起考。核心是先识别分布并算对数字特征。  
常见变式：正态分布 $N(0,\sigma^2)$ 的 $\sigma^2$ 估计、指数分布均值的估计、均匀分布参数的估计。  
本质联系：大数定律给相合性，期望给无偏性，似然函数求导给 MLE；而矩估计是“匹配总体矩与样本矩”，和 MLE 是两种不同的构造思路。
