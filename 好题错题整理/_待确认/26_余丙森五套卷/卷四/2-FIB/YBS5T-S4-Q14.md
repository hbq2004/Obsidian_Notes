---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - AM
  - 26_余丙森五套卷/卷四/FIB
  - 计算题
  - 第一型曲线积分
  - 轮换对称性
  - 弧长积分
  - 曲线对称性
points:
level:
---

# FIB 第 14 题

![[_Attachments/题目识别/YBS5T/YBS5T-S4-Q14_题目.png|题目]]

设曲线 $C: x^2 + xy + y^2 = 1$ 的周长为 $l$ , $a, b$ 为常数，则 $\oint_C \frac{\sin e^x + 3\sin e^y}{\sin e^x + \sin e^y} \mathrm{d}s = \_.'$

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S4-Q14_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

按原卷最常见写法，被积函数应为
$$
\frac{a\sin e^x+b\sin e^y}{\sin e^x+\sin e^y}.
$$
若题面确为 $\frac{\sin e^x+3\sin e^y}{\sin e^x+\sin e^y}$，则对应 $a=1,b=3$。

【答案】:
$$
\boxed{\frac{(a+b)l}{2}}
$$

**解题切入点**

考查第一型曲线积分与曲线关于 $y=x$ 的轮换对称性。把分子拆成两项，利用 $C$ 在 $x\leftrightarrow y$ 下不变，使两个分项积分相等，再与周长 $l$ 联系。如同算法竞赛中“交换两个变量后值不变，和为总量”，可直接得系数和的一半。

**推演**

令
$$
S(x,y)=\sin e^x+\sin e^y,
$$
并记
$$
I_x=\oint_C\frac{\sin e^x}{S(x,y)}\,ds,\qquad
I_y=\oint_C\frac{\sin e^y}{S(x,y)}\,ds.
$$

曲线 $C:x^2+xy+y^2=1$ 关于直线 $y=x$ 对称；作变量替换 $x\leftrightarrow y$ 时，曲线方程不变，且第一型曲线积分的弧长微元 $ds$ 不变。因此
$$
I_x=\oint_C\frac{\sin e^y}{S(y,x)}\,ds
=\oint_C\frac{\sin e^y}{S(x,y)}\,ds=I_y.
$$

另一方面，
$$
I_x+I_y
=\oint_C\frac{\sin e^x+\sin e^y}{S(x,y)}\,ds
=\oint_C 1\,ds=l.
$$

所以
$$
I_x=I_y=\frac l2.
$$

于是原积分
$$
\oint_C\frac{a\sin e^x+b\sin e^y}{S(x,y)}\,ds
=aI_x+bI_y
=(a+b)\frac l2.
$$

若按题面显示系数 $1,3$，即 $a=1,b=3$，则结果为 $2l$。

**易错点**

- 不要把第一型曲线积分当成第二型；方向/参数化改变不会改变结果，这里关键是几何对称，而不是直接求椭圆积分。
- 不能认为 $\frac{a\sin e^x+b\sin e^y}{\sin e^x+\sin e^y}$ 可“约分”成 $a+b$，因为分母随点变化，不能提到积分号外；必须通过对称性把两项积分合并。
- 容易忽略“周长”条件：最后结果必须含 $l$。

**命题规律**

此类题常给一个对称的闭合曲线，并把被积函数设计成“两项之比”的形式。复习时应熟练掌握第一型曲线/曲面积分中的轮换对称性、奇偶对称性以及 $\oint_C 1\,ds=l$ 这类基本关系。

（题面按原卷常见写法 $a\sin e^x+b\sin e^y$ 理解；OCR 疑误，请核对原书。若确为题面所示 $1,3$，结果为 $2l$。）


> 来源：《26_余丙森五套卷（数一）》卷四 第 14 题
