---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
tags:
  - AM
  - 26_ep五套卷/套五/FIB
  - 计算题
  - 第一类曲面积分
  - 柱面参数化
  - 奇偶性积分
  - 二重积分化累次积分
points:
level:
---

# FIB 第 14 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q14_题目.png|题目]]

14. 曲面 $\Sigma$ 为柱面 $x^{2}+y^{2}=2y$ 被 $z=x^{2}+y^{2}$ 和平面 $z=0$ 所截下的部分，则 $\iint_{\Sigma}(2x+y^{2}+z)dS=$ \_


---

## 解析（AI 生成，仅供参考）

【考点】本题考查第一类曲面积分的计算，核心是将曲面Σ参数化后转化为二重积分。类比算法竞赛：遍历曲面上的每个点，将函数值乘以面积微元并求和，参数化降维是关键。本题柱面方程简洁，选用角度与高度参数化可简化运算。

【解】曲面Σ为柱面$x^2+y^2=2y$，即$x^2+(y-1)^2=1$，是中心在$(0,1,0)$、半径为1的竖直圆柱面。被$z=0$与$z=x^2+y^2$截下，在柱面上$x^2+y^2=2y$，故$z$从$0$到$2y$。

参数化柱面：设$y=1+\sin\theta$，$x=\cos\theta$，$z=z$，其中$\theta\in[0,2\pi)$，$z\in[0,2(1+\sin\theta)]$。

计算面积微元：$\mathbf r_\theta=(-\sin\theta,\cos\theta,0)$，$\mathbf r_z=(0,0,1)$，叉积模长$|\mathbf r_\theta\times\mathbf r_z|=\sqrt{\cos^2\theta+\sin^2\theta}=1$，故$dS=d\theta\,dz$。

被积函数在柱面上为：$2x+y^2+z=2\cos\theta+(1+\sin\theta)^2+z$。

于是
$$
\iint_\Sigma(2x+y^2+z)dS=\int_0^{2\pi}\int_0^{2(1+\sin\theta)}[2\cos\theta+(1+\sin\theta)^2+z]\,dz\,d\theta.
$$

先对$z$积分：
\begin{aligned}
\int_0^{2(1+\sin\theta)}[2\cos\theta+(1+\sin\theta)^2+z]dz
&=2(1+\sin\theta)[2\cos\theta+(1+\sin\theta)^2]+2(1+\sin\theta)^2\\
&=2(1+\sin\theta)[2\cos\theta+(1+\sin\theta)(\sin\theta+2)].
\end{aligned}

再对$\theta$积分：
$$
I=\int_0^{2\pi}2(1+\sin\theta)[2\cos\theta+(1+\sin\theta)(\sin\theta+2)]d\theta.
$$

展开并利用奇偶性：
\begin{aligned}
I&=\int_0^{2\pi}4\cos\theta(1+\sin\theta)d\theta+2\int_0^{2\pi}(1+\sin\theta)^2(\sin\theta+2)d\theta.
\end{aligned}

第一项：$\int_0^{2\pi}4\cos\theta\,d\theta=0$，$\int_0^{2\pi}4\cos\theta\sin\theta\,d\theta=0$（奇函数或周期积分）。

第二项：$(1+\sin\theta)^2(\sin\theta+2)=\sin^3\theta+4\sin^2\theta+5\sin\theta+2$。其中$\int_0^{2\pi}\sin^3\theta\,d\theta=0$，$\int_0^{2\pi}5\sin\theta\,d\theta=0$，而$\int_0^{2\pi}4\sin^2\theta\,d\theta=4\pi$，$\int_0^{2\pi}2\,d\theta=4\pi$。故第二项为$2(4\pi+4\pi)=16\pi$。

所以$I=16\pi$。

【答案】$\boxed{16\pi}$

【易错点】①柱面参数化时，$y=1+\sin\theta$，注意$z$上限是$2y=2(1+\sin\theta)$，而非$2$；②$dS$的模长计算要仔细，避免漏因子；③对$\theta$积分时，奇偶性可大量简化，直接暴力展开易出错。题面按标准柱面方程理解（OCR疑误，请核对原书）。

【命题规律】此类题常考第一类曲面积分，多取柱面或球面参数化，难点在确定积分范围与化简被积函数。复习时熟练掌握常见曲面参数化及面积微元，并善用对称性。

> AI 生成，仅供参考。

