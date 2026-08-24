---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - AM
  - 26_李林六套卷/卷四/FRQ
  - 证明题
  - 函数求导
  - 极值判定
  - 零点存在性
  - 单调性分析
  - 构造函数证不等式
points:
level:
---

# 解答题 第 18 题

![[_Attachments/题目识别/LL6T/LL6T-S4-Q18_题目.png|题目]]

设 $ f(x) = \frac{(x-a)^2}{\ln x} (x>0) (0<a<1) $，若 $ f(x) $ 的 3个极值点为 $ x_1, x_2, x_3 $，且 $ x_1 < x_2 < x_3 $.
$ (I) $ 求 $ f(x) $ 的极大值；
$ (II) $ 证明：$ x_1 + x_3 > \frac{2}{\sqrt{e}} $.

![[_Attachments/题目识别/LL6T-答案/LL6T-S4-Q18_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$f(x)$ 的极大值为 $\boxed{0}$，极大值点为 $x=a$。三个极值点为 $x_1,x_2=a,x_3$，且 $x_1<\frac{1}{\sqrt e}<x_3$。关键给分点：① 正确求导，得到 $f'(x)=\frac{(x-a)(2\ln x-1+\frac ax)}{\ln^2x}$；② 用导数符号判定极大值点为 $x=a$，极大值为 $0$；③ 把极值点满足的方程化为 $x(1-2\ln x)=a$，构造辅助函数证明 $x_1+x_3>\frac{2}{\sqrt e}$。

**解题切入点**

本题可视为“求导找驻点 + 方程根的不等式估计”。先求导得驻点由 $x=a$ 和 $\varphi(x)=2\ln x-1+\frac ax=0$ 给出；证明不等式时将方程改写为 $h(x)=x(1-2\ln x)=a$，利用 $h$ 的单调性和凹性估算两交点横坐标之和，类似算法竞赛中“比较函数值”的技巧。

**推演**

（一）求导与驻点

定义域为 $x>0$ 且 $x\ne1$。对 $f(x)$ 求导：
$$
f'(x)=\frac{2(x-a)\ln x-(x-a)^2\cdot\frac1x}{\ln^2x}
=\frac{(x-a)(2\ln x-1+\frac ax)}{\ln^2x}.
$$
令 $f'(x)=0$，得
$$
x=a,\qquad 2\ln x-1+\frac ax=0. \tag{1}
$$

设 $\varphi(x)=2\ln x-1+\frac ax$，则
$$
\varphi'(x)=\frac2x-\frac a{x^2}=\frac{2x-a}{x^2}.
$$
所以 $\varphi$ 在 $(0,\frac a2)$ 上递减，在 $(\frac a2,+\infty)$ 上递增。又
$$
\lim_{x\to0^+}\varphi(x)=+\infty,\qquad
\varphi(\frac a2)=1+2\ln\frac a2<0,\qquad
\varphi(1)=a-1<0,\qquad
\lim_{x\to+\infty}\varphi(x)=+\infty.
$$
因此方程 $\varphi(x)=0$ 恰有两个根，记为 $x_1\in(0,\frac a2)$，$x_3\in(1,+\infty)$。于是 $f$ 的三个驻点为 $x_1,x_2=a,x_3$。

（二）极值判定

由 $\varphi$ 的符号及 $x-a$ 的符号：
- 在 $(0,x_1)$：$x-a<0,\varphi>0\Rightarrow f'<0$；
- 在 $(x_1,a)$：$x-a<0,\varphi<0\Rightarrow f'>0$；
- 在 $(a,1)\cup(1,x_3)$：$x-a>0,\varphi<0\Rightarrow f'<0$；
- 在 $(x_3,+\infty)$：$x-a>0,\varphi>0\Rightarrow f'>0$。

所以 $x_1$ 为极小值点，$x_2=a$ 为极大值点，$x_3$ 为极小值点。极大值为
$$
f(a)=\frac{(a-a)^2}{\ln a}=0.
$$

（三）证明 $x_1+x_3>\frac{2}{\sqrt e}$

由 $\varphi(x_1)=\varphi(x_3)=0$ 得
$$
a=x_1(1-2\ln x_1)=x_3(1-2\ln x_3).
$$
令 $h(x)=x(1-2\ln x)$，则 $h(x_1)=h(x_3)=a$。

求导：
$$
h'(x)=-1-2\ln x,\qquad h''(x)=-\frac2x<0.
$$
故 $h$ 在 $(0,\frac{1}{\sqrt e})$ 上递增，在 $(\frac{1}{\sqrt e},+\infty)$ 上递减，最大值
$$
h\left(\frac{1}{\sqrt e}\right)=\frac{2}{\sqrt e}.
$$
又 $h(1)=1>a$，所以 $x_1<\frac{1}{\sqrt e}<x_3$。

令 $t=\frac{1}{\sqrt e}$，$u=\frac{x_1}{t}\in(0,1)$，$v=\frac{x_3}{t}>1$。定义 $F(s)=s(1-\ln s)$，则
$$
F(u)=F(v)=\frac{a}{2t}.
$$

下面证明 $u+v>2$。设 $w=2-u$，则 $1<w<2$。记 $H(u)=F(2-u)-F(u)$，$0<u<1$。因为 $F'(s)=-\ln s$，所以
$$
H'(u)=\ln[u(2-u)].
$$
又 $u(2-u)=1-(1-u)^2<1$，故 $H'(u)<0$，$H$ 在 $(0,1)$ 上单调递减，且 $H(1)=0$，所以 $H(u)>0$，即 $F(2-u)>F(u)$。

因为 $F$ 在 $(1,+\infty)$ 上单调递减，且 $F(v)=F(u)<F(2-u)$，所以 $v>2-u$，即 $u+v>2$。于是
$$
x_1+x_3=t(u+v)>2t=\frac{2}{\sqrt e}.
$$
证毕。

**易错点**

1. 容易忽略 $x=1$ 处无定义，导致在 $(a,1)\cup(1,x_3)$ 上讨论导数符号时出错。
2. 求驻点时，$x=a$ 和方程 $\varphi(x)=0$ 的根不能漏；还要注意 $x=a$ 不是 $\varphi(x)=0$ 的根。
3. 证明不等式时，若只由 $x_1<\frac{1}{\sqrt e}<x_3$ 直接推出 $x_1+x_3>\frac{2}{\sqrt e}$ 是错误的，必须使用辅助函数。
4. 极大值点 $x=a$ 处 $f(a)=0$，不要误以为极大值必须为正。

**命题规律**

本题是“导数与极值 + 方程根的不等式”的综合题，常见套路是：先求导，再利用零点定理/单调性确定极值点个数；证明不等式时，把极值点满足的条件改造成某个辅助函数与水平线的交点，用单调性或凹凸性估计交点之和。复习时应熟练掌握“求导找驻点—判单调—构造函数”的流程，并多练习与 $\ln x$、$e$ 有关的函数不等式。


> 来源：《26_李林六套卷（数一）》卷四 第 18 题
