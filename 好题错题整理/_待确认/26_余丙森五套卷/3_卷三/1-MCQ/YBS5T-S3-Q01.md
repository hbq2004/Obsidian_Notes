---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷三/MCQ
  - 计算题
  - 无穷小比阶
  - 幂指函数
  - 泰勒展开
  - 等价无穷小
  - 极限计算
points:
level:
---

# MCQ 第 1 题

![[_Attachments/题目识别/YBS5T/YBS5T-S3-Q01_题目.png|题目]]

设 $f(x) = (x+1)^x -1$, $g(x) = x^x - (\sin x)^x$, 则当 $x \to 0^+$ 时, ( ).
(A) $f(x)$ 是 $g(x)$ 的高阶无穷小
(B) $f(x)$ 是 $g(x)$ 的低阶无穷小
(C) $f(x)$ 与 $g(x)$ 是同阶非等价无穷小
(D) $f(x)$ 与 $g(x)$ 是等价无穷小

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S3-Q01_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】：(B) $f(x)$ 是 $g(x)$ 的低阶无穷小。

**解题切入点**

考查无穷小比阶。幂指函数先化为 $e^{v\ln u}$，再用泰勒展开找最低阶项；这就像算法竞赛中比较复杂度，只看增长最快的“主项”。

**推演**

1. 对 $f(x)$：
$$
x\ln(1+x)=x\left(x-\frac{x^2}{2}+O(x^3)\right)=x^2+O(x^3),
$$
所以
$$
f(x)=e^{x\ln(1+x)}-1=x^2+O(x^3)\sim x^2.
$$

2. 对 $g(x)$：
$$
g(x)=(\sin x)^x\left[\left(\frac{x}{\sin x}\right)^x-1\right],
$$
且 $(\sin x)^x\to1$。令
$$
t=x\ln\frac{x}{\sin x}
=x\left[-\ln\frac{\sin x}{x}\right]
=x\left[-\ln\left(1-\frac{x^2}{6}+O(x^4)\right)\right]
=x\left(\frac{x^2}{6}+O(x^4)\right)
=\frac{x^3}{6}+O(x^5).
$$
因此
$$
\left(\frac{x}{\sin x}\right)^x-1=e^t-1\sim t\sim\frac{x^3}{6},
$$
故
$$
g(x)\sim\frac{x^3}{6}.
$$

3. 比较：
$$
\frac{f(x)}{g(x)}\sim\frac{x^2}{x^3/6}=\frac{6}{x}\to+\infty.
$$
由无穷小比阶定义，$f(x)$ 是 $g(x)$ 的低阶无穷小。

逐一检验选项：
- (A) 高阶无穷小要求 $\lim f/g=0$，错；
- (B) 低阶无穷小要求 $\lim f/g=\infty$，正确；
- (C) 同阶非等价要求 $\lim f/g=c\ne0,1$，错；
- (D) 等价无穷小要求 $\lim f/g=1$，错。

**易错点**

- 高低阶定义易记反：$\lim \alpha/\beta=\infty$ 时，$\alpha$ 是 $\beta$ 的低阶无穷小；$\lim \alpha/\beta=0$ 时才是高阶。
- 幂指函数不能直接“底数代 1、指数代 0”，要先写成 $e^{v\ln u}$ 再展开。
- 求 $g(x)$ 时，$x^x$ 与 $(\sin x)^x$ 都趋于 1，不能认为差为 0，必须用因子提取或泰勒展开求主项。

**命题规律**

无穷小比阶是考研数学一高频基础题，常结合幂指函数、泰勒展开与极限计算。复习时熟记常见展开式，并学会找出最低阶非零项；这等价于算法竞赛中比较复杂度时的“主项比较”。


> 来源：《26_余丙森五套卷（数一）》卷三 第 1 题
