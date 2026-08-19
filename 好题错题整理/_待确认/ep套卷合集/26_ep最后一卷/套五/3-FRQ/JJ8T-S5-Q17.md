---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-20 01:07:44
tags:
  - AM
  - 26_ep最后一卷/套五/FRQ
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
2. 二阶导计算中，一阶导里 $$\frac{y}{x}f(y/x)$$ 的导数与变限积分导数抵消，结果仅含 $f'$，要仔细合并同类项。
3. 由 $f'(u)=\frac{u}{1+u^2}$ 积分时，常数 $C$ 必须由 $f(0)=0$ 确定，否则会多出常数。
4. 最终 $g$ 的表达式中，$x$ 在分母出现，默认 $x\neq 0$。

【命题规律】
此类题目常以“含参变限积分”为背景，先求偏导，再结合给定的偏微分方程反解被积函数。复习时需熟练掌握莱布尼茨公式、换元法，以及简单一阶微分方程求解。本质是“积分-求导-微分方程”链路的综合题，注意常数确定。

---

## V4 Flash Max 解析

**答案**：

在 $x\ne 0$ 上讨论。令  
$$
F(u)=\int_0^u f(s)\,ds,\qquad a=\frac yx,
$$
则换元 $v=t/x$ 得
$$
g=x\int_{y/x}^{1}f(v)\,dv=x[F(1)-F(a)].
$$

先求一阶偏导：
$$
g_x=F(1)-F(a)+a f(a),\qquad g_y=-f(a).
$$

再求二阶偏导：
$$
\boxed{
g_{xx}=-\frac{y^2}{x^3}f'\left(\frac yx\right),\qquad
g_{yy}=-\frac1x f'\left(\frac yx\right).
}
$$

代入
$$
x^2(g_{xx}+g_{yy})+y=0
$$
得
$$
-\left(x+\frac{y^2}{x}\right)f'\left(\frac yx\right)+y=0,
$$
所以
$$
f'\left(\frac yx\right)=\frac{xy}{x^2+y^2}.
$$
令 $u=\dfrac yx$，则
$$
f'(u)=\frac{u}{1+u^2}.
$$
由 $f(0)=0$，得
$$
f(u)=\frac12\ln(1+u^2).
$$

因此最终
$$
\boxed{
g_{xx}=-\frac{y^3}{x^2(x^2+y^2)},\qquad
g_{yy}=-\frac{y}{x^2+y^2}.
}
$$

又
$$
F(u)=\int_0^u \frac12\ln(1+s^2)\,ds
=\frac u2\ln(1+u^2)-u+\arctan u,
$$
且
$$
F(1)=\frac{\ln2}{2}-1+\frac\pi4.
$$
所以
$$
\boxed{
g(x,y)
=x\left(\frac{\pi}{4}-1+\frac{\ln2}{2}\right)
+y-\frac y2\ln\left(1+\frac{y^2}{x^2}\right)
-x\arctan\frac yx.
}
$$

**解题切入点**：

看到 $\displaystyle g(x,y)=\int_y^x f\left(\frac tx\right)dt$，上下限和积分变量都含 $x$，直接求导容易乱。先换元 $u=\frac tx$，把它变成
$$
g=x\int_{y/x}^{1}f(u)\,du=x[F(1)-F(y/x)].
$$
这样二元偏导就化成一元链式法则。类似算法里“把二维状态压缩成一维比例变量”，构造 $F$ 则相当于预处理前缀和。之后代入 PDE，就变成一个关于 $f'$ 的一阶 ODE。

**推演**：

1. 令 $F(u)=\displaystyle\int_0^u f(s)\,ds$，令 $a=\dfrac yx$，则
$$
g=x[F(1)-F(a)].
$$

2. 求导：
$$
g_y=-xF'(a)\cdot \frac1x=-f(a),
$$
所以
$$
g_{yy}=-\frac1x f'(a).
$$

又因为 $a_x=-\dfrac y{x^2}$，
$$
g_x=F(1)-F(a)-xF'(a)a_x
=F(1)-F(a)+a f(a).
$$
再对 $x$ 求导：
$$
g_{xx}
=\frac{d}{dx}\bigl[F(1)-F(a)+a f(a)\bigr]
=a f'(a)a_x
=-\frac{y^2}{x^3}f'(a).
$$

3. 代入题设方程：
$$
x^2(g_{xx}+g_{yy})+y
=x^2\left[-\frac{y^2}{x^3}f'(a)-\frac1x f'(a)\right]+y
=-\left(x+\frac{y^2}{x}\right)f'(a)+y=0.
$$
于是
$$
f'(a)=\frac{y}{x+\frac{y^2}{x}}=\frac{xy}{x^2+y^2}.
$$
因 $a=\dfrac yx$，所以
$$
f'(a)=\frac{a}{1+a^2}.
$$

4. 积分：
$$
f(u)=\int_0^u \frac{s}{1+s^2}\,ds=\frac12\ln(1+u^2).
$$

5. 求 $g$：
$$
F(u)=\int_0^u \frac12\ln(1+s^2)\,ds
=\frac u2\ln(1+u^2)-u+\arctan u.
$$
于是
$$
g=x[F(1)-F(a)]
$$
代入 $a=\dfrac yx$，得到
$$
g(x,y)
=x\left(\frac{\pi}{4}-1+\frac{\ln2}{2}\right)
+y-\frac y2\ln\left(1+\frac{y^2}{x^2}\right)
-x\arctan\frac yx.
$$

**易错点**：

- 不要忘记 $x\ne 0$，原式中 $t/x$ 已经限定了 $x\ne0$。
- 求 $g_{xx}$ 时容易漏掉 $g_x$ 中的 $a f(a)$ 项，或者把符号弄反。用 $g=x[F(1)-F(a)]$ 再链式求导最稳。
- 积分求 $f$ 时不要丢掉常数；$f(0)=0$ 的作用就是消去这个常数。若没有这个条件，$g$ 中会多出 $C(x-y)$。
- 自检：最终
$$
g_{xx}+g_{yy}
=-\frac{y^3}{x^2(x^2+y^2)}-\frac{y}{x^2+y^2}
=-\frac{y}{x^2},
$$
所以
$$
x^2(g_{xx}+g_{yy})+y=0.
$$

注：题干 OCR 为“$f(u)$ 连续”，但求二阶偏导并反解出 $f$ 需要可导性；本解按考研数学常规读法，默认题目隐含可导性成立。按 OCR 最合理读法。

**命题规律**：

这类题本质是“变限积分 + 多元复合函数求导 + 由 PDE 反解一阶 ODE”。高频变形包括：

- 被积函数改为 $f(x/t)$ 或 $f(t-y)$；
- 上下限改为 $\varphi(x),\psi(y)$；
- 方程系数改为 $x^2+y^2$ 等，但仍用换元 $u=\dfrac tx$ 降维。

这种 $g=x\Phi(y/x)$ 的结构是 1 次齐次函数，也可用欧拉齐次函数定理 $x g_x+y g_y=g$ 做验证，是本类题的一个重要联系。
