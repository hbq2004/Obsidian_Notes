---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - LA
  - 26_李林六套卷/卷二/MCQ
  - 概念题
  - 线性表示
  - 矩阵的秩
  - 分块矩阵
  - 行向量组
points:
level:
---

# 选择题 第 6 题

![[_Attachments/题目识别/LL6T/LL6T-S2-Q06_题目.png|题目]]

设 $A, B$ 均为 $n$ 阶矩阵，$\alpha, \beta$ 均为 $n$ 维列向量. 若 $\alpha$ 可由 $A$ 的列向量线性表示，$(\alpha^T, \beta^T)$ 不能由 $(A^T, B^T)$ 的行向量线性表示，则下列结论中正确的是
(A) $r(B, \beta) = r(B).$
(B) $r(B, \beta) = r(B) + 1.$
(C) $r\begin{pmatrix} A^T & B^T \\ \alpha^T & \beta^T \end{pmatrix} = r(A^T, B^T) + 1.$
(D) $r[(A, \alpha), B^T] = r\left[ (A^T, B^T) \begin{pmatrix} A \\ B \end{pmatrix} \right].$

![[_Attachments/题目识别/LL6T-答案/LL6T-S2-Q06_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
由 $\alpha$ 可由 $A$ 的列向量线性表示，得 $r(A,\alpha)=r(A)$；由 $(\alpha^T,\beta^T)$ 不能由 $(A^T,B^T)$ 的行向量线性表示，可知该行向量不在矩阵 $(A^T,B^T)$ 的行空间中，因此添加该行后秩增 $1$，即
$$r\begin{pmatrix}A^T&B^T\\ \alpha^T&\beta^T\end{pmatrix}=r(A^T,B^T)+1,$$
故选项 (C) 正确。

**解题切入点**
将“不能由行向量线性表示”转化为“增行后秩增加1”，即利用向量组线性相关与秩的关系。类比算法竞赛中“判断一个向量是否属于已有向量组张成的空间”，只需看增广矩阵的秩是否增加。

**推演**
设 $M=(A^T,B^T)$，由条件 $(\alpha^T,\beta^T)\notin \operatorname{row}(M)$，故
$$r\begin{pmatrix} M \\ (\alpha^T,\beta^T)\end{pmatrix}=r(M)+1,$$
这恰为选项 (C)。

选项 (A)(B) 取决于 $B$ 与 $\beta$ 的具体关系。例如 $A=(1), B=(0), \alpha=1, \beta=1$ 满足条件，但 $r(B,\beta)=1=r(B)+1$，排除 (A)；又取 $A=(1),B=(1),\alpha=1,\beta=2$ 满足条件，但 $r(B,\beta)=1=r(B)$，排除 (B)。

选项 (D) 不一定成立。构造反例：$n=2$，取
$$A=\begin{pmatrix}1&0\\0&0\end{pmatrix},\quad B=\begin{pmatrix}0&0\\1&0\end{pmatrix},\quad \alpha=\begin{pmatrix}1\\0\end{pmatrix},\quad \beta=\begin{pmatrix}1\\0\end{pmatrix}.$$
则 $\alpha$ 可由 $A$ 列表示，且 $(\alpha^T,\beta^T)=(1,0,1,0)$ 不在 $M=(A^T,B^T)$ 的行空间内（该行空间由 $(1,0,0,1)$ 张成），满足条件。计算得
$$r[(A,\alpha),B^T]=2,\quad r\left((A^T,B^T)\begin{pmatrix}A\\B\end{pmatrix}\right)=r\left(\begin{pmatrix}2&0\\0&0\end{pmatrix}\right)=1,$$
故 (D) 错误。

**易错点**
容易误把“$\alpha$ 可由 $A$ 的列向量线性表示”直接用于选项 A/B，但该条件与 $B$、$\beta$ 无关；关键在于第二个条件等价于增广行秩增加。另外注意行向量与列向量表示的区别。

**命题规律**
考查分块矩阵的秩、向量组的线性表示。通常需要将抽象条件转化为矩阵秩的变化，用反例排除干扰项。复习时应熟练运用“某向量不能由某向量组线性表示”等价于“添加该向量后秩增加1”。


> 来源：《26_李林六套卷（数一）》卷二 第 6 题
