---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - AM
  - 26_张宇四套卷/卷四/FRQ
  - 计算题
  - 第二类曲面积分
  - 高斯公式
  - 极坐标计算
  - 曲面定向
  - 有向面积微元
points:
level:
---

# 解答题 第 20 题

![[_Attachments/题目识别/ZY4T/ZY4T-S4-Q20_题目.png|题目]]

设有界曲面 $\Sigma$ 为旋转抛物面 $z = a - x^2 - y^2 (x \geq 0, y \geq 0)$ 被柱面 $x^2 + y^2 = \frac{a}{2}$ 所截取部分的上侧，其中 $a > 0$，计算
$$ I = \iint_{\Sigma} xz dy dz + xy dz dx + yz dx dy . $$

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S4-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

令 $\mathbf F=(xz,xy,yz)$，则所求为该向量场在曲面 $\Sigma$ 上侧的通量。最终
$$
I=\frac{\pi}{48}a^3+\frac{3\sqrt{2}}{40}a^{5/2}.
$$

关键给分点：①由“上侧”写出有向面积微元 $d\mathbf S=(2x,2y,1)\,dxdy$；②正确写出投影区域 $D=\{(x,y):x^2+y^2\le a/2,\ x\ge0,\ y\ge0\}$；③代入 $z=a-x^2-y^2$ 并化极坐标；④逐项积分求出结果。

**解题切入点**

考查第二类曲面积分的定向投影。把积分看成向量场 $\mathbf F$ 的上侧通量，先由 $z=f(x,y)$ 的上侧公式写出 $d\mathbf S$，再在四分之一圆盘上用极坐标积分。这相当于算法题中的“先确定坐标系与积分区域，再按项计算”。

**推演**

设 $P=xz,\ Q=xy,\ R=yz$。曲面 $z=f(x,y)=a-x^2-y^2$ 的上侧方向取
$$
d\mathbf S=(-f_x,-f_y,1)\,dxdy=(2x,2y,1)\,dxdy,
$$
因此
$$
I=\iint_\Sigma P\,dydz+Q\,dzdx+R\,dxdy
=\iint_D (2x^2z+2xy^2+yz)\,dxdy,
$$
其中
$$
D=\{(x,y):x^2+y^2\le a/2,\ x\ge0,\ y\ge0\}.
$$

代入 $z=a-x^2-y^2$，并令 $x=r\cos\theta,\ y=r\sin\theta$，$R_0=\sqrt{a/2}$，$0\le\theta\le\pi/2$：
$$
I=\int_0^{\pi/2}\int_0^{R_0}
[2r^3\cos^2\theta(a-r^2)+2r^4\cos\theta\sin^2\theta+r^2\sin\theta(a-r^2)]\,dr\,d\theta.
$$

逐项对 $r$ 积分：
$$
\int_0^{R_0}r^3(a-r^2)\,dr=\frac{aR_0^4}{4}-\frac{R_0^6}{6},
\quad
\int_0^{R_0}2r^4\,dr=\frac{2R_0^5}{5},
$$
$$
\int_0^{R_0}r^2(a-r^2)\,dr=\frac{aR_0^3}{3}-\frac{R_0^5}{5}.
$$

又
$$
\int_0^{\pi/2}\cos^2\theta\,d\theta=\frac{\pi}{4},\quad
\int_0^{\pi/2}\cos\theta\sin^2\theta\,d\theta=\frac{1}{3},\quad
\int_0^{\pi/2}\sin\theta\,d\theta=1.
$$

所以
$$
I=
\frac{\pi}{4}\left(\frac{aR_0^4}{2}-\frac{R_0^6}{3}\right)
+\frac{1}{3}\cdot\frac{2R_0^5}{5}
+\left(\frac{aR_0^3}{3}-\frac{R_0^5}{5}\right).
$$

由 $R_0^2=a/2$ 得：
$$
\frac{aR_0^4}{2}-\frac{R_0^6}{3}=\frac{a^3}{12},
$$
$$
\frac{2R_0^5}{15}+\frac{aR_0^3}{3}-\frac{R_0^5}{5}
=\frac{\sqrt2}{60}a^{5/2}+\frac{7\sqrt2}{120}a^{5/2}
=\frac{3\sqrt2}{40}a^{5/2}.
$$

故
$$
I=\frac{\pi}{48}a^3+\frac{3\sqrt2}{40}a^{5/2}.
$$

**自检**：用高斯公式验算。$\nabla\cdot\mathbf F=x+y+z$。按底面 $z=0$、坐标面 $x=0,y=0$ 和圆柱面 $r=R_0$ 封闭，闭合通量为 $\frac{7\pi a^3}{192}+\frac{7\sqrt2}{60}a^{5/2}$；其中圆柱侧面的通量为 $\frac{\pi a^3}{64}+\frac{\sqrt2}{24}a^{5/2}$，底面和两个坐标面通量为 $0$。相减得 $\frac{\pi}{48}a^3+\frac{3\sqrt2}{40}a^{5/2}$，与直接计算一致。

**易错点**

- 定向符号：上侧一定要用 $d\mathbf S=(-f_x,-f_y,1)\,dxdy$，不要与下侧或第一类曲面积分混淆；本题 $f_x=-2x$，所以第一项出现 $2x^2z$。
- 区域：$x,y\ge0$ 使 $\theta$ 只能取 $[0,\pi/2]$，不是 $[0,2\pi]$；柱面半径是 $\sqrt{a/2}$，不是 $\sqrt a$。
- 极坐标中不要漏乘 $r$；含有 $\cos\theta\sin^2\theta$ 的项积分值为 $\frac{1}{3}$，不要误判为 $0$。
- $P,Q,R$ 中的 $z$ 必须代入 $a-x^2-y^2$ 后再积分。

**命题规律**

这是考研数学一常考的第二类曲面积分中档题，常与“上/下侧定向”“高斯公式”“对称性”和“极坐标”结合。复习时先熟练掌握投影公式 $dydz=-f_x\,dxdy,\ dzdx=-f_y\,dxdy$ 以及高斯公式的补面技巧，再通过张宇四套卷这类综合题训练“化到二重积分后逐项积分”的稳定性。


> 来源：《26_张宇四套卷（数一）》卷四 第 20 题
