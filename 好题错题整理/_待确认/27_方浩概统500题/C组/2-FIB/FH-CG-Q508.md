---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 独立正态变量
  - 卡方分布
  - 瑞利分布
  - Gamma函数
points:
level:
---

# FIB 第 508 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q508_题目.png|题目]]

508 设随机变量$X$，$Y$相互独立，且$X\sim N(0,\sigma^{2})(\sigma>0)$，$Y\sim N(0,\sigma^{2})(\sigma>0)$，则$E\left(\sqrt{X^{2}+Y^{2}}\right)=$\_\_\_\_\_\_.

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：
$
\boxed{E\left(\sqrt{X^{2}+Y^{2}}\right)=\sigma\sqrt{\frac{\pi}{2}}}
$
即 $R=\sqrt{X^{2}+Y^{2}}$ 服从参数为 $\sigma$ 的 Rayleigh 分布，其一阶矩为 $\sigma\sqrt{\pi/2}$。

**解题切入点**：
看到两个独立同方差正态变量的“平方和再开根号”，应立刻定位到二维正态向量的模长问题。处理方法：先除以 $\sigma$ 化为标准正态，则平方和服从 $\chi^2(2)$，再用 Gamma 函数求期望。这类似于算法竞赛中遇到“平方和”就联想到欧氏距离，进而归约到已知模型。

**推演**：
令
$
Z_1=\frac{X}{\sigma},\qquad Z_2=\frac{Y}{\sigma}.
$
则 $Z_1,Z_2$ 独立且均服从 $N(0,1)$，于是
$
U=Z_1^2+Z_2^2=\frac{X^2+Y^2}{\sigma^2}\sim \chi^2(2).
$

$\chi^2(2)$ 的密度函数为
$
f_U(u)=\frac12 e^{-u/2},\quad u>0.
$

又
$
R=\sqrt{X^2+Y^2}=\sigma\sqrt{U},
$
所以
$
E(R)=\sigma E\left(\sqrt{U}\right)
=\sigma\int_0^{+\infty}\sqrt{u}\cdot\frac12 e^{-u/2}\,du.
$

令 $t=\frac{u}{2}$，则 $u=2t$，$du=2dt$，于是
$
\begin{aligned}
E(R)
&=\sigma\int_0^{+\infty}\sqrt{2t}\,e^{-t}\,dt \\
&=\sigma\sqrt2\int_0^{+\infty}t^{1/2}e^{-t}\,dt \\
&=\sigma\sqrt2\,\Gamma\left(\frac32\right) \\
&=\sigma\sqrt2\cdot\frac{\sqrt{\pi}}{2} \\
&=\sigma\sqrt{\frac{\pi}{2}}.
\end{aligned}
$

等价地，$R=\sqrt{X^2+Y^2}$ 的密度为
$
f_R(r)=\frac{r}{\sigma^2}e^{-\frac{r^2}{2\sigma^2}},\quad r>0,
$
其期望正是 Rayleigh 分布的一阶矩。

**易错点**：
- 不能把期望与根号交换：
$
E\sqrt{X^2+Y^2}\neq \sqrt{E(X^2)+E(Y^2)}=\sqrt{2}\sigma.
$
注意 $\sqrt{\pi/2}\approx1.253$，而 $\sqrt2\approx1.414$。
- 标准正态情形 $X,Y\sim N(0,1)$ 时，期望是 $\sqrt{\pi/2}$；若方差为 $\sigma^2$，要再乘 $\sigma$，而不是乘 $\sigma^2$。
- 不要把 $\chi^2(2)$ 的密度写成 $e^{-u}$，其正确形式是 $\frac12 e^{-u/2}$。
- 计算 $\Gamma\left(\frac32\right)$ 时注意：
$
\Gamma\left(\frac32\right)=\frac12\Gamma\left(\frac12\right)=\frac{\sqrt{\pi}}{2}.
$

**命题规律**：
本题核心考点是“独立正态变量平方和的分布”与“Rayleigh 分布”。常见变式包括求 $E\left[\left(X^2+Y^2\right)^k\right]$、$P\left(\sqrt{X^2+Y^2}\le r\right)$、二维随机点落入圆域的概率等。复习时应熟练掌握正态分布与 $\chi^2$ 分布的转化，以及用 $\Gamma$ 函数求随机变量函数期望的方法。

**知识点**：
独立正态变量、卡方分布、瑞利分布、Gamma函数

---

> 来源：方浩概率统计进阶500题做题本 第187页 · C组
