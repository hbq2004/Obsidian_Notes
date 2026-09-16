---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 正态总体抽样分布
  - 样本均值与样本方差独立
  - 卡方分布
  - 协方差
points:
level:
---

# MCQ 第 520 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q520_题目.png|题目]]

520 设 $X_1, X_2, \cdots, X_n$ 为来自总体 $N(0, 1)$ 的简单随机样本. 记 $\overline{X} = \frac{1}{n} \sum_{i=1}^{n} X_i, S^2 = \frac{1}{n-1} \sum_{i=1}^{n} (X_i - \overline{X})^2, T = \overline{X}^2 - \frac{1}{n} S^2$, 则下列选项中错误的是 (  ).

(A) $\text{Cov}(\overline{X}, S^2) = \frac{1}{n}$

(B) $E(T) = 0$

(C) $D(T) = \frac{2}{n(n-1)}$

(D) $\overline{X}, S^2$ 相互独立

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 (A)。因为正态总体下样本均值 \(\bar X\) 与样本方差 \(S^2\) 相互独立，所以 \(\operatorname{Cov}(\bar X,S^2)=0\)，而不是 \(\dfrac1n\)。

**解题切入点**：题目涉及正态总体的 \(\bar X\) 与 \(S^2\)，应优先调用正态总体抽样分布定理：\(\bar X\) 与 \(S^2\) 独立，且 \((n-1)S^2\sim \chi^2_{n-1}\)。这就像算法竞赛中先判断能否套用现成模型，而不是直接硬算。

**推演**：

设 \(X_1,\cdots,X_n\) 独立同分布于 \(N(0,1)\)。由 Cochran 定理，正态总体下有

\[
\bar X\perp S^2,\qquad 
\bar X\sim N\left(0,\frac1n\right),\qquad
(n-1)S^2\sim \chi^2_{n-1}.
\]

因此

\[
E(\bar X)=0,\qquad D(\bar X)=\frac1n,
\]

所以

\[
E(\bar X^2)=D(\bar X)+[E(\bar X)]^2=\frac1n.
\]

又因为

\[
E(S^2)=1,\qquad D(S^2)=\frac{2}{n-1}.
\]

同时，\(\sqrt n\bar X\sim N(0,1)\)，故

\[
n\bar X^2\sim \chi^2_1,
\]

于是

\[
D(\bar X^2)=\frac{1}{n^2}D(n\bar X^2)=\frac{2}{n^2}.
\]

逐项判断：

(A) 错误。由于 \(\bar X\) 与 \(S^2\) 独立，所以

\[
\operatorname{Cov}(\bar X,S^2)=0.
\]

(B) 正确。

\[
E(T)=E(\bar X^2)-\frac1nE(S^2)=\frac1n-\frac1n=0.
\]

(C) 正确。因为 \(\bar X\) 与 \(S^2\) 独立，所以

\[
D(T)=D\left(\bar X^2-\frac1nS^2\right)
=D(\bar X^2)+\frac1{n^2}D(S^2).
\]

代入得

\[
D(T)=\frac{2}{n^2}+\frac1{n^2}\cdot\frac{2}{n-1}
=\frac{2}{n^2}\left(1+\frac1{n-1}\right)
=\frac{2}{n(n-1)}.
\]

(D) 正确。正态总体样本均值与样本方差相互独立，这是基本抽样分布结论。

因此错误的是 (A)。

**易错点**：

- 容易记错 \(S^2\) 的分布：应为 \((n-1)S^2\sim \chi^2_{n-1}\)，不是 \(S^2\sim \chi^2_n\)，否则 \(D(S^2)\) 会算错。
- 求 \(D(\bar X^2)\) 时不能直接写成 \(D(\bar X)\)；应先由 \(n\bar X^2\sim \chi^2_1\) 得到 \(D(\bar X^2)=\dfrac{2}{n^2}\)。
- 容易忽略 \(\bar X\) 与 \(S^2\) 的独立性，给 \(D(T)\) 错加协方差项。
- “样本均值与样本方差独立”只在正态总体下成立，不能随意推广到任意分布。

**命题规律**：本题属于数理统计中“正态总体抽样分布”的常见选择题，考查三大抽样分布、卡方分布的数字特征，以及 \(\bar X\) 与 \(S^2\) 的独立性。常见变式包括求 \(E(a\bar X^2+bS^2)\)、\(D(a\bar X^2+bS^2)\)，或判断 \(\dfrac{\sqrt n(\bar X-\mu)}{S}\sim t(n-1)\) 等。复习时应熟记：

\[
\bar X\sim N\left(\mu,\frac{\sigma^2}{n}\right),\qquad
\frac{(n-1)S^2}{\sigma^2}\sim \chi^2_{n-1},\qquad
\bar X\perp S^2.
\]

**知识点**：Cochran定理、卡方分布、正态总体抽样分布、样本均值与样本方差的独立性

---

> 来源：方浩概率统计进阶500题做题本 第191页 · C组
