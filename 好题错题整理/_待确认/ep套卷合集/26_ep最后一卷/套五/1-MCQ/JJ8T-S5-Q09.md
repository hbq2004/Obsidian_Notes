---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-20 01:32:04
tags:
  - PS
  - 26_ep最后一卷/套五/MCQ
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

## DeepSeek V4 Flash Max

【考点】本题考查二维正态分布下最大值期望的计算，核心是转化为 $E|X-Y|$，类似算法题中求两数差值的绝对值。

【解】设 $Z = X - Y$，则 $E(\max\{X,Y\}) = E\left(\frac{X+Y+|X-Y|}{2}\right)$。由于 $E(X)=E(Y)=0$，故 $E(\max)=\frac{1}{2}E|Z|$。又 $Z \sim N(0, \sigma_Z^2)$，其中 $\sigma_Z^2 = Var(X-Y)=1+1-2\rho=2-2\cdot\frac12=1$。所以 $Z \sim N(0,1)$。对于标准正态，$E|Z| = \int_{-\infty}^{\infty} |z| \frac{1}{\sqrt{2\pi}}e^{-z^2/2}dz = 2\int_0^\infty z \frac{1}{\sqrt{2\pi}}e^{-z^2/2}dz = \sqrt{\frac{2}{\pi}}$。因此 $E(\max)=\frac12 \cdot \sqrt{\frac{2}{\pi}} = \frac{1}{\sqrt{2\pi}}$。

【答案】选择 B。选项A是 $\rho=0$ 时的结果；选项C是 $E|Z|$ 的值；选项D无意义。

【易错点】易错在将 $E(\max)$ 误算为 $E|X-Y|$（忘记除以2）；或错误使用独立时的公式。防错：牢记公式 $E\max = \frac12(E(X+Y)+E|X-Y|)$。若相关系数 $\rho$ 非零，则 $Var(X-Y)=2(1-\rho)$。本题题面按 $N(0,0;1,1;1/2)$ 理解，即均值为0，方差为1，相关系数为1/2。

【命题规律】二维正态的期望极值问题常考，利用 $|X-Y|$ 的期望转化。复习时应掌握均值、方差、相关系数的关系及正态分布绝对值的期望公式。

---

## V4 Flash Max 解析

**答案**: B。利用 $\max(X,Y)=\frac{X+Y+|X-Y|}{2}$，且由题设可得 $X-Y\sim N(0,1)$，所以  
$$
E[\max(X,Y)]=\frac12 E|X-Y|=\frac{1}{\sqrt{2\pi}}.
$$

**解题切入点**: 看到二维正态求 $\max$ 期望，不要立刻写二维积分。算法竞赛里常用恒等式 $\max(a,b)=\frac{a+b+|a-b|}{2}$ 来去掉分支，这里同理：把“取最大”这个非线性操作拆成线性部分 $X+Y$ 和绝对值部分 $X-Y$。二维正态的线性组合仍是一维正态，问题化为求标准正态绝对值的期望。

**推演**:  
题中 $N(0,0;1,1;\frac12)$ 表示均值为 $0$，方差均为 $1$，相关系数 $\rho=\frac12$。

令
$$
U=Y-X.
$$
由于 $(X,Y)$ 服从二维正态分布，所以 $U$ 服从一维正态分布。

计算其均值与方差：
$$
E(U)=EY-EX=0,
$$
$$
\operatorname{Var}(U)=\operatorname{Var}(Y-X)
=\operatorname{Var}(Y)+\operatorname{Var}(X)-2\operatorname{Cov}(X,Y).
$$

其中
$$
\operatorname{Cov}(X,Y)=\rho\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}
=\frac12.
$$

所以
$$
\operatorname{Var}(U)=1+1-2\cdot \frac12=1.
$$

因此
$$
U=Y-X\sim N(0,1).
$$

又因为
$$
\max(X,Y)=\frac{X+Y+|X-Y|}{2},
$$

两边取期望：
$$
E[\max(X,Y)]
=\frac12\left(EX+EY+E|X-Y|\right)
=\frac12 E|U|.
$$

计算标准正态绝对值的期望：
$$
E|U|
=\int_{-\infty}^{+\infty}|u|\frac{1}{\sqrt{2\pi}}e^{-u^2/2}\,du
=\frac{2}{\sqrt{2\pi}}\int_0^{+\infty}u e^{-u^2/2}\,du.
$$

而
$$
\int_0^{+\infty}u e^{-u^2/2}\,du=1,
$$

所以
$$
E|U|=\sqrt{\frac{2}{\pi}}.
$$

最终：
$$
E[\max(X,Y)]
=\frac12\sqrt{\frac{2}{\pi}}
=\frac{1}{\sqrt{2\pi}}.
$$

故选项 **B** 正确。

**易错点**:  
1. 误把 $X,Y$ 当作独立，会算成 $\operatorname{Var}(Y-X)=2$，得到 $E[\max]=\frac{1}{\sqrt{\pi}}$，即选项 A。  
2. 忘记了 $\max$ 恒等式外面的 $\frac12$，直接把 $E|X-Y|=\sqrt{\frac{2}{\pi}}$ 当作答案，会选 C。  
3. 要明确二维正态的任意线性组合仍然正态，不能只凭边缘分布判断 $Y-X$ 的分布。  
4. 自检：若 $\rho=0$，答案为 $1/\sqrt{\pi}$；若 $\rho=1$，则 $X=Y$，答案应趋于 $0$。本题 $\rho=\frac12$，答案 $1/\sqrt{2\pi}$ 介于两者之间，合理。

**命题规律**:  
数一常考二维正态分布的三条核心性质：边缘分布正态、线性组合正态、不相关等价于独立。本题把“线性组合正态”和“绝对值期望”结合起来。常见变式还有：  
- 求 $E[\min(X,Y)]$，利用 $\min(X,Y)=\frac{X+Y-|X-Y|}{2}$；  
- 求 $E|X-Y|$；  
- 求 $P(X>Y)$，即 $P(X-Y>0)$；  
- 若均值为 $0$、方差相等，可记忆公式  
$$
E[\max(X,Y)]=\sqrt{\frac{1-\rho}{\pi}}.
$$
相关系数越大，$X,Y$ 越接近，$\max$ 的期望越小。
