---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷六/FIB
  - 计算题
  - 第一类曲线积分
  - 弧长微元
  - 对称性求积分
  - 空间圆参数化
points:
level:
---

# FIB 第 13 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S6-Q13_题目.png|题目]]

设曲线 $\Gamma$ 为曲面 $x^2 + y^2 + z^2 = 1$ 与平面 $x + y + z = 1$ 的交线，则 $\oint_{\Gamma} (y^2 + 2x - z) \mathrm{d}s =$ \_ .

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S6-Q13_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

曲线 $\Gamma$ 是球面 $x^2+y^2+z^2=1$ 与平面 $x+y+z=1$ 相交所得圆。由对称性与参数化可得：
$$ \oint_{\Gamma}(y^2+2x-z)\,ds = \frac{4\pi\sqrt{6}}{9}. $$

填空题【答案】:

$$ \boxed{\dfrac{4\pi\sqrt{6}}{9}} $$

**解题切入点**

考查第一类曲线积分在空间圆上的计算。破题关键在于把交线看成已知圆心、半径的圆，仿照竞赛里“圆上均值=圆心值+方差贡献”的套路：线性函数用圆心取平均，二次项需补半径方向贡献。

**推演**

设 $O'$ 为平面 $x+y+z=1$ 的法向量 $\mathbf n=(1,1,1)$ 方向上的垂足：
$$ O' = \frac{1}{3}(1,1,1). $$
平面到原点距离 $d=\frac{1}{\sqrt3}$，故交线圆半径
$$ r=\sqrt{1-d^2}=\sqrt{\frac{2}{3}}=\frac{\sqrt6}{3}. $$

在平面内取单位正交向量
$$ \mathbf e_1=\frac1{\sqrt2}(1,-1,0),\quad \mathbf e_2=\frac1{\sqrt6}(1,1,-2). $$
则圆 $\Gamma$ 可参数化为：
$$ (x,y,z)=O'+r\cos\theta\,\mathbf e_1+r\sin\theta\,\mathbf e_2,\quad 0\le\theta<2\pi. $$
且弧长微元
$$ ds=r\,d\theta. $$

于是
$$ y=\frac13+r\left(-\frac{\cos\theta}{\sqrt2}+\frac{\sin\theta}{\sqrt6}\right). $$
因此
$$ \int_\Gamma y^2\,ds =\int_0^{2\pi}\left[\frac13+r\left(-\frac{\cos\theta}{\sqrt2}+\frac{\sin\theta}{\sqrt6}\right)\right]^2 r\,d\theta. $$
展开后交叉项积分为 $0$，得
$$ \begin{aligned} \int_\Gamma y^2\,ds &=r\cdot \frac{1}{9}\cdot 2\pi +r^3\int_0^{2\pi}\left(-\frac{\cos\theta}{\sqrt2}+\frac{\sin\theta}{\sqrt6}\right)^2d\theta\\ &=\frac{2\pi r}{9} +r^3\cdot \pi\left(\frac12+\frac16\right)\\ &=\frac{2\pi\sqrt6}{27} +\left(\frac{\sqrt6}{3}\right)^3\cdot \pi\cdot\frac23\\ &=\frac{2\pi\sqrt6}{27}+\frac{4\pi\sqrt6}{27} =\frac{2\pi\sqrt6}{9}. \end{aligned} $$

再算线性部分：
$$ \begin{aligned} 2x-z &=\frac13+2r\cdot\frac{\cos\theta}{\sqrt2}+2r\cdot\frac{\sin\theta}{\sqrt6} -\left(\frac13-2r\cdot\frac{\sin\theta}{\sqrt6}\right)\\ &=\frac13+\sqrt2 r\cos\theta+\frac{4r}{\sqrt6}\sin\theta. \end{aligned} $$
积分时 $\cos\theta,\sin\theta$ 项为 $0$，所以
$$ \int_\Gamma (2x-z)\,ds =\int_0^{2\pi}\frac13 r\,d\theta =\frac{1}{3}\cdot2\pi r =\frac{2\pi\sqrt6}{9}. $$

综上
$$ \oint_\Gamma (y^2+2x-z)\,ds =\frac{2\pi\sqrt6}{9}+\frac{2\pi\sqrt6}{9} =\frac{4\pi\sqrt6}{9}. $$

**易错点**

1. 容易把弧长微元 $ds$ 直接当作 $d\theta$ 使用，漏乘半径 $r$。
2. 计算 $\int_\Gamma y^2\,ds$ 时，只写 $(1/3)^2L$ 而漏掉圆上波动产生的 $\frac{4\pi\sqrt6}{27}$ 贡献。
3. 忘记圆心是 $(1/3,1/3,1/3)$，误以为在原点。
4. 选取平面内方向向量时未正交归一，导致参数化复杂或出错。

**命题规律**

此类题常以“球面+平面交线”的面貌出现，核心是空间曲线的第一类曲线积分。复习时要熟练掌握：平面截球所得圆的圆心/半径求法、平面内单位正交基的参数化，以及“线性项取圆心、二次项加方差”的对称性化简技巧。考场上用参数化计算最稳妥。


> 来源：《26_张宇八套卷（数一）》卷六 第 13 题
