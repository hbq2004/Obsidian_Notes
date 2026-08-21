---
ctime: 2026-08-16 19:39:38
mtime: 2026-08-16 19:39:38
tags:
  - AM
  - 27_880/C06/b/MCQ
  - 计算题
  - 重积分及其应用
  - 二重积分
  - 对称性
  - 函数方程
points:
level:
---

# MCQ 第 4 题

![[_Attachments/题目识别/880-GS/880-GS-C06-T68FF-DABDB-Q004_题目.png|题目]]

(4) 设 $D$ 是以 $(1,1)$、$(-1,1)$ 和 $(-1,-1)$ 为顶点的三角形区域，$D_1$ 是 $D$ 在第一象限的部分，且 $f(x,y)=xy+\iint_D f(x,y)\,dx\,dy$，其中 $f(x,y)$ 在 $D$ 上连续，则().

A. $\iint_D f(x,y)\,dx\,dy=\iint_{D_1} f(x,y)\,dx\,dy$

B. $\iint_D f(x,y)\,dx\,dy=2\iint_{D_1} f(x,y)\,dx\,dy$

C. $\iint_D f(x,y)\,dx\,dy=\iint_D f(y,x)\,dx\,dy$

D. $\iint_D f(x,y)\,dx\,dy=2\iint_{D_1} f(y,x)\,dx\,dy$

---

## 答案

![[_Attachments/题目识别/880-答案/880-GS-C06-T68FF-DABDB-Q004_答案.png|答案]]

## V4 Pro Max 解析

**考点**:含二重积分的函数方程——把 $\iint_D f$ 视为常数解出 $f$,再用对称性/直接计算判断各等式。

**解**

设 $C=\iint_D f(x,y)\,dxdy$(常数)。由 $f(x,y)=xy+C$,两边在 $D$ 上积分:

$$C=\iint_D xy\,dxdy+C\cdot S_D,$$

其中 $S_D$ 为 $D$ 的面积。$D$ 是以 $(1,1),(-1,1),(-1,-1)$ 为顶点的三角形,即 $D=\{-1\le x\le1,\ x\le y\le1\}$(斜边 $y=x$),两直角边均为 2,故 $S_D=2$。

计算 $\iint_D xy\,dxdy$:

$$\iint_D xy\,dxdy=\int_{-1}^{1}x\,dx\int_{x}^{1}y\,dy=\int_{-1}^{1}\frac{x(1-x^2)}{2}dx=0$$

(被积函数 $x(1-x^2)$ 为奇函数,在对称区间上积分为 0)。代入得 $C=0+C\cdot2$,故 $C=0$,即 $\iint_D f\,dxdy=0$,从而 $f(x,y)=xy$。

逐项判断:A:左边 $=0$,右边 $\iint_{D_1}xy\,dxdy>0$($D_1$ 为第一象限部分,内部 $xy>0$),不成立;B:右边 $2\iint_{D_1}xy>0\ne0$,不成立;C:左边 $\iint_Df(x,y)=0$,右边 $\iint_Df(y,x)=\iint_Dxy\,dxdy=0$,成立;D:右边 $2\iint_{D_1}f(y,x)=2\iint_{D_1}xy>0\ne0$,不成立。

**答案**:C

**易错点**:把 $\iint_Df$ 当常数代入时,积分后要乘面积 $S_D=2$,得到 $C=2C$ 才能解出 $C=0$;判断选项的关键是 $\iint_Dxy=0$(奇函数)与 $\iint_{D_1}xy>0$ 的对比。
