---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - LA
  - 26_张宇八套卷/卷六/FIB
  - 计算题
  - 伴随矩阵性质
  - det(A*)公式
  - 线性方程组求解
  - 矩阵乘法
points:
level:
---

# FIB 第 15 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S6-Q15_题目.png|题目]]

设 A 是 4 阶矩阵，A 的伴随矩阵 $A^* = \begin{pmatrix} 2 & 0 & 0 & 0 \\ 0 & 2 & 0 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 4 \end{pmatrix}$，$\mathbf{b} = (1,1,1,1)^T$，则方程组 $A\mathbf{x} = \mathbf{b}$ 的解为 \_ .

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S6-Q15_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
最终解为 $\mathbf{x} = \left( \frac{1}{\sqrt[3]{2}}, \frac{1}{\sqrt[3]{2}}, \frac{1}{\sqrt[3]{2}}, \sqrt[3]{4} \right)^T$。
【答案】: $\boxed{\mathbf{x} = \left( \frac{1}{\sqrt[3]{2}}, \frac{1}{\sqrt[3]{2}}, \frac{1}{\sqrt[3]{2}}, \sqrt[3]{4} \right)^T}$

**解题切入点**
利用伴随矩阵性质 $AA^* = \det(A)I$，将方程 $A\mathbf{x}=\mathbf{b}$ 转化为 $\mathbf{x} = \frac{1}{\det(A)}A^*\mathbf{b}$，并利用 $\det(A^*)=(\det A)^{n-1}$ 求 $\det A$。类似算法竞赛中已知逆矩阵的伴随矩阵求原方程解。

**推演**
计算 $\det(A^*)=2\cdot2\cdot1\cdot4=16$。
由 $\det(A^*) = (\det A)^{3}$，得 $(\det A)^3 = 16$，故 $\det A = 16^{1/3} = 2^{4/3}$。
计算 $A^*\mathbf{b}$：
$A^*\mathbf{b} = \begin{pmatrix}2&0&0&0\\0&2&0&0\\0&0&1&1\\0&0&0&4\end{pmatrix}\begin{pmatrix}1\\1\\1\\1\end{pmatrix} = \begin{pmatrix}2\\2\\2\\4\end{pmatrix}$。
于是 $\mathbf{x} = \frac{1}{\det A}A^*\mathbf{b} = \frac{1}{2^{4/3}}\begin{pmatrix}2\\2\\2\\4\end{pmatrix} = \begin{pmatrix}2^{-1/3}\\2^{-1/3}\\2^{-1/3}\\2^{2/3}\end{pmatrix} = \begin{pmatrix}1/\sqrt[3]{2}\\1/\sqrt[3]{2}\\1/\sqrt[3]{2}\\\sqrt[3]{4}\end{pmatrix}$。
验证：$A\mathbf{x} = A \left(\frac{1}{\det A}A^*\mathbf{b}\right) = \frac{1}{\det A}AA^*\mathbf{b} = \frac{1}{\det A}\det(A)I\mathbf{b} = \mathbf{b}$。

**易错点**
1. 勿将伴随矩阵 $A^*$ 与转置共轭混淆，这里指代数余子式矩阵的转置。
2. 计算 $A^*\mathbf{b}$ 时注意矩阵乘法行乘列，避免错位。
3. 注意 $\det A$ 不为零，否则方程可能无解或无穷解，这里可逆保证唯一解。

**命题规律**
常将伴随矩阵与线性方程组结合，利用 $AA^* = \det(A)I$ 构造解。复习时应熟练掌握伴随矩阵性质及 $\det(A^*)$ 与 $\det(A)$ 的关系。此类问题在考研中属于中档题，务必细心计算。


> 来源：《26_张宇八套卷（数一）》卷六 第 15 题
