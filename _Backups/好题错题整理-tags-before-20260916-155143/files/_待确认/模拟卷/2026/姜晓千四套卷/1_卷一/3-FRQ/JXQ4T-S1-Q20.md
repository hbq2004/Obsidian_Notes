---
ctime: 2026-08-23 21:36:40
mtime: 2026-08-23 21:36:40
tags:
  - AM
  - 26_姜晓千四套卷/卷一/FRQ
  - 计算题
  - 斯托克斯公式
  - 曲面积分计算
  - 对称性
  - 投影法
  - 空间曲线方向
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S1-Q20_题目.png|题目]]

设 $L$ 为半球面 $x^2 + y^2 + z^2 = 2bx (z \geqslant 0)$ 与柱面 $x^2 + y^2 = 2ax (b > a > 0)$ 的交线（如图所示），从 $z$ 轴正向往 $z$ 轴负向看为逆时针方向，计算积分 $I = \oint_L (y^2 + z^2)\mathrm{d}x + (z^2 + x^2)\mathrm{d}y + (x^2 + y^2)\mathrm{d}z.$

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S1-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
$I = 2\pi a^2 b$。

**解题切入点**
考查斯托克斯公式与曲面积分计算。类比算法竞赛中，将曲线积分转化为曲面积分，利用对称性和投影简化计算，类似将复杂循环转化为简单面积分。

**推演**
1. 应用斯托克斯公式：
   $$\oint_L P\mathrm{d}x+Q\mathrm{d}y+R\mathrm{d}z = \iint_S \left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right)\mathrm{d}y\mathrm{d}z + \left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right)\mathrm{d}z\mathrm{d}x + \left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}x\mathrm{d}y.$$
   $P=y^2+z^2,\,Q=z^2+x^2,\,R=x^2+y^2$，计算旋度：
   $$\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}=2y-2z,\quad \frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}=2z-2x,\quad \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=2x-2y.$$
   旋度向量 $\boldsymbol{\omega}=2(y-z,\,z-x,\,x-y)$。

2. 选择曲面 $S$ 为半球面 $x^2+y^2+z^2=2bx\,(z\geqslant0)$ 被柱面 $x^2+y^2=2ax$ 截下的部分，定向取外法向（向上），与 $L$ 的逆时针方向构成右手系。

3. 将曲面积分投影到 $xy$ 平面：$S$ 的方程为 $z=\sqrt{2bx-x^2-y^2}$，在 $xy$ 平面投影区域 $D=\{(x,y)\mid (x-a)^2+y^2\leqslant a^2\}$。计算偏导：
   $$z_x=\frac{b-x}{z},\quad z_y=-\frac{y}{z}.$$
   有向面元 $\mathrm{d}\boldsymbol{S}=(-z_x,-z_y,1)\mathrm{d}x\mathrm{d}y$，故
   $$\begin{aligned} I &= \iint_S \boldsymbol{\omega}\cdot\mathrm{d}\boldsymbol{S} \\
   &= \iint_D 2\left[(y-z)(-z_x)+(z-x)(-z_y)+(x-y)\right]\mathrm{d}x\mathrm{d}y \\
   &= \iint_D 2\left[(y-z)\frac{x-b}{z}+(z-x)\frac{y}{z}+(x-y)\right]\mathrm{d}x\mathrm{d}y \\
   &= \iint_D 2\left[\frac{(y-z)(x-b)+(z-x)y}{z}+(x-y)\right]\mathrm{d}x\mathrm{d}y \\
   &= \iint_D 2\left[\frac{-b(y-z)}{z}\right]\mathrm{d}x\mathrm{d}y \\
   &= -2b\iint_D \left(\frac{y}{z}-1\right)\mathrm{d}x\mathrm{d}y. \end{aligned}$$

4. 由于 $D$ 关于 $x$ 轴对称，$z$ 是 $y$ 的偶函数，$\frac{y}{z}$ 是 $y$ 的奇函数，故 $\iint_D \frac{y}{z}\mathrm{d}x\mathrm{d}y=0$。

5. $\iint_D 1\mathrm{d}x\mathrm{d}y$ 为 $D$ 的面积，$D$ 是半径为 $a$ 的圆盘，面积为 $\pi a^2$。因此
   $$I = -2b\cdot(-\pi a^2) = 2\pi a^2 b.$$

**关键给分点**：①写出斯托克斯公式（1分）；②正确计算旋度（1分）；③选择合适曲面并定向（1分）；④投影计算并化简至 $-2b\iint_D(y/z-1)\mathrm{d}x\mathrm{d}y$（2分）；⑤利用对称性消去奇函数项（1分）；⑥计算区域面积（1分）；⑦得出结果（1分）。

**易错点**
- 曲面方向与曲线方向必须匹配，否则符号错误。
- 投影法计算曲面积分时，注意 $z_x,z_y$ 的正确符号。
- 区域 $D$ 的对称性容易忽略，需确认被积函数奇偶性。
- 原点处 $z=0$ 可能引起奇异，但被积函数有界，不影响积分。

**命题规律**
此类题目常将空间曲线积分与斯托克斯公式结合，转化为曲面积分后利用投影法和对称性简化计算。复习时应熟练掌握斯托克斯公式、曲面积分投影法，并注意方向匹配。


> 来源：《26_姜晓千四套卷（数一）》卷一 第 20 题
