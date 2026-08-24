---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - LA
  - 26_张宇八套卷/卷八/MCQ
  - 概念题
  - 线性相关与线性无关
  - 线性表示唯一性
  - 基向量坐标法
  - 行列式判定
points:
level:
---

# MCQ 第 7 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S8-Q07_题目.png|题目]]

设 $\alpha_1, \alpha_2, \cdots, \alpha_n$ 是 $n$ 个 $n$ 维的线性无关向量，$\alpha_{n+1} = k_1\alpha_1 + k_2\alpha_2 + \cdots + k_n\alpha_n$，其中 $k_1, k_2, \cdots, k_n$ 全不为 0，则下列结论 ① $\alpha_2, \alpha_3, \cdots, \alpha_{n+1}$ 线性相关； ② $\alpha_1, \alpha_3, \cdots, \alpha_{n+1}$ 线性相关； ③ $\alpha_1, \alpha_2, \alpha_4, \cdots, \alpha_{n+1}$ 线性相关. 正确的个数为.
(A) 0.
(B) 1.
(C) 2.
(D) 3.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S8-Q07_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
【答案】(A)。正确个数为 0。
①、②、③ 均不正确：它们对应的向量组都线性无关，而非线性相关。

**解题切入点**
把 $\alpha_1,\dots,\alpha_n$ 看作一组基，$\alpha_{n+1}$ 的坐标是 $k=(k_1,\dots,k_n)^T$，且 $k_i\ne0$。题目等价于：用全分量非零的向量 $k$ 替换掉某一个标准基向量 $e_j$，问所得 $n$ 个向量是否相关；行列式等于 $\pm k_j\ne0$，所以无关。

**推演**
设 $\lambda$ 表示组合系数。先证一般结论：对任意 $j\in\{1,\dots,n\}$，若去掉 $\alpha_j$ 并加入 $\alpha_{n+1}$，所得向量组
$$
\alpha_1,\dots,\alpha_{j-1},\alpha_{j+1},\dots,\alpha_n,\alpha_{n+1}
$$
线性无关。

设有
$$
\sum_{i\ne j}\lambda_i\alpha_i+\mu\alpha_{n+1}=0.
$$
代入 $\alpha_{n+1}=\sum_{i=1}^n k_i\alpha_i$，得
$$
\mu k_j\alpha_j+\sum_{i\ne j}(\lambda_i+\mu k_i)\alpha_i=0.
$$
由于 $\alpha_1,\dots,\alpha_n$ 线性无关，各系数必须为 $0$。特别地，
$$
\mu k_j=0.
$$
题设 $k_j\ne0$，所以 $\mu=0$；代回得 $\lambda_i=0$。故该向量组线性无关。

① 去掉的是 $\alpha_1$，$k_1\ne0$，故 $\alpha_2,\alpha_3,\dots,\alpha_{n+1}$ 线性无关，①错。
② 去掉的是 $\alpha_2$，$k_2\ne0$，故 $\alpha_1,\alpha_3,\dots,\alpha_{n+1}$ 线性无关，②错。
③ 去掉的是 $\alpha_3$，$k_3\ne0$，故 $\alpha_1,\alpha_2,\alpha_4,\dots,\alpha_{n+1}$ 线性无关，③错。

所以正确结论个数为 0，选 (A)。

**易错点**
- 不能只看到 $\alpha_{n+1}$ 可由 $\alpha_1,\dots,\alpha_n$ 线性表示，就认为去掉任意一个 $\alpha_j$ 后仍相关；关键是被去掉向量的系数 $k_j$ 是否为 0。
- 本题每组都是 $n$ 个 $n$ 维向量，不是 $n+1$ 个向量，因此不能套用“$n+1$ 个 $n$ 维向量必相关”的结论。
- 若个别 $k_j=0$，则对应的缺 $\alpha_j$ 的向量组会线性相关；题目中“全不为 0”正是为了排除这种情况。

**命题规律**
线性相关性问题在考研中常以“基+线性表示”包装。解题时先把已知向量组放到基下化为标准坐标，再用“坐标矩阵行列式是否为 0”或“线性表示系数唯一”判定。复习时注意把“线性无关”与“表示系数唯一”“行列式非零”“秩等于向量个数”等价转化。


> 来源：《26_张宇八套卷（数一）》卷八 第 7 题
