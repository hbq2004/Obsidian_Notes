---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
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

## 解析（AI 生成，仅供参考）

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

> AI 生成，仅供参考。

