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

## DeepSeek V4 Flash Max

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

---

## V4 Flash Max 解析

**答案**：A。设 $M=\begin{pmatrix}O&A\\B&C\end{pmatrix}$，由 $\operatorname{adj}(M)=|M|M^{-1}$ 可得
$$
\operatorname{adj}(M)=\begin{pmatrix}B^*CA^*&-3B^*\\-4A^*&O\end{pmatrix},
$$
故选 A。

**解题切入点**：看到“伴随矩阵”不要硬算余子式，优先想关系 $\operatorname{adj}(M)=|M|M^{-1}$。于是本题转化为：求分块矩阵 $M$ 的逆矩阵和行列式。分块求逆就像算法里的分治：先解出独立的块，再回代求耦合块。

**推演**：

设
$$
X=M^{-1}=\begin{pmatrix}X_{11}&X_{12}\\X_{21}&X_{22}\end{pmatrix},
$$
其中每个 $X_{ij}$ 都是 3 阶方阵。由 $MX=I$ 得
$$
\begin{cases}
AX_{21}=I,\\
AX_{22}=0,\\
BX_{11}+CX_{21}=0,\\
BX_{12}+CX_{22}=I.
\end{cases}
$$

因为 $|A|=3,\ |B|=4$，所以 $A,B$ 可逆。依次解得
$$
X_{21}=A^{-1},\qquad X_{22}=O,
$$
$$
X_{12}=B^{-1},\qquad X_{11}=-B^{-1}CA^{-1}.
$$

因此
$$
M^{-1}=\begin{pmatrix}
-B^{-1}CA^{-1}&B^{-1}\\
A^{-1}&O
\end{pmatrix}.
$$

再求 $|M|$。交换 $M$ 的两个块列，等价于做了 $3\cdot3=9$ 次单列交换，所以
$$
|M|=(-1)^9\begin{vmatrix}A&O\\C&B\end{vmatrix}
=-|A||B|=-12.
$$

于是
$$
\operatorname{adj}(M)=|M|M^{-1}
=-12\begin{pmatrix}
-B^{-1}CA^{-1}&B^{-1}\\
A^{-1}&O
\end{pmatrix}
=
\begin{pmatrix}
12B^{-1}CA^{-1}&-12B^{-1}\\
-12A^{-1}&O
\end{pmatrix}.
$$

又因为 $A^{-1}=\dfrac{A^*}{3}$，$B^{-1}=\dfrac{B^*}{4}$，代入得
$$
12B^{-1}CA^{-1}
=12\cdot\frac{B^*}{4}\cdot C\cdot\frac{A^*}{3}
=B^*CA^*,
$$
$$
-12B^{-1}=-3B^*,\qquad -12A^{-1}=-4A^*.
$$

所以
$$
\operatorname{adj}(M)=\begin{pmatrix}
B^*CA^*&-3B^*\\
-4A^*&O
\end{pmatrix}.
$$

**易错点**：

- 块交换符号易错：交换两个 $3\times3$ 块列，符号是 $(-1)^9=-1$，不是 $+1$。若把 $|M|$ 误算成 $+12$，会错选 B。
- 矩阵乘法不交换：$B^{-1}CA^{-1}$ 不能随意改成 $A^{-1}CB^{-1}$ 等；代入伴随矩阵后顺序仍应是 $B^*CA^*$。
- 自检：取一阶类比 $A=a,\ B=b,\ C=c$，则 $M=\begin{pmatrix}0&a\\b&c\end{pmatrix}$，其伴随矩阵为 $\begin{pmatrix}c&-b\\-a&0\end{pmatrix}$，与本题结构一致。
- 注：按OCR最合理读法；题面中选项 C、D 显示残缺，但计算结论指向 A。

**命题规律**：本题是“分块矩阵 + 伴随矩阵”的典型考法。常见变式包括：分块上三角矩阵的行列式与逆、反对角分块矩阵的伴随、利用 $A^*=|A|A^{-1}$ 传递行列式信息。本质上仍是“把大矩阵看成由小矩阵组成的块，再进行分块消元/求逆”，和分治合并的思路一致。
