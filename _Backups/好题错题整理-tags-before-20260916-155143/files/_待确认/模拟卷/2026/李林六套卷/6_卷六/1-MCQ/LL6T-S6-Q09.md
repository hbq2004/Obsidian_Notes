---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - PS
  - 26_李林六套卷/卷六/MCQ
  - 计算题
  - 二维正态分布
  - 方差性质
  - 协方差计算
  - 相关系数
  - 独立性与不相关性
points:
level:
---

# 选择题 第 9 题

![[_Attachments/题目识别/LL6T/LL6T-S6-Q09_题目.png|题目]]

(9) 设 $(X,Y) \sim N(1,1;2,2;0), U = X + 2Y, V = X - 2Y$, 则 $\rho_{UV} =$ .
(A) $- \frac{2}{5}$ .
(B) $- \frac{3}{5}$ .
(C) $\frac{3}{5}$ .
(D) $\frac{2}{5}$ .

![[_Attachments/题目识别/LL6T-答案/LL6T-S6-Q09_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**  
【答案】: (B) -3/5  

**解题切入点**  
本题主要考查二维正态分布的性质、方差和协方差的计算、相关系数的定义。关键在于利用独立性简化计算。类比算法竞赛中的“随机变量线性组合的统计量计算”，直接套公式即可。

**推演**  
首先，由 $(X,Y)\sim N(1,1;2,2;0)$ 知 $X$ 与 $Y$ 独立，且 $X\sim N(1,2), Y\sim N(1,2)$。  
计算 $U=X+2Y$ 和 $V=X-2Y$ 的期望：  
$E[U]=E[X]+2E[Y]=1+2=3$，$E[V]=E[X]-2E[Y]=1-2=-1$。  
方差（利用独立性）：  
$\operatorname{Var}(U)=\operatorname{Var}(X)+4\operatorname{Var}(Y)=2+4\times2=10$，  
$\operatorname{Var}(V)=\operatorname{Var}(X)+4\operatorname{Var}(Y)=10$。  
协方差：  
$\operatorname{Cov}(U,V)=\operatorname{Cov}(X+2Y,X-2Y)=\operatorname{Var}(X)-4\operatorname{Var}(Y)=2-8=-6$。  
因此相关系数  
$\rho_{UV}=\dfrac{\operatorname{Cov}(U,V)}{\sqrt{\operatorname{Var}(U)\operatorname{Var}(V)}}=\dfrac{-6}{10}=-\dfrac{3}{5}$。  
故正确选项为 (B) $-\dfrac{3}{5}$。  

错误选项分析：  
(A) $-\frac{2}{5}$：可能误算协方差时符号或系数出错。  
(C) $\frac{3}{5}$：可能忘记符号或误认为正相关。  
(D) $\frac{2}{5}$：可能计算错误。  

**易错点**  
- 容易忽略 $\rho=0$ 意味着独立，从而不敢直接使用方差可加性；  
- 协方差计算时要注意交叉项的正负号；  
- 注意区分总体方差和样本方差，本题是理论计算。  

**命题规律**  
二维正态分布线性组合的相关系数计算是常考题型，通常结合独立性和方差协方差性质。复习时应熟练掌握多维正态分布的性质，特别是独立性与相关性的关系。


> 来源：《26_李林六套卷（数一）》卷六 第 9 题
