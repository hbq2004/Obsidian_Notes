---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - AM
  - 26_张宇四套卷/卷二/FRQ
  - 计算题
  - 和式极限转定积分
  - 黎曼和
  - 换元积分法
  - 对数函数积分
points:
level:
---

# 解答题 第 17 题

![[_Attachments/题目识别/ZY4T/ZY4T-S2-Q17_题目.png|题目]]

计算 $\lim_{n \to \infty} \sum_{k=1}^{n} \frac{k}{n^2} \ln \left( 1 + \frac{k^2}{n^2} \right) .$

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S2-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

原式 $= \ln 2 - \frac{1}{2}$。

关键给分点：①将和式化为黎曼和（2分）；②写出对应定积分（2分）；③正确计算定积分（6分）。

**解题切入点**

本题为典型的“和式极限”问题，核心是将离散求和通过黎曼和转化为连续积分。类似于算法竞赛中利用积分近似求和，抓住 $\frac{1}{n}$ 与 $dx$ 的对应关系即可。

**推演**

原式为
$$
\lim_{n \to \infty} \sum_{k=1}^{n} \frac{k}{n^2} \ln\left(1+\frac{k^2}{n^2}\right)
$$
注意到 $\frac{k}{n^2} = \frac{1}{n}\cdot \frac{k}{n}$，故
$$
\text{原式} = \lim_{n \to \infty} \frac{1}{n} \sum_{k=1}^{n} \frac{k}{n} \ln\left(1+\left(\frac{k}{n}\right)^2\right)
$$
令 $f(x) = x\ln(1+x^2)$，则上式是 $f(x)$ 在 $[0,1]$ 上取右端点的黎曼和，因此极限等于定积分：
$$
\int_0^1 x\ln(1+x^2)\,dx
$$
计算积分：令 $t=1+x^2$，则 $dt=2x\,dx$，即 $x\,dx = \frac{1}{2}dt$。换限：$x=0 \to t=1$，$x=1 \to t=2$。故
$$
\int_0^1 x\ln(1+x^2)\,dx = \frac{1}{2}\int_1^2 \ln t\,dt
$$
利用 $\int \ln t\,dt = t\ln t - t + C$，得
$$
\frac{1}{2}\left[t\ln t - t\right]_1^2 = \frac{1}{2}\left[(2\ln 2 - 2) - (1\cdot 0 - 1)\right] = \frac{1}{2}(2\ln 2 - 1) = \ln 2 - \frac{1}{2}
$$
所以原式极限为 $\ln 2 - \frac{1}{2}$。

**易错点**

- 易将 $\frac{k}{n^2}$ 误认为是 $\frac{1}{n^2}$，忽视 $k$ 的作用；实际需拆成 $\frac{1}{n}\cdot\frac{k}{n}$。
- 换元后积分限易出错，注意 $t=1+x^2$，下限为 $1$，上限为 $2$。
- 计算 $\ln t$ 积分时，忘记 $\int \ln t\,dt = t\ln t - t$ 的形式。
- 系数 $\frac{1}{2}$ 容易漏掉，需细心。

**命题规律**

本考点属于高等数学中的“定积分定义求极限”，是考研数学一、二、三常考题型。命题人常给形如 $\sum_{k=1}^n \frac{1}{n} f(\frac{k}{n})$ 的和式，要求转化为定积分。复习时应熟悉常见函数的积分计算（特别是对数、指数、三角函数），并掌握换元、分部等基本技巧。


> 来源：《26_张宇四套卷（数一）》卷二 第 17 题
