---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
tags:
  - AM
  - 26_ep最后一卷/套五/FRQ
  - 计算题
  - 变限积分求导
  - 多元偏导数
  - 变量替换
  - 一阶微分方程
  - 分部积分
points:
level:
---

# FRQ 第 17 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q17_题目.png|题目]]

设 $f(u)$ 连续，$g(x, y) = \int_{y}^{x} f\left(\frac{t}{x}\right) dt$， $x^{2} \left( \frac{\partial^{2} g}{\partial x^{2}} + \frac{\partial^{2} g}{\partial y^{2}} \right) + y = 0$，且 $f(0) = 0$。

(1) 求 $\frac{\partial^{2} g}{\partial x^{2}}$、$\frac{\partial^{2} g}{\partial y^{2}}$；

(2) 求 $g(x, y)$.


---

## DeepSeek V4 Flash Max

【考点】本题考查带参变限积分的偏导数计算，以及由偏微分方程反解函数。算法竞赛类比：相当于给定一个积分函数，求其梯度/二阶导，再由约束方程反推出被积函数。

【解】令 $u=\frac{t}{x}$，则 $t=xu$，$dt=x\,du$。当 $t:y\to x$ 时，$u:\frac{y}{x}\to 1$，故
$$
g(x,y)=x\int_{y/x}^{1} f(u)\,du.
$$

(1) 求一阶偏导：
$$
g_x=\int_{y/x}^{1} f(u)\,du+x\cdot \frac{\partial}{\partial x}\int_{y/x}^{1} f(u)\,du.
$$
由莱布尼茨公式，
$$
\frac{\partial}{\partial x}\int_{y/x}^{1} f(u)\,du=-f\left(\frac{y}{x}\right)\cdot\left(-\frac{y}{x^2}\right)=\frac{y}{x^2}f\left(\frac{y}{x}\right),
$$
所以
$$
g_x=\int_{y/x}^{1} f(u)\,du+\frac{y}{x}f\left(\frac{y}{x}\right).
$$
对 $y$ 求偏导：
$$
g_y=x\cdot \frac{\partial}{\partial y}\int_{y/x}^{1} f(u)\,du=x\left[-f\left(\frac{y}{x}\right)\cdot\frac{1}{x}\right]=-f\left(\frac{y}{x}\right).
$$

再求二阶偏导。对 $g_x$ 关于 $x$ 求导：
$$
g_{xx}=\frac{\partial}{\partial x}\left[\int_{y/x}^{1} f(u)\,du+\frac{y}{x}f\left(\frac{y}{x}\right)\right].
$$
第一项的导数为 $\frac{y}{x^2}f(y/x)$；第二项令 $v=y/x$，则 $v_x=-y/x^2$，
$$
\frac{\partial}{\partial x}\left(\frac{y}{x}f\left(\frac{y}{x}\right)\right)=v_x f(v)+v f'(v)v_x=-\frac{y}{x^2}f\left(\frac{y}{x}\right)-\frac{y^2}{x^3}f'\left(\frac{y}{x}\right).
$$
两项相加，第一项与第二项中的 $-\frac{y}{x^2}f(y/x)$ 抵消，故
$$
g_{xx}=-\frac{y^2}{x^3}f'\left(\frac{y}{x}\right).
$$
对 $g_y=-f(y/x)$ 关于 $y$ 求导：
$$
g_{yy}=-f'\left(\frac{y}{x}\right)\cdot\frac{1}{x}=-\frac{1}{x}f'\left(\frac{y}{x}\right).
$$

(2) 将 $g_{xx},g_{yy}$ 代入题设方程 $x^2(g_{xx}+g_{yy})+y=0$：
$$
x^2\left[-\frac{y^2}{x^3}f'\left(\frac{y}{x}\right)-\frac{1}{x}f'\left(\frac{y}{x}\right)\right]+y=0,
$$
即
$$
-\frac{x^2+y^2}{x}f'\left(\frac{y}{x}\right)+y=0,
$$
$$
f'\left(\frac{y}{x}\right)=\frac{xy}{x^2+y^2}.
$$
令 $u=y/x$，则 $y=ux$，代入得
$$
f'(u)=\frac{x\cdot ux}{x^2+(ux)^2}=\frac{u}{1+u^2}.
$$
积分得
$$
f(u)=\frac12\ln(1+u^2)+C.
$$
由 $f(0)=0$，$\ln1=0$，得 $C=0$，故
$$
f(u)=\frac12\ln(1+u^2).
$$

代回 $g(x,y)=x\int_{y/x}^{1} f(u)\,du$，计算积分：
$$
\int \frac12\ln(1+u^2)\,du=\frac12\left[u\ln(1+u^2)-2u+2\arctan u\right]=\frac{u}{2}\ln(1+u^2)-u+\arctan u.
$$
因此
$$
g(x,y)=x\left[\frac{u}{2}\ln(1+u^2)-u+\arctan u\right]_{u=y/x}^{1}.
$$
代入上下限：
$$
g(x,y)=x\left[\frac{\ln2}{2}-1+\frac{\pi}{4}-\left(\frac{y}{2x}\ln\left(1+\frac{y^2}{x^2}\right)-\frac{y}{x}+\arctan\frac{y}{x}\right)\right]
$$
化简得
$$
g(x,y)=x\left(\frac{\ln2}{2}-1+\frac{\pi}{4}\right)+y-\frac{y}{2}\ln\left(1+\frac{y^2}{x^2}\right)-x\arctan\frac{y}{x}.
$$

【答案】
(1) $\displaystyle \frac{\partial^2 g}{\partial x^2}=-\frac{y^2}{x^3}f'\left(\frac{y}{x}\right)$，$\displaystyle \frac{\partial^2 g}{\partial y^2}=-\frac{1}{x}f'\left(\frac{y}{x}\right)$。

(2) $\displaystyle g(x,y)=x\left(\frac{\ln2}{2}-1+\frac{\pi}{4}\right)+y-\frac{y}{2}\ln\left(1+\frac{y^2}{x^2}\right)-x\arctan\frac{y}{x}$。

关键给分点：① 正确换元得 $g=x\int_{y/x}^{1} f$（1分）；② 求出 $g_x,g_y$（各1分）；③ 求出 $g_{xx},g_{yy}$（各2分）；④ 代入方程解得 $f'(u)$（2分）；⑤ 积分并定常数得 $f(u)$（2分）；⑥ 最终 $g$ 表达式（2分）。

【易错点】
1. 对 $x$ 求偏导时，被积函数中的 $x$ 与积分上限的 $x$ 同时变化，需利用换元将 $x$ 提出积分号外，避免遗漏项。
2. 二阶导计算中，一阶导里 $\(\frac{y}{x}f(y/x)\)$ 的导数与变限积分导数抵消，结果仅含 $f'$，要仔细合并同类项。
3. 由 $f'(u)=\frac{u}{1+u^2}$ 积分时，常数 $C$ 必须由 $f(0)=0$ 确定，否则会多出常数。
4. 最终 $g$ 的表达式中，$x$ 在分母出现，默认 $x\neq 0$。

【命题规律】
此类题目常以“含参变限积分”为背景，先求偏导，再结合给定的偏微分方程反解被积函数。复习时需熟练掌握莱布尼茨公式、换元法，以及简单一阶微分方程求解。本质是“积分-求导-微分方程”链路的综合题，注意常数确定。
