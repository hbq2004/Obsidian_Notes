---
ctime: 2026-08-22 05:15:01
mtime: 2026-08-22 05:15:01
tags:
  - AM
  - 27_模拟卷概念题摘选/欧几里得卷一
  - 概念题
  - 变上限积分
  - 分段函数
  - 连续与间断
  - 可导性
  - 左右导数
points:
level:
---

# MCQ 第 4 题

![[_Attachments/题目识别/27_模拟卷概念题摘选-题目/MNJ-Q004_题目.png|题目]]

设函数 $f(x) = \begin{cases} \sin x, & 0 \leq x \leq \frac{\pi}{2} \\ 0, & x > \frac{\pi}{2} \end{cases}$，$F(x) = \int_{0}^{x} (x-t)f(t)dt$，则（ ）。

(A) $x = \frac{\pi}{2}$ 是函数 $F(x)$ 的跳跃间断点。

(B) $x = \frac{\pi}{2}$ 是函数 $F(x)$ 的可去间断点。

(C) $F(x)$ 在 $x = \frac{\pi}{2}$ 处连续但不可导。

(D) $F(x)$ 在 $x = \frac{\pi}{2}$ 处可导。

> 考点批注：连续，间断，可导的概念

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 $\boxed{\text{D}}$。核心理由：$F(x)$ 在 $x=\frac{\pi}{2}$ 处左、右极限均等于 $F\left(\frac{\pi}{2}\right)$，且左、右导数均为 $1$，所以连续且可导。

**解题切入点**：看到  
$$
F(x)=\int_{0}^{x}(x-t)f(t)\,dt
$$
应立刻联想到“对 $f$ 做两次积分”的结构。  
令  
$$
G(s)=\int_{0}^{s}f(t)\,dt,
$$
则  
$$
F(x)=\int_{0}^{x}G(s)\,ds.
$$
这就像算法里的“前缀和”：即使 $f$ 在分段点有跳跃，做一次积分后 $G$ 变连续，再做一次积分后 $F$ 在该点可导。所以不能一看到 $f$ 有跳跃间断，就判断 $F$ 也间断。

**推演**：

先分段写出 $F(x)$。

当 $0\le x\le \frac{\pi}{2}$ 时，
$$
f(t)=\sin t,
$$
所以
$$
\begin{aligned}
F(x)&=\int_{0}^{x}(x-t)\sin t\,dt \\
&=x\int_{0}^{x}\sin t\,dt-\int_{0}^{x}t\sin t\,dt \\
&=x(1-\cos x)-(\sin x-x\cos x) \\
&=x-\sin x.
\end{aligned}
$$

当 $x>\frac{\pi}{2}$ 时，只有在 $[0,\frac{\pi}{2}]$ 上 $f(t)=\sin t$，在 $(\frac{\pi}{2},x]$ 上 $f(t)=0$，所以
$$
F(x)=\int_{0}^{\pi/2}(x-t)\sin t\,dt
=x\int_{0}^{\pi/2}\sin t\,dt-\int_{0}^{\pi/2}t\sin t\,dt
=x-1.
$$

于是
$$
F\left(\frac{\pi}{2}\right)=\frac{\pi}{2}-1,
$$
且
$$
\lim_{x\to\left(\frac{\pi}{2}\right)^-}F(x)
=\lim_{x\to\left(\frac{\pi}{2}\right)^-}(x-\sin x)
=\frac{\pi}{2}-1,
$$
$$
\lim_{x\to\left(\frac{\pi}{2}\right)^+}F(x)
=\lim_{x\to\left(\frac{\pi}{2}\right)^+}(x-1)
=\frac{\pi}{2}-1.
$$
所以 $F(x)$ 在 $x=\frac{\pi}{2}$ 处连续。

再看可导性。

左导数：
$$
F'_-\left(\frac{\pi}{2}\right)
=\lim_{h\to0^-}
\frac{F\left(\frac{\pi}{2}+h\right)-F\left(\frac{\pi}{2}\right)}{h}.
$$
当 $h<0$ 时，
$$
F\left(\frac{\pi}{2}+h\right)
=\frac{\pi}{2}+h-\sin\left(\frac{\pi}{2}+h\right)
=\frac{\pi}{2}+h-\cos h,
$$
所以
$$
F'_-\left(\frac{\pi}{2}\right)
=\lim_{h\to0^-}\frac{h+1-\cos h}{h}
=1.
$$

右导数：
$$
F'_+\left(\frac{\pi}{2}\right)
=\lim_{h\to0^+}
\frac{\left(\frac{\pi}{2}+h-1\right)-\left(\frac{\pi}{2}-1\right)}{h}
=1.
$$

因此
$$
F'_-\left(\frac{\pi}{2}\right)=F'_+\left(\frac{\pi}{2}\right)=1,
$$
即
$$
F'\left(\frac{\pi}{2}\right)=1.
$$

逐项判断：

- (A) 跳跃间断点：错误。左右极限相等，不是跳跃间断。  
- (B) 可去间断点：错误。左右极限不仅相等，而且等于函数值，$F$ 在该点连续，不是间断点。  
- (C) 连续但不可导：错误。已经证明 $F$ 在该点可导。  
- (D) 可导：正确。

**易错点**：

1. 误以为 $f(x)$ 在 $\frac{\pi}{2}$ 有跳跃间断，$F(x)$ 也一定间断。实际上积分有“平滑”作用，一次积分可将第一类间断变为连续，两次积分可使函数在该点可导。  
2. 计算 $x>\frac{\pi}{2}$ 时，不能把整个积分写成 $0$。只有 $(\frac{\pi}{2},x]$ 上 $f(t)=0$，而 $[0,\frac{\pi}{2}]$ 上的贡献仍要保留。  
3. 判断分段点可导性要用左右导数定义，不能只根据 $f$ 的间断直接下结论。  
4. 注意“一阶可导”和“二阶可导”的区别。本题中 $F''\left(\frac{\pi}{2}\right)$ 不存在，但不影响 $F'\left(\frac{\pi}{2}\right)=1$。

**命题规律**：

考点定位为变上限积分、分段函数、连续与间断、可导性判断。命题人常给一个有第一类间断点的 $f(x)$，再通过一次或二次积分构造新函数，考查“间断点的积分是否会把间断磨平”。常见变式包括：问 $\int_{0}^{x}f(t)\,dt$ 的连续性与可导性，问 $\int_{0}^{x}(x-t)f(t)\,dt$ 的光滑性，或进一步考查二阶导数是否存在。复习时应熟练掌握变限积分求导公式，并在分段点处坚持用左右导数定义判断。

**知识点**：变上限积分、分段函数、连续与间断、左右导数、微积分基本定理

---

> 来源：模拟卷概念题摘选（试卷顺序版） · 一. 欧几里得卷一 · 原题号 (1) · PDF第6页
