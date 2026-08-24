---
ctime: 2026-08-24 17:34:54
mtime: 2026-08-24 17:34:54
tags:
  - LA
  - 26_张宇八套卷/卷二/FRQ
  - 计算题
  - 正定矩阵平方根
  - 实对称矩阵对角化
  - 正交矩阵判定
  - 矩阵求逆与乘法
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S2-Q21_题目.png|题目]]

设 $\mathbf{A} = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$ ，$\mathbf{A}^{\mathrm{T}} \mathbf{A} = \mathbf{B}^2$ ，其中 $\mathbf{B}$ 为正定矩阵.
(1) 求 $\mathbf{B}$.
(2) 证明存在正交矩阵 $\mathbf{C}$ ，使得 $\mathbf{A} = \mathbf{C}\mathbf{B}$ ，并求出 $\mathbf{C}$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S2-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(1) 由 $A^TA=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}$，其正定平方根为
$$B=\begin{pmatrix}4/3&1/3&1/3\\1/3&4/3&1/3\\1/3&1/3&4/3\end{pmatrix}.$$

(2) 取 $C=AB^{-1}$，则 $C$ 为正交矩阵且 $A=CB$，其中
$$C=\begin{pmatrix}2/3&2/3&-1/3\\-1/3&2/3&2/3\\2/3&-1/3&2/3\end{pmatrix}.$$

关键给分点：算对 $A^TA$；正交对角化并对特征值开方得 $B$；由 $B^{-1}$ 构造 $C$ 并验证 $C^TC=I$；最后算出 $C$。

**解题切入点**

本题核心是正定矩阵的“平方根”和矩阵的极分解。先求实对称矩阵 $A^TA$ 的特征值与特征向量，将特征值开平方得到正定 $B$；再令 $C=AB^{-1}$，利用 $B^2=A^TA$ 验证 $C^TC=I$。算法竞赛类比：已知一个矩阵的平方，求“平方根”需先特征分解再开方；之后的 $C$ 相当于把 $A$ 右乘 $B^{-1}$ 做一次“归一化”。

**推演**

(1) 令 $G=A^TA$，则
$$G=\begin{pmatrix}1&1&0\\0&1&1\\1&0&1\end{pmatrix}^T\begin{pmatrix}1&1&0\\0&1&1\\1&0&1\end{pmatrix}=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}=I+J,$$
其中 $J$ 为全 1 矩阵。$J$ 的特征值为 $3,0,0$，故 $G$ 的特征值为 $4,1,1$，正定。

取正交归一的特征向量
$$q_1=\frac1{\sqrt3}(1,1,1)^T,\quad q_2=\frac1{\sqrt2}(1,-1,0)^T,\quad q_3=\frac1{\sqrt6}(1,1,-2)^T.$$
令 $Q=(q_1,q_2,q_3)$，则
$$G=Q\begin{pmatrix}4&0&0\\0&1&0\\0&0&1\end{pmatrix}Q^T.$$
正定平方根为
$$B=Q\begin{pmatrix}2&0&0\\0&1&0\\0&0&1\end{pmatrix}Q^T=2q_1q_1^T+q_2q_2^T+q_3q_3^T=I+q_1q_1^T=I+\frac13J=\begin{pmatrix}4/3&1/3&1/3\\1/3&4/3&1/3\\1/3&1/3&4/3\end{pmatrix}.$$
检验：因为 $J^2=3J$，
$$B^2=\left(I+\frac13J\right)^2=I+\frac23J+\frac19J^2=I+J=G.$$

(2) 因 $B$ 正定，故可逆。令 $C=AB^{-1}$，则
$$C^TC=(AB^{-1})^T(AB^{-1})=B^{-1}A^TAB^{-1}=B^{-1}B^2B^{-1}=I.$$
所以 $C$ 是正交矩阵，且
$$CB=AB^{-1}B=A.$$

下面求 $C$。由 $(I+\alpha J)^{-1}=I-\frac{\alpha}{1+3\alpha}J$，取 $\alpha=\frac13$，得
$$B^{-1}=I-\frac16J=\frac16\begin{pmatrix}5&-1&-1\\-1&5&-1\\-1&-1&5\end{pmatrix}.$$
于是
$$C=AB^{-1}=\frac16\begin{pmatrix}1&1&0\\0&1&1\\1&0&1\end{pmatrix}\begin{pmatrix}5&-1&-1\\-1&5&-1\\-1&-1&5\end{pmatrix}=\begin{pmatrix}2/3&2/3&-1/3\\-1/3&2/3&2/3\\2/3&-1/3&2/3\end{pmatrix}.$$

**易错点**

- $B$ 是 $A^TA$ 的正定平方根，不是直接对 $A$ 开方，也不是 $A$ 本身；特征值开方时只把 $4,1,1$ 变为 $2,1,1$，特征向量要选正交归一基。
- 求 $B^{-1}$ 时注意 $J^2=3J$，系数 $\beta=-\frac16$，不要误写成 $-\frac13$。
- $C$ 的构造顺序是 $AB^{-1}$；验证正交要用 $C^TC=I$，不要漏乘 $B^{-1}$，也不要把 $A^TA$ 写成 $A^2$。
- 最后算 $C$ 时小心矩阵乘法元素符号，尤其是负号位置。

**命题规律**

本题是“实对称矩阵/正定矩阵”与“正交矩阵”的综合题，背景是矩阵极分解：任意实可逆矩阵 $A$ 可写成正交矩阵 $C$ 与正定矩阵 $B$ 的乘积。近年线性代数大题常把特征值、二次型、正定、正交变换串在一起；复习时应熟练掌握正交对角化、正定矩阵平方根及正交矩阵的验证，并注意计算细节。


> 来源：《26_张宇八套卷（数一）》卷二 第 21 题
