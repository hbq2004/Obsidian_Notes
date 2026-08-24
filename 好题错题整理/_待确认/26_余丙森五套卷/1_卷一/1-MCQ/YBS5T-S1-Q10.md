---
ctime: 2026-08-24 15:13:02
mtime: 2026-08-24 15:13:02
tags:
  - PS
  - 26_余丙森五套卷/卷一/MCQ
  - 计算题
  - 正态分布标准化
  - 样本均值分布
  - 标准正态分布函数
  - 正态分布对称性
points:
level:
---

# MCQ 第 10 题

![[_Attachments/题目识别/YBS5T/YBS5T-S1-Q10_题目.png|题目]]

设总体 $X \sim N(\mu, \sigma^2) (\sigma > 0)$ ， $X_1, X_2, \cdots, X_n$ 为来自总体 $X$ 的简单随机样本，样本均值为 $\overline{X}$ ，若 $P\{X - \mu < a\} = P\{\overline{X} - \mu > b\}$ ，则 $\frac{a}{b}$ 的值（ ）.
(A) 等于 1
(B) 等于 $\sqrt{n}$
(C) 等于 $-\sqrt{n}$
(D) 与 $\sigma$ 有关

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S1-Q10_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
【答案】: (C)（$\frac ab=-\sqrt n$）

**解题切入点**
本题核心是正态总体抽样分布与标准正态分布函数单调性。类似算法竞赛中比较两个单调函数值，只需比较其参数；将两边标准化后，由分布函数严格单调直接得到参数相等。

**推演**
设 $X\sim N(\mu,\sigma^2)$，则 $X-\mu\sim N(0,\sigma^2)$，故
$$
P\{X-\mu<a\}=P\left\{\frac{X-\mu}{\sigma}<\frac a\sigma\right\}=\Phi\left(\frac a\sigma\right).
$$
又 $\overline X\sim N(\mu,\sigma^2/n)$，所以 $\overline X-\mu\sim N(0,\sigma^2/n)$，标准化得
$$
P\{\overline X-\mu>b\}=P\left\{\frac{\overline X-\mu}{\sigma/\sqrt n}>\frac{b\sqrt n}{\sigma}\right\}
=1-\Phi\left(\frac{b\sqrt n}{\sigma}\right).
$$
利用标准正态分布对称性 $1-\Phi(t)=\Phi(-t)$，得
$$
P\{\overline X-\mu>b\}=\Phi\left(-\frac{b\sqrt n}{\sigma}\right).
$$
因此题设等价于
$$
\Phi\left(\frac a\sigma\right)=\Phi\left(-\frac{b\sqrt n}{\sigma}\right).
$$
由于 $\Phi$ 严格单调，所以
$$
\frac a\sigma=-\frac{b\sqrt n}{\sigma}\Rightarrow a=-b\sqrt n.
$$
若 $b\ne 0$，则 $\frac ab=-\sqrt n$。选项分析：
(A) 若 $a/b=1$，即 $a=b$，代入 $a=-b\sqrt n$ 得 $(1+\sqrt n)b=0$，非零 $b$ 不成立，排除；
(B) 若 $a/b=\sqrt n$，即 $a=\sqrt n b$，代入 $a=-b\sqrt n$ 得 $2\sqrt n b=0$，非零 $b$ 不成立，排除；
(C) 正确；
(D) 推导中 $\sigma$ 被约去，比值与 $\sigma$ 无关，排除。

**易错点**
1. 忘记 $\overline X$ 的方差是 $\sigma^2/n$，而误用 $\sigma$ 标准化，会错选 $\frac ab=-1$ 或 (D)。
2. 忽略 $1-\Phi(t)=\Phi(-t)$ 的符号转换，容易把 $b$ 前的负号丢失，错选 (B)。
3. 若 $b=0$，则由题设得 $a=0$，此时 $a/b$ 无定义；考试默认 $b\ne0$，但需注意此陷阱。
4. 本题中的 $X$ 是总体随机变量，不是某个样本值，但不影响边缘概率的标准化计算。

**命题规律**
正态总体下样本均值的抽样分布是考研概率论的高频考点。本题将总体与样本均值两个正态变量标准化后，利用分布函数单调性求参数比值，是典型“概率等式参数求解”题。复习时应熟练掌握 $\overline X\sim N(\mu,\sigma^2/n)$，以及标准正态分布函数的基本性质（单调性、对称性）。类似变式可考 $P\{|X-\mu|<a\}=P\{|\overline X-\mu|>b\}$，解法仍为标准化后利用 $\Phi$ 关系。


> 来源：《26_余丙森五套卷（数一）》卷一 第 10 题
