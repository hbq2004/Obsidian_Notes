---
ctime: 2026-08-20 09:24:16
mtime: 2026-08-20 09:27:28
tags:
  - PS
  - 27_方浩概统500题/C组
  - 计算题
  - 参数估计
  - 协方差
  - 二维正态分布
  - 样本均值
points:
level:
---

# MCQ 第 519 题

![[_Attachments/题目识别/27_方浩概统500题-题目/FH-CG-Q519_题目.png|题目]]

519 设 $(X_1, Y_1), (X_2, Y_2), \cdots, (X_n, Y_n)$ 为来自总体 $N(\mu_1, \mu_2; \sigma_1^2, \sigma_2^2; \rho) (\sigma_1, \sigma_2 > 0)$ 的简单随机样本.
令 $\theta = \mu_1 - \mu_2, \bar{X} = \frac{1}{n} \sum_{i=1}^{n} X_i, \bar{Y} = \frac{1}{n} \sum_{i=1}^{n} Y_i, \hat{\theta} = \bar{X} - \bar{Y}$, 则 $(\quad)$

(A) $E(\hat{\theta}) = \theta, D(\hat{\theta}) = \frac{\sigma_1^2 + \sigma_2^2}{n}$
(B) $E(\hat{\theta}) \neq \theta, D(\hat{\theta}) = \frac{\sigma_1^2 + \sigma_2^2}{n}$
(C) $E(\hat{\theta}) = \theta, D(\hat{\theta}) = \frac{\sigma_1^2 + \sigma_2^2 - 2\rho \sigma_1 \sigma_2}{n}$
(D) $E(\hat{\theta}) \neq \theta, D(\hat{\theta}) = \frac{\sigma_1^2 + \sigma_2^2 - 2\rho \sigma_1 \sigma_2}{n}$

---

## 答案


## DeepSeek V4 Flash Max 解析

**答案**：C。因为 $E(\hat\theta)=\mu_1-\mu_2=\theta$，且
$$
D(\hat\theta)=\frac{\sigma_1^2+\sigma_2^2-2\rho\sigma_1\sigma_2}{n},
$$
与选项 C 一致。

**解题切入点**：看到 $(X_i,Y_i)$ 成对出现且来自二维正态总体，应马上意识到同一组内的 $X_i$ 与 $Y_i$ 可能相关，不能把 $\bar X,\bar Y$ 当成两个独立样本的均值。求 $D(\bar X-\bar Y)$ 时要用方差与协方差展开；就像算法题中两组配对数据不能当独立数组处理。

**推演**：

由二维正态分布参数可知 $\rho$ 为相关系数，故
$$
E X_i=\mu_1,\quad E Y_i=\mu_2,
$$
$$
D X_i=\sigma_1^2,\quad D Y_i=\sigma_2^2,
$$
$$
\operatorname{Cov}(X_i,Y_i)=\rho\sigma_1\sigma_2.
$$

又因 $(X_i,Y_i)$ 是简单随机样本，不同观测之间独立，所以当 $i\neq j$ 时，
$$
\operatorname{Cov}(X_i,Y_j)=0.
$$

先看期望：
$$
E(\hat\theta)=E(\bar X-\bar Y)
=E\bar X-E\bar Y
=\mu_1-\mu_2=\theta.
$$
所以 B、D 错误。

再看方差：
$$
D(\hat\theta)=D(\bar X-\bar Y)
=D\bar X+D\bar Y-2\operatorname{Cov}(\bar X,\bar Y).
$$

其中
$$
D\bar X=\frac{\sigma_1^2}{n},\qquad D\bar Y=\frac{\sigma_2^2}{n}.
$$

而
$$
\operatorname{Cov}(\bar X,\bar Y)
=\frac1{n^2}\operatorname{Cov}\left(\sum_{i=1}^n X_i,\sum_{j=1}^n Y_j\right)
=\frac1{n^2}\sum_{i=1}^n\sum_{j=1}^n \operatorname{Cov}(X_i,Y_j).
$$

由于只有 $i=j$ 时协方差非零，且共有 $n$ 项，所以
$$
\operatorname{Cov}(\bar X,\bar Y)
=\frac1{n^2}\cdot n\rho\sigma_1\sigma_2
=\frac{\rho\sigma_1\sigma_2}{n}.
$$

代入得
$$
D(\hat\theta)
=\frac{\sigma_1^2}{n}+\frac{\sigma_2^2}{n}-2\frac{\rho\sigma_1\sigma_2}{n}
=\frac{\sigma_1^2+\sigma_2^2-2\rho\sigma_1\sigma_2}{n}.
$$

因此选 C。

**易错点**：

- 容易把 $\bar X$ 与 $\bar Y$ 当作相互独立，漏掉协方差项 $-2\rho\sigma_1\sigma_2/n$，从而误选 A。
- 容易记错公式：$D(X-Y)=DX-DY$ 是错的，正确公式为
$$
D(X-Y)=DX+DY-2\operatorname{Cov}(X,Y).
$$
- 计算 $\operatorname{Cov}(\bar X,\bar Y)$ 时容易忘记除以 $n$，误写成 $\rho\sigma_1\sigma_2$。
- 容易误以为相关性会影响期望；实际上只要样本均值估计总体均值，就有
$$
E(\hat\theta)=\theta
$$
恒成立。

**命题规律**：本题属于参数估计中“估计量的评价”，核心是样本均值之差的期望与方差。常见变式是进一步求 $\hat\theta$ 的分布：
$$
\hat\theta\sim N\left(\theta,\frac{\sigma_1^2+\sigma_2^2-2\rho\sigma_1\sigma_2}{n}\right).
$$
复习时应熟练掌握协方差的双线性性，并区分“两个独立样本”与“配对样本”：独立样本时无协方差项，配对样本时需保留 $-\dfrac{2\rho\sigma_1\sigma_2}{n}$。

**知识点**：二维正态分布、协方差计算、样本均值、估计量的无偏性

---

> 来源：方浩概率统计进阶500题做题本 第191页 · C组
