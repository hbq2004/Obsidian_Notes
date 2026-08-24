---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷五/FRQ
  - 计算题
  - 极坐标变换
  - 二重积分
  - 常数回代
  - 积分方程
points:
level:
---

# FRQ 第 17 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S5-Q17_题目.png|题目]]

设 $f(x,y)$ 在 $D=\{(x,y)|x^2+y^2 \le 1\}$ 上连续，$f(x,y)=e^{x^2+y^2}-\iint_D \frac{(2x^2+1)f(x,y)}{x^2+y^2+1} \mathrm{d}x\mathrm{d}y$，求 $\iint_D f(x,y)\mathrm{d}x\mathrm{d}y$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S5-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

\[\iint_D f(x,y)\,dxdy=\frac{\pi(e-1)}{1+\pi}.\]

关键给分点：设常数 $B=\iint_D\frac{(2x^2+1)f(x,y)}{x^2+y^2+1}\,dxdy$，得 $f=e^{x^2+y^2}-B$；用极坐标算出 $\iint_D\frac{2x^2+1}{x^2+y^2+1}\,dxdy=\pi$，以及 $\iint_D\frac{2x^2+1}{x^2+y^2+1}e^{x^2+y^2}\,dxdy=\pi(e-1)$；回代解出 $B$，再积分得结果。

**解题切入点**

题干右侧的二重积分是一个常数，不是 $x,y$ 的函数。这就像算法竞赛里“未知数在等号两边出现”时先设未知数，再用同一表达式回代消元。本题设 $B$ 为这一常数，原式化为 $f=e^{x^2+y^2}-B$，再用极坐标算两个关于 $r$ 的一元积分。

**推演**

设
\[B=\iint_D \frac{(2x^2+1)f(x,y)}{x^2+y^2+1}\,dxdy,\qquad I=\iint_D f(x,y)\,dxdy.\]
由题设
\[f(x,y)=e^{x^2+y^2}-B.\]
代入 $B$ 的定义：
\[B=\iint_D \frac{2x^2+1}{x^2+y^2+1}(e^{x^2+y^2}-B)\,dxdy=C-BJ,\]
其中
\[J=\iint_D \frac{2x^2+1}{x^2+y^2+1}\,dxdy,\qquad C=\iint_D \frac{2x^2+1}{x^2+y^2+1}e^{x^2+y^2}\,dxdy.\]

取极坐标 $x=r\cos\theta,\ y=r\sin\theta$，$D:0\le r\le1,\ 0\le\theta\le2\pi$，$dxdy=r\,dr\,d\theta$。

角向部分先算：
\[\int_0^{2\pi}(2r^2\cos^2\theta+1)\,d\theta=2\pi(r^2+1).\]
于是
\[J=\int_0^1\frac{2\pi(r^2+1)}{r^2+1}r\,dr=2\pi\int_0^1 r\,dr=\pi.\]
同理
\[C=\int_0^1\frac{2\pi(r^2+1)}{r^2+1}e^{r^2}r\,dr=2\pi\int_0^1 re^{r^2}\,dr=\pi(e-1).\]
因此
\[B(1+J)=C\Rightarrow B=\frac{C}{1+J}=\frac{\pi(e-1)}{1+\pi}.\]
最后
\[I=\iint_D(e^{x^2+y^2}-B)\,dxdy=\int_0^{2\pi}\int_0^1 e^{r^2}r\,dr\,d\theta-\pi B.\]
而
\[\int_0^{2\pi}\int_0^1 e^{r^2}r\,dr\,d\theta=2\pi\cdot\frac{e-1}{2}=\pi(e-1).\]
所以
\[I=\pi(e-1)-\pi\cdot\frac{\pi(e-1)}{1+\pi}=\frac{\pi(e-1)}{1+\pi}.\]

**易错点**

1. 不要把 $B$ 误当成 $x,y$ 的函数；$B$ 是定积分常数。
2. 极坐标换元时漏掉 $r$ 因子，会导致 $J,C$ 计算错误。
3. 角向积分 $\int_0^{2\pi}\cos^2\theta\,d\theta=\pi$ 不要写成 $2\pi$。
4. 最终求 $I$ 时要减去 $\pi B$，而不是 $B$ 本身。

**命题规律**

这类题把二重积分与函数方程结合，核心是“常数回代 + 极坐标”。平时复习要熟练计算单位圆上 $x^2,y^2,r^2$ 的积分，见到积分号内有 $f$ 且积分结果与自变量无关时，立即设常数列方程。


> 来源：《26_张宇八套卷（数一）》卷五 第 17 题
