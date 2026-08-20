---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 多项分布
  - 指示变量法
  - 协方差
  - 相关系数
points:
level:
---

# MCQ 第 512 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q512_题目.png|题目]]

512 随机试验 $E$ 有三种两两不相容的结果 $A_1, A_2, A_3$，且三种结果发生的概率均为 $\frac{1}{3}$，将试验 $E$ 独立重复做 2 次，$X$ 表示 2 次试验中结果 $A_1$ 发生的次数，$Y$ 表示 2 次试验中结果 $A_2$ 发生的次数，则 $X$ 与 $Y$ 的相关系数为 ( ).

(A) $-\frac{1}{2}$
(B) $-\frac{1}{3}$
(C) $\frac{1}{3}$
(D) $\frac{1}{2}$

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 (A)。因为 $X$ 与 $Y$ 的协方差为 $-\dfrac{2}{9}$，方差均为 $\dfrac{4}{9}$，所以相关系数为 $-\dfrac12$。

**解题切入点**：看到“独立重复试验 + 两个计数变量”，应立刻定位到多项分布或二维计数问题。不要急着列联合分布表，可以像算法中“分两个计数器分别统计”一样，把 $X,Y$ 拆成单次试验的示性变量之和，再分别处理“同一试验项”和“不同试验项”。

**推演**：

设第 $k$ 次试验的示性变量为
$$
I_k=\begin{cases}
1,& \text{第 }k\text{ 次出现 }A_1,\\
0,& \text{否则},
\end{cases}
\qquad
J_k=\begin{cases}
1,& \text{第 }k\text{ 次出现 }A_2,\\
0,& \text{否则},
\end{cases}
\qquad k=1,2.
$$
则
$$
X=I_1+I_2,\qquad Y=J_1+J_2.
$$

因为
$$
P(I_k=1)=P(J_k=1)=\frac13,
$$
所以
$$
E X=E Y=\frac13+\frac13=\frac23.
$$

又因为 $I_k$ 与 $J_k$ 都是 Bernoulli 变量，且两次试验独立，所以
$$
\operatorname{Var}(X)=\operatorname{Var}(I_1)+\operatorname{Var}(I_2)
=2\cdot \frac13\cdot\frac23=\frac49,
$$
同理
$$
\operatorname{Var}(Y)=\frac49.
$$

下面求协方差：
$$
E(XY)=E\bigl[(I_1+I_2)(J_1+J_2)\bigr].
$$
展开得
$$
E(XY)=E(I_1J_1)+E(I_1J_2)+E(I_2J_1)+E(I_2J_2).
$$

在同一试验中，$A_1$ 和 $A_2$ 不能同时发生，所以
$$
I_1J_1=0,\qquad I_2J_2=0.
$$
在不同试验中，试验独立，因此
$$
E(I_1J_2)=E I_1\cdot E J_2=\frac13\cdot\frac13=\frac19,
$$
同理
$$
E(I_2J_1)=\frac19.
$$
于是
$$
E(XY)=\frac19+\frac19=\frac29.
$$

因此
$$
\operatorname{Cov}(X,Y)=E(XY)-E X\cdot E Y
=\frac29-\left(\frac23\right)^2
=\frac29-\frac49
=-\frac29.
$$

相关系数为
$$
\rho_{XY}
=\frac{\operatorname{Cov}(X,Y)}{\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}}
=\frac{-\frac29}{\sqrt{\frac49\cdot\frac49}}
=\frac{-\frac29}{\frac49}
=-\frac12.
$$

所以选 (A)。

**易错点**：

- 不要把“互斥”误认为“独立”。$A_1,A_2$ 在同一试验中互斥，这会导致 $X,Y$ 呈负相关；若误以为不相关，就会错选。
- 展开 $E(XY)$ 时容易漏掉“不同试验”的交叉项 $I_1J_2,I_2J_1$。若只保留同一试验项，会得到错误结果。
- 方差可用二项分布公式 $np(1-p)$ 计算，但协方差不能想当然写成正的，多项分布计数之间通常为负相关。

**命题规律**：本题是多项分布中两个计数分量相关系数的典型题目。常见变式有：试验重复 $n$ 次、三种结果概率不相等、求 $Z=aX+bY$ 的方差等。复习时应掌握多项分布结论：
$$
\operatorname{Cov}(N_i,N_j)=-np_ip_j,\qquad i\ne j,
$$
并熟练使用示性变量分解法。

**知识点**：多项分布、指示变量法、协方差、相关系数

---

> 来源：方浩概率统计进阶500题做题本 第188页 · C组
