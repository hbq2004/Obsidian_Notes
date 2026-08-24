---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷五/FIB
  - 计算题
  - 连续函数性质
  - 分段函数积分
  - 换元积分法
  - 分部积分法
  - 原函数连续性
points:
level:
---

# FIB 第 12 题

![[_Attachments/题目识别/YBS5T/YBS5T-S5-Q12_题目.png|题目]]

设连续函数 $f(x) = \begin{cases} ax+1, & x \geqslant 0, \\ a - e^x, & x < 0, \end{cases}$ 其中 $a$ 为常数, 则 $\int f(\ln x) \mathrm{d}x = \_\_\_\_\_\_$.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S5-Q12_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$$\boxed{\int f(\ln x)\mathrm{d}x = \begin{cases} 2x\ln x - x + \frac{5}{2} + C, & x \ge 1, \\ 2x - \frac{x^2}{2} + C, & 0 < x < 1 \end{cases}}$$

其中$C$为任意常数。

**解题切入点**

本题考查连续函数确定参数、分段函数积分、换元积分法与分部积分法。破题关键在于先利用$f(x)$在$x=0$连续求出$a$，然后写出$f(\ln x)$的分段形式，再分段积分，并利用原函数在$x=1$处的连续性统一常数。

**推演**

1. 由$f(x)$在$x=0$连续得$\lim\limits_{x\to0^-}f(x)=\lim\limits_{x\to0^+}f(x)$，即$a-1=1$，解得$a=2$。

2. 当$x>0$时，

$$f(\ln x)=\begin{cases} 2\ln x+1, & x\ge1,\\ 2-x, & 0<x<1. \end{cases}$$

3. 分段积分：当$x\ge1$时，$\int(2\ln x+1)\mathrm{d}x=2\int\ln x\mathrm{d}x+\int\mathrm{d}x=2x\ln x-2x+x+C_1=2x\ln x-x+C_1$；当$0<x<1$时，$\int(2-x)\mathrm{d}x=2x-\frac{x^2}{2}+C_2$。

4. 由于被积函数连续，原函数在$x=1$处连续，故

$$\lim_{x\to1^+}(2x\ln x-x+C_1)=\lim_{x\to1^-}\left(2x-\frac{x^2}{2}+C_2\right),$$

即$C_1-1=2-\frac12+C_2$，得$C_1=C_2+\frac52$。

5. 令$C_2=C$（任意常数），则$C_1=C+\frac52$，代入得原函数表达式。

**易错点**

- 忘记利用连续性确定$a$，导致后续计算错误。
- 分部积分时$\int\ln x\mathrm{d}x=x\ln x-x+C$易错。
- 分段积分后未考虑原函数在$x=1$处的连续性，导致常数关系错误。
- 换元时忽略定义域，或直接使用$t=\ln x$后忘记回代。

**命题规律**

此类题目常将连续条件与分段函数积分结合，考查参数确定与基本积分技巧。复习时需熟练掌握分段函数积分方法，注意原函数连续性对常数的影响，并强化分部积分与换元积分的计算。


> 来源：《26_余丙森五套卷（数一）》卷五 第 12 题
