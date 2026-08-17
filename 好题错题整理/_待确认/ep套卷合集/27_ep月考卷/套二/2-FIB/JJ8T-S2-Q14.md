---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套二/FIB
  - 计算题
  - 二重积分计算
  - 交换积分次序
  - 瑕积分
  - 凑微分
  - 分部积分
points:
level:
---

# FIB 第 14 题

![[_Attachments/题目识别/JJ8T/JJ8T-S2-Q14_题目.png|题目]]

14. $D = \{(x, y) \mid 0 \leq y \leq 1, y \leq x \leq 1\}$，计算 $\iint_D (e^{-x^2} + \ln x) \, dx \, dy =$ \_


---

## DeepSeek V4 Flash Max

【考点】本题考查二重积分的计算，关键是选择先对 $y$ 积分的次序；类比算法竞赛中“先确定枚举顺序”，避免对 $e^{-x^2}$ 做无法处理的先 $x$ 积分。
【解】
区域为
$$
D=\{(x,y)\mid 0\le y\le 1,\ y\le x\le 1\}
=\{(x,y)\mid 0\le x\le 1,\ 0\le y\le x\}.
$$
因此先对 $y$ 积分：
$$
\iint_D (e^{-x^2}+\ln x)\,dx\,dy
=\int_0^1\left(\int_0^x(e^{-x^2}+\ln x)\,dy\right)dx
=\int_0^1 x(e^{-x^2}+\ln x)\,dx.
$$
于是
$$
I=\int_0^1 xe^{-x^2}\,dx+\int_0^1 x\ln x\,dx=I_1+I_2.
$$
计算 $I_1$：
$$
I_1=\int_0^1 xe^{-x^2}\,dx
=\left[-\frac12 e^{-x^2}\right]_0^1
=\frac12(1-e^{-1}).
$$
计算 $I_2$（$x=0$ 处按瑕积分处理）：
$$
\int x\ln x\,dx=\frac{x^2}{2}\ln x-\frac{x^2}{4}+C,
$$
$$
I_2=\left[\frac{x^2}{2}\ln x-\frac{x^2}{4}\right]_0^1
=-\frac14.
$$
最后
$$
I=\frac12(1-e^{-1})-\frac14
=\frac14-\frac1{2e}
=\frac{e-2}{4e}.
$$
【答案】
$$
\boxed{\frac14-\frac1{2e}}
$$
【易错点】
1. 若先对 $x$ 积分，会遇到 $\int_y^1 e^{-x^2}dx$ 这类无法用初等函数表示的原函数，导致算不下去；应先对 $y$ 积分。
2. $\ln x$ 在 $x=0$ 处无定义且趋于 $-\infty$，属于瑕积分；不要直接代入 $x=0$，要用 $\lim\limits_{x\to0^+} x^2\ln x=0$ 处理。
3. 计算 $\int xe^{-x^2}dx$ 时系数易漏：凑微分应为 $-\frac12$。
【命题规律】
此类题常把“积分区域化为一重积分”和“已知原函数不好求”结合，考查交换积分次序或选择合适积分顺序。复习时应多练“先画区域、再看哪个方向可积”的套路，并记牢 $e^{-x^2}$ 的变限积分不可初等表示，但乘以 $x$ 后可凑微分。
