---
ctime: 2026-08-24 07:13:13
mtime: 2026-08-24 07:13:13
tags:
  - AM
  - 26_张宇四套卷/卷二/FIB
  - 计算题
  - 变量替换法
  - 可分离变量方程
  - 一阶微分方程
  - 积分求解
points:
level:
---

# 填空题 第 12 题

![[_Attachments/题目识别/ZY4T/ZY4T-S2-Q12_题目.png|题目]]

微分方程 $3(x+y-1)\mathrm{d}x+(x+y)\mathrm{d}y=0$ 的通解为 \_\_\_\_\_\_\_\_\_\_\_.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S2-Q12_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$oxed{2(3x+y)+3\ln|2x+2y-3|=C}$，其中 $C$ 为任意常数。

**解题切入点**

本题主要考查通过变量替换将一阶微分方程化为可分离变量方程求解。观察到 $x+y$ 重复出现，可令 $u=x+y$，从而简化方程，类似算法竞赛中“用新变量替换复杂表达式”的思路。

**推演**

设 $u=x+y$，则 $\mathrm{d}y = \mathrm{d}u - \mathrm{d}x$，代入原方程：
$$3(x+y-1)\mathrm{d}x + (x+y)\mathrm{d}y = 3(u-1)\mathrm{d}x + u(\mathrm{d}u - \mathrm{d}x) = 0$$
整理得 $[3(u-1)-u]\mathrm{d}x + u\mathrm{d}u = (2u-3)\mathrm{d}x + u\mathrm{d}u = 0$，即 $u\mathrm{d}u + (2u-3)\mathrm{d}x = 0$。
分离变量：$\frac{u}{2u-3}\mathrm{d}u = -\mathrm{d}x$。
积分：$\int \frac{u}{2u-3}\mathrm{d}u = -\int \mathrm{d}x$。
计算左边积分：$\frac{u}{2u-3} = \frac{1}{2} + \frac{3}{2(2u-3)}$，故
$$\int \frac{u}{2u-3}\mathrm{d}u = \frac{1}{2}\int \mathrm{d}u + \frac{3}{2}\int \frac{\mathrm{d}u}{2u-3} = \frac{1}{2}u + \frac{3}{4}\ln|2u-3| + C_1$$
所以 $\frac{1}{2}u + \frac{3}{4}\ln|2u-3| = -x + C_2$，即 $\frac{1}{2}u + \frac{3}{4}\ln|2u-3| + x = C$（合并常数）。
回代 $u=x+y$：$\frac{x+y}{2} + \frac{3}{4}\ln|2x+2y-3| + x = C$，乘以 $4$ 得 $2(x+y) + 3\ln|2x+2y-3| + 4x = 4C$，即 $6x+2y+3\ln|2x+2y-3| = C_1$，或写成 $2(3x+y)+3\ln|2x+2y-3|=C$（其中 $C$ 为任意常数）。

**易错点**

1. 变量替换时 $\mathrm{d}y = \mathrm{d}u - \mathrm{d}x$ 易漏项或符号错误。
2. 分离变量时 $\frac{u}{2u-3}\mathrm{d}u = -\mathrm{d}x$ 的负号容易遗漏。
3. 积分 $\int \frac{u}{2u-3}\mathrm{d}u$ 拆分系数计算易出错，需仔细。
4. 最后化简时合并同类项要小心，常数可合并为任意常数。

**命题规律**

此类题目是考研数学一常考的基础题型，通过变量替换化为一阶可分离变量方程。命题人常选取 $x+y$、$\frac{y}{x}$ 等整体代换，解题关键在于观察方程结构。复习时应熟练掌握一阶微分方程的求解方法，尤其是变量替换技巧，并多做练习以提升运算速度与准确性。


> 来源：《26_张宇四套卷（数一）》卷二 第 12 题
