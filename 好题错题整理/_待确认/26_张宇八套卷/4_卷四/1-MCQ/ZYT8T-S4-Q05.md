---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - LA
  - 26_张宇八套卷/卷四/MCQ
  - 计算题
  - 矩阵乘法
  - 三角矩阵
  - LU分解
  - 矩阵分解
points:
level:
---

# MCQ 第 5 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S4-Q05_题目.png|题目]]

以下矩阵乘积的结果为 $\begin{vmatrix} 2 & 1 & 3 \\ 3 & 1 & 4 \end{vmatrix}$ 的是.

(A) $\begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 3 & \frac{4}{3} & 2 \end{pmatrix} \begin{pmatrix} 1 & -1 & 2 \\ 0 & 3 & -1 \\ 0 & 0 & -\frac{2}{3} \end{pmatrix}$

(B) $\begin{pmatrix} 1 & 0 & 0 \\ 2 & -1 & 0 \\ 3 & \frac{4}{3} & 1 \end{pmatrix} \begin{pmatrix} 1 & -1 & 2 \\ 0 & -3 & -1 \\ 0 & 0 & -\frac{2}{3} \end{pmatrix}$

(C) $\begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 3 & \frac{4}{3} & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & -\frac{2}{3} \end{pmatrix} \begin{pmatrix} 1 & -1 & 2 \\ 0 & 1 & -\frac{1}{3} \\ 0 & 0 & 1 \end{pmatrix}.$

(D) $\begin{pmatrix} 1 & 0 & 0 \\ 2 & -1 & 0 \\ 3 & \frac{4}{3} & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 & 0 \\ 0 & -3 & 0 \\ 0 & 0 & -\frac{2}{3} \end{pmatrix} \begin{pmatrix} 1 & -1 & 2 \\ 0 & 1 & -\frac{1}{3} \\ 0 & 0 & 1 \end{pmatrix}.$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S4-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
选择题【答案】: (C)。
【推演】计算四个选项的矩阵乘积，只有(C)的乘积为 $\begin{pmatrix}1&-1&2\\2&1&3\\3&1&4\end{pmatrix}$，符合题设（按合理理解）。

**解题切入点**
考查矩阵乘法与三角分解。可将矩阵乘积视为对单位矩阵的初等变换，仿照算法竞赛中“分块处理”的思想，按矩阵结合律先算部分积以简化计算。

**推演**
设题设目标矩阵为 $A=\begin{pmatrix}1&-1&2\\2&1&3\\3&1&4\end{pmatrix}$（OCR 疑误，原题可能为三行）。逐一计算：
- (A) $L_A R_A = \begin{pmatrix}1&-1&2\\2&1&3\\3&1&\frac{10}{3}\end{pmatrix}$，不匹配。
- (B) $L_B R_B = \begin{pmatrix}1&-1&2\\2&1&5\\3&-7&4\end{pmatrix}$，不匹配。
- (C) $L_C D_C U_C = \begin{pmatrix}1&-1&2\\2&1&3\\3&1&4\end{pmatrix}$，匹配。
- (D) $L_D D_D U_D = \begin{pmatrix}1&-1&2\\2&1&3\\3&-7&\frac{20}{3}\end{pmatrix}$，不匹配。
故答案为 (C)。

**易错点**
- 矩阵乘法顺序不能交换，计算时须按题目给出的顺序。
- 注意区分矩阵与行列式符号，竖线可能造成误解。
- 三角矩阵相乘时，行与列的对应易错，可先做内层乘积。

**命题规律**
此类题常以矩阵分解为背景，设计相似选项，考查快速计算能力。备考时应熟练三角矩阵乘法，掌握从矩阵分解看出结果的方法。

题面按选项乘积结果为 $\begin{pmatrix}1&-1&2\\2&1&3\\3&1&4\end{pmatrix}$ 理解(OCR 疑误, 请核对原书)。


> 来源：《26_张宇八套卷（数一）》卷四 第 5 题
