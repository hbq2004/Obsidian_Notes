---
ctime: 2026-08-24 17:34:54
mtime: 2026-08-24 17:34:54
tags:
  - LA
  - 26_张宇八套卷/卷二/MCQ
  - 概念题
  - 分块矩阵线性方程组
  - 齐次方程组同解
  - 实矩阵转置同核
  - 零空间比较
  - 构造反例
points:
level:
---

# MCQ 第 5 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S2-Q05_题目.png|题目]]

设 $\mathbf{A}$ 为 $n$ 阶实矩阵, 则.

(A) $\begin{pmatrix} \mathbf{A} & \mathbf{O} \\ \mathbf{E} & \mathbf{A}^{\mathrm{T}}\mathbf{A} \end{pmatrix} \mathbf{x} = 0$ 只有零解.

(B) $\begin{pmatrix} \mathbf{O} & \mathbf{A} \\ \mathbf{A}^{\mathrm{T}}\mathbf{A} & \mathbf{A}\mathbf{A}^{\mathrm{T}}\mathbf{A} \end{pmatrix} \mathbf{x} = 0$ 只有零解.

(C) $\begin{pmatrix} \mathbf{A} & \mathbf{A}^{\mathrm{T}}\mathbf{A} \\ \mathbf{O} & \mathbf{A}^{\mathrm{T}}\mathbf{A} \end{pmatrix} \mathbf{x} = 0$ 与 $\begin{pmatrix} \mathbf{A}^{\mathrm{T}}\mathbf{A} & \mathbf{A} \\ \mathbf{O} & \mathbf{A} \end{pmatrix} \mathbf{x} = 0$ 同解.

(D) $\begin{pmatrix} \mathbf{A}\mathbf{A}^{\mathrm{T}}\mathbf{A} & \mathbf{A}^{\mathrm{T}}\mathbf{A} \\ \mathbf{O} & \mathbf{A} \end{pmatrix} \mathbf{x} = 0$ 与 $\begin{pmatrix} \mathbf{A}^{\mathrm{T}}\mathbf{A}^{2} & \mathbf{A} \\ \mathbf{O} & \mathbf{A}^{\mathrm{T}}\mathbf{A} \end{pmatrix} \mathbf{x} = 0$ 同解.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S2-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】: (C)。

**解题切入点**

本题是分块矩阵下齐次方程组的“判零/同解”问题。破题角度：令 $x=(u^T,v^T)^T$，写出每个分块方程；反复使用实矩阵性质 $A^T A y=0$ 等价于 $A y=0$。这类似算法竞赛中的哈希判重：内积模长为 0 就等价于原向量为 0。

**推演**

记 $x=(u^T,v^T)^T$，其中 $u,v$ 为 $n$ 维实向量。常用性质：因为 $y^T A^T A y=||Ay||^2$，所以 $A^T A y=0$ 等价于 $Ay=0$。因此 $A^T A$ 与 $A$ 的零空间相同。

(A) 方程组为
$$Au=0, u+A^T A v=0.$$
若 $A$ 奇异，取非零 $v$ 属于 $N(A)$，则 $(u,v)=(0,v)$ 是非零解，故并非“只有零解”。(A 错。)

(B) 方程组为
$$Av=0, A^T A u+A A^T A v=0.$$
由 $Av=0$ 得 $A^T A v=0$，第二式化为 $A^T A u=0$，等价于 $Au=0$。若 $A$ 奇异，取非零 $u,v$ 都属于 $N(A)$ 即得非零解。(B 错。)

(C) 第一矩阵对应
$$Au+A^T A v=0, A^T A v=0.$$
由第二式 $A^T A v=0$ 等价于 $Av=0$，回代第一式得 $Au=0$，故解集为两个 $N(A)$ 的直积。

第二矩阵对应
$$A^T A u+Av=0, Av=0.$$
由第二式 $Av=0$，第一式化为 $A^T A u=0$，等价于 $Au=0$，解集同为两个 $N(A)$ 的直积。故 (C) 正确。

(D) 第一矩阵对应
$$A A^T A u+A^T A v=0, Av=0.$$
由第二式 $A^T A v=0$，第一式化为 $A A^T A u=0$。两边左乘 $u^T A^T$，得
$$||A^T A u||^2=0,$$
所以 $A^T A u=0$，等价于 $Au=0$。故第一矩阵解集为两个 $N(A)$ 的直积。

第二矩阵对应
$$A^T A^2 u+Av=0, A^T A v=0.$$
第二式给出 $Av=0$，第一式化为 $A^T A^2 u=0$，即 $A^T A(Au)=0$。由常用性质得 $A(Au)=0$，即 $A^2u=0$。故解集为 $N(A^2)$ 与 $N(A)$ 的直积。

一般 $N(A^2)$ 与 $N(A)$ 不同，例如取二阶幂零 Jordan 块 $A$，则 $A^2=0$ 但 $A$ 不是零矩阵，于是 $N(A)$ 是 $N(A^2)$ 的真子集，两解集不同，故 (D) 错。

**易错点**

1. 不要把 $A^T A$ 与 $A$ 的零空间搞混：它们相同，但 $A A^T$ 的零空间一般不同。
2. 由 $A^2u=0$ 不能推出 $Au=0$；例如幂零 Jordan 块。D 的陷阱就在这里。
3. “只有零解”一定要检验 $A$ 是否可能奇异；不能因为有 $E$ 块就认为满秩。

**命题规律**

命题套路：用分块矩阵构造齐次方程组，表面考同解，实则在考零空间和 $A^T A$ 的性质。复习时要熟练掌握 $A^T A$ 与 $A$ 同核，且 $A^T A$ 的像空间等于 $A^T$ 的像空间；并会用幂零矩阵构造反例。解同解问题先分块写方程，再比较零空间。


> 来源：《26_张宇八套卷（数一）》卷二 第 5 题
