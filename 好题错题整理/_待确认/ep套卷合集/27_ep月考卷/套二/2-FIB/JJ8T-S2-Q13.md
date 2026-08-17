---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套二/FIB
  - 计算题
  - 部分分式分解
  - 有理函数积分
  - 反常积分
  - 对数求极限
  - 牛顿莱布尼茨公式
points:
level:
---

# FIB 第 13 题

![[_Attachments/题目识别/JJ8T/JJ8T-S2-Q13_题目.png|题目]]

13. $\int_{1}^{+\infty} \frac{1}{x(x+1)(x+2)} \, dx =$ \_


---

## DeepSeek V4 Flash Max

【考点】本题考查有理函数拆分与反常积分的计算；可类比数列求和的“裂项相消”，先拆成简单分式再对无穷远处取极限，关键在于无穷远项严格归零。

【解】
设
$$
\frac{1}{x(x+1)(x+2)}=\frac{A}{x}+\frac{B}{x+1}+\frac{C}{x+2}.
$$
去分母：
$$
1=A(x+1)(x+2)+Bx(x+2)+Cx(x+1).
$$
代入 $x=0,-1,-2$，得
$$
A=\frac12,\quad B=-1,\quad C=\frac12.
$$
故
$$
\frac{1}{x(x+1)(x+2)}=\frac{1}{2x}-\frac{1}{x+1}+\frac{1}{2(x+2)}.
$$
因此
$$
\int_1^{+\infty}\frac{dx}{x(x+1)(x+2)}
=\int_1^{+\infty}\left(\frac{1}{2x}-\frac{1}{x+1}+\frac{1}{2(x+2)}\right)dx.
$$
原函数为
$$
F(x)=\frac12\ln x-\ln(x+1)+\frac12\ln(x+2)
=\ln\frac{\sqrt{x(x+2)}}{x+1}.
$$
于是
$$
\int_1^{+\infty}\frac{dx}{x(x+1)(x+2)}
=\lim_{x\to+\infty}F(x)-F(1).
$$
因为
$$
\lim_{x\to+\infty}\frac{\sqrt{x(x+2)}}{x+1}=1,
$$
故 $\lim_{x\to+\infty}F(x)=\ln 1=0$。又
$$
F(1)=\ln\frac{\sqrt3}{2},
$$
所以
$$
\int_1^{+\infty}\frac{dx}{x(x+1)(x+2)}
=0-\ln\frac{\sqrt3}{2}
=\ln\frac{2}{\sqrt3}.
$$
（也可写作 $\frac12\ln\frac43$。）

回代自检：对 $\ln\frac{\sqrt{x(x+2)}}{x+1}$ 求导，结果恰为
$$
\frac{1}{2x}-\frac{1}{x+1}+\frac{1}{2(x+2)},
$$
与拆分一致。

【答案】
$$
\boxed{\ln\frac{2}{\sqrt3}}
$$
即
$$
\int_1^{+\infty}\frac{1}{x(x+1)(x+2)}dx=\frac12\ln\frac43.
$$

【易错点】
1. 部分分式系数易求错，尤其 $x=-1$ 处对应 $B=-1$，可代入特殊值检验。
2. 反常积分上限代入时不能直接省略，需先取极限；本题对数部分极限为 $0$。
3. 对数合并时注意符号：积分值为 $0-F(1)$，不是 $F(1)-0$。
4. 不要把拆分后的对数写成单一 $\ln$ 而丢失绝对值；在 $x\ge1$ 上无需绝对值，但写法要规范。

【命题规律】
此类题常以“带多个连续因式的有理分式在无穷区间上的积分”出现，核心是裂项后逐项积分。复习时熟练部分分式、极限与对数运算即可。
