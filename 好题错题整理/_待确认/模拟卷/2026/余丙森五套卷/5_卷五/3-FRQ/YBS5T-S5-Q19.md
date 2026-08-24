---
ctime: 2026-08-24 15:13:04
mtime: 2026-08-24 15:13:04
tags:
  - AM
  - 26_余丙森五套卷/卷五/FRQ
  - 综合题
  - 高斯公式
  - 散度为零
  - 二阶常系数微分方程
  - 曲面积分补面法
  - 对称性化简
points:
level:
---

# FRQ 第 19 题

![[_Attachments/题目识别/YBS5T/YBS5T-S5-Q19_题目.png|题目]]

设对于空间中任意光滑有向曲面 $\Sigma$ 均有
$$
\oiint_{\Sigma}x^{2}f'(x)\mathrm{d}y\mathrm{d}z+x^{2}[f(x)-x^{2}-2]y\mathrm{d}z\mathrm{d}x-2xf'(x)z\mathrm{d}x\mathrm{d}y=0,
$$
其中 $f(x)$ 具有二阶连续的导数，且 $f(0)=0,f'(0)=1.$

(1) 求 $f(x)$ 的表达式；

(2) 设 $\Sigma$ 为曲面 $y=\sqrt{x^{2}+z^{2}},1\leqslant y\leqslant 2,\Sigma$ 正侧法向量与 $y$ 轴成锐角，求曲面积分
$$
\iint_{\Sigma}x^{2}f'(x)\mathrm{d}y\mathrm{d}z+x^{2}[f(x)-x^{2}-2]y\mathrm{d}z\mathrm{d}x-2xf'(x)z\mathrm{d}x\mathrm{d}y
$$
的值.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S5-Q19_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
(1) $f(x)=x^2+\sin x$。
(2) $\displaystyle -\frac{31\pi}{2}$。

给分点：① 由任意闭曲面通量为零，利用高斯公式得 $\nabla\cdot F=0$；② 正确计算散度并解微分方程 $f''+f=x^2+2$；③ 补上、下底圆盘，并处理好题给正侧与立体外法向的关系；④ 得上下底外法向通量分别为 $-16\pi,\frac{\pi}{2}$，故所求为 $-\frac{31\pi}{2}$。

**解题切入点**
题设对任意封闭曲面通量为零，相当于向量场的散度恒为零；如同算法竞赛中“任意区间的某种量为 0”常可推出逐点守恒量。先解出 $f$，第二问用“补面法”：把锥面补成闭合曲面，利用总通量为零把锥面通量化为两个圆盘通量。

**推演**
设 $F=(P,Q,R)$，其中 $P=x^2f'(x),\ Q=x^2[f(x)-x^2-2]y,\ R=-2xf'(x)z$。对任意闭曲面 $\Sigma$，由高斯公式：
$$\oiint_\Sigma F\cdot dS=\iiint_V \nabla\cdot F\,dV=0.$$
因区域 $V$ 任意，故 $\nabla\cdot F=0$。计算：
$$\nabla\cdot F=\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}
=2xf'+x^2f''+x^2(f-x^2-2)-2xf'
=x^2(f''+f-x^2-2).$$
所以 $f''+f=x^2+2$。解此二阶常系数非齐次方程：$r^2+1=0$，得
$$f=x^2+C_1\cos x+C_2\sin x.$$
由 $f(0)=0$ 得 $C_1=0$；由 $f'(0)=1$ 得 $C_2=1$。故
$$f(x)=x^2+\sin x.$$

第二问：
此时
$$F=(x^2(\cos x+2x),\,x^2(\sin x-2)y,\,-2xz(\cos x+2x)),\quad \nabla\cdot F=0.$$
取立体 $V=\{1\le y\le2,\ \sqrt{x^2+z^2}\le y\}$。锥面 $S$ 的参数方程为
$$(x,y,z)=(y\cos\theta,y,y\sin\theta),\quad 0\le\theta<2\pi,\ 1\le y\le2.$$
其正侧（与 $y$ 轴成锐角）法向量可取
$$r_\theta\times r_y=(-y\cos\theta,y,-y\sin\theta),$$
它与 $V$ 的外法向相反。记 $S_{\text{out}}$ 为 $V$ 在锥面处的外法向曲面，则所求
$$I_S=\int_{S_+}F\cdot dS=-\int_{S_{\text{out}}}F\cdot dS.$$
由 $\nabla\cdot F=0$，对 $V$ 的外闭曲面：
$$\int_{S_{\text{out}}}+\int_{D_2^+}+\int_{D_1^-}=0,$$
其中 $D_2^+$：$y=2,\ x^2+z^2\le4$，法向 $+y$；$D_1^-$：$y=1,\ x^2+z^2\le1$，法向 $-y$。
因此
$$I_S=\int_{D_2^+}F\cdot dS+\int_{D_1^-}F\cdot dS.$$

计算：
$$\int_{D_2^+}F\cdot dS=\iint_{x^2+z^2\le4}2x^2(\sin x-2)\,dxdz
=-4\iint_{x^2+z^2\le4}x^2\,dxdz=-16\pi.$$
（其中 $2x^2\sin x$ 为关于 $x$ 的奇函数，在对称圆盘上积分为 0。）
$$\int_{D_1^-}F\cdot dS=-\iint_{x^2+z^2\le1}x^2(\sin x-2)\,dxdz
=2\iint_{x^2+z^2\le1}x^2\,dxdz=\frac{\pi}{2}.$$
所以
$$I_S=-16\pi+\frac{\pi}{2}=-\frac{31\pi}{2}.$$

**易错点**
1. 若把 $\oiint$ 误作开曲面，则无法用高斯公式；这里应理解为任意封闭有向曲面。
2. 散度中 $2xf'(x)$ 与 $-2xf'(x)$ 抵消，不可遗漏。
3. 第二问侧向关系：题给正侧法向量与 $y$ 轴成锐角，即 $n_y>0$，它与所补立体 $V$ 的外法向相反；故结果是上、下底外法向通量之和，而不是差。
4. 圆盘上 $x^2\sin x$ 是奇函数，积分为 0，但要保留 $-2x^2$ 等偶函数项。

**命题规律**
此类题是“高斯公式+微分方程+曲面积分”的经典综合。命题人先给出一个恒为零的闭曲面通量条件反求被积函数，再让考生用补面法求开放曲面通量。复习时务必熟练：散度为零 => 通量与边界有关；补面时画出区域并判断内外法向；圆盘上二次型积分 $\iint_{x^2+z^2\le R^2}x^2\,dA=\pi R^4/4$ 可记忆。


> 来源：《26_余丙森五套卷（数一）》卷五 第 19 题
