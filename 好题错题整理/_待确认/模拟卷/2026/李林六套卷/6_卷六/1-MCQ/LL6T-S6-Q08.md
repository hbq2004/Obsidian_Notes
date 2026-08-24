---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - PS
  - 26_李林六套卷/卷六/MCQ
  - 计算题
  - 正态分布标准化
  - 样本均值分布
  - 标准正态分布函数
  - 概率等式与分位数
points:
level:
---

# 选择题 第 8 题

![[_Attachments/题目识别/LL6T/LL6T-S6-Q08_题目.png|题目]]

设总体 $X \sim N(\mu, \sigma^2)(\sigma > 0)$, $X_1, X_2, \cdots, X_n$ 为来自总体 $X$ 的简单随机样本, $\overline{X}$ 为样本均值, 若 $P\{|X-\mu| < a\} = P\{|\overline{X}-\mu| < \pi\}$, 则 $a=$.
(A) $n\pi$.
(B) $\sqrt{n\pi}$.
(C) $\sqrt{n}\pi$.
(D) $(n-1)\pi$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S6-Q08_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(C)。按最合理读法，题面右端阈值及选项中的 $\pi$ 应为 $\sigma$ 的 OCR 误识，故 $a=\sqrt n\,\sigma$；若严格按题干当前符号 $\pi$ 理解，则 $a=\sqrt n\,\pi$，选项仍为 (C)。

【推演】选项辨析：
- (A) $n\sigma$：误把标准差的倍数关系当成 $n$ 倍，或把方差与标准差混淆。
- (B) $\sqrt{n\sigma}$：标准化/量纲处理错误，正确形式是 $\sqrt n\,\sigma$。
- (C) $\sqrt n\,\sigma$：正确，由下述标准化可得。
- (D) $(n-1)\sigma$：混入 t 分布自由度 $n-1$；本题方差已知，不用 t 分布。

**解题切入点**

考查正态总体与样本均值分布：$X-\mu\sim N(0,\sigma^2)$，$\bar X-\mu\sim N(0,\sigma^2/n)$。像算法竞赛把不同规模输入统一到同一量纲，这里把两个正态量都标准化到标准正态 $Z$，再比较分位数。

**推演**

1. 因 $X_1,\dots,X_n$ 是来自 $N(\mu,\sigma^2)$ 的简单随机样本，有
$$
\bar X\sim N\left(\mu,\frac{\sigma^2}{n}\right).
$$
2. 令 $Z\sim N(0,1)$，则
$$
X-\mu=\sigma Z,\qquad \bar X-\mu=\frac{\sigma}{\sqrt n}Z.
$$
3. 按原书最合理读法（右端阈值为 $\sigma$），原式化为
$$
P\left(|Z|<\frac{a}{\sigma}\right)=P\left(|Z|<\frac{\sigma}{\sigma/\sqrt n}\right)=P(|Z|<\sqrt n).
$$
若严格按题干中的 $\pi$，则右端为 $P(|Z|<\sqrt n\,\pi/\sigma)$，最后得 $a=\sqrt n\,\pi$。
4. 标准正态分布函数 $\Phi$ 严格单调，故
$$
\frac{a}{\sigma}=\sqrt n\quad\Rightarrow\quad a=\sqrt n\,\sigma.
$$
回代自检：此时左端为 $P(|Z|<\sqrt n)$，右端也为 $P(|Z|<\sqrt n)$，成立。因此选 (C)。

**易错点**

- 不要混淆 $X$ 与 $\bar X$ 的方差：$\bar X$ 的方差是 $\sigma^2/n$，标准差是 $\sigma/\sqrt n$。
- 比较概率时要比标准差倍数，不要比方差，否则易错选 $n\sigma$。
- 总体方差已知且正态，不用 t 分布；$n-1$ 是 t 分布/样本方差自由度，不直接作为倍数。

**命题规律**

这种题是概率统计小题中“正态分布标准化 + 样本均值分布”的固定套路，常把总体与样本均值放在同一个概率等式里。复习时记牢：$\frac{X-\mu}{\sigma}\sim N(0,1)$、$\frac{\bar X-\mu}{\sigma/\sqrt n}\sim N(0,1)$，并由分布函数单调性反解阈值。

题面按右端阈值及选项中 $\pi$ 为 $\sigma$ 的 OCR 误识理解（OCR 疑误，请核对原书）。


> 来源：《26_李林六套卷（数一）》卷六 第 8 题
