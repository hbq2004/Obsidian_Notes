---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套三/MCQ
  - 计算题
  - 隐函数求导
  - 多元复合函数求导
  - 一阶偏导数
  - 全微分形式不变性
points:
level:
---

# MCQ 第 2 题

![[_Attachments/题目识别/JJ8T/JJ8T-S3-Q02_题目.png|题目]]

2. $F(u, v)$ 具有一阶连续偏导数，且 $z = z(x, y)$ 由方程 $F\left(\frac{x}{z}, yz\right) = 0$ 确定，则 $x\frac{\partial z}{\partial x} - y\frac{\partial z}{\partial y} =$（）。

A. 0

B. $\frac{1}{z}$

C. $z$

D. 1


---

## DeepSeek V4 Flash Max

【考点】本题考查隐函数求导与多元复合函数求导；本质与算法竞赛中“隐式方程两边求导”一样，关键是固定变量时对 $F$ 的两个中间变量分别求导，再解出偏导数。

【解】设 $u=\frac{x}{z}$，$v=yz$，则 $F(u,v)=0$。$F$ 具有一阶连续偏导数，记 $F_1'=\frac{\partial F}{\partial u}$，$F_2'=\frac{\partial F}{\partial v}$。

对方程两边关于 $x$ 求偏导（$y$ 视为常数）：
$$
F_1'\frac{\partial}{\partial x}\left(\frac{x}{z}\right)+F_2'\frac{\partial}{\partial x}(yz)=0.
$$
其中
$$
\frac{\partial}{\partial x}\left(\frac{x}{z}\right)=\frac{z-xz_x}{z^2}=\frac1z-\frac{x}{z^2}z_x,\quad
\frac{\partial}{\partial x}(yz)=y z_x.
$$
所以
$$
F_1'\left(\frac1z-\frac{x}{z^2}z_x\right)+F_2' y z_x=0. \tag{1}
$$

对方程两边关于 $y$ 求偏导（$x$ 视为常数）：
$$
F_1'\frac{\partial}{\partial y}\left(\frac{x}{z}\right)+F_2'\frac{\partial}{\partial y}(yz)=0.
$$
其中
$$
\frac{\partial}{\partial y}\left(\frac{x}{z}\right)=-\frac{x}{z^2}z_y,\quad
\frac{\partial}{\partial y}(yz)=z+y z_y.
$$
所以
$$
F_1'\left(-\frac{x}{z^2}z_y\right)+F_2'(z+y z_y)=0. \tag{2}
$$

由 (1)：
$$
\left(yF_2'-\frac{x}{z^2}F_1'\right)z_x=-\frac{F_1'}{z}.
$$
由 (2)：
$$
\left(yF_2'-\frac{x}{z^2}F_1'\right)z_y=-zF_2'.
$$

令 $D=yF_2'-\frac{x}{z^2}F_1'$（由隐函数存在条件 $D\ne 0$），则
$$
z_x=-\frac{F_1'}{zD},\quad z_y=-\frac{zF_2'}{D}.
$$
因此
$$
x z_x-y z_y
=x\left(-\frac{F_1'}{zD}\right)-y\left(-\frac{zF_2'}{D}\right)
=\frac{-xF_1'/z+y zF_2'}{D}
=\frac{zD}{D}=z.
$$

【答案】$x\frac{\partial z}{\partial x}-y\frac{\partial z}{\partial y}=z$，故选 (C)。

干扰项说明：
- A 0：若把 $\frac{x}{z}$ 对 $x$ 求导误算为 $\frac{1}{z}$，忽略 $-\frac{x}{z^2}z_x$，可能错得 0；
- B $\frac{1}{z}$：常见于只提取了分子中的 $-xF_1'/z$，未与 $yF_2'$ 项合并化简；
- D 1：容易与“齐次函数 $xu_x+yu_y=nu$”的结论混淆，本题并非直接齐次函数。

【易错点】1. 对 $\frac{x}{z}$ 关于 $x$ 求导时，不能只写 $\frac{1}{z}$，要写 $\frac{z-xz_x}{z^2}$；
2. 对 $yz$ 关于 $y$ 求导时，$z$ 是 $y$ 的函数，结果为 $z+yz_y$，不能漏项；
3. 解出两个偏导后，必须代入目标式并利用 $zD$ 约分，不要只算一半；
4. 题目默认隐函数存在且可导，若 $D=0$ 则不满足隐函数存在定理条件。

【命题规律】此类题目常以抽象函数 $F$ 的隐式方程形式出现，考查“对 $x,y$ 求偏导并解出 $z_x,z_y$”的基本功。复习建议：熟练掌握多元复合函数求导的链式法则，并以具体函数如 $F(u,v)=u+v-1$ 验证选项，可快速锁定答案。
