---
ctime: 2026-08-22 05:15:01
mtime: 2026-08-22 05:15:01
tags:
  - LA
  - 27_模拟卷概念题摘选/欧几里得卷二
  - 概念题
  - 齐次方程组解空间
  - 矩阵的秩
  - 零空间包含关系
  - 同解与秩相等
  - 右乘矩阵不反推秩
points:
level:
---

# MCQ 第 7 题

![[_Attachments/题目识别/27_模拟卷概念题摘选-题目/MNJ-Q007_题目.png|题目]]

设 $A, B, C$ 为 $n$ 阶方阵, 则下列说法错误的是 (　　).

(A) 若 $ABx=0$ 的解都是 $Bx=0$ 的解, 则 $r(AB)=r(B)$.
(B) 若 $r(AB)=r(B)$, 则 $ABx=0$ 的解都是 $Bx=0$ 的解.
(C) 若 $r(AB)=r(B)$, 则 $r(ABC)=r(BC)$.
(D) 若 $r(ABC)=r(BC)$, 则 $r(AB)=r(B)$.

> 考点批注：还是解方程与秩

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 D。核心理由：$r(ABC)=r(BC)$ 不能推出 $r(AB)=r(B)$；例如取 $C=0$，则 $r(ABC)=r(BC)$ 恒成立，但 $A,B$ 可使 $r(AB)\ne r(B)$。

**解题切入点**：  
看到“解都是”立即转化为零空间包含关系。记 $N(M)=\{x\mid Mx=0\}$，则“$ABx=0$ 的解都是 $Bx=0$ 的解”就是 $N(AB)\subseteq N(B)$。同时恒有 $N(B)\subseteq N(AB)$，因为 $Bx=0\Rightarrow ABx=0$。所以比较零空间维数即可，不必真的解方程组。  
这就像做集合题：一个方向的包含天然成立，只要再比较维数/大小，就能判断是否相等。

**推演**：

先写出基础事实：

$$
N(B)\subseteq N(AB),\qquad N(BC)\subseteq N(ABC),
$$

且对 $n$ 阶方阵 $M$，有

$$
\dim N(M)=n-r(M).
$$

### (A) 正确

题设是“$ABx=0$ 的解都是 $Bx=0$ 的解”，即

$$
N(AB)\subseteq N(B).
$$

又因为恒有 $N(B)\subseteq N(AB)$，所以

$$
N(AB)=N(B).
$$

于是

$$
r(AB)=n-\dim N(AB)=n-\dim N(B)=r(B).
$$

故 A 正确。

### (B) 正确

若 $r(AB)=r(B)$，则

$$
\dim N(AB)=n-r(AB)=n-r(B)=\dim N(B).
$$

又 $N(B)\subseteq N(AB)$，所以两者维数相等且包含，故

$$
N(AB)=N(B).
$$

因此 $ABx=0$ 的解都是 $Bx=0$ 的解。故 B 正确。

### (C) 正确

由 $r(AB)=r(B)$，同上可得 $N(AB)=N(B)$。

任取 $x\in N(ABC)$，即

$$
ABCx=0.
$$

令 $y=Cx$，则 $ABy=0$，所以 $y\in N(AB)=N(B)$，即

$$
By=0,
$$

也就是

$$
BCx=0.
$$

故 $N(ABC)\subseteq N(BC)$。又恒有 $N(BC)\subseteq N(ABC)$，所以

$$
N(ABC)=N(BC),
$$

因此

$$
r(ABC)=r(BC).
$$

故 C 正确。

### (D) 错误

取 $n=2$，令

$$
A=\begin{pmatrix}
1&0\\
0&0
\end{pmatrix},\qquad
B=\begin{pmatrix}
0&0\\
0&1
\end{pmatrix},\qquad
C=\begin{pmatrix}
0&0\\
0&0
\end{pmatrix}.
$$

则

$$
AB=0,\qquad BC=0,\qquad ABC=0.
$$

所以

$$
r(ABC)=r(BC)=0,
$$

但

$$
r(AB)=0,\qquad r(B)=1,
$$

故 $r(AB)\ne r(B)$。

因此 D 不是恒真命题，选 D。

**易错点**：

- 容易把 D 误看成 C 的逆命题；但“右乘 $C$”不一定可逆，不能随便“消去 $C$”。
- 若题目额外说明 $C$ 可逆，则 D 正确，因为右乘可逆矩阵不改变秩：  
  $$r(ABC)=r(AB),\qquad r(BC)=r(B).$$  
  但原题没有这一条件。
- 不要忘记 $N(B)\subseteq N(AB)$ 是天然成立的，这常是判断 A、B 的关键。
- 构造反例时不要取可逆的 $C$，可取零矩阵，最简单直接。

**命题规律**：  
本题核心是“齐次方程组的解空间”与“矩阵秩”的转化。命题角度常为：用“若……则……”考查同解与秩相等的充要关系，尤其考查右乘非可逆矩阵时能否反推。复习时记住：

$$
r(AB)=r(B)\iff N(AB)=N(B),
$$

并且注意 $ABx=0$ 与 $Bx=0$ 的同解关系、零空间包含关系、秩—零化度公式。常见变式是换成 $C$ 可逆或加入其他秩条件。

**知识点**：齐次线性方程组解空间的包含关系、矩阵的秩与零空间维数、$N(B)\subseteq N(AB)$、同解与秩相等的转化、右乘非可逆矩阵不能反推秩等式。

---

> 来源：模拟卷概念题摘选（试卷顺序版） · 二. 欧几里得卷二 · 原题号 (5) · PDF第7页
