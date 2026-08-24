---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - PS
  - 26_余丙森五套卷/卷五/MCQ
  - 计算题
  - 最大似然估计
  - 均匀分布
  - 似然函数
  - 单调性
  - 次序统计量
points:
level:
---

# MCQ 第 10 题

![[_Attachments/题目识别/YBS5T/YBS5T-S5-Q10_题目.png|题目]]

设总体 $X \sim U[-\theta, \theta]$ ，其中未知参数 $\theta > 0$ ，$X_1, X_2, \cdots, X_n$ 为来自总体 $X$ 的简单随机样本，则 $\theta$ 的最大似然估计量 $\hat{\theta} = (\_)$.
(A) $\max_{1 \le i \le n} \{X_i\}$
(B) $-\min_{1 \le i \le n} \{X_i\}$
(C) $\max_{1 \le i \le n} \{|X_i|\}$
(D) $\min_{1 \le i \le n} \{|X_i|\}$

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S5-Q10_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
【答案】(C)。
【推演】(速判) 密度非零要求 $\theta\ge M=\max_{1\le i\le n}|X_i|$，而 $(2\theta)^{-n}$ 随 $\theta$ 增大而减小，所以最大似然估计取可行域左端点 $M$。

**解题切入点**
题目是“参数决定分布支撑”的 MLE，不能只对似然函数求导。算法竞赛视角：先找可行域，再在可行域上最小化递减目标。

**推演**
1. 总体密度可写为
$$
f(x;\theta)=\frac{1}{2\theta}\, I_{[-\theta,\theta]}(x),
$$
其中 $I$ 为示性函数。于是对样本 $X_1,\ldots,X_n$，似然函数为
$$
L(\theta)=\prod_{i=1}^n f(X_i;\theta)
=(2\theta)^{-n}\prod_{i=1}^n I_{[-\theta,\theta]}(X_i)
=(2\theta)^{-n} I(\theta\ge M),
$$
其中
$$
M=\max_{1\le i\le n}|X_i|.
$$
2. 要使 $L(\theta)>0$，必须有 $\theta\ge M$；在该可行域内 $L(\theta)=(2\theta)^{-n}$ 关于 $\theta$ 单调递减，所以最大值在 $\theta=M$ 取得：
$$
\hat\theta=M=\max_{1\le i\le n}|X_i|.
$$
3. 选项判定：
- (A) $\max X_i$：若样本全为负，则 $\max X_i<M$，似然为0，不是MLE。
- (B) $-\min X_i$：若样本全为正，则 $-\min X_i<M$，同样不是MLE。
- (C) $\max |X_i|$：正确。
- (D) $\min |X_i|$：通常小于必要的 $\theta$ 下界 $M$，错误。

**易错点**
1. 不能只对 $(2\theta)^{-n}$ 求导，还必须考虑密度非零区域对 $\theta$ 的限制 $\theta\ge\max|x_i|$。
2. 不要误选 $\max X_i$ 或 $-\min X_i$；区间对称时只有 $\max|X_i|$ 能同时保证所有样本点落入 $[-\theta,\theta]$。
3. 若写成 $L=\prod I_{[-\theta,\theta]}(X_i)$，需注意 $I$ 条件等价于 $\theta\ge M$。

**命题规律**
本题属于经典“均匀分布未知半径”的MLE题，核心是似然函数含示性函数后不能机械求导。复习时应掌握带支撑（定义域）与参数有关的分布：$U[0,\theta]$、$U[-\theta,\theta]$、$U[\theta,2\theta]$ 等，并灵活使用次序统计量表述。


> 来源：《26_余丙森五套卷（数一）》卷五 第 10 题
