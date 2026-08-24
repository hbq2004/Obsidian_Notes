---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - LA
  - 26_李林六套卷/卷四/MCQ
  - 计算题
  - 二次型规范形
  - 配方法
  - 惯性定理
  - 合同变换
points:
level:
---

# 选择题 第 6 题

![[_Attachments/题目识别/LL6T/LL6T-S4-Q06_题目.png|题目]]

设 $A = \begin{pmatrix} -1 & 1 \\ 1 & 1 \end{pmatrix}$，非零实列向量 $\alpha = (a, b)^T$，$X = (x_1, x_2, x_3)^T$，则二次型 $f(x_1, x_2, x_3) = X^T \begin{pmatrix} A + \alpha\alpha^T & \alpha \\ \alpha^T & 1 \end{pmatrix} X$ 的规范形为
(A) $y_1^2 + y_2^2 + y_3^2$.
(B) $-y_1^2 - y_2^2 - y_3^2$.
(C) $y_1^2 + y_2^2 - y_3^2$.
(D) $y_1^2 - y_2^2 - y_3^2$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S4-Q06_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(C)。该二次型的规范形为

$$y_1^2+y_2^2-y_3^2.$$

**解题切入点**

把 $X=(x_1,x_2,x_3)^T$ 写成 $(y^T,x_3)^T$，将 $x_3$ 看作“主元”配平方，得到 $f=(x_3+\alpha^T y)^2+y^T A y$，于是问题化为求 $2$ 阶对称矩阵 $A$ 的惯性指数。这类似算法竞赛中“消去交叉项/高斯消元”时先凑平方，再递归处理剩余部分。

**推演**

设 $y=(x_1,x_2)^T$，$z=x_3$，$M=A+\alpha\alpha^T$。则

$$f=\begin{pmatrix} y^T & z \end{pmatrix}\begin{pmatrix} M & \alpha\\ \alpha^T & 1 \end{pmatrix}\begin{pmatrix} y\\ z \end{pmatrix}= y^T M y+2z\,\alpha^T y+z^2.$$

因为

$$z^2+2z\,\alpha^T y+(\alpha^T y)^2=(z+\alpha^T y)^2,$$

所以

$$f=(z+\alpha^T y)^2+y^T M y-(\alpha^T y)^2.$$

又

$$y^T M y=y^T A y+y^T\alpha\alpha^T y=y^T A y+(\alpha^T y)^2,$$

故

$$f=(z+\alpha^T y)^2+y^T A y.$$

令

$$w_1=z+\alpha^T y,\quad w_2=x_1,\quad w_3=x_2,$$

这是可逆线性替换，因此二次型的正、负惯性指数与 $1\oplus A$ 相同。

对 $A=\begin{pmatrix}-1&1\\1&1\end{pmatrix}$，有

$$\lambda^2-\operatorname{tr}(A)\lambda+\det(A)=\lambda^2-2=0,$$

所以特征值为 $\sqrt2,-\sqrt2$，一个正、一个负。

于是总惯性指数为：正 $1+1=2$，负 $1$，规范形为

$$y_1^2+y_2^2-y_3^2.$$

逐项看选项：

- (A) $y_1^2+y_2^2+y_3^2$：正惯性指数为 $3$，不符。
- (B) $-y_1^2-y_2^2-y_3^2$：负惯性指数为 $3$，不符。
- (C) $y_1^2+y_2^2-y_3^2$：正惯性指数 $2$、负惯性指数 $1$，符合。
- (D) $y_1^2-y_2^2-y_3^2$：正惯性指数 $1$、负惯性指数 $2$，不符。

因此选 (C)。

**易错点**

- 不要忘记配平方后还要减去 $(\alpha^T y)^2$，它恰好消去 $\alpha\alpha^T$ 项；若把 $M$ 直接当作 $A$ 会错。
- 不要误以为 $\alpha$ 非零会影响规范形；本题中无论 $\alpha$ 如何，二次型都等价于 $1\oplus A$。
- 求 $A$ 的惯性指数时，可用特征值或 $2$ 阶行列式小于 $0$ 直接判断一正一负，不必展开完整 $3$ 阶矩阵。

**命题规律**

考研线代中“分块矩阵给出的二次型”常通过配方法化标准形，再结合惯性定理确定规范形。复习时应熟练掌握配方法、惯性指数、合同变换，以及“$2$ 阶对称矩阵行列式为负则一正一负”的快速判定。


> 来源：《26_李林六套卷（数一）》卷四 第 6 题
