---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - AM
  - 26_张宇四套卷/卷三/MCQ
  - 概念题
  - 詹森不等式
  - 凸函数判定
  - 积分换元
  - 加权平均
  - 函数单调性
points:
level:
---

# 选择题 第 2 题

![[_Attachments/题目识别/ZY4T/ZY4T-S3-Q02_题目.png|题目]]

设函数 $f(x)$ 在 $[0,1]$ 上二阶可导，则.
(A) 当 $f'(x) < 0$ 时，$f\left(\frac{1}{2}\right) < \int_0^1 f(x)\mathrm{d}x$.
(B) 当 $f'(x) > 0$ 时，$f\left(\frac{1}{2}\right) < \int_0^1 f(x)\mathrm{d}x$.
(C) 当 $f''(x) < 0$ 时，$f\left(\frac{1}{3}\right) < \int_0^1 f(x^2)\mathrm{d}x$.
(D) 当 $f''(x) > 0$ 时，$f\left(\frac{1}{3}\right) < \int_0^1 f(x^2)\mathrm{d}x$.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S3-Q02_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(D)。

**解题切入点**

考查 $f''$ 的符号与凸性，以及积分与函数值的大小比较。把 $\int_0^1 f(x^2)\,dx$ 看作随机变量 $X$ 的期望：令 $t=x^2$ 后，权重为 $\frac{1}{2\sqrt t}$，该分布的期望恰为 $\frac13$；就像算法题中把求和式看成带权平均，再用凸函数的 Jensen 不等式判断方向。

**推演**

先处理涉及 $f(x^2)$ 的选项。令 $t=x^2$，则 $x=\sqrt t$，$dx=\frac{dt}{2\sqrt t}$，于是
$$
\int_0^1 f(x^2)\,dx=\int_0^1 f(t)\frac{1}{2\sqrt t}\,dt .
$$
记 $w(t)=\frac1{2\sqrt t}$（$0<t\le1$）。易得
$$
\int_0^1 w(t)\,dt=1,\qquad
\int_0^1 t w(t)\,dt=\int_0^1 \frac12\sqrt t\,dt=\frac13 .
$$
因此右端是 $f(X)$ 关于分布 $w(t)dt$ 的期望，且 $E[X]=\frac13$。

逐项看：

(A) 错。取 $f(x)=1-x$，则 $f'(x)=-1<0$，但
$$
f\left(\frac12\right)=\frac12,\qquad \int_0^1 f(x)\,dx=\frac12,
$$
不满足严格小于。

(B) 错。取 $f(x)=x$，则 $f'(x)=1>0$，但
$$
f\left(\frac12\right)=\frac12,\qquad \int_0^1 f(x)\,dx=\frac12,
$$
故也不成立。

(C) 错。取 $f(x)=-x^2$，则 $f''(x)=-2<0$，此时
$$
f\left(\frac13\right)=-\frac19,\qquad
\int_0^1 f(x^2)\,dx=\int_0^1 -x^4\,dx=-\frac15,
$$
所以 $f\left(\frac13\right)>\int_0^1 f(x^2)\,dx$，与选项方向相反。

(D) 对。当 $f''(x)>0$ 时，$f$ 在 $[0,1]$ 上严格凸。由 Jensen 不等式：
$$
\int_0^1 f(x^2)\,dx=E[f(X)]\ge f(E[X])=f\left(\frac13\right).
$$
因严格凸且 $X$ 非退化，等号不成立，故
$$
f\left(\frac13\right)<\int_0^1 f(x^2)\,dx.
$$

所以正确选项为 (D)。

**易错点**

1. 看到 $f'<0$ 或 $f'>0$ 只反映单调性，不能推出中点函数值与积分平均值的严格大小；线性函数会取等号。
2. 对 $\int_0^1 f(x^2)\,dx$ 不作换元，容易看不出加权平均数是 $\frac13$；换元后权重是 $\frac1{2\sqrt t}$。
3. 凸凹方向易记反：$f''>0$ 是凸，$E[f(X)]\ge f(EX)$；$f''<0$ 是凹，不等式反向。

**命题规律**

本题属于“函数值 vs 积分值”的经典考法，常通过 $f''$ 符号与 Jensen 不等式或 Taylor 展开设计。排除干扰项常用线性函数、二次函数等简单例子。复习时应熟练掌握凸函数积分形式的 Jensen 不等式，并会算换元后的权重与一阶矩。


> 来源：《26_张宇四套卷（数一）》卷三 第 2 题
