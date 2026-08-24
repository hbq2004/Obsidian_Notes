---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - AM
  - 26_李林六套卷/卷六/FIB
  - 计算题
  - 定积分定义求极限
  - 黎曼和估计
  - 同阶无穷大比较
  - 幂函数积分
points:
level:
---

# 填空题 第 13 题

![[_Attachments/题目识别/LL6T/LL6T-S6-Q13_题目.png|题目]]

$ \lim_{n \to \infty} \frac{1 + \frac{1}{\sqrt{2}} + \dots + \frac{1}{\sqrt{n}}}{\frac{1}{\sqrt{n+1}} + \frac{1}{\sqrt{n+2}} + \dots + \frac{1}{\sqrt{n+3n}}} = \_ $.

![[_Attachments/题目识别/LL6T-答案/LL6T-S6-Q13_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

填空题【答案】:

$$\boxed{1}$$

**解题切入点**

上下两个和式项数都随 $n$ 增长，量级都约为 $\sqrt n$。同除以 $\sqrt n$ 后改写为黎曼和；这类似算法竞赛中估计数列和复杂度：先看阶，再算常数。

**推演**

令
$$
A_n = \sum_{k=1}^n \frac{1}{\sqrt k}, \qquad B_n = \sum_{j=1}^{3n} \frac{1}{\sqrt{n+j}}.
$$
分母即原式从 $n+1$ 到 $n+3n=4n$ 的求和。

分子归一化：
$$
\frac{A_n}{\sqrt n} = \frac{1}{n} \sum_{k=1}^n \frac{1}{\sqrt{k/n}} \to \int_0^1 x^{-1/2} dx = 2.
$$
分母归一化：
$$
\frac{B_n}{\sqrt n} = \frac{1}{n} \sum_{j=1}^{3n} \frac{1}{\sqrt{1+j/n}} \to \int_0^3 \frac{dx}{\sqrt{1+x}} = [2\sqrt{1+x}]_0^3 = 2.
$$
（回代自检：$(2\sqrt{x})'=x^{-1/2}$，$(2\sqrt{1+x})'=(1+x)^{-1/2}$。）

所以
$$
\lim_{n\to\infty}\frac{A_n}{B_n}
= \frac{\lim\limits_{n\to\infty}A_n/\sqrt n}{\lim\limits_{n\to\infty}B_n/\sqrt n}
= \frac{2}{2}=1.
$$
关键给分点：两个归一化黎曼和极限各占主要得分，最后比值取极限。

**易错点**

1. 不能把分母 $3n$ 项都粗略看成 $1/\sqrt n$，否则会得到分母主项 $3\sqrt n$，误以为答案是 $\frac{1}{3}$；实际分母项递减，积分给出的主项系数是 $2$。
2. 归一化时注意变量：分子用 $k/n$，分母用 $j/n$，不要混淆上下限。
3. 分母上端是 $n+3n=4n$，不是 $n+3$；看清下标范围。

**命题规律**

和式极限是高频考点，常用定积分定义或积分夹逼。复习时掌握 $\sum_{k=1}^n k^\alpha$ 与 $\int x^\alpha dx$ 的关系；遇到分子分母都是和式，先找共同量级，再分别求系数，和算法竞赛里“先估复杂度再算常数”同理。


> 来源：《26_李林六套卷（数一）》卷六 第 13 题
