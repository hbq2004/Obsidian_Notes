---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - PS
  - 26_张宇四套卷/卷四/FIB
  - 计算题
  - 相互独立
  - 条件概率
  - 概率加法公式
  - 事件化简
points:
level:
---

# 填空题 第 16 题

![[_Attachments/题目识别/ZY4T/ZY4T-S4-Q16_题目.png|题目]]

设事件 $A, B, C$ 相互独立，$P(A) = \frac{1}{2}$，$P(B) = P(C) = \frac{3}{4}$，则 $P(A \cup C | A \cup B) = \_$ .

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S4-Q16_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由条件概率定义：
$$P(A\cup C \mid A\cup B)=\frac{P((A\cup C)\cap(A\cup B))}{P(A\cup B)}=\frac{25}{28}.$$

填空题【答案】:
$$\boxed{\frac{25}{28}}$$

**解题切入点**

把事件看成集合，条件概率就是“在缩小的样本空间里求交并占比”；独立条件使交事件概率可直接相乘。类比算法竞赛：先化简集合表达式，再分别计算分子分母。

**推演**

先用集合分配律化简：
$$(A\cup C)\cap(A\cup B)=A\cup(B\cap C).$$

由独立性和加法公式计算分母：
$$P(A\cup B)=P(A)+P(B)-P(A\cap B)=\frac12+\frac34-\frac12\cdot\frac34=\frac78.$$

计算分子：
$$P(A\cup(B\cap C))=P(A)+P(B\cap C)-P(A\cap B\cap C)$$
$$=\frac12+\frac34\cdot\frac34-\frac12\cdot\frac34\cdot\frac34=\frac12+\frac9{16}-\frac9{32}=\frac{25}{32}.$$

因此：
$$P(A\cup C\mid A\cup B)=\frac{25/32}{7/8}=\frac{25}{28}.$$

关键给分点：分母 $\frac78$、分子 $\frac{25}{32}$、最终比值 $\frac{25}{28}$。

**易错点**

不要把条件概率直接写成 $P(A\cup C)$，必须除以 $P(A\cup B)$；也不要混淆“独立”和“互斥”，计算 $P(B\cap C)$、$P(A\cap B\cap C)$ 时用乘法公式。

**命题规律**

这类题常把独立事件的性质、集合运算和条件概率结合，核心是“事件化简+概率公式”两步。复习时多做同类小题，并注意与互不相容、两两独立等概念辨析。


> 来源：《26_张宇四套卷（数一）》卷四 第 16 题
