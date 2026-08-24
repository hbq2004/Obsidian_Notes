---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - PS
  - 26_李林六套卷/卷三/MCQ
  - 计算题
  - 0-1分布
  - 协方差公式
  - 数学期望
  - 方差性质
  - 独立性
points:
level:
---

# 选择题 第 9 题

![[_Attachments/题目识别/LL6T/LL6T-S3-Q09_题目.png|题目]]

设 $X_1, X_2$ 相互独立，且均服从参数为 $\frac{1}{2}$ 的 $0-1$ 分布，记 $U = -(X_1 + X_2) + X_1 X_2, V = -(X_1 + X_2) - X_1 X_2$，则
$$Cov(U, V) =$$
(A) $\frac{1}{16}$.
(B) $\frac{3}{16}$.
(C) $\frac{5}{16}$.
(D) $0$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S3-Q09_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
【答案】(C) $\frac{5}{16}$。

选项分析：
- (A) $\frac{1}{16}$：错误。若把 $S=X_1+X_2$ 的方差误算为 $\frac{1}{4}$，则会得到 $\frac{1}{16}$。
- (B) $\frac{3}{16}$：错误。$\frac{3}{16}$ 是 $\mathrm{Var}(X_1X_2)$，而 $\mathrm{Cov}(U,V)=\mathrm{Var}(S)-\mathrm{Var}(T)=\frac{5}{16}$，不是 $\mathrm{Var}(T)$。
- (C) $\frac{5}{16}$：正确。
- (D) $0$：错误。$U,V$ 并不独立，不能认为协方差为 $0$。

**解题切入点**
将 $U,V$ 均看成 $S=X_1+X_2$ 与 $T=X_1X_2$ 的函数，用 $\mathrm{Cov}(U,V)=E(UV)-E(U)E(V)$ 计算。类似算法竞赛中的“状态压缩”，先算几个基础期望，再组装答案。

**推演**
设 $X_1,X_2\sim B(1,\frac12)$ 且独立，则
$$
E X_i=\frac12,\quad E X_i^2=\frac12,\quad E(X_1X_2)=\frac14.
$$
令
$$
S=X_1+X_2,\quad T=X_1X_2.
$$
于是
$$
E S=1,\quad E S^2=E(X_1+X_2)^2=\frac12+\frac12+2\cdot\frac14=\frac32.
$$
又 $T$ 取 $0$ 或 $1$，$T^2=T$，故
$$
E T=E T^2=\frac14.
$$
由
$$
U=-S+T,\quad V=-S-T
$$
得
$$
E U=-1+\frac14=-\frac34,\quad E V=-1-\frac14=-\frac54.
$$
并且
$$
UV=(-S+T)(-S-T)=S^2-T^2,
$$
所以
$$
E(UV)=\frac32-\frac14=\frac54.
$$
因此
$$
\mathrm{Cov}(U,V)=E(UV)-E(U)E(V)
=\frac54-\left(-\frac34\right)\left(-\frac54\right)
=\frac54-\frac{15}{16}
=\frac{5}{16}.
$$
故选项 (C) 正确。

**易错点**
1. 不要直接认为 $X_1X_2$ 的期望为 $\frac14$ 的同时把 $X_i^2$ 的期望写成 $\frac14$；$E X_i^2=p=\frac12$。
2. 不要因 $U,V$ 表达式“对称”就误认为不相关；是否独立/不相关需通过协方差判断。
3. 计算 $E(UV)$ 时，先把 $UV$ 展开为 $S^2-T^2$，不要漏项。

**命题规律**
本题是概率论中典型的“随机变量函数协方差”小题，常考 $0-1$ 分布/二项分布的期望与方差、协方差定义式。复习时应熟练运用 $\mathrm{Cov}(aX+bY,cZ+dW)$ 的线性展开，并掌握利用 $E(UV)-E U E V$ 求协方差的方法。


> 来源：《26_李林六套卷（数一）》卷三 第 9 题
