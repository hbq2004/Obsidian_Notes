---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - LA
  - 27_ep月考卷/套三/MCQ
  - 计算题
  - 分块矩阵求逆
  - 伴随矩阵与逆矩阵
  - 矩阵行列式
  - 分块矩阵乘法
points:
level:
---

# MCQ 第 9 题

![[_Attachments/题目识别/JJ8T/JJ8T-S3-Q09_题目.png|题目]]

9. 设 $A, B, C$ 均为 3 阶矩阵，$A^*, B^*$ 分别为 $A, B$ 的伴随矩阵。若 $|A| = 3$，$|B| = 4$，则 $\left(\begin{array}{ccc} O & A \\ B & C \end{array}\right)$ 的伴随矩阵为

A. $\left(\begin{array}{cc} B^*CA^* & -3B^* \\ -4A^* & O \end{array}\right)$

B. $\left(\begin{array}{cc} -B^*CA^* & 3B^* \\ 4A^* & O \end{array}\right)$

C. $\left(\begin{array}{cc} O & -4A^* \\ \end{array}\right)$

D. $\left(\begin{array}{cc} A^*CB^* & -4A^* \end{array}\right)$


---

## DeepSeek V4 Flash Max

【考点】本题考查分块矩阵的伴随矩阵求法，核心是利用伴随矩阵与逆矩阵的关系 $M^* = |M|M^{-1}$。类似算法竞赛中通过逆矩阵和行列式反推伴随矩阵，关键是先算行列式再求逆。

【解】设 $M = \begin{pmatrix} O & A \\ B & C \end{pmatrix}$，其中 $A,B,C$ 均为 3 阶矩阵，$O$ 为 3 阶零矩阵，故 $M$ 是 6 阶矩阵。

1. **求 $|M|$**：对 $M$ 进行块列交换，将第一列块与第二列块互换，得到 $\begin{pmatrix} A & O \\ C & B \end{pmatrix}$，交换两块共 3 次，符号为 $(-1)^3=-1$。因此
$$
|M| = - \begin{vmatrix} A & O \\ C & B \end{vmatrix} = -|A||B| = -3\times 4 = -12.
$$

2. **求 $M^{-1}$**：设 $M^{-1} = \begin{pmatrix} X & Y \\ Z & W \end{pmatrix}$，则
$$
\begin{pmatrix} O & A \\ B & C \end{pmatrix}
\begin{pmatrix} X & Y \\ Z & W \end{pmatrix}
= \begin{pmatrix} AZ & AW \\ BX+CZ & BY+CW \end{pmatrix}
= \begin{pmatrix} I & O \\ O & I \end{pmatrix}.
$$
由 $AZ=I$ 得 $Z=A^{-1}$；由 $AW=O$ 且 $A$ 可逆得 $W=O$；由 $BX+CZ=O$ 得 $X=-B^{-1}CA^{-1}$；由 $BY+CW=I$ 且 $W=O$ 得 $Y=B^{-1}$。所以
$$
M^{-1} = \begin{pmatrix} -B^{-1}CA^{-1} & B^{-1} \\ A^{-1} & O \end{pmatrix}.
$$

3. **求 $M^*$**：由 $M^* = |M|M^{-1} = -12M^{-1}$，代入逆矩阵得
$$
M^* = \begin{pmatrix} 12B^{-1}CA^{-1} & -12B^{-1} \\ -12A^{-1} & O \end{pmatrix}.
$$
又因为 $|A|=3$，$|B|=4$，所以 $A^{-1} = \frac{A^*}{3}$，$B^{-1} = \frac{B^*}{4}$。代入得
$$
M^* = \begin{pmatrix} 12\cdot \frac{B^*}{4} C \cdot \frac{A^*}{3} & -12\cdot \frac{B^*}{4} \\ -12\cdot \frac{A^*}{3} & O \end{pmatrix}
= \begin{pmatrix} B^*CA^* & -3B^* \\ -4A^* & O \end{pmatrix}.
$$

【答案】选项为 **(A)**。

- (A) 与上述推导完全一致，正确。
- (B) 符号相反：左上应为 $B^*CA^*$ 而非 $-B^*CA^*$，且右上应为 $-3B^*$ 而非 $3B^*$，左下应为 $-4A^*$ 而非 $4A^*$，故错误。
- (C) 选项不完整，且缺少 $-4A^*$ 和 $O$ 块，明显错误。
- (D) 选项不完整，且分块顺序错误，应为 $B^*CA^*$ 和 $-3B^*$，而非 $A^*CB^*$ 和 $-4A^*$，故错误。

【易错点】易错点有二：一是分块行列式符号易漏掉 $(-1)^{9}=-1$；二是逆矩阵分块时易混淆顺序，导致 $X$ 块出现 $C$ 的位置错误。防错提醒：求分块矩阵逆时，务必利用 $MM^{-1}=I$ 逐块解方程；将逆矩阵化为伴随矩阵时注意系数 $\frac{1}{|A|}$、$\frac{1}{|B|}$ 与行列式相乘后的约简。另：题面中 C、D 选项存在 OCR 缺漏，按最合理读法判断为干扰项（题面按常见完整选项理解，OCR 疑误，请核对原书）。

【命题规律】此类题常考分块矩阵的伴随矩阵或逆矩阵，命题套路是先给出若干可逆子块的模，再求整体伴随矩阵。复习建议：熟练掌握分块矩阵的行列式、逆矩阵公式，以及 $A^* = |A|A^{-1}$ 的互化，注意符号和块的位置即可。
