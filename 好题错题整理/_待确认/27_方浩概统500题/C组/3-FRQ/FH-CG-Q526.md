---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 次序统计量
  - 均匀分布
  - 均方误差
  - 二次函数最优化
points:
level:
---

# FRQ 第 526 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q526_题目.png|题目]]

526 已知总体 $X$ 服从 $[0,\theta]$ 上的均匀分布，$\theta\in(0,+\infty)$ 为未知参数，$X_1,X_2,\cdots,X_n$ 是来自总体 $X$ 的简单随机样本，记 $Y=\max\{X_1,X_2,\cdots,X_n\}$，$h(c)=E[(cY-\theta)^2]$，求 $c$ 使得 $h(c)$ 最小.

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：
$c=\frac{n+2}{n+1}.$
因为 $h(c)$ 是 $c$ 的开口向上的二次函数，最优值为 $c=\dfrac{\theta E[Y]}{E[Y^2]}$，由 $Y=\max\{X_1,\dots,X_n\}$ 的分布可算得 $E[Y]=\dfrac{n}{n+1}\theta$，$E[Y^2]=\dfrac{n}{n+2}\theta^2$，故 $c=\dfrac{n+2}{n+1}$。

**解题切入点**：
先不要把期望展开得过早，应把 $h(c)=E[(cY-\theta)^2]$ 看作关于 $c$ 的二次函数。最小化二次函数只需知道 $E[Y]$ 和 $E[Y^2]$。  
其次，$Y$ 是最大次序统计量，用分布函数法：
$P(Y\le y)=P(X_1\le y,\dots,X_n\le y)=[P(X_1\le y)]^n,$
由此求出 $Y$ 的密度函数，再算矩。这就像算法题中先把目标函数写成关于某个参数的二次函数，再求梯度零点，而不是盲目枚举。

**推演**：
因 $X_i\sim U[0,\theta]$，对 $0\le y\le\theta$，
$P(X_i\le y)=\frac{y}{\theta},$
所以
$$
F_Y(y)=P(Y\le y)=
\begin{cases}
0,& y<0,\\[2mm]
\left(\dfrac{y}{\theta}\right)^n,&0\le y\le\theta,\\[2mm]
1,&y>\theta.
\end{cases}
$$
故 $Y$ 的密度函数为
$$
f_Y(y)=\frac{n y^{n-1}}{\theta^n},\qquad 0<y<\theta.
$$

于是
$$
E[Y]=\int_0^\theta y\cdot \frac{n y^{n-1}}{\theta^n}\,dy
=\frac{n}{\theta^n}\int_0^\theta y^n\,dy
=\frac{n}{n+1}\theta,
$$
$$
E[Y^2]=\int_0^\theta y^2\cdot \frac{n y^{n-1}}{\theta^n}\,dy
=\frac{n}{\theta^n}\int_0^\theta y^{n+1}\,dy
=\frac{n}{n+2}\theta^2.
$$

展开 $h(c)$：
$$
h(c)=E[(cY-\theta)^2]
=c^2E[Y^2]-2c\theta E[Y]+\theta^2.
$$

代入 $E[Y]$ 与 $E[Y^2]$：
$$
h(c)=\frac{n}{n+2}\theta^2c^2-\frac{2n}{n+1}\theta^2c+\theta^2.
$$

对 $c$ 求导：
$$
h'(c)=\frac{2n}{n+2}\theta^2c-\frac{2n}{n+1}\theta^2.
$$
令 $h'(c)=0$，得
$$
\frac{n}{n+2}c=\frac{n}{n+1},
$$
所以
$$
c=\frac{n+2}{n+1}.
$$

又因为
$$
h''(c)=\frac{2n}{n+2}\theta^2>0,
$$
所以该点为最小值点。

此时最小均方误差为
$$
h_{\min}
=h\left(\frac{n+2}{n+1}\right)
=\frac{\theta^2}{(n+1)^2}.
$$

**易错点**：
1. 展开时漏掉交叉项。  
   常见错误：
   $E[(cY-\theta)^2]=c^2E[Y^2]-\theta^2.$
   正确展开应为
   $E[(cY-\theta)^2]=c^2E[Y^2]-2c\theta E[Y]+\theta^2.$

2. 把 $E[Y^2]$ 误写成 $(E[Y])^2$。  
   最大值统计量的二阶矩必须通过密度函数积分得到，不能用期望的平方代替。

3. 将“无偏估计”与“均方误差最小”混淆。  
   若要求 $cY$ 是 $\theta$ 的无偏估计，则由 $E(cY)=\theta$ 得
   $c=\frac{\theta}{E[Y]}=\frac{n+1}{n}.$
   但本题要求最小化 $h(c)$，允许估计量有适当偏差，因此答案是
   $c=\frac{n+2}{n+1},$
   而不是 $\dfrac{n+1}{n}$。

4. 忘记 $Y$ 是最大次序统计量，误用单个总体 $X$ 的期望 $\theta/2$。  
   最大值的期望应大于 $\theta/2$，不能直接套用 $E[X]=\theta/2$。

**命题规律**：
本题属于“次序统计量 + 均方误差最小化”的综合题，常见于考研数学一概率统计部分的解答题或填空题。  
常见变式有：
- 求 $\max\{X_1,\dots,X_n\}$ 的密度函数、期望、方差；
- 求 $cY$ 为 $\theta$ 的无偏估计时 $c$ 的值；
- 求 $\hat\theta=cY$ 在均方误差意义下的最优系数；
- 将均匀分布改为其他分布，如指数分布，求最大值统计量的矩。

复习时应重点掌握“分布函数法求极值统计量”和“二次损失函数配方法/求导法”，不要死记硬背具体答案。

**知识点**：
次序统计量、均匀分布、均方误差、二次函数最优化

---

> 来源：方浩概率统计进阶500题做题本 第194页 · C组
