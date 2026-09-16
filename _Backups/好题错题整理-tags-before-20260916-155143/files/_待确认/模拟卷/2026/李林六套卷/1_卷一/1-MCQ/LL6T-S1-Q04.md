---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - AM
  - 26_李林六套卷/卷一/MCQ
  - 概念题
  - 极限与导数定义
  - 等价无穷小
  - 极限比较判别法
  - 莱布尼茨判别法
  - p级数
points:
level:
---

# 选择题 第 4 题

![[_Attachments/题目识别/LL6T/LL6T-S1-Q04_题目.png|题目]]

设 $f(x)$ 有一阶连续导数，且 $\lim_{x\to 0} \frac{f(x)}{x} = 1$，$a_n = f(\frac{1}{n})$，$n = 1, 2, \cdots$，则

(A) $\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ 收敛，$\sum_{n=1}^{\infty} a_n$ 收敛.
(B) $\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ 发散，$\sum_{n=1}^{\infty} a_n^2$ 收敛.
(C) $\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ 发散，$\sum_{n=1}^{\infty} a_n$ 收敛.
(D) $\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ 收敛，$\sum_{n=1}^{\infty} a_n^2$ 收敛.

![[_Attachments/题目识别/LL6T-答案/LL6T-S1-Q04_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(D)。

由题设可推出 $f(0)=0$，$f'(0)=1$，故 $a_n=f(1/n)\sim 1/n$。因此 $\sum a_n$ 发散，$\sum a_n^2$ 收敛；又 $f'(x)>0$ 在 $0$ 附近成立，所以 $a_n$ 从某项起单调递减趋于 $0$，故 $\sum (-1)^{n-1}a_n$ 收敛。选项 (A)(C) 中 $\sum a_n$ 收敛错误，(B) 中交错级数发散错误，故正确选项为 (D)。

**解题切入点**

核心是把 $f(x)$ 在 $x=0$ 处的局部线性主部写出来：$f(x)\sim x$，于是 $a_n\sim 1/n$。像算法竞赛看渐进复杂度一样：$\sum a_n$ 与调和级数同阶，发散；$\sum a_n^2$ 与 $\sum 1/n^2$ 同阶，收敛；交错级数再用连续导数保证的单调性收敛。

**推演**

（1）由 $\lim_{x\to 0}\frac{f(x)}{x}=1$，有
$$
\lim_{x\to0}f(x)=\lim_{x\to0}x\cdot\frac{f(x)}{x}=0.
$$
因 $f$ 连续，$f(0)=0$。于是
$$
f'(0)=\lim_{x\to0}\frac{f(x)-f(0)}{x}=\lim_{x\to0}\frac{f(x)}{x}=1.
$$
所以
$$
f(x)=f(0)+f'(0)x+o(x)=x+o(x)\quad(x\to0).
$$
令 $x=1/n$，得
$$
a_n=f\left(\frac1n\right)=\frac1n+o\left(\frac1n\right),
$$
即 $\lim_{n\to\infty} n a_n=1$，故 $a_n>0$ 且 $a_n\sim\frac1n$。

（2）判断 $\sum a_n$：因 $a_n>0$（从某项起），且
$$
\lim_{n\to\infty}\frac{a_n}{1/n}=1>0,
$$
与调和级数 $\sum\frac1n$ 同敛散，所以 $\sum a_n$ 发散。故 (A)(C) 错。

（3）判断 $\sum a_n^2$：
$$
\lim_{n\to\infty}\frac{a_n^2}{1/n^2}=\left(\lim_{n\to\infty} n a_n\right)^2=1,
$$
与 $\sum\frac1{n^2}$ 同敛散，所以 $\sum a_n^2$ 收敛。

（4）判断 $\sum (-1)^{n-1}a_n$：由 $f'(0)=1>0$ 且 $f'$ 连续，存在 $\delta>0$，使在 $(0,\delta)$ 上 $f'(x)>\frac12>0$。因此 $f$ 在 $(0,\delta)$ 上严格递增。当 $n$ 充分大时 $0<\frac1{n+1}<\frac1n<\delta$，故
$$
a_{n+1}=f\left(\frac1{n+1}\right)<f\left(\frac1n\right)=a_n,
$$
且 $a_n\to0$。由莱布尼茨判别法，$\sum_{n=1}^{\infty}(-1)^{n-1}a_n$ 收敛。故 (B) 错，(D) 对。

**易错点**

- 容易把 $a_n\sim 1/n$ 只用于判断正项级数，而不验证交错级数的单调递减；仅 $a_n\to0$ 不能保证交错级数收敛。
- 注意 $\lim_{n\to\infty} n a_n=1$ 说明 $\sum a_n$ 发散而非收敛，不要与 $\sum a_n^2$ 的收敛混淆。
- 不要忽略 $f'(0)=1$ 的推导；连续性用于保证导数在邻域内同号，从而 $a_n$ 单调。

**命题规律**

这类题把函数极限、导数定义与数项级数判别组合在一起，核心是局部等价无穷小：由 $f(x)\sim x$ 得 $a_n\sim 1/n$。复习时熟记：正项级数用极限比较与 $p$ 级数，交错级数用莱布尼茨判别法，并会由导数符号判断通项单调性。


> 来源：《26_李林六套卷（数一）》卷一 第 4 题
