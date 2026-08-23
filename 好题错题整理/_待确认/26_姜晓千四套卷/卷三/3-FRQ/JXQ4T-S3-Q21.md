---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - LA
  - 26_姜晓千四套卷/卷三/FRQ
  - 计算题
  - 二次型配方法
  - 合同变换
  - 正定矩阵
  - 正交对角化
  - 惯性定理
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S3-Q21_题目.png|题目]]

$$f(x_1,x_2,x_3)=x^T Ax=x_1^2+2x_2^2+4x_3^2+2x_1x_2,$$
$$g(x_1,x_2,x_3)=x^T Bx=2x_1^2+2x_2^2+2x_1x_2.$$

(I) 求可逆线性变换 $x=Cy$ ,将 $f$ 化为规范形;

(II) 求可逆矩阵 $P$ ,使得 $P^T AP=E$ , $P^T BP=\Lambda$ .

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S3-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
(I) 令
$$C=\begin{pmatrix}1&-1&0\\0&1&0\\0&0&\frac12\end{pmatrix},$$
则 $x=Cy$ 可逆，且
$$C^TAC=E,\quad f=y_1^2+y_2^2+y_3^2.$$
故 $f$ 的规范形为 $y_1^2+y_2^2+y_3^2$。

(II) 取
$$P=\begin{pmatrix}\sqrt2&0&0\\-\frac1{\sqrt2}&\frac1{\sqrt2}&0\\0&0&\frac12\end{pmatrix},\qquad
\Lambda=\begin{pmatrix}3&0&0\\0&1&0\\0&0&0\end{pmatrix},$$
则
$$P^TAP=E,\qquad P^TBP=\Lambda.$$

关键给分点：配方法正确得 $C$；算出 $C^TBC=D$；对 $D$ 正交对角化得 $Q$；由 $P=CQ$ 合成并验证。

**解题切入点**
这是两个二次型的同时合同对角化。因 $A$ 正定，先用配方法把 $A$ 变为单位阵，再在变形后的坐标下对 $B$ 做通常的正交对角化；等价于在 $A$ 内积下求 $B$ 的广义特征向量。

**推演**
(1) 配方：
$$f=x_1^2+2x_1x_2+2x_2^2+4x_3^2=(x_1+x_2)^2+x_2^2+(2x_3)^2.$$
令 $y_1=x_1+x_2,\ y_2=x_2,\ y_3=2x_3$，反解
$$x_1=y_1-y_2,\quad x_2=y_2,\quad x_3=\frac12y_3,$$
故
$$C=\begin{pmatrix}1&-1&0\\0&1&0\\0&0&\frac12\end{pmatrix}.$$
直接计算得 $C^TAC=E$，所以 $f=y_1^2+y_2^2+y_3^2$。

(2) 在 $y$ 坐标下，
$$D=C^TBC=\begin{pmatrix}2&-1&0\\-1&2&0\\0&0&0\end{pmatrix}.$$
$D$ 的特征值为 $3,1,0$。

对应特征向量可取
$$\lambda=3:\ (1,-1,0)^T,\qquad
\lambda=1:\ (1,1,0)^T,\qquad
\lambda=0:\ (0,0,1)^T.$$
单位化后令
$$Q=\begin{pmatrix}1/\sqrt2&1/\sqrt2&0\\-1/\sqrt2&1/\sqrt2&0\\0&0&1\end{pmatrix},$$
则 $Q^TQ=E$，且
$$Q^TDQ=\begin{pmatrix}3&0&0\\0&1&0\\0&0&0\end{pmatrix}=\Lambda.$$

(3) 令 $P=CQ$，计算得
$$P=\begin{pmatrix}\sqrt2&0&0\\-1/\sqrt2&1/\sqrt2&0\\0&0&1/2\end{pmatrix}.$$
于是
$$P^TAP=Q^TC^TACQ=Q^TEQ=E,$$
$$P^TBP=Q^TC^TBCQ=Q^TDQ=\Lambda.$$
自检：分别验证 $p_i^TAp_j=\delta_{ij}$、$p_i^TBp_j=\Lambda_{ij}$，结果吻合。

**易错点**
不要把 $A,B$ 分别单独合同对角化；两个二次型必须用同一个可逆矩阵 $P$。配方时 $4x_3^2$ 对应 $y_3=2x_3$，不要丢掉系数。$2x_1x_2$ 在矩阵中应写成 $a_{12}=a_{21}=1$，不是 2。求 $P$ 时不能直接用 $Q$ 代替 $P$，要先在 $y$ 坐标下算 $D=C^TBC$，最后合成 $P=CQ$；若交换 $Q$ 的列，$\Lambda$ 中特征值也要相应交换。

**命题规律**
本题是二次型合同变换与“同时对角化”的综合题，核心是 $A$ 正定时先用 $C$ 化为单位阵，再正交对角化 $C^TBC$。复习时应熟练掌握配方法、惯性定理、实对称矩阵正交对角化，并会计算 $P^TAP$ 型合同变换；考试时按“配方→算 D→对角化→合成 P”的流程不易出错。


> 来源：《26_姜晓千四套卷（数一）》卷三 第 21 题
