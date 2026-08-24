---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 08:03:26
tags:
  - LA
  - 26_张宇四套卷/卷四/MCQ
  - 概念题
  - 严格对角占优矩阵
  - 矩阵可逆判定
  - 线性方程组解的存在唯一性
  - Gerschgorin圆
points:
level:
---

# 选择题 第 7 题

![[_Attachments/题目识别/ZY4T/ZY4T-S4-Q07_题目.png|题目]]

若矩阵 $\boldsymbol{A} = (a_{ij})_{n \times n}$ ，对 $i=1,2,\cdots,n$ ，均有 $|a_{ii}| > \sum_{j \neq i} |a_{ij}|$ ，其中 $|a_{ij}|$ 表示元素 $a_{ij}$ 的绝对值，$\boldsymbol{\beta}$ 为任一 $n$ 维列向量，则
(A) $\boldsymbol{Ax} = \boldsymbol{0}$ 有非零解.
(B) $\boldsymbol{Ax} = \boldsymbol{\beta}$ 有唯一解.
(C) $\boldsymbol{Ax} = \boldsymbol{\beta}$ 不一定有解.
(D) $\boldsymbol{Ax} = \boldsymbol{0}$ 不一定有非零解.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S4-Q07_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】: (B)

【推演】
- 选项 (A) 错误：严格对角占优矩阵 $$\boldsymbol{A}$$ 可逆，故 $$\boldsymbol{Ax} = \boldsymbol{0}$$ 只有零解，无非零解。
- 选项 (B) 正确：严格对角占优矩阵可逆，对任意 $$\boldsymbol{\beta}$$，方程组 $$\boldsymbol{Ax} = \boldsymbol{\beta}$$ 有唯一解 $$\boldsymbol{x} = \boldsymbol{A}^{-1}\boldsymbol{\beta}$$。
- 选项 (C) 错误：由可逆性知解必存在且唯一，故“不一定有解”不成立。
- 选项 (D) 错误：$$\boldsymbol{Ax} = \boldsymbol{0}$$ 一定只有零解，即“一定有非零解”的反面成立，但“不一定有非零解”表述为可能存在非零解，与事实矛盾。

**解题切入点**

题干条件“每行对角元绝对值大于同行其他元素绝对值之和”即严格对角占优，这是线性代数中判定矩阵可逆的经典充分条件（类比算法竞赛中判据：若矩阵满足该条件，则其行列式非零，对应方程组唯一解）。本题直接考查该性质在解的存在唯一性上的应用。

**推演**

1. 由严格对角占优定义：对每个 $$i$$，$$|a_{ii}| > \sum_{j\neq i} |a_{ij}|$$。
2. 据 Gerschgorin 圆盘定理，所有特征值位于复平面上的圆盘 $$\{z: |z - a_{ii}| \leq \sum_{j\neq i} |a_{ij}|\}$$ 内，因 $$|a_{ii}| > \sum_{j\neq i} |a_{ij}|$$，故 $$0$$ 不在任何圆盘中，即 $$0$$ 不是特征值，从而 $$\boldsymbol{A}$$ 可逆。
3. 可逆矩阵 $$\boldsymbol{A}$$ 满足：
   - 齐次方程组 $$\boldsymbol{Ax} = \boldsymbol{0}$$ 只有零解（唯一解）；
   - 非齐次方程组 $$\boldsymbol{Ax} = \boldsymbol{\beta}$$ 对任意 $$\boldsymbol{\beta}$$ 有唯一解 $$\boldsymbol{x} = \boldsymbol{A}^{-1}\boldsymbol{\beta}$$。
4. 对照选项：
   - (A) 说“有非零解”错误；
   - (B) 说“有唯一解”正确；
   - (C) 说“不一定有解”错误；
   - (D) 说“不一定有非零解”错误（实际一定没有非零解）。

故正确答案为 (B)。

**易错点**

- 混淆“严格对角占优”与“对角占优”（允许相等时的非严格情形），后者不一定可逆，但本题是严格，故可逆。
- 误认为“不一定有解”意味着可能无解，但可逆矩阵保证解存在且唯一，所以“不一定”不成立。
- 对 (D) 的表述理解偏差：“不一定有非零解”包含“可能有非零解”的意思，而实际是“一定没有非零解”，故 (D) 错误。

**命题规律**

- 常以矩阵可逆的充分条件（如严格对角占优、行满秩等）为背景，考查线性方程组解的存在唯一性。
- 复习时需熟记：严格对角占优 $$\Rightarrow$$ 可逆 $$\Rightarrow$$ 齐次只有零解，非齐次对任意右端有唯一解。
- 注意此类题常与数值计算（如迭代法收敛性）结合，但考研中侧重概念理解。


> 来源：《26_张宇四套卷（数一）》卷四 第 7 题
