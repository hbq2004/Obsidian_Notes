---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - AM
  - 26_张宇八套卷/卷七/FRQ
  - 计算题
  - 第二型曲面积分
  - 参数化曲面
  - 外侧定向
  - 对称性
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S7-Q20_题目.png|题目]]

设曲面 $\Sigma$ 为 $z^2 = x^2 + y^2 - 1$ 介于 $z=0$ 与 $z=1$ 之间的部分，取外侧，$f(x)$ 为连续函数，计算.
$$ I = \iint_{\Sigma} [yf(xy) - 2x]dydz + [y^2 - xf(xy)]dzdx + (z-1)^2 dxdy. $$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S7-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$$I=\iint_{\Sigma}[y f(xy)-2x]\,dy\,dz+[y^2-x f(xy)]\,dz\,dx+(z-1)^2\,dx\,dy=-\frac{17\pi}{6}.$$

关键给分点：
1. 正确写出 $P,Q,R$ 并判断“外侧”对应方向 $(x,y,-z)$；
2. 令 $x=\rho\cos\theta,\ y=\rho\sin\theta,\ \rho=\sqrt{1+z^2}$，$0\le z\le1$，把曲面积分化成二重积分；
3. 代入后 $f(xy)$ 项抵消；
4. 对 $\theta$ 积分利用周期/对称性，对 $z$ 积分得 $-\frac{17\pi}{6}$。

**解题切入点**

本题是第二型曲面积分。$f$ 只连续，不能直接对 $f$ 求导，故不用高斯公式硬算；采用参数化“把曲面摊开”。类比算法竞赛：先按参数消元，看到含 $f$ 的项成对抵消，剩下的角度积分靠对称性归零。

**推演**

设
$$P=y f(xy)-2x,\quad Q=y^2-x f(xy),\quad R=(z-1)^2.$$
所给曲面在 $0\le z\le1$ 上可写为
$$x^2+y^2=1+z^2.$$
取参数
$$x=\rho\cos\theta,\quad y=\rho\sin\theta,\quad z=z,\quad \rho=\sqrt{1+z^2},\quad 0\le z\le1,\ 0\le\theta\le2\pi.$$
令 $\mathbf r(z,\theta)=(\rho\cos\theta,\rho\sin\theta,z)$，则
$$\mathbf r_z\times\mathbf r_\theta=(-x,-y,z).$$
该曲面的“外侧”是由 $x^2+y^2-z^2<1$ 指向 $>1$ 的一侧，方向与 $(x,y,-z)$ 相同，因此
$$d\mathbf S=(dy\,dz,dz\,dx,dx\,dy)=(x,y,-z)\,dz\,d\theta.$$
于是
$$I=\int_0^1\int_0^{2\pi}(P x+Q y+R(-z))\,d\theta\,dz.$$
代入 $P,Q,R$：
$$P x+Q y-Rz=(xy f(xy)-2x^2)+(y^3-xy f(xy))-z(z-1)^2$$
$$=y^3-2x^2-z(z-1)^2.$$
再用极坐标：
$$y^3=\rho^3\sin^3\theta,\quad x^2=\rho^2\cos^2\theta,\quad \rho^2=1+z^2.$$
所以
$$I=\int_0^1\int_0^{2\pi}\left[\rho^3\sin^3\theta-2(1+z^2)\cos^2\theta-z(z-1)^2\right]d\theta\,dz.$$
先对 $\theta$ 积分：
$$\int_0^{2\pi}\sin^3\theta\,d\theta=0,\quad \int_0^{2\pi}\cos^2\theta\,d\theta=\pi,\quad \int_0^{2\pi}1\,d\theta=2\pi.$$
故
$$I=\int_0^1\left[-2\pi(1+z^2)-2\pi z(z-1)^2\right]dz=-2\pi\int_0^1\left(1+z^2+z(z-1)^2\right)dz.$$
因为
$$1+z^2+z(z-1)^2=1+z-z^2+z^3,$$
$$\int_0^1(1+z-z^2+z^3)\,dz=1+\frac12-\frac13+\frac14=\frac{17}{12}.$$
所以
$$I=-2\pi\cdot\frac{17}{12}=-\frac{17\pi}{6}.$$

（复核：若把上下底面补上并取外侧，用高斯公式可得同一结果；其中底面积分为 $-\pi$，上底面为 $0$，三重积分为 $-23\pi/6$，相减为 $-17\pi/6$，与直接参数化一致。）

**易错点**

1. 方向易错：$\mathbf r_z\times\mathbf r_\theta=(-x,-y,z)$，外侧应取相反方向 $(x,y,-z)$；符号反了会得到 $\frac{17\pi}{6}$。
2. $f$ 不能随意求导；题干只给连续，直接用高斯公式会涉及 $f'$，需谨慎。本题参数化后 $f(xy)$ 正好抵消。
3. 对 $\theta$ 积分时，$\sin^3\theta$ 的积分为 $0$，不能误写成 $4/3$；它是周期上的奇周期积分。
4. $z$ 积分时多项式合并要仔细：$z(z-1)^2=z^3-2z^2+z$，易漏项。

**命题规律**

这类题常考“第二型曲面积分 + 连续抽象函数”的抵消结构，或补面后用高斯公式。张宇八套卷中常以旋转面为外壳，重点考查定向、参数化和对称性。复习时应熟练掌握两类曲面积分互换、参数化法、高斯公式补面技巧，并注意抽象函数项是否通过组合消去。


> 来源：《26_张宇八套卷（数一）》卷七 第 20 题
