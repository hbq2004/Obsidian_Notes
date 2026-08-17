---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 26_ep五套卷/套三/FRQ
  - 计算题
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

## 解析（AI 生成，仅供参考）

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

> AI 生成，仅供参考。

