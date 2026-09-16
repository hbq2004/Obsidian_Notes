---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - LA
  - 26_李林六套卷/卷五/FRQ
  - 计算题
  - 实对称矩阵对角化
  - 分块矩阵行列式
  - Schur补
  - 二次型正交变换
  - 特征值特征向量
points:
level:
---

# 解答题 第 21 题

![[_Attachments/题目识别/LL6T/LL6T-S5-Q21_题目.png|题目]]

设 3 阶实对称矩阵 $A$ 有二重特征值 1，且 $(A-4E)\alpha=0$，其中 $E$ 是单位矩阵，$\alpha=(1,1,1)^T$.
$(I)$ 求 $A$；
$(II)$ 记 $X=(x_1,x_2,x_3)^T$，利用正交变换，将二次型 $f(x_1,x_2,x_3)=\begin{vmatrix} A & -X \\ X^T & 0 \end{vmatrix}$ 化为标准形.

![[_Attachments/题目识别/LL6T-答案/LL6T-S5-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(I) $A=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}$。

(II) 取正交变换 $X=QY$，其中
$$Q=\begin{pmatrix}\frac1{\sqrt3}&\frac1{\sqrt2}&\frac1{\sqrt6}\\\frac1{\sqrt3}&-\frac1{\sqrt2}&\frac1{\sqrt6}\\\frac1{\sqrt3}&0&-\frac2{\sqrt6}\end{pmatrix},$$
则 $f=y_1^2+4y_2^2+4y_3^2$。

关键给分点：由 $(A-4E)\alpha=0$ 得 $A\alpha=4\alpha$，特征值为 $1,1,4$；用谱分解或待定系数得 $A$；用分块行列式 Schur 补得 $f=4X^TA^{-1}X$；求 $4A^{-1}$ 的特征值与单位特征向量；写出正交变换和标准形。

**解题切入点**

线代中的“先特征分解，再合同对角化”问题。已知特征向量求矩阵，类似于算法竞赛中已知矩阵作用在某个向量上的结果，先还原矩阵的谱分解；第二步把 4 阶分块行列式看成 Schur 补，降维成 3 阶二次型，再正交对角化。

**推演**

1. 求 $A$。

因为 $(A-4E)\alpha=0$，所以 $A\alpha=4\alpha$，故 $4$ 是特征值，$\alpha$ 是对应特征向量。$A$ 是 3 阶实对称矩阵，又有二重特征值 $1$，故全体特征值为 $1,1,4$。

令 $J=\alpha\alpha^T=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}$，$\alpha^T\alpha=3$。实对称矩阵可正交对角化，特征值 $1$ 的特征子空间是 $\alpha^\perp$，所以
$$A=4\frac{\alpha\alpha^T}{\alpha^T\alpha}+1\left(I-\frac{\alpha\alpha^T}{\alpha^T\alpha}\right)=I+J=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}.$$
检查：$A\alpha=(4,4,4)^T$，且对 $\alpha^\perp$ 中向量作用为单位变换。

2. 化二次型。

对分块矩阵 $M=\begin{pmatrix}A&-X\\X^T&0\end{pmatrix}$，因 $A$ 可逆，用 Schur 补：
$$\det M=\det A\cdot \det(0-X^TA^{-1}(-X))=4X^TA^{-1}X.$$
所以 $f=X^T(4A^{-1})X$。

由 $A=I+J$ 得
$$A^{-1}=I-\frac14J,\qquad 4A^{-1}=4I-J=\begin{pmatrix}3&-1&-1\\-1&3&-1\\-1&-1&3\end{pmatrix}.$$
因为 $J\alpha=3\alpha$，$Jv=0$（$v\perp\alpha$），所以 $B=4I-J$ 的特征值为 $1$（对应 $\alpha$）和 $4$（二重，对应 $\alpha^\perp$）。

3. 正交变换。取
$$q_1=\frac1{\sqrt3}(1,1,1)^T,\quad q_2=\frac1{\sqrt2}(1,-1,0)^T,\quad q_3=\frac1{\sqrt6}(1,1,-2)^T.$$
它们构成标准正交基，且分别属于特征值 $1,4,4$。令 $Q=(q_1,q_2,q_3)$，$X=QY$，则
$$Q^TBQ=\mathrm{diag}(1,4,4),$$
故
$$f=X^TBX=Y^TQ^TBQY=y_1^2+4y_2^2+4y_3^2.$$
回代自检：$B$ 的迹 $3+3+3=9$，与标准形系数和 $1+4+4=9$ 一致；$\det B=16$，也与 $1\cdot4\cdot4=16$ 一致。

**易错点**

- 分块行列式中的 $-X$ 不能丢掉：$D-CA^{-1}B=0-X^TA^{-1}(-X)=X^TA^{-1}X$，若误把 $-X$ 写成 $X$，会多一个负号。
- 不要漏乘 $\det A=4$，二次型矩阵是 $4A^{-1}$ 而不是 $A^{-1}$。
- 二重特征值 $4$ 对应的特征子空间是 $\alpha^\perp$，其中正交基可任取；标准形系数相同，但 $Q$ 不唯一。
- 实对称矩阵的不同特征值特征向量自动正交，仍需单位化。

**命题规律**

此题是典型的“特征值、特征向量 + 分块矩阵 + 二次型标准化”综合题。先通过特征向量条件确定矩阵，再用 Schur 补把高阶行列式转化为低阶二次型，最后正交对角化。复习时应熟练掌握实对称矩阵的正交对角化、分块行列式的 Schur 补公式，以及二次型标准形的写法。


> 来源：《26_李林六套卷（数一）》卷五 第 21 题
