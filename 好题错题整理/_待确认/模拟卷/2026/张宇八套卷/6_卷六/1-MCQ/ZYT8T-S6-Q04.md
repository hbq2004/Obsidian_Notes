---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷六/MCQ
  - 计算题
  - 变限积分求导
  - 多元复合函数求导
  - 积分上限函数
  - 链式法则
points:
level:
---

# MCQ 第 4 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S6-Q04_题目.png|题目]]

4. 设函数 $f(t)$ 连续，令 $F(x,y) = \int_{0}^{y-x} (y-x-t)f(t)dt$，则

(A) $\frac{\partial F}{\partial x} = \frac{\partial F}{\partial y}, \frac{\partial^2 F}{\partial x^2} = \frac{\partial^2 F}{\partial y^2}$

(B) $\frac{\partial F}{\partial x} = \frac{\partial F}{\partial y}, \frac{\partial^2 F}{\partial x^2} = -\frac{\partial^2 F}{\partial y^2}$

(C) $\frac{\partial F}{\partial x} = -\frac{\partial F}{\partial y}, \frac{\partial^2 F}{\partial x^2} = \frac{\partial^2 F}{\partial y^2}$

(D) $\frac{\partial F}{\partial x} = -\frac{\partial F}{\partial y}, \frac{\partial^2 F}{\partial x^2} = -\frac{\partial^2 F}{\partial y^2}$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S6-Q04_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
选择题【答案】(C)。因 $F$ 只通过 $u=y-x$ 依赖 $x,y$，一阶偏导反号，二阶偏导相等，故 (C) 正确。

**解题切入点**
将 $u=y-x$ 视为中间变量，把 $F$ 写成单变量函数 $G(u)$，相当于“封装”后链式求导；用变限积分求导公式 $G'(u)=\int_0^u f(t)\,dt$ 即可。

**推演**
设

$$
u=y-x,\qquad G(u)=\int_0^u (u-t)f(t)\,dt,
$$

则 $F(x,y)=G(y-x)=G(u)$。

先求 $G'(u)$：

$$
G(u)=u\int_0^u f(t)\,dt-\int_0^u t f(t)\,dt,
$$

故

$$
G'(u)=\int_0^u f(t)\,dt+u f(u)-u f(u)=\int_0^u f(t)\,dt,
$$

且由微积分基本定理 $G''(u)=f(u)$。

又 $u_x=-1,\ u_y=1$，所以

$$
F_x=G'(u)u_x=-G'(u),\qquad F_y=G'(u)u_y=G'(u),
$$

因此

$$
\frac{\partial F}{\partial x}=-\frac{\partial F}{\partial y}.
$$

二阶偏导：

$$
F_{xx}=\frac{\partial}{\partial x}(-G'(u))
=-G''(u)u_x=-f(u)(-1)=f(u),
$$

$$
F_{yy}=\frac{\partial}{\partial y}(G'(u))
=G''(u)u_y=f(u),
$$

故

$$
\frac{\partial^2F}{\partial x^2}=\frac{\partial^2F}{\partial y^2}.
$$

逐一核对选项：
(A) 一阶相等且二阶相等：一阶应为反号，错。
(B) 一阶相等且二阶反号：均错。
(C) 一阶反号且二阶相等：符合，正确。
(D) 一阶反号但二阶反号：二阶应为相等，错。

**易错点**
1. 不要丢掉 $G'(u)$ 中来自上限的项：$G'(u)=\int_0^u f(t)\,dt$，而不是 $f(u)$ 或 $u f(u)$。
2. 链式求导时注意 $u_x=-1$ 的符号；一阶偏导反号，二阶偏导因两次取负号而相等，不能想当然认为二阶也反号。

**命题规律**
本题考查“变限积分 + 多元复合函数求导”。命题人常把一元变限积分藏进多元函数，再要求判断偏导关系。复习时记住“设 $u=y-x$，先对 $u$ 求导，再乘 $u_x,u_y$”的流程，并会用莱布尼茨公式处理含参变量积分。


> 来源：《26_张宇八套卷（数一）》卷六 第 4 题
