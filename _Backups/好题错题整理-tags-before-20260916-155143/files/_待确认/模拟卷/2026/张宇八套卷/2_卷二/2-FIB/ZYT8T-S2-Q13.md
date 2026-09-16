---
ctime: 2026-08-24 17:34:54
mtime: 2026-08-24 17:34:54
tags:
  - AM
  - 26_张宇八套卷/卷二/FIB
  - 计算题
  - 第一类曲线积分
  - 单位圆参数化
  - 对称性化简
  - 三角函数定积分
  - 弧长微元
points:
level:
---

# FIB 第 13 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S2-Q13_题目.png|题目]]

13. 设 $L$ 为圆周 $x^2+y^2=1$,则 $\oint_L (x^3+y^2)\mathrm{d}s = \_\_\_\_$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S2-Q13_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】: $$\boxed{\pi}$$

**解题切入点**

考查第一类曲线积分（对弧长）的计算。类比算法竞赛中把几何约束化为参数循环：单位圆取 $x=\cos t,\ y=\sin t$ 后 $ds=dt$，原式化为 $\int_0^{2\pi}(\cos^3 t+\sin^2 t)dt$。

**推演**

1. 令 $x=\cos t,\ y=\sin t,\ t\in[0,2\pi]$。
2. 弧长微元
$$
ds=\sqrt{(x')^2+(y')^2}\,dt=\sqrt{\sin^2 t+\cos^2 t}\,dt=dt.
$$
3. 原积分
$$
I=\int_0^{2\pi}(\cos^3 t+\sin^2 t)\,dt
=\int_0^{2\pi}\cos^3 t\,dt+\int_0^{2\pi}\sin^2 t\,dt.
$$
4. $\int_0^{2\pi}\cos^3 t\,dt=0$（完整周期积分）。
5. $\int_0^{2\pi}\sin^2 t\,dt=\frac12\int_0^{2\pi}(1-\cos 2t)\,dt=\pi$。
6. 故 $I=0+\pi=\pi$。

也可用对称性：$\oint_L x^3ds=0$，且 $\oint_L y^2ds=\frac12\oint_L(x^2+y^2)ds=\frac12\cdot 2\pi=\pi$。

**易错点**

- 不要混淆 $ds$ 与 $dxdy$；单位圆参数化下 $ds=dt$。
- $\int_0^{2\pi}\cos^3t\,dt=0$ 是周期积分结果，不能算成普通定积分。
- 对称性用于对弧长的积分时，要确认积分曲线关于相应轴（或变量）对称。

**命题规律**

常将第一类曲线积分与单位圆、直线等参数化结合，考查弧长微元和三角积分。复习时熟记 $\oint_L x^2ds=\oint_L y^2ds=\pi$（单位圆），并掌握“先对称化简，再参数化”的流程。


> 来源：《26_张宇八套卷（数一）》卷二 第 13 题
