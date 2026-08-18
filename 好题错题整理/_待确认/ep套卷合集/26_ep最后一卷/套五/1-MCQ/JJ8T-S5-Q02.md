---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
tags:
  - AM
  - 26_ep最后一卷/套五/MCQ
  - 计算题
  - 复合函数偏导
  - 一阶线性微分方程
  - 变量代换
  - 函数值求解
points:
level:
---

# MCQ 第 2 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q02_题目.png|题目]]

2. 已知 $z(x, y) = xy f\left[\ln(xy)\right] - (xy)^2$，且 $f(t)$ 可导，$z(1, 1) = 1$。若 $\frac{1}{y} \frac{\partial z}{\partial x} + \frac{1}{x} \frac{\partial z}{\partial y} = 0$，则( )

A. $f(1) = \frac{1}{e}$，$f'(1) = -\frac{1}{e}$

B. $f(1) = e - \frac{1}{e}$，$f'(1) = e + \frac{1}{e}$

C. $f(1) = \frac{4}{e}$，$f'(1) = 2 - \frac{4}{e}$

D. $f(1) = e + \frac{1}{e}$，$f'(1) = e - \frac{1}{e}$


---

## DeepSeek V4 Flash Max

【考点】本题考查多元复合函数求偏导与常微分方程的结合。类似算法竞赛中，先通过变量代换化简约束条件，再解方程得到函数表达式。

【解】令 $u=xy$，则 $z(x,y)=u f(\ln u)-u^2$。

对 $x$ 求偏导（注意 $u$ 是 $x,y$ 的函数）：
$$
\frac{\partial z}{\partial x} = y f(\ln u) + u f'(\ln u) \cdot \frac{1}{u} \cdot y - 2u y = y\big[f(\ln u)+f'(\ln u)-2u\big]
$$

同理对 $y$ 求偏导：
$$
\frac{\partial z}{\partial y} = x\big[f(\ln u)+f'(\ln u)-2u\big]
$$

代入题设条件：
$$
\frac{1}{y}\frac{\partial z}{\partial x}+\frac{1}{x}\frac{\partial z}{\partial y}
= \big[f(\ln u)+f'(\ln u)-2u\big]+\big[f(\ln u)+f'(\ln u)-2u\big]
=2\big[f(\ln u)+f'(\ln u)-2u\big]=0
$$

因此对一切 $u>0$ 有：
$$
f(\ln u)+f'(\ln u)=2u
$$

令 $t=\ln u$，则 $u=e^t$，得到常微分方程：
$$
f(t)+f'(t)=2e^t
$$

这是一阶线性微分方程，整理为 $f'(t)+f(t)=2e^t$。积分因子为 $e^t$，则：
$$
(e^t f(t))'=2e^{2t}
$$
积分得：
$$
e^t f(t)=e^{2t}+C \quad\Rightarrow\quad f(t)=e^t+C e^{-t}
$$

由 $z(1,1)=1$，而 $z(1,1)=1\cdot1 f(\ln 1)-(1\cdot1)^2=f(0)-1$，所以 $f(0)=2$。代入 $f(0)=1+C=2$，得 $C=1$。于是：
$$
f(t)=e^t+e^{-t}
$$

故 $f(1)=e+e^{-1}=e+\frac{1}{e}$，$f'(1)=e-e^{-1}=e-\frac{1}{e}$。

【答案】选项 **D**。

- A 选项：$f(1)=\frac{1}{e}$，$f'(1)=-\frac{1}{e}$，代入微分方程 $f(1)+f'(1)=0$，而右端 $2e$，不满足，错误。
- B 选项：$f(1)=e-\frac{1}{e}$，$f'(1)=e+\frac{1}{e}$，则 $f(1)+f'(1)=2e$ 恰好满足方程，但 $f(0)=f(1)+?$ 需要核实，实际上该函数不满足 $f(0)=2$，因为若 $f(t)=e^t+C e^{-t}$，则 $f(1)+f'(1)=2e$ 可推出 $C$ 任意？计算得 $f(1)+f'(1)=(e+C/e)+(e-C/e)=2e$ 恒成立，但 $f(0)=1+C$ 要等于2则 $C=1$，此时 $f(1)=e+1/e$，所以 B 的 $f(1)$ 少加 $2/e$，错误。
- C 选项：$f(1)=\frac{4}{e}$，$f'(1)=2-\frac{4}{e}$，和 $f(1)+f'(1)=2$，不等于 $2e$，错误。
- D 选项：正确。

【易错点】易错点一：忘记 $u=xy$ 对 $x$ 和 $y$ 的偏导分别为 $y$ 和 $x$，导致复合求导漏项。易错点二：将 $f(\ln u)$ 中的变量误当作 $u$ 而不换元，导致无法构造微分方程。防错提醒：遇到 $f[\ln(xy)]$ 应令 $t=\ln(xy)$，把恒等式化为常微分方程。另注意初始条件由 $z(1,1)$ 提供。

【命题规律】此类题目将多元函数偏导数与一阶微分方程结合，先通过复合求导化简条件，再解方程求函数值。复习时应熟练掌握复合函数链式法则，并能识别出可转化为常微分方程的隐含条件。

---

## V4 Flash Max 解析

**答案**: D。令 $u=xy$，题设条件等价于 $F'(u)=0$，又由 $z(1,1)=1$ 得 $F(1)=1$，反解出 $f(t)=e^t+e^{-t}$，所以 $f(1)=e+\frac1e$，$f'(1)=e-\frac1e$。

**解题切入点**: 看到 $z$ 中只出现 $xy$，应立刻令 $u=xy$，把 $z$ 看成 $F(u)$。条件中的 $\frac1y\frac{\partial}{\partial x}+\frac1x\frac{\partial}{\partial y}$ 作用在 $F(xy)$ 上正好是 $2F'(xy)$，于是二元偏导条件化成一元函数条件。这类似算法竞赛中的“降维”：先找整体变量，再反解函数。

**推演**: 
令 $u=xy>0$，设
$$
F(u)=u f(\ln u)-u^2,
$$
则
$$
z(x,y)=F(xy).
$$
由链式法则：
$$
z_x=F'(xy)\cdot y,\qquad z_y=F'(xy)\cdot x.
$$
所以
$$
\frac1y z_x+\frac1x z_y
= \frac1y F'(xy)y+\frac1x F'(xy)x
=2F'(xy).
$$
题设等式恒成立，因此 $F'(xy)=0$，即 $F'(u)=0$，故 $F(u)$ 为常数。

又
$$
z(1,1)=F(1)=1\cdot f(\ln1)-1^2=f(0)-1=1,
$$
所以 $f(0)=2$，且 $F(1)=1$。因 $F(u)$ 为常数，故
$$
F(u)\equiv 1.
$$
于是
$$
u f(\ln u)-u^2=1\quad(u>0).
$$
令 $t=\ln u$，则 $u=e^t$，得
$$
e^t f(t)-e^{2t}=1
\Rightarrow f(t)=e^t+e^{-t}.
$$
因此
$$
f(1)=e+\frac1e,
$$
且
$$
f'(t)=e^t-e^{-t},\qquad f'(1)=e-\frac1e.
$$
故选 **D**。

**易错点**: 
1. 不能只把题设偏导等式代入 $(1,1)$；若只在一点成立，只能得到 $F'(1)=0$，无法推出 $f(1),f'(1)$。应理解为恒等式。
2. 直接求 $F'(u)$ 时，$u f(\ln u)$ 的导数是 $f(\ln u)+f'(\ln u)$，容易漏掉第一项 $f(\ln u)$。
3. 求导时注意 $e^{-t}$ 的导数是 $-e^{-t}$，所以 $f'(1)=e-\frac1e$，不是 $e+\frac1e$。
自检：$f(t)=e^t+e^{-t}$ 时，$F(u)=u\left(u+\frac1u\right)-u^2=1$，故 $F'(u)=0$，原偏导等式成立，且 $z(1,1)=1$ 也满足。

**命题规律**: 本题是“多元复合函数求导 + 一元函数反解”的综合题。命题人常把整体变量 $u=xy$ 藏在偏导线性组合中；识别 $\frac1y z_x+\frac1x z_y$ 为 $2F'(xy)$ 是关键。常见变式还有：若条件为 $x z_x-y z_y=0$，常设 $z=F(xy)$；若条件为 $x z_x+y z_y=0$，常设 $z=G(x/y)$。本题也可化为标准一阶线性 ODE：$f'(t)+f(t)=2e^t$，初值由 $z(1,1)$ 给出。
