---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
tags:
  - AM
  - 26_ep五套卷/套五/MCQ
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

## 解析（AI 生成，仅供参考）

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

> AI 生成，仅供参考。

