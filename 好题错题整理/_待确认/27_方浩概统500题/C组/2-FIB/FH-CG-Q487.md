---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 条件概率
  - 事件运算
  - 独立性
  - 概率加法公式
points:
level:
---

# FIB 第 487 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q487_题目.png|题目]]

487 设 $A,B,C$ 为随机事件，且 $P(A)=0.4, P(C)=0.5, A\subset B, A,C$ 相互独立，则 $P(A-C|AB\cup C)=$ \_\_.

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：应填 $\dfrac{2}{7}$。因为 $A\subset B$ 使 $AB\cup C=A\cup C$，且 $A-C\subset A\cup C$，由独立性和条件概率定义可得 $\dfrac{P(A-C)}{P(A\cup C)}=\dfrac{2}{7}$。

**解题切入点**：拿到题目先别急着代条件概率公式，先化简事件：$A\subset B$ 时 $AB=A$，所以条件事件 $AB\cup C=A\cup C$。接着看包含关系：$A-C=A\cap C^c\subset A\subset A\cup C$，因此分子可直接写成 $P(A-C)$。最后用独立事件乘法公式求交事件概率。类比算法中先把输入数据“去冗余、归一化”，再做状态转移，能少走弯路。

**推演**：

由 $A\subset B$ 得
$$
AB=A,
$$
故
$$
AB\cup C=A\cup C.
$$

记 $A-C=A\overline C=A\cap C^c$。因为
$$
A-C\subset A\subset A\cup C,
$$
所以
$$
(A-C)\cap(AB\cup C)=(A-C)\cap(A\cup C)=A-C.
$$

由条件概率定义：
$$
\begin{aligned}
P(A-C\mid AB\cup C)
&=\frac{P((A-C)\cap(AB\cup C))}{P(AB\cup C)}\\
&=\frac{P(A-C)}{P(A\cup C)}.
\end{aligned}
$$

由 $A,C$ 相互独立：
$$
P(AC)=P(A)P(C)=0.4\times 0.5=0.2.
$$

于是
$$
P(A-C)=P(A)-P(AC)=0.4-0.2=0.2,
$$
且
$$
P(A\cup C)=P(A)+P(C)-P(AC)
=0.4+0.5-0.2=0.7.
$$

所以
$$
P(A-C\mid AB\cup C)
=\frac{0.2}{0.7}
=\frac{2}{7}.
$$

**易错点**：

1. 忘记用 $A\subset B$ 化简，把 $AB\cup C$ 仍当作复杂表达式，增加出错率。
2. 把 $A-C$ 误写成 $A$ 或 $A\cup C$；$A-C$ 表示 $A$ 中不属于 $C$ 的部分，即 $A\overline C$。
3. 算 $P(A\cup C)$ 时漏减 $P(AC)$；本题 $A,C$ 独立，所以 $P(AC)=0.2$，不是 $0$。
4. 条件概率公式中要先算交集再除以条件事件概率；不能直接写成 $\dfrac{P(A-C)}{P(AB\cup C)}$，除非确认 $A-C\subset AB\cup C$，本题确实成立。

**命题规律**：本题属于条件概率与事件运算、独立性结合的基础题，常见于选择题或填空题。变式可能为：给出 $A\subset B$ 且 $A,C$ 独立，求 $P(A\mid A\cup C)$、$P(\overline A\mid A\cup C)$，或将独立改为互斥、完备事件组。复习建议：熟练事件化简（包含、差、并、交），先画文氏图理清关系，再用
$$
P(D\mid E)=\frac{P(DE)}{P(E)}
$$
转化为无条件的概率计算。

**知识点**：条件概率、事件运算（差、并）、事件的独立性、概率加法公式

---

> 来源：方浩概率统计进阶500题做题本 第177页 · C组
