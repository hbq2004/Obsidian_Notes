---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷五/FRQ
  - 计算题
  - 锥面方程
  - 第二型曲面积分
  - 有向曲面参数化
  - 雅可比换元
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S5-Q20_题目.png|题目]]

设锥面$\Sigma$的顶点为原点,准线为曲线$\Gamma:\begin{cases} z = y^2, \\ x = 1 \end{cases}, (|y| \leq 1)$.

(I) 求$\Sigma$的方程;

(II) 计算 $I = \iint_{\Sigma} 2x^2 \mathrm{d}y\mathrm{d}z + xy \mathrm{d}z\mathrm{d}x + (z+1)\mathrm{d}x\mathrm{d}y$ ,$\Sigma$ 取上侧.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S5-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
(I) $\Sigma$ 的方程：$xz=y^2$，即 $z=\frac{y^2}{x}$（有限锥面片对应 $0<x\le1,\ |y|\le x$）。
(II) $I=\frac{11}{9}$。

关键给分点：
1. 取准线参数 $u$，母线参数 $t$，写出 $r(t,u)=(t,tu,tu^2)$，$0\le t\le1,\ -1\le u\le1$；
2. 算 $\vec n=\vec r_t\times\vec r_u=(tu^2,-2tu,t)$，上侧恰取此方向；
3. 将 $\iint P\mathrm{d}y\mathrm{d}z+Q\mathrm{d}z\mathrm{d}x+R\mathrm{d}x\mathrm{d}y$ 化为 $\iint (P,Q,R)\cdot\vec n\,\mathrm{d}t\mathrm{d}u$，并得到被积函数 $t^2u^2+t$；
4. 积分得 $\frac{2}{9}+1=\frac{11}{9}$。

**解题切入点**
考查锥面的参数方程与第二型曲面积分。类似算法竞赛中“把几何对象参数化后按累加处理”：先由顶点和准线写出母线，再定法向量方向；由于 $\Sigma$ 非封闭曲面，不用高斯公式，直接参数化积分即可。

**推演**
1. 求 $\Sigma$ 的方程。
在准线 $\Gamma$ 上取 $u\in[-1,1]$，点 $(1,u,u^2)$。从原点到该点的母线为 $r(t,u)=t(1,u,u^2)=(t,tu,tu^2)$，其中 $0\le t\le1$ 表示从顶点到准线的锥面片。
由 $x=t,\ y=tu,\ z=tu^2$，得 $y^2=t^2u^2=(t)(tu^2)=xz$，所以 $\Sigma$ 的方程为 $xz=y^2$，即 $z=\frac{y^2}{x}$。

2. 计算曲面积分。
记 $\vec F=(2x^2,\ xy,\ z+1)$。对参数式：$\vec r_t=(1,u,u^2)$，$\vec r_u=(0,t,2tu)$，故 $\vec n=\vec r_t\times\vec r_u=(tu^2,-2tu,t)$。由于 $t>0$ 时 $n_z=t>0$，这正是上侧。
因此
$$\begin{aligned} I&=\int_0^1\int_{-1}^1 \vec F\cdot\vec n\,\mathrm{d}u\,\mathrm{d}t \\ &=\int_0^1\int_{-1}^1 [2t^2\cdot tu^2+t^2u\cdot(-2tu)+(tu^2+1)t]\,\mathrm{d}u\,\mathrm{d}t \\ &=\int_0^1\int_{-1}^1 (t^2u^2+t)\,\mathrm{d}u\,\mathrm{d}t \\ &=\int_0^1 \left(\frac{2}{3}t^2+2t\right)\mathrm{d}t =\frac{2}{9}+1=\frac{11}{9}. \end{aligned}$$

**易错点**
1. 忘记取上侧：若法向量取反，结果会差负号；本题 $\vec r_t\times\vec r_u$ 的 $z$ 分量为 $t>0$，故应保留这个方向。
2. 把 $\Sigma$ 误当成封闭曲面补面用高斯公式。本题准线不是闭合曲线，不能直接补一块简单底面；应按参数化直接积分。
3. 消方程时不要丢掉 $x\ne0$ 或母线的有限范围；若把母线向两端无限延长，积分不收敛。

**命题规律**
这类题常把“锥面、柱面、旋转面”与第二型曲面积分结合，考查参数化和有向法向量。复习时应熟练由“顶点+准线”写母线参数，并会用 $\vec r_u\times\vec r_v$ 判断上侧；遇到非封闭曲面优先直接参数化，不要盲目套高斯公式。

题面按“以原点为顶点、由准线 $\Gamma$ 张成的有限锥面片”理解（母线取 $0\le t\le1$）。


> 来源：《26_张宇八套卷（数一）》卷五 第 20 题
