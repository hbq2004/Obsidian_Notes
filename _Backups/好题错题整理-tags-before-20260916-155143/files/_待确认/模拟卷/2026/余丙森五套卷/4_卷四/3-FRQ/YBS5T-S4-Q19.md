---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷四/FRQ
  - 计算题
  - 斯托克斯公式
  - 第二类曲面积分
  - 曲面定向
  - 对称性化简
  - 空间曲线交线
points:
level:
---

# FRQ 第 19 题

![[_Attachments/题目识别/YBS5T/YBS5T-S4-Q19_题目.png|题目]]

求 $I = \oint_{L}(y^2+z^2)\mathrm{d}x+(z^2+x^2)\mathrm{d}y+(x^2+y^2)\mathrm{d}z$ ，其中 $L$ 是球面 $x^2+y^2+z^2 = 2bx (z \geqslant 0)$ 与柱面 $x^2+y^2 = 2ax (b>a>0)$ 的交线，从 $z$ 轴正向看，$L$ 为逆时针方向.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S4-Q19_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结果：$I=2\pi a^2 b$（$b>a>0$）。关键给分点：①用斯托克斯公式；②旋度计算正确；③曲面定向与投影区域正确；④利用对称性消去 $\iint_D \frac{y}{z}\,dxdy$；⑤得圆域面积 $\pi a^2$。

**解题切入点**

题中曲线是两曲面交线，直接参数化会出现绝对值与尖点；先算旋度再用 Stokes 定理。类比算法竞赛：能“换坐标系/换积分路径”就不要硬模拟；这里把线积分变成球面上一块区域的面积分，投影后靠对称性消项。

**推演**

令 $\mathbf F=(P,Q,R)=(y^2+z^2,\,z^2+x^2,\,x^2+y^2)$。

1. 计算旋度：
$$
\nabla\times\mathbf F=\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z},\ \frac{\partial P}{\partial z}-\frac{\partial R}{\partial x},\ \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)
=2(y-z,\ z-x,\ x-y).
$$

2. 取 $S$ 为球面 $x^2+y^2+z^2=2bx$ 在 $z\ge0$ 且 $x^2+y^2\le2ax$ 内的部分。题设从 $z$ 轴正向看 $L$ 为逆时针，故 $S$ 取上侧法向量（$z$ 分量为正）。由 Stokes 公式：
$$
I=\oint_L \mathbf F\cdot d\mathbf r
=\iint_S(\nabla\times\mathbf F)\cdot\mathbf n\,dS.
$$

3. 将 $S$ 投影到 $xy$ 平面。设 $z=z(x,y)=\sqrt{2bx-x^2-y^2}$，则
$$
\mathbf n\,dS=\left(-\frac{\partial z}{\partial x},-\frac{\partial z}{\partial y},1\right)dxdy
=\left(\frac{x-b}{z},\frac{y}{z},1\right)dxdy.
$$
于是
$$
(\nabla\times\mathbf F)\cdot\mathbf n\,dS
=2\left[(y-z)\frac{x-b}{z}+(z-x)\frac{y}{z}+(x-y)\right]dxdy
=2b\left(1-\frac{y}{z}\right)dxdy.
$$

4. 投影区域 $D$ 为柱面 $x^2+y^2=2ax$ 所围圆域：
$$
D: (x-a)^2+y^2\le a^2.
$$
故
$$
I=2b\iint_D dxdy-2b\iint_D \frac{y}{z}\,dxdy.
$$
由于 $D$ 关于 $x$ 轴对称，$z$ 关于 $y$ 为偶函数，所以 $y/z$ 关于 $y$ 为奇函数，
$$
\iint_D \frac{y}{z}\,dxdy=0.
$$
因此
$$
I=2b\cdot |D|=2b\cdot \pi a^2=2\pi a^2 b.
$$

**易错点**

- 方向错误会导致差一个负号：逆时针看对应上侧法向量，不要取成下侧。
- 求旋度时注意 $P,Q,R$ 的顺序，尤其第二、三分量不要写反。
- 投影区域是柱面内部圆域 $(x-a)^2+y^2\le a^2$，不是球面在 $xy$ 平面的投影圆；$b>a$ 保证该圆域在球面投影内。
- $\frac{y}{z}$ 项不能硬算，要用关于 $y$ 的奇偶性消去。

**命题规律**

第二型曲线积分与 Stokes 公式是高频考点，常结合两曲面交线、定向判断和对称性。复习时重点训练：旋度、曲面侧与边界方向的一致性、投影法化曲面积分，以及用对称性化简。对这类题，先判断“直接参数化是否太繁”，若出现绝对值、尖点，多半走 Stokes 更优。


> 来源：《26_余丙森五套卷（数一）》卷四 第 19 题
