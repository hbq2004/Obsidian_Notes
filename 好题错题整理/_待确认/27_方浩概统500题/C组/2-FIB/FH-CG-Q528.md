---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 正态总体
  - 样本均值分布
  - 置信区间
  - 标准正态分布
points:
level:
---

# FIB 第 528 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q528_题目.png|题目]]

528 假设总体 $X \sim N(\mu, 8)$, $\mu$ 为未知参数, $X_1, X_2, \cdots, X_n$ 是取自总体 $X$ 的一组简单随机样本, 其样本均值 $\overline{X} = \frac{1}{n}\sum_{i=1}^{n} X_i$, 如果以区间 $(\overline{X}-1, \overline{X}+1)$ 作为 $\mu$ 的置信区间, 那么 $n=36$ 时, 置信度为 \_\_\_\_\_\_\_\_\_\_.

[答案用标准正态的分布函数 $\Phi(x)$ 表示]

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：$\displaystyle 2\Phi\!\left(\frac{3}{\sqrt2}\right)-1$（约为 $0.966$）。

理由：当 $n=36$ 时，$\overline{X}-\mu$ 的标准差为 $\sqrt{\frac{8}{36}}=\frac{\sqrt2}{3}$，区间半宽 $1$ 对应 $\frac{3}{\sqrt2}$ 个标准差。

---

**解题切入点**：总体为正态分布且方差已知，因此样本均值也服从正态分布。先求出 $\overline{X}$ 的分布，再标准化为标准正态变量，把“区间覆盖 $\mu$”转化为标准正态变量落在某个区间内的概率。这类似于算法竞赛中先把数据归一化到同一尺度，再查表比较。

---

**推演**：

因为总体 $X\sim N(\mu,8)$，方差已知为 $8$，且 $X_1,X_2,\cdots,X_n$ 是简单随机样本，所以

$
\overline{X}=\frac1n\sum_{i=1}^n X_i
\sim N\!\left(\mu,\frac{8}{n}\right).
$

当 $n=36$ 时，

$
\overline{X}\sim N\!\left(\mu,\frac{8}{36}\right)
=N\!\left(\mu,\frac{2}{9}\right).
$

标准化得

$
Z=\frac{\overline{X}-\mu}{\sqrt{2/9}}
=\frac{3(\overline{X}-\mu)}{\sqrt2}
\sim N(0,1).
$

置信区间 $(\overline{X}-1,\overline{X}+1)$ 覆盖 $\mu$，等价于

$
\overline{X}-1<\mu<\overline{X}+1
$

即

$
|\overline{X}-\mu|<1.
$

因此置信度为

$
P(\overline{X}-1<\mu<\overline{X}+1)
=P(|\overline{X}-\mu|<1).
$

用标准正态变量表示：

$
P(|\overline{X}-\mu|<1)
=P\!\left(\left|\frac{\overline{X}-\mu}{\sqrt{2/9}}\right|<\frac{1}{\sqrt{2/9}}\right)
=P\!\left(|Z|<\frac{3}{\sqrt2}\right).
$

由标准正态分布的对称性，

$
P\!\left(|Z|<\frac{3}{\sqrt2}\right)
=\Phi\!\left(\frac{3}{\sqrt2}\right)-\Phi\!\left(-\frac{3}{\sqrt2}\right)
=2\Phi\!\left(\frac{3}{\sqrt2}\right)-1.
$

所以 $n=36$ 时，置信度为

$
\boxed{2\Phi\!\left(\frac{3}{\sqrt2}\right)-1}.
$

---

**易错点**：

1. **误用 $t$ 分布**：题目中总体方差 $8$ 已知，因此用标准正态分布，而不是 $t$ 分布。只有方差未知且需用样本方差估计时才用 $t_{n-1}$。
2. **混淆方差与标准差**：$N(\mu,8)$ 中的 $8$ 是方差，不是标准差，即 $\sigma=\sqrt8$。样本均值标准差应为
   $
   \frac{\sigma}{\sqrt n}=\frac{\sqrt8}{6}=\frac{\sqrt2}{3}.
   $
3. **忘记是双侧置信区间**：置信概率应为
   $
   P(|Z|\le a)=2\Phi(a)-1,
   $
   不能只写 $\Phi(a)$ 或 $\Phi(a)-0.5$。
4. **不等号方向写反**：区间覆盖 $\mu$ 等价于 $|\overline{X}-\mu|<1$，而不是 $|\overline{X}-\mu|>1$。

---

**命题规律**：本题属于正态总体均值区间估计中的基础题型，核心是“已知方差，用标准正态分布构造置信区间”。常见变式有：

1. 已知置信度，反求样本容量 $n$；
2. 已知置信度，求置信区间半径或端点；
3. 方差未知时改用 $t$ 分布；
4. 构造单侧置信区间。

复习时应熟练掌握样本均值的标准化：

$
\frac{\overline{X}-\mu}{\sigma/\sqrt n}\sim N(0,1),
$

并理解置信水平就是随机区间覆盖未知参数的概率。

---

**知识点**：正态总体、样本均值分布、置信区间、标准正态分布

---

> 来源：方浩概率统计进阶500题做题本 第195页 · C组
