---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - PS
  - 26_张宇八套卷/卷六/FIB
  - 计算题
  - 均匀分布密度
  - 最大似然估计
  - 样本极值分布
  - 似然函数分段
  - 参数变换估计
points:
level:
---

# FIB 第 16 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S6-Q16_题目.png|题目]]

设总体 $X$ 的概率密度为 $f(x)=\begin{cases} \alpha^2, & 0 < x < \alpha \\ 0, & \text{其他} \end{cases}$, 其中 $\alpha(\alpha > 1)$ 是未知参数, $X_1, X_2, \cdots, X_n$ 是来自总体 $X$ 的简单随机样本. 记 $p = P\{0 < X < \sqrt{\alpha}\}$, $X_{(1)} = \min\{X_1, X_2, \cdots, X_n\}$, $X_{(n)} = \max\{X_1, X_2, \cdots, X_n\}$, 则 $p$ 的最大似然估计量 $\hat{p}$ 为 \_\_\_\_\_\_.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S6-Q16_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

令 $\alpha=L$，由题设 $f(x)=\alpha^2$ 在 $0<x<\alpha$ 上为常数，必须满足

$$
\int_0^\alpha f(x)\,dx=\alpha^2\cdot\alpha=\alpha^3=1,
$$

故 $\alpha=1$。但这与题设 $\alpha>1$ 矛盾。因此所给密度不是合法概率密度，题目存在明显题干错误。若按最常见合理读法（应为 $f(x)=\dfrac1\alpha,\ 0<x<\alpha$）理解，则：

总体 $X\sim U(0,\alpha)$，

$$
p=P\{0<X<\sqrt{\alpha}\}=\int_0^{\sqrt\alpha}\frac1\alpha\,dx=\frac{\sqrt\alpha}{\alpha}=\alpha^{-1/2}.
$$

求 $p$ 的最大似然估计可用参数不变性：先求 $\alpha$ 的 MLE。似然函数为

$$
L(\alpha)=\frac1{\alpha^n} I\{0<X_{(1)}\le X_{(n)}<\alpha\},\qquad \alpha>X_{(n)}.
$$

在 $\alpha>X_{(n)}$ 时 $L(\alpha)=\alpha^{-n}$ 单调递减，所以

$$
\hat\alpha=X_{(n)}.
$$

由最大似然估计的不变性，

$$
\hat p=\hat\alpha^{-1/2}=X_{(n)}^{-1/2}.
$$

因此横线处应填：

$$
\boxed{\hat p=\dfrac{1}{\sqrt{X_{(n)}}}}
$$

---

**解题切入点**

本题是“先由密度确定分布类型，再求参数 $p$ 的 MLE”。密度在区间内为常数，即均匀分布；求事件概率等价于区间长度比；MLE 的单调递减结构类似算法竞赛中二分答案或贪心取边界：在可行域内取最小允许值 $X_{(n)}$。

---

**推演**

1. 密度合法性检查：原题 $f(x)=\alpha^2,\ 0<x<\alpha$，则

$$
\int_{-\infty}^{+\infty} f(x)\,dx=\alpha^2\cdot\alpha=\alpha^3.
$$

必须有 $\alpha^3=1$，得 $\alpha=1$，与 $\alpha>1$ 矛盾，故原题面无法作为概率密度。

2. 按合理修正 $f(x)=1/\alpha,\ 0<x<\alpha$ 求解：总体为 $U(0,\alpha)$。

3. 求 $p$：

$$
p=P\{0<X<\sqrt{\alpha}\}=\int_0^{\sqrt{\alpha}}\frac1\alpha\,dx=\frac{\sqrt\alpha}{\alpha}=\frac1{\sqrt\alpha}.
$$

4. 求 $\alpha$ 的 MLE。样本联合密度为

$$
L(\alpha)=\prod_{i=1}^n \frac1\alpha I\{0<X_i<\alpha\}
=\alpha^{-n} I\{0<X_{(1)},\ X_{(n)}<\alpha\}.
$$

因此 $\alpha$ 必须满足 $\alpha>X_{(n)}$；在此条件下似然函数 $\alpha^{-n}$ 关于 $\alpha$ 单调递减，故最大值在最小的可行 $\alpha$ 处取得，即

$$
\hat\alpha=X_{(n)}.
$$

5. 由 MLE 的不变性，$p=g(\alpha)=\alpha^{-1/2}$ 的 MLE 为

$$
\hat p=g(\hat\alpha)=\left(X_{(n)}\right)^{-1/2}=\frac1{\sqrt{X_{(n)}}}.
$$

---

**易错点**

- 不要把 $\hat\alpha$ 误算为 $\bar X$；因为密度不是指数族中的常规形式，最大似然由最大值 $X_{(n)}$ 决定，类似算法中的区间约束取边界。
- 求 $\alpha$ 的 MLE 时不能忽略指示函数 $I\{\alpha>X_{(n)}\}$，否则直接对 $\alpha^{-n}$ 求导会得到错误结果。
- 用不变性求 $\hat p$ 时，注意 $\sqrt{\alpha}$ 是增函数，$1/\sqrt{\alpha}$ 是减函数，应代入 $\hat\alpha$ 而非对样本再取均值。
- 本题原密度不合法，若考试中遇到类似“系数与区间长度相关”的题，先做归一化检查，避免强行套公式。

---

**命题规律**

“密度为常数 + 求参数函数的 MLE”是概率统计大题常见套路，常考均匀分布、指数分布与极值统计量。复习时应掌握：区间型分布的似然函数分段写法、MLE 的不变性，以及 $X_{(n)}$ 的密度（本题虽未要求，但常作为后续问题）。遇到可疑题面，先检查密度积分是否为 $1$，再按合理修正继续。

题面按 $f(x)=1/\alpha\ (0<x<\alpha)$ 理解（OCR 疑误，请核对原书）。


> 来源：《26_张宇八套卷（数一）》卷六 第 16 题
