---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷二/FRQ
  - 计算题
  - 第二型曲线积分
  - 全微分求原函数
  - 积分与路径无关
  - 多元函数微分
points:
level:
---

# FRQ 第 18 题

![[_Attachments/题目识别/YBS5T/YBS5T-S2-Q18_题目.png|题目]]

设 $f(x)$ 在 $(-\infty, +\infty)$ 内有连续的导函数，求第二型曲线积分

$$
\int_L \frac{y}{x^2} [x^2 f(xy)-1] \mathrm{d}x + \left[\frac{1}{x}+xf(xy)\right] \mathrm{d}y,
$$

其中 $L$ 是从点 $A\left(\frac{2}{3}, 3\right)$ 到 $B(2,1)$ 的直线段.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S2-Q18_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

\[
\int_L \frac{y}{x^2}[x^2 f(xy)-1]\,dx+\left[\frac{1}{x}+x f(xy)\right]dy = -4.
\]

关键给分点：① 验证 $\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}$；② 构造原函数 $F(x,y)=\frac{y}{x}+G(xy)$，其中 $G'(t)=f(t)$；③ 代端点求差：$F(B)-F(A)=-4$。

**解题切入点**

本题是典型的“全微分求原函数”题。先检查两个分量的交叉偏导是否相等，若相等则积分与路径无关，立即转为求势函数；这就像算法竞赛中先判断“状态转移是否可逆/可哈希”，再在端点处 $O(1)$ 计算，而不是去参数化路径。

**推演**

设
$$
P(x,y)=\frac{y}{x^2}[x^2 f(xy)-1]=y f(xy)-\frac{y}{x^2},
\qquad
Q(x,y)=\frac{1}{x}+x f(xy).
$$

因为 $f$ 有连续导函数，可对 $P,Q$ 求偏导：
$$
\frac{\partial P}{\partial y}
= f(xy)+xy f'(xy)-\frac{1}{x^2},
$$
$$
\frac{\partial Q}{\partial x}
= -\frac{1}{x^2}+f(xy)+xy f'(xy).
$$
故
$$
\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x},
$$
且在右半平面 $x>0$（包含 $L$）上积分与路径无关。

令
$$
F(x,y)=\frac{y}{x}+G(xy),\qquad G'(t)=f(t).
$$
则
$$
F_x=-\frac{y}{x^2}+y f(xy)=P,\qquad
F_y=\frac{1}{x}+x f(xy)=Q.
$$
所以原积分为
$$
\int_L P\,dx+Q\,dy=F(B)-F(A).
$$

代入
$$
A\left(\frac{2}{3},3\right),\quad B(2,1),\quad xy=2
$$
得
$$
F(A)=\frac{3}{2/3}+G(2)=\frac{9}{2}+G(2),
$$
$$
F(B)=\frac{1}{2}+G(2).
$$
因此
$$
\int_L P\,dx+Q\,dy
=\left(\frac{1}{2}+G(2)\right)-\left(\frac{9}{2}+G(2)\right)
=-4.
$$

**易错点**

1. 不要直接参数化 $L$ 去硬算，因为 $f$ 未具体给出，参数化会引入 $f$ 的积分，无法化简；应先看出全微分。
2. 求 $F_x$ 时注意 $\frac{\partial}{\partial x}G(xy)=yG'(xy)=y f(xy)$，不要丢掉因子 $y$。
3. 定义域避开 $x=0$，本题直线段在 $x>0$，所以原函数可安全使用；若路径穿过 $y$ 轴需额外说明。
4. 端点代入时 $A$ 的 $\frac{y}{x}$ 是 $\frac{3}{2/3}=\frac{9}{2}$，不是 $\frac{2}{3}$。

**命题规律**

考研数学一常把“全微分/积分与路径无关”与含抽象函数 $f$ 的曲线积分结合。命题套路是：给出看似复杂的被积表达式，实则交叉偏导相等；解题核心是“验证恰当微分 + 找原函数 + 代端点”。复习时应熟练掌握 $P_y=Q_x$ 的判断，以及从 $P,Q$ 反求 $F$ 的凑微分或积分法。


> 来源：《26_余丙森五套卷（数一）》卷二 第 18 题
