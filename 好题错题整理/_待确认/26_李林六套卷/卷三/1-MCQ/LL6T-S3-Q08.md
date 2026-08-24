---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - PS
  - 26_李林六套卷/卷三/MCQ
  - 计算题
  - 条件概率
  - 和事件概率
  - 德摩根定律
  - 事件独立性
  - 对立事件公式
points:
level:
---

# 选择题 第 8 题

![[_Attachments/题目识别/LL6T/LL6T-S3-Q08_题目.png|题目]]

设 $A$、$B$ 是两个随机事件, $P(A)=0.2$, $P(B|A)=P(B|\overline{A})$, $P(A\cup B)=0.6$, 则 $P(\overline{A}\cup\overline{B})=.$
(A) $0.4.$
(B) $0.5.$
(C) $0.8.$
(D) $0.9.$

![[_Attachments/题目识别/LL6T-答案/LL6T-S3-Q08_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
【答案】(D) $0.9$。

**解题切入点**
题目给出条件概率相等，本质是以 $A$ 是否发生分层后 $B$ 的条件概率相同；可设 $P(AB)=x$ 列线性方程，类似算法题中已知两组比例相等，解约束方程即可。

**推演**
设 $P(AB)=x$。由 $P(A)=0.2$ 得 $P(\overline A)=0.8$。

条件概率相等：
$$
P(B|A)=\frac{x}{0.2},\quad P(B|\overline A)=\frac{P(\overline A B)}{0.8}.
$$
因此
$$
\frac{x}{0.2}=\frac{P(\overline A B)}{0.8}
\Rightarrow P(\overline A B)=4x.
$$

于是
$$
P(B)=P(AB)+P(\overline A B)=x+4x=5x.
$$

由 $P(A\cup B)=0.6$：
$$
0.6=P(A)+P(B)-P(AB)=0.2+5x-x=0.2+4x,
$$
解得 $x=0.1$。

又由德摩根定律：
$$
\overline A\cup\overline B=\overline{A\cap B},
$$
所以
$$
P(\overline A\cup\overline B)=1-P(AB)=1-0.1=0.9.
$$

选项辨析：
- (A) $0.4$：这是 $P(\overline{A\cup B})=1-P(A\cup B)=0.4$，不是所求。
- (B) $0.5$：这是解出的 $P(B)$，不是 $P(\overline A\cup\overline B)$。
- (C) $0.8$：这是 $P(\overline A)$，也不是所求。
- (D) $0.9$：正确。

关键给分点：设 $P(AB)=x$、由条件概率公式得 $P(\overline A B)=4x$、由和事件公式解 $x$、用德摩根定律求补集概率。

**易错点**
- 不要把 $\overline A\cup\overline B$ 与 $\overline{A\cup B}$ 混淆：前者是“至少有一个不发生”，概率为 $1-P(AB)$；后者是“都不发生”，概率为 $1-P(A\cup B)=0.4$。选项 (A) 对应后者的值。
- 条件概率相等不能直接当成 $P(AB)$ 已知，要通过 $P(B|\cdot)$ 的关系列方程。
- 事实上 $P(B|A)=P(B|\overline A)$ 还推出 $B$ 与 $A$ 独立，可作快速检验：$P(AB)=P(A)P(B)=0.1$。

**命题规律**
此类题在考研概率中常考“事件运算 + 条件概率/独立性”，往往用文氏图或设未知量列方程即可。复习时熟练掌握德摩根定律、条件概率公式、和事件概率公式，并警惕“补集取反”的常见陷阱。


> 来源：《26_李林六套卷（数一）》卷三 第 8 题
