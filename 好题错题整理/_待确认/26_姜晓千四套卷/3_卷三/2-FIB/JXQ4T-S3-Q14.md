---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - AM
  - 26_姜晓千四套卷/卷三/FIB
  - 计算题
  - 曲线积分
  - 椭圆参数化
  - 利用曲线方程化简
  - 对称性
  - 绝对值处理
points:
level:
---

# FIB 第 14 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S3-Q14_题目.png|题目]]

设曲线 $L: \frac{x^2}{4} + \frac{y^2}{9} = 1$，取逆时针方向，则 $I = \int_L (9x^2 + 4y^2)(|y| dx + x dy) = \_\_\_\_\_.$

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S3-Q14_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结果为 $216\pi$。

填空题答案：$\boxed{216\pi}$

**解题切入点**

考查曲线积分计算，关键利用曲线方程将复杂因子常数化，然后利用对称性或参数化简化。类似算法竞赛中利用约束条件化简表达式。

**推演**

1. 由椭圆方程 $\frac{x^2}{4}+\frac{y^2}{9}=1$ 两边乘以36得 $9x^2+4y^2=36$，所以原积分化为 $I=36\int_L (|y|dx+xdy)$。

2. 计算 $\int_L |y|dx$。采用参数化：令 $x=2\cos\theta, y=3\sin\theta$，$\theta$ 从0到$2\pi$（逆时针）。则 $|y|=3|\sin\theta|, dx=-2\sin\theta d\theta$，所以 $\int_L |y|dx = \int_0^{2\pi} 3|\sin\theta|(-2\sin\theta)d\theta = -6\int_0^{2\pi}|\sin\theta|\sin\theta d\theta$。由于 $|\sin\theta|\sin\theta$ 在 $[0,\pi]$ 上为 $\sin^2\theta$，在 $[\pi,2\pi]$ 上为 $-\sin^2\theta$，故积分值为 $-6(\int_0^\pi\sin^2\theta d\theta - \int_\pi^{2\pi}\sin^2\theta d\theta)=0$。也可由对称性直接得0。

3. 计算 $\int_L xdy$。同样参数化：$x=2\cos\theta, y=3\sin\theta, dy=3\cos\theta d\theta$，所以 $\int_L xdy = \int_0^{2\pi} 2\cos\theta\cdot3\cos\theta d\theta = 6\int_0^{2\pi}\cos^2\theta d\theta = 6\pi$。

4. 因此 $I=36\times(0+6\pi)=216\pi$。

**易错点**

- 易直接对 $|y|$ 使用格林公式，忽略其在 $y=0$ 处不可微，导致错误。
- 参数化时注意方向，逆时针对应 $\theta$ 从0到$2\pi$。
- 忘记利用曲线方程化简会陷入复杂计算。

**命题规律**

此类题常考曲线积分与曲线方程结合，利用方程简化被积函数，再结合对称性、参数化或格林公式，是考研数学一常见题型，复习时应注重代数变形与几何意义的结合。


> 来源：《26_姜晓千四套卷（数一）》卷三 第 14 题
