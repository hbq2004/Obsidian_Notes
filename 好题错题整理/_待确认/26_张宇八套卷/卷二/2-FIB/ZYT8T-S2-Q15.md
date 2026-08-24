---
ctime: 2026-08-24 17:34:54
mtime: 2026-08-24 17:34:54
tags:
  - LA
  - 26_张宇八套卷/卷二/FIB
  - 概念题
  - 线性表示
  - 向量组的秩
  - 线性相关
  - 参数分类讨论
points:
level:
---

# FIB 第 15 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S2-Q15_题目.png|题目]]

设向量组 $\boldsymbol{\alpha}_1 = \begin{pmatrix} 0 \\ -1 \end{pmatrix}, \boldsymbol{\alpha}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \boldsymbol{\alpha}_3 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ 不可由向量组 $\boldsymbol{\beta}_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}, \boldsymbol{\beta}_2 = \begin{pmatrix} 3 \\ 7 \end{pmatrix}, \boldsymbol{\beta}_3 = \begin{pmatrix} 0 \\ -a \end{pmatrix}$ 线性表示，则 $a$ 的取值范围为 \_\_\_\_\_\_\_\_.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S2-Q15_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结论：当 $a=0$ 时，向量组 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 不可由 $\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3$ 线性表示。

填空题【答案】: \boxed{a=0}

**解题切入点**

考查向量组线性表示与秩的关系。关键：$\boldsymbol{\alpha}$ 组不可由 $\boldsymbol{\beta}$ 组线性表示 $\iff$ 存在 $\boldsymbol{\alpha}_i$ 不能由 $\boldsymbol{\beta}$ 组表示 $\iff$ $\boldsymbol{\beta}$ 组张成的空间不能包含 $\boldsymbol{\alpha}$ 组。由于 $\boldsymbol{\alpha}$ 组是二维空间，$\boldsymbol{\beta}$ 组必须秩小于 $2$ 且 $\boldsymbol{\alpha}$ 组不在其 $\operatorname{span}$ 中。类比算法竞赛：判断向量组是否可表示，相当于检查目标向量是否在生成空间中，类似判断点是否在子空间内。

**推演**

分步求解：

1. 分析 $\boldsymbol{\alpha}$ 组：$\boldsymbol{\alpha}_1=(0,-1)^\mathrm{T},\ \boldsymbol{\alpha}_2=(1,1)^\mathrm{T},\ \boldsymbol{\alpha}_3=(1,1)^\mathrm{T}$。$\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 线性无关（行列式 $0\times1-(-1)\times1=1\neq0$），故 $\boldsymbol{\alpha}$ 组秩为 $2$，$\operatorname{span}(\boldsymbol{\alpha})=\mathbb{R}^2$。

2. 分析 $\boldsymbol{\beta}$ 组：$\boldsymbol{\beta}_1=(1,2)^\mathrm{T},\ \boldsymbol{\beta}_2=(3,6)^\mathrm{T}$（注意 $\boldsymbol{\beta}_2$ 与 $\boldsymbol{\beta}_1$ 成比例，故 $\boldsymbol{\beta}_1,\boldsymbol{\beta}_2$ 线性相关），$\boldsymbol{\beta}_3=(0,-a)^\mathrm{T}$。讨论 $\boldsymbol{\beta}$ 组的秩：
   - 若 $\boldsymbol{\beta}_3$ 与 $\boldsymbol{\beta}_1$ 线性无关，则 $\boldsymbol{\beta}_1,\boldsymbol{\beta}_3$ 线性无关，$\boldsymbol{\beta}$ 组秩为 $2$，$\operatorname{span}(\boldsymbol{\beta})=\mathbb{R}^2$，此时 $\boldsymbol{\alpha}$ 组所有向量都可由 $\boldsymbol{\beta}$ 组线性表示，与条件矛盾。
   - 若 $\boldsymbol{\beta}_3$ 与 $\boldsymbol{\beta}_1$ 线性相关，则 $\boldsymbol{\beta}$ 组秩为 $1$，$\operatorname{span}(\boldsymbol{\beta})=L(\boldsymbol{\beta}_1)$ 是一条直线。

3. 条件“$\boldsymbol{\alpha}$ 组不可由 $\boldsymbol{\beta}$ 组线性表示”要求 $\boldsymbol{\beta}$ 组秩为 $1$ 且 $\boldsymbol{\alpha}$ 组中有向量不在该直线上。$\boldsymbol{\alpha}_1=(0,-1)$ 不在直线 $L(\boldsymbol{\beta}_1)$ 上（因为不存在 $k$ 使 $(0,-1)=k(1,2)$），$\boldsymbol{\alpha}_2=(1,1)$ 也不在，故当 $\boldsymbol{\beta}$ 组秩为 $1$ 时，$\boldsymbol{\alpha}$ 组不可由 $\boldsymbol{\beta}$ 组表示。

4. 因此，需要 $\boldsymbol{\beta}$ 组秩为 $1$，即 $\boldsymbol{\beta}_3$ 与 $\boldsymbol{\beta}_1$ 线性相关。由 $\boldsymbol{\beta}_3=k\boldsymbol{\beta}_1$ 得：$(0,-a)=k(1,2)\Rightarrow 0=k,\ -a=2k\Rightarrow k=0,\ a=0$。

5. 故 $a=0$ 时，$\boldsymbol{\beta}_3$ 为零向量，$\boldsymbol{\beta}$ 组秩为 $1$，$\boldsymbol{\alpha}$ 组不可由 $\boldsymbol{\beta}$ 组表示。$a\neq0$ 时，$\boldsymbol{\beta}$ 组秩为 $2$，$\boldsymbol{\alpha}$ 组可由 $\boldsymbol{\beta}$ 组表示。

所以，$a$ 的取值范围为 $a=0$。

**易错点**

- 易忽略 $\boldsymbol{\beta}_1,\boldsymbol{\beta}_2$ 线性相关，误认为 $\boldsymbol{\beta}$ 组总是秩 $2$，导致错误认为条件不可能成立。
- 易混淆“可由”与“不可由”的条件：当 $\boldsymbol{\beta}$ 组秩满时，任何同维向量都可表示，所以“不可由”必须 $\boldsymbol{\beta}$ 组秩低于维数且 $\boldsymbol{\alpha}$ 组不在其 $\operatorname{span}$ 中。
- 注意 $\boldsymbol{\alpha}$ 组中 $\boldsymbol{\alpha}_2=\boldsymbol{\alpha}_3$ 是冗余的，不影响秩，但要注意不要误认为 $\boldsymbol{\alpha}$ 组有 $3$ 个向量就秩为 $3$，在二维空间最多秩 $2$。

**命题规律**

- 向量组线性表示问题是线代高频考点，常与参数讨论结合，考查分类讨论的思想。
- 解题关键：将几何直观（向量空间包含关系）转化为代数条件（秩比较）。
- 复习建议：熟练掌握向量组秩的计算、线性表示与秩的关系定理：$\boldsymbol{\alpha}$ 组可由 $\boldsymbol{\beta}$ 组线性表示 $\iff r(\boldsymbol{\beta})=r(\boldsymbol{\beta},\boldsymbol{\alpha})$（这里 $\boldsymbol{\alpha}$ 是单个向量或整体需考虑），但本题是整体不可表示，可通过几何意义快速判断。

题面按 $\boldsymbol{\beta}_2=(3,6)^\mathrm{T}$ 理解（OCR 疑误，请核对原书）。


> 来源：《26_张宇八套卷（数一）》卷二 第 15 题
