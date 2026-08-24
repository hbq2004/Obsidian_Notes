---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - AM
  - 26_李林六套卷/卷五/FRQ
  - 证明题
  - 罗尔定理
  - 辅助函数构造
  - 二阶导数有界
  - 插值余项
points:
level:
---

# 解答题 第 20 题

![[_Attachments/题目识别/LL6T/LL6T-S5-Q20_题目.png|题目]]

设 $f(x)$ 在 $[a,b]$ 上二阶可导，$M=\max\limits_{x\in[a,b]}\{|f''(x)|\}$。证明：对任意 $x\in(a,b)$，均有
$$
\left| \frac{f(x)-f(a)}{x-a} - \frac{f(b)-f(a)}{b-a} \right| \leqslant \frac{M}{2}(b-x).
$$

![[_Attachments/题目识别/LL6T-答案/LL6T-S5-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
原不等式成立。

关键给分点：
1. 令 $c=\frac{f(b)-f(a)}{b-a}$，定义 $q(t)=f(t)-f(a)-c(t-a)$，则 $q(a)=q(b)=0$ 且 $q''(t)=f''(t)$；
2. 取 $h(t)=(t-a)(b-t)$，对固定的 $x\in(a,b)$ 令 $\alpha=\frac{q(x)}{h(x)}$，构造 $F(t)=q(t)-\alpha h(t)$；
3. 因 $F(a)=F(x)=F(b)=0$，两次应用罗尔定理得存在 $\eta$ 使 $F''(\eta)=0$，故 $|\alpha|=\frac{1}{2}|f''(\eta)|\le \frac{M}{2}$；
4. 于是 $|q(x)|=|\alpha|h(x)\le \frac{M}{2}(x-a)(b-x)$；
5. 又 $q(x)=(x-a)\left(\frac{f(x)-f(a)}{x-a}-c\right)$，除以 $x-a>0$ 得所证。

**解题切入点**
端点值相同的误差函数 $q$ 用“帽子函数”$h(t)=(t-a)(b-t)$ 控制；类似算法竞赛中的“构造夹逼函数”，用罗尔定理取出二阶导数信息。

**推演**
设
$$
c=\frac{f(b)-f(a)}{b-a},\quad q(t)=f(t)-f(a)-c(t-a)\quad(a\le t\le b).
$$
则
$$
q(a)=0,\quad q(b)=0,\quad q''(t)=f''(t),
$$
并且
$$
q(x)=f(x)-f(a)-c(x-a)
=(x-a)\left(\frac{f(x)-f(a)}{x-a}-c\right).
$$

令
$$
h(t)=(t-a)(b-t),\quad h''(t)=-2.
$$
对固定的 $x\in(a,b)$，$h(x)>0$。设
$$
\alpha=\frac{q(x)}{h(x)},\quad F(t)=q(t)-\alpha h(t).
$$
则 $F(a)=F(x)=F(b)=0$。由罗尔定理，$F'$ 在 $(a,x)$ 与 $(x,b)$ 内各至少有一个零点；再对 $F'$ 用罗尔定理，存在 $\eta\in(a,b)$ 使 $F''(\eta)=0$。

而
$$
F''(t)=q''(t)-\alpha h''(t)=f''(t)+2\alpha,
$$
所以
$$
f''(\eta)+2\alpha=0\Rightarrow \alpha=-\frac{f''(\eta)}{2}.
$$
由 $M=\max|f''|$，
$$
|\alpha|=\frac{|f''(\eta)|}{2}\le \frac{M}{2}.
$$
于是
$$
|q(x)|=|\alpha|h(x)\le \frac{M}{2} (x-a)(b-x).
$$
代入 $q(x)$ 表达式：
$$
(x-a)\left|\frac{f(x)-f(a)}{x-a}-c\right|\le \frac{M}{2} (x-a)(b-x).
$$
因 $x-a>0$，两边除以 $x-a$，即
$$
\left|\frac{f(x)-f(a)}{x-a}-\frac{f(b)-f(a)}{b-a}\right|\le \frac{M}{2} (b-x).
$$
得证。

**易错点**
- 注意 $h''(t)=-2$，代入 $F''$ 时是 $f''+2\alpha$，符号不能写反。
- 构造的 $h$ 必须在 $a,b$ 处取 $0$，且 $x$ 处不为 $0$；不要误用 $h(t)=(t-a)(x-t)$。
- 最后得到的是 $|q(x)|\le \frac{M}{2}(x-a)(b-x)$，需除以 $x-a$ 化为题目形式。
- 罗尔定理要求 $F$ 在 $a,x,b$ 三点值相等（都为 $0$），中间函数的连续性由二阶可导保证。

**命题规律**
- 典型套路：线性插值余项 + 两次罗尔定理。也可用带积分余项的泰勒公式，但辅助函数法更直接。
- 复习时多练“端点为零”的辅助函数构造，如 $q(t)=f(t)-f(a)-c(t-a)$，并用 $h(t)=(t-a)(b-t)$ 作为控制函数。
- 本题与插值余项、二阶导数估计有关，是数学一证明题的高频考点。


> 来源：《26_李林六套卷（数一）》卷五 第 20 题
