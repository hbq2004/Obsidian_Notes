---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - LA
  - 26_张宇四套卷/卷四/FIB
  - 计算题
  - 非齐次线性方程组解的结构
  - 特解与基础解系
  - 解向量的线性组合
  - 秩与解空间维数
  - 线性无关判定
points:
level:
---

# 填空题 第 15 题

![[_Attachments/题目识别/ZY4T/ZY4T-S4-Q15_题目.png|题目]]

设 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4$ 是四元非齐次线性方程组 $\boldsymbol{Ax}=\boldsymbol{b}$ 的 4 个解向量，且 $\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2=(2,4,6,8)^{\mathrm{T}}$，$\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_4=(3,5,7,9)^{\mathrm{T}}$，$\boldsymbol{\alpha}_1+2\boldsymbol{\alpha}_2-\boldsymbol{\alpha}_3=(2,0,0,2)^{\mathrm{T}}$，若秩 $r(\boldsymbol{A})=2$，则方程组 $\boldsymbol{Ax}=\boldsymbol{b}$ 的通解是\_\_\_\_\_\_\_\_.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S4-Q15_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

填空题【答案】:
$$
\boxed{\boldsymbol{x}=(1,0,0,1)^{\mathrm T}+C_1(0,1,2,3)^{\mathrm T}+C_2(0,2,3,3)^{\mathrm T},\quad C_1,C_2\in\mathbb{R}}
$$

（若取特解 $(1,2,3,4)^{\mathrm T}$，也可写成 $(1,2,3,4)^{\mathrm T}+C_1(0,1,2,3)^{\mathrm T}+C_2(0,2,3,3)^{\mathrm T}$；常数符号任意。）

**解题切入点**

考查非齐次线性方程组解的结构：非齐次通解 = 特解 + 导出组通解。由 $r(A)=2$，未知数个数 $n=4$，故基础解系含 $4-2=2$ 个向量。关键是线性组合的“系数和”：若 $\sum c_i=1$，则 $\sum c_i\alpha_i$ 是特解；若 $\sum c_i=0$，则是 $Ax=0$ 的解。算法竞赛类比：非齐次特解是“起点”，两个特解之差是“差分方向”；秩告诉你要找几个方向。

**推演**

1. 因每个 $\alpha_i$ 都是 $Ax=b$ 的解，$A\alpha_i=b$。由线性性，
$$
A\left(\sum c_i\alpha_i\right)=\left(\sum c_i\right)b.
$$
所以组合系数和为 $1$ 时得到特解，系数和为 $0$ 时得到齐次解。

2. 取三个特解：
$$
\gamma_0=\frac12(\alpha_1+\alpha_2)=(1,2,3,4)^{\mathrm T},
$$
$$
\gamma_1=\frac13(\alpha_2+\alpha_3+\alpha_4)=\left(1,\frac53,\frac73,3\right)^{\mathrm T},
$$
$$
\gamma_2=\frac12(\alpha_1+2\alpha_2-\alpha_3)=(1,0,0,1)^{\mathrm T}.
$$

3. 作差得齐次解：
$$
\xi_1=3(\gamma_0-\gamma_1)=(0,1,2,3)^{\mathrm T},\qquad
\xi_2=\gamma_0-\gamma_2=(0,2,3,3)^{\mathrm T}.
$$
因 $\gamma_0-\gamma_1,\gamma_0-\gamma_2$ 均为两个特解之差，故 $A\xi_1=A\xi_2=0$。

4. 线性无关性：若 $k_1\xi_1+k_2\xi_2=0$，比较第二、三分量得 $k_1+2k_2=0$ 和 $2k_1+3k_2=0$，故 $k_1=k_2=0$。因此 $\xi_1,\xi_2$ 线性无关；又 $\dim N(A)=4-r(A)=2$，所以它们是导出组的基础解系。

5. 非齐次通解为
$$
\boldsymbol{x}=\gamma_2+k_1\xi_1+k_2\xi_2
=(1,0,0,1)^{\mathrm T}+k_1(0,1,2,3)^{\mathrm T}+k_2(0,2,3,3)^{\mathrm T},\quad k_1,k_2\in\mathbb{R}.
$$

**易错点**

- 不能把 $\alpha_1+\alpha_2$ 本身当特解；其右端为 $2b$，要除以 $2$。
- 只有组合系数和为 $0$ 时才是 $Ax=0$ 的解；系数和为 $1$ 时才是特解。若系数和为其他常数，需先归一化。
- 求出两个齐次解后一定要确认线性无关；本题 $r(A)=2$，基础解系恰有 $2$ 个向量，少写一个就丢维度。
- 通解形式不唯一，特解也可取 $(1,2,3,4)^{\mathrm T}$，但需要和相应基础解系搭配。

**命题规律**

这类题常给出多个解向量及线性组合，用 $r(A)$ 限定解空间维数，考查 $Ax=b$ 解的结构。破题顺序是：先由系数和为 $1$ 的组合找特解，再由特解之差找齐次解，最后检查线性无关。复习时应熟练掌握“非齐次通解 = 特解 + 导出组通解”和“秩—零化度定理”；遇到向量组合只看系数和，避免逐元素硬算。


> 来源：《26_张宇四套卷（数一）》卷四 第 15 题
