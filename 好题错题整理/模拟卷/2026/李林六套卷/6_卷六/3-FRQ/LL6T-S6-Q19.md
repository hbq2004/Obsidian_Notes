---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - AM
  - 26_李林六套卷/卷六/FRQ
  - 证明题
  - 一阶线性微分方程
  - 积分因子法
  - 分式线性递推
  - 不动点迭代
  - 等比数列收敛
points:
level:
---

# 解答题 第 19 题

![[_Attachments/题目识别/LL6T/LL6T-S6-Q19_题目.png|题目]]

(19)(本题满分 12 分)设 $f(x)(x \geqslant 0)$ 满足 $(a+x)f'(x)+f(x)=a$，$f(0)=1$，其中 $a \geqslant \frac{1}{2}$ 且 $a \neq 1$.

(I) 求 $f(x)$;

(II) 设 $x_1>0$，$x_{n+1}=f(x_n)(n=1,2,\cdots)$，证明 $\lim_{n \to \infty}x_n$ 存在，并求其值.

![[_Attachments/题目识别/LL6T-答案/LL6T-S6-Q19_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(I) $f(x)=\dfrac{a(x+1)}{a+x}\ (x\ge 0)$。

(II) 对任意 $x_1>0$，数列 $\{x_n\}$ 收敛，且 $\lim_{n\to\infty}x_n=\sqrt a$。

关键给分点：解一阶线性方程时使用积分因子 $a+x$；由 $f(0)=1$ 定常数；令 $t_n=\dfrac{x_n-\sqrt a}{x_n+\sqrt a}$ 证明 $t_{n+1}=\dfrac{a-\sqrt a}{a+\sqrt a}t_n$；由 $\left|\dfrac{a-\sqrt a}{a+\sqrt a}\right|<1$ 得 $t_n\to0$，故 $x_n\to\sqrt a$。

**解题切入点**

本题第一部分是标准一阶线性 ODE，用积分因子即可；第二部分是分式线性递推，核心是“不动点 + 共轭替换”。令 $r=\sqrt a$，比值 $t_n=\frac{x_n-r}{x_n+r}$ 会被迭代映成等比数列，类似算法竞赛中把递推式配凑成可等比化的形式。

**推演**

令 $r=\sqrt a$。因 $a\ge 1/2$，$r>0$，且 $a\ne1$ 使 $r\ne1$。

(I) 原方程可写为

$$f'(x)+\frac{1}{a+x}f(x)=\frac{a}{a+x}.$$

取积分因子 $\mu(x)=\exp\left(\int\frac{dx}{a+x}\right)=a+x$，则

$$\bigl((a+x)f(x)\bigr)'=(a+x)f'(x)+f(x)=a.$$

积分得

$$(a+x)f(x)=ax+C.$$

由 $f(0)=1$ 得 $C=a$，所以

$$f(x)=\frac{a(x+1)}{a+x}.$$

（可回代验证：$f'(x)=\frac{a(a-1)}{(a+x)^2}$，满足原方程。）

(II) 先看 $x_n>0$：$x_1>0$，且 $x>0$ 时 $f(x)>0$，故所有 $x_n>0$。设

$$t_n=\frac{x_n-r}{x_n+r}.$$

因为 $x_n>0$，$t_n\in(-1,1)$。由

$$f(x)-r=\frac{a(x+1)}{a+x}-r=\frac{a-r}{a+x}(x-r),$$

$$f(x)+r=\frac{a(x+1)}{a+x}+r=\frac{a+r}{a+x}(x+r),$$

相除得

$$t_{n+1}=\frac{f(x_n)-r}{f(x_n)+r}=\frac{a-r}{a+r}\,t_n.$$

记 $q=\frac{a-r}{a+r}=\frac{r-1}{r+1}$。因 $r>0$ 且 $r\ne1$，所以 $|q|<1$。于是

$$t_n=q^{n-1}t_1\to0.$$

最后由

$$x_n=r\frac{1+t_n}{1-t_n}$$

得

$$\lim_{n\to\infty}x_n=r=\sqrt a.$$

**易错点**

- 解 ODE 时不要把常数定错：$(a+x)f(x)=ax+C$，由 $f(0)=1$ 得 $C=a$，不是 $C=1$。

- 不动点由 $x=f(x)$ 得 $x^2=a$，取 $x=\sqrt a$，不要误写成 $a$ 或 $1$。

- 当 $a<1$ 时 $f$ 单调递减，$q<0$，此时用单调有界容易出错；用比值 $t_n$ 化为等比数列可统一处理 $a>1$ 与 $a<1$。

- $a=1$ 已排除；若用 $q=\frac{r-1}{r+1}$，$|q|<1$ 需要 $r\ne1$。

**命题规律**

本题是“一阶线性微分方程 + 递推数列极限”的综合题。先解出迭代函数，再通过不动点和分式线性变换把非线性递推化为等比数列。复习时应熟悉一阶线性 ODE 的积分因子法，以及形如 $x_{n+1}=\frac{ax+b}{cx+d}$ 的递推用不动点比值法求极限；它也可以与压缩映射、单调有界等思路结合。


> 来源：《26_李林六套卷（数一）》卷六 第 19 题
