---
ctime: 2026-08-24 15:13:02
mtime: 2026-08-24 15:13:02
tags:
  - AM
  - 26_余丙森五套卷/卷一/FIB
  - 计算题
  - 第一类曲线积分
  - 曲线方程化简
  - 圆周参数方程
  - 对称性
  - 弧长积分
points:
level:
---

# FIB 第 13 题

![[_Attachments/题目识别/YBS5T/YBS5T-S1-Q13_题目.png|题目]]

设曲线 $L: x^2 + y^2 = y$，则 $I = \oint_L [(x^2 + y^2)^2 + x^2] \mathrm{d}s =$ \_\_\_\_\_\_.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S1-Q13_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$$I = \frac{\pi}{2}$$

**解题切入点**

考查第一类曲线积分计算。关键利用曲线方程 $x^2+y^2=y$ 将被积函数化简为 $y$，从而转化为 $\oint_L y\,\mathrm{d}s$。类似算法竞赛中利用约束条件简化表达式，减少计算量。

**推演**

1. 由曲线 $L: x^2+y^2=y$，得 $x^2+y^2=y$，故 $(x^2+y^2)^2=y^2$。
2. 被积函数 $(x^2+y^2)^2+x^2 = y^2+x^2 = x^2+y^2 = y$。
3. 于是 $I = \oint_L y\,\mathrm{d}s$。
4. 曲线 $L$ 即 $x^2+(y-\frac12)^2 = (\frac12)^2$，圆心 $(0,\frac12)$，半径 $R=\frac12$。
5. 方法一（参数方程）：设 $x=\frac12\cos\theta,\; y=\frac12+\frac12\sin\theta$，$\theta\in[0,2\pi)$，则 $\mathrm{d}s = \frac12\mathrm{d}\theta$。于是

$$I = \int_0^{2\pi} \left(\frac12+\frac12\sin\theta\right)\cdot\frac12\mathrm{d}\theta = \frac14\int_0^{2\pi} (1+\sin\theta)\mathrm{d}\theta = \frac14\cdot 2\pi = \frac{\pi}{2}.$$

6. 方法二（对称性+质心）：曲线 $L$ 为均匀圆周，其质心即圆心 $(0,\frac12)$，故 $\bar{y}=\frac12$，弧长 $L=2\pi R=\pi$，则 $\oint_L y\,\mathrm{d}s = \bar{y}\cdot L = \frac12\cdot\pi = \frac{\pi}{2}$。

**易错点**

- 误将曲线方程用于积分变量，如直接代入 $x^2+y^2$ 但忽略弧长。
- 参数方程写错，特别是圆心不在原点时，容易漏掉平移。
- 弧长元素 $\mathrm{d}s$ 计算错误，圆参数方程的 $\mathrm{d}s = R\mathrm{d}\theta$ 要注意。

**命题规律**

第一类曲线积分常与曲线方程简化结合，利用对称性、质心公式等简化计算。复习时应熟练掌握参数方程、弧长公式，并培养利用曲线方程化简被积函数的意识，类似考研题中常见“曲线 $L$ 满足 $x^2+y^2=ax$”等条件。


> 来源：《26_余丙森五套卷（数一）》卷一 第 13 题
