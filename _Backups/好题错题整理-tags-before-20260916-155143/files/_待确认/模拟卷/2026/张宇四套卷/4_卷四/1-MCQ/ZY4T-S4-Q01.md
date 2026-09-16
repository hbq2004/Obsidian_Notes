---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - AM
  - 26_张宇四套卷/卷四/MCQ
  - 计算题
  - 连续定义
  - 等价无穷小
  - 极限计算
  - 分段函数
points:
level:
---

# 选择题 第 1 题

![[_Attachments/题目识别/ZY4T/ZY4T-S4-Q01_题目.png|题目]]

1. 若函数 $f(x) = \begin{cases} \frac{1-\cos\sqrt{x}}{a\ln(1+x)}, & x>0 \\ b, & x \le 0 \end{cases}$ 在 $x=0$ 处连续，则
(A) $ab = \frac{1}{2}$.
(B) $ab = -\frac{1}{2}$.
(C) $ab = 0$.
(D) $ab = 2$.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S4-Q01_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
由连续性得 $ab=\dfrac12$，所以正确选项为 **(A)**。

**解题切入点**
本题是分段函数连续性，核心是右极限与函数值相等。类比程序中的“边界条件”，当 $x\to0^+$ 时用等价无穷小化简极限。

**推演**
连续要求 $\lim_{x\to0^+}f(x)=f(0)=b$。
当 $x>0$ 时，$f(x)=\frac{1-\cos\sqrt x}{a\ln(1+x)}$。
使用等价无穷小：
$1-\cos\sqrt x \sim \frac{(\sqrt x)^2}{2}=\frac{x}{2}$，
$\ln(1+x)\sim x$。
故右极限 $\lim_{x\to0^+}f(x)=\lim_{x\to0^+}\frac{x/2}{a x}=\frac{1}{2a}$（$a\ne0$）。
因此 $\frac{1}{2a}=b\Rightarrow ab=\frac12$。
选项分析：
(A) 正确。
(B) 若 $ab=-\frac12$，则 $b=-\frac1{2a}$，而右极限为 $\frac1{2a}$，不等，错误。
(C) $ab=0$，则 $b=0$ 或 $a$ 无意义？实际上右极限非零，不可能，错误。
(D) $ab=2$，则 $b=\frac2a$，右极限 $\frac1{2a}$，不等，错误。
所以仅(A)正确。

**易错点**
- 忘记 $x\to0^-$ 时函数恒为 $b$，左极限自然等于 $b$。
- 误把 $1-\cos\sqrt x$ 等价于 $(\sqrt x)^2/2$，注意是“$\sqrt x$”的平方，即 $x/2$，不是 $x^2/2$。
- 忽略 $a\ne0$ 的条件，若 $a=0$ 则右极限不存在，原题无意义。

**命题规律**
分段函数在分界点连续是高频考点，常结合等价无穷小求极限。复习时需熟练掌握 $\sin x\sim x$、$1-\cos x\sim x^2/2$、$\ln(1+x)\sim x$ 等，并注意变量代换。


> 来源：《26_张宇四套卷（数一）》卷四 第 1 题
