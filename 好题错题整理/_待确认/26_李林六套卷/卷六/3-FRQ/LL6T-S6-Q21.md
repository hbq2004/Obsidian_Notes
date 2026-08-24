---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - LA
  - 26_李林六套卷/卷六/FRQ
  - 计算题
  - 单位特征向量
  - 若尔当链
  - 伴随矩阵
  - 矩阵可逆性
  - 矩阵逆运算
points:
level:
---

# 解答题 第 21 题

![[_Attachments/题目识别/LL6T/LL6T-S6-Q21_题目.png|题目]]

设 $A = \begin{pmatrix} 1 & 1 & -1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$ 的单位特征向量为 $\alpha_1$，且 $\alpha_1$ 的各分量非负.3 维列向量 $\alpha_2, \alpha_3$ 满足 $(E - A)\alpha_2 = \alpha_1$，$(E - A)\alpha_3 = \alpha_2$，其中 $E$ 为 3 阶单位矩阵.
$(I)$ 求 $P = (\alpha_1, \alpha_2, \alpha_3)$，并证明 $P$ 可逆；
$(II)$ 求 $P^{-1}(A + A^*)P$，其中 $A^*$ 为 $A$ 的伴随矩阵.

![[_Attachments/题目识别/LL6T-答案/LL6T-S6-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结论：取 $t=s=0$ 得 $\alpha_1=(1,0,0)^T,\alpha_2=(0,-1,0)^T,\alpha_3=(0,1,1)^T$，则 $P=\begin{pmatrix}1&0&0\\0&-1&1\\0&0&1\end{pmatrix}$，$P$ 可逆；$P^{-1}(A+A^*)P=\begin{pmatrix}2&0&1\\0&2&0\\0&0&2\end{pmatrix}$。

关键给分点：①求 $\alpha_1$；②解方程求 $\alpha_2,\alpha_3$；③证明 $P$ 可逆；④由 $\det A=1$ 得 $A^*=A^{-1}$；⑤推导 $AP=PB$ 并求 $B+B^{-1}$。

**解题切入点**

本题实质是特征值 $\lambda=1$ 的若尔当链问题。$\alpha_1,\alpha_2,\alpha_3$ 构成广义特征向量链，类比算法竞赛中“递推构造状态转移矩阵”，利用 $(I-A)$ 作为降阶算子得到相似变换矩阵 $P$，进而将 $A+A^*$ 化为简单形式。

**推演**

1. 求 $\alpha_1$：
   $A$ 为上三角矩阵，特征值为 $1$（三重）。解 $(A-I)x=0$ 得特征向量 $x=(k,0,0)^T$。单位化且分量非负，取 $\alpha_1=(1,0,0)^T$。

2. 求 $\alpha_2$：设 $\alpha_2=(x_1,x_2,x_3)^T$，由 $(I-A)\alpha_2=\alpha_1$ 得
   $$\begin{pmatrix}0&-1&1\\0&0&-1\\0&0&0\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}1\\0\\0\end{pmatrix}$$
   解得 $x_3=0,\ -x_2=1$，即 $x_2=-1$，$x_1$ 任意。令 $x_1=t$，得 $\alpha_2=(t,-1,0)^T$。

3. 求 $\alpha_3$：设 $\alpha_3=(y_1,y_2,y_3)^T$，由 $(I-A)\alpha_3=\alpha_2$ 得
   $$(-y_2+y_3,\ -y_3,\ 0)^T=(t,-1,0)^T$$
   解得 $y_3=1,\ y_2=1-t$，$y_1$ 任意。令 $y_1=s$，得 $\alpha_3=(s,1-t,1)^T$。

4. 因此 $P=(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}1&t&s\\0&-1&1-t\\0&0&1\end{pmatrix}$。该矩阵为上三角，行列式 $=1\cdot(-1)\cdot1=-1\ne0$，故 $P$ 可逆（无论 $t,s$ 取何值）。为简化取 $t=s=0$，得 $P=\begin{pmatrix}1&0&0\\0&-1&1\\0&0&1\end{pmatrix}$。

5. 求 $P^{-1}(A+A^*)P$：因为 $\det A=1$，所以 $A^*=\det A\cdot A^{-1}=A^{-1}$，故
   $$P^{-1}(A+A^*)P=P^{-1}AP+P^{-1}A^{-1}P.$$
   由 $A\alpha_1=\alpha_1$，$A\alpha_2=\alpha_2-\alpha_1$，$A\alpha_3=\alpha_3-\alpha_2$，得
   $$AP=(A\alpha_1,A\alpha_2,A\alpha_3)=(\alpha_1,\alpha_2-\alpha_1,\alpha_3-\alpha_2)=P\begin{pmatrix}1&-1&0\\0&1&-1\\0&0&1\end{pmatrix}=PB,$$
   其中 $B=\begin{pmatrix}1&-1&0\\0&1&-1\\0&0&1\end{pmatrix}$。故 $P^{-1}AP=B$。

6. 求 $B^{-1}$：令 $N=B-I=\begin{pmatrix}0&-1&0\\0&0&-1\\0&0&0\end{pmatrix}$，则 $N^2=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix}$，$N^3=0$。于是
   $$B^{-1}=I-N+N^2=\begin{pmatrix}1&1&1\\0&1&1\\0&0&1\end{pmatrix}.$$

7. 所以
   $$B+B^{-1}=\begin{pmatrix}1&-1&0\\0&1&-1\\0&0&1\end{pmatrix}+\begin{pmatrix}1&1&1\\0&1&1\\0&0&1\end{pmatrix}=\begin{pmatrix}2&0&1\\0&2&0\\0&0&2\end{pmatrix}.$$
   因此 $P^{-1}(A+A^*)P=\begin{pmatrix}2&0&1\\0&2&0\\0&0&2\end{pmatrix}$。

**易错点**

- 忽略 $\alpha_1$ 需单位化且分量非负，可能误取 $(-1,0,0)^T$。
- 解方程时漏掉自由变量，导致 $P$ 不唯一而不知如何处理。
- 误将 $A^*$ 当伴随矩阵但未与 $A^{-1}$ 联系，注意 $\det A=1$ 时 $A^*=A^{-1}$。
- 在 $AP=PB$ 中 $B$ 的次对角线容易写成 $1$，应根据 $A\alpha_2=\alpha_2-\alpha_1$ 得到 $-1$。
- 忘记证明 $P$ 可逆，或认为只有特定 $t,s$ 才可逆（实际上总是可逆）。

**命题规律**

此类题目常以特征值为 $1$ 的 $3$ 阶若尔当块为背景，将特征向量链与伴随矩阵结合命题。复习时应熟练掌握：①由特征向量链构造相似变换矩阵；②利用 $A^*=\det A\cdot A^{-1}$ 化简；③对“$I+N$”型矩阵的幂与逆的快速计算（二项式展开）。


> 来源：《26_李林六套卷（数一）》卷六 第 21 题
