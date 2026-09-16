---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - LA
  - 26_李林六套卷/卷四/MCQ
  - 概念题
  - 矩阵秩
  - 齐次方程组同解
  - 核空间
  - 秩零化度定理
  - 线性映射复合
points:
level:
---

# 选择题 第 5 题

![[_Attachments/题目识别/LL6T/LL6T-S4-Q05_题目.png|题目]]

设 $A$ 是 $m \times s$ 矩阵，$B$ 是 $s \times n$ 矩阵，则方程组 $ABX = 0$ 与 $BX = 0$ 同解的充分必要条件是
(A) $r(A) = s$.
(B) $r(AB) = r(B)$.
(C) $r(A) = r(B)$.
(D) $r(A) = m$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S4-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(B)。

**解题切入点**

把“两个方程组同解”看成两个解集合相等。由于 $BX=0$ 的解一定满足 $ABX=0$，所以已有 $S_B\subseteq S_{AB}$；只需让二者维数相等。秩-零化度定理把维数转化为秩条件，得到 $r(AB)=r(B)$。

**推演**

设 $S_B=\{X\mid BX=0\}$，$S_{AB}=\{X\mid ABX=0\}$。

1. 若 $BX=0$，则 $ABX=A(BX)=0$，故 $S_B\subseteq S_{AB}$。
2. 解集合相等等价于 $S_B=S_{AB}$。已知包含关系，因此只需且必须保证 $\dim S_B=\dim S_{AB}$。由秩-零化度定理：
$$
\dim S_B=n-r(B),\quad \dim S_{AB}=n-r(AB).
$$
3. 所以 $S_B=S_{AB}\iff n-r(B)=n-r(AB)\iff r(AB)=r(B)$。故选 (B)。

关键给分点：先证包含关系，再用秩-零化度定理得秩条件。

选项逐一分析：

(A) $r(A)=s$ 表示 $A$ 列满秩，即 $\ker A=\{0\}$，此时 $ABX=0\Rightarrow BX=0$，所以是充分条件；但不是必要条件。例如 $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$，$B=\begin{pmatrix}1\\0\end{pmatrix}$，两方程组同解，但 $r(A)=1\ne 2=s$。

(B) 已证为充要条件。

(C) $r(A)=r(B)$ 不是充要条件。反例：$A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$，$B=\begin{pmatrix}0&0\\0&1\end{pmatrix}$，二者秩均为 $1$，但 $AB=0$，$ABX=0$ 的解集为全空间，而 $BX=0$ 要求 $x_2=0$，不同解。它也不必要：$A=I_2,B=0$ 时两方程组同解，但 $r(A)=2\ne 0=r(B)$。

(D) $r(A)=m$ 表示 $A$ 行满秩，与本题条件无必然联系。反例：$A=\begin{pmatrix}0&1\end{pmatrix}$，$B=\begin{pmatrix}1\\0\end{pmatrix}$，有 $r(A)=1=m$，但 $AB=0$，$ABX=0$ 的解集为全空间，$BX=0$ 要求 $x=0$，不同解。

**易错点**

- 只记住“$A$ 列满秩”会推出同解，但它只是充分条件；充要条件是 $r(AB)=r(B)$。
- 不要用 $r(A)=r(B)$ 或 $r(A)=m$ 代替 $r(AB)=r(B)$。
- 关键的包含关系 $S_B\subseteq S_{AB}$ 易被忽略；没有这个包含关系时不能只比维数。

**命题规律**

线性方程组解的关系常与矩阵秩、线性映射的核与像结合考查。命题人常用“列满秩/行满秩/秩相等”作干扰项。建议熟练掌握秩-零化度定理及 $\ker(AB)$ 与 $\ker B$ 的关系；看到同解先找包含关系，再用维数或秩判定。


> 来源：《26_李林六套卷（数一）》卷四 第 5 题
