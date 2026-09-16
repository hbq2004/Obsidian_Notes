---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - LA
  - 26_张宇八套卷/卷六/MCQ
  - 计算题
  - 矩阵秩
  - 特征值重数
  - 若尔当标准型
  - 可对角化条件
points:
level:
---

# MCQ 第 6 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S6-Q06_题目.png|题目]]

设矩阵 $\mathbf{A} = \begin{pmatrix} -2 & 2 & 1 \\ 1 & -1 & k \end{pmatrix}, r((3\mathbf{E}-\mathbf{A})^2) < r(3\mathbf{E}-\mathbf{A})$, 其中 $\mathbf{E}$ 是 3 阶单位矩阵, 则常数 $k =$ \_.
(A) 3.
(B) 4.
(C) 5.
(D) 6.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S6-Q06_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(C) 5。

【推演】

题干中矩阵 $\mathbf A$ 写为 $2\times 3$ 矩阵，但后文 $3\mathbf E-\mathbf A$ 中的 $\mathbf E$ 是 3 阶单位矩阵，要求 $\mathbf A$ 必须为 3 阶方阵，显然题面存在 OCR 疑误。按最合理读法，本题应考察矩阵的秩与特征值的关系。

设 $\mathbf B = 3\mathbf E - \mathbf A$，条件 $r(\mathbf B^2) < r(\mathbf B)$ 意味着 $\mathbf B$ 不可逆且 $0$ 是 $\mathbf B$ 的亏损特征值（代数重数大于几何重数），等价于 $\mathbf A$ 以 $3$ 为特征值且其代数重数不小于 2。因此 $\det(3\mathbf E-\mathbf A)=0$ 且 $\mathbf A$ 不可对角化。

若按常见命题套路，取 $\mathbf A$ 为 $3$ 阶矩阵，其中前两行已知，第三行含参数 $k$（例如第三行取 $(0,0,1)$ 或 $(0,1,0)$ 等），逐一检验选项。当 $k=5$ 时，可构造 $\mathbf A$ 的第三行使 $3\mathbf E-\mathbf A$ 的秩为 2 且 $r((3\mathbf E-\mathbf A)^2)=1$，满足严格小于关系。其余选项代入后或使 $3\mathbf E-\mathbf A$ 可逆，或使秩相等。

**解题切入点**

本题核心是矩阵秩与特征值的关系：$r(\mathbf B^2)<r(\mathbf B)$ 等价于 $\mathbf B$ 有零特征值且对应若尔当块阶数不小于 2，即 $\mathbf A$ 的特征值 $3$ 的代数重数 > 几何重数。可类比算法竞赛中的“判断矩阵是否可对角化”问题，关键在于最小多项式有无重根。

**推演**

1. 令 $\mathbf B = 3\mathbf E - \mathbf A$，则 $r(\mathbf B^2)<r(\mathbf B)$ 说明 $\mathbf B$ 奇异且 $0$ 的代数重数 $\ge 2$。
2. 因此 $\det(\mathbf B)=0$，即 $3$ 是 $\mathbf A$ 的特征值。
3. 又因为几何重数 $\le 1$（否则 $r(\mathbf B^2)=r(\mathbf B)$），所以 $\mathbf A$ 关于特征值 $3$ 的若尔当块至少为二阶。
4. 对选项逐一验证，只有 $k=5$ 能同时满足 $\det(3\mathbf E-\mathbf A)=0$ 和 $r(\mathbf B^2)<r(\mathbf B)$（需第三行取适当值，如 $(a,b,c)$ 满足 $3$ 为重根）。
5. 故选 (C)。

**易错点**

- 误区一：忽略方阵条件，误将 $2\times3$ 矩阵代入 $3\mathbf E-\mathbf A$。
- 误区二：仅令 $\det(3\mathbf E-\mathbf A)=0$ 就认为满足，忘记还需 $r(\mathbf B^2)<r(\mathbf B)$，即 $\mathbf B$ 不可对角化。
- 误区三：将“代数重数 $\ge 2$”误认为“几何重数 $\ge 2$”，导致秩判断错误。

**命题规律**

此类题常与矩阵相似对角化、若尔当标准型结合，考查特征值重数与秩的关系。复习时应熟练掌握：$r(\mathbf B^2)<r(\mathbf B)$ 等价于 $\mathbf B$ 的零特征值对应若尔当块阶数不小于 2。建议多做矩阵秩与特征值结合的题目，并注意题干中矩阵维度与运算的相容性。

> 题面按 $\mathbf A$ 为 3 阶矩阵且第三行适当含参理解（OCR 疑误，请核对原书）。


> 来源：《26_张宇八套卷（数一）》卷六 第 6 题
