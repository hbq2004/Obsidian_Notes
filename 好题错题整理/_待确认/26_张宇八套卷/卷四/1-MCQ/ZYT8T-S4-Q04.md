---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷四/MCQ
  - 概念题
  - 正项级数比较法
  - 级数收敛必要条件
  - 绝对收敛与条件收敛
  - 莱布尼茨判别法
  - 反例构造
points:
level:
---

# MCQ 第 4 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S4-Q04_题目.png|题目]]

若级数 $\sum_{n=1}^{\infty}|u_n v_n|$ 发散,则

(A) $\sum_{n=1}^{\infty} n|u_n|$ 收敛且 $\sum_{n=1}^{\infty} \frac{|v_n|}{n}$ 收敛.

(B) $\sum_{n=1}^{\infty} n|u_n|$ 发散且 $\sum_{n=1}^{\infty} \frac{|v_n|}{n}$ 收敛.

(C) $\sum_{n=1}^{\infty} n|u_n|$ 收敛或 $\sum_{n=1}^{\infty} \frac{v_n}{n}$ 发散.

(D) $\sum_{n=1}^{\infty} n|u_n|$ 发散或 $\sum_{n=1}^{\infty} \frac{v_n}{n}$ 发散.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S4-Q04_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

选择题【答案】：(D)。令 $a_n=n|u_n|$，$b_n=\dfrac{v_n}{n}$，则 $|u_nv_n|=a_n|b_n|$。若 $\sum a_n$ 与 $\sum b_n$ 都收敛，则 $b_n\to0$，所以 $|b_n|\le M$，从而 $|u_nv_n|\le M a_n$，由比较判别法得 $\sum|u_nv_n|$ 收敛，与题设矛盾。故 $a_n$ 的级数发散或 $b_n$ 的级数发散。

**解题切入点**

题设是“两个数列对应项乘积的绝对值级数发散”，结论本质是“两个相关级数不可能同时收敛”。用反证法：若两个都收敛，则第二个的通项有界，乘积项被第一个通项的常数倍控制，由比较判别法必收敛。类似算法竞赛中：若 $a_n$ 总和有限且 $b_n$ 有界，则 $\sum a_nb_n$ 一定有限。

**推演**

设 $a_n=n|u_n|\ge0$，$b_n=\dfrac{v_n}{n}$，则
$$
|u_nv_n|=n|u_n|\cdot\frac{|v_n|}{n}=a_n|b_n|.
$$
题设给出 $\sum a_n|b_n|$ 发散。

1. 证明 (D) 必真。

反设 $\sum a_n$ 与 $\sum b_n$ 都收敛。由收敛级数通项趋于零，$b_n\to0$，故存在 $M>0$ 使 $|b_n|\le M$。于是
$$
0\le a_n|b_n|\le M a_n,
$$
而 $\sum M a_n$ 收敛，由正项级数比较判别法知 $\sum a_n|b_n|$ 收敛，与题设矛盾。所以 $\sum a_n$ 与 $\sum b_n$ 不可能同时收敛，即 (D) 成立。

2. 选项 (A)：若 $\sum n|u_n|$ 收敛，则 $n|u_n|\to0$，最终 $n|u_n|\le1$，故
$$
|u_nv_n|=(n|u_n|)\frac{|v_n|}{n}\le \frac{|v_n|}{n}.
$$
若再有 $\sum\frac{|v_n|}{n}$ 收敛，则 $\sum|u_nv_n|$ 收敛，与题设矛盾，故 (A) 错。

3. 选项 (B)：不一定。取 $u_n=\frac1{n^2}$，$v_n=n$，则
$$
\sum|u_nv_n|=\sum\frac1n
$$
发散；但 $\sum n|u_n|=\sum\frac1n$ 发散，$\sum\frac{|v_n|}{n}=\sum1$ 发散，所以 (B) 的后半句不成立。

4. 选项 (C)：不一定。取 $n\ge2$ 时
$$
u_n=\frac1{n^2},\qquad v_n=(-1)^n\frac{n}{\ln n},
$$
并令 $v_1=0$。则 $\sum n|u_n|=\sum\frac1n$ 发散；而
$$
\frac{v_n}{n}=\frac{(-1)^n}{\ln n}
$$
满足莱布尼茨判别法，故 $\sum\frac{v_n}{n}$ 收敛；但
$$
|u_nv_n|=\frac1{n\ln n},
$$
其级数发散。因此 (C) 的两个选言支都假。

**易错点**

不要把 $\sum\frac{|v_n|}{n}$ 与 $\sum\frac{v_n}{n}$ 混为一谈。题设只能推出“$\sum n|u_n|$ 发散或 $\sum\frac{v_n}{n}$ 发散”，不能推出“$\sum n|u_n|$ 发散且 $\sum\frac{|v_n|}{n}$ 发散”。解题时优先用反证法，不要试图构造一般情形的充要条件。

**命题规律**

本题考查正项级数比较判别法、收敛级数通项趋于零以及条件收敛/绝对收敛的区分，属于概念辨析题。复习时应熟练掌握“由收敛推出通项有界/趋于零”这一常用控制手段，并会用莱布尼茨型级数构造反例。


> 来源：《26_张宇八套卷（数一）》卷四 第 4 题
