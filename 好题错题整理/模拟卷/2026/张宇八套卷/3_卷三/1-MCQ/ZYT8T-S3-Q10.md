---
ctime: 2026-08-24 17:34:54
mtime: 2026-08-24 17:34:54
tags:
  - PS
  - 26_张宇八套卷/卷三/MCQ
  - 计算题
  - 最大似然估计
  - 指数分布
  - 样本均值方差
  - 方差线性组合
  - 联合密度分解
points:
level:
---

# MCQ 第 10 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S3-Q10_题目.png|题目]]

设 $(X_1,Y_1),(X_2,Y_2),\cdots,(X_n,Y_n)$ 是来自总体（X,Y）的简单随机样本,且 $(X,Y) \sim f(x,y)=$
$$ \begin{cases} \frac{1}{2\theta^2}e^{-\frac{2x+y}{2\theta}}, & x>0,y>0, \\ 0, & 其他, \end{cases} $$
其中 $\theta$ 为大于 $0$ 的参数.记 $\overline{X}=\frac{1}{n}\sum_{i=1}^{n}X_i, \overline{Y}=\frac{1}{n}\sum_{j=1}^{n}Y_j$,则 $\theta$ 的最大似然估计量 $\hat{\theta}$ 与 $D(\hat{\theta})$ 分别为.
(A) $\overline{X}+\frac{\overline{Y}}{2}, \frac{\theta^2}{4n}.$
(B) $\frac{\overline{X}}{2}+\frac{\overline{Y}}{4}, \frac{\theta^2}{2n}.$
(C) $\overline{X}+\frac{\overline{Y}}{2}, \frac{\theta^2}{2n}.$
(D) $\frac{\overline{X}}{2}+\frac{\overline{Y}}{4}, \frac{\theta^2}{4n}.$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S3-Q10_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(B)。

$\hat{\theta}=\frac{\bar X}{2}+\frac{\bar Y}{4}$，$D(\hat{\theta})=\frac{\theta^2}{2n}$。

**解题切入点**

本题是“二维指数族联合密度 + 最大似然估计 + 方差计算”的综合题。破题关键是先把联合密度拆成两个独立指数分布：$X\sim \mathrm{Exp}(1/\theta)$，$Y\sim \mathrm{Exp}(1/(2\theta))$，这样似然函数、MLE 和方差都变成一维问题的线性组合。类似算法竞赛中把复合结构拆成独立子问题，再分别处理。

**推演**

（1）密度分解与边缘分布。

对 $x>0,y>0$，
$$
f(x,y)=\frac{1}{2\theta^2}e^{-\frac{2x+y}{2\theta}}
=\left(\frac{1}{\theta}e^{-x/\theta}\right)
\left(\frac{1}{2\theta}e^{-y/(2\theta)}\right).
$$
因此 $X\sim \mathrm{Exp}(1/\theta)$，$Y\sim \mathrm{Exp}(1/(2\theta))$，且 $X,Y$ 独立。于是
$$
E(X)=\theta,\quad D(X)=\theta^2,\quad E(Y)=2\theta,\quad D(Y)=4\theta^2.
$$

（2）似然函数。

样本的联合密度为
$$
L(\theta)=\prod_{i=1}^{n}f(x_i,y_i)
=(2\theta^2)^{-n}\exp\left(-\frac{2\sum_{i=1}^{n}x_i+\sum_{i=1}^{n}y_i}{2\theta}\right).
$$
取对数：
$$
\ell(\theta)=-n\ln2-2n\ln\theta-\frac{2n\bar x+n\bar y}{2\theta}.
$$

（3）求 MLE。

$$
\ell'(\theta)=-\frac{2n}{\theta}+\frac{2n\bar x+n\bar y}{2\theta^2}.
$$
令 $\ell'(\theta)=0$，得
$$
\frac{2n\bar x+n\bar y}{2\theta^2}=\frac{2n}{\theta}
\Rightarrow 
\hat\theta=\frac{2\bar x+\bar y}{4}=\frac{\bar x}{2}+\frac{\bar y}{4}.
$$
且 $\ell''(\theta)=\frac{2n}{\theta^2}-\frac{2n\bar x+n\bar y}{\theta^3}$，在 $\hat\theta$ 处为负，故为最大值点。因此
$$
\hat\theta=\frac{\bar X}{2}+\frac{\bar Y}{4}.
$$

（4）方差。

由独立性，
$$
D(\hat\theta)=D\left(\frac{\bar X}{2}+\frac{\bar Y}{4}\right)
=\frac{1}{4}D(\bar X)+\frac{1}{16}D(\bar Y).
$$
又
$$
D(\bar X)=\frac{D(X)}{n}=\frac{\theta^2}{n},\qquad
D(\bar Y)=\frac{D(Y)}{n}=\frac{4\theta^2}{n}.
$$
所以
$$
D(\hat\theta)=\frac{1}{4}\cdot\frac{\theta^2}{n}+\frac{1}{16}\cdot\frac{4\theta^2}{n}
=\frac{\theta^2}{4n}+\frac{\theta^2}{4n}
=\frac{\theta^2}{2n}.
$$

（5）选项核对。

- (A)：$\bar X+\frac{\bar Y}{2}$ 不是 MLE，且实际方差为 $\frac{2\theta^2}{n}$，不是 $\frac{\theta^2}{4n}$；
- (B)：正确；
- (C)：$\bar X+\frac{\bar Y}{2}$ 不是 MLE，且实际方差为 $\frac{2\theta^2}{n}$，不是 $\frac{\theta^2}{2n}$；
- (D)：估计量正确，但方差应为 $\frac{\theta^2}{2n}$，不是 $\frac{\theta^2}{4n}$。

**易错点**

1. 把 $Y$ 的均值误记为 $\theta$、方差误记为 $\theta^2$ 会直接算错方差；正确是 $E(Y)=2\theta,\ D(Y)=4\theta^2$。
2. 求 MLE 时 $2\sum X_i+\sum Y_i=2n\bar X+n\bar Y$ 的系数不能漏；漏 $n$ 会得到错误估计量。
3. $X$ 与 $Y$ 独立，方差线性组合没有协方差项；若误以为有相关项会多出交叉项。
4. 有的选项把“估计量正确”和“方差正确”错位搭配，需分别核对。

**命题规律**

这类题是数理统计常考的“指数分布族 + MLE + 无偏性/方差”综合题。复习时熟练掌握：
- 指数分布密度、均值、方差；
- 联合密度可因子分解与独立性的关系；
- 似然函数书写、对数化、求导求 MLE；
- 样本均值的方差 $D(\bar X)=D(X)/n$ 和方差线性组合。

此题本质是二维但拆开后与一维无异。


> 来源：《26_张宇八套卷（数一）》卷三 第 10 题
