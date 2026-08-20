---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 指数分布
  - 顺序统计量
  - 协方差
  - 随机变量函数的期望
points:
level:
---

# FRQ 第 509 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q509_题目.png|题目]]

509 设随机变量 $X$ 和 $Y$ 相互独立, 且均服从参数为 1 的指数分布, $U=\max\{X,Y\}, V=\min\{X,Y\}$, 则 $\operatorname{Cov}(U,V)=$

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：$\operatorname{Cov}(U,V)=\dfrac14$。因为 $UV=XY$，且 $EU=\dfrac32$，$EV=\dfrac12$，所以协方差为 $\dfrac14$。

**解题切入点**：看到 $\max$ 与 $\min$，不要急着对联合密度做二重积分。先找最值函数的对称恒等式：
$$
\max\{x,y\}\min\{x,y\}=xy,\qquad \max\{x,y\}+\min\{x,y\}=x+y.
$$
这类似算法竞赛中“先化简数据再计算”，能把对顺序统计量的复杂积分转化为只需求 $\min$ 的期望。

**推演**：设 $X,Y\sim \mathrm{Exp}(1)$，则
$$
P(X>t)=P(Y>t)=e^{-t}\quad(t>0),
$$
且
$$
EX=EY=1.
$$

对任意 $x,y$ 有
$$
\max\{x,y\}\min\{x,y\}=xy,
$$
所以
$$
UV=XY.
$$
由于 $X$ 与 $Y$ 独立，
$$
E(UV)=E(XY)=EX\cdot EY=1.
$$

又因为
$$
P(V>t)=P(X>t,Y>t)=P(X>t)P(Y>t)=e^{-2t},
$$
利用非负随机变量的尾积分公式：
$$
EV=\int_0^\infty P(V>t)\,dt
=\int_0^\infty e^{-2t}\,dt=\frac12.
$$

同时
$$
U+V=X+Y,
$$
因此
$$
EU=E(X+Y)-EV=2-\frac12=\frac32.
$$

所以
$$
\operatorname{Cov}(U,V)=E(UV)-EU\cdot EV
=1-\frac32\cdot\frac12
=\frac14.
$$

**易错点**：
- 不能认为 $U$ 与 $V$ 独立，从而误用 $E(UV)=E U E V$。事实上 $U,V$ 不独立，应先利用 $UV=XY$。
- 注意 $V=\min\{X,Y\}$ 服从参数为 $2$ 的指数分布，均值为 $\dfrac12$，不要写成 $1$。
- 若用分布函数求 $EU$，注意
$$
P(U>t)=1-P(U\le t),
$$
不要丢掉 $1-$ 或搞错正负号。
- 协方差公式中 $EU\cdot EV$ 这一项不要漏掉。

**命题规律**：本题是数字特征与顺序统计量结合的小题，考法灵活。常见变式有：两指数分布参数不同，求 $\operatorname{Cov}(\max,\min)$；求 $\max,\min$ 的分布或期望；结合指数分布的无记忆性求概率。复习时熟记
$$
EX=\int_0^\infty P(X>x)\,dx
$$
以及最值的对称恒等式，可显著减少计算量。

**知识点**：指数分布、顺序统计量、协方差、随机变量函数的期望

---

> 来源：方浩概率统计进阶500题做题本 第187页 · C组
