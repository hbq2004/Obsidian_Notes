---
ctime: 2026-08-24 15:13:04
mtime: 2026-08-24 15:13:04
tags:
  - LA
  - 26_余丙森五套卷/卷五/FIB
  - 计算题
  - 两两正交单位向量
  - 向量内积计算
  - 向量正交条件
  - 内积线性性
points:
level:
---

# FIB 第 15 题

![[_Attachments/题目识别/YBS5T/YBS5T-S5-Q15_题目.png|题目]]

设 $\boldsymbol{\alpha}_1, \boldsymbol{\alpha}_2, \boldsymbol{\alpha}_3$ 是两两正交的单位列向量，若 $\boldsymbol{\xi} = \boldsymbol{\alpha}_1 - \boldsymbol{\alpha}_2 + \boldsymbol{\alpha}_3$ 与 $\boldsymbol{\eta} = a\boldsymbol{\alpha}_1 + b\boldsymbol{\alpha}_2 - c\boldsymbol{\alpha}_3$ 正交，则常数 $a, b, c$ 应满足的条件是\_.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S5-Q15_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】: 横线处应填 $$\boxed{a-b-c=0}$$，即 $a=b+c$。

**解题切入点**

由 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 是两两正交的单位向量，可知它们构成一组标准正交基。向量正交等价于内积为 $0$，类似于算法竞赛中判断两向量点积是否为 $0$；在本组基下计算点积就是对应坐标乘积之和。

**推演**

因 $\boldsymbol{\alpha}_i\cdot\boldsymbol{\alpha}_j=0\ (i\neq j)$，且 $\boldsymbol{\alpha}_i\cdot\boldsymbol{\alpha}_i=1$，所以
$$
\boldsymbol{\xi}\cdot\boldsymbol{\eta}
=(\boldsymbol{\alpha}_1-\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3)\cdot(a\boldsymbol{\alpha}_1+b\boldsymbol{\alpha}_2-c\boldsymbol{\alpha}_3)
$$
利用内积的线性性展开，所有不同下标交叉项均为 $0$，只剩
$$
\boldsymbol{\xi}\cdot\boldsymbol{\eta}
=a\boldsymbol{\alpha}_1\cdot\boldsymbol{\alpha}_1-b\boldsymbol{\alpha}_2\cdot\boldsymbol{\alpha}_2-c\boldsymbol{\alpha}_3\cdot\boldsymbol{\alpha}_3
=a-b-c.
$$
因为 $\boldsymbol{\xi}$ 与 $\boldsymbol{\eta}$ 正交，故
$$
a-b-c=0.
$$
因此常数 $a,b,c$ 应满足 $a-b-c=0$。

**易错点**

1. 要注意 $\boldsymbol{\eta}$ 中 $\boldsymbol{\alpha}_3$ 的系数是 $-c$，展开后第三项为 $-c$，不是 $+c$。
2. 条件是一个线性方程，不要误写成 $a+b+c=0$ 或 $a=b=c$。
3. 两两正交且单位保证了各项系数可直接作为坐标内积，交叉项不要漏掉但要记为零。

**命题规律**

本题属于基础送分题，核心是正交向量组的内积计算。考研线代常将正交、内积与正交矩阵、施密特正交化、二次型标准化结合考查。复习时熟练写出标准正交基下内积的坐标表达式即可快速得分。


> 来源：《26_余丙森五套卷（数一）》卷五 第 15 题
