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

---

## V4 Flash Max 解析

**答案**：

(1) 按题面第 $k$ 项为 $\frac{kn}{n^2+k^2}$，记  
$$
S_n=\sum_{k=1}^n\frac{kn}{n^2+k^2},
$$
则 $S_n\sim \frac n2\ln2$，所以非正常极限为  
$$
\lim_{n\to\infty}S_n=+\infty
$$
（不是有限极限）。

(2)  
$$
\lim_{n\to\infty}\sqrt[n]{|\cos0|\cdot1^2+|\cos1|\cdot2^2+\cdots+|\cos(n-1)|\cdot n^2}=1.
$$

**解题切入点**：

(1) 先看和式是否自带 $\frac1n$。这里每一项  
$$
\frac{kn}{n^2+k^2}=\frac{k/n}{1+(k/n)^2}
$$
是 $f(k/n)$，不是 Riemann 和中的 $\frac1n f(k/n)$。所以不能直接对原和式用定积分，先把 $\frac{S_n}{n}$ 写成标准 Riemann 和。算法竞赛类比：先估计量级；少了除以 $n$ 这一项，整体会多一个 $n$ 因子。

(2) $n$ 次根号下是“多项式量级”的正项和，用夹逼准则。开 $n$ 次根对多项式增长不敏感。类比：$O(n^3)$ 开 $n$ 次根后趋于 $1$。

**推演**：

(1) 令  
$$
S_n=\sum_{k=1}^n\frac{kn}{n^2+k^2}.
$$
变形：
$$
\frac{kn}{n^2+k^2}
=\frac{k/n}{1+(k/n)^2}.
$$
于是
$$
\frac{S_n}{n}
=\frac1n\sum_{k=1}^n\frac{k/n}{1+(k/n)^2}.
$$
取
$$
f(x)=\frac{x}{1+x^2},
$$
则 $f\in C[0,1]$，右端点 Riemann 和收敛：
$$
\lim_{n\to\infty}\frac{S_n}{n}
=\int_0^1\frac{x}{1+x^2}\,dx
=\frac12\ln(1+x^2)\Big|_0^1
=\frac12\ln2.
$$
因为 $\frac12\ln2>0$，所以当 $n$ 充分大时，$S_n$ 至少以常数倍 $n$ 增长，故
$$
S_n\to+\infty.
$$

(2) 令
$$
a_n=|\cos0|\cdot1^2+|\cos1|\cdot2^2+\cdots+|\cos(n-1)|\cdot n^2.
$$
下界：所有项非负，且第一项为
$$
|\cos0|\cdot1^2=1,
$$
所以
$$
a_n\ge1\implies \sqrt[n]{a_n}\ge1.
$$

上界：
$$
a_n\le \sum_{k=1}^n k^2
=\frac{n(n+1)(2n+1)}6\le n^3.
$$
因此
$$
1\le \sqrt[n]{a_n}\le \sqrt[n]{n^3}=n^{3/n}\to1.
$$
由夹逼准则，
$$
\lim_{n\to\infty}\sqrt[n]{a_n}=1.
$$

**易错点**：

(1) 最容易错的是直接写  
$$
\lim S_n=\int_0^1\frac{x}{1+x^2}\,dx=\frac12\ln2.
$$
错因：原和式没有 $\frac1n$。实际上 $\frac{S_n}{n}$ 才趋于 $\frac12\ln2$。自检：若算出有限值 $\frac12\ln2$，取 $n=100$，原式约为 $34.66$，显然不是 $0.35$。

(2) 不要试图找 $|\cos(n-1)|$ 的正下界；它可能非常接近 $0$。本题下界由第一项 $|\cos0|\cdot1^2=1$ 保证，上界用 $|\cos|\le1$ 放大即可。

注：按OCR最合理读法，第(1)题按题面第 $k$ 项为 $\frac{kn}{n^2+k^2}$ 处理；若原题实际是常见的 $\frac{n}{n^2+k^2}$，则答案应为 $\frac{\pi}{4}$。

**命题规律**：

考研数学一喜欢考“n 项和极限”和“n 次根号极限”。n 项和的核心是先判断是否自带 $\frac1n$，再决定用定积分定义还是先除 $n$ 估计量级；常见变式有  
$$
\frac1n\sum f\left(\frac kn\right),\qquad 
\sum \frac{n}{n^2+k^2},\qquad
\sum \frac{k}{n^2+k^2}
$$
等。n 次根号极限常用夹逼准则，并与 $n^{1/n}\to1$、正项级数根值判别法联系；若根号内只有多项式增长，开 $n$ 次根后极限通常为 $1$。
