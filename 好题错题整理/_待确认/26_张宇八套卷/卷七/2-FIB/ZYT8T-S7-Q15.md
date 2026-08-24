---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - LA
  - 26_张宇八套卷/卷七/FIB
  - 计算题
  - 矩阵相似特征值
  - 分块行列式
  - 伴随矩阵
  - 逆矩阵行列式
points:
level:
---

# FIB 第 15 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S7-Q15_题目.png|题目]]

已知 $3$ 阶矩阵 $\mathbf{A},\mathbf{B}$ 相似，$\lambda_1=1,\lambda_2=2$ 为 $\mathbf{A}$ 的两个特征值，行列式 $|\mathbf{B}|=2$，则行列式
$$
\left| \begin{matrix} (\mathbf{A}+\mathbf{E})^{-1} & \mathbf{O} \\ \mathbf{O} & (2\mathbf{B})^{*} \end{matrix} \right| = \_\_\_\_\_\_\_.
$$

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S7-Q15_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

$$\left| \begin{matrix} (\mathbf{A}+\mathbf{E})^{-1} & \mathbf{O} \\ \mathbf{O} & (2\mathbf{B})^{*} \end{matrix} \right| = \frac{64}{3}.$$

【答案】:  $$\boxed{\dfrac{64}{3}}$$

**解题切入点**

考查分块对角矩阵行列式、相似矩阵特征值、逆矩阵与伴随矩阵的行列式。类似算法竞赛中把大问题拆成若干独立子问题，分别求值再相乘。

**推演**

设原矩阵为 $\mathbf{M}$，则 $|\mathbf{M}|=|(\mathbf{A}+\mathbf{E})^{-1}|\cdot |(2\mathbf{B})^{*}|$。

1. 由 $\mathbf{A}\sim\mathbf{B}$，特征值相同。设 $\mathbf{B}$ 的第三个特征值为 $\lambda_3$，则 $1\cdot 2\cdot \lambda_3=|\mathbf{B}|=2$，故 $\lambda_3=1$。因此 $\mathbf{A}$ 的特征值为 $1,1,2$。

2. $\mathbf{A}+\mathbf{E}$ 的特征值为 $2,2,3$，所以 $|\mathbf{A}+\mathbf{E}|=12$，故 $|(\mathbf{A}+\mathbf{E})^{-1}|=\dfrac{1}{12}$。

3. $|2\mathbf{B}|=2^3|\mathbf{B}|=16$。对 $3$ 阶矩阵 $\mathbf{C}$，$|\mathbf{C}^{*}|=|\mathbf{C}|^2$，所以 $|(2\mathbf{B})^{*}|=16^2=256$。

4. 合并：$|\mathbf{M}|=\dfrac{1}{12}\times 256=\dfrac{64}{3}$。

可自检：由 $\mathbf{A}$ 的特征值反推 $|\mathbf{A}+\mathbf{E}|=12$，且 $|2\mathbf{B}|=16$，乘积与前面一致。

关键给分点：①由相似和 $|\mathbf{B}|=2$ 推出第三个特征值；②分块行列式拆分；③$|\mathbf{C}^{*}|=|\mathbf{C}|^{n-1}$。

**易错点**

- 不要把 $|2\mathbf{B}|$ 误算成 $2|\mathbf{B}|=4$，对 $3$ 阶矩阵应提 $2^3$。
- 伴随矩阵行列式公式中的指数是 $n-1$，这里是 $3$ 阶矩阵，所以用平方；不要与 $n$ 混淆。
- 分块矩阵不是分块对角时不能直接拆行列式；本题是分块对角矩阵，可以拆。
- 相似矩阵特征值相同，但第三个特征值要由行列式确定，不能漏掉。

**命题规律**

常把相似、特征值、逆矩阵、伴随矩阵、分块行列式组合成一道填空题。复习时要把矩阵行列式的运算规则串成体系：$|k\mathbf{A}|=k^n|\mathbf{A}|$、$|\mathbf{A}^{-1}|=|\mathbf{A}|^{-1}$、$|\mathbf{A}^{*}|=|\mathbf{A}|^{n-1}$、分块对角行列式拆分。


> 来源：《26_张宇八套卷（数一）》卷七 第 15 题
