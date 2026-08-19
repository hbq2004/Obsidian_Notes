---
ctime: 2026-08-16 21:46:48
mtime: 2026-08-20 01:07:41
tags:
  - AM
  - 27_1000/C12/b/MCQ
  - 积分的物理应用
  - 形心
  - 极坐标
  - 二重积分
points:
level:
---

# MCQ 第 4 题

![[_Attachments/题目识别/1000-GS/1000-GS-TDD0CBB-Q004_题目.png|题目]]

4. 设有半圆形板: $x^2 + y^2 \leq a^2 (y \geq 0)$，它在点 $P(x, y)$ 的密度与点 $P$ 到原点的距离成正比，则半圆形板的重心坐标为(\_)。

A. $(0, \frac{\pi a}{3})$

B. $(0, \frac{\pi a}{2})$

C. $(0, \frac{4a}{3\pi})$

D. $(0, \frac{3a}{2\pi})$

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-GS-TDD0CBB-Q004_答案.png|答案]]

## V4 Pro Max 解析

**答案**：D. $\Bigl(0,\dfrac{3a}{2\pi}\Bigr)$

**切入点**：密度 $\delta=k\sqrt{x^2+y^2}=kr$，用极坐标求 $\iint\delta\,dA$ 与 $\iint y\,\delta\,dA$，对称性得 $\bar x=0$。

**推演**

半圆 $x^2+y^2\le a^2$（$y\ge0$），极坐标 $0\le r\le a,\ 0\le\theta\le\pi$，$\delta=kr$，$y=r\sin\theta$。

$$\int dm=\iint kr\cdot r\,drd\theta=k\int_0^\pi d\theta\int_0^a r^2dr=k\pi\cdot\frac{a^3}{3}=\frac{k\pi a^3}{3}.$$

$$\int y\,dm=\iint(r\sin\theta)(kr)(r\,drd\theta)=k\int_0^\pi\sin\theta\,d\theta\int_0^a r^3dr=k\cdot2\cdot\frac{a^4}{4}=\frac{k a^4}{2}.$$

$$\bar y=\frac{\int y\,dm}{\int dm}=\frac{k a^4/2}{k\pi a^3/3}=\frac{3a}{2\pi}.$$

由对称性 $\bar x=0$，重心 $\bigl(0,\frac{3a}{2\pi}\bigr)$。

**易错点**：密度与距离成正比是 $kr$（非常数），极坐标下 $dA=r\,drd\theta$ 多一个 $r$；$\int_0^\pi\sin\theta\,d\theta=2$。

**命题规律**：变密度薄板的重心（质心）用 $\bar y=\frac{\int y\delta\,dA}{\int\delta\,dA}$，对称性直接消去一个坐标。
