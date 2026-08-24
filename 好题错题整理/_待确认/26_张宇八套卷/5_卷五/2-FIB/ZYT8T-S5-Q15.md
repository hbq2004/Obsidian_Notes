---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - LA
  - 26_张宇八套卷/卷五/FIB
  - 计算题
  - 幂零矩阵
  - 二项式展开
  - 若尔当块
  - 矩阵幂运算
  - 单位矩阵
points:
level:
---

# FIB 第 15 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S5-Q15_题目.png|题目]]

设 $\mathbf{A} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, $\mathbf{B} = \begin{pmatrix} -1 & 1 \\ 0 & -1 \end{pmatrix}$, 则 $\mathbf{A}^9 - \mathbf{B}^9 = \_\_\_\_$ .

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S5-Q15_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**  
矩阵幂中 $\mathbf A$ 和 $\mathbf B$ 都是二阶若尔当块结构，计算得  
$$\mathbf A^9=\begin{pmatrix}1&9\\0&1\end{pmatrix},\quad \mathbf B^9=\begin{pmatrix}-1&9\\0&-1\end{pmatrix}.$$  
所以  
$$\mathbf A^9-\mathbf B^9=\begin{pmatrix}2&0\\0&2\end{pmatrix}=2\mathbf I.$$

填空题【答案】:  
$$\boxed{\begin{pmatrix}2&0\\0&2\end{pmatrix}}$$

**解题切入点**  
把 $\mathbf A=\mathbf I+\mathbf N$, $\mathbf B=-\mathbf I+\mathbf N$, 其中 $\mathbf N=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ 且 $\mathbf N^2=0$。与算法竞赛中“快速幂/递推”类似，先找低阶幂规律再代入 $k=9$，避免硬算 9 次矩阵乘法。

**推演**  
1. 设 $\mathbf N=\begin{pmatrix}0&1\\0&0\end{pmatrix}$，则 $\mathbf N^2=\mathbf{0}$。  
2. $\mathbf A=\mathbf I+\mathbf N$，且 $\mathbf I$ 与 $\mathbf N$ 可交换，故  
   $$\mathbf A^k=(\mathbf I+\mathbf N)^k=\mathbf I+k\mathbf N.$$  
   取 $k=9$：  
   $$\mathbf A^9=\mathbf I+9\mathbf N=\begin{pmatrix}1&9\\0&1\end{pmatrix}.$$  
3. $\mathbf B=-\mathbf I+\mathbf N$，$\mathbf I$ 与 $\mathbf N$ 可交换，故  
   $$\mathbf B^k=(-\mathbf I+\mathbf N)^k=(-1)^k\mathbf I+k(-1)^{k-1}\mathbf N.$$  
   取 $k=9$：  
   $$\mathbf B^9=-\mathbf I+9\mathbf N=\begin{pmatrix}-1&9\\0&-1\end{pmatrix}.$$  
4. 相减：  
   $$\mathbf A^9-\mathbf B^9=(\mathbf I+9\mathbf N)-(-\mathbf I+9\mathbf N)=2\mathbf I=\begin{pmatrix}2&0\\0&2\end{pmatrix}.$$

**易错点**  
勿把 $\mathbf B$ 当作 $-\mathbf A$，因为 $\mathbf B=-\mathbf I+\mathbf N$ 而 $\mathbf A=\mathbf I+\mathbf N$；奇数次幂时 $\mathbf B^9$ 的对角元是 $-1$，右上角仍是 $9$，相减时右上角抵消。还要注意矩阵乘法的非交换性，本题因为 $\mathbf I$ 与 $\mathbf N$ 可交换才能用二项式展开。

**命题规律**  
常考 $2$ 阶若尔当块的高次幂：将矩阵拆成“数量矩阵+幂零矩阵”，利用二项式展开截断。复习时应掌握 $\begin{pmatrix}\lambda&1\\0&\lambda\end{pmatrix}^n$ 的通式：$\begin{pmatrix}\lambda^n&n\lambda^{n-1}\\0&\lambda^n\end{pmatrix}$，可快速解决此类选择填空。


> 来源：《26_张宇八套卷（数一）》卷五 第 15 题
