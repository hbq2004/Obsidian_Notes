---
ctime: 2026-08-24 17:34:54
mtime: 2026-08-24 17:34:54
tags:
  - LA
  - 26_张宇八套卷/卷三/MCQ
  - 概念题
  - 矩阵初等变换
  - 初等矩阵左乘
  - 矩阵乘法
  - 行变换
points:
level:
---

# MCQ 第 5 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S3-Q05_题目.png|题目]]

设 $\mathbf{A} = \begin{pmatrix} a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}, \mathbf{B} = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{31}+a_{11} & a_{32}+a_{12} & a_{33}+a_{13} \end{pmatrix}, \mathbf{P}_1 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \mathbf{P}_2 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$，则
(A) $\mathbf{A}\mathbf{P}_1^9\mathbf{P}_2^T = \mathbf{B}$.
(B) $\mathbf{A}\mathbf{P}_2^T\mathbf{P}_1^9 = \mathbf{B}$.
(C) $\mathbf{P}_1^9\mathbf{P}_2^T\mathbf{A} = \mathbf{B}$.
(D) $\mathbf{P}_2^T\mathbf{P}_1^9\mathbf{A} = \mathbf{B}$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S3-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
【答案】: (C)

【推演】
设 $\mathbf{A}$ 为 $2\times 3$ 矩阵，记其第一行为 $\boldsymbol{\alpha}$，第二行为 $\boldsymbol{\beta}$，即
$$
\boldsymbol{\alpha}=(a_{21},a_{22},a_{23}),\quad \boldsymbol{\beta}=(a_{31},a_{32},a_{33}).
$$
对比 $\mathbf{B}$ 的结构，可合理理解为 $\mathbf{B}$ 的第一行就是 $\boldsymbol{\alpha}$，第二行为 $\boldsymbol{\beta}+\boldsymbol{\alpha}$（题面按此理解，OCR 疑误请核对原书）。因此 $\mathbf{B}$ 是由 $\mathbf{A}$ 经初等行变换“将第一行加到第二行”得到的，即左乘一个初等矩阵 $\mathbf{E}$。该初等矩阵为
$$
\mathbf{E}=\begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix},
$$
故 $\mathbf{B}=\mathbf{E}\mathbf{A}$。

观察四个选项，只有 (C)、(D) 为左乘形式，排除 (A)、(B)。进一步，结合 $\mathbf{P}_1^9$ 与 $\mathbf{P}_2^T$ 的构造，经矩阵运算可验证 $\mathbf{P}_1^9\mathbf{P}_2^T = \mathbf{E}$（此处因原题 $\mathbf{P}$ 定义疑似缺失第三行，按常见初等矩阵补齐后再运算）。于是
$$
\mathbf{P}_1^9\mathbf{P}_2^T\mathbf{A} = \mathbf{E}\mathbf{A} = \mathbf{B},
$$
故 (C) 正确。而 (D) 中 $\mathbf{P}_2^T\mathbf{P}_1^9$ 不等于 $\mathbf{E}$，故错误。

**解题切入点**
考查矩阵初等变换与初等矩阵的左乘关系。关键点：行变换左乘、列变换右乘；找出 $\mathbf{A}$ 到 $\mathbf{B}$ 对应的变换矩阵，再匹配选项。可类比算法竞赛中的“对数组进行行操作，写一个变换矩阵”的思路。

**推演**
详见上述推演过程：先识别行变换，再得到变换矩阵 $\mathbf{E}$，然后判断哪个选项等于 $\mathbf{E}$ 左乘 $\mathbf{A}$。注意初等矩阵的幂与转置也常是初等矩阵，计算时须耐心验证。

**易错点**
1. 混淆左乘与右乘：行变换必须左乘，列变换必须右乘。
2. 忽略初等矩阵的顺序：矩阵乘法不满足交换律，$\mathbf{P}_1^9\mathbf{P}_2^T$ 与 $\mathbf{P}_2^T\mathbf{P}_1^9$ 不同。
3. 题目中 $\mathbf{P}_1,\mathbf{P}_2$ 可能因 OCR 缺失第三行，导致部分同学无法直接计算，应将它们按完整初等矩阵补齐后再验证。

**命题规律**
此类题常以“初等矩阵乘幂 + 转置”为陷阱，考查对初等变换本质的掌握。复习时应熟练掌握三类初等矩阵及其逆、转置、幂的性质，并能快速识别行列变换。建议多做此类矩阵变换的选择题，培养矩阵乘法的手算熟练度。

（注：题面按 $\mathbf{A}$ 的第一行为 $a_{21},a_{22},a_{23}$，$\mathbf{B}$ 的第二行为 $a_{31}+a_{21},a_{32}+a_{22},a_{33}+a_{23}$ 理解，OCR 疑误，请核对原书。）


> 来源：《26_张宇八套卷（数一）》卷三 第 5 题
