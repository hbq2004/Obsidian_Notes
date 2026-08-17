---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
tags:
  - PS
  - 26_ep五套卷/套五/MCQ
  - 计算题
  - 二维正态分布
  - 期望计算
  - 随机变量函数
  - 相关系数
  - 绝对值期望
points:
level:
---

# MCQ 第 9 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q09_题目.png|题目]]

9. 设二维随机变量 $(X, Y) \sim N\left(0, 0; 1, 1; \frac{1}{2}\right)$，则 $E(\max\{X, Y\}) = ( )$

A. $\frac{1}{\sqrt{\pi}}$

B. $\frac{1}{\sqrt{2\pi}}$

C. $\sqrt{\frac{2}{\pi}}$

D. $\frac{\sqrt{\pi}}{2}$


---

## 解析（AI 生成，仅供参考）

【考点】本题考查二维正态分布下最大值期望的计算，核心是转化为 $E|X-Y|$，类似算法题中求两数差值的绝对值。

【解】设 $Z = X - Y$，则 $E(\max\{X,Y\}) = E\left(\frac{X+Y+|X-Y|}{2}\right)$。由于 $E(X)=E(Y)=0$，故 $E(\max)=\frac{1}{2}E|Z|$。又 $Z \sim N(0, \sigma_Z^2)$，其中 $\sigma_Z^2 = Var(X-Y)=1+1-2\rho=2-2\cdot\frac12=1$。所以 $Z \sim N(0,1)$。对于标准正态，$E|Z| = \int_{-\infty}^{\infty} |z| \frac{1}{\sqrt{2\pi}}e^{-z^2/2}dz = 2\int_0^\infty z \frac{1}{\sqrt{2\pi}}e^{-z^2/2}dz = \sqrt{\frac{2}{\pi}}$。因此 $E(\max)=\frac12 \cdot \sqrt{\frac{2}{\pi}} = \frac{1}{\sqrt{2\pi}}$。

【答案】选择 B。选项A是 $\rho=0$ 时的结果；选项C是 $E|Z|$ 的值；选项D无意义。

【易错点】易错在将 $E(\max)$ 误算为 $E|X-Y|$（忘记除以2）；或错误使用独立时的公式。防错：牢记公式 $E\max = \frac12(E(X+Y)+E|X-Y|)$。若相关系数 $\rho$ 非零，则 $Var(X-Y)=2(1-\rho)$。本题题面按 $N(0,0;1,1;1/2)$ 理解，即均值为0，方差为1，相关系数为1/2。

【命题规律】二维正态的期望极值问题常考，利用 $|X-Y|$ 的期望转化。复习时应掌握均值、方差、相关系数的关系及正态分布绝对值的期望公式。

> AI 生成，仅供参考。

