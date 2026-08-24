---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - LA
  - 26_张宇四套卷/卷二/FRQ
  - 证明题
  - 线性无关判定
  - 不变子空间
  - 约当标准形
  - 矩阵相似判定
points:
level:
---

# 解答题 第 21 题

![[_Attachments/题目识别/ZY4T/ZY4T-S2-Q21_题目.png|题目]]

设 4 阶实矩阵 $A$ 与 4 维列向量 $\alpha, \beta$ 满足 $A(\alpha + \beta) = 4\alpha + 3\beta$ , $A(\alpha - \beta) = 2\alpha - 3\beta$ , $\alpha, \beta$ 线性无关. 方程组 $Ax = 0$ 有两个线性无关的解向量 $\eta_1, \eta_2$ .

(1) 证明 $\alpha, \beta, \eta_1, \eta_2$ 线性无关；

(2) 判断矩阵 $A$ 与
$$
\begin{pmatrix}
3 & 1 & 0 & 0 \\
0 & 3 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{pmatrix}
$$
是否相似，并说明理由.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S2-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

（1）$\alpha,\beta,\eta_1,\eta_2$ 线性无关。

（2）矩阵 $A$ 与 $B=\begin{pmatrix}3&1&0&0\\0&3&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix}$ 相似。

关键给分点：

- 加减条件式得 $A\alpha=3\alpha$，$A\beta=\alpha+3\beta$；
- 证明 $U=\mathrm{span}\{\alpha,\beta\}$ 与 $\ker A$ 只有零交集；
- 由线性组合为零推出所有系数为零；
- 以 $\alpha,\beta,\eta_1,\eta_2$ 为基，$A$ 的表示矩阵正是 $B$，故相似。

**解题切入点**

已知条件给出两个“组合”的像，先加减还原出 $A\alpha,A\beta$，等价于在二维不变子空间 $U$ 上得到 Jordan 块；$A\eta_i=0$ 则给出零块。类似算法竞赛中“按子空间分治”：先处理不变子空间，再合并零空间。

**推演**

由
$$
A(\alpha+\beta)=4\alpha+3\beta,\quad A(\alpha-\beta)=2\alpha-3\beta
$$
相加得
$$
2A\alpha=6\alpha \Rightarrow A\alpha=3\alpha.
$$
相减得
$$
2A\beta=2\alpha+6\beta \Rightarrow A\beta=\alpha+3\beta.
$$

设 $U=\mathrm{span}\{\alpha,\beta\}$。若 $u=c_1\alpha+c_2\beta\in U\cap\ker A$，则
$$
0=Au=c_1A\alpha+c_2A\beta=(3c_1+c_2)\alpha+3c_2\beta.
$$
因 $\alpha,\beta$ 线性无关，故 $c_2=0$，$c_1=0$，所以 $U\cap\ker A=\{0\}$。

又 $\eta_1,\eta_2\in\ker A$ 线性无关，设
$$
k_1\alpha+k_2\beta+l_1\eta_1+l_2\eta_2=0.
$$
则 $k_1\alpha+k_2\beta=-(l_1\eta_1+l_2\eta_2)\in U\cap\ker A$，故两边均为零。由 $\alpha,\beta$ 线性无关得 $k_1=k_2=0$，由 $\eta_1,\eta_2$ 线性无关得 $l_1=l_2=0$。故（1）成立。

令 $P=(\alpha,\beta,\eta_1,\eta_2)$，由（1）知 $P$ 可逆。在基 $\alpha,\beta,\eta_1,\eta_2$ 下，
$$
A\alpha=3\alpha,\quad A\beta=\alpha+3\beta,\quad A\eta_1=0,\quad A\eta_2=0.
$$
因此
$$
AP=P\begin{pmatrix}3&1&0&0\\0&3&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix}.
$$
所以
$$
P^{-1}AP=\begin{pmatrix}3&1&0&0\\0&3&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix}=B,
$$
故 $A$ 与 $B$ 相似。

**易错点**

- 不要把 $A(\alpha+\beta)=4\alpha+3\beta$ 误认为 $A\alpha,A\beta$ 的系数就是矩阵元素；必须先加减解出 $A\alpha=3\alpha$，$A\beta=\alpha+3\beta$。
- 证明线性无关时，忘记说明 $U\cap\ker A=\{0\}$ 会不完整。
- 第二部分若只用“特征值相同”判断相似会出错；这里应通过基变换写出表示矩阵，或说明 Jordan 形相同。
- 注意矩阵第 2 列是 $1,3,0,0$，不要写成 $3,1,0,0$；表示矩阵与基的排列顺序有关。

**命题规律**

本题是线代大题典型：给若干“组合像”和一个零空间，考查不变子空间、线性无关和相似判定。复习时要熟练掌握“由组合像反解单向量像”的技巧，并把线性变换放在不同基下的表示矩阵与 Jordan 标准形联系起来。张宇四套卷中此类题常与特征值、若尔当块结合，属于中档偏上的证明题。


> 来源：《26_张宇四套卷（数一）》卷二 第 21 题
