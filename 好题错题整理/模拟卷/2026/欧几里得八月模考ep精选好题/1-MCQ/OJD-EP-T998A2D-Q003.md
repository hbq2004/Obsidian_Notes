---
ctime: 2026-08-15 19:15:43
mtime: 2026-08-20 01:07:44
tags:
  - AM
  - AM/精选好题
  - 计算题
  - 反常积分
  - p-积分
  - 等价无穷小
  - 分段函数
points:
level:
---

# MCQ 第 3 题

![[_Attachments/题目识别/OJD-EP/OJD-EP-T998A2D-Q003_题目.png|题目]]

【例3】设 $\alpha > 0$，$f(x) = \begin{cases} \frac{x \sqrt{x}}{\arctan^{\alpha} x} & 0 < x < 1, \\ \frac{1}{\sqrt{x^{\alpha+1} - x}} & x > 1, \end{cases}$，若反常积分 $\int_{0}^{+\infty} f(x) \, dx$ 收敛，则（）

A. $1 < \alpha < 2$.

B. $1 < \alpha < \frac{5}{2}$.

C. $\frac{3}{2} < \alpha < 2$.

D. $\frac{3}{2} < \alpha < \frac{5}{2}$.

---

## 答案与解析

**答案**：**B. $1 < \alpha < \frac{5}{2}$**

**切入点**（分治，和算法里"分 case 处理边界"一致）：反常积分 $\int_{0}^{+\infty}$ 要同时看三个"危险点"——**0、1、∞**。分段函数的每一支只在它的区间上判敛，最后取交集。

**推演**：

**① $x \to 0^{+}$（第一支）**：$\arctan x \sim x$，故

$$f(x)=\frac{x^{3/2}}{\arctan^{\alpha}x}\sim \frac{x^{3/2}}{x^{\alpha}}=x^{\frac{3}{2}-\alpha}.$$

由 p-积分 $\int_{0}^{1}x^{p}\,\mathrm{d}x$ 收敛 $\iff p>-1$：

$$\frac{3}{2}-\alpha>-1 \iff \alpha<\frac{5}{2}.$$

**② $x \to 1$（第二支在 $x=1^{+}$ 的奇性——最容易被漏掉的点）**：

$$x^{\alpha+1}-x=x(x^{\alpha}-1)\sim \alpha(x-1)\;\Longrightarrow\; f(x)\sim\frac{1}{\sqrt{\alpha(x-1)}},$$

这是 $\frac{1}{2}$ 阶奇性，$\int_{1}^{1+\delta}(x-1)^{-1/2}\,\mathrm{d}x$ 收敛，所以 $x=1$ 处**不需要额外条件**。

**③ $x \to +\infty$（第二支）**：$\sqrt{x^{\alpha+1}-x}\sim x^{\frac{\alpha+1}{2}}$，故

$$f(x)\sim x^{-\frac{\alpha+1}{2}}, \qquad \int_{1}^{+\infty}x^{p}\,\mathrm{d}x\ \text{收敛}\iff p<-1\iff \frac{\alpha+1}{2}>1 \iff \alpha>1.$$

综合 ①②③：$\boxed{1<\alpha<\frac{5}{2}}$，选 **B**。

**易错点**：

1. 只判 $0$ 和 $\infty$、**漏判 $x=1$**——这道题第二支的分母 $\sqrt{x^{\alpha+1}-x}$ 在 $x=1$ 恰好有 $\frac12$ 阶奇性，收敛，所以答案里没有"$\alpha>1$ 之外再排除 $x=1$"的额外项；若把根号看成只盖住 $x^{\alpha+1}$（$1/\sqrt{x^{\alpha+1}}-x$），$x=1$ 会变成一阶极点导致发散——**读题时注意根号的范围**；
2. 等价无穷小：$\arctan^{\alpha}x\sim x^{\alpha}$、$x^{\alpha}-1\sim \alpha\ln...$ 不对——是 $x^{\alpha}-1\sim \alpha(x-1)$（$x\to1$）；
3. p-积分口诀：$\int_{0}^{1}x^p$ 收敛 $\iff p>-1$；$\int_{1}^{+\infty}x^p$ 收敛 $\iff p<-1$，两个方向别记反。

**命题规律**：分段函数反常积分 = **各奇异点分段判敛取交集**；奇异点藏在分支交界处是高频陷阱；判敛工具就是"等价替换 + p-积分"。



---

## V4 Flash Max 解析

**答案**: B。收敛需满足 $\alpha>1$ 且 $\alpha<5/2$，即 $1<\alpha<5/2$。

**解题切入点**: 分段函数积分先“分治”：分别检查 $x=0^+$、$x=1^+$、$x=+\infty$ 三个可疑点。核心是用等价无穷小/大把一般函数化成幂函数，再用 $p$-积分判敛。

**推演**:

1. 在 $x\to0^+$ 处：
$$
\arctan x\sim x,\qquad x\sqrt{x}=x^{3/2}
$$
所以
$$
f(x)\sim \frac{x^{3/2}}{x^\alpha}=x^{3/2-\alpha}.
$$
有限端点处
$$
\int_0^\delta x^p\,dx
$$
收敛当且仅当 $p>-1$，因此
$$
\frac32-\alpha>-1
\Rightarrow \alpha<\frac52.
$$

2. 在 $x\to1^+$ 处：
令 $t=x-1\to0^+$，则
$$
x^{\alpha+1}-x=x(x^\alpha-1)
\sim \alpha(x-1)=\alpha t,
$$
所以
$$
f(x)\sim \frac{1}{\sqrt{\alpha t}}.
$$
而
$$
\int_0^1 t^{-1/2}\,dt
$$
收敛，故 $x=1$ 处不产生额外限制。

3. 在 $x\to+\infty$ 处：
因为 $\alpha+1>1$，
$$
x^{\alpha+1}-x\sim x^{\alpha+1},
$$
所以
$$
f(x)\sim x^{-(\alpha+1)/2}.
$$
无穷限积分
$$
\int^{+\infty} x^{-q}\,dx
$$
收敛当且仅当 $q>1$，因此
$$
\frac{\alpha+1}{2}>1
\Rightarrow \alpha>1.
$$

综合得：
$$
1<\alpha<\frac52.
$$

故选 **B**。

**易错点**:  
- 不要漏掉 $x=1$ 这个瑕点；但 $x=1^+$ 处是 $t^{-1/2}$ 型，必收敛。  
- 有限端点 $0$ 处看 $p>-1$，无穷远处看 $q>1$，两者方向相反，容易混淆。  
- 不要误以为 $f$ 在 $0$ 附近必须“不趋于无穷”；例如 $\int_0^1 x^{-0.9}\,dx$ 也收敛。  
- 临界值 $\alpha=1$ 和 $\alpha=5/2$ 均会导致对数型发散，不能取等号。

自检：取 $\alpha=3/2$ 和 $\alpha=2$ 代入等价式均收敛，这两个值同时落在 B 中，而 A、C、D 至少不包含其中一个，与选项自洽。

**命题规律**: 考研中这类题通常把参数放在指数上，让同一个积分分别在 $0$、$1$、$\infty$ 附近出现奇性。解法统一：逐点等价展开，化为 $p$-积分判敛。常见的变式是加入 $\ln x$、$\sin x$、$1-\cos x$ 等因子，仍需先做等价无穷小/大替换，再比较幂次。