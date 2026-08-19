---
ctime: 2026-08-16 21:45:22
mtime: 2026-08-20 01:07:41
tags:
  - AM
  - 27_1000/C12/b/FRQ
  - 积分的物理应用
  - 液体静压力
  - 变化率
  - 变限积分
points:
level:
---

# FRQ 第 2 题

![[_Attachments/题目识别/1000-GS/1000-GS-TDD0CBB-Q002_题目.png|题目]]

2. 边长为 2 的等边三角形薄平板铅直沉没在水中, 且一条边与水面相齐. 记重力加速度为 $g$, 水的密度为 $\rho$.

(1) 求该平板一侧所受的水压力;

(2) 当水面开始以 0.1 的速度上涨时, 求平板一侧所受水压力的变化率.

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-GS-TDD0CBB-Q002_答案.png|答案]]

## V4 Pro Max 解析

**答案**：（1）$F=\rho g$；（2）$\dfrac{\sqrt3}{10}\rho g$

**切入点**：等边三角形（边 2，高 $\sqrt3$）一条边与水面相齐，写出深度-宽度函数积分；水位上涨时把相对深度写成含 $s(t)$ 的变限积分再求导。

**推演**

（1）底边在水面，顶点在深 $\sqrt3$，宽度 $w(y)=2\bigl(1-\frac y{\sqrt3}\bigr)$：

$$F=\int_0^{\sqrt3}\rho gy\cdot2\Bigl(1-\frac y{\sqrt3}\Bigr)dy=2\rho g\Bigl(\frac32-\frac{3}{3}\Bigr)=\rho g.$$

（2）水面上涨 $s(t)$（$s'=0.1$）后，底边在深 $s$、顶点在深 $s+\sqrt3$。令 $u=y-s$：

$$F(s)=\int_s^{s+\sqrt3}\rho gy\cdot2\Bigl(1-\frac{y-s}{\sqrt3}\Bigr)dy=2\rho g\int_0^{\sqrt3}(s+u)\Bigl(1-\frac u{\sqrt3}\Bigr)du=\rho g(s\sqrt3+1).$$

于是

$$\frac{dF}{dt}=\rho g\sqrt3\cdot\frac{ds}{dt}=\rho g\sqrt3\cdot0.1=\frac{\sqrt3}{10}\rho g.$$

**易错点**：变限积分求导时内层 $u=y-s$ 依赖 $s$，换元 $u=y-s$ 后上限与 $s$ 无关，只剩被积函数含 $s$；变化率要乘 $\frac{ds}{dt}$。

**命题规律**：变力/变压力含运动参数时，先写出 $F(s)$ 再对时间求导；换元把 $s$ 从积分限移到被积函数更易求导。
