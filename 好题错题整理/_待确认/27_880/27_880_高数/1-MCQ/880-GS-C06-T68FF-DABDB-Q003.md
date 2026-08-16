---
ctime: 2026-08-16 19:39:37
mtime: 2026-08-16 19:39:37
tags:
  - AM
  - 27_880/C06/b/MCQ
  - 计算题
  - 重积分及其应用
  - 二重积分
  - 极坐标变换
points:
level:
---

# MCQ 第 3 题

![[_Attachments/题目识别/880-GS/880-GS-C06-T68FF-DABDB-Q003_题目.png|题目]]

(3) $\int_{0}^{2} dx \int_{\sqrt{3}x}^{x} f\left(\sqrt{x^{2}+y^{2}}\right) dy = ($ ).

A. $\int_{\frac{\pi}{4}}^{\frac{\pi}{4}} d\theta \int_{0}^{2\sec\theta} f(r) r dr$

B. $\int_{\frac{\pi}{4}}^{\frac{\pi}{4}} d\theta \int_{0}^{2\sec\theta} f(r) r dr$

C. $-\int_{0}^{2\sqrt{2}} dr \int_{\frac{\pi}{4}}^{\frac{\pi}{4}} f(r) r d\theta - \int_{2\sqrt{2}}^{4} dr \int_{\frac{\pi}{3}}^{\frac{\pi}{3}} \arccos_{\frac{2}{r}} f(r) r d\theta$

D. $\int_{0}^{2\sqrt{2}} dr \int_{\frac{\pi}{4}}^{\frac{\pi}{3}} f(r) r d\theta + \int_{2\sqrt{2}}^{4} dr \int_{\frac{\pi}{3}}^{\frac{\pi}{3}} \arccos_{\frac{2}{r}} f(r) r d\theta$

---

## 答案

![[_Attachments/题目识别/880-答案/880-GS-C06-T68FF-DABDB-Q003_答案.png|答案]]

## V4 Pro Max 解析

**考点**:直角坐标二次积分化极坐标二次积分——先识别区域,注意内层积分上下限颠倒时符号的变化。

**解**

题面积分 $\int_0^2dx\int_{\sqrt3x}^{x}f(\sqrt{x^2+y^2})dy$。注意 $x\in(0,2)$ 时 $\sqrt3x>x$,即内层积分的上限 $x$ 小于下限 $\sqrt3x$,由定积分性质:

$$\int_{\sqrt3x}^{x}f\,dy=-\int_{x}^{\sqrt3x}f\,dy,$$

故原式 $=-\iint_R f(\sqrt{x^2+y^2})\,dxdy$,其中 $R=\{0\le x\le2,\ x\le y\le\sqrt3x\}$。

区域 $R$:介于直线 $y=x$($\theta=\frac{\pi}{4}$)与 $y=\sqrt3x$($\theta=\frac{\pi}{3}$)之间,且 $x\le2$(即 $r\cos\theta\le2\Rightarrow r\le2\sec\theta$,$\cos\theta>0$ 自动成立)。极坐标下

$$R:\ \frac{\pi}{4}\le\theta\le\frac{\pi}{3},\quad 0\le r\le2\sec\theta,\qquad dxdy=rdrd\theta,$$

故原式 $=-\int_{\pi/4}^{\pi/3}d\theta\int_0^{2\sec\theta}f(r)\,r\,dr$。

若写成先 $r$ 后 $\theta$:边界 $r=2\sec\theta$ 在 $\theta\in[\pi/4,\pi/3]$ 上对应 $r\in[2\sqrt2,4]$(端点 $(2,2)$ 处 $r=2\sqrt2$,$(2,2\sqrt3)$ 处 $r=4$),故

$$\iint_R f(r)r\,drd\theta=\int_0^{2\sqrt2}dr\int_{\pi/4}^{\pi/3}f(r)r\,d\theta+\int_{2\sqrt2}^{4}dr\int_{\arccos(2/r)}^{\pi/3}f(r)r\,d\theta,$$

从而原式 $=-\left[\int_0^{2\sqrt2}dr\int_{\pi/4}^{\pi/3}f(r)r\,d\theta+\int_{2\sqrt2}^{4}dr\int_{\arccos(2/r)}^{\pi/3}f(r)r\,d\theta\right]$,对应选项 C。

逐项判断:A 对应区域 $-\frac{\pi}{4}\le\theta\le\frac{\pi}{4}$(即 $-x\le y\le x$),区域不符;B 区域正确($x\le y\le\sqrt3x$)但少了负号,是最大陷阱;D 为 $\iint_R$ 本身(符号相反),错;C 对。

**答案**:C

**易错点**:选项文字 OCR 疑有乱码($\int_{\pi/4}^{\pi/4}$、$\arccos(2/r)$ 处);本题核心陷阱是 $x\in(0,2)$ 时 $\sqrt3x>x$,内层上下限颠倒,转化时必须保留负号,否则误选 B 或 D。若原书内层为 $\int_x^{\sqrt3x}$(正常顺序),则答案应取正号形式,请以原书核对。
