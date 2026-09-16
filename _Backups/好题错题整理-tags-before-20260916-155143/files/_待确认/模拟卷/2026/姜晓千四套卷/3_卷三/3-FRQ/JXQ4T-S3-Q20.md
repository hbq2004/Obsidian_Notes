---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - AM
  - 26_姜晓千四套卷/卷三/FRQ
  - 计算题
  - 高斯公式
  - 第二型曲面积分
  - 奇点处理
  - 椭球面通量
  - 散度计算
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S3-Q20_题目.png|题目]]

设 $\Sigma$ 为球面 $(x-1)^{2} + y^{2} + z^{2} = a^{2}(a > 0, a \neq 1)$ 的外侧, 计算积分 $\iint_{\Sigma} \frac{x dy dz + y dz dx + z dx dy}{(x^{2} + y^{2} + 4z^{2})^{\frac{3}{2}}}.$

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S3-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结论：
$$
\iint_{\Sigma} \frac{x\,dy\,dz + y\,dz\,dx + z\,dx\,dy}{(x^{2}+y^{2}+4z^{2})^{3/2}}
=\begin{cases}
0,&0<a<1,\\
2\pi,&a>1.
\end{cases}
$$
（题面已排除 $a=1$。）

关键给分点：
1. 写出 $\mathbf F=(x,y,z)/(x^{2}+y^{2}+4z^{2})^{3/2}$，并算得 $\nabla\cdot \mathbf F=0$（除原点外）。
2. 当 $0<a<1$ 时，原点在 $\Sigma$ 所围区域外，直接用高斯公式得 $0$。
3. 当 $a>1$ 时，原点在区域内，需挖去小椭球 $x^{2}+y^{2}+4z^{2}=\varepsilon^{2}$。
4. 小椭球外侧通量为 $2\pi$，代回符号得原积分为 $2\pi$。

**解题切入点**

这相当于算法竞赛里的“拓扑贡献”题：无源场散度为 0，闭合曲面积分只取决于是否包住奇点。包住奇点时，换一个容易算的包围面（小椭球）计算。破题关键是先算散度，再按 $a<1$、$a>1$ 分类。

**推演**

设
$$
\mathbf F=(P,Q,R)=\left(\frac{x}{r^{3}},\frac{y}{r^{3}},\frac{z}{r^{3}}\right),\quad r^{2}=x^{2}+y^{2}+4z^{2}.
$$
原积分为
$$
I=\iint_{\Sigma} \mathbf F\cdot \mathbf n\,dS.
$$

计算散度：
$$
P_x=\frac{1}{r^{3}}-\frac{3x^{2}}{r^{5}},\quad
Q_y=\frac{1}{r^{3}}-\frac{3y^{2}}{r^{5}},
$$
$$
R_z=\frac{1}{r^{3}}-\frac{12z^{2}}{r^{5}}.
$$
因此
$$
\nabla\cdot \mathbf F
=\frac{3}{r^{3}}-\frac{3x^{2}+3y^{2}+12z^{2}}{r^{5}}
=\frac{3}{r^{3}}-\frac{3r^{2}}{r^{5}}=0
\quad ((x,y,z)\ne 0).
$$

(1) 若 $0<a<1$：$\Sigma$ 内部不含原点，$\mathbf F$ 在 $\Sigma$ 所围区域内连续可微，且散度为 0，故
$$
I=\iiint_{\Omega} \nabla\cdot \mathbf F\,dV=0.
$$

(2) 若 $a>1$：原点在 $\Sigma$ 内部。取小椭球
$$
E_\varepsilon:\quad x^{2}+y^{2}+4z^{2}=\varepsilon^{2}
$$
（$\varepsilon<a-1$，使它在 $\Sigma$ 内部），设其外侧单位法向量为 $\mathbf n_E$。令 $\Omega$ 为 $\Sigma$ 与 $E_\varepsilon$ 之间的区域。高斯公式中 $\Omega$ 的边界外法向在 $E_\varepsilon$ 上为 $-\mathbf n_E$，所以
$$
0=\iiint_{\Omega} \nabla\cdot \mathbf F\,dV
=\iint_{\Sigma} \mathbf F\cdot \mathbf n\,dS
+\iint_{E_\varepsilon}\mathbf F\cdot(-\mathbf n_E)\,dS.
$$
故
$$
I=\iint_{E_\varepsilon}\mathbf F\cdot \mathbf n_E\,dS.
$$

在 $E_\varepsilon$ 上 $r^{3}=\varepsilon^{3}$，且 $\mathbf F$ 与 $\mathbf G=(x,y,z)/\varepsilon^{3}$ 在该曲面上相同。用高斯公式求该通量：
$$
\nabla\cdot \mathbf G=\frac{3}{\varepsilon^{3}}.
$$
椭球 $x^{2}+y^{2}+4z^{2}\le \varepsilon^{2}$ 的体积为
$$
V=\frac{4\pi}{3}\cdot \varepsilon\cdot \varepsilon\cdot \frac{\varepsilon}{2}
=\frac{2\pi\varepsilon^{3}}{3}.
$$
故
$$
\iint_{E_\varepsilon}\mathbf F\cdot \mathbf n_E\,dS
=\iiint_{x^{2}+y^{2}+4z^{2}\le \varepsilon^{2}}\frac{3}{\varepsilon^{3}}\,dV
=\frac{3}{\varepsilon^{3}}V=2\pi.
$$
因此当 $a>1$ 时，$I=2\pi$。

回代检查：结果与 $\varepsilon$ 无关，符合 $\nabla\cdot \mathbf F=0$ 时通量只取决于是否包围奇点；也说明小椭球取法不影响答案。

综上：
$$
\boxed{I=
\begin{cases}
0, & 0<a<1,\\
2\pi, & a>1.
\end{cases}}
$$

**易错点**

- 若 $a>1$ 时直接对球内区域用高斯公式，会因原点奇点得到错误结果 $0$；必须先挖掉包含奇点的小椭球。
- 挖洞后的符号容易错：$\Omega$ 在小椭球上的外法向是指向原点一侧，即 $-\mathbf n_E$，不是 $\mathbf n_E$。
- 分母中的 $4z^{2}$ 使 $R_z$ 多出系数，散度中 $z^{2}$ 项是 $-12z^{2}/r^{5}$，不是 $-3z^{2}/r^{5}$。
- 小椭球不是小球，体积半轴为 $\varepsilon,\varepsilon,\varepsilon/2$，漏掉半轴 $1/2$ 会算成 $4\pi$。

**命题规律**

第二型曲面积分最爱考“高斯公式 + 奇点分类”。遇到分母含平方和的零点，应立刻检查散度；若散度为零，只判断曲面是否包围奇点，并把包围面换成容易计算的球或椭球。复习时多练“挖洞法”，并注意法向取向与符号，便能稳拿这类题。


> 来源：《26_姜晓千四套卷（数一）》卷三 第 20 题
