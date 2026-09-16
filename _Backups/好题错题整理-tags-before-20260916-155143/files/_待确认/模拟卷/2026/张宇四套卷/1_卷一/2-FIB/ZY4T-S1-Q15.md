---
ctime: 2026-08-24 05:34:19
mtime: 2026-08-24 05:34:19
tags:
  - LA
  - 26_张宇四套卷/卷一/FIB
  - 计算题
  - 线性方程组同解
  - 系数矩阵乘法
  - 基础解系
  - 矩阵秩
  - 参数讨论
points:
level:
---

# 填空题 第 15 题

![[_Attachments/题目识别/ZY4T/ZY4T-S1-Q15_题目.png|题目]]

已知方程组 (I) $\begin{cases} x_2 + a x_3 = 0, \\ x_1 + x_2 + (a+1)x_3 = 0 \end{cases}$ 的解均是方程组 (II) $\begin{cases} x_1 + x_2 + 2x_3 = 0, \\ x_1 + x_2 + b x_3 = 0 \end{cases}$ 的解，但方程组 (I) 与方程组 (II) 不同解. 设矩阵 $A$ 为方程组 (I) 的系数矩阵，矩阵 $B$ 为方程组 (II) 的系数矩阵，则 $B^{\mathrm{T}}A = \_\_\_\_\_\_$.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S1-Q15_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

方程组 (I) 的系数矩阵为
$$
A=\begin{pmatrix}
0 & 1 & a\\
1 & 1 & a+1
\end{pmatrix},
$$
方程组 (II) 的系数矩阵为
$$
B=\begin{pmatrix}
1 & 1 & 2\\
1 & 1 & b
\end{pmatrix}.
$$
由 (I) 的解均为 (II) 的解，且两方程组不同解，得 $b=2$，因此
$$
B^{\mathrm{T}}A=\begin{pmatrix}
1 & 1\\
1 & 1\\
2 & 2
\end{pmatrix}
\begin{pmatrix}
0 & 1 & a\\
1 & 1 & a+1
\end{pmatrix}
=\begin{pmatrix}
1 & 2 & 2a+1\\
1 & 2 & 2a+1\\
2 & 4 & 4a+2
\end{pmatrix}.
$$

【答案】：
$$
\boxed{B^{\mathrm{T}}A=\begin{pmatrix}
1 & 2 & 2a+1\\
1 & 2 & 2a+1\\
2 & 4 & 4a+2
\end{pmatrix}}
$$
其中 $b=2$，$a$ 为任意实数。

**解题切入点**

这是线性方程组与矩阵运算的综合题。先由“解集包含但不相同”确定参数 $b$，再直接做矩阵乘法。可类比算法竞赛中的“集合包含关系”：已知集合 $S_I\subseteq S_{II}$ 且 $S_I\ne S_{II}$，先用维数或特解判断二者何时相等，排除相等情形后即可确定参数。

**推演**

1. 写出两个方程组的系数矩阵：
$$
A=\begin{pmatrix}
0 & 1 & a\\
1 & 1 & a+1
\end{pmatrix},\qquad
B=\begin{pmatrix}
1 & 1 & 2\\
1 & 1 & b
\end{pmatrix}.
$$

2. 分析 (II) 的解空间。
(II) 的两个方程相减得
$$
(2-b)x_3=0.
$$

- 若 $b\ne 2$，则 $x_3=0$，代入 (II) 得 $x_1+x_2=0$。此时 (II) 的基础解系可取为
$$
\xi=(1,-1,0)^{\mathrm{T}}.
$$
再代入 (I)：
$$
\begin{cases}
x_2=0,\\
x_1+x_2=0,
\end{cases}
$$
得 $x_1=x_2=0$，但 $x_3$ 可任意，故 (I) 有解 $(0,0,1)^{\mathrm{T}}$。该向量显然不是 (II) 的解，与“ (I) 的解均是 (II) 的解”矛盾。因此 $b\ne 2$ 不符合题意。

- 若 $b=2$，则 (II) 的两个方程相同，即
$$
x_1+x_2+2x_3=0.
$$
此时 (II) 的基础解系可取为
$$
\eta_1=(1,-1,0)^{\mathrm{T}},\qquad
\eta_2=(2,0,-1)^{\mathrm{T}}.
$$
把这两个向量代入 (I) 检验：
$$
A\eta_1=\begin{pmatrix}
0 & 1 & a\\
1 & 1 & a+1
\end{pmatrix}
\begin{pmatrix}
1\\-1\\0
\end{pmatrix}
=\begin{pmatrix}
-1\\0
\end{pmatrix}
\ne \begin{pmatrix}
0\\0
\end{pmatrix},
$$
$$
A\eta_2=\begin{pmatrix}
0 & 1 & a\\
1 & 1 & a+1
\end{pmatrix}
\begin{pmatrix}
2\\0\\-1
\end{pmatrix}
=\begin{pmatrix}
-a\\1-a
\end{pmatrix}.
$$
这说明 (II) 的解不一定都是 (I) 的解，因此两个方程组不同解；而题设只要求 (I) 的解都是 (II) 的解，并不要求反过来成立，所以 $b=2$ 满足题意。

3. 其实也可用解空间维数判断：
(I) 的系数矩阵 $A$ 的秩为 $2$（第一、二行不成比例），故 (I) 的解空间维数为 $3-2=1$。(II) 的解空间维数：
- 当 $b\ne 2$ 时，$r(B)=2$，解空间维数为 $1$；
- 当 $b=2$ 时，$r(B)=1$，解空间维数为 $2$。

若 (I) 的解均为 (II) 的解，则 (I) 的解空间 $V_I$ 是 (II) 的解空间 $V_{II}$ 的子空间。若二者维数相同，则 $V_I=V_{II}$，即两方程组同解，与题设“不同解”矛盾；因此必须有
$$
\dim V_I<\dim V_{II}.
$$
故 $\dim V_{II}=2$，即 $r(B)=1$，从而 $b=2$。

4. 计算 $B^{\mathrm{T}}A$：
$$
B^{\mathrm{T}}=\begin{pmatrix}
1 & 1\\
1 & 1\\
2 & 2
\end{pmatrix},
$$
$$
B^{\mathrm{T}}A=\begin{pmatrix}
1 & 1\\
1 & 1\\
2 & 2
\end{pmatrix}
\begin{pmatrix}
0 & 1 & a\\
1 & 1 & a+1
\end{pmatrix}.
$$
逐项相乘：
$$
B^{\mathrm{T}}A=\begin{pmatrix}
0+1 & 1+1 & a+a+1\\
0+1 & 1+1 & a+a+1\\
0+2 & 2+2 & 2a+2a+2
\end{pmatrix}
=\begin{pmatrix}
1 & 2 & 2a+1\\
1 & 2 & 2a+1\\
2 & 4 & 4a+2
\end{pmatrix}.
$$

所以最终答案为
$$
\boxed{B^{\mathrm{T}}A=\begin{pmatrix}
1 & 2 & 2a+1\\
1 & 2 & 2a+1\\
2 & 4 & 4a+2
\end{pmatrix}}.
$$

**易错点**

- 易把“ (I) 的解均为 (II) 的解”误以为“两方程组同解”。本题明确说“不同解”，因此要利用维数不等排除 $b\ne 2$，或代入特解检验。
- 当 $b\ne 2$ 时，不能只判断 (II) 的基础解系是 (I) 的解就结束；还要注意 (I) 是否有多余的解不在 (II) 中。例如 $(0,0,1)^{\mathrm{T}}$ 就是反例。
- 计算 $B^{\mathrm{T}}A$ 时注意矩阵乘法顺序：$B^{\mathrm{T}}$ 是 $3\times 2$ 矩阵，$A$ 是 $2\times 3$ 矩阵，结果应为 $3\times 3$ 矩阵。不要写成 $AB^{\mathrm{T}}$ 或 $BA$。
- 参数 $a$ 无法由题设唯一确定，因为题设只约束 $b$ 和“解集包含且不同解”；$a$ 取任意实数时上述结论均成立。

**命题规律**

这类题把线性方程组的解集关系、矩阵秩与矩阵乘法组合在一起，是近年选择题、填空题的常见命题方式。复习时应熟练掌握：
- 方程组同解与解空间包含关系的判别；
- 系数矩阵秩与基础解系的关系；
- 矩阵乘法及转置运算。

遇到“某方程组的解均为另一方程组的解”时，优先用解空间维数比较；若不同解，则解空间维数必须严格不等，据此确定参数。


> 来源：《26_张宇四套卷（数一）》卷一 第 15 题
