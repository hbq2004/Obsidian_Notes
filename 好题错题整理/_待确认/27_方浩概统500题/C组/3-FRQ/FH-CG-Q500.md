---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 随机变量函数分布
  - 商的分布
  - 分布函数法
points:
level:
---

# FRQ 第 500 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q500_题目.png|题目]]

500 设随机变量 $X,Y$ 相互独立，且 $X,Y$ 的概率密度分别为

$$
f_X(x) = \begin{cases} \lambda\mathrm{e}^{-\lambda x}, & x>0, \\ 0, & x \leqslant 0, \end{cases} f_Y(y) = \begin{cases} 1, & 0<y<1, \\ 0, & 其他, \end{cases}
$$

且 $Z = \dfrac{X}{2Y}$，求 $Z$ 的概率密度 $f_Z(z)$.

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：  
由分布函数法得
$$
f_Z(z)=
\begin{cases}
\dfrac{1-e^{-2\lambda z}-2\lambda z e^{-2\lambda z}}{2\lambda z^2}, & z>0,\\[6pt]
0, & z\le 0.
\end{cases}
$$
理由：因为 $X,Y$ 独立，把 $F_Z(z)=P(X\le 2zY)$ 写成联合密度积分后对 $z$ 求导。

**解题切入点**：  
先判断 $Z$ 的取值范围。由于 $X>0,\ 0<Y<1$，所以 $Z>0$，因此 $z\le0$ 时密度为 $0$。  
连续型随机变量商的密度优先用“分布函数法”：将事件 $\{Z\le z\}$ 转化为二维平面上的区域，再对联合密度积分。这类似二维平面上的扫描线：固定 $Y=y$ 后，$X$ 的积分上限为 $2zy$，先积 $x$，再积 $y$。

**推演**：  
因 $X,Y$ 独立，联合概率密度为
$$
f_{X,Y}(x,y)=
\begin{cases}
\lambda e^{-\lambda x}, & x>0,\ 0<y<1,\\
0, & \text{其他}.
\end{cases}
$$

当 $z\le0$ 时，由于 $Z>0$，有
$$
F_Z(z)=P(Z\le z)=0,
$$
所以
$$
f_Z(z)=0.
$$

当 $z>0$ 时，
$$
F_Z(z)=P\left(\frac{X}{2Y}\le z\right)
=P(X\le 2zY).
$$

利用联合密度积分：
$$
F_Z(z)=\int_0^1\int_0^{2zy}\lambda e^{-\lambda x}\,dx\,dy
=\int_0^1\left(1-e^{-2\lambda zy}\right)dy.
$$

对 $z$ 求导：
$$
f_Z(z)=F'_Z(z)
=\int_0^1 2\lambda y e^{-2\lambda zy}\,dy.
$$

计算积分：
$$
\int_0^1 y e^{-2\lambda zy}\,dy
=\frac{1-e^{-2\lambda z}(1+2\lambda z)}{(2\lambda z)^2},
$$
因此
$$
f_Z(z)
=2\lambda\cdot \frac{1-e^{-2\lambda z}(1+2\lambda z)}{(2\lambda z)^2}
=\frac{1-e^{-2\lambda z}-2\lambda z e^{-2\lambda z}}{2\lambda z^2}.
$$

所以
$$
\boxed{
f_Z(z)=
\begin{cases}
\dfrac{1-e^{-2\lambda z}-2\lambda z e^{-2\lambda z}}{2\lambda z^2}, & z>0,\\[6pt]
0, & z\le0.
\end{cases}}
$$

**易错点**：  
- 容易漏写 $z\le0$ 时密度为 $0$；因为 $Z=\frac{X}{2Y}>0$，密度不能在全实轴上使用同一个表达式。  
- 转化不等式时要注意方向：当 $z>0$ 时，$Z\le z\Leftrightarrow X\le 2zY$；若 $z\le0$，事件概率为 $0$。  
- 对分布函数求导时，容易在商式求导中出错。可改为“先积分再对参数求导”的方法，或直接用商的密度公式验证。  
- 若使用变量变换公式，不要忘记 Jacobian 因子 $y$，以及 $Z=\frac12\frac{X}{Y}$ 中的因子 $2$。

**命题规律**：  
本题是二维连续型随机变量函数的分布，尤其是“商”的分布，属于考研数学一常考题型。常见变式包括 $X/Y$、$XY$、$X/(X+Y)$、$\min(X,Y)$、$\max(X,Y)$ 等。复习时建议熟练掌握分布函数法和变量变换法，先定支持集，再画积分区域；算出结果后用归一化条件
$$
\int_{-\infty}^{+\infty}f_Z(z)\,dz=1
$$
检验。

**知识点**：  
随机变量函数的分布、商的分布公式、分布函数法、变量变换法

---

> 来源：方浩概率统计进阶500题做题本 第183页 · C组
