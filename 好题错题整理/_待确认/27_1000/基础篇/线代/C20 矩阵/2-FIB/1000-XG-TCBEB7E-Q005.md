---
ctime: 2026-08-16 22:00:57
mtime: 2026-08-20 01:29:33
tags:
  - LA
  - 27_1000/C20/a/FIB
  - 计算题
  - 矩阵
  - 逆矩阵
  - 幂等
points:
level:
---

# FIB 第 5 题

![[_Attachments/题目识别/1000-XG/1000-XG-TCBEB7E-Q005_题目.png|题目]]

5. 已知 $A=\begin{bmatrix}1&-1\\1&0\end{bmatrix}$，若 $(PA)^2=PA$，$P$ 为可逆矩阵，则 $P=$ \_ .

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-XG-TCBEB7E-Q005_答案.png|答案]]

﻿## V4 Pro Max 解析

**答案**：$P=A^{-1}=\begin{bmatrix}0&1\\-1&1\end{bmatrix}$

**切入点**：$(PA)^2=PA$ 两边左乘 $P^{-1}$ 得 $APA=A$，因 $A$ 可逆再右乘 $A^{-1}$ 得 $AP=E$。类比"把幂等条件一步步解出 P"。

**推演**

$$(PA)^2=PA\ \Rightarrow\ PAPA=PA\ \overset{P^{-1}}{\Rightarrow}\ APA=A\ \overset{A^{-1}}{\Rightarrow}\ AP=E.$$
故 $P=A^{-1}$。而 $A=\begin{bmatrix}1&-1\\1&0\end{bmatrix}$，$|A|=1$，
$$A^{-1}=\frac1{1}\begin{bmatrix}0&1\\-1&1\end{bmatrix}=\begin{bmatrix}0&1\\-1&1\end{bmatrix}.$$

**易错点**：$|A|=1\cdot0-(-1)\cdot1=1\neq0$，故 $A$ 可逆，才能右乘消去；$AP=E\Rightarrow P=A^{-1}$ 的化简方向勿反。

**命题规律**：由幂等/乘积条件结合可逆性解出矩阵，考查矩阵代数式的等价变形。
