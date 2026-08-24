---
ctime: 2026-08-24 17:34:54
mtime: 2026-08-24 17:34:54
tags:
  - PS
  - 26_张宇八套卷/卷二/FRQ
  - 计算题
  - 指数分布
  - 条件概率密度
  - 最大似然估计
  - 方差分解
  - 协方差计算
points:
level:
---

# FRQ 第 22 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S2-Q22_题目.png|题目]]

设 $X$ 服从参数为 $\frac{2}{\theta}$ 的指数分布，在 $X=x(x>0)$ 的条件下，$Y$ 服从的条件概率密度为
$$
f_{Y|X}(y|x) = \begin{cases} \frac{1}{\theta} e^{-\frac{y-x}{\theta}}, & 0<x<y, \\ 0, & 其他, \end{cases}
$$
其中 $\theta$ 为大于 0 的参数，$(X_1,Y_1),(X_2,Y_2),\cdots,(X_n,Y_n)$ 是来自总体 $(X,Y)$ 的简单随机样本.
(1) 求 $\theta$ 的最大似然估计量 $\hat{\theta}$；
(2) 计算 $D(\hat{\theta})$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S2-Q22_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

解答题【答案】：
$$
\hat{\theta}=\frac{1}{2n}\sum_{i=1}^n(X_i+Y_i),\qquad D(\hat{\theta})=\frac{\theta^2}{2n}.
$$

关键给分点：
1. 写出联合密度
$$
f(x,y)=f_X(x)f_{Y|X}(y|x)=\frac{2}{\theta^2}e^{-(x+y)/\theta},\quad 0<x<y.
$$
2. 写出对数似然并求导，解出 MLE；
3. 用条件方差公式或独立分解计算方差。

**解题切入点**

设 $Z=Y-X$，由条件密度知 $Z\mid X=x\sim \operatorname{Exp}(1/\theta)$，且与 $X$ 无关，因此 $Z$ 与 $X$ 独立，$Y=X+Z$。这类似算法题中把复杂结构拆成两个独立随机变量，求 MLE 和方差都化为线性运算。

**推演**

1. $X$ 的边缘密度：
$$
f_X(x)=\frac{2}{\theta}e^{-2x/\theta},\quad x>0.
$$

2. 联合密度：
$$
f(x,y)=\frac{2}{\theta}e^{-2x/\theta}\cdot\frac{1}{\theta}e^{-(y-x)/\theta}
=\frac{2}{\theta^2}e^{-(x+y)/\theta},\quad 0<x<y.
$$

3. 样本似然函数（支撑条件 $0<x_i<y_i$ 与 $\theta$ 无关）：
$$
L(\theta)=\left(\frac{2}{\theta^2}\right)^n
\exp\left(-\frac{\sum_{i=1}^n(x_i+y_i)}{\theta}\right).
$$

4. 对数似然：
$$
l(\theta)=n\ln2-2n\ln\theta-\frac{S}{\theta},
\quad S=\sum_{i=1}^n(x_i+y_i).
$$
$$
l'(\theta)=-\frac{2n}{\theta}+\frac{S}{\theta^2}.
$$
令 $l'(\theta)=0$，得
$$
\hat{\theta}=\frac{S}{2n}=\frac{1}{2n}\sum_{i=1}^n(X_i+Y_i).
$$
且 $l''(\hat{\theta})<0$，确为最大值点。

5. 计算 $D(\hat{\theta})$。令 $Z=Y-X$，由条件密度得 $Z\mid X=x\sim \operatorname{Exp}(1/\theta)$，与 $x$ 无关，所以 $Z$ 与 $X$ 独立，且
$$
EZ=\theta,\quad DZ=\theta^2.
$$
又 $X\sim \operatorname{Exp}(2/\theta)$，故
$$
EX=\frac{\theta}{2},\quad DX=\frac{\theta^2}{4}.
$$
于是
$$
T=X+Y=2X+Z,
$$
$$
DT=4DX+DZ=\theta^2+\theta^2=2\theta^2.
$$
而
$$
\hat{\theta}=\frac{1}{2n}\sum_{i=1}^n T_i,
$$
各 $T_i$ 独立同分布，故
$$
D(\hat{\theta})=\frac{1}{4n^2}\sum_{i=1}^n DT_i
=\frac{2\theta^2}{4n}
=\frac{\theta^2}{2n}.
$$

**易错点**

1. 不要忘记联合密度的支撑 $0<x<y$；没有支撑条件，密度归一化不对。
2. 不要把 $Y$ 的边际误认为 $\theta$ 的指数分布，$Y$ 是两个指数最大值的分布，方差不是 $\theta^2$。
3. 用条件方差公式时，$DY=E[D(Y|X)]+D[E(Y|X)]$，不能只取 $E[D(Y|X)]=\theta^2$。
4. $\hat{\theta}$ 的分母是 $2n$，计算方差时是除以 $4n^2$ 再乘 $n$，勿漏平方。

**命题规律**

本题是典型“条件分布构造二维总体 + MLE + 方差”综合题。命题人常把指数分布的条件密度写成平移形式，考查能否看出 $Y-X$ 与 $X$ 独立；复习时多练指数分布族的条件期望、全期望/全方差公式，以及 $\frac{1}{2n}\sum(X_i+Y_i)$ 这类线性估计量的精确方差。


> 来源：《26_张宇八套卷（数一）》卷二 第 22 题
