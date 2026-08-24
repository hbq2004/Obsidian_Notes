---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - LA
  - 26_李林六套卷/卷三/FRQ
  - 计算题
  - 矩阵相似
  - 特征值与特征向量
  - 正交矩阵
  - 矩阵平方根
  - 坐标变换
points:
level:
---

# 解答题 第 21 题

![[_Attachments/题目识别/LL6T/LL6T-S3-Q21_题目.png|题目]]

(21)（本题满分 12 分）设 $A=\begin{pmatrix} a & 0 & 1 \\ 0 & -a & 0 \\ 1 & 0 & a \end{pmatrix}$ 与 $B=\begin{pmatrix} -1 & 1 & 0 \\ 1 & -1 & 0 \\ 0 & 0 & a^2 \end{pmatrix}$ $(a\neq 0)$ 相似.
$(I)$ 求 $a$ 的值；
$(II)$ 求正交矩阵 $Q$, 使得 $Q^{-1}AQ=B$;
$(III)$ 求一个 3 阶矩阵 $P$, 使得 $AB=P^2$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S3-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(I) $a=-1$。

(II) 可取正交矩阵
$$
Q=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix},
$$
此时 $Q^{-1}=Q$，且 $Q^{-1}AQ=B$。

(III) 取
$$
P=AQ=\begin{pmatrix}-1&1&0\\0&0&1\\1&-1&0\end{pmatrix},
$$
则 $P^2=AB$。

关键给分点：
- 用相似不变量（特征值/迹与行列式）求出 $a=-1$；
- 正确写出/验证正交矩阵 $Q$ 满足 $Q^{-1}AQ=B$；
- 构造 $P=AQ$ 并验证 $P^2=AB$。

**解题切入点**

线代中“相似”类比算法里的“等价类”：先找不变量（特征值、迹、行列式）确定参数，再做坐标变换。第三问不是硬解矩阵平方根，而是利用已有的相似关系 $B=Q^{-1}AQ$ 把 $AB$ 凑成 $(AQ)^2$，属于构造型证明。

**推演**

(1) 求 $a$。

$A$ 的 $2\times2$ 子块 $\begin{pmatrix}a&1\\1&a\end{pmatrix}$ 的特征值为 $a+1,a-1$，另一个特征值为 $-a$，所以 $\sigma(A)=\{a+1,a-1,-a\}$。

$B$ 中 $\begin{pmatrix}-1&1\\1&-1\end{pmatrix}$ 的特征值为 $0,-2$，另一个特征值为 $a^2$，所以 $\sigma(B)=\{0,-2,a^2\}$。

由相似矩阵特征值相同可知 $\sigma(A)=\sigma(B)$。用迹、行列式快速筛选：
$$
\operatorname{tr}A=a,\quad \operatorname{tr}B=a^2-2,
$$
故 $a=a^2-2$，即 $a=2$ 或 $a=-1$；又
$$
\det A=-a(a^2-1),\quad \det B=0,
$$
故 $a=\pm1$。公共解为 $a=-1$。

(2) 求 $Q$。

当 $a=-1$ 时，
$$
A=\begin{pmatrix}-1&0&1\\0&1&0\\1&0&-1\end{pmatrix},\quad
B=\begin{pmatrix}-1&1&0\\1&-1&0\\0&0&1\end{pmatrix}.
$$
取
$$
Q=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix},
$$
则 $Q$ 是交换第 2、3 个坐标的置换矩阵，$Q^{-1}=Q^T=Q$。直接计算：
$$
Q^{-1}AQ=QAQ
=\begin{pmatrix}-1&1&0\\1&-1&0\\0&0&1\end{pmatrix}=B.
$$

(3) 求 $P$。

由上式 $B=QAQ$，于是
$$
AB=A(QAQ)=(AQ)(AQ)=(AQ)^2.
$$
取
$$
P=AQ=\begin{pmatrix}-1&0&1\\0&1&0\\1&0&-1\end{pmatrix}
\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}
=\begin{pmatrix}-1&1&0\\0&0&1\\1&-1&0\end{pmatrix}.
$$
验证：
$$
P^2=\begin{pmatrix}1&-1&1\\1&-1&0\\-1&1&-1\end{pmatrix}
=AB.
$$
所以一个满足条件的矩阵为上述 $P$。

**易错点**

- 只由 $\operatorname{tr}A=\operatorname{tr}B$ 会得到 $a=2$ 或 $a=-1$，必须再用 $\det A=\det B$（或特征值集合）排除 $a=2$。
- 正交矩阵满足 $Q^{-1}=Q^T$，但在本题取的是对称置换矩阵，勿把 $Q^{-1}AQ$ 的左右顺序写反。
- 第三问不能直接对 $AB$ 逐元素开方；要利用相似关系做整体构造。构造后应代回验算 $P^2$。

**命题规律**

本题是“相似不变量 + 正交相似 + 矩阵平方根构造”的综合题，常见套路是：先用特征值/迹/行列式定参数，再用正交变换或置换矩阵实现相似，最后把乘积凑成某个矩阵的平方。复习时应熟练掌握特征多项式、正交矩阵性质、$Q^{-1}AQ$ 的几何意义，并养成“构造后验算”的习惯。


> 来源：《26_李林六套卷（数一）》卷三 第 21 题
