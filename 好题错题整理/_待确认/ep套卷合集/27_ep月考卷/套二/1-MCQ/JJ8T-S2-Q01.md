---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套二/MCQ
  - 计算题
  - 无穷小量的阶
  - 变上限积分
  - 泰勒展开
  - 等价无穷小
points:
level:
---

# MCQ 第 1 题

![[_Attachments/题目识别/JJ8T/JJ8T-S2-Q01_题目.png|题目]]

1. 当 $x \to 0$ 时，下列无穷小量中，阶数最高的是（　　）
A. $\int_{0}^{x^2} \sin \sqrt{t} \, dt$
B. $\ln(1+x) - \sin x$
C. $\sqrt{1+x^2} - \sqrt{1-x^2}$
D. $\int_{0}^{x^2} \left(\frac{\sin t}{t} - 1\right) dt$


---

## DeepSeek V4 Flash Max

【考点】本题本质是比较“多项式的低阶项”，相当于 OI 中比较复杂度阶数：只需看展开后第一个非零项的 $x$ 指数；变上限积分通过等价无穷小换算出积分后的阶数。

【解】
判断无穷小量阶数，通常用 Taylor 展开或等价无穷小 + 积分。

A. 令 $u=x^2$。当 $t\to 0$ 时 $\sin\sqrt t\sim\sqrt t$，所以
$$\int_0^{x^2}\sin\sqrt t\,dt \sim \int_0^{x^2}\sqrt t\,dt=\frac23 t^{3/2}\Big|_0^{x^2}=\frac23 |x|^3.$$
故 A 的阶数为 $3$。

B. 由 Taylor 展开：
$$\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}+o(x^3),\quad \sin x=x-\frac{x^3}{6}+o(x^3).$$
所以
$$\ln(1+x)-\sin x=-\frac{x^2}{2}+\frac{x^3}{2}+o(x^3).$$
首项为 $-\frac{x^2}{2}$，阶数为 $2$。

C. 有理化：
$$\sqrt{1+x^2}-\sqrt{1-x^2}
=\frac{2x^2}{\sqrt{1+x^2}+\sqrt{1-x^2}}\sim x^2,$$
故阶数为 $2$。

D. 因为 $\frac{\sin t}{t}=1-\frac{t^2}{6}+o(t^2)$，所以
$$\frac{\sin t}{t}-1=-\frac{t^2}{6}+o(t^2).$$
积分得
$$\int_0^{x^2}\left(\frac{\sin t}{t}-1\right)dt
\sim \int_0^{x^2}-\frac{t^2}{6}\,dt
=-\frac{1}{18}(x^2)^3=-\frac{x^6}{18}.$$
因此 D 的阶数为 $6$。

比较四个选项：A 为 $3$ 阶，B、C 为 $2$ 阶，D 为 $6$ 阶，最高的是 D。

【答案】
选 **(D)**。
- A：$\int_0^{x^2}\sin\sqrt t\,dt$ 为 $3$ 阶；
- B：$\ln(1+x)-\sin x$ 为 $2$ 阶；
- C：$\sqrt{1+x^2}-\sqrt{1-x^2}$ 为 $2$ 阶；
- D：$\int_0^{x^2}(\frac{\sin t}{t}-1)dt$ 为 $6$ 阶。
故正确选项为 (D)。

【易错点】
1. A 中 $\sin\sqrt t\sim\sqrt t$ 后，代上限定积分得到 $|x|^3$，不要写成 $x^3$ 而怀疑左右极限；不过阶数不受影响。
2. B 中 $\ln(1+x)$ 与 $\sin x$ 的一次项抵消，必须展开到 $x^2$，否则会误判。
3. C 不能简单认为两根式都趋于 $1$ 所以差为 $0$，可用有理化。
4. D 中 $\frac{\sin t}{t}-1$ 的 Taylor 首项是 $-t^2/6$，不是 $0$；积分再乘上上限 $x^2$ 的 3 次方，得到 $x^6$。
5. 防错提醒：比较阶数时优先算 Taylor 展开的第一项，不要只看“整体趋于 0 的速度”。

【命题规律】
这类题在选择题中常将变上限积分、等价无穷小、Taylor 展开组合在一起，考查“首项系数与指数”的快速求法。复习时熟记 $\sin x$、$\ln(1+x)$、$\sqrt{1+u}$、$\sin t/t$ 等展开，并掌握“被积函数阶数 +1，再乘以上限阶数”的变上限积分阶数判断法。
