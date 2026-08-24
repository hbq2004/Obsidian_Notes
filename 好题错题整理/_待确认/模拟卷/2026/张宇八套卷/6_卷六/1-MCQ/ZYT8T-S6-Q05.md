---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - LA
  - 26_张宇八套卷/卷六/MCQ
  - 计算题
  - 分块矩阵伴随
  - 分块矩阵行列式
  - 伴随矩阵性质
  - 逆矩阵与伴随
points:
level:
---

# MCQ 第 5 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S6-Q05_题目.png|题目]]

设 $\mathbf{A}, \mathbf{B}$ 是 $n$ 阶矩阵, $\mathbf{A}^*, \mathbf{B}^*$ 分别是 $\mathbf{A}, \mathbf{B}$ 对应的伴随矩阵, 则分块矩阵 $\mathbf{C} = \begin{pmatrix} \mathbf{O} & \mathbf{A} \\ \mathbf{B} & \mathbf{O} \end{pmatrix}$ 的伴随矩阵 $\mathbf{C}^* = .$
(A) $\begin{pmatrix} \mathbf{O} & |\mathbf{A}|\mathbf{A}^* \\ |\mathbf{B}|\mathbf{B}^* & \mathbf{O} \end{pmatrix}.$
(B) $\begin{pmatrix} \mathbf{O} & (-1)^n |\mathbf{A}|\mathbf{B}^* \\ (-1)^n |\mathbf{B}|\mathbf{A}^* & \mathbf{O} \end{pmatrix}.$
(C) $\begin{pmatrix} \mathbf{O} & |\mathbf{B}|\mathbf{A}^* \\ |\mathbf{A}|\mathbf{B}^* & \mathbf{O} \end{pmatrix}.$
(D) $\begin{pmatrix} \mathbf{O} & (-1)^n |\mathbf{B}|\mathbf{B}^* \\ (-1)^n |\mathbf{A}|\mathbf{A}^* & \mathbf{O} \end{pmatrix}.$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S6-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**  
【答案】：(B)  
【推演】：  
- (A) 错误：正确结果右上角应为 $(-1)^n |\mathbf{A}| \mathbf{B}^*$，而(A)给出 $|\mathbf{A}| \mathbf{A}^*$，且左下角为 $|\mathbf{B}| \mathbf{B}^*$，位置和系数均不符合。  
- (B) 正确：由分块矩阵的伴随公式直接得到，与推导结果一致。  
- (C) 错误：系数与伴随矩阵对应错位，右上角应为 $(-1)^n |\mathbf{A}| \mathbf{B}^*$ 而非 $|\mathbf{B}| \mathbf{A}^*$。  
- (D) 错误：系数使用了 $|\mathbf{B}|\mathbf{B}^*$ 和 $|\mathbf{A}|\mathbf{A}^*$，完全不对。  

**解题切入点**  
考查分块矩阵的伴随矩阵计算，核心是利用 $M^* = |M| M^{-1}$（可逆时）及分块矩阵的行列式和逆。类似于算法竞赛中，将矩阵分块视为“递归合并”，先求整体行列式和逆，再映射到伴随。  

**推演**  
1. 计算行列式：$|C| = \det\begin{pmatrix} \mathbf{O} & \mathbf{A} \\ \mathbf{B} & \mathbf{O} \end{pmatrix} = (-1)^n |\mathbf{A}| |\mathbf{B}|$。理由：将第二块行依次与第一块行交换，共 $n$ 次，或按拉普拉斯展开。  
2. 若 $\mathbf{A},\mathbf{B}$ 可逆，求 $C^{-1}$。设 $C^{-1} = \begin{pmatrix} \mathbf{X} & \mathbf{Y} \\ \mathbf{Z} & \mathbf{W} \end{pmatrix}$，由 $C C^{-1}=I_{2n}$ 得方程组：$\mathbf{A}\mathbf{Z}=I$，$\mathbf{A}\mathbf{W}=O$，$\mathbf{B}\mathbf{Y}=O$，$\mathbf{B}\mathbf{X}=I$，解得 $\mathbf{X}=O$，$\mathbf{W}=O$，$\mathbf{Y}=\mathbf{B}^{-1}$，$\mathbf{Z}=\mathbf{A}^{-1}$，所以 $C^{-1} = \begin{pmatrix} \mathbf{O} & \mathbf{B}^{-1} \\ \mathbf{A}^{-1} & \mathbf{O} \end{pmatrix}$。  
3. 由 $C^* = |C| C^{-1}$，代入 $|C|$ 和 $C^{-1}$：  
$C^* = (-1)^n |\mathbf{A}||\mathbf{B}| \begin{pmatrix} \mathbf{O} & \mathbf{B}^{-1} \\ \mathbf{A}^{-1} & \mathbf{O} \end{pmatrix} = \begin{pmatrix} \mathbf{O} & (-1)^n |\mathbf{A}||\mathbf{B}| \mathbf{B}^{-1} \\ (-1)^n |\mathbf{A}||\mathbf{B}| \mathbf{A}^{-1} & \mathbf{O} \end{pmatrix}$。  
4. 利用 $\mathbf{B}^{-1} = \frac{\mathbf{B}^*}{|\mathbf{B}|}$，$\mathbf{A}^{-1} = \frac{\mathbf{A}^*}{|\mathbf{A}|}$（当 $|\mathbf{A}|,|\mathbf{B}|\neq 0$），化简得：右上角 = $(-1)^n |\mathbf{A}| \mathbf{B}^*$，左下角 = $(-1)^n |\mathbf{B}| \mathbf{A}^*$。因此 $C^* = \begin{pmatrix} \mathbf{O} & (-1)^n |\mathbf{A}| \mathbf{B}^* \\ (-1)^n |\mathbf{B}| \mathbf{A}^* & \mathbf{O} \end{pmatrix}$，即选项(B)。  
5. 若 $\mathbf{A}$ 或 $\mathbf{B}$ 不可逆，上述结果可由代数余子式或连续延拓保证，公式对所有方阵成立。  

**易错点**  
- 分块矩阵行列式易漏 $(-1)^n$ 符号。  
- 混淆 $\mathbf{A}^*$ 与 $\mathbf{A}^{-1}$，导致系数张冠李戴。  
- 伴随矩阵的转置性质：$C^*$ 的左上和右下均为零，但非零块的位置与 $C$ 不一致，务必注意。  

**命题规律**  
考研线代常考分块矩阵的伴随或逆，解题套路是先求行列式，再求逆（可逆时），最后用 $M^*=|M|M^{-1}$。复习时应熟记分块矩阵逆的公式和行列式展开式，并注意符号 $(-1)^n$。类似题还可能将伴随矩阵与秩、可逆性结合，需灵活运用。


> 来源：《26_张宇八套卷（数一）》卷六 第 5 题
