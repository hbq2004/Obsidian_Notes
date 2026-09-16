---
ctime: 2026-08-18 02:29:15
mtime: 2026-08-20 01:32:04
tags:
  - LA
  - 26_ep最后一卷/套五/MCQ
  - 概念题
  - 线性相关
  - 线性无关
  - 矩阵乘法
  - 零矩阵反例
  - 线性变换保无关性
points:
level:
---

# MCQ 第 6 题

![[_Attachments/题目识别/JJ8T/JJ8T-S5-Q06_题目.png|题目]]

6. 设 $\alpha_1, \alpha_2, \ldots, \alpha_s$ 均为 $n$ 维列向量，$A$ 是 $m \times n$ 矩阵，下列选项正确的是( )

A. 若 $A\alpha_1, A\alpha_2, \ldots, A\alpha_s$ 线性相关，则 $\alpha_1, \alpha_2, \ldots, \alpha_s$ 线性相关

B. 若 $A\alpha_1, A\alpha_2, \ldots, A\alpha_s$ 线性相关，则 $\alpha_1, \alpha_2, \ldots, \alpha_s$ 线性无关

C. 若 $A\alpha_1, A\alpha_2, \ldots, A\alpha_s$ 线性无关，则 $\alpha_1, \alpha_2, \ldots, \alpha_s$ 线性相关

D. 若 $A\alpha_1, A\alpha_2, \ldots, A\alpha_s$ 线性无关，则 $\alpha_1, \alpha_2, \ldots, \alpha_s$ 线性无关


---

## DeepSeek V4 Flash Max

【考点】本题考查线性变换（矩阵乘法）下向量组线性相关性的保持关系。类比算法竞赛中的“哈希映射”：若映射后的结果不同（线性无关），则原对象必然不同；但映射后相同（线性相关）不代表原对象相同。核心结论：线性映射不会把线性无关的向量组变成线性相关（但可能把线性相关变为无关？实际也不变，因为线性映射保持线性关系，但相关可能被压缩为相关或零）。确切地说：若 $\alpha_1,\ldots,\alpha_s$ 线性相关，则存在不全为零的 $c_i$ 使 $\sum c_i \alpha_i=0$，左乘 $A$ 得 $\sum c_i A\alpha_i=0$，所以 $A\alpha_i$ 必线性相关。因此，若 $A\alpha_i$ 线性无关，则 $\alpha_i$ 必线性无关（逆否命题）。

【解】设 $\alpha_1,\alpha_2,\ldots,\alpha_s$ 为 $n$ 维列向量，$A$ 为 $m\times n$ 矩阵。

- 充分性检验：若 $\alpha_1,\ldots,\alpha_s$ 线性相关，则存在不全为零的常数 $k_1,\ldots,k_s$，使得 $\sum_{i=1}^s k_i \alpha_i = 0$。两边左乘 $A$，得 $\sum_{i=1}^s k_i (A\alpha_i) = A\cdot 0 = 0$。由于 $k_i$ 不全为零，故 $A\alpha_1,\ldots,A\alpha_s$ 线性相关。
- 逆否命题：若 $A\alpha_1,\ldots,A\alpha_s$ 线性无关，则 $\alpha_1,\ldots,\alpha_s$ 不能线性相关（否则由上述推导会推出 $A\alpha_i$ 线性相关，矛盾），故 $\alpha_1,\ldots,\alpha_s$ 必线性无关。选项 D 正确。

逐项分析：
- A 错：反例取 $A=0$（零矩阵），任意 $\alpha_1,\alpha_2$ 线性无关，但 $A\alpha_1=A\alpha_2=0$ 线性相关。
- B 错：同上，取 $A=0$，$\alpha_1,\alpha_2$ 线性相关时，$A\alpha_1,A\alpha_2$ 也线性相关，但原向量组可以相关也可以无关，不能推出无关。
- C 错：由上述逆否命题知，若 $A\alpha_i$ 线性无关，则 $\alpha_i$ 必线性无关，不可能线性相关。
- D 对：详见推演。

【答案】正确选项为 (D)。

【易错点】易混淆“线性相关”的传递方向：若原向量组线性相关，则映射后必线性相关；但映射后线性相关，原向量组不一定相关（因为映射可能把无关向量压到同一点，如零矩阵）。务必牢记逆否命题：映射后线性无关 ⇒ 原向量组线性无关。另外注意，若 $A$ 是列满秩矩阵，则原向量组与映射后向量组的线性相关性完全一致，但本题未给此条件。题面按标准线性代数表述理解（OCR 无疑误）。

【命题规律】此类题常以选择题形式考查线性映射（矩阵乘法）对向量组线性相关性的影响，核心是秩不等式 $r(A\alpha_1,\ldots,A\alpha_s) \le r(\alpha_1,\ldots,\alpha_s)$，以及线性相关定义。复习时抓住“线性相关即存在非零组合为零”的本质，并会构造零矩阵反例。建议多做此类逆否命题的推理训练。

---

## V4 Flash Max 解析

**答案**: D。若 $A\alpha_1,\ldots,A\alpha_s$ 线性无关，则 $\alpha_1,\ldots,\alpha_s$ 必线性无关。理由：若 $\alpha_i$ 线性相关，则存在不全为零的 $k_i$ 使 $\sum k_i\alpha_i=0$，左乘 $A$ 得 $\sum k_i A\alpha_i=0$，与 $A\alpha_i$ 线性无关矛盾。

**解题切入点**: 这是“线性映射保持相关性，但不保持无关性”的典型题。用算法竞赛类比：线性映射相当于“有损压缩/哈希”，映射后可能丢失信息，所以相关性能被保留下来（压缩后仍相关），而无关性不一定被保留（压缩后无关说明原数据一定无关，因为压缩不会无中生有）。

**推演**: 
设 $\alpha_1,\ldots,\alpha_s$ 线性相关，则存在不全为零的常数 $k_1,\ldots,k_s$，使得
$$
k_1\alpha_1+\cdots+k_s\alpha_s=0.
$$
两边左乘矩阵 $A$，得
$$
A(k_1\alpha_1+\cdots+k_s\alpha_s)=0,
$$
即
$$
k_1A\alpha_1+\cdots+k_sA\alpha_s=0.
$$
由于 $k_i$ 不全为零，因此 $A\alpha_1,\ldots,A\alpha_s$ 线性相关。这就是原命题的逆否命题：若 $A\alpha_i$ 线性无关，则 $\alpha_i$ 线性无关。  
所以 A、B、C 均不正确，D 正确。

反例说明其他选项错误：
- A 错：取 $A=0$，任意相关 $\alpha_i$ 都使 $A\alpha_i=0$ 相关，但 $\alpha_i$ 可以无关。例如 $n=2$，取 $\alpha_1=(1,0)^T,\alpha_2=(0,1)^T$，$A$ 为零矩阵，则 $A\alpha_1=A\alpha_2=0$ 线性相关，而 $\alpha_1,\alpha_2$ 线性无关。
- C 错：取 $A=I$（恒等映射），若 $A\alpha_i=\alpha_i$ 线性无关，则 $\alpha_i$ 也线性无关，不可能相关。

**易错点**: 
1. 误以为“线性无关映射后仍线性无关”。矩阵乘法可能把不同向量映成同一个向量或零向量，比如零矩阵，所以无关性不一定保留。
2. 误以为“线性相关映射后仍线性相关”是对的，但题目问的是由像的相关性反推原像的相关性，相关只能推出“可能相关”，不能确定。
3. 做选择题时，可以构造极端矩阵 $A=0$ 和 $A=I$ 来快速排除 A、C；B 本身就是反向错误。  
自检：用秩的语言，$A[\alpha_1,\ldots,\alpha_s]$ 的列秩不超过 $[\alpha_1,\ldots,\alpha_s]$ 的列秩，因此若像的秩为 $s$，则原像的秩也为 $s$，即原像线性无关。

**命题规律**: 线性相关性与线性映射的关系是线性代数高频考点。常见变式：
- 给 $A$ 可逆/列满秩等条件，问能否由 $A\alpha_i$ 的无关性推出 $\alpha_i$ 的无关性；
- 用矩阵秩不等式 $\mathrm{rank}(AB)\le \mathrm{rank}(B)$ 或 $\mathrm{rank}(AB)\le \mathrm{rank}(A)$ 判断；
- 与方程组 $Ax=0$ 的解空间结合：若 $A$ 列满秩，则 $Ax=0$ 只有零解，映射是单射，此时无关性也能保留。  
联系知识点：线性变换、向量组秩、矩阵乘法、齐次方程组。
