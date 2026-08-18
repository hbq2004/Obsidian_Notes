---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套二/FIB
  - 计算题
  - 旋转体体积
  - 圆柱壳法
  - 切线方程
  - 导数求极值
points:
level:
---

# FIB 第 16 题

![[_Attachments/题目识别/JJ8T/JJ8T-S2-Q16_题目.png|题目]]

16. 过曲线 $C: \sqrt{x} + \sqrt{y} = 1$ 的一点 $P$ 作 $C$ 的切线 $l$，并求 $P$ 点坐标，使切线 $l$、曲线 $C$ 及两坐标轴所围图形绕 $y$ 轴旋转一周所生成的立体的体积最小，并求最小值 \_ .


---

## DeepSeek V4 Flash Max

【考点】本题考查曲线切线方程、旋转体体积计算及最值问题，可类比算法竞赛中的“求函数极值”问题：先建立目标函数，再求导找临界点。

【解】设切点 $P(a,b)$，则 $\sqrt{a}+\sqrt{b}=1$。令 $t=\sqrt{a}$，则 $\sqrt{b}=1-t$，$a=t^2$，$b=(1-t)^2$，$0<t<1$。

曲线 $C: y=(1-\sqrt{x})^2$。在 $P$ 处的切线方程为 $\frac{x}{\sqrt{a}}+\frac{y}{\sqrt{b}}=1$，即 $y=(1-t)\left(1-\frac{x}{t}\right)$。

所围区域 $S$ 可表示为：对 $0\le x\le t$，$y$ 介于切线与曲线之间；对 $t\le x\le 1$，$y$ 介于 $x$ 轴与曲线之间。绕 $y$ 轴旋转，用圆柱壳法：

$$V=2\pi\int_0^1 x\, h(x)\,dx,$$ 其中 
$$h(x)=\begin{cases}(1-\sqrt{x})^2-(1-t)(1-\frac{x}{t}), &0\le x\le t\\(1-\sqrt{x})^2, &t\le x\le 1\end{cases}$$

因此
$$V=2\pi\left(\int_0^1 x(1-\sqrt{x})^2 dx - \int_0^t x(1-t)(1-\frac{x}{t})dx\right).$$

先算第一个积分：
$$\int_0^1 x(1-2\sqrt{x}+x)dx = \int_0^1 (x-2x^{3/2}+x^2)dx = \frac12 - \frac45 + \frac13 = \frac{1}{30}.$$

第二个积分：
$$\int_0^t x(1-t)(1-\frac{x}{t})dx = (1-t)\int_0^t \left(x - \frac{x^2}{t}\right)dx = (1-t)\left(\frac{t^2}{2}-\frac{t^2}{3}\right) = \frac{t^2(1-t)}{6}.$$

所以
$$V(t)=2\pi\left(\frac{1}{30}-\frac{t^2(1-t)}{6}\right)=\frac{\pi}{15}-\frac{\pi}{3}t^2(1-t).$$

求 $V(t)$ 最小值，等价于最大化 $f(t)=t^2(1-t)=t^2-t^3$。求导：
$$f'(t)=2t-3t^2=t(2-3t).$$ 令 $f'=0$，得 $t=0$ 或 $t=\frac23$。在 $(0,1)$ 内仅 $t=\frac23$，且 $f''(t)=2-6t$，在 $t=\frac23$ 处 $f''=-2<0$，故 $f$ 取极大值，即为最大值。

于是 $t=\frac23$，即 $\sqrt{a}=\frac23$，$\sqrt{b}=\frac13$，所以 $P(a,b)=\left(\frac49,\frac19\right)$。

代入得最小体积：
$$V_{\min}=V\left(\frac23\right)=\frac{\pi}{15}-\frac{\pi}{3}\cdot\frac{4}{9}\cdot\frac{1}{3}=\frac{\pi}{15}-\frac{4\pi}{81}=\frac{7\pi}{405}.$$

【答案】$P\left(\frac49,\frac19\right)$，最小体积 $\boxed{\frac{7\pi}{405}}$。

【易错点】易错点在于区域上下界的判断，须分 $x\le t$ 与 $x\ge t$ 两段；否则直接用曲线减切线会出错。另外，圆柱壳法中应乘以 $x$ 而非 $y$。注意 $t$ 的范围 $(0,1)$，端点处体积为 $\pi/15$（对应退化），实际最小值在内部取得。

【命题规律】此类题常以“切线 + 旋转体”为背景，核心是建立体积函数并求最值。复习时熟练掌握圆柱壳、圆盘法，以及利用切线截距与参数简化运算。

---

## V4 Flash Max 解析

**答案**: 当 $P=\left(\frac49,\frac19\right)$ 时，最小体积为 $\dfrac{7\pi}{405}$。

**解题切入点**:  
看到 $\sqrt{x}+\sqrt{y}=1$，优先令切点 $P=(u^2,v^2)$，则 $u+v=1$。该曲线在 $P$ 处的切线在两坐标轴上的截距恰好是 $u,v$，所以所求体积可写成“曲线与坐标轴围成的大体积”减去“切线与坐标轴围成的小三角形体积”。剩下只需最大化 $u^2v$，类似算法题中参数化后做最值。

**推演**:  

设  
$$
P=(u^2,v^2),\quad u,v>0,\quad u+v=1.
$$

曲线方程为  
$$
F(x,y)=\sqrt{x}+\sqrt{y}-1=0.
$$

隐函数求导得切线方程：
$$
\frac{x-u^2}{u}+\frac{y-v^2}{v}=0,
$$
化简为  
$$
\frac{x}{u}+\frac{y}{v}=1.
$$

所以切线与两坐标轴的交点分别为 $(u,0)$ 和 $(0,v)$。

曲线 $C$ 可写成  
$$
y=(1-\sqrt{x})^2.
$$
又
$$
y''=\frac{1}{2x^{3/2}}>0,
$$
所以曲线是凸曲线，切线位于曲线下方。因此所求区域等价于：曲线与两坐标轴围成的大区域，减去切线与两坐标轴围成的三角形区域。

大区域绕 $y$ 轴旋转体积：
$$
V_1=2\pi\int_0^1 x(1-\sqrt{x})^2\,dx
=2\pi\int_0^1 (x-2x^{3/2}+x^2)\,dx
=2\pi\left(\frac12-\frac45+\frac13\right)
=\frac{\pi}{15}.
$$

切线与两坐标轴围成的三角形区域绕 $y$ 轴旋转体积：
$$
V_2=2\pi\int_0^u x\cdot v\left(1-\frac{x}{u}\right)\,dx
=2\pi v\left(\frac{u^2}{2}-\frac{u^2}{3}\right)
=\frac{\pi}{3}u^2v.
$$

故所求体积为
$$
V(u)=\frac{\pi}{15}-\frac{\pi}{3}u^2v
=\frac{\pi}{15}-\frac{\pi}{3}u^2(1-u).
$$

要使 $V$ 最小，只需使 $u^2(1-u)$ 最大。由 AM-GM：
$$
u^2(1-u)=4\left(\frac u2\right)\left(\frac u2\right)(1-u)
\le 4\left(\frac{\frac u2+\frac u2+1-u}{3}\right)^3
=\frac{4}{27}.
$$
等号成立时
$$
\frac u2=1-u,
$$
即
$$
u=\frac23,\qquad v=\frac13.
$$

所以
$$
P=(u^2,v^2)=\left(\frac49,\frac19\right).
$$

最小体积：
$$
V_{\min}
=\frac{\pi}{15}-\frac{\pi}{3}\cdot\frac{4}{27}
=\frac{\pi}{15}-\frac{4\pi}{81}
=\frac{7\pi}{405}.
$$

**易错点**:  
- 不要把 $u$ 当成 $P$ 的横坐标。$u=\sqrt{x_P}$，所以最优点处 $u=\frac23$，对应 $x_P=\frac49$，而不是 $\frac23$。  
- 所求区域不是曲线下方的整个区域，要扣掉切线与原点所夹的三角形。  
- 绕 $y$ 轴旋转用柱壳法时，体积公式是 $2\pi\int x(y_{\text{上}}-y_{\text{下}})\,dx$，不能漏掉 $2\pi x$。  
- 自检：把 $u=\frac23,v=\frac13$ 代回，$V_2=\frac{4\pi}{81}$，且 $P$ 满足 $\sqrt{x_P}+\sqrt{y_P}=1$。

**命题规律**:  
这类题常考“隐函数切线 + 旋转体体积 + 最值”的综合。常见变式包括：把旋转轴改为 $x$ 轴、求面积最小值、或把曲线换成 $\sqrt{\frac{x}{a}}+\sqrt{\frac{y}{b}}=1$。核心技巧都是先用切线截距参数化，再转化为 $u^\alpha v^\beta$ 型最值，可用求导或 AM-GM 解决。
