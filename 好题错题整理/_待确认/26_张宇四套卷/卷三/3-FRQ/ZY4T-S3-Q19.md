---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - AM
  - 26_张宇四套卷/卷三/FRQ
  - 计算题
  - 偏导数计算
  - 链式法则
  - 变量代换
  - 偏微分方程化简
  - 积分求解
points:
level:
---

# 解答题 第 19 题

![[_Attachments/题目识别/ZY4T/ZY4T-S3-Q19_题目.png|题目]]

设 $u = \frac{x}{y}$，$v = x$，$w = xz - y$，$z = z(x,y)$ 具有二阶连续偏导数.
(1) 将函数 $z = z(x,y)$ 的方程 $y \frac{\partial^2 z}{\partial y^2} + x \frac{\partial^2 z}{\partial x \partial y} + 2 \frac{\partial z}{\partial y} = \frac{1}{x} - \frac{x}{y}$ 化为 $w = w(u,v)$ 的方程;
(2) 若 $w'_u(u,0) = 1$，$w(1,v) = v^2$，求 $w = w(u,v)$ 的表达式.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S3-Q19_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案** 
(1) 方程化为 $w_{uv} = \frac{v}{u}$. 
(2) $w(u,v) = u + v^2 + \frac{v^2}{2}\ln u - 1$. 

**关键给分点** 
- 变量代换与反解 (2分) 
- 链式法则求偏导 (4分) 
- 化简得到 $w_{uv}=v/u$ (4分) 
- 积分得 $w_u$ 并利用条件 (4分) 
- 积分得 $w$ 并利用条件 (4分) 
- 最终表达式 (2分) 

**解题切入点** 
本题通过变量代换 $u=\frac{x}{y}, v=x, w=xz-y$，将原偏微分方程化简为关于 $w(u,v)$ 的方程，核心是链式法则求偏导。类比算法竞赛中的“坐标变换”技巧，关键在于系统计算各阶偏导并化简。 

**推演** 
(1) 由 $u=\frac{x}{y}, v=x, w=xz-y$，反解出 $y=\frac{v}{u}, z=\frac{w}{v}+\frac{1}{u}$。 
利用链式法则求偏导： 
- $\frac{\partial z}{\partial y} = -\frac{u^2}{v^2}w_u+\frac{1}{v}$， 
- $\frac{\partial^2 z}{\partial y^2} = \frac{2u^3}{v^3}w_u+\frac{u^4}{v^3}w_{uu}$， 
- $\frac{\partial^2 z}{\partial x\partial y} = -\frac{u^3}{v^3}w_{uu}-\frac{u^2}{v^2}w_{uv}-\frac{1}{v^2}$。 
代入原方程 $y\frac{\partial^2 z}{\partial y^2}+x\frac{\partial^2 z}{\partial x\partial y}+2\frac{\partial z}{\partial y}=\frac{1}{x}-\frac{x}{y}$，化简得 $-\frac{u^2}{v}w_{uv}+\frac{1}{v}=\frac{1}{v}-u$，即 $\frac{u^2}{v}w_{uv}=u$，故 $w_{uv}=\frac{v}{u}$。 

(2) 由 $w_{uv}=\frac{v}{u}$，对 $v$ 积分得 $w_u=\frac{v^2}{2u}+\varphi(u)$。利用条件 $w'_u(u,0)=1$ 得 $\varphi(u)=1$，故 $w_u=\frac{v^2}{2u}+1$。 
再对 $u$ 积分得 $w=\frac{v^2}{2}\ln u + u + \psi(v)$。利用条件 $w(1,v)=v^2$ 得 $1+\psi(v)=v^2$，即 $\psi(v)=v^2-1$。 
因此 $w(u,v)=u+v^2+\frac{v^2}{2}\ln u-1$。 

**易错点** 
- 链式法则求偏导时易混淆变量，需注意 $u$ 和 $v$ 对 $x,y$ 的偏导表达式。 
- 二阶偏导混合偏导顺序可交换（由连续性保证），但需按定义计算避免符号错误。 
- 积分时勿忘引入任意函数，并利用初始条件确定。 

**命题规律** 
此类题目常以变量代换化简偏微分方程，结合多元函数微分学与积分，考查综合运用能力。复习时应熟练掌握链式法则、复合函数求导及积分技巧，注意细节。


> 来源：《26_张宇四套卷（数一）》卷三 第 19 题
