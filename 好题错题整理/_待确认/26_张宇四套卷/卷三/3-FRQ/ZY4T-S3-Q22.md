---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - PS
  - 26_张宇四套卷/卷三/FRQ
  - 证明题
  - 二维均匀分布
  - 条件概率
  - 独立性判定
  - 分布函数
  - 几何面积积分
points:
level:
---

# 解答题 第 22 题

![[_Attachments/题目识别/ZY4T/ZY4T-S3-Q22_题目.png|题目]]

设随机变量 $(X,Y)$ 服从区域 $D = \{(x,y)|0 \leqslant x \leqslant 1, 1 - \sqrt{2x - x^2} \leqslant y \leqslant \sqrt{1 - x^2}\}$ 上的均匀分布，

记 $Z = \begin{cases} 1, & X+Y > 1, \\ 0, & X+Y \leqslant 1, \end{cases}$ $U = XZ$ 的分布函数为 $F_U(u)$ .

(1) 证明 $X$ 与 $Z$ 不相互独立；

(2) 计算 $F_U\left(\frac{1}{2}\right)$ 的值.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S3-Q22_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(1) $X$ 与 $Z$ 不独立。取 $x=\frac12$ 与 $x=\frac34$，得
$$
P(Z=1|X=\frac12)=\frac12,\quad P(Z=1|X=\frac34)=\frac{\sqrt7-1}{\sqrt7+\sqrt{15}-4}\ne\frac12.
$$
因此条件概率随 $x$ 变化，故不独立。

(2) $F_U(\frac12)=1-\frac{\pi/6-(\sqrt3+1)/8}{\pi/2-1}=\frac{8\pi+3\sqrt3-21}{12(\pi-2)}$。

关键给分点：求区域面积 $S_D$；求 $B=P(Z=1,X>\frac12)$ 对应面积；利用 $F_U(\frac12)=1-B/S_D$。

**解题切入点**

二维均匀分布中概率是面积比。前半题看条件概率 $P(Z=1|X=x)$ 是否恒为常数；后半题把 $\{U\le\frac12\}$ 转化为去掉 $\{Z=1,X>\frac12\}$。类似算法竞赛“几何概率 + 分情况统计”：先画区域，再按直线 $x+y=1$ 分割。

**推演**

1. 区域面积与密度。
$$
S_D=\int_0^1\left[\sqrt{1-x^2}-(1-\sqrt{2x-x^2})\right]dx
=\frac{\pi}{4}-\left(1-\frac{\pi}{4}\right)=\frac{\pi}{2}-1.
$$
故 $(X,Y)$ 的联合密度为 $1/S_D$。

2. 证明不独立。固定 $0<x<1$，令
$$
l(x)=1-\sqrt{2x-x^2},\quad u(x)=\sqrt{1-x^2}.
$$
在 $X=x$ 下，$Y$ 在 $[l(x),u(x)]$ 上均匀分布。又
$$
l(x)\le 1-x\le u(x)\quad(0<x<1),
$$
所以
$$
P(Z=1|X=x)=\frac{u(x)-(1-x)}{u(x)-l(x)}.
$$
代入 $x=\frac12$：
$$
P(Z=1|X=\frac12)=\frac{\sqrt3/2-1/2}{\sqrt3-1}=\frac12.
$$
代入 $x=\frac34$：
$$
P(Z=1|X=\frac34)=\frac{\sqrt7/4-1/4}{(\sqrt7+\sqrt{15}-4)/4}
=\frac{\sqrt7-1}{\sqrt7+\sqrt{15}-4}\ne\frac12.
$$
所以条件概率不是常数，$X$ 与 $Z$ 不独立。

3. 计算 $F_U(\frac12)$。因 $Z=0$ 时 $U=0$，$Z=1$ 时 $U=X$，故
$$
\{U>\frac12\}=\{Z=1,X>\frac12\}.
$$
于是
$$
F_U(\frac12)=1-P(Z=1,X>\frac12).
$$
对应的面积记为 $B$。在 $\frac12<x<1$ 内，事件还需 $y>1-x$，而 $y=1-x$ 不低于下边界，所以积分下界取 $1-x$：
$$
B=\int_{1/2}^1\left(\sqrt{1-x^2}-(1-x)\right)dx.
$$
其中
$$
\int_{1/2}^1\sqrt{1-x^2}dx
=\left[\frac12\left(x\sqrt{1-x^2}+\arcsin x\right)\right]_{1/2}^1
=\frac{\pi}{6}-\frac{\sqrt3}{8},
$$
$$
\int_{1/2}^1(1-x)dx=\frac18.
$$
因此
$$
B=\frac{\pi}{6}-\frac{\sqrt3}{8}-\frac18
=\frac{\pi}{6}-\frac{\sqrt3+1}{8}.
$$
所以
$$
F_U(\frac12)=1-\frac{B}{S_D}
=1-\frac{\pi/6-(\sqrt3+1)/8}{\pi/2-1}
=\frac{8\pi+3\sqrt3-21}{12(\pi-2)}.
$$
自检：$S_D\approx0.5708$，$B\approx0.1821$，故 $F_U(\frac12)\approx0.6810\in[0,1]$，合理。

**易错点**

- 不要把二维均匀密度 $1/S_D$ 漏掉；$F_U(\frac12)$ 是面积比。
- 事件 $\{U\le\frac12\}$ 包含 $Z=0$ 的全部概率，不能只算 $P(X\le\frac12)$。
- 在 $\{Z=1,X>\frac12\}$ 的积分中，下界应为直线 $1-x$，不是下弧 $1-\sqrt{2x-x^2}$。
- 判断独立性要用条件概率是否随 $x$ 变化，不能只凭“$Z$ 由 $X+Y$ 决定”断言。

**命题规律**

本类题常见于“二维均匀分布 + 区域分割 + 离散化随机变量”。做法是：先算区域面积，再用几何面积表示事件概率；遇到混合型 $U=XZ$ 时，按 $Z=0,1$ 分情况写分布函数。复习时多练圆域、直线/曲线围成区域的积分，并熟悉条件分布判断独立性。


> 来源：《26_张宇四套卷（数一）》卷三 第 22 题
