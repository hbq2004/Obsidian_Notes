---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷五/MCQ
  - 概念题
  - 空间直线位置关系
  - 平面法向量共面
  - 三平面交线平行
  - 线性相关判定
  - 直线方程对称式
points:
level:
---

# MCQ 第 6 题

![[_Attachments/题目识别/YBS5T/YBS5T-S5-Q06_题目.png|题目]]

如图所示，有 3 张平面两两相交，交线相互平行，它们的方程为
$$a_i x + b_i y + c_i z = d_i (i = 1, 2, 3)$$
则直线
$$L_1: \frac{x - a_3}{a_1} = \frac{y - b_3}{b_1} = \frac{z - c_3}{c_1}$$
与直线
$$L_2: \frac{x - a_1}{a_2} = \frac{y - b_1}{b_2} = \frac{z - c_1}{c_2}$$
的位置关系为( ).
(A) 相交于一点
(B) 重合
(C) 平行但不重合
(D) 异面

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S5-Q06_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(A) 相交于一点。

**解题切入点**

本题把平面的法向量 $\mathbf n_i=(a_i,b_i,c_i)$ 当作点坐标。可以类比计算几何：先判断两条直线是否共面，再判断方向向量是否平行。由三条交线平行可知三个法向量共面，故 $L_1,L_2$ 在同一平面内；又两个方向向量不平行，因此相交。

**推演**

设 $\Pi_i$ 的法向量为 $\mathbf n_i=(a_i,b_i,c_i)$。取三条两两交线的共同方向向量 $\mathbf v$。每条交线都在对应两个平面内，所以 $\mathbf v$ 平行于每个平面 $\Pi_i$，即
$$
\mathbf n_i\cdot \mathbf v=0\quad (i=1,2,3).
$$
因此 $\mathbf n_1,\mathbf n_2,\mathbf n_3$ 都垂直于同一非零向量 $\mathbf v$，共面，也就是线性相关：
$$
\det(\mathbf n_1,\mathbf n_2,\mathbf n_3)=0.
$$
又因 $\Pi_1,\Pi_2$ 相交成一条直线，$\mathbf n_1$ 与 $\mathbf n_2$ 不平行，故存在实数 $\lambda,\mu$，使
$$
\mathbf n_3=\lambda\mathbf n_1+\mu\mathbf n_2.
$$
两直线参数式为
$$
L_1:\mathbf r=\mathbf n_3+t\mathbf n_1,\qquad
L_2:\mathbf r=\mathbf n_1+s\mathbf n_2.
$$
取 $t=1-\lambda$，$s=\mu$，则
$$
\mathbf n_3+t\mathbf n_1
=(\lambda\mathbf n_1+\mu\mathbf n_2)+(1-\lambda)\mathbf n_1
=\mathbf n_1+\mu\mathbf n_2
=\mathbf n_1+s\mathbf n_2.
$$
故两直线有公共点 $\mathbf n_1+\mu\mathbf n_2$。又 $L_1$ 的方向向量为 $\mathbf n_1$，$L_2$ 的方向向量为 $\mathbf n_2$，二者不平行，所以交点唯一，不是重合也不是平行；有公共点，故不是异面。

选项判断：

- (A) 正确：两直线相交于一点。
- (B) 错误：若重合，方向向量应平行，但 $\mathbf n_1\not\parallel\mathbf n_2$。
- (C) 错误：平行但不重合也要求方向向量平行，事实上两直线相交。
- (D) 错误：异面指不相交也不平行，而两直线已有公共点。

**易错点**

1. 不要忽略“两平面相交成一条直线”意味着法向量不平行；这是排除 (B)(C) 的关键。
2. 三条交线平行应转化为“法向量共面/线性相关”，否则不能把 $\mathbf n_3$ 写成 $\mathbf n_1,\mathbf n_2$ 的线性组合。
3. 对称式方程要求方向向量对应分母非零；若某分母为 0，按“该分子为 0”理解。本题按所给对称式有意义理解。

**命题规律**

这类题把空间解析几何与线性代数中“行列式、线性相关”结合；常数 $d_i$ 不影响这两条直线的位置判断。复习时应熟练将直线写成参数式，并掌握“三平面交线平行 ⇔ 法向量共面”；遇到空间两直线位置关系，先看是否共面，再看方向向量是否平行。


> 来源：《26_余丙森五套卷（数一）》卷五 第 6 题
