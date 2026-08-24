---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - PS
  - 26_张宇八套卷/卷三/FRQ
  - 计算题
  - 条件分布
  - 二项分布
  - 相关系数
  - 条件期望公式
  - 方差分解公式
points:
level:
---

# FRQ 第 22 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S3-Q22_题目.png|题目]]

22.（本题满分12分）

设随机变量 $X \sim U(0,1)$，当 $X=x$ 时，$Y \sim B(2,x)$，求.

(1) $P\{Y=k|X=x\}, k=0,1,2;$

(2) $\rho_{XY}.$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S3-Q22_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(1) $P\{Y=k\mid X=x\}=\binom{2}{k}x^k(1-x)^{2-k},\quad k=0,1,2.$

即
$$
P\{Y=0\mid X=x\}=(1-x)^2,\quad P\{Y=1\mid X=x\}=2x(1-x),\quad P\{Y=2\mid X=x\}=x^2.
$$

(2) $\rho_{XY}=\dfrac{\sqrt2}{2}.$

关键给分点：①正确写出条件分布列；②算出 $E X=\frac12,\ E X^2=\frac13$（或 $\operatorname{Var}X=\frac1{12}$）；③用 $E[Y\mid X]=2X$ 得 $E Y=1$，并由 $E[XY]=E[XE(Y\mid X)]=\frac23$ 得 $\operatorname{Cov}(X,Y)=\frac16$；④用方差分解 $\operatorname{Var}(Y)=E[\operatorname{Var}(Y\mid X)]+\operatorname{Var}(E[Y\mid X])=\frac23$；⑤代入相关系数公式得 $\frac{\sqrt2}{2}$。

**解题切入点**

本题是“连续型随机变量 $X$ 与离散型随机变量 $Y$”的混合模型。看到条件分布，直接按二项分布写；求相关系数时不要强行算二维联合分布，要用重期望公式和全方差公式，相当于算法竞赛里用预处理/公式把 $O(n^2)$ 枚举优化成 $O(1)$ 计算。

**推演**

1. 条件分布：

因 $Y\mid X=x\sim B(2,x)$，故
$$
P\{Y=k\mid X=x\}=\binom{2}{k}x^k(1-x)^{2-k},\quad k=0,1,2.
$$

2. $X$ 的矩：

$X\sim U(0,1)$，所以
$$
E X=\int_0^1 x\,dx=\frac12,\quad E X^2=\int_0^1 x^2\,dx=\frac13,\quad \operatorname{Var}X=\frac13-\left(\frac12\right)^2=\frac1{12}.
$$

3. 条件期望与协方差：

对二项分布 $B(2,x)$ 有
$$
E[Y\mid X=x]=2x,\quad \operatorname{Var}(Y\mid X=x)=2x(1-x).
$$

因此
$$
E Y=E[E(Y\mid X)]=E(2X)=1.
$$

又
$$
E[XY]=E[XE(Y\mid X)]=E(2X^2)=2E X^2=\frac23.
$$

所以
$$
\operatorname{Cov}(X,Y)=E(XY)-EX\cdot EY=\frac23-\frac12=\frac16.
$$

4. $Y$ 的方差：

由全方差公式
$$
\operatorname{Var}(Y)=E[\operatorname{Var}(Y\mid X)]+\operatorname{Var}(E[Y\mid X]).
$$

其中
$$
E[\operatorname{Var}(Y\mid X)]=E[2X(1-X)]=2\left(EX-EX^2\right)=2\left(\frac12-\frac13\right)=\frac13,
$$
$$
\operatorname{Var}(E[Y\mid X])=\operatorname{Var}(2X)=4\operatorname{Var}X=4\cdot\frac1{12}=\frac13.
$$

故
$$
\operatorname{Var}(Y)=\frac13+\frac13=\frac23.
$$

5. 相关系数：

$$
\rho_{XY}=\frac{\operatorname{Cov}(X,Y)}{\sqrt{\operatorname{Var}X\cdot\operatorname{Var}Y}}
=\frac{\frac16}{\sqrt{\frac1{12}\cdot\frac23}}
=\frac{\frac16}{\sqrt{\frac1{18}}}=\frac{\sqrt2}{2}.
$$

验证：由第(1)问积分可得 $P(Y=0)=P(Y=1)=P(Y=2)=\frac13$，因此 $EY=1,\operatorname{Var}Y=\frac23$，与全方差公式结果一致。

**易错点**

- 第 (1) 问直接写条件分布即可，不能把 $x$ 积分掉；若要求边缘分布才需积分。
- 求 $E[XY]$ 时容易想当然写成 $EX\cdot EY$，本题 $X,Y$ 不独立，必须用 $E[XY]=E[XE(Y\mid X)]$。
- 计算 $\operatorname{Var}(Y)$ 时不要只算 $\operatorname{Var}(E[Y\mid X])$，漏掉 $E[\operatorname{Var}(Y\mid X)]$；也不要误把 $Y$ 当作 $B(2,EX)$ 的二项分布。
- 相关系数是协方差与标准差之比；本题协方差为正，故结果为正值，不要写成负号。

**命题规律**

概率统计常以“连续型 $X$ + 条件二项分布 $Y$”为背景，考查条件分布列、重期望公式、全方差公式和相关系数。命题人喜欢把离散型与连续型混合，只用常规积分和公式即可。复习时要把 $E(Y\mid X)$、$\operatorname{Var}(Y\mid X)$、重期望、全方差几条链熟记，并练习混合模型的相关系数题。


> 来源：《26_张宇八套卷（数一）》卷三 第 22 题
