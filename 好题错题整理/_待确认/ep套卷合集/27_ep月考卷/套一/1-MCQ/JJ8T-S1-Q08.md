---
ctime: 2026-08-18 02:29:13
mtime: 2026-08-18 02:29:13
tags:
  - AM
  - 27_ep月考卷/套一/MCQ
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

## DeepSeek V4 Flash Max

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

---

## V4 Flash Max 解析

**答案**: C（正确的有 ①②④，共 3 项；③错误，极限应为 \(\frac14\)）

**解题切入点**:  
题眼是 \(\lim\limits_{n\to\infty}\frac{a_n}{b_n}=\frac12\neq0\)。先由极限的保号性知道最终 \(\frac{a_n}{b_n}>0\)，所以取根号、取对数都合法。它等价于渐近关系 \(a_n\sim \frac12 b_n\)。第④问按 \(a_n\) 的极限是正数还是 \(0\) 分类讨论，类似算法竞赛里“把 corner case 单独特判”。

**推演**:  
因为极限存在且为 \(\frac12\)，所以当 \(n\) 充分大时 \(b_n\neq0\)，并且最终 \(\frac{a_n}{b_n}>0\)。

① 当 \(n\) 充分大时，
\[
\frac{a_nb_n}{b_n^2}=\frac{a_n}{b_n}\to\frac12.
\]
所以①正确。

② 设 \(x_n=\frac{a_n}{b_n}\)，最终 \(x_n>0\)，且 \(x_n\to\frac12\)。于是
\[
\sqrt[n]{x_n}=e^{\frac1n\ln x_n}.
\]
因为 \(\ln x_n\to\ln\frac12\) 是有限常数，所以
\[
\frac1n\ln x_n\to0,
\]
故
\[
\sqrt[n]{\frac{a_n}{b_n}}\to e^0=1.
\]
所以②正确。

③
\[
\frac{a_n^2}{b_n^2}=\left(\frac{a_n}{b_n}\right)^2\to\left(\frac12\right)^2=\frac14,
\]
不是 \(\frac12\)。所以③错误。

④ 设 \(a_n\to A\)。由于最终 \(b_n>0\) 且 \(\frac{a_n}{b_n}>0\)，最终 \(a_n>0\)，故 \(A\ge0\)。

若 \(A>0\)，则
\[
b_n=\frac{a_n}{a_n/b_n}\to\frac{A}{1/2}=2A,
\]
所以 \(\ln b_n\to\ln(2A)\) 有限，从而
\[
a_n\ln b_n\to A\ln(2A),
\]
有界。

若 \(A=0\)，取充分大的 \(n\)，有 \(\frac{a_n}{b_n}>\frac14\)。又 \(b_n>0\)，所以
\[
0<b_n<4a_n\to0,
\]
即 \(b_n\to0^+\)。于是
\[
a_n\ln b_n=\left(\frac{a_n}{b_n}\right)b_n\ln b_n.
\]
其中 \(\frac{a_n}{b_n}\to\frac12\)，而 \(b_n\ln b_n\to0\)，所以
\[
a_n\ln b_n\to0,
\]
也有界。

所以④正确。

综上，正确的有 ①②④，共 3 项，选 C。

**易错点**:  
- ③容易误选：\(a_n^2/b_n^2\) 是 \(\left(\frac{a_n}{b_n}\right)^2\)，平方后极限应为 \(\frac14\)，不是照抄 \(\frac12\)。  
- ②要注意必须先说明 \(\frac{a_n}{b_n}\) 最终为正；否则偶次根式可能无意义。  
- ④不要一看到 \(\ln b_n\to-\infty\) 就认为无界。因为此时 \(a_n\) 与 \(b_n\) 同阶，乘积是 \(b_n\ln b_n\) 型，而 \(b_n\ln b_n\to0\)。

**命题规律**:  
这类题本质考“极限商已知”时的等价无穷小/同阶量处理，以及极限四则运算。常见变式包括：对 \(\frac{a_n}{b_n}\) 作平方、根号、对数等复合运算；利用保号性判断符号；结合 \(a_n\) 收敛讨论含 \(\ln b_n\) 的乘积是否有界。它也和根值判别法联系紧密：若 \(|x_n|\to L>0\)，则 \(\sqrt[n]{|x_n|}\to1\)。
