---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - LA
  - 26_余丙森五套卷/卷二/MCQ
  - 计算题
  - 过渡矩阵
  - 基变换
  - 坐标变换
  - 逆矩阵
  - 线性表示
points:
level:
---

# MCQ 第 5 题

![[_Attachments/题目识别/YBS5T/YBS5T-S2-Q05_题目.png|题目]]

设 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 为向量空间 $\mathbf{R}^3$ 的一组基，则从基 $\boldsymbol{\alpha}_1+2\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 到基 $2\boldsymbol{\alpha}_1+2\boldsymbol{\alpha}_2,2\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,3\boldsymbol{\alpha}_2$ 的过渡矩阵 $\boldsymbol{P} = (\_ ).$
(A) $$\begin{pmatrix} -2 & 2 & 0 \\ 0 & 1 & 3 \\ -2 & 1 & 0 \end{pmatrix}$$
(B) $$\begin{pmatrix} 2 & 2 & 0 \\ -2 & -3 & 3 \\ 0 & 1 & 0 \end{pmatrix}$$
(C) $$\begin{pmatrix} 2 & 2 & 0 \\ 6 & 5 & 3 \\ 0 & 1 & 0 \end{pmatrix}$$
(D) $$\begin{pmatrix} 6 & 2 & 0 \\ 4 & 1 & 3 \\ 2 & 1 & 0 \end{pmatrix}$$

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S2-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
选择题【答案】: **(B)**

令 $\beta_1=\alpha_1+2\alpha_2,\ \beta_2=\alpha_2,\ \beta_3=\alpha_3$，$\gamma_1=2\alpha_1+2\alpha_2,\ \gamma_2=2\alpha_1+\alpha_2+\alpha_3,\ \gamma_3=3\alpha_2$。由定义 $\gamma=\beta P$ 得
$$
P=\begin{pmatrix}2&2&0\\-2&-3&3\\0&1&0\end{pmatrix}.
$$
因此选 **(B)**。

**解题切入点**
本题是“两组基之间的换基/换坐标”计算。类似算法竞赛中换坐标系：若旧基为 $\beta$、新基为 $\gamma$，过渡矩阵 $P$ 满足 $\gamma=\beta P$，其列向量就是新基向量在旧基下的坐标。先用 $\alpha$ 基写出 $\beta,\gamma$ 的坐标矩阵，再解 $P=A^{-1}B$。

**推演**
1. 记 $\alpha=(\alpha_1,\alpha_2,\alpha_3)$，$\beta=(\beta_1,\beta_2,\beta_3)$，$\gamma=(\gamma_1,\gamma_2,\gamma_3)$。

2. 由基的线性表示：
$$
\beta=\alpha A,\quad A=\begin{pmatrix}1&0&0\\2&1&0\\0&0&1\end{pmatrix}.
$$

3. 同理：
$$
\gamma=\alpha B,\quad B=\begin{pmatrix}2&2&0\\2&1&3\\0&1&0\end{pmatrix}.
$$

4. 由 $\gamma=\beta P=\alpha AP$，得 $B=AP$，所以 $P=A^{-1}B$。

5. 求逆：
$$
A^{-1}=\begin{pmatrix}1&0&0\\-2&1&0\\0&0&1\end{pmatrix}.
$$

6. 计算：
$$
P=\begin{pmatrix}1&0&0\\-2&1&0\\0&0&1\end{pmatrix}
\begin{pmatrix}2&2&0\\2&1&3\\0&1&0\end{pmatrix}
=\begin{pmatrix}2&2&0\\-2&-3&3\\0&1&0\end{pmatrix}.
$$

7. 用直接线性表示验证：
$$
\gamma_1=2\beta_1-2\beta_2,\quad \gamma_2=2\beta_1-3\beta_2+\beta_3,\quad \gamma_3=3\beta_2.
$$
所以 $P$ 的三列分别为 $(2,-2,0)^T,(2,-3,1)^T,(0,3,0)^T$，与选项 (B) 一致。

选项核对：
(A) 第一列错误；(B) 正确；(C) 第二行错误，属于“直接用 $\alpha$ 基坐标/矩阵乘反”等典型错误；(D) 第一、二行错误，为干扰项。

**易错点**
- 过渡矩阵方向不能记反：若定义是 $\gamma=\beta P$，则 $P=A^{-1}B$，不是 $B^{-1}A$。
- 基向量坐标要按列写；写成行会得到转置或错误结果。
- $A^{-1}$ 中的 $-2$ 容易漏掉或符号写错，导致第二行出错。
- 计算后可用“新基向量在旧基下的线性表示”逐列检验，避免整体算错。

**命题规律**
考研线代常以“基变换与坐标变换”出选择题，选项往往通过交换过渡方向、混用 $\alpha$ 基坐标、漏掉逆矩阵等设置陷阱。复习时熟练掌握 $\gamma=\beta P$ 定义、矩阵乘法与求逆；遇到此类题先用定义列式，再用线性表示回代检验，正确率会很高。


> 来源：《26_余丙森五套卷（数一）》卷二 第 5 题
