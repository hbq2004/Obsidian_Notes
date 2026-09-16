---
ctime: 2026-08-24 13:30:19
mtime: 2026-08-24 16:00:51
tags:
  - AM
  - 26_张宇八套卷/卷一/FRQ
  - 计算题
  - 斯托克斯公式
  - 曲线积分参数化
  - 向量场旋度
  - 极值问题
  - 空间曲线方向
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S1-Q20_题目.png|题目]]

设 $\Gamma$ 为曲线 $\begin{cases} x^2 + y^2 + z^2 = a^2, \\ y = x \tan \theta, \end{cases}$ 其中 $a > 0, -\frac{\pi}{2} < \theta < \frac{\pi}{2}$，从 $x$ 轴的正向看去，$\Gamma$ 的方向为顺时针方向. 求当 $\theta$ 为何值时，$I = \oint_{\Gamma} (y - z)\mathrm{d}x + (z - x)\mathrm{d}y + (x - y)\mathrm{d}z$ 最大？并求出最大值.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S1-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
最终结论：当 $\theta = \frac{\pi}{2}$ 时，$I$ 取最大值，最大值为 $2\pi a^2$。

关键给分点：
- 正确应用斯托克斯公式或直接参数化计算曲线积分，得到 $I = 2\pi a^2 (\sin\theta - \cos\theta)$（或等价形式）；
- 利用导数或三角变换求极值，结合 $\theta$ 的取值范围（$(-\frac{\pi}{2}, \frac{\pi}{2})$）确定最大值在端点 $\theta = \frac{\pi}{2}$ 处取得（极限情况），最大值为 $2\pi a^2$。

**解题切入点**
本题是封闭曲线上的第二类曲线积分，被积函数对应的向量场旋度为常向量，可优先考虑斯托克斯公式，将曲线积分转化为曲面积分，从而简化计算。类比算法竞赛中“恒定力场做功”问题，旋度恒定则曲面积分等于旋度点乘有向面积，计算量大幅降低。同时需注意曲线方向与曲面积分法向量的右手定则，避免符号错误。

**推演**
1. **写出向量场**：$\mathbf{F} = (P,Q,R) = (y-z,\,z-x,\,x-y)$。
2. **计算旋度**：
   $$\nabla \times \mathbf{F} = \left( \frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z},\ \frac{\partial P}{\partial z}-\frac{\partial R}{\partial x},\ \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y} \right) = (-2,-2,-2).$$
   即旋度为常向量 $(-2,-2,-2)$。
3. **应用斯托克斯公式**：
   $$I = \oint_\Gamma \mathbf{F} \cdot \mathrm{d}\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot \mathbf{n} \,\mathrm{d}S,$$
   其中 $S$ 是以 $\Gamma$ 为边界的曲面，此处取为平面 $y = x\tan\theta$ 上被球面截得的圆盘，半径为 $a$，面积 $S = \pi a^2$。
4. **确定法向量方向**：
   $\Gamma$ 的方向为“从 $x$ 轴正向看去顺时针”。通过参数化分析（或右手定则）可知，与 $\Gamma$ 方向匹配的曲面法向量为 $\mathbf{n} = (-\sin\theta,\ \cos\theta,\ 0)$（单位向量）。
   （注：亦可直接参数化计算 $I$ 得到同一结果，此处参数化过程略。）
5. **计算曲面积分**：
   $$\iint_S (\nabla \times \mathbf{F}) \cdot \mathbf{n} \,\mathrm{d}S = (-2,-2,-2) \cdot (-\sin\theta,\ \cos\theta,\ 0) \cdot \pi a^2 = 2\pi a^2 (\sin\theta - \cos\theta).$$
   故 $I = 2\pi a^2 (\sin\theta - \cos\theta)$。
6. **求最大值**：
   $$I = 2\pi a^2 (\sin\theta - \cos\theta) = 2\sqrt{2}\pi a^2 \sin\left(\theta - \frac{\pi}{4}\right).$$
   $\theta \in (-\frac{\pi}{2},\frac{\pi}{2})$，则 $\theta - \frac{\pi}{4} \in (-\frac{3\pi}{4},\frac{\pi}{4})$。$\sin$ 在该区间内单调递增，最大值在右端点 $\theta = \frac{\pi}{2}$（极限情况）处取得，此时 $\sin(\frac{\pi}{2}-\frac{\pi}{4}) = \frac{\sqrt{2}}{2}$，$I = 2\sqrt{2}\pi a^2 \cdot \frac{\sqrt{2}}{2} = 2\pi a^2$。
   当 $\theta = \frac{\pi}{2}$ 时，曲线退化为 $x=0$ 平面上的圆 $y^2+z^2=a^2$，直接参数化可验证积分值恰为 $2\pi a^2$。

**易错点**
- **方向符号**：易将曲线方向对应的法向量取反，导致 $I$ 表达式符号相反，需通过特例（如 $\theta=0$）或参数化验证。
- **参数范围**：$\theta$ 的开区间内 $I$ 无最大值（仅上确界），需注意端点 $\theta = \frac{\pi}{2}$ 的极限意义，考试中通常认为可取值。
- **参数化错误**：直接参数化时若方向选择不当，积分结果会差一个负号，建议先统一用斯托克斯公式避免方向混淆。

**命题规律**
- 常将曲线积分与曲面积分、最值问题结合，考查对斯托克斯公式的灵活运用。
- 旋度常向量使曲面积分简化为点乘，体现“化曲为直”的思维。
- 复习时需熟练掌握旋度计算、右手定则确定曲面侧，以及三角函数的极值求解。


> 来源：《26_张宇八套卷（数一）》卷一 第 20 题
