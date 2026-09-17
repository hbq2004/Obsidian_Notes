---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-20 01:32:04
tags:
  - AM
  - 26_ep最后一卷/套五/FRQ
  - 计算题
  - 斯托克斯公式
  - 旋度计算
  - 曲面积分
  - 二重积分对称性
  - 空间曲线
points:
level:
---

# FRQ 第 19 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q19_题目.png|题目]]

19. (本题满分 12 分)

已知有向曲线 $\Gamma$ 为球面 $x^2 + y^2 + z^2 = 1$ 与球面 $(x-1)^2 + y^2 + (z-1)^2 = 1$ 的交线，从 $z$ 轴正向往 $z$ 轴负向看去为逆时针方向，计算曲线积分 $\int_{\Gamma}(6xyz - 4yz^2) \, dx + 3x^2z \, dy + xyz \, dz$


---

## DeepSeek V4 Flash Max

【考点】本题考查空间曲线积分的计算，核心是利用斯托克斯公式（旋度定理）将曲线积分转化为曲面积分，再化为二重积分。类似算法竞赛中利用对称性或线性变换简化问题，关键在于正确确定曲面法向量方向与投影区域。

【解】设向量场 $\mathbf{F} = (P,Q,R)$，其中 $P = 6xyz - 4yz^2$, $Q = 3x^2z$, $R = xyz$。

计算旋度：
$$\mathrm{rot}\,\mathbf{F} = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z},\ \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x},\ \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)$$
逐项计算：
$\frac{\partial R}{\partial y} = xz$，$\frac{\partial Q}{\partial z} = 3x^2$，故第一分量为 $xz - 3x^2$；
$\frac{\partial P}{\partial z} = 6xy - 8yz$，$\frac{\partial R}{\partial x} = yz$，故第二分量为 $6xy - 9yz$；
$\frac{\partial Q}{\partial x} = 6xz$，$\frac{\partial P}{\partial y} = 6xz - 4z^2$，故第三分量为 $4z^2$。
所以 $\mathrm{rot}\,\mathbf{F} = (xz - 3x^2,\ 6xy - 9yz,\ 4z^2)$。

两球面方程相减：第一个方程 $x^2+y^2+z^2=1$，第二个展开得 $x^2+y^2+z^2 -2x -2z +1 =0$，代入第一个得 $1 -2x -2z +1 =0$，即 $x+z=1$。因此交线位于平面 $x+z=1$ 上。

取曲面 $S$ 为平面 $x+z=1$ 上被交线围成的圆盘，其法向量取为 $\mathbf{n} = \frac{1}{\sqrt2}(1,0,1)$，该方向与曲线从 $z$ 轴正向看逆时针的定向相符（右手定则）。由斯托克斯公式：
$$\int_\Gamma \mathbf{F}\cdot d\mathbf{r} = \iint_S (\mathrm{rot}\,\mathbf{F})\cdot \mathbf{n}\, dS$$

在平面 $x+z=1$ 上，$z=1-x$。曲面 $S$ 在 $xy$ 平面的投影区域 $D$ 为 $y^2 \le 2x(1-x)$，即椭圆盘 $\frac{(x-\frac12)^2}{1/4} + \frac{y^2}{1/2} \le 1$。面积元 $dS = \sqrt{1+(\partial z/\partial x)^2+(\partial z/\partial y)^2}\,dxdy = \sqrt2\,dxdy$。所以
$$\iint_S (\mathrm{rot}\,\mathbf{F})\cdot \mathbf{n}\, dS = \iint_D (\mathrm{rot}\,\mathbf{F})\cdot (1,0,1)\, dxdy$$

计算 $\mathrm{rot}\,\mathbf{F}\cdot(1,0,1) = (xz - 3x^2) + 4z^2$，代入 $z=1-x$ 得：
$$f(x,y) = x(1-x) - 3x^2 + 4(1-x)^2 = x - x^2 - 3x^2 + 4(1 - 2x + x^2) = 4 - 7x$$

于是积分化为 $\iint_D (4-7x)\,dxdy$。区域 $D$ 关于直线 $x=\frac12$ 对称，且 $4-7x = \frac12 - 7(x-\frac12)$，其中 $-7(x-\frac12)$ 为奇函数，积分贡献为零，因此
$$\iint_D (4-7x)\,dxdy = \iint_D \frac12\,dxdy = \frac12 \cdot \text{面积}(D)$$

$D$ 的面积 $= \pi \cdot \frac12 \cdot \frac{1}{\sqrt2} = \frac{\pi\sqrt2}{4}$，所以原积分 $= \frac12 \cdot \frac{\pi\sqrt2}{4} = \frac{\pi\sqrt2}{8}$。

【答案】$$\int_\Gamma (6xyz - 4yz^2)\,dx + 3x^2z\,dy + xyz\,dz = \frac{\pi\sqrt2}{8}$$

关键给分点：正确求旋度（2分）；确定交线平面并取曲面（2分）；斯托克斯公式应用（2分）；投影区域及 $dS$ 因子（2分）；化简被积函数并利用对称性（2分）；二重积分计算（2分）。

【易错点】方向选择错误会导致符号相反，本题必须根据“从 $z$ 轴正向看逆时针”确定曲面法向量为 $(1,0,1)$ 方向；投影区域 $D$ 的方程易写错，需注意椭圆半轴；$dS$ 中的 $\sqrt2$ 因子不可遗漏；对称性处要将 $4-7x$ 拆成常数与奇函数之和。本题无 OCR 疑误。

【命题规律】考研数学一常考空间曲线积分，常通过斯托克斯公式转化为曲面积分，并利用对称性简化。复习时应熟练掌握旋度计算、平面法向量与边界方向的对应关系、常见区域面积。此类题目计算量适中，但步骤多，容易出错。

---

## V4 Flash Max 解析

**答案**  
$$
I=\int_\Gamma (6xyz-4yz^2)\,dx+3x^2z\,dy+xyz\,dz
=\frac{\pi}{4\sqrt2}=\frac{\sqrt2\pi}{8}.
$$

**解题切入点**  
看到“空间闭曲线积分”，第一反应是 **Stokes 公式**：把曲线积分转化为曲面积分。两球面交线一定在一个公共平面内，两式相减即可得到该平面。于是辅助曲面取这个平面上的圆盘，计算量会大幅下降。  
类似算法竞赛中把“环上路径统计”转化为“面上统计”：先用几何约束消元，再用拓扑/积分工具降维。

**推演**  
两球面方程做差：

$$
x^2+y^2+z^2=1,
$$

$$
(x-1)^2+y^2+(z-1)^2=1.
$$

展开第二式并与第一式相减，得公共平面：

$$
x+z=1.
$$

因此交线 $\Gamma$ 是平面 $x+z=1$ 上的圆。球心 $O(0,0,0)$ 到该平面距离为 $\frac1{\sqrt2}$，所以交线圆半径为

$$
\rho=\sqrt{1-\left(\frac1{\sqrt2}\right)^2}=\frac1{\sqrt2},
$$

圆心为

$$
C=\left(\frac12,0,\frac12\right).
$$

为确定 Stokes 公式中的法向，取平面内两个正交方向

$$
d_1=\frac{(1,0,-1)}{\sqrt2},\qquad d_2=(0,1,0).
$$

令

$$
r(t)=C+\frac1{\sqrt2}\bigl(\cos t\,d_1+\sin t\,d_2\bigr),
$$

得

$$
x=\frac{1+\cos t}{2},\qquad
y=\frac{\sin t}{\sqrt2},\qquad
z=\frac{1-\cos t}{2}.
$$

当 $t$ 从 $0$ 增大到 $2\pi$ 时，投影

$$
(x,y)=\left(\frac{1+\cos t}{2},\frac{\sin t}{\sqrt2}\right)
$$

在 $xOy$ 平面上是逆时针方向，因此这正是题设方向。此时对应法向为

$$
d_1\times d_2=\frac{(1,0,1)}{\sqrt2}.
$$

设

$$
F=(P,Q,R)=\bigl(6xyz-4yz^2,\;3x^2z,\;xyz\bigr).
$$

计算旋度：

$$
\nabla\times F
=
\left(
\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z},
\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x},
\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}
\right)
$$

$$
=
\bigl(xz-3x^2,\;6xy-9yz,\;4z^2\bigr).
$$

取 $S$ 为平面 $x+z=1$ 上以 $\Gamma$ 为边界的圆盘。参数化

$$
r(x,y)=(x,y,1-x),
$$

则

$$
r_x\times r_y=(1,0,1),
$$

所以

$$
\mathbf n\,dS=(1,0,1)\,dxdy.
$$

由 Stokes 公式：

$$
I=\iint_S (\nabla\times F)\cdot \mathbf n\,dS
=\iint_D \bigl[(xz-3x^2)+4z^2\bigr]_{z=1-x}\,dxdy,
$$

其中 $D$ 是 $S$ 在 $xOy$ 平面上的投影。代入 $z=1-x$：

$$
(xz-3x^2)+4z^2
=x(1-x-3x)+4(1-x)^2
=4-7x.
$$

于是

$$
I=\iint_D (4-7x)\,dxdy.
$$

投影区域 $D$ 满足

$$
x^2+y^2+(1-x)^2\le 1,
$$

即

$$
2\left(x-\frac12\right)^2+y^2\le \frac12.
$$

这是中心在 $\left(\frac12,0\right)$ 的椭圆，面积为

$$
A(D)=\frac{\pi}{2\sqrt2}.
$$

由于 $D$ 关于直线 $x=\frac12$ 对称，

$$
\iint_D x\,dxdy=\frac12 A(D).
$$

因此

$$
I=4A(D)-7\cdot \frac12 A(D)
=\frac12 A(D)
=\frac{\pi}{4\sqrt2}
=\frac{\sqrt2\pi}{8}.
$$

**易错点**  
- **方向符号**：Stokes 公式中法向取反会导致整体符号相反。本题用参数方程 $t$ 增大时投影为逆时针来定法向，避免符号错误。  
- **面积因子**：用 $r(x,y)=(x,y,1-x)$ 时，$\mathbf n\,dS=(1,0,1)\,dxdy$，不要再额外乘 $\sqrt2$。  
- **投影区域**：$D$ 是椭圆，不是圆；面积为 $\pi/(2\sqrt2)$，不要误写成 $\pi/4$ 或 $\pi/2$。  
- **自检**：用参数式 $x=\frac{1+\cos t}{2}$，$y=\frac{\sin t}{\sqrt2}$，$z=\frac{1-\cos t}{2}$ 直接代入原积分，利用 $\langle \sin^2\rangle=1/2$、$\langle \sin^4\rangle=3/8$ 等均值可得到同一结果，说明法向和面积因子正确。

**命题规律**  
考研数学一常把 **Stokes 公式** 与“两球面交线”结合考查。核心步骤往往是：

1. 两曲面方程相减，得到交线所在平面；  
2. 取该平面上的圆盘为辅助曲面；  
3. 计算旋度并转化为投影区域上的二重积分；  
4. 最终化为椭圆面积或线性函数积分。

常见变式包括：换成一个球面与一个平面的交线、把曲线积分改成第二型曲面积分、或需要先补线再用 Green/Stokes 公式。本质上都是“空间闭曲线积分优先降维”。
