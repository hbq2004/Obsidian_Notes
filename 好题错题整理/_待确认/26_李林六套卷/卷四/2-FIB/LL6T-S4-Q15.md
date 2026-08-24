---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - LA
  - 26_李林六套卷/卷四/FIB
  - 计算题
  - 矩阵特征值
  - 相似对角化
  - 逆矩阵
  - 矩阵的迹
  - 矩阵多项式
points:
level:
---

# 填空题 第 15 题

![[_Attachments/题目识别/LL6T/LL6T-S4-Q15_题目.png|题目]]

设 $A,B$ 均为 3 阶矩阵, $A$ 的特征值为 $0,\frac{1}{2},\frac{1}{3}$, 且 $B(E-A)=A$, 其中 $E$ 为 3 阶单位矩阵, 则 $tr(A+B) = \_ .$

![[_Attachments/题目识别/LL6T-答案/LL6T-S4-Q15_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$A$ 的三个特征值 $0,\frac12,\frac13$ 互异，所以 $A$ 可相似对角化；又 $E-A$ 的特征值为 $1,\frac12,\frac23$，均非零，故 $E-A$ 可逆。由 $B(E-A)=A$ 得 $B=A(E-A)^{-1}$，在 $A$ 的特征方向上 $B$ 的特征值为 $\lambda/(1-\lambda)$，于是 $B$ 的特征值为 $0,1,\frac12$。因此
$$
\operatorname{tr}(A+B)=\operatorname{tr}A+\operatorname{tr}B=\left(0+\frac12+\frac13\right)+\left(0+1+\frac12\right)=\frac{7}{3}.
$$

【答案】

$$\boxed{\frac{7}{3}}$$

**解题切入点**

已知 $A$ 的特征值，矩阵方程又给出 $B$ 与 $A$ 的可交换关系；本质是把矩阵运算化为共同特征向量上的标量运算。类似算法竞赛中，若一个矩阵已经对角化，对矩阵做函数运算只需逐项作用于对角线元素。

**推演**

1. 因为 $A$ 有 $3$ 个互异特征值 $0,\frac12,\frac13$，存在可逆矩阵 $P$ 使
$$
P^{-1}AP=\Lambda=\operatorname{diag}\left(0,\frac12,\frac13\right).
$$

2. $E-A$ 的特征值为 $1,\frac12,\frac23$，均非零，所以 $E-A$ 可逆。

3. 由 $B(E-A)=A$ 右乘 $(E-A)^{-1}$，得
$$
B=A(E-A)^{-1}.
$$

4. 在同一组基下，
$$
P^{-1}(E-A)P=E-\Lambda=\operatorname{diag}\left(1,\frac12,\frac23\right),
$$
因此
$$
P^{-1}BP=\Lambda(E-\Lambda)^{-1}=\operatorname{diag}\left(0,\frac12,\frac13\right)\operatorname{diag}\left(1,2,\frac32\right)=\operatorname{diag}\left(0,1,\frac12\right).
$$

5. 所以
$$
\operatorname{tr}A=0+\frac12+\frac13=\frac56,\qquad \operatorname{tr}B=0+1+\frac12=\frac32,
$$
$$
\operatorname{tr}(A+B)=\frac56+\frac32=\frac{7}{3}.
$$

**易错点**

- 解矩阵方程时注意右乘顺序：$B(E-A)=A\Rightarrow B=A(E-A)^{-1}$，不要下意识写成 $(E-A)^{-1}A$；本题因 $A$ 与 $(E-A)^{-1}$ 可交换，所以两者相等。
- 不要忽略 $E-A$ 的可逆性：只有 $E-A$ 有零特征值时才不可逆，这里其特征值为 $1,\frac12,\frac23$。
- 用 $\lambda\mapsto \lambda/(1-\lambda)$ 求 $B$ 的特征值时，前提是 $A$ 可对角化；本题因特征值互异成立。

**命题规律**

常见套路：由矩阵方程先判断可逆并写出 $B$，再利用相似对角化把矩阵特征值化为数的运算，最后用迹的性质求和。复习时应熟练掌握矩阵多项式/有理函数作用在特征值上的条件，以及 $\operatorname{tr}$ 的相似不变性。


> 来源：《26_李林六套卷（数一）》卷四 第 15 题
