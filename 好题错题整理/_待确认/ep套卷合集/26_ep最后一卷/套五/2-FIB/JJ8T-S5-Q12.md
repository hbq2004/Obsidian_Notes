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

## DeepSeek V4 Flash Max

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
