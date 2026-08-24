---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷一/FRQ
  - 综合题
  - 多元复合函数求偏导
  - 一阶线性微分方程
  - 垂直渐近线
  - 斜渐近线
points:
level:
---

# FRQ 第 18 题

![[_Attachments/题目识别/YBS5T/YBS5T-S1-Q18_题目.png|题目]]

设函数 $f(u)$ 在 $(0,+\infty)$ 内可导， $z=xf(\frac{y}{x})+y$ 满足关系式 $x\frac{\partial z}{\partial x}-y\frac{\partial z}{\partial y}=2z$，且 $f(1)=1$，求曲线 $y=f(x)$ 的渐近线.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S1-Q18_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

曲线 $f(x)=2/\sqrt{x}-x$（$x>0$），故其渐近线为：

- 垂直渐近线：$x=0$；
- 斜渐近线：$y=-x$。

关键给分点：偏导数计算、化为一阶线性微分方程、定出 $f$、按定义验证渐近线。

**解题切入点**

将复合函数 $z=xf(y/x)+y$ 求导后，条件 $xz_x-yz_y=2z$ 会化简为只含 $u=y/x$ 的一阶 ODE；这相当于把二维关系降维成一维递推，解出 $f$ 后再用渐近线极限定义判定。

**推演**

令 $u=\frac{y}{x}$，则
$$
z_x=f(u)-\frac{y}{x}f'(u)=f(u)-uf'(u),
\qquad
z_y=f'(u)+1.
$$
所以
$$
xz_x-yz_y
=x[f(u)-uf'(u)]-y[f'(u)+1]
=xf(u)-y-2yf'(u).
$$
代入 $xz_x-yz_y=2z=2xf(u)+2y$，得
$$
xf(u)-y-2yf'(u)=2xf(u)+2y,
$$
即
$$
x[f(u)+3u+2uf'(u)]=0,\quad u=\frac yx.
$$
因 $x\ne0$，得
$$
2uf'(u)+f(u)+3u=0.
$$
这是一阶线性微分方程：
$$
f'(u)+\frac1{2u}f(u)=-\frac32.
$$
积分因子为 $\sqrt u$，故
$$
(\sqrt u f(u))'=-\frac32\sqrt u,
$$
积分得
$$
\sqrt u f(u)=-u^{3/2}+C,
$$
所以
$$
f(u)=-u+\frac{C}{\sqrt u}.
$$
由 $f(1)=1$，得 $-1+C=1$，所以 $C=2$。于是
$$
f(x)=\frac{2}{\sqrt x}-x,\quad x>0.
$$

渐近线：

- 因为 $\lim\limits_{x\to0^+}f(x)=+\infty$，所以 $x=0$ 是垂直渐近线。
- 因为
$$
\lim_{x\to+\infty}\frac{f(x)}x
=\lim_{x\to+\infty}\left(\frac2{x^{3/2}}-1\right)=-1,
$$
且
$$
\lim_{x\to+\infty}[f(x)+x]=\lim_{x\to+\infty}\frac2{\sqrt x}=0,
$$
所以 $y=-x$ 是斜渐近线。

因此曲线只有两条渐近线：$x=0$ 与 $y=-x$。

**易错点**

- 求 $z_x$ 时容易漏掉 $f$ 中 $y/x$ 对 $x$ 的导数，或忘记 $z_y$ 中常数项 $1$。
- 化简 $xz_x-yz_y$ 时注意 $y=xu$，不要丢掉 $-2yf'(u)$ 中的系数 $2$。
- 判断斜渐近线必须按 $\lim f(x)/x$ 和 $\lim(f(x)-ax)$ 两个极限算，不能只凭等价式。
- 函数定义域为 $x>0$，垂直渐近线只看 $x\to0^+$，不要把 $x<0$ 纳入。

**命题规律**

本题把多元复合函数求导、一阶线性微分方程和渐近线三个考点串在一起：先由偏导数关系得到关于 $f$ 的常微分方程，再求函数并讨论渐近线。复习时多练“关系式 + 初值”的转化题，并熟练渐近线的极限判定。


> 来源：《26_余丙森五套卷（数一）》卷一 第 18 题
