---
ctime: 2026-08-23 23:04:13
mtime: 2026-08-23 23:04:13
tags:
  - LA
  - 26_姜晓千四套卷/卷四/FRQ
  - 计算题
  - 非齐次通解结构
  - 矩阵的秩
  - 基础解系
  - 列向量线性表示
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S4-Q21_题目.png|题目]]

设 4 阶矩阵 $A=(\alpha_1, \alpha_2, \alpha_3, \alpha_4)$ ，非齐次线性方程组 $Ax=\beta$ 的通解为 $k_1(1,2,0,1)^T + k_2(-1,1,1,0)^T + (1,-1,2,1)^T$ ，其中 $k_1,k_2$ 为任意常数. 若 $B=(\alpha_1, \alpha_2, \alpha_3)$ ，求线性方程组 $By=\beta$ 的通解.

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S4-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

解答题【答案】：$By=\beta$ 的通解为
$$
y=(2,-5,0)^T+t(-1,1,1)^T,\quad t\in\mathbb{R},
$$
即 $y=(2-t,\,-5+t,\,t)^T$。

关键给分点：
1. 由题设知 $\eta_1,\eta_2$ 是 $Ax=0$ 的基础解系，故 $A\eta_1=0,\ A\eta_2=0$，得 $\alpha_3=\alpha_1-\alpha_2,\ \alpha_4=-\alpha_1-2\alpha_2$；
2. 由 $Ax_0=\beta$ 得 $\beta=2\alpha_1-5\alpha_2$；
3. 取特解 $y_0=(2,-5,0)^T$；
4. 解 $Bz=0$ 得基础解系 $(-1,1,1)^T$；
5. 特解加齐次通解得最终通解。

**解题切入点**

已知非齐次通解等价于已知“特解 + 零空间”；像算法题中已知映射的 kernel 与一个可行解，先用零空间向量还原列向量的线性关系，再判断目标向量 $\beta$ 在 $B$ 列空间中的表示。

**推演**

设 $\eta_1=(1,2,0,1)^T,\ \eta_2=(-1,1,1,0)^T,\ x_0=(1,-1,2,1)^T$。

由 $x=\eta_1,\eta_2$ 是 $Ax=0$ 的解：
$$
A\eta_1=\alpha_1+2\alpha_2+\alpha_4=0,
$$
$$
A\eta_2=-\alpha_1+\alpha_2+\alpha_3=0.
$$
故
$$
\alpha_3=\alpha_1-\alpha_2,\qquad
\alpha_4=-\alpha_1-2\alpha_2.
$$
又 $x_0$ 是 $Ax=\beta$ 的特解：
$$
\beta=Ax_0=\alpha_1-\alpha_2+2\alpha_3+\alpha_4.
$$
代入上述关系：
$$
\beta=\alpha_1-\alpha_2+2(\alpha_1-\alpha_2)+(-\alpha_1-2\alpha_2)
=2\alpha_1-5\alpha_2.
$$
由题设，$\eta_1,\eta_2$ 线性无关且为 $Ax=0$ 的基础解系，故 $\dim\ker A=2$，$r(A)=4-2=2$。而 $A$ 的列都可由 $\alpha_1,\alpha_2$ 线性表示，所以 $\alpha_1,\alpha_2$ 线性无关，$r(B)=r(\alpha_1,\alpha_2,\alpha_3)=2$。

令 $y=(y_1,y_2,y_3)^T$，则
$$
By=y_1\alpha_1+y_2\alpha_2+y_3\alpha_3
=(y_1+y_3)\alpha_1+(y_2-y_3)\alpha_2.
$$
因 $\alpha_1,\alpha_2$ 线性无关，$By=0$ 等价于
$$
y_1+y_3=0,\qquad y_2-y_3=0.
$$
取 $y_3=t$，得
$$
z=t(-1,1,1)^T.
$$
又由 $\beta=2\alpha_1-5\alpha_2$，取 $y_0=(2,-5,0)^T$，则 $By_0=\beta$。

故
$$
y=y_0+z=(2,-5,0)^T+t(-1,1,1)^T
=(2-t,-5+t,t)^T,\quad t\in\mathbb{R}.
$$
自检：$B(-1,1,1)^T=-\alpha_1+\alpha_2+\alpha_3=0$，$B(2,-5,0)^T=2\alpha_1-5\alpha_2=\beta$。

**易错点**

1. 混淆 $Ax=\beta$ 的未知元 $x\in\mathbb{R}^4$ 与 $By=\beta$ 的未知元 $y\in\mathbb{R}^3$。
2. 直接把 $x_0$ 的前三个分量 $(1,-1,2)^T$ 当作 $By=\beta$ 的特解；实际上 $\alpha_4$ 对 $\beta$ 有贡献，必须先消去 $\alpha_4$。
3. 忽略齐次解提供的列向量关系，符号写反：由 $-\alpha_1+\alpha_2+\alpha_3=0$ 应是 $\alpha_3=\alpha_1-\alpha_2$。
4. 漏掉求 $Bz=0$ 的基础解系，导致只写特解。

**命题规律**

本题是“给非齐次通解反求列向量关系，再求另一个方程通解”的典型题，核心是线性方程组的解结构与矩阵列空间/零空间。复习时要把非齐次通解、齐次基础解系、矩阵的秩、列向量线性表示联系起来，多练习“由解反推系数矩阵列关系”的题目。


> 来源：《26_姜晓千四套卷（数一）》卷四 第 21 题
