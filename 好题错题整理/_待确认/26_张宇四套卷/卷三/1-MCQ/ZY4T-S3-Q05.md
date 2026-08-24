---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - LA
  - 26_张宇四套卷/卷三/MCQ
  - 概念题
  - 西尔维斯特秩不等式
  - 矩阵乘积的秩
  - 秩等号条件
  - 反例法
points:
level:
---

# 选择题 第 5 题

![[_Attachments/题目识别/ZY4T/ZY4T-S3-Q05_题目.png|题目]]

设 $n$ 阶矩阵 $A, B, C$ 满足 $r(ABC) + 2n = r(A) + r(B) + r(C)$，则
(A) $r(A) + r(B) + r(C) = r(AB)$.
(B) $r(AB) + n = r(A) + r(B)$.
(C) $r(ABC) > r(A) + r(BC) - n$.
(D) $r(AB) = r(BC) = n$.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S3-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(B)。

**解题切入点**

本题是秩不等式等号条件的典型题。把给定等式改写为 $r(ABC)=r(A)+r(B)+r(C)-2n$，它恰好是两次 Sylvester 不等式叠加后的下界，因此要判断“每一步都取等号”。

**推演**

设 $r(A)=a$, $r(B)=b$, $r(C)=c$。由 Sylvester 不等式：对任意 $n$ 阶矩阵 $X,Y$，有 $r(XY)\ge r(X)+r(Y)-n$。于是
$$
r(AB)\ge a+b-n,\qquad r(BC)\ge b+c-n.
$$
对 $(AB)C$ 用 Sylvester 不等式，得
$$
r(ABC)=r((AB)C)\ge r(AB)+c-n.
$$
结合题设 $r(ABC)+2n=a+b+c$，即 $r(ABC)=a+b+c-2n$，有
$$
a+b+c-2n=r(ABC)\ge r(AB)+c-n\ge a+b+c-2n.
$$
因此两处不等号均取等，特别地
$$
r(AB)+n=a+b=r(A)+r(B),
$$
所以选项 (B) 正确。

逐一分析其余选项：

(A) 由上面已得 $r(AB)=a+b-n$。若 $a+b+c=r(AB)$，则 $a+b+c=a+b-n$，即 $c=-n$，矛盾，故 (A) 错误。

(C) 再对 $A(BC)$ 用 Sylvester 不等式：
$$
r(ABC)\ge r(A)+r(BC)-n\ge a+b+c-2n=r(ABC).
$$
所以 $r(ABC)=r(A)+r(BC)-n$，并非严格大于，故 (C) 错误。

(D) 取 $n=2$，$A=\operatorname{diag}(1,0)$，$B=C=I_2$。此时 $r(A)=1$, $r(B)=r(C)=2$, $r(ABC)=1$，且
$$
r(ABC)+2n=1+4=5=r(A)+r(B)+r(C),
$$
满足题设。但 $r(AB)=1\ne2$，故 $r(AB)=r(BC)=n$ 不成立，(D) 错误。

**易错点**

1. 给定等式是多次 Sylvester 不等式叠加的下界取等，不能只推出一个不等式取等；每一步都必须取等。
2. (C) 实际是等号而非严格大于，容易因“条件强”而误选。
3. 判断 (D) 时不能用单位阵特例代替一般结论，要会构造非满秩反例。

**命题规律**

考研线代常把 Sylvester 不等式及“取等条件”编成选择题。复习时应掌握 $r(AB)\ge r(A)+r(B)-n$ 和 $r(ABC)\ge r(A)+r(B)+r(C)-2n$ 的链式推导，并积累“连续取等”与反例构造的方法。


> 来源：《26_张宇四套卷（数一）》卷三 第 5 题
