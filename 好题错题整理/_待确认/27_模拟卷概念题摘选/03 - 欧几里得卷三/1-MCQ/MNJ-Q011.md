---
ctime: 2026-08-22 05:15:01
mtime: 2026-08-22 05:15:01
tags:
  - PS
  - 27_模拟卷概念题摘选/欧几里得卷三
  - 概念题
  - 正态总体抽样分布
  - t分布
  - F分布
  - 卡方分布
  - 两总体合并方差
points:
level:
---

# MCQ 第 11 题

![[_Attachments/题目识别/27_模拟卷概念题摘选-题目/MNJ-Q011_题目.png|题目]]

设两总体 $X,Y$ 相互独立且都服从 $N(\mu,\sigma^2)$, 而 $X_1,X_2,\cdots,X_n$ 与 $Y_1,Y_2,\cdots,Y_n$ 分别是来自总体 $X,Y$ 的简单随机样本, 记它们的样本均值与样本方差分别为 $\overline{X},\overline{Y}$ 和 $S_X^2,S_Y^2$, 则下列说法正确的是 (　　)

A. $\sqrt{n}\frac{\overline{X}-\overline{Y}}{\sigma}\sim N(0,1).$
B. $2(n-1)\frac{S_X^2+S_Y^2}{\sigma^2}\sim \chi^2(2n-2).$
C. $\sqrt{n}\frac{\overline{X}-\overline{Y}}{\sqrt{S_X^2+S_Y^2}}\sim t(2n-2).$
D. $\frac{n(\overline{X}-\mu)^2}{S_X^2}\sim F(1,n).$

> 考点批注：各种概率分布的概念

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 C。两独立正态总体方差相同、样本容量相同时，两样本均值差用合并样本方差标准化后服从自由度为 $2n-2$ 的 $t$ 分布。

**解题切入点**：  
看到“正态总体 + 样本均值 + 样本方差 + 判断分布”，应立刻定位到三大抽样分布：$\chi^2$ 分布、$t$ 分布、$F$ 分布。关键看两点：$\sigma$ 是否已知、用的是单个样本还是两个样本。好比算法竞赛里先识别题目属于哪个模板：已知 $\sigma$ 走正态分布，未知 $\sigma$ 用样本方差走 $t$ 分布，样本方差平方和走 $\chi^2$，方差比或 $t$ 的平方走 $F$。

**推演**：  
先写出正态总体的基本抽样分布结论：

\[
\bar X\sim N\left(\mu,\frac{\sigma^2}{n}\right),\qquad
\frac{(n-1)S_X^2}{\sigma^2}\sim \chi^2(n-1),
\]

同理
\[
\bar Y\sim N\left(\mu,\frac{\sigma^2}{n}\right),\qquad
\frac{(n-1)S_Y^2}{\sigma^2}\sim \chi^2(n-1).
\]

逐项分析。

**A 选项错误。**  
因为 $X,Y$ 独立，所以

\[
\bar X-\bar Y\sim N\left(0,\frac{2\sigma^2}{n}\right).
\]

于是

\[
\sqrt{\frac n2}\frac{\bar X-\bar Y}{\sigma}\sim N(0,1),
\]

而不是 $\sqrt n\frac{\bar X-\bar Y}{\sigma}\sim N(0,1)$。A 漏掉了 $\frac1{\sqrt2}$ 的因子。

**B 选项错误。**  
两个样本方差对应的卡方量相加：

\[
\frac{(n-1)S_X^2}{\sigma^2}+\frac{(n-1)S_Y^2}{\sigma^2}
=
\frac{(n-1)(S_X^2+S_Y^2)}{\sigma^2}
\sim \chi^2(2n-2).
\]

而 B 写的是

\[
2(n-1)\frac{S_X^2+S_Y^2}{\sigma^2},
\]

比正确的卡方统计量多乘了一个 $2$，因此不是 $\chi^2(2n-2)$。

**C 选项正确。**  
令

\[
Z=\frac{\bar X-\bar Y}{\sqrt{2\sigma^2/n}}
\sim N(0,1),
\]

再令

\[
U=\frac{(n-1)(S_X^2+S_Y^2)}{\sigma^2}
\sim \chi^2(2n-2).
\]

则由 $t$ 分布定义，

\[
\frac{Z}{\sqrt{U/(2n-2)}}
=
\frac{\sqrt n(\bar X-\bar Y)}{\sqrt{S_X^2+S_Y^2}}
\sim t(2n-2).
\]

这里用到了 $\bar X-\bar Y$ 与 $S_X^2+S_Y^2$ 独立，这是正态总体下样本均值与样本方差独立、且两组样本相互独立保证的。

**D 选项错误。**  
对单个正态总体，有

\[
\frac{\sqrt n(\bar X-\mu)}{S_X}\sim t(n-1).
\]

两边平方得

\[
\frac{n(\bar X-\mu)^2}{S_X^2}\sim F(1,n-1),
\]

而不是 $F(1,n)$。D 把第二自由度写错了。

**易错点**：  
1. A 选项容易漏算 $\bar X-\bar Y$ 的方差，误以为方差是 $\sigma^2/n$，实际上应为 $2\sigma^2/n$。  
2. B 选项容易误把两个卡方量直接相加，却忘记正确系数是 $n-1$，而不是 $2(n-1)$。  
3. C 选项是两独立正态总体方差未知但相等时的合并方差 $t$ 统计量，不能与 A 的已知 $\sigma$ 正态统计量混淆。  
4. D 选项要牢记：单样本均值 $t$ 统计量的自由度是 $n-1$，其平方服从 $F(1,n-1)$，不是 $F(1,n)$。

**命题规律**：  
本题是典型的“三大抽样分布”概念辨析题。命题人常通过修改系数、自由度来制造干扰项，例如把 $\sqrt{n/2}$ 写成 $\sqrt n$，把 $n-1$ 写成 $2(n-1)$，把 $n-1$ 写成 $n$。常见变式还有：两独立正态总体方差比

\[
\frac{S_X^2}{S_Y^2}\sim F(n-1,n-1),
\]

以及单样本

\[
\frac{\sqrt n(\bar X-\mu)}{S}\sim t(n-1).
\]

复习时建议把正态总体下样本均值、样本方差的抽样分布整理成表，重点记忆“已知 $\sigma$ 用正态，未知 $\sigma$ 用 $t$，样本方差用 $\chi^2$，方差比或 $t$ 的平方用 $F$”。

**知识点**：  
正态总体样本均值与样本方差的独立性、$\chi^2$ 分布、$t$ 分布、$F$ 分布、两独立正态总体合并方差 $t$ 统计量

---

> 来源：模拟卷概念题摘选（试卷顺序版） · 三. 欧几里得卷三 · 原题号 (10) · PDF第9页
