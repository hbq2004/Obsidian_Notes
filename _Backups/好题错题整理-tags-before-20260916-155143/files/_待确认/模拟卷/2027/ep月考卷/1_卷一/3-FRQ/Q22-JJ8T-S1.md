---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-20 01:32:05
tags:
  - AM
  - 27_ep月考卷/套一/FRQ
  - 证明题
  - 泰勒展开
  - 定积分放缩
  - 极限夹逼
  - 对数不等式
  - 调和级数发散
points:
level:
---

# FRQ 第 22 题

![[_Attachments/题目识别/JJ8T/JJ8T-S1-Q22_题目.png|题目]]

$ 22. (本题满分 12 分) 已知 a_{n}=\frac{1}{\sqrt{1^{2}+1}}+\frac{1}{\sqrt{2^{2}+2}}+\cdots+\frac{1}{\sqrt{n^{2}+n}} (n \in \mathbb{N}^{*}) , 证明: $

(1) 对任意的 $x \geq 1$， $2x \ln x - x^2 + 1 \leq 0$；

(2) 对任意的 $n \in \mathbb{N}^{*}$， $\frac{1}{\sqrt{n^2 + n}} \geq \ln \left(1 + \frac{1}{n}\right)$；

(3) $\lim\limits _{n \rightarrow \infty} \frac{1}{a_{n}} = 0$.


---

## DeepSeek V4 Flash Max

【考点】本题考查数列极限与不等式证明。先通过函数不等式完成对第(2)问的放缩，再将 $a_n$ 与调和级数比较，最后用两边夹逼得到 $\frac{1}{a_n}\to 0$。算法竞赛类比：这相当于用“二分/夹逼”估计一个增长量，先证明每个分项不小于某个发散级数的对应项，从而整体趋于无穷大。

【解】

### (1) 证明 $2x\ln x-x^2+1\le 0$，$x\ge 1$

设
$$
f(x)=2x\ln x-x^2+1,\qquad x\ge 1.
$$
则
$$
f(1)=2\cdot 1\cdot 0-1+1=0.
$$
求导得
$$
f'(x)=2\ln x+2-2x=2(\ln x+1-x).
$$
再令
$$
g(x)=\ln x+1-x,\qquad x\ge 1.
$$
则
$$
g(1)=0,\qquad g'(x)=\frac{1}{x}-1=\frac{1-x}{x}\le 0,\quad x\ge 1.
$$
所以 $g(x)\le g(1)=0$，即 $\ln x+1-x\le 0$。

因此
$$
f'(x)=2(\ln x+1-x)\le 0,\qquad x\ge 1.
$$
于是 $f(x)$ 在 $[1,+\infty)$ 上单调递减，故
$$
f(x)\le f(1)=0,\qquad x\ge 1.
$$
即
$$
2x\ln x-x^2+1\le 0.
$$

### (2) 证明 $\dfrac{1}{\sqrt{n^2+n}}\ge \ln\left(1+\dfrac{1}{n}\right)$，$n\in\mathbb N^*$

令
$$
x=\sqrt{1+\frac{1}{n}}=\sqrt{\frac{n+1}{n}}>1.
$$
代入(1)得
$$
2\sqrt{1+\frac{1}{n}}\ln\sqrt{1+\frac{1}{n}}-\left(1+\frac{1}{n}\right)+1\le 0.
$$
化简得
$$
2\sqrt{1+\frac{1}{n}}\cdot \frac{1}{2}\ln\left(1+\frac{1}{n}\right)-\frac{1}{n}\le 0,
$$
即
$$
\sqrt{1+\frac{1}{n}}\ln\left(1+\frac{1}{n}\right)\le \frac{1}{n}.
$$
所以
$$
\ln\left(1+\frac{1}{n}\right)\le \frac{1}{n\sqrt{1+\frac{1}{n}}}=\frac{1}{\sqrt{n^2+n}}.
$$
这正是要证的
$$
\frac{1}{\sqrt{n^2+n}}\ge \ln\left(1+\frac{1}{n}\right).
$$

### (3) 证明 $\lim\limits_{n\to\infty}\dfrac{1}{a_n}=0$

由(2)知，对任意 $n\in\mathbb N^*$，
$$
\frac{1}{\sqrt{n^2+n}}\ge \ln\left(1+\frac{1}{n}\right)=\ln(n+1)-\ln n.
$$
因此
$$
a_n=\sum_{k=1}^n\frac{1}{\sqrt{k^2+k}}\ge \sum_{k=1}^n\left[\ln(k+1)-\ln k\right]=\ln(n+1).
$$
于是
$$
0<\frac{1}{a_n}\le \frac{1}{\ln(n+1)}\to 0\qquad(n\to\infty).
$$
由夹逼准则，
$$
\lim_{n\to\infty}\frac{1}{a_n}=0.
$$

【答案】三问均证毕：

(1) $f(x)=2x\ln x-x^2+1$ 在 $[1,+\infty)$ 上单调递减且 $f(1)=0$，故 $2x\ln x-x^2+1\le 0$；

(2) 令 $x=\sqrt{1+\frac{1}{n}}$ 代入(1)，得 $\sqrt{1+\frac{1}{n}}\ln(1+\frac{1}{n})\le \frac{1}{n}$，即 $\frac{1}{\sqrt{n^2+n}}\ge \ln(1+\frac{1}{n})$；

(3) 对 $a_n$ 逐项放缩并用对数裂项求和：$a_n\ge \ln(n+1)$，故 $0<\frac{1}{a_n}\le \frac{1}{\ln(n+1)}\to0$，夹逼得极限为 $0$。

关键给分点：
- (1) 正确求导并判定单调性，或直接用导数证明 $\ln x+1-x\le0$；
- (2) 正确选取 $x=\sqrt{1+\frac{1}{n}}$ 代入(1)，得到目标不等式；
- (3) 由(2)建立 $a_n\ge \ln(n+1)$，再使用夹逼准则。

【易错点】
1. 第(1)问若只求一阶导后无法直接判断符号，应再研究 $\ln x+1-x$ 的导数；也可用泰勒展开：$\ln x\le x-1$ 再放大，但本题要求由(1)推(2)，须按给定顺序使用。
2. 第(2)问容易误令 $x=1+\frac{1}{n}$ 代入(1)，会得到 $\ln(1+\frac{1}{n})\le \frac{2n+1}{2n(n+1)}$，而右边并不小于 $\frac{1}{\sqrt{n^2+n}}$，无法证明目标；应令 $x=\sqrt{1+\frac{1}{n}}$，使 $x^2=1+\frac{1}{n}$，刚好消去常数项。
3. 第(3)问不要试图直接求 $a_n$ 的极限或通项；只需证明 $a_n\to+\infty$。对数为 $\ln(n+1)$ 后裂项求和是关键。
4. 夹逼时注意 $\frac{1}{a_n}>0$，下界取 $0$ 即可。

【命题规律】本题是典型的“函数不等式→数列不等式→数列极限”三段式命题。先将导数或单调性结论转化为与 $\frac{1}{n}$ 相关的不等式，再用于估计数列通项，最后用裂项求和或定积分比较求极限。复习时应熟练掌握 $\ln(1+x)\le x$、$\ln x\le x-1$、定积分放缩、裂项相消和夹逼准则。

---

## V4 Flash Max 解析

**答案**:  
(1) 对任意 $x\ge1$，$2x\ln x-x^2+1\le0$ 成立；  
(2) 对任意 $n\in\mathbb N^*$，$\dfrac1{\sqrt{n^2+n}}\ge\ln\left(1+\dfrac1n\right)$ 成立；  
(3) $\lim\limits_{n\to\infty}\dfrac1{a_n}=0$。  
完整证明见下。

**解题切入点**:  
从第三问倒推：要证明 $\dfrac1{a_n}\to0$，等价于证明 $a_n\to+\infty$。  
$a_n$ 是正项累加，项 $\dfrac1{\sqrt{k^2+k}}\sim\dfrac1k$，所以发散是直觉。但题目设计是让我们用第二问给出一个可求和的下界：

$$
\frac1{\sqrt{k^2+k}}\ge\ln\left(1+\frac1k\right)=\ln(k+1)-\ln k.
$$

求和后正好是“望远镜和”，得到 $\ln(n+1)$。

第二问怎么想到？看到根号 $\sqrt{n^2+n}=n\sqrt{1+\dfrac1n}$，就会想令 $x=\sqrt{1+\dfrac1n}$ 代入第一问，正好把根号消掉。这类似于算法中“看到目标形式，倒推需要哪一步放缩”。

**推演**:  

(1) 当 $x\ge1$ 时，$2x>0$。原不等式等价于

$$
\ln x\le\frac{x^2-1}{2x}.
$$

令

$$
H(x)=\frac{x^2-1}{2x}-\ln x,\quad x\ge1.
$$

则

$$
H(1)=0,
$$

且

$$
H'(x)=\frac12+\frac1{2x^2}-\frac1x
=\frac{(x-1)^2}{2x^2}\ge0.
$$

所以 $H(x)$ 在 $[1,+\infty)$ 上单调递增，$H(x)\ge H(1)=0$。因此

$$
\ln x\le\frac{x^2-1}{2x},
$$

即

$$
2x\ln x-x^2+1\le0.
$$

(2) 取

$$
x=\sqrt{1+\frac1n}\ge1.
$$

由 (1) 得

$$
2x\ln x\le x^2-1.
$$

代入得

$$
2\sqrt{1+\frac1n}\cdot\frac12\ln\left(1+\frac1n\right)
\le \left(1+\frac1n\right)-1.
$$

即

$$
\sqrt{1+\frac1n}\ln\left(1+\frac1n\right)\le\frac1n.
$$

两边除以正数 $\sqrt{1+\dfrac1n}$，得

$$
\ln\left(1+\frac1n\right)
\le\frac1{n\sqrt{1+\dfrac1n}}
=\frac1{\sqrt{n^2+n}}.
$$

所以

$$
\frac1{\sqrt{n^2+n}}\ge\ln\left(1+\frac1n\right).
$$

(3) 对每个 $k=1,2,\dots,n$，由 (2) 得

$$
\frac1{\sqrt{k^2+k}}\ge\ln\left(1+\frac1k\right)
=\ln(k+1)-\ln k.
$$

求和：

$$
a_n=\sum_{k=1}^n\frac1{\sqrt{k^2+k}}
\ge\sum_{k=1}^n\left[\ln(k+1)-\ln k\right]
=\ln(n+1).
$$

因为

$$
\ln(n+1)\to+\infty,
$$

所以

$$
a_n\to+\infty.
$$

又 $a_n>0$，故

$$
0<\frac1{a_n}\le\frac1{\ln(n+1)}\to0.
$$

由夹逼定理，

$$
\lim_{n\to\infty}\frac1{a_n}=0.
$$

**易错点**:  

- 第 (1) 问直接求导时，注意 $(2x\ln x)'=2\ln x+2$，不要漏掉 $2$。用 $H(x)=\dfrac{x^2-1}{2x}-\ln x$ 求导更安全，导数直接是 $\dfrac{(x-1)^2}{2x^2}\ge0$。  
- 第 (2) 问容易误代 $x=1+\dfrac1n$，这样放得太松，推不出目标不等式。根号 $\sqrt{n^2+n}$ 提示应代 $x=\sqrt{1+\dfrac1n}$。  
- 第 (3) 问要保证放缩方向是“下界”：

$$
a_n\ge\ln(n+1),
$$

不能把不等号方向写反。  
- 自检：$n=1$ 时第二问左边 $\approx0.707$，右边 $\approx0.693$；$n=2$ 时左边 $\approx0.408$，右边 $\approx0.405$，方向合理。第三问下界 $\ln(n+1)\to+\infty$，所以倒数趋于 $0$。  
注：按题面 OCR 最合理读法，本题三问均完整，无歧义。

**命题规律**:  

这是经典的“导数不等式 → 离散化放缩 → 数列极限”链条题。数学一中常见命题角度有：

1. 第一问给出一个辅助不等式，第二问通过换元把它转化为关于 $n$ 的离散不等式，第三问再用来证明极限或级数收敛性。  
2. 常见变式：把 $\sqrt{n^2+n}$ 换成 $\sqrt{n^2+an+b}$，或把 $\ln\left(1+\dfrac1n\right)$ 换成其他可望远镜求和的差分形式。  
3. 本质上本题是在证明正项级数 $\sum\dfrac1{\sqrt{n^2+n}}$ 发散，因为项 $\sim\dfrac1n$。若只看第三问，也可用比较法：

$$
\sqrt{k^2+k}\le k+1
\Rightarrow
\frac1{\sqrt{k^2+k}}\ge\frac1{k+1},
$$

但本题设计意图是引导使用第二问的对数型下界。  
4. 与 $\ln x\le x-1$、$\dfrac{x}{1+x}\le\ln(1+x)\le x$ 等常见对数不等式联系紧密。
