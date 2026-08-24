---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - AM
  - 26_姜晓千四套卷/卷三/FRQ
  - 计算题
  - 拐点横坐标
  - 二阶导数
  - 旋转体体积
  - 定积分计算
  - 反正切函数
points:
level:
---

# FRQ 第 17 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S3-Q17_题目.png|题目]]

设曲线 $y=\frac{1}{1+x^2}, x \geq 0$ 的拐点横坐标为 $x=a$，求区域 $D=\left\{(x, y) \mid 0 \leq y \leq \frac{1}{1+x^2}, 0 \leq x \leq a\right\}$ 绕 $x$ 轴旋转一周所得旋转体的体积 $V$.

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S3-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由题设，曲线 $y=\frac{1}{1+x^2}\ (x\ge 0)$ 的拐点横坐标为 $x=a$。

先求拐点：
$$
y'=\frac{-2x}{(1+x^2)^2},
\qquad
y''=\frac{6x^2-2}{(1+x^2)^3}=\frac{2(3x^2-1)}{(1+x^2)^3}.
$$
在 $x\ge 0$ 上，$y''=0$ 得 $x=\frac{1}{\sqrt3}$，且 $y''$ 在该点两侧变号，故拐点横坐标为
$$
a=\frac{1}{\sqrt3}.
$$

区域 $D$ 绕 $x$ 轴旋转所得旋转体体积为
$$
V=\pi\int_0^a \left(\frac{1}{1+x^2}\right)^2dx
=\pi\int_0^{1/\sqrt3}\frac{dx}{(1+x^2)^2}.
$$

令 $x=\tan t$，则 $t\in[0,\pi/6]$，$dx=\sec^2t\,dt$，
$$
\frac{dx}{(1+x^2)^2}=\frac{\sec^2t}{\sec^4t}dt=\cos^2t\,dt=\frac{1+\cos 2t}{2}dt.
$$
因此
$$
\begin{aligned}
V&= \pi\int_0^{\pi/6}\frac{1+\cos 2t}{2}dt\\
&=\pi\left[\frac{t}{2}+\frac{\sin 2t}{4}\right]_0^{\pi/6}\\
&=\pi\left(\frac{\pi}{12}+\frac{\sin(\pi/3)}{4}\right)\\
&=\pi\left(\frac{\pi}{12}+\frac{\sqrt3}{8}\right)
=\frac{\pi^2}{12}+\frac{\sqrt3\pi}{8}.
\end{aligned}
$$

所以最终答案为
$$
\boxed{V=\frac{\pi^2}{12}+\frac{\sqrt3\pi}{8}}.
$$

关键给分点：①正确求二阶导并确定拐点 $a=\frac{1}{\sqrt3}$；②写出旋转体体积公式 $V=\pi\int_0^a y^2dx$；③用三角换元或公式算出 $\int \frac{dx}{(1+x^2)^2}$；④代入上下限得到最终结果。

**解题切入点**

本题是“拐点 + 旋转体体积”的组合题，类似算法竞赛中的“先做一步预处理，再套模板”：拐点只是用来确定积分上限，真正的核心是计算 $\int_0^a \frac{dx}{(1+x^2)^2}$。看到 $1+x^2$ 的平方，立刻想到三角换元 $x=\tan t$，或记忆积分公式。

**推演**

1. 求拐点。

给定
$$
y=\frac{1}{1+x^2}.
$$

一阶导数：
$$
y'=-\frac{2x}{(1+x^2)^2}.
$$

二阶导数：
$$
\begin{aligned}
y''&=\frac{d}{dx}\left[-2x(1+x^2)^{-2}\right]\\
&=-2(1+x^2)^{-2}+(-2x)(-2)(1+x^2)^{-3}(2x)\\
&=-\frac{2}{(1+x^2)^2}+\frac{8x^2}{(1+x^2)^3}\\
&=\frac{-2(1+x^2)+8x^2}{(1+x^2)^3}\\
&=\frac{6x^2-2}{(1+x^2)^3}
=\frac{2(3x^2-1)}{(1+x^2)^3}.
\end{aligned}
$$

令 $y''=0$，得 $3x^2-1=0$，所以 $x=\frac{1}{\sqrt3}$（负根不在 $x\ge0$ 内舍去）。

在 $x=\frac{1}{\sqrt3}$ 两侧，$y''$ 由负变正（例如 $x=0$ 时 $y''<0$，$x=1$ 时 $y''>0$），因此该点是拐点的横坐标，故
$$
a=\frac{1}{\sqrt3}.
$$

2. 写出旋转体体积公式。

区域 $D$ 由曲线 $y=\frac{1}{1+x^2}$、$x$ 轴、$x=0$ 和 $x=a$ 围成，绕 $x$ 轴旋转一周，用圆盘法：
$$
V=\pi\int_0^a y^2\,dx
=\pi\int_0^{1/\sqrt3}\frac{1}{(1+x^2)^2}\,dx.
$$

3. 计算积分。

方法一：三角换元。令 $x=\tan t$，则 $dx=\sec^2t\,dt$，且当 $x=0$ 时 $t=0$，当 $x=\frac{1}{\sqrt3}$ 时 $t=\frac{\pi}{6}$。于是
$$
\begin{aligned}
\int_0^{1/\sqrt3}\frac{dx}{(1+x^2)^2}
&=\int_0^{\pi/6}\frac{\sec^2t}{\sec^4t}dt\\
&=\int_0^{\pi/6}\cos^2t\,dt\\
&=\int_0^{\pi/6}\frac{1+\cos2t}{2}dt\\
&=\left[\frac{t}{2}+\frac{\sin2t}{4}\right]_0^{\pi/6}\\
&=\frac{\pi}{12}+\frac{\sin(\pi/3)}{4}\\
&=\frac{\pi}{12}+\frac{\sqrt3}{8}.
\end{aligned}
$$

因此
$$
V=\pi\left(\frac{\pi}{12}+\frac{\sqrt3}{8}\right)
=\frac{\pi^2}{12}+\frac{\sqrt3\pi}{8}.
$$

方法二（自检）：利用递推公式
$$
I_n=\int\frac{dx}{(1+x^2)^n},\qquad
I_{n+1}=\frac{x}{2n(1+x^2)^n}+\frac{2n-1}{2n}I_n.
$$
取 $n=1$ 时，
$$
\int\frac{dx}{(1+x^2)^2}=\frac{x}{2(1+x^2)}+\frac12\arctan x+C.
$$
代入 $0$ 到 $\frac{1}{\sqrt3}$：
$$
\left[\frac{x}{2(1+x^2)}+\frac12\arctan x\right]_0^{1/\sqrt3}
=\frac{\frac{1}{\sqrt3}}{2\cdot\frac43}+\frac12\cdot\frac{\pi}{6}
=\frac{\sqrt3}{8}+\frac{\pi}{12}.
$$
与三角换元结果一致，说明计算无误。

所以
$$
\boxed{V=\frac{\pi^2}{12}+\frac{\sqrt3\pi}{8}}.
$$

**易错点**

1. 二阶导求错：$y''$ 容易漏掉 $-2(1+x^2)^{-2}$ 项或把符号算错，建议用商的求导公式或把 $y$ 写成 $(1+x^2)^{-1}$ 后求导，并化简通分。
2. 拐点判定不完整：不仅要 $y''=0$，还要说明两侧 $y''$ 变号；本题 $x\ge0$ 只保留 $x=\frac{1}{\sqrt3}$。
3. 旋转体体积公式写错：绕 $x$ 轴旋转应是 $V=\pi\int y^2\,dx$，容易漏掉 $\pi$ 或写成 $\int y\,dx$。
4. 三角换元后忘记换限：$x=\tan t$ 的上下限要同步换成 $t$ 的上下限 $0$ 到 $\pi/6$，不能仍用 $x$ 的上下限。
5. 积分公式记忆错误：$\int \frac{dx}{(1+x^2)^2}$ 不是 $\arctan x$ 的简单形式，需要额外项 $\frac{x}{2(1+x^2)}$；用三角换元时 $\cos^2t$ 要写成 $\frac{1+\cos2t}{2}$ 再积分。

**命题规律**

本题属于高数中“导数应用 + 定积分应用”的典型拼接题，难度不大但计算量适中。命题人常把拐点、极值点、切点等作为积分限，再要求计算旋转体体积或平面图形面积。复习时应熟练掌握：
- 拐点、极值点的求法与判定；
- 旋转体体积公式 $V=\pi\int_a^b [f(x)]^2\,dx$（绕 $x$ 轴）和 $V=2\pi\int_a^b xf(x)\,dx$（绕 $y$ 轴，壳法）等；
- $\frac{1}{(1+x^2)^n}$ 型积分的三角换元或递推公式；
- 常见原函数如 $\arctan x$ 及其组合。

这类题只要分步做稳，基本可以拿满分。


> 来源：《26_姜晓千四套卷（数一）》卷三 第 17 题
