---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - AM
  - 26_姜晓千四套卷/卷二/FIB
  - 计算题
  - 积分中值定理
  - 泰勒展开
  - 变上限积分求导
  - 参数极限
  - 无穷小比阶
points:
level:
---

# FIB 第 11 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S2-Q11_题目.png|题目]]

设当 $x>0$ 时,存在 $\theta \in (0,1)$,使得 $\int_0^x e^{t^2} dt = x e^{(\theta x)^2}$,则 $\lim_{x \to 0^+} \theta =$ \_\_\_\_\_\_\_\_.

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S2-Q11_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由积分中值定理和泰勒展开，比较最低阶非零项，得 $\theta^2\to\frac{1}{3}$，且 $\theta>0$，故 $\theta\to\frac{1}{\sqrt{3}}$。

填空题【答案】:
$$\boxed{\frac{1}{\sqrt{3}}}$$

**解题切入点**

本题本质是“平均值 $\frac{1}{x}\int_0^x e^{t^2}dt$ 与 $e^{(\theta x)^2}$ 在 $x\to0^+$ 时比较”。类似算法竞赛中比较展开式的低阶项：把两边都展开到 $x^3$，再取极限确定参数。

**推演**

设 $F(x)=\int_0^x e^{t^2}dt$。由积分中值定理，存在 $\xi_x\in(0,x)$，使
$$F(x)=x e^{\xi_x^2}.$$
题设中的 $\theta x=\xi_x$，故 $\theta=\xi_x/x$。

将 $e^{t^2}$ 在 $t=0$ 处展开：
$$e^{t^2}=1+t^2+\frac{t^4}{2}+O(t^6).$$
积分得
$$F(x)=x+\frac{x^3}{3}+\frac{x^5}{10}+O(x^7).$$
又因为 $\theta\in(0,1)$，有
$$xe^{(\theta x)^2}=x\left(1+\theta^2x^2+\frac{\theta^4x^4}{2}+O(x^6)\right)=x+\theta^2x^3+\frac{\theta^4}{2}x^5+O(x^7).$$
两式相减并除以 $x^3$：
$$\frac{1}{3}+\frac{x^2}{10}+O(x^4)=\theta^2+\frac{\theta^4}{2}x^2+O(x^4).$$
令 $x\to0^+$，由于 $\theta\in(0,1)$ 有界，得
$$\lim_{x\to0^+}\theta^2=\frac{1}{3}.$$
又 $\theta>0$，所以
$$\lim_{x\to0^+}\theta=\frac{1}{\sqrt{3}}.$$

回代自检：由 $F'(x)=e^{x^2}=1+x^2+O(x^4)$ 积分得 $F(x)=x+\frac{x^3}{3}+O(x^5)$，与上面展开一致；若 $\theta\to\frac{1}{\sqrt{3}}$，$xe^{\theta^2x^2}$ 的首项也为 $x+\frac{x^3}{3}$。

给分点：写出积分中值定理并令 $\theta x=\xi$；展开到 $x^3$；取极限得 $\theta^2\to\frac{1}{3}$。

**易错点**

$\theta$ 是随 $x$ 变化的函数，不是常数，不能直接“左右两边对应项系数相等”；正确处理是除以 $x^3$ 后取极限。另外开方时注意 $\theta>0$，取正根 $\frac{1}{\sqrt{3}}$。

**命题规律**

这种题常把积分中值定理、泰勒展开和极限求参结合，本质是无穷小展开的首项比较。复习时多练“含参数的等式取极限”问题，遇到 $\frac{1}{x}\int_0^x f$ 可优先想到平均值或 Taylor 展开；注意参数往往依赖 $x$，不要误当常量。


> 来源：《26_姜晓千四套卷（数一）》卷二 第 11 题
