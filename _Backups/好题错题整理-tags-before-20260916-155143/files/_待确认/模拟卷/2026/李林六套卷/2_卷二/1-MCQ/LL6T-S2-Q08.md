---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - PS
  - 26_李林六套卷/卷二/MCQ
  - 概念题
  - 条件概率
  - 概率加法公式
  - 互斥事件
  - 事件运算
  - 事件的独立性
points:
level:
---

# 选择题 第 8 题

![[_Attachments/题目识别/LL6T/LL6T-S2-Q08_题目.png|题目]]

设 $A,B,C$ 是三个随机事件，$P(ABC)=0, 0<P(C)<1$，则正确的是.
(A) $P(ABC)=P(A)P(B)P(C).$
(B) $P(A \cup B \cup C)=P(A)+P(B)+P(C).$
(C) $P[(A \cup B) | \overline{C}] = P(A | \overline{C}) + P(B | \overline{C}).$
(D) $P[(A \cup B) | C] = P(A | C) + P(B | C).$

![[_Attachments/题目识别/LL6T-答案/LL6T-S2-Q08_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

选择题【答案】: (D)

【推演】逐一分析各选项对错/干扰项：

- (A) 错误：$P(ABC)=0$ 只能说明三事件同时发生的概率为0，不能推出三者独立，因此不能得到 $P(ABC)=P(A)P(B)P(C)$。

- (B) 错误：$P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC)$，题目只给 $P(ABC)=0$，未给出两两交概率为0，因此不能得到右端三项之和。

- (C) 错误：在 $\overline{C}$ 条件下需 $P((A\cap B)\cap\overline{C})=0$ 才有加法公式，但已知的是 $P(A\cap B\cap C)=0$，不能推出 $P(A\cap B\cap\overline{C})=0$。

- (D) 正确：$P[(A\cup B)|C]=\frac{P((A\cup B)\cap C)}{P(C)}=\frac{P(A\cap C)+P(B\cap C)-P(ABC)}{P(C)}$，而 $P(ABC)=0$，所以等于 $P(A|C)+P(B|C)$。

因此答案为 (D)。

**解题切入点**

考查条件概率与互斥事件的关系，类似于“给定集合后判断两个子事件是否互斥”。已知三事件同时发生概率为0，就相当于在 $C$ 发生的条件下 $A$、$B$ 互斥；但换到 $\overline{C}$ 条件下则不一定。

**推演**

（完整分步求解）

设 $X=A\cap C$，$Y=B\cap C$，则 $X\cap Y=ABC$，且 $P(X\cap Y)=P(ABC)=0$。于是

$$
P[(A\cup B)\cap C]=P(X\cup Y)=P(X)+P(Y)-P(X\cap Y)=P(A\cap C)+P(B\cap C).
$$

两边同除以 $P(C)$（$P(C)>0$）：

$$
P[(A\cup B)|C]=\frac{P[(A\cup B)\cap C]}{P(C)}
=\frac{P(A\cap C)}{P(C)}+\frac{P(B\cap C)}{P(C)}
=P(A|C)+P(B|C).
$$

故 (D) 正确。

**易错点**

易错点：看到 $P(ABC)=0$ 就误以为 $A,B,C$ 两两互斥或独立，其实这只是三事件同时发生的概率为0。另一个易错点：条件概率下的加法公式要求条件事件下两事件互斥（即交集的条件概率为0），不能仅凭原事件互斥或同时发生概率为0乱套。防错提醒：将 $A\cup B$ 与 $C$ 相交后看作两个事件 $A\cap C$、$B\cap C$ 的并，交集概率为0即可用加法公式。

**命题规律**

这类题常考“条件概率+事件运算”，通过 $P(ABC)=0$ 制造陷阱，干扰项多围绕独立性与无条件加法公式设置。复习时应熟练掌握 $P(A\cup B)=P(A)+P(B)-P(AB)$ 及其条件概率推广，并注意区分互斥、对立、独立三个概念。


> 来源：《26_李林六套卷（数一）》卷二 第 8 题
