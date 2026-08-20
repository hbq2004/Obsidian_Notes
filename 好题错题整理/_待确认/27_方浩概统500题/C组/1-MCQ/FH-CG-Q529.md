---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 置信区间
  - 枢轴量法
  - 分位点
points:
level:
---

# MCQ 第 529 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q529_题目.png|题目]]

529 设总体$X \sim N(\mu, \sigma^2)$（$\sigma > 0$），若$\sigma^2$已知，已知$\mu$的置信度为$1 - \alpha$的置信区间为$\left(\overline{X} - \lambda \frac{\sigma}{\sqrt{n}}, \overline{X} + \lambda \frac{\sigma}{\sqrt{n}}\right)$，其中$\overline{X}$为样本均值，定义$z_\alpha$为标准正态分布的上$\alpha$分位点，则$\lambda = (\quad)$.

(A). $z_\alpha$

(B). $z_{1 - \alpha}$

(C). $z_{\frac{1 - \alpha}{2}}$

(D). $z_{\frac{\alpha}{2}}$

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：D。因为正态总体方差已知时，$\mu$ 的置信区间为  
$\left(\overline X-z_{\alpha/2}\frac{\sigma}{\sqrt n},\ \overline X+z_{\alpha/2}\frac{\sigma}{\sqrt n}\right)，$  
所以 $\lambda=z_{\alpha/2}$。

**解题切入点**：看到“正态总体”“$\sigma^2$ 已知”“求 $\mu$ 的置信区间”，应立刻定位到枢轴量  
$Z=\frac{\overline X-\mu}{\sigma/\sqrt n}\sim N(0,1)。$  
题目实际上是问：为了使置信度为 $1-\alpha$，对称区间两端应取标准正态分布的哪个分位点。这就像算法中找边界时，要先把总误差 $\alpha$ 分到两侧，每侧各占 $\alpha/2$。

**推演**：设样本均值为 $\overline X$，则  
$\frac{\overline X-\mu}{\sigma/\sqrt n}\sim N(0,1)。$

要构造 $\mu$ 的置信度为 $1-\alpha$ 的置信区间，需要选取 $\lambda>0$，使得  
$P\left(\left|\frac{\overline X-\mu}{\sigma/\sqrt n}\right|\le \lambda\right)=1-\alpha。$

令 $Z\sim N(0,1)$，则  
$P(|Z|\le \lambda)=1-\alpha。$

由于标准正态分布关于 $0$ 对称，所以  
$P(|Z|\le \lambda)=2\Phi(\lambda)-1，$
其中 $\Phi(\lambda)=P(Z\le \lambda)$。

于是  
$2\Phi(\lambda)-1=1-\alpha，$
即  
$\Phi(\lambda)=1-\frac{\alpha}{2}。$

由 $z_\alpha$ 的定义：  
$P(Z\ge z_\alpha)=\alpha，$
可得  
$P(Z\le z_{\alpha/2})=1-\frac{\alpha}{2}。$

因此  
$\lambda=z_{\alpha/2}。$

所以选 **D**。

**易错点**：

1. **误选 A**：直接用 $z_\alpha$，忽略了置信区间需要两侧各留 $\alpha/2$ 的尾部概率。  
2. **混淆上分位点与下分位点**：$z_{1-\alpha}$ 通常是负值或很小，不能作为对称区间的右端点。  
3. **误选 C**：$z_{\frac{1-\alpha}{2}}$ 不是标准置信区间使用的分位点；正确应使用 $z_{\alpha/2}$。  
4. **忘记对称性**：标准正态分布关于 $0$ 对称，故两侧尾部概率应各为 $\alpha/2$，而不是单侧 $\alpha$。

**命题规律**：本题是区间估计中的基础题，核心考查正态总体方差已知时均值的置信区间，以及标准正态分布上分位点的含义。常见变式包括：  
- $\sigma^2$ 未知时改用 $t$ 分布，使用 $t_{\alpha/2}(n-1)$；  
- 求单侧置信限时使用 $z_\alpha$；  
- 给定置信区间反求样本容量 $n$。  
复习时应熟记枢轴量法构造置信区间的基本步骤，并准确区分 $z_\alpha$、$z_{1-\alpha}$、$z_{\alpha/2}$。

**知识点**：枢轴量法、正态总体均值的区间估计、标准正态分布上分位点

---

> 来源：方浩概率统计进阶500题做题本 第195页 · C组
