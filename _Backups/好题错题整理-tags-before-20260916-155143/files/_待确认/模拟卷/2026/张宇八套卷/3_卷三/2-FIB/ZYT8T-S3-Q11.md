---
ctime: 2026-08-24 17:34:54
mtime: 2026-08-24 17:34:54
tags:
  - AM
  - 26_张宇八套卷/卷三/FIB
  - 计算题
  - 参数方程求导
  - 二阶导数
  - 链式法则
  - 复合函数求导
  - 初等函数求导
points:
level:
---

# FIB 第 11 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S3-Q11_题目.png|题目]]

若 $\begin{cases} x = \ln |t|, \\ y = e^{-t^2}, \end{cases}$ 则 $\left. \frac{\mathrm{d}^2 y}{\mathrm{d} x^2} \right|_{t=\sqrt{2}} = \_$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S3-Q11_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由参数方程求导：

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=-2t^2e^{-t^2}, \quad
\frac{d^2y}{dx^2}=\frac{d}{dt}\left(\frac{dy}{dx}\right)\Big/\frac{dx}{dt}
=4t^2(t^2-1)e^{-t^2}.
$$

代入 $t=\sqrt{2}$，得

$$
\left.\frac{d^2y}{dx^2}\right|_{t=\sqrt{2}}=4\cdot2\cdot(2-1)e^{-2}=\frac{8}{e^2}.
$$

填空题【答案】:

$$
\boxed{\frac{8}{e^2}}
$$

**解题切入点**

本题是参数方程求二阶导。类比算法竞赛中“链式依赖求导”：先把 $y$ 看作 $t$ 的函数，$x$ 也看作 $t$ 的函数，用 $\frac{dy}{dx}=\frac{y'_t}{x'_t}$ 消去参数；再对一阶导关于 $x$ 求导时，记得再除以 $x'_t$。

**推演**

1. 对 $x=\ln|t|$ 求导：$x'_t=\frac{1}{t}$。
2. 对 $y=e^{-t^2}$ 求导：$y'_t=-2te^{-t^2}$。
3. 一阶导数：
$$
\frac{dy}{dx}=\frac{y'_t}{x'_t}=\frac{-2te^{-t^2}}{1/t}=-2t^2e^{-t^2}.
$$
4. 对一阶导数再对 $t$ 求导：
$$
\frac{d}{dt}\left(-2t^2e^{-t^2}\right)
=-4te^{-t^2}+4t^3e^{-t^2}
=4t(t^2-1)e^{-t^2}.
$$
5. 由参数方程二阶导公式：
$$
\frac{d^2y}{dx^2}
=\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{x'_t}
=\frac{4t(t^2-1)e^{-t^2}}{1/t}
=4t^2(t^2-1)e^{-t^2}.
$$
6. 代入 $t=\sqrt{2}$：
$$
4\cdot(\sqrt{2})^2\cdot((\sqrt{2})^2-1)e^{-2}
=4\cdot2\cdot1\cdot e^{-2}=\frac{8}{e^2}.
$$

**易错点**

- 易把 $\frac{d^2y}{dx^2}$ 直接写成 $\frac{y''_{tt}}{x''_{tt}}$，这是错的；正确公式是 $\frac{d}{dt}(y'_x)/x'_t$。
- 对 $\ln|t|$ 求导时，$x'_t=1/t$ 对 $t\ne0$ 均成立，不要漏掉绝对值处理。
- 代入前可先用 $t^2=2$ 化简，避免根号运算错误。

**命题规律**

参数方程求导是考研数学一高频小题，常考二阶导数或极值/凹凸性。复习时应熟练掌握 $\frac{dy}{dx}$ 与 $\frac{d^2y}{dx^2}$ 的公式推导，不能只背结论；可类比链式依赖中“每次换元求导都要乘 Jacobi 因子”。


> 来源：《26_张宇八套卷（数一）》卷三 第 11 题
