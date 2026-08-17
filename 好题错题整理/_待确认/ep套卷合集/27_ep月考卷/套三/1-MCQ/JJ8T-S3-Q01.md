---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套三/MCQ
  - 计算题
  - 无穷小量阶的比较
  - 等价无穷小
  - 泰勒展开
  - 变上限积分
points:
level:
---

# MCQ 第 1 题

![[_Attachments/题目识别/JJ8T/JJ8T-S3-Q01_题目.png|题目]]

1. 设 $\alpha = \int_{0}^{\alpha} \ln(1 - \sqrt{t}) \, dt$, $\beta = x^{2} - 4x^{3}$, $\gamma = \sqrt[3]{1 + x - 1}$, 以上无穷小量从低阶到高阶的排序是(\_)。
A. $\alpha, \beta, \gamma$
B. $\alpha, \gamma, \beta$
C. $\gamma, \alpha, \beta$
D. $\gamma, \beta, \alpha$


---

## 解析（AI 生成，仅供参考）

【考点】本题考查无穷小量阶的比较，核心是看 $x\to0$ 时每个量等价于哪个 $Cx^k$。类比算法竞赛比较时间复杂度 $O(n^1),O(n^{3/2}),O(n^2)$，阶数 $k$ 就是衰减/增长的幂次；积分型无穷小先对被积函数做泰勒展开再逐项积分。

【解】

设 $x\to0^+$。

1. 对 $\alpha=\int_0^x\ln(1-\sqrt t)\,dt$，当 $t\to0$ 时
$$
\ln(1-\sqrt t)=-\sqrt t-\frac{t}{2}-\frac{t^{3/2}}{3}-\cdots
$$
逐项积分：
$$
\alpha=-\frac{2}{3}x^{3/2}-\frac{1}{4}x^2-\frac{2}{15}x^{5/2}-\cdots
$$
自检：$\frac{d}{dx}\left(-\frac{2}{3}x^{3/2}\right)=-\sqrt x$，与被积函数主项一致。所以 $\alpha\sim-\frac{2}{3}x^{3/2}$，阶数为 $3/2$。

2. $\beta=x^2-4x^3=x^2(1-4x)\sim x^2$，阶数为 $2$。

3. 按最合理读法 $\gamma=\sqrt[3]{1+x}-1=(1+x)^{1/3}-1\sim\frac{1}{3}x$，阶数为 $1$。（若按题面字面 $\sqrt[3]{1+x-1}=x^{1/3}$ 理解，阶数为 $1/3$，仍小于 $3/2$，排序不变。）

阶数排序：$1<3/2<2$，对应 $\gamma,\alpha,\beta$，所以从低阶到高阶为 $\gamma,\alpha,\beta$。

【答案】(C) $\gamma,\alpha,\beta$。

- A 错：$\gamma$ 是低阶而非最高阶，$\alpha$ 不是最低阶。
- B 错：$\gamma$ 比 $\alpha$ 低阶，不能排在 $\alpha$ 之后。
- C 对：阶数 $1<3/2<2$，顺序正确。
- D 错：$\alpha$ 的阶数低于 $\beta$，应排在 $\beta$ 之前。

【易错点】易把“从低阶到高阶”理解成“从高阶到低阶”；不要把 $\beta$ 中的 $x^2$ 与 $-4x^3$ 混合项看错主项；对 $\alpha$ 要先展开 $\ln(1-\sqrt t)$，不能直接代入 $t=0$。题面按 $\alpha=\int_0^x\ln(1-\sqrt t)\,dt$、$\gamma=\sqrt[3]{1+x}-1$ 理解（OCR 疑误，请核对原书）。

【命题规律】此类题常把幂函数、变上限积分、根式组合在一起，用等价无穷小或泰勒展开比较阶数。复习时记住常见展开：$\ln(1+u)\sim u$，$(1+u)^a-1\sim au$，并会逐项积分确定阶数。

> AI 生成，仅供参考。

