---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
tags:
  - AM
  - 27_ep月考卷/套四/FRQ
  - 计算题
  - 齐次微分方程
  - 旋转曲面
  - 第二型曲面积分
  - 参数化法
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/JJ8T/JJ8T-S4-Q21_题目.png|题目]]

$ 21. (本题满分 12 分) 设函数 y=y(x)(x \geq 1) 满足微分方程 x y^{\prime}=y+\sqrt{x^{2}+y^{2}}, y(1)=0 记曲线 $

$L: y=y(x)(1 \leq x \leq 2)$ 绕 $x$ 轴旋转一周所得的旋转曲面 $\Sigma$，取外侧。

$\begin{equation}
(1)$ 求曲线 L 的方程;
$\end{equation}
\begin{equation}
(2)$ 计算 $I = \iint_{\Sigma} \frac{x \, dy \, dz + y \, dz \, dx + z \, dx \, dy}{\sqrt{x^2 + y^2 + z^2}}.
\end{equation}$


---

## 解析（AI 生成，仅供参考）

【考点】本题考查齐次微分方程的求解以及旋转曲面上的第二型曲面积分。可类比算法竞赛中“参数化几何体并计算流量”的思路：先将曲线方程解出，再构造曲面的参数表示，通过定向面积向量进行点积积分。

【解】

**(1) 求曲线 L 的方程**

给定微分方程 $x y' = y + \sqrt{x^2+y^2}$，$x\ge 1$，$y(1)=0$。

令 $u=\dfrac{y}{x}$，则 $y=xu$，$y'=u+xu'$。代入得
$$x(u+xu') = xu + \sqrt{x^2+x^2u^2} = xu + x\sqrt{1+u^2} \quad (x>0).$$
化简得
$$x^2 u' = x\sqrt{1+u^2} \Rightarrow x u' = \sqrt{1+u^2}.$$
分离变量：
$$\frac{du}{\sqrt{1+u^2}} = \frac{dx}{x}.$$
积分得
$$\operatorname{arsinh} u = \ln x + C.$$
由 $y(1)=0$ 得 $u(1)=0$，代入得 $0 = 0 + C$，故 $C=0$。于是
$$\operatorname{arsinh} u = \ln x \Rightarrow u+\sqrt{1+u^2} = x.$$
解出 $u$：
$$\sqrt{1+u^2}=x-u \Rightarrow 1+u^2 = x^2 - 2xu + u^2 \Rightarrow 2xu = x^2-1 \Rightarrow u = \frac{x^2-1}{2x}.$$
因此
$$y = xu = \frac{x^2-1}{2}, \quad 1\le x\le 2.$$
验证：$y' = x$，左边 $xy'=x^2$，右边 $y+\sqrt{x^2+y^2}$，其中 $\sqrt{x^2+y^2} = \sqrt{x^2+\left(\frac{x^2-1}{2}\right)^2} = \frac{x^2+1}{2}$，所以右边 $=\frac{x^2-1}{2}+\frac{x^2+1}{2}=x^2$，成立。

**(2) 计算第二型曲面积分 $I$**

曲线 $L$ 绕 $x$ 轴旋转一周，得到曲面 $\Sigma$。设旋转半径 $R(x)=\dfrac{x^2-1}{2}$，则 $\Sigma$ 的参数方程为
$$\begin{cases}
x=x,\\ y=R(x)\cos\theta,\\ z=R(x)\sin\theta,
\end{cases}\quad 1\le x\le 2,\ 0\le\theta<2\pi.$$
记 $\mathbf{r}(x,\theta)=(x,\,R\cos\theta,\,R\sin\theta)$。

计算偏导数：
$$\mathbf{r}_x = (1,\ R'\cos\theta,\ R'\sin\theta), \quad \mathbf{r}_\theta = (0,\ -R\sin\theta,\ R\cos\theta),$$
其中 $R'=x$。
$$\mathbf{r}_x \times \mathbf{r}_\theta = (R R',\ -R\cos\theta,\ -R\sin\theta) = (Rx,\ -R\cos\theta,\ -R\sin\theta).$$
该向量指向内侧（指向转轴），故取外侧时应取相反方向，即定向面积向量
$$d\mathbf{S} = (-Rx,\ R\cos\theta,\ R\sin\theta)\,dx\,d\theta.$$

被积函数中分母为
$$\sqrt{x^2+y^2+z^2} = \sqrt{x^2+R^2} = \sqrt{x^2+\left(\frac{x^2-1}{2}\right)^2} = \frac{x^2+1}{2}.$$
因此被积向量场
$$\mathbf{F} = \left(\frac{x}{\sqrt{x^2+y^2+z^2}},\ \frac{y}{\sqrt{x^2+y^2+z^2}},\ \frac{z}{\sqrt{x^2+y^2+z^2}}\right) = \left(\frac{2x}{x^2+1},\ \frac{2R\cos\theta}{x^2+1},\ \frac{2R\sin\theta}{x^2+1}\right).$$
（注意 $R=(x^2-1)/2$，故 $2R/(x^2+1) = (x^2-1)/(x^2+1)$。）

计算 $\mathbf{F}\cdot d\mathbf{S}$：
$$\begin{aligned}
\mathbf{F}\cdot d\mathbf{S} &= \frac{2x}{x^2+1}\cdot(-Rx) + \frac{2R\cos\theta}{x^2+1}\cdot(R\cos\theta) + \frac{2R\sin\theta}{x^2+1}\cdot(R\sin\theta) \\
&= \frac{-2Rx^2 + 2R^2(\cos^2\theta+\sin^2\theta)}{x^2+1} \\
&= \frac{2R(R - x^2)}{x^2+1}.
\end{aligned}$$
因为 $R=\frac{x^2-1}{2}$，所以 $R - x^2 = \frac{x^2-1}{2} - x^2 = -\frac{x^2+1}{2}$。代入得
$$\mathbf{F}\cdot d\mathbf{S} = \frac{2R \cdot \left(-\frac{x^2+1}{2}\right)}{x^2+1} = -R = -\frac{x^2-1}{2}.$$

于是
$$\begin{aligned}
I &= \iint_\Sigma \mathbf{F}\cdot d\mathbf{S} = \int_{x=1}^2\int_{\theta=0}^{2\pi} -\frac{x^2-1}{2}\,d\theta\,dx \\
&= -\frac{1}{2}\cdot 2\pi \int_1^2 (x^2-1)\,dx = -\pi \left[\frac{x^3}{3}-x\right]_1^2 \\
&= -\pi\left[\left(\frac{8}{3}-2\right) - \left(\frac{1}{3}-1\right)\right] = -\pi\left(\frac{2}{3}+\frac{2}{3}\right) = -\frac{4\pi}{3}.
\end{aligned}$$

【答案】
(1) 曲线 $L$ 的方程为 $y=\dfrac{x^2-1}{2}$（$1\le x\le 2$）；
(2) $I = -\dfrac{4\pi}{3}$。

关键给分点：
- 正确换元解微分方程，得到 $u=\frac{x^2-1}{2x}$ 或直接 $y=\frac{x^2-1}{2}$，给4分；
- 正确写出旋转曲面的参数方程及定向面积向量，给3分；
- 正确计算点乘并积分得结果，给5分。

【易错点】
- 解齐次方程时忘记换元或积分常数弄错；
- 旋转曲面参数化时法向量方向容易取反，导致结果符号错误；
- 被积函数中分母在曲面上可化简，若不化简会增大计算量；
- 若用高斯公式需注意补面方向和奇异性，本题奇点在原点但不在区域内。

【命题规律】
本题将微分方程与曲面积分结合，属于综合题。备考时应加强“由方程求曲线→旋转曲面参数化→第二型曲面积分”的连贯训练，注意法向量方向的选择和曲线积分的几何意义。

> AI 生成，仅供参考。

