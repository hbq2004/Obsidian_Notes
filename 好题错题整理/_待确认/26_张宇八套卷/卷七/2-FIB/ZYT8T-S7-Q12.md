---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - AM
  - 26_张宇八套卷/卷七/FIB
  - 计算题
  - 一阶微分方程
  - 变量代换
  - 幂指函数极限
  - 等价无穷小
points:
level:
---

# FIB 第 12 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S7-Q12_题目.png|题目]]

12.过原点的曲线 $y = y(x)$ 满足 $\frac{\mathrm{d}y}{\mathrm{d}x} = (x+y)^2$，则 $\lim_{x \to 0^+} [y(x)]^x = \_ .$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S7-Q12_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
$$\lim_{x\to0^+}[y(x)]^x=1$$
填空题【答案】:
$$\boxed{1}$$

**解题切入点**
本题把一阶微分方程与幂指函数极限结合。令 $u=x+y$ 可化为 $u'=1+u^2$，先解出 $y$ 的显式，再用 $y\sim \frac{x^3}{3}$ 取对数求极限。

**推演**
1. 换元：令 $u=x+y$，则 $u'=1+y'=1+u^2$，且 $u(0)=0$。
2. 分离变量：$\frac{\mathrm{d}u}{1+u^2}=\mathrm{d}x$，积分得 $\arctan u=x+C$。
3. 由 $u(0)=0$ 得 $C=0$，故 $u=\tan x$，所以 $y=\tan x-x$。
4. 泰勒展开：$\tan x=x+\frac{x^3}{3}+O(x^5)$，故 $y=\frac{x^3}{3}+O(x^5)\sim \frac{x^3}{3}\ (x\to0^+)$，因此 $y>0$。
5. 幂指函数：$[y(x)]^x=e^{x\ln y}$，而
$$
x\ln y=x\ln\left(\frac{x^3}{3}+O(x^5)\right)
=x\left(3\ln x-\ln3+o(1)\right)
=3x\ln x-x\ln3+x\,o(1)\to0.
$$
6. 所以原极限 $=e^0=1$。

**易错点**
- 不能先默认 $y\sim x$ 或 $y$ 与 $x$ 同阶；需由 $y=\tan x-x$ 得到 $y\sim x^3/3$。
- 取对数前注意 $y(x)>0$；本题由渐近式保证，不能对非正数取对数。
- 处理 $x\ln y$ 时要用 $\lim_{x\to0^+}x\ln x=0$，不能把它当成“$0\cdot(-\infty)$”随便写。

**命题规律**
这类题常把微分方程初值问题与极限结合，核心是先求函数的主部。复习时要熟练变量代换、可分离变量方程及幂指函数极限的处理，并注意 $x\ln x\to0$ 这一常用结论。


> 来源：《26_张宇八套卷（数一）》卷七 第 12 题
