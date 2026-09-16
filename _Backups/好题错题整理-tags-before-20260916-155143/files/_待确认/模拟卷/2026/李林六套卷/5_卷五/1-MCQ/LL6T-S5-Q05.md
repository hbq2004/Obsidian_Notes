---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - LA
  - 26_李林六套卷/卷五/MCQ
  - 概念题
  - 非齐次方程组解的存在性
  - 零空间与左零空间
  - 矩阵转置与秩
  - 解向量与正交性
  - 方阵可逆性
points:
level:
---

# 选择题 第 5 题

![[_Attachments/题目识别/LL6T/LL6T-S5-Q05_题目.png|题目]]

设 $A$ 是 3 阶矩阵，$b$ 是 3 维非零列向量，则下列说法中正确的是 ①若 $Ax = b$ 有解，则 $\begin{pmatrix} A^T \\ b^T \end{pmatrix}x = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ 有解；②若 $Ax = b$ 有解，则 $\begin{pmatrix} A^T \\ b^T \end{pmatrix}x = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ 无解；③若 $\begin{pmatrix} A^T \\ b^T \end{pmatrix}x = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ 有解，则 $Ax = 0$ 有非零解；④若 $\begin{pmatrix} A^T \\ b^T \end{pmatrix}x = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ 无解，则 $Ax = 0$ 只有零解.
(A) ①③.
(B) ①④.
(C) ②③.
(D) ②④.

![[_Attachments/题目识别/LL6T-答案/LL6T-S5-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(C)。

**解题切入点**

把分块方程看成两个条件：$A^T x=0$ 且 $b^T x=1$。若 $Ax=b$ 有解，则 $b$ 在 $A$ 的列空间 $C(A)$ 中，从而与 $N(A^T)$ 正交，故分块方程必无解；而分块方程有解则 $N(A^T)\neq\{0\}$，因 $A$ 是方阵，$N(A)\neq\{0\}$。类似算法竞赛中“先找必要条件判无解，再用零空间判非零解”。

**推演**

设 $M=\begin{pmatrix}A^T\\b^T\end{pmatrix}$，则
$$
Mx=\begin{pmatrix}0\\1\end{pmatrix}
\iff A^T x=0,\quad b^T x=1. \tag{*}
$$

1. 判断①②：若 $Ax=b$ 有解，取 $y$ 使 $Ay=b$。若 $(*)$ 有解 $x$，则
$$
b^T x=(Ay)^T x=y^T A^T x=y^T0=0,
$$
与 $b^T x=1$ 矛盾。因此 $Ax=b$ 有解时，分块方程必无解，①错，②对。

2. 判断③：若 $(*)$ 有解，则 $A^T x=0$ 且 $b^T x=1$，所以 $x\neq0$，故 $N(A^T)$ 含有非零向量。由 $A$ 为 3 阶方阵，
$$
\operatorname{rank}(A)=\operatorname{rank}(A^T)<3,
$$
因此 $A$ 奇异，$Ax=0$ 有非零解，③对。

3. 判断④：分块方程无解只说明不存在 $x$ 同时满足 $A^T x=0$ 与 $b^T x=1$。若 $A$ 奇异且 $b$ 与 $N(A^T)$ 正交，也会无解，但此时 $Ax=0$ 有非零解。例如取
$$
A=\operatorname{diag}(1,0,0),\quad b=e_1=(1,0,0)^T.
$$
由 $A^T x=0$ 得 $x_1=0$，于是 $b^T x=x_1=0$，不可能等于 1，故分块方程无解；但 $A$ 奇异，$Ax=0$ 有非零解（如 $e_2$）。④错。

综上，正确的是②③，选 (C)。

**易错点**

- 不要混淆 $N(A)$ 与 $N(A^T)$：$Ax=0$ 有非零解等价于 $N(A)\neq\{0\}$；$A^T x=0$ 有非零解等价于 $N(A^T)\neq\{0\}$。因 $A$ 是方阵，二者同时成立。
- ①的干扰很强：以为 $Ax=b$ 有解就是“有某种一致性”，但分块方程要求 $b^T x=1$，而 $Ax=b$ 有解恰恰迫使 $b$ 与 $N(A^T)$ 正交。
- ④是“分块方程无解”推“齐次只有零解”的典型反例：分块方程无解也可能因为 $A$ 奇异且 $b$ 与 $N(A^T)$ 正交，此时 $Ax=0$ 仍有非零解。

**命题规律**

这类题考查分块线性方程组的翻译、解的存在性与秩/零空间的关系。命题人常把“非齐次有解”“分块方程有解/无解”“齐次有非零解”互相组合，形成充分必要条件的真假判断。复习时抓住等价关系：
$$
Ax=b\text{ 有解}\iff b\in C(A),
$$
以及方阵情形下
$$
N(A)\neq\{0\}\iff N(A^T)\neq\{0\}\iff \det A=0.
$$
多做这种“条件关系”选择题，注意构造反例。


> 来源：《26_李林六套卷（数一）》卷五 第 5 题
