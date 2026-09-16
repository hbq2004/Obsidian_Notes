---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - AM
  - 26_张宇八套卷/卷八/FIB
  - 计算题
  - 第二类曲面积分
  - 高斯公式
  - 旋转曲面方程
  - 极坐标变换
  - 有向曲面法向
points:
level:
---

# FIB 第 14 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S8-Q14_题目.png|题目]]

设 $\Sigma$ 是曲线 $x=e^y (0 \le y \le a)$ 绕 $x$ 轴旋转而成的旋转曲面,取后侧,则 $I = \iint_{\Sigma} 2(1-x^2)dydz + 8xydzdx - 4xzdxdy = \_\_\_\_\_.$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S8-Q14_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结论：曲面取后侧（法向的 $x$ 分量为负）时，
$$
I=2\pi a^2(e^{2a}-1).
$$

填空题【答案】:
$$
\boxed{2\pi a^2(e^{2a}-1)}
$$

**解题切入点**

本题考查第二类曲面积分。先把旋转曲面写成 $x=e^{\sqrt{y^2+z^2}}$，再按“后侧”确定法向符号，最后用极坐标计算。类似算法题中“带符号的面积/流量积分”，关键是不要丢掉极坐标的 Jacobi 行列式 $\rho$。

**推演**

设 $D: y^2+z^2\le a^2$，$r=\sqrt{y^2+z^2}$，则 $\Sigma: x=e^r$。令
$$
\mathbf F=(2(1-x^2),\,8xy,\,-4xz).
$$

对后侧曲面，法向取 $x$ 分量为负，即
$$
\mathbf n=(-1,x_y,x_z),\quad x_y=e^r\frac yr,\ x_z=e^r\frac zr.
$$

因此
$$
I=\iint_D \left[-2(1-x^2)+8xy\,x_y-4xz\,x_z\right]dy\,dz.
$$

代入 $x=e^r$：
$$
I=\iint_D \left[-2(1-e^{2r})+8e^{2r}\frac{y^2}{r}-4e^{2r}\frac{z^2}{r}\right]dy\,dz.
$$

令 $y=\rho\cos\theta,\ z=\rho\sin\theta$，则 $r=\rho,\ dy\,dz=\rho\,d\rho\,d\theta$：
$$
I=\int_0^a\int_0^{2\pi}\rho\left[-2(1-e^{2\rho})+8\rho e^{2\rho}\cos^2\theta-4\rho e^{2\rho}\sin^2\theta\right]d\theta\,d\rho.
$$

先对 $\theta$ 积分：
$$
\int_0^{2\pi}\cos^2\theta\,d\theta=\int_0^{2\pi}\sin^2\theta\,d\theta=\pi,
$$
故
$$
I=\int_0^a\left[-4\pi\rho(1-e^{2\rho})+4\pi\rho^2e^{2\rho}\right]d\rho.
$$

即
$$
I=4\pi\int_0^a\left[-\rho+(\rho+\rho^2)e^{2\rho}\right]d\rho.
$$

注意到
$$
\frac{d}{d\rho}\left(\frac{\rho^2}{2}e^{2\rho}\right)=(\rho+\rho^2)e^{2\rho},
$$
所以
$$
I=4\pi\left[-\frac{a^2}{2}+\frac{a^2}{2}e^{2a}\right]
=2\pi a^2(e^{2a}-1).
$$

自检：补平面圆盘 $x=e^a,\ y^2+z^2\le a^2$ 并取外法向 $+x$，题目后侧与闭曲面外侧一致，因 $\nabla\cdot\mathbf F=0$，闭曲面外通量为 $0$。圆盘通量为 $2\pi a^2(1-e^{2a})$，故曲面后侧通量必为 $2\pi a^2(e^{2a}-1)$，与上面结果一致。

**易错点**

1. 极坐标中 $dy\,dz=\rho\,d\rho\,d\theta$，不能漏乘 $\rho$。
2. “后侧”对应法向 $x$ 分量为负；若误取前侧会差一个负号。
3. 旋转曲面方程易写成 $x=e^{\sqrt{y^2+z^2}}$，不要丢掉根号。
4. $\nabla\cdot\mathbf F=0$ 时若直接用高斯公式，必须补面并注意封口头尾，不能把开口曲面当成闭曲面。

**命题规律**

第二类曲面积分常与旋转曲面、高斯公式结合命题。关键是先识别曲面方程和指定侧，再选择投影法或补面法；复习时多练极坐标与 Jacobi 行列式，并核对法向符号。


> 来源：《26_张宇八套卷（数一）》卷八 第 14 题
