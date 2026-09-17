---
ctime: 2026-08-16 21:16:38
mtime: 2026-08-20 01:29:40
tags:
  - AM
  - 27_1000/C04/a/FIB
  - 计算题
  - 一元函数微分学的计算
  - 极限函数
  - 复合函数求导
points:
level:
---

# FIB 第 12 题

![[_Attachments/题目识别/1000-GS/1000-GS-TAAABD5-Q012_题目.png|题目]]

12. 设 $f(t)=\lim\limits_{n\to\infty}\cos t\cdot\left(\frac{n+t}{n-t}\right)^{n}$，则 $f'(0)=$ \_ .

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-GS-TAAABD5-Q012_答案.png|答案]]

## V4 Pro Max 解析

**答案**：$f'(0)=2$

**切入点**：先算"关于 $n$ 的极限"把 $f(t)$ 化简为初等函数，再求导。极限 $\left(\frac{n+t}{n-t}\right)^n$ 拆成 $(1+t/n)^n/(1-t/n)^n$，用重要极限 $\lim(1+a/n)^n=e^a$。类比"先预处理出闭式，再套模板"。

**推演**

$$\frac{n+t}{n-t}=\frac{1+t/n}{1-t/n}$$

$$\lim_{n\to\infty}\left(\frac{n+t}{n-t}\right)^n=\frac{\lim(1+t/n)^n}{\lim(1-t/n)^n}=\frac{e^t}{e^{-t}}=e^{2t}$$

故 $f(t)=e^{2t}\cos t$。

$$f'(t)=2e^{2t}\cos t-e^{2t}\sin t$$

$$f'(0)=2\cdot1\cdot1-1\cdot0=2$$

**易错点**：$(\frac{n+t}{n-t})^n$ 不能想当然写成 $e^{t-(-t)}$ 之外再忘记分子分母都取极限；或求导时乘积法则漏项（$e^{2t}\cos t$ 求导有两项）。

**命题规律**：变上限极限定义的函数，先求极限化为闭式再求导。核心是识别 $\left(1+\frac{a}{n}\right)^n\to e^a$ 型结构。
