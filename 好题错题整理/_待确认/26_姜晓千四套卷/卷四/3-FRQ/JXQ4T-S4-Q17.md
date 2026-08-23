---
ctime: 2026-08-23 23:04:13
mtime: 2026-08-23 23:04:13
tags:
  - AM
  - 26_姜晓千四套卷/卷四/FRQ
  - 计算题
  - Wallis公式
  - Beta函数
  - 定积分换元
  - 夹逼准则
  - 定积分数列极限
points:
level:
---

# FRQ 第 17 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S4-Q17_题目.png|题目]]

设 $a_n = \int_{0}^{1} x^n \sqrt{1-x^2} dx$，$b_n = \int_{0}^{\frac{\pi}{2}} \sin^n x dx$ $(n=0,1,\cdots)$.

(I) 证明 $\frac{a_n}{b_n} = \frac{1}{n+2}$；

(II) 求极限 $\lim_{n\to\infty} \left( \frac{a_n}{b_n} + \frac{a_{n+1}}{b_{n+1}} + \cdots + \frac{a_{2n}}{b_{2n}} \right)$.

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S4-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(I) 对 $a_n$ 令 $x=\sin t$，则 $x\in[0,1]$ 对应 $t\in[0,\frac{\pi}{2}]$，$dx=\cos t\,dt$，所以
$$
a_n=\int_0^{\frac{\pi}{2}} \sin^n t\cdot \cos t\cdot \cos t\,dt
=\int_0^{\frac{\pi}{2}} \sin^n t\cos^2 t\,dt.
$$
又 $\cos^2 t=1-\sin^2 t$，故
$$
a_n=b_n-b_{n+2}.
$$
下面证明 $b_n-b_{n+2}=\frac{b_n}{n+2}$。由分部积分：
$$
b_n=\int_0^{\frac{\pi}{2}}\sin^n x\,dx
=\left[-\cos x\sin^n x\right]_0^{\frac{\pi}{2}}
+n\int_0^{\frac{\pi}{2}}\cos^2 x\sin^{n-1}x\,dx
$$
$$
=n\int_0^{\frac{\pi}{2}}\sin^{n-1}x(1-\sin^2 x)\,dx
=n(b_{n-2}-b_n).
$$
因此
$$
b_n=\frac{n}{n+1}b_{n-2}\quad(n\ge2).
$$
于是
$$
b_{n+2}=\frac{n+2}{n+1}b_n,\quad b_n-b_{n+2}=\frac{b_n}{n+2},
$$
所以
$$
\frac{a_n}{b_n}=\frac{b_n-b_{n+2}}{b_n}=\frac{1}{n+2}.
$$

关键给分点：换元得到 $a_n=b_n-b_{n+2}$；分部积分得到递推 $b_n=\frac{n}{n+1}b_{n-2}$；由此得到 $b_n-b_{n+2}=\frac{b_n}{n+2}$。

(II) 由 (I)，
$$
S_n=\sum_{k=n}^{2n}\frac{a_k}{b_k}
=\sum_{k=n}^{2n}\frac{1}{k+2}.
$$
记 $m=k+2$，则
$$
S_n=\sum_{m=n+2}^{2n+2}\frac{1}{m}.
$$
利用定积分的介值/夹逼估计：对单调递减函数 $f(x)=\frac1x$，
$$
\int_{n+2}^{2n+3}\frac{dx}{x}\le \sum_{m=n+2}^{2n+2}\frac1m\le \frac1{n+2}+\int_{n+2}^{2n+2}\frac{dx}{x}.
$$
即
$$
\ln\frac{2n+3}{n+2}\le S_n\le \frac1{n+2}+\ln\frac{2n+2}{n+2}.
$$
当 $n\to\infty$ 时，左右两端均趋于 $\ln 2$，故由夹逼准则
$$
\lim_{n\to\infty}\left(\frac{a_n}{b_n}+\frac{a_{n+1}}{b_{n+1}}+\cdots+\frac{a_{2n}}{b_{2n}}\right)=\ln 2.
$$

关键给分点：把和式化为 $\sum_{k=n}^{2n}\frac1{k+2}$；用积分比较或夹逼估计；取极限得 $\ln 2$。

**解题切入点**

本题像算法竞赛里的“先化简通项，再求区间和极限”。先用换元把 $a_n$ 化成已知的 Wallis 型积分 $b_n$ 的组合，再用分部积分得到递推式，把 $\frac{a_n}{b_n}$ 化简为显式 $\frac1{n+2}$；最后就是经典调和截断和的极限，等价于求 $\sum_{k=n}^{2n}\frac1k$ 的极限，用积分夹逼即可。

**推演**

1. 化简 $a_n$：
$$
a_n=\int_0^1 x^n\sqrt{1-x^2}\,dx.
$$
令 $x=\sin t$，则 $\sqrt{1-x^2}=\cos t$，$dx=\cos t\,dt$，故
$$
a_n=\int_0^{\frac{\pi}{2}}\sin^n t\cos^2 t\,dt
=\int_0^{\frac{\pi}{2}}\sin^n t(1-\sin^2 t)\,dt
=b_n-b_{n+2}.
$$

2. 建立 $b_n$ 的递推关系：
$$
b_n=\int_0^{\frac{\pi}{2}}\sin^n x\,dx.
$$
对 $n\ge2$ 分部积分，令 $u=\sin^{n-1}x$，$dv=\sin x\,dx$，则 $du=(n-1)\sin^{n-2}x\cos x\,dx$，$v=-\cos x$，所以
$$
b_n=\left[-\sin^{n-1}x\cos x\right]_0^{\frac{\pi}{2}}
+(n-1)\int_0^{\frac{\pi}{2}}\sin^{n-2}x\cos^2 x\,dx.
$$
边界项为 $0$，于是
$$
b_n=(n-1)\int_0^{\frac{\pi}{2}}\sin^{n-2}x(1-\sin^2 x)\,dx
=(n-1)(b_{n-2}-b_n).
$$
因此 $n b_n=(n-1)b_{n-2}$，即
$$
b_n=\frac{n-1}{n}b_{n-2}\quad(n\ge2).
$$
代入 $n+2$：
$$
b_{n+2}=\frac{n+1}{n+2}b_n.
$$
故
$$
b_n-b_{n+2}=\frac{b_n}{n+2}.
$$
所以
$$
\frac{a_n}{b_n}=\frac{b_n-b_{n+2}}{b_n}=\frac{1}{n+2}.
$$
这里也验证了递推公式对 $n=0,1,\cdots$ 均成立；计算中 $n\ge2$ 的分部积分即可覆盖 $n$ 为非负整数的情况，因为 $b_{n+2}$ 的递推从 $n\ge0$ 成立。

3. 求极限：
$$
\lim_{n\to\infty}\sum_{k=n}^{2n}\frac{a_k}{b_k}
=\lim_{n\to\infty}\sum_{k=n}^{2n}\frac{1}{k+2}
=\lim_{n\to\infty}\sum_{m=n+2}^{2n+2}\frac{1}{m}.
$$
由于 $\frac1x$ 在 $[1,\infty)$ 上单调递减，对每个 $m$ 有
$$
\int_m^{m+1}\frac{dx}{x}\le \frac1m\le \int_{m-1}^{m}\frac{dx}{x}\quad(m\ge2).
$$
将 $m=n+2$ 到 $2n+2$ 求和，左边是 $\int_{n+2}^{2n+3}\frac{dx}{x}$，右边是 $\int_{n+1}^{2n+2}\frac{dx}{x}$。更精细地，用
$$
\int_{n+2}^{2n+3}\frac{dx}{x}\le S_n\le \frac1{n+2}+\int_{n+2}^{2n+2}\frac{dx}{x}
$$
也可，因为多出的第一项趋于 $0$。左右两边分别为
$$
\ln\frac{2n+3}{n+2}\to\ln2,\qquad
\ln\frac{2n+2}{n+2}+\frac1{n+2}\to\ln2.
$$
由夹逼准则，$S_n\to\ln2$。

4. 检验：取 $n$ 较大时，$\sum_{k=n}^{2n}\frac1{k+2}$ 与 $\int_n^{2n}\frac{dx}{x}=\ln2$ 的差为 $O(1/n)$，结论合理。

**易错点**

1. 换元时容易丢掉一个 $\cos t$：$x=\sin t$ 时 $dx=\cos t\,dt$，而 $\sqrt{1-x^2}$ 本身也是 $\cos t$，所以被积函数会出现 $\cos^2 t$，不是 $\cos t$。
2. 分部积分递推时符号和系数易错：$b_n=(n-1)(b_{n-2}-b_n)$，推出 $b_n=\frac{n-1}{n}b_{n-2}$，注意是 $n-1$ 不是 $n$；用 $n+2$ 代入时得到 $b_{n+2}=\frac{n+1}{n+2}b_n$，再算 $b_n-b_{n+2}$。
3. 极限中容易直接把 $\sum_{k=n}^{2n}\frac1{k+2}$ 看成 $\ln2$，考试时需写出积分夹逼或定积分定义过程，不能只写结果。
4. 和式的起点与终点：换元后是 $m=n+2$ 到 $2n+2$，不是 $n$ 到 $2n$；端点平移对极限无影响，但严格写法要说明。

**命题规律**

本题是典型“定积分递推 + 级数求和极限”组合题，常与 Wallis 公式、Beta 函数、分部积分递推结合。近年考研数学一喜欢把积分递推式和数列极限放在同一题中，第一问为第二问做铺垫。复习时应熟练掌握 $\int_0^{\frac{\pi}{2}}\sin^n x\,dx$、$\int_0^1 x^n(1-x^2)^m\,dx$ 的递推与 Wallis 公式，并会用积分比较法处理 $\sum_{k=n}^{an}\frac1{k}$ 型极限。平时可把这类题整理成“先化简通项，再估计部分和”的模板。


> 来源：《26_姜晓千四套卷（数一）》卷四 第 17 题
