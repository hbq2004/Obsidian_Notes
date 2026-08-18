---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套三/FRQ
  - 计算题
  - 拉格朗日中值定理
  - 泰勒展开
  - 极限计算
  - 比较系数法
  - 中值点极限
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/JJ8T/JJ8T-S3-Q20_题目.png|题目]]

$ 20. (本题满分 12 分) 设函数 f(x) 二阶可导。由拉格朗日中值定理可知，对任意 x, 存在 \theta=\theta(x) \in(0,1) , 使 $

得 $f(x)-f(0)=f^{\prime}(\theta x) x$.

(1) 如果 $f^{\prime \prime}(0) \neq 0$, 求 $\lim\limits _{x \rightarrow 0} \theta$;

(2) 如果 $f^{\prime \prime}(0)=0, f^{\prime \prime \prime}(0) \neq 0$, 求 $\lim\limits _{x \rightarrow 0} \theta$.


---

## DeepSeek V4 Flash Max

【考点】本题考查拉格朗日中值定理中值点 $\theta(x)$ 的极限问题，核心思路是利用泰勒展开将 $f(x)-f(0)$ 与 $f'(\theta x)$ 展开到同阶，再通过比较系数确定 $\theta$ 的极限。类比算法竞赛中的“待定系数法”，先展开到足够高阶，再匹配系数。

【解】
(1) 当 $f''(0)\neq 0$ 时，由拉格朗日中值定理：$f(x)-f(0)=f'(\theta x)x$，即 $f'(\theta x)=\dfrac{f(x)-f(0)}{x}$。
对 $f(x)$ 在 $x=0$ 处泰勒展开到二阶：
$$f(x)=f(0)+f'(0)x+\frac12 f''(0)x^2+o(x^2)$$
于是
$$\frac{f(x)-f(0)}{x}=f'(0)+\frac12 f''(0)x+o(x)$$
另一方面，因为 $\theta x\to 0$（$x\to 0$），展开 $f'(\theta x)$：
$$f'(\theta x)=f'(0)+f''(0)\theta x+o(\theta x)=f'(0)+f''(0)\theta x+o(x)$$
比较两式（注意 $f''(0)\neq 0$），得 $f''(0)\theta x \sim \frac12 f''(0)x$，即 $\theta\to \frac12$。因此
$$\lim_{x\to 0}\theta = \frac12$$

(2) 当 $f''(0)=0$，$f'''(0)\neq 0$ 时，需将 $f(x)$ 展开到三阶：
$$f(x)=f(0)+f'(0)x+\frac16 f'''(0)x^3+o(x^3)$$
则
$$\frac{f(x)-f(0)}{x}=f'(0)+\frac16 f'''(0)x^2+o(x^2)$$
同时，展开 $f'(\theta x)$ 到二阶（因为 $f''(0)=0$，所以一阶项消失）：
$$f'(\theta x)=f'(0)+f''(0)\theta x+\frac12 f'''(0)(\theta x)^2+o((\theta x)^2)=f'(0)+\frac12 f'''(0)\theta^2 x^2+o(x^2)$$
比较两式，得 $\frac12 f'''(0)\theta^2 x^2 \sim \frac16 f'''(0)x^2$，即 $\frac{\theta^2}{2}=\frac16$，故 $\theta^2=\frac13$。由于 $\theta\in(0,1)$，故 $\theta\to \frac{1}{\sqrt3}$。因此
$$\lim_{x\to 0}\theta = \frac{1}{\sqrt3}$$

【答案】
(1) $\boxed{\frac12}$；(2) $\boxed{\frac{1}{\sqrt3}}$。
关键给分点：
- 正确写出泰勒展开式（展开到二阶或三阶）；
- 正确展开 $f'(\theta x)$ 并保留相应的阶数；
- 比较系数时注意 $f''(0)$ 或 $f'''(0)$ 非零的条件；
- 第二问中由 $\theta^2$ 开方时，根据 $\theta>0$ 取正号。

【易错点】
- 易错点1：展开阶数不足。第一问展开到二阶，第二问必须展开到三阶，否则无法体现 $f'''(0)$ 的贡献。
- 易错点2：$\theta x$ 与 $x$ 同阶，但 $\theta$ 本身依赖于 $x$，不能预先假定其为常数，需通过比较系数求解。
- 易错点3：第二问中 $f''(0)=0$，但展开 $f'(\theta x)$ 时一阶项消失，要保留二次项，否则会误得 $\theta=0$。
- 易错点4：开方时忽略 $\theta>0$ 而导致符号错误。
- 注意：题干仅说明 $f(x)$ 二阶可导，但第二问涉及 $f'''(0)$，故实际隐含三阶可导条件，题面可按三阶可导理解（OCR 疑误，请核对原书）。

【命题规律】
此类题目常见于考研数学中值定理相关章节，考查拉格朗日中值定理中值点的极限。通常思路是：将 $f(x)$ 与 $f'(\theta x)$ 在 $0$ 点泰勒展开，通过比较低阶项系数直接得到 $\theta$ 的极限。复习时需熟练掌握泰勒展开的阶数判断，以及处理 $\theta(x)$ 这种隐含函数的极限问题。注意区分 $f''(0)$ 是否为零，决定展开到几阶。

---

## V4 Flash Max 解析

**答案**:  
(1) \(\lim\limits_{x\to0}\theta(x)=\dfrac12\)。  
(2) \(\lim\limits_{x\to0}\theta(x)=\dfrac1{\sqrt3}\)。

**解题切入点**:  
题干只给出了 \(\theta\) 满足的隐式方程，无法显式解出 \(\theta\)。求 \(\theta\) 的极限，关键是做“无穷小阶的比较”：用带 Peano 余项的 Taylor 公式展开 \(f(x)-f(0)\) 和 \(f'(\theta x)\)，展开到第一个非零导数项，再比较两边 \(x^k\) 的系数。这类似于算法竞赛里“比较主项、匹配复杂度系数”：低阶项会相消，最终极限由首个非零项决定。

**推演**:  
设 \(x\neq0\)，且 \(0<\theta<1\)，故 \(|\theta x|<|x|\)，从而当 \(x\to0\) 时 \(\theta x\to0\)。

### (1) \(f''(0)\neq0\)

令
\[
a=f''(0)\neq0.
\]

由带 Peano 余项的 Taylor 公式：

\[
f(x)-f(0)=f'(0)x+\frac a2x^2+o(x^2).
\]

又

\[
f'(\theta x)=f'(0)+a\theta x+o(\theta x),
\]

所以

\[
x f'(\theta x)=f'(0)x+a\theta x^2+x\,o(\theta x).
\]

因为 \(\theta\in(0,1)\)，有

\[
\frac{x\,o(\theta x)}{x^2}
=\frac{o(\theta x)}{\theta x}\cdot\theta\to0,
\]

故 \(x\,o(\theta x)=o(x^2)\)。

代入原式：

\[
f'(0)x+\frac a2x^2+o(x^2)
=
f'(0)x+a\theta x^2+o(x^2).
\]

消去 \(f'(0)x\)，除以 \(a x^2\)，得

\[
\frac12+o(1)=\theta+o(1),
\]

所以

\[
\boxed{\lim_{x\to0}\theta(x)=\frac12}.
\]

### (2) \(f''(0)=0,\ f'''(0)\neq0\)

令

\[
b=f'''(0)\neq0.
\]

因为 \(f''(0)=0\)，Taylor 展开为

\[
f(x)-f(0)=f'(0)x+\frac b6x^3+o(x^3).
\]

同时

\[
f'(t)=f'(0)+\frac b2t^2+o(t^2).
\]

取 \(t=\theta x\)，得

\[
x f'(\theta x)
=
f'(0)x+\frac b2\theta^2x^3+x\,o(\theta^2x^2).
\]

同理，

\[
\frac{x\,o(\theta^2x^2)}{x^3}
=
\frac{o(\theta^2x^2)}{\theta^2x^2}\cdot\theta^2\to0,
\]

所以 \(x\,o(\theta^2x^2)=o(x^3)\)。

代入原式：

\[
f'(0)x+\frac b6x^3+o(x^3)
=
f'(0)x+\frac b2\theta^2x^3+o(x^3).
\]

消去 \(f'(0)x\)，除以 \(b x^3\)，得

\[
\frac16+o(1)=\frac12\theta^2+o(1).
\]

因此

\[
\theta^2\to\frac13.
\]

又因为 \(0<\theta<1\)，所以

\[
\boxed{\lim_{x\to0}\theta(x)=\frac1{\sqrt3}}.
\]

**易错点**:  
- 不能只把 \(f'(\theta x)\) 近似成 \(f'(0)\)，否则线性项消去后就没有信息了；必须展开到第一个非零导数项。  
- \(\theta\) 本身依赖于 \(x\)，不能预先假设它有极限；要保留 \(\theta\)，通过比较系数“反推”出极限。  
- 第(2)问中 \(f''(0)=0\)，如果只展开到一阶项，会得到无意义的 \(0=0\)，必须展开到 \(t^2\) 项。  
- 自检：取 \(f(x)=x+\dfrac{x^2}{2}\)，第(1)问中 \(\theta=\dfrac12\) 恒成立；取 \(f(x)=x+\dfrac{x^3}{6}\)，第(2)问中 \(\theta^2=\dfrac13\) 恒成立，与结论吻合。  
- 注：按OCR最合理读法，题干中的“二阶可导”应理解为“至少三阶可导”（即 \(f'''(0)\) 存在），否则第(2)问无定义。

**命题规律**:  
本题属于“中值定理中间点 \(\theta\) 的渐近性”问题。常见变式包括：把区间 \([0,x]\) 改为 \([a,a+h]\)，求 \(\theta\) 在 \(h\to0\) 时的极限；或与 Cauchy 中值定理、Taylor 余项结合。本质规律是：若 \(f^{(p)}(0)\) 是第一个不为零的高阶导数，则比较 \(x^p\) 项系数可得  
\[
\theta^{p-1}=\frac1p,
\]
即
\[
\theta\to p^{-\frac1{p-1}}.
\]
因此 \(p=2\) 时是 \(\dfrac12\)，\(p=3\) 时是 \(\dfrac1{\sqrt3}\)。
