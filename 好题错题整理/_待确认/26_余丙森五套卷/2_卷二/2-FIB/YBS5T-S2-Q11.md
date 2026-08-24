---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷二/FIB
  - 计算题
  - 泰勒展开
  - 同阶无穷小
  - 无穷小阶比较
points:
level:
---

# FIB 第 11 题

![[_Attachments/题目识别/YBS5T/YBS5T-S2-Q11_题目.png|题目]]

设 $n \to \infty$ 时，$(n + \frac{1}{2})\ln(1 + \frac{1}{n}) - 1$ 与 $\frac{1}{n^k}$ 是同阶无穷小量，则 $k =$ \_.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S2-Q11_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由题意，当 $n \to \infty$ 时，$(n+\frac12)\ln(1+\frac1n)-1$ 与 $\frac{1}{n^k}$ 同阶无穷小，故 $k=2$。

【答案】: $$\boxed{2}$$

**解题切入点**

本题本质是求无穷小量的阶。令 $x=\frac1n$，则 $x\to 0$，将 $(n+\frac12)\ln(1+\frac1n)-1$ 转化为关于 $x$ 的表达式，再用泰勒展开得到其主阶，与 $x^k$ 比较即可。这类似于算法竞赛中分析复杂度时，用泰勒展开或等价代换提取最高阶项。

**推演**

1. 令 $x=\frac1n$，则 $x\to0$，且 $n=\frac1x$。于是
   $$
   (n+\tfrac12)\ln(1+\tfrac1n)-1
   =\left(\frac1x+\frac12\right)\ln(1+x)-1
   =\frac{1+\frac{x}{2}}{x}\ln(1+x)-1.
   $$

2. 将 $\ln(1+x)$ 泰勒展开至 $x^3$ 项（因为要消去二次项）：
   $$
   \ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}+o(x^3).
   $$

3. 先计算 $\left(1+\frac{x}{2}\right)\ln(1+x)$：
   $$
   \begin{aligned}
   \left(1+\frac{x}{2}\right)\ln(1+x)
   &=\left(1+\frac{x}{2}\right)\left(x-\frac{x^2}{2}+\frac{x^3}{3}+o(x^3)\right) \\
   &= x-\frac{x^2}{2}+\frac{x^3}{3} + \frac{x^2}{2}-\frac{x^3}{4}+o(x^3) \\
   &= x + \left(-\frac12+\frac12\right)x^2 + \left(\frac13-\frac14\right)x^3 + o(x^3) \\
   &= x + \frac{1}{12}x^3 + o(x^3).
   \end{aligned}
   $$

4. 代回原式：
   $$
   \frac{1+\frac{x}{2}}{x}\ln(1+x)-1
   =\frac{x+\frac{1}{12}x^3+o(x^3)}{x}-1
   =1+\frac{1}{12}x^2+o(x^2)-1
   =\frac{1}{12}x^2+o(x^2).
   $$

5. 因此
   $$
   (n+\tfrac12)\ln(1+\tfrac1n)-1 \sim \frac{1}{12}\cdot\frac{1}{n^2} \quad (n\to\infty).
   $$
   同阶无穷小意味着比值极限为非零常数，故 $\frac{1}{n^k}$ 中必须有 $k=2$。

**易错点**

- 误将 $\ln(1+\frac1n)$ 直接展开到一阶，导致二次项未消去，得到错误阶数。
- 忘记乘 $(\frac1x+\frac12)$ 中的 $\frac12$ 部分，容易忽略关键的二次项抵消。
- 同阶无穷小要求两者比值的极限为非零常数，不能仅根据主项系数判断，但本题系数恰为 $\frac{1}{12}$ 非零。

**命题规律**

该题型属于无穷小量阶的比较，常利用泰勒展开或等价无穷小代换。解题关键在于选取适当的变量替换，并将表达式展开到足够阶数，使低阶项相消。复习时应熟练掌握常见函数的泰勒展开式及无穷小量的阶数判断方法。


> 来源：《26_余丙森五套卷（数一）》卷二 第 11 题
