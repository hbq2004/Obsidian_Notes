---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - AM
  - 26_李林六套卷/卷三/FRQ
  - 计算题
  - 格林公式
  - 极坐标变换
  - 第二型曲线积分
  - Wallis公式
  - 对称性化简
points:
level:
---

# 解答题 第 19 题

![[_Attachments/题目识别/LL6T/LL6T-S3-Q19_题目.png|题目]]

设平面闭曲线 $L: (x^2+y^2)^{\frac{3}{2}} = 2\sqrt{2}xy, x \ge 0, y \ge 0$ ，取逆时针方向，计算
$$I = \oint_L (\frac{1}{3}xy^3 - \frac{1}{2}x^2y^2)\mathrm{d}x + \frac{1}{3}(x+y)^3\mathrm{d}y.$$

![[_Attachments/题目识别/LL6T-答案/LL6T-S3-Q19_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】$I=\frac{3\pi}{16}+\frac{8}{15}$。

关键给分点：① 用格林公式正确计算 $\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}$；② 将区域正确化为极坐标 $0\le r\le \sqrt{2}\sin2\theta$；③ 正确算出三角积分。

**解题切入点**

闭曲线的第二型曲线积分优先想到格林公式；区域由极坐标方程给出，所以化极坐标求二重积分。类似算法竞赛“先判旋度，再选坐标系”：先算旋度，再看积分区域对称性。

**推演**

设
$$P=\frac13xy^3-\frac12x^2y^2,\quad Q=\frac13(x+y)^3.$$
则
$$\frac{\partial Q}{\partial x}=(x+y)^2,\qquad \frac{\partial P}{\partial y}=xy^2-x^2y.$$
由格林公式（$L$ 取逆时针）
$$
I=\iint_D\left[(x+y)^2-xy^2+x^2y\right]\,dxdy.
$$
曲线方程化极坐标：$x=r\cos\theta,\ y=r\sin\theta$，且 $x,y\ge0$ 得 $0\le\theta\le\frac{\pi}{2}$；
$$
r^3=2\sqrt{2}\,r^2\cos\theta\sin\theta=\sqrt{2}\,r^2\sin2\theta,\quad r>0,
$$
故
$$
0\le r\le R(\theta)=\sqrt{2}\sin2\theta.
$$
又
$$
(x+y)^2-xy^2+x^2y=r^2(1+\sin2\theta)+r^3\sin\theta\cos\theta(\cos\theta-\sin\theta).
$$
因此
$$
I=\int_0^{\pi/2}\int_0^{R(\theta)}
\left[r^2(1+\sin2\theta)+r^3\sin\theta\cos\theta(\cos\theta-\sin\theta)\right]r\,dr\,d\theta
$$
$$
=\int_0^{\pi/2}\left[\frac{1+\sin2\theta}{4}R^4(\theta)
+\frac{\sin\theta\cos\theta(\cos\theta-\sin\theta)}{5}R^5(\theta)\right]d\theta.
$$
代入 $R(\theta)=\sqrt{2}\sin2\theta$，第一项为 $(1+\sin2\theta)\sin^4 2\theta$；第二项为
$$
\frac{128\sqrt{2}}{5}\left(\sin^6\theta\cos^7\theta-\sin^7\theta\cos^6\theta\right),
$$
它在 $[0,\pi/2]$ 上积分为 $0$（利用 $\theta$ 与 $\frac{\pi}{2}-\theta$ 的对称性相消）。
故
$$
I=\int_0^{\pi/2}\left[\sin^4 2\theta+\sin^5 2\theta\right]d\theta.
$$
分别计算：
$$
\int_0^{\pi/2}\sin^4 2\theta\,d\theta
=\frac12\int_0^\pi\sin^4 u\,du
=\frac12\cdot\frac{3\pi}{8}
=\frac{3\pi}{16},
$$
$$
\int_0^{\pi/2}\sin^5 2\theta\,d\theta
=\frac12\int_0^\pi\sin^5 u\,du
=\frac12\cdot\frac{16}{15}
=\frac{8}{15}.
$$
所以
$$
I=\frac{3\pi}{16}+\frac{8}{15}.
$$

**易错点**

1. 格林公式的符号取决于曲线正向；本题 $\theta$ 从 $0$ 到 $\pi/2$ 对应逆时针。
2. 极坐标方程不能丢掉 $r>0$，且 $x,y\ge0$ 限制 $\theta\in[0,\pi/2]$。
3. 二重积分换元时不要漏掉 Jacobian 因子 $r$。
4. 计算 $\sin^5 2\theta$ 时不要弄错 Wallis 公式；对称消去 $r^5$ 项要说明积分区间对称。

**命题规律**

这类题常以极坐标曲线围成区域，先要求识别出格林公式，再转化为极坐标二重积分；三角积分通常用 Wallis 公式或对称性。复习时应熟练掌握第二型曲线积分与二重积分互换、极坐标边界方程代入，以及 $\int_0^{\pi/2}\sin^n x\,dx$ 的递推结果。


> 来源：《26_李林六套卷（数一）》卷三 第 19 题
