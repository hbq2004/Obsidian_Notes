---
ctime: 2026-08-22 05:15:01
mtime: 2026-08-22 05:15:01
tags:
  - LA
  - 27_模拟卷概念题摘选/李良五套卷卷二
  - 概念题
  - 列空间（像空间）
  - 矩阵的秩
  - 矩阵方程有解判定
  - 子空间包含与维数相等
  - 秩不等式
points:
level:
---

# MCQ 第 18 题

![[_Attachments/题目识别/27_模拟卷概念题摘选-题目/MNJ-Q018_题目.png|题目]]

设 $A,B$ 分别是 $m \times n$ 矩阵和 $n \times m$ 矩阵.存在 $m \times n$ 矩阵 $C$ 使得 $ABC = A$ 这一条件是 $r(AB) = r(A)$ 的(　　)

A. 充分但不必要条件.
B. 必要但不充分条件.
C. 充分必要条件.
D. 既不充分也不必要条件.

> 考点批注：熟练运用秩的判别

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 **C**。核心理由：$ABC=A$ 有解等价于 $A$ 的每一列都在 $AB$ 的列空间中，即 $\operatorname{Im}A\subseteq\operatorname{Im}(AB)$；又恒有 $\operatorname{Im}(AB)\subseteq\operatorname{Im}A$，所以这等价于列空间相等，即 $r(AB)=r(A)$。因此存在这样的 $C$ 是 $r(AB)=r(A)$ 的充分必要条件。

**解题切入点**：  
把 $ABC=A$ 看成矩阵方程 $(AB)C=A$，不要试图解出 $C$ 的具体形式。矩阵方程 $PX=Q$ 有解，本质是 $Q$ 的每一列都属于 $P$ 的列空间。这里天然有 $\operatorname{Im}(AB)\subseteq\operatorname{Im}A$，所以问题转化为：较小的列空间能否通过“秩相等”变成与较大的列空间相等。这类似于判断“复合映射的输出集合能否覆盖目标映射的输出集合”。

**推演**：  
记 $P=AB$。设
$$
A=[a_1,\dots,a_n],\qquad C=[c_1,\dots,c_n],
$$
其中 $a_j,c_j$ 都是 $m$ 维列向量。则
$$
ABC=A \iff PC=A \iff Pc_j=a_j\quad (j=1,\dots,n).
$$
因此 $ABC=A$ 有解，当且仅当每个 $a_j$ 都属于 $\operatorname{Im}(AB)$，即
$$
\operatorname{Im}A\subseteq\operatorname{Im}(AB).
$$

另一方面，对任意 $u$，
$$
ABu=A(Bu)\in\operatorname{Im}A,
$$
所以恒有
$$
\operatorname{Im}(AB)\subseteq\operatorname{Im}A,
$$
从而恒有 $r(AB)\le r(A)$。

现在双向证明：

1. **若存在 $C$ 使 $ABC=A$**，则任取 $x$，有
$$
Ax=ABCx=AB(Cx)\in\operatorname{Im}(AB),
$$
故 $\operatorname{Im}A\subseteq\operatorname{Im}(AB)$。又已知 $\operatorname{Im}(AB)\subseteq\operatorname{Im}A$，所以
$$
\operatorname{Im}(AB)=\operatorname{Im}A,
$$
于是 $r(AB)=r(A)$。

2. **若 $r(AB)=r(A)$**，由于 $\operatorname{Im}(AB)\subseteq\operatorname{Im}A$，且两者维数相同，所以
$$
\operatorname{Im}(AB)=\operatorname{Im}A.
$$
于是 $A$ 的每一列 $a_j$ 都属于 $\operatorname{Im}(AB)$，即存在 $c_j$ 使得
$$
ABc_j=a_j.
$$
令 $C=[c_1,\dots,c_n]$，则 $ABC=A$。

因此“存在 $m\times n$ 矩阵 $C$ 使得 $ABC=A$”与“$r(AB)=r(A)$”互为充要条件。

逐项看：

- A 说“充分但不必要”：错误，因为反向 $r(AB)=r(A)\Rightarrow$ 存在 $C$ 也成立。
- B 说“必要但不充分”：错误，因为正向存在 $C\Rightarrow r(AB)=r(A)$ 也成立。
- D 说“既不充分也不必要”：错误，因为二者已经等价。

所以选 **C**。

**易错点**：  
- 不要把 $ABC=A$ 误认为 $AB=I$ 或要求 $C$ 是某个逆矩阵；$AB$ 未必可逆，$C$ 也未必唯一。  
- 只记得“若 $ABC=A$，则 $r(AB)=r(A)$”还不够，还要利用 $\operatorname{Im}(AB)\subseteq\operatorname{Im}A$ 证明反向成立。  
- 容易忽略：在 $\operatorname{Im}(AB)\subseteq\operatorname{Im}A$ 的前提下，秩相等等价于两个列空间相等；这是本题的关键。  
- 不要把充要方向记反：$r(AB)=r(A)$ 是“能构造出 $C$”的充分条件，同时也是必要条件。

**命题规律**：  
本题属于“秩的判别”典型选择题，命题人将矩阵方程可解性隐藏在 $ABC=A$ 中。核心思路是把矩阵等式翻译为列空间包含关系。常见变式包括：  
- 判断“存在 $C$ 使 $ABC=A$”与某个秩等式的关系；  
- 利用矩阵方程 $PX=Q$ 有解 $\iff r(P)=r(P,Q)$ 来转化；  
- 结合 $\operatorname{Im}(XY)\subseteq\operatorname{Im}X$ 与维数相等讨论列空间相等。  

复习时应熟练掌握列空间、像空间的语言，遇到矩阵方程先写成 $PX=Q$ 的形式，再用秩或列空间判定。

**知识点**：  
列空间（像空间）、矩阵的秩、矩阵方程 $PX=Q$ 有解的判定、子空间包含与维数相等、$r(AB)\le r(A)$

---

> 来源：模拟卷概念题摘选（试卷顺序版） · 五. 李良五套卷卷二 · 原题号 (5) · PDF第12页
