---
ctime: 2026-08-24 15:13:04
mtime: 2026-08-24 15:13:04
tags:
  - AM
  - 26_余丙森五套卷/卷五/FRQ
  - 综合题
  - 函数最值
  - 定积分面积
  - 旋转体体积
  - 分类讨论
  - 参数优化
points:
level:
---

# FRQ 第 17 题

![[_Attachments/题目识别/YBS5T/YBS5T-S5-Q17_题目.png|题目]]

设当 $x \in [0, \frac{\pi}{2}]$ 时，有 $ax + b \ge \sin x$，其中 $a$ 和 $b$ 均为常数. $D$ 为曲线 $y = \sin x$ 与直线 $y = ax + b$，$x = 0$，$x = \frac{\pi}{2}$ 所围成的平面图形.
(1) 求 $a$ 和 $b$ 的值，使得 $D$ 的面积最小；
(2) 在 $D$ 的面积最小时，求将 $D$ 绕 $y$ 轴旋转一周所得旋转体的体积 $V$.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S5-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
(1) 当 $a=\frac{\sqrt{2}}{2}$，$b=\frac{\sqrt{2}}{2}\left(1-\frac{\pi}{4}\right)$ 时，$D$ 的面积最小，且 $S_{\min}=\frac{\sqrt{2}\pi}{4}-1$。
(2) 面积最小时，
$$V=\frac{\sqrt{2}\pi^3(\pi+12)}{96}-2\pi.$$
关键给分点：设 $f(x)=ax+b-\sin x$；写出面积 $S=\int_0^{\pi/2}f(x)\,dx$；按 $f$ 的最小值点分类并求出 $a,b$；用圆筒法 $V=2\pi\int_0^{\pi/2}xf(x)\,dx$ 求体积。

**解题切入点**
把面积看成参数 $a,b$ 的目标函数，先固定参数形状，再利用 $f(x)\ge 0$ 的约束取边界。这相当于算法竞赛中的“凸可行域上的线性目标优化”，最优通常在约束边界（相切点）取得。

**推演**
令 $f(x)=ax+b-\sin x$，$x\in[0,\pi/2]$。题设 $f(x)\ge 0$，面积
$$S=\int_0^{\pi/2}(ax+b-\sin x)\,dx=\frac{a\pi^2}{8}+\frac{b\pi}{2}-1.$$
又
$$f'(x)=a-\cos x,\quad f''(x)=\sin x\ge 0,$$
故 $f$ 为凸函数，最小值点由 $a$ 决定。

1. 若 $a\le 0$，则 $f$ 单调递减，$\min f=f(\pi/2)=a\pi/2+b-1$，所以 $b\ge 1-a\pi/2$。于是
$$S\ge -\frac{a\pi^2}{8}+\frac{\pi}{2}-1\ge \frac{\pi}{2}-1,$$
等号在 $a=0,b=1$ 时可达。

2. 若 $a\ge 1$，则 $f$ 单调递增，$\min f=f(0)=b\ge 0$。于是
$$S\ge \frac{a\pi^2}{8}-1\ge \frac{\pi^2}{8}-1,$$
等号在 $a=1,b=0$ 时可达。

3. 若 $0<a<1$，$f$ 在唯一驻点 $x_0$ 取最小值，满足 $\cos x_0=a$。由 $f(x_0)\ge 0$ 得
$$b\ge \sin x_0-a x_0.$$
固定 $a$ 时取等号面积最小。令 $x=x_0$，则 $a=\cos x$，面积下界为
$$T(x)=\frac{\pi^2}{8}\cos x+\frac{\pi}{2}(\sin x-x\cos x)-1,\quad x\in(0,\pi/2).$$
求导：
$$T'(x)=\left(\frac{\pi x}{2}-\frac{\pi^2}{8}\right)\sin x,$$
所以 $T$ 在 $x=\pi/4$ 取最小值。此时
$$a=\cos\frac{\pi}{4}=\frac{\sqrt{2}}{2},\qquad b=\sin\frac{\pi}{4}-a\cdot\frac{\pi}{4}=\frac{\sqrt{2}}{2}\left(1-\frac{\pi}{4}\right).$$
面积
$$S_{\min}=T\left(\frac{\pi}{4}\right)=\frac{\sqrt{2}\pi}{4}-1.$$
比较三类，第三种最小，故(1)得证。

(2) 用圆筒法。面积最小时，$f(x)=ax+b-\sin x$，绕 $y$ 轴旋转体体积
$$V=2\pi\int_0^{\pi/2}xf(x)\,dx=2\pi\int_0^{\pi/2}(ax^2+bx-x\sin x)\,dx.$$
其中
$$\int_0^{\pi/2}x\sin x\,dx=1,$$
所以
$$V=2\pi\left(\frac{a\pi^3}{24}+\frac{b\pi^2}{8}-1\right).$$
代入 $a=\sqrt{2}/2$，$b=\frac{\sqrt{2}}{2}(1-\pi/4)$：
$$\frac{a\pi^3}{24}+\frac{b\pi^2}{8}=\frac{\sqrt{2}\pi^3}{192}+\frac{\sqrt{2}\pi^2}{16},$$
因此
$$V=2\pi\left(\frac{\sqrt{2}\pi^3}{192}+\frac{\sqrt{2}\pi^2}{16}-1\right)=\frac{\sqrt{2}\pi^3(\pi+12)}{96}-2\pi.$$

**易错点**
不要把 $f\ge 0$ 只理解成两个端点 $f(0)\ge 0$ 和 $f(\pi/2)\ge 0$；因 $f$ 是凸函数，最小值可能在内部，必须按 $a$ 分类讨论。体积计算中绕 $y$ 轴不要误用对 $x$ 积分时缺少 $2\pi x$ 因子；圆筒法比垫片法更直接。代入 $a,b$ 后含 $\pi^3,\pi^4$ 的项不要合并错。

**命题规律**
本题是参数最值+定积分应用的综合题。常见套路是：先给出约束不等式，再用面积/体积建立目标函数，最后通过分类讨论或切线条件求参数。复习时应熟练“直线在曲线上方时面积公式”，以及绕坐标轴旋转的圆筒法/垫片法，并注意最值点在区间内部的情形。


> 来源：《26_余丙森五套卷（数一）》卷五 第 17 题
