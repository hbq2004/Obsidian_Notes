---
ctime: 2026-08-24 13:30:19
mtime: 2026-08-24 13:30:19
tags:
  - AM
  - 26_张宇八套卷/卷一/FRQ
  - 计算题
  - 交换积分次序
  - 分部积分法
  - 定积分计算
  - 二重积分化累次积分
  - 含指数三角函数积分
points:
level:
---

# FRQ 第 17 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S1-Q17_题目.png|题目]]

计算 $\int_{0}^{1} \mathrm{d}x \int_{1}^{x}\left(\mathrm{e}^{-y^{2}} + \mathrm{e}^{y} \sin y\right) \mathrm{d}y$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S1-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
$$\int_{0}^{1} \mathrm{d}x \int_{1}^{x}\left(\mathrm{e}^{-y^{2}} + \mathrm{e}^{y} \sin y\right) \mathrm{d}y = \frac{1/\mathrm{e} - \mathrm{e}\sin 1}{2}.$$
关键给分点：①识别内层积分下限大于上限，化为负号并交换积分次序；②拆分为两个定积分并正确计算；③最终结果化简为 $\frac{1/\mathrm{e} - \mathrm{e}\sin 1}{2}$。

**解题切入点**
本题本质是计算一个积分限反常（内层下限大于上限）的累次积分。类似算法竞赛中处理区间反向后改变遍历顺序，应先通过负号将积分区域标准化，再利用交换积分次序化简。核心技巧是把 $\int_1^x$ 转化为 $-\int_x^1$，从而将二重积分化为简单的一重积分。

**推演**
设 $f(y)=\mathrm{e}^{-y^2}+\mathrm{e}^y\sin y$。原积分为
$$I=\int_0^1 \mathrm{d}x \int_1^x f(y)\,\mathrm{d}y.$$
因为 $x\in[0,1]$ 时 $x\le 1$，所以 $\int_1^x f(y)\,\mathrm{d}y = -\int_x^1 f(y)\,\mathrm{d}y$，故
$$I=-\int_0^1 \mathrm{d}x \int_x^1 f(y)\,\mathrm{d}y.$$
交换积分次序：区域 $\{(x,y):0\le x\le 1,\ x\le y\le 1\}$ 等价于 $\{(x,y):0\le y\le 1,\ 0\le x\le y\}$，于是
$$I=-\int_0^1 \mathrm{d}y \int_0^y f(y)\,\mathrm{d}x
=-\int_0^1 y f(y)\,\mathrm{d}y.$$
因此
$$I=-\int_0^1 y\mathrm{e}^{-y^2}\,\mathrm{d}y - \int_0^1 y\mathrm{e}^y\sin y\,\mathrm{d}y.$$
计算第一项：令 $t=-y^2$，则 $\mathrm{d}t=-2y\,\mathrm{d}y$，但直接有
$$\int_0^1 y\mathrm{e}^{-y^2}\,\mathrm{d}y = \left[-\frac{1}{2}\mathrm{e}^{-y^2}\right]_0^1 = \frac{1-\mathrm{e}^{-1}}{2}.$$
所以 $-\int_0^1 y\mathrm{e}^{-y^2}\,\mathrm{d}y = \frac{\mathrm{e}^{-1}-1}{2}.$

计算第二项 $J=\int_0^1 y\mathrm{e}^y\sin y\,\mathrm{d}y$。先求不定积分。利用 $\int \mathrm{e}^y\sin y\,\mathrm{d}y = \frac{\mathrm{e}^y(\sin y-\cos y)}{2}$，分部积分得
$$\int y\mathrm{e}^y\sin y\,\mathrm{d}y = \frac{y\mathrm{e}^y(\sin y-\cos y)}{2} + \frac{\mathrm{e}^y\cos y}{2}+C.$$
故
$$J=\left[\frac{y\mathrm{e}^y(\sin y-\cos y)+\mathrm{e}^y\cos y}{2}\right]_0^1
=\frac{\mathrm{e}(\sin 1-\cos 1)+\mathrm{e}\cos 1}{2}-\frac{1}{2}
=\frac{\mathrm{e}\sin 1-1}{2}.$$
所以 $-J = \frac{1-\mathrm{e}\sin 1}{2}$。两项相加得
$$I=\frac{\mathrm{e}^{-1}-1}{2}+\frac{1-\mathrm{e}\sin 1}{2}
=\frac{\mathrm{e}^{-1}-\mathrm{e}\sin 1}{2}.$$
自检：代入 $x=0$ 与 $x=1$ 时内层积分为 $0$，交换后结果合理。

**易错点**
1. 忽略内层积分下限大于上限，直接交换导致区域错。应先加负号将 $\int_1^x$ 转为 $-\int_x^1$。
2. 交换次序时积分限易写反，应画图确定 $0\le y\le 1$，$0\le x\le y$。
3. 计算 $\int y\mathrm{e}^y\sin y$ 时，分部积分中 $\int \mathrm{e}^y\cos y\,\mathrm{d}y$ 的公式易记错，注意验证导数。
4. 最终结果中 $\sin 1$ 的“1”是弧度制，不要当作角度。

**命题规律**
本题为二重积分与定积分综合题，考察交换积分次序和分部积分，属于高频考点。命题常将反常限（如本题的 $\int_1^x$）与可积但原函数不初等的函数（如 $\mathrm{e}^{-y^2}$）结合，通过交换次序约去复杂部分。复习时应熟练掌握交换积分次序的图形判定，并对含 $\mathrm{e}^{ax}\sin bx$、$\mathrm{e}^{ax}\cos bx$ 的分部积分做到条件反射。此类题难度中等，但易因细节失分。


> 来源：《26_张宇八套卷（数一）》卷一 第 17 题
