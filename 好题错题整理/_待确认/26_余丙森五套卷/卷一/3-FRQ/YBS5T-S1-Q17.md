---
ctime: 2026-08-24 15:13:02
mtime: 2026-08-24 15:13:02
tags:
  - AM
  - 26_余丙森五套卷/卷一/FRQ
  - 计算题
  - 变上限积分求导
  - 等价无穷小
  - 泰勒展开
  - 洛必达法则
points:
level:
---

# FRQ 第 17 题

![[_Attachments/题目识别/YBS5T/YBS5T-S1-Q17_题目.png|题目]]

求极限 $\lim_{x \to 0} \frac{\int_0^x du \int_0^{u^2} \arctan(1+t) dt}{\sin x \int_0^1 \tan(xt)^2 dt}$.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S1-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$$\lim_{x\to 0}\frac{\int_0^x du\int_0^{u^2}\arctan(1+t)\,dt}{\sin x\int_0^1 [\tan(xt)]^2\,dt}=\frac{\pi}{4}.$$

关键给分点：
1. 令 $F(u)=\int_0^{u^2}\arctan(1+t)\,dt$，由 $\arctan(1+t)=\frac{\pi}{4}+\frac{t}{2}+O(t^2)$ 得 $F(u)\sim\frac{\pi}{4}u^2$。
2. 因此分子 $\int_0^xF(u)\,du\sim\frac{\pi}{12}x^3$。
3. $\sin x\sim x$，且 $\int_0^1\tan^2(xt)\,dt\sim\frac{x^2}{3}$，所以分母 $\sim\frac{x^3}{3}$。
4. 比值得 $\frac{\pi}{4}$。

**解题切入点**

本题是 $0/0$ 型嵌套积分极限。先估阶：内层上限为 $u^2$，$\arctan(1+t)$ 在 $t=0$ 处不为零，故内层为 $O(u^2)$，外层再积一次得分子 $O(x^3)$；分母 $\sin x$ 贡献 $x$，$\tan(xt)$ 的平方积分贡献 $x^2$，故分子分母同阶 $x^3$。类似算法竞赛中“只保留主项、比较系数”，再用洛必达或 Taylor 确认系数即可。

**推演**

1. 设 $F(u)=\int_0^{u^2}\arctan(1+t)\,dt$。当 $u\to0$ 时，$t\in[0,u^2]$，有
$$\arctan(1+t)=\frac{\pi}{4}+\frac{t}{2}+O(t^2).$$
于是
$$F(u)=\int_0^{u^2}\left(\frac{\pi}{4}+\frac{t}{2}+O(t^2)\right)dt =\frac{\pi}{4}u^2+\frac14u^4+O(u^6) \sim\frac{\pi}{4}u^2.$$

2. 因此分子
$$N(x)=\int_0^xF(u)\,du =\int_0^x\left(\frac{\pi}{4}u^2+O(u^4)\right)du =\frac{\pi}{12}x^3+O(x^5) \sim\frac{\pi}{12}x^3.$$

3. 分母：
$$\sin x\sim x,$$
且对 $t\in[0,1]$ 一致地有 $\tan^2(xt)\sim x^2t^2$，所以
$$\int_0^1\tan^2(xt)\,dt\sim x^2\int_0^1t^2dt=\frac{x^2}{3}.$$
故分母
$$D(x)=\sin x\int_0^1\tan^2(xt)\,dt\sim x\cdot\frac{x^2}{3}=\frac{x^3}{3}.$$

4. 原式
$$\frac{N(x)}{D(x)}\sim\frac{\frac{\pi}{12}x^3}{\frac{1}{3}x^3}=\frac{\pi}{4}.$$

回代自检：对原式用一次洛必达，$N'(x)=\int_0^{x^2}\arctan(1+t)dt\sim\frac{\pi}{4}x^2$，$D'(x)\sim x^2$，同样得到 $\frac{\pi}{4}$。

**易错点**

- 不要把 $\arctan(1+t)$ 误当成 $\arctan t\sim t$；它在 $t=0$ 处为 $\pi/4$，所以内层是 $O(u^2)$ 而非更高阶。
- 分母对 $t$ 积分时，$\tan(xt)\sim xt$，积分后要保留 $\int_0^1t^2dt=1/3$，不要漏掉系数。
- 等价无穷小乘除可整体替换，但加减项不能随意替换；本题用乘积结构，整体替换是安全的。
- $\tan(xt)^2$ 若按 $\tan((xt)^2)$ 理解，首阶仍为 $x^2t^2$，极限不变。

**命题规律**

这类题高频出现在考研数学一极限解答题中，核心是“变限积分 + 无穷小阶的比较”。复习时要熟练 Taylor 展开、等价无穷小和变上限积分求导；遇到嵌套积分先逐层估阶，再算系数。平时可练：把内层函数换成 $\ln(1+t)$、$e^t-1$ 等，阶数会变化，但方法一致。

题面按 $\tan(xt)^2=[\tan(xt)]^2$ 理解（OCR 疑误，请核对原书）。


> 来源：《26_余丙森五套卷（数一）》卷一 第 17 题
