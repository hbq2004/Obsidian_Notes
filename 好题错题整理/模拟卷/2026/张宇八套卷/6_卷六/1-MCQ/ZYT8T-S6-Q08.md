---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - PS
  - 26_张宇八套卷/卷六/MCQ
  - 计算题
  - 二维正态分布
  - 协方差与独立性
  - 正交线性变换
  - 三角函数恒等变换
  - 相关系数
points:
level:
---

# MCQ 第 8 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S6-Q08_题目.png|题目]]

设随机变量 $(X_1, X_2) \sim N(0, 0; \sigma_1^2, \sigma_2^2; \rho), \sigma_1 \neq \sigma_2$, 若 $Y_1 = X_1\cos\alpha + X_2\sin\alpha$ 与 $Y_2 = X_2\cos\alpha - X_1\sin\alpha$ 相互独立, $\cos 2\alpha \neq 0$, 则 $\tan 2\alpha =$.
(A) $\rho \frac{\sigma_1^2 \sigma_2^2}{\sigma_1^2 - \sigma_2^2}$.
(B) $\rho \frac{\sigma_1^2 \sigma_2^2}{\sigma_2^2 - \sigma_1^2}$.
(C) $2\rho \frac{\sigma_1\sigma_2}{\sigma_1^2 - \sigma_2^2}$.
(D) $2\rho \frac{\sigma_1\sigma_2}{\sigma_2^2 - \sigma_1^2}$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S6-Q08_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】: (D)

【推演】

$Y_1,Y_2$ 是 $(X_1,X_2)$ 的线性函数，所以 $(Y_1,Y_2)$ 仍服从二维正态分布。两个正态随机变量相互独立当且仅当它们的协方差为 $0$，因此由 $\mathrm{Cov}(Y_1,Y_2)=0$ 可直接确定 $\alpha$。

计算得
\[
\begin{aligned}
\mathrm{Cov}(Y_1,Y_2)
&=\mathrm{Cov}(X_1\cos\alpha+X_2\sin\alpha,\,X_2\cos\alpha-X_1\sin\alpha)\\
&=\cos\alpha\sin\alpha\,\mathrm{Cov}(X_2,X_2)-\cos\alpha\sin\alpha\,\mathrm{Cov}(X_1,X_1)\\
&\quad+\bigl(\cos^2\alpha-\sin^2\alpha\bigr)\mathrm{Cov}(X_1,X_2)\\
&=\sin\alpha\cos\alpha(\sigma_2^2-\sigma_1^2)+\rho\sigma_1\sigma_2\cos2\alpha.
\end{aligned}
\]
令 $\mathrm{Cov}(Y_1,Y_2)=0$，得
\[
\rho\sigma_1\sigma_2\cos2\alpha=(\sigma_1^2-\sigma_2^2)\sin\alpha\cos\alpha.
\]
又 $\cos2\alpha\neq0$，且 $\sin\alpha\cos\alpha=\frac12\sin2\alpha$，所以两边同除以 $\cos2\alpha$：
\[
\rho\sigma_1\sigma_2=\frac{\sigma_1^2-\sigma_2^2}{2}\tan2\alpha.
\]
故
\[
\tan2\alpha=\frac{2\rho\sigma_1\sigma_2}{\sigma_1^2-\sigma_2^2}.
\]
对照选项，(D) 正确。

选项分析：
(A) 分子误写成 $\rho\sigma_1^2\sigma_2^2$，且分母方向相反：\((A)=\rho\frac{\sigma_1^2\sigma_2^2}{\sigma_1^2-\sigma_2^2}\)，量纲也不对。
(B) 是在 (A) 基础上再把分母取反：\((B)=\rho\frac{\sigma_1^2\sigma_2^2}{\sigma_2^2-\sigma_1^2}\)。
(C) 分子应为 $2\rho\sigma_1\sigma_2$，(C) 正确，但分母却是 $\sigma_1^2-\sigma_2^2$，与 (D) 正好相反；若把 $\tan2\alpha=\frac{2\rho\sigma_1\sigma_2}{\sigma_2^2-\sigma_1^2}$ 会得到 (C)，而该符号与协方差展开不符。
因此选 (D)。

**解题切入点**

线性变换不改变正态性；两个联合正态变量独立等价于协方差为 $0$。这类似于算法竞赛中“把条件转成关键判断式”：独立性条件就是 $\mathrm{Cov}=0$，只需求出协方差再解三角方程。

**推演**

1. 已知 $(X_1,X_2)\sim N(0,0;\sigma_1^2,\sigma_2^2;\rho)$，即
\[
E X_1=E X_2=0,\quad D X_1=\sigma_1^2,\quad D X_2=\sigma_2^2,\quad \mathrm{Cov}(X_1,X_2)=\rho\sigma_1\sigma_2.
\]

2. $Y_1,Y_2$ 是 $X_1,X_2$ 的线性组合，因此 $(Y_1,Y_2)$ 服从二维正态分布；其独立性与协方差为 $0$ 等价。

3. 展开协方差：
\[
\begin{aligned}
\mathrm{Cov}(Y_1,Y_2)
&=\mathrm{Cov}(X_1\cos\alpha+X_2\sin\alpha,\,X_2\cos\alpha-X_1\sin\alpha)\\
&=\cos\alpha\sin\alpha\,\mathrm{Cov}(X_2,X_2)-\cos\alpha\sin\alpha\,\mathrm{Cov}(X_1,X_1)\\
&\quad+(\cos^2\alpha-\sin^2\alpha)\mathrm{Cov}(X_1,X_2)\\
&=\sin\alpha\cos\alpha(\sigma_2^2-\sigma_1^2)+\rho\sigma_1\sigma_2\cos2\alpha.
\end{aligned}
\]

4. 令 $\mathrm{Cov}(Y_1,Y_2)=0$：
\[
\rho\sigma_1\sigma_2\cos2\alpha=(\sigma_1^2-\sigma_2^2)\sin\alpha\cos\alpha.
\]
注意上一步把 $\sigma_2^2-\sigma_1^2$ 移到等式另一侧变成 $\sigma_1^2-\sigma_2^2$。

5. 因为 $\cos2\alpha\neq0$，两边同除 $\cos2\alpha$，并利用 $\sin\alpha\cos\alpha=\frac12\sin2\alpha$：
\[
\rho\sigma_1\sigma_2=\frac{\sigma_1^2-\sigma_2^2}{2}\tan2\alpha,
\]
所以
\[
\tan2\alpha=\frac{2\rho\sigma_1\sigma_2}{\sigma_1^2-\sigma_2^2}.
\]
与 (D) 一致。

**易错点**

- 二维正态中“独立”不能随便用 $E(Y_1Y_2)=E Y_1E Y_2$ 之外的理由；本题关键是联合正态性，因此 $\mathrm{Cov}=0$ 等价于独立。若没有正态性，协方差为 $0$ 只是必要不充分。
- 展开协方差时符号容易出错：$\mathrm{Cov}(X_1,-X_1)$ 和 $\mathrm{Cov}(X_2,X_2)$ 的符号要逐项保留。
- 解方程时容易把分母方向搞反；要仔细比较 (C) 与 (D)，正确答案分母是 $\sigma_1^2-\sigma_2^2$。
- 条件 $\cos2\alpha\neq0$ 是用来在方程两端除以 $\cos2\alpha$，而不是说明无解；不要忽略。

**命题规律**

命题人常把二维正态分布、线性变换、独立性与协方差结合考查，核心结论是“联合正态线性变换后仍联合正态，独立等价于协方差为 $0$”。复习时建议把协方差双线性展开和三角恒等式练熟；这种题计算量不大，但符号和公式细节决定选项，快速验算能避免误选。


> 来源：《26_张宇八套卷（数一）》卷六 第 8 题
