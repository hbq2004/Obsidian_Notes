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

