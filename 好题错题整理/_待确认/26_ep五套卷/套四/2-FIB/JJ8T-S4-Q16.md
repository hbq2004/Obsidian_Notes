---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - LA
  - 26_ep五套卷/套四/FIB
  - 计算题
  - 线性相关与无关
  - 基础解系
  - 非齐次方程通解
  - 线性表示
points:
level:
---

# FIB 第 16 题

![[_Attachments/题目识别/JJ8T/JJ8T-S4-Q16_题目.png|题目]]

16. 设 4 维列向量 $\alpha_1, \alpha_2, \alpha_3, \alpha_4$ 两两线性无关，$\alpha_1 + \alpha_2 + \alpha_3 = 0, \alpha_4$ 不能由 $\alpha_1, \alpha_2, \alpha_3$ 线性表示，$A = (\alpha_1, \alpha_2, \alpha_3, \alpha_4)$ 则 $AX = \alpha_2 + \alpha_4$ 的通解为 \_ .


---

## 解析（AI 生成，仅供参考）

【考点】本题考查非齐次线性方程组的通解结构。解题切入点：已知列向量间的线性关系，相当于已知齐次方程的一个非零解；而特解可直接由系数向量组合观察得到。类比算法竞赛：给定一组向量的线性关系，快速构造出解向量。

【解】由 $\alpha_1+\alpha_2+\alpha_3=0$，即 $A(1,1,1,0)^T=0$，所以 $\eta=(1,1,1,0)^T$ 是 $AX=0$ 的一个非零解。又因为 $\alpha_1,\alpha_2,\alpha_3$ 两两线性无关且 $\alpha_1+\alpha_2+\alpha_3=0$，可知 $\alpha_3=-\alpha_1-\alpha_2$，故 $\alpha_1,\alpha_2$ 线性无关；又 $\alpha_4$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，所以 $\alpha_4$ 不在 $\alpha_1,\alpha_2$ 张成的平面上，从而 $\alpha_1,\alpha_2,\alpha_4$ 线性无关，故矩阵 $A$ 的秩 $r(A)=3$。因此 $AX=0$ 的基础解系含 $4-3=1$ 个向量，$\eta$ 即为基础解系。

再求非齐次方程 $AX=\alpha_2+\alpha_4$ 的一个特解。观察 $A(0,1,0,1)^T = \alpha_2+\alpha_4$，所以取特解 $X^*=(0,1,0,1)^T$。

根据非齐次方程通解结构，通解为 $X=X^*+k\eta$，其中 $k$ 为任意常数，即
$$
X = \begin{pmatrix}0\\1\\0\\1\end{pmatrix} + k\begin{pmatrix}1\\1\\1\\0\end{pmatrix} = \begin{pmatrix}k\\1+k\\k\\1\end{pmatrix} \quad (k\in\mathbb R).
$$

【答案】填：$X = \begin{pmatrix}k\\1+k\\k\\1\end{pmatrix}$（$k$ 为任意常数），或写作 $X = k(1,1,1,0)^T+(0,1,0,1)^T$。

【易错点】易错点：误以为“两两线性无关”推出整个向量组线性无关，但实际上 $\alpha_1,\alpha_2,\alpha_3$ 因满足和为0而线性相关。另外，求特解时可能忽略 $\alpha_2+\alpha_4$ 可直接由 $A$ 的列组合得到。防错提醒：先求 $r(A)$，确认基础解系个数；再通过观察或待定系数求特解。

【命题规律】此类题常给出列向量间的线性关系，要求解非齐次方程通解。关键在于从线性关系导出齐次方程的解，并利用线性无关性和秩确定基础解系结构。复习时应熟练掌握向量组线性相关性与方程组的联系，以及通解的一般形式。

> AI 生成，仅供参考。

