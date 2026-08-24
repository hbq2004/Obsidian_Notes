---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - PS
  - 26_张宇八套卷/卷四/FIB
  - 计算题
  - 条件概率公式
  - 事件运算
  - 概率加法公式
  - 互斥事件
points:
level:
---

# FIB 第 16 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S4-Q16_题目.png|题目]]

已知 $A$ 发生且 $B$ 不发生的概率为 $\frac{1}{2}$，在 $A$ 发生或 $B$ 不发生的条件下 $B$ 发生的概率为 $\frac{1}{4}$，若 $A$ 发生的概率为 $\frac{7}{10}$，则 $B$ 发生的概率为 \_\_\_\_\_\_.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S4-Q16_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

设所求为 $P(B)$。由 $P(A)=P(AB)+P(A\overline B)$，得 $P(AB)=\frac{1}{5}$。再由条件概率定义解得 $P(B)=\frac{2}{5}$。

【答案】
$$
\boxed{P(B)=\frac{2}{5}=0.4}
$$

**解题切入点**

本题是“文字条件概率”题，先把事件语言转成集合公式：条件为 $C=A\cup\overline B$，要求的是 $P(B|C)$。类似算法竞赛中先写清“条件集合”，再用公式展开，避免凭感觉猜概率。

**推演**

1. 设 $x=P(B)$，已知 $P(A)=\frac{7}{10}$，$P(A\overline B)=\frac{1}{2}$。

因为 $A=(A\cap B)\cup(A\cap\overline B)$，且两部分互斥，所以
$$
P(AB)=P(A)-P(A\overline B)=\frac{7}{10}-\frac{1}{2}=\frac{1}{5}.
$$

2. 条件事件为
$$
C=A\cup\overline B.
$$
其概率为
$$
P(C)=P(A)+P(\overline B)-P(A\overline B)
=\frac{7}{10}+(1-x)-\frac{1}{2}
=\frac{6}{5}-x.
$$

3. 条件概率的分子为
$$
P(B\cap C)=P(B\cap(A\cup\overline B))=P(AB)=\frac{1}{5}.
$$

4. 由条件概率定义：
$$
\frac{P(B\cap C)}{P(C)}=\frac{1}{4}
\Rightarrow
\frac{1/5}{6/5-x}=\frac{1}{4}.
$$

解得
$$
\frac{1}{5}=\frac{1}{4}\left(\frac{6}{5}-x\right)
\Rightarrow x=\frac{2}{5}.
$$

因此 $P(B)=\frac{2}{5}$。

关键给分点：写出 $P(AB)=1/5$，把条件概率写成 $\frac{P(AB)}{P(A\cup\overline B)}$，并正确解出 $x$。

**易错点**

- 不要把条件事件 $A\cup\overline B$ 误写成 $A\cap\overline B$；前者的概率用加法公式，后者的概率已知为 $1/2$。
- 求 $P(B\cap(A\cup\overline B))$ 时，注意 $B\cap\overline B=\varnothing$，所以分子只剩 $P(AB)$。
- 使用加法公式时不要漏减 $P(A\overline B)$：$P(A\cup\overline B)=P(A)+P(\overline B)-P(A\overline B)$。

**命题规律**

条件概率题常把“文字条件”与“事件运算”结合，核心是快速写出 $P(B|C)=\frac{P(BC)}{P(C)}$，再用 $P(A)=P(AB)+P(A\overline B)$ 等基本恒等式消元。复习时可用文氏图辅助，不要只背公式。


> 来源：《26_张宇八套卷（数一）》卷四 第 16 题
