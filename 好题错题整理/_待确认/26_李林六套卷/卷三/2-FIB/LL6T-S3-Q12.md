---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - AM
  - 26_李林六套卷/卷三/FIB
  - 计算题
  - 换元积分
  - 有理函数积分
  - 反常积分计算
  - 对数方程求解
points:
level:
---

# 填空题 第 12 题

![[_Attachments/题目识别/LL6T/LL6T-S3-Q12_题目.png|题目]]

设 $\int_{1}^{+\infty} \frac{\mathrm{d}x}{x(a+x^3)} = \frac{1}{3} \ln 2 (a>0)$，则 $a = \_$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S3-Q12_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

反常积分结果为 $I=\frac1{3a}\ln(1+a)$。由题意 $\frac1{3a}\ln(1+a)=\frac13\ln2$，解得 $a=1$。

【答案】: $$\boxed{1}$$

**解题切入点**

分母是 $x(a+x^3)$，不同幂的 $x$ 与 $x^3$ 难以直接积分。令 $u=x^3$ 可把分母化为 $u(a+u)$，相当于把“不同底数”统一成标准有理式，再用部分分式即可，类似算法竞赛中先统一键值再查表。

**推演**

令 $u=x^3$，则 $x=u^{1/3}$，$dx=\frac13u^{-2/3}du$，且 $x=1\to u=1$，$x=+\infty\to u=+\infty$。

于是
$$
I=\int_1^{+\infty}\frac{dx}{x(a+x^3)}
=\frac13\int_1^{+\infty}\frac{du}{u(a+u)}.
$$

对 $\frac1{u(a+u)}$ 作部分分式：
$$
\frac1{u(a+u)}=\frac1a\left(\frac1u-\frac1{u+a}\right).
$$

所以
$$
I=\frac1{3a}\int_1^{+\infty}\left(\frac1u-\frac1{u+a}\right)du
=\frac1{3a}\left[\ln\frac{u}{u+a}\right]_1^{+\infty}
=\frac1{3a}\ln(1+a).
$$

因为 $\lim_{u\to+\infty}\ln\frac{u}{u+a}=0$。

由题意
$$
\frac1{3a}\ln(1+a)=\frac13\ln2
\Rightarrow \ln(1+a)=a\ln2
\Rightarrow 1+a=2^a.
$$

令 $f(a)=2^a-a-1$。$f'(a)=2^a\ln2-1$，可知 $f$ 在 $(0,+\infty)$ 上先减后增，且 $f(0)=0,f(1)=0$，所以 $a>0$ 的唯一正解为 $a=1$。代回检验：
$$
\int_1^{+\infty}\frac{dx}{x(1+x^3)}=\frac13\ln2,
$$
成立。

**易错点**

- 换元时易漏 $\frac13$ 因子：$dx=\frac13u^{-2/3}du$。
- 部分分式系数 $\frac1a$ 不能丢，否则积分结果差 $a$ 倍。
- 积分下限是 $u=1$，不是 $0$；上限取极限时 $\ln\frac{u}{u+a}\to0$。
- 解 $1+a=2^a$ 时不能误以为 $a=1$ 是唯一根而不验证；要说明 $a>0$ 下唯一。

**命题规律**

此类题常把反常积分与参数 $a$ 结合：先用换元/部分分式算出含参积分，再解方程。复习时重点掌握“换元后有理函数积分”的套路，并会判断反常积分收敛性；遇到含参问题要有“先积后解”的意识。


> 来源：《26_李林六套卷（数一）》卷三 第 12 题
