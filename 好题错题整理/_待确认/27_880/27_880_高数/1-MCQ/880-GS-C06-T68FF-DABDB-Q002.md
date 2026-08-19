---
ctime: 2026-08-16 19:39:36
mtime: 2026-08-20 01:07:42
tags:
  - AM
  - 27_880/C06/b/MCQ
  - 重积分及其应用
  - 二重积分
  - 定积分定义
points:
level:
---

# MCQ 第 2 题

![[_Attachments/题目识别/880-GS/880-GS-C06-T68FF-DABDB-Q002_题目.png|题目]]

(2) $\lim\limits_{n\to\infty} \sum\limits_{i=1}^{n} \sum\limits_{j=1}^{n} \frac{1}{\left(1+\frac{i}{n}\right)\left(n^{2}+j^{2}\right)}=$ ( ).

A. $\frac{\pi}{4} \ln 2$

B. $\frac{\pi}{8} \ln 2$

C. $\frac{\pi}{2} \ln 2$

D. $\pi \ln 2$

---

## 答案

![[_Attachments/题目识别/880-答案/880-GS-C06-T68FF-DABDB-Q002_答案.png|答案]]

## V4 Pro Max 解析

**考点**:二重和式极限——按二重积分定义化为 $[0,1]^2$ 上的二重积分,再利用被积函数乘积形式分离变量。

**解**

先变形通项:

$$\frac{1}{\left(1+\frac{i}{n}\right)(n^{2}+j^{2})}=\frac{1}{n^{2}}\cdot\frac{1}{\left(1+\frac{i}{n}\right)\left(1+\left(\frac{j}{n}\right)^{2}\right)}.$$

于是原式 $=\sum_{i=1}^{n}\sum_{j=1}^{n}\frac{1}{n^{2}}\,g\!\left(\frac{i}{n},\frac{j}{n}\right)$,其中 $g(x,y)=\dfrac{1}{(1+x)(1+y^2)}$ 在 $[0,1]^2$ 上连续。由二重积分定义(黎曼和):

$$\lim_{n\to\infty}\sum_{i=1}^{n}\sum_{j=1}^{n}\frac{1}{n^{2}}\,g\!\left(\frac{i}{n},\frac{j}{n}\right)=\iint_{[0,1]^2}g(x,y)\,dxdy=\int_0^1\frac{dx}{1+x}\cdot\int_0^1\frac{dy}{1+y^2}.$$

分别计算:

$$\int_0^1\frac{dx}{1+x}=\ln(1+x)\Big|_0^1=\ln2,\qquad \int_0^1\frac{dy}{1+y^2}=\arctan y\Big|_0^1=\frac{\pi}{4}.$$

故原极限 $=\dfrac{\pi}{4}\ln2$。

逐项判断:B($\frac{\pi}{8}\ln2$)把 $\int_0^1\frac{dy}{1+y^2}=\frac{\pi}{4}$ 误算成 $\frac{\pi}{8}$;C($\frac{\pi}{2}\ln2$)、D($\pi\ln2$)分别是系数乘 2、4 的错误(如误把 $\arctan1$ 当 $\frac{\pi}{2}$ 或漏掉 $\ln2$);A 对。

**答案**:A

**易错点**:必须把 $\frac{j^2}{n^2}$ 写成 $\left(\frac{j}{n}\right)^2$、整体提出 $\frac{1}{n^2}$ 才能凑成标准二重黎曼和;两因子可分离是因为 $g(x,y)$ 是乘积形式,两个单变量积分分别等于 $\ln2$ 与 $\frac{\pi}{4}$。
