---
ctime: 2026-08-18 02:29:14
mtime: 2026-08-18 02:29:14
tags:
  - AM
  - 27_ep月考卷/套二/MCQ
  - 计算题
  - 牛顿-莱布尼茨公式
  - 换元积分法
  - 分段函数积分
  - 广义积分
  - 原函数存在性
points:
level:
---

# MCQ 第 10 题

![[_Attachments/题目识别/JJ8T/JJ8T-S2-Q10_题目.png|题目]]

10. 下列用牛顿–莱布尼茨公式计算定积分的做法中，错误的做法一共有几项（　　） 
① $\displaystyle \int_{0}^{\pi} \sqrt{\sin^{3}x - \sin^{5}x}\,dx = \int_{0}^{\pi} \sin^{3/2}x \sqrt{1 - \sin^{2}x}\,dx = \int_{0}^{\pi} \sin^{3/2}x \cos x\,dx = \frac{2}{5} \sin^{5/2}x \Big|_{0}^{\pi} = 0$. 
② $\displaystyle \int_{0}^{2} \arcsin \sqrt{1 - (x - 1)^{2}}\,dx \xrightarrow{x-1=\cos t} \int_{\pi}^{0} \arcsin \sqrt{1 - \cos^{2}t}\,d(\cos t + 1) = -\int_{\pi}^{0} \arcsin(\sin t)\,d\cos t = -\int_{0}^{\pi} t\,d\cos t = -t\cos t \Big|_{0}^{\pi} + \int_{0}^{\pi} \cos t\,dt = \pi$. 
③ $\displaystyle \int_{0}^{\pi} \frac{\sec^{2}x}{2 + \tan^{2}x}\,dx = \int_{0}^{\pi} \frac{1}{2 + \tan^{2}x}\,d\tan x = \frac{1}{\sqrt{2}} \arctan\!\left(\frac{\tan x}{\sqrt{2}}\right) \Big|_{0}^{\pi} = 0$. 
④ $\displaystyle \int_{-1}^{1} \frac{d\!\left(\arctan \frac{1}{x}\right)}{dx}\,dx = \arctan \frac{1}{x} \Big|_{-1}^{1} = \frac{\pi}{2}$. 
A. 1 个
B. 2 个
C. 3 个
D. 4 个


---

## DeepSeek V4 Flash Max

【考点】本题考查牛顿–莱布尼茨公式的使用条件：被积函数在积分区间上必须连续（或分段连续且原函数连续），且换元、化简时不能改变被积函数的取值。算法竞赛类比：就像在数组上直接套用前缀和公式，若区间内存在断点或函数值被错误改写，结果必然出错。

【解】逐项判断：

**①** 原积分为 $\int_0^\pi \sqrt{\sin^3 x - \sin^5 x}\,dx$。因 $\sin x \ge 0$，且 $\sin^3 x - \sin^5 x = \sin^3 x(1-\sin^2 x)=\sin^3 x\cos^2 x$，故 $\sqrt{\sin^3 x - \sin^5 x} = \sin^{3/2}x |\cos x|$。题中直接写成 $\sin^{3/2}x \cos x$，忽略了绝对值号。事实上 $\cos x$ 在 $(\pi/2,\pi)$ 为负，所以不能直接求导得 $(2/5)\sin^{5/2}x$。正确做法需分段积分：
$$\int_0^\pi \sin^{3/2}x |\cos x|\,dx = \int_0^{\pi/2} \sin^{3/2}x\cos x\,dx - \int_{\pi/2}^\pi \sin^{3/2}x\cos x\,dx = \frac{2}{5} + \frac{2}{5} = \frac{4}{5}.$$
故①错误。

**②** 令 $x-1=\cos t$，则 $t$ 从 $\pi$ 变到 $0$（对应 $x$ 从 $0$ 到 $2$），且 $dx = -\sin t\,dt$。同时 $\sqrt{1-(x-1)^2} = \sqrt{1-\cos^2 t} = |\sin t|$，但 $t\in[0,\pi]$ 时 $\sin t \ge 0$，故 $|\sin t|=\sin t$。然而 $\arcsin(\sin t)$ 并不恒等于 $t$：当 $t\in[0,\pi/2]$ 时为 $t$，当 $t\in[\pi/2,\pi]$ 时为 $\pi-t$。题中直接写成 $\arcsin(\sin t)=t$，并错误地得到 $\pi$。正确积分值为：
$$\int_0^\pi \arcsin(\sin t)\sin t\,dt = \int_0^{\pi/2} t\sin t\,dt + \int_{\pi/2}^\pi (\pi-t)\sin t\,dt = 2\int_0^{\pi/2} t\sin t\,dt = 2.$$
故②错误。

**③** 被积函数 $\frac{\sec^2 x}{2+\tan^2 x}$ 在 $x=\pi/2$ 处无定义（$\tan x$ 不存在），因此该积分是广义积分，不能直接在 $[0,\pi]$ 上套用牛顿–莱布尼茨公式。即使形式上令 $u=\tan x$，得到 $\frac{1}{\sqrt2}\arctan\frac{\tan x}{\sqrt2}$，但该函数在 $x=\pi/2$ 处有跳跃间断（左极限 $\pi/(2\sqrt2)$，右极限 $-\pi/(2\sqrt2)$），不是原函数。正确需分段积分：
$$\int_0^\pi \frac{\sec^2 x}{2+\tan^2 x}\,dx = \int_0^{\pi/2}+\int_{\pi/2}^\pi = \int_0^{+\infty}\frac{du}{2+u^2}+\int_{-\infty}^0\frac{du}{2+u^2} = \frac{\pi}{\sqrt2}.$$
故③错误。

**④** 考虑 $f(x)=\arctan\frac1x$。在 $[-1,1]$ 上 $f(x)$ 在 $x=0$ 处无定义且不连续（左极限 $-\pi/2$，右极限 $\pi/2$），因此不可导，不能直接应用牛顿–莱布尼茨公式。实际上 $f'(x)=-\frac{1}{1+x^2}$（$x\neq0$），所以
$$\int_{-1}^1 f'(x)\,dx = \int_{-1}^0 -\frac{1}{1+x^2}\,dx + \int_0^1 -\frac{1}{1+x^2}\,dx = -\frac{\pi}{4} - \frac{\pi}{4} = -\frac{\pi}{2}.$$
而题中直接 $\arctan\frac1x\Big|_{-1}^1 = \frac{\pi}{4} - (-\frac{\pi}{4}) = \frac{\pi}{2}$，错误。故④错误。

综上，4 项均错。

【答案】选 **(D)**。四个选项均为错误做法，题目要求选“错误的做法一共几项”，正确答案为 4 项。干扰项 A、B、C 分别对应认为有 1、2、3 项错误，都是对上述某个关键点的遗漏或误判。

【易错点】① 忽略 $\sqrt{\cos^2 x}=|\cos x|$；② 忽略了 $\arcsin(\sin t)$ 的分段性，不能直接等于 $t$；③ 忽视被积函数在区间内无定义（如 $\tan x$ 的间断点）而直接套用公式；④ 忽视函数在 $x=0$ 处不连续，导致牛顿–莱布尼茨公式失效。提醒：使用牛顿–莱布尼茨公式前务必验证被积函数在积分区间上连续，若存在间断点必须分段处理，且形如 $\arcsin(\sin t)$、$|\cos t|$ 等函数要按区间化简。题面按常规数学符号理解（OCR 疑误，请核对原书）。

【命题规律】此类题常以“用牛顿–莱布尼茨公式计算定积分”为背景，考查被积函数的连续性、原函数的存在性以及换元时区间对应关系。复习时应熟练掌握常见间断点（如 $\tan x$、$\arctan\frac1x$）的处理，以及绝对值、反三角函数的分段化简。建议多练广义积分与分段积分的合并技巧，避免机械套用公式。
