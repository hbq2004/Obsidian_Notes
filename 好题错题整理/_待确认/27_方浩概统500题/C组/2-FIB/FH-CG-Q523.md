---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 样本均值分布
  - 正态分布标准化
  - 标准正态分位数
  - 双侧区间概率
points:
level:
---

# FIB 第 523 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q523_题目.png|题目]]

523 设 $X_1, X_2, \cdots, X_n$ 是总体 $X \sim N(0,1)$ 的简单随机样本，对于给定的 $0 < \alpha < 1$, $P\{X > z_{\alpha}\} = \alpha$, 若 $P\{|\overline{X}| \leqslant x\} = \alpha$, 则 $x = $ \_\_\_\_.

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：
$x=\frac{z_{\frac{1-\alpha}{2}}}{\sqrt n}.$
因为 $\bar X\sim N(0,1/n)$，标准化后 $P\{|\bar X|\le x\}=\alpha$ 等价于标准正态分布对称区间概率为 $\alpha$，两端尾部概率各为 $(1-\alpha)/2$，所以取上侧分位数 $z_{(1-\alpha)/2}$。

**解题切入点**：
先抓两个关键：一是样本均值 $\bar X$ 的分布，二是分位数记号 $z_\alpha$ 的含义。题目中出现 $P\{|\bar X|\le x\}$，应立即将 $\bar X$ 标准化为 $N(0,1)$ 变量；这相当于把问题归约到“标准正态分布对称区间概率”的标准模板，剩下的就是由尾部概率反查分位数。

**推演**：
因为 $X_1,X_2,\cdots,X_n$ 是来自 $N(0,1)$ 的简单随机样本，所以
$\bar X=\frac1n\sum_{i=1}^n X_i\sim N\left(0,\frac1n\right).$

令
$Z=\sqrt n\,\bar X,$
则 $Z\sim N(0,1)$。于是
$P\{|\bar X|\le x\}
=P\{|\sqrt n\,\bar X|\le \sqrt n\,x\}
=P\{|Z|\le \sqrt n\,x\}.$

设 $a=\sqrt n\,x$，则
$P\{|Z|\le a\}
=P\{-a\le Z\le a\}
=\Phi(a)-\Phi(-a).$

由标准正态分布的对称性，
$\Phi(-a)=1-\Phi(a),$
所以
$P\{|Z|\le a\}=2\Phi(a)-1.$

题设给出
$P\{|\bar X|\le x\}=\alpha,$
即
$2\Phi(a)-1=\alpha,$
因此
$\Phi(a)=\frac{1+\alpha}{2}.$

于是右侧尾部概率为
$P\{Z>a\}=1-\Phi(a)
=1-\frac{1+\alpha}{2}
=\frac{1-\alpha}{2}.$

题设中 $P\{X>z_\alpha\}=\alpha$ 说明 $z_\alpha$ 是标准正态分布的上侧 $\alpha$ 分位数。现在尾部概率是 $(1-\alpha)/2$，所以
$a=z_{\frac{1-\alpha}{2}}.$

又因为 $a=\sqrt n\,x$，故
$x=\frac{1}{\sqrt n}\,z_{\frac{1-\alpha}{2}}.$

**易错点**：
1. 把 $\alpha$ 误当成尾部概率，写成 $x=\dfrac{z_{\alpha/2}}{\sqrt n}$。实际上题中 $\alpha$ 是中心概率 $\alpha$，两侧尾部概率各为 $(1-\alpha)/2$。
2. 忘记除以 $\sqrt n$。$\bar X$ 的标准差是 $1/\sqrt n$，不是 $1$，必须标准化为 $\sqrt n\,\bar X$。
3. 将 $P\{|Z|\le a\}$ 直接写成 $\Phi(a)$，忽略了左侧尾部 $-a$ 以下的部分。
4. 混淆上侧分位数与下侧分位数。题中 $z_\alpha$ 定义为 $P\{X>z_\alpha\}=\alpha$，因此中心概率为 $\alpha$ 时应使用 $z_{(1-\alpha)/2}$，而不是 $z_{\alpha}$。

**命题规律**：
本题属于“正态总体样本均值分布 + 标准正态分位数”的基础题型，核心是 $\bar X\sim N(0,1/n)$ 和标准化技巧。常见变式包括：将总体改为 $N(\mu,\sigma^2)$，求含 $\mu,\sigma$ 的 $x$；或已知 $P\{|\bar X-\mu|\le x\}=1-\alpha$ 反求样本容量 $n$；也可与 $t$ 分布、$\chi^2$ 分布结合，考查未知方差情形。复习时应熟练掌握标准正态分布的对称区间概率、分位数记号 $z_\alpha$ 的意义，以及 $z_{1-\alpha}=-z_\alpha$ 等关系。

**知识点**：样本均值分布、正态分布标准化、标准正态分位数、双侧区间概率

---

> 来源：方浩概率统计进阶500题做题本 第193页 · C组
