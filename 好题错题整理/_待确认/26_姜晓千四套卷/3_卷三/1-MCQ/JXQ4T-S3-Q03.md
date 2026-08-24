---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - AM
  - 26_姜晓千四套卷/卷三/MCQ
  - 概念题
  - 反常积分敛散性
  - 无穷限p积分
  - 瑕积分比较法
  - 等价无穷小
  - 比较判别法
points:
level:
---

# MCQ 第 3 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S3-Q03_题目.png|题目]]

设反常积分 $\int_{1}^{+\infty} \frac{dx}{x^{p} \ln^{q} x}(p > 0, q > 0)$ 收敛,则（ ）.
(A) $p > 1, q > 1$
(B) $p > 1, q < 1$
(C) $p < 1, q > 1$
(D) $p < 1, q < 1$

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S3-Q03_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(B) $p>1,\,q<1$。

**解题切入点**

反常积分要“两头看”：$x=1$ 是可能的瑕点，$x=+\infty$ 是无穷限。分别用等价无穷小和比较判别法转化为已知的 $\int t^{-q}dt$、$\int x^{-p}dx$ 型判别。

**推演**

设
$$
I=\int_1^{+\infty}\frac{dx}{x^p\ln^q x},\quad p>0,q>0.
$$
将积分拆成
$$
I=I_1+I_2,\quad I_1=\int_1^2\frac{dx}{x^p\ln^q x},\quad I_2=\int_2^{+\infty}\frac{dx}{x^p\ln^q x}.
$$

1. 瑕点 $x=1$ 处：
$$
\ln x = \ln(1+(x-1))\sim x-1\quad(x\to1^+).
$$
因此
$$
\frac{1}{x^p\ln^q x}\sim \frac{1}{(x-1)^q}.
$$
而 $\int_0^\delta \frac{dt}{t^q}$ 收敛当且仅当 $q<1$，故必须有 $q<1$。

2. 无穷远处：
- 若 $p>1$，则
$$
0<\frac{1}{x^p\ln^q x}\le \frac{1}{x^p}\quad(x\ge2),
$$
由 $\int_2^{+\infty}\frac{dx}{x^p}$ 收敛知 $I_2$ 收敛。
- 若 $p=1$，则
$$
I_2=\int_2^{+\infty}\frac{dx}{x\ln^q x}=\int_{\ln2}^{+\infty}\frac{du}{u^q},
$$
需 $q>1$ 才在无穷远处收敛；但瑕点处又需 $q<1$，矛盾，故 $p=1$ 不可能。
- 若 $p<1$，取 $\varepsilon=(1-p)/2>0$。由 $\ln^q x=o(x^\varepsilon)$，存在 $C>0$ 使 $\ln^q x\le C x^\varepsilon$（$x$ 充分大），于是
$$
\frac{1}{x^p\ln^q x}\ge \frac{1}{C x^{p+\varepsilon}}=\frac{1}{C x^{(1+p)/2}}.
$$
因 $(1+p)/2<1$，$\int_2^{+\infty}\frac{dx}{x^{(1+p)/2}}$ 发散，故 $I_2$ 发散。

3. 选项判断：
- (A) $p>1,q>1$：$p>1$ 保证无穷远收敛，但 $q>1$ 使 $x=1$ 处发散，错误。
- (B) $p>1,q<1$：两处均收敛，正确。
- (C) $p<1,q>1$：两处均发散（至少无穷远发散），错误。
- (D) $p<1,q<1$：$q<1$ 使 $x=1$ 收敛，但 $p<1$ 使无穷远发散，错误。

**易错点**

- 只注意无穷远处 $p>1$，忽略 $x=1$ 处 $\ln^q x\to0$ 带来的瑕积分，导致误选 (A)。
- 把无穷远处条件误记为“$p=1,q>1$”；实际上 $p=1,q>1$ 只解决无穷远，瑕点 $x=1$ 仍发散。
- 比较判别法放缩要注意方向：证收敛用上界，证发散用下界。

**命题规律**

本题是典型的“一题双点”反常积分参数题：有限瑕点 + 无穷限各给一个条件。复习时应掌握 $\int_0^1 x^{-q}dx$ 与 $\int_1^\infty x^{-p}dx$ 的敛散性，以及等价无穷小“$\ln x\sim x-1(x\to1)$”的运用；遇到含参对数幂，优先分段讨论。


> 来源：《26_姜晓千四套卷（数一）》卷三 第 3 题
