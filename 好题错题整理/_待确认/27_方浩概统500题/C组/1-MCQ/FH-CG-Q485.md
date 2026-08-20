---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 概念题
  - 条件概率
  - 全概率公式
  - 概率单调性
  - 事件运算
points:
level:
---

# MCQ 第 485 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q485_题目.png|题目]]

485 设 $A, B, C$ 为随机事件，且 $P(A)P(B)P(C) \neq 0$，下列说法中错误的是（ ）.

(A) $P(AB|A) \geqslant P(AB|A \cup B)$
(B) 若 $P(A|B) = 1$，则 $P(\bar{B}|\bar{A}) = 1$
(C) 若 $P(A|C) \geqslant P(B|C), P(A|\bar{C}) \geqslant P(B|\bar{C})$，则 $P(A) \geqslant P(B)$
(D) 若 $P(A|C) \geqslant P(B|C), P(A|\bar{C}) \leqslant P(B|\bar{C})$，则 $P(A) = P(B)$

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 **D**。因为 $P(A)$ 与 $P(B)$ 分别是条件概率在 $C$ 与 $\bar C$ 上的加权平均，D 中两个条件不等式方向相反，加权后不一定相等。

**解题切入点**：  
看到 $P(A|C)$、$P(A|\bar C)$ 与 $P(A)$ 同时出现，应立刻想到全概率公式，把无条件概率看成按 $C$ 分组的加权平均。同向不等式能保持，异向不等式不能推出相等。A、B 则用条件概率定义 $P(X|Y)=\dfrac{P(XY)}{P(Y)}$ 转化为事件关系。

**推演**：  
题设 $P(A)P(B)P(C)\ne0$，所以 $P(A)>0,\ P(B)>0,\ P(C)>0$。下面按考研常规，默认题目中出现的条件概率均有定义。

**(A) 正确。**

由条件概率定义：
$$
P(AB|A)=\frac{P(AB)}{P(A)},
\qquad
P(AB|A\cup B)=\frac{P(AB)}{P(A\cup B)}.
$$
因为
$$
P(A\cup B)\ge P(A)>0,
$$
且 $P(AB)\ge0$，所以
$$
P(AB|A)=\frac{P(AB)}{P(A)}
\ge
\frac{P(AB)}{P(A\cup B)}
=P(AB|A\cup B).
$$

**(B) 正确。**

若 $P(A|B)=1$，则
$$
P(AB)=P(B),
$$
于是
$$
P(B\bar A)=P(B)-P(AB)=0.
$$
因此
$$
P(\bar B|\bar A)
=1-P(B|\bar A)
=1-\frac{P(B\bar A)}{P(\bar A)}
=1.
$$

**(C) 正确。**

设 $p=P(C)$，$q=P(\bar C)$。由全概率公式：
$$
P(A)=pP(A|C)+qP(A|\bar C),
$$
$$
P(B)=pP(B|C)+qP(B|\bar C).
$$
因为
$$
P(A|C)\ge P(B|C),\qquad P(A|\bar C)\ge P(B|\bar C),
$$
所以
$$
P(A)\ge P(B).
$$

**(D) 错误。**

仍由全概率公式：
$$
P(A)-P(B)
=
p\big[P(A|C)-P(B|C)\big]
+
q\big[P(A|\bar C)-P(B|\bar C)\big].
$$
其中第一项 $\ge0$，第二项 $\le0$，两者可能抵消，也可能不抵消，不能推出 $P(A)=P(B)$。

举一个反例：令
$$
P(C\cap A\cap \bar B)=\frac12,\quad
P(\bar C\cap A\cap B)=\frac14,\quad
P(\bar C\cap \bar A\cap B)=\frac14,
$$
其余原子事件概率为 $0$。则
$$
P(C)=\frac12,\qquad P(A)=\frac34,\qquad P(B)=\frac12.
$$
并且
$$
P(A|C)=1,\quad P(B|C)=0,
$$
$$
P(A|\bar C)=\frac12,\quad P(B|\bar C)=1.
$$
于是满足
$$
P(A|C)\ge P(B|C),\qquad P(A|\bar C)\le P(B|\bar C),
$$
但
$$
P(A)=\frac34\ne \frac12=P(B).
$$

所以错误的是 **D**。

**易错点**：  
- 不要把 D 中两个方向相反的不等式误认为“综合起来相等”，必须乘上权重 $P(C)$、$P(\bar C)$ 后看加权平均。  
- 不要把 $P(AB|A)$ 与 $P(AB)$ 混淆，应用公式 $P(X|Y)=\dfrac{P(XY)}{P(Y)}$。  
- 注意条件概率的分母必须为正；若 $P(A)=1$，则 $P(\bar B|\bar A)$ 本身无定义。常规题目默认相关条件概率有意义。

**命题规律**：  
本题是条件概率与全概率公式的经典辨析题。常见变式是把 $C,\bar C$ 换成一个完备事件组 $\{C_i\}$，给出 $P(A|C_i)$ 与 $P(B|C_i)$ 的大小关系，判断 $P(A)$ 与 $P(B)$ 的大小。复习时建议熟练掌握全概率公式，并学会用反例否定一个判断。

**知识点**：条件概率、全概率公式、概率的单调性、事件运算

---

> 来源：方浩概率统计进阶500题做题本 第177页 · C组
