---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷三/FRQ
  - 综合题
  - 高斯公式
  - 第二型曲面积分
  - 球坐标变换
  - 奇偶性对称性
  - 曲面外侧定向
points:
level:
---

# FRQ 第 19 题

![[_Attachments/题目识别/YBS5T/YBS5T-S3-Q19_题目.png|题目]]

设曲面 $\Sigma$ 是锥面 $x = \sqrt{y^2 + z^2}$ 与球面 $x^2 + y^2 + z^2 = 1, x^2 + y^2 + z^2 = 2$ 所围立体表面外侧，$f(u)$ 为具有一阶连续导数的奇函数，计算曲面积分.

$$
I = \oiint_{\Sigma} x^3 dydz + [y^3 + f(yz)] dzdx + [z^3 + f(yz)] dxdy.
$$

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S3-Q19_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由高斯公式与对称性，
$$
I=\frac{3\pi}{5}(9\sqrt2-10).
$$

关键给分点：①判断曲面封闭并用高斯公式；②利用 $f$ 为奇函数推出 $f'$ 为偶函数，从而含 $f$ 的散度项积分为 $0$；③球坐标定限 $1\le\rho\le\sqrt2,\ 0\le\varphi\le\pi/4,\ 0\le\theta\le2\pi$；④计算三重积分。

**解题切入点**

这是第二型曲面积分，且 $\Sigma$ 为封闭曲面外侧，立刻想到高斯公式。类比竞赛中“闭合曲面通量”优先转体积分；$f$ 的奇偶性用于消去含 $f'$ 的对称性积分。

**推演**

设
$$
P=x^3,\quad Q=y^3+f(yz),\quad R=z^3+f(yz).
$$
由高斯公式，
$$
I=\iiint_D\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)dV.
$$
其中 $D$ 为 $\Sigma$ 所围立体。计算偏导数：
$$
\frac{\partial P}{\partial x}=3x^2,\quad
\frac{\partial Q}{\partial y}=3y^2+z f'(yz),\quad
\frac{\partial R}{\partial z}=3z^2+y f'(yz).
$$
所以
$$
\operatorname{div}\mathbf F=3(x^2+y^2+z^2)+(y+z)f'(yz).
$$
因 $f$ 为奇函数，$f'$ 为偶函数；区域 $D$ 关于 $y=0$ 与 $z=0$ 对称，故
$$
\iiint_D y f'(yz)dV=\iiint_D z f'(yz)dV=0.
$$
于是
$$
I=3\iiint_D (x^2+y^2+z^2)dV.
$$
取球坐标（$x$ 轴为极轴）：
$$
x=\rho\cos\varphi,\quad y=\rho\sin\varphi\cos\theta,\quad z=\rho\sin\varphi\sin\theta.
$$
锥面 $x=\sqrt{y^2+z^2}$ 化为 $\rho\cos\varphi=\rho\sin\varphi$，即 $\varphi=\pi/4$。所围立体为锥面内部、两球面之间，故
$$
1\le\rho\le\sqrt2,\quad 0\le\varphi\le\frac{\pi}{4},\quad 0\le\theta\le 2\pi.
$$
因此
$$
I=3\int_0^{2\pi}d\theta\int_0^{\pi/4}\sin\varphi\,d\varphi\int_1^{\sqrt2}\rho^4\,d\rho.
$$
计算：
$$
\int_1^{\sqrt2}\rho^4\,d\rho=\frac{4\sqrt2-1}{5},\quad
\int_0^{\pi/4}\sin\varphi\,d\varphi=1-\frac{\sqrt2}{2}=\frac{2-\sqrt2}{2}.
$$
故
$$
I=6\pi\cdot\frac{4\sqrt2-1}{5}\cdot\frac{2-\sqrt2}{2}
=3\pi\frac{(4\sqrt2-1)(2-\sqrt2)}5
=\frac{3\pi}{5}(9\sqrt2-10).
$$

**易错点**

1. 忘记 $Q_y$ 中 $f(yz)$ 对 $y$ 求导产生 $z f'(yz)$，$R_z$ 产生 $y f'(yz)$。
2. 不利用 $f$ 奇偶性，直接不会处理 $f$ 项；注意 $f$ 奇 $\Rightarrow f'$ 偶。
3. 球坐标定限错误：锥面条件 $x=\sqrt{y^2+z^2}$ 对应 $\varphi=\pi/4$，两球面对应 $\rho=1,\sqrt2$，不是 $\rho$ 从 $0$ 开始。
4. 高斯公式要求封闭曲面外侧；本题 $\Sigma$ 已封闭，方向为外侧，可直接用。

**命题规律**

“封闭曲面第二型积分”优先考虑高斯公式；再通过奇偶性、对称性消去含抽象函数的项。复习时应熟练球坐标下锥面、球面方程，并养成“先看闭合性、再看散度、再定限”的流程。


> 来源：《26_余丙森五套卷（数一）》卷三 第 19 题
