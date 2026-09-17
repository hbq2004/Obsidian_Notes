---
ctime: 2026-08-24 05:34:18
mtime: 2026-08-24 05:34:18
tags:
  - LA
  - 26_张宇四套卷/卷一/MCQ
  - 概念题
  - 线性表示
  - 张成子空间
  - 线性相关性
  - 向量组等价
points:
level:
---

# 选择题 第 5 题

![[_Attachments/题目识别/ZY4T/ZY4T-S1-Q05_题目.png|题目]]

设向量 $\beta$ 可由向量组 $\alpha_1, \alpha_2, \alpha_3, \alpha_4$ 线性表示，但不可由向量组 (I): $\alpha_1, \alpha_2, \alpha_3$ 线性表示，记向量组 (II): $\alpha_1, \alpha_2, \alpha_3, \beta$，则.
(A) $\alpha_4$ 不可由向量组 (I) 线性表示，也不可由向量组 (II) 线性表示.
(B) $\alpha_4$ 不可由向量组 (I) 线性表示，但可由向量组 (II) 线性表示.
(C) $\alpha_4$ 可由向量组 (I) 线性表示，也可由向量组 (II) 线性表示.
(D) $\alpha_4$ 可由向量组 (I) 线性表示，但不可由向量组 (II) 线性表示.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S1-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(B)

β 可由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性表示，却不可由 (I) 线性表示；这说明在 β 的表达式中 $\alpha_4$ 的系数必不为 0。由此可推出 $\alpha_4\notin \operatorname{span}(\alpha_1,\alpha_2,\alpha_3)$，且 $\alpha_4\in \operatorname{span}(\alpha_1,\alpha_2,\alpha_3,\beta)$，所以选 (B)。

**解题切入点**

考查“线性表示”的本质：向量属于某个张成子空间。可类比算法竞赛里的可达集合：旧集合 $S=\operatorname{span}(\alpha_1,\alpha_2,\alpha_3)$ 中 β 不可达；加入 $\alpha_4$ 后 β 可达，说明 $\alpha_4$ 提供了旧集合没有的新信息。于是 $\alpha_4$ 不在旧集合中，但加入 β 后可达。

**推演**

设 $S=\operatorname{span}(\alpha_1,\alpha_2,\alpha_3)$。由题设，$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性表示，故存在 $s\in S$ 和系数 $c_4$，使
$$
\beta=s+c_4\alpha_4.
$$
若 $c_4=0$，则 $\beta=s\in S$，这与 β 不可由 (I) 线性表示矛盾，故 $c_4\neq 0$。于是
$$
\alpha_4=\frac{1}{c_4}(\beta-s),
$$
其中 $s\in \operatorname{span}(\alpha_1,\alpha_2,\alpha_3)$，所以 $\alpha_4\in \operatorname{span}(\alpha_1,\alpha_2,\alpha_3,\beta)$，即 α4 可由 (II) 线性表示。

再证 $\alpha_4$ 不可由 (I) 线性表示。若 $\alpha_4\in S$，则 $S+\operatorname{span}(\alpha_4)=S$，而 $\beta\in S+\operatorname{span}(\alpha_4)$，于是 $\beta\in S$，矛盾。所以 $\alpha_4\notin S$。

选项逐一核对：

- (A) 错：前半句“α4 不可由 (I) 表示”正确，但后半句“也不可由 (II) 表示”错误。
- (B) 对：α4 不可由 (I) 线性表示，但可由 (II) 线性表示。
- (C) 错：前半句错误，后半句正确。
- (D) 错：两个判断均与上述结论相反。

**易错点**

1. 不能仅由“β 可由 α1,...,α4 表示”就直接断言 α4 可由 (II) 表示，必须先说明 β 的表达式中 α4 的系数不为 0。
2. 判断 $\alpha_4$ 是否可由 (I) 表示时，用反证法：若 $\alpha_4\in S$，则加入 $\alpha_4$ 不改变张成子空间，$\beta$ 会被迫落入 $S$。
3. 不要把“(II) 能表示 α4”等同于“(II) 线性无关”；线性表示与线性无关是不同概念。

**命题规律**

这类题通常给出“大组可表示、小组不可表示”的条件，考查某个向量是否使张成子空间变大。等价于线性方程组 $Ax=\beta$ 的秩条件：$r(I)\neq r(I,\beta)$，加入 α4 后秩增加。复习时要熟练把“线性表示”翻译为张成子空间或秩的语言，并善用反证法。


> 来源：《26_张宇四套卷（数一）》卷一 第 5 题
