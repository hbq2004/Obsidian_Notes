---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - AM
  - 26_姜晓千四套卷/卷二/FRQ
  - 计算题
  - 幂级数展开
  - 反正切函数化简
  - 对数函数展开
  - 级数求和
  - 阿贝尔定理
points:
level:
---

# FRQ 第 19 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S2-Q19_题目.png|题目]]

(I) 将 $f(x)=x\arctan\frac{1+x}{1-x}-\ln\sqrt{1+x^2}$ 展开成 $x$ 的幂级数;
(II) 求级数 $\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n(2n-1)}$ 的和.

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S2-Q19_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
(I) $f(x) = \frac{\pi}{4}x + \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{2n(2n-1)} x^{2n}, \quad |x|<1$（或写作 $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{2n(2n-1)} x^{2n}$）。

(II) $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n(2n-1)} = \frac{\pi}{2} - \ln 2$。

**给分点**：
- 化简 $f(x)$ 为 $\frac{\pi}{4}x + x\arctan x - \frac{1}{2}\ln(1+x^2)$；
- 分别展开 $x\arctan x$ 和 $\ln(1+x^2)$ 为幂级数；
- 合并得到 $f(x)$ 的展开式；
- 利用展开式令 $x=1$ 并计算级数和，注意 $f(1)=\frac{\pi}{2}-\frac{1}{2}\ln2$；
- 最终结果正确。

**解题切入点**
类似算法竞赛中“函数展开与级数求和”的套路：先化简函数表达式，利用已知展开式（如 $\arctan x$、$\ln(1+x)$）将函数展开成幂级数，再通过赋值法求特定级数的和。本题关键是将 $\arctan\frac{1+x}{1-x}$ 化为 $\frac{\pi}{4}+\arctan x$，避免复杂求导。

**推演**
**步骤1：化简函数**
$$f(x)=x\arctan\frac{1+x}{1-x}-\ln\sqrt{1+x^2}$$
注意到 $\ln\sqrt{1+x^2}=\frac{1}{2}\ln(1+x^2)$，且 $\arctan\frac{1+x}{1-x}=\frac{\pi}{4}+\arctan x$（$|x|<1$），故
$$f(x)=x\left(\frac{\pi}{4}+\arctan x\right)-\frac{1}{2}\ln(1+x^2)=\frac{\pi}{4}x+x\arctan x-\frac{1}{2}\ln(1+x^2).$$

**步骤2：展开幂级数**
已知 $\arctan x = \sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}x^{2n+1}$，$|x|<1$，则
$$x\arctan x = \sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}x^{2n+2} = \sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{2n-1}x^{2n}.$$
又 $\ln(1+x^2) = \sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n}x^{2n}$，$|x|<1$，故
$$\frac{1}{2}\ln(1+x^2) = \sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{2n}x^{2n}.$$
因此
$$f(x) = \frac{\pi}{4}x + \sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{2n-1}x^{2n} - \sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{2n}x^{2n} = \frac{\pi}{4}x + \sum_{n=1}^{\infty}(-1)^{n-1}\left(\frac{1}{2n-1}-\frac{1}{2n}\right)x^{2n} = \frac{\pi}{4}x + \sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{2n(2n-1)}x^{2n}.$$
注意 $(-1)^{n-1}=(-1)^{n+1}$，可互换。收敛域 $|x|<1$，边界 $x=\pm1$ 需单独讨论（本题用 $x=1$ 时级数收敛）。

**步骤3：求级数和**
在展开式中令 $x=1$（由阿贝尔定理，幂级数在 $x=1$ 处收敛且和函数连续），得
$$f(1) = \frac{\pi}{4} + \sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{2n(2n-1)}.$$
直接计算 $f(1)$：$f(1)=1\cdot\arctan\frac{2}{0}-\ln\sqrt{2} = \frac{\pi}{2} - \frac{1}{2}\ln2$（注意 $\arctan\frac{1+x}{1-x}$ 在 $x=1$ 处极限为 $\frac{\pi}{2}$）。
故
$$\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{2n(2n-1)} = f(1)-\frac{\pi}{4} = \left(\frac{\pi}{2}-\frac{1}{2}\ln2\right)-\frac{\pi}{4} = \frac{\pi}{4}-\frac{1}{2}\ln2.$$
所求级数 $\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n(2n-1)} = \sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n(2n-1)} = 2\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{2n(2n-1)} = 2\left(\frac{\pi}{4}-\frac{1}{2}\ln2\right) = \frac{\pi}{2}-\ln2.$

**易错点**
1. 忘记化简 $\arctan\frac{1+x}{1-x}$ 导致展开复杂，应直接利用恒等式转换为 $\frac{\pi}{4}+\arctan x$。
2. 展开 $x\arctan x$ 时注意指数平移，$n$ 从 $0$ 开始要转化为 $n$ 从 $1$ 开始。
3. 求级数和时误用 $x=1$ 代入，需确认 $f(1)$ 的值，注意 $\ln\sqrt{1+x^2}$ 在 $x=1$ 处为 $\frac{1}{2}\ln2$，$\arctan\frac{1+x}{1-x}$ 在 $x=1$ 处极限为 $\frac{\pi}{2}$。
4. 所求级数分母是 $n(2n-1)$ 而非 $2n(2n-1)$，需乘以 $2$ 转化。

**命题规律**
本题是典型的“函数展开与级数求和”综合题，常见于考研数学一。命题套路：给出一个较复杂的函数，通过代数变形化为已知展开式的函数（如 $\arctan x$、$\ln(1+x)$ 等），然后利用幂级数逐项积分或求导得到展开式，最后通过赋值法求特定级数的和。复习建议：熟练掌握常见函数的幂级数展开式，善于利用恒等式化简，并注意边界点的收敛性与和函数值。


> 来源：《26_姜晓千四套卷（数一）》卷二 第 19 题
