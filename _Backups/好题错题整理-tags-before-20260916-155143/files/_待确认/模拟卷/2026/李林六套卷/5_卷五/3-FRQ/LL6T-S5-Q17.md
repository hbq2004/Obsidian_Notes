---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - AM
  - 26_李林六套卷/卷五/FRQ
  - 计算题
  - 泰勒展开
  - 等价无穷小
  - 积分换元
  - 导数定义
points:
level:
---

# 解答题 第 17 题

![[_Attachments/题目识别/LL6T/LL6T-S5-Q17_题目.png|题目]]

设 $f(x)$ 为连续函数，$\lim_{x \to 0} \frac{x f(x) - \ln(1+x)}{x^2} = 1$，当 $x \to 0$ 时，$\int_{0}^{x} 2t f(x-t) dt - x^2$ 与 $a x^n (a \neq 0)$ 为等价无穷小，求 $f'(0)$ 及 $a$ 与 $n$ 的值.

![[_Attachments/题目识别/LL6T-答案/LL6T-S5-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**：$f'(0)=\frac{1}{2}$，$a=\frac{1}{6}$，$n=3$。

**解题切入点**：利用已知极限结合泰勒展开反推 $f'(0)$；对含参变量积分作换元化为标准形式，再泰勒展开至三阶。

**推演**：

1. 由 $\lim\limits_{x\to0}\frac{x f(x)-\ln(1+x)}{x^2}=1$，由于 $\ln(1+x)=x-\frac{x^2}{2}+O(x^3)$，故分子 $x f(x)-\ln(1+x)=x(f(x)-1)+\frac{x^2}{2}+O(x^3)$。除以 $x^2$ 取极限，得 $\lim_{x\to0}\frac{f(x)-1}{x}+\frac12=1$，故 $\lim_{x\to0}\frac{f(x)-1}{x}=\frac12$，即 $f'(0)=\frac12$。

2. 令 $u=x-t$，则 $t=x-u$，$dt=-du$，积分变为 $\int_0^x 2(x-u)f(u)du$。因此 $I(x)=\int_0^x 2(x-u)f(u)du-x^2$。

3. 将 $f(u)$ 在 $u=0$ 处展开：$f(u)=1+\frac12 u+o(u)$。代入得
$$I(x)=2\int_0^x (x-u)\left(1+\frac12 u+o(u)\right)du-x^2$$
$$=2\left[\int_0^x (x-u)du+\frac12\int_0^x (x-u)u du+\int_0^x (x-u)o(u)du\right]-x^2$$
其中 $\int_0^x (x-u)du=\frac{x^2}{2}$，$\frac12\int_0^x (x-u)u du=\frac12\cdot\frac{x^3}{6}=\frac{x^3}{12}$，高阶项为 $o(x^3)$。所以
$$I(x)=2\left(\frac{x^2}{2}+\frac{x^3}{12}+o(x^3)\right)-x^2=\frac{x^3}{6}+o(x^3)$$
故 $I(x)\sim\frac{x^3}{6}$，因此 $a=\frac16, n=3$。

**易错点**：易错于直接对被积函数中的 $x-t$ 求导，应先换元；或忽略 $f(0)=1$ 的推导；对 $f(u)$ 只展到一阶即可，因为积分后出现 $x^3$ 项，二阶会贡献 $x^4$，不影响主项。

**命题规律**：本题考察极限与等价无穷小的结合，通常需先由极限反推函数值及导数值，再通过变量代换将复杂积分转化为标准形式。复习时注意泰勒展开的阶数匹配和积分变量的处理。


> 来源：《26_李林六套卷（数一）》卷五 第 17 题
