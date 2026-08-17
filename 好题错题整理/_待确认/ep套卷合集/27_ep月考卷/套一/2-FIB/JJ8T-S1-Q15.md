---
ctime: 2026-08-18 02:29:13
mtime: 2026-08-18 02:29:13
tags:
  - AM
  - 27_ep月考卷/套一/FIB
  - 计算题
  - 幂指函数求极限
  - 等价无穷小
  - 泰勒展开
  - 对数恒等式
points:
level:
---

# FIB 第 15 题

![[_Attachments/题目识别/JJ8T/JJ8T-S1-Q15_题目.png|题目]]

15. $\lim\limits_{n \to \infty} \left(\cos \frac{1}{n}\right)^{n^2} = \_$


---

## 解析（AI 生成，仅供参考）

【考点】本题考查的知识点与解题切入点（结合算法竞赛类比，一两句话点透）：

幂指函数 $\left(\cos \frac{1}{n}\right)^{n^2}$ 的极限，最稳妥的套路是“取对数降次”：先把指数 $n^2$ 从头顶拿下来，化为 $n^2\ln\cos\frac{1}{n}$，再对 $\ln\cos x$ 做 $x=1/n$ 的泰勒展开。这类似于算法竞赛中遇到指数爆炸先取 `log` 再比较次数，大头精确到常数项即可。

【解】

设 $$L=\lim_{n\to\infty}\left(\cos\frac{1}{n}\right)^{n^2}.$$

两边取对数，利用对数函数的连续性：

$$\ln L=\lim_{n\to\infty} n^2\ln\left(\cos\frac{1}{n}\right).$$

令 $x=\frac{1}{n}$，则 $x\to 0$。先展开 $\cos x$：

$$\cos x=1-\frac{x^2}{2}+\frac{x^4}{24}+O(x^6).$$

再对 $\ln(1+u)$ 展开，取 $u=-\frac{x^2}{2}+\frac{x^4}{24}+O(x^6)$：

$$\ln\cos x=\ln\left(1-\frac{x^2}{2}+\frac{x^4}{24}+O(x^6)\right)
=-\frac{x^2}{2}-\frac{x^4}{12}+O(x^6).$$

把 $x=\frac{1}{n}$ 代回：

$$n^2\ln\left(\cos\frac{1}{n}\right)
=n^2\left(-\frac{1}{2n^2}-\frac{1}{12n^4}+O\left(\frac{1}{n^6}\right)\right)
=-\frac{1}{2}-\frac{1}{12n^2}+O\left(\frac{1}{n^4}\right)\to -\frac{1}{2}.$$

所以

$$L=e^{-1/2}=\frac{1}{\sqrt e}.$$

【答案】

横线处应填：

$$\boxed{\frac{1}{\sqrt e}}$$

【易错点】

1. 不能因为底数 $\cos\frac{1}{n}\to1$ 就直接认为极限为 $1$，这是 $1^\infty$ 型未定式，必须取对数或凑重要极限。
2. 取对数后，若只写 $\ln\cos x\sim -\frac{x^2}{2}$ 也足够，因为乘上 $n^2$ 后正好得到 $-1/2$；但若余项写错会失分。更保险的做法是用泰勒展开保留必要的阶。
3. 注意 $n^2$ 与 $\frac{1}{n^2}$ 相乘恰好抵消，不要丢掉 $\frac{1}{2}$ 的符号。

【命题规律】

考研数学一对此类极限的命题套路是：给出底数为 $\cos$、$\sin$、$\ln$ 等趋于 $1$ 的函数，指数为 $n$ 的多项式，制造 $1^\infty$ 型极限。解法固定为“取对数 + 等价无穷小/泰勒展开”。复习时建议把 $\ln\cos x$、$\ln\sin x/x$ 等常见展开式熟练记忆，并习惯用 $x=1/n$ 换元。

> AI 生成，仅供参考。

