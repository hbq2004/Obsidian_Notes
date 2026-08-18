---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - LA
  - 27_ep月考卷/套三/FIB
  - 计算题
  - 线性方程组通解
  - 基础解系
  - 列空间
  - 线性相关与无关
points:
level:
---

# FIB 第 16 题

![[_Attachments/题目识别/JJ8T/JJ8T-S3-Q16_题目.png|题目]]

16. 设 4 维列向量 $\alpha_1, \alpha_2, \alpha_3, \alpha_4$ 两两线性无关，$\alpha_1 + \alpha_2 + \alpha_3 = 0$，$\alpha_4$ 不能由 $\alpha_1, \alpha_2, \alpha_3$ 线性表示，$A = (\alpha_1, \alpha_2, \alpha_3, \alpha_4)$，则 $AX = \alpha_2 + \alpha_4$ 的通解为 \_ .


---

## DeepSeek V4 Flash Max

【考点】本题考查非齐次线性方程组 $AX=b$ 的通解结构：先求齐次基础解系，再找特解。类比算法竞赛：把 $\alpha_i$ 视为已知向量，方程组求解等价于解线性组合系数，利用线性关系简化。

【解】由 $\alpha_1+\alpha_2+\alpha_3=0$ 得 $\alpha_3=-\alpha_1-\alpha_2$，且 $\alpha_1,\alpha_2$ 线性无关（两两线性无关），故 $\alpha_1,\alpha_2,\alpha_3$ 秩为 $2$。又 $\alpha_4$ 不能由它们线性表示，所以 $\alpha_4$ 与 $\alpha_1,\alpha_2$ 线性无关，故 $\operatorname{rank}(A)=3$。

先求 $AX=0$ 的基础解系：设 $X=(x_1,x_2,x_3,x_4)^T$，则 $\alpha_1 x_1+\alpha_2 x_2+\alpha_3 x_3+\alpha_4 x_4=0$。因 $\alpha_4$ 与 $\alpha_1,\alpha_2,\alpha_3$ 整体线性无关，所以 $x_4=0$。代入 $\alpha_3=-\alpha_1-\alpha_2$ 得 $\alpha_1(x_1-x_3)+\alpha_2(x_2-x_3)=0$，由 $\alpha_1,\alpha_2$ 线性无关得 $x_1=x_3,\ x_2=x_3$。取 $x_3=1$，得基础解系 $\eta=(1,1,1,0)^T$。

再求 $AX=\alpha_2+\alpha_4$ 的一个特解。设特解 $X_0=(a,b,c,d)^T$，则 $\alpha_1 a+\alpha_2 b+\alpha_3 c+\alpha_4 d = \alpha_2+\alpha_4$。比较 $\alpha_4$ 系数得 $d=1$；比较 $\alpha_1,\alpha_2,\alpha_3$ 部分：$\alpha_1 a+\alpha_2 b+\alpha_3 c = \alpha_2$，代入 $\alpha_3=-\alpha_1-\alpha_2$ 得 $\alpha_1(a-c)+\alpha_2(b-c)=\alpha_2$。由线性无关得 $a-c=0,\ b-c=1$。取 $c=0$，则 $a=0,\ b=1$。故特解 $X_0=(0,1,0,1)^T$。

所以通解为 $X=X_0+k\eta=(0,1,0,1)^T+k(1,1,1,0)^T=(k,\ 1+k,\ k,\ 1)^T$，其中 $k$ 为任意常数。

【答案】$X=k\begin{pmatrix}1\\1\\1\\0\end{pmatrix}+\begin{pmatrix}0\\1\\0\\1\end{pmatrix}$（$k$ 为任意常数），即 $x_1=x_3=k,\ x_2=1+k,\ x_4=1$。

【易错点】① 误认为 $\alpha_1,\alpha_2,\alpha_3$ 线性无关——它们线性相关，因为 $\alpha_1+\alpha_2+\alpha_3=0$；② 求特解时容易漏掉 $x_4$ 的系数，必须比较 $\alpha_4$ 的系数；③ 通解中基础解系系数 $k$ 可任意，但特解不唯一，只需保证一组即可。另：题面中“两两线性无关”与 $\alpha_1+\alpha_2+\alpha_3=0$ 不矛盾，本质是任意两个不成比例。

【命题规律】此类题常考抽象向量组的线性方程组通解，突破口是利用线性关系化简系数矩阵的秩，并构造基础解系和特解。复习时应熟练掌握：线性无关与秩的关系、非齐次方程组解的结构（特解+齐次通解）。

---

## V4 Flash Max 解析

**答案**：
$$
X=\begin{pmatrix}0\\1\\0\\1\end{pmatrix}+k\begin{pmatrix}1\\1\\1\\0\end{pmatrix},\quad k\in\mathbb R
$$
即
$$
x_1=x_3=k,\quad x_2=k+1,\quad x_4=1.
$$

**解题切入点**：
把 $AX$ 看成“列向量 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的线性组合”。右边是 $\alpha_2+\alpha_4$，所以立刻能取一个特解 $(0,1,0,1)^T$。再看齐次方程：条件 $\alpha_1+\alpha_2+\alpha_3=0$ 直接给出零空间中的一个非零向量 $(1,1,1,0)^T$。最后确定零空间维数是否为 $1$。这就像算法里“先构造一个可行解，再找自由变量的位移方向”。

**推演**：

1. 由 $\alpha_1+\alpha_2+\alpha_3=0$ 得
   $$
   \alpha_3=-\alpha_1-\alpha_2.
   $$
   又 $\alpha_1,\alpha_2$ 两两线性无关，所以 $\alpha_1,\alpha_2$ 线性无关，故
   $$
   \operatorname{span}(\alpha_1,\alpha_2,\alpha_3)=\operatorname{span}(\alpha_1,\alpha_2).
   $$

2. 因为 $\alpha_4$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，所以
   $$
   \alpha_4\notin\operatorname{span}(\alpha_1,\alpha_2).
   $$
   于是 $\alpha_1,\alpha_2,\alpha_4$ 线性无关。理由：若
   $$
   c_1\alpha_1+c_2\alpha_2+c_4\alpha_4=0
   $$
   且 $c_4\neq0$，则 $\alpha_4$ 可由 $\alpha_1,\alpha_2$ 线性表示，矛盾；故 $c_4=0$，再由 $\alpha_1,\alpha_2$ 线性无关得 $c_1=c_2=0$。

3. 设 $X=(x_1,x_2,x_3,x_4)^T$，代入方程：
   $$
   x_1\alpha_1+x_2\alpha_2+x_3\alpha_3+x_4\alpha_4=\alpha_2+\alpha_4.
   $$
   代入 $\alpha_3=-\alpha_1-\alpha_2$：
   $$
   (x_1-x_3)\alpha_1+(x_2-x_3)\alpha_2+x_4\alpha_4=\alpha_2+\alpha_4.
   $$
   因为 $\alpha_1,\alpha_2,\alpha_4$ 线性无关，比较系数得
   $$
   x_1-x_3=0,\quad x_2-x_3=1,\quad x_4=1.
   $$
   令 $x_3=k$，则
   $$
   x_1=k,\quad x_2=k+1,\quad x_4=1.
   $$
   所以通解为
   $$
   X=(k,\,k+1,\,k,\,1)^T.
   $$

   验证：
   $$
   A(k,k+1,k,1)^T
   =k\alpha_1+(k+1)\alpha_2+k\alpha_3+\alpha_4
   =k(\alpha_1+\alpha_2+\alpha_3)+\alpha_2+\alpha_4
   =\alpha_2+\alpha_4.
   $$

**易错点**：

- 不要把“两两线性无关”理解为“$\alpha_1,\alpha_2,\alpha_3$ 整体线性无关”。事实上 $\alpha_1+\alpha_2+\alpha_3=0$ 已经说明它们整体线性相关。
- 特解不能取成 $(1,0,0,1)^T$，因为 $A(1,0,0,1)^T=\alpha_1+\alpha_4$，不是 $\alpha_2+\alpha_4$。要看清楚右边是第二列和第四列。
- 齐次解方向是 $(1,1,1,0)^T$，不是 $(1,1,0,0)^T$，因为 $\alpha_1+\alpha_2\neq0$，只有 $\alpha_1+\alpha_2+\alpha_3=0$。
- 非齐次方程的通解必须写成“特解 + 齐次通解”，不能只写特解。

**命题规律**：

这类题核心是“抽象列向量方程”与“解的结构”结合。看到 $AX=b$，要立刻翻译成“$b$ 能否由 $A$ 的列向量线性表示，以及表示式中自由变量有几个”。常考变式包括：给列向量线性关系求通解、判断解的个数、求 $A$ 的秩、结合基础解系与特征值等。关键在于抓住“列向量线性组合与矩阵乘法等价”这一桥梁。
