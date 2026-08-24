---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - AM
  - 26_张宇八套卷/卷七/FRQ
  - 计算题
  - 切线斜率与倾角关系
  - 可降阶微分方程
  - 变量分离法
  - 初值条件定常数
  - 反三角函数求导
points:
level:
---

# FRQ 第 17 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S7-Q17_题目.png|题目]]

设函数 $y(x)$ 具有二阶导数，曲线 $l: y=y(x)$ 与直线 $y=x$ 相切于原点，且曲线 $l$ 在点 $(x,y)$ 处切线的倾角 $\theta$ 关于 $x$ 的变化率与曲线 $l$ 在该点的切线斜率相等. 求 $y(x)$ 的表达式.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S7-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结论：
$$
y(x)=\arcsin\frac{e^x}{\sqrt{2}}-\frac{\pi}{4},\qquad x<\frac{1}{2}\ln2.
$$
关键给分点：
1. 由相切得 $y(0)=0$, $y'(0)=1$，从而 $\theta(0)=\pi/4$；
2. 由 $\theta=\arctan y'$ 及 $\frac{d\theta}{dx}=y'$ 得 $\arctan y'-y=C$；
3. 分离变量解 $y'=\tan(y+\pi/4)$；
4. 积分并取连续分支，用 $y(0)=0$ 定出 $-\frac{\pi}{4}$。

**解题切入点**

把几何语言翻译成微分方程：切线斜率 $y'=\tan\theta$，所以 $\theta=\arctan y'$；“变化率等于斜率”即 $\theta'=y'$，两边积分得到 $\theta-y=C$，问题降为一阶可分离变量方程。类似算法中，发现“差值”的导数为零，就是找到了守恒量。

**推演**

（1）相切条件：
曲线 $y=y(x)$ 与直线 $y=x$ 在原点相切，所以
$$
y(0)=0,\qquad y'(0)=1.
$$
于是切线的倾角初值为
$$
\theta(0)=\arctan 1=\frac{\pi}{4}.
$$

（2）建立方程并降阶：
切线斜率为 $y'=\tan\theta$，故 $\theta=\arctan y'$，且
$$
\frac{d\theta}{dx}=\frac{y''}{1+(y')^2}.
$$
题设给出 $\frac{d\theta}{dx}=y'$，所以
$$
\frac{y''}{1+(y')^2}=y'. \tag{1}
$$
又因为
$$
\frac{d}{dx}\bigl(\arctan y'-y\bigr)
=\frac{y''}{1+(y')^2}-y'=0,
$$
故
$$
\arctan y'-y=C.
$$
代入 $x=0$：$y=0,\ y'=1$，得
$$
C=\arctan 1=\frac{\pi}{4}.
$$
所以
$$
\arctan y'=y+\frac{\pi}{4},
$$
即
$$
y'=\tan\left(y+\frac{\pi}{4}\right). \tag{2}
$$

（3）分离变量求解：
由 (2)
$$
\cot\left(y+\frac{\pi}{4}\right)\,dy=dx.
$$
积分：
$$
\ln\sin\left(y+\frac{\pi}{4}\right)=x+C_1.
$$
由 $y(0)=0$：
$$
\ln\sin\frac{\pi}{4}=C_1=-\frac{1}{2}\ln2.
$$
因此
$$
\sin\left(y+\frac{\pi}{4}\right)=\frac{e^x}{\sqrt{2}}.
$$
取包含初值 $y(0)=0$ 的连续分支，得
$$
y+\frac{\pi}{4}=\arcsin\frac{e^x}{\sqrt{2}},
$$
故
$$
y(x)=\arcsin\frac{e^x}{\sqrt{2}}-\frac{\pi}{4}.
$$
由 $e^x/\sqrt{2}\le1$ 得 $x\le\frac{1}{2}\ln2$；端点处 $y'\to\infty$，故二阶可导范围内取 $x<\frac{1}{2}\ln2$。

（4）回代检验：
对所得 $y$ 求导：
$$
y'=\frac{e^x}{\sqrt{2-e^{2x}}},\qquad y'(0)=1.
$$
又
$$
\theta=\arctan y'=y+\frac{\pi}{4}
=\arcsin\frac{e^x}{\sqrt{2}},
$$
所以
$$
\frac{d\theta}{dx}=\frac{e^x}{\sqrt{2-e^{2x}}}=y',
$$
且 $\tan\theta=y'$，满足题设。

**易错点**

- 易漏掉 $y'(0)=1$；“相切于原点”同时给出函数值和切线斜率。
- 不要把 $\theta'=y'$ 直接写成 $\theta=y$；积分后需用初值定常数，常数是 $\pi/4$。
- 解 $\sin(y+\pi/4)=e^x/\sqrt{2}$ 时要取包含初值的连续分支，否则可能错选反三角分支。
- 定义域 $x<\frac{1}{2}\ln2$ 容易遗漏；端点处 $y'\to\infty$，不属于二阶可导范围。
- 最后要回代验证 $\theta'=y'$，避免符号或分支错误。

**命题规律**

- 本题是“几何条件翻译为微分方程”的典型题，常与切线、法线、曲率、面积、旋转体体积结合。
- 核心是找守恒量/首次积分：由 $\theta'=y'$ 得 $\theta-y=C$，把二阶问题降为一阶。
- 复习建议：熟悉 $y'=\tan\theta$、$\theta=\arctan y'$ 以及常见几何量公式；多练“翻译条件+初值定常数”。


> 来源：《26_张宇八套卷（数一）》卷七 第 17 题
