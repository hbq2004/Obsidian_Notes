---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - LA
  - 26_余丙森五套卷/卷三/MCQ
  - 概念题
  - 方程组有解判定
  - 矩阵秩
  - 列空间与零空间
  - 法方程
  - 正交补
points:
level:
---

# MCQ 第 5 题

![[_Attachments/题目识别/YBS5T/YBS5T-S3-Q05_题目.png|题目]]

5. 设线性方程组 $A\mathbf{x} = \boldsymbol{\alpha}$ 有解, $\begin{pmatrix} \boldsymbol{A} \\ \boldsymbol{B} \end{pmatrix}\boldsymbol{x} = \begin{pmatrix} \boldsymbol{\alpha} \\ \boldsymbol{\beta} \end{pmatrix}$ 无解, 则下列结论中不正确的是 ( ).

(A) $r(\boldsymbol{B},\boldsymbol{\beta}) = r(\boldsymbol{B}) + 1$

(B) $r\begin{pmatrix} \boldsymbol{A} & \boldsymbol{\alpha} \\ \boldsymbol{B} & \boldsymbol{\beta} \end{pmatrix} = r\begin{pmatrix} \boldsymbol{A} \\ \boldsymbol{B} \end{pmatrix} + 1$

(C) $r\left[\boldsymbol{B}^{\mathrm{T}}(\boldsymbol{B},\boldsymbol{\beta})\right] = r(\boldsymbol{B}^{\mathrm{T}}\boldsymbol{B})$

(D) $r\left((\boldsymbol{A}^{\mathrm{T}},\boldsymbol{B}^{\mathrm{T}})\begin{pmatrix} \boldsymbol{A} & \boldsymbol{\alpha} \\ \boldsymbol{B} & \boldsymbol{\beta} \end{pmatrix}\right) = r\left((\boldsymbol{A}^{\mathrm{T}},\boldsymbol{B}^{\mathrm{T}})\begin{pmatrix} \boldsymbol{A} \\ \boldsymbol{B} \end{pmatrix}\right).$

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S3-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
【答案】: (A)
【推演】设 $A\mathbf{x}=\boldsymbol{\alpha}$ 有解，故存在 $\mathbf{x}_0$ 使 $A\mathbf{x}_0=\boldsymbol{\alpha}$。又分块方程组无解，则其增广矩阵的秩比系数矩阵的秩大 1，因此 (B) 正确。

(C) 中：$r\big(B^{\mathrm{T}}(B,\boldsymbol{\beta})\big)=r(B^{\mathrm{T}}B,\,B^{\mathrm{T}}\boldsymbol{\beta})$。由于 $r(B^{\mathrm{T}}B)=r(B)$，且 $B^{\mathrm{T}}\boldsymbol{\beta}\in \operatorname{Col}(B^{\mathrm{T}})=\operatorname{Col}(B^{\mathrm{T}}B)$（实矩阵），故 (C) 正确。

(D) 令 $M=A^{\mathrm{T}}A+B^{\mathrm{T}}B$，则左边矩阵为 $(M,\,A^{\mathrm{T}}\boldsymbol{\alpha}+B^{\mathrm{T}}\boldsymbol{\beta})$，右边为 $r(M)$。因 $A\boldsymbol{\alpha}=A^{\mathrm{T}}A\mathbf{x}_0$，有
$$
A^{\mathrm{T}}\boldsymbol{\alpha}+B^{\mathrm{T}}\boldsymbol{\beta}=M\mathbf{x}_0+B^{\mathrm{T}}(\boldsymbol{\beta}-B\mathbf{x}_0).
$$
对任意 $\mathbf{w}\in N(M)$，由 $\mathbf{w}^{\mathrm{T}}M\mathbf{w}=0$ 得 $A\mathbf{w}=0$ 且 $B\mathbf{w}=0$，故 $\mathbf{w}^{\mathrm{T}}B^{\mathrm{T}}(\boldsymbol{\beta}-B\mathbf{x}_0)=0$，所以 $B^{\mathrm{T}}(\boldsymbol{\beta}-B\mathbf{x}_0)\in \operatorname{Col}(M)$。于是 (D) 正确。

(A) 不一定成立。例如取 $A=[1]$, $\boldsymbol{\alpha}=[1]$, $B=[1]$, $\boldsymbol{\beta}=[0]$，则 $A\mathbf{x}=\boldsymbol{\alpha}$ 有解，分块无解，但 $r(B,\boldsymbol{\beta})=r([1\,0])=1$，而 $r(B)=1$，故 $r(B,\boldsymbol{\beta})=r(B)$，不等于 $+1$。所以 (A) 错误。

**解题切入点**
将方程组有解/无解转化为矩阵秩的关系，类似算法竞赛中“判断约束冲突”：先看子约束可解，再看整体约束是否新增矛盾。用秩和列空间/零空间的正交性逐一排除。

**推演**
1. 由 $A\mathbf{x}=\boldsymbol{\alpha}$ 有解，得 $r(A,\boldsymbol{\alpha})=r(A)$，且存在 $\mathbf{x}_0$。
2. 由分块无解，得 $r\begin{pmatrix}A&\boldsymbol{\alpha}\\B&\boldsymbol{\beta}\end{pmatrix}=r\begin{pmatrix}A\\B\end{pmatrix}+1$，即 (B) 正确。
3. 对 (C)：$B^{\mathrm{T}}(B,\boldsymbol{\beta})=(B^{\mathrm{T}}B,\,B^{\mathrm{T}}\boldsymbol{\beta})$。因 $\operatorname{Col}(B^{\mathrm{T}}B)=\operatorname{Col}(B^{\mathrm{T}})$，且 $B^{\mathrm{T}}\boldsymbol{\beta}\in\operatorname{Col}(B^{\mathrm{T}})$，故秩不变。
4. 对 (D)：设 $M=A^{\mathrm{T}}A+B^{\mathrm{T}}B$，证明 $A^{\mathrm{T}}\boldsymbol{\alpha}+B^{\mathrm{T}}\boldsymbol{\beta}\in\operatorname{Col}(M)$。任取 $\mathbf{w}\in N(M)$，由 $\mathbf{w}^{\mathrm{T}}M\mathbf{w}=0$ 得 $A\mathbf{w}=0$ 且 $B\mathbf{w}=0$，进而 $\mathbf{w}^{\mathrm{T}}B^{\mathrm{T}}(\boldsymbol{\beta}-B\mathbf{x}_0)=0$，故该向量属于 $\operatorname{Col}(M)$。所以 (D) 正确。
5. 反例说明 (A) 不成立，故选 (A)。

**易错点**
- 不要误认为分块无解 ⇒ 子方程 $B\mathbf{x}=\boldsymbol{\beta}$ 必无解；子方程可能各自有解，但整体矛盾。
- 注意 (C) 和 (D) 中的“法方程”思想：转置后列空间相同，需利用零空间正交补。
- 反例构造是排除选择题错误选项的有力手段。

**命题规律**
考研线代常考“方程组解的存在性”与“秩”的转化，尤其是分块矩阵和转置乘积的秩关系。复习时需熟记：$r(A^{\mathrm{T}}A)=r(A)$，$\operatorname{Col}(A^{\mathrm{T}}A)=\operatorname{Col}(A^{\mathrm{T}})$ 等结论，并会构造反例。


> 来源：《26_余丙森五套卷（数一）》卷三 第 5 题
