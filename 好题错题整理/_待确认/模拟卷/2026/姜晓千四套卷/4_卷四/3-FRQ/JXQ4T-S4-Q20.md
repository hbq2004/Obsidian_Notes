---
ctime: 2026-08-23 23:04:13
mtime: 2026-08-23 23:04:13
tags:
  - AM
  - 26_姜晓千四套卷/卷四/FRQ
  - 计算题
  - 高斯公式
  - 方向导数
  - 球坐标变换
  - 三重积分计算
  - 泊松方程
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S4-Q20_题目.png|题目]]

设 $u(x,y,z)$ 在曲面 $\Sigma: x^2+y^2+z^2=2z$ 所围区域 $\Omega$ 上有二阶连续偏导数，满足
$$ \frac{\partial^2 u}{\partial x^2}+\frac{\partial^2 u}{\partial y^2}+\frac{\partial^2 u}{\partial z^2}=x^2+y^2+z^2. $$
若 $\mathbf{n}$ 为 $\Sigma$ 的外法向量,计算积分
$$ \iint_{\Sigma} \frac{\partial u}{\partial \mathbf{n}} dS. $$

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S4-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

解答题【答案】：由高斯公式，
$$
\iint_{\Sigma}\frac{\partial u}{\partial \mathbf n}\,dS
=\iiint_{\Omega}\Delta u\,dV
=\iiint_{\Omega}(x^2+y^2+z^2)\,dV
=\frac{32\pi}{15}.
$$

关键给分点：①正确写出 $\frac{\partial u}{\partial \mathbf n}=\nabla u\cdot\mathbf n$，并用高斯公式化为体积分；②代入 $\Delta u=x^2+y^2+z^2$；③将 $\Omega$ 化为球坐标并准确计算三重积分。

**解题切入点**

本题是“边界通量”问题。令 $\mathbf F=\nabla u$，则 $\frac{\partial u}{\partial \mathbf n}=\mathbf F\cdot\mathbf n$；高斯公式把边界积分转化为内部 $\nabla\cdot\mathbf F=\Delta u$ 的体积分。如同算法竞赛中“区间边界贡献用整体求和一次算出”，不需逐点求 $u$。

**推演**

1. 令 $\mathbf F=\nabla u=(u_x,u_y,u_z)$，由 $\mathbf n$ 为外法向量，
$$
I=\iint_{\Sigma}\frac{\partial u}{\partial \mathbf n}\,dS
=\iint_{\Sigma}\mathbf F\cdot\mathbf n\,dS.
$$

2. 用高斯公式，
$$
I=\iiint_{\Omega}\nabla\cdot\mathbf F\,dV
=\iiint_{\Omega}\Delta u\,dV.
$$
由题设 $\Delta u=x^2+y^2+z^2$，所以
$$
I=\iiint_{\Omega}(x^2+y^2+z^2)\,dV.
$$

3. $\Sigma$ 即球面 $x^2+y^2+(z-1)^2=1$，故
$$
\Omega:\ x^2+y^2+(z-1)^2\le 1.
$$
作平移 $X=x,\ Y=y,\ Z=z-1$，再用球坐标：
$$
x=X=\rho\sin\phi\cos\theta,\quad
y=Y=\rho\sin\phi\sin\theta,\quad
z-1=Z=\rho\cos\phi,
$$
其中 $0\le\rho\le1$，$0\le\phi\le\pi$，$0\le\theta\le2\pi$，$dV=\rho^2\sin\phi\,d\rho d\phi d\theta$。

4. 被积函数化为
$$
x^2+y^2+z^2=\rho^2+2\rho\cos\phi+1.
$$
因此
$$
I=\int_0^{2\pi}\!\!\int_0^\pi\!\!\int_0^1
(\rho^2+1+2\rho\cos\phi)\rho^2\sin\phi\,d\rho d\phi d\theta.
$$
先对 $\phi$ 积分：
$$
\int_0^\pi\sin\phi\,d\phi=2,\quad
\int_0^\pi\cos\phi\sin\phi\,d\phi=0.
$$
所以
$$
I=2\pi\int_0^1 2\rho^2(\rho^2+1)\,d\rho
=4\pi\left(\frac15+\frac13\right)
=\frac{32\pi}{15}.
$$

5. 自检：记 $B$ 为以 $(0,0,1)$ 为球心、半径 1 的球，则 $V(B)=\frac{4\pi}{3}$，$\int_B \rho^2\,dV=\frac{4\pi}{5}$；球心在 $(0,0,1)$ 时 $x^2+y^2+z^2=\rho^2+2\rho\cos\phi+1$ 的交叉项积分为0，故 $I=\frac{4\pi}{5}+\frac{4\pi}{3}=\frac{32\pi}{15}$，结果一致。

**易错点**

- 法向量方向：题中 $\mathbf n$ 是外法向，高斯公式取正号；若取内法向会差负号。
- 不要忘记 $\frac{\partial u}{\partial \mathbf n}=\nabla u\cdot\mathbf n$，不能把 $u$ 本身或 $\Delta u$ 直接当面积分。
- 球坐标中 $dV=\rho^2\sin\phi\,d\rho d\phi d\theta$，漏掉 $\rho^2\sin\phi$ 是常见错误。
- 球心不在原点；平移后要把 $x^2+y^2+z^2$ 完整化为 $\rho^2+2\rho\cos\phi+1$，交叉项虽为0，但需说明或保留到积分中处理。

**命题规律**

闭曲面上的方向导数积分，命题上几乎必用高斯公式转化为散度的三重积分；此题再叠加 Poisson 方程右端项。复习时应熟练“由 $\Sigma$ 方程识别球面并选取球坐标”，以及掌握球心不在原点时的变量代换。类似题型还常见于柱面/球面分片，需先画区域再定限。


> 来源：《26_姜晓千四套卷（数一）》卷四 第 20 题
