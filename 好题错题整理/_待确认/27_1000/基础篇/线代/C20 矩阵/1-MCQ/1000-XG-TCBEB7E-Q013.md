---
ctime: 2026-08-16 22:01:22
mtime: 2026-08-20 01:07:40
tags:
  - LA
  - 27_1000/C20/a/MCQ
  - 矩阵
  - 初等矩阵
  - 行列变换
points:
level:
---

# MCQ 第 13 题

![[_Attachments/题目识别/1000-XG/1000-XG-TCBEB7E-Q013_题目.png|题目]]

13. 将 3 阶方阵 $A$ 的第 1 行的 2 倍加到第 2 行得到矩阵 $B$，将 3 阶方阵 $C$ 的第 3 列的 -3 倍加到第 1 列得到矩阵 $D$。若 $BD=\begin{bmatrix}1&0&0\\0&2&0\\0&0&3\end{bmatrix}$，则 $AC=$(\_)。

A. $\begin{bmatrix}1&0&0\\2&2&0\\-9&0&3\end{bmatrix}$

B. $\begin{bmatrix}1&0&0\\-2&2&0\\9&0&3\end{bmatrix}$

C. $\begin{bmatrix}-3&0&0\\-6&2&0\\0&0&3\end{bmatrix}$

D. $\begin{bmatrix}1&0&0\\-2&2&0\\-1&0&3\end{bmatrix}$

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-XG-TCBEB7E-Q013_答案.png|答案]]

﻿## V4 Pro Max 解析

**答案**：B（$\begin{bmatrix}1&0&0\\-2&2&0\\9&0&3\end{bmatrix}$）

**切入点**：把"行变换 → 左乘 $E$、列变换 → 右乘 $F$"写出来，得 $E(AC)F=BD$ 的已知对角阵，再解出 $AC$。类比"还原两个初等变换"。

**推演**

$B=EA$，$E=\begin{bmatrix}1&0&0\\2&1&0\\0&0&1\end{bmatrix}$（$2\times$ 行 1 加到行 2）；$D=CF$，$F=\begin{bmatrix}1&0&0\\0&1&0\\-3&0&1\end{bmatrix}$（$-3\times$ 列 3 加到列 1）。故
$$BD=EA\,CF=E(AC)F=\begin{bmatrix}1&0&0\\0&2&0\\0&0&3\end{bmatrix}.$$
设 $X=AC$，则 $X=E^{-1}\operatorname{diag}(1,2,3)F^{-1}$。算得
$$X=\begin{bmatrix}1&0&0\\-2&1&0\\0&0&1\end{bmatrix}\begin{bmatrix}1&0&0\\0&2&0\\0&0&3\end{bmatrix}\begin{bmatrix}1&0&0\\0&1&0\\3&0&1\end{bmatrix}
=\begin{bmatrix}1&0&0\\-2&2&0\\9&0&3\end{bmatrix}.$$

**易错点**：$E$（行 2 加 2×行 1）与 $F$（列 1 加 $-3\times$列 3）要分别左乘、右乘；求 $X$ 时反方向乘 $E^{-1},F^{-1}$，且 $F^{-1}$ 里 $3$ 的符号转为 $+3$。

**命题规律**：用左右乘初等矩阵表示行列变换，再反解出原矩阵积，考查初等变换的矩阵语言。
