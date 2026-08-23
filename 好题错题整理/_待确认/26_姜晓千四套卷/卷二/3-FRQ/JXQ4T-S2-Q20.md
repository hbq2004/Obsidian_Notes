---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - AM
  - 26_姜晓千四套卷/卷二/FRQ
  - 计算题
  - 曲线积分与路径无关
  - 全微分条件
  - 格林公式
  - 参数曲线积分
  - 挖洞法
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S2-Q20_题目.png|题目]]

设 $f(x)$ 有一阶连续导数，且 $f(1)=1$。若 $D$ 为不含原点的单连通区域，$D$ 内任意两点 $A,B$，曲线积分 $$\int_{A}^{B} \frac{ydx-xdy}{2x^{2}+f(y)}$$ 与路径无关。

(I) 求 $f(x)$；

(II) 设曲线 $L: x^{\frac{2}{3}}+y^{\frac{2}{3}}=a^{\frac{2}{3}}$，取逆时针方向，计算积分 $$\int_{L} \frac{ydx-xdy}{2x^{2}+f(y)}$$。

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S2-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

解答题【答案】：  
(I) $f(x)=x^2$；  
(II) $\displaystyle \int_L \frac{y\,dx-x\,dy}{2x^2+f(y)}=-\sqrt2\,\pi$。  
关键给分点：  
① 由路径无关条件 $\dfrac{\partial P}{\partial y}=\dfrac{\partial Q}{\partial x}$，得 $y f'(y)=2f(y)$，结合 $f(1)=1$ 得 $f(x)=x^2$；  
② 挖去小椭圆 $2x^2+y^2=\varepsilon^2$，利用闭形式绕原点积分与路径无关，将 $L$ 上的积分化为小椭圆上的积分；  
③ 小椭圆逆时针参数化 $x=\frac{\varepsilon}{\sqrt2}\cos\theta,\ y=\varepsilon\sin\theta$，算得积分 $-\sqrt2\pi$。

**解题切入点**

考查“曲线积分与路径无关”的等价条件：区域单连通且 $\partial P/\partial y=\partial Q/\partial x$。这相当于算法竞赛中判断“函数是否有势能/图中是否存在零环”；第二问是闭形式绕奇点的“挖洞同调”，把复杂星形线换成简单椭圆计算。

**推演**

(I) 令 
$$P=\frac{y}{2x^2+f(y)},\quad Q=\frac{-x}{2x^2+f(y)}.$$ 
因积分与路径无关，故 
$$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}.$$ 
计算得 
$$\frac{\partial P}{\partial y}=\frac{2x^2+f(y)-y f'(y)}{(2x^2+f(y))^2},$$ 
$$\frac{\partial Q}{\partial x}=\frac{2x^2-f(y)}{(2x^2+f(y))^2}.$$ 
令两者相等，得 
$$2f(y)-y f'(y)=0,\quad\text{即 } y f'(y)=2f(y).$$ 
解微分方程： 
$$\frac{f'(y)}{f(y)}=\frac{2}{y}\Rightarrow f(y)=C y^2.$$ 
由 $f(1)=1$，得 $C=1$，故 $f(x)=x^2$。

(II) 此时被积式为 
$$\omega=\frac{y\,dx-x\,dy}{2x^2+y^2}.$$ 
在除原点外有 $d\omega=0$。星形线 $L:x^{2/3}+y^{2/3}=a^{2/3}$ 逆时针包围原点，不能直接在围成区域上用格林公式。取小椭圆 
$$C_\varepsilon:\ 2x^2+y^2=\varepsilon^2,\quad \text{逆时针}.$$ 
在 $L$ 与 $C_\varepsilon$ 之间的区域不含原点，故 $\oint_L\omega=\oint_{C_\varepsilon}\omega$。  
参数化 $C_\varepsilon$： 
$$x=\frac{\varepsilon}{\sqrt2}\cos\theta,\quad y=\varepsilon\sin\theta,\quad 0\le\theta\le2\pi.$$ 
则 $dx=-\frac{\varepsilon}{\sqrt2}\sin\theta\,d\theta,\ dy=\varepsilon\cos\theta\,d\theta$， 
$$y\,dx-x\,dy=-\frac{\varepsilon^2}{\sqrt2}\,d\theta,$$ 
分母 $2x^2+y^2=\varepsilon^2$。于是 
$$\int_{C_\varepsilon}\omega=\int_0^{2\pi}\frac{-\varepsilon^2/\sqrt2}{\varepsilon^2}\,d\theta=-\sqrt2\,\pi.$$ 
因此原积分 
$$\int_L \frac{y\,dx-x\,dy}{2x^2+f(y)}=-\sqrt2\,\pi.$$ 
（回代 $f(y)=y^2$ 验证：推导中每一步的等价条件均满足，$f$ 有一阶连续导数。）

**易错点**

1. 路径无关条件容易把 $\frac{\partial P}{\partial y}$ 和 $\frac{\partial Q}{\partial x}$ 写反，或忘记 $Q=-x/M$ 的负号。  
2. 第二问不能直接对星形线围成的区域用格林公式：原点处无定义，需挖洞。挖洞时注意内外边界方向：外逆内顺，转换后等价于小椭圆逆时针。  
3. 参数化小椭圆时要保持逆时针方向，若方向取反，结果符号会反。  
4. 解微分方程时注意 $y=0$ 点由连续性处理，最终 $f(0)=0$，不影响 $f(x)=x^2$。

**命题规律**

本题综合了多元函数积分学的核心：路径无关（全微分条件）与第二类曲线积分。命题套路是先给一个带未知函数的积分表达式，用路径无关求函数；再给一条闭曲线（常为星形线、椭圆等）求积分，常需挖洞或参数化。复习时要熟练格林公式、挖洞法、常见参数曲线（圆、椭圆、星形线）。


> 来源：《26_姜晓千四套卷（数一）》卷二 第 20 题
