---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - PS
  - 26_余丙森五套卷/卷四/FIB
  - 计算题
  - 相互独立
  - 条件概率
  - 事件运算
  - 概率乘法公式
  - 文氏图
points:
level:
---

# FIB 第 16 题

![[_Attachments/题目识别/YBS5T/YBS5T-S4-Q16_题目.png|题目]]

设随机事件 $A, B, C$ 相互独立, $P(A) = 0.5$, $P(BC) = 0.4$, $P(AB-C) = 0.2$, 则在已知 $B$ 发生, 而 $AC$ 不发生的条件下, $A$ 和 $C$ 至少发生一个的概率为 \_\_\_\_\_\_.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S4-Q16_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

所求条件概率为

$$\boxed{\frac{2}{3}}$$

**填空题【答案】**：

$$\boxed{\frac{2}{3}}$$

**解题切入点**

把事件看成布尔掩码：条件是 $B$ 发生且 $A,C$ 不同时发生，目标是 $A,C$ 至少一个发生。用相互独立把联合概率拆成乘积，再利用集合差/补关系转化为互不相交的事件块。

**推演**

设 $b=P(B)$。由 $A,B,C$ 相互独立，$A$ 与 $BC$ 独立，所以

$$P(ABC)=P(A)P(BC)=0.5\times0.4=0.2.$$

又

$$P(AB-C)=P(AB\bar C)=P(AB)-P(ABC),$$

且 $P(AB)=P(A)P(B)=0.5b$，故

$$0.2=0.5b-0.2 \Rightarrow b=0.8.$$

同时由 $P(BC)=P(B)P(C)$ 得 $P(C)=0.5$（也可不用）。

记条件事件 $G=B\overline{AC}$。因为 $\overline{AC}$ 表示“$A,C$ 不同时发生”，所以

$$G=B\setminus ABC,\quad P(G)=P(B)-P(ABC)=0.8-0.2=0.6.$$

有利事件为“在 $G$ 下 $A,C$ 至少一个发生”，即 $A,C$ 恰有一个发生：

$$H=AB\bar C\cup \bar A B C.$$

两项互不相交，且

$$P(AB\bar C)=0.2,\quad P(\bar A B C)=P(BC)-P(ABC)=0.4-0.2=0.2.$$

所以

$$P(H)=0.2+0.2=0.4.$$

因此

$$P(A\cup C\mid B\overline{AC})=\frac{P(H)}{P(G)}=\frac{0.4}{0.6}=\frac{2}{3}.$$

**易错点**

1. $AB-C$ 是 $AB\bar C$，不是 $P(AB)-P(C)$。
2. $AC$ 不发生写作 $\overline{A\cap C}$，不是 $\bar A\bar C$（二者不同）。
3. 在“$AC$ 不发生”条件下，“$A,C$ 至少一个发生”等价于“恰有一个发生”，不能直接算成 $P(A\cup C)$。
4. 条件概率分母是 $P(B\overline{AC})$，不要漏掉 $B$。

**命题规律**

概率小题常将相互独立与事件运算结合，考查把文字条件翻译成集合公式的能力。复习时重点练 $A-B=A\bar B$、$\overline{AB}$ 与 $\bar A\bar B$ 的区分，以及条件概率的“条件事件”定义。


> 来源：《26_余丙森五套卷（数一）》卷四 第 16 题
