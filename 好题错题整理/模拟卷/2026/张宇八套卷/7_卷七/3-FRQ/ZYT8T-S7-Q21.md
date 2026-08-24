---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - LA
  - 26_张宇八套卷/卷七/FRQ
  - 计算题
  - 特征多项式
  - 相似对角化
  - 几何重数
  - 矩阵多项式
  - 特征向量矩阵
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S7-Q21_题目.png|题目]]

21. （本题满分 12 分）

设 $\mathbf{A} = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 2 & 0 \\ a & 1 & b \end{pmatrix}$ 恰有 2 个不同的特征值且可相似对角化, $a>0,(\mathbf{A}+\mathbf{E})(\mathbf{E}-\mathbf{B})=\mathbf{E}$. 求

（1） $a,b$ 的值;

（2） 可以使 $\mathbf{A},\mathbf{B}$ 同时相似对角化的可逆矩阵 $\mathbf{P}$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S7-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

按题面 $a>0$ 严格理解，本题无解。推演如下：

$\mathbf A$ 的特征多项式为
$$
|\lambda\mathbf E-\mathbf A|=(\lambda-1)(\lambda-3)(\lambda-b).
$$
恰有 2 个不同特征值，故 $b=1$ 或 $b=3$。

- 若 $b=1$，则 $\lambda=1$ 为二重特征值。
  $$
  \mathbf E-\mathbf A=\begin{pmatrix}-1&-1&0\\-1&-1&0\\-a&-1&0\end{pmatrix}
  $$
  其秩恒为 2，故几何重数为 1，不可相似对角化，矛盾。

- 若 $b=3$，则 $\lambda=3$ 为二重特征值。
  $$
  3\mathbf E-\mathbf A=\begin{pmatrix}1&-1&0\\-1&1&0\\-a&-1&0\end{pmatrix}
  $$
  当且仅当 $a=-1$ 时秩为 1，几何重数为 2，可相似对角化，但违背 $a>0$。

因此题面条件不相容。若原题条件应为 $a<0$ 或允许 $a=-1$，则正确参数为
$$
a=-1,\qquad b=3.
$$
此时可取
$$
\mathbf P=\begin{pmatrix}0&1&0\\0&1&1\\1&0&1\end{pmatrix},
$$
使得
$$
\mathbf P^{-1}\mathbf A\mathbf P=\operatorname{diag}(1,3,3),
$$
且由 $(\mathbf A+\mathbf E)(\mathbf E-\mathbf B)=\mathbf E$ 得
$$
\mathbf B=\mathbf E-(\mathbf A+\mathbf E)^{-1},
$$
故
$$
\mathbf P^{-1}\mathbf B\mathbf P=\operatorname{diag}\left(\frac12,\frac34,\frac34\right).
$$

关键给分点：①正确写出特征多项式；②分 $b=1$ 与 $b=3$ 讨论；③用几何重数判断可对角化；④由矩阵方程求 $\mathbf B$；⑤构造 $\mathbf P$ 并写出对角化结果。

**解题切入点**

本题是线性代数中“参数矩阵的对角化判定”题，类似算法竞赛里的“先判断合法状态，再构造转移矩阵”：先用特征多项式列出候选参数，再用二重特征值的几何重数筛掉不可对角化情形，最后用特征向量矩阵同时对角化 $\mathbf A$ 和 $\mathbf B$。破题关键在于 $\mathbf B$ 是 $\mathbf A$ 的矩阵多项式，因此与 $\mathbf A$ 有完全相同的特征向量。

**推演**

1. 求特征多项式。
$$
|\lambda\mathbf E-\mathbf A|=\begin{vmatrix}
\lambda-2&-1&0\\
-1&\lambda-2&0\\
-a&-1&\lambda-b
\end{vmatrix}
=(\lambda-b)\big((\lambda-2)^2-1\big)
=(\lambda-b)(\lambda-3)(\lambda-1).
$$

2. 恰有 2 个不同特征值，故特征值为 $1,3,b$，必须 $b=1$ 或 $b=3$。

3. 分别判断可对角化性。

- 若 $b=1$：特征值为 $3$（单重）和 $1$（二重）。
  $$
  \mathbf E-\mathbf A=\begin{pmatrix}
  -1&-1&0\\
  -1&-1&0\\
  -a&-1&0
  \end{pmatrix}.
  $$
  前三列中第三列为 0，前两列不成比例，故秩为 2，所以 $\lambda=1$ 的几何重数 $=3-2=1$，不可对角化。

- 若 $b=3$：特征值为 $1$（单重）和 $3$（二重）。
  $$
  3\mathbf E-\mathbf A=\begin{pmatrix}
  1&-1&0\\
  -1&1&0\\
  -a&-1&0
  \end{pmatrix}.
  $$
  前两行成比例，第三行与第一行成比例当且仅当 $-a=-1$，即 $a=1$ 时？此处需重新仔细检查：

  实际上，矩阵为
  $$
  \begin{pmatrix}
  1&-1&0\\
  -1&1&0\\
  -a&-1&0
  \end{pmatrix}.
  $$
  第一行与第二行成比例；第三行前两列为 $(-a,-1)$，与 $(1,-1)$ 成比例当且仅当 $(-a,-1)=k(1,-1)$，得 $k=1$，故 $-a=1$，即 $a=-1$。
  所以秩为 2（当 $a\neq -1$）或秩为 1（当 $a=-1$）。题设 $a>0$，故秩为 2，几何重数 $=1$，不可对角化。

因此按题面 $a>0$，两种情况均不可对角化，无解。

4. 若修正为 $a=-1,\ b=3$，则
$$
\mathbf A=\begin{pmatrix}2&1&0\\1&2&0\\-1&1&3\end{pmatrix}.
$$
特征向量：

- 对 $\lambda=1$，解 $(\mathbf E-\mathbf A)\mathbf x=0$，得
  $$
  \mathbf x_1=(0,0,1)^T.
  $$

- 对 $\lambda=3$，解 $(3\mathbf E-\mathbf A)\mathbf x=0$，得两个线性无关特征向量
  $$
  \mathbf x_2=(1,1,0)^T,\qquad \mathbf x_3=(0,1,1)^T.
  $$

取
$$
\mathbf P=(\mathbf x_1,\mathbf x_2,\mathbf x_3)=\begin{pmatrix}0&1&0\\0&1&1\\1&0&1\end{pmatrix},
$$
则 $\det\mathbf P=1$，可逆，且
$$
\mathbf P^{-1}\mathbf A\mathbf P=\operatorname{diag}(1,3,3).
$$

5. 求 $\mathbf B$。
由
$$
(\mathbf A+\mathbf E)(\mathbf E-\mathbf B)=\mathbf E,
$$
得
$$
\mathbf E-\mathbf B=(\mathbf A+\mathbf E)^{-1},
$$
所以
$$
\mathbf B=\mathbf E-(\mathbf A+\mathbf E)^{-1}.
$$
因为 $\mathbf B$ 是 $\mathbf A$ 的多项式，故与 $\mathbf A$ 有相同特征向量。$\mathbf A$ 的特征值为 $1,3,3$，$\mathbf A+\mathbf E$ 的特征值为 $2,4,4$，$(\mathbf A+\mathbf E)^{-1}$ 的特征值为 $\frac12,\frac14,\frac14$，于是 $\mathbf B$ 的特征值为
$$
1-\frac12=\frac12,\qquad 1-\frac14=\frac34,\qquad 1-\frac14=\frac34.
$$
所以
$$
\mathbf P^{-1}\mathbf B\mathbf P=\operatorname{diag}\left(\frac12,\frac34,\frac34\right).
$$

**易错点**

- 误以为“恰有 2 个不同特征值”等价于“可相似对角化”，忘记二重特征值的几何重数必须为 2。
- 计算秩时混淆 $a$ 的符号。$b=3$ 时可对角化需要 $3\mathbf E-\mathbf A$ 的秩为 1，即 $a=-1$，不是 $a=1$。
- 取 $\mathbf P$ 时，同一特征值的不同特征向量必须线性无关，且最终 $\mathbf P$ 要可逆。
- 由 $(\mathbf A+\mathbf E)(\mathbf E-\mathbf B)=\mathbf E$ 解 $\mathbf B$ 时，不要误写成 $\mathbf B=\mathbf E-(\mathbf E-\mathbf B)$ 之类的循环式；应利用逆矩阵。

**命题规律**

本题是典型“参数矩阵 + 对角化判定 + 矩阵方程”综合题。命题人常让 $\mathbf B$ 表示为 $\mathbf A$ 的多项式，从而保证二者可同时对角化。复习时应熟练掌握：特征多项式求参数、几何重数与代数重数判断对角化、由特征向量构造矩阵 $\mathbf P$、矩阵多项式的特征值。若题面出现参数条件矛盾，多半是印刷或录入错误，应按最合理读法修正后再解。

题面按 $a>0$ 严格理解时无解；若按 $a<0$ 或允许 $a=-1$ 理解，答案为 $a=-1,\ b=3$，$\mathbf P=\begin{pmatrix}0&1&0\\0&1&1\\1&0&1\end{pmatrix}$，且 $\mathbf P^{-1}\mathbf A\mathbf P=\operatorname{diag}(1,3,3)$，$\mathbf P^{-1}\mathbf B\mathbf P=\operatorname{diag}(1/2,3/4,3/4)$。（题面按“$a>0$”理解有 OCR 疑误，请核对原书。）


> 来源：《26_张宇八套卷（数一）》卷七 第 21 题
