---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 二维正态分布
  - 边缘分布
  - 协方差
  - 独立性
points:
level:
---

# MCQ 第 497 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q497_题目.png|题目]]

497 设二维随机变量 $(X,Y)$ 的概率密度为 $f(x,y)=Ae^{-3x^{2}+2xy-y^{2}},-\infty<x<+\infty, -\infty<y<+\infty$, 则下列说法中正确的是 ( ).

(A) $A = \frac{1}{2} \pi$
(B) $X \sim N(0,1)$
(C) $Y \sim N\left(0, \frac{3}{4}\right)$
(D) $X, Y$ 相互独立

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 **C**。该密度是二维正态密度，比较二次型可得 $Y\sim N\left(0,\dfrac34\right)$，其余选项均不成立。

**解题切入点**：看到密度形如 $f(x,y)=Ce^{-(\text{二次型})}$，第一反应应判断为二维正态密度。不要直接盲目算广义积分，而应与二维正态分布的标准式
$$
f(x,y)=\frac1{2\pi\sqrt{\det\Sigma}}
\exp\left(-\frac12(\mathbf x-\boldsymbol\mu)^T\Sigma^{-1}(\mathbf x-\boldsymbol\mu)\right)
$$
比较，反解协方差矩阵 $\Sigma$。这就像算法题中先识别“模板结构”，再套模板参数，而不是一上来暴力积分。

**推演**：

令
$$
Q=\begin{pmatrix}
3&-1\\
-1&1
\end{pmatrix},
$$
则
$$
3x^2-2xy+y^2
=
\begin{pmatrix}x&y\end{pmatrix}
Q
\begin{pmatrix}x\\y\end{pmatrix}.
$$

又
$$
\det Q=3\cdot1-(-1)^2=2>0,
$$
所以该密度是二维正态密度。比较指数部分：

$$
e^{-3x^2+2xy-y^2}
=
e^{-\frac12 \mathbf x^T\Sigma^{-1}\mathbf x},
$$

可得
$$
\Sigma^{-1}=2Q=
\begin{pmatrix}
6&-2\\
-2&2
\end{pmatrix}.
$$

因此
$$
\Sigma=(2Q)^{-1}
=
\frac18
\begin{pmatrix}
2&2\\
2&6
\end{pmatrix}
=
\begin{pmatrix}
\frac14&\frac14\\
\frac14&\frac34
\end{pmatrix}.
$$

所以
$$
X\sim N\left(0,\frac14\right),\qquad
Y\sim N\left(0,\frac34\right),
$$
且
$$
\operatorname{Cov}(X,Y)=\frac14\neq0.
$$

归一化常数由
$$
\det\Sigma=\frac14\cdot\frac34-\left(\frac14\right)^2=\frac18
$$
得
$$
A=\frac1{2\pi\sqrt{\det\Sigma}}
=
\frac1{2\pi\sqrt{1/8}}
=
\frac{\sqrt2}{\pi}.
$$

逐项判断：

(A) $A=\dfrac{\sqrt2}{\pi}$，不是 $\dfrac{\pi}{2}$，错误；

(B) $X\sim N\left(0,\dfrac14\right)$，不是 $N(0,1)$，错误；

(C) $Y\sim N\left(0,\dfrac34\right)$，正确；

(D) 因为 $\operatorname{Cov}(X,Y)=\dfrac14\neq0$，所以 $X,Y$ 不独立，错误。

**易错点**：

1. 比较指数时容易漏掉标准式中的 $\dfrac12$。由
$$
e^{-\mathbf x^TQ\mathbf x}
=
e^{-\frac12\mathbf x^T\Sigma^{-1}\mathbf x}
$$
应有 $\Sigma^{-1}=2Q$，而不是 $\Sigma^{-1}=Q$。
2. 求边缘方差时要注意指数形式。例如 $f_X(x)\propto e^{-2x^2}$，应比较
$$
e^{-2x^2}=e^{-x^2/(2\sigma^2)}
$$
得 $\sigma^2=\dfrac14$。
3. 二维正态中“不相关”与“独立”等价，但本题 $\operatorname{Cov}(X,Y)\neq0$，可直接排除独立。
4. 归一化常数不要忘记 $\sqrt{\det\Sigma}$，否则会把 $A$ 算成 $\dfrac1{2\pi}$ 一类错误结果。

**命题规律**：本题属于“多维随机变量”中二维正态分布的核心题型，常以选择题或填空题出现。常见变式有：给联合密度求归一化常数、边缘分布、条件分布、相关系数；或反过来给协方差矩阵写联合密度。复习时重点掌握二维正态分布的标准式、边缘分布公式，以及“二维正态中独立等价于不相关”这一特殊结论。

**知识点**：二维正态分布、边缘分布、协方差、独立性

---

> 来源：方浩概率统计进阶500题做题本 第182页 · C组
