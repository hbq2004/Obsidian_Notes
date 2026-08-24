---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - LA
  - 26_李林六套卷/卷二/FRQ
  - 计算题
  - 实对称矩阵对角化
  - 二次型化为规范形
  - 正定矩阵特征值
  - 合同变换
points:
level:
---

# 解答题 第 21 题

![[_Attachments/题目识别/LL6T/LL6T-S2-Q21_题目.png|题目]]

设正定矩阵 $B = \begin{pmatrix} a & 0 & -\frac{1}{2} \\ 0 & 1 & 0 \\ -\frac{1}{2} & 0 & a \end{pmatrix}$ 有二重特征值，$A$ 为 3 阶实对称矩阵，且满足 $AB = 3A - B$.
$(I)$ 求 $a$ 的值，并求正交矩阵 $Q$，使得 $Q^{-1}BQ = \Lambda$;
$(II)$ 求一个可逆线性变换 $X = PY$，将 $X^{T}ABX$ 化为规范形.

![[_Attachments/题目识别/LL6T-答案/LL6T-S2-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$a=\frac{3}{2}$；$Q=\begin{pmatrix} \frac{1}{\sqrt{2}} & 0 & \frac{1}{\sqrt{2}} \\ 0 & 1 & 0 \\ \frac{1}{\sqrt{2}} & 0 & -\frac{1}{\sqrt{2}} \end{pmatrix}$，且$Q^{-1}BQ=\mathrm{diag}(1,1,2)$。

可逆线性变换$X=PY$，其中$P=\begin{pmatrix} 1 & 0 & \frac{1}{2\sqrt{2}} \\ 0 & \sqrt{2} & 0 \\ 1 & 0 & -\frac{1}{2\sqrt{2}} \end{pmatrix}$，将$X^{T}ABX$化为规范形$y_1^2+y_2^2+y_3^2$。

关键给分点：①由重特征值与正定求$a$；②求正交矩阵$Q$；③由方程解出$A$；④合同变换求$P$。

**解题切入点**

本题可类比算法竞赛中的“特征分解降维”：先将$B$正交对角化，再解矩阵方程得$A$，最后利用正交变换加伸缩将二次型化为规范形。

**推演**

（1）求$a$：$B$的特征值为$a-\frac{1}{2}, a+\frac{1}{2}, 1$。正定要求三者均大于0，故$a>\frac{1}{2}$。有二重特征值，只能$a-\frac{1}{2}=1$（另一情形$a+\frac{1}{2}=1$得$a=\frac{1}{2}$不满足正定），因此$a=\frac{3}{2}$。此时特征值为$1,1,2$。

（2）求$Q$：
- 对$\lambda=1$，解$(B-I)X=0$，得基础解系$(1,0,1)^T, (0,1,0)^T$，正交单位化为$e_1=(\frac{1}{\sqrt{2}},0,\frac{1}{\sqrt{2}})^T$，$e_2=(0,1,0)^T$。
- 对$\lambda=2$，解$(B-2I)X=0$，得$(1,0,-1)^T$，单位化为$e_3=(\frac{1}{\sqrt{2}},0,-\frac{1}{\sqrt{2}})^T$。
故$Q=(e_1,e_2,e_3)$，且$Q^{-1}BQ=\mathrm{diag}(1,1,2)$。

（3）求$A$：令$\Lambda=\mathrm{diag}(1,1,2)$，$B=Q\Lambda Q^T$，设$A=QCQ^T$（$C$待定）。代入$AB=3A-B$得$QC\Lambda Q^T=3QCQ^T-Q\Lambda Q^T$，左乘$Q^T$右乘$Q$得$C\Lambda=3C-\Lambda$。比较元素得$C=\mathrm{diag}(\frac{1}{2},\frac{1}{2},2)$。于是$A=Q\mathrm{diag}(\frac{1}{2},\frac{1}{2},2)Q^T$。

（4）化规范形：取$X=QZ$，则$X^TABX=Z^TQ^TABQZ=Z^T(C\Lambda)Z$，而$C\Lambda=\mathrm{diag}(\frac{1}{2},\frac{1}{2},4)$，故$f=\frac{1}{2}z_1^2+\frac{1}{2}z_2^2+4z_3^2$。令$Z=DY$，$D=\mathrm{diag}(\sqrt{2},\sqrt{2},\frac{1}{2})$，则$f=y_1^2+y_2^2+y_3^2$。因此$X=QDY=PY$，$P=QD$，计算得$P=\begin{pmatrix} 1 & 0 & \frac{1}{2\sqrt{2}} \\ 0 & \sqrt{2} & 0 \\ 1 & 0 & -\frac{1}{2\sqrt{2}} \end{pmatrix}$。

**易错点**

- 求$a$时须结合正定条件排除$a=\frac{1}{2}$。
- $Q$中列向量的顺序要与$\Lambda$对角元的顺序一致，否则$Q^{-1}BQ$不是预期的$\Lambda$。
- 解$A$时不能简单地将$AB$视为$BA$，要利用$A$与$B$可同时对角化，通过$C$矩阵方程求解。
- 化规范形时，先正交变换再伸缩，伸缩系数要对应平方项系数的倒数开方。

**命题规律**

本题综合了实对称矩阵正交对角化、矩阵方程求解和二次型标准化。命题趋势是“求参数→对角化→解矩阵→化标准形”，复习时务必掌握特征值分解的步骤和二次型规范形的判别。


> 来源：《26_李林六套卷（数一）》卷二 第 21 题
