---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷六/MCQ
  - 计算题
  - 二重积分对称性
  - 轮换对称性
  - 极坐标变换
  - 积分区域分割
points:
level:
---

# MCQ 第 2 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S6-Q02_题目.png|题目]]

2. 设函数 $f(x,y)$ 连续，且 $f(x,y)=f(y,x)=f(-x,y)$，则 $\int_{-2}^{2} \mathrm{d}x \int_{\sqrt{4-x^2}}^{2} f(x,y) \mathrm{d}y=$

(A) $2\int_{0}^{2}\left[\int_{-2}^{-\sqrt{4-y^2}} f(x,y) \mathrm{d}x+\int_{-\sqrt{4-y^2}}^{2} f(x,y) \mathrm{d}x\right] \mathrm{d}y.$

(B) $2\int_{0}^{2}\left[\int_{\sqrt{4-y^2}}^{2} f(x,y) \mathrm{d}y\right] \mathrm{d}x.$

(C) $4\int_{0}^{\frac{\pi}{4}} \mathrm{d}\theta \int_{2}^{2\sec\theta} f(r\cos\theta,r\sin\theta) r \mathrm{d}r.$

(D) $4\int_{0}^{\arctan\frac{1}{2}} \mathrm{d}\theta \int_{2}^{2\sec\theta} f(r\cos\theta,r\sin\theta) r \mathrm{d}r.$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S6-Q02_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
【答案】(C)

**解题切入点**
本题同时具有变量轮换对称与关于 \(x\) 轴的奇偶对称。先把区域按 \(x\ge0\) 对折，再按 \(y=x\) 对折，在极坐标下只剩第一象限的一半；这相当于先压缩状态，再对称去重。

**推演**
令
$$
D=\{(x,y):-2\le x\le2,\ \sqrt{4-x^2}\le y\le2\}.
$$
由 \(f(-x,y)=f(x,y)\)，左右两部分相等，故
$$
I=2\int_0^2 dx\int_{\sqrt{4-x^2}}^2 f(x,y)\,dy.
$$
在 \(0\le x\le2\) 内，
$$
D_R=\{(x,y):0\le x\le2,\ 0\le y\le2,\ x^2+y^2\ge4\}.
$$
该区域关于 \(y=x\) 对称。由 \(f(x,y)=f(y,x)\)，只需算 \(0\le y\le x\) 的一半再乘 2。极坐标 \(x=r\cos\theta,\ y=r\sin\theta\) 下，\(0\le y\le x\) 且在第一象限即 \(0\le\theta\le\frac{\pi}{4}\)；
$$
r^2\ge4\Rightarrow r\ge2,\quad x\le2\Rightarrow r\cos\theta\le2\Rightarrow r\le2\sec\theta.
$$
因此
$$
\int_{D_R} f\,dA
=2\int_0^{\pi/4}d\theta\int_2^{2\sec\theta} f(r\cos\theta,r\sin\theta)r\,dr.
$$
代回 \(I=2\int_{D_R} f\,dA\)，得
$$
I=4\int_0^{\pi/4}d\theta\int_2^{2\sec\theta} f(r\cos\theta,r\sin\theta)r\,dr.
$$
所以选 (C)。

选项核对：
(A) 内层两段拼起来是 \(\int_{-2}^{2} f(x,y)\,dx\)，相当于对整个上矩形积分，没有剔除圆内区域，错。
(B) 按题面 \(\int_{\sqrt{4-y^2}}^{2} f(x,y)\,dy\) 的积分变量是 \(y\)，下限又含 \(y\)，不是合法迭代积分，排除。
(C) 极坐标推导如上，正确。
(D) 上界 \(\arctan\frac{1}{2}\) 不是对称分界 \(\frac{\pi}{4}\)，漏掉第一象限另一半区域，错。

**易错点**
- 容易只做 \(x\to -x\) 对称得到 \(2\int_0^2...\)，但没有继续用 \(x\leftrightarrow y\) 对称，忘记把第一象限区域再对折。
- 极坐标中 \(r\) 下限是 2，上限由 \(r\cos\theta\le2\) 决定；不要写成 \(2\csc\theta\) 或把上限定成常数 \(2\sqrt2\)。
- 选项 D 的 \(\arctan\frac{1}{2}\) 是常见错解：把 \(y\le x/2\) 当对称半区，实际分界是 \(y=x\)，即 \(\theta=\frac{\pi}{4}\)。
- 注意变量名替换：不要出现积分变量与积分限含同一字母的式子。

**命题规律**
本题是典型的“对称性 + 极坐标”二重积分选择题。命题人把多个对称条件放在一起，诱导考生只用一个对称。复习时要熟练运用区域折叠、变量轮换和极坐标边界；计算后可用 \(f\equiv1\) 验算面积，快速排除错误选项。

题面按选项 C 所示极坐标边界与常规对称性理解；选项 B 的内层微分/限不一致疑为 OCR 误，请核对原书。


> 来源：《26_张宇八套卷（数一）》卷六 第 2 题
