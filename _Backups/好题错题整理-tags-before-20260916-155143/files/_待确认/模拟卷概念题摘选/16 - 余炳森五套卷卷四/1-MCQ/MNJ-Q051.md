---
ctime: 2026-08-22 05:15:01
mtime: 2026-08-22 05:15:01
tags:
  - LA
  - 27_模拟卷概念题摘选/余炳森五套卷卷四
  - 概念题
  - 向量组线性相关
  - 矩阵的秩
  - 矩阵乘积的秩
  - 行秩与列秩
  - 秩的不等式
points:
level:
---

# MCQ 第 51 题

![[_Attachments/题目识别/27_模拟卷概念题摘选-题目/MNJ-Q051_题目.png|题目]]

设$A$为$m \times n$矩阵，$B$为$n \times m$矩阵.若$AB=C$，则(　　).
A. 当$m<n$时，$C$的行向量组线性相关
B. 当$m<n$时，$C$的行向量组线性无关
C. 当$m>n$时，$C$的行向量组线性相关
D. 当$m>n$时，$C$的行向量组线性无关

> 考点批注：从线性相关，无关想到秩，做这种题不要第一条件想反例

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：选 C，因为当 $m>n$ 时，$\operatorname{rank}(C) \le n < m$，故 $C$ 的行向量组必线性相关。

**解题切入点**：本题核心是判断方阵 $C$ 的行向量组是否线性相关，这等价于 $C$ 的行秩（即秩）是否小于 $m$。而 $C=AB$ 的秩受限于 $A,B$ 的秩，且 $\operatorname{rank}(AB)\le\min(\operatorname{rank}(A),\operatorname{rank}(B))\le\min(m,n)$，因此只需根据 $m,n$ 的大小关系即可判定秩的上界，从而判断相关性。

**推演**：  
- $A$ 为 $m\times n$，$B$ 为 $n\times m$，$C=AB$ 为 $m\times m$ 方阵。  
- $C$ 的行向量组线性相关 $\iff \operatorname{rank}(C)<m$（因为 $C$ 有 $m$ 行）。  
- 由矩阵秩的性质：$\operatorname{rank}(C)=\operatorname{rank}(AB)\le\min(\operatorname{rank}(A),\operatorname{rank}(B))\le\min(m,n)$。  

**选项 A**（$m<n$）：此时 $\min(m,n)=m$，故 $\operatorname{rank}(C)\le m$，但可以等于 $m$（例如取 $A=[I_m\quad 0_{m\times(n-m)}]$, $B=[I_m;\;0_{(n-m)\times m}]$，则 $C=I_m$，满秩），此时行向量组线性无关；也可能小于 $m$（若 $A$ 或 $B$ 秩不足），故 $C$ 的行向量组不一定相关，A 错。  
**选项 B**（$m<n$）：同理，$C$ 可以相关（如取 $A$ 为零矩阵），故不一定无关，B 错。  
**选项 C**（$m>n$）：此时 $\min(m,n)=n$，且 $n<m$，故 $\operatorname{rank}(C)\le n<m$，因此 $C$ 的行向量组必线性相关，C 正确。  
**选项 D**（$m>n$）：由 C 知必相关，不可能无关，D 错。  

综上，正确答案为 C。

**易错点**：  
1. 混淆行向量组与列向量组：$C$ 的行向量组相关等价于 $\operatorname{rank}(C)<m$，列向量组相关等价于 $\operatorname{rank}(C)<m$（因为 $C$ 是方阵，两者等价），但若 $C$ 非方阵则需区分。  
2. 误以为 $m<n$ 时 $C$ 一定相关或无关，实际上可能相关也可能无关，必须依赖秩的不等式进行整体判断。  
3. 忽略 $A,B$ 的秩可能小于 $\min(m,n)$，但题目问的是“是否必然”，故只需考虑最紧的上界。

**命题规律**：  
- 考点：线性相关性与矩阵秩的关系，以及矩阵乘积的秩的性质。  
- 命题角度：给出两个不同维度的矩阵相乘，要求判断乘积方阵的行（列）向量组的相关性，关键是比较 $m,n$ 的大小。  
- 常见变式：将“行向量组”改为“列向量组”，此时 $C$ 的列向量组相关等价于 $\operatorname{rank}(C)<m$，结论相同；或将 $AB$ 改为 $BA$（$n\times n$ 方阵），则需分析 $BA$ 的秩。  
- 复习建议：熟练掌握向量组相关性与秩的互化，以及 $\operatorname{rank}(AB)\le\min(\operatorname{rank}(A),\operatorname{rank}(B))$ 这一基本不等式，并注意矩阵维度对秩的影响。

**知识点**：向量组线性相关、矩阵的秩、矩阵乘积的秩、行秩与列秩、满秩矩阵

---

> 来源：模拟卷概念题摘选（试卷顺序版） · 十六. 余炳森五套卷卷四 · 原题号 (5) · PDF第28页
