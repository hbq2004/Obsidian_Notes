---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷六/MCQ
  - 计算题
  - 莱布尼茨判别法
  - 条件收敛
  - 绝对收敛
  - 等价无穷小
  - p级数敛散性
points:
level:
---

# MCQ 第 3 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S6-Q03_题目.png|题目]]

若级数 $$\sum_{n=1}^{\infty}(-1)^{n+1}\frac{\sqrt{n+1}-\sqrt{n}}{n^p}$$ 条件收敛,则 $p$ 的取值范围为.

(A). $\left(-1, \frac{1}{2}\right]$
(B). $(-1,1)$
(C). $(0,1)$
(D). $\left(-\frac{1}{2}, \frac{1}{2}\right]$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S6-Q03_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**  
【答案】(D) $\left(-\frac12,\frac12\right]$。

条件收敛 = 原级数收敛 + 绝对值级数发散。答案：$-\frac12<p\le\frac12$。

**解题切入点**  
把 $\sqrt{n+1}-\sqrt n$ 有理化，得 $b_n\sim \frac1{2n^{p+\frac12}}$。这样问题变成：交错级数收敛看莱布尼茨判别法，绝对收敛看 $p$ 级数判别法。

**推演**  
令
$$b_n=\frac{\sqrt{n+1}-\sqrt n}{n^p}>0,\quad a_n=(-1)^{n+1}b_n.$$

有理化：
$$\sqrt{n+1}-\sqrt n=\frac1{\sqrt{n+1}+\sqrt n},$$
所以
$$b_n=\frac1{n^p(\sqrt{n+1}+\sqrt n)}\sim\frac1{2n^{p+\frac12}}\ (n\to\infty).$$

1. 绝对收敛：  
$\sum b_n$ 与 $\sum n^{-(p+\frac12)}$ 同敛散，因此绝对收敛当且仅当 $p+\frac12>1$，即 $p>\frac12$。  
要条件收敛，必须绝对值级数发散，故 $p\le\frac12$。注意 $p=\frac12$ 时 $\sum b_n\sim\sum\frac1{2n}$ 发散，所以右端点可取。

2. 原级数收敛：  
交错级数 $\sum (-1)^{n+1}b_n$ 要用莱布尼茨判别法。先看必要条件 $b_n\to0$：  
由 $b_n\sim \frac1{2n^{p+\frac12}}$ 知，$b_n\to0\Leftrightarrow p+\frac12>0\Leftrightarrow p>-\frac12$。  
若 $p\le-\frac12$，$b_n$ 不趋于 $0$，原级数发散。

再看单调性：设 $f(x)=x^p(\sqrt{x+1}+\sqrt x)$，则 $b_n=\frac1{f(n)}$。  
$$(\ln f(x))'=\frac p x+\frac1{2\sqrt{x(x+1)}}\sim\frac{p+\frac12}{x}>0\ (x\to\infty),$$
所以当 $p>-\frac12$ 时，$f(x)$ 从某处起递增，$b_n$ 从某项起单调递减趋于 $0$。由莱布尼茨判别法，原级数收敛。

3. 综合：  
条件收敛需要 $p\le\frac12$ 且 $p>-\frac12$，即
$$p\in\left(-\frac12,\frac12\right].$$

【选项分析】  
(A) $(-1,\frac12]$：多含 $p\le-\frac12$，如 $p=-0.8$ 时通项不趋于 $0$，错误。  
(B) $(-1,1)$：多含 $p\le-\frac12$ 和 $p>\frac12$；$p=0.8$ 时绝对收敛而非条件收敛，错误。  
(C) $(0,1)$：漏掉负数端，且多含 $p>\frac12$，错误。  
(D) $(-\frac12,\frac12]$：与上述范围一致，正确。

**易错点**  
- 不要把“绝对收敛”当作“收敛”；$p>\frac12$ 是绝对收敛，不是条件收敛。  
- 不要忘记通项趋于 $0$ 的必要条件：$p\le-\frac12$ 时级数发散。  
- 端点要单独检验：$p=\frac12$ 可取，$p=-\frac12$ 不可取。  
- 莱布尼茨判别法需要 $b_n$ 单调递减，不能只验证 $b_n\to0$；本题用导数说明单调性。

**命题规律**  
本题是“等价无穷小 + $p$ 级数 + 交错级数判别法”的组合题。命题人常把参数边界和绝对/条件收敛放在一起考。复习时建议掌握三步模板：先看通项是否趋于 $0$，再判断绝对收敛，最后用莱布尼茨判别法判断条件收敛；边界点逐一检验。


> 来源：《26_张宇八套卷（数一）》卷六 第 3 题
