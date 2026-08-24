---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - AM
  - 26_张宇八套卷/卷七/FIB
  - 计算题
  - 裂项相消
  - 数列极限
  - 部分和
  - 无穷级数求和
points:
level:
---

# FIB 第 11 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S7-Q11_题目.png|题目]]

$$
\lim_{n\to\infty}\left[\frac{1}{2}+\frac{1}{6}+\cdots+\frac{1}{n(n+1)}\right]=\_.
$$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S7-Q11_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
因为
$$
\frac{1}{k(k+1)}=\frac{1}{k}-\frac{1}{k+1},
$$
所以
$$
\sum_{k=1}^{n}\frac{1}{k(k+1)}=1-\frac{1}{n+1},
$$
故
$$
\lim_{n\to\infty}\left(1-\frac{1}{n+1}\right)=1.
$$

填空题【答案】:
$$
\boxed{1}
$$

**解题切入点**
这是“无穷级数求和”的数列极限题，核心是裂项相消；类似程序设计中的“差分前缀和”：每一项写成差分形式后，中间项全部抵消，只剩首尾。

**推演**
1. 观察通项：第 $k$ 项为 $\frac{1}{k(k+1)}$。
2. 裂项：
$$
\frac{1}{k(k+1)}=\frac{1}{k}-\frac{1}{k+1}.
$$
3. 求和：
$$
\sum_{k=1}^{n}\left(\frac{1}{k}-\frac{1}{k+1}\right)=1-\frac{1}{n+1}.
$$
4. 取极限：
$$
\lim_{n\to\infty}\left(1-\frac{1}{n+1}\right)=1.
$$

**易错点**
不要把通项误写成 $\frac{1}{n}-\frac{1}{n+1}$ 后直接令 $n\to\infty$ 得 $0$，而应先求部分和再取极限；也要注意第一项 $\frac{1}{2}$ 对应 $k=1$，不是从 $k=2$ 开始。

**命题规律**
常见套路：给出前几项，要求识别通项并用裂项相消求和；复习时应熟练掌握 $\frac{1}{n(n+a)}$、$\frac{1}{\sqrt{n+1}+\sqrt{n}}$ 等裂项形式。


> 来源：《26_张宇八套卷（数一）》卷七 第 11 题
