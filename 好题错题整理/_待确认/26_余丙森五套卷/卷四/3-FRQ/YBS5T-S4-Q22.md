---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - PS
  - 26_余丙森五套卷/卷四/FRQ
  - 综合题
  - 指数分布
  - 多项分布
  - 协方差
  - 矩估计
  - 样本频数
points:
level:
---

# FRQ 第 22 题

![[_Attachments/题目识别/YBS5T/YBS5T-S4-Q22_题目.png|题目]]

设某批电子元件的寿命 $X$ (单位:小时) 服从参数为 $\lambda(\lambda > 0)$ 指数分布, $X_1, X_2, \cdots, X_{48}$ 为来自总体 $X$ 的简单随机样本. 记 $N_1$ 表示样本中满足 $X_i \leqslant 100$ 的 $X_i$ 的个数, $N_2$ 表示样本中满足 $100 < X_i < 200$ 的 $X_i$ 的个数, $N_3$ 表示样本中满足 $X_i \geqslant 200$ 的 $X_i$ 的个数.
$(1)$ 若已知 $\lambda = \frac{\ln 2}{100}$，求 $N_1, N_2, N_3$ 两两之间的协方差 $\operatorname{Cov}(N_1, N_2), \operatorname{Cov}(N_1, N_3), \operatorname{Cov}(N_2, N_3)$;
$(2)$ 当 $\lambda$ 未知时，由于疏忽，将样本值数据丢失，只记得 $N_1 = 12$. 在此情况下，求 $\lambda$ 的矩估计值 $\hat{\lambda}$.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S4-Q22_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**\n\n(1) $\operatorname{Cov}(N_1,N_2)=-6$，$\operatorname{Cov}(N_1,N_3)=-6$，$\operatorname{Cov}(N_2,N_3)=-3$。\n(2) $\hat{\lambda}=\dfrac{\ln(4/3)}{100}$。\n\n**解题切入点**\n\n本题将指数分布与多项分布结合，考查协方差计算和矩估计。算法竞赛类比：随机变量计数问题可转化为多项分布，协方差公式直接套用；矩估计利用样本矩等于总体矩，建立方程求解参数。\n\n**推演**\n\n(1) 由指数分布，$F(x)=1-e^{-\lambda x}$。代入$\lambda=\frac{\ln2}{100}$，得\n$p_1=P(X\le100)=1-e^{-100\lambda}=1-e^{-\ln2}=1/2$，\n$p_2=P(100<X<200)=e^{-100\lambda}-e^{-200\lambda}=e^{-\ln2}-e^{-2\ln2}=1/2-1/4=1/4$，\n$p_3=P(X\ge200)=e^{-200\lambda}=e^{-2\ln2}=1/4$。\n$N_1,N_2,N_3$服从多项分布$M(48;p_1,p_2,p_3)$，由多项分布协方差公式$\operatorname{Cov}(N_i,N_j)=-np_ip_j\ (i\ne j)$，得\n$\operatorname{Cov}(N_1,N_2)=-48\times\frac12\times\frac14=-6$，\n$\operatorname{Cov}(N_1,N_3)=-48\times\frac12\times\frac14=-6$，\n$\operatorname{Cov}(N_2,N_3)=-48\times\frac14\times\frac14=-3$。\n【关键给分点：正确计算概率；掌握多项分布协方差公式；代入计算正确。】\n\n(2) 当$\lambda$未知，$N_1\sim B(48,p_1)$，其中$p_1=1-e^{-100\lambda}$。矩估计用样本均值$\dfrac{N_1}{48}$估计总体均值$p_1$，即\n$\dfrac{12}{48}=\dfrac14=1-e^{-100\lambda}$，\n解得$e^{-100\lambda}=\dfrac34$，$ -100\lambda=\ln\dfrac34$，故$\hat{\lambda}=\dfrac{\ln(4/3)}{100}$。\n【关键给分点：正确建立矩估计方程；解指数方程；最终表达式正确。】\n\n**易错点**\n\n- 易混淆多项分布协方差与二项分布方差公式，误用$\operatorname{Cov}(N_i,N_j)=np_ip_j$（实际为负）。\n- 矩估计时误用$N_1$本身作为样本均值，未除以$n$。\n- 解指数方程时对$\ln$运算不熟悉，符号错误。\n\n**命题规律**\n\n本题综合指数分布、多项分布、矩估计，属于常规题型。概率论中，将连续型分布与离散计数结合是常见套路，需熟练掌握常见分布的数字特征及参数估计方法。复习时应注重多项分布协方差公式的推导与记忆，以及矩估计的基本步骤。


> 来源：《26_余丙森五套卷（数一）》卷四 第 22 题
