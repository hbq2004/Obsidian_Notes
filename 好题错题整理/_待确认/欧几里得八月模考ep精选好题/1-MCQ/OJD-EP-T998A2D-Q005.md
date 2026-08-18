---
ctime: 2026-08-15 19:15:57
mtime: 2026-08-15 19:15:57
tags:
  - AM
  - AM/精选好题
points:
level:
---

# MCQ 第 5 题

![[_Attachments/题目识别/OJD-EP/OJD-EP-T998A2D-Q005_题目.png|题目]]

【例5】设 $A, B$ 均为三阶矩阵，且 $r(A)=r(B)=2$，$r(AB)=r(BA)+1$。下列矩阵中，其秩不能由已知条件唯一确定的是（）
A. $ABA$
B. $BAB$
C. $ABAB$
D. $BABA$

---

## 答案与解析

**答案**：**D. $BABA$**

**切入点**（秩不等式就是"信息传递的损耗估计"，和算法里分析瓶颈类似）：先定下初始秩。$AB$、$BA$ 都是 $3\times3$ 矩阵，秩只能取 $\{0,1,2\}$（都不为 3，因为 $r\le\min\{r(A),r(B)\}=2$），且 $r(AB)=r(BA)+1$，故**必然**

$$r(AB)=2,\qquad r(BA)=1.$$

随后对每个选项用两条秩不等式夹逼：

- **上界**：$r(PQ)\le\min\{r(P),\,r(Q)\}$（乘法不增秩）；
- **下界（Sylvester）**：$r(PQ)\ge r(P)+r(Q)-n$（$n=3$）。

**推演**：

**A. $r(ABA)$**：上界 $r(ABA)\le r(BA)=1$；下界（把 $ABA$ 看成 $(AB)A$）

$$r(ABA)\ge r(AB)+r(A)-3=2+2-3=1 \;\Longrightarrow\; r(ABA)=1\ \text{唯一确定}.$$

**B. $r(BAB)$**：上界 $r(BAB)\le r(BA)=1$；下界（看成 $B(AB)$）

$$r(BAB)\ge r(B)+r(AB)-3=2+2-3=1 \;\Longrightarrow\; r(BAB)=1\ \text{唯一确定}.$$

**C. $r(ABAB)$**：上界 $r(ABAB)=r(A\cdot BAB)\le r(BAB)=1$；下界（看成 $(AB)(AB)$）

$$r(ABAB)\ge r(AB)+r(AB)-3=2+2-3=1 \;\Longrightarrow\; r(ABAB)=1\ \text{唯一确定}.$$

**D. $r(BABA)=r\big((BA)^{2}\big)$**：上界 $\le r(BA)=1$，下界只有 $0$（Sylvester 给出 $1+1-3=-1$，无信息）。而**秩 1 矩阵的幂**有精确公式：对秩 1 矩阵 $P$，$P^{2}=\operatorname{tr}(P)\cdot P$，于是

$$r(BABA)=r\big((BA)^{2}\big)=\begin{cases}1, & \operatorname{tr}(BA)\ne 0,\\ 0, & \operatorname{tr}(BA)=0.\end{cases}$$

题设对 $\operatorname{tr}(BA)=\operatorname{tr}(AB)$ **没有任何约束**，两种情形都能实现：

- 取 $B=\operatorname{diag}(1,1,0)$，$A=\begin{pmatrix}0&0&0\\ 1&0&0\\ 0&1&0\end{pmatrix}$：$r(A)=2$，$r(AB)=2$，$r(BA)=1$，$\operatorname{tr}(BA)=0$ ⟹ $r(BABA)=0$；
- 取同样的 $B$，$A=\begin{pmatrix}1&1&0\\ 2&2&0\\ 0&1&0\end{pmatrix}$：$r(A)=2$（前两行成比例、第三行独立），$r(AB)=2$，$r(BA)=1$，$\operatorname{tr}(BA)=3\ne0$ ⟹ $r(BABA)=1$。

故 $r(BABA)$ 可为 0 或 1，**不能唯一确定**，选 **D**。

**易错点**：

1. Sylvester 不等式的**方向与乘法顺序**：$r(PQ)\ge r(P)+r(Q)-n$，其中 $PQ$ 的两个因子分别对应 $P,Q$——A、B 选项用错因子就夹不出 1；
2. 秩 1 矩阵的幂公式 $P^{2}=\operatorname{tr}(P)\,P$（可对角化思想：秩 1 矩阵只有一个非零特征值 = $\operatorname{tr}(P)$），这是本题分水岭；
3. "不能唯一确定"必须**构造两个满足全部条件但结果不同的例子**，只证明"上下界不重合"不够严谨（本题恰好有显式双例）。

**命题规律**：秩问题的三板斧——① $r(PQ)\le\min\{r(P),r(Q)\}$；② Sylvester 下界；③ 秩 1 幂用 $\operatorname{tr}$ 判定。选项型"哪个不能确定"= 夹逼到唯一 + 对剩下的构造双反例。




---

## V4 Flash Max 解析

**答案**: D（$BABA$）。由题设可先推出 $r(AB)=2$、$r(BA)=1$。于是 $ABA,BAB,ABAB$ 的秩都被确定为 $1$；而 $BABA=(BA)^2$ 在满足条件的例子中可为 $1$ 也可为 $0$，故不能唯一确定。

**解题切入点**:  
先不要急着逐个算复合矩阵的秩，而是先用 Sylvester 不等式把 $r(AB),r(BA)$ 压缩成唯一取值。这类似于算法竞赛中先根据约束“剪枝/缩小状态空间”；对 D 还要构造两组满足条件的“hack 数据”说明其秩不唯一。

**推演**:  
对任意 $3$ 阶方阵 $X,Y$，Sylvester 不等式为  
$$
r(XY)\ge r(X)+r(Y)-3.
$$

因为 $r(A)=r(B)=2$，所以
$$
r(BA)\ge 2+2-3=1.
$$
又 $r(AB)\le r(A)=2$，结合 $r(AB)=r(BA)+1$，得
$$
r(BA)\le 1.
$$
故
$$
r(BA)=1,\qquad r(AB)=2.
$$

逐一判断：

选项 A：$ABA$
$$
r(ABA)=r((AB)A)\ge r(AB)+r(A)-3=2+2-3=1,
$$
且
$$
r(ABA)=r(A(BA))\le r(BA)=1.
$$
所以 $r(ABA)=1$。

选项 B：$BAB$
$$
r(BAB)=r(B(AB))\ge r(B)+r(AB)-3=2+2-3=1,
$$
且
$$
r(BAB)=r((BA)B)\le r(BA)=1.
$$
所以 $r(BAB)=1$。

选项 C：$ABAB$
$$
r(ABAB)=r((AB)^2)\ge 2r(AB)-3=2\cdot2-3=1,
$$
且
$$
r(ABAB)=r(A(BA)B)\le r(BA)=1.
$$
所以 $r(ABAB)=1$。

选项 D：$BABA$
$$
r(BABA)=r((BA)^2)\le r(BA)=1.
$$
所以其秩只可能是 $0$ 或 $1$。下面说明两者都能出现。

取
$$
A=\begin{pmatrix}
1&0&0\\
0&1&0\\
0&0&0
\end{pmatrix}.
$$

构造
$$
B_1=\begin{pmatrix}
0&0&1\\
0&1&0\\
0&0&0
\end{pmatrix}.
$$
则 $r(A)=r(B_1)=2$，且
$$
AB_1=B_1,\qquad B_1A=\begin{pmatrix}
0&0&0\\
0&1&0\\
0&0&0
\end{pmatrix}.
$$
于是 $r(AB_1)=2,\ r(B_1A)=1$，满足条件，且
$$
r(B_1AB_1A)=r((B_1A)^2)=1.
$$

再构造
$$
B_2=\begin{pmatrix}
0&0&1\\
1&0&0\\
0&0&0
\end{pmatrix}.
$$
则 $r(A)=r(B_2)=2$，且
$$
AB_2=B_2,\qquad B_2A=\begin{pmatrix}
0&0&0\\
1&0&0\\
0&0&0
\end{pmatrix}.
$$
于是 $r(AB_2)=2,\ r(B_2A)=1$，也满足条件，但
$$
(B_2A)^2=0,
$$
所以
$$
r(B_2AB_2A)=0.
$$

因此 $BABA$ 的秩不能由已知条件唯一确定。

**易错点**:  
- 容易忽略 $r(BA)\ge1$，误以为可能是 $r(AB)=1,\ r(BA)=0$；由 Sylvester 不等式可知这不可能。  
- 对 $ABAB$，只想到 $r(ABAB)\le r(AB)=2$ 不够，还要看出 $ABAB=A(BA)B$，其秩被中间因子 $BA$ 的秩 $1$ 控制。  
- 对 $BABA$，不能因为 $r(BA)=1$ 就认为其平方秩也一定是 $1$；秩 $1$ 矩阵的平方可以为零。构造例子后应代回验证 $r(AB)=2,\ r(BA)=1$ 均成立。

**命题规律**:  
本题核心是“乘积矩阵的秩”。考研数学一常给出两个同阶方阵的秩和一个乘积秩关系，问某个复合矩阵的秩是否能确定；本质是 Sylvester 不等式与“矩阵乘法不增加秩”的结合。常见变式包括判断 $r(A^2)$、$r(ABC)$、$r(A^k)$ 等。复习时把秩理解为“线性映射像空间的维数”，会更容易判断复合矩阵是否可能被压成零。