---
ctime: 2026-08-24 13:30:19
mtime: 2026-08-24 16:00:51
tags:
  - LA
  - 26_张宇八套卷/卷一/MCQ
  - 计算题
  - 初等列变换
  - 列空间
  - 向量线性表示
  - 矩阵的秩
  - 行列式计算
points:
level:
---

# MCQ 第 5 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S1-Q05_题目.png|题目]]

设 $\mathbf{A}=\begin{pmatrix}1&a&a\\1&1&a\end{pmatrix}$ 可经初等列变换化成 $\mathbf{B}=\begin{pmatrix}1&a&1\\1&1&a\end{pmatrix}$，则 $a$ 的取值范围为（ ）.

(A) $\{a|a\in \mathbf{R},a\neq -2\}$.
(B) $\{a|a\in \mathbf{R},a\neq -2,a\neq -1\}$.
(C) $\{a|a\in \mathbf{R},a\neq 1,a\neq -1\}$.
(D) $\{a|a\in \mathbf{R},a\neq -1\}$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S1-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结论：$a\in\mathbb{R}\setminus\{-1,-2\}$，即 $a\ne -1$ 且 $a\ne -2$，所以选 (B)。

【答案】: (B)

【推演】(选项/干扰项)：

- (A) 只排除 $a=-2$，漏排 $a=-1$，错；
- (B) 正确；
- (C) 排除 $a=1,-1$，但未排除 $a=-2$；且 $a=1$ 时 $A=B$，不应排除，错；
- (D) 只排除 $a=-1$，漏排 $a=-2$，错。

**解题切入点**

初等列变换等价于右乘可逆矩阵，不改变列空间；类似算法竞赛中“线性基不变，则可由基变换互化”。因此只需比较 $A,B$ 的列向量张成的子空间。

**推演**

设 $\alpha=(a,1,1)^T,\ \beta=(1,a,1)^T,\ \gamma=(1,a,a)^T,\ \delta=(1,1,a)^T$，则 $A=(\alpha,\beta,\gamma)$，$B=(\alpha,\beta,\delta)$。

初等列变换保持列空间，所以若 $A$ 可化为 $B$，必须有列空间 $\operatorname{Col}(A)=\operatorname{Col}(B)$；当列空间相同时，列向量组可经列变换互化。

当 $a\ne 1$ 时，$\alpha\times\beta=(1-a,1-a,a^2-1)\ne(0,0,0)$，故 $\alpha,\beta$ 张成一个二维平面 $P=\operatorname{span}\{\alpha,\beta\}$。

判断 $\gamma\in P$：令 $\gamma=x\alpha+y\beta$，则 $ax+y=1,\ x+ay=a,\ x+y=a$。由第一、三式得 $x=-1,\ y=a+1$，代入第二式得 $-1+a(a+1)=a\iff a^2-1=0$。在 $a\ne1$ 时，$\gamma\in P\iff a=-1$。

判断 $\delta\in P$：令 $\delta=x\alpha+y\beta$，则 $ax+y=1,\ x+ay=1,\ x+y=a$。同样得 $x=-1,\ y=a+1$，代入第二式得 $-1+a(a+1)=1\iff a^2+a-2=0\iff (a+2)(a-1)=0$。在 $a\ne1$ 时，$\delta\in P\iff a=-2$。

于是：

- $a=-1$：$A$ 的列空间是 $P$，$B$ 的列空间是 $\mathbb{R}^3$，不等价；
- $a=-2$：$A$ 的列空间是 $\mathbb{R}^3$，$B$ 的列空间是 $P$，不等价；
- $a\ne1,-1,-2$：$\gamma\notin P$ 且 $\delta\notin P$，故 $\operatorname{Col}(A)=\operatorname{Col}(B)=\mathbb{R}^3$，等价；
- $a=1$：$\alpha=\beta=\gamma=\delta=(1,1,1)^T$，故 $A=B$，等价。

也可用行列式验证：$\det A=(a-1)^2(a+1)$，$\det B=(a-1)^2(a+2)$。$a=-1$ 时 $A$ 的秩为 $2$、$B$ 的秩为 $3$；$a=-2$ 时相反；$a=1$ 时两矩阵相等。

综上，$a\in\mathbb{R}\setminus\{-1,-2\}$。

**易错点**

1. 只比秩不够：列变换只允许“列方向”操作，必须保证列空间相同；但本题中行列式判秩恰好能选出正确项。
2. $a=1$ 时易被误排除：此时 $A=B$，显然满足。
3. 不要把 $a=-1$ 与 $a=-2$ 搞混：$a=-1$ 是 $A$ 降秩、$B$ 满秩；$a=-2$ 是 $A$ 满秩、$B$ 降秩。

**命题规律**

张宇八套卷常把初等变换、列空间、秩和行列式结合命题。复习时要熟练“列变换右乘可逆矩阵，不改变列空间”这一本质，并会用线性表示判断第 3 个列向量是否落入前两列张成的平面。


> 来源：《26_张宇八套卷（数一）》卷一 第 5 题
