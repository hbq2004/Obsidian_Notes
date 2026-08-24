---
ctime: 2026-08-24 05:34:18
mtime: 2026-08-24 05:34:18
tags:
  - AM
  - 26_张宇四套卷/卷一/MCQ
  - 计算题
  - 无穷小阶的比较
  - 等价无穷小代换
  - 变上限积分
  - 幂函数积分
points:
level:
---

# 选择题 第 1 题

![[_Attachments/题目识别/ZY4T/ZY4T-S1-Q01_题目.png|题目]]

当 $x \rightarrow 0^+$ 时，下列无穷小量中，最高阶的是.
(A) $\int_0^{x^2} (e^{t^2} + 1)dt.$
(B) $\int_0^x \ln(1+\sqrt{t^3})dt.$
(C) $\int_0^{\sin x} \cos t^2 dt.$
(D) $\int_0^{1-\cos x} \sqrt{\arcsin^3 t} dt.$

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S1-Q01_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
最高阶的是 **(D)**。

【答案】(D)

**解题切入点**
本题是比较 $x\to0^+$ 时多个变上限积分作为无穷小量的“阶”。将被积函数和积分上限分别做等价无穷小，再按 $\int_0^u t^\alpha dt\sim u^{\alpha+1}$ 估计阶数；就像算法竞赛比较复杂度时只看最高次幂，不求系数。

**推演**
逐项估计：

(A) 由于 $e^{t^2}+1\sim 2$，
$$
\int_0^{x^2}(e^{t^2}+1)dt\sim\int_0^{x^2}2dt=2x^2,
$$
故 (A) 为 $2$ 阶无穷小。

(B) 由于 $\ln(1+\sqrt{t^3})\sim t^{3/2}$，
$$
\int_0^x\ln(1+\sqrt{t^3})dt\sim\int_0^x t^{3/2}dt=\frac{2}{5}x^{5/2},
$$
故 (B) 为 $\frac{5}{2}$ 阶无穷小。

(C) 由于 $\cos t^2\sim 1$，且 $\sin x\sim x$，
$$
\int_0^{\sin x}\cos t^2dt\sim x,
$$
故 (C) 为 $1$ 阶无穷小。

(D) 由于 $\sqrt{\arcsin^3 t}=(\arcsin t)^{3/2}\sim t^{3/2}$，且 $1-\cos x\sim\frac{x^2}{2}$，
$$
\int_0^{1-\cos x}\sqrt{\arcsin^3 t}dt\sim\int_0^{x^2/2}t^{3/2}dt
=\frac{2}{5}\left(\frac{x^2}{2}\right)^{5/2}
=\frac{1}{10\sqrt{2}}x^5,
$$
故 (D) 为 $5$ 阶无穷小。

比较阶数：$5>\frac{5}{2}>2>1$，所以最高阶为 (D)。

**易错点**
- 不要把积分上限直接当作无穷小阶数，还要看被积函数在 $t=0$ 处的阶数。(D) 中 $\arcsin t\sim t$，因此被积函数阶数为 $\frac{3}{2}$，配合上限阶数 $2$，总阶数为 $5$。
- $\cos t^2$ 应理解为 $\cos(t^2)$，在 $t=0$ 处趋于 $1$，不能误以为它带来更高阶的无穷小。
- 比较无穷小阶时，只需看 $x^\alpha$ 的指数 $\alpha$，指数越大阶数越高。

**命题规律**
此类题常把“变上限积分 + 等价无穷小 + 无穷小阶的比较”综合在一起来命制。复习时掌握：若 $f(t)\sim a t^\alpha\,(\alpha>-1)$，$\varphi(x)\sim b x^\beta$，则 $\int_0^{\varphi(x)}f(t)dt\sim\frac{a b^{\alpha+1}}{\alpha+1}x^{\beta(\alpha+1)}$。注意 $\alpha>-1$ 保证积分收敛；本题各选项均满足。多练这种“换元/等价”的幂次估计，可快速判断。

题面按 $\cos t^2=\cos(t^2)$、$\arcsin^3 t=(\arcsin t)^3$ 理解。


> 来源：《26_张宇四套卷（数一）》卷一 第 1 题
