---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - AM
  - 26_李林六套卷/卷二/FIB
  - 计算题
  - 极坐标弧长公式
  - 半角公式
  - 正割三次方积分
  - 定积分对称性
points:
level:
---

# 填空题 第 12 题

![[_Attachments/题目识别/LL6T/LL6T-S2-Q12_题目.png|题目]]

曲线 $r = \frac{1}{1+\cos\theta}$ 在 $\theta \in \left[-\frac{\pi}{2},\frac{\pi}{2}\right]$ 上的全长为 \\_\\_\\_\\_\\_\\_\\_\\_\\_\\_.

![[_Attachments/题目识别/LL6T-答案/LL6T-S2-Q12_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

曲线全长 $L=\sqrt{2}+\ln(1+\sqrt{2})$。

【答案】: $$\boxed{\sqrt{2}+\ln(1+\sqrt{2})}$$

**解题切入点**

考查极坐标下平面曲线弧长公式 $L=\int_{\alpha}^{\beta}\sqrt{r^2+(r')^2}\,d\theta$。将 $r=\frac{1}{1+\cos\theta}$ 代入后，用半角公式可化为 $\int \sec^3 u\,du$，这相当于算法竞赛中“先化简再套经典积分”。

**推演**

由 $r=(1+\cos\theta)^{-1}$，得
$$r'=\frac{\sin\theta}{(1+\cos\theta)^2}.$$
因此
$$r^2+(r')^2=\frac{(1+\cos\theta)^2+\sin^2\theta}{(1+\cos\theta)^4}=\frac{2}{(1+\cos\theta)^3}.$$
所以
$$L=\int_{-\pi/2}^{\pi/2}\frac{\sqrt2}{(1+\cos\theta)^{3/2}}\,d\theta.$$
用半角公式 $1+\cos\theta=2\cos^2\frac{\theta}{2}$，且 $\theta\in[-\pi/2,\pi/2]$ 时 $\cos\frac{\theta}{2}>0$，得
$$L=\int_{-\pi/2}^{\pi/2}\frac{1}{2\cos^3(\theta/2)}\,d\theta.$$
令 $u=\theta/2$，则
$$L=\int_{-\pi/4}^{\pi/4}\sec^3 u\,du=2\int_0^{\pi/4}\sec^3 u\,du.$$
由 $\int\sec^3u\,du=\frac12(\sec u\tan u+\ln|\sec u+\tan u|)+C$，得
$$L=2\cdot\frac12\left[\sec u\tan u+\ln(\sec u+\tan u)\right]_0^{\pi/4}=\sqrt2+\ln(1+\sqrt2).$$

关键给分点：极坐标弧长公式、根式化简为 $\sec^3u$、积分结果 $\frac12(\sec u\tan u+\ln|\sec u+\tan u|)$。

**易错点**

- 不要漏掉 $r'^2$，极坐标弧长公式是 $\sqrt{r^2+(r')^2}$，不是 $\sqrt{1+(r')^2}$。
- 半角公式开方时，注意 $\theta$ 范围保证 $\cos(\theta/2)>0$，避免符号讨论。
- $\int\sec^3u\,du$ 的结果容易漏掉对数项 $\ln|\sec u+\tan u|$。
- 对称性二倍积分时，需确认被积函数是偶函数；$\sec^3u$ 在 $[-\pi/4,\pi/4]$ 上确为偶函数。

**命题规律**

本类题常以填空题出现，核心套路是“极坐标弧长公式 + 三角恒等变形 + 常见积分”。复习时应熟记常见极坐标曲线（心形线、阿基米德螺线、双纽线等）的弧长公式，并熟练掌握 $\int\sec^3x\,dx$。平时把这些积分公式背熟，考场上便能快速化简。


> 来源：《26_李林六套卷（数一）》卷二 第 12 题
