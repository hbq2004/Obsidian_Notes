---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - LA
  - 27_ep月考卷/套四/MCQ
  - 计算题
  - 分块矩阵
  - 伴随矩阵
  - 矩阵求逆
  - 行列式
points:
level:
---

# MCQ 第 8 题

![[_Attachments/题目识别/JJ8T/JJ8T-S4-Q08_题目.png|题目]]

8. 设 $A, B, C$ 均为 3 阶矩阵，$A^*, B^*$ 分别为 $A, B$ 的伴随矩阵。若 $|A| = 3$，$|B| = 4$ 则 $\left(\begin{array}{ccc} O & A \\ B & C \end{array}\right)$ 的伴随矩阵为

A. $\left(\begin{array}{cc} B^*CA^* & -3B^* \\ -4A^* & O \end{array}\right)$

B. $\left(\begin{array}{cc} -B^*CA^* & 3B^* \\ 4A^* & O \end{array}\right)$

C. $\left(\begin{array}{cc} O & -4A^* \\ \end{array}\right)$

D. $\left(\begin{array}{cc} A^*CB^* & -4A^* \end{array}\right)$


---

## 解析（AI 生成，仅供参考）

【考点】本题考查分块矩阵的伴随矩阵计算，核心是利用公式 $M^* = |M| M^{-1}$（当 $M$ 可逆时），结合分块矩阵的求逆与伴随矩阵关系。类比算法竞赛中“用逆矩阵求伴随”的套路，先算行列式和逆矩阵，再转换。

【解】设 $M = \begin{pmatrix} O & A \\ B & C \end{pmatrix}$，其中 $O, A, B, C$ 均为 3 阶矩阵。

1. 求 $|M|$：
   $$|M| = \begin{vmatrix} O & A \\ B & C \end{vmatrix} = (-1)^{3 \times 3} |A||B| = -3 \times 4 = -12.$$
   故 $M$ 可逆，且 $M^* = |M| M^{-1} = -12 M^{-1}$。

2. 设 $M^{-1} = \begin{pmatrix} X & Y \\ Z & W \end{pmatrix}$，各块均为 3 阶。由 $M M^{-1} = I_6$ 得：
   $$\begin{pmatrix} O & A \\ B & C \end{pmatrix} \begin{pmatrix} X & Y \\ Z & W \end{pmatrix} = \begin{pmatrix} AZ & AW \\ BX+CZ & BY+CW \end{pmatrix} = \begin{pmatrix} I & O \\ O & I \end{pmatrix}.$$
   于是：
   - $AZ = I \Rightarrow Z = A^{-1}$；
   - $AW = O \Rightarrow W = O$（因 $A$ 可逆）；
   - $BX+CZ = O \Rightarrow BX = -C A^{-1} \Rightarrow X = -B^{-1} C A^{-1}$；
   - $BY+CW = I \Rightarrow BY = I \Rightarrow Y = B^{-1}$。

   所以
   $$M^{-1} = \begin{pmatrix} -B^{-1} C A^{-1} & B^{-1} \\ A^{-1} & O \end{pmatrix}.$$

3. 用 $A^*, B^*$ 表示逆矩阵：
   $$A^{-1} = \frac{A^*}{|A|} = \frac{A^*}{3}, \quad B^{-1} = \frac{B^*}{|B|} = \frac{B^*}{4}.$$
   代入 $M^* = -12 M^{-1}$：
   $$M^* = -12 \begin{pmatrix} -\frac{B^*}{4} C \frac{A^*}{3} & \frac{B^*}{4} \\ \frac{A^*}{3} & O \end{pmatrix} = \begin{pmatrix} 12 \cdot \frac{B^* C A^*}{12} & -12 \cdot \frac{B^*}{4} \\ -12 \cdot \frac{A^*}{3} & O \end{pmatrix} = \begin{pmatrix} B^* C A^* & -3 B^* \\ -4 A^* & O \end{pmatrix}.$$

【答案】对比选项，正确选项为 (A)。

- (A) $\begin{pmatrix} B^*CA^* & -3B^* \\ -4A^* & O \end{pmatrix}$：与计算结果一致，正确。
- (B) $\begin{pmatrix} -B^*CA^* & 3B^* \\ 4A^* & O \end{pmatrix}$：符号相反，应为 $B^*CA^*$、$-3B^*$、$-4A^*$，错误。
- (C) 仅给出 $\begin{pmatrix} O & -4A^* \end{pmatrix}$，缺块且结构不符，错误。
- (D) 仅给出 $\begin{pmatrix} A^*CB^* & -4A^* \end{pmatrix}$，缺块且位置错误，错误。

【易错点】易错点包括：
1. 混淆 $A^*$ 与 $A^{-1}$ 的关系，忘记系数 $|A|$。
2. 分块矩阵求逆时，乘法顺序易错，尤其 $B^{-1} C A^{-1}$ 的顺序不能乱。
3. 分块行列式符号 $(-1)^{mn}$ 容易漏掉，$m,n$ 是子块阶数。
4. 选项 C、D 明显不完整，可能为 OCR 误录，但按完整矩阵理解不影响正确选项。(题面按 $M = \begin{pmatrix} O & A \\ B & C \end{pmatrix}$ 理解，OCR 疑误，请核对原书)

【命题规律】此类题常考分块矩阵的伴随矩阵或逆矩阵，解题切入点是利用 $M^* = |M| M^{-1}$，将分块求逆与伴随矩阵结合。复习时应熟练掌握分块矩阵的乘法、求逆、行列式公式，以及伴随矩阵的基本性质。

> AI 生成，仅供参考。

