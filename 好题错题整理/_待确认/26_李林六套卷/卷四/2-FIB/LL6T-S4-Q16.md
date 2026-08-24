---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - PS
  - 26_李林六套卷/卷四/FIB
  - 计算题
  - t分布构造
  - 正态分布标准化
  - 卡方分布
  - 自由度匹配
  - 随机变量缩放
points:
level:
---

# 填空题 第 16 题

![[_Attachments/题目识别/LL6T/LL6T-S4-Q16_题目.png|题目]]

设总体 $X$ 与总体 $Y$ 相互独立，且都服从 $N(0, \sigma^2)$ ($\sigma > 0$)，$X_1, X_2, \cdots, X_n$ 与 $Y_1, Y_2, \cdots, Y_m$ 分别为来自总体 $X$ 与 $Y$ 的简单随机样本，若
$$
T = \frac{2 \sum_{i=1}^{n} X_i}{\sqrt{\sum_{i=1}^{m} Y_i^2}}
$$
服从 $t$ 分布，则 $\frac{n}{m} = \_\_\_\_\_\_.$

![[_Attachments/题目识别/LL6T-答案/LL6T-S4-Q16_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

填空题【答案】:

$$
\boxed{\frac{n}{m}=\frac14}
$$

此时 $T\sim t(m)$。

**解题切入点**

考查 $t$ 分布的结构：若 $Z\sim N(0,1)$、$V\sim \chi^2(k)$ 且独立，则
$$
\frac{Z}{\sqrt{V/k}}\sim t(k).
$$
本题把分子标准化、分母化为卡方后，比较系数即可。类似算法竞赛“凑模板”：把给定式子改写成标准型。

**推演**

1. 因 $X_i$ 独立同分布于 $N(0,\sigma^2)$，所以
$$
\sum_{i=1}^n X_i\sim N(0,n\sigma^2),\qquad
2\sum_{i=1}^n X_i\sim N(0,4n\sigma^2).
$$
令
$$
U=\frac{2\sum_{i=1}^n X_i}{2\sigma\sqrt n}\sim N(0,1).
$$

2. 因 $Y_i$ 独立同分布于 $N(0,\sigma^2)$，所以
$$
V=\frac{\sum_{i=1}^m Y_i^2}{\sigma^2}\sim \chi^2(m),
$$
且 $U$ 与 $V$ 独立。

3. 将 $T$ 用 $U,V$ 表示：
$$
T=\frac{2\sum_{i=1}^n X_i}{\sqrt{\sum_{i=1}^m Y_i^2}}
=\frac{2\sigma\sqrt n\,U}{\sigma\sqrt V}
=2\sqrt n\,\frac{U}{\sqrt V}.
$$

4. $t(m)$ 的标准结构为
$$
t(m)=\frac{U}{\sqrt{V/m}}
=\sqrt m\,\frac{U}{\sqrt V}.
$$
若 $T$ 服从 $t$ 分布，二者系数必须一致：$2\sqrt n=\sqrt m$，所以
$$
4n=m \quad\Rightarrow\quad \frac{n}{m}=\frac14.
$$

校验：当 $m=4n$ 时，
$$
T=2\sqrt n\,\frac{U}{\sqrt V}
=\frac{U}{\sqrt{V/(4n)}}
=\frac{U}{\sqrt{V/m}}\sim t(m).
$$

**易错点**

- 易把 $2\sum X_i$ 的方差写成 $2n\sigma^2$，漏掉系数平方，导致比例错误。
- 分母 $\sqrt{\sum Y_i^2}$ 对应 $\sigma\sqrt V$，不要忘记 $\sigma$ 可与分子中的 $\sigma$ 相消。
- $t$ 分布中分母必须有 $\sqrt{V/k}$，若化成 $c\,t(m)$ 后要令 $c=1$，不能认为任何常数倍仍是 $t$ 分布。
- 注意自由度是 $m$，不要写成 $n$。

**命题规律**

命题中常给出正态样本和，要求构造成 $t$、$\chi^2$、$F$ 统计量；本质是“标准化 + 卡方化 + 系数比对”。复习时应熟记：
$$
t=\frac{Z}{\sqrt{V/k}},\quad
F=\frac{V_1/k_1}{V_2/k_2},
$$
并练习将样本均值、样本方差化为标准正态与卡方。遇到此类题，先把所有随机变量写成标准形式，再看是否差常数。


> 来源：《26_李林六套卷（数一）》卷四 第 16 题
