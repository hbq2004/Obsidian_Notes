---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷五/FIB
  - 计算题
  - 旋度计算
  - 向量场
  - 偏导数
  - 斯托克斯公式
points:
level:
---

# FIB 第 13 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S5-Q13_题目.png|题目]]

设 $F(x,y,z)=|x|\cos y\mathbf{i}-y\sin z\mathbf{j}+z\mathbf{k}$, 则 $\operatorname{rot}\mathbf{F}(1,1,0)=\_\_\_\_\_\_\_\_.$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S5-Q13_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

由旋度公式 \(\operatorname{rot}\mathbf F=\nabla\times\mathbf F\)，计算得 \(\operatorname{rot}\mathbf F(1,1,0)=(1,0,\sin 1)\)。

【答案】

$$\boxed{(1,\,0,\,\sin 1)}$$

**解题切入点**

本题就是向量场的旋度（curl）计算：把三个分量看成数组，交叉偏导相减。算法竞赛类比：旋度相当于在每个点求向量场的“局部旋转量”，只需按公式做偏导后代入，无需求积分。

**推演**

设 \(\mathbf F=(P,Q,R)\)，其中

$$P=|x|\cos y,\quad Q=-y\sin z,\quad R=z.$$

旋度定义：

$$\operatorname{rot}\mathbf F=\nabla\times\mathbf F=\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z},\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x},\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right).$$

逐项求偏导：

- \(\dfrac{\partial R}{\partial y}=0\)，\(\dfrac{\partial Q}{\partial z}=-y\cos z\)，故第一分量为 \(0-(-y\cos z)=y\cos z\)。
- \(\dfrac{\partial P}{\partial z}=0\)，\(\dfrac{\partial R}{\partial x}=0\)，故第二分量为 \(0\)。
- \(\dfrac{\partial Q}{\partial x}=0\)，\(\dfrac{\partial P}{\partial y}=-|x|\sin y\)，故第三分量为 \(0-(-|x|\sin y)=|x|\sin y\)。

代入 \((x,y,z)=(1,1,0)\)：

$$\operatorname{rot}\mathbf F(1,1,0)=(1\cdot\cos 0,\,0,\,1\cdot\sin 1)=(1,\,0,\,\sin 1).$$

**易错点**

1. 旋度分量顺序易错：第一分量为 \(R_y-Q_z\)，第三分量为 \(Q_x-P_y\)，不要记成相反顺序。
2. \(Q=-y\sin z\) 对 \(z\) 求偏导得 \(-y\cos z\)，所以第一分量是 \(y\cos z\)，符号不要漏。
3. \(|x|\) 在 \(x=0\) 不可导，但本题所取点 \(x=1\) 处可正常代入；若涉及 \(\partial P/\partial x\) 才需讨论。
4. 角 \(y=1\) 按弧度制，\(\sin 1\) 不能写成 \(\sin 1^\circ\)。

**命题规律**

张宇八套卷中旋度、散度常以填空小题出现，重在对公式的熟练和符号细节。复习时要会用行列式展开 \(\nabla\times\mathbf F\)，同时注意与格林公式、斯托克斯公式的关联；遇到含绝对值、分段函数时，先判断偏导是否存在。


> 来源：《26_张宇八套卷（数一）》卷五 第 13 题
