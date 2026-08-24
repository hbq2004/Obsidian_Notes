---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷二/FRQ
  - 综合题
  - 等价无穷小
  - 泰勒展开
  - 导数定义
  - 无穷小比阶
  - 极限计算
points:
level:
---

# FRQ 第 17 题

![[_Attachments/题目识别/YBS5T/YBS5T-S2-Q17_题目.png|题目]]

17.（本题满分 10 分）
设函数 $f(x)$ 在 $(-\infty,\infty)$ 内有定义，$f(0)=1$，且 $\lim_{x\to0} \frac{\ln(1-x)+f(x)\sin x}{e^{x^2}-1}=0$。求 $f'(0)$ 以及极限 $\lim_{x\to0} \frac{xf(x)-e^x+\cos x}{\ln(1+x^2)}$ 的值。

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S2-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$f'(0)=\frac{1}{2}$，且

$$
\lim_{x\to0}\frac{x f(x)-e^x+\cos x}{\ln(1+x^2)}=-\frac{1}{2}.
$$

关键给分点：① 由题设极限为 $0$，且 $e^{x^2}-1\sim x^2$，得分子为 $o(x^2)$；② 对 $\ln(1-x)$、$\sin x$ 展开，算得 $f'(0)=\frac{1}{2}$；③ 用 $f(x)=1+\frac{x}{2}+o(x)$ 代入第二极限，并利用 $\ln(1+x^2)\sim x^2$。

**解题切入点**

题目本质是“无穷小比阶 + Taylor 系数匹配”。已知商趋于 $0$，分母是 $x^2$ 阶，所以分子必须是 $x^2$ 的高阶无穷小；于是把 $\ln(1-x)$ 和 $\sin x$ 展开到二次项，就能反推出 $f$ 在 $0$ 处的一阶 Taylor 系数。类似算法竞赛中，已知一个含未知参数的“主项误差”为高阶小量，用系数匹配求参数。

**推演**

设
$$
A(x)=\frac{\ln(1-x)+f(x)\sin x}{e^{x^2}-1}.
$$
题设 $A(x)\to0$，且 $e^{x^2}-1\sim x^2$，所以
$$
\ln(1-x)+f(x)\sin x=o(x^2).
$$

由上式得
$$
f(x)\sin x=-\ln(1-x)+o(x^2).
$$
两边除以 $\sin x$，并利用 $\sin x\sim x$，有
$$
\frac{f(x)-1}{x}
=\frac{-\ln(1-x)-\sin x}{x\sin x}+\frac{o(x^2)}{x\sin x}.
$$

已知
$$
-\ln(1-x)=x+\frac{x^2}{2}+o(x^2),\qquad
\sin x=x-\frac{x^3}{6}+o(x^3),
$$
所以
$$
\frac{-\ln(1-x)-\sin x}{x\sin x}
=\frac{\frac{x^2}{2}+o(x^2)}{x^2(1+o(1))}
\to\frac{1}{2}.
$$
同时 $\frac{o(x^2)}{x\sin x}\to0$，故
$$
f'(0)=\lim_{x\to0}\frac{f(x)-1}{x}=\frac{1}{2}.
$$

于是 $f(x)=1+\frac{x}{2}+o(x)$。第二极限的分子为
$$
x f(x)-e^x+\cos x
=x\left(1+\frac{x}{2}+o(x)\right)
-\left(1+x+\frac{x^2}{2}+o(x^2)\right)
+\left(1-\frac{x^2}{2}+o(x^2)\right)
=-\frac{x^2}{2}+o(x^2).
$$
（其中 $x o(x)=o(x^2)$。）分母为
$$
\ln(1+x^2)=x^2+o(x^2)\sim x^2.
$$
因此
$$
\lim_{x\to0}\frac{x f(x)-e^x+\cos x}{\ln(1+x^2)}
=\lim_{x\to0}\frac{-\frac{x^2}{2}+o(x^2)}{x^2+o(x^2)}
=-\frac{1}{2}.
$$

**易错点**

1. 不要直接假设 $f$ 有二阶 Taylor 展开；题设只能推出 $f'(0)$，第二极限也只需要一阶展开 $f(x)=1+\frac{x}{2}+o(x)$。
2. 已知极限为 $0$，分母为 $x^2$ 阶，应写成分子为 $o(x^2)$；不要只写到 $o(x)$，也不要额外假设为 $O(x^3)$。
3. 计算 $x f(x)$ 时，$x o(x)=o(x^2)$，不要漏掉二次项。
4. 注意展开符号：$\ln(1-x)$ 的二次项为 $-\frac{x^2}{2}$，$\cos x$ 的二次项也为 $-\frac{x^2}{2}$，第二极限中 $x^2$ 系数为 $\frac{1}{2}-\frac{1}{2}-\frac{1}{2}=-\frac{1}{2}$。

**命题规律**

这类题是考研数学一高频考点：给一个含未知函数的极限，令其等于 $0$，反求导数或参数。常用套路是“先看分母阶数，再用等价无穷小和 Taylor 展开匹配分子的最低阶系数”。复习时要把 $\ln(1+x),e^x,\sin x,\cos x,\ln(1+x^2)$ 等展开式记熟，并会用 $o(\cdot)$ 做系数比对。


> 来源：《26_余丙森五套卷（数一）》卷二 第 17 题
