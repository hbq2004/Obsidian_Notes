---
ctime: 2026-08-18 02:29:13
mtime: 2026-08-18 02:29:13
tags:
  - AM
  - 27_ep月考卷/套一/FRQ
  - 计算题
  - 数列极限
  - 夹逼准则
  - 放缩法
  - n次根号极限
  - 定积分定义
points:
level:
---

# FRQ 第 17 题

![[_Attachments/题目识别/JJ8T/JJ8T-S1-Q17_题目.png|题目]]

(1) 求极限：$\lim\limits_{n \to \infty} \left( \frac{n}{n^2 + 1^2} + \frac{2n}{n^2 + 2^2} + \cdots + \frac{n^2}{n^2 + n^2} \right)$;

(2) 求极限：$\lim\limits_{n \to \infty} \sqrt[n]{|\cos 0| \cdot 1^2 + |\cos 1| \cdot 2^2 + \cdots + |\cos(n-1)| \cdot n^2}$.


---

## DeepSeek V4 Flash Max

【考点】本题考查数列极限的敛散性判断，容易误用定积分。算法竞赛类比：先看通项量级，$\frac{kn}{n^2+k^2}\sim \frac{k}{n}$，累加为 $O(n)$，故发散；第(2)题用夹逼，像求 $n$ 次根号下多项式的极限。

【解】

**(1)** 设
$$
A_n=\sum_{k=1}^n \frac{kn}{n^2+k^2}.
$$
当 $1\le k\le n$ 时，$n^2+k^2\le 2n^2$，所以
$$
\frac{kn}{n^2+k^2}\ge \frac{kn}{2n^2}=\frac{k}{2n}.
$$
因此
$$
A_n\ge \sum_{k=1}^n\frac{k}{2n}
=\frac{1}{2n}\cdot\frac{n(n+1)}{2}
=\frac{n+1}{4}\to+\infty.
$$
故原极限为 $+\infty$（发散）。

另：也可写
$$
\frac{kn}{n^2+k^2}=\frac{k/n}{1+(k/n)^2},
$$
于是
$$
\frac{A_n}{n}=\frac{1}{n}\sum_{k=1}^n \frac{k/n}{1+(k/n)^2}
\to \int_0^1\frac{x}{1+x^2}\,dx=\frac{1}{2}\ln2,
$$
同样得到 $A_n\to+\infty$。

**(2)** 设
$$
B_n=|\cos 0|\cdot1^2+|\cos 1|\cdot2^2+\cdots+|\cos(n-1)|\cdot n^2
=\sum_{k=0}^{n-1}|\cos k|(k+1)^2.
$$
上界：
$$
B_n\le 1^2+2^2+\cdots+n^2
=\frac{n(n+1)(2n+1)}{6}\le n^3\quad(n\ge1).
$$
所以
$$
\sqrt[n]{B_n}\le \sqrt[n]{n^3}=(\sqrt[n]{n})^3\to1.
$$
下界：第一项为 $|\cos 0|\cdot1^2=1$，且其余项非负，故 $B_n\ge1$，从而
$$
\sqrt[n]{B_n}\ge1.
$$
由夹逼准则：
$$
\lim_{n\to\infty}\sqrt[n]{B_n}=1.
$$

【答案】

(1) $\lim\limits_{n\to\infty}\left(\cdots\right)=+\infty$（即发散，极限不存在）。

(2) $\lim\limits_{n\to\infty}\sqrt[n]{B_n}=1$。

关键给分点：
- (1) 设出通项并正确放缩（或化为 $\frac{A_n}{n}$ 的积分和）；得到下界 $\frac{n+1}{4}\to+\infty$；给出 $+\infty$。
- (2) 写出上界 $\sum_{j=1}^n j^2$，下界 $1$；利用 $\sqrt[n]{n^3}\to1$；用夹逼定理得 $1$。

【易错点】
1. 第(1)题易错写成 $\lim\limits_{n\to\infty}\frac{1}{n}\sum_{k=1}^n\frac{k/n}{1+(k/n)^2}$，这不是原式；原式少了因子 $\frac{1}{n}$，故发散。
2. 第(2)题不要因为 $|\cos k|$ 可能接近 $0$ 就认为 $n$ 次根号极限小于 $1$；首项 $|\cos 0|\cdot1^2=1$ 保证了下界。
3. 用夹逼时上界要取 $n^3$ 而不是 $n^2$，因为 $\sum k^2\sim n^3/3$；只要根号内是 $n$ 的多项式，$n$ 次根号极限均为 $1$。

题面按给定 LaTeX 理解：第(1)题分子依次为 $n,2n,\ldots,n^2$；若原书第二项实为 $n$，则第(1)题答案为 $\pi/4$，请核对原书。

【命题规律】此类题常把“定积分定义”与“发散极限”混在一起，考查对 Riemann 和结构的敏感度；第(2)题则考夹逼与 $\sqrt[n]{n^p}$ 的极限。复习时多练“通项阶的估计”和“带绝对值数列的夹逼放缩”。
