---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-20 01:32:04
tags:
  - PS
  - 26_ep最后一卷/套五/MCQ
  - 计算题
  - 条件分布函数
  - 条件概率密度
  - 边缘密度函数
  - 二维连续型随机变量
points:
level:
---

# MCQ 第 8 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q08_题目.png|题目]]

8. 设二维随机变量 $(X, Y)$ 的概率密度函数为 $f(x, y) = \begin{cases} 1, & 0 < x < 1, |y| < x, \\ 0, & 其他, \end{cases}$，则条件分布函数值 $F_{X|Y}\left(\frac{1}{2} \middle| \frac{1}{3}\right) = ( )$

A. 0 
B. $\frac{1}{2}$ 
C. $\frac{1}{3}$ 
D. $\frac{1}{4}$


---

## DeepSeek V4 Flash Max

【考点】本题考查条件分布函数的计算，关键先求边缘密度和条件密度。类比算法竞赛：给定一个二维区域上的均匀分布，求某一条件切片上的概率，本质是几何比例问题。

【解】由题意，联合密度 $f(x,y)=1$ 的区域为 $D=\{(x,y):0<x<1,\ |y|<x\}$，即 $0<x<1,\ -x<y<x$。

1. 先求 $Y$ 的边缘密度函数。对于固定 $y$，必须有 $-1<y<1$ 且 $x>|y|$，同时 $x<1$，因此
$$
f_Y(y)=\int_{|y|}^{1} 1\,dx = 1-|y|,\quad -1<y<1.
$$
所以
$$
f_Y\left(\frac13\right)=1-\frac13=\frac23.
$$

2. 求条件密度函数 $f_{X|Y}(x|y)=\dfrac{f(x,y)}{f_Y(y)}$。当 $y=\frac13$ 时，要求 $f_Y(\frac13)>0$，且 $|y|<x<1$，即 $\frac13<x<1$。于是
$$
f_{X|Y}\left(x\,\middle|\,\frac13\right)=\frac{1}{f_Y(1/3)}=\frac{1}{2/3}=\frac32,\quad \frac13<x<1,
$$
其余为 $0$。

3. 条件分布函数值 $F_{X|Y}\left(\frac12\,\middle|\,\frac13\right)=P\left(X\le \frac12\,\middle|\,Y=\frac13\right)$。因为条件密度在 $x<\frac13$ 时为 $0$，所以
$$
F_{X|Y}\left(\frac12\,\middle|\,\frac13\right)=\int_{-\infty}^{1/2} f_{X|Y}\left(x\,\middle|\,\frac13\right)dx=\int_{1/3}^{1/2} \frac32\,dx = \frac32\cdot\left(\frac12-\frac13\right)=\frac32\cdot\frac16=\frac14.
$$

【答案】选 (D) $\frac14$。

逐项分析：
- (A) $0$：错误。若误以为条件区域内 $X$ 的最小可能值大于 $\frac12$？其实 $\frac12$ 在 $\frac13$ 与 $1$ 之间，故概率非零。
- (B) $\frac12$：错误。这是按 $X$ 在 $(0,1)$ 上均匀分布直接算 $P(X\le 1/2)$ 得到的，但给定 $Y=1/3$ 后 $X$ 的下限不再是 $0$ 而是 $1/3$，因此概率缩小。
- (C) $\frac13$：错误。可能是误认为区间长度为 $1/2-1/3=1/6$ 后未乘以密度 $3/2$，或边缘密度误算为 $1$。
- (D) $\frac14$：正确，如上计算。

【易错点】1. 忘记先求边缘密度，直接对联合密度积分得 $1/2$。2. 条件密度时忽略 $X$ 的有效范围 $|y|<x<1$，导致积分下限错误。3. 混淆条件分布函数 $F_{X|Y}(x|y)$ 与联合分布函数。4. 计算 $f_Y(y)$ 时积分区间写错。防错方法：先画出区域图，明确 $x$ 与 $y$ 的依赖关系；条件概率本质是固定 $Y=y$ 的切片上按长度（或面积）比例计算。

【命题规律】此类题常考二维连续型随机变量的条件分布，通常给出三角形或矩形区域上的均匀分布，利用几何比例即可快速求解。复习时需熟练掌握边缘密度、条件密度公式，并注意条件分布函数的定义。多做类似图形题，建立几何直观。

---

## V4 Flash Max 解析

**答案**: D。因为给定 $Y=\frac13$ 后，$X$ 在 $\left(\frac13,1\right)$ 上服从均匀分布，所以  
$$
F_{X\mid Y}\left(\frac12\mid\frac13\right)=P\left(X\le \frac12\mid Y=\frac13\right)
=\frac{\frac12-\frac13}{1-\frac13}=\frac14.
$$

**解题切入点**: 连续型条件分布不能直接算 $P(Y=y)$，而是用条件密度  
$$
f_{X\mid Y}(x\mid y)=\frac{f(x,y)}{f_Y(y)}.
$$  
本题联合密度为常数 $1$，所以固定 $Y=\frac13$ 后，只需看支撑区域与直线 $y=\frac13$ 的交集，再归一化。类似算法竞赛里“固定一维后转化为区间长度比”的思路。

**推演**:  
联合密度非零区域为  
$$
0<x<1,\quad |y|<x.
$$

先求 $Y$ 的边缘密度。固定 $y$，由 $|y|<x<1$，得  
$$
f_Y(y)=\int_{|y|}^{1}1\,dx=1-|y|,\quad |y|<1.
$$

因此  
$$
f_Y\left(\frac13\right)=1-\frac13=\frac23.
$$

于是给定 $Y=\frac13$ 时，$X$ 的条件密度为  
$$
f_{X\mid Y}\left(x\mid \frac13\right)
=\frac{f\left(x,\frac13\right)}{f_Y\left(\frac13\right)}
=\frac{1}{2/3}=\frac32,
$$
其中 $x$ 需满足支撑条件  
$$
|y|<x<1 \Rightarrow \frac13<x<1.
$$

所以  
$$
F_{X\mid Y}\left(\frac12\mid\frac13\right)
=\int_{-\infty}^{1/2} f_{X\mid Y}\left(x\mid\frac13\right)\,dx
=\int_{1/3}^{1/2}\frac32\,dx
=\frac32\left(\frac12-\frac13\right)
=\frac14.
$$

几何上也可直接看区间长度比：  
$$
\frac{\left(\frac13,\frac12\right)\text{的长度}}{\left(\frac13,1\right)\text{的长度}}
=\frac{\frac16}{\frac23}=\frac14.
$$

**易错点**:  
- 容易误把条件密度看成原密度 $1$，从而直接算 $F=\frac12-0=\frac12$，漏掉条件支撑起点 $x>\frac13$。  
- 不要把条件分布函数当成联合分布函数来求偏导；连续型条件分布应通过 $f_{X\mid Y}$ 积分。  
- 自检：$\int_{1/3}^{1}\frac32\,dx=1$，说明条件密度归一化正确；再算 $\int_{1/3}^{1/2}\frac32\,dx=\frac14$，答案合理。  

**命题规律**:  
本题是“二维均匀分布 + 条件分布”的典型题，核心是固定一个变量后看另一个变量的支撑区间。常见变式包括：  
1. 给定 $Y=y$ 求条件期望 $E(X\mid Y=y)$；  
2. 联合密度不是常数时，需要先求边缘密度再相除；  
3. 把区域换成三角形、梯形或圆域，本质仍是“固定一维后的截线归一化”。  
这类题与几何概型、定积分求面积结合紧密，也是数一常考的基础计算题。
