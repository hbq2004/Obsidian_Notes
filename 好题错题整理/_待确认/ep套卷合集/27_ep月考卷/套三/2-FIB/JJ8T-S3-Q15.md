---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套三/FIB
  - 计算题
  - 傅里叶级数
  - 余弦级数系数
  - 分部积分
  - 三角函数积分
  - 级数求和
points:
level:
---

# FIB 第 15 题

![[_Attachments/题目识别/JJ8T/JJ8T-S3-Q15_题目.png|题目]]

15. 设 $f(x) = 1 - x$, $x \in [0,1)$。若 $f(x) = \dfrac{a_0}{2} + \sum\limits_{n=1}^{\infty} a_n \cos n\pi x$，则 $\displaystyle \sum\limits_{n=1}^{\infty} a_{2n} = \underline{\hspace{5cm}}$.


---

## 解析（AI 生成，仅供参考）

【考点】本题考查傅里叶余弦级数系数的计算。类比算法竞赛中通过内积提取分量，这里利用系数公式 $a_n = 2\int_0^1 f(x)\cos(n\pi x)\,dx$，积分时注意奇偶性导致项消失。

【解】由余弦级数标准展开，系数为
$$
a_n = 2\int_0^1 (1-x)\cos(n\pi x)\,dx \quad (n\ge 1).
$$
设 $I_n = \int_0^1 (1-x)\cos(n\pi x)\,dx$，分部积分：令 $u=1-x$，$dv=\cos(n\pi x)dx$，则 $du=-dx$，$v=\dfrac{\sin(n\pi x)}{n\pi}$。于是
$$
I_n = \left[(1-x)\frac{\sin(n\pi x)}{n\pi}\right]_0^1 - \int_0^1 \frac{\sin(n\pi x)}{n\pi}(-dx)
= \frac{1}{n\pi}\int_0^1 \sin(n\pi x)\,dx,
$$
因为端点处 $x=0,1$ 时 $(1-x)$ 和 $\sin(n\pi x)$ 之一为0，故第一项为0。
计算正弦积分：
$$
\int_0^1 \sin(n\pi x)\,dx = \left[-\frac{\cos(n\pi x)}{n\pi}\right]_0^1 = \frac{1-\cos(n\pi)}{n\pi} = \frac{1-(-1)^n}{n\pi}.
$$
所以
$$
I_n = \frac{1-(-1)^n}{n^2\pi^2}, \quad a_n = 2I_n = \frac{2(1-(-1)^n)}{n^2\pi^2}.
$$
当 $n$ 为偶数时，$(-1)^n=1$，故 $a_n=0$。特别地，对 $a_{2n}$（$n\ge1$），都有 $a_{2n}=0$。
因此
$$
\sum_{n=1}^{\infty} a_{2n} = 0.
$$

【答案】
$$
\boxed{0}
$$

【易错点】① 余弦级数系数公式容易漏乘2，需记住 $a_n = \dfrac{2}{L}\int_0^L f(x)\cos\frac{n\pi x}{L}dx$，此处 $L=1$。② 分部积分时符号易错，务必检查端点项为零。③ 本题关键在于发现偶数项系数全为0，无需复杂求和。若误算为一般积分则易出错。题面按 $f(x)=1-x$，$x\in[0,1)$ 理解（OCR 疑误，请核对原书）。

【命题规律】考研数学常将傅里叶级数与定积分计算结合，考查系数公式和奇偶性。复习时应熟练掌握系数公式、分部积分，以及三角函数在整数倍周期上的积分性质。此类题往往结果简洁，但中间步骤不可缺。

> AI 生成，仅供参考。

