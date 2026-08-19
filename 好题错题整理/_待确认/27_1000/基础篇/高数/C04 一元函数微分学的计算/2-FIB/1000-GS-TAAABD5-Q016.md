---
ctime: 2026-08-16 21:16:41
mtime: 2026-08-20 01:29:40
tags:
  - AM
  - 27_1000/C04/a/FIB
  - 计算题
  - 一元函数微分学的计算
  - 参数方程求导
  - 二阶导数
points:
level:
---

# FIB 第 16 题

![[_Attachments/题目识别/1000-GS/1000-GS-TAAABD5-Q016_题目.png|题目]]

16. 若 $\begin{cases} x=\ln|t|, \\ y=e^{-t^2}, \end{cases}$，则 $\left. \frac{d^2y}{dx^2} \right|＿{t=\sqrt{2}} =$ \_ .

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-GS-TAAABD5-Q016_答案.png|答案]]

## V4 Pro Max 解析

**答案**：$\left.\dfrac{d^2y}{dx^2}\right|_{t=\sqrt2}=\dfrac{8}{e^2}$

**切入点**：参数方程二阶导公式 $\frac{d^2y}{dx^2}=\frac{d}{dx}\left(\frac{dy}{dx}\right)=\frac{1}{x'_t}\frac{d}{dt}\left(\frac{dy}{dx}\right)$。先算 $\frac{dy}{dx}$，再对 $t$ 求导除以 $x'_t$。类比"链式再除一次"。

**推演**

$$x'_t=\frac1t,\qquad y'_t=-2te^{-t^2}$$

$$\frac{dy}{dx}=\frac{y'_t}{x'_t}=\frac{-2te^{-t^2}}{1/t}=-2t^2e^{-t^2}$$

$$\frac{d^2y}{dx^2}=\frac{1}{x'_t}\cdot\frac{d}{dt}\left(-2t^2e^{-t^2}\right)$$

$$\frac{d}{dt}\left(-2t^2e^{-t^2}\right)=-4te^{-t^2}+4t^3e^{-t^2}=4t(t^2-1)e^{-t^2}$$

在 $t=\sqrt2$：$\dfrac{d}{dt}(\cdots)=4\sqrt2(2-1)e^{-2}=4\sqrt2\,e^{-2}$，且 $x'_t=\dfrac1{\sqrt2}$。

$$\frac{d^2y}{dx^2}=\frac{4\sqrt2\,e^{-2}}{1/\sqrt2}=8e^{-2}=\frac{8}{e^2}$$

**易错点**：二阶导不是 $\frac{y''_{tt}}{x''_{tt}}$，必须用 $\frac{d}{dx}(\frac{dy}{dx})=\frac{1}{x'_t}\frac{d}{dt}(\frac{dy}{dx})$。对 $-2t^2e^{-t^2}$ 求导用乘积法则别漏项。

**命题规律**：参数方程二阶导是必考公式，易在"再除以 $x'_t$"这一步丢分。模板：$y'=\frac{y'_t}{x'_t}$，$y''=\frac{(y'_t/x'_t)'_t}{x'_t}$。
