---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - PS
  - 26_李林六套卷/卷六/FIB
  - 概念题
  - 正态总体均值检验
  - 单侧t检验
  - 拒绝域
  - 检验水平
  - t分布分位数
points:
level:
---

# 填空题 第 16 题

![[_Attachments/题目识别/LL6T/LL6T-S6-Q16_题目.png|题目]]

设 $X_1, X_2, \cdots, X_n$ 为来自总体 $X \sim N(\mu, \sigma^2)$ 的简单随机样本，$\sigma^2$ 未知，$\overline{X}$ 为样本均值，$S^2$ 为样本方差，检验水平为 $\alpha$，则 $H_0: \mu \geqslant \mu_0, H_1: \mu < \mu_0$ 的拒绝域为 \\_\\_\\_\\_\\_\\_ .

![[_Attachments/题目识别/LL6T-答案/LL6T-S6-Q16_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

填空题【答案】: $$W=\left\{\frac{\overline{X}-\mu_0}{S/\sqrt{n}}<-t_{\alpha}(n-1)\right\}$$

或等价地
$$T=\frac{\overline{X}-\mu_0}{S/\sqrt{n}}<-t_{\alpha}(n-1),$$

其中 $t_\alpha(n-1)$ 为 $t(n-1)$ 分布的上侧 $\alpha$ 分位数。

**解题切入点**

考查单个正态总体、方差未知时关于均值的左边检验。类似算法竞赛中判断“是否存在显著下降”：若 $t$ 值显著小于 $0$，就有理由拒绝 $H_0$；原假设取边界 $\mu=\mu_0$ 构造枢轴量。

**推演**

1. 由正态总体抽样分布：
$$
\overline{X}\sim N\left(\mu,\frac{\sigma^2}{n}\right),\qquad
\frac{(n-1)S^2}{\sigma^2}\sim \chi^2(n-1),
$$
且 $\overline{X}$ 与 $S^2$ 独立。

2. 当 $\mu=\mu_0$ 时，
$$
T=\frac{\overline{X}-\mu_0}{S/\sqrt{n}}\sim t(n-1).
$$

3. $H_1:\mu<\mu_0$ 说明 $\overline{X}$ 应明显小于 $\mu_0$，即 $T$ 应取很小的负值。检验水平为 $\alpha$ 时，取临界值 $-t_\alpha(n-1)$（$t_\alpha(n-1)$ 为上侧 $\alpha$ 分位数）。

4. 所以拒绝域为
$$
T<-t_\alpha(n-1).
$$
若用样本观测值 $\bar x,s$ 表示，则为
$$
\frac{\bar x-\mu_0}{s/\sqrt{n}}<-t_\alpha(n-1).
$$

**易错点**

- 方差 $\sigma^2$ 未知，不能使用 $Z=\frac{\overline{X}-\mu_0}{\sigma/\sqrt n}$；必须用 $S$ 替换 $\sigma$，得到 $t$ 统计量，自由度 $n-1$。
- 左边检验拒绝域在左侧，临界值为负；不要写成 $T>t_\alpha(n-1)$，也不要写成 $|T|>t_{\alpha/2}(n-1)$（后者是双边检验）。
- 注意分位数符号：$t_\alpha(n-1)$ 是上侧分位数，因此临界值为 $-t_\alpha(n-1)$；等价写法是 $T<t_{1-\alpha}(n-1)$。

**命题规律**

命题套路：给出正态总体、方差未知、单边备择假设，要求写出拒绝域或判断是否拒绝。复习时须熟记 $z$ 检验与 $t$ 检验的适用条件，区分单边/双边临界值，并注意样本方差自由度。可与区间估计中 $t$ 枢轴量对比记忆。


> 来源：《26_李林六套卷（数一）》卷六 第 16 题
