---
ctime: 2026-08-24 15:13:03
mtime: 2026-08-24 15:13:03
tags:
  - LA
  - 26_余丙森五套卷/卷四/FIB
  - 计算题
  - 相似矩阵
  - 特征值
  - 行列式
  - 矩阵乘法
  - 列和与特征值
points:
level:
---

# FIB 第 15 题

![[_Attachments/题目识别/YBS5T/YBS5T-S4-Q15_题目.png|题目]]

设三阶矩阵 $\boldsymbol{A}, \boldsymbol{B}$ 相似，$\boldsymbol{B}$ 的各列元素之和均为 6 ，且 $|\sqrt{3}\boldsymbol{E} + \boldsymbol{B}| = |\sqrt{3}\boldsymbol{E} - \boldsymbol{B}| = 0$，则行列式
$$\left| \frac{1}{3} \boldsymbol{A} - \frac{1}{3} \boldsymbol{AB} \right| = \_\_\_\_\_\_.$$

![[_Attachments/题目识别/YBS5T-答案/YBS5T-S4-Q15_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$$\boxed{-\dfrac{20}{3}}$$

**解题切入点**

本题通过相似矩阵特征值相同，将目标行列式转化为已知特征值的矩阵行列式。类比算法竞赛中，已知部分特征值信息，求复合表达式的行列式，核心是提取特征值。

**推演**

1. 由 $B$ 的各列元素之和均为 $6$，得 $B^T\begin{pmatrix}1\\1\\1\end{pmatrix}=6\begin{pmatrix}1\\1\\1\end{pmatrix}$，故 $B$ 有特征值 $6$。
2. 由 $|\sqrt{3}E+B|=0$ 得 $-\sqrt{3}$ 是 $B$ 的特征值；由 $|\sqrt{3}E-B|=0$ 得 $\sqrt{3}$ 是 $B$ 的特征值。
3. 所以 $B$ 的三个特征值为 $6,\sqrt{3},-\sqrt{3}$。
4. 因为 $A$ 与 $B$ 相似，故 $A$ 的特征值也为 $6,\sqrt{3},-\sqrt{3}$。
5. 计算 $|A|=6\cdot\sqrt{3}\cdot(-\sqrt{3})=-18$。
6. 计算 $|E-B|$：$E-B$ 的特征值为 $1-6=-5,\,1-\sqrt{3},\,1+\sqrt{3}$，故 $|E-B|=(-5)(1-\sqrt{3})(1+\sqrt{3})=-5\cdot(1-3)=10$。
7. 原式 $\left|\frac13A-\frac13AB\right|=\left|\frac13A(E-B)\right|=\left(\frac13\right)^3|A||E-B|=\frac1{27}\cdot(-18)\cdot10=-\frac{20}{3}$。

**易错点**
- 混淆 $B$ 的列和条件与行和条件，注意 $B$ 的列和均为 $6$ 对应 $B^T$ 的特征向量 $(1,1,1)^T$，从而 $B$ 也有特征值 $6$。
- 忽略行列式运算中的系数：$|kA|=k^n|A|$，这里 $n=3$。
- 错误地认为 $A$ 与 $B$ 可交换，但本题不需要交换性，行列式乘法总是成立。

**命题规律**
本题将矩阵相似、特征值、行列式综合考查，是线性代数中常见题型。复习时需熟练掌握特征值的多种求法（如行和、列和、特征多项式等），以及利用特征值计算行列式。建议多练习此类综合题，强化对矩阵运算性质的理解。


> 来源：《26_余丙森五套卷（数一）》卷四 第 15 题
