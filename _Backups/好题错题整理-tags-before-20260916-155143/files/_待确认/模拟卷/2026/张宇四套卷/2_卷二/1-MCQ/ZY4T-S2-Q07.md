---
ctime: 2026-08-24 07:13:13
mtime: 2026-08-24 07:13:13
tags:
  - LA
  - 26_张宇四套卷/卷二/MCQ
  - 概念题
  - 线性相关与无关
  - 向量组秩
  - 直线共点条件
  - 非齐次线性方程组有唯一解
points:
level:
---

# 选择题 第 7 题

![[_Attachments/题目识别/ZY4T/ZY4T-S2-Q07_题目.png|题目]]

设 $\boldsymbol{\alpha}_1=(a_1,a_2,a_3)^{\mathrm{T}},\boldsymbol{\alpha}_2=(b_1,b_2,b_3)^{\mathrm{T}},\boldsymbol{\alpha}_3=(c_1,c_2,c_3)^{\mathrm{T}}$ (其中 $a_i^2 + b_i^2 \neq 0, \ i=1,2,3$)，则三条直线 $a_i x + b_i y + c_i = 0 \ (i=1,2,3)$ 交于一点的充分必要条件是
(A). $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 线性相关.
(B). $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 线性相关，但 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 线性无关.
(C). 向量组 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 的秩等于向量组 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 的秩.
(D). $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 线性无关.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S2-Q07_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(B)。三条直线交于一点，等价于向量方程 $x\alpha_1+y\alpha_2+\alpha_3=0$ 有唯一解。

**解题切入点**

把三行方程“竖起来”合成一个向量方程，几何共点就变成线性方程组解的存在唯一性。算法竞赛视角：3 个方程、2 个未知量的线性系统，用系数矩阵的秩判定即可。

**推演**

设第 $i$ 条直线的系数行向量为 $(a_i,b_i,c_i)$，它们恰好是矩阵 $[\alpha_1\ \alpha_2\ \alpha_3]$ 的第 $i$ 行。若三线交于 $(x_0,y_0)$，则
$$
x_0\alpha_1+y_0\alpha_2+\alpha_3=0.
$$
因此 $\alpha_3=-x_0\alpha_1-y_0\alpha_2$，即 $\alpha_3$ 可由 $\alpha_1,\alpha_2$ 线性表示，所以 $\alpha_1,\alpha_2,\alpha_3$ 线性相关；并且为保证交点唯一，表示系数必须唯一，故 $\alpha_1,\alpha_2$ 线性无关。

反之，若 $\alpha_1,\alpha_2,\alpha_3$ 线性相关且 $\alpha_1,\alpha_2$ 线性无关，则可唯一写出 $\alpha_3=\lambda_1\alpha_1+\lambda_2\alpha_2$。取 $x_0=-\lambda_1,\ y_0=-\lambda_2$，三条直线均过此点；由 $\alpha_1,\alpha_2$ 无关，该点是唯一的。所以选 (B)。

选项辨析：
- (A) 仅线性相关不够。如三条平行直线 $x=0,x=1,x=2$，对应 $\alpha_1=(1,1,1)^T,\alpha_2=(0,0,0)^T,\alpha_3=(0,-1,-2)^T$，线性相关但不相交于一点。
- (B) 正确。
- (C) 秩相等只保证有公共点，不保证唯一。如三条重合直线 $x=0$，对应 $\alpha_1=(1,1,1)^T,\alpha_2=(0,0,0)^T,\alpha_3=(0,0,0)^T$，秩相等但公共点无穷多。
- (D) 线性无关时 $\alpha_3$ 不能由 $\alpha_1,\alpha_2$ 表示，方程组无解，不可能共点。

**易错点**

1. 不要把 $\alpha_i$ 误当作第 $i$ 条直线的系数行向量；本题第 $i$ 条直线的系数是 $\alpha_1,\alpha_2,\alpha_3$ 的第 $i$ 个分量组成的行。
2. “线性相关”只推出有非零关系，可能对应平行或重合；必须再要求 $\alpha_1,\alpha_2$ 无关，才能排除无穷多解并保证唯一交点。
3. (C) 的秩相等是“有解”条件，不是“唯一解”条件，重合直线就是反例。

**命题规律**

将解析几何的直线共点问题转化为线性方程组的解的存在唯一性，是线代与解析几何结合的高频考点。复习时抓住“有解看秩相等，唯一解看列无关”，并注意区分“共点”与“交于一点”。


> 来源：《26_张宇四套卷（数一）》卷二 第 7 题
