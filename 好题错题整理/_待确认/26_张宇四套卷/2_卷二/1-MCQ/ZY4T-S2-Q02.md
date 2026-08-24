---
ctime: 2026-08-24 07:13:13
mtime: 2026-08-24 07:13:13
tags:
  - AM
  - 26_张宇四套卷/卷二/MCQ
  - 计算题
  - 变限积分求导
  - 隐函数偏导数
  - 多元函数链式法则
  - 积分换元
  - 莱布尼茨公式
points:
level:
---

# 选择题 第 2 题

![[_Attachments/题目识别/ZY4T/ZY4T-S2-Q02_题目.png|题目]]

设 $z = z(x, y)$ 是由方程 $\int_{2x-3y}^{z} f(2x - 3y + z - t) \mathrm{d}t = \sin(2x - 3y + z)$ 所确定的函数，其中 $f$ 为大于 1 的连续函数，则.
(A) $3\frac{\partial z}{\partial x} + 2\frac{\partial z}{\partial y} = 0.$
(B) $3\frac{\partial z}{\partial x} - 2\frac{\partial z}{\partial y} = 0.$
(C) $2\frac{\partial z}{\partial x} + 3\frac{\partial z}{\partial y} = 0.$
(D) $2\frac{\partial z}{\partial x} - 3\frac{\partial z}{\partial y} = 0.$

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S2-Q02_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

令 $a=2x-3y$。换元 $s=a+z-t$，则
$$
\int_a^z f(2x-3y+z-t)\,dt=\int_a^z f(s)\,ds.
$$
原方程为
$$
\int_a^z f(s)\,ds=\sin(a+z).
$$
对 $x$ 求偏导：
$$
f(z)z_x-2f(a)=\cos(a+z)(2+z_x),
$$
故
$$
z_x=\frac{2(f(a)+\cos(a+z))}{f(z)-\cos(a+z)}.
$$
对 $y$ 求偏导：
$$
f(z)z_y+3f(a)=\cos(a+z)(-3+z_y),
$$
故
$$
z_y=-\frac{3(f(a)+\cos(a+z))}{f(z)-\cos(a+z)}.
$$
所以 $3z_x+2z_y=0$。

【答案】(A)。

**解题切入点**

本题是“变限积分 + 隐函数求偏导”。先用换元把被积函数化为只含积分变量的形式，再对 $x,y$ 求导。类比算法题：先化简成容易求导的“结构”，再进行隐函数求导；关键是不要漏掉链式法则产生的项。

**推演**

1. 化简积分。令 $a=2x-3y$，$u=a+z$，则被积函数为 $f(u-t)$。作 $s=u-t$，有 $t=a\Rightarrow s=z$，$t=z\Rightarrow s=a$，$dt=-ds$，故
$$
\int_a^z f(u-t)\,dt=\int_z^a f(s)(-ds)=\int_a^z f(s)\,ds.
$$

2. 对 $x$ 求偏导。由
$$
\int_a^z f(s)\,ds=\sin(a+z)
$$
两端对 $x$ 求偏导，注意 $a_x=2$，$z_x=\partial z/\partial x$：
$$
f(z)z_x-2f(a)=\cos(a+z)(2+z_x).
$$
移项得
$$
(f(z)-\cos(a+z))z_x=2f(a)+2\cos(a+z),
$$
所以
$$
z_x=\frac{2(f(a)+\cos(a+z))}{f(z)-\cos(a+z)}.
$$
由于 $f>1$，分母 $f(z)-\cos(a+z)>0$，且分子 $f(a)+\cos(a+z)>0$，故该比例为正。

3. 对 $y$ 求偏导。注意 $a_y=-3$，由原方程两端对 $y$ 求偏导：
$$
f(z)z_y+3f(a)=\cos(a+z)(-3+z_y),
$$
故
$$
z_y=-\frac{3(f(a)+\cos(a+z))}{f(z)-\cos(a+z)}.
$$

4. 令
$$
\lambda=\frac{f(a)+\cos(a+z)}{f(z)-\cos(a+z)}>0,
$$
则 $z_x=2\lambda$，$z_y=-3\lambda$。代入选项：

(A) $3z_x+2z_y=6\lambda-6\lambda=0$，正确；

(B) $3z_x-2z_y=12\lambda\neq0$，排除；

(C) $2z_x+3z_y=-5\lambda\neq0$，排除；

(D) $2z_x-3z_y=13\lambda\neq0$，排除。

故选择 (A)。

**易错点**

- 下限求导易漏：对 $x$ 求导时，左边多出 $-2f(a)$；对 $y$ 求导时多出 $+3f(a)$。
- $\sin(a+z)$ 求导时，$z$ 是 $x,y$ 的函数，不能只对 $a$ 求导，应出现 $2+z_x$ 和 $-3+z_y$。
- 被积函数中有 $z$ 时不要直接“内部求导”而弄乱正负号；先换元可降低出错率。
- $f>1$ 用来保证分母不为零；若题目去掉该条件，需先验证隐函数存在性。

**命题规律**

- 命题套路：给出含变限积分的隐函数，要求判断偏导数的线性关系；核心是“换元化简 + 隐函数求导 + 系数配对”。
- 复习建议：把这类题练成“肌肉记忆”：先化简积分，再分别对 $x,y$ 求导，最后把 $z_x,z_y$ 写成同一比例系数，再比对各选项。


> 来源：《26_张宇四套卷（数一）》卷二 第 2 题
