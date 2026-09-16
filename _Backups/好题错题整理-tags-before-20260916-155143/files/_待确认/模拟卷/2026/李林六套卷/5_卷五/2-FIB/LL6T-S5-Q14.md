---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - AM
  - 26_李林六套卷/卷五/FIB
  - 计算题
  - 隐函数求导
  - 多元函数微分
  - 偏导数
  - 复合函数求导
  - 全微分形式不变性
points:
level:
---

# 填空题 第 14 题

![[_Attachments/题目识别/LL6T/LL6T-S5-Q14_题目.png|题目]]

设函数 $F(u,v)$ 可微, $z=z(x,y)$ 由方程 $F\left(x+\frac{z}{y}, y+\frac{z}{x}\right)=0$ 确定, 则 $x\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}=\_\_\_\_.$

![[_Attachments/题目识别/LL6T-答案/LL6T-S5-Q14_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结论：$x\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}=z-xy$。

填空题【答案】:
$$\boxed{z-xy}$$

**解题切入点**

考查隐函数求导与多元函数微分，破题角度是把所求看成算子 $x\partial_x+y\partial_y$ 对 $z$ 的作用。类似算法竞赛中解方程组：不要试图显式解出 $z$，而是把偏导关系写成关于 $F_u,F_v$ 的线性方程组，用行列式消元。

**推演**

令 $u=x+\frac{z}{y},\ v=y+\frac{z}{x}$，记 $p=z_x,\ q=z_y$，设 $A=xp,\ B=yq$，则目标 $T=A+B=xz_x+yz_y$。

1. 对 $x$ 求偏导：
$$F_u\left(1+\frac{p}{y}\right)+F_v\left(\frac{p}{x}-\frac{z}{x^2}\right)=0.$$
因 $p=A/x$，得
$$F_u\left(1+\frac{A}{xy}\right)+F_v\frac{A-z}{x^2}=0.\tag{1}$$

2. 对 $y$ 求偏导：
$$F_u\left(\frac{q}{y}-\frac{z}{y^2}\right)+F_v\left(1+\frac{q}{x}\right)=0.$$
因 $q=B/y$，得
$$F_u\frac{B-z}{y^2}+F_v\left(1+\frac{B}{xy}\right)=0.\tag{2}$$

3. $F_u,F_v$ 不全为零，所以关于 $(F_u,F_v)$ 的线性齐次方程组 (1)(2) 有非零解，系数行列式为零：
$$\begin{vmatrix}
1+\frac{A}{xy} & \frac{A-z}{x^2}\\
\frac{B-z}{y^2} & 1+\frac{B}{xy}
\end{vmatrix}=0.$$

4. 展开并化简：
$$\left(1+\frac{A}{xy}\right)\left(1+\frac{B}{xy}\right)-\frac{(A-z)(B-z)}{x^2y^2}=0,$$
即
$$1+\frac{T}{xy}+\frac{zT-z^2}{x^2y^2}=0,$$
两端乘 $x^2y^2$：
$$x^2y^2+Txy+zT-z^2=0,$$
$$T(xy+z)=z^2-x^2y^2=(z-xy)(z+xy).$$
通常隐函数存在条件下 $xy+z\ne 0$，故
$$T=z-xy.$$
所以
$$x\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}=z-xy.$$

**回代自检**：取 $F(u,v)=u+v-1$，可求得 $z=\frac{(1-x-y)xy}{x+y}$，直接计算有 $xz_x+yz_y=z-xy$；取 $F(u,v)=u-v$，则 $z=-xy$，也有 $xz_x+yz_y=-2xy=z-xy$。

**易错点**

- 对 $\frac{z}{x}$ 求导时，不能省略 $-\frac{z}{x^2}$ 项，对 $\frac{z}{y}$ 同理；漏项是本题最大易错点。
- 不要把 $F_u,F_v$ 当作已知量，要用“非零解→行列式为 0”消去它们；若 $F_u,F_v$ 同时为零，则隐函数定理条件不满足，不在常规考点内。
- 最后化简时注意因式分解 $z^2-x^2y^2=(z-xy)(z+xy)$，不要因符号出错。

**命题规律**

隐函数 + 多元复合函数求导是高频基础题，常在填空题中出现。复习时应熟练掌握“分别对 $x,y$ 求导，联立消元”的流程，并会用算子 $x\partial_x+y\partial_y$ 快速构建关系；多练习由 $F$ 未具体给出但结论与 $F$ 无关的题型。


> 来源：《26_李林六套卷（数一）》卷五 第 14 题
