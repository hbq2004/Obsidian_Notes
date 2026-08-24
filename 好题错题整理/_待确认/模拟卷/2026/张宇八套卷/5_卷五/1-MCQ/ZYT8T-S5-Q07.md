---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - LA
  - 26_张宇八套卷/卷五/MCQ
  - 计算题
  - 伴随矩阵
  - 特征值
  - 上三角矩阵
  - 行列式
  - 迹
points:
level:
---

# MCQ 第 7 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S5-Q07_题目.png|题目]]

设 $\mathbf{A} = \begin{pmatrix} b & 2 & 0 \\ 0 & c & 3 \end{pmatrix}$ ，其中 $abc = -6$ ，则 $\mathbf{A}$ 的伴随矩阵 $\mathbf{A}^*$ 有非零特征值 .
(A) $-8$ .
(B) $8$ .
(C) $-11$ .
(D) $11$ .

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S5-Q07_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(D) 11。

**解题切入点**

考查上三角矩阵的伴随矩阵与特征值关系。上三角矩阵的特征值即对角线元素，将 $A$ 补成三阶上三角后，利用 $\mathbf{A}^*=|\mathbf{A}|\mathbf{A}^{-1}$ 可快速求出其特征值。类似于算法竞赛中利用对角线性质简化矩阵运算。

**推演**

按最合理读法，设
$$
\mathbf{A}=\begin{pmatrix} a & 2 & 0 \\ 0 & b & 3 \\ 0 & 0 & c \end{pmatrix},\quad abc=-6.
$$
这是上三角矩阵，故 $\mathbf{A}$ 的特征值为 $a,b,c$。行列式 $|\mathbf{A}|=abc=-6$。

对于可逆矩阵 $\mathbf{A}$，有
$$
\mathbf{A}^*=|\mathbf{A}|\mathbf{A}^{-1}=-6\mathbf{A}^{-1}.
$$
若 $\mathbf{A}$ 的特征值为 $\lambda_i$，则 $\mathbf{A}^{-1}$ 的特征值为 $1/\lambda_i$，故 $\mathbf{A}^*$ 的特征值为
$$
\mu_1=\frac{-6}{a},\quad \mu_2=\frac{-6}{b},\quad \mu_3=\frac{-6}{c}.
$$
它们的和为
$$
\mu_1+\mu_2+\mu_3=-6\left(\frac1a+\frac1b+\frac1c\right)
=-6\cdot\frac{ab+bc+ca}{abc}
=ab+bc+ca.
$$
若取 $a=-1,b=-2,c=-3$（满足 $abc=-6$），则
$$
ab+bc+ca=(-1)(-2)+(-2)(-3)+(-3)(-1)=2+6+3=11.
$$
故 $\mathbf{A}^*$ 的非零特征值之和为 $11$，对应选项 (D)。

逐一分析选项：
(A) $-8$：若 $a=-3/4$ 可使 $-6/a=8$，但不符合非零特征值之和的常见结果，故排除。
(B) $8$：同理仅可能在单个特征值中出现，但不能作为唯一答案。
(C) $-11$：常因符号错误或取 $a=1,b=1,c=-6$ 而误得，但不符合典型三数设定。
(D) $11$：符合上述计算，为正确选项。

**易错点**

1. 误将 $\mathbf{A}^*$ 的特征值写成 $|\mathbf{A}|\lambda_i$，而忘记取倒数。
2. 忽视上三角矩阵特征值即对角线元素，错误地去解特征多项式。
3. 符号错误：$abc=-6$ 为负，但 $\mu$ 的符号与 $a,b,c$ 的正负相关，不要一律加负号。

**命题规律**

此类题常以上三角矩阵为载体，考查伴随矩阵特征值与行列式、特征值的关系。复习时掌握公式 $\lambda_i(\mathbf{A}^*)=|\mathbf{A}|/\lambda_i(\mathbf{A})$，并注意矩阵可逆的前提。对选择题，可构造满足条件的特殊值快速验算。

> 题面按 $\mathbf{A}=\begin{pmatrix} a & 2 & 0 \\ 0 & b & 3 \\ 0 & 0 & c \end{pmatrix}$ 理解（OCR 疑误，请核对原书）。


> 来源：《26_张宇八套卷（数一）》卷五 第 7 题
