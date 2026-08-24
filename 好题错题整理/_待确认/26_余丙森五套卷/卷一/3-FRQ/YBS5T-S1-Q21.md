---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - LA
  - 26_余丙森五套卷/卷一/FRQ
  - 综合题
  - 向量组等价
  - 矩阵方程
  - 特征值与特征向量
  - 相似对角化
  - 秩的计算
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/YBS5T/YBS5T-S1-Q21_题目.png|题目]]

21. (本题满分 12 分)

已知向量

$$
\boldsymbol{\alpha}_1=\begin{pmatrix}1\\2\\1\end{pmatrix},\boldsymbol{\alpha}_2=\begin{pmatrix}-1\\1\\2\end{pmatrix},\boldsymbol{\alpha}_3=\begin{pmatrix}1\\1\\a\end{pmatrix},\boldsymbol{\beta}_1=\begin{pmatrix}1\\0\\b\end{pmatrix},\boldsymbol{\beta}_2=\begin{pmatrix}0\\1\\c\end{pmatrix},
$$

若向量组 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 与 $\boldsymbol{\beta}_1,\boldsymbol{\beta}_2$ 等价.

(1) 求参数 $a,b,c$ 的值；

(2) 令矩阵 $A=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3),B=(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2)$,求满足 $BX=A$ 的矩阵 $X$.

(3) 判断矩阵 $A$ 能否相似对角化,若能相似对角化,求一个可逆矩阵 $P$,使得 $P^{-1}AP$ 为对角矩阵.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S1-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(1) $a=0$, $b=-1$, $c=1$.

(2) $X=\begin{pmatrix}1 & -1 & 1\\ 2 & 1 & 1\end{pmatrix}$.

(3) 矩阵$A$不能相似对角化，因为特征值$0$的几何重数为$1$，小于代数重数$2$.

【关键给分点】
- 利用向量组等价得$\alpha_1,\alpha_2,\alpha_3$秩为$2$，行列式为零得$a=0$（2分）
- 利用$\beta_1,\beta_2$张成空间得$b,c$的方程组并求解（3分）
- 由$BX=A$得$X$为系数矩阵（2分）
- 计算特征多项式得特征值$0$（二重）和$2$（2分）
- 判断$0$的几何重数为$1$，不能对角化（3分）

**解题切入点**

本题综合考查向量组等价、矩阵方程与相似对角化。
- 向量组等价类比算法竞赛中的“集合生成相同子空间”，可通过秩相等和线性表示求解参数。
- 矩阵方程$BX=A$即解线性方程组，系数即为$B$表示$A$的组合系数。
- 相似对角化判断需计算特征值，并检查特征值的几何重数是否等于代数重数，类似判断图是否可对角化（如对称矩阵必可对角化，但此处非对称）。

**推演**

(1) 由向量组等价得$\alpha_1,\alpha_2,\alpha_3$的秩为$2$（因为$\beta_1,\beta_2$线性无关，秩为$2$），故$\det(\alpha_1,\alpha_2,\alpha_3)=0$.
计算行列式：
$$
\begin{vmatrix}
1 & -1 & 1\\
2 & 1 & 1\\
1 & 2 & a
\end{vmatrix}=3a=0\Rightarrow a=0.
$$
（关键步骤：行列式展开得$3a$；若直接看出线性相关也可）

又$\beta_1,\beta_2$张成空间为$\{(x,y,bx+cy)^T\}$，$\alpha_1,\alpha_2,\alpha_3$应属于此空间，故存在系数使得：
$$
\alpha_1=\begin{pmatrix}1\\2\\1\end{pmatrix}=1\beta_1+2\beta_2\Rightarrow b+2c=1,\\
\alpha_2=\begin{pmatrix}-1\\1\\2\end{pmatrix}=-1\beta_1+1\beta_2\Rightarrow -b+c=2,\\
\alpha_3=\begin{pmatrix}1\\1\\0\end{pmatrix}=1\beta_1+1\beta_2\Rightarrow b+c=0.
$$
联立解得$b=-1,c=1$.

(2) 由(1)知$\alpha_1,\alpha_2,\alpha_3$可由$\beta_1,\beta_2$线性表示，且系数已求出，故$BX=A$中$X$为$2\times3$矩阵，其列向量即为组合系数：
$$
X=\begin{pmatrix}
1 & -1 & 1\\
2 & 1 & 1
\end{pmatrix}.
$$
（验证：$BX= (\beta_1,\beta_2)X=(\alpha_1,\alpha_2,\alpha_3)=A$）

(3) 矩阵$A=\begin{pmatrix}1&-1&1\\2&1&1\\1&2&0\end{pmatrix}$，求特征多项式：
$$
\det(A-\lambda I)=\begin{vmatrix}
1-\lambda & -1 & 1\\
2 & 1-\lambda & 1\\
1 & 2 & -\lambda
\end{vmatrix}= (\lambda-2)(-\lambda^2)=\lambda^2(2-\lambda).
$$
特征值为$\lambda_1=0$（二重），$\lambda_2=2$（单重）。

对于$\lambda=0$，解$(A-0I)x=0$，即$Ax=0$。由于$\mathrm{rank}(A)=2$（因为$\alpha_1,\alpha_2$线性无关，$\alpha_3$可由它们线性表示），故零空间维数$=3-2=1$，即几何重数为$1$，小于代数重数$2$，所以$A$不能相似对角化。

（若$\lambda=0$的几何重数为$2$，则需验证$A$的秩为$1$，但实际秩为$2$，故不可对角化）

因此$A$不能相似对角化。

**易错点**

- 向量组等价要求互相线性表示，容易只考虑单向表示而忽略另一方向；但本题中利用秩相等和$B$的列空间直接得到$A$的列空间是$B$的列空间的子空间，由维数相等即得等价，不需再验证反向。
- 求$b,c$时，需确保每个$\alpha_i$都满足$\beta_1,\beta_2$的表示形式，漏掉$\alpha_3$将导致错误。
- 计算特征多项式易出错，注意行列式展开的符号；可先化简矩阵再计算。
- 判断相似对角化时，不能仅凭特征值不同就认为可对角化，必须检查重根特征值的几何重数。
- 注意矩阵$A$是$3\times3$，但秩为$2$，故$0$是特征值，且几何重数为$1$，不可对角化。

**命题规律**

本题综合了线性代数三大核心板块：向量组理论、矩阵方程、特征值与对角化。命题人常将等价条件与参数求值结合，再引出矩阵方程，最后考查对角化判断。此类题型在考研数学一中高频出现，通常难度中等偏上。复习时需熟练掌握：
- 向量组等价与秩的关系；
- 线性表示与方程组的求解；
- 特征多项式的计算（尤其是三阶行列式）；
- 相似对角化的充要条件（几何重数=代数重数）。
建议多练习综合题，注意各知识点之间的联系。


> 来源：《26_余丙森五套卷（数一）》卷一 第 21 题
