---
ctime: 2026-08-23 23:04:13
mtime: 2026-08-23 23:04:13
tags:
  - LA
  - 26_姜晓千四套卷/卷四/MCQ
  - 概念题
  - 矩阵秩的不等式
  - 线性方程组解判定
  - 分块矩阵秩
  - 四子空间正交补
  - 齐次方程组零解判定
points:
level:
---

# MCQ 第 6 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S4-Q06_题目.png|题目]]

设 $A$ 为 $n$ 阶矩阵，$\alpha$ 为 $n$ 维列向量，且 $r\begin{pmatrix} A^T \\ \alpha^T \end{pmatrix} < r\begin{pmatrix} A^T & 0 \\ \alpha^T & 1 \end{pmatrix}$，则（ ）
(A) 线性方程组 $Ax = \alpha$ 有解
(B) 线性方程组 $Ax = \alpha$ 无解
(C) 线性方程组 $\begin{pmatrix} A & \alpha \\ \alpha^T & 0 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = 0$ 只有零解
(D) 线性方程组 $\begin{pmatrix} A & \alpha \\ \alpha^T & 0 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = 0$ 有非零解

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S4-Q06_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】: (A)

【推演】(选项判定)
- (A) 正确。由题设可推出 $\alpha\in C(A)$，即 $\alpha$ 属于 $A$ 的列空间，所以 $Ax=\alpha$ 有解。
- (B) 错误。它是 (A) 的相反结论，既然 (A) 成立，(B) 不成立。
- (C) 不必然。反例：$n=2$，$A=I_2$，$\alpha=0$ 满足题设，但 $\det M=0$，齐次方程有非零解。
- (D) 不必然。反例：$n=2$，$A=I_2$，$\alpha=e_1$ 满足题设，但 $\det M=-1$，齐次方程只有零解。

**解题切入点**

把题设秩条件理解为：右边的增广矩阵比左边矩阵多出的最后一列 $e_{n+1}$ 不能由左边矩阵的列空间表示。由此得到 $N(A^T)\subseteq N(\alpha^T)$，再用四子空间正交补关系 $N(A^T)^\perp=C(A)$ 推出 $\alpha\in C(A)$。这相当于算法竞赛中先判“新增边是否带来新的独立维度”，再直接判断方程是否有解。

**推演**

令题设左边矩阵为 $L$，右边矩阵为 $R$。由于 $R$ 比 $L$ 只多最后一列 $e_{n+1}$，题设 $r(L)<r(R)$ 说明 $r(R)=r(L)+1$，因此 $e_{n+1}$ 不属于 $L$ 的列空间。

反证：若存在 $x$ 使 $A^Tx=0$ 且 $\alpha^Tx=1$，则 $Lx=e_{n+1}$，与上一步矛盾。所以不存在这样的 $x$。进一步，若 $x\in N(A^T)$ 且 $\alpha^Tx=c\neq0$，则取 $x/c$ 会得到 $A^T(x/c)=0$、$\alpha^T(x/c)=1$，矛盾。故 $N(A^T)\subseteq N(\alpha^T)$。

两边取正交补得 $N(\alpha^T)^\perp\subseteq N(A^T)^\perp$。又 $N(A^T)^\perp=C(A)$，而 $N(\alpha^T)^\perp$ 正是由 $\alpha$ 张成的一维子空间，所以 $\alpha\in C(A)$。于是存在列向量 $\beta$ 使 $\alpha=A\beta$，$x=\beta$ 即为 $Ax=\alpha$ 的解，(A) 成立。

对 (C)(D)：上面只推出 $\alpha\in C(A)$，不足以决定 $M$ 是否可逆。例如 $n=2$，$A=I_2$，$\alpha=0$ 时题设成立而 $\det M=0$，齐次方程有非零解，故 (C) 不必然；$n=2$，$A=I_2$，$\alpha=e_1$ 时题设也成立而 $\det M=-1$，齐次方程只有零解，故 (D) 也不必然。

所以唯一必然成立的选项是 (A)。

**易错点**

1. 不要把 $r(L)<r(R)$ 误认为 $R$ 满秩或 $A$ 可逆；例如 $A=0$、$\alpha=0$（$n=2$）也满足条件。
2. 注意 $R$ 与 $M$ 不同：$R$ 的右下角是 1，$M$ 的右下角是 0，不能用 $\det R=\det A$ 代替 $\det M$ 的判别。
3. (C)(D) 虽然互斥，但“具体矩阵下必有一个成立”不等于“题设能推出哪一个”。单选题要找的是题设充分推出的命题。

**命题规律**

这是用秩不等式包装的线性方程组有解判定题，核心模板是“$Ax=b$ 有解 $\iff b\in C(A)$”以及“$N(A^T)^\perp=C(A)$”。复习时要善于把矩阵秩条件翻译成列空间、零空间的包含关系，并用 $n=2$ 的小例子检验不确定选项。


> 来源：《26_姜晓千四套卷（数一）》卷四 第 6 题
