---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - LA
  - 26_张宇四套卷/卷三/FRQ
  - 计算题
  - 状态转移矩阵
  - 特征值与特征向量
  - 矩阵幂计算
  - 差分方程
  - 稳态分布
points:
level:
---

# 解答题 第 21 题

![[_Attachments/题目识别/ZY4T/ZY4T-S3-Q21_题目.png|题目]]

设某高校每年有 $\frac{1}{6}$ 的职工由行政岗转为教师岗，有 $\frac{1}{4}$ 的职工由教师岗转为行政岗. 若该高校职工总数不变，记 $n$ 年后行政岗人数与教师岗人数占总职工人数的比例分别为 $x_n$ 与 $y_n$，$x_n + y_n = 1$.

(1) 求关系式 $\begin{pmatrix} x_{n+1} \\ y_{n+1} \end{pmatrix} = A \begin{pmatrix} x_n \\ y_n \end{pmatrix}$ 中的矩阵 $A$;

(2) 设 $\begin{pmatrix} x_0 \\ y_0 \end{pmatrix} = \begin{pmatrix} \frac{1}{2} \\ \frac{1}{2} \end{pmatrix}$，求 $\begin{pmatrix} x_n \\ y_n \end{pmatrix}$.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S3-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
(1) 由题意，行政岗下一年由“留任行政岗的 $\frac{5}{6}$”和“教师岗转入行政岗的 $\frac{1}{4}$”组成，教师岗下一年由“行政岗转入教师岗的 $\frac{1}{6}$”和“留任教师岗的 $\frac{3}{4}$”组成，故
$$A=\begin{pmatrix}\frac{5}{6}&\frac{1}{4}\\\frac{1}{6}&\frac{3}{4}\end{pmatrix}.$$
(2) $A$ 的特征值为 $\lambda_1=1,\lambda_2=\frac{7}{12}$，对应特征向量可取 $\boldsymbol{v}_1=(3,2)^T,\boldsymbol{v}_2=(1,-1)^T$。将初值分解为
$$\begin{pmatrix}1/2\\1/2\end{pmatrix}=\frac15\begin{pmatrix}3\\2\end{pmatrix}-\frac{1}{10}\begin{pmatrix}1\\-1\end{pmatrix},$$
所以
$$\begin{pmatrix}x_n\\y_n\end{pmatrix}=A^n\begin{pmatrix}1/2\\1/2\end{pmatrix}=\frac15\begin{pmatrix}3\\2\end{pmatrix}-\frac{1}{10}\left(\frac{7}{12}\right)^n\begin{pmatrix}1\\-1\end{pmatrix}=\begin{pmatrix}\frac35-\frac{1}{10}(\frac{7}{12})^n\\\frac25+\frac{1}{10}(\frac{7}{12})^n\end{pmatrix}.$$
关键给分点：正确写出 $A$（2分）；求出特征值与特征向量（3分）；正确分解初值（2分）；写出最终表达式（3分）。

**解题切入点**
这是线性状态转移问题，类似算法竞赛中的矩阵快速幂；只需求二阶矩阵的特征分解，把初值表示为特征向量的线性组合，即可得到 $A^n$ 作用后的闭式解。

**推演**
设 $n$ 年后行政岗、教师岗比例分别为 $x_n,y_n$。每年有 $\frac16$ 的行政岗转为教师岗，所以行政岗留下 $\frac56 x_n$；同时有 $\frac14$ 的教师岗转为行政岗，因此新增 $\frac14 y_n$。故
$$x_{n+1}=\frac56 x_n+\frac14 y_n.$$
同理，教师岗留下 $\frac34 y_n$，加上行政岗转入 $\frac16 x_n$，得
$$y_{n+1}=\frac16 x_n+\frac34 y_n.$$
写成矩阵形式即得到 $A$。
计算特征多项式：
$$|\lambda I-A|=\left(\lambda-\frac56\right)\left(\lambda-\frac34\right)-\frac{1}{24}=\lambda^2-\frac{19}{12}\lambda+\frac{7}{12}=(\lambda-1)\left(\lambda-\frac{7}{12}\right),$$
故 $\lambda_1=1,\lambda_2=\frac{7}{12}$。
对 $\lambda=1$，解 $(A-I)\boldsymbol{v}=0$，取 $\boldsymbol{v}_1=(3,2)^T$；对 $\lambda=\frac{7}{12}$，解 $(A-\frac{7}{12}I)\boldsymbol{v}=0$，取 $\boldsymbol{v}_2=(1,-1)^T$。
将初值 $\boldsymbol{x}_0=(1/2,1/2)^T$ 分解：设 $\boldsymbol{x}_0=c_1\boldsymbol{v}_1+c_2\boldsymbol{v}_2$，解得 $c_1=\frac15,c_2=-\frac{1}{10}$。于是
$$\boldsymbol{x}_n=A^n\boldsymbol{x}_0=c_1\lambda_1^n\boldsymbol{v}_1+c_2\lambda_2^n\boldsymbol{v}_2=\frac15\begin{pmatrix}3\\2\end{pmatrix}-\frac{1}{10}\left(\frac{7}{12}\right)^n\begin{pmatrix}1\\-1\end{pmatrix}.$$
因此
$$x_n=\frac35-\frac{1}{10}\left(\frac{7}{12}\right)^n,\qquad y_n=\frac25+\frac{1}{10}\left(\frac{7}{12}\right)^n.$$
检验：$n=0$ 时 $x_0=y_0=\frac12$；$n\to\infty$ 时 $(x_n,y_n)\to(\frac35,\frac25)$，且 $x_n+y_n=1$，符合题意。

**易错点**
1. 转移方向写反：矩阵 $A$ 的每一列和为 $1$（列随机矩阵），不是行和为 $1$，应严格按 $x_{n+1}=Ax_n$ 构造。
2. 特征向量分解系数算错：可用 $n=0$ 代入最终表达式回代检验。
3. $A$ 不是对称矩阵，不要误以为特征向量正交；本题中 $\boldsymbol{v}_1=(3,2)^T$ 与 $\boldsymbol{v}_2=(1,-1)^T$ 并不正交。

**命题规律**
考研线性代数常将矩阵运算与递推数列结合，考查矩阵幂、特征值特征向量、相似对角化。复习时要熟练掌握二阶矩阵特征分解和 Markov 转移矩阵的极限，并能快速写出闭式解。


> 来源：《26_张宇四套卷（数一）》卷三 第 21 题
