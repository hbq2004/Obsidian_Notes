---
ctime: 2026-08-24 07:13:13
mtime: 2026-08-24 07:13:13
tags:
  - LA
  - 26_张宇四套卷/卷二/MCQ
  - 概念题
  - 初等行变换
  - 矩阵的秩
  - 行等价
  - 行阶梯形矩阵
points:
level:
---

# 选择题 第 6 题

![[_Attachments/题目识别/ZY4T/ZY4T-S2-Q06_题目.png|题目]]

6. 下列矩阵中，可以经过若干次初等行变换得到矩阵 $ \begin{pmatrix} 1 & 1 & 0 & 1 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix} $ 的是.

(A) $ \begin{pmatrix} 1 & 1 & 0 & 1 \\ 1 & 2 & 1 & 3 \\ 2 & 3 & 1 & 4 \end{pmatrix} $.

(B) $ \begin{pmatrix} 1 & 1 & 0 & 1 \\ 1 & 1 & 2 & 5 \\ 1 & 1 & 1 & 3 \end{pmatrix} $.

(C) $ \begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 3 \\ 0 & 1 & 0 & 0 \end{pmatrix} $.

(D) $ \begin{pmatrix} 1 & 1 & 0 & 1 \\ 1 & 2 & 0 & 1 \\ 2 & 3 & 0 & 2 \end{pmatrix} $.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S2-Q06_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
本题正确答案为 (D)。
选择题【答案】: (D)
【推演】
- (A) 通过行变换化为 $\begin{pmatrix} 1 & 1 & 0 & 1 \\ 0 & 1 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$，与目标矩阵行最简形不同，故不能。
- (B) 化为 $\begin{pmatrix} 1 & 1 & 0 & 1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$，不同，故不能。
- (C) 秩为3，目标矩阵秩为2，故不能。
- (D) 直接经行变换可得目标矩阵，故能。

**解题切入点**
本题主要考查矩阵的初等行变换与行等价的概念。初等行变换不改变矩阵的秩和行空间，因此可通过直接行变换或比较行最简形判断。类似于算法竞赛中通过哈希或模拟判断对象等价，此处直接模拟变换即可快速得出答案。

**推演**
详细过程如下：
目标矩阵 $A = \begin{pmatrix} 1 & 1 & 0 & 1 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}$，秩为2。
对选项逐一进行初等行变换：

- (A) $\begin{pmatrix} 1 & 1 & 0 & 1 \\ 1 & 2 & 1 & 3 \\ 2 & 3 & 1 & 4 \end{pmatrix} \xrightarrow{r_2-r_1, r_3-2r_1} \begin{pmatrix} 1 & 1 & 0 & 1 \\ 0 & 1 & 1 & 2 \\ 0 & 1 & 1 & 2 \end{pmatrix} \xrightarrow{r_3-r_2} \begin{pmatrix} 1 & 1 & 0 & 1 \\ 0 & 1 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$，其行最简形为 $\begin{pmatrix} 1 & 0 & -1 & -1 \\ 0 & 1 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$，与 $A$ 的行最简形 $\begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}$ 不同，故不能。

- (B) $\begin{pmatrix} 1 & 1 & 0 & 1 \\ 1 & 1 & 2 & 5 \\ 1 & 1 & 1 & 3 \end{pmatrix} \xrightarrow{r_2-r_1, r_3-r_1} \begin{pmatrix} 1 & 1 & 0 & 1 \\ 0 & 0 & 2 & 4 \\ 0 & 0 & 1 & 2 \end{pmatrix} \xrightarrow{\frac{1}{2}r_2} \begin{pmatrix} 1 & 1 & 0 & 1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 1 & 2 \end{pmatrix} \xrightarrow{r_3-r_2} \begin{pmatrix} 1 & 1 & 0 & 1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$，行最简形为 $\begin{pmatrix} 1 & 1 & 0 & 1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$，与 $A$ 不同，故不能。

- (C) $\begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 3 \\ 0 & 1 & 0 & 0 \end{pmatrix} \xrightarrow{r_3-r_2} \begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 0 & -3 \end{pmatrix} \xrightarrow{-\frac{1}{3}r_3} \begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 0 & 1 \end{pmatrix} \xrightarrow{r_1-r_3, r_2-3r_3} \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$，秩为3，而 $A$ 秩为2，故不能通过初等行变换得到（初等行变换不改变秩）。

- (D) $\begin{pmatrix} 1 & 1 & 0 & 1 \\ 1 & 2 & 0 & 1 \\ 2 & 3 & 0 & 2 \end{pmatrix} \xrightarrow{r_2-r_1, r_3-2r_1} \begin{pmatrix} 1 & 1 & 0 & 1 \\ 0 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 \end{pmatrix} \xrightarrow{r_3-r_2} \begin{pmatrix} 1 & 1 & 0 & 1 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}$，即为目标矩阵，故 (D) 正确。

**易错点**
1. 误以为初等行变换可以改变矩阵的秩，实际上行变换保持秩不变。
2. 混淆行变换与列变换，本题只允许行变换。
3. 直接比较行最简形时，需化为标准形，注意行最简形唯一。
4. 计算时要仔细，避免符号错误。

**命题规律**
此类题目常以选择题形式出现，考查对初等行变换和矩阵秩的理解。解题关键在于掌握行变换的不变性，通过计算行最简形或直接变换判断。复习时需熟练掌握行阶梯形矩阵的化法，并注意行变换与列变换的区别。


> 来源：《26_张宇四套卷（数一）》卷二 第 6 题
