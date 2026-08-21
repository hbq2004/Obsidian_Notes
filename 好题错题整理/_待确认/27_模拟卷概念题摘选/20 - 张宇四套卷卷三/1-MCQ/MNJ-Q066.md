---
ctime: 2026-08-22 05:15:01
mtime: 2026-08-22 05:15:01
tags:
  - PS
  - 27_模拟卷概念题摘选/张宇四套卷卷三
  - 概念题
  - 依概率收敛
  - 辛钦大数定律
  - 独立同分布样本
  - 随机变量函数期望
  - 密度求一阶矩
points:
level:
---

# MCQ 第 66 题

![[_Attachments/题目识别/27_模拟卷概念题摘选-题目/MNJ-Q066_题目.png|题目]]

设总体 $X$ 的概率密度为 $f(x) = \begin{cases} 6x(1-x), & 0<x<1, \\ 0, & \text{其他}. \end{cases}$ $X_1, X_2, \cdots, X_n, \cdots$ 为来自总体 $X$ 的简单随机样本，且对任意的 $\varepsilon > 0$，有 $\lim_{n\to\infty}P\left\{ \left| \sum_{i=1}^{n} \frac{X_{2i}}{nX_{2i-1}} - a \right| < \varepsilon \right\} = 1$，则 $a =$

(A). $\frac{1}{2}$.
(B). 1.
(C). $\frac{3}{2}$.
(D). $\frac{5}{2}$.

> 考点批注：纸老虎，本质上是依概率收敛

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 C。题设给出的极限就是依概率收敛：
\[
\sum_{i=1}^n \frac{X_{2i}}{nX_{2i-1}}\xrightarrow{P} a.
\]
本质上这是 \(\frac1n\sum Y_i\) 的样本均值形式，而 \(Y_i=\dfrac{X_{2i}}{X_{2i-1}}\) 的期望为 \(\frac32\)，所以 \(a=\frac32\)。

**解题切入点**：看到
\[
\lim_{n\to\infty}P\{|\cdot-a|<\varepsilon\}=1
\]
应立刻翻译为“依概率收敛”。题目下标写成 \(X_{2i},X_{2i-1}\)，密度又给得很复杂，其实是“纸老虎”。像算法题先做数据预处理：把样本两两配对，令
\[
Y_i=\frac{X_{2i}}{X_{2i-1}},
\]
则原式就是 \(\frac1n\sum_{i=1}^nY_i\)，接下来只需用大数定律。

**推演**：
设
\[
S_n=\sum_{i=1}^n \frac{X_{2i}}{nX_{2i-1}}
=\frac1n\sum_{i=1}^n \frac{X_{2i}}{X_{2i-1}}.
\]
令
\[
Y_i=\frac{X_{2i}}{X_{2i-1}}.
\]
由于 \(X_1,X_2,\cdots\) 是简单随机样本，所以 \(X_{2i-1}\) 与 \(X_{2i}\) 独立，且不同下标对应的变量相互独立。因此 \(Y_1,Y_2,\cdots\) 独立同分布。

先求总体的两个一阶矩：
\[
E X=\int_0^1 x\cdot 6x(1-x)\,dx
=6\int_0^1 (x^2-x^3)\,dx
=6\left(\frac13-\frac14\right)
=\frac12.
\]
又
\[
E\left(\frac1X\right)
=\int_0^1 \frac1x\cdot 6x(1-x)\,dx
=6\int_0^1(1-x)\,dx
=3.
\]
因为 \(X_{2i}\) 与 \(X_{2i-1}\) 独立，所以
\[
E Y_i
=E\left(\frac{X_{2i}}{X_{2i-1}}\right)
=E X_{2i}\cdot E\left(\frac1{X_{2i-1}}\right)
=\frac12\cdot 3
=\frac32.
\]
且 \(E|Y_i|=EY_i<\infty\)。

由辛钦大数定律，
\[
\frac1n\sum_{i=1}^nY_i\xrightarrow{P} E Y_1=\frac32.
\]
即
\[
\sum_{i=1}^n \frac{X_{2i}}{nX_{2i-1}}\xrightarrow{P}\frac32.
\]
题设又给出它依概率收敛于 \(a\)，概率极限唯一，所以
\[
a=\frac32.
\]

逐选项看：

- (A) \(\frac12\)：这是 \(EX\) 的值，不是 \(\dfrac{X_{2i}}{X_{2i-1}}\) 的期望，排除。
- (B) \(1\)：容易由 \(\dfrac{EX}{EX}=1\) 误算得到，但期望不能这样除，排除。
- (C) \(\frac32\)：正确。
- (D) \(\frac52\)：与计算出的极限不符，排除。

**易错点**：

1. 不要忽略分母 \(X_{2i-1}\) 也是随机变量。不能只对 \(X_{2i}\) 取期望得到 \(\frac12\)。  
2. 不要误以为 \(E\left(\frac1X\right)=\frac1{EX}\)。这里
   \[
   E\left(\frac1X\right)=3,\qquad \frac1{EX}=2,
   \]
   两者不同。选项 B 常由此误算产生。  
3. 不要试图用切比雪夫不等式证明，因为
   \[
   E\left(\frac1{X^2}\right)=6\int_0^1\left(\frac1x-1\right)\,dx=\infty,
   \]
   所以 \(Y_i\) 的二阶矩不存在；辛钦大数定律只需一阶矩存在。  
4. 不要被交错下标干扰。把样本两两配对后，问题就化为独立同分布随机变量的样本均值。

**命题规律**：本题是典型的“依概率收敛”与“大数定律”结合题。命题人用一个常见密度 \(f(x)=6x(1-x)\) 包装，实际只考查两个矩：\(EX\) 与 \(E(1/X)\)。变式可能把 \(\dfrac{X_{2i}}{X_{2i-1}}\) 改成 \(\dfrac{X_{2i}}{X_{2i-1}^2}\)、\(\dfrac{\sqrt{X_{2i}}}{X_{2i-1}}\) 等，核心仍是“构造 iid 变量并求其期望”。复习时应抓住：看到 \(\frac1n\sum\) 与依概率极限，优先想大数定律。

**知识点**：依概率收敛、辛钦大数定律、独立同分布样本、随机变量函数的期望、由密度求一阶矩

---

> 来源：模拟卷概念题摘选（试卷顺序版） · 二十. 张宇四套卷卷三 · 原题号 (10) · PDF第34页
