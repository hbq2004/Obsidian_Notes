---
ctime: 2026-08-24 13:30:19
mtime: 2026-08-24 13:30:19
tags:
  - AM
  - 26_张宇八套卷/卷一/FIB
  - 计算题
  - 高斯公式
  - 第二类曲面积分
  - 散度
  - 三重积分
  - 对称性
points:
level:
---

# FIB 第 14 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S1-Q14_题目.png|题目]]

14. 已知 $\Omega = \{(x,y,z) | y^2+z^2 \le 1, 0 \le x \le 1\}$，$\Sigma$ 为 $\Omega$ 的边界面且取外侧，则 $$ \iint_{\Sigma} (y^3 + z \sin x) dzdx + z dxdy = \_\_\_\_\_\_. $$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S1-Q14_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由高斯公式，第二类曲面积分可转为三重积分：

$$\iint_{\Sigma}(y^3+z\sin x)\,dzdx+z\,dxdy=\iiint_{\Omega}\left[\frac{\partial}{\partial x}(0)+\frac{\partial}{\partial y}(y^3+z\sin x)+\frac{\partial}{\partial z}(z)\right]dV=\iiint_{\Omega}(3y^2+1)dV.$$

填空题【答案】:

$$\boxed{\frac{7\pi}{4}}$$

**解题切入点**

封闭曲面外侧优先用高斯公式；它类似于算法中把边界贡献转为整体“散度”的聚合，避免逐面投影。先将缺省项系数 $P=0$ 补齐，再用圆域对称性计算。

**推演**

1. 写出第二类曲面积分的标准形式：

$$\iint_{\Sigma}P\,dydz+Q\,dzdx+R\,dxdy.$$

本题中

$$P=0,\quad Q=y^3+z\sin x,\quad R=z.$$

2. 高斯公式：

$$\iint_{\Sigma}(y^3+z\sin x)\,dzdx+z\,dxdy=\iiint_{\Omega}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)dV=\iiint_{\Omega}(3y^2+1)dV.$$

3. $\Omega$ 是底面为单位圆、轴为 $x$ 轴的柱体，长度 $1$。先对 $x$ 积分：

$$I=\int_0^1dx\iint_{y^2+z^2\le1}(3y^2+1)dydz=\iint_D(3y^2+1)dydz,$$

其中 $D: y^2+z^2\le1$。

4. 圆域对称性：

$$\iint_D y^2dydz=\frac12\iint_D(y^2+z^2)dydz=\frac12\int_0^{2\pi}\int_0^1 r^2\cdot r\,drd\theta=\frac12\cdot 2\pi\cdot\frac14=\frac{\pi}{4},$$

且

$$\iint_D 1dydz=\pi.$$

所以

$$I=3\cdot\frac{\pi}{4}+\pi=\frac{7\pi}{4}.$$

**易错点**

- 第二类曲面积分中，$dzdx$ 前的系数对应 $Q$，求散度时对 $y$ 求导；不要把 $y^3+z\sin x$ 误当成 $P$。
- 本题是封闭曲面外侧，可直接用高斯公式；不要画蛇添足再补面。
- 圆域上 $\iint_D y^2dydz$ 不是 $\pi$，也不是 $\pi/2$，需用极坐标计算，结果 $\pi/4$。
- 缺省项 $P=0$ 不能忽略，散度第一项就是 0。

**命题规律**

考研数学一喜欢把第二类曲面积分放在规则区域（圆柱、球、立方体）上，配合高斯公式和对称性。复习时要熟练标准形式 $P\,dydz+Q\,dzdx+R\,dxdy$ 与散度的对应，并掌握圆域极坐标积分；与格林公式、斯托克斯公式对比记忆，能快速识别“封闭曲面求外侧通量”的题型。


> 来源：《26_张宇八套卷（数一）》卷一 第 14 题
