---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷六/FIB
  - 计算题
  - 高斯公式
  - 第二类曲面积分
  - 散度计算
  - 球坐标计算三重积分
points:
level:
---

# FIB 第 14 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S6-Q14_题目.png|题目]]

设 $\Sigma$ 为上半球体 $0 \le z \le \sqrt{a^2 - x^2 - y^2} (a > 0)$ 的表面外侧，则曲面积分 $$\oiint_{\Sigma} xz^2dydz + (x^2y - z^3)dzdx + (2xy + y^2z)dxdy = \_ .$$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S6-Q14_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

令 $\mathbf F=(xz^2,\ x^2y-z^3,\ 2xy+y^2z)$。由高斯公式，本题面积分等于上半球体 $x^2+y^2+z^2\le a^2,\ z\ge0$ 内 $\operatorname{div}\mathbf F=x^2+y^2+z^2$ 的三重积分。

填空题【答案】:

$$\boxed{\frac{2\pi a^5}{5}}$$

**解题切入点**

这是封闭曲面外侧的第二类曲面积分，优先用高斯公式转化为三重积分；类似算法竞赛中把边界贡献离线转化为内部贡献再统一求和，避免逐面手算。

**推演**

设 $P=xz^2$，$Q=x^2y-z^3$，$R=2xy+y^2z$，$\Omega=\{(x,y,z):x^2+y^2+z^2\le a^2,\ z\ge0\}$。$\Sigma$ 是 $\Omega$ 的封闭外表面，满足高斯公式条件。

由高斯公式：
$$\oiint_{\Sigma}P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy=\iiint_{\Omega}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)dV.$$

计算散度：
$$\operatorname{div}\mathbf F=\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}=z^2+x^2+y^2=x^2+y^2+z^2.$$

用球坐标：
$$x=r\sin\varphi\cos\theta,\quad y=r\sin\varphi\sin\theta,\quad z=r\cos\varphi,$$
$$0\le r\le a,\quad 0\le \varphi\le \frac{\pi}{2},\quad 0\le \theta\le 2\pi,\quad dV=r^2\sin\varphi\,dr\,d\varphi\,d\theta.$$

所以
$$\begin{aligned} I&=\iiint_{\Omega}(x^2+y^2+z^2)\,dV\\ &=\int_0^{2\pi}d\theta\int_0^{\pi/2}\sin\varphi\,d\varphi\int_0^a r^4\,dr\\ &=2\pi\cdot 1\cdot \frac{a^5}{5}=\frac{2\pi a^5}{5}. \end{aligned}$$

关键给分点：写出高斯公式、正确求散度、半球区域正确取 $0\le\varphi\le\pi/2$、算对 $\int_0^a r^4\,dr$。

检验：底面 $z=0$ 上会出现 $2xy$ 在圆盘 $x^2+y^2\le a^2$ 上的积分，其值为 $0$，与高斯公式结果不冲突；本题用高斯公式最直接。

**易错点**

1. 忘记判断曲面是否封闭。题中“上半球体表面外侧”是封闭曲面，可直接用高斯公式；若只取球冠部分，则要补底面。
2. 高斯公式要求外侧定向，符号不能反；若方向取反会得到负结果。
3. 散度计算要按对应变量求导：$P_x=z^2$，$Q_y=x^2$，$R_z=y^2$，不要与混合偏导混淆。
4. 球坐标中上半球应对应 $0\le \varphi\le \pi/2$，若取到 $\pi$ 就是整个球，会多一倍。

**命题规律**

考研数学一中第二类曲面积分常以“封闭曲面外侧”的形式出现，考查高斯公式与三重积分。复习时应熟练掌握散度公式、球坐标/柱坐标下的三重积分、以及补面时外侧方向的符号。遇到该类题，先判断曲面封闭性与定向，再决定是否用高斯公式。


> 来源：《26_张宇八套卷（数一）》卷六 第 14 题
