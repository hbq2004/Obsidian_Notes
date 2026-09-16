---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - LA
  - 26_余丙森五套卷/卷四/MCQ
  - 概念题
  - 特征值与特征向量
  - 相似对角化
  - 重特征值
  - 特征子空间
  - 线性无关
points:
level:
---

# MCQ 第 7 题

![[_Attachments/题目识别/YBS5T/YBS5T-S4-Q07_题目.png|题目]]

设 $A$ 为三阶矩阵，$(\boldsymbol{p}_1,\boldsymbol{p}_2,\boldsymbol{p}_3)$ 为三阶可逆矩阵，满足 $A\boldsymbol{p}_1=2\boldsymbol{p}_1,A\boldsymbol{p}_2=2\boldsymbol{p}_2,A\boldsymbol{p}_3=6\boldsymbol{p}_3$. 若存在可逆矩阵 $P$, 使得 $P^{-1}AP=\begin{pmatrix}2&0&0\\0&2&0\\0&0&6\end{pmatrix}$, 则 $P$ 不可以取（    ）.
(A) $(\boldsymbol{p}_1,2\boldsymbol{p}_2,3\boldsymbol{p}_3)$
(B) $(\boldsymbol{p}_1-\boldsymbol{p}_2,\boldsymbol{p}_2,\boldsymbol{p}_3)$
(C) $(\boldsymbol{p}_1-\boldsymbol{p}_2,\boldsymbol{p}_1+\boldsymbol{p}_2,\boldsymbol{p}_3)$
(D) $(\boldsymbol{p}_1,\boldsymbol{p}_2+\boldsymbol{p}_3,\boldsymbol{p}_3)$

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S4-Q07_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(D)。

**解题切入点**

把 $P$ 的列看成相似对角化后相应特征值下的特征向量。$P^{-1}AP=\operatorname{diag}(2,2,6)$ 等价于 $P$ 的前两列为 $\lambda=2$ 的两个线性无关特征向量、第三列为 $\lambda=6$ 的特征向量。这就像算法中检查一组基是否被线性算子“按分量缩放”，只要有一列被混合就失败。

**推演**

设 $Q=(\boldsymbol{p}_1,\boldsymbol{p}_2,\boldsymbol{p}_3)$。题设说明 $AQ=(2\boldsymbol{p}_1,2\boldsymbol{p}_2,6\boldsymbol{p}_3)=Q\operatorname{diag}(2,2,6)$，所以 $Q^{-1}AQ=\operatorname{diag}(2,2,6)$。

一般地，若 $P=(v_1,v_2,v_3)$ 可逆，则 $P^{-1}AP=\operatorname{diag}(2,2,6)$ 当且仅当 $Av_1=2v_1, Av_2=2v_2, Av_3=6v_3$。逐项判定：

- (A) $P=(\boldsymbol{p}_1,2\boldsymbol{p}_2,3\boldsymbol{p}_3)$：$A(2\boldsymbol{p}_2)=2A\boldsymbol{p}_2=4\boldsymbol{p}_2=2(2\boldsymbol{p}_2)$，$A(3\boldsymbol{p}_3)=3A\boldsymbol{p}_3=18\boldsymbol{p}_3=6(3\boldsymbol{p}_3)$；三列是 $\boldsymbol{p}_1,\boldsymbol{p}_2,\boldsymbol{p}_3$ 的非零数乘，线性无关，可取。
- (B) $P=(\boldsymbol{p}_1-\boldsymbol{p}_2,\boldsymbol{p}_2,\boldsymbol{p}_3)$：$A(\boldsymbol{p}_1-\boldsymbol{p}_2)=A\boldsymbol{p}_1-A\boldsymbol{p}_2=2\boldsymbol{p}_1-2\boldsymbol{p}_2=2(\boldsymbol{p}_1-\boldsymbol{p}_2)$，$A\boldsymbol{p}_2=2\boldsymbol{p}_2$，$A\boldsymbol{p}_3=6\boldsymbol{p}_3$；由 $\boldsymbol{p}_1,\boldsymbol{p}_2,\boldsymbol{p}_3$ 线性无关知三列线性无关，可取。
- (C) $P=(\boldsymbol{p}_1-\boldsymbol{p}_2,\boldsymbol{p}_1+\boldsymbol{p}_2,\boldsymbol{p}_3)$：$A(\boldsymbol{p}_1+\boldsymbol{p}_2)=A\boldsymbol{p}_1+A\boldsymbol{p}_2=2\boldsymbol{p}_1+2\boldsymbol{p}_2=2(\boldsymbol{p}_1+\boldsymbol{p}_2)$；若 $a(\boldsymbol{p}_1-\boldsymbol{p}_2)+b(\boldsymbol{p}_1+\boldsymbol{p}_2)=0$，则 $(a+b)\boldsymbol{p}_1+(b-a)\boldsymbol{p}_2=0$，由 $\boldsymbol{p}_1,\boldsymbol{p}_2$ 线性无关得 $a=b=0$，前两列线性无关，第三列为 $\lambda=6$ 的特征向量，可取。
- (D) $P=(\boldsymbol{p}_1,\boldsymbol{p}_2+\boldsymbol{p}_3,\boldsymbol{p}_3)$：$A(\boldsymbol{p}_2+\boldsymbol{p}_3)=A\boldsymbol{p}_2+A\boldsymbol{p}_3=2\boldsymbol{p}_2+6\boldsymbol{p}_3$。若存在 $\mu$ 使 $2\boldsymbol{p}_2+6\boldsymbol{p}_3=\mu(\boldsymbol{p}_2+\boldsymbol{p}_3)$，则 $(2-\mu)\boldsymbol{p}_2+(6-\mu)\boldsymbol{p}_3=0$；由 $\boldsymbol{p}_2,\boldsymbol{p}_3$ 线性无关得 $\mu=2$ 且 $\mu=6$，矛盾。故 $\boldsymbol{p}_2+\boldsymbol{p}_3$ 不是特征向量，不可取。

因此答案为 (D)。

**易错点**

- 不要认为 $\lambda=2$ 的特征向量只能是 $\boldsymbol{p}_1,\boldsymbol{p}_2$；$E_2=\operatorname{span}(\boldsymbol{p}_1,\boldsymbol{p}_2)$ 中任意非零向量都是，所以 (B)(C) 可取。
- 不同特征值的特征向量相加通常不再是特征向量；(D) 把 $\boldsymbol{p}_2$ 与 $\boldsymbol{p}_3$ 混合，是典型干扰。
- 可逆矩阵只保证列向量构成基，不保证能对角化；必须逐列检查是否为特征向量。

**命题规律**

命题人常给出一组特征基，再构造“特征子空间内换基”与“跨特征子空间混基”两类选项。复习时抓住：$P^{-1}AP$ 为对角矩阵当且仅当 $P$ 的列向量是由特征向量组成的基；对重根要确认对应特征子空间维数足够。


> 来源：《26_余丙森五套卷（数一）》卷四 第 7 题
