---
ctime: 2026-08-24 17:34:54
mtime: 2026-08-24 17:34:54
tags:
  - PS
  - 26_张宇八套卷/卷二/MCQ
  - 计算题
  - 指数分布
  - 伯努利分布
  - 二项分布
  - 样本比例的方差
  - 方差的线性性质
points:
level:
---

# MCQ 第 10 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S2-Q10_题目.png|题目]]

设总体 $X$ 服从参数为 $1$ 的指数分布，$X_1, X_2, \cdots, X_n$ 为来自总体 $X$ 的简单随机样本，记 $v_n(1)$ 为 $n$ 个观测值中不大于 $1$ 的个数，则 $\frac{v_n(1)}{n}$ 的方差为.
(A) $\frac{\mathrm{e}-1}{n\mathrm{e}^2}$
(B) $\frac{\mathrm{e}-1}{n\mathrm{e}}$
(C) $\frac{\mathrm{e}(\mathrm{e}-1)}{n}$
(D) $\frac{\mathrm{e}-1}{n}$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S2-Q10_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(A)。

因 $X\sim\mathrm{Exp}(1)$，$P(X\le1)=1-\mathrm e^{-1}$。令 $Y_i=\mathbf 1_{\{X_i\le1\}}$，则 $Y_i\sim B(1,p)$，$p=1-\mathrm e^{-1}$，且

$$
\operatorname{Var}\left(\frac{v_n(1)}n\right)
=\frac{p(1-p)}n
=\frac{(1-\mathrm e^{-1})\mathrm e^{-1}}n
=\frac{\mathrm e-1}{n\mathrm e^2}.
$$

所以选 (A)。

**解题切入点**

把“观测值不大于 1”看成一次 0-1 判断，$v_n(1)$ 就是 $n$ 个独立 Bernoulli 变量之和；题目要求的频率方差正是 $p(1-p)/n$。类似算法竞赛里把事件计数后除以规模，方差按 $1/n$ 衰减。

**推演**

1. 指数分布参数为 1，即 $X\sim\mathrm{Exp}(1)$，密度 $f(x)=\mathrm e^{-x}$，$x>0$，分布函数
$$
F(x)=1-\mathrm e^{-x},\quad x>0.
$$
2. 记指示变量
$$
Y_i=I_{\{X_i\le1\}}=
\begin{cases}
1,&X_i\le1,\\
0,&X_i>1.
\end{cases}
$$
由简单随机样本的独立性，$Y_1,\dots,Y_n$ 独立同分布，且
$$
P(Y_i=1)=P(X_i\le1)=F(1)=1-\mathrm e^{-1}\triangleq p,
$$
$$
P(Y_i=0)=\mathrm e^{-1}=1-p.
$$
所以 $Y_i\sim B(1,p)$。
3. 因此
$$
v_n(1)=\sum_{i=1}^nY_i\sim B(n,p),
$$
$$
\operatorname{Var}(v_n(1))=np(1-p).
$$
4. 所求为样本比例 $\frac{v_n(1)}n$ 的方差：
$$
\operatorname{Var}\left(\frac{v_n(1)}n\right)
=\frac{1}{n^2}\operatorname{Var}(v_n(1))
=\frac{np(1-p)}{n^2}
=\frac{p(1-p)}n.
$$
代入 $p=1-\mathrm e^{-1}$：
$$
\frac{p(1-p)}n
=\frac{(1-\mathrm e^{-1})\mathrm e^{-1}}n
=\frac{\mathrm e-1}{n\mathrm e^2}.
$$
5. 选项核对：
- (A) $\frac{\mathrm e-1}{n\mathrm e^2}$：与计算结果一致，正确。
- (B) $\frac{\mathrm e-1}{n\mathrm e}$：等于 $p/n$，漏乘了 $(1-p)=\mathrm e^{-1}$，错误。
- (C) $\frac{\mathrm e(\mathrm e-1)}n$：等于 $\mathrm e^2\cdot \frac{\mathrm e-1}{n\mathrm e^2}$，放大了 $\mathrm e^2$ 倍，错误。
- (D) $\frac{\mathrm e-1}n$：等于 $\mathrm e\cdot\frac{\mathrm e-1}{n\mathrm e}$，既漏了 $(1-p)$ 又混淆了倍数，错误。

**易错点**

- 不要把 $P(X\le1)$ 算成 $\mathrm e^{-1}$；指数分布不大于 1 的概率是 $1-\mathrm e^{-1}$。
- 样本比例的方差是 $\frac{p(1-p)}n$，不是 $p(1-p)$，也不是 $\frac p n$。
- 从 $v_n(1)\sim B(n,p)$ 到 $\frac{v_n(1)}n$ 时，方差要除以 $n^2$，约简后为 $1/n$。
- 化简 $(1-\mathrm e^{-1})\mathrm e^{-1}$ 时注意等于 $\frac{\mathrm e-1}{\mathrm e^2}$，不要与 $\frac{\mathrm e-1}{\mathrm e}$ 混淆。

**命题规律**

这类题把一般分布的事件转化为 Bernoulli 计数，再求频率的期望/方差，是概率统计选择题的常见套路。复习时应熟练掌握“指示变量 + 二项分布 + 样本比例方差”的组合，并注意与中心极限定理、大数定律的衔接。


> 来源：《26_张宇八套卷（数一）》卷二 第 10 题
