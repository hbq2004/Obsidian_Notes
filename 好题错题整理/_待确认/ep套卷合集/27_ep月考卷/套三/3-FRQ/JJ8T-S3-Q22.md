---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - LA
  - 27_ep月考卷/套三/FRQ
  - 计算题
  - 矩阵方程求解
  - 特征值特征向量
  - 实对称矩阵
  - 矩阵的秩
points:
level:
---

# FRQ 第 22 题

![[_Attachments/题目识别/JJ8T/JJ8T-S3-Q22_题目.png|题目]]

22. （本题满分 12 分）已知矩阵 $A = \begin{pmatrix} -1 & -1 & 0 \\ 0 & -1 & -1 \\ 0 & 0 & -2 \end{pmatrix}$，$B$ 为 3 阶实对称矩阵，$AB - A + 2B = 2E$，$B \neq E$，$r(A + 2B) = 3$。

(1) 求所有满足条件的 $B$；

(2) 求可逆矩阵 $P$ 及对角阵 $\Lambda$，使 $P^{-1}BP = \Lambda$.


---

## DeepSeek V4 Flash Max

【考点】本题考查矩阵方程的求解与实对称矩阵的对角化。类比算法竞赛中解线性方程组：先化简方程，利用零空间得到通解，再通过对称性和秩条件收紧参数；最后用特征值分解完成对角化。

【解】

**第一步：化简矩阵方程**

原方程：$AB - A + 2B = 2E$，移项得
$$
AB + 2B = A + 2E \Longleftrightarrow (A+2E)B = A+2E.
$$
令 $C = A+2E$，则
$$
C = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{pmatrix},\quad CB = C.
$$
即 $C(B-E)=0$。

**第二步：求 $C$ 的零空间**

解 $Cx=0$：
$$
\begin{cases} x_1 - x_2 = 0 \\ x_2 - x_3 = 0 \end{cases} \Rightarrow x_1=x_2=x_3.
$$
故取基础解系 $u=(1,1,1)^T$。因此 $B-E$ 的每一列都是 $u$ 的倍数，即存在列向量 $\alpha=(a,b,c)^T$ 使
$$
B-E = u\alpha^T = \begin{pmatrix} a & b & c \\ a & b & c \\ a & b & c \end{pmatrix}.
$$

**第三步：利用对称性确定参数**

因为 $B$ 实对称，所以 $B-E$ 也实对称，故 $u\alpha^T = \alpha u^T$。比较元素得 $a=b=c$，令 $a=b=c=t$，则
$$
B-E = t u u^T = t \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix} = tJ,
$$
其中 $J$ 为全 $1$ 矩阵。所以
$$
B = E + tJ = \begin{pmatrix} 1+t & t & t \\ t & 1+t & t \\ t & t & 1+t \end{pmatrix}.
$$
由 $B \neq E$ 得 $t \neq 0$。

**第四步：由秩条件确定取值范围**

计算 $A+2B$：
$$
A+2B = A+2(E+tJ) = (A+2E) + 2tJ = C + 2tJ.
$$
具体写为
$$
A+2B = \begin{pmatrix} 1+2t & -1+2t & 2t \\ 2t & 1+2t & -1+2t \\ 2t & 2t & 2t \end{pmatrix}.
$$
行列式计算：提出第三行公因子 $2t$，再化简得
$$
\det(A+2B) = 6t.
$$
要求 $r(A+2B)=3$，即行列式非零，故 $t \neq 0$，与 $B \neq E$ 一致。因此所有满足条件的 $B$ 为
$$
B = E + tJ,\quad t \in \mathbb{R}\setminus\{0\}.
$$

**第五步：对角化（第二问）**

对给定的 $t \neq 0$，$B = E + tJ$。$J$ 的特征值为 $3$（对应 $u=(1,1,1)^T$）和 $0$（二重，对应与 $u$ 正交的子空间）。因此 $B$ 的特征值为 $1+3t$（一重）和 $1$（二重）。取标准正交特征向量：
$$
q_1 = \frac{1}{\sqrt{3}}(1,1,1)^T,\quad q_2 = \frac{1}{\sqrt{2}}(1,-1,0)^T,\quad q_3 = \frac{1}{\sqrt{6}}(1,1,-2)^T.
$$
令 $P = [q_1\,q_2\,q_3]$，则 $P$ 为正交矩阵，$P^{-1}=P^T$，且
$$
P^{-1}BP = \Lambda = \operatorname{diag}(1+3t,\,1,\,1).
$$

【答案】

(1) 所有满足条件的 $B$ 为
$$
B = \begin{pmatrix} 1+t & t & t \\ t & 1+t & t \\ t & t & 1+t \end{pmatrix},\quad t \neq 0.
$$

(2) 可取
$$
P = \begin{pmatrix} \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} \\ \frac{1}{\sqrt{3}} & -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} \\ \frac{1}{\sqrt{3}} & 0 & -\frac{2}{\sqrt{6}} \end{pmatrix},\quad
\Lambda = \begin{pmatrix} 1+3t & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}.
$$
关键给分点：①化简方程得 $CB=C$；②求出 $C$ 的零空间并写出 $B-E$ 的一般形式；③由对称性定出 $B=E+tJ$；④由秩条件得 $t\neq 0$；⑤正确求出 $B$ 的特征值和正交特征向量。

【易错点】

- 容易忘记验证 $B \neq E$ 和秩条件，但本题两者均归结为 $t \neq 0$。
- 求 $C$ 的零空间时，注意 $C$ 不可逆，必须用零向量条件确定参数。
- 对称性条件 $u\alpha^T = \alpha u^T$ 推导时，易误认为 $\alpha$ 与 $u$ 任意，实际必须成比例。
- 对角化时特征向量必须单位化，且 $P$ 取正交矩阵，否则 $P^{-1}$ 计算复杂。
- 注意 $t$ 是任意非零实数，答案不要漏掉参数表示。

【命题规律】

此类题通常给出矩阵方程和秩条件，先化简为形如 $CB=C$ 的方程，再利用零空间参数化，最后结合对称性、可逆性等约束确定参数。复习时应重点训练矩阵方程的化简技巧、实对称矩阵的对角化，以及特征值与秩的关联。

---

## V4 Flash Max 解析

**答案**:

设 $\mathbf1=(1,1,1)^T$，$J=\mathbf1\mathbf1^T$ 为全 1 矩阵。

(1) 满足条件的  
$$
B=E+tJ=
\begin{pmatrix}
1+t&t&t\\
t&1+t&t\\
t&t&1+t
\end{pmatrix},
\quad t\in\mathbb R\setminus\{0\}.
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

其中 $P$ 的三列依次为  
$$
v_1=(1,1,1)^T,\quad v_2=(1,-1,0)^T,\quad v_3=(1,1,-2)^T.
$$

---

**解题切入点**:

先不要直接展开矩阵求 $B$。原方程中所有含 $B$ 的项可以提出公因子：

$$
AB-A+2B=2E
\iff (A+2E)B=A+2E
\iff (A+2E)(B-E)=0.
$$

所以核心是看 $A+2E$ 的零空间。这相当于算法题里先“提取公因式、消去公共结构”，剩下就是解一个齐次方程；再利用 $B$ 的对称性把自由参数压缩。最后秩条件用“矩阵满秩 $\iff$ 行列式非零”判断。

---

**推演**:

由

$$
AB-A+2B=2E
$$

得

$$
AB+2B=A+2E
$$

即

$$
(A+2E)B=A+2E,
$$

所以

$$
(A+2E)(B-E)=0.
$$

令

$$
C=A+2E=
\begin{pmatrix}
1&-1&0\\
0&1&-1\\
0&0&0
\end{pmatrix}.
$$

解 $Cx=0$：

$$
\begin{cases}
x_1-x_2=0,\\
x_2-x_3=0,
\end{cases}
$$

因此

$$
x_1=x_2=x_3,
$$

即

$$
\ker C=\operatorname{span}\left\{(1,1,1)^T\right\}.
$$

于是 $B-E$ 的三列都应属于这个一维零空间，所以存在 $c_1,c_2,c_3$，使

$$
B-E=
\begin{pmatrix}
c_1&c_2&c_3\\
c_1&c_2&c_3\\
c_1&c_2&c_3
\end{pmatrix}.
$$

又因为 $B,E$ 都是实对称矩阵，所以 $B-E$ 也对称，比较对称位置得

$$
c_1=c_2=c_3=t.
$$

故

$$
B=E+tJ=
\begin{pmatrix}
1+t&t&t\\
t&1+t&t\\
t&t&1+t
\end{pmatrix}.
$$

条件 $B\ne E$ 给出 $t\ne0$。

再检查秩条件：

$$
A+2B=A+2(E+tJ)=A+2E+2tJ=C+2tJ.
$$

令 $a=2t$，则

$$
A+2B=
\begin{pmatrix}
1+a&a-1&a\\
a&1+a&a-1\\
a&a&a
\end{pmatrix}.
$$

对行列式作行变换 $R_1\leftarrow R_1-R_3$，$R_2\leftarrow R_2-R_3$，得

$$
\det(A+2B)
=
\det\begin{pmatrix}
1&-1&0\\
0&1&-1\\
a&a&a
\end{pmatrix}
=3a=6t.
$$

因此

$$
r(A+2B)=3\iff t\ne0.
$$

所以最终

$$
B=E+tJ,\quad t\ne0.
$$

下面求对角化。

由于

$$
B=E+tJ,
$$

而全 1 矩阵 $J$ 满足：

$$
J\mathbf1=3\mathbf1,
$$

并且对任意分量和为 $0$ 的向量 $v$，有

$$
Jv=0.
$$

所以 $B$ 的特征值为：

$$
1+3t,\quad 1,\quad 1.
$$

取

$$
v_1=(1,1,1)^T,\quad
v_2=(1,-1,0)^T,\quad
v_3=(1,1,-2)^T.
$$

则

$$
Bv_1=(1+3t)v_1,\quad
Bv_2=v_2,\quad
Bv_3=v_3.
$$

令

$$
P=\begin{pmatrix}
1&1&1\\
1&-1&1\\
1&0&-2
\end{pmatrix},
$$

则 $P$ 可逆，且

$$
BP=P\begin{pmatrix}
1+3t&0&0\\
0&1&0\\
0&0&1
\end{pmatrix},
$$

所以

$$
P^{-1}BP=\Lambda.
$$

---

**易错点**:

1. 不能由 $(A+2E)(B-E)=0$ 直接推出 $B=E$。因为 $A+2E$ 不可逆，矩阵乘法与实数乘法不同。  
2. 容易忘记使用 $B$ 的对称性。如果只用 $(A+2E)(B-E)=0$，会得到三个自由参数；对称性把它们压缩成一个 $t$。  
3. 判断 $r(A+2B)=3$ 要看 $\det(A+2B)\ne0$，不是看 $B$ 是否可逆。例如 $t=-\frac13$ 时 $B$ 奇异，但仍满足原方程和秩条件。  
4. 自检：把 $B=E+tJ$ 代回原方程，利用 $(A+2E)J=0$ 可知等式成立；对角化可由三个特征向量关系直接验证。  
5. 本题结果是单参数族，不要试图再列方程求唯一 $t$。

---

**命题规律**:

这类题常见的命题思路是：先给一个矩阵方程，要求通过因式分解转化为零空间问题；再结合对称性、秩条件缩小参数范围；最后考查对称矩阵的对角化。

常见变式包括：

- 把方程改为 $AB=BA$、$AX+XB=C$ 等，需要会用特征向量或拉直方法；
- 把秩条件换成“正定”“特征值范围”等条件；
- 出现 $B=E+tJ$ 这类“单位阵 + 秩一矩阵”时，记住：全 1 矩阵 $J$ 的特征值是 $3,0,0$，所以 $E+tJ$ 的特征值是 $1+3t,1,1$。  
  这个“秩一更新只改变一个方向特征值”的结论很常用。
