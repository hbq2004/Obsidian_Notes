---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-20 01:07:44
tags:
  - AM
  - 27_ep月考卷/套三/FRQ
  - 齐次微分方程
  - 旋转曲面方程
  - 第二类曲面积分
  - 高斯公式
  - 柱坐标变换
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/JJ8T/JJ8T-S3-Q21_题目.png|题目]]

$ 21. (本题满分 12 分) 设函数 y=y(x)(x \geq 1) 满足微分方程 x y^{\prime}=y+\sqrt{x^{2}+y^{2}}, y(1)=0 . 记曲线 $

$L: y=y(x)(1 \leq x \leq 2)$ 绕 $x$ 轴旋转一周所得的旋转曲面 $\Sigma$，取外侧。

(1) 求曲线 $L$ 的方程；

(2) 计算 $I=\iint_{\Sigma} \frac{x ~d y ~d z+y ~d z ~d x+z ~d x ~d y}{\sqrt{x^{2}+y^{2}+z^{2}}}$.


---

## DeepSeek V4 Flash Max

【考点】本题考查一阶齐次微分方程求解、旋转曲面及其外侧定向、第二类曲面积分的计算。核心方法：先求曲线方程，再通过补面利用高斯公式转化为三重积分，类似算法竞赛中“补边界处理积分”的思路。

【解】
(1) 求曲线L的方程：
微分方程 $xy' = y + \sqrt{x^2+y^2}$，令 $u = \frac{y}{x}$，则 $y = ux$，$y' = u + x u'$。代入，因 $x \ge 1 > 0$，得
$$x(u + x u') = ux + \sqrt{x^2 + u^2 x^2} = ux + x\sqrt{1+u^2},$$
化简得 $x u' = \sqrt{1+u^2}$，即 $\frac{du}{\sqrt{1+u^2}} = \frac{dx}{x}$。
积分：$\ln(u + \sqrt{1+u^2}) = \ln x + C$，即 $u + \sqrt{1+u^2} = C x$。
由 $y(1)=0$，得 $u(1)=0$，代入 $0+1 = C \cdot 1$，故 $C=1$。于是
$$u + \sqrt{1+u^2} = x.$$
令 $t = u + \sqrt{1+u^2}$，则 $\frac{1}{t} = \sqrt{1+u^2} - u$，两式相减得 $u = \frac{1}{2}\left(t - \frac{1}{t}\right) = \frac{1}{2}\left(x - \frac{1}{x}\right)$。所以
$$y = x u = \frac{x^2-1}{2}.$$
验证：$y' = x$，$xy' = x^2$，$y + \sqrt{x^2+y^2} = \frac{x^2-1}{2} + \sqrt{x^2 + \frac{(x^2-1)^2}{4}} = \frac{x^2-1}{2} + \frac{x^2+1}{2} = x^2$，正确。故曲线 $L$ 方程为 $y = \frac{x^2-1}{2}$，$1 \le x \le 2$。

(2) 计算曲面积分：
旋转曲面 $\Sigma$ 由 $L$ 绕 $x$ 轴旋转，方程为 $y^2+z^2 = \left(\frac{x^2-1}{2}\right)^2$，即 $y^2+z^2 = \frac{(x^2-1)^2}{4}$，$1 \le x \le 2$，取外侧。

记 $r = \sqrt{x^2+y^2+z^2}$，被积向量场 $\mathbf{F} = \left(\frac{x}{r}, \frac{y}{r}, \frac{z}{r}\right)$，则 $I = \iint_{\Sigma} \mathbf{F} \cdot d\mathbf{S}$。

计算散度：
$$\frac{\partial}{\partial x}\left(\frac{x}{r}\right) = \frac{r - x\cdot x/r}{r^2} = \frac{y^2+z^2}{r^3},$$
同理得
$$\operatorname{div}\mathbf{F} = \frac{2(x^2+y^2+z^2)}{r^3} = \frac{2}{r}.$$

补面：左端 $x=1$ 处 $y=0$，旋转后退化，面积为零。补右端面 $D: x=2, y^2+z^2 \le \frac{9}{4}$，取外侧（法向为 $x$ 轴正方向）。由高斯公式，
$$\iint_{\Sigma+D} \mathbf{F}\cdot d\mathbf{S} = \iiint_{\Omega} \frac{2}{\sqrt{x^2+y^2+z^2}}\,dV,$$
其中 $\Omega = \{1 \le x \le 2, y^2+z^2 \le \frac{(x^2-1)^2}{4}\}$。

用柱坐标：$x$ 不变，$y = \rho \cos\theta, z = \rho \sin\theta$，$0 \le \rho \le \frac{x^2-1}{2}$，$0 \le \theta \le 2\pi$。则
$$\iiint_{\Omega} \frac{2}{\sqrt{x^2+\rho^2}}\rho\,d\rho\,d\theta\,dx = 2\pi \int_1^2 \int_0^{(x^2-1)/2} \frac{2\rho}{\sqrt{x^2+\rho^2}}\,d\rho\,dx.$$
内层积分：$\int \frac{2\rho}{\sqrt{x^2+\rho^2}}\,d\rho = 2\sqrt{x^2+\rho^2}$，代入上下限得
$$2\left(\sqrt{x^2+\frac{(x^2-1)^2}{4}} - x\right) = 2\left(\frac{x^2+1}{2} - x\right) = (x-1)^2.$$
所以
$$\iiint_{\Omega} = 2\pi \int_1^2 (x-1)^2\,dx = 2\pi \cdot \frac{1}{3} = \frac{2\pi}{3}.$$

计算补面 $D$ 上积分：在 $D$ 上 $x=2$，法向为 $(1,0,0)$，$d\mathbf{S} = (dy\,dz, 0, 0)$，故
$$\iint_D \mathbf{F}\cdot d\mathbf{S} = \iint_{y^2+z^2 \le 9/4} \frac{2}{\sqrt{4+y^2+z^2}}\,dy\,dz.$$
极坐标 $y = \rho\cos\theta, z=\rho\sin\theta$，$\rho \in [0,3/2]$，得
$$\iint_D = \int_0^{2\pi}\int_0^{3/2} \frac{2\rho}{\sqrt{4+\rho^2}}\,d\rho\,d\theta = 2\pi \left[2\sqrt{4+\rho^2}\right]_0^{3/2} = 2\pi (5-4) = 2\pi.$$

因此
$$I = \iint_{\Sigma} = \iiint_{\Omega} - \iint_D = \frac{2\pi}{3} - 2\pi = -\frac{4\pi}{3}.$$

【答案】
(1) 曲线 $L$ 的方程为 $y = \dfrac{x^2-1}{2}$，$1 \le x \le 2$。
(2) $I = -\dfrac{4\pi}{3}$。

关键给分点：
- 解微分方程得 $y$（4分）；
- 正确写出旋转曲面方程及外侧定向（2分）；
- 用高斯公式补面并计算三重积分（4分）；
- 计算补面积分并得到最终结果（2分）。

【易错点】
- 微分方程中 $\sqrt{x^2+y^2}$ 的化简需注意 $x>0$，否则开方符号需讨论。
- 补面时左端 $x=1$ 处退化，右端面法向必须与外侧一致；高斯公式符号易错。
- 三重积分中被积函数是 $2/r$，不是常数；柱坐标中分母是 $\sqrt{x^2+\rho^2}$。
- 补面后要减去补面的积分，不要加错。
- 直接参数化计算曲面时需注意第二类曲面积分的定向，容易出错。

【命题规律】此类题常以微分方程求曲线，再结合旋转曲面考察第二类曲面积分，核心是高斯公式。复习时多练齐次方程与一阶线性方程，掌握旋转曲面方程，熟悉高斯公式补面技巧。

---

## V4 Flash Max 解析

**答案**:

(1) $L:\ y=\dfrac{x^2-1}{2}\ (1\le x\le2)$。

(2) $I=-\dfrac{4\pi}{3}$。

---

**解题切入点**:

第一问是齐次微分方程。把方程写成  
$$
y'=\frac yx+\sqrt{1+\left(\frac yx\right)^2}
$$
令 $u=\frac yx$ 即可分离变量，这很像算法里“先归一化，再还原”。

第二问是旋转曲面的第二型曲面积分，本质是求向量场
$$
\mathbf F=\frac{(x,y,z)}{\sqrt{x^2+y^2+z^2}}
$$
穿过曲面 $\Sigma$ 的通量。旋转曲面用参数
$$
(x,\theta)=(x,r(x)\cos\theta,r(x)\sin\theta)
$$
处理即可，关键是“外侧”法向的符号。

---

**推演**:

### 1. 解微分方程

令
$$
u=\frac yx,\qquad y=xu,
$$
则
$$
y'=u+xu'.
$$

代入原方程：
$$
xy'=x(u+xu')=xu+x^2u',
$$
而
$$
y+\sqrt{x^2+y^2}=xu+x\sqrt{1+u^2}.
$$
所以
$$
xu+x^2u'=xu+x\sqrt{1+u^2},
$$
即
$$
x u'=\sqrt{1+u^2}.
$$

分离变量：
$$
\frac{du}{\sqrt{1+u^2}}=\frac{dx}{x}.
$$

积分得
$$
\ln\left(u+\sqrt{1+u^2}\right)=\ln x+C.
$$

由 $y(1)=0$，得 $u(1)=0$，所以 $C=0$。因此
$$
u+\sqrt{1+u^2}=x.
$$

解得
$$
u=\frac{x^2-1}{2x}.
$$

所以
$$
y=xu=\frac{x^2-1}{2}.
$$

故曲线 $L$ 的方程为
$$
y=\frac{x^2-1}{2},\quad 1\le x\le2.
$$

---

### 2. 计算曲面积分

令旋转半径为
$$
r=f(x)=\frac{x^2-1}{2},\qquad f'(x)=x.
$$

曲面 $\Sigma$ 的参数方程为
$$
\mathbf R(x,\theta)=(x,r\cos\theta,r\sin\theta),
$$
其中
$$
1\le x\le2,\quad 0\le\theta\le2\pi.
$$

“外侧”取远离 $x$ 轴的一侧。计算切向量叉积：
$$
\mathbf R_\theta\times\mathbf R_x
=(-r f'(x),\,r\cos\theta,\,r\sin\theta)
=r(-x,\cos\theta,\sin\theta).
$$

因此外侧单位法向量为
$$
\mathbf n=\frac{(-x,\cos\theta,\sin\theta)}{\sqrt{1+x^2}}.
$$

面积元素为
$$
dS=|\mathbf R_\theta\times\mathbf R_x|\,dx\,d\theta
=r\sqrt{1+x^2}\,dx\,d\theta.
$$

在曲面上，
$$
\sqrt{x^2+y^2+z^2}
=\sqrt{x^2+r^2}
=\sqrt{x^2+\left(\frac{x^2-1}{2}\right)^2}
=\frac{x^2+1}{2}.
$$

记
$$
\rho=\sqrt{x^2+y^2+z^2}=\frac{x^2+1}{2},
$$
则
$$
\mathbf F=\frac{(x,y,z)}{\rho}
=\frac{(x,r\cos\theta,r\sin\theta)}{\rho}.
$$

于是
$$
\mathbf F\cdot\mathbf n
=
\frac{x(-x)+r\cos^2\theta+r\sin^2\theta}
{\rho\sqrt{1+x^2}}
=
\frac{r-x^2}{\rho\sqrt{1+x^2}}.
$$

而
$$
r-x^2=\frac{x^2-1}{2}-x^2=-\frac{x^2+1}{2}=-\rho.
$$

所以
$$
\mathbf F\cdot\mathbf n
=-\frac1{\sqrt{1+x^2}}.
$$

因此
$$
I=\iint_\Sigma \mathbf F\cdot\mathbf n\,dS
=\int_1^2\int_0^{2\pi}
-\frac1{\sqrt{1+x^2}}\cdot r\sqrt{1+x^2}\,d\theta\,dx.
$$

化简得
$$
I=-2\pi\int_1^2 r\,dx
=-2\pi\int_1^2 \frac{x^2-1}{2}\,dx.
$$

计算：
$$
I=-\pi\left[\frac{x^3}{3}-x\right]_1^2
=-\pi\left[\left(\frac83-2\right)-\left(\frac13-1\right)\right]
=-\frac{4\pi}{3}.
$$

---

**易错点**:

1. 解齐次方程时容易漏掉 $y'=u+xu'$ 中的 $xu'$ 项。注意 $y=xu$，求导后必须有两项。

2. 曲面积分的符号极易出错。若取  
$$
\mathbf R_x\times\mathbf R_\theta=(r x,-r\cos\theta,-r\sin\theta),
$$
得到的是指向 $x$ 轴内侧的法向，会算成 $+\frac{4\pi}{3}$。题设“外侧”应取相反方向，即
$$
\mathbf R_\theta\times\mathbf R_x.
$$

3. 面积元素中不能漏掉 $r\sqrt{1+x^2}$，虽然这里刚好与法向量分母约去。

4. 自检：  
   对曲线方程，$y'=x$，且
$$
\sqrt{x^2+y^2}=\frac{x^2+1}{2},
$$
所以
$$
y+\sqrt{x^2+y^2}
=\frac{x^2-1}{2}+\frac{x^2+1}{2}
=x^2
=xy'.
$$

符号也可用补面检验：补上 $x=2$ 端盖后用高斯公式，闭合曲面总通量为 $\frac{2\pi}{3}$，端盖通量为 $2\pi$，故侧面通量为
$$
\frac{2\pi}{3}-2\pi=-\frac{4\pi}{3}.
$$

---

**命题规律**:

本题是“一阶齐次微分方程 + 旋转曲面第二型曲面积分”的组合题。考研数学一常把微分方程求曲线、旋转面参数化、第二型曲面积分的方向与计算结合起来命题。

常见变式有：

- 补面后用高斯公式求非封闭曲面的通量；
- 旋转曲面参数化直接计算；
- 向量场为 $\frac{(x,y,z)}{\sqrt{x^2+y^2+z^2}}$ 或 $\frac{(x,y,z)}{(x^2+y^2+z^2)^{3/2}}$ 时，注意散度和奇点处理。

这类题的关键是：先由微分方程确定几何形状，再熟练写出旋转曲面的外法向。
