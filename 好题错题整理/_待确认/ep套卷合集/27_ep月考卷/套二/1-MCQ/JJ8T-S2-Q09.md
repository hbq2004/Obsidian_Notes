---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套二/MCQ
  - 计算题
  - 参数方程求导
  - 复合函数求导
  - 反三角函数求导
  - 切线斜率
points:
level:
---

# MCQ 第 9 题

![[_Attachments/题目识别/JJ8T/JJ8T-S2-Q09_题目.png|题目]]

9. 曲线 $y = y(x)$ 由参数方程 $\left\{\begin{array}{l} x = e^{-1/t^2}, \\ y = \arccos t \end{array}\right.$ 确定，$t = \frac{1}{2}$ 处所对应的切线斜率为（　　）

A. $-\frac{e^4}{8\sqrt{3}}$

B. $\frac{e^4}{8\sqrt{3}}$

C. $\frac{e^4}{4\sqrt{3}}$

D. $-\frac{e^4}{4\sqrt{3}}$


---

## DeepSeek V4 Flash Max

【考点】本题考查参数方程所确定函数的导数，核心是 $y'_x=\frac{dy/dt}{dx/dt}$。类比算法竞赛：斜率就是“两个变化率之比”，先分别对参数 $t$ 求导，再相除即可。

【解】由 $x=e^{-1/t^2}$，令 $u=-t^{-2}$，则
\[
\frac{dx}{dt}=e^{-1/t^2}\cdot\frac{d}{dt}(-t^{-2})
=e^{-1/t^2}\cdot 2t^{-3}
=\frac{2e^{-1/t^2}}{t^3}.
\]
由 $y=\arccos t$，
\[
\frac{dy}{dt}=-\frac{1}{\sqrt{1-t^2}}.
\]
当 $t=\frac12$ 时：
\[
e^{-1/t^2}=e^{-4},\qquad \frac{dx}{dt}=\frac{2e^{-4}}{(1/2)^3}=16e^{-4},
\]
\[
\frac{dy}{dt}=-\frac{1}{\sqrt{1-\frac14}}=-\frac{1}{\sqrt3/2}=-\frac{2}{\sqrt3}.
\]
因此
\[
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}
=\frac{-2/\sqrt3}{16e^{-4}}
=-\frac{e^4}{8\sqrt3}.
\]

【答案】切线斜率为 $-\frac{e^4}{8\sqrt3}$，选 **(A)**。

各选项辨析：
- (A) 正确，与上述计算一致。
- (B) 符号错误：漏掉 $\arccos t$ 求导的负号，得到正斜率。
- (D) 分母错误：求 $dx/dt$ 时漏乘系数 $2$，得到 $-\frac{e^4}{4\sqrt3}$。
- (C) 符号和分母均错误：同时漏掉负号和漏乘系数 $2$。

【易错点】
1. 参数方程求导不要将 $dy/dx$ 与 $dy/dt$ 混淆，也不能先消去参数再求导（本题不便消参）。
2. 对 $e^{-1/t^2}$ 求导时，指数 $-1/t^2$ 是复合函数，不要漏掉 $2/t^3$ 这一因子。
3. $\arccos t$ 的导数为负，不能与 $\arcsin t$ 的导数混淆。
4. 最后化简时 $1/e^{-4}=e^4$ 要正确处理指数负号。

【命题规律】参数方程求切线斜率是高频基础题，常与复合函数求导、反三角函数求导结合。复习时熟练运用“参数方程求导公式”，并对常见导数表（特别是反三角函数）做到零失误；计算时采用“先代值后相除”可减少化简错误。

---

## V4 Flash Max 解析

**答案**: A。切线斜率  
\[
k=\left.\frac{dy}{dx}\right|_{t=1/2}=-\frac{e^4}{8\sqrt3}.
\]

**解题切入点**: 参数方程确定的函数求切线斜率，直接用参数方程求导公式  
\[
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}
\]  
不需要消去参数 $t$。可以类比算法竞赛里的“反向传播”：$x$ 和 $y$ 都是 $t$ 的函数，要求 $y$ 对 $x$ 的变化率，就先把 $y$ 对 $t$、$x$ 对 $t$ 分别求导，再相除。

**推演**:  
由参数方程求导公式：
\[
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}.
\]

先求
\[
\frac{dy}{dt}=\frac{d}{dt}(\arccos t)=-\frac1{\sqrt{1-t^2}}.
\]

当 $t=\frac12$ 时：
\[
\left.\frac{dy}{dt}\right|_{t=1/2}
=-\frac1{\sqrt{1-\frac14}}
=-\frac1{\sqrt{\frac34}}
=-\frac{2}{\sqrt3}.
\]

再求
\[
\frac{dx}{dt}=\frac{d}{dt}\left(e^{-1/t^2}\right).
\]

令 $u=-\frac1{t^2}$，则
\[
\frac{du}{dt}=\frac{2}{t^3},
\]
所以
\[
\frac{dx}{dt}=e^{-1/t^2}\cdot \frac{2}{t^3}.
\]

当 $t=\frac12$ 时：
\[
\left.\frac{dx}{dt}\right|_{t=1/2}
=e^{-4}\cdot \frac{2}{(1/2)^3}
=e^{-4}\cdot 16
=\frac{16}{e^4}.
\]

因此切线斜率为
\[
k=\frac{-\frac{2}{\sqrt3}}{\frac{16}{e^4}}
=-\frac{2}{16}\cdot e^4\cdot \frac1{\sqrt3}
=-\frac{e^4}{8\sqrt3}.
\]

所以选 **A**。

**易错点**:  
- 容易把 $e^{-1/t^2}$ 的导数符号算错。  
  \[
  \frac{d}{dt}\left(-\frac1{t^2}\right)=\frac{2}{t^3}
  \]
  而不是 $-\frac{2}{t^3}$。取 $t=\frac12$ 时得到 $16$，不是 $-16$。
- 容易忘记 $\arccos t$ 求导带负号。$y=\arccos t$ 在 $t=\frac12$ 处随 $t$ 增大而减小，所以 $dy/dt<0$。
- 自检：$t=\frac12$ 时 $dx/dt>0$，$dy/dt<0$，所以斜率应为负，排除 B、C；再检查分母系数，得到 $\frac16$ 而不是 $\frac14$，故选 A。

**命题规律**: 本题是参数方程求导与复合函数求导、反三角函数求导的结合。常见变式包括：求二阶导数 $\frac{d^2y}{dx^2}$、求切线方程或法线方程、判断曲线凹凸性；也可与极坐标方程 $x=r(\theta)\cos\theta,\ y=r(\theta)\sin\theta$ 结合。核心是熟练使用参数方程求导公式，并注意链式法则和符号。
