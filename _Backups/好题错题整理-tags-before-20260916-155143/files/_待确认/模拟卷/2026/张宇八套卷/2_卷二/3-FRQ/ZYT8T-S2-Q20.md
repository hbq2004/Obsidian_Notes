---
ctime: 2026-08-24 17:34:54
mtime: 2026-08-24 17:34:54
tags:
  - AM
  - 26_张宇八套卷/卷二/FRQ
  - 计算题
  - 曲面积分
  - 高斯公式
  - 补面
  - 三重积分
  - 奇偶性
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S2-Q20_题目.png|题目]]

设 $\Sigma$ 为曲面 $x = y^2 + z^2 (x \le 1)$ 的后侧, 计算曲面积分

$$ I = \iint_{\Sigma} (x-1) \mathrm{d}y\mathrm{d}z + (y-1)^3 \mathrm{d}z\mathrm{d}x + (z-1)^3 \mathrm{d}x\mathrm{d}y. $$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S2-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结论：

$$I = 4\pi.$$

关键给分点：
1. 补平面 $D: x=1, y^2+z^2\le 1$，并取前侧（法向为 $x$ 轴正方向），与曲面 $\Sigma$ 构成闭曲面外侧；
2. 对所围区域 $\Omega: 1\le x\le y^2+z^2$，用高斯公式；
3. 正确计算三重积分 $\iiint_\Omega (1+3(y-1)^2+3(z-1)^2)\,dv$；
4. 减去补平面上的曲面积分，得 $I=4\pi$。

**解题切入点**

本题是第二类曲面积分，曲面为旋转抛物面外侧（后侧）。由于被积函数复杂，直接投影计算量大，优先考虑**高斯公式**。可类比算法竞赛中“环形区间和不好直接算，先补成完整区间再用前缀和”的思想：补一个平面，把开口曲面补成封闭曲面，用高斯公式化曲面积分为三重积分，再减去补平面的贡献。

**推演**

设

$$P=x-1,\quad Q=(y-1)^3,\quad R=(z-1)^3.$$

曲面 $\Sigma$ 为 $x=y^2+z^2\ (x\le 1)$ 的**后侧**。为使用高斯公式，补平面

$$D:\ x=1,\quad y^2+z^2\le 1,$$

并取 $D$ 为前侧（法向为 $x$ 轴正方向），这样 $\Sigma$ 与 $D$ 构成封闭曲面外侧。

高斯公式给出

$$\iint_{\Sigma+D} P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy
=\iiint_\Omega\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)dv,$$

其中 $\Omega$ 为

$$1\le x\le y^2+z^2,\quad y^2+z^2\le 1.$$

计算散度：

$$\frac{\partial P}{\partial x}=1,$$

$$\frac{\partial Q}{\partial y}=3(y-1)^2,$$

$$\frac{\partial R}{\partial z}=3(z-1)^2.$$

所以

$$\iint_{\Sigma+D}\cdots = \iiint_\Omega\left[1+3(y-1)^2+3(z-1)^2\right]dv.$$

用柱坐标：

$$y=r\cos\theta,\quad z=r\sin\theta,\quad x=x,$$

$$0\le r\le 1,\quad 0\le \theta\le 2\pi,\quad r^2\le x\le 1.$$

于是

$$\iiint_\Omega dv = \int_0^{2\pi}d\theta\int_0^1 r\,dr\int_{r^2}^1 dx = 2\pi\int_0^1 r(1-r^2)dr = 2\pi\left(\frac12-\frac14\right)=\frac{\pi}{2}.$$

又

$$\iiint_\Omega (y-1)^2 dv = \iiint_\Omega (y^2 - 2y + 1)dv.$$

在区域 $\Omega$ 上关于 $y$ 为偶区域，$-2y$ 积分为 0，所以

$$\iiint_\Omega (y-1)^2 dv = \iiint_\Omega (y^2+1)dv.$$

同理

$$\iiint_\Omega (z-1)^2 dv = \iiint_\Omega (z^2+1)dv.$$

在柱坐标中

$$\iiint_\Omega y^2 dv = \iiint_\Omega r^2\cos^2\theta \cdot r\,dr\,d\theta\,dx = \pi\int_0^1 r^3(1-r^2)dr = \pi\left(\frac14-\frac16\right)=\frac{\pi}{12}.$$

同理

$$\iiint_\Omega z^2 dv = \frac{\pi}{12}.$$

且

$$\iiint_\Omega 1\,dv = \frac{\pi}{2}.$$

因此

$$\iiint_\Omega (y-1)^2 dv = \frac{\pi}{12}+\frac{\pi}{2}=\frac{7\pi}{12},$$

$$\iiint_\Omega (z-1)^2 dv = \frac{7\pi}{12}.$$

所以

$$\iiint_\Omega\left[1+3(y-1)^2+3(z-1)^2\right]dv = \frac{\pi}{2}+3\cdot\frac{7\pi}{12}+3\cdot\frac{7\pi}{12} = \frac{\pi}{2}+\frac{7\pi}{2}=4\pi.$$

因此

$$\iint_{\Sigma+D}\cdots = 4\pi.$$

再计算补平面 $D$ 上的积分。$D$ 取前侧，即法向为 $x$ 轴正方向，故 $dy\,dz$ 项在 $D$ 上的贡献为

$$\iint_D (x-1)dy\,dz = \iint_D (1-1)dy\,dz = 0,$$

而 $dz\,dx$ 与 $dx\,dy$ 在 $D$ 上均为 0（因为 $D$ 的法向与 $x$ 轴平行，$y,z$ 方向分量为 0），所以

$$\iint_D Q\,dz\,dx+R\,dx\,dy = 0.$$

故

$$\iint_D \cdots = 0.$$

由于 $\Sigma$ 与 $D$ 构成外侧闭曲面，且 $D$ 取前侧，$\Sigma$ 取后侧，因此

$$\iint_\Sigma \cdots = \iint_{\Sigma+D}\cdots - \iint_D\cdots = 4\pi - 0 = 4\pi.$$

所以

$$I = 4\pi.$$

检查：若直接用投影计算，后侧对应符号，结果亦为 $4\pi$。

**易错点**

1. 补面方向容易搞错。补平面 $D$ 应取前侧，才能与 $\Sigma$ 的后侧构成闭曲面外侧；若方向取反，高斯公式结果会差一个负号。
2. 计算 $\iiint_\Omega (y-1)^2 dv$ 时，不要忘记展开并使用奇偶性：$-2y$ 项积分为 0，但 $+1$ 项不能丢。
3. 柱坐标中体积微元是 $r\,dr\,d\theta\,dx$，且 $x$ 的范围是 $r^2\le x\le 1$，不是 $0\le x\le 1$。
4. 补平面 $D$ 上的曲面积分不是直接写成 $\iint_D 0\,dy\,dz$，要说明 $dz\,dx$、$dx\,dy$ 在 $D$ 上为 0。

**命题规律**

考研数学一常考“补面 + 高斯公式”求第二类曲面积分。命题套路：给出开口曲面（旋转抛物面、锥面等）和方向，补一个平面或底面，用高斯公式化曲面积分为三重积分，再减去补面贡献。复习时应熟练掌握：
- 第二类曲面积分的定向与符号；
- 高斯公式的条件与使用；
- 补面方向的选择；
- 柱坐标、球坐标计算三重积分；
- 奇偶性化简。

本题题面按“曲面 $x=y^2+z^2 (x\le 1)$ 的后侧”理解（OCR 无误，若原书有歧义请核对原书）。


> 来源：《26_张宇八套卷（数一）》卷二 第 20 题
