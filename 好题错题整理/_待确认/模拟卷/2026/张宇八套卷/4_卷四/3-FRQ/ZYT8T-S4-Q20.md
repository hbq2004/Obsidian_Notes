---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷四/FRQ
  - 计算题
  - 第一类曲线积分
  - 空间圆参数化
  - 对称性化简
  - 弧长微元
  - 三角积分
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S4-Q20_题目.png|题目]]

设 $\Gamma$ 为球面 $x^2 + y^2 + z^2 = m^2$ 与平面 $x + z = m(m > 0)$ 的交线,计算 $I = \oint_{\Gamma} xz(1 + yz - xy) \mathrm{d}s$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S4-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
$$
I=\oint_\Gamma xz(1+yz-xy)\,ds
=\frac{m^3\pi}{4\sqrt2}
=\frac{\sqrt2}{8}m^3\pi.
$$

关键给分点：
- 将 $xz(1+yz-xy)=xz+y\,xz(z-x)$，由 $\Gamma$ 关于 $y=0$ 对称，含 $y$ 的积分为 $0$；
- 参数化 $x=\frac m2(1+\cos\theta), y=\frac m{\sqrt2}\sin\theta, z=\frac m2(1-\cos\theta)$，并算得 $ds=\frac m{\sqrt2}d\theta$；
- 代入得只需计算 $\int_0^{2\pi}\frac{m^2}{4}\sin^2\theta\cdot\frac m{\sqrt2}d\theta$；
- 用 $\int_0^{2\pi}\sin^2\theta\,d\theta=\pi$ 得结果。

**解题切入点**
本题是空间第一类曲线积分。核心破题点是“含 $y$ 的项整体是奇函数”：拆项后利用 $\Gamma$ 关于平面 $y=0$ 的对称性消去复杂项，剩下 $xz$ 再参数化求弧长积分。类比算法竞赛：先利用对称性降维，再按参数直接积分。

**推演**
1. 化简：
$$
xz(1+yz-xy)=xz+y\,xz(z-x).
$$
因为交线由 $x+z=m$ 与 $x^2+y^2+z^2=m^2$ 给出，$(x,y,z)\in\Gamma$ 时 $(x,-y,z)\in\Gamma$，且 $ds$ 不变；被积函数第二项关于 $y$ 为奇函数，故
$$
\oint_\Gamma y\,xz(z-x)\,ds=0.
$$
所以只需算 $I=\oint_\Gamma xz\,ds$。

2. 参数化圆。由 $x+z=m$ 令 $u=x-z$，则 $x=(m+u)/2,z=(m-u)/2$，代入球面得 $u^2+2y^2=m^2$。故可令 $u=m\cos\theta$，$y=\frac m{\sqrt2}\sin\theta$，即
$$
x=\frac m2(1+\cos\theta),\quad z=\frac m2(1-\cos\theta),\quad 0\le\theta\le2\pi.
$$
切向量模长为
$$
ds=\sqrt{(-m\sin\theta/2)^2+(m\cos\theta/\sqrt2)^2+(m\sin\theta/2)^2}\,d\theta
=\frac m{\sqrt2}d\theta.
$$

3. 代回：
$$
xz=\frac{m^2}{4}\sin^2\theta,
$$
故
$$
I=\int_0^{2\pi}\frac{m^2}{4}\sin^2\theta\cdot\frac m{\sqrt2}\,d\theta
=\frac{m^3}{4\sqrt2}\int_0^{2\pi}\sin^2\theta\,d\theta
=\frac{m^3\pi}{4\sqrt2}.
$$

**易错点**
- 容易忽略 $\Gamma$ 关于 $y=0$ 对称，直接做完整三角展开；虽然也能算，但易在 $m^5$ 项系数上出错。
- $ds$ 是三维切向量模长，不是 $dx$ 或 $dy$；参数化后要平方相加再开方。
- 对弧长的曲线积分与方向无关，不需要规定 $\theta$ 的走向；但 $ds>0$，参数微元应取正。
- 最后化简 $\frac1{4\sqrt2}$ 时可写成 $\frac{\sqrt2}{8}$，不要误写成 $\frac1{8}$。

**命题规律**
命题常把平面截球得到的圆作为积分路径，考查第一类曲线积分。复习时掌握“交线圆参数化 + 对称性消项 + 三角积分”三板斧即可。类似题还可能把被积函数改成 $x^2z$、$yz$ 等，仍用同一套路。


> 来源：《26_张宇八套卷（数一）》卷四 第 20 题
