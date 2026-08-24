---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - PS
  - 26_张宇八套卷/卷七/MCQ
  - 概念题
  - 几乎必然线性关系
  - 相关系数定义
  - 协方差与方差性质
  - 线性相关符号
points:
level:
---

# MCQ 第 8 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S7-Q08_题目.png|题目]]

设存在非零常数 $a$ 使得 $P\{aX+Y=0\}=1$,则随机变量 $X$ 与 $Y$ 的相关系数 $\rho$ 满足.
(A) $\rho = \frac{a}{|a|}$ .
(B) $\rho = -\frac{a}{|a|}$ .
(C) $-1 < \rho < 1$ .
(D) $|\rho| = |a|$ .

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S7-Q08_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
【答案】(B)。由 $P(aX+Y=0)=1$ 可知 $Y=-aX$ 几乎必然成立，故 $X$ 与 $Y$ 完全线性相关，且相关系数 $\rho=-a/|a|$，即与 $a$ 的符号相反。

**解题切入点**
本题把概率为 1 的等式看作程序中必然成立的断言：既然 $Y=-aX$ 几乎处处成立，就可以把 $Y$ 替换成 $-aX$ 来算协方差。相关系数只反映线性关系的方向和强度，方向由斜率 $-a$ 的符号决定。

**推演**
由 $P(aX+Y=0)=1$，在零概率事件之外恒有 $aX+Y=0$，因此
$$
Y=-aX \quad \text{几乎必然成立}。
$$
于是（设 $X$ 非退化，方差存在且为正）
$$
\operatorname{Cov}(X,Y)=\operatorname{Cov}(X,-aX)=-a\operatorname{Var}(X),
$$
$$
\operatorname{Var}(Y)=\operatorname{Var}(-aX)=a^2\operatorname{Var}(X).
$$
所以
$$
\rho=\frac{\operatorname{Cov}(X,Y)}{\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}}
=\frac{-a\operatorname{Var}(X)}{\sqrt{\operatorname{Var}(X)\cdot a^2\operatorname{Var}(X)}}
=-\frac{a}{|a|}.
$$

选项逐一分析：
- (A) $\rho=a/|a|$：符号取反了，错误。
- (B) $\rho=-a/|a|$：与推导一致，正确。
- (C) $-1<\rho<1$：完全线性相关时 $|\rho|=1$，错误。
- (D) $|\rho|=|a|$：应为 $|\rho|=1$，只在 $|a|=1$ 时碰巧成立，不能选。

**易错点**
容易把 $Y=-aX$ 的负号丢掉，误选 (A)。关键记住：相关系数的符号等于线性系数 $-a$ 的符号，不是 $a$ 的符号；例如 $a>0$ 时 $Y=-aX$，二者负相关，$\rho=-1$。另外若 $X$ 退化或方差不存在，相关系数本身无定义，题目默认其有定义。

**命题规律**
此类题考“概率为 1 的等式”与“几乎必然相等”的转化，以及相关系数达到 $\pm1$ 的充要条件。复习时把 $P(Y=aX+b)=1$ 与 $\rho=\operatorname{sgn}(a)$ 的对应关系记熟，条件概率、协方差性质常和它结合命题。


> 来源：《26_张宇八套卷（数一）》卷七 第 8 题
