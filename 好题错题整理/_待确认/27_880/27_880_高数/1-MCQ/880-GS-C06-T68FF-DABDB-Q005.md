---
ctime: 2026-08-16 19:39:38
mtime: 2026-08-20 01:07:42
tags:
  - AM
  - 27_880/C06/b/MCQ
  - 重积分及其应用
  - 二重积分
  - 对称性
  - 面积计算
  - 星形线
points:
level:
---

# MCQ 第 5 题

![[_Attachments/题目识别/880-GS/880-GS-C06-T68FF-DABDB-Q005_题目.png|题目]]

(5) 设 $D_t$ 是 $x^{\frac{2}{3}} + y^{\frac{2}{3}} = t^{\frac{2}{3}}$ ($t > 0$) 所围区域，则 $\lim\limits_{t \to 0^+} \frac{1}{t^2} \iint_{D_t} (\sin x + \cos y) \, dx \, dy =$ \_ .

A. $\frac{\pi}{8}$

B. $\frac{\pi}{4}$

C. $\frac{3\pi}{8}$

D. $\frac{\pi}{2}$

---

## 答案

![[_Attachments/题目识别/880-答案/880-GS-C06-T68FF-DABDB-Q005_答案.png|答案]]

## V4 Pro Max 解析

**考点**:星形线(内摆线)区域上二重积分的极限——对称性消去奇函数项,积分化为区域面积加高阶小量。

**解**

$D_t:x^{2/3}+y^{2/3}\le t^{2/3}$ 关于两坐标轴均对称。

(1) $\sin x$ 关于 $x$ 为奇函数,而 $D_t$ 关于 $y$ 轴对称,故 $\iint_{D_t}\sin x\,dxdy=0$。

(2) 对 $\cos y$ 用展开 $\cos y=1-\frac{y^2}{2}+O(y^4)$:

$$\iint_{D_t}\cos y\,dxdy=\iint_{D_t}dxdy-\frac12\iint_{D_t}y^2\,dxdy+O(t^4).$$

先求 $D_t$ 面积。星形线参数方程 $x=t\cos^3\phi,\ y=t\sin^3\phi\ (\phi\in[0,2\pi))$,有 $dx=-3t\cos^2\phi\sin\phi\,d\phi$,$dy=3t\sin^2\phi\cos\phi\,d\phi$,则

$$x\,dy-y\,dx=3t^2\sin^2\phi\cos^2\phi\,d\phi=\frac{3t^2}{4}\sin^2(2\phi)\,d\phi,$$

$$S(D_t)=\frac12\oint_C x\,dy-y\,dx=\frac{3t^2}{8}\int_0^{2\pi}\sin^2(2\phi)\,d\phi=\frac{3\pi}{8}t^2.$$

(亦可用公式:星形线 $x^{2/3}+y^{2/3}=a^{2/3}$ 面积 $=\frac{3\pi}{8}a^2$。)

(3) 作伸缩 $x=t\tilde x,\ y=t\tilde y$,则 $\iint_{D_t}y^2dxdy=t^4\iint_{D_1}\tilde y^2d\tilde xd\tilde y=O(t^4)$。故

$$\frac{1}{t^2}\iint_{D_t}(\sin x+\cos y)\,dxdy=\frac{1}{t^2}\left[\frac{3\pi}{8}t^2+O(t^4)\right]\xrightarrow{t\to0^+}\frac{3\pi}{8}.$$

逐项判断:$\frac{\pi}{8}$、$\frac{\pi}{4}$、$\frac{\pi}{2}$ 均是星形线面积系数 $3\pi/8$ 的误算(如把面积公式记成 $\frac{\pi}{8}a^2$ 或 $\frac{\pi}{2}a^2$ 等),A、B、D 错,C 对。

**答案**:C

**易错点**:星形线面积 $\frac{3\pi}{8}a^2$ 易记错;$\cos y$ 展开后的 $y^2$ 项经伸缩是 $O(t^4)$,不影响极限,不必精确求 $\iint_{D_t}y^2$;$\sin x$ 项由对称性直接为 0。
