---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - LA
  - 26_张宇八套卷/卷八/MCQ
  - 概念题
  - 特征值与特征向量
  - 矩阵多项式
  - 特征向量非零性
  - 线性无关性
  - 特征子空间
points:
level:
---

# MCQ 第 6 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S8-Q06_题目.png|题目]]

已知 $A$ 为 3 阶方阵, 1, 1, 2 是 $A$ 的 3 个特征值, $\alpha_1, \alpha_2, \alpha_3$ 为这 3 个特征值对应的特征向量, 则
(A) $\alpha_1, \alpha_2, \alpha_3$ 必为矩阵 $2\mathbf{E}-\mathbf{A}$ 的特征向量.
(B) $\alpha_1-\alpha_2$ 必为矩阵 $2\mathbf{E}-\mathbf{A}$ 的特征向量.
(C) $\alpha_1+\alpha_3$ 必为矩阵 $2\mathbf{E}-\mathbf{A}$ 的特征向量.
(D) $\alpha_1, \alpha_2$ 不是矩阵 $2\mathbf{E}-\mathbf{A}$ 的特征向量, $\alpha_3$ 必为矩阵 $2\mathbf{E}-\mathbf{A}$ 的特征向量.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S8-Q06_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
【答案】(A)

**解题切入点**
矩阵多项式保持特征向量方向不变：若 $A\alpha=\lambda\alpha$，则对 $B=2E-A$ 有 $B\alpha=(2-\lambda)\alpha$。这类似算法竞赛中“对每个状态只乘一个标量因子，方向不变”。

**推演**
设 $\alpha$ 为 $A$ 的任一特征向量，$A\alpha=\lambda\alpha$，则
$$
(2E-A)\alpha=2\alpha-A\alpha=(2-\lambda)\alpha.
$$
因 $\alpha\neq0$，所以 $\alpha$ 是 $2E-A$ 的特征向量。

逐项判断：
- (A) 正确。$\alpha_1,\alpha_2$ 对应 $\lambda=1$，$\alpha_3$ 对应 $\lambda=2$，代入上式分别得 $2E-A$ 的特征值 $1,1,0$，故三者均为 $2E-A$ 的特征向量。
- (B) 错误。$\alpha_1,\alpha_2$ 对应同一特征值 $1$，故 $2E-A$ 作用在 $\alpha_1-\alpha_2$ 上确实等于 $\alpha_1-\alpha_2$；但若 $\alpha_1=\alpha_2$，则 $\alpha_1-\alpha_2=0$，零向量不是特征向量，因此不是“必为”。
- (C) 错误。因为 $\alpha_1$ 与 $\alpha_3$ 属于不同特征值，线性无关。设 $\beta=\alpha_1+\alpha_3$，则 $(2E-A)\beta=\alpha_1$。若 $\beta$ 是特征向量，则 $(2E-A)\beta=\mu\beta$，即 $\alpha_1=\mu(\alpha_1+\alpha_3)$，与线性无关矛盾，故 $\beta$ 不是 $2E-A$ 的特征向量。
- (D) 错误。由上述性质，$\alpha_1,\alpha_2$ 必为 $2E-A$ 的特征向量，且 $\alpha_3$ 也是；第一句“不是”错误。

**易错点**
1. 特征向量必须非零；$\alpha_1-\alpha_2$ 可能为零向量。
2. 同一特征值的两个特征向量之差不一定是非零向量；不能因“作用后等于自身”就断言它是特征向量。
3. 不同特征值对应的特征向量线性无关，因此 $\alpha_1+\alpha_3$ 不可能是 $2E-A$ 的特征向量。

**命题规律**
本题核心是“矩阵多项式 $f(A)$ 与原矩阵 $A$ 有相同特征向量”，属于线性代数选填常见概念题。复习时需熟练掌握特征向量的定义、矩阵多项式的特征值与特征向量关系，并注意重复特征值下“非零”“线性无关”等细节。


> 来源：《26_张宇八套卷（数一）》卷八 第 6 题
