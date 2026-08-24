---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - LA
  - 26_李林六套卷/卷六/MCQ
  - 概念题
  - 分块矩阵的秩
  - 矩阵乘积的秩
  - 初等变换不改变秩
  - 单位矩阵分块消元
  - 秩的不等式比较
points:
level:
---

# 选择题 第 6 题

![[_Attachments/题目识别/LL6T/LL6T-S6-Q06_题目.png|题目]]

设 $A,B$ 为 $n$ 阶矩阵, $E$ 为 $n$ 阶单位矩阵, 矩阵 $\begin{pmatrix} A & B \\ O & E \end{pmatrix}$, $\begin{pmatrix} BA & O \\ B & B \end{pmatrix}$, $\begin{pmatrix} E & A \\ B & O \end{pmatrix}$ 的秩依次为 $r_1, r_2, r_3$, 则
(A) $r_2 \geq r_1 \geq r_3.$
(B) $r_1 \geq r_2 \geq r_3.$
(C) $r_3 \geq r_2 \geq r_1.$
(D) $r_1 \geq r_3 \geq r_2.$

![[_Attachments/题目识别/LL6T-答案/LL6T-S6-Q06_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(D)。

由分块初等变换可得
$$r_1=n+\operatorname{rank}A,\quad r_2=\operatorname{rank}(BA)+\operatorname{rank}B,\quad r_3=n+\operatorname{rank}(BA).$$
故 $r_1\ge r_3\ge r_2$。

**解题切入点**

把分块矩阵看成“大矩阵”，用分块初等变换消去非对角块，得到分块对角阵；这类似算法竞赛里用“行列变换消元”化简状态，秩由对角块独立贡献。

**推演**

1. 求 $r_1$：对 $\begin{pmatrix}A&B\\O&E\end{pmatrix}$，用第二行块左消第一行块：$R_1\leftarrow R_1-BR_2$，得 $\begin{pmatrix}A&O\\O&E\end{pmatrix}$，故 $r_1=\operatorname{rank}A+n$。

2. 求 $r_2$：对 $\begin{pmatrix}BA&O\\B&B\end{pmatrix}$，令第一块列减第二块列：$C_1\leftarrow C_1-C_2$，得 $\begin{pmatrix}BA&O\\O&B\end{pmatrix}$，故 $r_2=\operatorname{rank}(BA)+\operatorname{rank}B$。

3. 求 $r_3$：对 $\begin{pmatrix}E&A\\B&O\end{pmatrix}$，第二行块左减 $B$ 倍第一行块：$R_2\leftarrow R_2-BR_1$，得 $\begin{pmatrix}E&A\\O&-BA\end{pmatrix}$；再用第一分块列右乘 $A$ 去消第二分块列：$C_2\leftarrow C_2-C_1A$，得 $\begin{pmatrix}E&O\\O&-BA\end{pmatrix}$，故 $r_3=n+\operatorname{rank}(BA)$。

4. 比较：
$$r_1-r_3=\operatorname{rank}A-\operatorname{rank}(BA)\ge0,$$
因为 $\operatorname{rank}(BA)\le\operatorname{rank}A$。
$$r_3-r_2=n-\operatorname{rank}B\ge0,$$
因为 $\operatorname{rank}B\le n$。所以 $r_1\ge r_3\ge r_2$。

各选项：
- (A) $r_2\ge r_1\ge r_3$：不一定成立，反例 $A=E,B=O$ 时 $r_1=2n,r_2=0,r_3=n$。
- (B) $r_1\ge r_2\ge r_3$：不一定成立，同上反例。
- (C) $r_3\ge r_2\ge r_1$：不一定成立，同上反例。
- (D) $r_1\ge r_3\ge r_2$：必然成立。

**易错点**

不要把 $r_2$ 误写成 $\operatorname{rank}(BA)+\operatorname{rank}B$ 以外的形式；分块列变换 $C_1\leftarrow C_1-C_2$ 是消去 $B$ 的关键，但要注意保持变换可逆。$\operatorname{rank}(BA)$ 可能小于 $\operatorname{rank}A$，所以 $r_1\ge r_3$ 不能写成等号。

**命题规律**

利用分块初等变换把秩化为对角块求和，并结合 $\operatorname{rank}(XY)\le\min\{\operatorname{rank}X,\operatorname{rank}Y\}$ 与 $\operatorname{rank}B\le n$ 排序。复习时多练“分块矩阵 + 初等变换”的秩题，警惕把分块乘法与普通矩阵乘法混淆。


> 来源：《26_李林六套卷（数一）》卷六 第 6 题
