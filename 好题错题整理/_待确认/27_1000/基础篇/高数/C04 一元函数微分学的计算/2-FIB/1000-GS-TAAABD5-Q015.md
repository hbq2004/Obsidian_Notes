---
ctime: 2026-08-16 21:16:43
mtime: 2026-08-20 01:29:40
tags:
  - AM
  - 27_1000/C04/a/FIB
  - 计算题
  - 一元函数微分学的计算
  - 参数方程求导
  - 切线方程
points:
level:
---

# FIB 第 15 题

![[_Attachments/题目识别/1000-GS/1000-GS-TAAABD5-Q015_题目.png|题目]]

15. 曲线 $\begin{cases} x = e^t \sin 2t, \\ y = e^t \cos t \end{cases}$ 在对应 $t=0$ 处的点的切线方程为 \_\_\_\_\_\_.

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-GS-TAAABD5-Q015_答案.png|答案]]

## V4 Pro Max 解析

**答案**：切线方程 $y=\dfrac{x}{2}+1$（即 $x-2y+2=0$）

**切入点**：参数方程在 $t=0$ 处的切点与斜率 $\frac{dy}{dx}=\frac{dy/dt}{dx/dt}$。类比"给定参数求轨迹在某时刻的位置与方向"。

**推演**

$t=0$ 时：$x=e^0\sin0=0,\ y=e^0\cos0=1$，切点为 $(0,1)$。

$$\frac{dx}{dt}=e^t\sin2t+2e^t\cos2t=e^t(\sin2t+2\cos2t)$$

$$\frac{dy}{dt}=e^t\cos t-e^t\sin t=e^t(\cos t-\sin t)$$

在 $t=0$：$x'_t=e^0(0+2)=2$，$y'_t=e^0(1-0)=1$。

$$\frac{dy}{dx}=\frac{y'_t}{x'_t}=\frac12$$

切线：$y-1=\dfrac12(x-0)$，即 $y=\dfrac{x}{2}+1$。

**易错点**：$\frac{d}{dt}e^t\sin2t$ 漏掉乘积法则（有两项）；或把切点 $x$ 坐标算成 $e^0\cdot\sin0$ 之外的值。切线用点斜式时斜率取 $\frac{dy}{dx}$ 而非 $\frac{dy}{dt}$。

**命题规律**：参数方程求切线，固定步骤：①求 $t_0$ 对应切点 $(x_0,y_0)$；②求 $x'_t,y'_t$；③斜率 $k=y'_t/x'_t$；④点斜式。
