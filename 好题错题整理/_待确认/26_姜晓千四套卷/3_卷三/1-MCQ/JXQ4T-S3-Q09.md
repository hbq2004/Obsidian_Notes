---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - PS
  - 26_姜晓千四套卷/卷三/MCQ
  - 概念题
  - 联合分布函数
  - 边缘分布
  - 相互独立
  - 同分布
  - 均匀分布
points:
level:
---

# MCQ 第 9 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S3-Q09_题目.png|题目]]

设二维随机变量 $(X,Y)$ 的联合分布函数为
$$
F(x,y)=
\begin{cases}
0, & \min\{x,y\}<0 \\
\min\{x,y\}, & 0\le \min\{x,y\}<1 \\
1, & \min\{x,y\}\ge 1
\end{cases}
$$
则 ( )

(A) $X$ 与 $Y$ 相互独立,且同分布
(B) $X$ 与 $Y$ 相互独立,但不同分布
(C) $X$ 与 $Y$ 不独立,但同分布
(D) $X$ 与 $Y$ 不独立,且不同分布

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S3-Q09_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(C)。

$X,Y$ 的边缘分布均为 $U(0,1)$，因此同分布；但 $F(x,y)\ne F_X(x)F_Y(y)$，因此不独立。

**解题切入点**

本题考联合分布函数、边缘分布、独立性的判定。判定是否独立，只看联合分布函数能否分解为两个边缘分布函数的乘积；这类似于算法题中判断联合状态是否可分解为独立子问题，不能只比较边缘。

**推演**

记
$$
\varphi(t)=\begin{cases}0,&t<0\\t,&0\le t<1\\1,&t\ge1\end{cases}
$$
则
$$
F(x,y)=\varphi(\min\{x,y\}).
$$

1. 求边缘分布。
$$
F_X(x)=\lim_{y\to+\infty}F(x,y)=\lim_{y\to+\infty}\varphi(\min\{x,y\})=\varphi(x),
$$
故
$$
F_X(x)=\begin{cases}0,&x<0\\x,&0\le x<1\\1,&x\ge1,\end{cases}
$$
即 $X\sim U(0,1)$。同理
$$
F_Y(y)=\varphi(y),\quad Y\sim U(0,1).
$$
所以 $X$ 与 $Y$ 同分布。

2. 判独立性。
若 $X,Y$ 独立，则应有
$$
F(x,y)=F_X(x)F_Y(y)=\varphi(x)\varphi(y).
$$
但实际给定
$$
F(x,y)=\varphi(\min\{x,y\}).
$$
取 $x=y=\frac12$：
$$
F\left(\frac12,\frac12\right)=\varphi\left(\frac12\right)=\frac12,
$$
而
$$
F_X\left(\frac12\right)F_Y\left(\frac12\right)=\frac12\cdot\frac12=\frac14.
$$
两者不相等，故 $X,Y$ 不独立。

事实上，令 $U\sim U(0,1)$，取 $X=Y=U$，则
$$
P(X\le x,Y\le y)=P(U\le \min\{x,y\})=\varphi(\min\{x,y\}),
$$
与题给联合分布函数一致，说明这是完全正相依的极端情形。

逐项判断：

- (A) 错：$X,Y$ 同分布，但不独立。
- (B) 错：$X,Y$ 不独立，且边缘分布相同。
- (C) 对：$X,Y$ 不独立，但同分布。
- (D) 错：$X,Y$ 不同分布这一半错误。

**易错点**

- 不要把“同分布”当成“独立”。例如 $X=Y$ 时边缘分布相同，但二者完全不独立。
- 独立性要验证 $F(x,y)=F_X(x)F_Y(y)$，不能只看联合分布函数是否“简单”。
- $F(x,y)=\min\{F_X(x),F_Y(y)\}$ 是正相依上界，不是独立情形；独立应是乘积形式。

**命题规律**

考研常给特殊形式的二维分布函数，要求由 $F(x,y)$ 求边缘分布并判断独立性。核心工具是
$$
F_X(x)=F(x,+\infty),\quad F_Y(y)=F(+\infty,y),
$$
以及
$$
X,Y\text{ 独立}\iff F(x,y)=F_X(x)F_Y(y).
$$
复习时可用 $U(0,1)$ 及 $X=Y$ 等极端例子快速识别这类题。


> 来源：《26_姜晓千四套卷（数一）》卷三 第 9 题
