---
ctime: 2026-08-22 05:15:01
mtime: 2026-08-22 05:15:01
tags:
  - AM
  - 27_模拟卷概念题摘选/张宇四套卷卷三
  - 概念题
  - 多元函数可微
  - 偏导数
  - 全微分
  - 切平面
  - 高阶无穷小
points:
level:
---

# MCQ 第 63 题

![[_Attachments/题目识别/27_模拟卷概念题摘选-题目/MNJ-Q063_题目.png|题目]]

已知函数$f(x,y)$满足$f(0,0)=0$，设$\boldsymbol{n}=(f_x'(0,0),f_y'(0,0),-1)$，$\boldsymbol{\alpha}=(x,y,f(x,y))$，则$\boldsymbol{n}\cdot\boldsymbol{\alpha}=0$是$f(x,y)$在点$(0,0)$处可微的.

(A) 充分非必要条件.
(B) 必要非充分条件.
(C) 充分必要条件.
(D) 既非充分也非必要条件.

> 考点批注：向量形式只是纸老虎而已，本质凑定义

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 (A)。因为 $\boldsymbol n\cdot\boldsymbol\alpha=0$ 展开后就是  
$$
f_x'(0,0)x+f_y'(0,0)y-f(x,y)=0,
$$
它使可微定义中的余项恒为 $0$，因而是充分的；但可微只要求余项为 $o(\rho)$，并不要求余项恒为 $0$，所以不必要。

**解题切入点**：看到向量点乘先展开，不要把“向量形式”当难点。由于 $f(0,0)=0$，$f(x,y)$ 在 $(0,0)$ 处可微的定义是  
$$
f(x,y)=f_x'(0,0)x+f_y'(0,0)y+o(\rho),\qquad \rho=\sqrt{x^2+y^2}.
$$
而  
$$
\boldsymbol n\cdot\boldsymbol\alpha
=f_x'(0,0)x+f_y'(0,0)y-f(x,y)
$$
正好是可微定义中余项的相反数。题目给的是“这个余项等于 $0$”，比可微要求的“这个余项是 $o(\rho)$”强得多；等于 $0$ 当然能满足 $o(\rho)$，但反之不然。

**推演**：记  
$$
a=f_x'(0,0),\qquad b=f_y'(0,0).
$$

1. **充分性**：若 $\boldsymbol n\cdot\boldsymbol\alpha=0$ 在原点附近逐点成立，则  
$$
ax+by-f(x,y)=0\Rightarrow f(x,y)=ax+by.
$$
于是  
$$
\frac{f(x,y)-f(0,0)-ax-by}{\rho}=0\to0,
$$
所以由可微定义，$f$ 在 $(0,0)$ 处可微。故条件是充分的。

2. **非必要性**：取  
$$
f(x,y)=x^2+y^2.
$$
则 $f(0,0)=0$，且  
$$
f_x'(0,0)=0,\qquad f_y'(0,0)=0.
$$
$f$ 在原点可微，因为  
$$
\lim_{\rho\to0}\frac{x^2+y^2}{\rho}=\lim_{\rho\to0}\rho=0.
$$
但此时  
$$
\boldsymbol n=(0,0,-1),\qquad \boldsymbol n\cdot\boldsymbol\alpha=-(x^2+y^2)\neq0\quad((x,y)\neq(0,0)).
$$
因此可微并不必然推出 $\boldsymbol n\cdot\boldsymbol\alpha=0$，条件不必要。

综上，$\boldsymbol n\cdot\boldsymbol\alpha=0$ 是 $f(x,y)$ 在 $(0,0)$ 处可微的充分非必要条件，所以选 (A)。

**易错点**：
- 不要把 $\boldsymbol n\cdot\boldsymbol\alpha=0$ 直接当成可微定义。可微定义对应的是  
$$
\boldsymbol n\cdot\boldsymbol\alpha=o(\rho),
$$
即 $\dfrac{|\boldsymbol n\cdot\boldsymbol\alpha|}{\rho}\to0$，而不是严格等于 $0$。
- 不要把等式只在原点代入。由于 $\boldsymbol\alpha(0,0)=\mathbf0$，在原点代入恒有 $\boldsymbol n\cdot\boldsymbol\alpha=0$，没有任何判定信息；应理解为在 $(0,0)$ 附近对变量 $(x,y)$ 成立的等式。
- 不要误以为“偏导数存在”就是可微。本题条件之所以充分，是因为它直接推出 $f$ 是线性函数，而不仅仅是偏导数存在。

**命题规律**：考点是多元函数可微定义与切平面、法向量的结合。命题者常把定义中的余项用向量内积包装，遇到此类题应先展开成坐标形式。常见变式：若把条件改为  
$$
\lim_{\rho\to0}\frac{|\boldsymbol n\cdot\boldsymbol\alpha|}{\rho}=0,
$$
则与可微等价；若只给 $\lim_{\rho\to0}\boldsymbol n\cdot\boldsymbol\alpha=0$，则只是必要条件。复习时应熟练掌握可微定义、全微分、切平面方程，以及“偏导数存在但不一定可微”的反例。

**知识点**：多元函数可微的定义、偏导数、全微分、切平面方程、高阶无穷小（$o(\rho)$）

---

> 来源：模拟卷概念题摘选（试卷顺序版） · 二十. 张宇四套卷卷三 · 原题号 (3) · PDF第33页
