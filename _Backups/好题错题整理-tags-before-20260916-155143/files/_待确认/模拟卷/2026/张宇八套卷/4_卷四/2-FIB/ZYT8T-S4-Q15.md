---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - LA
  - 26_张宇八套卷/卷四/FIB
  - 计算题
  - 非齐次线性方程组通解结构
  - 基础解系
  - 矩阵的秩
  - 列向量线性组合
  - 行最简形
points:
level:
---

# FIB 第 15 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S4-Q15_题目.png|题目]]

15. 设 $\alpha_1=\begin{pmatrix}1 \\ 2\end{pmatrix}, \alpha_2=\begin{pmatrix}1 \\ -1\end{pmatrix}, \alpha_3=\begin{pmatrix}0 \\ 4\end{pmatrix}, \alpha_4=\begin{pmatrix}2 \\ -3\end{pmatrix}, A=(\alpha_1, \alpha_2, \alpha_3, \alpha_4)$，则 $Ax=\alpha_2+3\alpha_4$ 的通解为 \_.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S4-Q15_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

填空题【答案】:
$$
\boxed{x=\begin{pmatrix}0\\1\\0\\3\end{pmatrix}+c_1\begin{pmatrix}-4\\4\\3\\0\end{pmatrix}+c_2\begin{pmatrix}1\\-7\\0\\3\end{pmatrix},\quad c_1,c_2\in\mathbb{R}}
$$

最终结论：由于 $r(A)=2$，未知量个数为4，所以通解含2个任意常数；特解 $x_0=(0,1,0,3)^T$ 直接对应 $\alpha_2+3\alpha_4$，齐次基础解系为上述两个向量。

**解题切入点**

考查非齐次线性方程组 $Ax=b$ 的通解结构：特解 + 齐次通解。类比算法竞赛：已知 $b$ 是列向量组的组合，立即找到一个特解；再解齐次方程求基础解系。

**推演**

1. 右端向量为 $b=\alpha_2+3\alpha_4=(7,-10)^T$。
2. 取 $x_0=(0,1,0,3)^T$，则 $Ax_0=\alpha_2+3\alpha_4=b$，故 $x_0$ 是特解。
3. 求 $Ax=0$ 的基础解系。对 $A$ 作行变换：
$$
A=\begin{pmatrix}1&1&0&2\\2&-1&4&-3\end{pmatrix}\sim\begin{pmatrix}1&1&0&2\\0&-3&4&-7\end{pmatrix}
$$
令 $x_3,x_4$ 为自由变量。由第二行得 $-3x_2+4x_3-7x_4=0$，即 $x_2=\frac{4x_3-7x_4}{3}$；由第一行得 $x_1=-x_2-2x_4=\frac{x_4-4x_3}{3}$。
令 $(x_3,x_4)=(1,0)$ 得 $\frac{1}{3}(-4,4,3,0)^T$，取 $\eta_1=(-4,4,3,0)^T$；令 $(x_3,x_4)=(0,1)$ 得 $\frac{1}{3}(1,-7,0,3)^T$，取 $\eta_2=(1,-7,0,3)^T$。
4. 因此通解为
$$
x=x_0+c_1\eta_1+c_2\eta_2=\begin{pmatrix}0\\1\\0\\3\end{pmatrix}+c_1\begin{pmatrix}-4\\4\\3\\0\end{pmatrix}+c_2\begin{pmatrix}1\\-7\\0\\3\end{pmatrix},\quad c_1,c_2\in\mathbb{R}.
$$
自检：$Ax_0=b$，$A\eta_1=A\eta_2=0$，通解正确。

**易错点**

- 不要忘记齐次通解：非齐次通解必须包含特解和齐次基础解系的线性组合。
- 自由变量选取不唯一，但基础解系个数必须为 $n-r(A)=2$，且线性无关。
- 本题给出的基础解系可以整体乘非零倍数，如 $\eta_1,\eta_2$；答案形式不唯一，但必须满足方程。
- 行最简形计算时注意符号，防止 $x_2$ 的系数出错。

**命题规律**

线代必考题型：给列向量构造矩阵，求线性方程组通解。常与“线性表示”“秩”“基础解系”综合。复习时熟练化行最简形求基础解系，并注意利用右端为列向量组合时快速找特解。


> 来源：《26_张宇八套卷（数一）》卷四 第 15 题
