---
ctime: 2026-08-22 05:15:01
mtime: 2026-08-22 05:15:01
tags:
  - AM
  - 27_模拟卷概念题摘选/余炳森五套卷卷一
  - 概念题
  - 偏导数定义
  - 可微性判定
  - 偏导数连续性
  - 分段函数处理
  - 极限估值不等式
points:
level:
---

# MCQ 第 40 题

![[_Attachments/题目识别/27_模拟卷概念题摘选-题目/MNJ-Q040_题目.png|题目]]

设函数 $f(x,y) = \begin{cases} x^3y^2, & xy \neq 0, \\ x^3, & y = 0, \\ y^2, & x = 0, \end{cases}$ 则下列选项正确的是 (　　).

(A) $f(x,y)$ 在 $(0,0)$ 处可微，且 $\frac{\partial f(x,y)}{\partial x}$ 在 $(0,0)$ 处连续

(B) $f(x,y)$ 在 $(0,0)$ 处可微，且 $\frac{\partial f(x,y)}{\partial x}$ 在 $(0,0)$ 处不连续

(C) $f(x,y)$ 在 $(0,0)$ 处不可微，且 $\frac{\partial f(x,y)}{\partial x}$ 在 $(0,0)$ 处连续

(D) $f(x,y)$ 在 $(0,0)$ 处不可微，且 $\frac{\partial f(x,y)}{\partial x}$ 在 $(0,0)$ 处不连续

> 考点批注：多元函数可微性

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 **(A)**。核心理由：$f(x,y)$ 在 $(0,0)$ 处可微，且 $\frac{\partial f}{\partial x}$ 在 $(0,0)$ 处连续。

**解题切入点**：此题是分段函数在原点处的性质判断，核心是“用定义处理特殊点”。拿到题先明确两点：① 求偏导数在原点必须用定义；② 判断可微性需验证极限 $\lim_{(\Delta x,\Delta y)\to(0,0)}\frac{\Delta f - f_x\Delta x - f_y\Delta y}{\sqrt{\Delta x^2+\Delta y^2}}=0$。可类比算法竞赛中“分情况讨论边界条件”，逐路径验证极限。

**推演**：
- **求偏导数**  
  由定义：
  $$
  f_x(0,0)=\lim_{h\to0}\frac{f(h,0)-f(0,0)}{h}
  =\lim_{h\to0}\frac{h^3}{h}=0,
  $$
  $$
  f_y(0,0)=\lim_{k\to0}\frac{f(0,k)-f(0,0)}{k}
  =\lim_{k\to0}\frac{k^2}{k}=0.
  $$

- **判断可微性**  
  需验证
  $$
  \lim_{(\Delta x,\Delta y)\to(0,0)}\frac{f(\Delta x,\Delta y)-0-0\cdot\Delta x-0\cdot\Delta y}{\sqrt{\Delta x^2+\Delta y^2}}=0.
  $$
  分情况：
  - 当 $\Delta x\Delta y\neq0$ 时，$f=\Delta x^3\Delta y^2$，
    $$
    \frac{|\Delta x^3\Delta y^2|}{\sqrt{\Delta x^2+\Delta y^2}}
    \le \frac{(\Delta x^2+\Delta y^2)^{5/2}}{\sqrt{\Delta x^2+\Delta y^2}}
    =(\Delta x^2+\Delta y^2)^2\to0.
    $$
  - 当 $\Delta y=0$ 时，$f=\Delta x^3$，比值为 $\frac{|\Delta x^3|}{|\Delta x|}=\Delta x^2\to0$。
  - 当 $\Delta x=0$ 时，$f=\Delta y^2$，比值为 $\frac{|\Delta y^2|}{|\Delta y|}=|\Delta y|\to0$。  
  故极限为 $0$，所以 $f$ 在 $(0,0)$ 处可微。

- **求 $\frac{\partial f}{\partial x}$ 的表达式**  
  当 $xy\neq0$ 时，$f_x=3x^2y^2$；  
  当 $y=0, x\neq0$ 时，$f_x=3x^2$；  
  当 $x=0, y\neq0$ 时，$f_x=0$；  
  而在原点 $f_x(0,0)=0$。

- **判断 $\frac{\partial f}{\partial x}$ 在 $(0,0)$ 处连续性**  
  需验证 $\lim_{(x,y)\to(0,0)} f_x(x,y)=f_x(0,0)=0$。
  - 当 $xy\neq0$，$|3x^2y^2|\le 3(x^2+y^2)^2\to0$；
  - 当 $y=0$，$|3x^2|\to0$；
  - 当 $x=0$，值为 $0\to0$。  
  故极限为 $0$，连续。

综上，$f$ 可微且 $f_x$ 连续，选 **(A)**。

**易错点**：
- 将原点处的偏导数直接代入分段表达式，忽略定义法。例如错误认为 $f_x(0,0)=0$ 但未证明。
- 判断可微性时只看分子趋近 $0$，而未除以 $\sqrt{\Delta x^2+\Delta y^2}$，导致误判。
- 对连续性判断忽略特殊路径（如坐标轴），本例中虽然各路径均趋 $0$，但需逐一说明。

**命题规律**：考点为多元函数可微性与偏导数连续性的关系。命题常以分段函数形式设计，通过构造不同次幂或分区域定义来考查定义法。变式可能互换 $x$、$y$ 次数，或增加混合项。复习建议：熟练掌握可微性定义的极限验证，分段函数特殊点必须用定义求偏导和连续性，并注意路径的完备性。

**知识点**：偏导数定义、可微性定义与判别、偏导数连续性、分段函数处处理、极限估值不等式。

---

> 来源：模拟卷概念题摘选（试卷顺序版） · 十三. 余炳森五套卷卷一 · 原题号 (3) · PDF第23页
