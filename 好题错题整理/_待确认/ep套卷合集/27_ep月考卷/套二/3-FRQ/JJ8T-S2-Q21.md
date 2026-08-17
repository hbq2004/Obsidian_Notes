---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套二/FRQ
  - 计算题
  - 二重积分
  - 极坐标变换
  - 圆的参数方程
  - 曲线积分
  - 变量对称性
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/JJ8T/JJ8T-S2-Q21_题目.png|题目]]

21. （本题满分 12 分）计算二重积分 $\iint_{D}(x+y)^{2} ~d \sigma$，其中 $D=\{(x, y) \mid x^{2}+y^{2} \leq 2 x+2 y\}$.


---

## DeepSeek V4 Flash Max

【考点】本题考查二重积分在圆域上的计算。解题切入点是先把区域 $x^2+y^2\le 2x+2y$ 配方成标准圆域，再令 $u=x-1,\ v=y-1$ 或直接作极坐标平移变换，将积分化为关于 $u,v$ 的对称积分；这类似于算法竞赛中把坐标系平移使圆变成以原点为中心，从而用极坐标一遍扫描、避免分段讨论。

【解】

区域 $D$：
\[
x^2+y^2\le 2x+2y
\]
配方得
\[
(x-1)^2+(y-1)^2\le 2.
\]
令
\[
u=x-1,\quad v=y-1,\quad x=u+1,\quad y=v+1.
\]
则变换的雅可比行列式为
\[
\frac{\partial(x,y)}{\partial(u,v)}
=\begin{vmatrix}
1&0\\
0&1
\end{vmatrix}=1.
\]
所以
\[
\iint_D (x+y)^2\,d\sigma
=\iint_{u^2+v^2\le 2} (u+v+2)^2\,du\,dv.
\]

展开被积函数：
\[
(u+v+2)^2
=(u+v)^2+4(u+v)+4.
\]
由于积分区域 $u^2+v^2\le 2$ 关于 $u$ 轴和 $v$ 轴都对称，且 $u$ 与 $v$ 都是奇函数，所以
\[
\iint_{u^2+v^2\le 2} u\,du\,dv=0,\qquad
\iint_{u^2+v^2\le 2} v\,du\,dv=0.
\]
又由对称性（$u,v$ 的地位相同），
\[
\iint_{u^2+v^2\le 2} uv\,du\,dv=0.
\]
因此只剩
\[
\iint_D (x+y)^2\,d\sigma
=\iint_{u^2+v^2\le 2}\left(u^2+v^2+4\right)\,du\,dv.
\]

作极坐标：
\[
u=r\cos\theta,\qquad v=r\sin\theta,\qquad 0\le r\le \sqrt2,\quad 0\le \theta\le 2\pi.
\]
则
\[
\iint_{u^2+v^2\le 2} u^2\,du\,dv
=\frac12\iint_{u^2+v^2\le 2} (u^2+v^2)\,du\,dv,
\]
于是
\[
\iint_{u^2+v^2\le 2}(u^2+v^2)\,du\,dv
=\int_0^{2\pi}\int_0^{\sqrt2} r^2\cdot r\,dr\,d\theta
=2\pi\int_0^{\sqrt2} r^3\,dr
=2\pi\cdot \frac{2^2}{4}
=2\pi.
\]
而
\[
\iint_{u^2+v^2\le 2}4\,du\,dv
=4\cdot \pi(\sqrt2)^2
=8\pi.
\]
故
\[
\iint_D (x+y)^2\,d\sigma
=2\pi+8\pi=10\pi.
\]

回代自检：用直角坐标直接验证。由对称性，在圆 $(x-1)^2+(y-1)^2\le 2$ 中，关于 $x-1,\ y-1$ 的奇函数项积分为零，因此
\[
(x+y)^2=(x-1+y-1+2)^2
=(u+v)^2+4(u+v)+4,
\]
奇函数项贡献为零，圆域面积为 $2\pi$，故
\[
\iint_D (x+y)^2\,d\sigma
=4\cdot 2\pi+\iint_{u^2+v^2\le 2}(u^2+v^2)\,du\,dv
=8\pi+2\pi=10\pi.
\]
结果一致。

【答案】
\[
\boxed{\iint_D (x+y)^2\,d\sigma=10\pi}
\]

关键给分点：
1. 将区域配方化为 $(x-1)^2+(y-1)^2\le 2$（2 分）；
2. 作平移变换 $u=x-1,\ v=y-1$，说明雅可比行列式为 1（2 分）；
3. 展开并利用对称性消去 $u,v,uv$ 的积分（4 分）；
4. 极坐标或圆域公式计算 $\iint (u^2+v^2)\,du\,dv=2\pi$ 及面积乘常数 $8\pi$（4 分）。

【易错点】
1. 忘记配方，直接对 $x^2+y^2\le 2x+2y$ 套极坐标 $x=r\cos\theta,\ y=r\sin\theta$，会得到 $r\le 2(\cos\theta+\sin\theta)$，虽然也能算但边界需要讨论，很容易出错。
2. 展开 $(x+y)^2$ 后，若直接在原直角坐标里利用 $x,y$ 的对称性，会错误地认为 $x,y$ 一次项积分为零；实际上圆心不在原点，必须先平移到圆心处，再使用对称性。
3. 计算 $\iint (u^2+v^2)$ 时误写成 $2\pi\cdot \sqrt2$ 的平方等；正确为 $2\pi\int_0^{\sqrt2}r^3\,dr=2\pi$。
4. 忘记乘以雅可比行列式 $r$。

【命题规律】本题是典型的“圆域二重积分”题：区域写成非标准圆方程，第一步先配方平移化为标准圆，第二步利用对称性简化被积函数，第三步用极坐标计算。类似题目还常考 $\iint_D (x+y)\,d\sigma$、$\iint_D xy\,d\sigma$ 等，复习时要把“配方平移—对称性—极坐标/面积公式”作为一个固定操作流程。
