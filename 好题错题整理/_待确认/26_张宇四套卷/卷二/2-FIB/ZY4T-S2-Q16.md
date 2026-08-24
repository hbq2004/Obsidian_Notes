---
ctime: 2026-08-24 07:13:13
mtime: 2026-08-24 07:13:13
tags:
  - PS
  - 26_张宇四套卷/卷二/FIB
  - 计算题
  - 两两独立
  - 容斥原理
  - 概率最值
  - 事件关系
points:
level:
---

# 填空题 第 16 题

![[_Attachments/题目识别/ZY4T/ZY4T-S2-Q16_题目.png|题目]]

设三个随机事件 $A,B,C$ 两两独立且 $P(A)=P(B)=P(C)$ ，若 $ABC$ 为不可能事件，则 $P(\overline{ABC})$ 的最小值为 \_\_\_\_\_\_\_\_\_\_.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S2-Q16_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$P(\overline{ABC})$ 的最小值为 $\boxed{\dfrac{1}{4}}$。

**解题切入点**

考查两两独立、容斥原理及概率不等式。类比算法竞赛：给定约束条件，求表达式最值，需考虑不等式条件。

**推演**

设 $P(A)=P(B)=P(C)=p$，由两两独立得 $P(AB)=P(AC)=P(BC)=p^2$，又 $ABC$ 为不可能事件，故 $P(ABC)=0$。

由容斥原理：
$$P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC)=3p-3p^2.$$

由于 $AB$ 与 $C$ 互斥（因为 $AB\cap C=ABC=\varnothing$），所以 $P(AB)+P(C)\le 1$，即 $p^2+p\le 1$，解得 $p\le \dfrac{\sqrt{5}-1}{2}\approx0.618$。同理 $p$ 满足 $p\ge 0$。

在 $p\in[0,\frac{\sqrt{5}-1}{2}]$ 上，$P(A\cup B\cup C)=3p(1-p)$ 在 $p=0.5$ 处取得最大值 $\frac{3}{4}$（因对称轴 $p=0.5$ 在区间内）。

故三个事件都不发生的概率 $P(\overline{A}\,\overline{B}\,\overline{C})=1-P(A\cup B\cup C)$ 的最小值为 $1-\frac{3}{4}=\frac{1}{4}$。

构造：取 $P(A)=P(B)=P(C)=0.5$，令 $A,B$ 独立，$C$ 取 $A\triangle B$，则满足条件且 $P(\overline{A}\,\overline{B}\,\overline{C})=0.25$，故最小值可达。

**易错点**

- 忽略 $p$ 必须满足 $p^2+p\le 1$ 这一约束，直接对 $3p-3p^2$ 求最值得出 $p=0.5$ 处最大值，但未验证该 $p$ 是否可行。
- 混淆 $\overline{ABC}$ 与 $\overline{A}\overline{B}\overline{C}$ 的含义，导致理解错误。
- 忘记两两独立仅保证 $P(AB)=P(A)P(B)$ 等，不保证 $P(ABC)=P(A)P(B)P(C)$。

**命题规律**

概率常考独立性、容斥原理与最值结合，通常需要利用概率不等式（如 $P(AB)+P(C)\le 1$）确定参数范围，再求最值。复习时注意此类约束条件的推导。

> 题面中 $P(\overline{ABC})$ 按 $P(\overline{A}\overline{B}\overline{C})$ 理解（即三个事件都不发生），否则无法求解。OCR 疑误，请核对原书。


> 来源：《26_张宇四套卷（数一）》卷二 第 16 题
