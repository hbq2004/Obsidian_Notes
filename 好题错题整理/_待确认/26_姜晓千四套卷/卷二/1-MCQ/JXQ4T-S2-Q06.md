---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - LA
  - 26_姜晓千四套卷/卷二/MCQ
  - 概念题
  - 特征向量与特征值
  - 矩阵多项式
  - 逆矩阵与伴随矩阵
  - 特征值非零性
  - 幂零矩阵反例
points:
level:
---

# MCQ 第 6 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S2-Q06_题目.png|题目]]

设 $A$ 为 $n$ 阶矩阵， $\alpha$ 为 $n$ 维非零列向量， $\lambda,\mu$ 为实数，则下列结论错误的是 ( ).

(A) 若 $A\alpha = \lambda\alpha$，则 $A^2\alpha = \lambda^2\alpha$

(B) 若 $A^2\alpha = \lambda^2\alpha$，则 $A\alpha = \lambda\alpha$

(C) 若 $A$ 可逆，且 $A^3\alpha = \lambda\alpha, A^5\alpha = \mu\alpha$，则 $A\alpha = \frac{\lambda^2}{\mu}\alpha$

(D) 若 $A$ 可逆，且 $A\alpha = \lambda\alpha$，则 $(A^* + A^{-1})\alpha = \frac{|A|+1}{\lambda}\alpha$

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S2-Q06_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
选择题【答案】：**(B)**。
（各选项对错分析见下文【推演】。）

**解题切入点**
本题的破题点在于：矩阵多项式作用于特征向量时，幂次可以“降”到特征值上；但反过来，由 $A^2\alpha=\lambda^2\alpha$ 不能直接“开方”得 $A\alpha=\lambda\alpha$。可逆条件下特征值 $\lambda,\mu$ 非零，可用逆矩阵和伴随矩阵的性质处理。

**推演**
逐项判断。

(A) 若 $A\alpha=\lambda\alpha$，则
$$
A^2\alpha=A(A\alpha)=A(\lambda\alpha)=\lambda A\alpha=\lambda^2\alpha.
$$
故 (A) 正确。

(B) 取 $A=-I$，$\alpha$ 为任意非零列向量，$\lambda=1$。则
$$
A^2\alpha=\alpha=1^2\alpha,
$$
但
$$
A\alpha=-\alpha\ne \alpha=1\cdot\alpha.
$$
故由 $A^2\alpha=\lambda^2\alpha$ 不能推出 $A\alpha=\lambda\alpha$，(B) 错误。

(C) 因 $A$ 可逆，$A^3,A^5$ 也可逆。由 $A^3\alpha=\lambda\alpha$ 且 $\alpha\ne0$ 得 $\lambda\ne0$（否则左乘 $A^{-3}$ 得 $\alpha=0$）；同理 $\mu\ne0$。又
$$
A^5\alpha=A^2(A^3\alpha)=A^2(\lambda\alpha)=\lambda A^2\alpha,
$$
所以 $\mu\alpha=\lambda A^2\alpha$，即 $A^2\alpha=\frac{\mu}{\lambda}\alpha$。于是
$$
\lambda\alpha=A^3\alpha=A(A^2\alpha)=A\left(\frac{\mu}{\lambda}\alpha\right)=\frac{\mu}{\lambda}A\alpha,
$$
故 $A\alpha=\frac{\lambda^2}{\mu}\alpha$，(C) 正确。

(D) 由 $A\alpha=\lambda\alpha$ 且 $A$ 可逆知 $\lambda\ne0$，且 $A^{-1}\alpha=\frac{1}{\lambda}\alpha$。又 $A^*=|A|A^{-1}$，所以
$$
(A^*+A^{-1})\alpha=(|A|A^{-1}+A^{-1})\alpha=(|A|+1)A^{-1}\alpha=\frac{|A|+1}{\lambda}\alpha.
$$
故 (D) 正确。

综上，错误的是 (B)。

**易错点**
1. 最容易错的是把 $A^2\alpha=\lambda^2\alpha$ 直接“开方”成 $A\alpha=\lambda\alpha$。平方会丢失符号信息：$A=-I$、$\lambda=1$ 即为反例；若 $\lambda=0$，还可取幂零矩阵使 $A\alpha$ 与 $\alpha$ 根本不共线。
2. 在可逆条件下忘记由 $A\alpha=\lambda\alpha$ 可得 $\lambda\ne0$，导致 (D) 中除以 $\lambda$ 时不够严谨。
3. 对伴随矩阵公式 $A^*=|A|A^{-1}$ 不熟，或把 $A^*$ 误认为共轭转置。

**命题规律**
本题考查特征向量、矩阵多项式、逆矩阵与伴随矩阵的联动关系。命题人常把“由高次幂特征关系反推低次幂”设为干扰项；复习时应强调“同一非零向量是 $A$ 的特征向量”这一前提，并熟悉可逆矩阵下特征值非零、$A^*=|A|A^{-1}$ 的转化。可用 $A=-I$ 或幂零矩阵快速构造反例。


> 来源：《26_姜晓千四套卷（数一）》卷二 第 6 题
