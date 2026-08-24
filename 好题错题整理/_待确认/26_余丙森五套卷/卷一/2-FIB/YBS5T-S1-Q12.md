---
ctime: 2026-08-24 15:13:02
mtime: 2026-08-24 15:13:02
tags:
  - AM
  - 26_余丙森五套卷/卷一/FIB
  - 计算题
  - 定积分计算
  - 极限计算
  - 泰勒展开
  - 等价无穷小
  - 对数函数积分
points:
level:
---

# FIB 第 12 题

![[_Attachments/题目识别/YBS5T/YBS5T-S1-Q12_题目.png|题目]]

12. $\lim_{n\to\infty}\int_{0}^{n}\frac{x}{n^{2}+x}\mathrm{d}x = \_\_\_\_$.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S1-Q12_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$$
\lim_{n\to\infty}\int_0^n \frac{x}{n^2+x}\,dx=\frac{1}{2}.
$$

填空题【答案】:

$$\boxed{\frac{1}{2}}$$

**解题切入点**

将 $x=(n^2+x)-n^2$ 拆出常数项，使积分化为 $n$ 减对数项，再用 $\ln(1+\frac{1}{n})$ 的泰勒展开到二阶；类似算法竞赛中先提取复杂度主项，再算常数系数。

**推演**

设
$$
I_n=\int_0^n \frac{x}{n^2+x}\,dx.
$$
对被积函数做恒等变形：
$$
\frac{x}{n^2+x}=1-\frac{n^2}{n^2+x}.
$$
于是
$$
I_n=\int_0^n \left(1-\frac{n^2}{n^2+x}\right)dx=n-n^2\int_0^n \frac{dx}{n^2+x}=n-n^2\ln(n^2+x)\Big|_0^n.
$$
代入上下限：
$$
I_n=n-n^2\ln\frac{n^2+n}{n^2}=n-n^2\ln\left(1+\frac{1}{n}\right).
$$
由 $\ln(1+t)=t-\frac{t^2}{2}+o(t^2)$，取 $t=\frac{1}{n}$：
$$
n^2\ln\left(1+\frac{1}{n}\right)=n^2\left(\frac{1}{n}-\frac{1}{2n^2}+o\left(\frac{1}{n^2}\right)\right)=n-\frac{1}{2}+o(1).
$$
因此
$$
I_n=n-\left(n-\frac{1}{2}+o(1)\right)=\frac{1}{2}+o(1),
$$
故
$$
\lim_{n\to\infty}I_n=\frac{1}{2}.
$$
（关键给分点：恒等拆项、定积分计算、泰勒展开到二阶。自检：被积函数量级约 $x/n^2$，积分上限为 $n$，主项 $\int_0^n x/n^2\,dx=1/2$，与结果一致。）

**易错点**

1. 不能只把 $\ln(1+1/n)\sim1/n$ 代入得到 $I_n\sim0$；极限中的常数项来自展开的 $-\frac{1}{2n^2}$ 项，必须展开到二阶。
2. 积分上限 $n$ 也随 $n$ 变化，不能把 $n^2+x$ 中的 $n^2$ 单独当常数而忽略高阶项。
3. 代入 $\ln(n^2+x)\Big|_0^n$ 时，上下限一个是 $n$ 一个是 $0$，不要误写成 $\ln(n^2+n)-\ln n$ 之类。

**命题规律**

这类题常以“积分上限含 $n$ + 被积函数含 $n$”的形式出现，核心是用恒等变形/换元分离主部，再配合泰勒展开或夹逼取极限。复习时重点训练 $\ln(1+x)$、$e^x$、$(1+x)^\alpha$ 的展开，以及“先拆主部再取极限”的思维。


> 来源：《26_余丙森五套卷（数一）》卷一 第 12 题
