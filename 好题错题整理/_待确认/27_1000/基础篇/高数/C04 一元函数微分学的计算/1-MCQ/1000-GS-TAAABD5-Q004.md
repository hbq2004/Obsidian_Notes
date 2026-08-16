---
ctime: 2026-08-16 21:16:27
mtime: 2026-08-16 21:16:27
tags:
  - AM
  - 27_1000/C04/a/MCQ
  - 计算题
  - 一元函数微分学的计算
  - 复合函数求导
  - 链式法则
points:
level:
---

# MCQ 第 4 题

![[_Attachments/题目识别/1000-GS/1000-GS-TAAABD5-Q004_题目.png|题目]]

4. 设函数 $f(x)$ 可导，$f(1) = f'(1) = \frac{1}{4}$，若 $y(x) = e^{\sqrt{f(2x-1)}}$，则 $y'(1) =$ \_ 。

A. $\sqrt{e}$

B. $\frac{1}{4} \sqrt{e}$

C. $\frac{1}{2} \sqrt{e}$

D. $2\sqrt{e}$

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-GS-TAAABD5-Q004_答案.png|答案]]

## V4 Pro Max 解析

**答案**：C，$\dfrac12\sqrt e$

**切入点**：三层复合 $y=e^{\sqrt{f(2x-1)}}$，按"从外到内逐层剥离"求导。类比递归调用：外层指数 → 中层幂（开方）→ 内层线性替换 $2x-1$，每层各乘一个因子。

**推演**

记 $u=2x-1$，则 $y=e^{\sqrt{f(u)}}$。

$$y'(x)=e^{\sqrt{f(u)}}\cdot \frac{d}{dx}\sqrt{f(u)}=e^{\sqrt{f(u)}}\cdot \frac{f'(u)}{2\sqrt{f(u)}}\cdot u'=e^{\sqrt{f(u)}}\cdot \frac{f'(u)}{2\sqrt{f(u)}}\cdot 2$$

代入 $x=1$：$u=2\cdot1-1=1$，$f(1)=\frac14$，$f'(1)=\frac14$。

$$y(1)=e^{\sqrt{1/4}}=e^{1/2}=\sqrt e$$

$$y'(1)=\sqrt e\cdot \frac{1/4}{2\sqrt{1/4}}\cdot 2=\sqrt e\cdot\frac{1/4}{2\cdot\frac12}\cdot2=\sqrt e\cdot\frac{1/4}{1}\cdot2=\frac12\sqrt e$$

**易错点**：漏乘内层 $u'=2$，会得 $\frac14\sqrt e$（选项 B）。把 $\sqrt{f(2x-1)}$ 的导数写错成 $\dfrac{1}{2\sqrt{f(2x-1)}}f'(2x-1)$ 后忘记 $\times2$ 是最常见的失分点。逐层求导、每层对号入座。

**命题规律**：多层复合函数求导是高频基础题。模板：由外向内，$y'=\text{外层导}\times\text{中层导}\times\text{内层导}$，最后统一代入数值。
