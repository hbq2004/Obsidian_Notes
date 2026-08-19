---
ctime: 2026-08-16 22:02:26
mtime: 2026-08-20 01:07:40
tags:
  - LA
  - 27_1000/C20/a/FIB
  - 矩阵
  - 矩阵幂
  - 周期性
points:
level:
---

# FIB 第 3 题

![[_Attachments/题目识别/1000-XG/1000-XG-TCBEB7E-Q003_题目.png|题目]]

3. 设 $A=\begin{bmatrix}0&0&-1\\0&1&0\\1&0&0\end{bmatrix}$, 则 $A^{13}=$ \_ .

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-XG-TCBEB7E-Q003_答案.png|答案]]

﻿## V4 Pro Max 解析

**答案**：$A^{13}=A=\begin{bmatrix}0&0&-1\\0&1&0\\1&0&0\end{bmatrix}$

**切入点**：先算 $A^2$，发现其是对角矩阵且 $A^4=E$，从而周期为 4。类比"找幂的周期降次"。

**推演**

$$A^2=\begin{bmatrix}0&0&-1\\0&1&0\\1&0&0\end{bmatrix}\begin{bmatrix}0&0&-1\\0&1&0\\1&0&0\end{bmatrix}
=\begin{bmatrix}-1&0&0\\0&1&0\\0&0&-1\end{bmatrix},$$
故 $A^4=(A^2)^2=E$。于是 $A^{13}=A^{12}A=(A^4)^3A=A$。

**易错点**：$A^2=\operatorname{diag}(-1,1,-1)$，平方后为 $E$，故 $A^4=E$；$13\equiv1\pmod4$ 使 $A^{13}=A$。

**命题规律**：矩阵幂的周期性（$A^k=E$）快速降次，考查矩阵乘法的具体计算与指数约分。
