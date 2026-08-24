---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - AM
  - 26_李林六套卷/卷一/FRQ
  - 证明题
  - 函数方程
  - 取对数
  - 凸函数
  - Jensen不等式
  - 积分估值
points:
level:
---

# 解答题 第 20 题

![[_Attachments/题目识别/LL6T/LL6T-S1-Q20_题目.png|题目]]

(20)（本题满分 12 分）

设 $f(x)$ 在 $(-\infty,+\infty)$ 内有二阶连续的导数，且对 $\forall x,y \in (-\infty,+\infty)$ 满足
$$
f\left(\sqrt{\frac{x^{2}+y^{2}}{2}}\right)=\sqrt{f(x) f(y)},
$$
$f(x)$ 在 $(0,+\infty)$ 内严格单调递增.证明:

(I) 对 $\forall x,y \in (-\infty,+\infty)$，有 $f\left(\frac{x+y}{2}\right) \leqslant \frac{f(x)+f(y)}{2}$;

(II) 对 $\forall x \in (-\infty,+\infty)$，有 $f''(x) \geqslant 0$;

(III) $\int_{-1}^{1} f(x) \mathrm{d}x \leqslant f(0)+f(1)$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S1-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

本题应证明：

(I) 对任意实数 $x,y$，有 $f\left(\frac{x+y}{2}\right) \leqslant \frac{f(x)+f(y)}{2}$；

(II) 对任意实数 $x$，有 $f''(x) \geqslant 0$；

(III) $\int_{-1}^{1} f(x)\,\mathrm{d}x \leqslant f(0)+f(1)$。

关键给分点：
1. 由题设推出 $f(x)>0$，并证明 $f(0)=1$；
2. 对函数方程两边取对数，令 $u=x^2,\ v=y^2$，得到 $\ln f(\sqrt t)$ 满足 Jensen 中点等式；
3. 由连续性推出 $\ln f(\sqrt t)$ 为线性函数，从而 $f(x)=e^{\alpha x^2}$；
4. 用 $f$ 在 $(0,+\infty)$ 严格单调递增确定 $\alpha>0$；
5. 由 $f''(x)\geqslant 0$（或直接计算）证明 Jensen 不等式，并用凸函数图像在弦下方证明积分不等式。

---

**解题切入点**

题设给出的是
$$
f\left(\sqrt{\frac{x^{2}+y^{2}}{2}}\right)=\sqrt{f(x)f(y)}，
$$
含有平方平均和几何平均。两边取对数后，平方平均的中点结构会转化为算术平均，几何平均转化为两个对数值的平均，因此可化为 Jensen 中点等式。若把题目看成“函数方程→显式结构→凸性→积分估计”，思路就很清晰。

---

**推演**

**第一步：符号与基本性质**

因为题设右侧是 $\sqrt{f(x)f(y)}$，所以 $f(x)f(y)\geqslant 0$ 对任意 $x,y$ 成立。取 $x=y$，得
$$
f(|x|)=f(x)>0，
$$
故 $f$ 恒正且为偶函数。

令 $x=y=0$，得
$$
f(0)=|f(0)|，
$$
所以 $f(0)\geqslant 0$。若 $f(0)=0$，取 $x>0,\ y=0$，则
$$
f\left(\frac{x}{\sqrt2}\right)=\sqrt{f(x)f(0)}=0，
$$
矛盾于 $f>0$。故 $f(0)>0$，再由 $f(0)=|f(0)|$ 得
$$
f(0)=1。
$$

**第二步：化为 Jensen 中点等式**

因为 $f>0$，对原式取对数：
$$
\ln f\left(\sqrt{\frac{x^{2}+y^{2}}{2}}\right)=\frac{\ln f(x)+\ln f(y)}{2}。
$$
令 $u=x^2,\ v=y^2$，则 $u,v\geqslant 0$，并设
$$
g(t)=\ln f(\sqrt t)\qquad(t\geqslant 0)。
$$
于是
$$
g\left(\frac{u+v}{2}\right)=\frac{g(u)+g(v)}{2}。
$$
由于 $g$ 连续，Jensen 中点等式推出 $g$ 是线性函数：
$$
g(t)=\alpha t+\beta。
$$
又 $g(0)=\ln f(0)=0$，所以 $\beta=0$。因此对 $x\geqslant 0$，
$$
\ln f(x)=g(x^2)=\alpha x^2，
$$
即
$$
f(x)=e^{\alpha x^2}\qquad(x\geqslant 0)。
$$
由偶函数得
$$
f(x)=e^{\alpha x^2}\qquad(\forall x\in\mathbb R)。
$$
由 $f$ 在 $(0,+\infty)$ 严格单调递增，知 $\alpha>0$。

**第三步：证明 (I)**

由 $f(x)=e^{\alpha x^2}$，
$$
f''(x)=2\alpha e^{\alpha x^2}+4\alpha^2x^2e^{\alpha x^2}>0，
$$
所以 $f$ 在 $\mathbb R$ 上是凸函数。由 Jensen 不等式，对任意 $x,y$，
$$
f\left(\frac{x+y}{2}\right)\leqslant \frac{f(x)+f(y)}{2}。
$$
故 (I) 成立。

**第四步：证明 (II)**

直接求导：
$$
f'(x)=2\alpha xe^{\alpha x^2}，
$$
$$
f''(x)=2\alpha e^{\alpha x^2}+4\alpha^2x^2e^{\alpha x^2}
=2\alpha(1+2\alpha x^2)e^{\alpha x^2}\geqslant 0。
$$
故 (II) 成立。

**第五步：证明 (III)**

由 $f$ 是凸函数，在区间 $[0,1]$ 上，凸函数图像位于两端点连线下方：
$$
f(x)\leqslant (1-x)f(0)+xf(1)\qquad(0\leqslant x\leqslant 1)。
$$
两边积分：
$$
\int_0^1 f(x)\,\mathrm{d}x
\leqslant \int_0^1[(1-x)f(0)+xf(1)]\,\mathrm{d}x
=\frac{f(0)+f(1)}{2}。
$$
又因为 $f$ 是偶函数，
$$
\int_{-1}^{1} f(x)\,\mathrm{d}x
=2\int_0^1 f(x)\,\mathrm{d}x
\leqslant f(0)+f(1)。
$$
故 (III) 成立。

---

**易错点**

1. 忘记先证明 $f(x)>0$。原式带根号，必须说明 $f$ 恒正后才能取对数；由 $x=y$ 可得 $f(|x|)=f(x)>0$。

2. 由 $x=y=0$ 只能得到 $f(0)=|f(0)|$，不能直接得到 $f(0)=1$，还需用 $f>0$ 排除 $f(0)=0$。

3. 不要把原式直接误认为 $f$ 的 Jensen 中点凸性。题目中是平方平均与几何平均，应先取对数再换元。

4. 凸函数图像在弦下方，方向不要记反；否则 (III) 不等式方向会出错。

5. 本题最终可解出 $f(x)=e^{\alpha x^2}$，但 (III) 不必求 $\int e^{\alpha x^2}\,\mathrm{d}x$，用凸函数弦下估计即可。

---

**命题规律**

本题是“函数方程 + 凸性 + 积分不等式”的综合证明题，常见于考研数学一中档偏上的题目。命题思路是先给出对称性很强的函数方程，通过取特殊值、取对数、换元等手段确定函数结构或凸性，再考查 Jensen 不等式和积分估值。

复习建议：
1. 见到根号、乘积、平方平均结构，优先考虑取对数，把乘除化为加减，把平方平均化为算术平均。
2. 见到函数方程，先做四件事：代特殊值、判断符号、判断奇偶性、换元化简。
3. 熟练掌握凸函数的三条等价刻画：定义、$f'$ 单调、$f''\geqslant 0$。
4. 积分不等式常用凸函数弦下/切线上、Jensen 积分不等式、保序性。本题使用凸函数弦下估值即可。

题面按原题理解，无 OCR 疑误。


> 来源：《26_李林六套卷（数一）》卷一 第 20 题
