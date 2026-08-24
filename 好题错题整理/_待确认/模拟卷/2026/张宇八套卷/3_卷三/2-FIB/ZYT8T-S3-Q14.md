---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷三/FIB
  - 计算题
  - 第二型曲面积分
  - 有向曲面定向
  - 曲面参数化
  - 高斯公式
  - 极坐标变换
points:
level:
---

# FIB 第 14 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S3-Q14_题目.png|题目]]

设 $\Sigma = \{(x,y,z) \mid x^2 + y^2 + z^2 = 1, x \geq 0, y \geq 0\}$ , 指向右侧, 则 $\iint_{\Sigma} xyzdxdy = \_\_\_\_\_$ .

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S3-Q14_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

填空题【答案】:

$$\boxed{\frac{2}{15}}$$

**解题切入点**

本题考查第二型曲面积分与曲面定向，关键是先把“指向右侧”转成参数化的法向量方向，再计算 $dxdy$ 对应的投影因子；这就像算法竞赛中先判方向、边界，再统一套计算模板。

**推演**

1. 曲面上 $x\ge0$，取参数化
$$
r(y,z)=\left(\sqrt{1-y^2-z^2},\,y,\,z\right),\quad D=\{(y,z): y\ge0,\ y^2+z^2\le1\}.
$$

2. 计算切向量叉积确定定向：
$$
r_y\times r_z=(1,-x_y,-x_z)=\left(1,\frac yx,\frac zx\right),
$$
其 $x$ 分量为 $1>0$，正是“指向右侧”的定向。按第二型面积分的参数化公式，有
$$
dxdy=\frac{\partial(x,y)}{\partial(y,z)}\,dy\,dz=-x_z\,dy\,dz=\frac zx\,dy\,dz.
$$

3. 代入被积表达式：
$$
xyz\,dxdy=xyz\cdot\frac zx\,dy\,dz=yz^2\,dy\,dz.
$$
所以
$$
I=\iint_D yz^2\,dy\,dz.
$$

4. 在 $yz$ 平面用极坐标：$y=r\cos\theta,\ z=r\sin\theta$，其中 $0\le r\le1$，$-\frac\pi2\le\theta\le\frac\pi2$（因为 $y\ge0$）。则
$$
I=\int_0^1 r^4\,dr\int_{-\pi/2}^{\pi/2}\cos\theta\sin^2\theta\,d\theta
=\frac15\cdot\left[\frac{\sin^3\theta}{3}\right]_{-\pi/2}^{\pi/2}
=\frac{2}{15}.
$$

复核（高斯公式）：令 $\mathbf F=(0,0,xyz)$，则 $\nabla\cdot\mathbf F=xy$。取 $V=\{x^2+y^2+z^2\le1,\ x\ge0,\ y\ge0\}$，坐标平面 $x=0$、$y=0$ 上的通量均为 $0$，故 $\iint_\Sigma xyz\,dxdy=\iiint_V xy\,dV$，同样得 $\frac{2}{15}$。

关键给分点：正确写出右侧定向并得到 $dxdy=\frac zx\,dy\,dz$；半圆区域 $D$ 的极坐标范围正确。

**易错点**

- 最容易错的是定向符号：若用 $z=\pm\sqrt{1-x^2-y^2}$ 分片，下片取右侧时 $dxdy$ 会带负号，不能直接与上片相加抵消。
- 本题 $z$ 并不限制非负，$D$ 是 $y\ge0$ 的半圆，不能只取第一卦限 $z\ge0$ 的部分，否则答案会变成 $\frac1{15}$。
- 极坐标的角范围写错会导致符号或倍数错误，需由 $y\ge0$ 严格确定。

**命题规律**

这类题常以球面或锥面为背景，给“上/下/左/右/前/后”等方向词，考查第二型曲面积分与参数区域二重积分的转化。复习时要熟练 $dydz,dzdx,dxdy$ 与法向量分量的对应，并养成先写参数化和定向、再算投影因子的固定流程。


> 来源：《26_张宇八套卷（数一）》卷三 第 14 题
