---
ctime: 2026-08-18 02:29:13
mtime: 2026-08-18 02:29:13
tags:
  - AM
  - 27_ep月考卷/套一/MCQ
  - 概念题
  - 等价无穷小
  - 无穷小阶的比较
  - 极限运算
  - 函数连续性
points:
level:
---

# MCQ 第 4 题

![[_Attachments/题目识别/JJ8T/JJ8T-S1-Q04_题目.png|题目]]

4. 设函数 $f(x)$ 在 $x=0$ 的某邻域内有定义，且 $\lim\limits_{x\to 0} \frac{x - f(x)}{\ln(1 + x)} = 1$，则()

A. $f(0) = 0$

B. $\lim\limits_{x\to 0} f(x) = f(0)$

C. $\lim\limits_{x\to 0} \frac{f(x)}{x} = 1$

D. 当 $x \to 0$ 时，$f(x)$ 是 $x$ 的高阶无穷小


---

## DeepSeek V4 Flash Max

【考点】本题以已知极限反推无穷小阶数，类似算法竞赛中由已知复杂度倒推增长阶；切入点是利用 $\ln(1+x)\sim x$ 并把条件除以 $x$ 变形。

【解】
因为 $x\to 0$ 时 $\ln(1+x)\sim x$，所以分母趋于 $0$。由题设
$$
\lim_{x\to 0}\frac{x-f(x)}{\ln(1+x)}=1,
$$
若分子 $x-f(x)$ 不趋于 $0$，则整个分式不可能以有限数 $1$ 为极限，因此
$$
x-f(x)\to 0,\qquad f(x)\to 0\ (x\to 0).
$$
接着将原式乘以 $\frac{\ln(1+x)}{x}$（其中 $\frac{\ln(1+x)}{x}\to 1$），得
$$
\lim_{x\to 0}\frac{x-f(x)}{x}
=\lim_{x\to 0}\frac{x-f(x)}{\ln(1+x)}\cdot \frac{\ln(1+x)}{x}
=1\cdot 1=1.
$$
但
$$
\frac{x-f(x)}{x}=1-\frac{f(x)}{x},
$$
故
$$
1-\lim_{x\to 0}\frac{f(x)}{x}=1
\quad\Longrightarrow\quad
\lim_{x\to 0}\frac{f(x)}{x}=0.
$$
因此 $f(x)$ 是 $x$ 的高阶无穷小。

【答案】(D)。

逐项判断：
- A 错：极限条件只决定 $f(x)\to 0$，不能推出 $f(0)=0$。例如 $f(0)=1$，$x\ne 0$ 时取 $f(x)=x-\ln(1+x)$，条件仍成立。
- B 错：同理，$f(0)$ 可任意指定，故不能保证 $\lim f(x)=f(0)$。
- C 错：已推出 $\lim\frac{f(x)}{x}=0$，不是 $1$；该项是容易误选的干扰项。
- D 对：$\lim\frac{f(x)}{x}=0$ 且 $f(x)\to 0$，按高阶无穷小定义正确。

【易错点】
1. 极限存在不保证函数在该点有定义值等于极限；若把“$f(x)\to 0$”误写成“$f(0)=0$”则错选 A 或 B。
2. 由 $x-f(x)\sim \ln(1+x)\sim x$ 得到的是 $f(x)=o(x)$，而不是 $f(x)\sim x$；故选 C 是常见错误。
3. 不要忘记 $x\to 0$ 时乘除 $\frac{\ln(1+x)}{x}$ 是等价无穷小替换的体现。

【命题规律】本题属于极限与无穷小阶的比较小题，命题人常给一个比值极限，要求判断函数值、连续性或无穷小阶。复习时应注意：已知 $\frac{g(x)}{h(x)}\to a$ 且 $h(x)\to 0$ 时，先推出 $g(x)\to 0$；再通过同除或乘等价无穷小，把未知函数的阶算出来。
