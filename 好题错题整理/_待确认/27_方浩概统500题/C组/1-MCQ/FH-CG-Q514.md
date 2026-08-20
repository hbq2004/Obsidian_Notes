---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 联合密度规范性
  - 条件期望
  - 重期望公式
  - 协方差
points:
level:
---

# MCQ 第 514 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q514_题目.png|题目]]

514 设随机变量 $(X,Y)$ 的概率密度为 $f(x,y)=\begin{cases} \frac{1}{y}e^{-x/y}, & x>0, y>0, \\ 0, & 其他. \end{cases}$ 则 $X,Y$ 的协方差 $Cov(X,Y)=(\quad)$.  
(A) $1$  
(B) $-1$  
(C) $0$  
(D) $\frac{1}{2}$

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：严格按题面，A-D 均不能选，因为题面给出的函数不是概率密度，\(\operatorname{Cov}(X,Y)\) 不存在；若原题漏写了 \(e^{-y}\) 因子，即常见形式为 \(f(x,y)=\frac1y e^{-x/y}e^{-y}\)，则选 **(A) \(1\)**。

**解题切入点**：拿到二维连续型联合密度，先做“规范性检验”，即验证  
\[
\iint_{\mathbb R^2}f(x,y)\,dxdy=1.
\]
这就像算法竞赛中先检查数据是否合法，不能拿非法数据硬算；密度不合法，期望、协方差都无从谈起。若密度合法，再优先使用条件期望公式：
\[
E[g(X,Y)]=E\big[E(g(X,Y)\mid Y)\big].
\]

**推演**：

题面所给
\[
f(x,y)=\begin{cases}
\frac1y e^{-x/y}, & x>0,y>0,\\
0, & \text{其他}
\end{cases}
\]
在全平面上的积分为
\[
\iint_{\mathbb R^2}f(x,y)\,dxdy
=\int_0^{+\infty}\int_0^{+\infty}\frac1y e^{-x/y}\,dx\,dy
=\int_0^{+\infty}1\,dy=+\infty.
\]
因此它不满足概率密度的规范性，不是合法的联合概率密度。进一步看，若强行求 \(Y\) 的边际函数，
\[
f_Y(y)=\int_0^{+\infty}\frac1y e^{-x/y}\,dx=1,\quad y>0,
\]
它在 \((0,+\infty)\) 上积分为 \(+\infty\)，也不能成为概率密度，故 \(E[Y]\) 不有限，协方差不存在。

若原题应为常见形式
\[
f(x,y)=\frac1y e^{-x/y}e^{-y},\quad x>0,y>0,
\]
则它是合法密度：
\[
\int_0^{+\infty}\int_0^{+\infty}\frac1y e^{-x/y}e^{-y}\,dx\,dy
=\int_0^{+\infty}e^{-y}\,dy=1.
\]

此时有
\[
f_Y(y)=e^{-y},\quad y>0,
\]
且
\[
f_{X\mid Y}(x\mid y)=\frac{f(x,y)}{f_Y(y)}
=\frac1y e^{-x/y},\quad x>0,
\]
所以
\[
X\mid Y=y\sim \operatorname{Exp}\left(\frac1y\right),\qquad E[X\mid Y]=Y.
\]

于是
\[
E[Y]=\int_0^{+\infty}ye^{-y}\,dy=1,
\]
\[
E[Y^2]=\int_0^{+\infty}y^2e^{-y}\,dy=2.
\]

由重期望公式：
\[
E[X]=E[E[X\mid Y]]=E[Y]=1,
\]
\[
E[XY]=E[Y E[X\mid Y]]=E[Y^2]=2.
\]

所以
\[
\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]
=2-1=1.
\]

故在修正为含 \(e^{-y}\) 因子的常见版本下，选 **(A) \(1\)**。

**易错点**：

- 不先验证联合密度是否满足 \(\iint f=1\)，直接套条件期望，容易把非法密度当成合法密度处理。
- 把“对 \(x\) 积分后得到 \(f_Y(y)=1\)”误认为 \(Y\) 服从均匀分布；实际上它在 \((0,+\infty)\) 上积分发散。
- 期望不有限时，不能写 \(\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]\)，因为 \(+\infty-\infty\) 无意义。
- 若原题漏写 \(e^{-y}\)，不要强行解释出“\(Y\sim \operatorname{Exp}(1)\)”，应指出题干有误。

**命题规律**：本题考查二维连续型随机变量的联合密度规范性、条件分布与重期望公式求协方差。常见变式是给出条件密度 \(f_{X\mid Y}(x\mid y)\) 和 \(Y\) 的边缘密度，求协方差或相关系数。复习时应先判断密度是否合法，再熟练使用
\[
E[g(X,Y)]=E[E(g(X,Y)\mid Y)].
\]

**知识点**：联合概率密度规范性、条件数学期望、重期望公式、协方差

---

> 来源：方浩概率统计进阶500题做题本 第189页 · C组
