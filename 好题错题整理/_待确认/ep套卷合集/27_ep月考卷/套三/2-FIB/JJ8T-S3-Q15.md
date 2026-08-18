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

## DeepSeek V4 Flash Max

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

---

## V4 Flash Max 解析

**答案**: $0$。

**解题切入点**:  
题目给的是 $[0,1]$ 上的余弦级数，第一步写出系数公式：

$$a_n=2\int_0^1 f(x)\cos(n\pi x)\,dx.$$

问的是 $\sum a_{2n}$，只需看偶指标系数。直观上，$f(x)=1-x$ 做偶延拓后是三角波 $1-|x|$，三角波的 Fourier 级数只有奇次余弦项；严格算就是证明 $a_{2k}=0$。算法竞赛类比：先做“奇偶性剪枝”，发现偶数下标全为 $0$，就不必逐项求和。

**推演**:  
对 $m\ge 1$，

$$a_m=2\int_0^1(1-x)\cos(m\pi x)\,dx.$$

令 $u=1-x$，$dv=\cos(m\pi x)\,dx$，则 $v=\dfrac{\sin(m\pi x)}{m\pi}$。分部积分：

$$
\begin{aligned}
\int_0^1(1-x)\cos(m\pi x)\,dx
&=\left.(1-x)\frac{\sin(m\pi x)}{m\pi}\right|_0^1
+\frac{1}{m\pi}\int_0^1\sin(m\pi x)\,dx\\
&=\frac{1-\cos m\pi}{m^2\pi^2}.
\end{aligned}
$$

所以

$$a_m=\frac{2(1-\cos m\pi)}{m^2\pi^2}
=\frac{2\bigl(1-(-1)^m\bigr)}{m^2\pi^2}.$$

取 $m=2k$：

$$a_{2k}=\frac{2\bigl(1-(-1)^{2k}\bigr)}{(2k)^2\pi^2}=0
\quad(k=1,2,\dots).$$

因此

$$\sum_{n=1}^{\infty}a_{2n}
=\sum_{k=1}^{\infty}a_{2k}
=0.$$

**易错点**:  
- 容易漏乘系数因子 $2$。余弦级数系数是 $a_n=2\int_0^1 f(x)\cos(n\pi x)\,dx$，因为 $\int_0^1\cos^2(n\pi x)\,dx=\dfrac12$。
- 不要用 $x=1$ 处的函数值质疑系数。原函数只给 $[0,1)$，端点单点值不影响积分，也不影响 $a_n$。
- 自检：本题展开实际是

$$1-x=\frac12+\frac{4}{\pi^2}\sum_{k=0}^{\infty}\frac{\cos\bigl((2k+1)\pi x\bigr)}{(2k+1)^2},$$

令 $x=0$ 得

$$1=\frac12+\frac{4}{\pi^2}\cdot\frac{\pi^2}{8},$$

与 $f(0)=1$ 一致；展开式中确实没有偶次项。

**命题规律**:  
考的是半区间余弦级数，本质是“偶延拓 + 周期延拓”。$f(x)=1-x$ 延拓成三角波，只有奇次谐波，所以偶指标系数和为 $0$。常见变式有：令 $x=0$ 反求 $\sum \frac{1}{(2k+1)^2}$，结合 Parseval 等式求 $\sum a_n^2$，或把余弦级数换成正弦级数后重新判断奇偶项。这类题常用“奇偶延拓 + 特殊点代入”快速求解。
