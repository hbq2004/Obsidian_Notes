---
ctime: 2026-08-16 22:04:20
mtime: 2026-08-20 01:29:33
tags:
  - LA
  - 27_1000/C20/a/FIB
  - 计算题
  - 矩阵
  - 矩阵幂
  - 幂零矩阵
points:
level:
---

# FIB 第 2 题

![[_Attachments/题目识别/1000-XG/1000-XG-TCBEB7E-Q002_题目.png|题目]]

2. 设 $A=\begin{bmatrix}1&1\\0&1\end{bmatrix}$, $B=\begin{bmatrix}-1&1\\0&-1\end{bmatrix}$, 则 $A^{9}-B^{9}=$ \_ .

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-XG-TCBEB7E-Q002_答案.png|答案]]

﻿## V4 Pro Max 解析

**答案**：$A^9-B^9=\begin{bmatrix}2&0\\0&2\end{bmatrix}=2E$

**切入点**：$A= E+N$（$N$ 为幂零移位），$B=-E+N$，用二项式展开（$N^2=0$）快速求高次幂。类比"幂零部分让二项式只保留前两项"。

**推演**

设 $N=\begin{bmatrix}0&1\\0&0\end{bmatrix}$，$N^2=0$。则
$$A^9=(E+N)^9=E+9N=\begin{bmatrix}1&9\\0&1\end{bmatrix},$$
$$B^9=(-E+N)^9=(-1)^9E+9(-1)^8N=-E+9N=\begin{bmatrix}-1&9\\0&-1\end{bmatrix}.$$
故
$$A^9-B^9=\begin{bmatrix}1&9\\0&1\end{bmatrix}-\begin{bmatrix}-1&9\\0&-1\end{bmatrix}=\begin{bmatrix}2&0\\0&2\end{bmatrix}.$$

**易错点**：$(-E+N)^9$ 的符号：首项 $(-E)^9=-E$，第二项 $9(-E)^8N=9N$；均因 $N^2=0$ 后项全部消失。

**命题规律**：$E+N$（$N$ 幂零）的高次幂用二项式定理截断，是矩阵幂的经典速算。
