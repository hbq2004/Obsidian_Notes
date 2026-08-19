---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-20 01:07:44
tags:
  - AM
  - 27_ep月考卷/套四/FIB
  - 变上限积分求导
  - 平面曲线弧长
  - 三角代换积分
  - 定积分化简
points:
level:
---

# FIB 第 12 题

![[_Attachments/题目识别/JJ8T/JJ8T-S4-Q12_题目.png|题目]]

12. 曲线 $16y = \int_{0}^{4} x \sqrt{16 - x^2 t^2} \, dt$ （$x \geq 0$）的弧长为 \_ .


---

## DeepSeek V4 Flash Max

【考点】本题考查变上限积分求导与平面曲线弧长计算。类比算法竞赛中，先化简含参积分再求导，避免直接求导的繁琐。

【解】令 $u=xt$，则 $dt=du/x$，积分变为 $\int_0^{4x}\sqrt{16-u^2}\,du$。故 $16y=\int_0^{4x}\sqrt{16-u^2}\,du$。对 $x$ 求导：$16y'=4\sqrt{16-(4x)^2}=16\sqrt{1-x^2}$，所以 $y'=\sqrt{1-x^2}$。由于根号要求 $4x\le 4$，即 $x\le 1$，故 $x\in[0,1]$。弧长 $S=\int_0^1\sqrt{1+(y')^2}dx=\int_0^1\sqrt{2-x^2}dx$。令 $x=\sqrt2\sin\theta$，则 $dx=\sqrt2\cos\theta d\theta$，$\theta:0\to\pi/4$，$S=\int_0^{\pi/4}2\cos^2\theta d\theta=\int_0^{\pi/4}(1+\cos2\theta)d\theta=[\theta+\frac12\sin2\theta]_0^{\pi/4}=\frac{\pi}{4}+\frac12$。

【答案】\boxed{\frac{\pi}{4}+\frac{1}{2}}

【易错点】易错点：积分变量是 $t$，$x$ 为参数，求导不能盲目先积分后带；需注意上限 $4x$ 导致 $x$ 的定义域 $[0,1]$。防错：利用换元将积分化为变上限积分后再用莱布尼茨公式。

【命题规律】此类题常将定积分、变上限积分求导与曲线弧长结合，考查计算能力。复习时应熟练常见积分公式。

---

## V4 Flash Max 解析

**答案**: $\boxed{\dfrac12+\dfrac{\pi}{4}}$

**解题切入点**:  
积分变量是 $t$，而 $x$ 是曲线横坐标。先把含参积分通过换元 $u=xt$ 化成变上限积分，再对 $x$ 求导得到 $y'(x)$，最后用弧长公式  
$$s=\int_a^b\sqrt{1+(y')^2}\,dx.$$  
这类似算法竞赛中先把表达式化简成“好维护的形式”，再一次性计算答案。

**推演**:  
令 $u=xt$，则 $dt=\dfrac{du}{x}$。当 $x>0$ 时，
$$
16y(x)=\int_0^4 x\sqrt{16-x^2t^2}\,dt
=\int_0^{4x}\sqrt{16-u^2}\,du.
$$
$x=0$ 时两边都为 $0$，结论可连续延拓。于是
$$
y(x)=\frac1{16}\int_0^{4x}\sqrt{16-u^2}\,du.
$$

由变上限积分求导法则：
$$
y'(x)=\frac1{16}\cdot \sqrt{16-(4x)^2}\cdot 4
=\sqrt{1-x^2}.
$$

被积函数要实值，需 $0\le x\le 1$。所以弧长为
$$
s=\int_0^1\sqrt{1+(y')^2}\,dx
=\int_0^1\sqrt{1+(1-x^2)}\,dx
=\int_0^1\sqrt{2-x^2}\,dx.
$$

利用
$$
\int\sqrt{a^2-x^2}\,dx=\frac{x}{2}\sqrt{a^2-x^2}+\frac{a^2}{2}\arcsin\frac{x}{a},
$$
取 $a=\sqrt2$，得
$$
s=\left[\frac{x}{2}\sqrt{2-x^2}+\arcsin\frac{x}{\sqrt2}\right]_0^1
=\frac12+\arcsin\frac1{\sqrt2}
=\frac12+\frac{\pi}{4}.
$$

**易错点**:  
- 换元后对上限 $4x$ 求导时容易漏乘 $4$，导致 $y'(x)$ 算成 $\dfrac14\sqrt{1-x^2}$。  
- 容易忽略定义域：原积分要求 $16-x^2t^2\ge0$，结合 $x\ge0$ 得 $0\le x\le1$。  
- 弧长公式中根号下是 $1+(y')^2$，不是 $1+y^2$。  
- 自检：$y'(0)=1,\ y'(1)=0$；数值上 $\dfrac12+\dfrac{\pi}{4}\approx1.285$，与直接数值积分 $\int_0^1\sqrt{2-x^2}\,dx$ 一致。

**命题规律**:  
该考点常把“变上限积分求导”与“定积分几何应用”结合，属于数学一高频小题。常见变式包括：曲线由参数方程给出时用 $\int\sqrt{x'^2+y'^2}\,dt$；极坐标给出时用 $\int\sqrt{r^2+r'^2}\,d\theta$；也可进一步与旋转体体积、侧面积、曲率等结合命题。
