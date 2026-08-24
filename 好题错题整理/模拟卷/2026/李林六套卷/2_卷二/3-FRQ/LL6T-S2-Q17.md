---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - AM
  - 26_李林六套卷/卷二/FRQ
  - 计算题
  - 积分极限与函数极限
  - 泰勒展开
  - 等价无穷小
  - 对数恒等变换
points:
level:
---

# 解答题 第 17 题

![[_Attachments/题目识别/LL6T/LL6T-S2-Q17_题目.png|题目]]

设 $a(a>-1)$ 为非零常数，$$\lim_{x\to+\infty} \frac{\int_{1}^{x}[(t+a)^{1+\frac{1}{t}} - t^{1+\frac{1}{t+a}}]dt}{x} = 1$$，求 $a$ 的值.

![[_Attachments/题目识别/LL6T-答案/LL6T-S2-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
由渐近分析可得 $a=1$。关键给分点：①将被积函数差分解为指数形式并取对数；②正确展开到 $1/t$ 阶；③得到极限 $\lim_{t\to+\infty} f(t)=a$；④由积分极限等于1，得 $a=1$。

**解题切入点**
本题本质是求被积函数在无穷远处的渐近行为，类似于算法竞赛中“估计复杂度主项”。由于积分除以 $x$ 的极限存在且非零，说明被积函数趋于常数，故只需求 $\lim_{t\to+\infty} f(t)$ 即可。

**推演**
设 $f(t)=(t+a)^{1+1/t}-t^{1+1/(t+a)}$。令 $A=(t+a)^{1+1/t}, B=t^{1+1/(t+a)}$。
取对数：
$$ \ln A = (1+1/t)\ln(t+a), \quad \ln B = (1+1/(t+a))\ln t. $$
于是
$$ \Delta = \ln A-\ln B = \ln(1+a/t)+\frac{\ln(t+a)}{t}-\frac{\ln t}{t+a}. $$
进一步：
$$ \Delta = \ln(1+a/t)+\frac{\ln t}{t}+\frac{\ln(1+a/t)}{t}-\frac{\ln t}{t+a} = \ln(1+a/t)+\frac{\ln(1+a/t)}{t}+\frac{a\ln t}{t(t+a)}. $$
当 $t\to+\infty$ 时，$\ln(1+a/t)\sim a/t$，且后两项均为 $O(\ln t/t^2)$，所以
$$ \Delta = \frac{a}{t}+O\left(\frac{\ln t}{t^2}\right). $$
因此
$$ f(t)=B(e^{\Delta}-1) \sim t\cdot \frac{a}{t}=a. $$
所以 $\lim_{t\to+\infty} f(t)=a$。

对积分除以 $x$ 取极限：
$$ \lim_{x\to+\infty}\frac{1}{x}\int_1^x f(t)\,dt = \lim_{x\to+\infty}\frac{1}{x}\int_1^x (a+o(1))\,dt = a. $$
由题设该极限等于 $1$，得 $a=1$，且满足 $a>-1$ 且非零。

**易错点**
① 容易误用洛必达法则，但直接求导不能得到简洁形式；② 忽略 $o(1/t)$ 的误差，可能得到错误极限；③ 忘记检查 $a$ 的范围，但 $a=1$ 满足；④ 注意 $B\sim t$，不能只取 $B\approx t$ 而不乘入展开。

**命题规律**
此类题目常以“积分极限 + 参数确定”形式出现，考查无穷小展开与极限运算。复习时应熟练运用 $e$ 的幂代换、等价无穷小展开，并掌握“若 $\int_1^x f(t)dt/x \to L$，则 $f(t)$ 趋于 $L$”的直觉（但需严格化）。


> 来源：《26_李林六套卷（数一）》卷二 第 17 题
