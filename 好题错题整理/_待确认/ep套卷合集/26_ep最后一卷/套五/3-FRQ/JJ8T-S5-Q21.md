---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-20 01:07:44
tags:
  - AM
  - 26_ep最后一卷/套五/FRQ
  - 常系数线性微分方程组
  - 特征值与特征向量
  - 矩阵对角化
  - 变量替换
  - 通解
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q21_题目.png|题目]]

设可导函数 $x(t)$，$y(t)$，$z(t)$ 满足

$$
\frac{dx}{dt} = x + 3y - 3z,

\frac{dy}{dt} = -x + 5y + z,

\frac{dz}{dt} = -4x + 4y + 2z.
$$

(1) 设矩阵 $A$ 满足 $\left(\frac{dx}{dt}, \frac{dy}{dt}, \frac{dz}{dt}\right) = A\left(\begin{array}{l}x \\ y \\ z\end{array}\right)$ 求可逆矩阵 $P$ 和对角阵 $\Lambda$ 使得 $P^{-1}AP = \Lambda$；

(2) 设变换 $\left(\begin{array}{l}x \\ y \\ z\end{array}\right) = P\left(\begin{array}{l}u \\ v \\ w\end{array}\right)$ 其中 $u, v, w$ 是关于 $t$ 的函数，证明 $\left(\frac{dx}{dt}, \frac{dy}{dt}, \frac{dz}{dt}\right) = P\left(\frac{du}{dt}, \frac{dv}{dt}, \frac{dw}{dt}\right)$；

(3) 利用(2)用到的变换求出函数 $u, v, w$ 满足的方程，并求函数 $x(t)$，$y(t)$，$z(t)$ 的通解.


---

## DeepSeek V4 Flash Max

【考点】本题考查常系数线性微分方程组的求解，通过矩阵对角化将耦合的微分方程解耦为一阶独立方程，类似算法竞赛中利用矩阵快速幂对角化线性递推。

【解】

（1）将方程组写成矩阵形式。设 $X=\begin{pmatrix}x\\y\\z\end{pmatrix}$，则 $\frac{dX}{dt}=AX$，其中
$$A=\begin{pmatrix}1&3&-3\\-1&5&1\\-4&4&2\end{pmatrix}.$$

求 $A$ 的特征多项式：
$$\det(A-\lambda I)=\begin{vmatrix}1-\lambda&3&-3\\-1&5-\lambda&1\\-4&4&2-\lambda\end{vmatrix} = -(\lambda-6)(\lambda-4)(\lambda+2).$$
所以特征值为 $\lambda_1=6,\lambda_2=4,\lambda_3=-2$。

分别求特征向量：
- 对 $\lambda_1=6$，解 $(A-6I)X=0$，得特征向量 $\alpha_1=(0,1,1)^T$；
- 对 $\lambda_2=4$，解 $(A-4I)X=0$，得特征向量 $\alpha_2=(1,1,0)^T$；
- 对 $\lambda_3=-2$，解 $(A+2I)X=0$，得特征向量 $\alpha_3=(1,0,1)^T$。

取可逆矩阵 $P=(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}0&1&1\\1&1&0\\1&0&1\end{pmatrix}$，则
$$P^{-1}AP=\Lambda=\begin{pmatrix}6&0&0\\0&4&0\\0&0&-2\end{pmatrix}.$$

（2）设 $X=P\begin{pmatrix}u\\v\\w\end{pmatrix}$，因为 $P$ 是常数矩阵，两边对 $t$ 求导得
$$\frac{dX}{dt}=P\frac{d}{dt}\begin{pmatrix}u\\v\\w\end{pmatrix},$$
即 $\left(\frac{dx}{dt},\frac{dy}{dt},\frac{dz}{dt}\right)^T=P\left(\frac{du}{dt},\frac{dv}{dt},\frac{dw}{dt}\right)^T$。原题中左侧写为行向量，但实质相同。

（3）由 $\frac{dX}{dt}=AX$ 及 $X=P\begin{pmatrix}u\\v\\w\end{pmatrix}$，得
$$P\frac{d}{dt}\begin{pmatrix}u\\v\\w\end{pmatrix}=AP\begin{pmatrix}u\\v\\w\end{pmatrix}.$$
左乘 $P^{-1}$ 得
$$\frac{d}{dt}\begin{pmatrix}u\\v\\w\end{pmatrix}=\Lambda\begin{pmatrix}u\\v\\w\end{pmatrix}.$$
即
$$\frac{du}{dt}=6u,\quad \frac{dv}{dt}=4v,\quad \frac{dw}{dt}=-2w.$$
解得
$$u=C_1e^{6t},\quad v=C_2e^{4t},\quad w=C_3e^{-2t},$$
其中 $C_1,C_2,C_3$ 为任意常数。

由 $X=P\begin{pmatrix}u\\v\\w\end{pmatrix}$ 得
$$x=v+w,\quad y=u+v,\quad z=u+w.$$
所以通解为
$$\begin{cases}x(t)=C_2e^{4t}+C_3e^{-2t},\\y(t)=C_1e^{6t}+C_2e^{4t},\\z(t)=C_1e^{6t}+C_3e^{-2t}.\end{cases}$$

【答案】

（1）$P=\begin{pmatrix}0&1&1\\1&1&0\\1&0&1\end{pmatrix}$，$\Lambda=\begin{pmatrix}6&0&0\\0&4&0\\0&0&-2\end{pmatrix}$；

（2）证明略，见【解】；

（3）$u=C_1e^{6t}$，$v=C_2e^{4t}$，$w=C_3e^{-2t}$，通解为
$$\begin{cases}x(t)=C_2e^{4t}+C_3e^{-2t},\\y(t)=C_1e^{6t}+C_2e^{4t},\\z(t)=C_1e^{6t}+C_3e^{-2t}.\end{cases}$$

关键给分点：特征值与特征向量计算、$P$ 与 $\Lambda$ 的正确性、解耦方程、通解形式。

【易错点】易错点：特征向量与特征值对应顺序不一致导致 $\Lambda$ 错；求 $P^{-1}AP$ 时代入错误；通解中遗漏任意常数；求导时忘记 $P$ 为常数阵。防错提醒：求解后可用 $X=P\begin{pmatrix}u\\v\\w\end{pmatrix}$ 回代验证。

> 题面按 $\frac{dX}{dt}=AX$ 列向量理解（OCR 疑误，请核对原书）。

【命题规律】此类题是考研数学一常考题型，将线性代数中的矩阵对角化与常微分方程结合。复习时应熟练掌握特征值特征向量、对角化以及常系数线性方程组的解耦方法，注意变换前后变量的对应关系。

---

## V4 Flash Max 解析

**答案**：  
按列向量理解，令 $X=(x,y,z)^T$。系数矩阵为
$$
A=\begin{pmatrix}1&3&-3\\-1&5&1\\-4&4&2\end{pmatrix}.
$$
取
$$
P=\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix},\qquad
\Lambda=\begin{pmatrix}4&0&0\\0&6&0\\0&0&-2\end{pmatrix},
$$
则 $P^{-1}AP=\Lambda$。令 $X=P\begin{pmatrix}u&v&w\end{pmatrix}^T$ 后，
$$
u'=4u,\qquad v'=6v,\qquad w'=-2w.
$$
所以通解为
$$
\begin{pmatrix}x\\y\\z\end{pmatrix}
=
C_1e^{4t}\begin{pmatrix}1\\1\\0\end{pmatrix}
+C_2e^{6t}\begin{pmatrix}0\\1\\1\end{pmatrix}
+C_3e^{-2t}\begin{pmatrix}1\\0\\1\end{pmatrix},
$$
即
$$
x=C_1e^{4t}+C_3e^{-2t},\qquad
y=C_1e^{4t}+C_2e^{6t},\qquad
z=C_2e^{6t}+C_3e^{-2t}.
$$

**解题切入点**：  
看到一阶常系数线性微分方程组，立刻写成矩阵形式 $X'=AX$。核心思路是“解耦”：通过特征值、特征向量把 $A$ 对角化，再用变量替换 $X=PU$ 把三维耦合方程组变成三个独立的一维方程。这类似于算法竞赛中把复杂状态转移按特征方向分解，变成若干个互不影响的子问题。

**推演**：

1. 求特征值与特征向量。  
$$
\chi_A(\lambda)=|\lambda I-A|
=
\begin{vmatrix}
\lambda-1&-3&3\\
1&\lambda-5&-1\\
4&-4&\lambda-2
\end{vmatrix}
=\lambda^3-8\lambda^2+4\lambda+48.
$$
因式分解：
$$
\chi_A(\lambda)=(\lambda-4)(\lambda-6)(\lambda+2),
$$
所以特征值为
$$
\lambda=4,\ 6,\ -2.
$$

分别求特征向量：

$$
\lambda=4:\quad (A-4I)X=0
\Rightarrow X=k_4\begin{pmatrix}1\\1\\0\end{pmatrix},
$$

$$
\lambda=6:\quad (A-6I)X=0
\Rightarrow X=k_6\begin{pmatrix}0\\1\\1\end{pmatrix},
$$

$$
\lambda=-2:\quad (A+2I)X=0
\Rightarrow X=k_{-2}\begin{pmatrix}1\\0\\1\end{pmatrix}.
$$

取
$$
P=\begin{pmatrix}
1&0&1\\
1&1&0\\
0&1&1
\end{pmatrix},
$$
其列向量依次是特征值 $4,6,-2$ 的特征向量。因为
$$
AP=P\Lambda,
$$
且
$$
|P|=2\neq 0,
$$
所以
$$
P^{-1}AP=\Lambda.
$$

其中
$$
P^{-1}=
\begin{pmatrix}
\frac12&\frac12&-\frac12\\
-\frac12&\frac12&\frac12\\
\frac12&-\frac12&\frac12
\end{pmatrix}.
$$

2. 证明变换后的导数关系。  
令
$$
\begin{pmatrix}x\\y\\z\end{pmatrix}
=
P\begin{pmatrix}u\\v\\w\end{pmatrix}.
$$
因为 $P$ 是常数矩阵，所以
$$
\begin{pmatrix}x'\\y'\\z'\end{pmatrix}
=
\frac{d}{dt}\left(P\begin{pmatrix}u\\v\\w\end{pmatrix}\right)
=
P\begin{pmatrix}u'\\v'\\w'\end{pmatrix}.
$$

3. 求 $u,v,w$ 满足的方程。  
由
$$
X'=AX
$$
得
$$
P\begin{pmatrix}u'\\v'\\w'\end{pmatrix}
=
AP\begin{pmatrix}u\\v\\w\end{pmatrix}.
$$
左乘 $P^{-1}$，得
$$
\begin{pmatrix}u'\\v'\\w'\end{pmatrix}
=
P^{-1}AP\begin{pmatrix}u\\v\\w\end{pmatrix}
=
\Lambda\begin{pmatrix}u\\v\\w\end{pmatrix}.
$$
因此
$$
u'=4u,\qquad v'=6v,\qquad w'=-2w.
$$

解得
$$
u=C_1e^{4t},\qquad v=C_2e^{6t},\qquad w=C_3e^{-2t}.
$$

代回 $X=PU$，得
$$
\begin{pmatrix}x\\y\\z\end{pmatrix}
=
\begin{pmatrix}
1&0&1\\
1&1&0\\
0&1&1
\end{pmatrix}
\begin{pmatrix}
C_1e^{4t}\\
C_2e^{6t}\\
C_3e^{-2t}
\end{pmatrix}
=
\begin{pmatrix}
C_1e^{4t}+C_3e^{-2t}\\
C_1e^{4t}+C_2e^{6t}\\
C_2e^{6t}+C_3e^{-2t}
\end{pmatrix}.
$$

回代检验：例如
$$
x+3y-3z
=
(C_1e^{4t}+C_3e^{-2t})
+3(C_1e^{4t}+C_2e^{6t})
-3(C_2e^{6t}+C_3e^{-2t})
=
4C_1e^{4t}-2C_3e^{-2t}
=x'.
$$
另外两式同理成立。

**易错点**：  
- $P$ 的列向量必须与 $\Lambda$ 的对角元一一对应。若改变特征向量顺序，$\Lambda$ 中特征值顺序也要同步改变。  
- 特征向量要逐一代回验证 $Av_i=\lambda_i v_i$，防止符号错误。  
- $P$ 是常数矩阵，所以 $(PU)'=PU'$，不能多写一项 $P'U$。  
- 通解中只有 3 个任意常数，不能把三个分量分别写成各带两个常数的形式而不加约束。  
- 题干中的圆括号疑似缺少转置符号；按方程本身，最合理读法是导数向量与变量向量均为列向量，即 $X'=AX$。  
注：按OCR最合理读法，原式应理解为列向量等式，导数向量和变量向量均取列向量。

**命题规律**：  
这是“线性代数 + 常微分方程”的经典结合题。常见命题角度是：给出常系数线性齐次微分方程组，先要求对角化，再通过换元解耦求通解。核心流程固定：
$$
X'=AX,\qquad A=P\Lambda P^{-1},\qquad X=PU,\qquad U'=\Lambda U.
$$
常见变式包括：给初值求特解；矩阵有重根时用 Jordan 标准形；求矩阵指数 $e^{At}=Pe^{\Lambda t}P^{-1}$；讨论平衡点稳定性等。记忆方法：对角化就是解耦，看到 $X'=AX$ 就找特征方向，把高维耦合系统拆成独立的一维系统。
