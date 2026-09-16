---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - AM
  - 26_李林六套卷/卷三/MCQ
  - 计算题
  - 定积分求面积
  - 绝对值定积分
  - 区间拆分
  - 裂项相消
  - 无穷级数求和
points:
level:
---

# 选择题 第 4 题

![[_Attachments/题目识别/LL6T/LL6T-S3-Q04_题目.png|题目]]

设 $y = x\sin x$ 在 $[0, n\pi]$ 上与 $x$ 轴所围图形的面积为 $a_n (n = 1, 2, \cdots)$，则 $\sum_{k=1}^{\infty} \frac{1}{\sqrt{a_k a_{k+1}}} =$ .

(A) $\frac{1}{\sqrt{\pi}}$ .
(B) $\frac{1}{\pi}$ .
(C) $\pi$ .
(D) $\sqrt{\pi}$ .

![[_Attachments/题目识别/LL6T-答案/LL6T-S3-Q04_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

选择题【答案】：(B) $\frac{1}{\pi}$。

**解题切入点**

先求通项再求和。$a_n$ 是 $x\sin x$ 的绝对值积分，$\sin x$ 每隔 $\pi$ 变号，故按长度为 $\pi$ 的子区间拆分，得到 $a_n=n^2\pi$；级数部分用裂项相消。类似算法题：先预处理出通项公式，再做线性求和。

**推演**

1. 计算 $a_n$。

因 $x\ge0$，有 $|x\sin x|=x|\sin x|$。令
$$
I_j=\int_{(j-1)\pi}^{j\pi}x|\sin x|\,dx\quad(j=1,2,\dots,n).
$$
作换元 $x=(j-1)\pi+t$，$t\in[0,\pi]$，此时 $|\sin x|=\sin t$，故
$$
I_j=\int_0^\pi[(j-1)\pi+t]\sin t\,dt
=(j-1)\pi\int_0^\pi\sin t\,dt+\int_0^\pi t\sin t\,dt.
$$
又
$$
\int_0^\pi\sin t\,dt=2,\qquad
\int_0^\pi t\sin t\,dt=\pi,
$$
所以
$$
I_j=2(j-1)\pi+\pi=(2j-1)\pi.
$$
因此
$$
a_n=\sum_{j=1}^nI_j=\pi\sum_{j=1}^n(2j-1)=\pi n^2.
$$

2. 求级数。

$$
\sqrt{a_ka_{k+1}}=\sqrt{k^2\pi\cdot(k+1)^2\pi}=k(k+1)\pi,
$$
故
$$
\sum_{k=1}^\infty\frac{1}{\sqrt{a_ka_{k+1}}}
=\sum_{k=1}^\infty\frac{1}{\pi k(k+1)}
=\frac{1}{\pi}\sum_{k=1}^\infty\left(\frac1k-\frac1{k+1}\right)
=\frac{1}{\pi}.
$$

3. 选项核对。

由上式可知 (B) 正确。逐项看：
- (A) 错：常见于对 $\pi$ 的幂次处理不当，例如把 $\sqrt{a_ka_{k+1}}$ 中的 $\pi$ 错写成 $\sqrt{\pi}$。
- (B) 对：推导结果即为 $\frac{1}{\pi}$。
- (C) 错：常见于把正确结果取倒数，或将面积公式中的系数 $\pi$ 写反。
- (D) 错：常见于漏掉 $k(k+1)$ 的平方结构，或对 $\pi$ 的幂次处理错误。

关键给分点：正确分段求得 $a_n=n^2\pi$，并正确裂项得到 $\frac{1}{\pi}$。

**易错点**

- 把 $a_n$ 误算为 $n\pi$ 或忘掉绝对值：$\int_0^{n\pi}x\sin x\,dx$ 是带符号积分，不是面积；面积必须加绝对值并按区间分段。
- 区间分段时每个半周期的面积不是常数，而是 $(2j-1)\pi$，漏掉随 $j$ 增长的 $2(j-1)\pi$ 会导致 $a_n$ 错误。
- 裂项时注意 $\frac{1}{k(k+1)}=\frac1k-\frac1{k+1}$，不要丢掉系数 $\frac{1}{\pi}$。

**命题规律**

定积分应用与数项级数结合是常见综合题：先由几何面积得到数列通项，再检验级数求和。复习时要注意“面积”与“定积分”的符号区别，并熟练掌握区间拆分、换元积分和裂项相消。


> 来源：《26_李林六套卷（数一）》卷三 第 4 题
