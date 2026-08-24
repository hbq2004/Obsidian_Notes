---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - PS
  - 26_张宇八套卷/卷四/MCQ
  - 计算题
  - 矩估计法
  - 对数级数分布
  - 幂级数求和
  - 样本矩
points:
level:
---

# MCQ 第 9 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S4-Q09_题目.png|题目]]

设 $X_1, X_2, \cdots, X_n$ 是来自总体 $X$ 的简单随机样本，总体 $X$ 的概率分布为 $P\{X = k\} = -\frac{\theta^k}{k \ln(1 - \theta)},$ $k = 1, 2, \cdots,$ 其中 $\theta(0 < \theta < 1)$ 是未知参数，$\mu_m = \frac{1}{n} \sum_{i=1}^{n} X_i^m, m = 1, 2, 3,$ 则 $\theta$ 的矩估计量为.

(A) $1 + \frac{\mu_1}{\mu_2}.$
(B) $1 - \frac{\mu_1}{\mu_2}.$
(C) $1 + \frac{\mu_2}{\mu_3}.$
(D) $1 - \frac{\mu_2}{\mu_3}.$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S4-Q09_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(B)。矩估计量为 $\hat\theta=1-\dfrac{\mu_1}{\mu_2}$。

**解题切入点**

本题是离散型分布（对数级数分布）的矩估计，核心在于由分布律计算总体一、二阶矩。类似算法竞赛里对生成函数求导：先认出 $\sum_{k=1}^{\infty}\frac{\theta^k}{k}=-\ln(1-\theta)$，再对几何级数加权求和，消去公共因子。

**推演**

设 $a=-\dfrac{1}{\ln(1-\theta)}>0$，则 $P\{X=k\}=a\dfrac{\theta^k}{k}$。由 $\sum_{k=1}^{\infty}\frac{\theta^k}{k}=-\ln(1-\theta)$ 可知概率和为 $1$。

一阶矩：
$$E[X]=\sum_{k=1}^{\infty}k\cdot a\frac{\theta^k}{k}=a\sum_{k=1}^{\infty}\theta^k=a\frac{\theta}{1-\theta}.$$

二阶矩：
$$E[X^2]=\sum_{k=1}^{\infty}k^2\cdot a\frac{\theta^k}{k}=a\sum_{k=1}^{\infty}k\theta^k=a\frac{\theta}{(1-\theta)^2}.$$

两式相除得
$$\frac{E[X]}{E[X^2]}=\frac{\theta/(1-\theta)}{\theta/(1-\theta)^2}=1-\theta,$$
所以 $\theta=1-\frac{E[X]}{E[X^2]}$。用样本矩 $\mu_1,\mu_2$ 分别替换 $E[X],E[X^2]$，得
$$\hat\theta=1-\frac{\mu_1}{\mu_2}.$$

三阶矩（用于排除 C、D）：
$$E[X^3]=a\sum_{k=1}^{\infty}k^2\theta^k=a\frac{\theta(1+\theta)}{(1-\theta)^3},$$
因此 $\frac{E[X^2]}{E[X^3]}=\frac{1-\theta}{1+\theta}$。

选项分析：
- (A) $1+\frac{\mu_1}{\mu_2}$：大于 1，且总体比值应为 $1-\theta$，故错误。
- (B) $1-\frac{\mu_1}{\mu_2}$：正确。
- (C)(D) 涉及 $\mu_2/\mu_3$。由上式，若用二阶、三阶矩估计应为 $\hat\theta=\frac{1-\mu_2/\mu_3}{1+\mu_2/\mu_3}$，不是 $1\pm\frac{\mu_2}{\mu_3}$，故 C、D 均为干扰项。

关键给分点：正确写出 $E[X]$ 与 $E[X^2]$ 的级数表达式并求和；由比值得到 $\theta=1-E[X]/E[X^2]$；最后用 $\mu_1,\mu_2$ 替换总体矩。

**易错点**

1. 幂级数公式记错：$\sum_{k=1}^{\infty}k\theta^k=\frac{\theta}{(1-\theta)^2}$，不是 $\frac{1}{(1-\theta)^2}$。
2. 公共因子 $a=-1/\ln(1-\theta)$ 要正确保留；它会在比值中消去，若消不去说明计算有误。
3. 矩估计法是用样本矩替换总体矩，不能把 $\mu_1/\mu_2$ 与无偏估计概念混淆。
4. 若误用 $\mu_2/\mu_3$，会漏掉分母中的 $1+\theta$ 因子。

**命题规律**

命题人常把非标准离散分布与矩估计结合：分布律含对数因子时，先做幂级数求和，再通过比值消去难处理的 $\ln(1-\theta)$。复习时应熟练掌握 $\sum \theta^k$、$\sum k\theta^k$、$\sum k^2\theta^k$ 等求和，并熟悉“总体矩→样本矩”的替换流程。


> 来源：《26_张宇八套卷（数一）》卷四 第 9 题
