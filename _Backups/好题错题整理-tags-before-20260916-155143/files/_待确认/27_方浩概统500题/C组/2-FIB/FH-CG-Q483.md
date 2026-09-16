---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 对立事件
  - 补事件概率
  - 积事件
points:
level:
---

# FIB 第 483 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q483_题目.png|题目]]

483 设$A,B,C$为随机事件，且$P(C)=\frac{1}{5},P(AC)=\frac{1}{15},P(BC)=\frac{1}{20},P(ABC)=\frac{1}{30}$，则$P(\overline{ABC})=$ \_.

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：按题面记号，$P(\overline{ABC})=\dfrac{29}{30}$。因为 $\overline{ABC}$ 是 $ABC$ 的对立事件，所以  
$P(\overline{ABC})=1-P(ABC).$

**解题切入点**：  
看到 $\overline{ABC}$，应立刻定位到“对立事件”或“补事件”的概率公式：$P(\bar D)=1-P(D)$。这里 $D=ABC$，而 $P(ABC)$ 已经直接给出。题目中 $P(C),P(AC),P(BC)$ 对本题而言是冗余信息，不要被它们诱导去做复杂的容斥运算。

**推演**：  
在概率论中，$ABC$ 表示三个事件的交事件，即  
$ABC=A\cap B\cap C.$

令 $D=ABC$。由于任一事件 $D$ 与其对立事件 $\overline D$ 互不相容且构成必然事件，所以  
$P(D)+P(\overline D)=1.$

因此  
$P(\overline{ABC})=P(\overline D)=1-P(D)=1-P(ABC).$

代入题给 $P(ABC)=\frac{1}{30}$，得  
$P(\overline{ABC})=1-\frac{1}{30}=\frac{29}{30}.$

也可以借助德摩根律理解：  
$\overline{ABC}=\overline{A\cap B\cap C}=\overline A\cup \overline B\cup \overline C,$
即“$A,B,C$ 至少有一个不发生”。

**易错点**：  
1. 不要把 $\overline{ABC}$ 误读为 $\overline A\,\overline B\,C$。$\overline{ABC}$ 是“$ABC$ 不发生”，即“至少有一个不发生”；而 $\overline A\overline B C$ 是“$A,B$ 不发生且 $C$ 发生”，这是另一个事件。  
2. 不要因为题干给了 $P(C),P(AC),P(BC)$ 就去套加法公式或容斥公式；本题只需求对立事件，直接用 $1-P(ABC)$。  
3. 注意 $ABC$ 是交事件，不是并事件；$\overline{ABC}$ 也不是“三个事件都不发生”。

**命题规律**：  
本题属于事件关系与运算中的基础题，核心是补事件概率公式与事件记号的理解。常见变式有：已知若干交事件概率，求 $P(A\cup B\cup C)$、$P(\overline A\overline B\overline C)$、$P(\overline A\overline B\mid C)$ 等。复习时应熟练辨析事件符号，并掌握德摩根律和加法公式。

**知识点**：随机事件、积事件、对立事件、补事件概率公式

---

> 来源：方浩概率统计进阶500题做题本 第176页 · C组
