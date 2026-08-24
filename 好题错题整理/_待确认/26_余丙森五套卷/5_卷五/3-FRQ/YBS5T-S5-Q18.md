---
ctime: 2026-08-24 15:13:04
mtime: 2026-08-24 15:13:04
tags:
  - AM
  - 26_余丙森五套卷/卷五/FRQ
  - 综合题
  - 幂级数求和
  - 奇偶项拆分
  - 收敛半径判定
  - 反双曲正切展开
  - 对数级数求和
points:
level:
---

# FRQ 第 18 题

![[_Attachments/题目识别/YBS5T/YBS5T-S5-Q18_题目.png|题目]]

求幂级数 $\sum_{n=1}^{\infty} \frac{[2+(-1)^n]^n}{n} x^n$ 的和函数 $S(x)$，并分别求数项级数 $\sum_{n=0}^{\infty} \frac{1}{4^n(2n+1)}$ 与 $\sum_{n=1}^{\infty} \frac{1}{4^n n}$ 的和.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S5-Q18_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

设 $a_n=\frac{(2+(-1)^n)^n}{n}$。当 $n$ 为奇数时 $a_n=\frac{1}{n}$，当 $n$ 为偶数时 $a_n=\frac{3^n}{n}$。因此

$$
S(x)=\sum_{k=0}^{\infty}\frac{x^{2k+1}}{2k+1}+\sum_{k=1}^{\infty}\frac{(9x^2)^k}{2k}
=\frac{1}{2}\ln\frac{1+x}{1-x}-\frac{1}{2}\ln(1-9x^2),\qquad |x|<\frac{1}{3}.
$$

收敛域为 $(-1/3,1/3)$；端点 $x=\pm\frac{1}{3}$ 处偶数项子级数 $\sum_{k=1}^{\infty}\frac{1}{2k}$ 发散。数项级数和为

$$
\sum_{n=0}^{\infty}\frac{1}{4^n(2n+1)}=\ln 3,\qquad
\sum_{n=1}^{\infty}\frac{1}{4^n n}=\ln\frac{4}{3}.
$$

给分点：①奇偶项拆分；②求收敛半径 $R=1/3$；③写出和函数 $S(x)$；④用已知展开式求两个数项级数。

**解题切入点**

考查幂级数求和与数项级数求和。看到底数中的 $(-1)^n$，立即按奇偶拆项；奇项是 $\operatorname{artanh}x$ 的展开，偶项是对数级数的展开。算法竞赛类比：按奇偶分类后套用已知生成函数，等价于用预处理好的公式替代暴力求和。

**推演**

1. 奇偶拆分：

当 $n=2k+1$ 时，$(2+(-1)^n)^n=(2-1)^{2k+1}=1$，故该项为 $\frac{x^{2k+1}}{2k+1}$。

当 $n=2k$ 时，$(2+(-1)^n)^n=(2+1)^{2k}=3^{2k}$，故该项为 $\frac{3^{2k}}{2k}x^{2k}=\frac{(9x^2)^k}{2k}$。

2. 收敛半径：

$$
\limsup_{n\to\infty}\sqrt[n]{|a_n|}=3
$$
所以 $R=1/3$。在端点 $x=\pm\frac{1}{3}$，偶数项子级数为 $\sum_{k=1}^{\infty}\frac{1}{2k}$，发散，故收敛域为 $(-1/3,1/3)$。

3. 求和函数：

奇项部分：
$$
\sum_{k=0}^{\infty}\frac{x^{2k+1}}{2k+1}=\operatorname{artanh}x=\frac{1}{2}\ln\frac{1+x}{1-x},\quad |x|<1.
$$

偶项部分：
$$
\sum_{k=1}^{\infty}\frac{(9x^2)^k}{2k}=\frac{1}{2}\sum_{k=1}^{\infty}\frac{(9x^2)^k}{k}=-\frac{1}{2}\ln(1-9x^2),\quad |9x^2|<1.
$$

两式相加即得
$$
S(x)=\frac{1}{2}\ln\frac{1+x}{1-x}-\frac{1}{2}\ln(1-9x^2).
$$

自检：展开前两项，$S(x)=x+\frac{9}{2}x^2+\cdots$，与原级数吻合。

4. 数项级数：

由奇项展开，取 $x=1/2$：
$$
\operatorname{artanh}\frac{1}{2}=\sum_{k=0}^{\infty}\frac{(1/2)^{2k+1}}{2k+1}
=\frac{1}{2}\sum_{k=0}^{\infty}\frac{1}{4^k(2k+1)}.
$$
故
$$
\sum_{n=0}^{\infty}\frac{1}{4^n(2n+1)}=2\operatorname{artanh}\frac{1}{2}=\ln 3.
$$

由 $\sum_{n=1}^{\infty}\frac{y^n}{n}=-\ln(1-y)$，取 $y=1/4$：
$$
\sum_{n=1}^{\infty}\frac{1}{4^n n}=-\ln\frac{3}{4}=\ln\frac{4}{3}.
$$

**易错点**

- 不按奇偶拆分，直接把 $2+(-1)^n$ 当常数会出错。
- 收敛半径易误判为 1；偶子列系数根值极限为 3，故 $R=1/3$。
- 端点不能凭 Abel 定理判断；偶数项子级数 $\sum 1/(2k)$ 发散，所以 $\pm\frac{1}{3}$ 都不能取。
- 求 $\sum\frac{1}{4^n(2n+1)}$ 时，$\operatorname{artanh}(1/2)$ 展开多出因子 $1/2$，容易漏乘 2。
- 不要用 $S(1/2)$ 求第二问，$1/2$ 不在原幂级数收敛域内。

**命题规律**

幂级数题常见套路：系数含奇偶分段时先化简，再套用已知展开式；数项级数常是展开式在收敛域内取特殊点。复习应熟记 $\ln(1+x)$、$\arctan x$、$\operatorname{artanh}x$、$\frac{1}{1-x}$ 等展开，并养成先判收敛域、再处理端点的习惯。


> 来源：《26_余丙森五套卷（数一）》卷五 第 18 题
