---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - LA
  - 27_ep月考卷/套三/FIB
  - 计算题
  - 线性方程组通解
  - 基础解系
  - 列空间
  - 线性相关与无关
points:
level:
---

# FIB 第 16 题

![[_Attachments/题目识别/JJ8T/JJ8T-S3-Q16_题目.png|题目]]

16. 设 4 维列向量 $\alpha_1, \alpha_2, \alpha_3, \alpha_4$ 两两线性无关，$\alpha_1 + \alpha_2 + \alpha_3 = 0$，$\alpha_4$ 不能由 $\alpha_1, \alpha_2, \alpha_3$ 线性表示，$A = (\alpha_1, \alpha_2, \alpha_3, \alpha_4)$，则 $AX = \alpha_2 + \alpha_4$ 的通解为 \_ .


---

## 解析（AI 生成，仅供参考）

【考点】本题考查非齐次线性方程组 $AX=b$ 的通解结构：先求齐次基础解系，再找特解。类比算法竞赛：把 $\alpha_i$ 视为已知向量，方程组求解等价于解线性组合系数，利用线性关系简化。

【解】由 $\alpha_1+\alpha_2+\alpha_3=0$ 得 $\alpha_3=-\alpha_1-\alpha_2$，且 $\alpha_1,\alpha_2$ 线性无关（两两线性无关），故 $\alpha_1,\alpha_2,\alpha_3$ 秩为 $2$。又 $\alpha_4$ 不能由它们线性表示，所以 $\alpha_4$ 与 $\alpha_1,\alpha_2$ 线性无关，故 $\operatorname{rank}(A)=3$。

先求 $AX=0$ 的基础解系：设 $X=(x_1,x_2,x_3,x_4)^T$，则 $\alpha_1 x_1+\alpha_2 x_2+\alpha_3 x_3+\alpha_4 x_4=0$。因 $\alpha_4$ 与 $\alpha_1,\alpha_2,\alpha_3$ 整体线性无关，所以 $x_4=0$。代入 $\alpha_3=-\alpha_1-\alpha_2$ 得 $\alpha_1(x_1-x_3)+\alpha_2(x_2-x_3)=0$，由 $\alpha_1,\alpha_2$ 线性无关得 $x_1=x_3,\ x_2=x_3$。取 $x_3=1$，得基础解系 $\eta=(1,1,1,0)^T$。

再求 $AX=\alpha_2+\alpha_4$ 的一个特解。设特解 $X_0=(a,b,c,d)^T$，则 $\alpha_1 a+\alpha_2 b+\alpha_3 c+\alpha_4 d = \alpha_2+\alpha_4$。比较 $\alpha_4$ 系数得 $d=1$；比较 $\alpha_1,\alpha_2,\alpha_3$ 部分：$\alpha_1 a+\alpha_2 b+\alpha_3 c = \alpha_2$，代入 $\alpha_3=-\alpha_1-\alpha_2$ 得 $\alpha_1(a-c)+\alpha_2(b-c)=\alpha_2$。由线性无关得 $a-c=0,\ b-c=1$。取 $c=0$，则 $a=0,\ b=1$。故特解 $X_0=(0,1,0,1)^T$。

所以通解为 $X=X_0+k\eta=(0,1,0,1)^T+k(1,1,1,0)^T=(k,\ 1+k,\ k,\ 1)^T$，其中 $k$ 为任意常数。

【答案】$X=k\begin{pmatrix}1\\1\\1\\0\end{pmatrix}+\begin{pmatrix}0\\1\\0\\1\end{pmatrix}$（$k$ 为任意常数），即 $x_1=x_3=k,\ x_2=1+k,\ x_4=1$。

【易错点】① 误认为 $\alpha_1,\alpha_2,\alpha_3$ 线性无关——它们线性相关，因为 $\alpha_1+\alpha_2+\alpha_3=0$；② 求特解时容易漏掉 $x_4$ 的系数，必须比较 $\alpha_4$ 的系数；③ 通解中基础解系系数 $k$ 可任意，但特解不唯一，只需保证一组即可。另：题面中“两两线性无关”与 $\alpha_1+\alpha_2+\alpha_3=0$ 不矛盾，本质是任意两个不成比例。

【命题规律】此类题常考抽象向量组的线性方程组通解，突破口是利用线性关系化简系数矩阵的秩，并构造基础解系和特解。复习时应熟练掌握：线性无关与秩的关系、非齐次方程组解的结构（特解+齐次通解）。

> AI 生成，仅供参考。

