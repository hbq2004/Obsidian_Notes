---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - LA
  - 26_张宇八套卷/卷六/FRQ
  - 计算题
  - 矩阵合同
  - 配方法化二次型
  - 惯性定理
  - 行列式同号
  - 可逆线性变换
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S6-Q21_题目.png|题目]]

已知实矩阵 $\mathbf{A} = \begin{pmatrix} 1 & 1 \\ 1 & a \end{pmatrix}, \mathbf{B} = \begin{pmatrix} 4 & b \\ 3 & 1 \end{pmatrix}$，其中 $a$ 为非负整数，且 $\mathbf{A}$ 与 $\mathbf{B}$ 合同.
(1) 求 $a,b$ 的值；
(2) 求可逆矩阵 $\mathbf{D}$, 使得 $\mathbf{A} = \mathbf{D}^{\mathrm{T}}\mathbf{B}\mathbf{D}$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S6-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$a=0$，$b=3$。可取

$$\mathbf D=\begin{pmatrix}\frac12 & \frac{\sqrt5-3}{2\sqrt5}\\0 & \frac2{\sqrt5}\end{pmatrix}.$$

关键给分点：① 由合同推出 $\mathbf B$ 对称，得 $b=3$；② 由 $\det\mathbf A=(\det\mathbf D)^2\det\mathbf B$ 及行列式同号得 $a=0$；③ 用配方法写出可逆矩阵 $\mathbf D$，并验证 $\mathbf A=\mathbf D^T\mathbf B\mathbf D$。

**解题切入点**

合同就是两个二次型可经可逆线性变换互化。先由对称性迫使 $b=3$，再由行列式符号定 $a$，最后用配方法把两个二次型配成同一组“带符号平方和”，回代反解出坐标变换矩阵。类比算法竞赛：配方法相当于给二次型构造一个“坐标变换哈希”，使两个对象的规范形相同。

**推演**

（1）求参数

设可逆矩阵 $\mathbf D$ 使 $\mathbf A=\mathbf D^T\mathbf B\mathbf D$。两边转置得
$$
\mathbf A^T=\mathbf D^T\mathbf B^T\mathbf D,
$$
而 $\mathbf A^T=\mathbf A$，故
$$
\mathbf D^T\mathbf B^T\mathbf D=\mathbf D^T\mathbf B\mathbf D.
$$
左乘 $(\mathbf D^T)^{-1}$、右乘 $\mathbf D^{-1}$，得 $\mathbf B^T=\mathbf B$。于是
$$
\begin{pmatrix}4&3\\3&1\end{pmatrix}=\begin{pmatrix}4&b\\3&1\end{pmatrix},
$$
所以 $b=3$。

此时 $\det\mathbf B=4-9=-5$。又由 $\mathbf A=\mathbf D^T\mathbf B\mathbf D$ 取行列式：
$$
\det\mathbf A=(\det\mathbf D)^2\det\mathbf B.
$$
因为 $(\det\mathbf D)^2>0$，所以 $\det\mathbf A$ 与 $\det\mathbf B$ 同号。而
$$
\det\mathbf A=\begin{vmatrix}1&1\\1&a\end{vmatrix}=a-1,
$$
故 $a-1<0$，即 $a<1$。又 $a$ 为非负整数，所以 $a=0$。

（2）构造 $\mathbf D$

对二次型配方：
$$
\mathbf X^T\mathbf B\mathbf X=4x_1^2+6x_1x_2+x_2^2=\left(2x_1+\frac32x_2\right)^2-\left(\frac{\sqrt5}{2}x_2\right)^2.
$$
$$
\mathbf Y^T\mathbf A\mathbf Y=y_1^2+2y_1y_2=(y_1+y_2)^2-y_2^2.
$$
令
$$
2x_1+\frac32x_2=y_1+y_2,\qquad \frac{\sqrt5}{2}x_2=y_2,
$$
解得
$$
x_2=\frac2{\sqrt5}y_2,\qquad
x_1=\frac12y_1+\frac{\sqrt5-3}{2\sqrt5}y_2.
$$
即 $\mathbf X=\mathbf D\mathbf Y$，其中
$$
\mathbf D=\begin{pmatrix}\frac12 & \frac{\sqrt5-3}{2\sqrt5}\\0 & \frac2{\sqrt5}\end{pmatrix}.
$$
$\det\mathbf D=\frac12\cdot\frac2{\sqrt5}-0=\frac1{\sqrt5}\ne0$，故可逆。代入可得
$$
\mathbf D^T\mathbf B\mathbf D=\begin{pmatrix}1&1\\1&0\end{pmatrix}=\mathbf A.
$$
因此该 $\mathbf D$ 满足要求（矩阵 $\mathbf D$ 不唯一，任取一个即可）。

**易错点**

- 只由 $\mathbf A=\mathbf D^T\mathbf B\mathbf D$ 不能直接默认 $\mathbf B$ 对称，需要利用 $\mathbf A$ 对称和 $\mathbf D$ 可逆证明，这一步是给分点。
- 行列式关系是 $\det\mathbf A=(\det\mathbf D)^2\det\mathbf B$，不要写成 $\det\mathbf A=\det\mathbf B$；同号不是相等，且 $(\det\mathbf D)^2>0$ 可推出 $\det\mathbf A$ 与 $\det\mathbf B$ 同号。
- 配方法中两组平方项的符号对应要一致，若把 $(y_1+y_2)^2-y_2^2$ 的先后顺序弄反，求出的 $\mathbf D$ 会不对。
- $a=1$ 时 $\det\mathbf A=0$，与 $\det\mathbf B\ne0$ 矛盾，不可取。

**命题规律**

本题是“合同 + 参数 + 可逆变换矩阵”的典型综合题。先利用合同不变量（对称性、行列式符号、惯性指数）定参数，再用配方法或初等行列变换求变换矩阵。复习时应熟练掌握配方法化规范形、合同变换的同步初等行列操作，并注意“合同”与“相似”的区分。


> 来源：《26_张宇八套卷（数一）》卷六 第 21 题
