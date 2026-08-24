---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - LA
  - 26_张宇八套卷/卷五/MCQ
  - 概念题
  - 矩阵方程同解
  - 线性方程组解空间
  - 矩阵可逆
  - 特征值限制
  - 反例构造
points:
level:
---

# MCQ 第 6 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S5-Q06_题目.png|题目]]

设 $\mathbf{A},\mathbf{B}$ 为 $n$ 阶矩阵，且 $\mathbf{A}$ 满足 $\mathbf{A}^2 - \mathbf{A} = 3 \mathbf{E}$，则与 $\begin{pmatrix} \mathbf{A} \\ \mathbf{B} \end{pmatrix} \mathbf{x} = \mathbf{0}$ 不一定同解的是.

(A) $\begin{pmatrix} \mathbf{A} - \mathbf{B} \\ \mathbf{A} + \mathbf{A}\mathbf{B} \end{pmatrix} \mathbf{x} = \mathbf{0}.$

(B) $\begin{pmatrix} \mathbf{A} + \mathbf{B} \\ \mathbf{A} + \mathbf{A}\mathbf{B} - \mathbf{B} \end{pmatrix} \mathbf{x} = \mathbf{0}.$

(C) $\begin{pmatrix} \mathbf{A} - \mathbf{B} \\ 2 \mathbf{A} + \mathbf{B} \end{pmatrix} \mathbf{x} = \mathbf{0}.$

(D) $\begin{pmatrix} \mathbf{A} + \mathbf{B} \\ \mathbf{B}\mathbf{A} + \mathbf{B}^2 \end{pmatrix} \mathbf{x} = \mathbf{0}.$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S5-Q06_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】: (D)

【推演】由 $A^2-A=3E$ 得 $A$ 可逆，所以原方程组只有零解。(A) 由 $A(E+B)x=0$ 与第一式可推出 $(A+E)x=0$，而 $A+E$ 可逆，故只有零解；(B) 由第一式代入第二式得 $(A-3E)x=0$，而 $A-3E$ 可逆，故只有零解；(C) 两式相加得 $3Ax=0$，故只有零解；(D) 第二式可由第一式左乘 $B$ 得到，方程组等价于 $(A+B)x=0$，取 $B=-A$ 即有非零解，故 D 不一定同解。

**解题切入点**

已知矩阵满足 $A^2-A=3E$，首先看出 $A$ 可逆，于是原方程组只有零解。问题转化为“哪个选项不一定能推出零解”，即判断各选项方程组的解空间是否仍只有零向量。这类似算法竞赛中“满秩矩阵可消元”：含可逆矩阵的方程可直接消去或降维。

**推演**

1. 原方程组为 $Ax=0$ 且 $Bx=0$。由 $A(A-E)=3E$ 知 $A$ 可逆，所以 $Ax=0$ 推出 $x=0$，原方程组解集只含零向量。

2. 选项 (A)：设 $(A-B)x=0$，$(A+AB)x=0$。第二式即 $A(E+B)x=0$，因 $A$ 可逆，得 $(E+B)x=0$，所以 $Bx=-x$。代入第一式得 $Ax=-x$，即 $(A+E)x=0$。又由 $A^2-A=3E$ 得 $(A+E)(A-2E)=E$，故 $A+E$ 可逆，$x=0$。所以 (A) 同解。

3. 选项 (B)：设 $(A+B)x=0$，$(A+AB-B)x=0$。由第一式 $Bx=-Ax$，代入第二式得 $(A+AB-B)x=(2A-A^2)x=(A-3E)x$。又由 $A^2-A=3E$ 得 $(A-3E)(A+2E)=-3E$，故 $A-3E$ 可逆，$x=0$。所以 (B) 同解。

4. 选项 (C)：设 $(A-B)x=0$，$(2A+B)x=0$。两式相加得 $3Ax=0$，因 $A$ 可逆，$x=0$。所以 (C) 同解。

5. 选项 (D)：设 $(A+B)x=0$，$(BA+B^2)x=0$。第二式 $B(A+B)x=0$ 由第一式左乘 $B$ 得到，故第二式不增加约束，方程组等价于 $(A+B)x=0$。取 $B=-A$，则 $A+B=0$，任意非零 $x$ 都满足选项方程组，但原方程组只有零解。所以 (D) 不一定同解。

**易错点**

- 不要认为 $A(E+B)x=0$ 能推出 $E+B$ 可逆；正确做法是先用 $A$ 可逆消去 $A$，再结合另一方程。
- 不要认为 $A-3E$ 或 $A+E$ 一定不可逆；由 $A^2-A=3E$ 可直接构造逆矩阵判断。
- D 中第二式是第一式的推论，是冗余条件；不要把必要条件当作额外限制。
- “不一定同解”只需构造一个反例即可，本题取 $B=-A$ 最直接。

**命题规律**

矩阵多项式与齐次方程组结合的题，常用多项式判断可逆性或特征值范围，再比较解空间。复习时注意串联“矩阵多项式、可逆、特征值、方程组同解”。遇到“不一定”的选择题，优先找反例。


> 来源：《26_张宇八套卷（数一）》卷五 第 6 题
