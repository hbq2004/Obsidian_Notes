---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - PS
  - 26_张宇八套卷/卷六/MCQ
  - 计算题
  - 正态分布
  - 样本均值
  - 方差性质
  - 标准正态分布
  - 上侧分位数
points:
level:
---

# MCQ 第 10 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S6-Q10_题目.png|题目]]

设 $X_1,\cdots,X_n$ 与 $Y_1,\cdots,Y_n$ 是来自正态总体 $N(\mu,\sigma^2)$ 的两个相互独立的简单随机样本, $\overline{X} = \frac{1}{n}\sum_{i=1}^{n}X_i, \overline{Y} = \frac{1}{n}\sum_{i=1}^{n}Y_i$, 且满足 $P\{|\overline{X} - \overline{Y}| > \sigma\} \le 0.05, \Phi(1.96) = 0.975$, 则样本容量 $n$ 的最小值为.
(A) 7.
(B) 8.
(C) 9.
(D) 10.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S6-Q10_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

令 $D=\bar X-\bar Y$。由于两样本独立且都来自正态总体，有
\[
D \sim N\left(0,\frac{2\sigma^2}{n}\right).
\]
标准化：
\[
Z=\frac{D}{\sigma\sqrt{2/n}}\sim N(0,1).
\]
所以
\[
P(|D|>\sigma)=P\left(|Z|>\sqrt{\frac n2}\right).
\]
要使 $P\le0.05$，即
\[
2[1-\Phi(\sqrt{n/2})]\le0.05
\iff \Phi(\sqrt{n/2})\ge0.975.
\]
由 $\Phi(1.96)=0.975$ 及分布函数单调性：
\[
\sqrt{n/2}\ge1.96 \iff n\ge2\times1.96^2=7.6832.
\]
故最小整数 $n=8$。

选择题【答案】: (B)。

**解题切入点**

这是正态总体下两个独立样本均值之差的概率估计。破题关键是“线性组合仍正态，方差相加”：先写出 $\bar X-\bar Y$ 的分布，再反解分位数求最小样本量。类似算法竞赛里先确定函数再二分答案找阈值。

**推演**

1. 由 $X_i\sim N(\mu,\sigma^2)$ 得 $\bar X\sim N(\mu,\sigma^2/n)$；同理 $\bar Y\sim N(\mu,\sigma^2/n)$。
2. 两样本独立，所以 $\bar X$ 与 $\bar Y$ 独立，故
\[
\bar X-\bar Y\sim N\left(0,\frac{\sigma^2}{n}+\frac{\sigma^2}{n}\right)=N\left(0,\frac{2\sigma^2}{n}\right).
\]
3. 标准化：
\[
Z=\frac{\bar X-\bar Y}{\sigma\sqrt{2/n}}\sim N(0,1).
\]
原事件等价于
\[
|\bar X-\bar Y|>\sigma \iff |Z|>\frac{\sigma}{\sigma\sqrt{2/n}}=\sqrt{\frac n2}.
\]
4. 概率计算：
\[
P\left(|Z|>\sqrt{\frac n2}\right)=2\left[1-\Phi\left(\sqrt{\frac n2}\right)\right]\le0.05.
\]
因此
\[
\Phi\left(\sqrt{\frac n2}\right)\ge0.975.
\]
已知 $\Phi(1.96)=0.975$，正态分布函数单调增加，所以
\[
\sqrt{\frac n2}\ge1.96.
\]
5. 解得
\[
n\ge2\times1.96^2=7.6832.
\]
样本容量为整数，最小值为 $8$。

选项逐一分析：
- (A) 7：$n=7$ 时 $\sqrt{7/2}\approx1.8708<1.96$，概率约为 $0.0614>0.05$，不满足。
- (B) 8：$n=8$ 时 $\sqrt{8/2}=2\ge1.96$，概率约为 $0.0455\le0.05$，满足且为最小。
- (C) 9、(D) 10：也满足，但不是最小。

**易错点**

(1) 易把方差写成 $\frac{\sigma^2}{n}-\frac{\sigma^2}{n}=0$；两独立变量之差的方差是方差相加，不是相减。
(2) 标准化时容易漏掉 $\sqrt2$，导致阈值错成 $\sqrt n$ 或直接比较 $\sigma/\sqrt{2/n}$ 颠倒。
(3) 要看清题目给的是 $\Phi(1.96)=0.975$，这是双侧 $0.05$ 对应的上侧分位数；若用单侧 $0.05$ 会得到 $1.645$，从而错选 6 或 7。
(4) 最终要求“最小样本容量”，算出下界后应向上取整，不能四舍五入。

**命题规律**

这类题属于“正态总体抽样分布 + 分位数反求 n”的固定套路：先由正态性写出统计量分布，再把概率条件化为标准正态分位数不等式，最后取整。复习时应熟练掌握正态样本均值、方差可加性、常见分位数，并注意独立与不独立时方差项的区别。


> 来源：《26_张宇八套卷（数一）》卷六 第 10 题
