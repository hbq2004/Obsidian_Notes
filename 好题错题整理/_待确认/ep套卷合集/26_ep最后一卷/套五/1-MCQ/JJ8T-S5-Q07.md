---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
tags:
  - LA
  - 26_ep最后一卷/套五/MCQ
  - 概念题
  - 齐次方程组解空间
  - 矩阵秩与零空间
  - 分块矩阵方程组
  - 同解条件
  - 解空间包含关系
points:
level:
---

# MCQ 第 7 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q07_题目.png|题目]]

7. 设 $A, B$ 为 $n$ 阶矩阵，若 $Ax = 0$ 的解均是 $Bx = 0$ 的解，则（）

A. $A^{\top}x = 0$ 的解均是 $B^{\top}x = 0$ 的解

B. $B^{\top}x = 0$ 的解均是 $A^{\top}x = 0$ 的解

C. 方程组 $\left[\begin{array}{cc} AB & B \\ 0 & A \end{array}\right]x = 0$ 与 $\left[\begin{array}{cc} BA & B \\ 0 & A \end{array}\right]x = 0$ 同解

D. 方程组 $\left[\begin{array}{cc} A & AB \\ 0 & A \end{array}\right]x = 0$ 与 $\left[\begin{array}{cc} A & BA \\ 0 & A \end{array}\right]x = 0$ 同解


---

## DeepSeek V4 Flash Max

【考点】本题考查线性方程组解空间的关系。由题设$\ker(A)\subseteq\ker(B)$，这是核心。解题切入点：将分块矩阵方程展开，利用$Ax_2=0\Rightarrow Bx_2=0$化简。

【解】
设题设条件为$Ax=0$的解均是$Bx=0$的解，即$\ker(A)\subseteq\ker(B)$。于是对任意满足$Az=0$的$z$，有$Bz=0$。

先判断选项D。记$M_1=\begin{bmatrix}A&AB\\0&A\end{bmatrix}$，$M_2=\begin{bmatrix}A&BA\\0&A\end{bmatrix}$。令$x=\begin{bmatrix}x_1\\x_2\end{bmatrix}$，则$M_1x=0$等价于：
$$
\begin{cases}
Ax_1+ABx_2=0,\\ 
Ax_2=0.
\end{cases}
$$
由$Ax_2=0$得$Bx_2=0$，故$ABx_2=A(Bx_2)=0$，$BAx_2=B(Ax_2)=0$。代入第一式得$Ax_1=0$。所以$M_1x=0$的解集为$\{(x_1,x_2)|Ax_1=0,\ Ax_2=0\}$。

同理，$M_2x=0$等价于：
$$
\begin{cases}
Ax_1+BAx_2=0,\\ 
Ax_2=0.
\end{cases}
$$
同样由$Ax_2=0$得$BAx_2=0$，第一式化为$Ax_1=0$。因此$M_2x=0$的解集也为$\{(x_1,x_2)|Ax_1=0,\ Ax_2=0\}$。故D正确。

再判断A、B。选项A要求$\ker(A^T)\subseteq\ker(B^T)$。由题设可得$r(A)\ge r(B)$，但$r(A^T)=r(A), r(B^T)=r(B)$，维数大小并不保证包含关系。反例：$A=\begin{bmatrix}1&0\\0&0\end{bmatrix}, B=\begin{bmatrix}0&0\\1&0\end{bmatrix}$，则$\ker(A)=\ker(B)=\{(0,t)^T\}$，满足题设。但$A^T=A$，$\ker(A^T)=\{(0,t)^T\}$；而$B^T=\begin{bmatrix}0&1\\0&0\end{bmatrix}$，$\ker(B^T)=\{(s,0)^T\}$，两者不包含。故A错。选项B要求$\ker(B^T)\subseteq\ker(A^T)$，同上反例中也不成立（因为$\ker(B^T)$是x轴，$\ker(A^T)$是y轴，无包含），故B错。

选项C：记$N_1=\begin{bmatrix}AB&B\\0&A\end{bmatrix}$，$N_2=\begin{bmatrix}BA&B\\0&A\end{bmatrix}$。同理，$N_1x=0$化为$ABx_1=0$，$N_2x=0$化为$BAx_1=0$，同解需$\ker(AB)=\ker(BA)$。但题设不保证。用上述反例，$AB=0$，$BA=\begin{bmatrix}0&0\\1&0\end{bmatrix}$，$\ker(AB)=\mathbb{R}^2$，$\ker(BA)=\{(0,t)^T\}$，不同，故C错。

【答案】(D)。各选项：A错，因秩大小不蕴含解空间包含；B错，方向反；C错，需$\ker(AB)=\ker(BA)$不成立；D正确。

【易错点】易误认为由$\ker(A)\subseteq\ker(B)$可推出$r(A)\ge r(B)$，进而推出转置后也有包含。实际上，解空间包含是子空间关系，不能由维数决定。分块矩阵展开时，要利用包含关系消去含$Bx_2$的项。防错：遇到此类问题，先写出分块方程，再逐项化简。（本卷无OCR疑误）

【命题规律】常以选择题形式考查方程组解空间关系、矩阵秩、分块矩阵。复习时掌握$\ker(A)\subseteq\ker(B)$的等价条件（即$B$的行向量可由$A$的行向量线性表示），并熟悉分块矩阵的运算与零空间求法。
