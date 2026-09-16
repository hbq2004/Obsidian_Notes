---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - AM
  - 26_张宇八套卷/卷八/FRQ
  - 计算题
  - 斯托克斯公式
  - 旋度计算
  - 曲面积分转化
  - 投影面积
  - 方向判定
points:
level:
---

# FRQ 第 18 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S8-Q18_题目.png|题目]]

设空间曲线 $\Gamma: \begin{cases} |x|+|y|=1, \\ z = \arctan(x+y), \end{cases}$ 从 $z$ 轴正向往 $z$ 轴负向看，$\Gamma$ 的方向为逆时针，计算
$$I = \oint_{\Gamma} (x^2 - y) \mathrm{d}x + (2x + y^2) \mathrm{d}y + z^2 \mathrm{d}z.$$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S8-Q18_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**：$I = 6$。

关键给分点：① 计算旋度得$(0,0,3)$；② 应用斯托克斯公式，将曲线积分转化为曲面积分；③ 正确选择曲面并确定方向；④ 计算曲面积分得$3\iint_D dxdy = 6$。

**解题切入点**：本题是空间封闭曲线积分，被积表达式旋度简单，故首选斯托克斯公式，将曲线积分转化为曲面积分，再转化为投影区域面积计算。类比算法竞赛中，利用公式化简复杂路径积分，将问题转化为简单区域面积。

**推演**：

1. 设 $P = x^2 - y$, $Q = 2x + y^2$, $R = z^2$，则
   $$\frac{\partial P}{\partial y} = -1,\quad \frac{\partial Q}{\partial x} = 2,\quad \frac{\partial R}{\partial z} = 2z,$$
   但旋度其他分量：
   $$\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = 0 - 0 = 0,\quad \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} = 0 - 0 = 0,\quad \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 2 - (-1) = 3.$$
   故旋度 $\operatorname{rot}\mathbf{F} = (0,0,3)$。

2. 由斯托克斯公式，取曲面 $S$ 为 $z = \arctan(x+y)$ 在 $|x|+|y| \le 1$ 上的部分，其法向量取向上（即 $z$ 分量正），与曲线 $\Gamma$ 的方向（从 $z$ 轴正向看逆时针）构成右手法则。则
   $$\oint_\Gamma Pdx+Qdy+Rdz = \iint_S \operatorname{rot}\mathbf{F} \cdot \mathbf{n} dS.$$

3. 由于 $\operatorname{rot}\mathbf{F} = (0,0,3)$，而 $\mathbf{n} dS = \left(-\frac{\partial z}{\partial x}, -\frac{\partial z}{\partial y}, 1\right) dxdy$，故
   $$\operatorname{rot}\mathbf{F} \cdot \mathbf{n} dS = 3 \, dxdy.$$
   因此，
   $$\iint_S \operatorname{rot}\mathbf{F} \cdot \mathbf{n} dS = 3 \iint_D dxdy,$$
   其中 $D = \{(x,y) \mid |x|+|y| \le 1\}$ 为 $S$ 在 $xy$ 平面上的投影区域。

4. 区域 $D$ 是菱形，面积 $A(D) = 2$（因为对角线长分别为 $2$ 和 $2$，面积 $= \frac{1}{2} \times 2 \times 2 = 2$）。故 $I = 3 \times 2 = 6$。

**易错点**：
- 方向：必须确保曲线方向与曲面法向量满足右手法则，否则曲面积分符号相反。
- 曲面积分转化：当旋度只有 $z$ 分量时，直接得到投影面积，但需注意法向量方向导致的正负。
- 菱形面积：$|x|+|y| \le 1$ 的面积易错记为 $1$ 或 $4$，正确为 $2$。

**命题规律**：
- 常将空间曲线积分与斯托克斯公式结合，考查旋度计算和投影面积。
- 方向判定是高频易错点，复习时需多加练习右手法则。
- 此类题也可用参数化直接计算，但斯托克斯公式更快捷，应熟练掌握。


> 来源：《26_张宇八套卷（数一）》卷八 第 18 题
