---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷一/FRQ
  - 综合题
  - 曲面积分
  - 高斯公式
  - 散度
  - 奇点
  - 通量
points:
level:
---

# FRQ 第 19 题

![[_Attachments/题目识别/YBS5T/YBS5T-S1-Q19_题目.png|题目]]

设 $\Sigma$ 为光滑闭曲面，原点不在 $\Sigma$ 上，$\Sigma$ 取外侧，$\vec{n}$ 为其法向量，$\vec{r}=(x,y,z)$，计算曲面积分.
$$I = \oiint_{\Sigma} \frac{\cos(\vec{r}, \vec{n})}{r^2} \mathrm{d}S, \text{其中 } r = |\vec{r}|.$$

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S1-Q19_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
最终结论：$I = \begin{cases} 4\pi, & \text{若原点在}\Sigma\text{内部}, \\ 0, & \text{若原点在}\Sigma\text{外部}. \end{cases}$
关键给分点：1. 将$\cos(\vec{r},\vec{n})$化为$\frac{\vec{r}\cdot\vec{n}}{r}$，得到$I=\oiint_\Sigma \frac{\vec{r}\cdot\vec{n}}{r^3}dS$；2. 应用高斯公式，讨论原点位置；3. 原点在外部时散度为0，得$I=0$；4. 原点在内部时挖去小球，利用高斯公式转化为小球面外侧积分，计算得$4\pi$。

**解题切入点**
考查向量场通量与高斯公式的灵活运用。类比算法竞赛中“处理奇异点”的技巧：当被积函数在区域内有奇点时，挖掉一个小区间（或小圆）将积分转化为边界积分。本题中场$\vec{F}=\frac{\vec{r}}{r^3}$的散度除原点外为零，只需判断原点是否在闭曲面内，即可直接得到答案。

**推演**
1. 化简被积函数：$\cos(\vec{r},\vec{n})=\frac{\vec{r}\cdot\vec{n}}{r}$，所以 $I=\oiint_\Sigma \frac{\vec{r}\cdot\vec{n}}{r^3}dS$。
2. 令向量场 $\vec{F}=\frac{\vec{r}}{r^3}=\frac{(x,y,z)}{(x^2+y^2+z^2)^{3/2}}$，则 $I=\oiint_\Sigma \vec{F}\cdot\vec{n}dS$，即$\vec{F}$通过$\Sigma$的通量。
3. 计算$\vec{F}$的散度：
   $\frac{\partial}{\partial x}\left(\frac{x}{r^3}\right)=\frac{r^3 - x\cdot3r^2\frac{x}{r}}{r^6}=\frac{r^2-3x^2}{r^5}$，
   同理其他两项，相加得 $\nabla\cdot\vec{F}=\frac{3r^2-3(x^2+y^2+z^2)}{r^5}=0$（$r\neq0$）。
4. 分类讨论：
   - 若原点在$\Sigma$外部，则$\Sigma$包围的区域$\Omega$内$\vec{F}$处处有定义且散度为0，由高斯公式：
     $I=\iiint_\Omega \nabla\cdot\vec{F}dV=0$。
   - 若原点在$\Sigma$内部，则原点处$\vec{F}$无定义，不能直接应用高斯公式。作以原点为心、半径$\varepsilon$的小球面$S_\varepsilon$（取外侧），使得$S_\varepsilon$完全位于$\Sigma$内部。在$\Sigma$和$S_\varepsilon$所围的区域（即$\Sigma$内部挖去小球）上应用高斯公式，注意此时区域边界为$\Sigma$（外侧）和$S_\varepsilon$（内侧），故
     $\oiint_\Sigma \vec{F}\cdot\vec{n}dS + \oiint_{S_\varepsilon,\text{内侧}} \vec{F}\cdot\vec{n}dS = \iiint_{V}\nabla\cdot\vec{F}dV=0$。
     由于内侧法向量与外侧相反，$\oiint_{S_\varepsilon,\text{内侧}} = -\oiint_{S_\varepsilon,\text{外侧}}$，所以
     $I = \oiint_\Sigma = \oiint_{S_\varepsilon,\text{外侧}} \vec{F}\cdot\vec{n}dS$。
     在$S_\varepsilon$上，$r=\varepsilon$，外侧法向量$\vec{n}=\frac{\vec{r}}{r}$（背离原点），故$\vec{F}\cdot\vec{n}=\frac{\vec{r}}{r^3}\cdot\frac{\vec{r}}{r}=\frac{r^2}{r^4}=\frac{1}{r^2}=\frac{1}{\varepsilon^2}$，而$dS=\varepsilon^2\sin\theta d\theta d\phi$，所以
     $\oiint_{S_\varepsilon,\text{外侧}} \vec{F}\cdot\vec{n}dS = \int_0^{2\pi}\int_0^{\pi} \frac{1}{\varepsilon^2}\cdot\varepsilon^2\sin\theta d\theta d\phi = \int_0^{2\pi}d\phi\int_0^{\pi}\sin\theta d\theta = 4\pi$。
   因此$I=4\pi$。
5. 综上，$I = \begin{cases} 4\pi, & \text{原点在}\Sigma\text{内部}, \\ 0, & \text{原点在}\Sigma\text{外部}. \end{cases}$

**易错点**
- 忽略$\vec{n}$为单位法向量，直接使用$\cos(\vec{r},\vec{n})=\frac{\vec{r}\cdot\vec{n}}{|\vec{r}||\vec{n}|}$，但$|\vec{n}|=1$，所以没问题。
- 应用高斯公式时忘记讨论原点位置，直接得出0或4π。
- 原点在内部时，挖掉小球后，小球面法向量的方向选取易错，导致符号错误。
- 计算小球面积分时，需注意$dS$与半径的平方关系，以及$\vec{F}\cdot\vec{n}$的简化。

**命题规律**
- 这类题是“散度-高斯公式”的经典应用，常与“奇点处理”结合，考查分类讨论思想。
- 复习时注意：对于含$\frac{\vec{r}}{r^3}$的场，其散度除原点外为零，通量结果取决于原点是否在内部。
- 类似题目还可拓展为$\oiint\frac{\vec{r}\cdot\vec{n}}{r^k}dS$等形式，需掌握一般处理方法。


> 来源：《26_余丙森五套卷（数一）》卷一 第 19 题
