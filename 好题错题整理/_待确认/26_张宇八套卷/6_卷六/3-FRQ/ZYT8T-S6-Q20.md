---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷六/FRQ
  - 计算题
  - 第一类曲面积分
  - 奇偶对称性
  - 球坐标参数化
  - 曲面微元
points:
level:
---

# FRQ 第 20 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S6-Q20_题目.png|题目]]

设 $\Sigma$ 为球面 $x^2 + y^2 + z^2 = m$ 被平面 $z = \frac{\sqrt{m}}{3}$ 所截下的顶部,计算 $\iint_{\Sigma} (|x|y + \frac{1}{z}) dS$ .

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S6-Q20_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

解答题【答案】：设 $a=\sqrt{m}$，则

$$\iint_{\Sigma}\left(|x|y+\frac{1}{z}\right)dS=2\pi a\ln3=2\pi\sqrt{m}\ln3\quad(m>0).$$

给分点：1. 设 $a=\sqrt{m}$，球坐标参数化；2. 由 $\Sigma$ 关于 $y=0$ 对称，消去 $\iint_{\Sigma}|x|y\,dS$；3. 顶冠边界给出 $\cos\varphi_0=1/3$；4. 正确计算 $\iint_{\Sigma}\frac{1}{z}dS$。

**解题切入点**

考查第一类曲面积分的“对称性化简 + 球坐标参数化”。$|x|y$ 中 $|x|$ 不变、$y$ 变号，球冠关于 $y=0$ 对称，所以该项积分为 0；剩余 $\frac{1}{z}$ 在球坐标中只依赖 $\varphi$，可化为一次积分。算法竞赛中就是“先删掉对称抵消项，再选最简单坐标系枚举”。

**推演**

设 $a=\sqrt{m}$，球面写成 $x^2+y^2+z^2=a^2$。

1. 对称性消项

$\Sigma$ 为 $z\ge a/3$ 的球冠，关于平面 $y=0$ 对称，且曲面微元 $dS$ 关于该反射不变。被积函数中的 $|x|y$ 在 $y\mapsto -y$ 下变为 $-|x|y$，故

$$\iint_{\Sigma}|x|y\,dS=0.$$

2. 球坐标参数化

令

$$x=a\sin\varphi\cos\theta,\quad y=a\sin\varphi\sin\theta,\quad z=a\cos\varphi,$$

其中 $0\le\theta<2\pi$，$0\le\varphi\le\varphi_0$。由边界 $z=a/3$ 得 $a\cos\varphi_0=a/3$，故

$$\cos\varphi_0=\frac13.$$

球面面积微元为

$$dS=a^2\sin\varphi\,d\varphi d\theta.$$

3. 计算剩余积分

$$\iint_{\Sigma}\frac{1}{z}\,dS =\int_0^{2\pi}\int_0^{\varphi_0} \frac{1}{a\cos\varphi}a^2\sin\varphi\,d\varphi d\theta =2\pi a\int_0^{\varphi_0}\tan\varphi\,d\varphi.$$

而

$$\int_0^{\varphi_0}\tan\varphi\,d\varphi =[-\ln\cos\varphi]_0^{\varphi_0} =-\ln\frac13=\ln3.$$

所以

$$\iint_{\Sigma}\frac{1}{z}\,dS=2\pi a\ln3.$$

代回 $a=\sqrt{m}$，得

$$\iint_{\Sigma}\left(|x|y+\frac{1}{z}\right)dS=2\pi\sqrt{m}\ln3.$$

自检：$(\ln\cos\varphi)'=-\tan\varphi$，故 $\int\tan\varphi\,d\varphi=-\ln\cos\varphi$；结果为正，也符合 $\frac{1}{z}>0$。

**易错点**

- 不要把 $|x|y$ 当成不能化简而直接展开；应从 $y$ 的奇偶性看，球冠关于 $y=0$ 对称，故该项积分为 0。
- 球坐标中 $dS=a^2\sin\varphi\,d\varphi d\theta$，不是 $a\,d\varphi d\theta$；漏乘 $a^2$ 或 $\sin\varphi$ 都会错。
- 顶冠条件 $z=a/3$ 对应 $\cos\varphi_0=1/3$，不要误写成 $\varphi_0=\pi/3$。
- $\frac{1}{z}$ 在球冠上恒正，最终结果应为正数；若算出负号要检查 $\int\tan\varphi\,d\varphi=-\ln\cos\varphi$。

**命题规律**

第一类曲面积分常以球面/锥面截出一块为背景，先考奇偶对称性，再考参数化。复习时把球坐标、柱坐标、直角坐标投影的面积微元记熟，并养成“先看对称性、再选坐标系”的习惯。


> 来源：《26_张宇八套卷（数一）》卷六 第 20 题
