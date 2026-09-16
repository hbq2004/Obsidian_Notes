---
ctime: 2026-08-16 22:03:00
mtime: 2026-08-20 01:29:33
tags:
  - LA
  - 27_1000/C20/a/MCQ
  - 计算题
  - 矩阵
  - 分块矩阵
  - 伴随矩阵
points:
level:
---

# MCQ 第 7 题

![[_Attachments/题目识别/1000-XG/1000-XG-TCBEB7E-Q007_题目.png|题目]]

7. $A, B$ 是 $n$ 阶矩阵, $A^{*}, B^{*}$ 分别是 $A, B$ 对应的伴随矩阵, 则分块矩阵 $C=\begin{bmatrix}O&A\\B&O\end{bmatrix}$ 的伴随矩阵 $C^{*}=$(\_)
A. $\begin{bmatrix}0&|A|A^{*}\\|B|B^{*}&0\end{bmatrix}$
B. $\begin{bmatrix}0&(-1)^{n}|A|B^{*}\$-1)^{n}|B|A^{*}&0\end{bmatrix}$
C. $\begin{bmatrix}0&|B|A^{*}\\|A|B&0\end{bmatrix}$
D. $\begin{bmatrix}O&(-1)^{n}|B|B^{*}\$-1)^{n}|A|A^{*}&0\end{bmatrix}$

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-XG-TCBEB7E-Q007_答案.png|答案]]

﻿## V4 Pro Max 解析

**答案**：B

**切入点**：对分块反对角矩阵 $C=\begin{bmatrix}O&A\\B&O\end{bmatrix}$，用 $C^*=|C|C^{-1}$，其中 $|C|=(-1)^n|A||B|$，$C^{-1}=\begin{bmatrix}O&B^{-1}\\A^{-1}&O\end{bmatrix}$。类比"分块求逆 + 伴随定义"。

**推演**

$$|C|=(-1)^n|A||B|,\qquad C^{-1}=\begin{bmatrix}O&B^{-1}\\A^{-1}&O\end{bmatrix}.$$
故
$$C^*=|C|C^{-1}=(-1)^n|A||B|\begin{bmatrix}O&B^{-1}\\A^{-1}&O\end{bmatrix}
=\begin{bmatrix}O&(-1)^n|A|\,B^*\\[2pt] (-1)^n|B|\,A^*&O\end{bmatrix},$$
其中用了 $|B|B^{-1}=B^*,\ |A|A^{-1}=A^*$。对应选项 B。

**易错点**：$|C|=(-1)^n|A||B|$ 的符号来自把两行块交换所需的 $n$ 次行交换；$C^{-1}$ 的分块位置是 $\begin{bmatrix}O&B^{-1}\\A^{-1}&O\end{bmatrix}$（$A,B$ 位置互换）。A/D 把 $A^*$、$B^*$ 与 $|A|$、$|B|$ 的搭配弄混。

**命题规律**：分块反对角矩阵的伴随矩阵，考查 $|C|$ 符号、分块求逆与 $A^*A=|A|E$ 的结合。
