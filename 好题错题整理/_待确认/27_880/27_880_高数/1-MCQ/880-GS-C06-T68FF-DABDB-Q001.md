---
ctime: 2026-08-16 19:39:36
mtime: 2026-08-20 01:07:42
tags:
  - AM
  - 27_880/C06/b/MCQ
  - 重积分及其应用
  - 二重积分
  - 极坐标变换
  - 积分大小比较
points:
level:
---

# MCQ 第 1 题

![[_Attachments/题目识别/880-GS/880-GS-C06-T68FF-DABDB-Q001_题目.png|题目]]

(1) $I_1 = \iint_D \cos \sqrt{x^2 + y^2} \, dx \, dy$，$I_2 = \iint_D \cos(x^2 + y^2) \, dx \, dy$，$I_3 = \iint_D \cos(x^2 + y^2)^2 \, dx \, dy$，$D: x^2 + y^2 \leq 1$，则( )。

A. $I_1 > I_2 > I_3$

B. $I_1 < I_2 < I_3$

C. $I_2 > I_1 > I_3$

D. $I_3 > I_1 > I_2$

---

## 答案

![[_Attachments/题目识别/880-答案/880-GS-C06-T68FF-DABDB-Q001_答案.png|答案]]

## V4 Pro Max 解析

**考点**:单位圆盘上含 $\cos$ 的二重积分大小比较——先化极坐标为单变量定积分,用被积函数保序性结合实际计算确定次序。

**解**

$D:x^2+y^2\le1$,各被积函数只与 $r=\sqrt{x^2+y^2}$ 有关。极坐标 $x=r\cos\theta,\ y=r\sin\theta$,则 $dxdy=rdrd\theta$,区域为 $0\le r\le1,\ 0\le\theta\le2\pi$。按题面 $\cos(x^2+y^2)^2$ 的规范读法,取 $I_3=\iint_D\big[\cos(x^2+y^2)\big]^2dxdy$。

先由保序性得两组关系:对 $0<r<1$ 有 $r^2<r$,而 $\cos u$ 在 $(0,1)$ 上单调递减,故 $\cos(r^2)>\cos r$,即逐点 $\cos(x^2+y^2)>\cos\sqrt{x^2+y^2}$,所以 $I_2>I_1$;又 $0<\cos(r^2)\le1$,故 $\cos^2(r^2)\le\cos(r^2)$,所以 $I_3<I_2$。但 $\cos^2(r^2)$ 与 $\cos r$ 在 $(0,1)$ 上大小不恒定(两曲线相交),$I_1$ 与 $I_3$ 必须实际计算:

$$I_1=\int_0^{2\pi}d\theta\int_0^1 r\cos r\,dr=2\pi\big[r\sin r+\cos r\big]_0^1=2\pi(\sin1+\cos1-1),$$

对 $I_3$ 令 $u=r^2$(则 $2\pi rdr=\pi du$):

$$I_3=\pi\int_0^1\cos^2u\,du=\frac{\pi}{2}\int_0^1(1+\cos2u)\,du=\frac{\pi}{2}\left(1+\frac{\sin2}{2}\right).$$

取 $\sin1\approx0.8415,\ \cos1\approx0.5403,\ \sin2\approx0.9093$:

$$I_1\approx2\pi\times0.3818\approx2.399,\qquad I_3\approx\frac{\pi}{2}\times1.4546\approx2.285,$$

故 $I_2>I_1>I_3$,即 $I_2\approx2.643>I_1\approx2.399>I_3\approx2.285$。

逐项判断:A($I_1>I_2>I_3$)错在不知 $I_2>I_1$;B($I_1<I_2<I_3$)错在把 $I_3$ 当成最大(忽略 $\cos^2\le\cos$ 或把 $I_3$ 误读为 $\cos[(x^2+y^2)^2]$ 的陷阱);D($I_3>I_1>I_2$)错得最离谱;C 对。

**答案**:C

**易错点**:$I_2>I_1$、$I_3<I_2$ 可由保序性直接看出,但 $I_1$ 与 $I_3$ 的大小需实际计算($\cos^2(r^2)$ 与 $\cos r$ 在 $(0,1)$ 上交叉,点比较失效);本题按 $I_3=[\cos(x^2+y^2)]^2$ 解,若原书 $I_3$ 指 $\cos[(x^2+y^2)^2]$(即 $\cos r^4$),则结论会变为 $I_1<I_2<I_3$(选 B),属 OCR 歧义,请以原书为准。
