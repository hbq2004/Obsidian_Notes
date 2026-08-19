---
ctime: 2026-08-16 22:00:43
mtime: 2026-08-20 01:07:40
tags:
  - LA
  - 27_1000/C20/a/MCQ
  - 矩阵
  - 三角分解
  - LU分解
points:
level:
---

# MCQ 第 1 题

![[_Attachments/题目识别/1000-XG/1000-XG-TCBEB7E-Q001_题目.png|题目]]

$$ 1. 以下矩阵乘积的结果为  \begin{bmatrix} 1 & -1 & 2 \\ 2 & 1 & 3 \\ 3 & 1 & 4 \end{bmatrix}  的是 ( )  .$$

A. $\left[\begin{array}{ccc}1 & 0 & 0 \\ 2 & 1 & 0 \\ 3 & \frac{4}{3} & 2\end{array}\right]\left[\begin{array}{ccc}1 & -1 & 2 \\ 0 & 3 & -1 \\ 0 & 0 & -\frac{2}{3}\end{array}\right]$

B. $\left[\begin{array}{ccc}1 & 0 & 0 \\ 2 & -1 & 0 \\ 3 & \frac{4}{3} & 1\end{array}\right]\left[\begin{array}{ccc}1 & -1 & 2 \\ 0 & -3 & -1 \\ 0 & 0 & -\frac{2}{3}\end{array}\right]$

C. $\left[\begin{array}{ccc}1 & 0 & 0 \\ 2 & 1 & 0 \\ 3 & \frac{4}{3} & 1\end{array}\right]\left[\begin{array}{ccc}1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & -\frac{2}{3}\end{array}\right]\left[\begin{array}{ccc}1 & -1 & 2 \\ 0 & 1 & -\frac{1}{3}\end{array}\right]$

D. $\left[\begin{array}{ccc}1 & 0 & 0 \\ 2 & -1 & 0 \\ 3 & \frac{4}{3} & 1\end{array}\right]\left[\begin{array}{ccc}1 & 0 & 0 \\ 0 & -3 & 0 \\ 0 & 0 & -\frac{2}{3}\end{array}\right]\left[\begin{array}{ccc}1 & -1 & 2 \\ 0 & 1 & -\frac{1}{3}\end{array}\right]$

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-XG-TCBEB7E-Q001_答案.png|答案]]

﻿## V4 Pro Max 解析

**答案**：C

**切入点**：把目标矩阵做 $LDU$（或 $LU$）分解，逐一对照选项的三角/对角因子。类比"唯一分解验证"。

**推演**

对目标 $M=\begin{bmatrix}1&-1&2\\2&1&3\\3&1&4\end{bmatrix}$ 做高斯消元（单位下三角 $L$）：
$$L=\begin{bmatrix}1&0&0\\2&1&0\\3&\tfrac43&1\end{bmatrix},\quad U=\begin{bmatrix}1&-1&2\\0&3&-1\\0&0&-\tfrac23\end{bmatrix},$$
即 $M=LU$。再将 $U$ 写出 $DU'$（$D$ 取主元）：
$$U=\begin{bmatrix}1&0&0\\0&3&0\\0&0&-\tfrac23\end{bmatrix}\begin{bmatrix}1&-1&2\\0&1&-\tfrac13\\0&0&1\end{bmatrix}.$$
故
$$M=\begin{bmatrix}1&0&0\\2&1&0\\3&\tfrac43&1\end{bmatrix}\begin{bmatrix}1&0&0\\0&3&0\\0&0&-\tfrac23\end{bmatrix}\begin{bmatrix}1&-1&2\\0&1&-\tfrac13\\0&0&1\end{bmatrix},$$
对应选项 C（第三个因子的 $LDU$ 分解）。

**易错点**：先逐行验证选项 A、B：A 的 $L$ 末对角线是 $2$ 导致第三行末列为 $\frac{10}{3}\neq4$，B 的第二行末列为 $5\neq3$，均不符。C 中第三个矩阵（单位上三角）题干 OCR 漏了末行 "$0\ 0\ 1$"，按 $LU$ 唯一性判定为 C。

**命题规律**：矩阵的三角分解（$LU$/$LDU$）唯一性判别，属"矩阵分解"概念+计算题。
