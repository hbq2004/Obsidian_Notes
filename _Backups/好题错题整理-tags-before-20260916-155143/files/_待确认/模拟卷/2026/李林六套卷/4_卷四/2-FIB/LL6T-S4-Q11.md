---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - AM
  - 26_李林六套卷/卷四/FIB
  - 计算题
  - 定积分定义
  - 黎曼和
  - 取对数求极限
  - 换元积分
  - 连续函数极限
points:
level:
---

# 填空题 第 11 题

![[_Attachments/题目识别/LL6T/LL6T-S4-Q11_题目.png|题目]]

设 $a_n = \left( \frac{n+2}{3n-2} \cdot \frac{n+4}{3n-4} \cdots \frac{n+2n}{3n-2n} \right)^{\frac{1}{n}}$ ，则 $\lim_{n \to \infty} a_n = \_\_\_\_$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S4-Q11_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】

$$\boxed{1}$$

所以 $\lim_{n\to\infty}a_n=1$.

**解题切入点**

连乘取对数化为求和，是处理乘积极限的“对数化”技巧；和式 $\frac{1}{n}\sum f(k/n)$ 直接对应定积分，类似算法竞赛中把乘积转成对数前缀和。

**推演**

由题意，$k=1,2,\ldots,n$ 时，

$$a_n=\left[\prod_{k=1}^n\frac{n+2k}{3n-2k}\right]^{1/n}.$$

取对数：

$$\ln a_n=\frac{1}{n}\sum_{k=1}^n\ln\frac{n+2k}{3n-2k} =\frac{1}{n}\sum_{k=1}^n\ln\frac{1+2(k/n)}{3-2(k/n)}.$$

令 $x_k=k/n$，这是 $f(x)=\ln\frac{1+2x}{3-2x}$ 在 $[0,1]$ 上的黎曼和，所以

$$\lim_{n\to\infty}\ln a_n =\int_0^1\ln\frac{1+2x}{3-2x}\,dx =\int_0^1\ln(1+2x)\,dx-\int_0^1\ln(3-2x)\,dx.$$

分别积分：

$$\int_0^1\ln(1+2x)\,dx =\left[\frac{(1+2x)\ln(1+2x)-(1+2x)}2\right]_0^1 =\frac{3\ln3-2}{2},$$

$$\int_0^1\ln(3-2x)\,dx =\left[-\frac{(3-2x)\ln(3-2x)-(3-2x)}2\right]_0^1 =\frac{3\ln3-2}{2}.$$

（两个原函数求导即可回代验证。）因此 $\lim_{n\to\infty}\ln a_n=0$。由 $a_n>0$ 及指数函数连续性：

$$\lim_{n\to\infty}a_n=e^0=1.$$

关键给分点：取对数化为黎曼和、两个积分相减、回代指数。

**易错点**

- 不要把连乘极限直接当 $0/1$ 猜；应先取对数。
- 黎曼和的下标从 $1$ 到 $n$ 与从 $0$ 到 $n-1$ 极限相同，但写区间端点时注意积分区间仍是 $[0,1]$。
- 求出 $\ln a_n\to0$ 后要回代 $a_n=e^{\ln a_n}$，不能把对数极限当作原极限。
- 对 $\ln(3-2x)$ 积分时用换元或直接凑微分，注意负号不要丢失。

**命题规律**

把数列极限包装成连乘，再通过取对数化为定积分定义，是考研数学一高频填空题。复习时见到“连乘的 $\frac{1}{n}$ 次方”优先想 $\exp\left(\frac{1}{n}\sum\ln\right)$，并熟记 $\frac{1}{n}\sum f(k/n)\to\int_0^1 f(x)\,dx$ 的套路。


> 来源：《26_李林六套卷（数一）》卷四 第 11 题
