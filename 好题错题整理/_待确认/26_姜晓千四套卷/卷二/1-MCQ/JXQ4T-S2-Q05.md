---
ctime: 2026-08-23 23:04:12
mtime: 2026-08-23 23:04:12
tags:
  - LA
  - 26_姜晓千四套卷/卷二/MCQ
  - 概念题
  - 矩阵的秩
  - 行满秩与列满秩
  - 左逆与右逆
  - 线性映射维数定理
points:
level:
---

# MCQ 第 5 题

![[_Attachments/题目识别/JXQ4T/JXQ4T-S2-Q05_题目.png|题目]]

(5) 设 $A$ 为 $m \times n$ 阶矩阵，则下列结论错误的是（ ）.

(A) 若 $r(A) = m$，则对任意 $s \times m$ 阶矩阵 $B$，有 $r(BA) = r(B)$

(B) 若 $r(A) = n$，则对任意 $n \times s$ 阶矩阵 $B$，有 $r(AB) = r(B)$

(C) 若 $r(A) = m$，则存在矩阵 $B$，使得 $BA = E$

(D) 若 $r(A) = n$，则存在矩阵 $B$，使得 $BA = E$

![[_Attachments/题目识别/JXQ4T-答案/JXQ4T-S2-Q05_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**
【答案】：**(C)**
(A)(B)(D) 均正确；(C) 错误。

**解题切入点**
把 $A$ 看作线性映射 $A:\mathbb{R}^n\to\mathbb{R}^m$：
- $r(A)=m$：$\dim\mathrm{Im}A=m$，即 $A$ 是满射；满射保持像，且有右逆，不保证有左逆。
- $r(A)=n$：$\ker A=\{0\}$，即 $A$ 是单射；单射保持核，且有左逆。

类似算法中的“编码/解码”：单射可以左消去，满射可以右消去；只有双射才有真正逆映射。

**推演**
1. 设 $A$ 对应的映射为 $T:\mathbb{R}^n\to\mathbb{R}^m$。

2. 判 (A)：$r(A)=m$ 时，$T$ 是满射。对任意 $B:\mathbb{R}^m\to\mathbb{R}^s$，
$$
\mathrm{Im}(BA)=B(T(\mathbb{R}^n))=B(\mathbb{R}^m)=\mathrm{Im}B,
$$
所以 $r(BA)=r(B)$，(A) 正确。

3. 判 (B)：$r(A)=n$ 时，$T$ 是单射。对任意 $B:\mathbb{R}^s\to\mathbb{R}^n$，
$$
\ker(AB)=\{x:A(Bx)=0\}=\{x:Bx=0\}=\ker B,
$$
由维数公式，$r(AB)=r(B)$，(B) 正确。

4. 判 (D)：$r(A)=n$ 时，$A^TA$ 可逆，取 $B=(A^TA)^{-1}A^T$，则
$$
BA=(A^TA)^{-1}A^TA=E_n,
$$
故存在左逆，(D) 正确。

5. 判 (C)：$r(A)=m$ 时，可构造右逆 $C=A^T(AA^T)^{-1}$，使 $AC=E_m$，但不能推出 $BA=E_n$。反例：取
$$
A=\begin{pmatrix}1&0\end{pmatrix},\quad m=1, n=2, r(A)=1.
$$
若存在 $B$ 使 $BA=E_2$，则 $B$ 应为 $2\times1$ 矩阵，设 $B=\begin{pmatrix}u\\v\end{pmatrix}$，有
$$
BA=\begin{pmatrix}u&0\\v&0\end{pmatrix}\ne E_2.
$$
所以 (C) 错误。注意：若额外限定 $m=n$，则 (C) 成立；但题设未限定。

**易错点**
- 行满秩 $\Rightarrow$ 有右逆 $AC=E_m$；列满秩 $\Rightarrow$ 有左逆 $BA=E_n$。不要记反。
- “左乘列满秩矩阵保秩，右乘行满秩矩阵保秩”也常考；注意乘法顺序。
- 判断“存在 $B$ 使 $BA=E$”时，先看 $E$ 的阶数：$BA$ 的列数等于 $A$ 的列数 $n$，因此若成立应为 $E_n$；而行满秩只能给出 $E_m$。

**命题规律**
- 高频概念题：把“矩阵的秩”与“线性映射的单射/满射、逆映射”结合考查。
- 解题时先判断满射/单射，再对应左逆/右逆；遇到存疑选项用低维反例验证。
- 复习建议：整理“行满秩、列满秩、左逆、右逆、保秩、齐次方程解空间”的关系表，可比单纯背结论更稳妥。


> 来源：《26_姜晓千四套卷（数一）》卷二 第 5 题
