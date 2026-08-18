---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-18 02:29:15
tags:
  - AM
  - 26_ep最后一卷/套五/FRQ
  - 计算题
  - 变量替换
  - 常系数线性微分方程
  - 待定系数法
  - 旋转体体积
points:
level:
---

# FRQ 第 18 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q18_题目.png|题目]]

设 $y(x)$ 为微分方程 $(1 - x^2)y'' - xy' + y = -1$ 满足条件 $y \big|_{x=0} = y \big|_{x=1} = 0$ 的解。

(1) 利用变换 $x = \sin t$ 将上述方程化为常系数线性方程，并求 $y(x)$；

(2) 求 $y(x)$ 与 $x$ 轴所围图形绕 $x$ 轴旋转一周所得旋转体的体积.


---

## DeepSeek V4 Flash Max

【考点】本题考查的知识点与解题切入点：利用变量代换将变系数微分方程化为常系数方程，类似于算法竞赛中将复杂问题归约为已知模型；再通过解常系数线性微分方程求得函数，最后用定积分计算旋转体体积。

【解】(1) 令 $x = \sin t$，因 $x\in[0,1]$，取 $t\in[0,\frac{\pi}{2}]$，则 $\cos t\ge 0$。

对 $y(x)$ 求导：
$$
\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{y'_t}{\cos t},
$$
$$
y'' = \frac{d}{dx}\left(\frac{y'_t}{\cos t}\right) = \frac{1}{\cos t}\frac{d}{dt}\left(\frac{y'_t}{\cos t}\right)
= \frac{y''_t\cos t + y'_t\sin t}{\cos^3 t}.
$$

代入原方程 $(1-x^2)y'' - xy' + y = -1$，注意 $1-x^2 = \cos^2 t$，$x=\sin t$，得：
$$\cos^2 t \cdot \frac{y''_t\cos t + y'_t\sin t}{\cos^3 t} - \sin t \cdot \frac{y'_t}{\cos t} + y = -1,
$$
即
$$
y''_t + y'_t\tan t - y'_t\tan t + y = -1,
$$
所以
$$
y''_t + y = -1.
$$
这是常系数线性非齐次方程。

对应齐次方程 $y''_t + y=0$ 的通解为 $C_1\cos t + C_2\sin t$。设非齐次特解为常数 $A$，代入 $-1$ 得 $A = -1$。故通解
$$
y(t) = C_1\cos t + C_2\sin t - 1.
$$

由边界条件：$y|_{x=0}=y(0)=0$，而 $x=0$ 对应 $t=0$，得 $C_1 - 1 = 0$，故 $C_1=1$。
由 $y|_{x=1}=y(\frac{\pi}{2})=0$，得 $C_2\cdot 1 -1 = 0$，故 $C_2=1$。

所以
$$
y(t) = \cos t + \sin t - 1.
$$

又 $x = \sin t$，$\cos t = \sqrt{1 - x^2}$，故
$$
y(x) = \sqrt{1 - x^2} + x - 1, \quad 0\le x\le 1.
$$

(2) 由(1)知，在 $[0,1]$ 上 $y(x)\ge 0$（仅在端点 $x=0,1$ 处为0），故所求旋转体体积为
$$
V = \pi\int_0^1 y^2(x) \, dx.
$$

计算 $y^2$：
$$
y^2 = (\sqrt{1-x^2}+x-1)^2 = 1-x^2 + (x-1)^2 + 2(x-1)\sqrt{1-x^2}
= 2 - 2x - 2(1-x)\sqrt{1-x^2}.
$$
因此
$$
V = \pi\int_0^1 \left[2(1-x) - 2(1-x)\sqrt{1-x^2}\right]dx.
$$

先算
$$
\int_0^1 2(1-x) dx = 2\left[x-\frac{x^2}{2}\right]_0^1 = 1.
$$
再算
$$
\int_0^1 (1-x)\sqrt{1-x^2} dx = \int_0^1 \sqrt{1-x^2} dx - \int_0^1 x\sqrt{1-x^2} dx.
$$
其中
$$
\int_0^1 \sqrt{1-x^2} dx = \frac{\pi}{4},
$$
$$
\int_0^1 x\sqrt{1-x^2} dx = \frac{1}{3}.
$$
所以
$$
\int_0^1 (1-x)\sqrt{1-x^2} dx = \frac{\pi}{4} - \frac{1}{3}.
$$

代入得
$$
V = \pi\left[1 - 2\left(\frac{\pi}{4} - \frac{1}{3}\right)\right]
= \pi\left(1 - \frac{\pi}{2} + \frac{2}{3}\right)
= \pi\left(\frac{5}{3} - \frac{\pi}{2}\right)
= \frac{5\pi}{3} - \frac{\pi^2}{2}.
$$

【答案】(1) $y(x) = \sqrt{1-x^2} + x - 1$（$0\le x\le 1$）。
(2) 旋转体体积 $V = \dfrac{5\pi}{3} - \dfrac{\pi^2}{2}$。

关键给分点：①正确求导并化简为一阶常系数方程（2分）；②求出通解（2分）；③由边界条件定出常数（2分）；④写对 $y(x)$（2分）；⑤列出体积积分（1分）；⑥准确计算积分（1分）。

【易错点】①换元后 $\cos t$ 的正负号要留意，因 $x\in[0,1]$ 时 $t\in[0,\pi/2]$，$\cos t\ge 0$，所以 $\sqrt{1-x^2}$ 取正；②求体积前需确认 $y(x)$ 在区间上非负，否则应分段取绝对值；③积分时 $\int_0^1 \sqrt{1-x^2}dx = \frac{\pi}{4}$ 是四分之一圆面积，不要误算；④计算 $y^2$ 展开要仔细，避免符号错误。

【命题规律】此类题通常先通过变量代换化简方程，再求解函数，最后结合定积分几何应用（如旋转体体积、弧长等）命题。复习时应熟练掌握常见换元（如三角代换）与常系数线性微分方程的解法，并注意边界条件的处理。

---

## V4 Flash Max 解析

**答案**:  
令 $x=\sin t$（取 $t=\arcsin x$），原方程化为
$$
\frac{d^2y}{dt^2}+y=-1.
$$
解得
$$
y(x)=\sqrt{1-x^2}+x-1\quad(0\le x\le1).
$$
因此所求旋转体体积为
$$
V=\pi\int_0^1 y^2\,dx=\frac{5\pi}{3}-\frac{\pi^2}{2}.
$$

**解题切入点**:  
看到 $(1-x^2)y''-xy'+y$ 这种形式，应联想到 Chebyshev 型方程。用 $x=\sin t$ 换元后，$1-x^2=\cos^2 t$，而且一阶项会恰好抵消，变成常系数线性方程。这类似于算法竞赛中的“坐标变换”：换到合适坐标系后，复杂表达式被化简成标准模型。第二问是定积分几何应用，绕 $x$ 轴旋转用“盘法”。

**推演**:  
设 $x=\sin t$，取 $t=\arcsin x\in[0,\pi/2]$，则 $\cos t\ge0$，$1-x^2=\cos^2t$。

记 $y'=\dfrac{dy}{dx}$，$\dot y=\dfrac{dy}{dt}$。由链式法则：
$$
y'=\frac{\dot y}{\cos t},
$$
$$
y''=\frac{d}{dx}\left(\frac{\dot y}{\cos t}\right)
=\frac{\ddot y\cos t+\dot y\sin t}{\cos^3 t}.
$$

代入原方程：
$$
\begin{aligned}
(1-x^2)y''-xy'+y
&=\cos^2t\cdot \frac{\ddot y\cos t+\dot y\sin t}{\cos^3t}
-\sin t\cdot \frac{\dot y}{\cos t}+y\\
&=\ddot y+\dot y\tan t-\dot y\tan t+y\\
&=\ddot y+y.
\end{aligned}
$$

所以原方程化为常系数方程：
$$
\ddot y+y=-1.
$$

其通解为
$$
y(t)=A\cos t+B\sin t-1.
$$

边界条件：
$$
x=0\Rightarrow t=0,\qquad x=1\Rightarrow t=\frac{\pi}{2}.
$$

由 $y(0)=0$：
$$
A-1=0\Rightarrow A=1.
$$

由 $y\left(\frac{\pi}{2}\right)=0$：
$$
B-1=0\Rightarrow B=1.
$$

因此
$$
y(t)=\cos t+\sin t-1.
$$

换回 $x$：
$$
y(x)=\sqrt{1-x^2}+x-1.
$$

第二问，因为 $0<x<1$ 时
$$
\sqrt{1-x^2}>1-x,
$$
所以 $y(x)>0$，曲线与 $x$ 轴围成的区域在 $[0,1]$ 上。绕 $x$ 轴旋转所得体积为
$$
V=\pi\int_0^1 y^2\,dx.
$$

计算：
$$
\begin{aligned}
y^2
&=\left(\sqrt{1-x^2}+x-1\right)^2\\
&=(1-x^2)+(1-x)^2+2(x-1)\sqrt{1-x^2}\\
&=2(1-x)-2(1-x)\sqrt{1-x^2}.
\end{aligned}
$$

所以
$$
\frac{V}{\pi}
=2\int_0^1(1-x)\,dx-2\int_0^1(1-x)\sqrt{1-x^2}\,dx.
$$

其中
$$
\int_0^1(1-x)\,dx=\frac12,
$$
且
$$
\int_0^1(1-x)\sqrt{1-x^2}\,dx
=\int_0^1\sqrt{1-x^2}\,dx-\int_0^1x\sqrt{1-x^2}\,dx
=\frac{\pi}{4}-\frac13.
$$

因此
$$
\frac{V}{\pi}
=1-2\left(\frac{\pi}{4}-\frac13\right)
=\frac53-\frac{\pi}{2}.
$$

故
$$
V=\frac{5\pi}{3}-\frac{\pi^2}{2}.
$$

**易错点**:  
- 换元时容易漏掉 $y''$ 中的 $\dfrac{\dot y\sin t}{\cos^3t}$ 项；本题它恰好与 $-xy'$ 抵消，但计算时仍要写清楚。
- 边界条件不是 $t=0,1$，而是 $t=0,\dfrac{\pi}{2}$。
- 求旋转体体积要用盘法 $\pi\int y^2\,dx$，不要误用壳法。
- 自检：  
$$
y'=1-\frac{x}{\sqrt{1-x^2}},\qquad
y''=-\frac{1}{(1-x^2)^{3/2}},
$$
在 $0<x<1$ 代回原方程可得左边为 $-1$，且 $y(0)=y(1)=0$。体积 $V=\dfrac{5\pi}{3}-\dfrac{\pi^2}{2}\approx0.301>0$，结果合理。

**命题规律**:  
本题属于“Chebyshev 型变系数方程 + 定积分几何应用”的综合题。常见命题角度有：  
1. 给出 $(1-x^2)y''-xy'+n^2y=f(x)$，用 $x=\sin t$ 化为常系数方程；  
2. 端点常取 $x=0,1$ 或 $x=-1,1$，注意 $x=\pm1$ 往往是奇点；  
3. 第二问常与旋转体体积、曲边梯形面积、弧长等定积分应用结合。  
变式可把右端常数改成 $x$ 或 $\sin t$，此时特解需用待定系数法处理。
