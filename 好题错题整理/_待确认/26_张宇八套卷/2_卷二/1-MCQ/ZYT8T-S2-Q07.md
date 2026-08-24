---
ctime: 2026-08-24 17:34:54
mtime: 2026-08-24 17:34:54
tags:
  - LA
  - 26_张宇八套卷/卷二/MCQ
  - 概念题
  - 矩阵相似判定
  - Jordan标准形
  - 特征多项式
  - 特征值几何重数
  - 相似不变量
points:
level:
---

# MCQ 第 7 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S2-Q07_题目.png|题目]]

下列矩阵中,与 $ \begin{pmatrix} 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix} $ 不相似的是.
(A) $ \begin{pmatrix} 2 & 0 & -1 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix} $.
(B) $ \begin{pmatrix} 2 & 0 & 0 \\ -1 & 2 & 1 \\ 0 & 0 & 1 \end{pmatrix} $.
(C) $ \begin{pmatrix} 2 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 2 \end{pmatrix} $.
(D) $ \begin{pmatrix} 2 & -1 & 0 \\ 1 & 2 & 0 \\ 0 & 0 & 1 \end{pmatrix} $.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S2-Q07_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

【答案】(D)。题干写成 $2\times 3$ 矩阵不是方阵，不能谈相似；按选项和常见命题意图，应为 OCR 漏项。按最合理读法，参照矩阵与 (A)(B)(C) 有相同 Jordan 标准形 $J=J_2(2)\oplus J_1(1)$，因此不相似的是 (D)。

**解题切入点**

相似矩阵是同一线性变换在不同基下的表示；判断相似先看“不变量”：特征多项式、迹、行列式，最终用 Jordan 标准形判定。类似算法竞赛里先比较哈希值再比对 canonical 对象：特征值不同可直接判死，特征值相同还要看几何重数/Jordan 块。

**推演**

设参照矩阵的 Jordan 标准形为 $J=J_2(2)\oplus J_1(1)$。逐一检查四个选项：

- (A)：$\chi_A(\lambda)=(2-\lambda)^2(1-\lambda)$，且 $\operatorname{rank}(A-2I)=2$，故 $\lambda=2$ 的几何重数为 $3-2=1$。$\lambda=2$ 对应一个 2 阶 Jordan 块，$\lambda=1$ 对应 1 阶块，所以 $A\sim J$。
- (B)：$\chi_B(\lambda)=(2-\lambda)^2(1-\lambda)$，且 $\operatorname{rank}(B-2I)=2$，同理 $B\sim J$。
- (C)：$\chi_C(\lambda)=(2-\lambda)^2(1-\lambda)$，且 $\operatorname{rank}(C-2I)=2$，同理 $C\sim J$。
- (D)：$\chi_D(\lambda)=((2-\lambda)^2+1)(1-\lambda)$，特征值为 $2\pm i,1$，与参照矩阵的特征值 $2,2,1$ 不同，故 $D\nsim J$。

因此答案为 (D)。

**易错点**

1. 只比较特征多项式不够：特征值相同仍可能不相似，还要比较 $\operatorname{rank}(A-\lambda I)^k$ 或 Jordan 标准形。
2. (B) 虽然不是标准的上三角矩阵，但特征多项式可直接展开；不要因位置“乱”而误判。
3. (D) 有复特征值，和实特征值 $2,2,1$ 的矩阵不可能相似；不要把 $2\times2$ 实块误当成 $\lambda=2$ 的二重特征值。
4. 题干若是 $2\times 3$ 矩阵，先检查是否 OCR 漏项，不能机械套相似定义。

**命题规律**

考研线性代数常在选择题中给出几个矩阵，让学生判断“谁与谁相似”。复习时记住判定链：特征多项式、迹、行列式是必要不充分；最终判据是 Jordan 标准形/不变因子。遇到此类题，先利用特征值排除不同者，再用 $\operatorname{rank}(A-\lambda I)$ 补验同特征值情形。

题面按“参照矩阵为 3 阶方阵且 Jordan 形为 $J_2(2)\oplus J_1(1)$”理解（OCR 疑误，请核对原书）。


> 来源：《26_张宇八套卷（数一）》卷二 第 7 题
