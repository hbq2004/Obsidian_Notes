---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - AM
  - 26_李林六套卷/卷一/FRQ
  - 计算题
  - 第二型曲面积分
  - 上侧定向
  - 极坐标换元
  - 向量场通量
points:
level:
---

# 解答题 第 18 题

![[_Attachments/题目识别/LL6T/LL6T-S1-Q18_题目.png|题目]]

设 $\Sigma$ 为曲面 $z = 2 - x^2 - y^2 (x \geq 0, y \geq 0)$ 被柱面 $x^2 + y^2 = 1$ 所截出部分的上侧，计算
$$I = \iint_{\Sigma} yz dxdy + zx dydz + xy dzdx.$$

![[_Attachments/题目识别/LL6T-答案/LL6T-S1-Q18_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

解答题【答案】：
$$
I=\frac{\pi}{6}+\frac{3}{5}.
$$

关键给分点：
1. 将曲面写成 \(z=f(x,y)=2-x^2-y^2\)，上侧对应微元关系
$$
dydz=-f_x\,dxdy=2x\,dxdy,\quad dzdx=-f_y\,dxdy=2y\,dxdy,\quad dxdy=dxdy.
$$
2. 化到 \(D=\{(x,y):x\ge0,y\ge0,x^2+y^2\le1\}\) 上的二重积分：
$$
I=\iint_D[2x^2(2-x^2-y^2)+2xy^2+y(2-x^2-y^2)]\,dxdy.
$$
3. 极坐标计算得 \(I=\pi/6+3/5\)。

**解题切入点**

把该第二型曲面积分看成向量场 \(\mathbf F=(zx,xy,yz)\) 沿上侧曲面的通量。类似算法竞赛中把不同状态的边权统一归约到同一坐标系：这里利用 \(z=f(x,y)\) 把 \(dydz,dzdx\) 都投影到 \(xOy\)，符号和因子由法向决定。

**推演**

设 \(D=\{(x,y):x\ge0,y\ge0,x^2+y^2\le1\}\)，\(f_x=-2x, f_y=-2y\)。上侧时：
$$
dydz=2x\,dxdy,\quad dzdx=2y\,dxdy.
$$
代入原式：
$$
I=\iint_D[ yz+2x^2z+2xy^2]\,dxdy.
$$
令 \(x=r\cos\theta, y=r\sin\theta\)，则 \(0\le r\le1, 0\le\theta\le\pi/2\)，且 \(z=2-r^2\)。于是
$$
I=\int_0^{\pi/2}\int_0^1[2r^3(2-r^2)\cos^2\theta+2r^4\cos\theta\sin^2\theta+r^2(2-r^2)\sin\theta]\,dr\,d\theta.
$$
逐项积分：
$$
\int_0^1 2r^3(2-r^2)\,dr=\frac{2}{3},\quad \int_0^{\pi/2}\cos^2\theta\,d\theta=\frac{\pi}{4};
$$
$$
\int_0^1 2r^4\,dr=\frac{2}{5},\quad \int_0^{\pi/2}\cos\theta\sin^2\theta\,d\theta=\frac{1}{3};
$$
$$
\int_0^1 r^2(2-r^2)\,dr=\frac{7}{15},\quad \int_0^{\pi/2}\sin\theta\,d\theta=1.
$$
所以：
$$
I=\frac{\pi}{4}\cdot\frac{2}{3}+\frac{2}{5}\cdot\frac{1}{3}+\frac{7}{15}=\frac{\pi}{6}+\frac{2}{15}+\frac{7}{15}=\frac{\pi}{6}+\frac{3}{5}.
$$
自检：三项均非负，结果合理；若取下侧则整体变号。

**易错点**

- 上侧时 \(dxdy\) 符号为正；若把上侧误作下侧，整个积分会差一个负号。
- 不能把 \(zx\,dydz\) 直接写成 \(zx\,dxdy\)，要乘 \(dydz=2x\,dxdy\)，否则漏掉因子 \(2x\)。
- 区域是第一象限四分之一圆，极角范围是 \(0\sim\pi/2\)，不是 \(0\sim2\pi\)。
- 注意项的名称对应：\(P=zx\)（对 \(dydz\)），\(Q=xy\)（对 \(dzdx\)），\(R=yz\)（对 \(dxdy\)），代入通量公式时不要错位。

**命题规律**

第二型曲面积分命题常见两种路径：封闭曲面优先考虑高斯公式；非封闭曲面优先用投影法。本题曲面显式为 \(z=f(x,y)\)，直接用 \(xOy\) 投影最省力。复习时把 \(dydz=-z_x dxdy, dzdx=-z_y dxdy\) 作为固定结论记忆，配合极坐标处理区域。


> 来源：《26_李林六套卷（数一）》卷一 第 18 题
