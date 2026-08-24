---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - PS
  - 26_张宇四套卷/卷三/FIB
  - 计算题
  - 最大似然估计法
  - 对数似然函数
  - 求导零点
  - 密度归一化
  - 样本二阶矩
points:
level:
---

# 填空题 第 16 题

![[_Attachments/题目识别/ZY4T/ZY4T-S3-Q16_题目.png|题目]]

设总体 $X$ 的概率密度为 $f(x;\sigma^2) = \begin{cases} \frac{a}{\sigma} e^{-\frac{x^2}{2\sigma^2}}, & x \ge 0, \\ 0, & x < 0, \end{cases}$ 其中 $\sigma > 0$ 为未知参数，$a$ 为常数. $X_1, X_2, \cdots, X_n$ 为来自总体 $X$ 的简单随机样本，则 $\sigma^2$ 的最大似然估计量为\_\_\_\_\_\_\_\_\_\_.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S3-Q16_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

填空题【答案】: $\boxed{\hat{\sigma^2} = \frac{1}{n}\sum_{i=1}^{n}X_i^2}$

**解题切入点**

考查最大似然估计的基本方法。类似算法竞赛中拟合参数时取对数求导，关键是写出似然函数并对参数求导。此题密度为半正态分布，但核心套路不变。

**推演**

1. 令 $\theta = \sigma^2$，则密度为 $f(x;\theta) = \frac{a}{\sqrt{\theta}} e^{-\frac{x^2}{2\theta}}$, $x \ge 0$。
2. 似然函数 $L(\theta) = \prod_{i=1}^n \frac{a}{\sqrt{\theta}} e^{-\frac{x_i^2}{2\theta}} = a^n \theta^{-n/2} e^{-\frac{1}{2\theta}\sum_{i=1}^n x_i^2}$。
3. 对数似然 $\ell(\theta) = n\ln a - \frac{n}{2}\ln\theta - \frac{1}{2\theta}\sum_{i=1}^n x_i^2$。
4. 求导并令零：$\ell'(\theta) = -\frac{n}{2\theta} + \frac{1}{2\theta^2}\sum_{i=1}^n x_i^2 = 0$，解得 $\theta = \frac{1}{n}\sum_{i=1}^n x_i^2$。
5. 验证极大值：$\ell''(\theta) = \frac{n}{2\theta^2} - \frac{\sum x_i^2}{\theta^3}$，代入 $\hat{\theta} = \frac{1}{n}\sum x_i^2$ 得负值，故为最大似然估计。
6. 常数 $a$ 可由归一化条件确定：$\int_0^\infty \frac{a}{\sqrt{\theta}} e^{-x^2/(2\theta)}dx = 1 \Rightarrow a = \sqrt{2/\pi}$，但 $a$ 不影响估计结果。

**易错点**

- 勿将参数误设为 $\sigma$ 并直接对 $\sigma$ 求导，应令 $\theta=\sigma^2$ 简化运算。
- 勿忽视似然函数中 $x_i \ge 0$ 的条件，但在此不影响对数求导。
- 需验证二阶导为负，确保是极大值。
- 注意总体为半正态分布，不能套用正态总体 $\hat{\mu}=\bar{x}$ 的结论。

**命题规律**

最大似然估计是考研概率论高频考点，常结合指数分布、正态分布或变形分布。本题属于基础计算题，重点考察“写似然—取对数—求导—解零点”的流程。复习时应熟练此类套路，并注意参数转化与二阶导数验证。


> 来源：《26_张宇四套卷（数一）》卷三 第 16 题
