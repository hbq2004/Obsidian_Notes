---
ctime: 2026-08-15 19:15:50
mtime: 2026-08-15 19:15:50
tags:
  - AM
  - AM/精选好题
points:
level:
---

# FRQ 第 4 题

![[_Attachments/题目识别/OJD-EP/OJD-EP-T998A2D-Q004_题目.png|题目]]

【例4】设 $D=\{(x,y)\mid(x-1)^2+(y-1)^2\leq2\}$，计算 $\iint_{D}\sqrt{\frac{2x+2y-x^2-y^2+1}{x^2+y^2-2x-2y+3}}\,dx\,dy$.

---

## 答案与解析

**答案**：$\displaystyle \iint_{D}\sqrt{\frac{2x+2y-x^{2}-y^{2}+1}{x^{2}+y^{2}-2x-2y+3}}\,\mathrm{d}x\,\mathrm{d}y = \frac{2\pi^{2}}{3}$

**切入点**（"配方 + 平移 + 极坐标"三步走，就像先化简再套模板）：区域是圆心 $(1,1)$、半径 $\sqrt2$ 的圆，被积函数里 $x,y$ 处处以 $x-1,\;y-1$ 的平方出现——先平移把圆挪到原点，再极坐标化为一元积分。

**推演**：

令 $u=x-1,\ v=y-1$，则 $D': u^{2}+v^{2}\le 2$（Jacobi 行列式为 1）。分子、分母配方：

$$2x+2y-x^{2}-y^{2}+1=3-u^{2}-v^{2},\qquad x^{2}+y^{2}-2x-2y+3=1+u^{2}+v^{2}.$$

极坐标 $u=r\cos\theta,\ v=r\sin\theta$（$0\le r\le\sqrt2$）：

$$I=\iint_{D'}\sqrt{\frac{3-u^{2}-v^{2}}{1+u^{2}+v^{2}}}\,\mathrm{d}u\,\mathrm{d}v=2\pi\int_{0}^{\sqrt2}r\sqrt{\frac{3-r^{2}}{1+r^{2}}}\,\mathrm{d}r.$$

换元 $t=r^{2}$（$\mathrm{d}t=2r\,\mathrm{d}r$）：

$$I=\pi\int_{0}^{2}\sqrt{\frac{3-t}{1+t}}\,\mathrm{d}t.$$

再令 $s=\sqrt{\dfrac{3-t}{1+t}}$，则 $t=\dfrac{3-s^{2}}{1+s^{2}}$，$\mathrm{d}t=-\dfrac{8s}{(1+s^{2})^{2}}\,\mathrm{d}s$；$t:0\to2$ 对应 $s:\sqrt3\to\dfrac{1}{\sqrt3}$：

$$I=8\pi\int_{\frac{1}{\sqrt3}}^{\sqrt3}\frac{s^{2}}{(1+s^{2})^{2}}\,\mathrm{d}s.$$

被积函数拆成 $\dfrac{s^{2}}{(1+s^{2})^{2}}=\dfrac{1}{1+s^{2}}-\dfrac{1}{(1+s^{2})^{2}}$，用标准公式

$$\int\frac{\mathrm{d}s}{(1+s^{2})^{2}}=\frac{s}{2(1+s^{2})}+\frac{1}{2}\arctan s,$$

得原函数 $F(s)=\dfrac{1}{2}\arctan s-\dfrac{s}{2(1+s^{2})}$。代入：

$$F(\sqrt3)=\frac{\pi}{6}-\frac{\sqrt3}{8},\qquad F\!\left(\frac{1}{\sqrt3}\right)=\frac{\pi}{12}-\frac{\sqrt3}{8},$$

$$I=8\pi\left[F(\sqrt3)-F\!\left(\frac{1}{\sqrt3}\right)\right]=8\pi\cdot\frac{\pi}{12}=\frac{2\pi^{2}}{3}. \qquad \blacksquare$$

（数感自检：$\dfrac{2\pi^{2}}{3}\approx 6.58$；区域面积 $2\pi\approx6.28$，被积函数在区域上介于 $\sqrt{\frac13}$ 与 $\sqrt3$ 之间，量级吻合 ✓）

**易错点**：

1. **平移后忘了 Jacobi = 1**（这里恰好是 1，但平移变量替换必须写一步"$|\partial(x,y)/\partial(u,v)|=1$"）；
2. 分子配方符号：$2x-x^{2}=1-(x-1)^{2}$，别写成 $x^{2}-2x+1$ 漏负号；
3. $t=r^{2}$ 换元后的上下限（$0\to2$）与 $s$ 换元的方向（上限变小，积分号前负号变成换限）；
4. $\int s^{2}/(1+s^{2})^{2}$ 用"减一加一"拆项，别硬背原函数。

**命题规律**：圆域二重积分 + 被积函数可写成 $r^{2}$ 的函数 ⟹ 极坐标；根号内分式 $\sqrt{\frac{a-t}{b+t}}$ ⟹ 代数换元 $s=\sqrt{\frac{a-t}{b+t}}$，最后 $\arctan$ 型原函数。这套流程数一考过多次（轮换对称/平移配方的变体）。
