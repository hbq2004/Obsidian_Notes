---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷五/FIB
  - 计算题
  - 定积分定义
  - 黎曼和
  - 广义积分
  - 极限计算
points:
level:
---

# FIB 第 14 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S5-Q14_题目.png|题目]]

$$ \lim_{n \to \infty} \sum_{i=1}^{n} \frac{1}{\sqrt{in}} = \_ . $$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S5-Q14_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】

$$ \boxed{2} $$

**解题切入点**

本题是典型的“和式极限”，算法竞赛中常称为“积分近似”题，本质是把和式改写成黎曼和：

$$\sum_{i=1}^n \frac{1}{\sqrt{in}}=\frac1n\sum_{i=1}^n\frac{1}{\sqrt{i/n}}$$

从而看出对应积分 $\int_0^1 \frac{dx}{\sqrt{x}}$，该广义积分收敛且值为 $2$。

**推演**

原式

$$S_n=\sum_{i=1}^{n}\frac{1}{\sqrt{in}}$$

因为 $\sqrt{in}=\sqrt{n}\sqrt{i}$，所以

$$S_n=\frac{1}{\sqrt{n}}\sum_{i=1}^{n}\frac{1}{\sqrt{i}}$$

将其改写成黎曼和标准形式：

$$S_n=\frac1n\sum_{i=1}^{n}\frac{1}{\sqrt{i/n}}$$

验证：

$$\frac1n\sum_{i=1}^{n}\frac{1}{\sqrt{i/n}}
=\frac1n\sum_{i=1}^{n}\sqrt{\frac{n}{i}}
=\frac1n\cdot \sqrt{n}\sum_{i=1}^{n}\frac{1}{\sqrt{i}}
=\frac{1}{\sqrt{n}}\sum_{i=1}^{n}\frac{1}{\sqrt{i}}$$

因此

$$\lim_{n\to\infty}S_n=\lim_{n\to\infty}\frac1n\sum_{i=1}^{n}\frac{1}{\sqrt{i/n}}$$

令 $x_i=i/n$，则 $S_n$ 是 $f(x)=1/\sqrt{x}$ 在 $[0,1]$ 上取右端点的黎曼和。注意 $f$ 在 $x=0$ 处无界，因此对应广义积分：

$$\lim_{n\to\infty}\frac1n\sum_{i=1}^{n}f(i/n)=\int_0^1 f(x)\,dx$$

这里 $f(x)=x^{-1/2}$，$0<1/2<1$，广义积分收敛，且

$$\int_0^1 \frac{dx}{\sqrt{x}}
=\lim_{\varepsilon\to0^+}\int_\varepsilon^1 x^{-1/2}\,dx
=\lim_{\varepsilon\to0^+}\left[2\sqrt{x}\right]_\varepsilon^1
=2$$

因此原极限为 $2$。

快速检验：取 $n=10000$，数值近似 $\frac{1}{\sqrt{n}}\sum_{i=1}^{n}\frac1{\sqrt{i}}\approx \frac{1}{100}\cdot 200=2$，符合。

**易错点**

1. 误区：把原式写成 $\frac{1}{\sqrt{n}}\sum_{i=1}^n \frac{1}{\sqrt{i}}$ 后，误以为可直接用 $\sum1/\sqrt{i}$ 的阶，或试图用 Cauchy 命题，导致出错。正确做法是精确改写为黎曼和。
2. 误区：写成 $\frac1n\sum_{i=1}^n\sqrt{n/i}$ 后忘记前面的系数 $1/n$，导致结果错误。
3. 误区：忽略 $x=0$ 处无界。虽然本题不影响最终结果，但严格证明时需说明广义积分收敛；考研解答中通常也接受普通定积分写法，但知道原理更稳妥。
4. 误区：把 $\sqrt{in}$ 写成 $\sqrt{i}\sqrt{n}$ 后，误以为原式等于某种关于 $\sqrt{i}$ 的积分；必须保留 $1/n$ 的因子。

**命题规律**

这类题属于考研数学一“定积分定义求极限”的高频小题，通常把一个带 $n$ 的求和式改写成 $\frac1n\sum f(i/n)$，从而转成 $\int_0^1 f(x)dx$。本题还结合了广义积分，考查对端点无界情形的理解。

复习建议：
- 熟记黎曼和标准形式：$\frac1n\sum f(i/n)\to \int_0^1 f(x)dx$；若区间不是 $[0,1]$，则用 $a+(b-a)i/n$。
- 见到 $\sum \frac{1}{\sqrt{in}}$，优先提取 $1/n$；若遇到 $i$ 和 $n-i$ 的对称结构，通常也是黎曼和。
- 本题中的 $f$ 在端点无界，不需要复杂处理，只需知道广义积分收敛即可；考研中常与反常积分敛散性结合。

题面按题意理解，无 OCR 疑误。


> 来源：《26_张宇八套卷（数一）》卷五 第 14 题
