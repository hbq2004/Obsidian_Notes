---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - LA
  - 26_张宇八套卷/卷三/FIB
  - 计算题
  - 矩阵相似性质
  - 特征多项式
  - 迹与行列式
  - 二阶主子式之和
  - 循环矩阵
points:
level:
---

# FIB 第 15 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S3-Q15_题目.png|题目]]

设 $A = \begin{pmatrix} 0 & 4 & 0 \\ 0 & 1 & 1 \end{pmatrix}$ 与 $B = \begin{pmatrix} c & 2 & b \\ b & c & 2 \end{pmatrix}$ 相似，则实向量 $(a,b,c) = \_$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S3-Q15_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由相似矩阵特征多项式相同，解得
$$
a=-\frac{43}{3},\quad b=-\frac{7}{3},\quad c=\frac{1}{3}
$$

填空题【答案】:
$$
\boxed{\left(-\frac{43}{3},-\frac{7}{3},\frac{1}{3}\right)}
$$

**解题切入点**

考查相似矩阵的不变量与特征多项式。这就像算法竞赛中给对象算一组哈希值：两个矩阵相似时，特征多项式各项系数必须逐一对上，因此由迹、二阶主子式之和、行列式三个“哈希分量”联立解出参数。

**推演**

题面矩阵显然被 OCR 截去了第三行，按最合理原题补全为
$$A=\begin{pmatrix}0&4&0\\0&1&1\\0&a&0\end{pmatrix},\qquad B=\begin{pmatrix}c&2&b\\b&c&2\\2&b&c\end{pmatrix}.$$

设 $f_A(\lambda)=\det(A-\lambda E)$，则
$$f_A(\lambda)=\begin{vmatrix}-\lambda&4&0\\0&1-\lambda&1\\0&a&-\lambda\end{vmatrix}=-\lambda^3+\lambda^2+a\lambda.$$

对 $B$，先求三个相似不变量：
$$\operatorname{tr}B=3c,$$
$$\sum_{i<j}M_{ii,jj}(B)=3(c^2-2b),$$
$$\det B=c^3+b^3+8-6bc.$$
因此
$$f_B(\lambda)=-\lambda^3+3c\lambda^2-3(c^2-2b)\lambda+(c^3+b^3+8-6bc).$$

由 $A\sim B\Rightarrow f_A=f_B$，比较系数得
$$
\begin{cases}
3c=1,\\ a=6b-3c^2,\\ c^3+b^3+8-6bc=0.
\end{cases}
$$

由第一式 $c=\frac13$，代入第三式：
$$\frac1{27}+b^3+8-2b=0\Rightarrow 27b^3-54b+217=0.$$
因式分解：
$$27b^3-54b+217=(3b+7)(9b^2-21b+31)=0.$$
二次因式判别式 $(-21)^2-4\cdot9\cdot31=-675<0$，故实根只有 $b=-\frac73$。于是
$$a=6\left(-\frac73\right)-3\left(\frac13\right)^2=-\frac{43}{3}.$$

回代：此时 $f_B(\lambda)=-\lambda^3+\lambda^2-\frac{43}{3}\lambda=f_A(\lambda)$，与题设相容，故为所求。

**易错点**

1. 原题 OCR 少了第三行，按两个 $2\times3$ 矩阵谈相似没有意义；应先按“$A$ 第三行 $0,a,0$，$B$ 第三行 $2,b,c$”还原。
2. 比较特征多项式时注意符号：系数 $\lambda$ 是 $-\sum$ 二阶主子式，不要与 $\det$、$\operatorname{tr}$ 弄混。
3. 只比较迹和行列式可能不足，还要比较二阶主子式之和；本题三次方程要说明取实根。

**命题规律**

考研线代常以“相似+参数”命题，核心是相似不变量；三阶矩阵可直接用
$$\det(\lambda E-A)=\lambda^3-\operatorname{tr}(A)\lambda^2+S_2\lambda-\det A$$
列方程。平时多练循环矩阵/各行和相等矩阵的行列式与特征值，能快速锁定参数。

题面按 $A$ 第三行为 $0,a,0$，$B$ 第三行为 $2,b,c$ 理解（OCR 疑误，请核对原书）。


> 来源：《26_张宇八套卷（数一）》卷三 第 15 题
