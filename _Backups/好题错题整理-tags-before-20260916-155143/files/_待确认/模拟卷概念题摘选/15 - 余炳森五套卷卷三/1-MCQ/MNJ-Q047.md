---
ctime: 2026-08-22 05:15:01
mtime: 2026-08-22 05:15:01
tags:
  - LA
  - 27_模拟卷概念题摘选/余炳森五套卷卷三
  - 概念题
  - 线性方程组有解判定
  - 矩阵的秩
  - 增广矩阵
  - 法方程组
  - 列空间
points:
level:
---

# MCQ 第 47 题

![[_Attachments/题目识别/27_模拟卷概念题摘选-题目/MNJ-Q047_题目.png|题目]]

设线性方程组 $Ax = \alpha$ 有解, $\begin{pmatrix} A \\ B \end{pmatrix} x = \begin{pmatrix} \alpha \\ \beta \end{pmatrix}$ 无解, 则下列结论中不正确的是 (　　).

(A). $r(B, \beta) = r(B) + 1$

(B). $r\begin{pmatrix} A & \alpha \\ B & \beta \end{pmatrix} = r\begin{pmatrix} A \\ B \end{pmatrix} + 1$

(C). $r[B^T(B, \beta)] = r(B^TB)$

(D). $r\left((A^T, B^T)\begin{pmatrix} A & \alpha \\ B & \beta \end{pmatrix}\right) = r\left((A^T, B^T)\begin{pmatrix} A \\ B \end{pmatrix}\right)$.

> 考点批注：有解，无解怎么推导出增广矩阵的秩，再推广出其他的结论

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 **A**。核心理由：$\begin{pmatrix}A\\B\end{pmatrix}x=\begin{pmatrix}\alpha\\\beta\end{pmatrix}$ 无解只说明两个方程“合在一起无公共解”，不能推出 $Bx=\beta$ 一定无解，所以 $r(B,\beta)=r(B)+1$ 不一定成立。

**解题切入点**：  
把两个方程组整体记为 $Mx=c$，其中  
$$
M=\begin{pmatrix}A\\B\end{pmatrix},\qquad c=\begin{pmatrix}\alpha\\\beta\end{pmatrix}.
$$
有解、无解就是看右端向量是否属于系数矩阵的列空间。这类似于“两个集合分别非空，但交集可能为空”。

**推演**：

设  
$$
M=\begin{pmatrix}A\\B\end{pmatrix},\qquad c=\begin{pmatrix}\alpha\\\beta\end{pmatrix}.
$$

### (A) 不正确

$r(B,\beta)=r(B)+1$ 等价于 $Bx=\beta$ 无解。但题设不能保证这一点。

反例：
$$
A=(1),\quad \alpha=(0),\quad B=(1),\quad \beta=(1).
$$
则 $Ax=\alpha$ 即 $x=0$，有解；但
$$
\begin{pmatrix}A\\B\end{pmatrix}x=\begin{pmatrix}\alpha\\\beta\end{pmatrix}
$$
即
$$
\begin{cases}
x=0,\\
x=1,
\end{cases}
$$
无解。而 $Bx=\beta$ 即 $x=1$，有解，故
$$
r(B,\beta)=1,\qquad r(B)+1=2.
$$
所以 (A) 不一定成立。

### (B) 正确

整体无解，即 $Mx=c$ 无解，所以
$$
r(M,c)>r(M).
$$
而 $(M,c)$ 只比 $M$ 多一列，因此
$$
r(M,c)\le r(M)+1.
$$
故
$$
r(M,c)=r(M)+1.
$$
这正是
$$
r\begin{pmatrix}A&\alpha\\B&\beta\end{pmatrix}
=
r\begin{pmatrix}A\\B\end{pmatrix}+1.
$$
所以 (B) 正确。

### (C) 正确

注意到
$$
B^T(B,\beta)=(B^TB,\ B^T\beta).
$$
对任意实矩阵 $B$，有
$$
\operatorname{Col}(B^TB)=\operatorname{Col}(B^T),
$$
且 $B^T\beta\in\operatorname{Col}(B^T)$，所以 $B^T\beta\in\operatorname{Col}(B^TB)$。  
因此给 $B^TB$ 加上一列 $B^T\beta$，秩不变：
$$
r[B^T(B,\beta)]=r(B^TB).
$$
所以 (C) 正确。

### (D) 正确

令
$$
M=\begin{pmatrix}A\\B\end{pmatrix},\qquad c=\begin{pmatrix}\alpha\\\beta\end{pmatrix}.
$$
则
$$
(A^T,B^T)\begin{pmatrix}A&\alpha\\B&\beta\end{pmatrix}
=
M^T(M,c)
=
(M^TM,\ M^Tc),
$$
而
$$
(A^T,B^T)\begin{pmatrix}A\\B\end{pmatrix}=M^TM.
$$
同理，$M^Tc\in\operatorname{Col}(M^TM)$，所以增广列不改变秩：
$$
r(M^TM,\ M^Tc)=r(M^TM).
$$
因此 (D) 正确。

所以不正确的是 (A)。

**易错点**：  
1. 误把“整体无解”理解为“$Bx=\beta$ 无解”。实际上可能 $Bx=\beta$ 有解，只是与 $Ax=\alpha$ 的解没有公共解。  
2. 忽略法方程组的性质：$A^TAx=A^Tb$ 不论原方程是否有解都一定有解。C、D 正是这个结论。  
3. “无解 ⇒ 增广矩阵的秩比系数矩阵秩大 $1$”成立的前提是增广矩阵只多出一列；本题 (B) 恰好满足。

**命题规律**：  
本题核心是线性方程组解的存在性与矩阵秩的关系，常结合分块矩阵、列空间、法方程组命题。常见变式如：已知 $Ax=b$ 无解，判断 $A^TAx=A^Tb$ 是否有解；或已知 $A$ 列满秩，判断 $A^TA$ 是否可逆。复习时要把“有解/无解”转化为“右端向量是否属于列空间”，并熟记 $r(A)=r(A,b)$ 的判定。

**知识点**：  
线性方程组有解判定、矩阵的秩、增广矩阵、法方程组与列空间、分块矩阵乘法

---

> 来源：模拟卷概念题摘选（试卷顺序版） · 十五. 余炳森五套卷卷三 · 原题号 (5) · PDF第26页
