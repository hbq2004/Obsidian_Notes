---
ctime: 2026-08-24 13:30:19
mtime: 2026-08-24 13:30:19
tags:
  - AM
  - 26_张宇八套卷/卷一/MCQ
  - 计算题
  - 无穷小量阶数
  - 等价无穷小
  - 泰勒展开
  - 变限积分
  - 积分近似估计
points:
level:
---

# MCQ 第 1 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S1-Q01_题目.png|题目]]

符合题目要求的.

1. 当 $x \to 0$ 时,以下无穷小量阶数最高的是 ( ) .

A. $\int_{0}^{\sin x} \left[(1+t)^t - 1\right] \mathrm{d}t$ .

B. $\int_{0}^{\sin x^2} (1+t)^{\frac{1}{t}} \mathrm{d}t$ .

C. $\int_{0}^{\sin x} \left[\mathrm{e} - (1+t)^{\frac{1}{t}}\right] \mathrm{d}t$ .

D. $\int_{0}^{\sin^2 x} (t\mathrm{e}^t - t) \mathrm{d}t$ .

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S1-Q01_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(D)

【推演】(速判)

- (A) 被积函数 $(1+t)^t-1\sim t^2$，上限 $\sin x\sim x$，故 $I_A\sim \frac{1}{3}x^3$，为 3 阶无穷小。
- (B) 被积函数 $(1+t)^{1/t}\to e$，上限 $\sin x^2\sim x^2$，故 $I_B\sim e x^2$，为 2 阶无穷小。
- (C) $e-(1+t)^{1/t}\sim \frac{e}{2}t$，上限 $\sin x\sim x$，故 $I_C\sim \frac{e}{4}x^2$，为 2 阶无穷小。
- (D) $te^t-t\sim t^2$，上限 $\sin^2x\sim x^2$，故 $I_D\sim \frac{1}{3}x^6$，为 6 阶无穷小。

最高阶为 (D)。

**解题切入点**

核心是估计变上限积分的阶：若 $u(x)\sim x^q$，且 $f(t)\sim C t^p$，则
$$\int_0^{u(x)}f(t)\,\mathrm{d}t \sim \frac{C}{p+1}x^{q(p+1)}.$$
这类似于算法竞赛中“看数据范围定复杂度”：上限提供 $q$ 次，被积函数提供 $p$ 次，总阶数为 $q(p+1)$。

**推演**

(1) 选项 A：
令 $f_A(t)=(1+t)^t-1=e^{t\ln(1+t)}-1$。
由 $\ln(1+t)=t-\frac{t^2}{2}+O(t^3)$，得
$$t\ln(1+t)=t^2+O(t^3),$$
所以
$$f_A(t)=t^2+O(t^3).$$
于是
$$I_A=\int_0^{\sin x}[t^2+O(t^3)]\,\mathrm{d}t =\frac{(\sin x)^3}{3}+O((\sin x)^4)=\frac{x^3}{3}+O(x^4).$$
故 $I_A$ 为 3 阶无穷小。

(2) 选项 B：
$$f_B(t)=(1+t)^{1/t}=e^{\frac{\ln(1+t)}{t}} =e^{1-\frac{t}{2}+O(t^2)}=e-\frac{e}{2}t+O(t^2).$$
注意 $f_B(0)=e\neq0$，因此
$$I_B=\int_0^{\sin x^2}f_B(t)\,\mathrm{d}t =e\sin x^2+O((\sin x^2)^2)=e x^2+O(x^4).$$
故 $I_B$ 为 2 阶无穷小。

(3) 选项 C：
由上面的展开：
$$e-(1+t)^{1/t}=\frac{e}{2}t+O(t^2).$$
所以
$$I_C=\int_0^{\sin x}\left[\frac{e}{2}t+O(t^2)\right]\,\mathrm{d}t =\frac{e}{4}\sin^2x+O(\sin^3x)=\frac{e}{4}x^2+O(x^3).$$
故 $I_C$ 为 2 阶无穷小。

(4) 选项 D：
$$f_D(t)=t(e^t-1)=t^2+O(t^3).$$
上限 $\sin^2x\sim x^2$，所以
$$I_D=\int_0^{\sin^2x}[t^2+O(t^3)]\,\mathrm{d}t =\frac{(\sin^2x)^3}{3}+O((\sin^2x)^4)=\frac{x^6}{3}+O(x^8).$$
故 $I_D$ 为 6 阶无穷小。

（自检：对 D 求导，设 $u=\sin^2x$，则 $F_D'(x)=(ue^u-u)\cdot 2\sin x\cos x$，主项为 $x^4\cdot 2x=2x^5$，积分回代得 $F_D(x)\sim \frac{2}{6}x^6=\frac{1}{3}x^6$，与上面一致。）

比较：$3,2,2,6$ 中最大指数为 6，因此选 (D)。

**易错点**

- 不能只看积分上限：A 上限是 $x$，B 上限是 $x^2$，但 B 的被积函数趋于常数 $e$，积分后仍只有 2 阶；A 的被积函数是 $t^2$，积分后反而到 3 阶。
- 注意 $e-(1+t)^{1/t}$ 的常数项被消掉，留下的是 $\frac{e}{2}t$，所以 C 不是最高阶。
- 运算时要把“被积函数阶数 +1”再乘以上限阶数，不要漏掉 +1。

**命题规律**

无穷小量阶数比较是高频小题，常把变限积分、泰勒展开、等价无穷小组合在一起。复习时熟练记忆 $e^u-1\sim u$、$\ln(1+u)\sim u$、$(1+u)^\lambda-1\sim \lambda u$ 等基本展开；看到变限积分，先分别估计被积函数阶数和上限阶数。本题套路是“四选一”，但真正区分度在 D 被积函数和上限双重贡献。


> 来源：《26_张宇八套卷（数一）》卷一 第 1 题
