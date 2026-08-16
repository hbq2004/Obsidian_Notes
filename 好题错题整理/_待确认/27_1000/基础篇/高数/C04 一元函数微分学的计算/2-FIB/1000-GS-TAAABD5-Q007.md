---
ctime: 2026-08-16 21:16:37
mtime: 2026-08-16 21:16:37
tags:
  - AM
  - 27_1000/C04/a/FIB
  - 计算题
  - 一元函数微分学的计算
  - 参数方程求导
  - 隐函数求导
points:
level:
---

# FIB 第 7 题

![[_Attachments/题目识别/1000-GS/1000-GS-TAAABD5-Q007_题目.png|题目]]

$ 7. 设 \begin{cases} x = t - t^2, \\ t e^y + y + 1 = 0, \end{cases}  则  \left. \frac{dy}{dx} \right|＿{t=0} = \＿$

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-GS-TAAABD5-Q007_答案.png|答案]]

## V4 Pro Max 解析

**答案**：$\left.\dfrac{dy}{dx}\right|_{t=0}=-\dfrac1e$

**切入点**：参数方程求导 $\frac{dy}{dx}=\frac{dy/dt}{dx/dt}$，其中 $y$ 与 $t$ 的关系由隐式方程 $te^y+y+1=0$ 给出，需先对 $t$ 隐式求导得 $y'_t$。类比"先算两个一阶分量，再相除"。

**推演**

先定位 $t=0$ 对应的点：代入 $te^y+y+1=0$ 得 $0+y+1=0\Rightarrow y=-1$。

$$x=t-t^2\Rightarrow \frac{dx}{dt}=1-2t,\quad \left.\frac{dx}{dt}\right|_{t=0}=1$$

对 $te^y+y+1=0$ 两端关于 $t$ 求导：

$$e^y+t e^y y'_t+y'_t=0\Rightarrow y'_t(1+te^y)=-e^y\Rightarrow y'_t=-\frac{e^y}{1+te^y}$$

在 $t=0,y=-1$ 处：$y'_t=-\dfrac{e^{-1}}{1+0}=-\dfrac1e$。

故 $\left.\dfrac{dy}{dx}\right|_{t=0}=\dfrac{y'_t}{x'_t}=\dfrac{-1/e}{1}=-\dfrac1e$。

**易错点**：对 $te^y$ 求导漏掉乘积法则（$te^y$ 的导数 $=e^y+te^yy'$ 而非 $e^y$）；或忘记先求 $t=0$ 时的 $y=-1$。

**命题规律**：参数方程 + 隐函数混合求导。模板：先求 $x'_t$，再对含 $y$ 的方程隐式求导解 $y'_t$，最后 $\frac{dy}{dx}=\frac{y'_t}{x'_t}$ 代值。
