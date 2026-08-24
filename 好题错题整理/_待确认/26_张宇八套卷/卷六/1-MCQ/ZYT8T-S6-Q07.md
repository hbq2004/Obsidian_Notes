---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - LA
  - 26_张宇八套卷/卷六/MCQ
  - 概念题
  - 向量组线性相关
  - 行列式判别法
  - 矩阵乘积秩
  - 列向量线性组合
points:
level:
---

# MCQ 第 7 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S6-Q07_题目.png|题目]]

设 $n$ 阶方阵 $\mathbf{A}=(\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n), \mathbf{B}=(\boldsymbol{\beta}_1, \boldsymbol{\beta}_2, \cdots, \boldsymbol{\beta}_n), \mathbf{A}\mathbf{B}=(\boldsymbol{\gamma}_1, \boldsymbol{\gamma}_2, \cdots, \boldsymbol{\gamma}_n)$, 记向量组 I: $\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \cdots, \boldsymbol{\alpha}_n$, 向量组 II: $\boldsymbol{\beta}_1, \boldsymbol{\beta}_2, \cdots, \boldsymbol{\beta}_n$, 向量组 III: $\boldsymbol{\gamma}_1, \boldsymbol{\gamma}_2, \cdots, \boldsymbol{\gamma}_n$. 如果向量组 III 线性相关, 则
(A) 向量组 I 线性相关.
(B) 向量组 II 线性相关.
(C) 向量组 I 与 II 都线性相关.
(D) 向量组 I 与 II 至少有一个线性相关.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S6-Q07_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**：选 (D)。

**解题切入点**：考查向量组线性相关与方阵奇异性的转化。把 $AB$ 的列向量组线性相关看成复合映射奇异，类似算法竞赛中“若复合映射不可逆，则至少有一个映射不可逆”。

**推演**：设 $A,B$ 为 $n$ 阶方阵，向量组 III 是 $AB$ 的列向量组。

1. 若 $n$ 个列向量线性相关，则 $\operatorname{rank}(AB)<n$，等价于 $\det(AB)=0$。
2. 由行列式乘法公式 $\det(AB)=\det(A)\det(B)$，得 $\det(A)\det(B)=0$，所以 $\det(A)=0$ 或 $\det(B)=0$。
3. $\det(A)=0$ 当且仅当 $A$ 的列向量组 I 线性相关；$\det(B)=0$ 当且仅当 $B$ 的列向量组 II 线性相关。因此 I、II 至少有一个线性相关，选 (D)。

逐一分析选项：
- (A) 向量组 I 线性相关：不一定。例如 $A=I$，$B$ 为奇异阵，则 $AB=B$ 的列相关，但 I 线性无关。
- (B) 向量组 II 线性相关：不一定。例如 $B=I$，$A$ 奇异，则 II 线性无关。
- (C) I 与 II 都线性相关：更不一定，可由上述反例排除。
- (D) I 与 II 至少有一个线性相关：正确。

**易错点**：不要由 $AB$ 列相关直接推出 $A$ 列相关。$AB$ 的每一列是 $A$ 的列的线性组合；若 $A$ 可逆，则 $AB$ 的列相关性等价于 $B$ 的列相关性；若 $B$ 可逆，则等价于 $A$ 的列相关性。真正必然成立的是“至少有一个相关”。

**命题规律**：核心结论是方阵乘积的奇异性与因子的奇异性关系。可用 $\det(AB)=\det A\det B$ 或 $\operatorname{rank}(AB)\le \min(\operatorname{rank}A,\operatorname{rank}B)$ 快速判断。复习时应把“列向量组线性相关 ⇔ 方阵行列式为零 ⇔ 秩小于 $n$”作为统一条件链。


> 来源：《26_张宇八套卷（数一）》卷六 第 7 题
