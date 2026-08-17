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
