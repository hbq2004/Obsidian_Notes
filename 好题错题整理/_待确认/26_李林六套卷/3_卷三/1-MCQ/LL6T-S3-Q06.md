---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - LA
  - 26_李林六套卷/卷三/MCQ
  - 概念题
  - 矩阵秩
  - 正定二次型
  - 分块矩阵
  - 迹
  - 分块初等变换
points:
level:
---

# 选择题 第 6 题

![[_Attachments/题目识别/LL6T/LL6T-S3-Q06_题目.png|题目]]

设 $A,B,C$ 均为 $n$ 阶实矩阵，$A^T=A$，若对任意 $n$ 维非零列向量 $X$，都有 $tr(ABXX^T)+tr(XX^TAB)>0$. 矩阵 $\begin{pmatrix} AB & O \\ B & BC \end{pmatrix}, \begin{pmatrix} B & A \\ O & AC \end{pmatrix}, \begin{pmatrix} A & C \\ O & AB \end{pmatrix}$ 的秩依次为 $r_1, r_2, r_3$，则.
(A) $r_1 \geq r_2 \geq r_3$.
(B) $r_1 \geq r_3 \geq r_2$.
(C) $r_3 \geq r_1 = r_2$.
(D) $r_2 \geq r_3 = r_1$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S3-Q06_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】: (C)

【推演】

选项给出的三个矩阵分别记为
\[
M_1=\begin{pmatrix} AB & O \\ B & BC \end{pmatrix},\quad
M_2=\begin{pmatrix} B & A \\ O & AC \end{pmatrix},\quad
M_3=\begin{pmatrix} A & C \\ O & AB \end{pmatrix}.
\]

题设条件中，
\[
tr(ABXX^T)+tr(XX^TAB)>0
\]
对任意 $n$ 维非零列向量 $X$ 成立。利用迹的循环性质：
\[
tr(XX^TAB)=tr(ABXX^T),
\]
所以条件等价于
\[
2tr(ABXX^T)>0,
\]
即
\[
tr(X^TABX)>0.
\]
而 $tr(X^TABX)=X^TABX$，故题设等价于
\[
X^TABX>0\quad (X\ne 0).
\]
也就是说 $AB$ 的二次型为正定二次型。由此可知 $AB$ 可逆，且 $\mathrm{rank}(AB)=n$。由 $AB$ 可逆可得 $A,B$ 均可逆；进而 $AC$、$BC$ 的秩等于 $\mathrm{rank}(C)$。

下面分别求 $r_1,r_2,r_3$。

### 1. 求 $r_1$
\[
M_1=\begin{pmatrix} AB & O \\ B & BC \end{pmatrix}.
\]
因为 $B$ 可逆，作分块初等变换：第二行左乘 $-(AB)B^{-1}=-A$ 加到第一行，即
\[
\begin{pmatrix} I & O \\ -A & I \end{pmatrix}
\begin{pmatrix} AB & O \\ B & BC \end{pmatrix}
=
\begin{pmatrix} AB-AB & -ABC \\ B & BC \end{pmatrix}
=
\begin{pmatrix} O & -ABC \\ B & BC \end{pmatrix}.
\]
左乘可逆矩阵不改变秩，所以
\[
\mathrm{rank}(M_1)=\mathrm{rank}\begin{pmatrix} O & -ABC \\ B & BC \end{pmatrix}.
\]
再用分块列变换：把左上角 $O$ 所在列与左下角 $B$ 所在列适当配合，可得
\[
\mathrm{rank}(M_1)=\mathrm{rank}(B)+\mathrm{rank}(ABC).
\]
因为 $A,B$ 可逆，$ABC$ 与 $C$ 等价，所以
\[
\mathrm{rank}(ABC)=\mathrm{rank}(C).
\]
又 $\mathrm{rank}(B)=n$，故
\[
r_1=n+\mathrm{rank}(C).
\]

### 2. 求 $r_2$
\[
M_2=\begin{pmatrix} B & A \\ O & AC \end{pmatrix}.
\]
这是分块上三角矩阵。$B$ 可逆，$AC$ 与 $C$ 等秩，所以
\[
\mathrm{rank}(M_2)=\mathrm{rank}(B)+\mathrm{rank}(AC)=n+\mathrm{rank}(C).
\]
故
\[
r_2=n+\mathrm{rank}(C).
\]

### 3. 求 $r_3$
\[
M_3=\begin{pmatrix} A & C \\ O & AB \end{pmatrix}.
\]
这也是分块上三角矩阵。$A$ 可逆，$AB$ 可逆，因此
\[
\mathrm{rank}(M_3)=\mathrm{rank}(A)+\mathrm{rank}(AB)=n+n=2n.
\]
故
\[
r_3=2n.
\]

于是
\[
r_3=2n,\qquad r_1=r_2=n+\mathrm{rank}(C),\qquad \mathrm{rank}(C)\le n.
\]
所以
\[
r_3\ge r_1=r_2.
\]

逐项判断选项：
- (A) $r_1\ge r_2\ge r_3$：由 $r_1=r_2\le r_3$ 知错误；
- (B) $r_1\ge r_3\ge r_2$：错误，因为 $r_1=r_2$ 且 $r_1\le r_3$；
- (C) $r_3\ge r_1=r_2$：正确；
- (D) $r_2\ge r_3=r_1$：错误，因为 $r_3\ge r_1=r_2$。

因此选 **(C)**。

---

**解题切入点**

本题核心是把含有迹的条件转化为二次型正定性。由
\[
tr(ABXX^T)+tr(XX^TAB)=2X^TABX>0
\]
可知 $AB$ 正定，从而 $A,B,AB$ 都可逆。之后对三个分块矩阵分别用“可逆矩阵不改变秩”和分块初等变换求秩，本质上类似算法竞赛中“先化简条件，再用等价变换消元”的思路：把抽象矩阵条件变成可逆性结论，再对结构不同的分块矩阵统一处理。

---

**推演**

详细步骤已在上文【推演】中完成，这里再整理关键链：

1. 由迹的循环性：
\[
tr(ABXX^T)=tr(XX^TAB)=tr(X^TABX)=X^TABX.
\]
题设给出两项和大于 $0$，故 $X^TABX>0$。

2. 正定二次型对应矩阵可逆，因此 $AB$ 可逆，进而 $A,B$ 可逆。

3. 求 $r_1$：
\[
\begin{pmatrix} AB & O \\ B & BC \end{pmatrix}
\xrightarrow{\text{第二行左乘}-A\text{加到第一行}}
\begin{pmatrix} O & -ABC \\ B & BC \end{pmatrix}.
\]
再用分块初等变换：
\[
\mathrm{rank}(M_1)=\mathrm{rank}(B)+\mathrm{rank}(ABC)=n+\mathrm{rank}(C).
\]

4. 求 $r_2$：
\[
M_2=\begin{pmatrix} B & A \\ O & AC \end{pmatrix}
\]
是分块上三角，$B,AC$ 分别可逆/与 $C$ 等秩，故
\[
r_2=\mathrm{rank}(B)+\mathrm{rank}(AC)=n+\mathrm{rank}(C).
\]

5. 求 $r_3$：
\[
M_3=\begin{pmatrix} A & C \\ O & AB \end{pmatrix}
\]
是分块上三角，$A,AB$ 均可逆，故
\[
r_3=\mathrm{rank}(A)+\mathrm{rank}(AB)=2n.
\]

6. 比较大小：
\[
r_1=r_2=n+\mathrm{rank}(C)\le 2n=r_3.
\]

7. 因此正确选项为 (C)。

---

**易错点**

1. 迹的循环顺序易写错。$tr(XX^TAB)=tr(ABXX^T)$ 成立，但要注意最终化为 $tr(X^TABX)$ 时，因为 $X^TABX$ 是数，所以等于自身，不能丢掉迹。

2. 由 $X^TABX>0$ 只能得到 $AB$ 的二次型正定，不能直接断言 $AB$ 对称。本题不需要 $AB$ 对称，只需 $AB$ 可逆。

3. 分块上三角矩阵的秩等于对角块秩之和，前提是对角块可逆或可用 Schur 补处理。不能想当然地把任意分块矩阵的秩写成两个对角块秩之和；本题中 $A,AB,B$ 的可逆性保证了这一点。

4. 计算 $r_1$ 时，若只看成 $\mathrm{rank}(AB)+\mathrm{rank}(BC)$ 会出错，因为左下角多出 $B$。应该把左下角 $B$ 作为主块消去 $AB$。

5. 注意 $r_3=2n$ 恒成立，$r_1,r_2$ 随 $\mathrm{rank}(C)$ 变化，不是固定等于 $n$ 或 $2n$。

---

**命题规律**

本题是典型的“条件包装、内核线代”题。命题人把正定条件隐藏在迹的运算中，再把分块矩阵秩的比较作为考点。复习时应掌握：

- 迹的循环性 $tr(AB)=tr(BA)$，以及 $tr(XX^TA)=X^TAX$ 这种一维化技巧；
- 正定二次型与可逆性的联系；
- 分块矩阵的初等变换和秩的加法公式；
- 可逆矩阵相乘不改变秩。

遇到三个矩阵结构相似但位置不同的题，可先观察共同可逆块，再用分块消元统一处理。这类题在真题中常以选择题形式考查，重概念、重技巧，计算量不大。


> 来源：《26_李林六套卷（数一）》卷三 第 6 题
