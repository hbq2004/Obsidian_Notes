---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
tags:
  - AM
  - 26_ep最后一卷/套五/FIB
  - 概念题
  - 极限计算
  - 对数恒等式
  - 泰勒展开
  - xlnx极限
points:
level:
---

# FIB 第 11 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q11_题目.png|题目]]

11. 函数 $f(x)$ 满足 $f(0) = 0$，$f'(0) > 0$，则 $\lim\limits_{x \to 0^+} x^{f(x)} = \_$


---

## DeepSeek V4 Flash Max

【考点】本题考查极限与导数关系，利用对数恒等式转化为 $0\cdot\infty$ 型，结合 $f(x)\sim f'(0)x$。类比算法竞赛中处理指数型极限时取对数。

【解】设 $A=\lim\limits_{x \to 0^+} x^{f(x)}$。由 $f(0)=0$ 且 $f'(0)>0$，根据导数定义知 $\lim\limits_{x \to 0^+} \frac{f(x)}{x}=f'(0)>0$，故当 $x$ 充分小时 $f(x)>0$，因此 $x^{f(x)}$ 有意义。

取对数：$\ln A=\lim\limits_{x \to 0^+} f(x)\ln x$。

将 $f(x)$ 在 $x=0$ 处一阶展开：$f(x)=f'(0)x+o(x)$，则
$$f(x)\ln x = f'(0)x\ln x + o(x)\ln x.$$

因为 $\lim\limits_{x \to 0^+} x\ln x=0$，且 $o(x)\ln x = x\cdot\frac{o(x)}{x}\cdot\ln x$，其中 $\frac{o(x)}{x}\to 0$，$x\ln x\to 0$，故 $o(x)\ln x\to 0$。

因此 $\ln A=0$，所以 $A=e^0=1$。

【答案】$$\boxed{1}$$

【易错点】容易直接将 $x^{f(x)}$ 视为 $x^0=1$，但 $f(x)$ 与 $x$ 同阶无穷小，不能这样代换。需取对数后利用 $x\ln x\to 0$。另外注意题目是 $x\to 0^+$，若 $x<0$ 则幂函数可能无定义，故单侧极限合理。若 $f'(0)\le 0$，结论可能会改变。

【命题规律】此类题常以抽象函数形式出现，重点考察导数定义与极限的转化。复习时掌握对数恒等式、等价无穷小替换以及常见极限 $\lim\limits_{x\to 0^+}x\ln x=0$。
