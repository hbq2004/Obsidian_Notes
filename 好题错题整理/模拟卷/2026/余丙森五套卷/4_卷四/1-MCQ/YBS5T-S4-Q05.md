---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - LA
  - 26_余丙森五套卷/卷四/MCQ
  - 概念题
  - 矩阵乘积秩不等式
  - 行秩等于矩阵秩
  - 行向量线性相关
  - 秩小于行数则相关
  - 满秩判别
points:
level:
---

# MCQ 第 5 题

![[_Attachments/题目识别/YBS5T/YBS5T-S4-Q05_题目.png|题目]]

设 $\mathbf{A}$ 为 $m \times n$ 矩阵, $\mathbf{B}$ 为 $n \times m$ 矩阵. 若 $\mathbf{AB} = \mathbf{C}$, 则 (      ).

(A) 当 $m < n$ 时, $\mathbf{C}$ 的行向量组线性相关
(B) 当 $m < n$ 时, $\mathbf{C}$ 的行向量组线性无关
(C) 当 $m > n$ 时, $\mathbf{C}$ 的行向量组线性相关
(D) 当 $m > n$ 时, $\mathbf{C}$ 的行向量组线性无关

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S4-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(C)。

【推演】

设 $\mathbf{C}=\mathbf{AB}$，则 $\operatorname{rank}\mathbf{C}\le \min(\operatorname{rank}\mathbf{A},\operatorname{rank}\mathbf{B})\le \min(m,n)$。因为行向量组的秩等于矩阵的秩，所以 $\mathbf{C}$ 的 $m$ 个行向量线性无关当且仅当 $\operatorname{rank}\mathbf{C}=m$。

- (A) 错：$m<n$ 时也可能 $\operatorname{rank}\mathbf{C}=m$，如 $\mathbf{A}=[\mathbf{I}_m\ \mathbf{0}],\ \mathbf{B}=[\mathbf{I}_m;\ \mathbf{0}]$，则 $\mathbf{AB}=\mathbf{I}_m$，行向量线性无关。
- (B) 错：$m<n$ 时也可能 $\operatorname{rank}\mathbf{C}=0$，如 $\mathbf{A}=\mathbf{0}$，行向量线性相关。
- (C) 对：$m>n$ 时 $\operatorname{rank}\mathbf{C}\le n<m$，故 $\mathbf{C}$ 的行向量组线性相关。
- (D) 错：与 (C) 相反。

**解题切入点**

本题本质是“复合线性映射的像空间维数受中间空间维数限制”：$\mathbf{B}:\mathbb{R}^m\to\mathbb{R}^n$，$\mathbf{A}:\mathbb{R}^n\to\mathbb{R}^m$，复合后秩不可能超过中间维数 $n$。算法竞赛中可类比“信息瓶颈”：输出向量要经过 $n$ 维中间层，当 $m>n$ 时必有压缩。

**推演**

由秩的乘积不等式：
$$\operatorname{rank}(\mathbf{AB})\le \min(\operatorname{rank}\mathbf{A},\operatorname{rank}\mathbf{B})\le \min(m,n).$$

又 $\mathbf{C}$ 是 $m\times m$ 方阵。$\mathbf{C}$ 的行向量组线性相关等价于行秩小于 $m$，而行秩等于矩阵的秩，即
$$\operatorname{rank}(\mathbf{C})<m.$$

- 当 $m>n$ 时：$\operatorname{rank}(\mathbf{C})\le n<m$，因此 $\operatorname{rank}(\mathbf{C})<m$ 恒成立，行向量组必线性相关，(C) 正确。
- 当 $m<n$ 时：$\operatorname{rank}(\mathbf{C})$ 可能等于 $m$ 也可能小于 $m$。如 $\mathbf{A}=[\mathbf{I}_m\ \mathbf{0}]_{m\times n}$，$\mathbf{B}=\begin{bmatrix}\mathbf{I}_m\\ \mathbf{0}\end{bmatrix}_{n\times m}$ 时 $\mathbf{AB}=\mathbf{I}_m$，行向量线性无关；如 $\mathbf{A}=\mathbf{0}$ 时 $\mathbf{AB}=\mathbf{0}$，行向量线性相关。因此 (A)、(B) 都不能恒成立。

**易错点**

1. 误以为 $\operatorname{rank}(\mathbf{AB})\le \min(m,n)$ 当 $m<n$ 时必 $<m$，忽略了上限恰为 $m$ 时可能取满秩。
2. 把“矩阵的行向量组线性相关”与“矩阵不可逆”混淆：$\mathbf{C}$ 为 $m$ 阶方阵，行向量相关等价于 $|\mathbf{C}|=0$ 且秩 $<m$；但题目未要求可逆性，必须回到秩。
3. 忘记行秩等于列秩等于矩阵秩。

**命题规律**

本题考查矩阵乘积秩的不等式与向量组相关性判定。命题人常将其与“$\mathbf{AB}$ 可逆”“$\mathbf{BA}$ 可逆”“零矩阵”等选项混排。复习时应熟记 $\operatorname{rank}(\mathbf{AB})\le \min(\operatorname{rank}\mathbf{A},\operatorname{rank}\mathbf{B})$，并能用分块单位阵构造反例。


> 来源：《26_余丙森五套卷（数一）》卷四 第 5 题
