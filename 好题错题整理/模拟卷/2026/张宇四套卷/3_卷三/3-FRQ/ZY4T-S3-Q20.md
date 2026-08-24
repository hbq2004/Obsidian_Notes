---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - AM
  - 26_张宇四套卷/卷三/FRQ
  - 计算题
  - 第一类曲面积分
  - 曲面微元
  - 投影区域
  - 极坐标换元
  - 球坐标变换
points:
level:
---

# 解答题 第 20 题

![[_Attachments/题目识别/ZY4T/ZY4T-S3-Q20_题目.png|题目]]

设薄片形物体 $\Sigma$ 是半球面 $z = \sqrt{1 - x^2 - y^2}$ 被圆锥面 $z = \sqrt{x^2 + y^2}$ 截下的上半部分，$\Sigma$ 上任一点的密度为该点到 $xOy$ 平面距离的倒数，求 $\Sigma$ 的质量 $M$.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S3-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结论：$M=\pi\ln 2$。

关键给分点：
- ① 正确写出 $M=\iint_\Sigma \rho\,dS$；
- ② 由 $z_x=-x/z$，$z_y=-y/z$ 得 $dS=dxdy/z$；
- ③ 确定投影区域 $x^2+y^2\le 1/2$；
- ④ 化极坐标积分得 $\pi\ln2$。

**解题切入点**

考查第一类曲面积分与几何应用。把曲面质量看作带权面积积分：权为密度 $\rho=1/z$，曲面微元在这里恰为 $dS=dxdy/z$，于是化为平面二重积分。类似算法竞赛中“按投影面片加权累加”，关键是找对微元和定义域。

**推演**

1. 确定 $\Sigma$ 的投影区域：球面与锥面交线满足 $z=r=\sqrt{x^2+y^2}$ 且 $r^2+z^2=1$，故 $2r^2=1$，$r=1/\sqrt2$。取锥面上方部分，投影为

$$
D=\{(x,y):x^2+y^2\le \frac{1}{2}\}.
$$

2. 密度与面积微元：该点到 $xOy$ 平面距离为 $z$，故 $\rho=1/z$。对 $z=\sqrt{1-x^2-y^2}$ 有

$$
z_x=-\frac{x}{z},\quad z_y=-\frac{y}{z},
$$

因此

$$
dS=\sqrt{1+z_x^2+z_y^2}\,dxdy
=\sqrt{1+\frac{x^2+y^2}{z^2}}\,dxdy
=\frac{dxdy}{z}.
$$

3. 建立质量积分：

$$
M=\iint_\Sigma \rho\,dS
=\iint_D \frac{1}{z}\cdot \frac{dxdy}{z}
=\iint_D \frac{dxdy}{1-x^2-y^2}.
$$

4. 极坐标换元并计算：令 $x=r\cos\theta,\ y=r\sin\theta$，$0\le r\le 1/\sqrt2$，$0\le\theta\le2\pi$，则

$$
M=\int_0^{2\pi}\int_0^{1/\sqrt2}\frac{r}{1-r^2}\,dr\,d\theta
=2\pi\left[-\frac{1}{2}\ln(1-r^2)\right]_0^{1/\sqrt2}
=2\pi\left(-\frac{1}{2}\ln\frac{1}{2}\right)
=\pi\ln2.
$$

自检：用球坐标 $x=\sin\varphi\cos\theta,\ y=\sin\varphi\sin\theta,\ z=\cos\varphi$，锥面交线为 $\varphi=\pi/4$，$dS=\sin\varphi\,d\varphi d\theta$，同样得 $M=2\pi\int_0^{\pi/4}\tan\varphi\,d\varphi=\pi\ln2$。

所以 $M=\pi\ln2$。

**易错点**

- 距离是到 $xOy$ 平面的距离 $|z|=z$，不是到 $z$ 轴的距离 $\sqrt{x^2+y^2}$，密度不能写成 $1/\sqrt{x^2+y^2}$。
- “上半部分”指锥面上方的小球冠，投影是 $x^2+y^2\le1/2$，不是整个单位圆，也不是赤道附近的环带；若误取到 $r=1$，积分发散。
- 曲面微元 $dS$ 易漏算 $\sqrt{1+z_x^2+z_y^2}$；本题中它等于 $1/z$，与密度相乘后成为 $1/(1-r^2)$。

**命题规律**

第一类曲面积分常与质量、质心、转动惯量等物理背景结合。命题重点是正确写出面积微元并确定积分区域；复习时应熟练掌握投影法、极坐标或球坐标换元，并用对称性化简。遇到锥面与球面交线，先在草图上画出再定区域，可避免范围错误。


> 来源：《26_张宇四套卷（数一）》卷三 第 20 题
