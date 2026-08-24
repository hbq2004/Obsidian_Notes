---
ctime: 2026-08-24 15:13:04
mtime: 2026-08-24 15:13:04
tags:
  - AM
  - 26_余丙森五套卷/卷五/FRQ
  - 综合题
  - 积分上限函数
  - 等价无穷小
  - 泰勒展开
  - 积分中值定理
  - 微分中值定理
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/YBS5T/YBS5T-S5-Q20_题目.png|题目]]

设函数 $f(x)$ 具有一阶连续导数，且 $f(0) f'(0) \neq 0$，(I) 证明：当 $x \to 0$ 时，$\int_{0}^{x} f(t)dt \sim f(0)x$；
(II) 求 $\lim_{x \to 0} \left[ \frac{1}{\int_{0}^{x} f(t)dt} - \frac{1}{xf(0)} \right]$；
(III) 当 $x \neq 0$ 时，证明：$\int_{0}^{x} f(t)dt = x f(\xi)$，其中 $\xi$ 介于 $x$ 与 $0$ 之间，并求 $\lim_{x \to 0} \frac{\xi}{x}$.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S5-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(I) $\int_0^x f(t)\,dt\sim f(0)x$。

(II) $\lim_{x\to0}\left[\frac{1}{\int_0^x f(t)\,dt}-\frac{1}{xf(0)}\right]=-\frac{f'(0)}{2[f(0)]^2}$。

(III) 积分中值定理给出 $\int_0^x f(t)\,dt=xf(\xi)$，其中 $\xi$ 介于 $x$ 与 $0$ 之间；且 $\lim_{x\to0}\frac{\xi}{x}=\frac12$。

关键给分点：第一问利用 $F'(0)=f(0)$；第二问展开到二阶并取极限；第三问先用积分中值定理，再用微分中值定理求 $\xi/x$。

**解题切入点**

把 $F(x)=\int_0^x f(t)\,dt$ 看作“前缀和”：第一问取一阶首项，第二问消去首项后看二阶修正，第三问用中值定理把 $\xi$ 显式化；$f(0)f'(0)\ne0$ 保证首项和一阶项都可作分母。

**推演**

设 $F(x)=\int_0^x f(t)\,dt$，则 $F(0)=0$，$F'(x)=f(x)$，$F'(0)=f(0)$。

(I) 由导数定义，
$$
\lim_{x\to0}\frac{F(x)}x=\lim_{x\to0}\frac{F(x)-F(0)}x=F'(0)=f(0)\ne0,
$$
故 $F(x)\sim f(0)x$，即 $\int_0^x f(t)\,dt\sim f(0)x$。

(II) 因 $f$ 在 $0$ 处可导，有
$$
f(t)=f(0)+f'(0)t+o(t)\quad(t\to0).
$$
积分得
$$
F(x)=f(0)x+\frac{f'(0)}2x^2+o(x^2).
$$
所以
$$
\frac{1}{F(x)}-\frac{1}{xf(0)}
=\frac{xf(0)-F(x)}{xf(0)F(x)}
=\frac{-\frac{f'(0)}2x^2+o(x^2)}{xf(0)\left[f(0)x+\frac{f'(0)}2x^2+o(x^2)\right]}
\to-\frac{f'(0)}{2[f(0)]^2}.
$$

(III) 先证等式。由积分中值定理，存在 $\xi$ 介于 $x$ 与 $0$ 之间，使
$$
\frac{1}{x}\int_0^x f(t)\,dt=f(\xi),
$$
即 $\int_0^x f(t)\,dt=xf(\xi)$。

再求极限。由上述展开式，
$$
\frac{F(x)}x=f(0)+\frac{f'(0)}2x+o(x).
$$
又 $f(\xi)=F(x)/x$，故
$$
f(\xi)-f(0)=\frac{f'(0)}2x+o(x).
$$
对 $f$ 在 $0$ 与 $\xi$ 之间用拉格朗日中值定理，存在 $\eta$ 介于 $0$ 与 $\xi$ 之间，使
$$
f(\xi)-f(0)=f'(\eta)\xi.
$$
于是
$$
f'(\eta)\xi=\frac{f'(0)}2x+o(x).
$$
因为 $x\to0$ 时 $\xi\to0$，$\eta\to0$，且 $f'$ 连续、$f'(0)\ne0$，所以 $f'(\eta)\to f'(0)$。两边除以 $x$ 后取极限，得
$$
\frac{\xi}{x}=\frac{\frac{f'(0)}2+o(1)}{f'(\eta)}\to\frac12.
$$

**易错点**

1. 不要把 $\int_0^x f(t)\,dt$ 等价成 $f(x)x$；首项应由 $F'(0)=f(0)$ 确定。
2. 第二问要展开到 $x^2$ 项，且结果是负号：$-\dfrac{f'(0)}{2[f(0)]^2}$。
3. $x<0$ 时积分中值定理仍为 $\int_0^x f(t)\,dt=xf(\xi)$，不要额外加负号。
4. 微分中值定理的 $\eta$ 介于 $0$ 与 $\xi$ 之间，不要与积分中值定理的 $\xi$ 混淆。

**命题规律**

本题综合考查积分上限函数、等价无穷小、Taylor 展开和两类中值定理，是典型的“条件 $f(0)f'(0)\ne0$ 控制一阶量”的命题结构。复习时应熟练将积分上限函数视为 $F(x)$ 展开，并掌握“先展开、再中值定理过渡”的求中值极限套路。


> 来源：《26_余丙森五套卷（数一）》卷五 第 20 题
