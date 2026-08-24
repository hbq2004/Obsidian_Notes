---
ctime: 2026-08-24 05:34:18
mtime: 2026-08-24 05:34:18
tags:
  - AM
  - 26_张宇四套卷/卷一/MCQ
  - 计算题
  - 交换积分次序
  - 二重积分
  - 分部积分
  - 指数函数积分
points:
level:
---

# 选择题 第 3 题

![[_Attachments/题目识别/ZY4T/ZY4T-S1-Q03_题目.png|题目]]

$$ \int_{\frac{1}{4}}^{\frac{1}{2}} dy \int_{\frac{1}{2}}^{\sqrt{y}} e^{\frac{y}{x}} dx + \int_{\frac{1}{2}}^{1} dy \int_{y}^{\sqrt{y}} e^{\frac{y}{x}} dx = $$
(A) $ \frac{3e}{4} - \frac{\sqrt{e}}{2} . $
(B) $ \frac{3e}{8} - \frac{\sqrt{e}}{2} . $
(C) $ \frac{3e}{4} + \frac{\sqrt{e}}{2} . $
(D) $ \frac{3e}{8} + \frac{\sqrt{e}}{2} . $

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S1-Q03_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
选择题【答案】:(B)

**解题切入点**
考查二重积分交换积分次序与分部积分。类似于算法竞赛中“合并区间后按新变量枚举”，本题先合并两个累次积分，交换次序后积分变得简单。

**推演**
设原积分为 $I$。先画出积分区域：

第一个累次积分：$\frac14 \le y \le \frac12$，$\frac12 \le x \le \sqrt{y}$；
第二个累次积分：$\frac12 \le y \le 1$，$y \le x \le \sqrt{y}$。

合并区域可知：$\frac12 \le x \le 1$，且 $x^2 \le y \le x$（因为 $\sqrt{y}=x$ 即 $y=x^2$，$y=x$ 为另一边界）。故
$$
I=\int_{\frac12}^{1} dx \int_{x^2}^{x} e^{y/x} dy.
$$

先对 $y$ 积分，视 $x$ 为常数：
$$
\int e^{y/x} dy = x e^{y/x},
$$
于是
$$
\int_{x^2}^{x} e^{y/x} dy = x e^{x/x} - x e^{x^2/x} = x e - x e^x.
$$

所以
$$
I = \int_{\frac12}^{1} (x e - x e^x) dx = e\int_{\frac12}^{1} x dx - \int_{\frac12}^{1} x e^x dx.
$$

第一项：
$$
e\int_{\frac12}^{1} x dx = e \cdot \frac{x^2}{2}\Big|_{\frac12}^{1} = e\left(\frac12 - \frac18\right) = \frac{3e}{8}.
$$

第二项用分部积分：
$$
\int x e^x dx = (x-1)e^x + C,
$$
故
$$
\int_{\frac12}^{1} x e^x dx = (x-1)e^x\Big|_{\frac12}^{1} = 0 - \left(-\frac12\sqrt{e}\right) = \frac12\sqrt{e}.
$$

因此
$$
I = \frac{3e}{8} - \frac{\sqrt{e}}{2}.
$$

对照选项：(A) 中 $\frac{3e}{4}$ 错，因 $\int x dx$ 算成了 $\frac34$；(C) 符号和系数均错；(D) 符号错，正确为 $-\frac{\sqrt{e}}{2}$。故(B)正确。

**易错点**
1. 两个累次积分合并时，要正确写出整体区域 $\frac12 \le x \le 1$，$x^2 \le y \le x$，避免遗漏或重叠。
2. 对 $y$ 积分时 $x$ 是常数，结果要乘 $x$，不要漏乘。
3. 分部积分 $\int x e^x dx$ 时注意符号，代入上下限易出错。

**命题规律**
二重积分交换积分次序是高频考点，常与指数函数、分部积分结合。复习时多练习将混合型累次积分合并为单一二重积分，并善用“后积分的变量范围先确定”的口诀。


> 来源：《26_张宇四套卷（数一）》卷一 第 3 题
