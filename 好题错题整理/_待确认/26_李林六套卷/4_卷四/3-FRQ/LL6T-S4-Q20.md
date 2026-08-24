---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - AM
  - 26_李林六套卷/卷四/FRQ
  - 证明题
  - 导数有界
  - 积分为零条件
  - 二重积分换序
  - 绝对值积分不等式
  - 零均值平移技巧
points:
level:
---

# 解答题 第 20 题

![[_Attachments/题目识别/LL6T/LL6T-S4-Q20_题目.png|题目]]

设 $f(x)$ 有连续导数，$f(x)$ 不恒为零，且 $\int_{0}^{1} f(x) \mathrm{d}x=0$，记 $M=\max_{x\in[0,1]}|f'(x)|$ .
$(I)$ 证明：对于 $\forall x \in [0,1]$，有 $|f(x)| \le \frac{1}{2}M$ ;
$(II)$ 设 $D = \{ (x,y)|0 \le x \le 1, 0 \le y \le x \}$，证明：$\left| \iint_{D} f(y) \mathrm{d}x \mathrm{d}y \right| \le \frac{1}{8}M$ .

![[_Attachments/题目识别/LL6T-答案/LL6T-S4-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(I) 对任意 $x\in[0,1]$，有 $|f(x)|\le \frac12 M$。

(II) 设 $I=\iint_D f(y)\,dx\,dy$，则 $|I|\le \frac18 M$。

关键给分点：先用二重积分换序得 $I=\int_0^1(1-y)f(y)\,dy$；再用 $\int_0^1 f=0$ 把权重改为 $\frac12-y$；最后由 (I) 放缩并计算 $\int_0^1|\frac12-y|\,dy=\frac14$。

**解题切入点**

题目本质是“导数有界 + 均值为零”的积分估计。类似算法竞赛中先“去均值”再选中心：因为 $\int_0^1 f=0$，可在被积权重中任意加减常数；把权重 $1-y$ 平移到 $\frac12-y$，使得绝对矩最小，再用 (I)。

**推演**

$(I)$ 固定 $x\in[0,1]$。因 $\int_0^1 f(t)\,dt=0$，

$$
f(x)=\int_0^1 [f(x)-f(t)]\,dt.
$$

由牛顿-莱布尼茨公式 $f(x)-f(t)=\int_t^x f'(s)\,ds$，故

$$
|f(x)|\le \int_0^1 |f(x)-f(t)|\,dt
\le M\int_0^1 |x-t|\,dt.
$$

而

$$
\int_0^1 |x-t|\,dt
=\int_0^x (x-t)\,dt+\int_x^1 (t-x)\,dt
=\frac{x^2}{2}+\frac{(1-x)^2}{2}\le \frac12.
$$

所以 $|f(x)|\le M/2$。注意 $x=0$ 或 $x=1$ 时可取等号（例如 $f(x)=M(x-\frac12)$）。

$(II)$ 区域 $D=\{(x,y):0\le y\le x\le1\}$，先固定 $y$ 后对 $x$ 积分：

$$
I=\iint_D f(y)\,dx\,dy
=\int_0^1 f(y)\left(\int_y^1 dx\right)dy
=\int_0^1 (1-y)f(y)\,dy.
$$

由于 $\int_0^1 f(y)\,dy=0$，对任意常数 $a$ 有

$$
I=\int_0^1 (a-y)f(y)\,dy.
$$

取 $a=\frac12$，得

$$
|I|=\left|\int_0^1 \left(\frac12-y\right)f(y)\,dy\right|
\le \int_0^1 \left|\frac12-y\right|\,|f(y)|\,dy.
$$

由 (I)，$|f(y)|\le M/2$，于是

$$
|I|\le \frac M2\int_0^1 \left|\frac12-y\right|\,dy
=\frac M2\left(\int_0^{1/2}(\frac12-y)\,dy+\int_{1/2}^1(y-\frac12)\,dy\right)
=\frac M2\cdot\frac14
=\frac M8.
$$

证毕。

**易错点**

1. 在 (I) 中不要丢掉“均值为零”的减 $f(t)$ 步骤；直接写 $|f(x)|\le Mx$ 会错。平均距离 $\int_0^1|x-t|\,dt$ 最大是 $1/2$。

2. 在 (II) 中若只用 $|f(y)|\le M/2$ 和 $\int_0^1(1-y)\,dy$ 会得到 $M/4$，不够；必须先用 $\int_0^1 f=0$ 把权重平移到 $\frac12$。

3. 交换二重积分次序时注意 $D$ 的范围：固定 $y$ 时 $x$ 从 $y$ 到 $1$，不要写成 $0$ 到 $1$。

4. 题中 $1/8$ 不是最优常数；由分部积分可加强为 $M/12$。考试只需证明题给上界即可。

**命题规律**

这类题常以“导数有界 + 积分为零”为条件，考查积分型不等式的放缩。破题关键是“加零项”：因均值为零，可把权重平移到中心以减小绝对矩。复习时多练二重积分换序、绝对值不等式、以及“减平均值”的 Lipschitz 估计；这类证明题一般步骤固定，按三行放缩即可完成。


> 来源：《26_李林六套卷（数一）》卷四 第 20 题
