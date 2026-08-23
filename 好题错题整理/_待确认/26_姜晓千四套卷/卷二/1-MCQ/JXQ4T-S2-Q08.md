---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - PS
  - 26_姜晓千四套卷/卷二/MCQ
  - 计算题
  - 德摩根定律
  - 概率加法公式
  - 事件交概率界限
  - 概率取值范围
points:
level:
---

# MCQ 第 8 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S2-Q08_题目.png|题目]]

设事件 $A,B$ 发生的概率分别为 $P(A)=\frac{3}{4},P(B)=\frac{1}{3}$，则 $P(\overline{A}\cup\overline{B})$ 的可能取值为（ ）
(A) 0.2
(B) 0.4
(C) 0.6
(D) 0.8

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S2-Q08_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由德摩根律 $\overline{A}\cup\overline{B}=\overline{A\cap B}$，故

$$P(\overline{A}\cup\overline{B})=1-P(A\cap B).$$

又 $P(A)=\frac34,\ P(B)=\frac13$。由 $P(A\cup B)\le1$ 得

$$P(A\cap B)\ge P(A)+P(B)-1=\frac{1}{12};$$

由 $A\cap B\subseteq B$ 得

$$P(A\cap B)\le P(B)=\frac13.$$

因此 $P(A\cap B)\in[\frac{1}{12},\frac13]$，所以

$$P(\overline{A}\cup\overline{B})\in[\frac23,\frac{11}{12}].$$

四个选项中只有 $0.8$ 落在此区间内。

【答案】(D)

**解题切入点**

本题本质是“已知两个事件概率，求交事件概率的可行区间”：先由容斥公式确定 $P(A\cap B)$ 的下界，再由子事件关系确定上界，最后用德摩根律转化为所求概率。类似算法竞赛中已知集合大小求交集大小的“区间伸缩”问题。

**推演**

1. 用德摩根律化简：
   $$\overline{A}\cup\overline{B}=\overline{A\cap B},$$
   所以
   $$P(\overline{A}\cup\overline{B})=1-P(A\cap B).$$

2. 求 $P(A\cap B)$ 的下界：
   由 $P(A\cup B)=P(A)+P(B)-P(A\cap B)\le1$，得
   $$P(A\cap B)\ge P(A)+P(B)-1=\frac34+\frac13-1=\frac{1}{12}.$$

3. 求 $P(A\cap B)$ 的上界：
   因为 $A\cap B\subseteq B$，所以
   $$P(A\cap B)\le P(B)=\frac13.$$
   当 $B\subseteq A$ 时等号成立，故上界可达到。

4. 于是
   $$\frac{1}{12}\le P(A\cap B)\le\frac13,$$
   从而
   $$1-\frac13\le P(\overline{A}\cup\overline{B})\le1-\frac{1}{12},$$
   即
   $$\frac23\le P(\overline{A}\cup\overline{B})\le\frac{11}{12}.$$

5. 选项逐一判断：
   - (A) $0.2<\frac23$，不可能；
   - (B) $0.4<\frac23$，不可能；
   - (C) $0.6<\frac23$，不可能；
   - (D) $0.8\in[\frac23,\frac{11}{12}]$，可能。

   故正确选项为 (D)。

**易错点**

- 不要把 $\overline{A}\cup\overline{B}$ 错写成 $\overline{A\cup B}$；前者是“至少一个不发生”，等于 $\overline{A\cap B}$。
- 不能默认 $A,B$ 独立而写 $P(A\cap B)=P(A)P(B)$，题中未给出独立条件。
- 不要忘记交事件概率的下界公式：$P(A\cap B)\ge P(A)+P(B)-1$；当两概率和小于等于1时下界为0，本题和大于1，所以下界为正。
- 上界应取 $\min(P(A),P(B))$，而不是 $P(A)$ 或 $1$。

**命题规律**

考研概率喜欢用事件关系与基本公式设置“取值范围”型小题。常见套路：给出 $P(A),P(B)$，求 $P(A\cup B)$、$P(AB)$ 或 $P(\overline{A}\cup\overline{B})$ 的范围。复习时抓住三条主线：德摩根律、容斥公式、子集关系不等式。


> 来源：《26_姜晓千四套卷（数一）》卷二 第 8 题
