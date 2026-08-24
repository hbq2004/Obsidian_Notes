---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - PS
  - 26_李林六套卷/卷三/FRQ
  - 计算题
  - 均匀分布
  - 随机变量函数的分布
  - 全概率公式
  - 卷积公式
  - 分段函数积分
points:
level:
---

# 解答题 第 22 题

![[_Attachments/题目识别/LL6T/LL6T-S3-Q22_题目.png|题目]]

设随机变量 $X$ 在区间 $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ 内服从均匀分布，$Y$ 的分布律为 $P\{Y=0\}=P\{Y=1\}=\frac{1}{2}$，且 $X$ 与 $Y$ 相互独立，记 $Z=|\sin X|$.
$(\mathrm{I})$ 求 $Z$ 的概率密度.
$(\mathrm{II})$ 求 $V=Y+Z$ 的概率密度.

![[_Attachments/题目识别/LL6T-答案/LL6T-S3-Q22_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$X \sim U\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$，故 $f_X(x)=\dfrac1\pi,\ -\frac\pi2<x<\frac\pi2$。

（Ⅰ）$Z=|\sin X|$ 的概率密度为
$$
f_Z(z)=\begin{cases}
\dfrac{2}{\pi\sqrt{1-z^2}},&0<z<1,\\
0,&\text{其他}.
\end{cases}
$$

（Ⅱ）$V=Y+Z$ 的概率密度为
$$
f_V(v)=\begin{cases}
\dfrac{1}{\pi\sqrt{1-v^2}},&0<v<1,\\
\dfrac{1}{\pi\sqrt{v(2-v)}},&1<v<2,\\
0,&\text{其他}.
\end{cases}
$$

关键给分点：
1. 写出 $X$ 的密度；
2. 用分布函数法或变量变换求 $Z$ 的密度，注意 $X$ 关于 $0$ 对称，$\sin$ 在两侧单调性相反；
3. 由 $X,Y$ 独立，用全概率公式 $f_V(v)=\frac12 f_Z(v)+\frac12 f_Z(v-1)$；
4. 正确确定 $v$ 的分段区间并完成叠加。

**解题切入点**

这题本质是“随机变量函数的分布 + 独立混合”。算法竞赛视角：先写一个函数 `densityZ(z)`，再写 `densityV(v)=0.5*densityZ(v)+0.5*densityZ(v-1)`，最后做分段化简。难点只在求 `densityZ` 时处理 $|\sin x|$ 的反函数分支，相当于把定义域对称折叠。

**推演**

（Ⅰ）设 $Z=|\sin X|$。

方法一：分布函数法。当 $0<z<1$ 时，
$$
F_Z(z)=P(|\sin X|\le z)=P(-\arcsin z\le X\le \arcsin z).
$$
因为 $X$ 在 $\left(-\frac\pi2,\frac\pi2\right)$ 上均匀分布，长度为 $\pi$，所以
$$
F_Z(z)=\frac{2\arcsin z}{\pi},\quad 0\le z\le 1.
$$
于是
$$
f_Z(z)=F_Z'(z)=\frac{2}{\pi\sqrt{1-z^2}},\quad 0<z<1.
$$
其余为 $0$。端点处密度取不取不影响概率。

方法二：变量变换公式。
$$
f_Z(z)=\sum_{x:\ |\sin x|=z} \frac{f_X(x)}{|\cos x|}.
$$
在 $\left(-\frac\pi2,\frac\pi2\right)$ 内，满足 $|\sin x|=z$ 的点为 $x=\arcsin z$ 和 $x=-\arcsin z$，每个点处 $|\cos x|=\sqrt{1-z^2}$，故
$$
f_Z(z)=2\cdot \frac{1/\pi}{\sqrt{1-z^2}}=\frac{2}{\pi\sqrt{1-z^2}},\quad 0<z<1.
$$

（Ⅱ）由于 $Y$ 与 $Z$ 独立（$Y$ 与 $X$ 独立，$Z$ 是 $X$ 的函数，故 $Y$ 与 $Z$ 独立），对 $V=Y+Z$ 用全概率公式：
$$
f_V(v)=\frac12 f_Z(v)+\frac12 f_Z(v-1).
$$

现在分段写出 $f_Z(v)$ 和 $f_Z(v-1)$ 的支撑。

$f_Z(t)$ 非零当且仅当 $0<t<1$。

1. $f_Z(v)$ 非零：$0<v<1$，此时
$$
f_Z(v)=\frac{2}{\pi\sqrt{1-v^2}}.
$$

2. $f_Z(v-1)$ 非零：$0<v-1<1$，即 $1<v<2$，此时
$$
f_Z(v-1)=\frac{2}{\pi\sqrt{1-(v-1)^2}}=\frac{2}{\pi\sqrt{v(2-v)}}.
$$

因此
$$
f_V(v)=\begin{cases}
\dfrac{1}{2}\cdot\dfrac{2}{\pi\sqrt{1-v^2}}=\dfrac{1}{\pi\sqrt{1-v^2}},&0<v<1,\\
\dfrac{1}{2}\cdot\dfrac{2}{\pi\sqrt{v(2-v)}}=\dfrac{1}{\pi\sqrt{v(2-v)}},&1<v<2,
\\
0,&\text{其他}.
\end{cases}
$$

这就是最终结果。注意在 $v=1$ 处两个分支都趋向 $+\infty$，但概率密度允许无界，点取值不影响概率。

检查归一化：
$$
\int_0^1 \frac{1}{\pi\sqrt{1-v^2}}\,dv=\frac{1}{\pi}\cdot\frac\pi2=\frac12,
$$
$$
\int_1^2 \frac{1}{\pi\sqrt{v(2-v)}}\,dv
=\frac{1}{\pi}\int_0^1 \frac{1}{\sqrt{1-u^2}}\,du=\frac12,
$$
总积分为 $1$，合理。

**易错点**

1. 忘记 $X$ 的区间长度是 $\pi$，误把密度写成 $\frac{2}{\pi}$ 或 $1/\pi$ 用错。
2. 求 $Z$ 密度时只考虑 $X=\arcsin z$ 一个分支，漏掉 $X=-\arcsin z$，导致少因子 $2$。
3. 把 $P(|\sin X|\le z)=P(X\le \arcsin z)$ 写成 $F_X(\arcsin z)$，忽略负分支。
4. 在 $V=Y+Z$ 中直接用卷积 $f_Z * f_Y$ 时，没有意识到 $Y$ 是离散变量，应先写全概率公式再叠加，避免混淆。
5. 分段端点 $v=1$ 处密度无界不是错误；不要把密度在某点取 $+\infty$ 当作非法。
6. 忘记验证总概率为 $1$；建议积分检查。

**命题规律**

本题是典型“连续型随机变量函数 + 离散连续混合”题。李林六套卷常把均匀分布、绝对值/最值函数、独立变量叠加组合在一起，考查分布函数法、变量变换法和全概率公式。复习建议：
- 熟练掌握一维随机变量函数的分布，尤其是分段单调时用“和式公式”或分布函数法；
- 掌握“连续 + 离散”混合随机变量函数的密度写法：$f_V(v)=\sum_y P(Y=y)f_Z(v-y)$；
- 对分段密度，务必先写出支撑区间再代公式，最后做归一化自检。


> 来源：《26_李林六套卷（数一）》卷三 第 22 题
