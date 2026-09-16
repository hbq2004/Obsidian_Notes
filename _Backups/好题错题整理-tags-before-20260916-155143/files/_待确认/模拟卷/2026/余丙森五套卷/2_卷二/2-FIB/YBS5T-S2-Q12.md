---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷二/FIB
  - 计算题
  - 定积分定义
  - 黎曼和
  - 无穷小量估计
  - 有理函数积分
points:
level:
---

# FIB 第 12 题

![[_Attachments/题目识别/YBS5T/YBS5T-S2-Q12_题目.png|题目]]

极限 $\lim_{n\to\infty} \sum_{i=1}^{n} \frac{i+\sqrt{i}}{n^2+in}$ = \_\_\_\_\_\_\_\_\_\_\_\_\_\_.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S2-Q12_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】:
$$\boxed{1-\ln 2}$$

所以横线处应填 $1-\ln 2$。

**解题切入点**

所求为和式极限，典型做法是把 $\sum_{i=1}^n$ 改写成 $\frac{1}{n}\sum f(i/n)$ 的黎曼和。算法竞赛类比：循环累加取极限就是“积分近似”，分子中的 $\sqrt{i}$ 是低阶扰动，先拆项再估阶。

**推演**

$$
S_n=\sum_{i=1}^n \frac{i+\sqrt{i}}{n^2+i n}
=\sum_{i=1}^n \frac{i+\sqrt{i}}{n(n+i)}
=\frac{1}{n}\sum_{i=1}^n \frac{i/n+\sqrt{i/n}/\sqrt{n}}{1+i/n}.
$$

因此
$$
S_n=
\frac{1}{n}\sum_{i=1}^n \frac{i/n}{1+i/n}
+\frac{1}{n\sqrt{n}}\sum_{i=1}^n \frac{\sqrt{i/n}}{1+i/n}.
$$

第一项是 $f(x)=\frac{x}{1+x}$ 在 $[0,1]$ 上的黎曼和（$i=0$ 项为 0，不影响）：
$$
\lim_{n\to\infty}\frac{1}{n}\sum_{i=1}^n f\left(\frac{i}{n}\right)
=\int_0^1 \frac{x}{1+x}\,dx
=\int_0^1\left(1-\frac{1}{1+x}\right)dx
=\left[x-\ln(1+x)\right]_0^1
=1-\ln2.
$$

检验：$[x-\ln(1+x)]'=1-\frac{1}{1+x}=\frac{x}{1+x}$。

第二项估计：
$$
0\le \frac{1}{n\sqrt{n}}\sum_{i=1}^n \frac{\sqrt{i/n}}{1+i/n}
\le \frac{1}{n\sqrt{n}}\cdot n=\frac{1}{\sqrt{n}}\to0.
$$

所以 $S_n\to1-\ln2$。

关键给分点：正确拆项、第一项化黎曼和、第二项严格估计为 $O(n^{-1/2})$。

**易错点**

- 不能把分母 $n^2+i n$ 直接近似成 $n^2$，否则第一项会得到 $\frac{1}{2}$；正确做法是提出 $n$，保留 $1+i/n$ 进入积分。
- $\sqrt{i}$ 项不能简单丢弃而不说明；要拆开后证明它是 $O(1/\sqrt{n})$ 趋于 $0$。
- 注意黎曼和因子 $\frac{1}{n}$ 与函数值 $f(i/n)$ 必须配套，不要漏乘。

**命题规律**

“和式极限”是考研数学一高频考点，常给出形如 $\sum f(i/n)\frac{1}{n}$ 的式子，或含多余低阶项；复习时应熟记定积分定义，并练习用夹逼/不等式消除低阶项。本题属于基础计算题，重在对定义和阶的把握。


> 来源：《26_余丙森五套卷（数一）》卷二 第 12 题
