---
ctime: 2026-08-16 21:16:37
mtime: 2026-08-20 01:29:40
tags:
  - AM
  - 27_1000/C04/a/FIB
  - 计算题
  - 一元函数微分学的计算
  - 对数求导法
  - 复合函数求导
points:
level:
---

# FIB 第 6 题

![[_Attachments/题目识别/1000-GS/1000-GS-TAAABD5-Q006_题目.png|题目]]

6. 设 $y=\ln\sqrt{\frac{1-x}{1+x^{2}}}$，则 $\left.y'\right|＿{x=0}=$ \_ .

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-GS-TAAABD5-Q006_答案.png|答案]]

## V4 Pro Max 解析

**答案**：$y'(0)=-\dfrac12$

**切入点**：先化简再求导：$\ln\sqrt A=\frac12\ln A$，把商的平方根拆成两个对数之差，避开复合+商的冗长运算。类比"预处理化简"：能约分/展开的表达式先化简，复杂度立刻下降。

**推演**

$$y=\ln\sqrt{\frac{1-x}{1+x^2}}=\frac12\left[\ln(1-x)-\ln(1+x^2)\right]$$

求导：

$$y'=\frac12\left[-\frac{1}{1-x}-\frac{2x}{1+x^2}\right]$$

代入 $x=0$：

$$y'(0)=\frac12\left[-\frac{1}{1-0}-\frac{0}{1}\right]=-\frac12$$

**易错点**：直接把 $\sqrt{\frac{1-x}{1+x^2}}$ 当作 $\frac{1}{\sqrt{\frac{1-x}{1+x^2}}}$ 求导，符号或系数易错。先取 $\frac12\ln$ 再求导可避免开方与商的复合链。

**命题规律**：含根号、商的复合对数，先用对数性质 $(\ln\sqrt A=\frac12\ln A,\ \ln\frac ab=\ln a-\ln b)$ 拆开再求导，是固定套路。
