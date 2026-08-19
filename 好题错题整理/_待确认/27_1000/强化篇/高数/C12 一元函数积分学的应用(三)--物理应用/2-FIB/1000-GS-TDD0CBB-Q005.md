---
ctime: 2026-08-16 21:49:50
mtime: 2026-08-20 01:07:41
tags:
  - AM
  - 27_1000/C12/b/FIB
  - 积分的物理应用
  - 形心
  - 定积分
points:
level:
---

# FIB 第 5 题

![[_Attachments/题目识别/1000-GS/1000-GS-TDD0CBB-Q005_题目.png|题目]]

5. 曲线 $y=e^{x}$ 与直线 $x=1$, $x=-1$ 及 $x$ 轴所围平面有界区域 $D$ 的形心为 \_ .

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-GS-TDD0CBB-Q005_答案.png|答案]]

## V4 Pro Max 解析

**答案**：$\Bigl(\dfrac{2}{e^{2}-1},\ \dfrac{e^{2}+1}{4e}\Bigr)$

**切入点**：均匀密度区域 $D:\,-1\le x\le1,\ 0\le y\le e^x$ 的形心，用公式 $\bar x=\frac{\int x\,dA}{A},\ \bar y=\frac{\int y\,dA}{A}$。

**推演**

面积 $A=\int_{-1}^1e^xdx=e-e^{-1}$。

$$\bar x=\frac1A\int_{-1}^1x\,e^xdx=\frac1A\bigl[e^x(x-1)\bigr]_{-1}^1=\frac{2e^{-1}}{e-e^{-1}}=\frac{2}{e^2-1}.$$

$$\bar y=\frac1A\int_{-1}^1\frac{e^{2x}}2dx=\frac1A\cdot\frac{e^2-e^{-2}}4=\frac{(e^2-e^{-2})e}{4(e^2-1)}=\frac{e^2+1}{4e}.$$

**易错点**：$\int xe^x=e^x(x-1)$ 代入上下限得 $2e^{-1}$；$\bar y$ 化简用 $e^2-e^{-2}=\frac{(e^2-1)(e^2+1)}{e^2}$。

**命题规律**：形心题 = 三个积分（面积、$x$ 矩、$y$ 矩）；对 $x$ 的指数函数区间，$\int xe^x$、$\int e^{2x}$ 都是标准原函数。
