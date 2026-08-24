---
ctime: 2026-08-24 15:13:02
mtime: 2026-08-24 15:13:02
tags:
  - LA
  - 26_余丙森五套卷/卷一/MCQ
  - 概念题
  - 线性相关与线性无关
  - 非齐次方程组有解判定
  - 齐次方程组非零解
  - 矩阵的秩
points:
level:
---

# MCQ 第 6 题

![[_Attachments/题目识别/YBS5T/YBS5T-S1-Q06_题目.png|题目]]

设 $\boldsymbol{A}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n)$ 是 $s \times n$ 矩阵，$\boldsymbol{b}$ 是 $s$ 维列向量，则以下正确的是（ ）.
(A) 方程组 $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}$ 有解的一个充分条件是向量组 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n,\boldsymbol{b}$ 线性相关
(B) 方程组 $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}$ 无解的一个必要条件是向量组 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n,\boldsymbol{b}$ 线性无关
(C) 方程组 $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}$ 有唯一解的一个充分条件是 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n$ 线性无关
(D) 方程组 $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}$ 有两个不同的解的一个必要条件是 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n$ 线性相关

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S1-Q06_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(D)。

**解题切入点**

本题将线性方程组解的情况转化为列向量组的线性相关性问题：$Ax=b$ 有解等价于 $b\in\operatorname{span}\{\alpha_1,\ldots,\alpha_n\}$；$Ax=0$ 有非零解等价于列向量组线性相关。可类比为“集合成员查询”：判断 $b$ 是否在列空间内，而不是只看增广组是否线性相关。

**推演**

逐一分析各选项。

(A) 错误。$\alpha_1,\ldots,\alpha_n,b$ 线性相关只说明存在不全为零的 $k_1,\ldots,k_n,k$，使 $k b+\sum_{j=1}^n k_j\alpha_j=0$。若 $k=0$，则只是 $\alpha_j$ 自身线性相关，不能推出 $b$ 可由它们线性表示。例如 $\alpha_1=(1,0)^T,\alpha_2=(2,0)^T,b=(0,1)^T$，则 $\alpha_1,\alpha_2,b$ 在 $\mathbb R^2$ 中必线性相关，但 $Ax=b$ 无解。

(B) 错误。无解只能推出 $b\notin\operatorname{span}\{\alpha_1,\ldots,\alpha_n\}$，不能推出增广列向量组线性无关。若 $\alpha_1,\ldots,\alpha_n$ 自身相关，增广组也必相关。仍取上例，$Ax=b$ 无解，但 $\alpha_1,\alpha_2$ 已经线性相关。

(C) 错误。$\alpha_1,\ldots,\alpha_n$ 线性无关只能说明 $\operatorname{rank}A=n$；有唯一解还要求 $b$ 在列空间中，即 $\operatorname{rank}A=\operatorname{rank}(A,b)=n$。例如 $A=(1,0)^T,\ b=(0,1)^T$，$\alpha_1$ 线性无关，但 $Ax=b$ 无解。

(D) 正确。设 $x_1\ne x_2$ 都是 $Ax=b$ 的解，则 $A(x_1-x_2)=0$。令 $d=x_1-x_2\ne0$，设 $d=(d_1,\ldots,d_n)^T$，则 $\sum_{j=1}^n d_j\alpha_j=0$，且 $d_j$ 不全为零，所以 $\alpha_1,\ldots,\alpha_n$ 线性相关。

**易错点**

1. 把增广列向量组线性相关误认为一定有解；只有表示式中 $b$ 的系数非零时才可解。
2. 把无解误认为增广列向量组线性无关；无解只说明 $b$ 不属于列空间。
3. 把列向量线性无关误认为对任意 $b$ 都有唯一解；还需满足 $b$ 在列空间中，或 $s=n$ 且 $A$ 可逆。
4. 两个不同解相减得到齐次方程的非零解，这是判断 (D) 的关键。

**命题规律**

线性方程组解的存在唯一性与向量组线性相关、矩阵秩的关系是高频考点。复习时抓住 $Ax=b$ 有解 $\iff \operatorname{rank}A=\operatorname{rank}(A,b)$，唯一解再加 $\operatorname{rank}A=n$；若有无穷多解则 $\operatorname{rank}A<n$，从而列向量线性相关。


> 来源：《26_余丙森五套卷（数一）》卷一 第 6 题
