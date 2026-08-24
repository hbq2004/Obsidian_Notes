---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - PS
  - 26_张宇四套卷/卷二/FRQ
  - 计算题
  - 独立正态线性组合
  - 最大似然估计
  - 辛钦大数定律
  - 依概率收敛
points:
level:
---

# 解答题 第 22 题

![[_Attachments/题目识别/ZY4T/ZY4T-S2-Q22_题目.png|题目]]

设随机变量 $X$ 与 $Y$ 相互独立，且分别服从正态分布 $N(\mu,\sigma^2)$ 与 $N(\mu,2\sigma^2)$，其中 $\sigma$ 是未知参数且 $\sigma > 0$ . 记 $Z = X - Y$ .

(1) 求 $Z$ 的概率密度 $f(z;\sigma^2)$ ;

(2) 设 $Z_1,Z_2,\cdots,Z_n$ 为来自总体 $Z$ 的简单随机样本，求 $\sigma^2$ 的最大似然估计量 $\hat{\sigma}^2$ ;

(3) 是否存在实数 $a$ ，使得对任意的 $\varepsilon > 0$ ，都有 $\lim_{n\to\infty}P\{|\hat{\sigma}^2 - a| \ge \varepsilon\} = 0$ ?

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S2-Q22_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(1) 因 $X,Y$ 独立，$Z=X-Y\sim N(0,3\sigma^2)$，所以
$$
f(z;\sigma^2)=\frac{1}{\sqrt{6\pi\sigma^2}}e^{-z^2/(6\sigma^2)},\quad z\in\mathbb R.
$$

(2) 令 $\theta=\sigma^2$，$S_n=\sum_{i=1}^n Z_i^2$。最大似然估计为
$$
\hat{\sigma}^2=\hat\theta=\frac{S_n}{3n}=\frac{1}{3n}\sum_{i=1}^n Z_i^2.
$$

(3) 存在。取 $a=\sigma^2$（真实参数）。由辛钦大数定律，
$$
\frac{1}{n}\sum_{i=1}^n Z_i^2\xrightarrow{P}3\sigma^2,
$$
故 $\hat\sigma^2\xrightarrow{P}\sigma^2$，从而题中极限成立。

**关键给分点**

- (1) 求出 $Z\sim N(0,3\sigma^2)$，密度表达式正确；
- (2) 写出似然函数并取对数求导，令导数为 $0$，得 $\hat\sigma^2=\frac{1}{3n}\sum Z_i^2$；
- (3) 指出 $\frac{1}{n}\sum Z_i^2\to3\sigma^2$（依概率），取 $a=\sigma^2$，说明收敛。

**解题切入点**

本题是“正态分布 + 极大似然 + 大数定律”的组合题。算法竞赛视角：正态线性组合相当于“随机变量合并”的固定模板；MLE 就是对 log 似然求导找极值；依概率收敛就是“随机序列的均值按大数定律逼近真值”。

**推演**

(1) 设 $Z=X-Y$。由独立性，
$$
E Z=E X-E Y=\mu-\mu=0,
$$
$$
\operatorname{Var}Z=\operatorname{Var}X+\operatorname{Var}Y=\sigma^2+2\sigma^2=3\sigma^2.
$$
独立正态变量的线性组合仍为正态变量，故 $Z\sim N(0,3\sigma^2)$。因此概率密度为
$$
f(z;\sigma^2)=\frac{1}{\sqrt{2\pi\cdot 3\sigma^2}}e^{-z^2/(2\cdot 3\sigma^2)}
=\frac{1}{\sqrt{6\pi\sigma^2}}e^{-z^2/(6\sigma^2)}.
$$

(2) 令 $\theta=\sigma^2$，$S_n=\sum_{i=1}^n Z_i^2$。因 $Z_i$ 的密度为
$$
f(z_i;\theta)=\frac{1}{\sqrt{6\pi\theta}}e^{-z_i^2/(6\theta)},
$$
似然函数为
$$
L(\theta)=\prod_{i=1}^n f(z_i;\theta)
=(6\pi\theta)^{-n/2}e^{-S_n/(6\theta)}.
$$
对数似然为
$$
\ell(\theta)=-\frac n2\ln(6\pi\theta)-\frac{S_n}{6\theta}.
$$
求导：
$$
\ell'(\theta)=-\frac n{2\theta}+\frac{S_n}{6\theta^2}.
$$
令 $\ell'(\theta)=0$，得
$$
\hat\theta=\frac{S_n}{3n}.
$$
又
$$
\ell''(\hat\theta)=-\frac n{2\hat\theta^2}<0,
$$
所以该点是最大值点。于是 $\hat\sigma^2=\hat\theta=\frac{1}{3n}\sum_{i=1}^n Z_i^2$。

(3) 由 $E[Z_i^2]=\operatorname{Var}(Z_i)=3\sigma^2$，且 $Z_i^2$ 独立同分布、均值有限，由辛钦大数定律：
$$
\frac{1}{n}\sum_{i=1}^n Z_i^2\xrightarrow{P}3\sigma^2.
$$
两边同乘 $1/3$ 得
$$
\hat\sigma^2=\frac{1}{3n}\sum_{i=1}^n Z_i^2\xrightarrow{P}\sigma^2.
$$
依概率收敛的定义正是：对任意 $\varepsilon>0$，
$$
\lim_{n\to\infty}P\{|\hat\sigma^2-\sigma^2|\ge\varepsilon\}=0.
$$
所以取 $a=\sigma^2$ 即可。

**易错点**

1. 求 $\operatorname{Var}(X-Y)$ 时误写成 $\sigma^2-2\sigma^2$；独立时方差必相加，差的方差为 $\sigma^2+2\sigma^2=3\sigma^2$。
2. 把均值误认为未知而使用 $\frac{1}{n}\sum(Z_i-\bar Z)^2$；这里 $Z$ 的均值为 $0$，$X,Y$ 的 $\mu$ 抵消，MLE 应使用二阶原点矩 $\frac{1}{n}\sum Z_i^2$，再除以 $3$。
3. 对 $\theta=\sigma^2$ 求导时漏掉指数中的 $6\theta$；若漏乘系数会得到 $\frac{1}{n}\sum Z_i^2$ 等错误结果。
4. (3) 中不要把收敛目标写成固定常数 $a=0$ 等；本题应取当前真实参数 $a=\sigma^2$。若额外规定 $a$ 不能依赖未知参数，则不存在这样的绝对常数。

**命题规律**

该题是概率统计大题常见套路：先用正态可加性定分布，再构造似然函数求 MLE，最后用大数定律验证相合性。命题人常把“方差倍数”设为 $3\sigma^2$，并检验考生是否知道总体均值为 $0$。复习时应熟练掌握正态线性组合、对数似然求导、WLLN/依概率收敛的完整书写。


> 来源：《26_张宇四套卷（数一）》卷二 第 22 题
