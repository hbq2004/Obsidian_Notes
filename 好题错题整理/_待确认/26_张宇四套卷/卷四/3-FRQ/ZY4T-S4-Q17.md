---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - AM
  - 26_张宇四套卷/卷四/FRQ
  - 计算题
  - 有理函数积分
  - 分式拆项
  - 三角代换
  - 凑微分
points:
level:
---

# 解答题 第 17 题

![[_Attachments/题目识别/ZY4T/ZY4T-S4-Q17_题目.png|题目]]

17.(本题满分 10 分)
计算 $$\int \frac{x^3 + 1}{x^4 + 2x^2 + 1} \mathrm{d}x$$.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S4-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
$$\int \frac{x^3+1}{x^4+2x^2+1}\,dx = \frac12\ln(x^2+1)+\frac12\arctan x+\frac{x+1}{2(x^2+1)}+C.$$

关键给分点：因式分解分母得 $(x^2+1)^2$；拆项为 $\frac{x^3}{(x^2+1)^2}+\frac{1}{(x^2+1)^2}$；前项凑微分求 $\frac12\ln(x^2+1)+\frac{1}{2(x^2+1)}$；后项用 $x=\tan t$ 求 $\frac12\arctan x+\frac{x}{2(x^2+1)}$；合并整理并写 $C$。

**解题切入点**
考查有理函数积分与三角代换。看见分母为 $(x^2+1)^2$，应立刻想到拆成“奇次幂部分凑微分”和“标准 $1/(x^2+1)^2$ 三角代换”两条路，类似算法题中“按奇偶性分治”。

**推演**
分母因式分解：$x^4+2x^2+1=(x^2+1)^2$，故
$$ I = \int \frac{x^3}{(x^2+1)^2}dx + \int \frac{1}{(x^2+1)^2}dx = I_1+I_2. $$

$I_1$：令 $u=x^2+1$，则 $du=2xdx$，$x^3dx=x^2\cdot xdx=\frac12(u-1)du$
$$ I_1=\frac12\int\frac{u-1}{u^2}du=\frac12\int\left(\frac1u-\frac1{u^2}\right)du=\frac12\ln|u|+\frac1{2u}+C_1=\frac12\ln(x^2+1)+\frac1{2(x^2+1)}+C_1. $$

$I_2$：令 $x=\tan t$，$t=\arctan x$，$dx=\sec^2t\,dt$，$(x^2+1)^2=\sec^4t$，
$$ I_2=\int\frac{\sec^2t}{\sec^4t}dt=\int\cos^2t\,dt=\int\frac{1+\cos2t}{2}dt=\frac t2+\frac{\sin2t}{4}+C_2. $$
由 $\sin2t=\frac{2\tan t}{1+\tan^2t}=\frac{2x}{1+x^2}$，得
$$ I_2=\frac12\arctan x+\frac{x}{2(x^2+1)}+C_2. $$

合并：
$$ I=\frac12\ln(x^2+1)+\frac12\arctan x+\frac{x+1}{2(x^2+1)}+C. $$

自检：求导可得
$$ \frac{d}{dx}\left[\frac12\ln(x^2+1)+\frac12\arctan x+\frac{x+1}{2(x^2+1)}\right]=\frac{x^3+1}{(x^2+1)^2}. $$

**易错点**
- $\int\frac{1}{(x^2+1)^2}dx$ 不是 $\arctan x$，需要三角代换，结果含 $\frac{x}{2(x^2+1)}$。
- $x^3$ 部分凑微分时 $x^3dx$ 要写成 $\frac12(x^2+1-1)d(x^2+1)$，不要漏系数。
- 合并项时不要丢掉 $C$；因 $x^2+1>0$，$\ln|u|$ 可直接写 $\ln(x^2+1)$。

**命题规律**
有理函数积分是数一高频基本题。常见套路：分母能因式分解则先分解，再拆成“分子次数低于分母”的若干简单分式；若分母为 $(x^2+a^2)^k$，用 $x=a\tan t$ 或递推公式。平时训练要熟练“凑微分 + 三角代换”组合。


> 来源：《26_张宇四套卷（数一）》卷四 第 17 题
