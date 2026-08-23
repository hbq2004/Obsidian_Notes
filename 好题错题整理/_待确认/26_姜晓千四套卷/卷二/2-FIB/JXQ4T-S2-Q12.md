---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - AM
  - 26_姜晓千四套卷/卷二/FIB
  - 计算题
  - 待定系数法
  - 三角函数有理式积分
  - 凑微分法
  - 不定积分基本性质
  - 求导验算
points:
level:
---

# FIB 第 12 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S2-Q12_题目.png|题目]]

$$ \int \frac{\sin x}{3\cos x + 4\sin x} dx = \_\_\_\_\_\_\_\_. $$

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S2-Q12_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

不定积分结果为

$$\int \frac{\sin x}{3\cos x+4\sin x}\,dx = \frac{4}{25}x - \frac{3}{25}\ln|3\cos x+4\sin x| + C.$$

填空题【答案】:

$$\boxed{\frac{4}{25}x - \frac{3}{25}\ln|3\cos x+4\sin x| + C}$$

**解题切入点**

本题是形如 $\frac{a\sin x+b\cos x}{c\sin x+d\cos x}$ 的积分，核心套路是用分母与其导数的线性组合表示分子。类比算法竞赛中“构造状态转移”或“线性表示”思想，将分子拆成 $A(\text{分母})+B(\text{分母}')$，即可化为简单积分。

**推演**

设分母 $D=3\cos x+4\sin x$，则 $D'=-3\sin x+4\cos x$。

令 $$\sin x = A(3\cos x+4\sin x)+B(-3\sin x+4\cos x).$$

比较系数：
$$\begin{cases} 3A+4B=0\\ 4A-3B=1 \end{cases}$$

解得 $A=\frac{4}{25}$，$B=-\frac{3}{25}$。于是

$$\begin{aligned} \int \frac{\sin x}{3\cos x+4\sin x}\,dx &=\int \frac{A D + B D'}{D}\,dx\\ &=A\int dx+B\int \frac{D'}{D}\,dx\\ &=\frac{4}{25}x -\frac{3}{25}\ln|D|+C\\ &=\frac{4}{25}x -\frac{3}{25}\ln|3\cos x+4\sin x|+C. \end{aligned}$$

自检：对结果求导，
$$\left(\frac{4}{25}x -\frac{3}{25}\ln|D|\right)'=\frac{4}{25}-\frac{3}{25}\cdot\frac{D'}{D}=\frac{4D-3D'}{25D}=\frac{\sin x}{D}.$$

与题目一致。

**易错点**

1. 忘记加常数 $C$。
2. 线性表示系数求错：注意 $D'$ 的符号，$D'=-3\sin x+4\cos x$，不是 $3\cos x-4\sin x$。
3. $\ln$ 中忘记加绝对值；若分母恒正可去绝对值，但本题不能保证。
4. 若用万能代换会较繁，容易计算失误；优先用待定系数法。

**命题规律**

考研数学一常考“三角有理式”或“线性组合型”不定积分，核心是拆分分子为分母与分母导数的线性组合，然后分别积分。复习时应熟练 $\int \frac{f'(x)}{f(x)}dx=\ln|f(x)|+C$，并多做类似 $\int \frac{a\sin x+b\cos x}{c\sin x+d\cos x}dx$ 的题目，提高拆分的敏感度。


> 来源：《26_姜晓千四套卷（数一）》卷二 第 12 题
