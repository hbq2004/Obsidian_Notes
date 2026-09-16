---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - LA
  - 26_张宇八套卷/卷五/FRQ
  - 计算题
  - 施密特正交化
  - 向量正交单位化
  - 矩阵正交三角分解
  - 内积计算
  - 过渡矩阵
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S5-Q21_题目.png|题目]]

设向量 $\boldsymbol{\alpha}_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} , \boldsymbol{\alpha}_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} , \boldsymbol{\alpha}_3 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} .$
$(1)$ 将 $\alpha_1, \alpha_2, \alpha_3$ 化成正交单位向量组 $\gamma_1, \gamma_2, \gamma_3$ ;
$(2)$ 若 $(\alpha_1, \alpha_2, \alpha_3) = (\gamma_1, \gamma_2, \gamma_3)C$，求 $C$ .

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S5-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

解答题【答案】：(1) 取
$$
\gamma_1=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\0\\1\end{pmatrix},\quad
\gamma_2=\frac{1}{\sqrt{6}}\begin{pmatrix}-1\\2\\1\end{pmatrix},\quad
\gamma_3=\frac{1}{\sqrt{3}}\begin{pmatrix}1\\1\\-1\end{pmatrix}.
$$
(2) 由 $A=(\alpha_1,\alpha_2,\alpha_3)$，$Q=(\gamma_1,\gamma_2,\gamma_3)$，则 $A=QC$，$C=Q^TA$，故
$$
C=\begin{pmatrix}
\sqrt{2} & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}}\\
0 & \frac{3}{\sqrt{6}} & \frac{1}{\sqrt{6}}\\
0 & 0 & \frac{2}{\sqrt{3}}
\end{pmatrix}.
$$
关键给分点：施密特正交化公式写对；每一步单位化正确；能由 $Q^TQ=I$ 得到 $C=Q^TA$；矩阵元素位置和符号正确。

**解题切入点**

本题核心是把线性无关向量组做施密特正交化，等价于求矩阵的 $QR$ 分解。算法竞赛类比：不要对 $Q$ 求逆，因为正交矩阵满足 $Q^TQ=I$，直接左乘 $Q^T$ 即可得到坐标矩阵 $C$。

**推演**

1. 令 $A=(\alpha_1,\alpha_2,\alpha_3)$，因 $\det A=-2\neq0$，三个向量线性无关，可进行施密特正交化。

2. 对第一列：
$$
\beta_1=\alpha_1=\begin{pmatrix}1\\0\\1\end{pmatrix},\quad
\gamma_1=\frac{\beta_1}{\|\beta_1\|}=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\0\\1\end{pmatrix}.
$$
这一步给分点：先正交化后单位化，不能漏除模长。

3. 对第二列：
$$
\beta_2=\alpha_2-(\alpha_2,\gamma_1)\gamma_1
=\begin{pmatrix}0\\1\\1\end{pmatrix}-\frac{1}{\sqrt{2}}\gamma_1
=\begin{pmatrix}-\frac{1}{2}\\1\\\frac{1}{2}\end{pmatrix},
$$
$$
\gamma_2=\frac{\beta_2}{\|\beta_2\|}
=\frac{1}{\sqrt{6}}\begin{pmatrix}-1\\2\\1\end{pmatrix}.
$$

4. 对第三列：
$$
\beta_3=\alpha_3-(\alpha_3,\gamma_1)\gamma_1-(\alpha_3,\gamma_2)\gamma_2
=\begin{pmatrix}\frac{2}{3}\\\frac{2}{3}\\-\frac{2}{3}\end{pmatrix},
$$
$$
\gamma_3=\frac{\beta_3}{\|\beta_3\|}
=\frac{1}{\sqrt{3}}\begin{pmatrix}1\\1\\-1\end{pmatrix}.
$$

5. 求 $C$。由 $A=QC$ 且 $Q^TQ=I$，所以 $C=Q^TA$，即 $C_{ij}=\gamma_i^T\alpha_j$。逐项计算得
$$
C=\begin{pmatrix}
\gamma_1^T\alpha_1 & \gamma_1^T\alpha_2 & \gamma_1^T\alpha_3\\
\gamma_2^T\alpha_1 & \gamma_2^T\alpha_2 & \gamma_2^T\alpha_3\\
\gamma_3^T\alpha_1 & \gamma_3^T\alpha_2 & \gamma_3^T\alpha_3
\end{pmatrix}
=\begin{pmatrix}
\sqrt{2} & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}}\\
0 & \frac{3}{\sqrt{6}} & \frac{1}{\sqrt{6}}\\
0 & 0 & \frac{2}{\sqrt{3}}
\end{pmatrix}.
$$

6. 回代自检：
$$
QC=\begin{pmatrix}
1&0&1\\0&1&1\\1&1&0
\end{pmatrix}=(\alpha_1,\alpha_2,\alpha_3),
$$
结果成立。

**易错点**

- 施密特正交化时先把 $\alpha_2$ 对 $\gamma_1$ 正交化，再把 $\alpha_3$ 对 $\gamma_1,\gamma_2$ 同时正交化；漏掉后一项会导致第三向量不正交。
- 单位化时容易忘记除以模长，或把 $\gamma_2$ 的符号写错。
- 求 $C$ 时不要把 $C$ 写成 $Q^TA$ 的转置；注意 $C_{ij}$ 是第 $i$ 个 $\gamma$ 与第 $j$ 个 $\alpha$ 的内积。
- $\gamma$ 整体乘 $-1$ 仍可构成正交单位向量组，但会改变 $C$ 的相应符号；本题按施密特顺序取标准符号。

**命题规律**

这类题常见于线性代数解答题第一题，核心是施密特正交化与 $QR$ 分解。复习时要把“正交化—单位化—求过渡矩阵”练成固定流程，并会用 $Q^TQ=I$ 简化求逆；同时留意 $C$ 为上三角矩阵这一特征，可用于检验结果。


> 来源：《26_张宇八套卷（数一）》卷五 第 21 题
