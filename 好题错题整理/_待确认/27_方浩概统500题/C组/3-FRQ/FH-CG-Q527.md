---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 最大似然估计
  - 指数分布
  - 估计量方差
  - 样本独立性
points:
level:
---

# FRQ 第 527 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q527_题目.png|题目]]

527 设$X_1,X_2,\cdots,X_n$为来自期望为$\theta$的指数分布总体$X$的简单随机样本,$Y_1,Y_2,\cdots,Y_m$为来自期望为$2\theta$的指数分布总体$Y$的简单随机样本,且两样本相互独立,其中$\theta(\theta>0)$为未知参数.利用样本$X_1,X_2,\cdots,X_n,Y_1,Y_2,\cdots,Y_m$,求$\theta$的最大似然估计量$\hat{\theta}$,并求$D(\hat{\theta})$.

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：
$$
\hat\theta=\frac{\sum_{i=1}^n X_i+\frac12\sum_{j=1}^m Y_j}{n+m},\qquad 
D(\hat\theta)=\frac{\theta^2}{n+m}.
$$

理由：两总体分别是指数分布 $X\sim E\left(\frac1\theta\right)$，$Y\sim E\left(\frac1{2\theta}\right)$；对似然函数取对数求导可得上述估计量，再由独立性与方差性质可得其方差。

**解题切入点**：
先明确指数分布的写法：若指数分布期望为 $\mu$，则密度为  
$$
f(x)=\frac1\mu e^{-x/\mu},\qquad x>0.
$$
所以这里 $X$ 的尺度参数是 $\theta$，$Y$ 的尺度参数是 $2\theta$。  
求最大似然估计时，把似然函数看作关于 $\theta$ 的目标函数，取对数后求导，令导数为 $0$。求方差时注意 $Y_j$ 前有系数 $\frac12$，方差要乘 $\left(\frac12\right)^2$。

**推演**：
设样本观测值为 $x_1,\dots,x_n$ 与 $y_1,\dots,y_m$，则

$$
f_X(x_i;\theta)=\frac1\theta e^{-x_i/\theta},\qquad
f_Y(y_j;\theta)=\frac1{2\theta}e^{-y_j/(2\theta)}.
$$

由于两样本独立，似然函数为

$$
L(\theta)=\prod_{i=1}^n\frac1\theta e^{-x_i/\theta}
\cdot\prod_{j=1}^m\frac1{2\theta}e^{-y_j/(2\theta)}
=\frac{1}{2^m\theta^{n+m}}
\exp\left\{-\frac{\sum_{i=1}^n x_i}{\theta}
-\frac{\sum_{j=1}^m y_j}{2\theta}\right\}.
$$

取对数得

$$
\ell(\theta)=-(n+m)\ln\theta-m\ln2
-\frac{\sum_{i=1}^n x_i}{\theta}
-\frac{\sum_{j=1}^m y_j}{2\theta}.
$$

对 $\theta$ 求导：

$$
\ell'(\theta)=-\frac{n+m}{\theta}
+\frac{\sum_{i=1}^n x_i}{\theta^2}
+\frac{\sum_{j=1}^m y_j}{2\theta^2}.
$$

令 $\ell'(\theta)=0$，得

$$
\theta=\frac{\sum_{i=1}^n x_i+\frac12\sum_{j=1}^m y_j}{n+m}.
$$

该点是唯一驻点，且 $\ell'(\theta)$ 在其两侧由正变负，因此是最大似然估计。将观测值换成随机变量，得

$$
\boxed{\hat\theta=\frac{\sum_{i=1}^n X_i+\frac12\sum_{j=1}^m Y_j}{n+m}}.
$$

下面求方差。因为

$$
D(X_i)=\theta^2,\qquad D(Y_j)=(2\theta)^2=4\theta^2,
$$

且两样本相互独立，所以协方差项均为 $0$。于是

$$
\begin{aligned}
D(\hat\theta)
&=D\left(\frac{\sum_{i=1}^n X_i+\frac12\sum_{j=1}^m Y_j}{n+m}\right)\\
&=\frac{1}{(n+m)^2}
\left[\sum_{i=1}^n D(X_i)+\frac14\sum_{j=1}^m D(Y_j)\right]\\
&=\frac{1}{(n+m)^2}
\left[n\theta^2+\frac14\cdot m\cdot 4\theta^2\right]\\
&=\frac{1}{(n+m)^2}(n+m)\theta^2\\
&=\boxed{\frac{\theta^2}{n+m}}.
\end{aligned}
$$

**易错点**：
1. 密度写错：期望为 $\theta$ 的指数分布密度是 $\frac1\theta e^{-x/\theta}$，不是 $\theta e^{-\theta x}$；$Y$ 的密度同理应为 $\frac1{2\theta}e^{-y/(2\theta)}$。  
2. 求方差时漏掉系数：$\hat\theta$ 中 $Y_j$ 的系数是 $\frac12$，方差贡献应乘 $\left(\frac12\right)^2$，不能直接写成 $D\left(\sum Y_j\right)$。  
3. 忘记利用独立性：两样本相互独立，所以协方差项为 $0$；若没有独立性，方差中还要包含协方差项。  
4. 不要把方差写成标准差 $\frac{\theta}{\sqrt{n+m}}$，题目求的是 $D(\hat\theta)$。

**命题规律**：
本题是典型的指数分布参数最大似然估计问题，常考形式有：单总体指数分布、双总体不同尺度指数分布、与矩估计比较、求 Fisher 信息量或 Cramér-Rao 下界。本题中 $\hat\theta$ 的方差恰好等于 $\frac{\theta^2}{n+m}$，即达到 Cramér-Rao 下界，因此可能进一步考查无偏性和有效性。复习时应熟练掌握指数分布密度、似然函数求导，以及线性组合估计量的方差计算。

**知识点**：
最大似然估计、指数分布、估计量方差、样本独立性

---

> 来源：方浩概率统计进阶500题做题本 第194页 · C组
