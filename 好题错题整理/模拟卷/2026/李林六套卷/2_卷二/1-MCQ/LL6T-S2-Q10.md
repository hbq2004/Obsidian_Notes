---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - PS
  - 26_李林六套卷/卷二/MCQ
  - 计算题
  - 极大似然估计
  - 均匀分布
  - 次序统计量
  - 无偏估计
  - 期望计算
points:
level:
---

# 选择题 第 10 题

![[_Attachments/题目识别/LL6T/LL6T-S2-Q10_题目.png|题目]]

设随机变量 $X$ 在 $[0,\theta](\theta>0)$ 上服从均匀分布，其中 $\theta$ 未知，$X_1, X_2, \cdots, X_n$ 为总体 $X$ 的简单随机样本，$\hat{\theta}$ 为 $\theta$ 的最大似然估计量，若 $k\hat{\theta}$ 为 $\theta$ 的无偏估计量，则 $k=$.

(A) $\frac{n}{n+1}$.

(B) $\frac{n+1}{n}$.

(C) $\frac{1}{n+1}$.

(D) $\frac{1}{n}$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S2-Q10_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
选择题【答案】:(B)。

选项对错:
- (A) 错误。$\frac{n}{n+1}$ 是 $E(\hat{\theta})/\theta$，不是修正系数。
- (B) 正确。由无偏条件 $k\cdot\frac{n}{n+1}\theta=\theta$ 得 $k=\frac{n+1}{n}$。
- (C) 错误。$\frac{1}{n+1}$ 与期望修正所需乘数相差甚远。
- (D) 错误。$\frac{1}{n}$ 只是样本量倒数，无法将期望修正为 $\theta$。

**解题切入点**
本题是“最大似然估计 + 无偏性修正”的标准题。算法竞赛类比: 最大观测值就是 MLE，如同从约束边界取极值；求无偏估计就像对统计量乘一个缩放因子，使期望调到真值。

**推演**
总体 $X\sim U[0,\theta]$，样本 $X_1,\dots,X_n$。

1. 求 MLE。似然函数为
$$
L(\theta)=\prod_{i=1}^n \frac{1}{\theta}\mathbf{1}_{0\le X_i\le \theta}=\frac{1}{\theta^n}\mathbf{1}_{\max X_i\le \theta}.
$$
要使 $L(\theta)$ 最大，$\theta$ 要尽可能小，但必须满足 $\theta\ge \max X_i$，所以
$$
\hat{\theta}=X_{(n)}=\max_{1\le i\le n}X_i.
$$

2. 求 $\hat{\theta}$ 的期望。对 $0\le t\le \theta$，
$$
P(\hat{\theta}\le t)=P(X_1\le t,\dots,X_n\le t)=\left(\frac{t}{\theta}\right)^n.
$$
求导得密度
$$
f_{\hat{\theta}}(t)=\frac{n t^{n-1}}{\theta^n},\quad 0\le t\le \theta.
$$
因此
$$
E(\hat{\theta})=\int_0^\theta t\frac{n t^{n-1}}{\theta^n}\,dt
=\frac{n}{\theta^n}\cdot\frac{\theta^{n+1}}{n+1}
=\frac{n}{n+1}\theta.
$$

3. 无偏条件。若 $k\hat{\theta}$ 是 $\theta$ 的无偏估计，则
$$
E(k\hat{\theta})=k\cdot\frac{n}{n+1}\theta=\theta.
$$
解得
$$
k=\frac{n+1}{n}.
$$

关键给分点：正确写出 MLE 为 $X_{(n)}$；正确求 $E(X_{(n)})=\frac{n}{n+1}\theta$；由无偏条件解出 $k$。

自检：$n=1$ 时，$\hat{\theta}=X_1$，$E(X_1)=\theta/2$，需要 $k=2$；公式 $(n+1)/n=2$，符合。

**易错点**
1. 把 $\hat{\theta}$ 误写成样本均值 $\bar X$，或用 $\frac{n}{n-1}$ 修正。
2. 忘记 MLE 的约束条件 $\theta\ge X_{(n)}$，误取 $\theta=\bar X$。
3. 求 $E(X_{(n)})$ 时漏掉密度中的因子 $n$。
4. 将题目所求 $k$ 与 $\frac{E(\hat{\theta})}{\theta}$ 混淆，二者互为倒数。

**命题规律**
考研数学一常考“均匀分布未知上限的 MLE 与无偏修正”。复习时熟练掌握次序统计量分布、MLE 的边界取法，并熟记 $E(X_{(n)})=\frac{n}{n+1}\theta$。若遇到 $[0,\theta]$ 上的均匀分布，$\hat{\theta}=X_{(n)}$，且 $\frac{n+1}{n}\hat{\theta}$ 是 $\theta$ 的无偏估计，可直接使用。


> 来源：《26_李林六套卷（数一）》卷二 第 10 题
