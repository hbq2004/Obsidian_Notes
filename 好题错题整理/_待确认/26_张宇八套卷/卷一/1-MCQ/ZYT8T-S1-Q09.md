---
ctime: 2026-08-24 13:30:19
mtime: 2026-08-24 16:00:51
tags:
  - PS
  - 26_张宇八套卷/卷一/MCQ
  - 计算题
  - 正态总体
  - 标准化
  - 半正态分布期望方差
  - 方差可加性
  - 简单随机样本
points:
level:
---

# MCQ 第 9 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S1-Q09_题目.png|题目]]

设 $X_1, X_2, \cdots, X_n (n \geq 2)$ 为来自正态总体 $X$ 的简单随机样本, $E(X)=\mu, D(X)=\sigma^2, \sigma>0$, 记 $Y=\frac{1}{n}\sum_{i=1}^{n}|X_i-\mu|$, 则 $D(Y)=$ ( ).

(A) $\frac{\sigma^2}{n}\left(1-\frac{2}{\pi}\right)$.
(B) $\frac{\sigma^2}{n}\left(1-\frac{\pi}{2}\right)$.
(C) $\frac{\sigma^2}{n^2}\left(1-\frac{2}{\pi}\right)$.
(D) $\frac{\sigma^2}{n^2}\left(1-\frac{\pi}{2}\right)$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S1-Q09_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
【答案】: (A)。
【推演】
- (A) 正确：$D(Y)=\frac{\sigma^2}{n}(1-\frac{2}{\pi})$。
- (B) 错误：$1-\frac{\pi}{2}<0$，方差不能为负。
- (C) 错误：分母应为 $n$ 而非 $n^2$，它漏掉了 $n$ 个独立变量求和后方差会多出因子 $n$ 的抵消。
- (D) 错误：$1-\frac{\pi}{2}<0$ 且分母也不对。

**解题切入点**
题眼：$|X_i-\mu|$ 是正态变量到均值的绝对偏差，先标准化为 $Z_i\sim N(0,1)$，求 $|Z_i|$ 的期望与二阶矩；再用独立同分布样本的方差可加性。类似算法竞赛中把独立随机变量和看成“卷积/累加”时，方差按系数平方累计，不要直接对 $Y$ 平方展开丢独立性。

**推演**
设 $Z_i=\dfrac{X_i-\mu}{\sigma}$，则 $Z_i$ 独立且都服从 $N(0,1)$，且
$$
X_i-\mu=\sigma Z_i,\quad |X_i-\mu|=\sigma |Z_i|.
$$

对标准正态 $Z\sim N(0,1)$：
$$
E|Z|=\int_{-\infty}^{+\infty}|z|\varphi(z)\,dz
=2\int_0^{+\infty} z\frac{1}{\sqrt{2\pi}}e^{-z^2/2}\,dz
=\sqrt{\frac{2}{\pi}}.
$$

二阶矩：
$$
E|Z|^2=E Z^2=D(Z)+[E(Z)]^2=1+0=1.
$$

所以
$$
D(|Z|)=E|Z|^2-(E|Z|)^2
=1-\frac{2}{\pi}.
$$

于是
$$
Y=\frac{\sigma}{n}\sum_{i=1}^n |Z_i|,
$$
由独立性，
$$
D(Y)=\frac{\sigma^2}{n^2}\sum_{i=1}^n D(|Z_i|)
=\frac{\sigma^2}{n^2}\cdot n\left(1-\frac{2}{\pi}\right)
=\frac{\sigma^2}{n}\left(1-\frac{2}{\pi}\right).
$$

回代检查：若 $\sigma$ 的单位为 $X$ 的单位，则 $Y$ 与 $X$ 同量纲，方差量纲应为 $\sigma^2$，分母出现 $n$；$1-\frac{2}{\pi}>0$，合理。选 (A)。

**易错点**
1. 把 $E|Z|$ 误算成 $0$：标准正态关于 $0$ 对称的是 $Z$ 本身，不是 $|Z|$；$|Z|$ 的期望非零。
2. 忘记 $D(|Z|)=E|Z|^2-(E|Z|)^2$，而误用 $D(Z)=1$。
3. 系数处理：$Y=\frac1n\sum a_i$ 时，方差为 $\frac1{n^2}\sum D(a_i)$；本题 $a_i=\sigma|Z_i|$，最终合并后应出现 $\frac1n$。
4. 选项中出现 $1-\frac{\pi}{2}<0$ 可直接排除，因为方差非负。

**命题规律**
考研概率常把正态分布、样本均值、绝对偏差和方差性质结合，考查“标准化+半正态矩”的常规操作。复习时熟练掌握 $N(\mu,\sigma^2)$ 的标准化，以及 $E Z^2=D(Z)+E^2(Z)$ 这一拆法；类似题还可能改为 $|X_i-\bar X|$，那时需额外处理样本均值与残差的相关性，注意区分。


> 来源：《26_张宇八套卷（数一）》卷一 第 9 题
