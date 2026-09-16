---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - AM
  - 26_张宇八套卷/卷八/FIB
  - 计算题
  - 方向导数
  - 梯度
  - 单位方向向量
  - 向量点积
  - 多元函数最值
points:
level:
---

# FIB 第 12 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S8-Q12_题目.png|题目]]

函数 $u(x,y,z)=xy^2+z^3-xyz$ 在点 $P(1,1,1)$ 处沿任意方向的方向导数中,最大值为\_.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S8-Q12_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最大方向导数为 $\sqrt{5}$。

【答案】: $$\boxed{\sqrt{5}}$$

**解题切入点**

方向导数 $D_{\mathbf e}u=\nabla u\cdot\mathbf e$，其中 $\mathbf e$ 为单位方向向量；类比算法竞赛中“向量点积的最大值就是模长”，所以只需求梯度模长。

**推演**

1. 求 $u(x,y,z)=xy^2+z^3-xyz$ 的三个偏导数：
$$
\frac{\partial u}{\partial x}=y^2-yz,\quad
\frac{\partial u}{\partial y}=2xy-xz,\quad
\frac{\partial u}{\partial z}=3z^2-xy.
$$

2. 代入 $P(1,1,1)$：
$$u_x(P)=1^2-1\cdot1=0,\quad u_y(P)=2\cdot1\cdot1-1\cdot1=1,\quad u_z(P)=3\cdot1^2-1\cdot1=2.$$
所以
$$
\nabla u(P)=(0,1,2).
$$

3. 对任意单位方向 $\mathbf e=(\cos\alpha,\cos\beta,\cos\gamma)$，方向导数为
$$D_{\mathbf e}u(P)=\nabla u(P)\cdot\mathbf e=0\cdot\cos\alpha+1\cdot\cos\beta+2\cdot\cos\gamma.$$

4. 由柯西不等式/点积性质，
$$|\nabla u(P)\cdot\mathbf e|\le |\nabla u(P)|\,|\mathbf e|=|\nabla u(P)|,$$
且当 $\mathbf e=\frac{\nabla u(P)}{|\nabla u(P)|}=\left(0,\frac1{\sqrt5},\frac2{\sqrt5}\right)$ 时取等号。故最大值
$$
\max D_{\mathbf e}u(P)=|\nabla u(P)|=\sqrt{0^2+1^2+2^2}=\sqrt5.
$$

**易错点**

- 方向导数公式中方向向量必须是单位向量；若给出一般方向向量，需先归一化。
- 最大值是梯度的模，而不是梯度本身；方向才是 $\frac{\nabla u}{|\nabla u|}$。
- 不要漏掉 $u_y$ 或 $u_z$ 中的 $xy$ 项：求导时对变量之外的字母要视为常数。

**命题规律**

本题是多元函数微分中的高频小题，考查方向导数与梯度的关系。复习时记住口诀：“方向导数=梯度·单位方向，最大沿梯度，最小沿负梯度。” 同时可练一练隐函数、曲面的梯度与切平面结合题。


> 来源：《26_张宇八套卷（数一）》卷八 第 12 题
