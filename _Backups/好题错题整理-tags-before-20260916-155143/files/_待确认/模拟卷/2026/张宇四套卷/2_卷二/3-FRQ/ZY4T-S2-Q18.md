---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - AM
  - 26_张宇四套卷/卷二/FRQ
  - 计算题
  - 定积分几何应用
  - 周期函数积分
  - 比值审敛法
  - 幂级数和函数
  - 部分分式
points:
level:
---

# 解答题 第 18 题

![[_Attachments/题目识别/ZY4T/ZY4T-S2-Q18_题目.png|题目]]

设 $a_n$ 为 $y = x|\sin x|$ 在 $(0, n\pi)$ 上与 $x$ 轴所围成的平面图形的面积，$n=1,2,\cdots$.

(1) 求 $a_n$ 的表达式;

(2) 求 $\sum_{n=1}^{\infty} \frac{\pi \cdot x^{2n}}{\left(2 + \frac{1}{n}\right) a_n}$ 的收敛域与和函数.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S2-Q18_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(1) $a_n=n^2\pi\;(n=1,2,\cdots)$。

(2) 收敛域为 $[-1,1]$，和函数为
$$S(x)=\begin{cases}0,&x=0,\\ 2-\ln(1-x^2)-\frac{1}{|x|}\ln\frac{1+|x|}{1-|x|},&0<|x|<1,\\ 2-2\ln2,&|x|=1.\end{cases}$$

关键给分点：①分段积分求 $a_n$；②用 $a_n=n^2\pi$ 化简系数；③由 $\sum\frac1{n^2}$ 判断收敛域；④部分分式与已知展开求和函数；⑤端点值用极限/Abel 定理补出。

**解题切入点**

先求周期型面积，得到简单的 $a_n=n^2\pi$；于是幂级数化为 $\sum\frac{x^{2n}}{n(2n+1)}$。算法竞赛类比：先把生成函数的系数拆成部分分式，再用 $\sum\frac{t^n}{n}$ 与 $\sum\frac{t^n}{2n+1}$ 两个“板子”拼答案。

**推演**

(1) 因 $|\sin x|$ 以 $\pi$ 为周期，在 $[k\pi,(k+1)\pi]$ 上令 $u=x-k\pi$，则
$$\int_{k\pi}^{(k+1)\pi}x|\sin x|\,dx=\int_0^\pi(u+k\pi)\sin u\,du.$$
其中
$$\int_0^\pi u\sin u\,du=\pi,\qquad \int_0^\pi \sin u\,du=2.$$
故每段面积为 $\pi+2k\pi$，所以
$$a_n=\sum_{k=0}^{n-1}(\pi+2k\pi)=n\pi+2\pi\cdot\frac{n(n-1)}2=n^2\pi.$$

(2) 设
$$S(x)=\sum_{n=1}^{\infty}\frac{\pi x^{2n}}{\left(2+\frac1n\right)a_n}.$$
由 $a_n=n^2\pi$ 得
$$S(x)=\sum_{n=1}^{\infty}\frac{x^{2n}}{n(2n+1)}.$$

比值判别法：
$$\lim_{n\to\infty}\left|\frac{u_{n+1}}{u_n}\right|=|x|^2,$$
所以 $|x|<1$ 收敛，$|x|>1$ 发散；在 $x=\pm1$ 时原级数为 $\sum\frac1{n(2n+1)}$，与 $\sum\frac1{n^2}$ 同敛散，故收敛域为 $[-1,1]$。

求和：对 $0<|x|<1$，
$$\frac1{n(2n+1)}=\frac1n-\frac{2}{2n+1},$$
于是
$$S(x)=-\ln(1-x^2)-2\sum_{n=1}^{\infty}\frac{x^{2n}}{2n+1}.$$
令 $r=|x|$，则
$$\sum_{n=1}^{\infty}\frac{x^{2n}}{2n+1}=\frac1r\sum_{n=1}^{\infty}\frac{r^{2n+1}}{2n+1}=\frac1r\left(\frac12\ln\frac{1+r}{1-r}-r\right)=\frac1{2r}\ln\frac{1+r}{1-r}-1.$$
代入得
$$S(x)=2-\ln(1-x^2)-\frac{1}{|x|}\ln\frac{1+|x|}{1-|x|},\quad 0<|x|<1.$$
又 $S(0)=0$，且
$$S(\pm1)=\lim_{r\to1^-}\left[2-\ln(1-r^2)-\frac1r\ln\frac{1+r}{1-r}\right]=2-2\ln2.$$
故得和函数。

**易错点**

1. 误把 $\int_0^\pi\sin u\,du$ 写成 $\pi$，会得到错误的 $a_n$；本质是每段面积多出 $2k\pi$ 而非 $k\pi^2$。
2. 部分分式符号：$\frac1{n(2n+1)}=\frac1n-\frac2{2n+1}$，不是 $\frac2{2n+1}-\frac1n$，符号错则和函数整体变号。
3. $x\in[-1,1]$ 时开方应写 $|x|$；$x=0$、$x=\pm1$ 需单独处理，不能把含 $\ln(1-x^2)$ 的表达式直接代入端点。

**命题规律**

本题属于“几何面积+幂级数求和”的综合题：第一问给数列，第二问用数列化简系数。命题常见套路是周期型面积（$|\sin x|$）与 $n^2$ 阶系数凑成 $\frac1{n(2n+1)}$；复习时要把常见展开、部分分式拆分、端点收敛性判断练熟。此类题难点不在求导，而在系数化简和分段补点。


> 来源：《26_张宇四套卷（数一）》卷二 第 18 题
