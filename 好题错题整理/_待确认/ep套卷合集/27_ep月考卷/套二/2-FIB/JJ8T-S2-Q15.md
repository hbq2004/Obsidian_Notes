---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 26_ep五套卷/套二/FIB
  - 计算题
  - 变限积分
  - 二重积分换序
  - 定积分性质
  - 已知积分条件
points:
level:
---

# FIB 第 15 题

![[_Attachments/题目识别/JJ8T/JJ8T-S2-Q15_题目.png|题目]]

15. 设 $f(x)$ 在 $[0,1]$ 连续，且 $\int_0^1 f(x)\,dx = 0$，$\int_0^1 x f(x)\,dx = 1$，令 $F(x) = \int_0^x (2x - t)f(t)\,dt$，求 
$\int_0^1 F(x)\,dx = \underline{\hspace{4cm}}$


---

## 解析（AI 生成，仅供参考）

【考点】本题考查变限积分、二重积分换序与已知积分条件；算法竞赛类比：先不要对 $F(x)$ 逐项硬算，而是把 $\int_0^1 F(x)\,dx$ 看作一个二维积分，交换求和顺序后利用已知矩条件。

【解】
令
$$
A(x)=\int_0^x f(t)\,dt,\quad B(x)=\int_0^x t f(t)\,dt.
$$
则
$$
F(x)=2xA(x)-B(x).
$$
所以
$$
\int_0^1 F(x)\,dx=2\int_0^1 xA(x)\,dx-\int_0^1 B(x)\,dx.
$$

先换序计算第一项：
$$
\begin{aligned}
\int_0^1 xA(x)\,dx
&=\int_0^1 x\int_0^x f(t)\,dt\,dx\\
&=\int_0^1 f(t)\int_t^1 x\,dx\,dt\\
&=\int_0^1 f(t)\frac{1-t^2}{2}\,dt.
\end{aligned}
$$
因此
$$
2\int_0^1 xA(x)\,dx=\int_0^1 (1-t^2)f(t)\,dt.
$$

再换序计算第二项：
$$
\begin{aligned}
\int_0^1 B(x)\,dx
&=\int_0^1\int_0^x t f(t)\,dt\,dx\\
&=\int_0^1 t f(t)\int_t^1 dx\,dt\\
&=\int_0^1 t(1-t)f(t)\,dt.
\end{aligned}
$$

所以
$$
\begin{aligned}
\int_0^1 F(x)\,dx
&=\int_0^1 [(1-t^2)-t(1-t)]f(t)\,dt\\
&=\int_0^1 (1-t)f(t)\,dt.
\end{aligned}
$$

由题设
$$
\int_0^1 f(t)\,dt=0,\quad \int_0^1 t f(t)\,dt=1,
$$
故
$$
\int_0^1 (1-t)f(t)\,dt=\int_0^1 f(t)\,dt-\int_0^1 t f(t)\,dt=0-1=-1.
$$

自检：取 $f=-6+12x$（满足题设两个积分条件），直接算得 $F(x)=-9x^2+8x^3$，再积分仍得 $-1$。

【答案】
$$
\int_0^1 F(x)\,dx=-1.
$$
横线处应填：
$$
\boxed{-1}
$$

【易错点】易把 $F(x)$ 中的 $2x$ 当成常数直接提出，或在换序时忘记内层积分的上线会变成 $x$ 到 $1$ 导致漏项；本题关键是把嵌套积分改成二重积分并换序，用已知的两个积分值求差。

【命题规律】此类题常把变限积分与已知积分条件结合，考查积分换序与“用已知矩条件”的能力。复习时应熟练将 $\int_0^1 \int_0^x g(t)\,dt\,dx$ 换序为 $\int_0^1 g(t)(1-t)\,dt$，并牢记 $\int_0^1 f$, $\int_0^1 xf$ 这类条件。

> AI 生成，仅供参考。

