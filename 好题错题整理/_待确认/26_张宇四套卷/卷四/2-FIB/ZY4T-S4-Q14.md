---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - AM
  - 26_张宇四套卷/卷四/FIB
  - 计算题
  - 格林公式
  - 第二类曲线积分
  - 二重积分计算
  - 有理函数积分
  - 反三角函数积分
points:
level:
---

# 填空题 第 14 题

![[_Attachments/题目识别/ZY4T/ZY4T-S4-Q14_题目.png|题目]]

设 $L$ 是以 $(1,-1)$，$(2,-1)$，$(2,1)$，$(1,1)$ 为顶点的矩形的边界构成的逆时针封闭曲线，则
$$ \oint_L x e^{-y^2} dx + \left( \frac{1}{x^2+y^2} - x^2 y e^{-y^2} \right) dy = \_ . $$

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S4-Q14_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由格林公式，原积分
$$
\oint_L x e^{-y^2} dx + \left( \frac{1}{x^2+y^2} - x^2 y e^{-y^2} \right) dy
= \iint_D \left(Q_x-P_y\right) dxdy
= -\arctan 2 .
$$

【答案】: $\boxed{-\arctan 2}$

**解题切入点**

封闭曲线上的第二类曲线积分优先考虑格林公式：把曲线积分化为区域上的二重积分，再消去可抵消项。类似算法竞赛中用“前缀和”把区间求和转成端点差，这里把环路积分转成区域积分，计算量大幅下降。

**推演**

设
$$
P=x e^{-y^2},\qquad Q=\frac{1}{x^2+y^2}-x^2 y e^{-y^2},
$$
区域 $D=[1,2]\times[-1,1]$，原点不在 $D$ 内，故格林公式可用，且曲线为逆时针，符号为正。

计算偏导数：
$$
P_y=-2xy e^{-y^2},
$$
$$
Q_x=-\frac{2x}{(x^2+y^2)^2}-2xy e^{-y^2}.
$$
于是
$$
Q_x-P_y=-\frac{2x}{(x^2+y^2)^2}.
$$
所以
$$
I=\oint_L Pdx+Qdy
=-2\int_1^2 x\int_{-1}^1 \frac{dy}{(x^2+y^2)^2}\,dx.
$$

先算内层积分（把 $x$ 视为常数）：
$$
\int_{-1}^1 \frac{dy}{(x^2+y^2)^2}
=
\left[\frac{y}{2x^2(x^2+y^2)}+\frac{1}{2x^3}\arctan\frac{y}{x}\right]_{-1}^{1}
=
\frac{1}{x^2(x^2+1)}+\frac{1}{x^3}\arctan\frac{1}{x}.
$$
因此
$$
I=-2\int_1^2
\left[
\frac{1}{x(x^2+1)}
+\frac{1}{x^2}\arctan\frac{1}{x}
\right]dx.
$$

分别计算：
$$
\frac{1}{x(x^2+1)}=\frac{1}{x}-\frac{x}{x^2+1},
$$
故
$$
\int_1^2 \frac{1}{x(x^2+1)}dx
=
\left[\ln x-\frac12\ln(x^2+1)\right]_1^2
=
\frac12\ln\frac85.
$$

又令 $u=\frac1x$，则 $du=-\frac{1}{x^2}dx$，所以
$$
\int_1^2\frac{1}{x^2}\arctan\frac1x dx
=\int_{1/2}^{1}\arctan u\,du.
$$
而
$$
\int \arctan u\,du = u\arctan u-\frac12\ln(1+u^2),
$$
故
$$
\int_{1/2}^{1}\arctan u\,du
=
\frac{\pi}{4}-\frac12\arctan\frac12+\frac12\ln\frac58.
$$

两式相加，对数项抵消：
$$
\int_1^2 \left[\frac{1}{x(x^2+1)}+\frac{1}{x^2}\arctan\frac1x\right]dx
=
\frac{\pi}{4}-\frac12\arctan\frac12.
$$
所以
$$
I=-2\left(\frac{\pi}{4}-\frac12\arctan\frac12\right)
=-\frac{\pi}{2}+\arctan\frac12.
$$
由 $\arctan t+\arctan\frac1t=\frac{\pi}{2}\ (t>0)$，取 $t=2$，得
$$
\arctan\frac12-\frac{\pi}{2}=-\arctan 2.
$$
故原积分为
$$
\boxed{-\arctan 2}.
$$

**易错点**

1. 不要漏掉 $\frac{1}{x^2+y^2}$ 对 $x$ 求导产生的 $-\frac{2x}{(x^2+y^2)^2}$；同时 $P_y$ 与 $Q$ 中第二项的偏导会抵消，若未算出抵消会陷入复杂积分。
2. 格林公式要求曲线为正向（逆时针），本题逆时针为正；若换成顺时针，结果要变号。
3. 内层 $\int \frac{dy}{(x^2+y^2)^2}$ 需用 $\arctan$ 型积分公式，注意 $x$ 是常数；不要将 $x$ 误当变量。
4. 最后的 $\arctan\frac12-\frac\pi2$ 应化为 $-\arctan2$，便于填空。

**命题规律**

这类题常把格林公式、二重积分与有理函数/反三角函数积分结合，并设置看似复杂的指数项，实际在格林公式求导后抵消。复习时看到封闭曲线第二类曲线积分先想格林公式，平时熟记 $\int\frac{dy}{(a^2+y^2)^2}$ 型公式，并注意区域是否含奇点。


> 来源：《26_张宇四套卷（数一）》卷四 第 14 题
