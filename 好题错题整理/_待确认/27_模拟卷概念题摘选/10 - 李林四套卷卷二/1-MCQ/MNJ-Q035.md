---
ctime: 2026-08-22 05:15:01
mtime: 2026-08-22 05:15:01
tags:
  - AM
  - 27_模拟卷概念题摘选/李林四套卷卷二
  - 概念题
  - 幂级数收敛
  - 绝对收敛与条件收敛
  - 比较判别法
  - 级数收敛必要条件
  - 交错级数
points:
level:
---

# MCQ 第 35 题

![[_Attachments/题目识别/27_模拟卷概念题摘选-题目/MNJ-Q035_题目.png|题目]]

设 $f(x)=\sum_{n=1}^{\infty} a_n x^{n+1}$ 在 $[0, 1]$ 上收敛, 则级数 $\sum_{n=1}^{\infty} (-1)^{n-1} f\left(\frac{1}{n}\right)$

(A) 发散.
(B) 绝对收敛.
(C) 条件收敛.
(D) 敛散性不确定.

> 考点批注：函数和级数的结合，一道很难的题，不会的话就积累思路为主，看到答案的时候要想为什么会想到放缩

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 **B**（绝对收敛）。核心理由是：由 \(x=1\) 处收敛可知 \(\sum a_n\) 收敛，从而 \(a_n\to0\)，系数有界；代入 \(x=\frac1n\) 后可得  
\[
\left|f\left(\frac1n\right)\right|=O\!\left(\frac1{n^2}\right),
\]
所以原级数绝对收敛。

**解题切入点**：  
先不要被 \((-1)^{n-1}\) 带偏，去盲目用莱布尼茨判别法。看到 \(f\left(\frac1n\right)\)，应当把 \(f\) 展开成幂级数，估计 \(f\left(\frac1n\right)\) 的量级。  
好比算法中估计复杂度：  
\[
f\left(\frac1n\right)=\sum_{k=1}^\infty a_k\left(\frac1n\right)^{k+1}
\]
先提出一个 \(\frac1{n^2}\)，剩下的部分是公比为 \(\frac1n\) 的几何级数。只要系数 \(a_k\) 有界，就有  
\[
\left|f\left(\frac1n\right)\right|\le \frac{C}{n^2}.
\]
于是原题就转化为 \(\sum \frac1{n^2}\) 的收敛性问题。

**推演**：  

因为 \(f(x)=\sum_{n=1}^\infty a_n x^{n+1}\) 在 \([0,1]\) 上收敛，特别在 \(x=1\) 处收敛，所以  
\[
\sum_{n=1}^\infty a_n
\]
收敛。由收敛级数的必要条件得  
\[
a_n\to 0\quad(n\to\infty).
\]
因此存在常数 \(M>0\)，使得  
\[
|a_n|\le M\quad(\forall n\ge 1).
\]

现在估计 \(f\left(\frac1n\right)\)。为避免下标混淆，把求和指标改写为 \(k\)：

\[
f\left(\frac1n\right)=\sum_{k=1}^\infty a_k\left(\frac1n\right)^{k+1}.
\]

当 \(n\ge 2\) 时，

\[
\left|f\left(\frac1n\right)\right|
\le \sum_{k=1}^\infty |a_k|\left(\frac1n\right)^{k+1}
\le M\sum_{k=1}^\infty \left(\frac1n\right)^{k+1}.
\]

而

\[
\sum_{k=1}^\infty \left(\frac1n\right)^{k+1}
=\frac{\frac1{n^2}}{1-\frac1n}
=\frac{1}{n(n-1)}.
\]

所以

\[
\left|f\left(\frac1n\right)\right|\le \frac{M}{n(n-1)}.
\]

由于  
\[
\sum_{n=2}^\infty \frac{1}{n(n-1)}
\]
收敛，故  
\[
\sum_{n=2}^\infty \left|f\left(\frac1n\right)\right|
\]
收敛。再加上 \(f(1)\) 是一个有限数，因此

\[
\sum_{n=1}^\infty \left|(-1)^{n-1}f\left(\frac1n\right)\right|
=\sum_{n=1}^\infty \left|f\left(\frac1n\right)\right|<\infty.
\]

所以原级数绝对收敛。

逐选项看：

- (A) 发散：错误。上述证明说明它收敛且绝对收敛。  
- (B) 绝对收敛：正确。  
- (C) 条件收敛：错误。绝对收敛的级数不是条件收敛的。  
- (D) 敛散性不确定：错误。在给定条件下结论是确定的。

**易错点**：  

1. 不要一看到 \((-1)^{n-1}\) 就只想到莱布尼茨判别法。莱布尼茨判别法需要验证 \(f\left(\frac1n\right)\) 同号且单调，而 \(a_n\) 是任意的，这个条件不一定成立。  
2. 不要忽略“在 \([0,1]\) 上收敛”这句话的作用。它保证了 \(x=1\) 处 \(\sum a_n\) 收敛，从而有 \(a_n\to0\)，这是系数有界、进而放缩的基础。  
3. 注意“原级数绝对收敛”指的是  
\[
\sum_{n=1}^\infty \left|f\left(\frac1n\right)\right|
\]
收敛，而不是某个幂级数在端点绝对收敛。这是两个不同层面的事情。  
4. 不要试图通过计算 \(f\left(\frac1n\right)\) 的正负来判断选项；这里的核心是量级估计，而不是符号。

**命题规律**：  

本题是幂级数与常数项级数的综合题。命题人把“幂级数在某点收敛”转化为“系数有界”，再用 \(x=\frac1n\) 代入，把函数值估计成 \(\frac{C}{n^2}\)，最终归结为 \(p\)-级数收敛。  
常见变式：若把 \(x^{n+1}\) 改成 \(x^n\)，量级可能从 \(n^{-2}\) 变为 \(n^{-1}\)，结论就可能改变。因此做题时要抓住幂级数的最低次项和端点收敛条件。

**知识点**：  
幂级数端点收敛、级数收敛的必要条件、比较判别法、绝对收敛与条件收敛、交错级数。

---

> 来源：模拟卷概念题摘选（试卷顺序版） · 十. 李林四套卷卷二 · 原题号 (4) · PDF第20页
