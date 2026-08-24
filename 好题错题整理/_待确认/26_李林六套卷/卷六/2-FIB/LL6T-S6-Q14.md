---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - AM
  - 26_李林六套卷/卷六/FIB
  - 概念题
  - 梯度
  - 旋度
  - 混合偏导数相等
  - 向量恒等式
  - 二阶连续偏导数
points:
level:
---

# 填空题 第 14 题

![[_Attachments/题目识别/LL6T/LL6T-S6-Q14_题目.png|题目]]

设 $u = u(x, y, z)$ 有二阶连续偏导数, 则 $\operatorname{rot}(\operatorname{grad} u) = \_\_\_\_\_\_$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S6-Q14_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结论：梯度场的旋度恒为零向量。

【答案】

$$\boxed{\operatorname{rot}(\operatorname{grad} u)=\mathbf 0=(0,0,0)}$$

**解题切入点**

考查梯度、旋度定义以及二阶连续偏导数下混合偏导数与求导顺序无关。类似算法竞赛中“势能函数”的思想：对一个函数的差分再沿闭合路径求和必为 0，这里 $\operatorname{rot}(\operatorname{grad}u)=0$ 就是连续情形的“势函数无旋”。

**推演**

设 $\mathbf F=\operatorname{grad}u=(u_x,u_y,u_z)=(P,Q,R)$。对向量场 $\mathbf F=(P,Q,R)$，旋度定义为
$$
\operatorname{rot}\mathbf F=\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z},\ \frac{\partial P}{\partial z}-\frac{\partial R}{\partial x},\ \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right).
$$

代入 $P=u_x,\ Q=u_y,\ R=u_z$：

1. 第一分量：
$$
\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}
=\frac{\partial}{\partial y}\left(\frac{\partial u}{\partial z}\right)-\frac{\partial}{\partial z}\left(\frac{\partial u}{\partial y}\right)
=u_{zy}-u_{yz}=0.
$$

2. 第二分量：
$$
\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}
=\frac{\partial}{\partial z}\left(\frac{\partial u}{\partial x}\right)-\frac{\partial}{\partial x}\left(\frac{\partial u}{\partial z}\right)
=u_{xz}-u_{zx}=0.
$$

3. 第三分量：
$$
\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}
=\frac{\partial}{\partial x}\left(\frac{\partial u}{\partial y}\right)-\frac{\partial}{\partial y}\left(\frac{\partial u}{\partial x}\right)
=u_{yx}-u_{xy}=0.
$$

因此三个分量均为 0，故
$$
\operatorname{rot}(\operatorname{grad} u)=\mathbf 0.
$$

关键给分点：正确写出旋度定义并代入 $P,Q,R$；每一项利用二阶连续偏导数推出的混合偏导相等；最终结果写成零向量 $\mathbf 0$ 或 $(0,0,0)$。

**易错点**

- 结果是零向量，不是数 $0$；填空应写 $\mathbf 0$ 或 $(0,0,0)$。
- 旋度公式中各分量的“交叉求导”次序容易记错，要按 $R_y-Q_z,\ P_z-R_x,\ Q_x-P_y$ 记忆。
- 题设“二阶连续偏导数”是保证 $u_{xy}=u_{yx}$ 等混合偏导相等；若无此条件，该恒等式不一定成立。

**命题规律**

这是向量场微分运算的基本恒等式，常在选择题或填空题中直接考查，也可作为斯托克斯公式、平面曲线积分与路径无关等题目的前置结论。复习时熟练背诵两组恒等式：$\operatorname{rot}(\operatorname{grad}u)=\mathbf 0$，$\operatorname{div}(\operatorname{rot}\mathbf A)=0$。


> 来源：《26_李林六套卷（数一）》卷六 第 14 题
