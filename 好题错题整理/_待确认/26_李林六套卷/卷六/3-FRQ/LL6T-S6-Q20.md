---
ctime: 2026-08-24 08:43:19
mtime: 2026-08-24 08:43:19
tags:
  - AM
  - 26_李林六套卷/卷六/FRQ
  - 计算题
  - 微分方程求解
  - 旋转曲面方程
  - 高斯公式
  - 三重积分
  - 反双曲函数
points:
level:
---

# 解答题 第 20 题

![[_Attachments/题目识别/LL6T/LL6T-S6-Q20_题目.png|题目]]

设 $y=f(x)$ 满足 $yy''-y'^2=1, y(1)=1, y'(1)=0$ . 曲线 $\begin{cases} y=f(x), \\ z=0 \end{cases}$ 绕直线 $\begin{cases} x=1, \\ z=0 \end{cases}$ 旋转一周所得曲面为 $\Sigma_1$ , $\Sigma$ 为 $\Sigma_1$ 与两个平面 $y=\sqrt{2}, y=e$ 所围立体的全表面，取外侧.
$(I)$ 求 $y=f(x)$ ;
$(II)$ 计算 $I=\iint_{\Sigma} \frac{x}{\sqrt{y^2-1}} \mathrm{d}y\mathrm{d}z$.

![[_Attachments/题目识别/LL6T-答案/LL6T-S6-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**  
(1) $f(x)=\cosh(x-1)$。  
(2) $I=\frac{\pi}{3}\left[ \ln^3(e+\sqrt{e^2-1}) - \ln^3(\sqrt{2}+1) \right]$。  
关键给分点：解微分方程得 $f(x)$；正确写出旋转曲面；用高斯公式化为三重积分；柱坐标积分。  

**解题切入点**  
类似竞赛题，先解 ODE 得到曲线，再旋转得到曲面，对闭曲面第二型积分优先想高斯公式。  

**推演**  
**(I) 解微分方程**  
令 $x$ 为 $y$ 的函数，记 $p=\frac{dx}{dy}$，则 $y'=\frac1p$，$y''=-\frac{p'}{p^3}$（其中 $p'=\frac{dp}{dy}$）。  
代入 $yy'' - y'^2=1$ 得：  
$-y\frac{p'}{p^3}-\frac1{p^2}=1 \Rightarrow y p' + p + p^3=0$。  
分离变量：$\frac{dp}{p(1+p^2)}=-\frac{dy}{y}$。  
积分：$\ln|p|-\frac12\ln(1+p^2)=-\ln y+C$。  
由初始 $y'(1)=0$ 知 $p\to\infty$ 且 $y=1$，得 $\frac{|p|}{\sqrt{1+p^2}}=\frac1y$，取正得 $\frac{p}{\sqrt{1+p^2}}=\frac1y$。  
解得 $p=\frac1{\sqrt{y^2-1}}$，即 $\frac{dx}{dy}=\frac1{\sqrt{y^2-1}}$。  
积分得 $x=\operatorname{arcosh} y + C$，由 $x(1)=1$ 得 $C=1$，故 $x=1+\operatorname{arcosh} y$，即 $y=\cosh(x-1)$。  
验证：$y'=\sinh(x-1)$，$y(1)=1$，$y'(1)=0$，满足。  

**(II) 曲面积分**  
旋转曲面：曲线绕轴 $x=1,z=0$，对任意点 $(X,Y,Z)$ 有 $Y=\cosh(\sqrt{(X-1)^2+Z^2})$，故曲面方程为 $y=\cosh(\sqrt{(x-1)^2+z^2})$。  
设 $P=\frac{x}{\sqrt{y^2-1}}, Q=0, R=0$，闭合曲面外侧，高斯公式：  
$I=\iiint_V \frac{\partial P}{\partial x} dV = \iiint_V \frac1{\sqrt{y^2-1}} dV$。  
区域 $V$：$\sqrt2 \le y \le e, 0 \le r \le \operatorname{arcosh} y$，其中 $r=\sqrt{(x-1)^2+z^2}$。  
柱坐标：$x-1=r\cos\theta, z=r\sin\theta$，$dV=r dr d\theta dy$。  
$I=\int_{\sqrt2}^{e}\int_0^{2\pi}\int_0^{\operatorname{arcosh} y} \frac{r}{\sqrt{y^2-1}} dr d\theta dy$  
$=2\pi \int_{\sqrt2}^{e} \frac{1}{\sqrt{y^2-1}}\cdot \frac12(\operatorname{arcosh} y)^2 dy$  
$=\pi \int_{\sqrt2}^{e} \frac{(\operatorname{arcosh} y)^2}{\sqrt{y^2-1}} dy$。  
令 $t=\operatorname{arcosh} y$，则 $dt=\frac{dy}{\sqrt{y^2-1}}$，上限 $b=\operatorname{arcosh} e=\ln(e+\sqrt{e^2-1})$，下限 $a=\operatorname{arcosh}\sqrt2=\ln(\sqrt2+1)$。  
$I=\pi\int_a^b t^2 dt=\frac{\pi}{3}(b^3-a^3)=\frac{\pi}{3}\left[\ln^3(e+\sqrt{e^2-1})-\ln^3(\sqrt2+1)\right]$。  

**易错点**  
1. 换元中 $p$ 的正负，忘记初始条件导致符号错。  
2. 旋转曲面方程中半径平方被开方，注意 $\cosh$ 是偶函数。  
3. 高斯公式要求曲面封闭，本题封闭，但需确认方向为外侧。  
4. 柱坐标体积元漏乘 $r$。  
5. 积分限：$y$ 从 $\sqrt2$ 到 $e$，不是 1 到 $e$。  

**命题规律**  
综合题常把微分方程与几何曲面、积分结合。解法固定：先解方程，再写曲面，遇到闭曲面面积分优先用高斯公式。复习时多练旋转曲面方程与 Stokes 公式。


> 来源：《26_李林六套卷（数一）》卷六 第 20 题
