---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - LA
  - 26_张宇八套卷/卷四/FRQ
  - 计算题
  - 非齐次线性方程组
  - 矩阵方程
  - 逆矩阵
  - 增广矩阵行变换
  - 矩阵乘法
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S4-Q21_题目.png|题目]]

设 $\mathbf{A} = \begin{pmatrix} 1 & -2 & 3 \\ 0 & 1 & -1 \\ 1 & 2 & 0 \end{pmatrix}, \boldsymbol{\beta} = \begin{pmatrix} -4 \\ 1 \\ -3 \end{pmatrix}, \mathbf{B} = \begin{pmatrix} -2 & 1 & 3 \\ 1 & 0 & -1 \\ 2 & 1 & 0 \end{pmatrix}, (\mathbf{A}, \boldsymbol{\beta}) = \mathbf{BC}$.

(1) 求 $Ax = \boldsymbol{\beta}$ 的解,并求出 $\mathbf{C}$.
(2) 求满足 $(\mathbf{A}, \boldsymbol{\beta})\mathbf{Y} = \mathbf{E}$ 的所有 $\mathbf{Y}$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S4-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(1) 解 $Ax=\boldsymbol{\beta}$ 的增广矩阵 $ (A|\boldsymbol{\beta})$ 行变换得行最简形 $\begin{pmatrix}1&0&0&1\\0&1&0&-2\\0&0&1&-3\end{pmatrix}$，故唯一解为 $x=(1,-2,-3)^T$。

由 $(A,\boldsymbol{\beta})=BC$ 且 $B$ 可逆（$\det B=-1$），得 $C=B^{-1}(A,\boldsymbol{\beta})$。计算 $B^{-1}=\begin{pmatrix}-1&-3&1\\2&6&-1\\-1&-4&1\end{pmatrix}$，故 $C=\begin{pmatrix}0&1&0&-2\\1&0&0&1\\0&0&1&-3\end{pmatrix}$。

(2) 因 $(A,\boldsymbol{\beta})Y=E$ 即 $BCY=E$，故 $CY=B^{-1}$。设 $Y=(y_1,y_2,y_3)$（列分块），对每个列向量 $y_i$，解 $Cy_i=b_i$（$b_i$ 为 $B^{-1}$ 第 $i$ 列）。对 $C=\begin{pmatrix}0&1&0&-2\\1&0&0&1\\0&0&1&-3\end{pmatrix}$，方程 $Cy=b$ 的通解为 $y=(b_2-t,\ b_1+2t,\ b_3+3t,\ t)^T$，其中 $t$ 任意。代入 $B^{-1}$ 的三列，得所有 $Y$ 为 $\begin{pmatrix}2-t_1&6-t_2&-1-t_3\\ -1+2t_1&-3+2t_2&1+2t_3\\ -1+3t_1&-4+3t_2&1+3t_3\\ t_1&t_2&t_3\end{pmatrix}$，$t_1,t_2,t_3$ 为任意常数。

关键给分点：①求 $x$ 得3分；②求 $B^{-1}$ 得3分；③求 $C$ 得4分；④第二问列方程并解得通解得5分。

**解题切入点**

本题综合线性方程组与矩阵方程。先通过行变换解 $Ax=\beta$，再由 $B$ 可逆将矩阵方程化为 $CY=B^{-1}$，本质是解多个右端项的线性方程组。类似算法竞赛中“高斯消元”处理多右端问题。

**推演**

1. 解 $Ax=\beta$：
   $ (A|\beta)=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix}\xrightarrow{r_3-r_1}\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\0&4&-3&1\end{pmatrix}\xrightarrow{r_3-4r_2}\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\0&0&1&-3\end{pmatrix}$
   继续化行最简：$r_2+r_3,\ r_1-3r_3,\ r_1+2r_2$ 得 $\begin{pmatrix}1&0&0&1\\0&1&0&-2\\0&0&1&-3\end{pmatrix}$，故 $x=(1,-2,-3)^T$。

2. 求 $B^{-1}$：对 $B$ 初等变换（略）得 $B^{-1}=\begin{pmatrix}-1&-3&1\\2&6&-1\\-1&-4&1\end{pmatrix}$，且 $\det B=-1$。

3. 计算 $C=B^{-1}(A,\beta)$：按列乘可得 $C=\begin{pmatrix}0&1&0&-2\\1&0&0&1\\0&0&1&-3\end{pmatrix}$。

4. 求解 $CY=B^{-1}$：由 $C$ 的结构，设 $y=(y_1,y_2,y_3,y_4)^T$，则方程 $Cy=b$ 给出 $y_2-2y_4=b_1,\ y_1+y_4=b_2,\ y_3-3y_4=b_3$，取 $y_4=t$，得 $y=(b_2-t,\ b_1+2t,\ b_3+3t,\ t)^T$。
   分别令 $b=(2,-1,-1)^T,(-3,6,-4)^T,(1,-1,1)^T$（$B^{-1}$ 的三列），得到 $Y$ 的通式。

**易错点**

- 误将 $(A,\beta)$ 当作方阵；注意其维数是 $3\times4$。
- 求 $C$ 时必须先用 $B$ 可逆，否则不能写出 $B^{-1}$。
- 第二问中 $Y$ 是 $4\times3$，自由变量有3个，不能疏忽。
- 矩阵乘法方向易错，注意 $BCY=E$ 得 $CY=B^{-1}$ 而非 $YB^{-1}$。

**命题规律**

常以矩阵方程形式考查线性方程组理论，关键在于将矩阵方程转化为线性方程组。复习时需熟练掌握行最简形、逆矩阵、通解结构，并注意多维矩阵方程的列分块处理。


> 来源：《26_张宇八套卷（数一）》卷四 第 21 题
