---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套二/FIB
  - 计算题
  - 定积分定义
  - 黎曼和
  - 分部积分
  - 反正切函数
points:
level:
---

# FIB 第 11 题

![[_Attachments/题目识别/JJ8T/JJ8T-S2-Q11_题目.png|题目]]

11. 求 $\lim\limits_{n \to \infty} \sum\limits_{k=1}^{n} \frac{\sqrt{k^2 + k}}{n^2 + \frac{1}{k}} \arctan \frac{k}{n} = \_$


---

## DeepSeek V4 Flash Max

【考点】本题考查定积分定义求极限。算法竞赛类比：看到 $\sum\frac{k}{n^2}f(k/n)$ 就是离散 Riemann 和，直接化为 $\int_0^1 xf(x)\,dx$ 的积分逼近。

【解】设
$$
a_{n,k}=\frac{\sqrt{k^2+k}}{n^2+\frac1k}\arctan\frac{k}{n}.
$$
先做等价变形：
$$
a_{n,k}=\frac{k\sqrt{1+1/k}}{n^2\left(1+\frac{1}{n^2k}\right)}\arctan\frac{k}{n}
=\frac{k}{n^2}\arctan\frac{k}{n}+O\left(\frac{1}{n^2}\arctan\frac{k}{n}\right).
$$
这是因为 $\sqrt{1+1/k}=1+O(1/k)$，$\frac{1}{1+1/(n^2k)}=1+O(1/(n^2k))$。于是
$$
\sum_{k=1}^n a_{n,k}
=\sum_{k=1}^n \frac{k}{n^2}\arctan\frac{k}{n}
+O\left(\frac1{n^2}\sum_{k=1}^n\arctan\frac{k}{n}\right)
=\sum_{k=1}^n \frac{k}{n^2}\arctan\frac{k}{n}+O\left(\frac1n\right).
$$
故
$$
\lim_{n\to\infty}\sum_{k=1}^n a_{n,k}
=\lim_{n\to\infty}\frac1n\sum_{k=1}^n \frac{k}{n}\arctan\frac{k}{n}
=\int_0^1 x\arctan x\,dx.
$$
计算积分：
$$
I=\int_0^1 x\arctan x\,dx.
$$
分部积分，令 $u=\arctan x$，$dv=x\,dx$，则 $du=\frac{dx}{1+x^2}$，$v=\frac{x^2}{2}$：
$$
I=\left[\frac{x^2}{2}\arctan x\right]_0^1-\frac12\int_0^1\frac{x^2}{1+x^2}\,dx
=\frac{\pi}{8}-\frac12\int_0^1\left(1-\frac1{1+x^2}\right)dx.
$$
因此
$$
I=\frac{\pi}{8}-\frac12\left(1-\frac{\pi}{4}\right)
=\frac{\pi}{8}-\frac12+\frac{\pi}{8}
=\frac{\pi}{4}-\frac12.
$$

【答案】横线处应填
$$
\boxed{\frac{\pi}{4}-\frac12}
$$

【易错点】不要把 $1/k$ 与 $\sqrt{k^2+k}$ 中的小量不加说明地扔掉；要先化成标准 Riemann 和，再用积分求极限。分部积分中 $\int_0^1\frac{x^2}{1+x^2}dx=1-\frac{\pi}{4}$，注意符号。

【命题规律】此类题常把 Riemann 和与分部积分结合，属于高频基础题。复习时应熟记 $\sum_{k=1}^n\frac1n f(\frac{k}{n})\to\int_0^1 f(x)dx$ 的变形，并练习提取 $1/n$ 因子。

---

## V4 Flash Max 解析

**答案**:
$$
\lim_{n \to \infty} \sum_{k=1}^{n} \frac{\sqrt{k^2+k}}{n^2+\frac{1}{k}} \arctan \frac{k}{n}
= \frac{\pi}{4}-\frac12 = \frac{\pi-2}{4}
$$

填空题填 $\frac{\pi-2}{4}$ 或 $\frac{\pi}{4}-\frac12$。

**解题切入点**:

看到 $\sum_{k=1}^{n}$ 且含 $\frac{k}{n}$，第一反应是“黎曼和”。这题把标准黎曼和藏在了复杂系数里：

$$
\frac{\sqrt{k^2+k}}{n^2+\frac1k}
\sim \frac{k}{n^2}
= \frac1n \cdot \frac{k}{n}
$$

所以主体应化为

$$
\frac1n \sum_{k=1}^{n} \frac{k}{n} \arctan \frac{k}{n}
$$

极限就是

$$
\int_0^1 x\arctan x \, dx
$$

类比算法题：先找主项，低阶修正最后证明不影响。

**推演**:

令

$$
f(x)=x\arctan x
$$

原式改写：

$$
\sqrt{k^2+k}=k\sqrt{1+\frac1k},\qquad 
n^2+\frac1k=n^2\left(1+\frac1{kn^2}\right)
$$

因此

$$
S_n
=
\sum_{k=1}^{n} \frac{k\sqrt{1+\frac1k}}{n^2\left(1+\frac1{kn^2}\right)} \arctan\frac{k}{n}
=
\frac1n \sum_{k=1}^{n} f\!\left(\frac{k}{n}\right) R_{k,n}
$$

其中

$$
R_{k,n}
=
\frac{\sqrt{1+\frac1k}}{1+\frac1{kn^2}}
$$

关键估计误差：

$$
|R_{k,n}-1|
=
\frac{\left|\sqrt{1+\frac1k}-\left(1+\frac1{kn^2}\right)\right|}
{1+\frac1{kn^2}}
\le
\left(\sqrt{1+\frac1k}-1\right)+\frac1{kn^2}
\le
\frac2k
$$

于是

$$
\left|
S_n-\frac1n\sum_{k=1}^{n} f\!\left(\frac{k}{n}\right)
\right|
\le
\frac1n \sum_{k=1}^{n} f\!\left(\frac{k}{n}\right)|R_{k,n}-1|
\le
\frac{\pi}{4n}\sum_{k=1}^{n}\frac2k
=
O\!\left(\frac{\ln n}{n}\right)
\to 0
$$

所以只需计算黎曼和的极限。因为 $f(x)=x\arctan x$ 在 $[0,1]$ 上连续，

$$
\lim_{n\to\infty} S_n
=
\int_0^1 x\arctan x \, dx
$$

分部积分：

$$
\int_0^1 x\arctan x \, dx
=
\left.\frac{x^2}{2}\arctan x\right|_0^1
-
\frac12\int_0^1 \frac{x^2}{1+x^2}\,dx
$$

而

$$
\frac{x^2}{1+x^2}=1-\frac1{1+x^2}
$$

所以

$$
\int_0^1 x\arctan x \, dx
=
\frac{\pi}{8}
-
\frac12\left(1-\frac{\pi}{4}\right)
=
\frac{\pi}{4}-\frac12
$$

因此原极限为

$$
\frac{\pi}{4}-\frac12
=
\frac{\pi-2}{4}
$$

**易错点**:

1. 不能简单说 $\sqrt{k^2+k}\sim k$ 后就直接丢掉修正项，要说明误差可忽略。本题修正因子 $R_{k,n}$ 的误差按 $\frac1k$ 衰减，整体贡献是 $O\!\left(\frac{\ln n}{n}\right)$，趋于 $0$。

2. 注意 $R_{k,n}$ 并不是对每个 $k$ 都一致趋于 $1$，例如 $k=1$ 时 $R_{1,n}\to \sqrt2$。但它对总和的贡献很小，不能用“一致趋于 $1$”一句话带过。

3. 积分部分容易算错：
   $$
   \int \frac{x^2}{1+x^2}\,dx = x-\arctan x
   $$
   不是 $\arctan x$。

自检：令

$$
F(x)=\frac{x^2}{2}\arctan x-\frac12(x-\arctan x)
$$

则

$$
F'(x)=x\arctan x
$$

所以积分结果正确。数值上 $\frac{\pi}{4}-\frac12\approx 0.285$，也符合被积函数在 $[0,1]$ 上的正值估计。

**命题规律**:

数一常考“伪装黎曼和”的极限小题。常见变式：

- 通项含 $\sqrt{k^2+ak}$、$n^2+\frac1k$、$\arctan\frac{k}{n}$、$\ln(1+\frac{k}{n})$ 等“干扰项”；
- 核心都是提取主项化为
  $$
  \frac1n \sum_{k=1}^{n} f\!\left(\frac{k}{n}\right)
  $$
- 积分部分常考分部积分，如 $\int x\arctan x\,dx$、$\int \frac{x}{1+x^2}\,dx$。

记忆方法：

$$
\sum_{k=1}^{n} \frac{k}{n^2} f\!\left(\frac{k}{n}\right)
\approx
\int_0^1 x f(x)\,dx
$$

看到 $\frac{k}{n^2}$ 就想到它是 $\frac1n \cdot \frac{k}{n}$，即“测度 $\frac1n$ 乘上位置 $x$”。
