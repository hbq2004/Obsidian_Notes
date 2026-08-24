---
ctime: 2026-08-24 13:30:19
mtime: 2026-08-24 16:00:51
tags:
  - LA
  - 26_张宇八套卷/卷一/MCQ
  - 概念题
  - 幂等矩阵
  - 列满秩矩阵
  - 左逆矩阵
  - 矩阵的秩
  - 充要条件
points:
level:
---

# MCQ 第 7 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S1-Q07_题目.png|题目]]

设 $\mathbf{A}$ 为 $n$ 阶矩阵，$r(\mathbf{A})=r$，$\mathbf{E}_r$ 为 $r$ 阶单位矩阵，则 “$\mathbf{A}^2=\mathbf{A}$” 是 “存在列满秩矩阵 $\mathbf{C}_{n \times r}$，使得 $\mathbf{A}=\mathbf{CB}$，$\mathbf{BC}=\mathbf{E}_r$ ” 的 ( ).

(A) 充分非必要条件.

(B) 必要非充分条件.

(C) 充分必要条件.

(D) 既非充分又非必要条件.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S1-Q07_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
选择题【答案】：(C)。

由题设 $r(\mathbf{A})=r$，记题中 $\mathbf B$ 为 $r\times n$ 矩阵。$\mathbf A^2=\mathbf A$ 与“存在列满秩 $\mathbf C_{n\times r}$ 使 $\mathbf A=\mathbf{CB},\mathbf{BC}=\mathbf E_r$”互为充要条件，故 (A)(B)(D) 均不正确。

**解题切入点**
这是幂等矩阵的列空间分解问题。类比算法中的“投影”：若 $f^2=f$，则 $f$ 在值域上是恒等映射。把值域的一组基作为 $\mathbf C$，则 $\mathbf B$ 相当于给每个点取坐标，$\mathbf{BC}=\mathbf E_r$ 保证“取坐标再还原”为单位映射。

**推演**
1. 先证存在性推出幂等：若存在列满秩 $\mathbf C_{n\times r}$ 及 $\mathbf B_{r\times n}$，使 $\mathbf A=\mathbf{CB}$，$\mathbf{BC}=\mathbf E_r$，则
$$
\mathbf A^2=(\mathbf{CB})(\mathbf{CB})=\mathbf C(\mathbf{BC})\mathbf B=\mathbf C\mathbf E_r\mathbf B=\mathbf{CB}=\mathbf A.
$$
所以 $\mathbf A^2=\mathbf A$。

2. 再证幂等推出存在性：设 $\mathbf A^2=\mathbf A$ 且 $r(\mathbf A)=r$。令 $\mathbf C_{n\times r}$ 的 $r$ 个列向量依次为 $\operatorname{Im}\mathbf A$（即 $\mathbf A$ 的列空间）的一组基，则 $\mathbf C$ 列满秩，且 $\operatorname{col}(\mathbf C)=\operatorname{col}(\mathbf A)$。于是 $\mathbf A$ 的每一列都在 $\operatorname{col}(\mathbf C)$ 中，存在 $\mathbf B_{r\times n}$ 使 $\mathbf A=\mathbf{CB}$。又因 $\mathbf C$ 的列向量都属于 $\operatorname{Im}\mathbf A$，而幂等矩阵在自身值域上是恒等映射，所以 $\mathbf A\mathbf C=\mathbf C$。于是
$$
\mathbf C=\mathbf A\mathbf C=(\mathbf{CB})\mathbf C=\mathbf C(\mathbf{BC}).
$$
由 $\mathbf C$ 列满秩（存在左逆）得 $\mathbf{BC}=\mathbf E_r$。

3. 选项判断：
- (A) 充分非必要条件：错。因为条件也是必要的；
- (B) 必要非充分条件：错。因为条件也是充分的；
- (C) 充分必要条件：正确；
- (D) 既非充分又非必要条件：错。

**易错点**
不要把 $\mathbf{BC}=\mathbf E_r$ 误写成 $\mathbf{CB}=\mathbf E_r$：$\mathbf C$ 是 $n\times r$ 列满秩矩阵，$\mathbf B$ 是 $r\times n$ 矩阵，只有 $\mathbf{BC}$ 才是 $r\times r$ 单位阵。构造 $\mathbf C$ 时不能任取列满秩矩阵，要取 $\operatorname{Im}\mathbf A$ 的一组基；否则 $\mathbf A=\mathbf{CB}$ 不一定成立。

**命题规律**
幂等矩阵、列空间、秩分解是线代高频考点。此类题常把“$\mathbf A^2=\mathbf A$”与“$\mathbf A$ 是投影矩阵”联系起来，考查列满秩矩阵的左逆与消去律。复习时应熟练掌握：列满秩矩阵可左消去、行满秩矩阵可右消去；若 $\mathbf A=\mathbf{CB}$ 且 $\mathbf{BC}=\mathbf E_r$，则 $\mathbf A$ 必为幂等矩阵。


> 来源：《26_张宇八套卷（数一）》卷一 第 7 题
