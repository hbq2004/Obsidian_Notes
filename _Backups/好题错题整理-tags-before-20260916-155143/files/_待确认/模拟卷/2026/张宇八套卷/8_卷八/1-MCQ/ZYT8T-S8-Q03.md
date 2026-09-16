---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - AM
  - 26_张宇八套卷/卷八/MCQ
  - 计算题
  - 幂级数求和
  - 错位相减法
  - 指数函数展开式
  - 函数项级数
points:
level:
---

# MCQ 第 3 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S8-Q03_题目.png|题目]]

$$|x|<1 \text{ 时}, \sum_{n=1}^{\infty}\left(1+\frac{1}{2!}+\frac{1}{3!}+\cdots+\frac{1}{n!}\right) x^{n}=$$

(A) $\frac{\mathrm{e}^{x}-\mathrm{e}^{-x}}{1+x}$
(B) $\frac{\mathrm{e}^{x}-\mathrm{e}^{-x}}{1-x}$
(C) $\frac{\mathrm{e}^{x}-1}{1+x}$
(D) $\frac{\mathrm{e}^{x}-1}{1-x}$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S8-Q03_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

令 $a_n=\sum_{k=1}^n\frac{1}{k!}$，$S(x)=\sum_{n=1}^\infty a_nx^n$。

由错位相减：
$$
(1-x)S(x)=a_1x+\sum_{n=2}^\infty (a_n-a_{n-1})x^n
=x+\sum_{n=2}^\infty \frac{x^n}{n!}
=\sum_{n=1}^\infty \frac{x^n}{n!}=e^x-1.
$$

因为 $|x|<1$ 时 $1-x\neq0$，所以
$$
S(x)=\frac{e^x-1}{1-x}.
$$

选择题【答案】: **(D)**。

**解题切入点**

系数 $a_n$ 是 $1/k!$ 的前缀和。算法竞赛中处理前缀和序列常用差分：$a_n-a_{n-1}=1/n!$。对幂级数而言，乘以 $(1-x)$ 就等价于做差分，因此直接错位相减即可消去前缀和。

**推演**

设 $a_n=\sum_{k=1}^n\frac{1}{k!}$，$S(x)=\sum_{n=1}^\infty a_nx^n$。

将 $S(x)$ 与 $xS(x)$ 错位：

$$
S(x)-xS(x)=\sum_{n=1}^\infty a_nx^n-\sum_{n=1}^\infty a_nx^{n+1}.
$$

按 $x$ 的同次幂合并：一次项系数为 $a_1=1$；$n\ge2$ 时系数为 $a_n-a_{n-1}=1/n!$。因此

$$
(1-x)S(x)=x+\sum_{n=2}^\infty\frac{x^n}{n!}
=\sum_{n=1}^\infty\frac{x^n}{n!}=e^x-1.
$$

又 $|x|<1$，所以 $1-x\neq0$，故
$$
S(x)=\frac{e^x-1}{1-x}.
$$

关键给分点：写出 $a_n-a_{n-1}=1/n!$，并由错位相减得到 $(1-x)S(x)=e^x-1$。

自检：将 D 展开，
$$
\frac{e^x-1}{1-x}=\left(x+\frac{x^2}{2}+\cdots\right)(1+x+x^2+\cdots)=x+\frac32x^2+\cdots,
$$
与原级数前两项 $x+\frac32x^2$ 一致。

选项检查：

- **(D)** 正确。
- **(C)** 中 $(e^x-1)/(1+x)=x-\frac12x^2+\cdots$，$x^2$ 系数为 $-1/2$，而应有 $3/2$，故错。
- **(A)** 中 $e^x-e^{-x}=2x+\frac13x^3+\cdots$，代入后 $x^2$ 系数为 $-2$，故错。
- **(B)** 中代入后 $x^2$ 系数为 $2$，故错。

**易错点**

- 不要把系数直接看成 $1/n!$；它是前缀和，需要先用错位相减消去前缀和。
- 错位相减对应的是 $(1-x)S(x)$，所以分母应为 $1-x$；选 $1+x$ 的干扰项常由此产生。
- $|x|<1$ 保证 $1-x\neq0$，最终表达式在区间内合理。

**命题规律**

幂级数求和常把数列前缀和藏进系数，核心方法是错位相减（生成函数视角）。复习时熟悉 $e^x$、$\frac1{1-x}$ 等展开式，并会从 $S-xS$ 或逐项求导积分中选择合适变换。选择题可先看 $x^2$ 系数快速排除。


> 来源：《26_张宇八套卷（数一）》卷八 第 3 题
