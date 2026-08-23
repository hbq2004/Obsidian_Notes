---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - AM
  - 26_姜晓千四套卷/卷三/FIB
  - 计算题
  - 可微与导数关系
  - 凑微分法
  - 换元积分法
  - 定积分几何意义
  - 半圆面积公式
points:
level:
---

# FIB 第 12 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S3-Q12_题目.png|题目]]

设 $y=y(x)$ 满足 $\Delta y = \frac{1-x}{\sqrt{2x-x^2}}\Delta x + o(\Delta x)$，且 $y(1)=1$，则 $\int_1^2 y(x)dx = \_\_\_\_\_\_$.

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S3-Q12_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由 $\Delta y=A(x)\Delta x+o(\Delta x)$ 知 $y'(x)=A(x)=\frac{1-x}{\sqrt{2x-x^2}}$。解得 $y(x)=\sqrt{2x-x^2}$，故

$$
\int_1^2 y(x)\,dx=\int_0^1\sqrt{1-u^2}\,du=\frac{\pi}{4}.
$$

填空题【答案】:

$$\boxed{\frac{\pi}{4}}$$

**解题切入点**

看到 $\Delta y=\cdots\Delta x+o(\Delta x)$，本质是可微定义，直接读出导数；再由导数反求原函数并积分。类似算法竞赛中“由差分序列还原原序列再做前缀和”：先解出 $y(x)$，再求 $\int_1^2 y(x)\,dx$。

**推演**

1. 由可微定义：若 $\Delta y=A(x)\Delta x+o(\Delta x)$，则 $y'(x)=A(x)$。因此

$$
y'(x)=\frac{1-x}{\sqrt{2x-x^2}}.
$$

2. 求原函数。注意到

$$
\frac{d}{dx}\sqrt{2x-x^2}=\frac{2-2x}{2\sqrt{2x-x^2}}=\frac{1-x}{\sqrt{2x-x^2}},
$$

故 $y(x)=\sqrt{2x-x^2}+C$。由 $y(1)=1$ 得 $1+C=1$，所以 $C=0$，

$$
y(x)=\sqrt{2x-x^2}.
$$

（自检：上式求导回代满足原式，且 $y(1)=1$。）

3. 求定积分。令 $u=x-1$，

$$
I=\int_1^2\sqrt{2x-x^2}\,dx=\int_0^1\sqrt{1-u^2}\,du.
$$

该积分是半径为 1 的圆在第一象限的面积，故

$$
I=\frac{\pi}{4}.
$$

也可令 $u=\sin\theta$：

$$
I=\int_0^{\pi/2}\cos^2\theta\,d\theta=\frac{\pi}{4}.
$$

关键给分点：写出 $y'$ 并求出 $y=\sqrt{2x-x^2}$ 占主要分数；最后把积分化为四分之一单位圆面积得结果。

**易错点**

- $\int \frac{1-x}{\sqrt{2x-x^2}}\,dx$ 不是直接得 $\arcsin$，而应凑成 $d\sqrt{2x-x^2}$；注意负号。
- $\int_0^1\sqrt{1-u^2}\,du$ 是四分之一单位圆面积 $\pi/4$，不要误写成半圆面积 $\pi/2$。
- 在 $x=2$ 处导数趋于无穷，但 $y(2)=0$，不影响该定积分的计算。

**命题规律**

由 $\Delta y$ 的线性主部求函数再求定积分，是“可微定义 + 原函数 + 定积分几何意义”的小题套路。复习时看到 $o(\Delta x)$ 立即转成 $y'=A(x)$，并熟记 $\int_0^a\sqrt{a^2-x^2}\,dx=\frac{\pi a^2}{4}$。


> 来源：《26_姜晓千四套卷（数一）》卷三 第 12 题
