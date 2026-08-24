---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - AM
  - 26_李林六套卷/卷一/FIB
  - 计算题
  - 幂指函数极限
  - 等价无穷小替换
  - 积分中值定理
  - 连续函数极限
points:
level:
---

# 填空题 第 11 题

![[_Attachments/题目识别/LL6T/LL6T-S1-Q11_题目.png|题目]]

$(II)$ 设 $f(x)$ 是连续函数，且 $\lim_{x \to \infty} f(x) = \frac{1}{e}$，若正数 $a$ 满足 $\lim_{x \to \infty} (\cos \frac{a}{x})^{x^2} = \lim_{x \to \infty} \int_x^{x+1} f(t)dt$，则 $a = \_\_\_\_$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S1-Q11_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】: 
$$
\boxed{a=\sqrt{2}}
$$

**解题切入点**

左边是 $1^\infty$ 型幂指函数极限，取对数后用 $\ln\cos u\sim -\frac{u^2}{2}$（$u\to0$）展开；右边是长度为 $1$ 的区间积分，连续函数极限已知，用积分中值定理转化为 $f(\xi_x)$ 的极限。类似算法竞赛中“把表达式化简到同阶项/用已知端点值”的处理。

**推演**

设
$$
L=\lim_{x\to\infty}\left(\cos\frac{a}{x}\right)^{x^2}.
$$
取对数：
$$
\ln L=\lim_{x\to\infty}x^2\ln\cos\frac{a}{x}.
$$
令 $u=\frac{a}{x}\to0$，由
$$
\cos u=1-\frac{u^2}{2}+o(u^2),\qquad \ln(1+v)=v+o(v)\ (v\to0),
$$
得
$$
\ln\cos u=-\frac{u^2}{2}+o(u^2)=-\frac{a^2}{2x^2}+o\left(\frac{1}{x^2}\right).
$$
故
$$
x^2\ln\cos\frac{a}{x}\to -\frac{a^2}{2},
$$
即
$$
L=e^{-a^2/2}.
$$

右端：
因为 $f$ 连续，由积分中值定理，存在 $\xi_x\in(x,x+1)$，使得
$$
\int_x^{x+1}f(t)\,dt=f(\xi_x).
$$
当 $x\to\infty$ 时 $\xi_x\to\infty$，又 $\lim_{t\to\infty}f(t)=\frac{1}{e}$，所以
$$
\lim_{x\to\infty}\int_x^{x+1}f(t)\,dt=\frac{1}{e}.
$$

由题意：
$$
e^{-a^2/2}=\frac{1}{e}=e^{-1},
$$
故
$$
-\frac{a^2}{2}=-1\Rightarrow a^2=2.
$$
又 $a>0$，所以
$$
a=\sqrt{2}.
$$

**易错点**

1. $\ln\cos u$ 要展开到与 $x^2$ 匹配的阶：$\ln\cos u=-\frac{u^2}{2}+o(u^2)$，若只写 $\cos u-1$ 会丢掉系数；但 $o(1/x^2)$ 项乘 $x^2$ 后不影响极限。
2. 右边不要用 $\frac{f(x+1)+f(x)}{2}$ 等随意近似；用积分中值定理严格保证存在 $\xi_x$。
3. 解 $a^2=2$ 时勿丢正数条件：$a>0$，所以应填 $\sqrt{2}$，不是 $\pm\sqrt{2}$。

**命题规律**

这是“幂指函数极限 + 定积分极限”的小综合题，属于高频基础题。李林卷常把 $1^\infty$ 极限与积分中值定理、已知极限结合；复习时熟练掌握 $\ln(1+u)$、$\cos u$ 的泰勒展开到二阶，以及“积分中值定理”在极限题中的用法即可秒杀。


> 来源：《26_李林六套卷（数一）》卷一 第 11 题
