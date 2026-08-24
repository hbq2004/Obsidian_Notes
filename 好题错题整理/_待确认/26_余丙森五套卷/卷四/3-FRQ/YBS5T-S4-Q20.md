---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷四/FRQ
  - 综合题
  - 变限积分求导
  - 积分平均值
  - 凸函数性质
  - 极限计算
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/YBS5T/YBS5T-S4-Q20_题目.png|题目]]

设函数 $f(x)$ 可导，$F(x,y) = \frac{1}{2y} \int_{-y}^{y} f(x+t) \mathrm{d}t$，$-\infty < x < +\infty, y > 0$.
(I) 求 $\lim_{y \to 0^+} F(x,y)$;
(II) 求 $\lim_{y \to 0^+} \frac{\partial F}{\partial x}$;
(III) 如果 $f'(x)$ 单增，问 $F(x,y)$ 关于 $y$ 是否单增?

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S4-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(I) $\lim_{y\to0^+} F(x,y) = f(x)$；
(II) $\lim_{y\to0^+} \frac{\partial F}{\partial x} = f'(x)$；
(III) 若 $f'(x)$ 单增，则 $F(x,y)$ 关于 $y$ 单调不减（非减），但不一定严格单调递增。

关键给分点：写出 $F$ 的变形 $F=\frac{1}{2y}\int_{x-y}^{x+y}f(u)du$；利用变上限积分求导得 $\partial F/\partial x$；对 $y$ 求偏导并利用凸性判断符号。

**解题切入点**

将积分看作滑动窗口平均值，窗口长度 $2y$ 缩小时均值趋于中心值；对窗口半径求导可用积分号下求导或换元为 $[-1,1]$ 固定区间，类似算法竞赛中的“莫队”滑动窗口，但这里需要微积分工具。

**推演**

1. 令 $u=x+t$，则 $F(x,y)=\frac{1}{2y}\int_{x-y}^{x+y}f(u)du$。

2. (I) 由积分中值定理或连续性，当 $y\to0^+$ 时，区间长度趋于0，有 $\lim_{y\to0^+}F(x,y)=f(x)$。

3. (II) 对 $x$ 求偏导：$\frac{\partial F}{\partial x} = \frac{1}{2y}[f(x+y)-f(x-y)]$，因此 $\lim_{y\to0^+}\frac{\partial F}{\partial x} = \lim_{y\to0^+}\frac{f(x+y)-f(x-y)}{2y} = f'(x)$（因 $f$ 可导）。

4. (III) 判断 $F$ 关于 $y$ 的单调性。换元 $s=(u-x)/y$，则 $F(x,y)=\frac{1}{2}\int_{-1}^{1} f(x+sy)\,ds$。对 $y$ 求偏导：
   $\frac{\partial F}{\partial y} = \frac{1}{2}\int_{-1}^{1} s f'(x+sy)\,ds$。
   
   将积分拆分：$\int_{-1}^{1} s f'(x+sy)ds = \int_{0}^{1} s[f'(x+sy)-f'(x-sy)]ds$。因为 $f'$ 单增，所以当 $s>0$ 时，$x+sy > x-sy$，故 $f'(x+sy) \ge f'(x-sy)$，所以被积函数非负，故 $\frac{\partial F}{\partial y}\ge0$。因此 $F$ 关于 $y$ 单调不减。若 $f'$ 严格增，则 $\frac{\partial F}{\partial y}>0$，此时严格单调递增；但题设仅给“单增”，故不能保证严格。

**易错点**

- 对 $y$ 求偏导时，若直接对原式用莱布尼茨法则，容易漏项或符号错误；采用换元 $s=(u-x)/y$ 可避免。
- 将 $F$ 看作滑动平均后，注意 $F$ 的定义域 $y>0$，极限是右极限。
- 判断单调性时，不能想当然认为凸函数平均值随区间增大而增大，需严格证明 $\partial F/\partial y$ 的符号；且要注意“单增”与“严格单增”的区别。

**命题规律**

此类题目常结合积分平均值、变上限积分求导与函数凹凸性，考查对积分号下求导和极限的理解。复习时应熟练掌握积分变限求导公式，并能灵活换元简化，同时关注凸函数的积分性质。


> 来源：《26_余丙森五套卷（数一）》卷四 第 20 题
