---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - LA
  - 26_张宇八套卷/卷八/FRQ
  - 证明题
  - 特征值与特征向量
  - 范德蒙德行列式
  - 线性无关
  - 矩阵可逆
  - 矩阵相似对角化
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S8-Q21_题目.png|题目]]

设 $A$ 为 3 阶矩阵，$\lambda_{1}, \lambda_{2}, \lambda_{3}$ 是 $A$ 的 3 个不同的特征值，其对应的特征向量为 $\xi_{1}, \xi_{2}, \xi_{3}$，
$\alpha = \xi_{1} + \xi_{2} + \xi_{3}, \mathbf{P} = (\alpha, A\alpha, A^{2}\alpha)$.
(1) 证明 $\mathbf{P}$ 可逆；
(2) 若 $(A^{3} - A)\alpha = 0$，求 $|A - 3E|$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S8-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
(1) 由特征值互异，$\xi_1,\xi_2,\xi_3$线性无关。令$Q=(\xi_1,\xi_2,\xi_3)$，则
$$P=(\alpha,A\alpha,A^2\alpha)=Q\begin{pmatrix}1&\lambda_1&\lambda_1^2\\1&\lambda_2&\lambda_2^2\\1&\lambda_3&\lambda_3^2\end{pmatrix},$$
右端矩阵为范德蒙德矩阵，行列式$\prod_{1\le i<j\le3}(\lambda_j-\lambda_i)\neq0$，故$P$可逆。

(2) 由$(A^3-A)\alpha=0$，得$\sum_{i=1}^3(\lambda_i^3-\lambda_i)\xi_i=0$，因$\xi_i$线性无关，故$\lambda_i^3-\lambda_i=0$，即$\lambda_i\in\{0,1,-1\}$。又三值互异，所以特征值为$0,1,-1$，故$|A-3E|=(-3)(-2)(-4)=-24$。

关键给分点：写对$P=QB$、范德蒙德行列式非零；由线性无关得特征值多项式为零；由互异确定特征值集合；求出行列式乘积。

**解题切入点**
本题相当于把向量$\alpha$在特征向量基下坐标分解，利用不同特征值对应的特征向量线性无关，将$P$的列坐标化为范德蒙德矩阵。条件$(A^3-A)\alpha=0$是特征值多项式在$\alpha$上的体现，可类比算法竞赛中“特征多项式零化多项式”的思想。

**推演**
设$Q=(\xi_1,\xi_2,\xi_3)$，因$\lambda_1,\lambda_2,\lambda_3$不同，故$Q$可逆。  
由$A\xi_i=\lambda_i\xi_i$，归纳得$A^k\xi_i=\lambda_i^k\xi_i$。  
所以
$$\alpha=\xi_1+\xi_2+\xi_3=Q(1,1,1)^T,$$
$$A\alpha=\lambda_1\xi_1+\lambda_2\xi_2+\lambda_3\xi_3=Q(\lambda_1,\lambda_2,\lambda_3)^T,$$
$$A^2\alpha=\lambda_1^2\xi_1+\lambda_2^2\xi_2+\lambda_3^2\xi_3=Q(\lambda_1^2,\lambda_2^2,\lambda_3^2)^T.$$
因此$P=QB$，其中
$$B=\begin{pmatrix}1&\lambda_1&\lambda_1^2\\1&\lambda_2&\lambda_2^2\\1&\lambda_3&\lambda_3^2\end{pmatrix}.$$
$B$是范德蒙德矩阵，$\det B=(\lambda_2-\lambda_1)(\lambda_3-\lambda_1)(\lambda_3-\lambda_2)\neq0$。故$B$可逆，$Q$可逆，所以$P$可逆。

(2) 由已知$(A^3-A)\alpha=0$，即$A^3\alpha=A\alpha$。将$\alpha$展开：
$$A^3\alpha=\lambda_1^3\xi_1+\lambda_2^3\xi_2+\lambda_3^3\xi_3,\quad A\alpha=\lambda_1\xi_1+\lambda_2\xi_2+\lambda_3\xi_3.$$
相减得
$$(\lambda_1^3-\lambda_1)\xi_1+(\lambda_2^3-\lambda_2)\xi_2+(\lambda_3^3-\lambda_3)\xi_3=0.$$
由$\xi_1,\xi_2,\xi_3$线性无关，得$\lambda_i(\lambda_i^2-1)=0$，所以$\lambda_i=0$或$\pm1$。又三者互异，故$\{\lambda_1,\lambda_2,\lambda_3\}=\{0,1,-1\}$。

于是$A$相似于$diag(0,1,-1)$，所以$A-3E$相似于$diag(-3,-2,-4)$，行列式等于特征值乘积：
$$|A-3E|=(-3)\cdot(-2)\cdot(-4)=-24.$$

**易错点**
- 忘记特征向量线性无关：不同特征值对应特征向量线性无关是本题基础。
- 将$P$坐标写错：注意$P$的列向量坐标是$\lambda_i^k$，行对应$\xi_i$，不要颠倒。
- 解$\lambda_i^3-\lambda_i=0$时漏解或忽略互异性，导致特征值集合不唯一。
- 计算行列式时注意负号，$(-3)\times(-2)\times(-4)=-24$，不是$24$。

**命题规律**
考研线代常将“特征值不同⟹可对角化”与“向量在特征基下表示”结合，构造范德蒙德矩阵证明可逆。解题关键是抓住$\alpha$由各特征向量线性组合，且有$A^k\alpha$的显式表达。复习时应熟练$A^k$作用于特征向量的线性组合，以及利用$f(A)\alpha=0$推出每个特征值满足$f(\lambda)=0$。


> 来源：《26_张宇八套卷（数一）》卷八 第 21 题
