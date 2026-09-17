---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - PS
  - 26_李林六套卷/卷五/FIB
  - 计算题
  - 二维均匀分布
  - 最大值分布
  - 分布函数法
  - 分段函数积分
  - 方差计算
points:
level:
---

# 填空题 第 16 题

![[_Attachments/题目识别/LL6T/LL6T-S5-Q16_题目.png|题目]]

设二维随机变量 $(X,Y)$ 在 $D = \{(x,y) \mid 0 \leqslant x \leqslant 2, 0 \leqslant y \leqslant 1\}$ 上服从均匀分布，$Z = \max(X,Y)$，则 $D(Z) = \_\_\_\_\_\_\_\_ .$

![[_Attachments/题目识别/LL6T-答案/LL6T-S5-Q16_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

横线处应填：

$$D(Z)=\boxed{\frac{35}{144}}$$

**解题切入点**

考查二维均匀分布下最大值 $Z=\max(X,Y)$ 的方差。破题用分布函数法：$F_Z(z)=P(Z\le z)=P(X\le z,Y\le z)$，在矩形区域上化为面积比。类似算法题按区间分段处理，分界点是 $Y$ 的上界 $z=1$。

**推演**

区域 $D$ 面积 $S(D)=2$，故 $(X,Y)$ 的联合密度为
$$
f(x,y)=\frac12,\quad (x,y)\in D.
$$

对任意实数 $z$，
$$
F_Z(z)=P(Z\le z)=P(X\le z,Y\le z).
$$

分段讨论：

1. 当 $z<0$ 时，$F_Z(z)=0$。
2. 当 $0\le z\le 1$ 时，$D\cap\{x\le z,y\le z\}$ 是边长 $z$ 的正方形，面积为 $z^2$，故
$$
F_Z(z)=\frac{z^2}{2}.
$$
3. 当 $1\le z\le 2$ 时，因 $0\le Y\le 1$，条件 $Y\le z$ 自动成立，只需 $X\le z$，对应面积为 $z\times 1=z$，故
$$
F_Z(z)=\frac{z}{2}.
$$
4. 当 $z>2$ 时，$F_Z(z)=1$。

于是密度函数为
$$
f_Z(z)=z\ (0<z<1),\quad f_Z(z)=\frac12\ (1<z<2),\quad f_Z(z)=0\ (\text{其他}).
$$
检验：$\int_0^1 z\,dz+\int_1^2 \frac12\,dz=\frac12+\frac12=1$。

计算一阶矩：
$$
E(Z)=\int_0^1 z\cdot z\,dz+\int_1^2 z\cdot \frac12\,dz
=\frac13+\frac34=\frac{13}{12}.
$$

计算二阶矩：
$$
E(Z^2)=\int_0^1 z^2\cdot z\,dz+\int_1^2 z^2\cdot \frac12\,dz
=\frac14+\frac76=\frac{17}{12}.
$$

所以方差：
$$
D(Z)=E(Z^2)-[E(Z)]^2
=\frac{17}{12}-\left(\frac{13}{12}\right)^2
=\frac{204}{144}-\frac{169}{144}
=\frac{35}{144}.
$$

**易错点**

- 在 $1\le z\le2$ 时，$Y\le z$ 恒成立，面积不是 $z^2$ 而是 $z$，这是最易错处。
- 密度在 $z=1$ 处左右导数不同，但分布函数连续，无概率聚集，求期望仍用分段密度积分。
- 二阶矩要用 $E(Z^2)=\int z^2 f_Z(z)\,dz$，不能直接用 $[E(Z)]^2$ 代替。

**命题规律**

二维均匀分布与 $\max(X,Y)$ 或 $\min(X,Y)$ 结合是概率论常见套路，核心是分布函数法，将概率转化为面积比并分段讨论。复习时多练此类题，注意分界点选取和方差计算。


> 来源：《26_李林六套卷（数一）》卷五 第 16 题
