---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - PS
  - 26_姜晓千四套卷/卷三/FRQ
  - 计算题
  - 二维均匀分布
  - 变量变换
  - 协方差计算
  - 数学期望
  - 独立均匀分布
points:
level:
---

# FRQ 第 22 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S3-Q22_题目.png|题目]]

(22)（本题满分 12 分）

设二维随机变量 $(X,Y)$ 服从区域 $D=\{(x,y)| y \leq x \leq y+1,0 \leq y \leq 1\}$ 上的均匀分布, $Z=X-Y$.

(I) 求 $Z$ 的概率密度 $f_Z(z)$; (II) 求 $\operatorname{Cov}(X,Y)$.

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S3-Q22_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

(I) $Z$ 的概率密度为
$$
f_Z(z)=\begin{cases}1,&0\le z\le1,\\ 0,&\text{其他}.\end{cases}
$$
（端点 $z=0,1$ 处取任意值不影响概率密度。）

(II) $\operatorname{Cov}(X,Y)=\frac{1}{12}$。

关键给分点：正确写出区域面积与联合密度；用变量变换或分布函数求出 $f_Z$；正确求出 $E X,E Y,E XY$（或用协方差性质）；由 $\operatorname{Cov}(X,Y)=E(XY)-E X\,E Y$ 得到结果。

**解题切入点**

本题可看作“坐标变换”题：令 $U=X-Y,\ V=Y$，平行四边形区域 $D$ 被映射成单位正方形 $[0,1]^2$，故 $(U,V)$ 为两个独立均匀随机变量；于是 $X=U+V,\ Y=V$，密度与协方差都只需对标准均匀分布计算。类比算法竞赛中把复杂下标区间映射到标准区间。

**推演**

1. 区域面积与联合密度：
$$
|D|=\int_0^1\int_y^{y+1}dx\,dy=\int_0^1 1\,dy=1,
$$
所以 $(X,Y)$ 的联合密度为
$$
f_{X,Y}(x,y)=\begin{cases}1,&(x,y)\in D,\\ 0,&\text{其他}.\end{cases}
$$

2. 求 $f_Z(z)$。

令 $U=Z=X-Y,\ V=Y$，逆变换为 $X=U+V,\ Y=V$。雅可比行列式的绝对值为
$$
|J|=|x_u y_v-x_v y_u|=|1\cdot1-1\cdot0|=1.
$$
原区域 $D$ 变为 $0\le u\le1,\ 0\le v\le1$，所以 $(U,V)$ 在单位正方形上服从均匀分布，联合密度为 $1$。因此
$$
f_Z(u)=f_U(u)=\int_0^1 1\,dv=1,\quad 0\le u\le1.
$$
故
$$
f_Z(z)=\begin{cases}1,&0\le z\le1,\\ 0,&\text{其他}.\end{cases}
$$
自检：$\int_0^1 f_Z(z)\,dz=1$，且 $Z\in[0,1]$，结果合理。

3. 求 $\operatorname{Cov}(X,Y)$。

由 $U,V$ 独立且都服从 $[0,1]$ 上的均匀分布：
$$
E U=E V=\frac12,\qquad \operatorname{Var}(V)=\frac1{12}.
$$
又 $X=U+V,\ Y=V$，利用协方差双线性性：
$$
\operatorname{Cov}(X,Y)=\operatorname{Cov}(U+V,V)
=\operatorname{Cov}(U,V)+\operatorname{Var}(V)
=0+\frac1{12}=\frac1{12}.
$$

（等价地，用期望算：
$$
E X=1,\quad E Y=\frac12,\quad E(XY)=E(UV+V^2)=\frac12\cdot\frac12+\frac13=\frac7{12},
$$
故
$$
\operatorname{Cov}(X,Y)=\frac7{12}-1\cdot\frac12=\frac1{12}.
$$）

**易错点**

- 不要把 $D$ 当成矩形；二重积分限应写成 $0\le y\le1,\ y\le x\le y+1$。
- 求密度时不要忽略支撑区间，$Z$ 只在 $[0,1]$ 上有密度；端点取值不影响概率密度。
- 使用变量变换时，雅可比行列式要取绝对值，且区域对应关系要写对。
- $X,Y$ 不独立，不能把 $E(XY)$ 写成 $E X\,E Y$；本题是变换后 $U,V$ 独立才能分解。

**命题规律**

“二维均匀分布 + 变换 + 协方差”是数一概率论的高频小题/大题考点。常见套路是把非矩形区域通过线性变换化为正方形或矩形，从而转化为独立均匀分布；也可用分布函数法求 $Z$ 的密度。复习时应熟练掌握 Jacobi 变换、边缘密度、$E(XY)$ 与协方差公式，并注意区域边界。


> 来源：《26_姜晓千四套卷（数一）》卷三 第 22 题
