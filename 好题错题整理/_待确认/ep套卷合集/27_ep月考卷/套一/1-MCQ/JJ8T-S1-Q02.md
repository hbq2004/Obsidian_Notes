---
ctime: 2026-08-18 02:29:13
mtime: 2026-08-18 02:29:13
tags:
  - AM
  - 27_ep月考卷/套一/MCQ
  - 概念题
  - 极限存在性
  - 左右极限
  - 有界函数乘无穷小
  - 夹逼准则
  - 反正切函数极限
points:
level:
---

# MCQ 第 2 题

![[_Attachments/题目识别/JJ8T/JJ8T-S1-Q02_题目.png|题目]]

2. 下列选项中极限存在的是()

A. $\lim\limits_{x\to0} \frac{\sin x}{|x|} \arctan \frac{1}{|x|}$

B. $\lim\limits_{x\to\infty} \frac{|\sin x|}{x} \arctan \frac{1}{x}$

C. $\lim\limits_{x\to0^+} \frac{|\sin x|}{|x|} \arctan \frac{1}{x}$

D. $\lim\limits_{x\to0} \frac{\sin x}{x} \arctan \frac{1}{x}$


---

## DeepSeek V4 Flash Max

【考点】本题考查极限存在性判断。核心工具：左右极限一致、夹逼准则、有界变量与无穷小之积为无穷小。算法竞赛类比：先看“振荡因子”是否被“衰减因子”控制，如 $|\sin x|$ 虽振荡但有界，乘以趋于 $0$ 的因子即可收敛。

【解】

**A 项：** $x\to0$ 时，$\sin x/x\to1$，故
$$
\frac{\sin x}{|x|}=\frac{\sin x}{x}\cdot\frac{x}{|x|}
=\frac{\sin x}{x}\operatorname{sgn}x.
$$
因此 $x\to0^-$ 时趋于 $-1$，$x\to0^+$ 时趋于 $1$。又 $\arctan\frac1{|x|}\to\frac\pi2$，所以左极限 $-\frac\pi2$、右极限 $\frac\pi2$，不相等。A 不存在。

**B 项：** 注意 $|\sin x|\le1$，且 $|\arctan t|\le|t|$。令 $t=1/x$，有 $|\arctan(1/x)|\le1/|x|$。于是
$$
\left|\frac{|\sin x|}{x}\arctan\frac1x\right|
\le \frac1{|x|}\cdot\frac1{|x|}=\frac1{x^2}\to0\quad(x\to\infty).
$$
由夹逼准则，B 的极限为 $0$。B 存在。

**C 项：** $x\to0^+$ 时，$|x|=x$，$|\sin x|=\sin x$，所以
$$
\frac{|\sin x|}{|x|}=\frac{\sin x}{x}\to1,
$$
且 $\arctan\frac1x\to\frac\pi2$。故 C 的极限为 $\frac\pi2$。C 存在。

**D 项：** $\sin x/x\to1$，但 $\arctan(1/x)$ 在 $x\to0$ 处无极限：$x\to0^-$ 时趋于 $-\frac\pi2$，$x\to0^+$ 时趋于 $\frac\pi2$。因此 D 的左、右极限分别为 $-\frac\pi2$、$\frac\pi2$，不存在。

【答案】按题面严格计算，极限存在的是 **B、C**。若本题被设置为单选题，则题面存在两个正确项，说明原题选项或 OCR 可能有误，请核对原卷。

【易错点】
1. 不要把 $\arctan(1/x)$ 在 $x\to0$ 处直接当成 $0$，它左右极限不同；但 $x\to0^+$ 时其极限为 $\pi/2$。
2. 不要认为 $|\sin x|$ 振荡就一定无极限；当它乘以趋于 $0$ 的因子时，可以用夹逼准则判断为 $0$。
3. 注意单侧极限与双侧极限的区分，A、D 都是因左右极限不一致而不存在；C 只取 $0^+$ 才存在。
4. 若原卷要求单选，则 B、C 同时正确，需检查选项 C 是否实际为 $x\to0$ 或 $x\to0^-$，或 B 的 $x$ 是否应为 $0$。题面按所给 LaTeX 理解（OCR 疑误，请核对原书）。

【命题规律】此类题常考“表面振荡/无极限”与“乘以无穷小或取单侧后收敛”的辨析。复习时要熟练使用夹逼准则、等价无穷小、反正切/反三角在无穷远和 $0$ 处的极限，并注意单侧极限。建议把 $\lim\limits_{x\to0^{\pm}}\arctan\frac1x$ 和 $\lim\limits_{x\to\infty}\arctan x$ 的值记熟。
