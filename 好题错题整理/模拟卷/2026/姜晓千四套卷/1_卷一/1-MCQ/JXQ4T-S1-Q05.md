---
ctime: 2026-08-23 21:36:39
mtime: 2026-08-23 21:36:39
tags:
  - LA
  - 26_姜晓千四套卷/卷一/MCQ
  - 概念题
  - 分块矩阵秩
  - 可逆分块列变换
  - 列向量线性表示
  - 矩阵方程有解
  - 充分必要条件
points:
level:
---

# MCQ 第 5 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S1-Q05_题目.png|题目]]

设 $A, B, C$ 均为 $n$ 阶矩阵，则 $r \begin{pmatrix} A & C \\ O & B \end{pmatrix} = r(A) + r(B)$ 是 $C$ 的列向量可由 $A$ 的列向量线性表示的 ( ) .

(A) 必要非充分条件
(B) 充分非必要条件
(C) 充分必要条件
(D) 既非充分又非必要条件

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S1-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】: (A) 必要非充分条件。

设 $P$ 为题中秩等式，$Q$ 表示“$C$ 的列向量可由 $A$ 的列向量线性表示”。

**解题切入点**

把“列向量可由 $A$ 的列向量线性表示”转化为矩阵方程 $C=AX$ 有解；若成立，用可逆分块列变换 $\begin{pmatrix}I&-X\\O&I\end{pmatrix}$ 消去右上块，秩不变。反向构造 $A=O,B=I,C=I$ 即可说明不充分。这就像算法竞赛中先证明一个方向的归约，再用反例击穿逆归约。

**推演**

记 $M=\begin{pmatrix}A&C\\O&B\end{pmatrix}$。

1. 证明 $Q\Rightarrow P$（必要性方向）：若 $C$ 的列向量可由 $A$ 的列向量线性表示，则存在 $n$ 阶矩阵 $X$，使 $C=AX$。于是
$$
M\begin{pmatrix}I&-X\\O&I\end{pmatrix}
=\begin{pmatrix}A&AX\\O&B\end{pmatrix}\begin{pmatrix}I&-X\\O&I\end{pmatrix}
=\begin{pmatrix}A&O\\O&B\end{pmatrix}.
$$
由于 $\begin{pmatrix}I&-X\\O&I\end{pmatrix}$ 可逆，所以
$$
r(M)=r\begin{pmatrix}A&O\\O&B\end{pmatrix}=r(A)+r(B).
$$
因此 $Q$ 成立时 $P$ 必成立，即 $P$ 是 $Q$ 的必要条件。

2. 证明 $P\not\Rightarrow Q$（不充分）：取 $A=O,\ B=I,\ C=I$，则
$$
M=\begin{pmatrix}O&I\\O&I\end{pmatrix},\qquad r(M)=n,
$$
且 $r(A)+r(B)=0+n=n$，故 $P$ 成立。但 $A$ 的列向量全为零向量，$C=I$ 的任一列均为非零单位向量，不能由零向量线性表示，故 $Q$ 不成立。所以 $P$ 不是 $Q$ 的充分条件。

3. 选项分析：

(A) 正确：$Q\Rightarrow P$ 且 $P\not\Rightarrow Q$；

(B) 错误：$P$ 不能推出 $Q$；

(C) 错误：$Q\Rightarrow P$ 但 $P\not\Rightarrow Q$，不是充要条件；

(D) 错误：$P$ 是必要条件，并非既非必要又非充分。

故答案为 (A)。

**易错点**

- 容易把“$P$ 是 $Q$ 的必要条件”和“$Q$ 是 $P$ 的必要条件”混淆；本题关键是 $Q\Rightarrow P$。
- 不要以为分块下三角矩阵的秩一定等于 $r(A)+r(B)$；题中秩等式是额外条件，不能用它直接推出 $C=AX$ 有解。
- 构造反例时常用 $A=O$、$B=I$，让秩等式左边只由 $B$ 贡献，而 $C$ 放一个非零块，即可说明不充分。

**命题规律**

- 分块矩阵与秩、线性表示结合的选择题，核心是“$C=AX$ 有解”与“可逆分块变换不改变秩”。
- 复习时应掌握分块矩阵的乘法、分块初等变换的构造，以及矩阵方程 $AX=C$ 有解的秩判据。
- 遇到充分/必要判断题，务必两个方向都验证；常用零矩阵、单位矩阵构造反例。


> 来源：《26_姜晓千四套卷（数一）》卷一 第 5 题
