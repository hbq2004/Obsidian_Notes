---
ctime: 2026-08-24 17:34:54
mtime: 2026-08-24 17:34:54
tags:
  - AM
  - 26_张宇八套卷/卷三/FIB
  - 计算题
  - 三重积分
  - 形心坐标
  - 柱坐标
  - 旋转体体积
  - 质心公式
points:
level:
---

# FIB 第 13 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S3-Q13_题目.png|题目]]

设 $\Omega$ 是由上半球面 $z = \sqrt{4 - x^2 - y^2}$ 与曲面 $x^2 + y^2 = 3z$ 所围成的空间有界闭区域，则 $\Omega$ 的形心竖坐标 $\bar{z} = \_\_\_\_$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S3-Q13_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

设 $\Omega$ 由上半球面 $z=\sqrt{4-x^2-y^2}$ 与抛物面 $x^2+y^2=3z$ 围成。两曲面的交线满足
$$
z=\sqrt{4-x^2-y^2},\qquad x^2+y^2=3z,
$$
代入得 $3z=\sqrt{4-3z}$，平方后 $9z^2=3z+4$，即 $9z^2-3z-4=0$，解得 $z=\frac43$（另一根为负，不在上半球范围）。故两曲面在平面 $z=\frac43$ 处相交，交线为 $x^2+y^2=4$。

因此
$$
\Omega=\{(x,y,z): 0\le z\le \frac43,\ \frac{x^2+y^2}{3}\le z\le \sqrt{4-x^2-y^2}\}.
$$

体积
$$
V=\iiint_\Omega dV
=\int_0^{2} d\rho\int_0^{2\pi} d\theta\int_{\rho^2/3}^{\sqrt{4-\rho^2}} \rho\,dz
=2\pi\int_0^2 \rho\left(\sqrt{4-\rho^2}-\frac{\rho^2}{3}\right)d\rho.
$$

计算得
$$
\int_0^2 \rho\sqrt{4-\rho^2}\,d\rho
=\left[-\frac13(4-\rho^2)^{3/2}\right]_0^2
=\frac83,
$$
$$
\int_0^2 \frac{\rho^3}{3}\,d\rho=\frac{4}{3}.
$$
故
$$
V=2\pi\left(\frac83-\frac43\right)=\frac{8\pi}{3}.
$$

形心竖坐标
$$
\bar z=\frac{1}{V}\iiint_\Omega z\,dV.
$$

先求
$$
\iiint_\Omega z\,dV
=\int_0^2 d\rho\int_0^{2\pi} d\theta\int_{\rho^2/3}^{\sqrt{4-\rho^2}} z\rho\,dz
=2\pi\int_0^2 \rho\cdot \frac12\left[(4-\rho^2)-\frac{\rho^4}{9}\right]d\rho
=\pi\int_0^2 \left(4\rho-\rho^3-\frac{\rho^5}{9}\right)d\rho.
$$

计算得
$$
\int_0^2 4\rho\,d\rho=8,\qquad
\int_0^2 \rho^3\,d\rho=4,\qquad
\int_0^2 \frac{\rho^5}{9}\,d\rho=\frac{32}{27}.
$$
所以
$$
\iiint_\Omega z\,dV=\pi\left(8-4-\frac{32}{27}\right)
=\pi\left(4-\frac{32}{27}\right)
=\frac{76\pi}{27}.
$$

因此
$$
\bar z=\frac{76\pi/27}{8\pi/3}
=\frac{76}{27}\cdot\frac{3}{8}
=\frac{19}{18}.
$$

**解题切入点**

本题是典型的三重积分几何应用：先通过两曲面交线确定积分区域的上下界，再用柱坐标计算体积和一阶矩。算法竞赛中可类比为“先算清楚合法状态空间（区域），再维护加权和求平均值”。

**推演**

1. 求交线：
$$
3z=\sqrt{4-3z}\implies 9z^2=4-3z\implies 9z^2+3z-4=0\implies z=\frac43.
$$
故 $x^2+y^2=4$。

2. 确定 $z$ 的范围：对固定的 $(x,y)$，抛物面在下，球面在上，故
$$
\frac{x^2+y^2}{3}\le z\le \sqrt{4-x^2-y^2}.
$$
3. 柱坐标 $x=\rho\cos\theta,\ y=\rho\sin\theta,\ z=z$，$0\le\rho\le2$，$0\le\theta\le2\pi$。
4. 算体积 $V$。
5. 算 $\iiint z\,dV$。
6. 用 $\bar z=\frac{\iiint z\,dV}{V}$。

**易错点**

- 两曲面交线不能只从 $z$ 相等直接平方，必须注意 $z=\sqrt{4-3z}$ 的非负性；解出 $z=-1$ 应舍去。
- $\rho$ 上限是由交线得 $2$，不要误取为球半径 $2$ 以外的范围；本题中恰好是 $2$，但应通过交线明确。
- 柱坐标体积微元是 $\rho\,d\rho\,d\theta\,dz$，容易漏掉 $\rho$。
- 最后求形心时不要忘记除以体积 $V$。

**命题规律**

三重积分求体积、形心是高频考点，常以球面、抛物面、锥面围成区域命题。复习时应熟练掌握柱坐标、球坐标的换元，以及“先定交线、再定上下界”的步骤。此类题计算量不大，重在熟练和细心。


> 来源：《26_张宇八套卷（数一）》卷三 第 13 题
