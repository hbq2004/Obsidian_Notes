---
ctime: 2026-08-24 15:13:02
mtime: 2026-08-24 15:13:02
tags:
  - AM
  - 26_余丙森五套卷/卷一/FIB
  - 计算题
  - 曲率圆
  - 泰勒展开
  - 函数极限
  - 重要极限
points:
level:
---

# FIB 第 11 题

![[_Attachments/题目识别/YBS5T/YBS5T-S1-Q11_题目.png|题目]]

设曲线 $y=f(x)$ 与曲线 $y=2\sin x - \ln(1+x)$ 在原点处相切, 且有相同的曲率圆, 则极限 $\lim_{n\to\infty}[nf(\frac{1}{n})]^n =$ \_.

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S1-Q11_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**  
【答案】:
$$\boxed{\sqrt{\mathrm{e}}}$$

**解题切入点**  
类似算法竞赛中由已知渐近展开求极限：先由几何条件定出 $f$ 的前几项，再按 $\left(1+\frac{a}{n}+o\left(\frac{1}{n}\right)\right)^n\to e^a$ 处理。

**推演**  
令 $g(x)=2\sin x-\ln(1+x)$，有
$$g(0)=0,\quad g'(x)=2\cos x-\frac{1}{1+x},\quad g'(0)=1,$$
$$g''(x)=-2\sin x+\frac{1}{(1+x)^2},\quad g''(0)=1.$$

由在原点相切得
$$f(0)=g(0)=0,\qquad f'(0)=g'(0)=1.$$

由有相同的曲率圆，且切线斜率不为竖直方向，圆心坐标由
$\left(x_0-\frac{y'(1+y'^2)}{y''},\,y_0+\frac{1+y'^2}{y''}\right)$
决定，因此还需
$$f''(0)=g''(0)=1.$$
（由曲率圆得到 $f''(0)=1$ 是关键给分点。）

于是 $f$ 在 $x=0$ 处的泰勒展开为
$$f(x)=f(0)+f'(0)x+\frac{1}{2} f''(0)x^2+o(x^2)=x+\frac{x^2}{2}+o(x^2).$$

令 $x=\frac{1}{n}$，则
$$nf\left(\frac{1}{n}\right)=n\left(\frac{1}{n}+\frac{1}{2n^2}+o\left(\frac{1}{n^2}\right)\right)=1+\frac{1}{2n}+o\left(\frac{1}{n}\right).$$

因此
$$\left[nf\left(\frac{1}{n}\right)\right]^n=\left(1+\frac{1}{2n}+o\left(\frac{1}{n}\right)\right)^n\to e^{1/2}=\sqrt{\mathrm{e}}.$$

**易错点**  
“相切”只给出 $f(0),f'(0)$，不要忘记由“同曲率圆”再给出 $f''(0)=1$。若只取 $f(x)\sim x$，会误得极限为 $1$。另外注意 $o\left(\frac{1}{n^2}\right)$ 乘 $n$ 后仍是 $o\left(\frac{1}{n}\right)$，不能随意当作 $0$。

**命题规律**  
本题把几何条件（切线和曲率圆）转化为函数 Taylor 展开系数，再求幂指型极限。复习时应熟悉曲线 $y=f(x)$ 的曲率圆与 $y''$ 的关系，并掌握 $\left(1+\frac{a}{n}+o\left(\frac{1}{n}\right)\right)^n\to e^a$ 的处理手法。


> 来源：《26_余丙森五套卷（数一）》卷一 第 11 题
