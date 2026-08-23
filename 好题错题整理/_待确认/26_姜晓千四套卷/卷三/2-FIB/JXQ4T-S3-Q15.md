---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - LA
  - 26_姜晓千四套卷/卷三/FIB
  - 计算题
  - 矩阵乘积为零矩阵
  - 线性方程组通解
  - 矩阵的秩
  - 向量线性相关
points:
level:
---

# FIB 第 15 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S3-Q15_题目.png|题目]]

设 $3$ 阶非零矩阵 $\mathbf{A}=(\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \boldsymbol{\alpha}_3)$，其中 $\boldsymbol{\alpha}_3 = \boldsymbol{\alpha}_1 + \boldsymbol{\alpha}_2$ . 若 $\mathbf{B} = \begin{pmatrix} 1 & -2 & a+3 \\ 0 & a & 0 \\ -3 & 6 & -9 \end{pmatrix}$，且满足 $\mathbf{A}\mathbf{B}=\mathbf{O}$，则线性方程组 $\mathbf{A}\mathbf{x}=\mathbf{0}$ 的通解为 \_ .

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S3-Q15_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由 $\mathbf{AB}=\mathbf{O}$ 可得
\[
\mathbf{A}\mathbf{b}_1 = -2\boldsymbol{\alpha}_1-3\boldsymbol{\alpha}_2=\mathbf{0},
\]
故 $\boldsymbol{\alpha}_2=-\frac23\boldsymbol{\alpha}_1$, 进而 $a=0$。此时
\[
\mathbf{A}\mathbf{x}=\left(x_1-\frac23x_2+\frac13x_3\right)\boldsymbol{\alpha}_1,
\]
且 $\boldsymbol{\alpha}_1\ne\mathbf{0}$，故
\[
3x_1-2x_2+x_3=0.
\]

【答案】
\[
\boxed{\mathbf{x}=C_1\begin{pmatrix}2\\3\\0\end{pmatrix}+C_2\begin{pmatrix}-1\\0\\3\end{pmatrix},\quad C_1,C_2\in\mathbb{R}}
\]

**解题切入点**

已知列向量关系 $\boldsymbol{\alpha}_3=\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2$ 相当于矩阵列线性相关，先由 $\mathbf{AB}=O$ 把 $B$ 的各列代入 $\mathbf{A}x=0$，确定参数 $a$ 与列向量比例，再求基础解系。这类似算法竞赛中“已知若干向量被映射到 0，反推零空间”。

**推演**

设 $\mathbf{b}_1,\mathbf{b}_2,\mathbf{b}_3$ 为 $\mathbf{B}$ 的三个列向量，由 $\mathbf{AB}=\mathbf{O}$ 知每个 $\mathbf{b}_i$ 都是 $\mathbf{A}\mathbf{x}=0$ 的解。

\[
\mathbf{b}_1=\begin{pmatrix}1\\0\\-3\end{pmatrix},\quad
\mathbf{b}_2=\begin{pmatrix}-2\\a\\6\end{pmatrix},\quad
\mathbf{b}_3=\begin{pmatrix}a+3\\0\\-9\end{pmatrix}.
\]

因为 $\boldsymbol{\alpha}_3=\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2$，所以

\[
\mathbf{A}\mathbf{b}_1=-2\boldsymbol{\alpha}_1-3\boldsymbol{\alpha}_2=\mathbf{0},
\]
\[
\mathbf{A}\mathbf{b}_2=4\boldsymbol{\alpha}_1+(a+6)\boldsymbol{\alpha}_2=\mathbf{0},
\]
\[
\mathbf{A}\mathbf{b}_3=(a-6)\boldsymbol{\alpha}_1-9\boldsymbol{\alpha}_2=\mathbf{0}.
\]

又 $\mathbf{A}\ne\mathbf{O}$，故 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 不全为零。由第一式得
\[
\boldsymbol{\alpha}_2=-\frac23\boldsymbol{\alpha}_1,
\]
且 $\boldsymbol{\alpha}_1\ne\mathbf{0}$。代入第二式：
\[
4\boldsymbol{\alpha}_1+(a+6)\left(-\frac23\boldsymbol{\alpha}_1\right)=0
\Rightarrow 6=a+6 \Rightarrow a=0.
\]

第三式自动满足。于是
\[
\boldsymbol{\alpha}_2=-\frac23\boldsymbol{\alpha}_1,\quad \boldsymbol{\alpha}_3=\frac13\boldsymbol{\alpha}_1.
\]

对 $\mathbf{x}=(x_1,x_2,x_3)^T$，
\[
\mathbf{A}\mathbf{x}=x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2+x_3\boldsymbol{\alpha}_3
=\left(x_1-\frac23x_2+\frac13x_3\right)\boldsymbol{\alpha}_1.
\]

因 $\boldsymbol{\alpha}_1\ne0$，故
\[
x_1-\frac23x_2+\frac13x_3=0
\iff 3x_1-2x_2+x_3=0.
\]

取 $x_2=s,x_3=t$，则 $x_1=\frac{2s-t}{3}$，于是
\[
\mathbf{x}=s\begin{pmatrix}2/3\\1\\0\end{pmatrix}+t\begin{pmatrix}-1/3\\0\\1\end{pmatrix}
=C_1\begin{pmatrix}2\\3\\0\end{pmatrix}+C_2\begin{pmatrix}-1\\0\\3\end{pmatrix}.
\]

关键给分点：能由 $\mathbf{A}\mathbf{b}_1=\mathbf{0}$ 得到 $\boldsymbol{\alpha}_2=-\frac23\boldsymbol{\alpha}_1$，由 $\mathbf{A}\mathbf{b}_2=\mathbf{0}$ 确定 $a=0$，并正确写出通解。

**易错点**

1. 不能直接断定 $\mathbf{B}$ 的列就是全部基础解系；它只是零空间中的若干个解，还需从 $\mathbf{A}\ne\mathbf{O}$ 推出 $\boldsymbol{\alpha}_1\ne0$。
2. 求出 $a=0$ 后不要忘记把 $\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 统一用 $\boldsymbol{\alpha}_1$ 表示，否则通解易写错。
3. 基础解系写法不唯一，只要保证两解线性无关且满足 $3x_1-2x_2+x_3=0$ 即可。

**命题规律**

本题把 $\mathbf{AB}=\mathbf{O}$ 与列向量线性关系结合，核心是“零空间”与“列空间秩”的互推。复习时应熟练将矩阵乘法按列分块，并理解齐次方程组通解与基础解系的关系；类似题可先求参数，再定秩，最后写通解。


> 来源：《26_姜晓千四套卷（数一）》卷三 第 15 题
