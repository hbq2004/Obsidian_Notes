---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 事件运算
  - 完备事件组
  - 概率可加性
  - 对立事件
points:
level:
---

# FIB 第 482 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q482_题目.png|题目]]

482 设A,B为随机事件，则$P[(A\cup B)(A\cup \overline{B})(\overline{A}\cup B)(\overline{A}\cup \overline{B})] = P(AB) + P(A\overline{B}) + P(\overline{A}B) + P(\overline{A}\overline{B}) =$ \_\_\_\_.

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：题干中的长等号不能成立。按事件代数通常约定，

$
P[(A\cup B)(A\cup \overline{B})(\overline{A}\cup B)(\overline{A}\cup \overline{B})]=0,
$

而

$
P(AB)+P(A\overline{B})+P(\overline{A}B)+P(\overline{A}\overline{B})=1.
$

所以若原题是两个独立的空，则第一空填 \(\boxed{0}\)，第二空填 \(\boxed{1}\)；若按题面连等填空，则题干有误，无满足连等式的数。

**解题切入点**：先把事件化简，再求概率，不要一上来就展开概率。看到两两配对的并事件，例如 \((A\cup B)(A\cup \overline{B})\)，应联想到分配律和 \(B\overline{B}=\varnothing\)。看到 \(AB,\ A\overline{B},\ \overline{A}B,\ \overline{A}\overline{B}\) 四项，则应立刻想到它们正好是样本空间的一个完备事件组。

**推演**：按通常记号，事件并列表示交，即

$
AB=A\cap B.
$

设

$
E=(A\cup B)(A\cup \overline{B})(\overline{A}\cup B)(\overline{A}\cup \overline{B}).
$

先化简前两个因子：

$
(A\cup B)(A\cup \overline{B})
=A\cup(B\overline{B})
=A\cup\varnothing
=A.
$

同理，

$
(\overline{A}\cup B)(\overline{A}\cup \overline{B})
=\overline{A}\cup(B\overline{B})
=\overline{A}.
$

因此

$
E=A\overline{A}=\varnothing.
$

所以

$
P[(A\cup B)(A\cup \overline{B})(\overline{A}\cup B)(\overline{A}\cup \overline{B})]=P(\varnothing)=0.
$

再看四项概率和。事件

$
AB,\quad A\overline{B},\quad \overline{A}B,\quad \overline{A}\overline{B}
$

两两互不相容，并且

$
AB\cup A\overline{B}=A,\qquad 
\overline{A}B\cup \overline{A}\overline{B}=\overline{A},
$

所以

$
AB\cup A\overline{B}\cup \overline{A}B\cup \overline{A}\overline{B}
=A\cup \overline{A}=\Omega.
$

由概率的有限可加性，

$
P(AB)+P(A\overline{B})+P(\overline{A}B)+P(\overline{A}\overline{B})
=P(\Omega)=1.
$

因此左侧概率为 \(0\)，右侧四项概率和为 \(1\)，二者不能连等。

**易错点**：

- 容易把事件乘积当作普通乘法，忘记并列表示交；
- 容易把 \(P(AB)+P(A\overline{B})+\cdots\) 误算成 \(0\)，其实这四项构成完备事件组，概率和恒为 \(1\)；
- 设 \(A,B\) 独立时才可用 \(P(AB)=P(A)P(B)\)，本题没有独立性条件，不能用乘法公式；
- 化简 \((A\cup B)(A\cup \overline{B})\) 时容易漏掉 \(A\)，应熟练使用分配律。

**命题规律**：考点主要是事件的关系与运算、完备事件组、概率的有限可加性。常见变式是给出复杂的事件交并表达式，要求通过化简或分解样本空间求概率；复习时应熟练掌握 \(B\overline{B}=\varnothing\)、\(B\cup\overline{B}=\Omega\)，以及将样本空间按两个事件分成四个互斥部分的方法。

**知识点**：事件的交并补运算、对立事件、完备事件组、概率的有限可加性

---

> 来源：方浩概率统计进阶500题做题本 第176页 · C组
