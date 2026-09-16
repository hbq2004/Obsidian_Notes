---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷四/MCQ
  - 计算题
  - 定积分定义
  - 等价无穷小
  - Riemann和
  - 可积函数的有界性
points:
level:
---

# MCQ 第 3 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S4-Q03_题目.png|题目]]

$f(x)$在 $[0,1]$ 上可积，则 $\lim_{n\to\infty}\sum_{i=0}^{n}\ln\left[1+\frac{i}{n}f\left(\frac{i}{n}\right)\right]=.$
(A) $\int_{0}^{1}\ln\left[1+\frac{f(x)}{n}\right]\mathrm{d}x$
(B) $\int_{0}^{1}\ln\left[1+f(x)\right]\mathrm{d}x$.
(C) $\int_{0}^{1}f(x)\mathrm{d}x$.
(D) $\int_{0}^{1}f^{2}(x)\mathrm{d}x$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S4-Q03_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
题干中“$\frac{i}{n}$”应为“$\frac{1}{n}$”才能与选项匹配；按此修正：
$$\lim_{n\to\infty}\sum_{i=0}^n\ln\left(1+\frac{1}{n}f\left(\frac{i}{n}\right)\right)=\int_0^1 f(x)\,dx.$$
选择题【答案】: (C)。

**解题切入点**
考查定积分定义与等价无穷小。把 $\frac{1}{n}$ 视为小区间宽度，$\ln(1+\frac{1}{n}f)\sim \frac{1}{n}f$，于是和为 Riemann 和。类比算法题：若每项是 $O(1/n)$，则 $n$ 项总贡献 $O(1)$，高阶小量 $O(1/n^2)$ 累加后仍可忽略。

**推演**
设 $x_i=\frac{i}{n}$。因为 $f$ 在 $[0,1]$ 上可积，故有界，设 $|f(x)|\le M$。当 $n>M$ 时，
$$\ln\left(1+\frac{f(x_i)}{n}\right)=\frac{f(x_i)}{n}+O\left(\frac{1}{n^2}\right),$$
其中 $O$ 常数只与 $M$ 有关。于是
$$S_n=\sum_{i=0}^n\ln\left(1+\frac{f(x_i)}{n}\right)
=\frac{1}{n}\sum_{i=0}^n f(x_i)+O\left(\frac{1}{n}\right).$$
又
$$\frac{1}{n}\sum_{i=0}^n f(x_i)=\frac{f(0)}n+\frac{1}{n}\sum_{i=1}^n f(x_i).$$
右端第二项是 $[0,1]$ 上的右端点 Riemann 和，故
$$\lim_{n\to\infty}\frac{1}{n}\sum_{i=1}^n f(x_i)=\int_0^1 f(x)\,dx,$$
且 $\frac{f(0)}n\to0$。因此
$$\lim_{n\to\infty}S_n=\int_0^1 f(x)\,dx.$$

选项判析（半角括号）：
- (A) $\int_0^1\ln(1+f(x)/n)\,dx$：随 $n$ 变化，且趋于 $0$，不是所求常数极限，错。
- (B) $\int_0^1\ln(1+f(x))\,dx$：这是对 $\frac{1}{n}\sum\ln(1+f(x_i))$ 取极限所得，题干没有外面的 $\frac{1}{n}$，一般不等于 $\int f$，错。
- (C) $\int_0^1 f(x)\,dx$：由上述 Riemann 和与等价无穷小得到，正确。
- (D) $\int_0^1 f^2(x)\,dx$：误将 $\ln(1+\frac{1}{n}f)$ 展开到二次项并丢掉一次项，或误以为平方项求和才贡献；错。

**易错点**
1. 将 $\ln(1+\frac{1}{n}f)$ 直接写成 $\frac{1}{n}f$ 时，要确认余项求和后仍趋于 $0$；本题因可积函数有界，余项为 $O(1/n^2)$，累加为 $O(1/n)$。
2. 注意有无外面的 $\frac{1}{n}$：若有 $\frac{1}{n}\sum\ln(1+f)$，极限是 $\int\ln(1+f)$；若 $\ln$ 内是 $\frac{1}{n}f$，极限是 $\int f$。二者位置不同，结果不同。
3. 端点 $i=0$ 的项要么为零，要么是 $O(1/n)$，不要多算。
4. 不要把 $\frac{i}{n}f$ 当成 $\frac{1}{n}f$；但本题按 OCR 疑误处理，原式若真为 $\frac{i}{n}f$ 则一般发散。

**命题规律**
考研中“和式极限”常用定积分定义：找到 $\frac{1}{n}$ 作为 $\mathrm{d}x$，把求和项写成 $g(x_i)\Delta x$。干扰项常来自“$\ln$ 展开到一次/二次项”“误用积分中值定理”等。复习时多练 $f$ 可积条件下 $\sum \ln(1+\frac{1}{n}f)$ 的极限，并注意可积性只保证有界，不需要连续性。

题面按 $\frac{i}{n}$ 为 $\frac{1}{n}$ 理解（OCR 疑误，请核对原书）。


> 来源：《26_张宇八套卷（数一）》卷四 第 3 题
