---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - AM
  - 26_李林六套卷/卷二/MCQ
  - 概念题
  - 极限与最大值函数
  - 变上限积分求导
  - 分段函数可导性
  - 二阶导数存在性
points:
level:
---

# 选择题 第 1 题

![[_Attachments/题目识别/LL6T/LL6T-S2-Q01_题目.png|题目]]

设 $f(x) = \lim_{n \to \infty} \frac{\ln(e^n + x^n)}{n} (x > 0)$ ，则 $F(x) = \int_1^x f(t)dt$ 在区间 $[1, +\infty)$ 上.

(A) 不连续.
(B) 连续但不可导.
(C) 可导但二阶不可导.
(D) 二阶可导.

![[_Attachments/题目识别/LL6T-答案/LL6T-S2-Q01_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由
$$\lim_{n\to\infty}(e^n+x^n)^{1/n}=\max(e,x)$$
得
$$f(x)=\ln(\max(e,x))=\max(1,\ln x)=\begin{cases}1,&0<x\le e,\\ \ln x,&x>e.\end{cases}$$

所以
$$F(x)=\int_1^x f(t)\,dt=\begin{cases}x-1,&1\le x\le e,\\ e-1+x\ln x-x,&x\ge e.\end{cases}$$

$F$ 连续且可导，但在 $x=e$ 处二阶导数不存在。

【答案】：(C)

**解题切入点**

把 $\ln(e^n+x^n)/n$ 看成 $\ln\left((e^n+x^n)^{1/n}\right)$，本质是“指数增长取最大底数”：$\lim_{n\to\infty}(a^n+b^n)^{1/n}=\max(a,b)$。算法竞赛中类似“复杂度只由最大指数项决定”。先化出分段函数，再研究变上限积分可导性。

**推演**

1. 求 $f(x)$：
   - 若 $0<x\le e$，则 $x^n\le e^n$，于是 $e^n\le e^n+x^n\le 2e^n$，取对数除以 $n$ 后夹逼得 $f(x)=1$。
   - 若 $x>e$，则 $e^n<x^n$，同理 $x^n\le e^n+x^n\le 2x^n$，夹逼得 $f(x)=\ln x$。
   在 $x=e$ 两种表达式均为 $1$，故
   $$f(x)=\begin{cases}1,&0<x\le e,\\ \ln x,&x>e.\end{cases}$$

2. 求 $F(x)$：
   - $1\le x\le e$：$F(x)=\int_1^x 1\,dt=x-1$。
   - $x\ge e$：$F(x)=\int_1^e1\,dt+\int_e^x\ln t\,dt=e-1+x\ln x-x$。
   合写为
   $$F(x)=\begin{cases}x-1,&1\le x\le e,\\ e-1+x\ln x-x,&x\ge e.\end{cases}$$

3. 可导性：
   - $F$ 在两段内显然连续、可导；
   - 在 $x=e$ 处：
     $$F'_-(e)=1,\qquad F'_+(e)=\ln e=1,$$
     故 $F'(e)=1$。回代自检：$F'(x)=f(x)$，确实得到
     $$F'(x)=\begin{cases}1,&1<x<e,\\ \ln x,&x>e.\end{cases}$$

4. 二阶导数：
   - 当 $1<x<e$ 时，$F''(x)=0$；当 $x>e$ 时，$F''(x)=1/x$。
   - 在 $x=e$ 处用定义：
     $$\lim_{h\to0^-}\frac{F'(e+h)-F'(e)}{h}=\lim_{h\to0^-}\frac{1-1}{h}=0,$$
     $$\lim_{h\to0^+}\frac{F'(e+h)-F'(e)}{h}=\lim_{h\to0^+}\frac{\ln(e+h)-1}{h}=\frac{1}{e}.$$
     左右极限不相等，所以 $F''(e)$ 不存在。

5. 选项判断：
   - (A) 错：$F$ 连续。
   - (B) 错：$F$ 在 $x=e$ 处可导，故不是“连续但不可导”。
   - (C) 对：可导但二阶不可导。
   - (D) 错：$F''(e)$ 不存在，故不是二阶可导。

**易错点**

- 不能只看 $e^n$，当 $x>e$ 时 $x^n$ 增长更快，$f(x)=\ln x$，否则会在 $x>e$ 处得到错误积分。
- $F$ 在分段点 $e$ 处可导，因为 $f$ 在 $e$ 处连续；不要误以为分段函数连接点一定不可导。
- 判断二阶可导不能只看 $F''$ 在两边的极限，而要用 $F'$ 在连接点的左、右导数定义；本题中左、右导数分别为 $0$ 和 $1/e$，不相等。

**命题规律**

这类题把数列极限、变上限积分、分段函数可导性串在一起，核心是先化简极限并写出分段表达式，再在连接点用定义判断导数阶数。复习时多练“$\lim (a^n+b^n)^{1/n}$”型极限和“变上限积分分段求导”的组合题，注意连接点务必单独验证。


> 来源：《26_李林六套卷（数一）》卷二 第 1 题
