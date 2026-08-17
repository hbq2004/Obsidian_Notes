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

## 解析（AI 生成，仅供参考）

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

> AI 生成，仅供参考。

