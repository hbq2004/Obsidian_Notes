---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - PS
  - 26_余丙森五套卷/卷五/MCQ
  - 计算题
  - 二维随机变量变换
  - 雅可比行列式
  - 概率密度公式
  - 变量替换
  - 联合密度
points:
level:
---

# MCQ 第 9 题

![[_Attachments/题目识别/YBS5T/YBS5T-S5-Q09_题目.png|题目]]

设二维连续随机变量 $(X, Y)$ 的概率密度为 $f(x, y)$，$U = -Y$，$V = 2X + Y$，则 $(U, V)$ 的概率密度为(\_\_\_\_).
(A) $ f\left(-u, \frac{v+u}{2}\right) $
(B) $ \frac{1}{2} f\left(\frac{v+u}{2}, -u\right) $
(C) $ f\left(\frac{v+u}{2}, -u\right) $
(D) $ 2 f\left(\frac{v+u}{2}, -u\right) $

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S5-Q09_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】: (B)

【推演】逐一分析各选项：

- (A) 错误：$f\left(-u,\frac{v+u}{2}\right)$ 自变量顺序写反，且漏系数 $\frac{1}{2}$；
- (B) 正确：由变换公式得 $f_{U,V}(u,v)=\frac{1}{2}f\left(\frac{v+u}{2},-u\right)$；
- (C) 错误：$f\left(\frac{v+u}{2},-u\right)$ 漏系数 $\frac{1}{2}$；
- (D) 错误：系数为 $2$，应为 $\frac{1}{2}$。

**解题切入点**

考查二维连续随机变量线性变换下的概率密度；破题关键是“反解 + 雅可比”，类似算法竞赛坐标变换需乘缩放因子。

**推演**

由

$$U=-Y,\quad V=2X+Y$$

反解出

$$X=\frac{V+U}{2},\quad Y=-U.$$

计算反变换雅可比行列式：

$$J=\frac{\partial(X,Y)}{\partial(U,V)}=\begin{vmatrix}\frac{1}{2} & \frac{1}{2}\\-1 & 0\end{vmatrix}=\frac{1}{2}.$$

因此

$$f_{U,V}(u,v)=f\left(\frac{v+u}{2},-u\right)|J|=\frac{1}{2}f\left(\frac{v+u}{2},-u\right).$$

故选 (B)。

**易错点**

1. 易误用原变换行列式绝对值 $2$ 选 D，密度公式中应乘反变换行列式绝对值 $\frac{1}{2}$；
2. 注意 $(U,V)$ 的自变量顺序，反解时要正确对应，避免写成 $f\left(-u,\frac{v+u}{2}\right)$；
3. 系数 $\frac{1}{2}$ 不能漏。

**命题规律**

线性变换求联合密度是高频题，常与二维均匀分布、正态分布结合。复习要熟练“反解-雅可比-代换”三步，并可用原变换行列式取倒数检验。


> 来源：《26_余丙森五套卷（数一）》卷五 第 9 题
