---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷三/FIB
  - 计算题
  - 隐函数求导
  - 参数方程求导
  - 链式法则
  - 复合函数求导
  - 代入求值
points:
level:
---

# FIB 第 11 题

![[_Attachments/题目识别/YBS5T/YBS5T-S3-Q11_题目.png|题目]]

$$ \text{设} \left\{ \begin{aligned} &x = 4t^2 + 5t - 7y,\\ &\mathrm{e}^{y+1} - \cos t + ty = 0, \end{aligned} \right. \quad \text{则} \left. \frac{\mathrm{d}y}{\mathrm{d}x} \right|_{t=0} = \_ $$

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S3-Q11_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

令 $t=0$，由
$$\mathrm{e}^{y+1}-\cos t+ty=0$$
得 $\mathrm{e}^{y+1}=1$，所以 $y=-1$。

对第一式关于 $t$ 求导：
$$x=4t^2+5t-7y, \qquad x'_t=8t+5-7y'_t.$$

对第二式关于 $t$ 求导：
$$\mathrm{e}^{y+1}y'_t+\sin t+y+ty'_t=0.$$
代入 $t=0,y=-1$，得
$$y'_t-1=0, \qquad y'_t=1.$$

于是
$$x'_t(0)=8\cdot0+5-7\cdot1=-2.$$

所以
$$\left.\frac{\mathrm{d}y}{\mathrm{d}x}\right|_{t=0}=\left.\frac{y'_t}{x'_t}\right|_{t=0}=\frac{1}{-2}=-\frac12.$$

$$\boxed{-\frac12}$$

**解题切入点**

本题是“参数方程 + 隐函数”混合求导题。关键是先把 $y$ 看作 $t$ 的函数，由隐式方程在 $t=0$ 处求出对应的 $y$，再分别求出 $x'_t,y'_t$，最后用参数方程求导公式
$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{y'_t}{x'_t}.$$
可以类比算法竞赛中“先把所有变量统一到同一个参数上，再求增量比值”。

**推演**

1. 求 $t=0$ 时的 $y$。

   由
   $$\mathrm{e}^{y+1}-\cos t+ty=0$$
   代入 $t=0$：
   $$\mathrm{e}^{y+1}-1=0 \Rightarrow y=-1.$$

2. 对第一式关于 $t$ 求导：
   $$x=4t^2+5t-7y,$$
   注意 $y=y(t)$，所以
   $$x'_t=8t+5-7y'_t.$$

3. 对第二式关于 $t$ 求导：
   $$\mathrm{e}^{y+1}-\cos t+ty=0,$$
   得
   $$\mathrm{e}^{y+1}y'_t+\sin t+y+ty'_t=0.$$

4. 代入 $t=0,y=-1$：
   $$\mathrm{e}^0\cdot y'_t+0-1+0=0,$$
   所以
   $$y'_t=1.$$

5. 代入求 $x'_t(0)$：
   $$x'_t(0)=8\cdot0+5-7\cdot1=-2.$$

6. 因此
   $$\left.\frac{\mathrm{d}y}{\mathrm{d}x}\right|_{t=0}=\frac{1}{-2}=-\frac12.$$

**易错点**

- 最容易错的是在求 $x'_t$ 时误把 $y'_t$ 当作 $0$。实际上由隐式方程可知 $t=0$ 时 $y=-1$，但 $y'_t=1$。
- 对 $ty$ 求导时不要漏项：$(ty)'=y+ty'$。
- 参数方程求导公式是 $\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{y'_t}{x'_t}$，不能写成 $\frac{x'_t}{y'_t}$。
- 求导前必须先确定 $t=0$ 对应的 $y$，否则代入求值会出错。

**命题规律**

考研数学一常将隐函数求导与参数方程求导结合考查，计算量不大，但很考基本功。复习时要把“先代点、再求导、再代导数值”的步骤练熟，同时注意复合函数求导时变量之间的依赖关系。


> 来源：《26_余丙森五套卷（数一）》卷三 第 11 题
