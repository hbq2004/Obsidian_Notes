---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-20 01:32:06
tags:
  - AM
  - 27_ep月考卷/套二/MCQ
  - 概念题
  - 洛必达法则
  - 泰勒展开
  - 拉格朗日中值定理
  - 导数极限与函数极限
  - 反例构造
points:
level:
---

# MCQ 第 4 题

![[_Attachments/题目识别/JJ8T/JJ8T-S2-Q04_题目.png|题目]]

4. $f(x)$ 在 $(0, +\infty)$ 内二阶可导，正确的是()

A. 若 $\lim\limits_{x \to +\infty} f(x) = A$，则必有 $\lim\limits_{x \to +\infty} f'(x) = 0$

B. 若 $\lim\limits_{x \to +\infty} f'(x) = 0$，则 $f(x)$ 在 $(0, +\infty)$ 内必有界

C. 若 $f(x)$ 与 $f'(x)$ 在 $(0, +\infty)$ 有界，则必有 $\lim\limits_{x \to +\infty} f''(x) = 0$

D. 若 $\lim\limits_{x \to +\infty} f(x) = A$，且 $f''(x)$ 在 $(0, +\infty)$ 有界，则必有 $\lim\limits_{x \to +\infty} f'(x) = 0$


---

## DeepSeek V4 Flash Max

【考点】本题考查无穷远处函数极限、导数极限、导数有界性之间的关系，核心切入点是：若 $f$ 在 $+\infty$ 附近有极限且 $f'$ 一致有界，则 $f'$ 不能无限震荡，进而可用拉格朗日中值定理或洛必达法则推出 $f'\to 0$。算法竞赛类比：判一个流是否收敛不能只看流量（$f$ 有极限），还要限制流速（$f'$ 有界），否则流量可以贴着某个值上下高频抖动。

【解】逐个分析各选项。

**A 错误。** 反例：$f(x)=\frac{\sin x^2}{x}$（$x>0$）。则
$$
f(x)=\frac{\sin x^2}{x}\to 0\quad(x\to+\infty),
$$
但
$$
f'(x)=\frac{2x^2\cos x^2-\sin x^2}{x^2}
=2\cos x^2-\frac{\sin x^2}{x^2},
$$
沿 $x_n=\sqrt{2n\pi}$ 有 $f'(x_n)\to 2$，故 $f'(x)$ 不趋于 $0$。这说明 $f(x)$ 有极限不能保证 $f'(x)$ 有极限，更不用说趋于 $0$。

**B 错误。** 反例：$f(x)=\ln x$。则 $f'(x)=\frac1x\to 0$，但 $f(x)=\ln x$ 在 $(0,+\infty)$ 上无界。即使只考虑 $x\to+\infty$ 方向，$\ln x$ 也无界，所以“$f'\to 0$”不能推出 $f$ 有界。

**C 错误。** 反例：$f(x)=\frac{\sin x^2}{x^2}$（$x>0$）。首先
$$
|f(x)|\le \frac{1}{x^2}\le 1,
$$
所以 $f$ 在 $(0,+\infty)$ 有界。又
$$
f'(x)=\frac{2x^2\cos x^2-2\sin x^2}{x^3}
=\frac{2\cos x^2}{x}-\frac{2\sin x^2}{x^3},
$$
故 $|f'(x)|\le \frac2x+\frac{2}{x^3}$，在 $x\ge 1$ 时不超过 $4$，在 $(0,1)$ 上 $f'$ 连续，从而 $f'$ 在 $(0,+\infty)$ 有界。但
$$
f''(x)=\frac{d}{dx}\left(\frac{2\cos x^2}{x}-\frac{2\sin x^2}{x^3}\right)
=-4x\sin x^2-\frac{2\cos x^2}{x^2}-\frac{4\cos x^2}{x^2}+\frac{6\sin x^2}{x^4}
=-4x\sin x^2+O(x^{-2}),
$$
沿 $x_n=\sqrt{\frac{\pi}{2}+2n\pi}$ 有 $\sin x_n^2=1$，故 $f''(x_n)\sim -4x_n\to-\infty$，所以 $f''(x)$ 不趋于 $0$。这说明 $f$ 与 $f'$ 均有界也不能推出 $f''\to 0$。

**D 正确。** 设 $\lim\limits_{x\to+\infty}f(x)=A$，且 $f''(x)$ 在 $(0,+\infty)$ 有界，即存在 $M>0$，使得 $|f''(x)|\le M$。

先用反证法证明 $f'(x)\to 0$。若不然，则存在 $\varepsilon_0>0$ 与趋于 $+\infty$ 的数列 $x_n$，使得 $|f'(x_n)|\ge \varepsilon_0$。

由 $f''$ 有界，$f'$ 在 $(0,+\infty)$ 上一致连续。事实上，对任意 $x,y>0$，由拉格朗日中值定理，存在 $\xi$ 介于 $x,y$ 之间，使得
$$
|f'(x)-f'(y)|=|f''(\xi)||x-y|\le M|x-y|.
$$
因此取 $\delta=\frac{\varepsilon_0}{2M}$，当 $|x-y|<\delta$ 时就有 $|f'(x)-f'(y)|<\varepsilon_0$。

于是对每个 $x_n$，在区间 $[x_n, x_n+\delta]$ 上（或 $[x_n-\delta,x_n]$，取能与 $x_n$ 同侧且落在定义域内的区间即可，本处取 $[x_n,x_n+\delta]$），对任意 $x\in[x_n,x_n+\delta]$，有
$$
|f'(x)|\ge |f'(x_n)|-|f'(x)-f'(x_n)|\ge \varepsilon_0-M\delta=\frac{\varepsilon_0}{2}.
$$
当 $x_n\to+\infty$ 时这些小区间互不重叠，且每个小区间上 $|f'|\ge \frac{\varepsilon_0}{2}$。因此由拉格朗日中值定理，$f$ 在每个小区间上的增量绝对值至少为
$$
|f(x_n+\delta)-f(x_n)|=|f'(\xi_n)|\delta\ge \frac{\varepsilon_0\delta}{2},
$$
与 $\lim\limits_{x\to+\infty}f(x)=A$ 矛盾（$f$ 有极限时在无穷远处任意小邻域内的振幅应趋于 $0$，而这里每个小区间的增量都有固定下界）。所以必有 $\lim\limits_{x\to+\infty}f'(x)=0$。

也可以换用洛必达法则直接说明：若 $\lim f(x)=A$，且 $f''$ 有界，则
$$
\lim_{x\to+\infty}\frac{f'(x)}{x}=? 
$$
但直接洛必达需先知道 $f'$ 有极限，否则不适用；更稳妥的证明就是上面的“一致连续 + 反证法”，或者用如下梯形面积/积分方法：
$$
f(x+1)-f(x)=f'(x)+\frac12 f''(\xi_x),\quad \xi_x\in(x,x+1),
$$
即
$$
f'(x)=f(x+1)-f(x)-\frac12 f''(\xi_x).
$$
令 $x\to+\infty$，$f(x+1)-f(x)\to A-A=0$，而 $f''(\xi_x)$ 有界但不一定趋于 $0$，所以这个等式不能直接给出 $f'\to0$。正确的严格处理需使用一致连续性，如上。

【答案】正确选项为 **(D)**。

各选项小结：
- (A) 错：$f$ 有极限不能推出 $f'$ 有极限，反例 $f(x)=\frac{\sin x^2}{x}$。
- (B) 错：$f'\to0$ 不能推出 $f$ 有界，反例 $f(x)=\ln x$。
- (C) 错：$f$ 与 $f'$ 有界不能推出 $f''\to0$，反例 $f(x)=\frac{\sin x^2}{x^2}$。
- (D) 对：$f$ 有极限且 $f''$ 有界时，$f'$ 一致连续；若 $f'$ 不趋于 $0$，则 $f$ 在无穷远处在等长小区间上产生固定下界的振幅，与 $f$ 有极限矛盾。

【易错点】
1. 误以为“$f$ 有极限则 $f'\to0$”。实际上 $f$ 可以在极限值附近高频小幅震荡，$f'$ 可以无界或不趋于 $0$。
2. 误以为“$f'\to0$ 则 $f$ 有界”。$f'\to0$ 只说明 $f$ 的增速趋于 $0$，但 $f$ 可能在无穷远处累积到无界（如 $\ln x$）。
3. 误以为“$f$、$f'$ 有界则 $f''\to0$”。有界只给出一阶控制，二阶导可以高频震荡甚至无界，如 $f''\sim -4x\sin x^2$。
4. 证明 (D) 时不能简单对 $f(x+1)-f(x)$ 用中值定理后令 $x\to\infty$ 就算完，因为中值点 $\xi_x$ 处 $f''(\xi_x)$ 虽有界但不一定趋于 $0$。必须利用 $f''$ 有界推出 $f'$ 一致连续，再用反证法。
5. 题面按常见考研数学一选择题表述理解（$f(x)$ 在 $(0,+\infty)$ 内二阶可导，各选项均为 $x\to+\infty$ 的情形），未发现 OCR 疑误。

【命题规律】此类题重点考查无穷远处函数极限、导数极限与有界性之间的逻辑关系，常见干扰项设计是“函数有极限 ⇒ 导数趋于0”“导数趋于0 ⇒ 函数有界”“函数和导数有界 ⇒ 二阶导趋于0”。复习时应熟练构造三类反例：高频震荡型（$\sin x^2$ 除以幂函数）、对数型（$\ln x$）、幂型乘积型；同时掌握“导数有界 ⇒ 一致连续”这一桥梁，以及用反证法证明收敛数列在无穷远处振幅趋于 0。

---

## V4 Flash Max 解析

**答案**: D。A、B、C 都能构造反例；D 是正确结论：$f''$ 有界 $\Rightarrow f'$ 一致连续，再加上 $\lim\limits_{x\to+\infty}f(x)=A$，可推出 $\lim\limits_{x\to+\infty}f'(x)=0$。

**解题切入点**: 看到“极限存在 + $f''$ 有界”，应立刻想到 Barbalat 引理型结论：$f''$ 有界 $\Rightarrow f'$ Lipschitz $\Rightarrow f'$ 一致连续。A 错在“函数趋于常数”不能控制导数的振荡；B 错在“导数趋于 0”只说明增长变慢，不代表函数有界；C 错在“函数和导数有界”不控制二阶导。类似算法竞赛构造 Hack 数据，A、B、C 都是被特殊反例卡掉的。

**推演**:

1. **A 错**  
取
$$
f(x)=\frac{\sin(x^2)}{x},\quad x>0.
$$
则
$$
f(x)\to 0\quad (x\to+\infty),
$$
但
$$
f'(x)=2\cos(x^2)-\frac{\sin(x^2)}{x^2}.
$$
取 $x_n=\sqrt{2\pi n}$，则 $f'(x_n)=2$；取 $y_n=\sqrt{2\pi n+\pi}$，则 $f'(y_n)=-2$。所以 $f'(x)$ 不趋于 $0$。A 不成立。

2. **B 错**  
取
$$
f(x)=\ln(1+x).
$$
则
$$
f'(x)=\frac1{1+x}\to0\quad (x\to+\infty),
$$
但 $f(x)$ 在 $(0,+\infty)$ 上无界。B 不成立。

3. **C 错**  
仍取
$$
f(x)=\frac{\sin(x^2)}{x}.
$$
因为 $|f(x)|\le1$，且
$$
|f'(x)|\le \left|2\cos(x^2)\right|+\left|\frac{\sin(x^2)}{x^2}\right|\le3,
$$
所以 $f(x)$ 与 $f'(x)$ 都有界。但
$$
f''(x)=\left(\frac{2}{x^3}-4x\right)\sin(x^2)-\frac{2}{x}\cos(x^2).
$$
取 $z_n=\sqrt{2\pi n+\frac{\pi}{2}}$，则 $\sin(z_n^2)=1,\ \cos(z_n^2)=0$，于是
$$
f''(z_n)=\frac{2}{z_n^3}-4z_n\to-\infty.
$$
故 $f''(x)$ 不可能趋于 $0$。C 不成立。

4. **D 正确**  
设 $|f''(x)|\le M$。

若 $M=0$，则 $f''(x)\equiv0$，所以 $f'(x)$ 为常数。若该常数非零，则 $f(x)$ 会线性增长，不可能有有限极限 $A$，故常数必为 $0$，结论成立。

若 $M>0$。对任意 $a<b$，在 $[a,b]$ 上对 $f'$ 用拉格朗日中值定理，存在 $\xi\in(a,b)$，使
$$
|f'(b)-f'(a)|=|f''(\xi)|(b-a)\le M(b-a).
$$
所以 $f'$ 是 Lipschitz 的，特别是一致连续的。

反设 $f'(x)$ 不趋于 $0$，则存在 $\varepsilon>0$ 及 $x_n\to+\infty$，使
$$
|f'(x_n)|\ge\varepsilon.
$$
取
$$
h=\frac{\varepsilon}{2M}.
$$
则对任意 $t\in[x_n,x_n+h]$，
$$
|f'(t)-f'(x_n)|\le Mh=\frac{\varepsilon}{2}.
$$
因此在 $[x_n,x_n+h]$ 上，$f'(t)$ 与 $f'(x_n)$ 同号，且
$$
|f'(t)|\ge\frac{\varepsilon}{2}.
$$
再由拉格朗日中值定理，存在 $\zeta_n\in(x_n,x_n+h)$，使
$$
f(x_n+h)-f(x_n)=f'(\zeta_n)h.
$$
于是
$$
|f(x_n+h)-f(x_n)|\ge \frac{\varepsilon}{2}\cdot h
=\frac{\varepsilon^2}{4M}.
$$
但 $x_n\to+\infty$ 且 $x_n+h\to+\infty$，由 $\lim\limits_{x\to+\infty}f(x)=A$ 得
$$
f(x_n+h)-f(x_n)\to A-A=0,
$$
矛盾。因此必有
$$
\lim_{x\to+\infty}f'(x)=0.
$$

**易错点**:

- 易把 A 当正确：以为“有水平渐近线，切线斜率一定趋于 0”。实际上需要额外条件控制导数的振荡，如 $f'$ 一致连续。
- 易把 B 当正确：$f'\to0$ 只说明函数增长越来越慢，不保证函数有界；$\ln(1+x)$ 就是反例。
- 易把 C 当正确：$f$ 和 $f'$ 有界只能控制一阶变化，不能控制二阶导。$\frac{\sin(x^2)}{x}$ 中 $f''$ 沿子列趋于 $-\infty$。
- D 的证明关键是 $f''$ 有界推出 $f'$ Lipschitz，而不是 $f''$ 有界直接推出 $f'$ 有界。两者逻辑不要混淆。
- 反例可代特殊点自检：A 中取 $x_n=\sqrt{2\pi n}$ 和 $y_n=\sqrt{2\pi n+\pi}$，可直接看到 $f'$ 取 $2$ 与 $-2$；C 中取 $z_n=\sqrt{2\pi n+\frac{\pi}{2}}$，可看到 $f''\to-\infty$。

**命题规律**:  
该考点是“无穷远处极限、导数极限、有界性之间的蕴含关系”，常与拉格朗日中值定理、一致连续、Taylor 展开结合考查。常见变式是把 D 中 $f''$ 有界改成“$f'$ 一致连续”，结论仍成立。命题人常把“极限存在”“导数有界”“导数趋于 0”作排列组合，要求考生判断哪些条件能推出 $f'\to0$；多构造振荡反例是破题关键。
