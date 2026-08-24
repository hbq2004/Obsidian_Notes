---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - AM
  - 26_李林六套卷/卷四/FIB
  - 计算题
  - 区间可加性
  - 分部积分
  - 有理函数拆分
  - 级数求和与广义积分
points:
level:
---

# 填空题 第 13 题

![[_Attachments/题目识别/LL6T/LL6T-S4-Q13_题目.png|题目]]

(13) $\sum_{k=1} \int_{k}^{k+1} \frac{\arctan x}{x^2} \mathrm{d}x = \_ .$

![[_Attachments/题目识别/LL6T-答案/LL6T-S4-Q13_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

该级数各项的积分区间 $[k,k+1]$ 首尾相接，合并后就是 $[1,+\infty)$，所以
$$
S=\sum_{k=1}^{\infty}\int_k^{k+1}\frac{\arctan x}{x^2}dx
=\int_1^{+\infty}\frac{\arctan x}{x^2}dx.
$$

【答案】

$$
\boxed{\frac{\pi}{4}+\frac{1}{2}\ln2}
$$

**解题切入点**

把“无穷段积分求和”看成“区间扫描合并”，类似算法竞赛中把分块贡献合并成整体区间统计；含 $\arctan x$ 乘 $x^{-2}$ 的积分首选分部积分，让 $\arctan x$ 求导后化为有理函数积分。

**推演**

由区间可加性，先取部分和：
$$
\sum_{k=1}^N \int_k^{k+1}\frac{\arctan x}{x^2}dx
=\int_1^{N+1}\frac{\arctan x}{x^2}dx.
$$
令 $N\to\infty$，且 $\frac{\arctan x}{x^2}\sim \frac{\pi}{2x^2}$ 收敛，故
$$
S=\int_1^{+\infty}\frac{\arctan x}{x^2}dx.
$$

对积分分部积分：
$$
I=\int_1^{+\infty}\frac{\arctan x}{x^2}dx
=\left[-\frac{\arctan x}{x}\right]_1^{+\infty}
+\int_1^{+\infty}\frac{dx}{x(1+x^2)}.
$$
边界项：
$$
\lim_{x\to+\infty}\frac{\arctan x}{x}=0,\quad
-\left.\frac{\arctan x}{x}\right|_{x=1}=-\frac{\pi}{4},
$$
所以边界项贡献 $\frac{\pi}{4}$。

再算
$$
\int_1^{+\infty}\frac{dx}{x(1+x^2)}
=\int_1^{+\infty}\left(\frac1x-\frac{x}{1+x^2}\right)dx
=\left[\ln x-\frac{1}{2}\ln(1+x^2)\right]_1^{+\infty}.
$$
在 $+\infty$ 处为 $0$，在 $1$ 处为 $-\frac{1}{2}\ln2$，故该积分为 $\frac{1}{2}\ln2$。

因此
$$
S=\frac{\pi}{4}+\frac{1}{2}\ln2.
$$

自检：对
$$
F(x)=-\frac{\arctan x}{x}+\ln x-\frac{1}{2}\ln(1+x^2)
$$
求导可得 $F'(x)=\frac{\arctan x}{x^2}$，且 $S=F(+\infty)-F(1)$，结果一致。

关键给分点：合并区间、分部积分、有理函数拆分各对应一步过程分。

**易错点**

1. 不要把级数当成对 $k$ 的普通项直接求和；要先看见区间 $[k,k+1]$ 首尾相接，合并为单积分。
2. 分部积分时符号容易错：$\int u dv=uv-\int v du$，这里 $dv=x^{-2}dx$ 给出 $v=-1/x$，负号要代入。
3. 在 $+\infty$ 处不要忘 $\arctan x/x\to0$、$\ln(x/\sqrt{1+x^2})\to0$；在 $x=1$ 处 $\arctan1=\pi/4$。

**命题规律**

这类题把“级数求和”与“广义积分”嫁接，核心是用区间可加性或原函数首尾相消。复习时重点练三段：合并区间、分部积分、有理函数拆分；考场上一旦看出相邻区间可拼，后续就是常规计算。

题面按 $\sum_{k=1}^{+\infty}$ 理解（OCR 疑误，请核对原书）。


> 来源：《26_李林六套卷（数一）》卷四 第 13 题
