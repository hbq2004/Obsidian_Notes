---
ctime: 2026-08-23 21:36:40
mtime: 2026-08-23 21:36:40
tags:
  - LA
  - 26_姜晓千四套卷/卷一/FRQ
  - 计算题
  - 特征向量与特征值
  - 相似对角化
  - 线性方程组通解
  - 矩阵幂计算
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S1-Q21_题目.png|题目]]

设 $\alpha_1=(1,0,-3)^T, \alpha_2=(-2,1,0)^T, \alpha_3=(-1,0,1)^T$ 为 $A = \begin{pmatrix} 1 & 2 & 1 \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}$ 的特征向量.
$(I)$ 求线性方程组 $Ax = \alpha_1$ 的通解;
$(II)$ 求 $(A+E)^{99}.$

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S1-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由题设，$\alpha_1,\alpha_2,\alpha_3$ 均为 $A$ 的特征向量。先由第一行定特征值：
- $A\alpha_1$ 的首分量为 $-2$，故 $\lambda_1=-2$；
- $A\alpha_2,A\alpha_3$ 的首分量均为 $0$，故 $\lambda_2=\lambda_3=0$。

由于 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，取 $P=(\alpha_1,\alpha_2,\alpha_3)$，则 $P^{-1}AP=\Lambda=\operatorname{diag}(-2,0,0)$。

(I) $Ax=\alpha_1$ 的通解：
$$x=-\frac12\alpha_1+c_2\alpha_2+c_3\alpha_3=\begin{pmatrix}-\frac12-2c_2-c_3\\c_2\\\frac32+c_3\end{pmatrix},\quad c_2,c_3\in\mathbb R.$$

(II) 因为 $\Lambda+E=\operatorname{diag}(-1,1,1)$，且 99 为奇数，所以 $(\Lambda+E)^{99}=\operatorname{diag}(-1,1,1)$。故 $(A+E)^{99}=P\operatorname{diag}(-1,1,1)P^{-1}$。算得
$$(A+E)^{99}=\begin{pmatrix}2&2&1\\0&1&0\\-3&-6&-2\end{pmatrix}.$$

关键给分点：①由第一行正确求出 $\lambda_1=-2,\lambda_2=\lambda_3=0$；②说明 $A$ 可对角化；③非齐次方程特解与齐次通解；④对 $(A+E)$ 相似对角化并求幂。

**解题切入点**

题中给的是特征向量而非特征值，先由矩阵第一行“读出”特征值，再把 $\alpha_i$ 看作新坐标系的基。算法竞赛类比：一个线性变换若给定了主轴方向，就直接换到主轴坐标系下做标量运算，矩阵幂和线性方程都会变成对角坐标上的简单除法/幂次。

**推演**

1. 求特征值。
$$A\alpha_1=\begin{pmatrix}1&2&1\\*&*&*\\*&*&*\end{pmatrix}\begin{pmatrix}1\\0\\-3\end{pmatrix}=\begin{pmatrix}-2\\*\\*\end{pmatrix},$$
所以 $\lambda_1=-2$。同理
$$A\alpha_2=\begin{pmatrix}0\\*\\*\end{pmatrix},\quad A\alpha_3=\begin{pmatrix}0\\*\\*\end{pmatrix}.$$
由于 $\lambda_2\alpha_2$ 和 $\lambda_3\alpha_3$ 的首分量分别为 $-2\lambda_2,-\lambda_3$，得 $\lambda_2=\lambda_3=0$。

2. 可对角化。
$\alpha_2,\alpha_3$ 不成比例，故属于 0 的线性无关特征向量有两个；且 $\alpha_1$ 与它们线性无关，所以 $A$ 可对角化。令
$$P=\begin{pmatrix}1&-2&-1\\0&1&0\\-3&0&1\end{pmatrix},$$
则 $P^{-1}AP=\Lambda=\operatorname{diag}(-2,0,0)$。实际求逆可得
$$P^{-1}=\begin{pmatrix}-1/2&-1&-1/2\\0&1&0\\-3/2&-3&-1/2\end{pmatrix}.$$

3. 解 (I)。
因为 $A\alpha_1=-2\alpha_1$，所以 $A(-\frac12\alpha_1)=\alpha_1$，即 $x_p=-\frac12\alpha_1$ 是一个特解。
齐次方程 $Ax=0$ 中，$A\alpha_2=A\alpha_3=0$，且 $\alpha_2,\alpha_3$ 线性无关，因此齐次通解为 $c_2\alpha_2+c_3\alpha_3$。故
$$x=x_p+c_2\alpha_2+c_3\alpha_3 = \begin{pmatrix}-\frac12-2c_2-c_3\\c_2\\\frac32+c_3\end{pmatrix}.$$

4. 解 (II)。
$$A+E=P(\Lambda+E)P^{-1}=P\operatorname{diag}(-1,1,1)P^{-1}.$$
由于 99 为奇数，$(-1)^{99}=-1$，所以
$$(\Lambda+E)^{99}=\operatorname{diag}(-1,1,1).$$
因此
$$(A+E)^{99}=P\operatorname{diag}(-1,1,1)P^{-1}.$$
代入 $P,P^{-1}$ 得
$$(A+E)^{99}=\begin{pmatrix}2&2&1\\0&1&0\\-3&-6&-2\end{pmatrix}.$$
可用验证：该矩阵作用于 $\alpha_1,\alpha_2,\alpha_3$ 分别得 $-\alpha_1,\alpha_2,\alpha_3$，与 $A+E$ 相同，且 99 次幂等于一次幂。

**易错点**

- 不要把 $A\alpha_i$ 的第一分量直接当作 $\lambda_i$，应比较 $\lambda_i\alpha_i$ 的第一分量。
- 忘记说明 $P$ 可逆/ $A$ 可对角化，就写 $P^{-1}$ 会失分。
- 非齐次方程的通解必须是“特解 + 齐次通解”，齐次通解不能混入对应非零特征值的 $\alpha_1$。
- 求 $P^{-1}$ 时符号极易出错，最后可用 $P^{-1}\alpha_i=e_i$ 或直接对结果矩阵验证特征向量作用来检查。
- $(A+E)^{99}$ 不要硬乘矩阵；应先把 $A$ 对角化，再对特征值做幂运算。

**命题规律**

本题是“给特征向量、反求特征值，再综合对角化与方程组通解”的典型线代大题。命题人用第一行作为信息入口，特征向量同时充当零空间基、非齐次方程特解方向和对角化基，一题多考点。复习时应重点把握：$AP=P\Lambda$ 的列向量观点、矩阵多项式与相似对角化、$Ax=b$ 换基求解；做题时先找特征向量基，不要盲目代入未知元素硬解。


> 来源：《26_姜晓千四套卷（数一）》卷一 第 21 题
