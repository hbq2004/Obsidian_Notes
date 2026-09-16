---
ctime: 2026-08-22 05:15:01
mtime: 2026-08-22 05:15:01
tags:
  - LA
  - 27_模拟卷概念题摘选/李林四套卷卷二
  - 概念题
  - 非齐次解作差
  - 齐次解空间维数
  - 矩阵的秩
  - 伴随矩阵的秩
  - 向量组线性无关
points:
level:
---

# MCQ 第 34 题

![[_Attachments/题目识别/27_模拟卷概念题摘选-题目/MNJ-Q034_题目.png|题目]]

设 $A$ 为 3 阶矩阵, $\alpha_1=(1,2,-2)^T, \alpha_2=(2,1,-1)^T, \alpha_3=(1,1,a)^T (a \neq -1)$ 是非齐次线性方程组 $AX=b$ 的三个解, $A^*$ 是 $A$ 的伴随矩阵, 则

(A) $AX=0$ 与 $A^*X=0$ 同解.
(B) $A^*X=0$ 的解均是 $AX=0$ 的解, 但二者不同解.
(C) $AX=0$ 的解均是 $A^*X=0$ 的解, 但二者不同解.
(D) $AX=0$ 与 $A^*X=0$ 没有非零公共解.

> 考点批注：Ax=0的解和A*x=0的解的特点，可以引申出有趣的二级结论，如果这题解不出来应该好好积累一下答案的思路

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 (C)。  
核心理由：由三个非齐次解作差，可得 $AX=0$ 的两个线性无关解，从而 $\operatorname{rank}A\le1$；又因 $AX=b$ 是非齐次且相容，所以 $\operatorname{rank}A=1$。三阶矩阵秩为 $1$ 时 $A^*=0$，故 $A^*X=0$ 的解空间为全空间，真包含 $AX=0$ 的解空间。

**解题切入点**：  
看到“非齐次方程组的三个解”，第一反应一定是“作差”：
$$
A(\alpha_i-\alpha_j)=b-b=0.
$$
这相当于把公共的常数项 $b$“差分消掉”，将非齐次解的关系转化为齐次解的信息。然后再用“解空间维数 $\Leftrightarrow$ 秩”以及“伴随矩阵的秩与 $A$ 的秩”的关系判断。

**推演**：  
令
$$
\eta_1=\alpha_1-\alpha_2=(-1,1,-1)^T,\qquad
\eta_2=\alpha_1-\alpha_3=(0,1,-2-a)^T.
$$

因为 $\alpha_1,\alpha_2,\alpha_3$ 都是 $AX=b$ 的解，所以
$$
A\eta_1=A(\alpha_1-\alpha_2)=b-b=0,
$$
$$
A\eta_2=A(\alpha_1-\alpha_3)=b-b=0.
$$

且 $\eta_1,\eta_2$ 线性无关：若
$$
k_1\eta_1+k_2\eta_2=0,
$$
由第一个分量得 $-k_1=0$，故 $k_1=0$；再由第二个分量得 $k_2=0$。因此 $\eta_1,\eta_2$ 是两个线性无关的 $AX=0$ 的解。

所以
$$
\dim\ker A\ge2,
$$
由秩公式
$$
\operatorname{rank}A=3-\dim\ker A\le1.
$$

又因为 $AX=b$ 是非齐次线性方程组且相容，故 $b\ne0$，于是 $b$ 属于 $A$ 的列空间，列空间非零，所以
$$
\operatorname{rank}A\ge1.
$$

综上，
$$
\operatorname{rank}A=1.
$$

对于三阶矩阵，伴随矩阵 $A^*$ 的秩满足：
$$
\operatorname{rank}(A^*)=
\begin{cases}
3, & \operatorname{rank}A=3,\\
1, & \operatorname{rank}A=2,\\
0, & \operatorname{rank}A\le1.
\end{cases}
$$

因此当 $\operatorname{rank}A=1$ 时，
$$
A^*=0.
$$

于是
$$
A^*X=0\Longleftrightarrow 0\cdot X=0\Longleftrightarrow X\in\mathbb R^3,
$$
即 $A^*X=0$ 的解空间是整个 $\mathbb R^3$。

而 $\operatorname{rank}A=1$，所以 $AX=0$ 的解空间维数为
$$
3-\operatorname{rank}A=2,
$$
是 $\mathbb R^3$ 的一个二维真子空间。因此
$$
\ker A\subsetneq \ker(A^*).
$$

逐项判断：

(A) 错误。$AX=0$ 与 $A^*X=0$ 并不同解，因为 $A^*X=0$ 的解空间更大。

(B) 错误。$A^*X=0$ 的解是全空间，不可能全是 $AX=0$ 的解。

(C) 正确。$AX=0$ 的解都是 $A^*X=0$ 的解，但二者不同解。

(D) 错误。例如 $\eta_1=\alpha_1-\alpha_2=(-1,1,-1)^T$ 是非零的 $AX=0$ 的解，且由于 $A^*=0$，它也是 $A^*X=0$ 的解，所以二者有非零公共解。

**易错点**：  
1. 不要把 $\alpha_1,\alpha_2,\alpha_3$ 本身当作 $AX=0$ 的解，它们是非齐次解，只有作差后才属于齐次解空间。  
2. 不要只推出 $\operatorname{rank}A\le1$ 就停止，还要利用“非齐次且相容”排除 $A=0$ 的退化情形，得到 $\operatorname{rank}A=1$。  
3. 伴随矩阵的秩公式要记准：对三阶矩阵，$\operatorname{rank}A=1$ 时 $A^*=0$，不是 $\operatorname{rank}A^*=1$。  
4. 不要忽略解空间维数与秩的关系：$AX=0$ 的解空间维数为 $n-\operatorname{rank}A$。

**命题规律**：  
本题将“非齐次方程组解的结构”“齐次方程组解空间维数”“伴随矩阵的秩”三个考点综合在一道选择题中，属于典型的概念辨析题。命题角度通常是：给出若干非齐次解，判断 $AX=0$ 与 $A^*X=0$ 的解集关系。变式可能改为求 $A^*X=0$ 的基础解系，或给出 $A^*$ 的秩反推 $A$ 的秩。复习时要把“秩—解空间维数—伴随矩阵的秩”三者联动记忆。

**知识点**：非齐次方程组解之差为齐次解、齐次方程组解空间维数、矩阵的秩、伴随矩阵的秩、向量组线性无关

---

> 来源：模拟卷概念题摘选（试卷顺序版） · 十. 李林四套卷卷二 · 原题号 (5) · PDF第20页
