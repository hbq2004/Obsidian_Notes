---
ctime: 2026-08-24 17:34:54
mtime: 2026-08-24 17:34:54
tags:
  - PS
  - 26_张宇八套卷/卷二/MCQ
  - 计算题
  - 正态分布概率密度
  - 对数积分
  - 微分熵
  - 方差性质
points:
level:
---

# MCQ 第 9 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S2-Q09_题目.png|题目]]

设随机变量 $X$ 服从参数为 $\mu,\sigma^2$ 的正态分布,其概率密度为 $f(x)$,则 $\int_{-\infty}^{+\infty} f(x)\ln f(x)\mathrm{d}x$.
(A) 与 $\mu$ 有关,与 $\sigma$ 无关.
(B) 与 $\mu$ 有关,与 $\sigma$ 有关.
(C) 与 $\mu$ 无关,与 $\sigma$ 有关.
(D) 与 $\mu$ 无关,与 $\sigma$ 无关.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S2-Q09_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**  

最终结论：该积分 $\int_{-\infty}^{+\infty} f(x)\ln f(x)\mathrm{d}x$ 与 $\mu$ 无关，与 $\sigma$ 有关，因此答案为 (C)。  

选择题【答案】: (C)  

**解题切入点**  

本题本质是计算正态分布的概率密度对数积分，即微分熵的负值。在算法竞赛中，类似“信息熵”计算，直接代入分布函数并利用概率密度归一性和方差公式即可快速求解，关键在于识别 $\ln f(x)$ 的结构。  

**推演**  

设 $X\sim N(\mu,\sigma^2)$，概率密度  
$$f(x)=\frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}},\quad x\in\mathbb{R}.$$  
则  
$$\ln f(x)= -\ln(\sigma\sqrt{2\pi}) - \frac{(x-\mu)^2}{2\sigma^2}.$$  
于是  
$$\begin{aligned}
\int_{-\infty}^{+\infty} f(x)\ln f(x)\mathrm{d}x
&= \int_{-\infty}^{+\infty} f(x)\left[-\ln(\sigma\sqrt{2\pi}) - \frac{(x-\mu)^2}{2\sigma^2}\right]\mathrm{d}x \\
&= -\ln(\sigma\sqrt{2\pi})\int_{-\infty}^{+\infty}f(x)\mathrm{d}x - \frac{1}{2\sigma^2}\int_{-\infty}^{+\infty}(x-\mu)^2 f(x)\mathrm{d}x \\
&= -\ln(\sigma\sqrt{2\pi})\cdot 1 - \frac{1}{2\sigma^2}\cdot \sigma^2 \\
&= -\ln\sigma - \frac{1}{2}\ln(2\pi) - \frac{1}{2} \\
&= -\frac{1}{2}\ln(2\pi e\sigma^2).
\end{aligned}$$  
结果只含 $\sigma$，不含 $\mu$，故与 $\mu$ 无关，与 $\sigma$ 有关。  

选项分析：  
(A) 与 $\mu$ 有关，与 $\sigma$ 无关 —— 错误，结果不含 $\mu$，且含 $\sigma$。  
(B) 与 $\mu$ 有关，与 $\sigma$ 有关 —— 错误，结果与 $\mu$ 无关。  
(C) 与 $\mu$ 无关，与 $\sigma$ 有关 —— 正确。  
(D) 与 $\mu$ 无关，与 $\sigma$ 无关 —— 错误，结果与 $\sigma$ 有关。  

**易错点**  

1. 对 $\ln f(x)$ 展开时遗漏常数项或符号错误。  
2. 积分 $\int (x-\mu)^2 f(x)\mathrm{d}x$ 应为 $\sigma^2$，易误写为 $\sigma$ 或 $\sigma^3$。  
3. 混淆 $\ln(\sigma\sqrt{2\pi})$ 与 $\ln(\sigma)+\frac{1}{2}\ln(2\pi)$ 的拆分，计算时要细心。  
4. 最终表达式化简时注意 $\ln$ 运算性质，避免出错。  

**命题规律**  

此类题目常以正态分布为载体，考查概率密度积分与数字特征的综合运算，同时隐含信息论中微分熵的概念。复习时应熟练掌握常见分布的概率密度及其数字特征，并能够灵活处理含对数的积分。命题人常通过改变参数位置或结合其他分布来设置干扰项，复习时需注意不同分布熵的差异（如均匀分布、指数分布等）。


> 来源：《26_张宇八套卷（数一）》卷二 第 9 题
