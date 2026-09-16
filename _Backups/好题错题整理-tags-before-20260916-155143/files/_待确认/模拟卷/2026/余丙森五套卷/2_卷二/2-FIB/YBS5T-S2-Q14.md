---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷二/FIB
  - 计算题
  - 变限积分求导
  - 含参变量积分
  - 绝对值分段处理
  - 复合函数链式法则
  - 莱布尼茨公式
points:
level:
---

# FIB 第 14 题

![[_Attachments/题目识别/YBS5T/YBS5T-S2-Q14_题目.png|题目]]

设 $u(x,y)=\int_0^1 f(t)|xy-t|\mathrm{d}t$ ，其中 $f(x)$ 在 $[0,1]$ 上连续 ，$0\leqslant x\leqslant 1$ ，$0\leqslant y\leqslant 1$ ，则
$$ \frac{\partial^2 u}{\partial x^2} = \_\_\_\_\_\_\_\_\_\_\_. $$

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S2-Q14_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】:
$$
\boxed{\frac{\partial^2 u}{\partial x^2}=2y^2 f(xy)}
$$

**解题切入点**

将 $|xy-t|$ 按 $t=xy$ 分段，看作以 $a=xy$ 为参数的含参积分；这类似于算法竞赛中扫描线维护区间累积量，$I(a)$ 的一阶导为左右两侧积分之差，二阶导回到端点函数值 $2f(a)$，最后由链式法则补充 $xy$ 对 $x$ 的导数 $y$。

**推演**

令 $a=xy$，则 $u(x,y)=I(a)$，其中
$$
I(a)=\int_0^1 f(t)|t-a|\,dt=\int_0^a f(t)(a-t)\,dt+\int_a^1 f(t)(t-a)\,dt.
$$

由变限积分求导（Leibniz 公式），
$$
I'(a)=\int_0^a f(t)\,dt-\int_a^1 f(t)\,dt.
$$

再求导得
$$
I''(a)=f(a)+f(a)=2f(a).
$$

由链式法则 $a=xy$，$\partial a/\partial x=y$，
$$
u_x=yI'(xy),\qquad u_{xx}=y\cdot\bigl(yI''(xy)\bigr)=y^2I''(xy).
$$

代入 $I''(xy)=2f(xy)$，得
$$
\frac{\partial^2 u}{\partial x^2}=2y^2 f(xy).
$$

关键给分点：正确分段、写出 $I'(a)$、得到 $I''(a)=2f(a)$、链式求导时保留因子 $y^2$。

自检：取 $f(t)\equiv1$，直接积分 $I(a)=a^2-a+\frac12$，则 $u_{xx}=2y^2$，与公式一致。

**易错点**

- 不要忘记 $a=xy$ 对 $x$ 求导会产生因子 $y$，二阶导系数为 $y^2$，不是 $1$ 或 $y$。
- 不要直接对 $|xy-t|$ 在 $t=xy$ 处求导；应先分段处理，$f$ 只需连续，不必可导。
- 端点 $x=0$ 或 $y=0$ 时按单侧导数/连续性理解，公式仍成立。

**命题规律**

本题是含参变量积分与变限积分求导的结合，常以填空形式考查。关键套路是“先按绝对值内部为零分段，再对参数求导”；复习时应熟练掌握 Leibniz 公式与链式法则，并注意参数从积分限或积分内部出现时的处理方法。


> 来源：《26_余丙森五套卷（数一）》卷二 第 14 题
