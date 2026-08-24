---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - LA
  - 26_张宇四套卷/卷三/MCQ
  - 概念题
  - 线性相关与线性无关
  - 线性方程组解的结构
  - 线性表示的唯一性
  - 空间直线的参数方程
points:
level:
---

# 选择题 第 7 题

![[_Attachments/题目识别/ZY4T/ZY4T-S3-Q07_题目.png|题目]]

设 $\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \boldsymbol{\alpha}_3, \boldsymbol{\alpha}_4$ 是 $n$ 维非零列向量，$x_1\boldsymbol{\alpha}_1 + x_2\boldsymbol{\alpha}_2 = \boldsymbol{\alpha}_3$ 有唯一解，且 $\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \boldsymbol{\alpha}_4$ 线性相关. 在空间直角坐标系 $O-xyz$ 中，关于 $x, y, z$ 的方程组 $x\boldsymbol{\alpha}_1 + y\boldsymbol{\alpha}_2 + z\boldsymbol{\alpha}_3 = \boldsymbol{\alpha}_4$ 的几何图形是.
(A) 过原点的一条直线.
(B) 过原点的一个平面.
(C) 不过原点的一条直线.
(D) 不过原点的一个平面.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S3-Q07_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(C)。

因此该方程组在 $O-xyz$ 中的图形是**不过原点的一条直线**。

**解题切入点**

由 $x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2=\boldsymbol{\alpha}_3$ 有唯一解，可知 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 线性无关，且 $\boldsymbol{\alpha}_3$ 可由它们唯一线性表示；又 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_4$ 线性相关，故 $\boldsymbol{\alpha}_4$ 也可由 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 唯一线性表示。可类比算法竞赛中：线性无关约束决定有效维度，自由变量个数就是几何图形的维数。把 $\boldsymbol{\alpha}_3$ 的表示代入原向量方程，利用线性无关性消去向量，得到关于 $(x,y,z)$ 的线性方程组，其解集是三维空间中的一条直线；又 $(0,0,0)$ 不满足原方程，所以不过原点。

**推演**

设 $\boldsymbol{\alpha}_3=a\boldsymbol{\alpha}_1+b\boldsymbol{\alpha}_2$。由 $x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2=\boldsymbol{\alpha}_3$ 有唯一解（两个未知量的线性方程组），可知 $[\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2]$ 的秩为 2，从而 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 线性无关，且表示 $a,b$ 唯一。

由 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_4$ 线性相关，且 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 线性无关，可设 $\boldsymbol{\alpha}_4=c\boldsymbol{\alpha}_1+d\boldsymbol{\alpha}_2$；因为 $\boldsymbol{\alpha}_4\ne\mathbf{0}$，所以 $(c,d)\ne(0,0)$。

原方程为
$$
x\boldsymbol{\alpha}_1+y\boldsymbol{\alpha}_2+z\boldsymbol{\alpha}_3=\boldsymbol{\alpha}_4.
$$
代入 $\boldsymbol{\alpha}_3=a\boldsymbol{\alpha}_1+b\boldsymbol{\alpha}_2$，得
$$
(x+az)\boldsymbol{\alpha}_1+(y+bz)\boldsymbol{\alpha}_2=c\boldsymbol{\alpha}_1+d\boldsymbol{\alpha}_2.
$$
由 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 线性无关，比较系数得
$$
\begin{cases}
x+az=c,\\ y+bz=d.
\end{cases}
$$
因此解集为
$$
\begin{cases}
x=c-az,\\ y=d-bz,\\ z=z.
\end{cases}
$$
这是三维空间中的一条直线的参数方程，方向向量为 $(-a,-b,1)$。

过原点检验：令 $x=y=z=0$，原方程左端为 $\mathbf{0}$，右端为 $\boldsymbol{\alpha}_4\ne\mathbf{0}$，矛盾，故该直线不过原点。

选项分析：

(A) 过原点的一条直线：直线判断正确，但“过原点”错误；

(B) 过原点的一个平面：既不是平面，又不过原点，错误；

(C) 不过原点的一条直线：正确；

(D) 不过原点的一个平面：平面判断错误，错误。

故答案为 (C)。

**易错点**

1. 由“$\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_4$ 线性相关”不能直接得到 $\boldsymbol{\alpha}_4$ 是 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 的线性组合，必须先确认 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 线性无关；本题恰由唯一解条件保证。

2. 不要把“有唯一解”理解为 $\boldsymbol{\alpha}_3$ 与 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 无关；唯一解条件反而说明 $\boldsymbol{\alpha}_3$ 落在 $\operatorname{span}\{\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2\}$ 中，且表示唯一。

3. 判断是否过原点只需代入 $(0,0,0)$；本题直接由 $\boldsymbol{\alpha}_4\ne\mathbf{0}$ 排除过原点。

**命题规律**

本题属于线性代数与空间解析几何结合的命题套路：先用向量组线性相关性确定“自由度”，再把向量方程转化为坐标变量方程，最后判断几何图形。复习时应熟练掌握“线性方程组唯一解、无穷多解与秩的关系”，以及三维空间中直线、平面的参数/一般方程判断。类似题可先将向量组关系化简，再用独立变量描述解集。


> 来源：《26_张宇四套卷（数一）》卷三 第 7 题
