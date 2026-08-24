---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - LA
  - 26_张宇四套卷/卷四/MCQ
  - 概念题
  - 特征向量
  - 向量正交
  - 实对称矩阵
  - 正交对角化
points:
level:
---

# 选择题 第 5 题

![[_Attachments/题目识别/ZY4T/ZY4T-S4-Q05_题目.png|题目]]

设 $\boldsymbol{\alpha}, \boldsymbol{\beta}$ 是 2 阶实矩阵 $\boldsymbol{A}$ 的两个实特征向量，$\|\boldsymbol{\alpha}+\boldsymbol{\beta}\|=\|\boldsymbol{\alpha}-\boldsymbol{\beta}\|$，则矩阵 $\boldsymbol{A}$ 必为.
(A) 正定矩阵.
(B) 单位矩阵.
(C) 正交矩阵.
(D) 对称矩阵.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S4-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

选择题【答案】: (D) 对称矩阵

**解题切入点**

将 $\|\alpha+\beta\|=\|\alpha-\beta\|$ 平方展开，得 $\alpha\cdot\beta=0$，即两特征向量正交；再利用正交特征向量构成正交矩阵 $P$，把 $A$ 表示为 $PDP^T$，从而判定对称。这类似于算法中“换一组正交基使矩阵表示简化”。

**推演**

【推演】逐一分析各选项对错/干扰项：

- (A) 正定矩阵：对称矩阵未必正定。如 $A=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ 有正交特征向量 $e_1,e_2$，满足条件，但不是正定。
- (B) 单位矩阵：条件远强于必要条件。如 $A=\begin{pmatrix}2&0\\0&3\end{pmatrix}$ 满足条件但不是单位矩阵。
- (C) 正交矩阵：对称矩阵未必正交。如 $A=\begin{pmatrix}2&0\\0&3\end{pmatrix}$ 不正交。
- (D) 对称矩阵：由下述证明可知 $A=PDP^T$，必为对称矩阵。

下面给出完整证明。

1. 由范数相等：
$$
\|\alpha+\beta\|^2=\|\alpha\|^2+\|\beta\|^2+2\alpha\cdot\beta,\quad
\|\alpha-\beta\|^2=\|\alpha\|^2+\|\beta\|^2-2\alpha\cdot\beta.
$$
两式相等，得 $4\alpha\cdot\beta=0$，故 $\alpha\cdot\beta=0$，即 $\alpha\perp\beta$。

2. 因为特征向量非零，且正交非零向量线性无关，所以 $\alpha,\beta$ 构成 $\mathbb R^2$ 的一组正交基。

3. 设 $A\alpha=\lambda_1\alpha,\ A\beta=\lambda_2\beta$。

4. 构造正交矩阵
$$
P=\left[\frac{\alpha}{\|\alpha\|},\ \frac{\beta}{\|\beta\|}\right],
$$
则
$$
AP=P\begin{pmatrix}\lambda_1&0\\0&\lambda_2\end{pmatrix}=PD,
$$
其中 $D=\operatorname{diag}(\lambda_1,\lambda_2)$（若 $\lambda_1=\lambda_2$ 也成立）。

5. 因 $P$ 正交，$P^T=P^{-1}$，所以 $A=PDP^T$。

6. 转置得
$$
A^T=(PDP^T)^T=PD^TP^T=PDP^T=A.
$$
故 $A$ 为实对称矩阵。

**易错点**

- 不要误将“特征向量正交”直接当作“矩阵对称”的充分条件；需通过正交对角化证明。
- 不要忘记特征向量非零；正交非零向量线性无关。
- 不要选“正定矩阵”，因为特征值符号未知；如 $\operatorname{diag}(1,-1)$ 满足条件但不是正定。
- 不要把“对称矩阵”与“正交矩阵”混为一谈；对称不一定正交。

**命题规律**

本题以向量范数条件包装线性代数概念，实际考察“实对称矩阵的判定”与“正交特征向量组”的关系。常将内积条件与特征向量结合，转化为 $A=PDP^T$。复习时应熟练掌握：若 $n$ 阶实矩阵有 $n$ 个两两正交的特征向量，则它必为实对称矩阵；反之，实对称矩阵不同特征值的特征向量正交。要区分正定、正交、单位等概念的强弱。


> 来源：《26_张宇四套卷（数一）》卷四 第 5 题
