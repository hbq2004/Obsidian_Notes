---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - LA
  - 26_姜晓千四套卷/卷三/MCQ
  - 计算题
  - 相似对角化
  - 伴随矩阵
  - 特征值与特征向量
  - 逆矩阵
points:
level:
---

# MCQ 第 7 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S3-Q07_题目.png|题目]]

设 $\mathbf{A}$ 为 3 阶矩阵，$\mathbf{P}=(\boldsymbol{\alpha}_{1},\boldsymbol{\alpha}_{2},\boldsymbol{\alpha}_{3})$ 为 3 阶可逆矩阵，且满足 $\mathbf{P}^{-1}\mathbf{A}\mathbf{P}=\begin{pmatrix}1 & 0 & 0\\0 & -2 & 0\\0 & 0 & -1\end{pmatrix}$. 若 $\mathbf{Q}=(3 \boldsymbol{\alpha}_{2},2 \boldsymbol{\alpha}_{3},-\boldsymbol{\alpha}_{1})$ ，则 $\mathbf{Q}^{-1}(A^{*}+E)\mathbf{Q}=(\quad).$
(A) $\begin{pmatrix}0 & & \\ & -1 & \\ & & 3\end{pmatrix}$
(B) $\begin{pmatrix}3 & & \\ & 0 & \\ & & -1\end{pmatrix}$
(C) $\begin{pmatrix}1 & & \\ & -2 & \\ & & -1\end{pmatrix}$
(D) $\begin{pmatrix}-2 & & \\ & -1 & \\ & & 1\end{pmatrix}$

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S3-Q07_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】: (A)

【推演】: 
选项(A) $\begin{pmatrix}0 & & \\ & -1 & \\ & & 3\end{pmatrix}$ 正确，因为通过计算 $Q^{-1}(A^*+E)Q$ 得到对角矩阵 $\operatorname{diag}(0,-1,3)$，与选项(A)一致。
选项(B) $\begin{pmatrix}3 & & \\ & 0 & \\ & & -1\end{pmatrix}$ 错误，因为顺序不对或特征值加减错误。
选项(C) $\begin{pmatrix}1 & & \\ & -2 & \\ & & -1\end{pmatrix}$ 错误，这是 $A$ 的特征值对角阵，而不是 $A^*+E$ 的。
选项(D) $\begin{pmatrix}-2 & & \\ & -1 & \\ & & 1\end{pmatrix}$ 错误，这是 $A^*$ 的特征值对角阵，但未加 $E$。

**解题切入点**
考查相似对角化与伴随矩阵的性质。关键利用 $A$ 可对角化且已知特征向量，通过构造相似变换 $Q$ 直接得到 $Q^{-1}AQ$ 为对角阵，进而利用 $A^*=\det(A)A^{-1}$ 计算 $A^*+E$ 在 $Q$ 下的表示。类比算法竞赛中“已知特征值和特征向量，求线性变换在不同基下的矩阵”，即基变换下的矩阵相似。

**推演**
1. 由 $P^{-1}AP=\Lambda=\operatorname{diag}(1,-2,-1)$，知 $A$ 的特征值 $\lambda_1=1,\lambda_2=-2,\lambda_3=-1$，对应特征向量 $\alpha_1,\alpha_2,\alpha_3$。
2. 计算 $\det(A)=1\times(-2)\times(-1)=2$，故 $A^*=\det(A)A^{-1}=2A^{-1}$。
3. $Q=(3\alpha_2,2\alpha_3,-\alpha_1)$，其列向量分别是 $\alpha_2,\alpha_3,\alpha_1$ 的线性组合，仍为特征向量，对应特征值依次为 $-2,-1,1$。因此 $Q^{-1}AQ=\operatorname{diag}(-2,-1,1)$。
4. 于是 $Q^{-1}A^{-1}Q=\operatorname{diag}(-1/2,-1,1)$，进而 $Q^{-1}(A^*+E)Q=2Q^{-1}A^{-1}Q+E=2\operatorname{diag}(-1/2,-1,1)+I=\operatorname{diag}(-1,-2,2)+I=\operatorname{diag}(0,-1,3)$。
5. 所以结果为 $\begin{pmatrix}0 & 0 & 0\\0 & -1 & 0\\0 & 0 & 3\end{pmatrix}$，对应选项(A)。

**易错点**
- 混淆特征向量的顺序，导致 $Q^{-1}AQ$ 对角元顺序错误。
- 忘记伴随矩阵公式 $A^*=\det(A)A^{-1}$ 仅适用于可逆矩阵，或误用 $A^*$ 与特征值的关系（$A^*$ 的特征值为 $\det(A)/\lambda$）。
- 计算 $Q^{-1}AQ$ 时，需确认 $Q$ 的列确实是特征向量，且对应特征值准确。
- 在 $Q^{-1}(A^*+E)Q$ 中，注意 $E$ 在相似变换下不变，但必须与 $2A^{-1}$ 同时变换。

**命题规律**
- 常将相似对角化、伴随矩阵、特征值性质结合考查，通过变换基向量构造新的相似矩阵。
- 典型套路：给定 $P^{-1}AP$，再改变特征向量顺序或倍数，求另一相似变换下的矩阵。
- 复习建议：熟练掌握特征向量与特征值的关系，以及相似对角化的逆用；牢记 $A^*$ 的公式与特征值关系；注意矩阵运算的变换顺序。


> 来源：《26_姜晓千四套卷（数一）》卷三 第 7 题
