---
ctime: 2026-08-22 05:15:01
mtime: 2026-08-22 05:15:01
tags:
  - LA
  - 27_模拟卷概念题摘选/李良五套卷卷一
  - 概念题
  - 线性方程组解空间
  - 零空间包含关系
  - 矩阵乘法与解空间
  - 分块方程组解空间
  - 同解判定与反例
points:
level:
---

# MCQ 第 15 题

![[_Attachments/题目识别/27_模拟卷概念题摘选-题目/MNJ-Q015_题目.png|题目]]

设 $A, B$ 为 $n$ 阶方阵, 若线性方程组 $Ax=0$ 的解都是 $Bx=0$ 的解, 则下列线性方程组中与 $Ax=0$ 必同解的个数为 ( )
① $(A+B)x=0$;
② $ABx=0$;
③ $BAx=0$;
④ $\begin{pmatrix} A-B \\ A+B \end{pmatrix}x=0$;
⑤ $\begin{pmatrix} A \\ B \end{pmatrix}x=0.$
(A) 1.
(B) 2.
(C) 3.
(D) 4.

> 考点批注：方程组同解问题，本质上是提取出有关秩的信息

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 **B**。必同解的是④、⑤两个，①②③均存在反例，不能保证同解。

**解题切入点**：  
“$Ax=0$ 的解都是 $Bx=0$ 的解”立即翻译为解空间包含关系  
$$
\ker A\subseteq \ker B.
$$  
判断哪个方程组与 $Ax=0$ 同解，就是判断它的解空间是否仍等于 $\ker A$。因此要同时验证两个方向：$\ker A$ 中的解是否都满足新方程；新方程的解是否都落在 $\ker A$ 中。后者往往不成立，可用零矩阵、负单位阵等极端反例快速排除。

**推演**：  
记 $\ker T=\{x: Tx=0\}$，题设为 $\ker A\subseteq \ker B$。

① 不是必同解。  
若 $x\in\ker A$，由题设 $Bx=0$，所以  
$$
(A+B)x=Ax+Bx=0,
$$
即 $\ker A\subseteq\ker(A+B)$。但反过来不成立。  
反例：取 $A=I$，$B=-I$，题设满足，但  
$$
A+B=0,
$$
其解空间为 $\mathbb R^n$，不等于 $\ker A=\{0\}$。故①错。

② 不是必同解。  
若 $x\in\ker A$，则 $Bx=0$，从而 $ABx=0$，所以 $\ker A\subseteq\ker(AB)$。  
但 $ABx=0$ 只能说明 $Bx\in\ker A$，不能推出 $x\in\ker A$。  
反例：取 $A=I$，$B=0$，题设满足，但  
$$
AB=0,
$$
解空间为 $\mathbb R^n$，不等于 $\ker A=\{0\}$。故②错。

③ 不是必同解。  
若 $x\in\ker A$，则 $BAx=B(0)=0$，所以 $\ker A\subseteq\ker(BA)$。但反过来不成立。  
仍取 $A=I$，$B=0$，则  
$$
BA=0,
$$
解空间为 $\mathbb R^n$，不等于 $\ker A=\{0\}$。故③错。

④ 是必同解。  
方程组
$$
\begin{pmatrix} A-B \\ A+B \end{pmatrix}x=0
$$
等价于
$$
(A-B)x=0,\qquad (A+B)x=0.
$$
两式相加、相减得
$$
2Ax=0,\qquad 2Bx=0.
$$
由于实数域上 $2$ 可逆，所以④的解空间为
$$
\ker A\cap \ker B.
$$
又因为 $\ker A\subseteq\ker B$，所以
$$
\ker A\cap\ker B=\ker A.
$$
故④与 $Ax=0$ 同解。

⑤ 是必同解。  
方程组
$$
\begin{pmatrix} A \\ B \end{pmatrix}x=0
$$
等价于
$$
Ax=0,\qquad Bx=0,
$$
解空间为 $\ker A\cap\ker B$。由题设同样有
$$
\ker A\cap\ker B=\ker A.
$$
故⑤与 $Ax=0$ 同解。

因此必同解的只有④、⑤，共 $2$ 个，选 **B**。

**易错点**：  
- 容易把题设方向记反，误以为 $\ker B\subseteq\ker A$。题目说的是“$Ax=0$ 的解都是 $Bx=0$ 的解”，即 $\ker A\subseteq\ker B$。  
- 对 $ABx=0$、$BAx=0$，不能只验证“$Ax=0$ 的解一定是新方程的解”，还要验证反向。反向往往不成立，因为复合矩阵会让解空间扩大。  
- 不要觉得取 $B=0$ 或 $B=-I$ 不够“一般”；本题问“必同解”，只要存在一个满足条件的反例即可排除。  
- ④中不要害怕分块矩阵：两个方程相加、相减就能还原出 $Ax=0$ 和 $Bx=0$。

**命题规律**：  
本题属于抽象线性方程组概念题，核心是利用零空间包含关系判断同解。常见变式包括：把条件改为“$Bx=0$ 的解都是 $Ax=0$ 的解”；或把选项改成 $\begin{pmatrix}A+B\\A-B\end{pmatrix}$、$\begin{pmatrix}B\\A\end{pmatrix}$ 等；或进一步问秩的关系。复习时应熟练运用
$$
\ker(AB)=\{x:Bx\in\ker A\},\qquad 
\ker\begin{pmatrix}A\\B\end{pmatrix}=\ker A\cap\ker B,
$$
并善于用 $0$ 矩阵、$-I$ 等简单矩阵构造反例。

**知识点**：  
线性方程组的解空间（零空间）、零空间的包含关系、矩阵乘法与零空间、分块矩阵方程组的解空间、同解判定与反例构造

---

> 来源：模拟卷概念题摘选（试卷顺序版） · 四. 李良五套卷卷一 · 原题号 (5) · PDF第11页
