---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - PS
  - 26_李林六套卷/卷二/FIB
  - 计算题
  - 二项分布
  - 泊松分布
  - 相互独立
  - 最大值事件转化
points:
level:
---

# 填空题 第 16 题

![[_Attachments/题目识别/LL6T/LL6T-S2-Q16_题目.png|题目]]

设随机变量 $X$ 与 $Y$ 相互独立，$X$ 服从二项分布 $B(4,\frac{1}{2})$，$Y$ 服从 $\lambda = 1$ 的泊松分布，则 $P\{1 < \max(X,Y) \leqslant 3\} = \_\_\_\_\_\_$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S2-Q16_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
由 $X,Y$ 独立，且
$$
P\{1<\max(X,Y)\le 3\}=P\{\max(X,Y)\le3\}-P\{\max(X,Y)\le1\}.
$$
因 $X,Y$ 取非负整数值，
$$
P\{\max(X,Y)\le3\}=P(X\le3)P(Y\le3),\quad P\{\max(X,Y)\le1\}=P(X\le1)P(Y\le1).
$$
$X\sim B(4,\frac12)$：$P(X\le3)=1-P(X=4)=1-\frac1{16}=\frac{15}{16}$，$P(X\le1)=\frac{1+4}{16}=\frac5{16}$。
$Y\sim P(1)$：$P(Y\le3)=e^{-1}(1+1+\frac12+\frac16)=\frac8{3e}$，$P(Y\le1)=e^{-1}(1+1)=\frac2e$。
故
$$
P=\frac{15}{16}\cdot\frac8{3e}-\frac5{16}\cdot\frac2e
=\frac5{2e}-\frac5{8e}
=\frac{15}{8e}.
$$

【答案】$\boxed{\dfrac{15}{8e}}$

**解题切入点**
本质是求两个独立离散随机变量最大值的区间概率。算法竞赛里常转化为“前缀和/容斥”：$\max\le a$ 等价于每个量都 $\le a$。这里 $1<\max\le3$ 是先算 $\max\le3$ 再减去 $\max\le1$。

**推演**
1. 因为 $1<\max(X,Y)\le3$ 且 $X,Y$ 是非负整数，所以事件等价于 $\max(X,Y)=2$ 或 $3$。改用分布函数差：
$$
P(1<\max\le3)=P(\max\le3)-P(\max\le1).
$$
2. 独立性给出：
$$
P(\max\le3)=P(X\le3,Y\le3)=P(X\le3)P(Y\le3),
$$
$$
P(\max\le1)=P(X\le1,Y\le1)=P(X\le1)P(Y\le1).
$$
3. 二项分布：
$$
P(X\le3)=1-P(X=4)=1-\left(\frac12\right)^4=\frac{15}{16},
$$
$$
P(X\le1)=P(X=0)+P(X=1)=\frac{1}{16}+\frac{4}{16}=\frac5{16}.
$$
4. 泊松分布：
$$
P(Y\le3)=\sum_{k=0}^3\frac{e^{-1}}{k!}=e^{-1}\left(1+1+\frac12+\frac16\right)=\frac8{3e},
$$
$$
P(Y\le1)=e^{-1}(1+1)=\frac2e.
$$
5. 代入：
$$
P=\frac{15}{16}\cdot\frac8{3e}-\frac5{16}\cdot\frac2e
=\frac52\cdot\frac1e-\frac58\cdot\frac1e
=\frac{15}{8e}.
$$
关键给分点：把 $1<\max\le3$ 转化为 $\max\le3$ 与 $\max\le1$ 之差；对 $\max\le a$ 利用独立写为乘积。

**易错点**
- 不要一看到“最大值在2或3”就分情况 $X=2,Y\le3$ 等，容易算重；用 $\max\le a$ 的“且”转化最稳。
- 不能把 $P(\max\le3)$ 写成 $P(X\le3)+P(Y\le3)$，独立事件要相乘。
- 二项分布求 $P(X\le3)$ 时记得 $X$ 可为 $0,1,2,3$；泊松分布 $P(Y\le3)$ 要算到 $k=3$ 并保留 $e^{-1}$。
- 最终答案含 $e$，不要化成小数或把 $\frac{15}{8e}$ 写成 $\frac{15e}{8}$。

**命题规律**
常见套路是“两个独立离散分布 + 最大值/最小值区间概率”，本质是分布函数与独立性。复习时把 $\max$、$\min$ 事件都转化为“且”事件：$\max\le a=\{X\le a,Y\le a\}$，$\min>a=\{X>a,Y>a\}$；这类题计算量小，但转化错误易丢分。


> 来源：《26_李林六套卷（数一）》卷二 第 16 题
