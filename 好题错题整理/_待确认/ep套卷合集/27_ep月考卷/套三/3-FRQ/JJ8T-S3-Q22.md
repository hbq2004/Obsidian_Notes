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

## 解析（AI 生成，仅供参考）

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

> AI 生成，仅供参考。

