---
ctime: 2026-08-24 05:34:19
mtime: 2026-08-24 05:34:19
tags:
  - PS
  - 26_张宇四套卷/卷一/FIB
  - 计算题
  - 最大似然估计
  - 概率密度归一性
  - 分段积分求概率
  - 约束最优化
points:
level:
---

# 填空题 第 16 题

![[_Attachments/题目识别/ZY4T/ZY4T-S1-Q16_题目.png|题目]]

设总体 $X$ 的概率密度 $f(x) = \begin{cases} \mu x, & 0 \le x < 1, \\ \theta x, & 1 \le x \le 2, \\ 0, & \text{其他},\end{cases}$，$\mu$，$\theta$ 为未知参数且 $\mu > 0$，$\theta > 0$，$Y = e^X$，$X$ 的样本观测值为 0.1, 0.9, 1.2, 1.2，则 $P\{Y < 4\}$ 的最大似然估计值为 \_\_\_\_\_\_.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S1-Q16_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由题意，总体概率密度必须满足归一性，即 $\int_{-\infty}^{+\infty} f(x)\,dx=1$。
解得 $\mu+3\theta=2$。基于样本观测值写出似然函数，在约束下求最大似然估计，得 $\hat{\mu}=1,\ \hat{\theta}=\frac{1}{3}$。

$$P\{Y<4\}=P\{e^X<4\}=P\{X<\ln 4\}=\int_0^1 x\,dx+\int_1^{\ln 4} \frac{1}{3}x\,dx=\frac{1}{2}+\frac{1}{6}\big((\ln4)^2-1\big)=\frac{1}{3}\big(1+2(\ln2)^2\big).$$

【答案】: $\boxed{\dfrac{1}{3}\big(1+2(\ln2)^2\big)}$

**解题切入点**

类似算法竞赛中“先求解带约束的最优化问题，再代入目标函数”——本题先由密度归一化得到参数约束，再用最大似然估计（MLE）求 $\mu,\theta$，最后利用 MLE 的不变性求 $P\{Y<4\}$ 的估计值。

**推演**

1. **归一化约束**：
   $$1=\int_0^1 \mu x\,dx+\int_1^2 \theta x\,dx=\frac{\mu}{2}+\frac{3\theta}{2} \quad\Rightarrow\quad \mu+3\theta=2.$$

2. **似然函数**：样本为 $0.1,0.9,1.2,1.2$，故
   $$L(\mu,\theta)=(\mu\cdot0.1)(\mu\cdot0.9)(\theta\cdot1.2)(\theta\cdot1.2)\propto \mu^2\theta^2.$$
   因此只需在约束下最大化 $\mu^2\theta^2$。

3. **约束优化**：令 $\theta=\frac{2-\mu}{3}$，则
   $$\mu^2\theta^2=\frac{1}{9}\mu^2(2-\mu)^2.$$
   记 $g(\mu)=\mu^2(2-\mu)^2$，则
   $$g'(\mu)=2\mu(2-\mu)^2-2\mu^2(2-\mu)=4\mu(2-\mu)(1-\mu).$$
   令 $g'(\mu)=0$，得 $\mu=0,1,2$，结合 $\mu>0,\theta>0$，$\mu=1$ 时 $\theta=\frac{1}{3}$，且 $g(1)=1$ 为最大。故 $\hat{\mu}=1,\ \hat{\theta}=\frac{1}{3}$。

4. **目标概率**：
   $$P\{Y<4\}=P\{e^X<4\}=P\{X<\ln4\}.$$
   因为 $\ln4\approx1.386\in(1,2)$，所以
   $$P=\int_0^1 \mu x\,dx+\int_1^{\ln4}\theta x\,dx.$$
   代入 $\hat{\mu}=1,\hat{\theta}=\frac{1}{3}$，得
   $$P=\int_0^1 x\,dx+\int_1^{\ln4}\frac{1}{3}x\,dx=\frac{1}{2}+\frac{1}{6}\big((\ln4)^2-1\big)=\frac{1}{6}\big(2+(\ln4)^2\big)=\frac{1}{3}\big(1+2(\ln2)^2\big).$$

**易错点**

- 忘记利用密度归一化条件导出 $\mu+3\theta=2$，导致无法正确求 MLE。
- 优化时忽略参数正值约束，误取端点 $\mu=0$ 或 $\mu=2$。
- 计算 $P\{Y<4\}$ 时误用 $Y$ 的密度，而应直接转化为 $X<\ln4$；且积分上限 $\ln4$ 需与分段点 1 比较。

**命题规律**

本题将最大似然估计与分段概率密度结合，是数一常考题型。复习时应熟练掌握：密度归一化条件、似然函数构造、带约束极值（常用拉格朗日或代入法），以及 MLE 的不变性。


> 来源：《26_张宇四套卷（数一）》卷一 第 16 题
