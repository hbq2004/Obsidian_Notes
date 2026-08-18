---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套二/FRQ
  - 计算题
  - 取整函数求导
  - 导数定义
  - 左右极限
  - 连续性讨论
  - 分段函数
points:
level:
---

# FRQ 第 18 题

![[_Attachments/题目识别/JJ8T/JJ8T-S2-Q18_题目.png|题目]]

18. （本题满分 12 分）设函数 $f(x) = [x] \cos \frac{\pi}{2} x$，试求 $f'(x)$ 的解析式，并讨论 $f'(x)$ 的连续性。（$[x]$ 为取整函数）


---

## DeepSeek V4 Flash Max

【考点】本题考查取整函数与三角函数的复合求导，以及分段函数在分界点的可导性与连续性。类比算法竞赛：取整函数是“分段常数”，求导需在整数点单独用导数定义判断，类似处理离散跳跃点。

【解】设 $f(x)=[x]\cos\left(\frac{\pi}{2}x\right)$。

1. **非整数点**：当 $x\in (k,k+1)$（$k\in\mathbb{Z}$）时，$[x]=k$ 为常数，故
$$
f'(x)=\frac{d}{dx}\left[k\cos\left(\frac{\pi}{2}x\right)\right]=-\frac{\pi}{2}k\sin\left(\frac{\pi}{2}x\right)=-\frac{\pi}{2}[x]\sin\left(\frac{\pi}{2}x\right).
$$

2. **整数点** $x=n$（$n\in\mathbb{Z}$）：先看连续性。函数值为 $f(n)=n\cos\left(\frac{\pi}{2}n\right)$。左极限：$x\to n^-$ 时 $[x]=n-1$，故 $f(n^-)=(n-1)\cos\left(\frac{\pi}{2}n\right)$；右极限：$f(n^+)=n\cos\left(\frac{\pi}{2}n\right)$。
   - 若 $n$ 为奇数，则 $\cos\left(\frac{\pi}{2}n\right)=0$，左右极限均等于 $0$，且 $f(n)=0$，故 $f$ 在奇数点连续。
   - 若 $n$ 为偶数，则 $\cos\left(\frac{\pi}{2}n\right)=\pm1\neq0$，左右极限不等，$f$ 不连续。

   由于可导必连续，偶数点不可导。对奇数点 $n$，利用导数定义：
   - 左导数：
   $$
   f'_-(n)=\lim_{x\to n^-}\frac{(n-1)\cos(\frac{\pi}{2}x)-0}{x-n}
   =\lim_{t\to0^-}\frac{(n-1)\cos(\frac{\pi}{2}(n+t))}{t}.
   $$
   因 $\cos(\frac{\pi}{2}n)=0$，故 $\cos(\frac{\pi}{2}(n+t))=-\sin(\frac{\pi}{2}n)\sin(\frac{\pi}{2}t)\sim -\sin(\frac{\pi}{2}n)\cdot\frac{\pi}{2}t$，所以
   $$
   f'_-(n)=-\frac{\pi}{2}(n-1)\sin\left(\frac{\pi}{2}n\right).
   $$
   - 右导数：同理
   $$
   f'_+(n)=\lim_{x\to n^+}\frac{n\cos(\frac{\pi}{2}x)-0}{x-n}
   =-\frac{\pi}{2}n\sin\left(\frac{\pi}{2}n\right).
   $$
   因 $n$ 为奇数时 $\sin(\frac{\pi}{2}n)\neq0$，故 $f'_-(n)\ne f'_+(n)$，所以奇数点也不可导。

   综上，$f'(x)$ 仅在 $x\notin\mathbb{Z}$ 时存在，即
$$
f'(x)=-\frac{\pi}{2}[x]\sin\left(\frac{\pi}{2}x\right),\quad x\notin\mathbb{Z}.
$$

3. **讨论 $f'(x)$ 的连续性**：在任意开区间 $(k,k+1)$ 内，$[x]$ 为常数，$\sin(\frac{\pi}{2}x)$ 连续，故 $f'(x)$ 连续。在整数点 $n$ 处 $f'(n)$ 无定义，但可考察左右极限：
$$
\lim_{x\to n^-}f'(x)=-\frac{\pi}{2}(n-1)\sin\left(\frac{\pi}{2}n\right),\quad
\lim_{x\to n^+}f'(x)=-\frac{\pi}{2}n\sin\left(\frac{\pi}{2}n\right).
$$
   - 若 $n$ 为偶数，$\sin(\frac{\pi}{2}n)=0$，左右极限均为 $0$，但 $f'(n)$ 不存在，故 $n$ 为可去间断点（若补充定义 $f'(n)=0$ 则连续）。
   - 若 $n$ 为奇数，$\sin(\frac{\pi}{2}n)=\pm1$，左右极限不相等，故 $n$ 为跳跃间断点。

因此，$f'(x)$ 在定义域（非整数点）上连续，在整数点处不连续。

【答案】$f'(x)$ 的解析式为
$$
\boxed{f'(x)=-\frac{\pi}{2}[x]\sin\left(\frac{\pi}{2}x\right),\quad x\notin\mathbb{Z}.}
$$
$f'(x)$ 在 $x\notin\mathbb{Z}$ 上连续；在偶数整数点处为可去间断，在奇数整数点处为跳跃间断（因定义为无定义，故整体不连续）。

关键给分点：① 非整数点求导正确；② 整数点连续性与可导性讨论（用导数定义）；③ 正确写出分段导数表达式；④ 对 $f'$ 在整数点处左右极限的分类讨论。

【易错点】容易直接对 $[x]$ 求导（$[x]$ 分段常数，不可用普通求导法则）；忽略整数点处需单侧导数定义判断；误以为 $f$ 在奇数点可导（实际左右导数不等）；讨论 $f'$ 连续性时误以为无定义处不可讨论，而应通过左右极限判断间断点类型。注意 $\cos(\frac{\pi}{2}x)$ 在奇数点为 $0$，偶数点为 $\pm1$。题面按 $f(x)=[x]\cos\left(\frac{\pi}{2}x\right)$ 理解（OCR 疑误，请核对原书）。

【命题规律】此类题常以取整函数、绝对值函数或符号函数与初等函数复合为背景，重点考查分段函数在分界点的导数和连续性。复习时应熟练运用导数定义计算单侧导数，并区分“连续”与“可导”的关系以及间断点分类。

---

## V4 Flash Max 解析

**答案**  
将 $\cos\frac{\pi}{2}x$ 理解为 $\cos\left(\frac{\pi}{2}x\right)$。令 $k=\frac{\pi}{2}$，则

$$
f'(x)=-\frac{\pi}{2}[x]\sin\left(\frac{\pi}{2}x\right),\qquad x\notin\mathbb Z .
$$

等价地，当 $x\in(n,n+1)$，$n\in\mathbb Z$ 时，

$$
f'(x)=-\frac{n\pi}{2}\sin\left(\frac{\pi x}{2}\right).
$$

在任意整数点 $m$ 处，$f'(m)$ 不存在。因此 $f'$ 在 $\mathbb R\setminus\mathbb Z$ 上连续；整数点处 $f'$ 无定义。若把整数点作为导函数的间断点分类：偶整数为可去间断点，奇整数为跳跃间断点。

---

**解题切入点**  
看到 $[x]$ 先想“阶梯函数”：它在每个区间 $(n,n+1)$ 内是常数 $n$，所以非整数点可以正常求导；整数点是“分块边界”，必须用左右极限、左右导数单独特判。这就像算法里的分治：块内直接算，边界单独处理。  
还要区分两个问题：**$f$ 在整数点是否可导** 与 **$f'$ 在整数点附近是否有极限、是否连续**，二者不能混为一谈。

---

**推演**  

令 $k=\dfrac{\pi}{2}$。

### 1. 非整数点求导

若 $x\in(n,n+1)$，则 $[x]=n$，所以

$$
f(x)=n\cos(kx).
$$

因为 $n$ 是常数，

$$
f'(x)=-nk\sin(kx)
=-\frac{n\pi}{2}\sin\left(\frac{\pi x}{2}\right).
$$

又因 $n=[x]$，即得

$$
f'(x)=-\frac{\pi}{2}[x]\sin\left(\frac{\pi}{2}x\right),\qquad x\notin\mathbb Z.
$$

### 2. 整数点处是否可导

设 $m\in\mathbb Z$，记

$$
c_m=\cos(km),\qquad s_m=\sin(km).
$$

在 $m$ 的左侧 $[x]=m-1$，右侧 $[x]=m$。

- 若 $m$ 为偶数，则

$$
c_m=\cos\left(\frac{m\pi}{2}\right)=\pm 1\ne 0.
$$

此时

$$
f(m^-)=(m-1)c_m,\qquad f(m)=mc_m,\qquad f(m^+)=mc_m.
$$

所以 $f(m^-)\ne f(m)$，$f$ 在 $m$ 处不连续，故 $f'(m)$ 不存在。

- 若 $m$ 为奇数，则

$$
c_m=0,
$$

所以 $f$ 在 $m$ 处连续。但左右导数分别为

$$
f'_+(m)=m(-ks_m)=-mk s_m,
$$

$$
f'_-(m)=(m-1)(-ks_m)=-(m-1)k s_m.
$$

因为 $m$ 为奇数时 $s_m=\sin\left(\frac{m\pi}{2}\right)=\pm1$，所以

$$
f'_+(m)-f'_-(m)=-k s_m\ne0.
$$

左右导数不相等，故 $f'(m)$ 仍不存在。

因此，$f'(m)$ 对一切整数 $m$ 都不存在。

### 3. 讨论 $f'(x)$ 的连续性

在非整数点 $x_0$，$[x]$ 在局部是常数，$f'(x)$ 是常数乘以连续函数 $\sin\left(\frac{\pi x}{2}\right)$，所以 $f'$ 在 $\mathbb R\setminus\mathbb Z$ 上连续。

在整数点 $m$ 处，$f'(m)$ 不存在，所以不能说是连续点。进一步看 $f'$ 的左右极限：

$$
\lim_{x\to m^-}f'(x)=-(m-1)k\sin(km),
$$

$$
\lim_{x\to m^+}f'(x)=-mk\sin(km).
$$

- 若 $m$ 为偶数，$\sin(km)=0$，左右极限都为 $0$，所以 $m$ 是 $f'$ 的可去间断点。
- 若 $m$ 为奇数，$\sin(km)=\pm1$，左右极限存在但不相等，所以 $m$ 是 $f'$ 的跳跃间断点。

---

**易错点**  
1. 不能在整数点直接对 $[x]$ 求导说导数为 $0$；$[x]$ 在整数点不连续，必须先检查可导性。  
2. 不要把“导函数的左右极限”当成“左右导数”。例如偶整数处 $f'(x)$ 左右极限都为 $0$，但 $f$ 在该点不连续，$f'(m)$ 仍然不存在。  
3. 自检：取 $m=1$。$x\in(0,1)$ 时 $f=0$，左导数为 $0$；$x\in(1,2)$ 时 $f=\cos\left(\frac{\pi x}{2}\right)$，右导数为 $-\frac{\pi}{2}$。左右导数不等，所以 $f'(1)$ 不存在，且 $f'$ 在 $1$ 处跳跃。  
4. 注：按 OCR 最合理读法，$\cos\frac{\pi}{2}x$ 理解为 $\cos\left(\frac{\pi}{2}x\right)$；若理解成 $\left(\cos\frac{\pi}{2}\right)x$，则函数恒为 $0$，题意与分值不符。

---

**命题规律**  
这类题常见考法是：先分段求导，再对分段点用导数定义判断可导性，最后讨论导函数的连续性与间断点类型。常见变式包括把 $\cos$ 换成 $\sin$，或改为 $[x]h(x)$ 的形式。  
可记忆为：若 $f(x)=[x]h(x)$，其中 $h$ 在整数点 $m$ 可导，则 $f$ 在 $m$ 可导的充要条件是

$$
h(m)=0,\qquad h'(m)=0.
$$

否则，$h(m)\ne0$ 时是跳跃导致不可导，$h(m)=0$ 但 $h'(m)\ne0$ 时是尖点导致不可导。
