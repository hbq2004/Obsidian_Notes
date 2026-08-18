---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
tags:
  - LA
  - 27_ep月考卷/套四/FRQ
  - 计算题
  - 矩阵方程求解
  - 实对称矩阵对角化
  - 特征值与特征向量
  - 矩阵秩条件
  - 全1矩阵特征
points:
level:
---

# FRQ 第 22 题

![[_Attachments/题目识别/JJ8T/JJ8T-S4-Q22_题目.png|题目]]

22. 已知矩阵 $A = \begin{pmatrix} -1 & -1 & 0 \\ 0 & -1 & -1 \\ 0 & 0 & -2 \end{pmatrix}$，$B$ 为 3 阶实对称矩阵，$AB - A + 2B = 2E$，$B \neq E$，$r(A + 2B) = 3$。

(1) 求所有满足条件的 $B$；

(2) 求可逆矩阵 $P$ 及对角阵 $\Lambda$，使得 $P^{-1}BP = \Lambda$。


---

## DeepSeek V4 Flash Max

【考点】本题考查矩阵方程的求解与实对称矩阵的对角化，本质是线性方程组与特征值问题。类比算法竞赛：先把矩阵方程化为标准形式 $(A+2E)B=A+2E$，因 $A+2E$ 奇异，解不唯一，需引入参数；再用特征分解求对角化。

【解】(1) 由 $AB-A+2B=2E$ 整理得
$$(A+2E)B = A+2E.$$
令 $C=A+2E$，则 $C = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{pmatrix}$。
设 $B=(x_{ij})$ 且为实对称矩阵，即 $x_{ij}=x_{ji}$。比较 $(C B)_{ij}=C_{ij}$，可得方程组：
$$\begin{cases} x_{11}-x_{21}=1 \\ x_{12}-x_{22}=-1 \\ x_{13}-x_{23}=0 \\ x_{21}-x_{31}=0 \\ x_{22}-x_{32}=1 \\ x_{23}-x_{33}=-1 \end{cases}$$
结合对称性解得：
$$B = \begin{pmatrix} t & t-1 & t-1 \\ t-1 & t & t-1 \\ t-1 & t-1 & t \end{pmatrix} \quad (t \in \mathbb{R}).$$
条件 $B\neq E$ 给出 $t\neq 1$。
再验证秩条件：计算得
$$A+2B = \begin{pmatrix} 2t-1 & 2t-3 & 2t-2 \\ 2t-2 & 2t-1 & 2t-3 \\ 2t-2 & 2t-2 & 2t-2 \end{pmatrix},$$
其行列式 $|A+2B| = (2t-2)\cdot 3 = 6(t-1)$，当 $t\neq 1$ 时非零，故 $r(A+2B)=3$。所以所有满足条件的 $B$ 为上述参数族，$t\neq 1$。

(2) 注意到 $B = I + (t-1)J$，其中 $J$ 为全 $1$ 矩阵。$J$ 的特征值为 $3$（对应向量 $(1,1,1)^T$）和 $0$（二重，对应平面 $x_1+x_2+x_3=0$）。故 $B$ 的特征值为 $\lambda_1 = 3t-2$（单重）和 $\lambda_2 = \lambda_3 = 1$。取特征向量
$$v_1 = (1,1,1)^T,\quad v_2 = (1,-1,0)^T,\quad v_3 = (1,0,-1)^T,$$
令 $P = (v_1, v_2, v_3) = \begin{pmatrix} 1 & 1 & 1 \\ 1 & -1 & 0 \\ 1 & 0 & -1 \end{pmatrix}$，则 $P$ 可逆，且
$$P^{-1} B P = \begin{pmatrix} 3t-2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} = \Lambda.$$

【答案】(1) 所有满足条件的 $B$ 为
$$B = \begin{pmatrix} t & t-1 & t-1 \\ t-1 & t & t-1 \\ t-1 & t-1 & t \end{pmatrix},\quad t\in\mathbb{R},\ t\neq 1.$$
(2) 取 $P = \begin{pmatrix} 1 & 1 & 1 \\ 1 & -1 & 0 \\ 1 & 0 & -1 \end{pmatrix}$，$\Lambda = \operatorname{diag}(3t-2,\,1,\,1)$，则 $P^{-1}BP=\Lambda$。
关键给分点：① 正确整理方程得 $(A+2E)B=A+2E$；② 由对称性解出参数化 $B$；③ 由 $B\neq E$ 和秩条件确定 $t\neq 1$；④ 求特征值与特征向量，构造可逆 $P$。

【易错点】① $A+2E$ 不可逆，不能两边左乘其逆矩阵；② $B\neq E$ 排除 $t=1$，但需同时验证秩条件，二者一致；③ 特征向量的选取要保证 $P$ 可逆，且特征值顺序与 $P$ 的列对应；④ 计算 $A+2B$ 的行列式时不要遗漏因子 $2t-2$。

【命题规律】此类题常以矩阵方程结合对称矩阵出现，先解线性方程组或矩阵方程，再对角化。复习时需熟练掌握含参数矩阵的方程求解、对称矩阵的特征值特征向量及可逆矩阵的构造。

---

## V4 Flash Max 解析

**答案**:

(1) 满足条件的 $B$ 为  
$$
B=I+tJ=\begin{pmatrix}
1+t&t&t\\
t&1+t&t\\
t&t&1+t
\end{pmatrix},\qquad t\in\mathbb R\setminus\{0\},
$$
其中
$$
J=\begin{pmatrix}
1&1&1\\
1&1&1\\
1&1&1
\end{pmatrix}.
$$

(2) 取  
$$
P=\begin{pmatrix}
1&1&1\\
1&-1&1\\
1&0&-2
\end{pmatrix},\qquad
\Lambda=\begin{pmatrix}
1+3t&0&0\\
0&1&0\\
0&0&1
\end{pmatrix},
$$
则
$$
P^{-1}BP=\Lambda.
$$
$P$ 的三列分别是对应特征值 $1+3t,1,1$ 的特征向量，$P$ 不唯一。

---

**解题切入点**：

看到 $AB-A+2B=2E$，先把含 $B$ 的项合并：
$$
AB+2B=A+2E \Rightarrow (A+2E)B=A+2E.
$$
这相当于算法题里的“移项、提取公因子”。但注意 $A+2E$ 是奇异矩阵，不能直接消去。设 $X=B-E$，就转化为齐次方程
$$
(A+2E)X=0.
$$
解出 $X$ 的通解后，用秩条件 $r(A+2B)=3$ 筛选参数，类似“枚举自由变量后剪枝”。

---

**推演**：

令
$$
C=A+2E=\begin{pmatrix}
1&-1&0\\
0&1&-1\\
0&0&0
\end{pmatrix},
\qquad X=B-E.
$$
因为 $B$ 是实对称矩阵，所以 $X$ 也是实对称矩阵。设
$$
X=\begin{pmatrix}
a&b&c\\
b&d&e\\
c&e&f
\end{pmatrix}.
$$

由原方程：
$$
AB-A+2B=2E
\iff (A+2E)B=A+2E
\iff C(E+X)=C
\iff CX=0.
$$

计算：
$$
CX=
\begin{pmatrix}
1&-1&0\\
0&1&-1\\
0&0&0
\end{pmatrix}
\begin{pmatrix}
a&b&c\\
b&d&e\\
c&e&f
\end{pmatrix}
=
\begin{pmatrix}
a-b&b-d&c-e\\
b-c&d-e&e-f\\
0&0&0
\end{pmatrix}.
$$

由 $CX=0$ 得
$$
a=b,\quad b=d,\quad c=e,\quad b=c,\quad d=e,\quad e=f.
$$
所以
$$
a=b=c=d=e=f=t.
$$

因此
$$
X=tJ,
$$
从而
$$
B=E+X=I+tJ=
\begin{pmatrix}
1+t&t&t\\
t&1+t&t\\
t&t&1+t
\end{pmatrix}.
$$

又因为 $B\neq E$，所以 $t\neq0$。

再看秩条件：
$$
A+2B=A+2(E+tJ)=C+2tJ
=
\begin{pmatrix}
1+2t&-1+2t&2t\\
2t&1+2t&-1+2t\\
2t&2t&2t
\end{pmatrix}.
$$

做行变换：$R_1\leftarrow R_1-R_3$，$R_2\leftarrow R_2-R_3$，行列式不变：
$$
\det(A+2B)
=
\det\begin{pmatrix}
1&-1&0\\
0&1&-1\\
2t&2t&2t
\end{pmatrix}
=6t.
$$

因为 $A+2B$ 是 $3$ 阶方阵，$r(A+2B)=3$ 等价于 $\det(A+2B)\neq0$，所以
$$
t\neq0.
$$

这个条件与 $B\neq E$ 一致，因此最终
$$
B=I+tJ,\qquad t\neq0.
$$

对角化时，利用全 $1$ 矩阵 $J$ 的性质：
$$
J\begin{pmatrix}1\\1\\1\end{pmatrix}
=3\begin{pmatrix}1\\1\\1\end{pmatrix},
$$
且若 $v_1+v_2+v_3=0$，则
$$
Jv=0.
$$

所以对 $B=I+tJ$：
$$
B(1,1,1)^T=(1+3t)(1,1,1)^T,
$$
并且在子空间 $x_1+x_2+x_3=0$ 上有
$$
Bv=v.
$$

取三个线性无关的特征向量：
$$
v_1=\begin{pmatrix}1\\1\\1\end{pmatrix},\qquad
v_2=\begin{pmatrix}1\\-1\\0\end{pmatrix},\qquad
v_3=\begin{pmatrix}1\\1\\-2\end{pmatrix}.
$$

则
$$
P=(v_1\ v_2\ v_3)=
\begin{pmatrix}
1&1&1\\
1&-1&1\\
1&0&-2
\end{pmatrix}
$$
可逆，且
$$
P^{-1}BP=
\begin{pmatrix}
1+3t&0&0\\
0&1&0\\
0&0&1
\end{pmatrix}.
$$

---

**易错点**：

1. 不要把 $A+2E$ 当成可逆矩阵直接“消去”。  
   因为 $A+2E$ 的第三行全为 $0$，它是奇异矩阵。直接消去会漏掉非平凡解，甚至错误地得到 $B=E$。

2. 忘记利用 $B$ 的对称性。  
   $B$ 是实对称矩阵，所以设 $X=B-E$ 时必须设为对称形式，否则未知量会增多。

3. 对角化时 $P$ 的列顺序必须与 $\Lambda$ 的顺序一致。  
   这里第一列对应 $1+3t$，第二、三列对应 $1$。$P$ 不唯一，只要列向量是对应特征向量且线性无关即可。

4. 自检方法：  
   因为
   $$
   (A+2E)J=0,
   $$
   所以
   $$
   (A+2E)(I+tJ)=A+2E,
   $$
   即原方程成立。又
   $$
   \det(A+2B)=6t,
   $$
   所以 $t\neq0$ 时秩为 $3$，条件吻合。

---

**命题规律**：

这类题是线性代数解答题常见套路：先给一个矩阵方程，利用“提取公因子”化为齐次方程，求出含参数的矩阵通解；再通过秩条件或可逆性条件确定参数范围。对角化部分往往利用全 $1$ 矩阵 $J$ 的谱：
$$
J \text{ 的特征值为 } 3,0,0.
$$
因此形如 $\alpha I+\beta J$ 的实对称矩阵，特征值为
$$
\alpha+3\beta,\ \alpha,\ \alpha.
$$
变式可能把 $J$ 换成一般秩一矩阵 $uu^T$，此时可利用特征值
$$
\lambda=\alpha,\quad \lambda=\alpha+\beta u^Tu
$$
快速对角化。
