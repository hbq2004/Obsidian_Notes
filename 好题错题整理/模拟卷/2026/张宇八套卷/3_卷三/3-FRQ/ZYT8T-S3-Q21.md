---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - LA
  - 26_张宇八套卷/卷三/FRQ
  - 计算题
  - 二次型矩阵
  - 正交变换
  - 特征值与特征向量
  - 矩阵的迹
  - 对称矩阵平方根
points:
level:
---

# FRQ 第 21 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S3-Q21_题目.png|题目]]

21.（本题满分 12 分）

设 $f(x)=(\boldsymbol{\alpha}^{\mathrm{T}} \boldsymbol{x})^{2}+k\left(\boldsymbol{\beta}^{\mathrm{T}} \boldsymbol{x}\right)^{2}$ 的二次型矩阵的迹为 3,其中

$$
\boldsymbol{\alpha}=\left(\frac{1}{\sqrt{2}}, 0,-\frac{1}{\sqrt{2}}\right)^{\mathrm{T}}, \boldsymbol{\beta}=\left(\frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}}\right)^{\mathrm{T}}, \boldsymbol{x}=\left(x_{1}, x_{2}, x_{3}\right)^{\mathrm{T}} .
$$

（1）求 $k$ 的值,并求正交矩阵 $\mathbf{Q}$,将 $f(x)$ 化为标准形;

（2）求一个实对称矩阵 $\mathbf{P}$,使 $f(x)=(\mathbf{P} \boldsymbol{x})^{\mathrm{T}} \mathbf{P} \boldsymbol{x}$.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S3-Q21_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
- $k=2$。
- 可取正交矩阵 $\mathbf{Q}=\begin{pmatrix} \frac{1}{\sqrt2} & \frac{1}{\sqrt3} & \frac{1}{\sqrt6} \\ 0 & \frac{1}{\sqrt3} & -\frac{2}{\sqrt6} \\ -\frac{1}{\sqrt2} & \frac{1}{\sqrt3} & \frac{1}{\sqrt6} \end{pmatrix}$，则 $\mathbf{Q}^T A \mathbf{Q}=\mathrm{diag}(1,2,0)$，标准形为 $y_1^2+2y_2^2$。
- 可取 $\mathbf{P}=\begin{pmatrix} \frac{1}{2}+\frac{\sqrt2}{3} & \frac{\sqrt2}{3} & -\frac{1}{2}+\frac{\sqrt2}{3} \\ \frac{\sqrt2}{3} & \frac{\sqrt2}{3} & \frac{\sqrt2}{3} \\ -\frac{1}{2}+\frac{\sqrt2}{3} & \frac{\sqrt2}{3} & \frac{1}{2}+\frac{\sqrt2}{3} \end{pmatrix}$。
关键给分点：正确求$k$；正确构造$Q$；正确给出标准形；正确给出$P$。

**解题切入点**
本题本质是二次型矩阵的谱分解。先由外积表示得到 $A=\alpha\alpha^T + k\beta\beta^T$，利用迹求$k$；再观察到 $\alpha,\beta$ 正交且单位，直接得到特征向量与特征值，从而快速正交对角化。类比算法竞赛中，将矩阵分解看作“哈希映射”到正交基上，再对系数取平方根即可。

**推演**
1. 由 $f(x)=x^T(\alpha\alpha^T+k\beta\beta^T)x$，故 $A=\alpha\alpha^T+k\beta\beta^T$。
2. 计算 $\mathrm{tr}(A)=\alpha^T\alpha+k\beta^T\beta=1+k$，已知$=3$，得$k=2$。
3. 令 $\alpha,\beta$ 为列向量，且 $\alpha^T\beta=0$，$\|\alpha\|=\|\beta\|=1$，所以 $A\alpha=\alpha$，$A\beta=2\beta$，故特征值为$1,2$，对应特征向量$\alpha,\beta$。第三个特征值为$0$，取 $\gamma=\alpha\times\beta$ 单位化（此处已单位），计算得 $\gamma=(\frac{1}{\sqrt6},-\frac{2}{\sqrt6},\frac{1}{\sqrt6})^T$。
4. 令 $\mathbf{Q}$ 以 $\alpha,\beta,\gamma$ 为列，则 $\mathbf{Q}$ 正交，且 $\mathbf{Q}^T A \mathbf{Q}=\mathrm{diag}(1,2,0)$。
5. 令 $\mathbf{x}=\mathbf{Q}\mathbf{y}$，则 $f=y_1^2+2y_2^2$。
6. 对 $\mathbf{P}$，取 $\mathbf{P}=\alpha\alpha^T+\sqrt2\beta\beta^T$，可直接验证 $\mathbf{P}^2=A$，且$\mathbf{P}$为实对称矩阵，故 $f=(\mathbf{P}x)^T\mathbf{P}x$。

**易错点**
- 误把 $\alpha\alpha^T$ 写成 $\alpha^T\alpha$；注意外积是矩阵。
- 计算迹时忘记共轭？这里实向量无影响，但要用公式$\mathrm{tr}(\alpha\alpha^T)=\alpha^T\alpha$。
- 特征向量必须单位化且正交，顺序不同标准形顺序可交换，但必须保证正交矩阵。
- $P$ 不唯一，但必须满足对称且平方为$A$，这里给出的$P$是常见的对称平方根。

**命题规律**
常以二次型为载体，结合向量内积、矩阵迹、正交对角化、平方根分解等知识点。复习时注意将二次型与矩阵运算联系起来，掌握对称矩阵的正交对角化方法，以及正半定矩阵的平方根构造。


> 来源：《26_张宇八套卷（数一）》卷三 第 21 题
