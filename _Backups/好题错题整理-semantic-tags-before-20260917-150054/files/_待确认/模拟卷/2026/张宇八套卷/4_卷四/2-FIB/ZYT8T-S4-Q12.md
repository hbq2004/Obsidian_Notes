---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷四/FIB
  - 计算题
  - 一阶微分方程
  - 分部积分法
  - 反常积分
  - 定积分几何意义
points:
level:
---

# FIB 第 12 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S4-Q12_题目.png|题目]]

设 $ y = y(x) $ 满足 $ xy' = \sqrt{1 - x^2} $，$ y(1) = 0 $，则 $\int_{0}^{1} y(x) \mathrm{d}x =$ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S4-Q12_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由 $y(1)=0$ 及分部积分可得 $\int_0^1 y(x)\,dx = -\frac{\pi}{4}$。

填空题【答案】:
$$\boxed{-\frac{\pi}{4}}$$

**解题切入点**

题目给出关于 $y$ 的一阶微分方程初值问题，但最终求的是 $\int_0^1 y(x)\,dx$。不要急于解出 $y$；用分部积分把 $\int y\,dx$ 化为 $\int x y'\,dx$，再代入 $xy'=\sqrt{1-x^2}$。这类似算法竞赛中“用条件化简目标式”的思想。

**推演**

1. 由 $xy'=\sqrt{1-x^2}$ 得 $y'=\frac{\sqrt{1-x^2}}{x}$（$0<x<1$），解在 $(0,1]$ 上讨论，$x=1$ 处给初值；$x=0$ 是奇点，下面的积分按反常积分理解。

2. 对任意 $\varepsilon\in(0,1)$，先在 $[\varepsilon,1]$ 上分部积分，再令 $\varepsilon\to0^+$：
   $$
   \int_0^1 y\,dx=\lim_{\varepsilon\to0^+}\int_\varepsilon^1 y\,dx
   =\lim_{\varepsilon\to0^+}\left(\left[xy\right]_\varepsilon^1-\int_\varepsilon^1 xy'\,dx\right).
   $$

3. 边界项：$y(1)=0$。由 $y(x)=-\int_x^1 \frac{\sqrt{1-t^2}}{t}\,dt$，因 $0\le \sqrt{1-t^2}\le1$，故 $\ln x\le y(x)\le0$，于是 $x\ln x\le xy(x)\le0$，令 $x\to0^+$ 得 $xy(x)\to0$。所以 $\left[xy\right]_0^1=0$。

4. 代入 $xy'=\sqrt{1-x^2}$：
   $$
   \int_0^1 y\,dx = -\int_0^1 \sqrt{1-x^2}\,dx.
   $$

5. 几何意义或三角代换：$\int_0^1 \sqrt{1-x^2}\,dx$ 是单位圆在第一象限面积的四分之一，即 $\frac{\pi}{4}$。因此
   $$
   \int_0^1 y\,dx = -\frac{\pi}{4}.
   $$

**易错点**

- 忘记处理边界项 $\left.xy\right|_0^1$ 中 $x\to0^+$ 的极限。$y$ 虽含 $\ln x$ 型奇性，但 $x\ln x\to0$，边界项为 $0$。
- 符号错误：分部积分公式中是减号，而 $xy'=\sqrt{1-x^2}$，所以结果为负。
- 将 $\int_0^1 y\,dx$ 误当成 $\int_0^1 xy'\,dx$；两者相差边界项。
- 若直接解出 $y$，需注意 $x=0$ 为奇点，积分是反常积分，不能直接代入 $x=0$ 求值。

**命题规律**

考研中常把微分方程初值问题与定积分计算结合，考查“不显式解方程，而用分部积分/恒等变形化简”的技巧。复习时应重视 $\int y\,dx$ 与 $\int xy'\,dx$ 之间的转化，并熟练 $\int_0^1\sqrt{1-x^2}\,dx=\frac{\pi}{4}$ 这一几何结论。


> 来源：《26_张宇八套卷（数一）》卷四 第 12 题
