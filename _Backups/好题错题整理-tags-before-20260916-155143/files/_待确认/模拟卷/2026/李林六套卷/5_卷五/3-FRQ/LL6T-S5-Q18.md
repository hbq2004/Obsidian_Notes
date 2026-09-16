---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - AM
  - 26_李林六套卷/卷五/FRQ
  - 计算题
  - 二重积分
  - 轮换对称性
  - 极坐标变换
  - 三角函数定积分
points:
level:
---

# 解答题 第 18 题

![[_Attachments/题目识别/LL6T/LL6T-S5-Q18_题目.png|题目]]

设 $D=\{(x,y)|x^2+(y-1)^2 \leqslant 1,(x-1)^2+y^2 \leqslant 1\}$ . 计算 $I=\iint_D (2x^2-y^2)\mathrm{d}x\mathrm{d}y$ .

![[_Attachments/题目识别/LL6T-答案/LL6T-S5-Q18_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结论：$$I=\iint_D(2x^2-y^2)\,dx\,dy=\frac{3\pi}{8}-1=\frac{3\pi-8}{8}\approx0.1781.$$

关键给分点：
1. 由区域关于 $y=x$ 的轮换对称性，得 $\iint_D x^2\,dx\,dy=\iint_D y^2\,dx\,dy$，故 $I=\iint_D x^2\,dx\,dy$；
2. 用极坐标 $x=r\cos\theta,\ y=r\sin\theta$，将 $D$ 分为 $0\le\theta\le\frac{\pi}{4},\ 0\le r\le2\sin\theta$ 与 $\frac{\pi}{4}\le\theta\le\frac{\pi}{2},\ 0\le r\le2\cos\theta$；
3. 分段积分并化简得结果。

**解题切入点**

考查二重积分计算、区域对称性与极坐标变换。破题先看区域：两等圆相交，交区关于 $y=x$ 对称；先用轮换对称性消去非对称项，再对圆域用极坐标分段定限。类比算法竞赛：先做等价变换/剪枝，再暴力计算，避免一开始就展开。

**推演**

1. 轮换对称性化简：
交换 $x,y$，两圆方程互换，故 $D$ 关于 $y=x$ 对称。由轮换对称性：
$$
\iint_D x^2\,dx\,dy=\iint_D y^2\,dx\,dy.
$$
因此
$$
I=\iint_D(2x^2-y^2)\,dx\,dy=\iint_D x^2\,dx\,dy.
$$

2. 极坐标定限：
令 $x=r\cos\theta,\ y=r\sin\theta$。
两圆化为 $r\le2\sin\theta$ 与 $r\le2\cos\theta$，且需 $\sin\theta,\cos\theta\ge0$，所以 $\theta\in[0,\frac{\pi}{2}]$。分段：
$$
D_1:0\le\theta\le\frac{\pi}{4},\ 0\le r\le2\sin\theta, \quad
D_2:\frac{\pi}{4}\le\theta\le\frac{\pi}{2},\ 0\le r\le2\cos\theta.
$$

3. 计算：
$$
I=\int_0^{\pi/4}\int_0^{2\sin\theta} r^3\cos^2\theta\,dr\,d\theta
+\int_{\pi/4}^{\pi/2}\int_0^{2\cos\theta} r^3\cos^2\theta\,dr\,d\theta.
$$
内层积分 $\int_0^R r^3\,dr=R^4/4$，得
$$
I=4\int_0^{\pi/4}\sin^4\theta\cos^2\theta\,d\theta
+4\int_{\pi/4}^{\pi/2}\cos^6\theta\,d\theta.
$$
又 $\sin^4\theta\cos^2\theta=\sin^4\theta-\sin^6\theta$，且令 $\theta=\frac{\pi}{2}-\phi$，
$$
\int_{\pi/4}^{\pi/2}\cos^6\theta\,d\theta=\int_0^{\pi/4}\sin^6\phi\,d\phi.
$$
所以
$$
I=4\int_0^{\pi/4}\sin^4\theta\,d\theta.
$$

4. 计算 $\int_0^{\pi/4}\sin^4\theta\,d\theta$：
$$
\sin^4\theta=\frac38-\frac12\cos2\theta+\frac18\cos4\theta,
$$
$$
\int\sin^4\theta\,d\theta=\frac{3\theta}{8}-\frac14\sin2\theta+\frac1{32}\sin4\theta+C.
$$
代入上下限：
$$
\int_0^{\pi/4}\sin^4\theta\,d\theta=\frac{3\pi}{32}-\frac14.
$$
故
$$
I=4\left(\frac{3\pi}{32}-\frac14\right)=\frac{3\pi}{8}-1=\frac{3\pi-8}{8}.
$$

自检：对上式原函数求导可得 $\sin^4\theta$，积分回代一致。

**易错点**

- 极坐标 $\theta$ 范围不能直接取 $[0,\pi/2]$ 而半径用同一个；实际要按 $\min(2\sin\theta,2\cos\theta)$ 分段。
- 不要漏掉 Jacobian 因子 $r$；本题内层是 $\int r^3\,dr$，不是 $\int r^2\,dr$。
- 用对称性后原式为 $\iint_D x^2$，不要把系数 $2$ 再乘进去。
- 三角积分代入 $\theta=\pi/4$ 时 $\sin2\theta=1$、$\sin4\theta=0$，勿误算。

**命题规律**

两圆交集区域是二重积分常见图形。命题套路：先用奇偶性或轮换对称性化简，再用极坐标按角度分段定限。复习建议：熟练掌握轮换对称性、极坐标 $r$ 上下限的确定，以及低次三角函数的定积分计算。


> 来源：《26_李林六套卷（数一）》卷五 第 18 题
