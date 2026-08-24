---
ctime: 2026-08-22 05:15:01
mtime: 2026-08-22 05:15:01
tags:
  - LA
  - 27_模拟卷概念题摘选/李良五套卷卷四
  - 概念题
  - 矩阵的秩
  - 增广矩阵
  - 非齐次方程组有解判定
  - 列向量线性表示
  - 分块矩阵
points:
level:
---

# MCQ 第 24 题

![[_Attachments/题目识别/27_模拟卷概念题摘选-题目/MNJ-Q024_题目.png|题目]]

设 $A$ 为 $m \times n$ 矩阵, $B$ 为 $l \times n$ 矩阵, $\alpha$ 是 $l$ 维列向量, $\beta$ 是 $m$ 维列向量, 若 $r(A) = r\left(\begin{array}{cc} A & \beta \\ B & \alpha \end{array}\right)$, 则 (　　).

(A) $\beta$ 可由 $A$ 的列向量线性表示, $\alpha$ 可由 $B$ 的列向量线性表示.

(B) $\beta$ 可由 $A$ 的列向量线性表示, $\alpha$ 不可由 $B$ 的列向量线性表示.

(C) $\beta$ 不可由 $A$ 的列向量线性表示, $\alpha$ 可由 $B$ 的列向量线性表示.

(D) $\beta$ 不可由 $A$ 的列向量线性表示, $\alpha$ 也不可由 $B$ 的列向量线性表示.

> 考点批注：换了个包装，本质还是行列变换和秩，注意列出增广矩阵的形式

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 **(A)**。把题中分块矩阵看成增广矩阵，条件等价于线性方程组  
$$\begin{pmatrix}A\\B\end{pmatrix}x=\begin{pmatrix}\beta\\\alpha\end{pmatrix}$$
有解，所以 $\beta$ 和 $\alpha$ 都可由对应列向量线性表示。

**解题切入点**：  
看到分块矩阵  
$$\begin{pmatrix}A&\beta\\B&\alpha\end{pmatrix}$$
不要只按分块行列式硬算。按最后一列与前面 $n$ 列切开：前 $n$ 列是 $\begin{pmatrix}A\\B\end{pmatrix}$，最后一列是 $\begin{pmatrix}\beta\\\alpha\end{pmatrix}$。于是它就是一个线性方程组的增广矩阵，考点立刻转化为“系数矩阵与增广矩阵的秩是否相等”。

**推演**：  
设  
$$C=\begin{pmatrix}A\\B\end{pmatrix},\qquad d=\begin{pmatrix}\beta\\\alpha\end{pmatrix}.$$
则题给矩阵正是增广矩阵  
$$M=[C\mid d]=\begin{pmatrix}A&\beta\\B&\alpha\end{pmatrix}.$$

已知  
$$r(M)=r(A).$$

由于 $A$ 是 $C$ 的子矩阵，所以  
$$r(A)\le r(C);$$  
又因为 $C$ 是 $M$ 的前 $n$ 列，所以  
$$r(C)\le r(M).$$

于是  
$$r(M)=r(A)\le r(C)\le r(M),$$
故  
$$r(C)=r(M)=r([C\mid d]).$$

由非齐次线性方程组有解判定定理，$Cx=d$ 有解。设解为 $x_0$，则  
$$\begin{pmatrix}A\\B\end{pmatrix}x_0=\begin{pmatrix}\beta\\\alpha\end{pmatrix},$$
即  
$$Ax_0=\beta,\qquad Bx_0=\alpha.$$

因此 $\beta$ 是 $A$ 的列向量的线性组合，$\alpha$ 是 $B$ 的列向量的线性组合。

逐项判断：

- (A) 正确：$\beta$ 可由 $A$ 的列向量线性表示，$\alpha$ 可由 $B$ 的列向量线性表示。
- (B) 错误：已证 $\alpha=Bx_0$，不能说“不可表示”。
- (C) 错误：已证 $\beta=Ax_0$，不能说“不可表示”。
- (D) 错误：两个结论均与证明矛盾。

**易错点**：  
1. 没有把题中矩阵识别为增广矩阵，而是只盯着左上角 $A$ 看，容易漏掉 $\alpha$ 的表示。  
2. 忘记用  
$$r(A)\le r(C)\le r(M)$$  
推出 $r(C)=r(M)$，这是转化为方程组有解的关键。  
3. 误以为 $\beta$ 和 $\alpha$ 的表示系数可以分别取，实际上它们共用同一个 $x_0$。  
4. 忽略零向量情况：零向量总可以由零系数线性表示，不能随便说“不可表示”。

**命题规律**：  
本题表面是分块矩阵的秩，实质是“增广矩阵的秩等于系数矩阵的秩 $\iff$ 非齐次线性方程组有解”。命题人把系数矩阵藏成 $\begin{pmatrix}A\\B\end{pmatrix}$，把右端项藏成 $\begin{pmatrix}\beta\\\alpha\end{pmatrix}$。常见变式包括：判断 $r(A)=r\begin{pmatrix}A\\B\end{pmatrix}$ 的含义、将列向量表示改为行向量表示、或增加“有无穷多解”等条件。复习时应熟练使用列空间观点：  
$$Ax=b\text{ 有解}\iff b\in C(A)\iff r(A)=r([A,b]).$$

**知识点**：  
增广矩阵、非齐次线性方程组有解判定、矩阵的秩、分块矩阵、列向量线性表示

---

> 来源：模拟卷概念题摘选（试卷顺序版） · 七. 李良五套卷卷四 · 原题号 (6) · PDF第15页
