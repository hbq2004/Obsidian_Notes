---
ctime: 2026-08-22 05:15:01
mtime: 2026-08-22 05:15:01
tags:
  - AM
  - 27_模拟卷概念题摘选/李林四套卷卷四
  - 概念题
  - 可导性
  - 导数极限与函数极限
  - 拉格朗日中值定理
  - 无穷远极限
  - 反例构造
points:
level:
---

# MCQ 第 38 题

![[_Attachments/题目识别/27_模拟卷概念题摘选-题目/MNJ-Q038_题目.png|题目]]

设$f(x)$在$(-\infty, +\infty)$内可导, 下列结论正确的是.

(A) 若$\lim_{x\to +\infty} f(x) = a$, 则$\lim_{x\to +\infty} f'(x) = 0$.
(B) 若$\lim_{x\to -\infty} f'(x) = -\infty$, 则$\lim_{x\to -\infty} f(x) = -\infty$.
(C) 若$\lim_{x\to -\infty} f(x) = -\infty$, 则$\lim_{x\to -\infty} f'(x) = -\infty$.
(D) 若$\lim_{x\to +\infty} f'(x) = +\infty$, 则$\lim_{x\to +\infty} f(x) = +\infty$.

> 考点批注：这题可以说一个点，看到导数和函数的结论，条件性的应该想到只有导数能推函数相关的结论，任何反过来的推理都是错误的

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 D。若 $\lim\limits_{x\to+\infty} f'(x)=+\infty$，则 $\lim\limits_{x\to+\infty} f(x)=+\infty$；其余选项均不成立。

**解题切入点**：拿到题目先分清前提是“函数极限”还是“导数极限”。函数极限是整体累计趋势，导数极限是瞬时变化趋势；函数极限一般不能推导数极限，而导数极限推函数极限时还要注意自变量趋向方向和导数符号。类似地：知道“每秒速度最终趋于正无穷”可推出“总位移趋于正无穷”；但知道“总位移趋于某个常数”不能推出“每秒速度趋于 $0$”。

**推演**：

(A) 错。取
$$
f(x)=\begin{cases}
\dfrac{\sin x^2}{x}, & x\ne 0,\\
0, & x=0,
\end{cases}
$$
补充定义后 $f$ 在 $\mathbb R$ 上可导，且
$$
\lim_{x\to+\infty} f(x)=0.
$$
但
$$
f'(x)=2\cos x^2-\frac{\sin x^2}{x^2}\quad (x\ne0).
$$
当 $x\to+\infty$ 时，第二项趋于 $0$，而第一项 $2\cos x^2$ 振荡，极限不存在。因此不能推出 $f'(x)\to0$。

(B) 错。取 $f(x)=x^2$，则
$$
\lim_{x\to-\infty} f'(x)=\lim_{x\to-\infty}2x=-\infty,
$$
但
$$
\lim_{x\to-\infty} f(x)=+\infty,
$$
不是 $-\infty$。

(C) 错。取 $f(x)=-x^2$，则
$$
\lim_{x\to-\infty} f(x)=-\infty,
$$
但
$$
f'(x)=-2x\to+\infty\quad (x\to-\infty),
$$
并不是 $-\infty$。

(D) 对。由 $\lim\limits_{x\to+\infty} f'(x)=+\infty$，存在 $X$，使得当 $x\ge X$ 时 $f'(x)\ge1$。对任意 $x>X$，在 $[X,x]$ 上用拉格朗日中值定理，存在 $\xi_x\in(X,x)$，使
$$
f(x)-f(X)=f'(\xi_x)(x-X).
$$
因为 $f'(\xi_x)\ge1$，所以
$$
f(x)\ge f(X)+x-X.
$$
右端当 $x\to+\infty$ 时趋于 $+\infty$，故
$$
\lim_{x\to+\infty} f(x)=+\infty.
$$

因此正确选项为 D。

**易错点**：

- 不能由“函数极限存在”推出“导数极限存在或为 $0$”，例如 $f(x)=\dfrac{\sin x^2}{x}$。
- 不能看到“$f'(x)\to-\infty$”就认为“$f(x)\to-\infty$”。在 $x\to-\infty$ 时，导数趋于 $-\infty$ 反而会使函数趋于 $+\infty$，如 $f(x)=x^2$。
- 由“$f(x)\to-\infty$”不能推出“$f'(x)\to-\infty$”，函数趋势与瞬时变化趋势没有这种必然关系。
- 证明 (D) 时不必假设 $f'$ 连续，用拉格朗日中值定理即可，避免默认 $f'$ 可积。

**命题规律**：考点是导数极限与函数极限的逻辑关系，常见命题角度是给出一个无穷远极限，判断另一个极限是否成立。常考变式包括：若 $\lim f$ 存在且 $\lim f'$ 存在，则 $\lim f'=0$；若 $\lim\limits_{x\to+\infty} f'(x)=+\infty$，则 $f(x)\to+\infty$；若 $\lim\limits_{x\to+\infty} f'(x)=-\infty$，则 $f(x)\to-\infty$。复习时重点记忆反例和微分中值定理的使用。

**知识点**：可导性、导数极限与函数极限的关系、拉格朗日中值定理、无穷远极限、反例构造

---

> 来源：模拟卷概念题摘选（试卷顺序版） · 十二. 李林四套卷卷四 · 原题号 (4) · PDF第22页
