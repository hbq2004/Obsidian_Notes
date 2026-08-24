---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - LA
  - 26_李林六套卷/卷五/MCQ
  - 计算题
  - 反对称矩阵
  - 分块矩阵求秩
  - 可逆矩阵判定
  - 初等变换不改变秩
  - 矩阵秩不等式
points:
level:
---

# 选择题 第 7 题

![[_Attachments/题目识别/LL6T/LL6T-S5-Q07_题目.png|题目]]

设 $n$ 阶非零实矩阵 $A$ 满足 $A^{T}+A=O$, $B$ 为 $n$ 阶矩阵，矩阵 $\begin{pmatrix} A & E \\ -B & B \end{pmatrix}$, $\begin{pmatrix} A-E & O \\ A & AB \end{pmatrix}$, $\begin{pmatrix} A+E & O \\ B & A-E \end{pmatrix}$ 的秩依次为 $r_1,r_2,r_3$, 则.

(A) $r_1 \geqslant r_2 \geqslant r_3$.
(B) $r_3 \geqslant r_2 \geqslant r_1$.
(C) $r_2 \geqslant r_1 \geqslant r_3$.
(D) $r_3 \geqslant r_1 \geqslant r_2$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S5-Q07_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】: **(D)**。由 $A^T=-A$ 可知 $E\pm A$ 可逆。三个分块矩阵的秩分别为

$$
r_1=n+\operatorname{rank}B,\quad r_2=n+\operatorname{rank}(AB),\quad r_3=2n.
$$

因为 $\operatorname{rank}(AB)\le \operatorname{rank}B$，所以 $r_3\ge r_1\ge r_2$。

**解题切入点**

反对称矩阵是本题题眼；用可逆块作分块初等变换（相当于高斯消元）把分块矩阵化为阶梯形，再数秩。

**推演**

1. 先证 $E\pm A$ 可逆。

对任意实向量 $x$，由 $A^T=-A$ 有 $x^TAx=(x^TAx)^T=-x^TAx$，故 $x^TAx=0$。

若 $(E+A)x=0$，则 $Ax=-x$，于是 $0=x^TAx=-x^Tx$，得 $x=0$，所以 $E+A$ 可逆；同理 $E-A$ 可逆，从而 $A-E=-(E-A)$ 可逆。

2. 求 $r_3$。

$$
M_3=\begin{pmatrix}A+E&O\\B&A-E\end{pmatrix}
$$

左乘 $\begin{pmatrix}E&O\\-B(A+E)^{-1}&E\end{pmatrix}$，消去左下角：

$$
\begin{pmatrix}E&O\\-B(A+E)^{-1}&E\end{pmatrix}M_3=\begin{pmatrix}A+E&O\\O&A-E\end{pmatrix}
$$

故 $r_3=n+n=2n$。

3. 求 $r_2$。

$$
M_2=\begin{pmatrix}A-E&O\\A&AB\end{pmatrix}
$$

左乘 $\begin{pmatrix}E&O\\-A(A-E)^{-1}&E\end{pmatrix}$，得

$$
\begin{pmatrix}A-E&O\\O&AB\end{pmatrix}
$$

所以 $r_2=n+\operatorname{rank}(AB)$。

4. 求 $r_1$。

$$
M_1=\begin{pmatrix}A&E\\-B&B\end{pmatrix}
$$

先交换两列块（右乘可逆矩阵 $\begin{pmatrix}O&E\\E&O\end{pmatrix}$）：

$$
M_1\begin{pmatrix}O&E\\E&O\end{pmatrix}=\begin{pmatrix}E&A\\B&-B\end{pmatrix}
$$

再左乘 $\begin{pmatrix}E&O\\-B&E\end{pmatrix}$：

$$
\begin{pmatrix}E&O\\-B&E\end{pmatrix}\begin{pmatrix}E&A\\B&-B\end{pmatrix}
=\begin{pmatrix}E&A\\O&-B(A+E)\end{pmatrix}
$$

因左上块为 $E$ 可逆，再用列变换消去右上 $A$，得 $\operatorname{rank}M_1=n+\operatorname{rank}(-B(A+E))$。由于 $A+E$ 可逆，右乘可逆矩阵不改变秩，所以

$$
r_1=n+\operatorname{rank}B.
$$

5. 比较大小。

由矩阵秩不等式 $\operatorname{rank}(AB)\le\min\{\operatorname{rank}A,\operatorname{rank}B\}\le\operatorname{rank}B$，有

$$
r_2=n+\operatorname{rank}(AB)\le n+\operatorname{rank}B=r_1\le 2n=r_3.
$$

因此 $r_3\ge r_1\ge r_2$，选 **(D)**。

选项判断：

- (A) 错：它需要 $r_2\ge r_3$，但一般 $r_2\le r_1\le r_3$，仅当特殊矩阵都相等时才会成立。
- (B) 错：它需要 $r_2\ge r_1$，与 $r_2\le r_1$ 相反；如 $A$ 奇异、$B=E$ 时 $r_2<r_1$。
- (C) 错：不可能有 $r_2\ge r_1\ge r_3$，因 $r_3=2n$ 已是最大且 $r_2\le r_1$。
- (D) 对。

**易错点**

- 不要把 $E+A$、$A-E$ 当成可能不可逆；反对称矩阵没有实特征值 $1,-1$，它们一定可逆。
- 分块消元时左乘/右乘的矩阵必须可逆；本题选用的都是分块初等变换矩阵。
- $\operatorname{rank}(AB)\le\operatorname{rank}B$ 与 $\operatorname{rank}(BA)\le\operatorname{rank}B$ 都成立，但题目中第二块是 $AB$，不要与 $BA$ 混淆。
- 算 $r_1$ 时不要忘记 $A+E$ 可逆，从而 $B(A+E)$ 的秩等于 $B$ 的秩。

**命题规律**

分块矩阵的秩是线代高频考点，常用手法是“可逆块消元+Schur补”。复习时要把上/下三角块矩阵的秩公式、矩阵乘法秩不等式、反对称矩阵性质串联起来；遇到此类题先找可逆对角块，再作分块初等变换。


> 来源：《26_李林六套卷（数一）》卷五 第 7 题
