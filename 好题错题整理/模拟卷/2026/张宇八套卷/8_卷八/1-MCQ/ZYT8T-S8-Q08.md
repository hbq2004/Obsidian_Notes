---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - PS
  - 26_张宇八套卷/卷八/MCQ
  - 计算题
  - 最大似然估计
  - 二项分布
  - 有放回抽样
  - 对数似然求导
points:
level:
---

# MCQ 第 8 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S8-Q08_题目.png|题目]]

设袋中红球数与黑球数之比为 $r$ ,且无其他颜色的球,现有放回地抽取 $n$ 次,每次取一球,共取出 $k$ 个红球,则 $r$ 的最大似然估计值为
(A) $\frac{n}{k}$ .
(B) $\frac{n-k}{k}$ .
(C) $\frac{k}{n}$ .
(D) $\frac{k}{n-k}$ .

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S8-Q08_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

红球被抽中的概率为 $p=\frac{r}{1+r}$，有放回抽取 $n$ 次取出 $k$ 个红球，故 $X\sim B(n,p)$。

似然函数为
$$
L(r)=\binom{n}{k}\left(\frac{r}{1+r}\right)^k\left(\frac{1}{1+r}\right)^{n-k}
=\binom{n}{k}\frac{r^k}{(1+r)^n}.
$$

对数似然：
$$
\ell(r)=\ln\binom{n}{k}+k\ln r-n\ln(1+r).
$$
求导并令其为零：
$$
\ell'(r)=\frac{k}{r}-\frac{n}{1+r}=0
$$
得
$$
k(1+r)=nr \Rightarrow k=r(n-k) \Rightarrow \hat r=\frac{k}{n-k}.
$$

选择题【答案】：(D)。

**解题切入点**

核心是“二项分布 + 最大似然估计”。把红球比例 $r$ 转化为抽取红球概率 $p=\frac{r}{1+r}$，然后用似然函数求极值；类似算法题中先换元再求函数最值。

**推演**

1. 设红球数与黑球数之比为 $r$，则抽到红球的概率
   $$
   p=P(\text{红})=\frac{r}{1+r},\quad P(\text{黑})=\frac{1}{1+r}.
   $$

2. 有放回抽取 $n$ 次，取出红球数 $X\sim B(n,p)$。观测到 $X=k$，似然函数为
   $$
   L(r)=\binom{n}{k}p^k(1-p)^{n-k}
   =\binom{n}{k}\frac{r^k}{(1+r)^n}.
   $$
   组合数 $\binom{n}{k}$ 与 $r$ 无关，可略去。

3. 取对数：
   $$
   \ell(r)=k\ln r-n\ln(1+r)+\text{const}.
   $$
   令
   $$
   \ell'(r)=\frac{k}{r}-\frac{n}{1+r}=0,
   $$
   得
   $$
   k(1+r)=nr \Rightarrow k=r(n-k) \Rightarrow \hat r=\frac{k}{n-k}.
   $$
   这是唯一驻点，且 $\ell''(r)=-k/r^2+n/(1+r)^2<0$（当 $0<k<n$），故为极大值点。

4. 选项辨析：
   - (A) $n/k$：这是 $1/\hat p$ 的形式，不是 $r$。
   - (B) $(n-k)/k$：这是黑球数比红球数，即 $1/r$，正好取反。
   - (C) $k/n$：这是红球出现频率，是 $p$ 的极大似然估计 $\hat p$，不是 $r$。
   - (D) $k/(n-k)$：由 $\hat r=\hat p/(1-\hat p)$ 得到，正确。

5. 也可用 MLE 的不变性：先得 $\hat p=k/n$，则
   $$
   \hat r=\frac{\hat p}{1-\hat p}=\frac{k/n}{1-k/n}=\frac{k}{n-k}.
   $$

**易错点**

- 把“红黑比 $r$”和“抽到红球概率 $p$”混淆。$p=r/(1+r)$，不是 $p=r$。
- 选 (C) 是只估了 $p$，忘了换回 $r$。
- 选 (B) 是比值方向反了，得到的是黑:红。
- 当 $k=0$ 或 $k=n$ 时上式是边界情形；常规考题默认 $0<k<n$。

**命题规律**

本题是概率统计中“离散型总体参数的 MLE”标准题。命题人常把比例、概率混在一起，考查是否真正理解参数含义。复习时应熟练“写出似然函数、取对数、求导、解驻点”，并会用 MLE 的不变性处理参数变换。


> 来源：《26_张宇八套卷（数一）》卷八 第 8 题
