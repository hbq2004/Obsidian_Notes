---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - AM
  - 26_张宇四套卷/卷三/FIB
  - 计算题
  - 第二型曲面积分
  - 上侧法向量
  - 球面面积微元
  - 对称性化简
  - 曲面方程化简
points:
level:
---

# 填空题 第 14 题

![[_Attachments/题目识别/ZY4T/ZY4T-S3-Q14_题目.png|题目]]

设 $\Sigma: x^2 + y^2 + z^2 = 4 (z \ge 0)$，取上侧，则曲面积分 $I = \iint_{\Sigma} \frac{x dy dz + y dz dx + z dx dy}{\sqrt{x^2 + (y-1)^2 + z^2}} = \_\_\_\_\_\_$.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S3-Q14_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$$I=8\pi.$$

填空题【答案】:

$$\boxed{8\pi}$$

**解题切入点**

看到“球面+上侧+第二类曲面积分”，先做“曲面方程化简”，把向量场投影到法向量上，再转化为标量面积分。这类似算法题中先利用约束条件化简状态，再借对称性降低计算维数，而不是直接展开二重积分。

**推演**

设
$$ \mathbf F=\frac{(x,y,z)}{D},\qquad D=\sqrt{x^2+(y-1)^2+z^2}. $$
上半球面半径 $2$，上侧单位法向量
$$ \mathbf n=\frac{(x,y,z)}{2}. $$
故
$$ \mathbf F\cdot\mathbf n
=\frac{x^2+y^2+z^2}{2D}
=\frac{2}{D}. $$
于是
$$ I=2\iint_\Sigma \frac{dS}{D}. $$

令 $J=\iint_\Sigma dS/D$。因为 $D$ 和 $dS$ 在变换 $(x,y,z)\mapsto(x,y,-z)$ 下都不变，所以上半球与下半球贡献相同：
$$ J=\frac12\oint_{x^2+y^2+z^2=4}\frac{dS}{D}. $$
下面计算完整球面。取旋转坐标，使定点 $(0,1,0)$ 位于极轴上；该点到球心距离 $a=1$，球半径 $R=2$。设球面上点与定点连线方向和极轴夹角为 $\theta$，则
$$ D^2=R^2+a^2-2Ra\cos\theta=5-4\cos\theta, $$
且
$$ dS=R^2\sin\theta\,d\theta\,d\varphi=4\sin\theta\,d\theta\,d\varphi. $$
因此
$$ \oint_S \frac{dS}{D}
=\int_0^{2\pi}\int_0^\pi
\frac{4\sin\theta}{\sqrt{5-4\cos\theta}}\,d\theta\,d\varphi
=8\pi\int_0^\pi\frac{\sin\theta}{\sqrt{5-4\cos\theta}}\,d\theta. $$
令 $u=5-4\cos\theta$，则 $du=4\sin\theta\,d\theta$，当 $\theta=0$ 时 $u=1$，当 $\theta=\pi$ 时 $u=9$。于是
$$ \int_0^\pi\frac{\sin\theta}{\sqrt{5-4\cos\theta}}\,d\theta
=\frac14\int_1^9 u^{-1/2}\,du
=\frac14\cdot2(3-1)=1. $$
所以
$$ \oint_S\frac{dS}{D}=8\pi,\qquad J=4\pi. $$
代回得
$$ I=2J=8\pi. $$

**易错点**

- “取上侧”对应法向量 $\mathbf n=(x,y,z)/2$；若取反方向，答案符号相反。
- 分母在曲面上要先用 $x^2+y^2+z^2=4$ 化简：$D^2=5-2y$，注意是 $-2y$。
- 上半球贡献为完整球面的一半，是因为题中定点 $(0,1,0)$ 的 $z$ 坐标为 $0$；若定点有 $z$ 坐标，则不能这样直接取半。
- 完整球面公式 $\oint dS/D=4\pi R$ 只适用于定点在球内；这里 $|(0,1,0)|=1<2$。

**命题规律**

考研中第二类曲面积分常通过“单位法向量+曲面方程化简”转化为第一类曲面积分，再配合对称性、高斯公式或球坐标处理。遇到含复杂分母的积分，不要急于展开；先化简曲面方程、判断对称性，往往能直接出结果。复习时重点练两类曲面积分互转、球面/柱面面积微元和常用曲面定向。


> 来源：《26_张宇四套卷（数一）》卷三 第 14 题
