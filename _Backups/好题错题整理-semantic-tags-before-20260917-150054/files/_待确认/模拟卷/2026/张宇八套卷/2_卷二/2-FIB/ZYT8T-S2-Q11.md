---
ctime: 2026-08-24 17:34:54
mtime: 2026-08-24 17:34:54
tags:
  - AM
  - 26_张宇八套卷/卷二/FIB
  - 计算题
  - 多元复合函数求导
  - 链式法则
  - 二阶混合偏导
  - 偏导数计算
points:
level:
---

# FIB 第 11 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S2-Q11_题目.png|题目]]

设 $f(x,y)$ 具有二阶连续偏导数，$z = xf\left(2x, \frac{y^2}{x}\right)$，则 $\frac{\partial^2 z}{\partial x \partial y} = \_\_\_\_\_\_$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S2-Q11_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结论：

$$
\boxed{\frac{\partial^2 z}{\partial x\partial y}=4y f''_{12}\left(2x,\frac{y^2}{x}\right)-\frac{2y^3}{x^2}f''_{22}\left(2x,\frac{y^2}{x}\right)}
$$

填空题【答案】：

$$
4y f''_{12}\left(2x,\frac{y^2}{x}\right)-\frac{2y^3}{x^2}f''_{22}\left(2x,\frac{y^2}{x}\right)
$$

**解题切入点**

考查多元复合函数求导与链式法则。把内层变量看作两个“节点”$u=2x,\ v=\frac{y^2}{x}$，每次求导都沿内层路径累乘；混合偏导连续时，求导顺序可互换，因此可用两个方向互相验证，类似竞赛里写树上遍历时先编号再递归。

**推演**

设 $u=2x,\ v=\frac{y^2}{x}$，则 $z=xf(u,v)$。记 $f'_i$ 表示 $f$ 对第 $i$ 个中间变量的偏导数，$f''_{ij}$ 为相应二阶偏导数。

先对 $x$ 求导：

$$
z_x=f+x\left(f'_1\cdot 2+f'_2\cdot\left(-\frac{y^2}{x^2}\right)\right)=f+2x f'_1-\frac{y^2}{x}f'_2.
$$

再对 $y$ 求导，注意 $u_y=0,\ v_y=\frac{2y}{x}$：

$$
\frac{\partial^2z}{\partial x\partial y}
=\frac{\partial}{\partial y}\left(f+2x f'_1-\frac{y^2}{x}f'_2\right)
=f'_2\frac{2y}{x}+2x f''_{12}\frac{2y}{x}-\frac{2y}{x}f'_2-\frac{y^2}{x}f''_{22}\frac{2y}{x}.
$$

于是

$$
\frac{\partial^2z}{\partial x\partial y}
=4y f''_{12}\left(2x,\frac{y^2}{x}\right)-\frac{2y^3}{x^2}f''_{22}\left(2x,\frac{y^2}{x}\right).
$$

回代自检：先对 $y$ 求导得 $z_y=2y f'_2$，再对 $x$ 求导得

$$
(z_y)_x=2y\left(f''_{21}\cdot2+f''_{22}\left(-\frac{y^2}{x^2}\right)\right)
=4y f''_{21}-\frac{2y^3}{x^2}f''_{22}.
$$

因 $f$ 二阶连续，$f''_{21}=f''_{12}$，结果一致。

关键给分点：正确写出 $z_x$，二次求导时保留 $f''_{12}, f''_{22}$ 的链式项，并把 $u=2x,\ v=\frac{y^2}{x}$ 代回。

**易错点**

1. 求 $z_x$ 时 $x$ 既是外层系数又是内层 $u=2x$ 的自变量，不要漏掉 $x$ 对 $u_x=2$ 的乘法因子。
2. $v=\frac{y^2}{x}$ 对 $x$ 求导是 $-\frac{y^2}{x^2}$，对 $y$ 求导是 $\frac{2y}{x}$，符号不要写反。
3. 第二项“$\frac{y^2}{x}f'_2$”对 $y$ 求导时，既是乘积求导，又是复合函数求导，$f'_2$ 对 $y$ 的导数必须是 $f''_{22}\cdot\frac{2y}{x}$。
4. 混合偏导 $f''_{12}$ 与 $f''_{21}$ 因连续性可以互换，但在未说明二阶连续时不能随意交换。

**命题规律**

这是数一高频基础计算题，主要考查复合函数链式法则和一阶、二阶偏导的综合运用。复习时把内层变量写成 $u,v$ 并列清每个变量的偏导关系，养成先列式再求导的习惯；最后可用另一求导顺序验证，减少计算失误。


> 来源：《26_张宇八套卷（数一）》卷二 第 11 题
