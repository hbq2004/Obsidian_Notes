---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷四/FRQ
  - 计算题
  - 复合函数求导
  - 分部积分
  - 换元积分法
  - 不定积分常数
points:
level:
---

# FRQ 第 17 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S4-Q17_题目.png|题目]]

设 $f'(\mathrm{e}^x)=\sin x$，求 $f(x)$ 的表达式.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S4-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

解答题【答案】：在题设可确定的定义域 $(0,+\infty)$ 上，$f(x)=\frac{x}{2}\left(\sin(\ln x)-\cos(\ln x)\right)+C$，其中 $C$ 为任意常数。

关键给分点：① 令 $g(x)=f(\mathrm e^x)$ 并用链式法则求导；② 正确计算 $\int \mathrm e^x\sin x\,dx$；③ 回代 $x=\ln t$ 并注明定义域。

**解题切入点**

题面把 $f'$ 的输入包装成 $\mathrm e^x$，就像算法中键被哈希变换过；先还原键 $t=\mathrm e^x$ 或直接对 $f(\mathrm e^x)$ 求导。核心是链式法则与不定积分：

$$g(x)=f(\mathrm e^x)\Rightarrow g'(x)=\mathrm e^x\sin x.$$

**推演**

（1）令 $g(x)=f(\mathrm e^x)$，则
$$g'(x)=f'(\mathrm e^x)\cdot \mathrm e^x=\mathrm e^x\sin x.$$
（给分点：链式求导，不要丢掉因子 $\mathrm e^x$。）

（2）计算 $I=\int \mathrm e^x\sin x\,dx$。设 $J=\int \mathrm e^x\cos x\,dx$，分部积分得（以下暂不写常数，最后补 $C$）
$$I=\mathrm e^x\sin x-J,\qquad J=\mathrm e^x\cos x+I.$$
因此
$$2I=\mathrm e^x(\sin x-\cos x),\quad I=\frac12\mathrm e^x(\sin x-\cos x)+C.$$
（给分点：分部积分结果。）

（3）所以
$$f(\mathrm e^x)=g(x)=\frac12\mathrm e^x(\sin x-\cos x)+C.$$
令 $t=\mathrm e^x>0$，则 $x=\ln t$，回代得
$$f(t)=\frac12 t(\sin(\ln t)-\cos(\ln t))+C.$$
把 $t$ 改写为 $x$，即
$$f(x)=\frac{x}{2}\left(\sin(\ln x)-\cos(\ln x)\right)+C,\quad x>0.$$
（给分点：回代并写出定义域。）

（4）自检：对右式求导得 $f'(x)=\sin(\ln x)$，于是 $f'(\mathrm e^x)=\sin(\ln \mathrm e^x)=\sin x$，满足题设。

**易错点**

- 混淆 $f'(\mathrm e^x)$ 与 $(f(\mathrm e^x))'$：后者是复合函数求导，会多乘因子 $\mathrm e^x$。
- 对 $g(x)$ 求导时丢掉 $\mathrm e^x$，导致积分对象错误。
- 漏掉任意常数 $C$；不定积分结果必须带 $C$。
- 忽略定义域：$\ln x$ 要求 $x>0$，故表达式只在 $(0,+\infty)$ 上由题给条件确定。

**命题规律**

此类题考查“抽象函数复合具体函数”的链式法则与不定积分，属于高频基础题。复习时应熟练 $\int \mathrm e^{ax}\sin bx\,dx$ 与 $\int \mathrm e^{ax}\cos bx\,dx$ 的表格积分法，并养成求导回代检验的习惯。


> 来源：《26_张宇八套卷（数一）》卷四 第 17 题
