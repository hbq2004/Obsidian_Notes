---
ctime: 2026-08-18 02:29:13
mtime: 2026-08-18 02:29:13
tags:
  - AM
  - 26_ep五套卷/套一/MCQ
  - 概念题
  - 数列极限
  - 极限四则运算
  - 保号性
  - 幂指函数极限
  - 有界性判断
points:
level:
---

# MCQ 第 8 题

![[_Attachments/题目识别/JJ8T/JJ8T-S1-Q08_题目.png|题目]]

$ 8. 已知数列 \{a_{n}\} 、\{b_{n}\}$ 满足 $\lim\limits _{n \rightarrow \infty} \frac{a_{n}}{b_{n}}=\frac{1}{2}$, 则下列说法中正确的有几项( )

① $\lim\limits _{n \rightarrow \infty} \frac{a_{n} b_{n}}{b_{n}^{2}}=\frac{1}{2}$;

② $\lim\limits _{n \rightarrow \infty} \sqrt[n]{\frac{a_{n}}{b_{n}}}=1$;

③ $\lim\limits _{n \rightarrow \infty} \frac{a_{n}^{2}}{b_{n}^{2}}=\frac{1}{2}$;

④ 若 $b_{n}>0$ 且 $\{a_{n}\}$ 收敛, 则 $\{a_{n} \ln b_{n}\}$ 必有界。

A. 1

B. 2

C. 3

D. 4


---

## 解析（AI 生成，仅供参考）

【考点】本题考查数列极限的四则运算、保号性及“乘以有界/无穷小”的有界性判断。可类比算法竞赛中给定 `ratio` 约等于 0.5，要判断若干由 `ratio` 拼出的表达式极限；关键是先化简表达式，再看是否需要保号性补条件。

【解】设 $x_n=\frac{a_n}{b_n}$，则 $x_n\to\frac12$，且由极限定义，当 $n$ 充分大时 $b_n\ne0$。

① 因 $\frac{a_nb_n}{b_n^2}=\frac{a_n}{b_n}=x_n$，所以 $\lim_{n\to\infty}\frac{a_nb_n}{b_n^2}=\frac12$。① 正确。

② 因 $x_n\to\frac12>0$，由保号性，当 $n$ 充分大时 $x_n>0$。于是
$$
\sqrt[n]{x_n}=\exp\left(\frac{\ln x_n}{n}\right).
$$
由于 $\ln x_n\to\ln\frac12$ 有界，故 $\frac{\ln x_n}{n}\to0$，所以 $\sqrt[n]{x_n}\to1$。② 正确。

③ $\frac{a_n^2}{b_n^2}=x_n^2\to\left(\frac12\right)^2=\frac14$，不是 $\frac12$。③ 错误。

④ 设 $a_n\to a$。由 $x_n=\frac{a_n}{b_n}\to\frac12$ 且 $b_n>0$，有 $a\ge0$。
- 若 $a>0$，则 $b_n=\frac{a_n}{x_n}\to\frac{a}{1/2}=2a>0$，于是 $\ln b_n\to\ln(2a)$，所以 $a_n\ln b_n\to a\ln(2a)$，必有界。
- 若 $a=0$，则 $b_n=\frac{a_n}{x_n}\to0$，且 $a_n=x_nb_n$。此时 $a_n\ln b_n=x_n\,b_n\ln b_n\to\frac12\cdot0=0$，也必有界。
故 ④ 正确。

综上，①②④ 正确，③ 错误，正确项数为 3。

【答案】选 (C)。各选项含义：A 表示 1 项，B 表示 2 项，C 表示 3 项，D 表示 4 项；因正确项为 ①②④，所以 (C) 正确。③ 是主要干扰项：$\frac{a_n^2}{b_n^2}$ 的极限是 $\frac14$，不是 $\frac12$；② 要注意先由极限为正保证 $x_n>0$ 再开方；④ 要防范“$\ln b_n\to-\infty$ 就无界”的直觉错误。

【易错点】一是把平方后的极限仍当成原来的极限 $1/2$，漏乘平方；二是忘记 $n$ 次根号需先有 $x_n>0$，本题由极限为正可以保证；三是看到 $b_n\to0$ 时 $\ln b_n\to-\infty$ 就认为乘积必无界，忘掉另一个因子 $a_n\to0$ 的抵消作用，应化为 $x_n b_n\ln b_n$。

【命题规律】这类题常以“已知比例极限，判断若干衍生极限/有界性”出现，重点考查极限四则运算的条件、保号性和常见无穷小极限。复习时要养成“先化简、再代极限”的习惯，并熟记 $u_n\to L>0\Rightarrow\sqrt[n]{u_n}\to1$、$t\ln t\to0\ (t\to0^+)$ 等标准结论。

> AI 生成，仅供参考。

