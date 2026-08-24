---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷二/FRQ
  - 证明题
  - 函数单调性
  - 对数求导法
  - 导数符号判定
  - 含参函数最值
  - 重要极限
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/YBS5T/YBS5T-S2-Q20_题目.png|题目]]

20. (本题满分 12 分)

(1) 证明: 当 $x > 0$ 时, $\varphi(x)=(1+\frac{1}{x})^{x+1}$ 单调递减;

(2) 设 $f(\alpha,x)=\alpha x^{\alpha}(1-x)(\alpha>0,0\leq x\leq1),F(\alpha)=\max_{0\leq x\leq1}f(\alpha,x)$, 证明: $f(\alpha,x)<\frac{1}{e}$ 且 $\lim_{\alpha\to\infty}F(\alpha)=\frac{1}{e}$.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S2-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(1) 令 $g(x)=\ln\varphi(x)=(x+1)\ln(1+1/x)$，则
$$
g'(x)=\ln(1+1/x)-1/x<0\quad(x>0),
$$
所以 $g(x)$ 单调递减，进而 $\varphi(x)=e^{g(x)}$ 单调递减；又
$$
\lim_{x\to+\infty}\varphi(x)=e,
$$
故 $\varphi(x)>e$。

(2) 对固定 $\alpha>0$，求 $f(\alpha,x)$ 在 $[0,1]$ 上的最大值。在 $(0,1)$ 内取对数：
$$
\ln f(\alpha,x)=\ln\alpha+\alpha\ln x+\ln(1-x).
$$
令
$$
\frac{d}{dx}\ln f(\alpha,x)=\frac{\alpha}{x}-\frac{1}{1-x}=0,
$$
得唯一驻点 $x_0=\frac{\alpha}{\alpha+1}$，且为最大值点。于是
$$
F(\alpha)=f(\alpha,x_0)=(\frac{\alpha}{\alpha+1})^{\alpha+1}
=\frac{1}{\varphi(\alpha)}<\frac{1}{e}.
$$
所以 $f(\alpha,x)\le F(\alpha)<\frac{1}{e}$。又
$$
\lim_{\alpha\to+\infty}F(\alpha)
=\lim_{\alpha\to+\infty}(\frac{\alpha}{\alpha+1})^{\alpha+1}
=\frac{1}{e}.
$$

关键给分点：对数求导判单调；单调递减与极限 $e$ 结合；求驻点并计算最大值；用重要极限求极限。

**解题切入点**

本题是“含参函数最值 + 经典极限”的综合题。第一问先取对数求导，利用 $\ln(1+t)<t$ 判负；第二问固定参数后对 $x$ 求导求最大值，并观察到最大值与第一问的 $\varphi(\alpha)$ 互为倒数，自然过渡到 $1/e$。类似算法竞赛中“先求极值再分析参数渐近”的思路。

**推演**

(1) 设 $g(x)=\ln\varphi(x)$，则
$$
g(x)=(x+1)\ln\frac{x+1}{x}.
$$
求导：
$$
g'(x)=\ln\frac{x+1}{x}+(x+1)\frac{x}{x+1}\cdot\frac{-1}{x^2}
=\ln(1+\frac{1}{x})-\frac{1}{x}.
$$
由 $t-\ln(1+t)>0 (t>0)$（令 $h(t)=t-\ln(1+t)$，则 $h'(t)=t/(1+t)>0$，$h(0)=0$），取 $t=1/x$ 得 $g'(x)<0$。故 $g(x)$ 单调递减，$\varphi(x)=e^{g(x)}$ 也单调递减。

又
$$
\varphi(x)=(1+\frac{1}{x})^x(1+\frac{1}{x})\to e,
$$
因而对任意 $x>0$，$\varphi(x)>e$。

(2) 固定 $\alpha>0$。$f(\alpha,0)=f(\alpha,1)=0$；在 $0<x<1$ 内，
$$
\ln f(\alpha,x)=\ln\alpha+\alpha\ln x+\ln(1-x).
$$
对 $x$ 求导得
$$
\frac{f_x(\alpha,x)}{f(\alpha,x)}=\frac{\alpha}{x}-\frac{1}{1-x}.
$$
令 $f_x=0$，得
$$
\alpha(1-x)=x,\quad x_0=\frac{\alpha}{\alpha+1}.
$$
当 $0<x<x_0$ 时 $f_x>0$，当 $x_0<x<1$ 时 $f_x<0$，所以 $x_0$ 是最大值点。

计算最大值：
$$
F(\alpha)=f(\alpha,x_0)
=\alpha(\frac{\alpha}{\alpha+1})^\alpha\frac{1}{\alpha+1}
=(\frac{\alpha}{\alpha+1})^{\alpha+1}
=\frac{1}{\varphi(\alpha)}.
$$
由(1) $\varphi(\alpha)>e$，故
$$
F(\alpha)<\frac{1}{e}.
$$
因此对任意 $x\in[0,1]$，
$$
f(\alpha,x)\le F(\alpha)<\frac{1}{e}.
$$

最后求极限：
$$
\lim_{\alpha\to+\infty}F(\alpha)
=\lim_{\alpha\to+\infty}\frac{1}{(1+\frac{1}{\alpha})^{\alpha+1}}
=\frac{1}{e}.
$$

**易错点**

- $\ln(1+1/x)$ 与 $1/x$ 的大小关系容易记反；应利用 $\ln(1+t)<t$，得导数为负。
- 最大值不能只检查端点；必须解驻点 $x_0=\alpha/(\alpha+1)$，且它在 $(0,1)$ 内。
- $F(\alpha)$ 与 $\varphi(\alpha)$ 是倒数关系，不是相等；极限要区分 $(1+1/\alpha)^\alpha\to e$ 与 $(\alpha/(\alpha+1))^{\alpha+1}\to e^{-1}$。
- 对 $x=0$ 不能直接取对数，要先说明端点函数值为 $0$。

**命题规律**

这类题常把单调性、最值与重要极限串在一起，第一问结论为第二问服务。复习时应重视“对数求导 + 单调性 + 极限”的固定套路；遇到形如 $x^\alpha(1-x)$ 的函数，最大值点通常是 $\alpha/(\alpha+1)$，极限常为 $1/e$。可以类比算法中分析“先求局部最优，再让参数趋于无穷”的渐近过程。


> 来源：《26_余丙森五套卷（数一）》卷二 第 20 题
