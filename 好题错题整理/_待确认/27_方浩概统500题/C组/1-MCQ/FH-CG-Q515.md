---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 相关系数
  - 协方差
  - 独立随机变量
  - 均匀分布
points:
level:
---

# MCQ 第 515 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q515_题目.png|题目]]

515 设随机变量 $X$, $Y$ 相互独立, 且都服从 $(0,1)$ 上的均匀分布, 定义 $U=X+Y$, $V=XY$, 则随机变量 $U, V$ 的相关系数 $\rho = (\quad)$.

(A) $\frac{\sqrt{42}}{7}$
(B) $\frac{\sqrt{6}}{7}$
(C) $\frac{\sqrt{7}}{7}$
(D) 0

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 A。因为  
$
\rho=\frac{\operatorname{Cov}(U,V)}{\sqrt{\operatorname{Var}(U)\operatorname{Var}(V)}},
$
代入算出的 $\operatorname{Cov}(U,V)=\frac1{12}$、$\operatorname{Var}(U)=\frac16$、$\operatorname{Var}(V)=\frac7{144}$，得 $\rho=\frac{\sqrt{42}}7$。

**解题切入点**：看到“相关系数”，先定位公式：  
$
\rho=\frac{\operatorname{Cov}(U,V)}{\sqrt{\operatorname{Var}(U)\operatorname{Var}(V)}}.
$
由于只要求一、二阶矩，不必求 $(U,V)$ 的联合分布。$X,Y$ 独立且均匀，矩 $E X^k$ 容易算，而且独立性可以把 $E(X^aY^b)$ 拆成 $E X^a E Y^b$，像算法题中能用公式算期望就不必枚举状态。

**推演**：

因为 $X\sim U(0,1)$，所以  
$
EX=\frac12,\qquad EX^2=\frac13,\qquad EX^3=\frac14,\qquad EX^4=\frac15.
$
同理 $Y$ 的各阶矩相同。由 $X,Y$ 独立，有  
$
E(X^aY^b)=EX^aEY^b.
$

先算 $U=X+Y$：
$
EU=EX+EY=\frac12+\frac12=1,
$
$
\operatorname{Var}U=\operatorname{Var}X+\operatorname{Var}Y=\frac1{12}+\frac1{12}=\frac16.
$

再算 $V=XY$：
$
EV=EXEY=\frac12\cdot\frac12=\frac14,
$
$
EV^2=E(X^2Y^2)=EX^2EY^2=\frac13\cdot\frac13=\frac19,
$
所以
$
\operatorname{Var}V=EV^2-(EV)^2=\frac19-\frac1{16}=\frac7{144}.
$

接着算协方差：
$
E(UV)=E[(X+Y)XY]=E(X^2Y)+E(XY^2).
$
由独立性，
$
E(X^2Y)=EX^2EY=\frac13\cdot\frac12=\frac16,
$
$
E(XY^2)=EXEY^2=\frac12\cdot\frac13=\frac16.
$
因此
$
E(UV)=\frac16+\frac16=\frac13,
$
$
\operatorname{Cov}(U,V)=E(UV)-EUEV=\frac13-1\cdot\frac14=\frac1{12}.
$

于是
$
\rho=\frac{\operatorname{Cov}(U,V)}{\sqrt{\operatorname{Var}(U)\operatorname{Var}(V)}}
=\frac{\frac1{12}}{\sqrt{\frac16\cdot\frac7{144}}}
=\frac{\frac1{12}}{\frac{\sqrt7}{12\sqrt6}}
=\frac{\sqrt6}{\sqrt7}
=\frac{\sqrt{42}}7.
$

所以选 **A**。

**易错点**：

- 不要把“$X,Y$ 独立”误认为“$U,V$ 独立”，从而误选 D。独立性能拆矩，但不保证 $X+Y$ 与 $XY$ 不相关。
- 计算 $\operatorname{Var}(V)$ 时不要误用 $\operatorname{Var}(XY)=\operatorname{Var}X\operatorname{Var}Y$，这里 $X,Y$ 均值不为零，应通过 $EV^2-(EV)^2$ 计算。
- 相关系数公式中是除以两个标准差之积，不是除以方差。
- 化简及时：$\frac{\sqrt6}{\sqrt7}=\frac{\sqrt{42}}7$，不要写成 $\frac{\sqrt6}{7}$。

**命题规律**：本题属于概率论中的基础计算题，核心考点是相关系数定义、协方差计算和随机变量函数的矩。常见变式有：将 $X,Y$ 换成其他常见分布，或令 $U=X+Y,\ V=X-Y$ 判断是否相关/独立。复习时应熟练掌握“独立性拆矩”的方法，以及均匀分布、指数分布等常见分布的 $E X^k$。

**知识点**：相关系数、协方差、独立随机变量的矩、均匀分布

---

> 来源：方浩概率统计进阶500题做题本 第189页 · C组
