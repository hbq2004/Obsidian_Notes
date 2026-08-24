---
ctime: 2026-08-23 23:04:13
mtime: 2026-08-23 23:04:13
tags:
  - PS
  - 26_姜晓千四套卷/卷四/FIB
  - 计算题
  - 归一化条件
  - 边缘密度函数
  - 条件概率密度
  - 分段积分区间
points:
level:
---

# FIB 第 16 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S4-Q16_题目.png|题目]]

设二维随机变量 $(X,Y)$ 的联合概率密度为 $f(x,y)=\begin{cases} c(x+y), & 0 \le y \le x \le 1 \\ 0, & \text{其他} \end{cases}$，则 $P\left\{ X > \frac{2}{3} \mid Y = \frac{1}{3} \right\} = \_\_\_\_\_\_$.

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S4-Q16_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
归一化得 $c=2$。在 $Y=\frac{1}{3}$ 下，$X$ 的条件密度为
$$f_{X|Y}(x|\frac13)=\frac{f(x,\frac13)}{f_Y(\frac13)}=\frac32x+\frac12,\quad \frac13\le x\le1.$$
因此
$$P\{X>\frac23\mid Y=\frac13\}=\int_{2/3}^{1}\left(\frac32x+\frac12\right)dx=\frac{7}{12}.$$

【答案】:
$$\boxed{\frac{7}{12}}$$

**解题切入点**
考查联合概率密度、边缘密度和条件概率密度。类似算法竞赛中先“预处理”出常数参数，再对目标区间做查询积分：先由归一化条件求 $c$，再对给定 $y$ 的条件密度积分。

**推演**
1. 由密度函数在全空间积分为 $1$ 求 $c$：
$$\int_0^1\int_0^x c(x+y)\,dy\,dx=c\int_0^1\left(x^2+\frac{x^2}{2}\right)dx=c\cdot\frac12=1,$$
故 $c=2$。

2. 求 $Y$ 的边缘密度。区域 $0\le y\le x\le1$ 中，固定 $y$ 时 $x\in[y,1]$：
$$f_Y(y)=\int_y^1 2(x+y)\,dx=1+2y-3y^2,\quad 0\le y\le1.$$
于是 $f_Y(\frac13)=1+\frac23-\frac13=\frac43$。

3. 由条件密度公式：
$$f_{X|Y}(x|\frac13)=\frac{f(x,\frac13)}{f_Y(\frac13)}=\frac{2(x+\frac13)}{\frac43}=\frac32x+\frac12,\quad \frac13\le x\le1.$$

4. 所求概率为条件密度在 $x>\frac23$ 上的积分：
$$P\{X>\frac23\mid Y=\frac13\}=\int_{2/3}^{1}\left(\frac32x+\frac12\right)dx=\left[\frac34x^2+\frac12x\right]_{2/3}^{1}=\frac54-\frac23=\frac{7}{12}.$$

**易错点**
- 事件 $\{Y=1/3\}$ 的概率为 $0$，不能直接套用古典条件概率公式 $P(A|B)=P(AB)/P(B)$，应使用条件密度。
- 条件密度中 $x$ 的范围受 $0\le y\le x\le1$ 限制：给定 $y$ 后是 $[y,1]$，不要写成 $[0,1]$。
- 求边缘密度 $f_Y(y)$ 时积分限是 $x$ 从 $y$ 到 $1$，颠倒会出错。

**命题规律**
二维连续型随机变量的条件概率是高频考点，常将归一化、边缘密度、条件密度串在一题中考查。复习时应重点练熟三角形区域上的积分上下限，以及给定 $Y=y$ 后化为 $X$ 的一维条件密度积分。


> 来源：《26_姜晓千四套卷（数一）》卷四 第 16 题
