---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
tags:
  - AM
  - 26_ep最后一卷/套五/FIB
  - 计算题
  - 一阶线性微分方程
  - 积分因子法
  - 分部积分
  - 隐式解
points:
level:
---

# FIB 第 12 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q12_题目.png|题目]]

12. 微分方程 $y \ln y \, dx + (x - y^3 \ln y) \, dy = 0$ 满足条件 $y \big|_{x=0} = \sqrt[3]{e}$ 的解为 \_ .


---

## 解析（AI 生成，仅供参考）

【考点】本题考查一阶线性微分方程的求解，将 $y$ 视为自变量，$x$ 视为函数，利用积分因子法化为一阶线性标准形式。类比算法竞赛：把方程看成关于 $x$ 的线性递推，积分因子就是递推的“公因子”。

【解】将方程 $y\ln y\,dx + (x - y^3\ln y)\,dy = 0$ 改写为 $y\ln y \frac{dx}{dy} + x = y^3\ln y$，即 $\frac{dx}{dy} + \frac{1}{y\ln y}x = y^2$。

令 $P(y)=\frac{1}{y\ln y}$，积分因子 $\mu = e^{\int P(y)\,dy}=e^{\ln(\ln y)}=\ln y$（由初始条件 $y=\sqrt[3]{e}>1$，$\ln y>0$）。

乘以积分因子得 $(x\ln y)' = y^2\ln y$，两边对 $y$ 积分：$x\ln y = \int y^2\ln y\,dy$。

计算 $\int y^2\ln y\,dy = \frac{y^3}{3}\ln y - \frac{1}{3}\int y^2\,dy = \frac{y^3}{3}\ln y - \frac{y^3}{9} + C$。

所以 $x\ln y = \frac{y^3}{3}\ln y - \frac{y^3}{9} + C$。

代入初始条件 $x=0, y=\sqrt[3]{e}$（此时 $\ln y=\frac{1}{3}$）得 $0 = \frac{e}{3}\cdot\frac{1}{3} - \frac{e}{9} + C = \frac{e}{9}-\frac{e}{9}+C = C$，故 $C=0$。

因此解为 $x\ln y = \frac{y^3}{3}\ln y - \frac{y^3}{9}$，即 $\ln y\left(x - \frac{y^3}{3}\right) = -\frac{y^3}{9}$。

【答案】横线处应填：
$$\boxed{x\ln y = \frac{y^3}{3}\ln y - \frac{y^3}{9}}$$
（也等价于 $x = \frac{y^3}{3} - \frac{y^3}{9\ln y}$）

【易错点】1. 注意不要误把 $y$ 当因变量，本题应以 $y$ 为自变量、$x$ 为函数；2. 积分因子计算时需注意 $\ln y$ 的正负，由初始条件确定；3. 分部积分时勿忘第二项；4. 初始条件代入的是 $x=0$ 时的 $y$ 值，求常数 $C$ 要仔细。

【命题规律】此类题常将方程改写为关于 $x$ 或 $y$ 的一阶线性方程，然后利用积分因子或常数变易法求解。复习时需熟练掌握一阶线性微分方程的求解流程，并注意变量选取的灵活性。

> AI 生成，仅供参考。

---

## V4 Flash Max 解析

**答案**:
$$
\boxed{x\ln y-\frac{y^3}{3}\ln y+\frac{y^3}{9}=0}
$$
等价于
$$
\boxed{x=\frac{y^3}{3}-\frac{y^3}{9\ln y}}
$$
由它在初值附近确定 $y=y(x)$。

**解题切入点**:
先不要默认必须写成 $y=y(x)$ 硬解。原方程不是全微分方程，但除以 $y$ 后，$\ln y\,dx+\frac{x}{y}dy$ 正好是 $d(x\ln y)$，可以凑全微分。这有点像算法中的“换状态表示”：把问题从 $(x,y)$ 换到看 $x\ln y$，结构立刻清晰。

**推演**:
初值 $y(0)=e^{1/3}>1$，所以在初值附近 $y\neq 0$。原式两边除以 $y$：

$$
\ln y\,dx+\left(\frac{x}{y}-y^2\ln y\right)dy=0.
$$

检查全微分条件：

$$
\frac{\partial}{\partial y}(\ln y)=\frac1y,\qquad
\frac{\partial}{\partial x}\left(\frac{x}{y}-y^2\ln y\right)=\frac1y.
$$

所以它是全微分方程。整理：

$$
\ln y\,dx+\frac{x}{y}dy-y^2\ln y\,dy=0.
$$

而

$$
d(x\ln y)=\ln y\,dx+\frac{x}{y}dy,
$$

并且

$$
d\left(\frac{y^3}{3}\ln y-\frac{y^3}{9}\right)
=y^2\ln y\,dy.
$$

因此

$$
d\left(x\ln y-\frac{y^3}{3}\ln y+\frac{y^3}{9}\right)=0.
$$

通解为

$$
x\ln y-\frac{y^3}{3}\ln y+\frac{y^3}{9}=C.
$$

代入初值 $x=0,\ y=e^{1/3}$，此时

$$
\ln y=\frac13,\qquad y^3=e,
$$

所以

$$
C=0-\frac e3\cdot\frac13+\frac e9=0.
$$

故

$$
x\ln y-\frac{y^3}{3}\ln y+\frac{y^3}{9}=0.
$$

在初值附近 $y>1$，$\ln y\neq 0$，可写成

$$
x=\frac{y^3}{3}-\frac{y^3}{9\ln y}.
$$

**易错点**:
- 原式不是全微分方程：$M=y\ln y,\ N=x-y^3\ln y$ 时，$M_y=\ln y+1\neq 1=N_x$。但乘以积分因子 $1/y$ 后就是全微分方程，不能就此放弃。
- 容易漏常数 $C$。本题通解应为 $F=C$，代入初值得 $C=0$。
- 不要强行解出 $y=f(x)$。该隐式解/以 $x$ 为 $y$ 的函数形式已是合法答案。
- 自检：对  
$$
x\ln y=\frac{y^3}{3}\ln y-\frac{y^3}{9}
$$
两边关于 $y$ 求导：

$$
x_y\ln y+\frac{x}{y}=y^2\ln y.
$$

乘以 $y$ 得

$$
y\ln y\,x_y+x-y^3\ln y=0,
$$

即原方程，且初值代入也满足。

**命题规律**:
一阶微分方程常考“非标准型化标准型”：可分离变量、一阶线性、全微分方程。本题表面不是全微分，但乘 $1/y$ 后凑全微分；也可改写成

$$
\frac{dx}{dy}+\frac{x}{y\ln y}=y^2
$$

用一阶线性公式求解，积分因子为 $\ln y$。命题时常把初值设计成代入后常数恰好为 $0$，以降低计算量；答案常允许隐式或 $x=x(y)$ 形式。
