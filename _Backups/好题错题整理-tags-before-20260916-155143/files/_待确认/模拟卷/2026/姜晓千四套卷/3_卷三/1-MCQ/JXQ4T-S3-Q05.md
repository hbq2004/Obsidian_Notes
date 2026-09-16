---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - LA
  - 26_姜晓千四套卷/卷三/MCQ
  - 概念题
  - 矩阵乘法
  - 可逆矩阵
  - 矩阵的秩
  - 列向量组等价
  - 行向量组等价
points:
level:
---

# MCQ 第 5 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S3-Q05_题目.png|题目]]

设 $A,C$ 均为 $n$ 阶矩阵，$E$ 为 $n$ 阶单位矩阵，$\alpha$ 为 $n$ 维单位列向量，满足 $A(2E - \alpha\alpha^T) = C$，则( ) .
(A) $C$ 的行向量组与 $A$ 的行向量组等价
(B) $C$ 的列向量组与 $A$ 的列向量组等价
(C) $C$ 的行向量组与 $2E - \alpha\alpha^T$ 的行向量组等价
(D) $C$ 的列向量组与 $2E - \alpha\alpha^T$ 的列向量组等价

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S3-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】：(B)

**解题切入点**

右乘可逆矩阵 $B=2E-\alpha\alpha^T$ 可看作对列空间做可逆线性变换，列空间不变；但行向量是按 $B$ 重新线性组合，行空间一般改变。类似算法竞赛中“用可逆矩阵做坐标变换，张成的列空间不变”。

**推演**

先证 $B$ 可逆。由 $\alpha$ 是单位列向量，$\alpha^T\alpha=1$，故 $B\alpha=\alpha$，且当 $x\perp\alpha$ 时 $Bx=2x$，所以 $B$ 无零特征值；也可由行列式引理得 $\det B=2^{n-1}\neq0$。

设 $B=2E-\alpha\alpha^T$，则已知 $C=AB$。

(1) 对列向量组：任取 $y\in\operatorname{col}(C)$，则 $y=Cx=ABx=A(Bx)\in\operatorname{col}(A)$，故 $\operatorname{col}(C)\subseteq\operatorname{col}(A)$。又 $B$ 可逆，$A=CB^{-1}$，对称地有 $\operatorname{col}(A)\subseteq\operatorname{col}(C)$。因此 $\operatorname{col}(C)=\operatorname{col}(A)$，即 $C$ 的列向量组与 $A$ 的列向量组等价，故 (B) 正确。

(2) 逐一排除：(A) 行向量组不一定等价。右乘 $B$ 后，$C$ 的第 $i$ 行为 $r_i(A)B$，它是 $B$ 的各行的线性组合，一般不在 $r_i(A)$ 张成的行空间中。例如 $n=2$，取 $\alpha=(1,0)^T$，则 $B=\operatorname{diag}(1,2)$，取 $A=\begin{pmatrix}1&1\\0&0\end{pmatrix}$，则 $C=AB=\begin{pmatrix}1&2\\0&0\end{pmatrix}$。此时 $\operatorname{row}(A)=\operatorname{span}\{(1,1)\}$，$\operatorname{row}(C)=\operatorname{span}\{(1,2)\}$，不等价，故 (A) 错。

(C) 错：$\operatorname{row}(C)\subseteq\operatorname{row}(B)$，但 $\dim\operatorname{row}(B)=n$，而 $\dim\operatorname{row}(C)=\operatorname{rank}(A)$，$A$ 未必满秩；上例中 $\operatorname{row}(C)\ne\operatorname{row}(B)$。

(D) 错：$\operatorname{col}(C)=\operatorname{col}(A)$，而 $B$ 可逆，$\operatorname{col}(B)=\mathbb R^n$；$A$ 未必满秩，上例中 $\operatorname{col}(C)\ne\operatorname{col}(B)$。

**易错点**

容易误以为右乘可逆矩阵同时保持行向量组与列向量组等价。实际上，右乘保持列空间，但对行空间施加的是线性映射 $r\mapsto rB$，一般不把 $\operatorname{row}(A)$ 映回自身；$B$ 可逆只能说明 $\operatorname{row}(C)$ 是 $\operatorname{row}(A)$ 在 $B$ 下的同构像，维数仍等于 $\operatorname{rank}(A)$，但子空间本身一般不相等。

**命题规律**

本题考查“矩阵乘法 + 可逆矩阵 + 向量组等价”的联动关系。复习时要把“左乘/右乘对行、列空间的影响”对比清楚：左乘可逆矩阵保持行空间，右乘可逆矩阵保持列空间；再结合秩相等和向量组等价定义即可快速判断。此类题在选择题中常以概念辨析方式出现。


> 来源：《26_姜晓千四套卷（数一）》卷三 第 5 题
