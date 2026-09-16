---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 二项分布
  - 协方差
  - 相关系数
  - 方差性质
points:
level:
---

# FIB 第 510 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q510_题目.png|题目]]

510 设随机变量$X,Y$相互独立，且$X\sim B(1,p),Y\sim B(2,p),p\in (0,1)$，则$X+Y$与$X-Y$的相关系数为 \_.

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：填 $-\dfrac13$。因为
\[
\mathrm{Cov}(X+Y,X-Y)=\mathrm{Var}(X)-\mathrm{Var}(Y)
=-p(1-p),
\]
而
\[
\mathrm{Var}(X+Y)=\mathrm{Var}(X-Y)=3p(1-p),
\]
所以相关系数为 $-\dfrac13$。

**解题切入点**：看到“两个随机变量的线性组合求相关系数”，不要试图罗列联合分布，而应直接利用相关系数定义
\[
\rho=\frac{\mathrm{Cov}(U,V)}{\sqrt{\mathrm{Var}(U)\mathrm{Var}(V)}}.
\]
先算协方差，再用协方差的双线性性质展开；同时 $X,Y$ 独立说明交叉协方差为 $0$。这很像算法题中能用公式 $O(1)$ 解决的，就不要去枚举所有状态。

**推演**：

由 $X\sim B(1,p)$，$Y\sim B(2,p)$，得
\[
\mathrm{Var}(X)=p(1-p),\qquad \mathrm{Var}(Y)=2p(1-p).
\]

因为 $X,Y$ 相互独立，所以 $\mathrm{Cov}(X,Y)=0$。利用协方差的双线性性：
\[
\begin{aligned}
\mathrm{Cov}(X+Y,X-Y)
&=\mathrm{Cov}(X,X)-\mathrm{Cov}(X,Y)+\mathrm{Cov}(Y,X)-\mathrm{Cov}(Y,Y)\\
&=\mathrm{Var}(X)-0+0-\mathrm{Var}(Y)\\
&=p(1-p)-2p(1-p)\\
&=-p(1-p).
\end{aligned}
\]

又因为 $X,Y$ 独立，
\[
\mathrm{Var}(X+Y)=\mathrm{Var}(X)+\mathrm{Var}(Y)=3p(1-p),
\]
\[
\mathrm{Var}(X-Y)=\mathrm{Var}(X)+\mathrm{Var}(Y)=3p(1-p).
\]

因此 $X+Y$ 与 $X-Y$ 的相关系数为
\[
\rho_{X+Y,\,X-Y}
=\frac{\mathrm{Cov}(X+Y,X-Y)}{\sqrt{\mathrm{Var}(X+Y)\mathrm{Var}(X-Y)}}
=\frac{-p(1-p)}{3p(1-p)}
=-\frac13.
\]

由于 $p\in(0,1)$，所以 $p(1-p)>0$，约分合法。

**易错点**：

1. 把 $\mathrm{Var}(X-Y)$ 误算成 $\mathrm{Var}(X)-\mathrm{Var}(Y)$。正确公式是  
   \[
   \mathrm{Var}(X-Y)=\mathrm{Var}(X)+\mathrm{Var}(Y)-2\mathrm{Cov}(X,Y),
   \]
   独立时交叉项为 $0$，所以应为两者之和。
2. 忘记 $B(1,p)$ 就是伯努利分布，方差为 $p(1-p)$，而不是 $p$。
3. 误以为 $X+Y$ 与 $X-Y$ 独立。它们并不独立，但求相关系数不需要独立性。
4. 忽略题目条件 $p\in(0,1)$；若 $p=0$ 或 $1$，方差为 $0$，相关系数无定义。

**命题规律**：本题属于概率论中的“数字特征”常考小题，核心是二项分布方差公式与协方差双线性性质。常见变式有：将 $Y\sim B(2,p)$ 改为 $B(n,p)$ 求一般表达式，或给出相关系数反求参数 $p$；也可与“不相关”“独立”的概念辨析结合考查。复习时应熟练记忆常见分布的期望、方差，并掌握协方差与相关系数的运算性质。

**知识点**：二项分布、方差性质、协方差、相关系数

---

> 来源：方浩概率统计进阶500题做题本 第187页 · C组
