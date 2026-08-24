---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷二/MCQ
  - 概念题
  - 反常积分敛散性
  - 瑕积分
  - 极限比较判别法
  - 幂函数积分
  - 等价无穷小
points:
level:
---

# MCQ 第 3 题

![[_Attachments/题目识别/YBS5T/YBS5T-S2-Q03_题目.png|题目]]

3. 下列反常积分中收敛的是( ).

(A) $\int_{0}^{2} \frac{1}{x^2 - 1} \mathrm{d}x$

(B) $\int_{0}^{1} (\ln x)^2 \mathrm{d}x$

(C) $\int_{0}^{+\infty} \frac{x \arctan x}{x^2 + 1} \mathrm{d}x$

(D) $\int_{0}^{\frac{\pi}{2}} \frac{1}{\sin^2 x} \mathrm{d}x$

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S2-Q03_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(B)。

四个选项中仅 (B) 收敛，且 $\int_0^1 (\ln x)^2 dx=2$。

**解题切入点**

先找“危险点”：有限瑕点和无穷远点；再用等价无穷小或极限比较化为 $p$ 积分判别。类似算法竞赛先看数据范围，判断复杂度只看主导阶。

**推演**

(A) 发散。被积函数在 $x=1$ 处有瑕点。
$$
x^2-1=(x-1)(x+1)\sim 2(x-1)\quad(x\to 1),
$$
所以在 $x=1$ 右邻域内 $\frac{1}{x^2-1}\sim\frac{1}{2(x-1)}$。由 $\int \frac{dx}{x-1}$ 发散可知 (A) 发散。

(B) 收敛。
$$
\int_0^1 (\ln x)^2 dx=\lim_{\varepsilon\to0^+}\int_\varepsilon^1 (\ln x)^2 dx.
$$
利用原函数：
$$
\int (\ln x)^2 dx=x[(\ln x)^2-2\ln x+2]+C,
$$
求导可回代验证。故
$$
\int_0^1 (\ln x)^2 dx=\lim_{\varepsilon\to0^+}\left[x((\ln x)^2-2\ln x+2)\right]_\varepsilon^1=2.
$$
因此 (B) 收敛。

(C) 发散。当 $x\to+\infty$ 时，$\arctan x\to\frac{\pi}{2}$，所以
$$
\frac{x\arctan x}{x^2+1}\sim\frac{\pi x/2}{x^2}=\frac{\pi}{2x}.
$$
而 $\int_1^{+\infty}\frac{dx}{x}$ 发散，由极限比较判别法可知 (C) 发散。

(D) 发散。$x=0$ 为瑕点，且
$$
\int_\varepsilon^{\pi/2}\frac{1}{\sin^2 x}dx=[-\cot x]_\varepsilon^{\pi/2}=\cot\varepsilon\to+\infty\quad(\varepsilon\to0^+).
$$
所以 (D) 发散。

综上，收敛的是 (B)。

**易错点**

1. (A) 中 $x=1$ 是内点瑕点，不能直接在整个 $[0,2]$ 上套用 Newton-Leibniz 公式；否则会得到有限值，但那是 Cauchy 主值意义，不是通常反常积分。
2. (C) 不要只看到分母 $x^2+1$ 就认为收敛，分子有 $x\arctan x$，实际等价于 $\frac{\pi}{2x}$，属 $p=1$ 发散。
3. (D) 不要误用 $\int_0^{\pi/2}\frac{1}{\sin^2 x}dx$ 在端点 $0$ 处值有限，$\cot x\to+\infty$，应视为瑕积分。
4. (B) 虽然 $\ln x\to-\infty$，但对数瑕积分可积，不要凭“趋于无穷”直接判发散。

**命题规律**

反常积分收敛性选择题常把有限瑕点与无穷远点混在一起，考查“先找瑕点、再看无穷远处阶”的基本功。复习时熟记：$\int_0^1\frac{dx}{x^p}$ 在 $p<1$ 收敛、$\int_1^{+\infty}\frac{dx}{x^p}$ 在 $p>1$ 收敛；并用极限比较法统一处理。


> 来源：《26_余丙森五套卷（数一）》卷二 第 3 题
