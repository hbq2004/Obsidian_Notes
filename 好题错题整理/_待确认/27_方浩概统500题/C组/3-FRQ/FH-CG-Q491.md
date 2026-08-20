---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 综合题
  - 全概率公式
  - 递推数列
  - 不等式放缩
points:
level:
---

# FRQ 第 491 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q491_题目.png|题目]]

491 某排球教练带领甲、乙两名排球主力运动员训练排球的接球与传球，首先由教练第一次传球给甲、乙中的某位运动员，然后该运动员再传回教练。每次教练接球后按下列规律传球：若教练上一次是传给某运动员，则这次有 $\frac{1}{3}$ 的概率再传给该运动员，有 $\frac{2}{3}$ 的概率传给另一位运动员。已知教练第一次传给了甲运动员，且教练第 $n$ 次传球传给甲运动员的概率为 $p_n$。

(1) 求 $p_2, p_3$；
(2) 求 $p_n$ 的表达式；
(3) 设 $q_n = |2p_n - 1|$，证明：$\sum_{i=1}^{n} (q_{i+1} - q_i)(\sin q_{i+1} - \sin q_i) < \frac{1}{2}$.

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：(1) $p_2=\dfrac13,\ p_3=\dfrac59$；  
(2) $\displaystyle p_n=\frac12+\frac12\left(-\frac13\right)^{n-1}$；  
(3) 由 $\displaystyle q_n=\left(\frac13\right)^{n-1}$，利用 $|\sin x-\sin y|\le |x-y|$ 可证左边 $\displaystyle \le \frac12\left(1-\frac1{9^n}\right)<\frac12$。

**解题切入点**：先不要被“传球—回传”的过程绕晕。回传不改变“教练上一次传给了谁”这个信息，所以只需把状态压缩为“甲/乙”两个状态，用全概率公式建立 $p_{n+1}$ 与 $p_n$ 的一阶递推关系，类似动态规划中只保留当前状态做转移。第三问的关键是先看出 $q_n$ 是等比数列，然后再用 $\sin x$ 的 Lipschitz 性质（或拉格朗日中值定理）作放缩。

**推演**：

设事件  
$
A_n=\{\text{教练第 }n\text{ 次传球传给甲}\},\qquad p_n=P(A_n).
$
已知教练第一次传给甲，所以 $p_1=1$。

若第 $n$ 次传给甲，则第 $n+1$ 次仍传给甲的概率为 $\dfrac13$；  
若第 $n$ 次传给乙，则第 $n+1$ 次传给甲的概率为 $\dfrac23$。

由全概率公式：
$
\begin{aligned}
p_{n+1}
&=P(A_n)P(A_{n+1}\mid A_n)+P(\overline{A_n})P(A_{n+1}\mid \overline{A_n})\\
&=p_n\cdot\frac13+(1-p_n)\cdot\frac23\\
&=\frac23-\frac13p_n.
\end{aligned}
$

求不动点：令 $p=\dfrac23-\dfrac13p$，得 $p=\dfrac12$。于是
$
p_{n+1}-\frac12=-\frac13\left(p_n-\frac12\right).
$

所以 $\left\{p_n-\dfrac12\right\}$ 是公比为 $-\dfrac13$ 的等比数列，且
$
p_1-\frac12=1-\frac12=\frac12.
$

因此
$
p_n-\frac12=\frac12\left(-\frac13\right)^{n-1},
$
即
$
\boxed{p_n=\frac12+\frac12\left(-\frac13\right)^{n-1}}.
$

于是
$
p_2=\frac12+\frac12\left(-\frac13\right)=\frac13,
$
$
p_3=\frac12+\frac12\left(\frac19\right)=\frac59.
$

第三问：

由上式，
$
2p_n-1=\left(-\frac13\right)^{n-1},
$
所以
$
q_n=\left|2p_n-1\right|=\left(\frac13\right)^{n-1}.
$

因此 $q_n$ 单调递减，且
$
q_i-q_{i+1}
=\left(\frac13\right)^{i-1}-\left(\frac13\right)^i
=\frac{2}{3^i}>0.
$

记 $a_i=q_i-q_{i+1}=\dfrac{2}{3^i}$，则
$
(q_{i+1}-q_i)(\sin q_{i+1}-\sin q_i)
=a_i(\sin q_i-\sin q_{i+1}).
$

由拉格朗日中值定理，存在 $\xi_i\in(q_{i+1},q_i)$，使得
$
\sin q_i-\sin q_{i+1}
=\cos \xi_i\,(q_i-q_{i+1})
=\cos \xi_i\,a_i\le a_i.
$

所以
$
a_i(\sin q_i-\sin q_{i+1})\le a_i^2=\frac{4}{9^i}.
$

于是
$
\begin{aligned}
\sum_{i=1}^n (q_{i+1}-q_i)(\sin q_{i+1}-\sin q_i)
&\le \sum_{i=1}^n \frac{4}{9^i}\\
&=4\cdot \frac{\frac19\left(1-\frac1{9^n}\right)}{1-\frac19}\\
&=\frac12\left(1-\frac1{9^n}\right)\\
&<\frac12.
\end{aligned}
$

故原不等式成立。

**易错点**：

1. 初值容易写错。题目明确“教练第一次传给了甲”，所以 $p_1=1$，不能把第一次传球当作随机的。  
2. 转移概率容易写反：若第 $n$ 次传给甲，则下一次仍传甲的概率是 $\dfrac13$；若第 $n$ 次传给乙，则下一次传甲的概率是 $\dfrac23$。  
3. 第二问中 $2p_n-1$ 会正负交替，但 $q_n$ 要取绝对值，不能直接写成 $(-1/3)^{n-1}$。  
4. 第三问中差值都为负，乘积为正；放缩时最好写成 $a_i(\sin q_i-\sin q_{i+1})$，避免符号混乱。  
5. 注意是有限项和：
$
\sum_{i=1}^n \frac{4}{9^i}
=\frac12\left(1-\frac1{9^n}\right)<\frac12,
$
不能误写成无限项和等于 $\dfrac12$ 而失去严格小于号。

**命题规律**：本题是典型的“概率递推 + 数列 + 不等式放缩”综合题。先以传球为背景建立一阶马尔可夫型转移关系，再解一阶线性递推数列，最后结合拉格朗日中值定理或 $\sin x$ 的 Lipschitz 性质放缩。常见变式有三人传球、求极限概率、求首次到达某状态的期望等。复习时应重视全概率公式列递推、不动点法求通项，以及常用的函数差值不等式。

**知识点**：全概率公式、一阶线性递推数列、拉格朗日中值定理、几何级数求和

---

> 来源：方浩概率统计进阶500题做题本 第179页 · C组
