---
ctime: 2026-08-16 21:16:29
mtime: 2026-08-20 01:29:40
tags:
  - AM
  - 27_1000/C04/a/FIB
  - 计算题
  - 一元函数微分学的计算
  - 极限函数
  - 复合函数求导
  - 重要极限
points:
level:
---

# FIB 第 13 题

![[_Attachments/题目识别/1000-GS/1000-GS-TAAABD5-Q013_题目.png|题目]]

13. 设 $f(x)=\lim\limits_{t\to\infty}x\left(1+\frac{1}{t}\right)^{t\sin x}$, 则 $f'(x)=$ \_ .

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-GS-TAAABD5-Q013_答案.png|答案]]

## V4 Pro Max 解析

**答案**：$f'(x)=e^{\sin x}(1+x\cos x)$

**切入点**：极限 $\lim_{t\to\infty}(1+1/t)^{t\sin x}=e^{\sin x}$（把指数 $t\sin x$ 拆成 $t\times\sin x$，底趋 $e$）。先化简 $f(x)=xe^{\sin x}$ 再求导。类比"先求闭式再动刀"。

**推演**

$$\left(1+\frac1t\right)^{t\sin x}=\left[\left(1+\frac1t\right)^t\right]^{\sin x}\xrightarrow{t\to\infty} e^{\sin x}$$

故 $f(x)=xe^{\sin x}$。乘积求导：

$$f'(x)=e^{\sin x}+x\,e^{\sin x}\cos x=e^{\sin x}(1+x\cos x)$$

**易错点**：极限中 $x$ 视为常数（对 $t$ 取极限），$\sin x$ 当常数处理；别把 $t\sin x$ 误当成 $\to\infty$ 使底为 $\infty$。求导时 $\frac{d}{dx}\sin x=\cos x$ 要乘回。

**命题规律**：形如 $\lim_{t\to\infty}\left(1+\frac1t\right)^{t\varphi(x)}=e^{\varphi(x)}$ 是固定公式，先代入再求导，注意 $x$ 是参数而非极限变量。
