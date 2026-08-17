---
ctime: 2026-08-18 02:29:13
mtime: 2026-08-18 02:29:13
tags:
  - AM
  - 27_ep月考卷/套一/MCQ
  - 概念题
  - 极限定义
  - 无穷小乘有界函数
  - 有界与无界
  - 振荡函数
  - 反例构造
points:
level:
---

# MCQ 第 9 题

![[_Attachments/题目识别/JJ8T/JJ8T-S1-Q09_题目.png|题目]]

9. 下列说法正确的个数是()

① 若 $\lim\limits_{x \to 0} f(x) = 0$，则 $\lim\limits_{x \to 0} f(x) \sin \frac{1}{x} = 0$；

② 若 $\lim\limits_{x \to 0} f(x) \sin \frac{1}{x} = 0$，则 $\lim\limits_{x \to 0} f(x) = 0$；

③ 若 $f(x)$ 在 $x = 0$ 的去心邻域内无界，则 $f(x) \sin \frac{1}{x}$ 在 $x = 0$ 的去心邻域内无界；

④ 若 $f(x) \sin \frac{1}{x}$ 在 $x = 0$ 的去心邻域内无界，则 $f(x)$ 在 $x = 0$ 的去心邻域内无界。

A. 1

B. 2

C. 3

D. 4


---

## 解析（AI 生成，仅供参考）

【考点】本题考查函数极限与有界/无界的概念；可类比算法竞赛中“有界变量 * 无穷小 = 无穷小”，而反向命题需要用构造反例否证。

【解】
① 正确。由 $\lim\limits_{x\to 0}f(x)=0$，有 $|f(x)|\to 0$；又 $\left|\sin\frac{1}{x}\right|\le 1$，故
$$0\le |f(x)\sin\frac{1}{x}|\le |f(x)|\to 0,$$
由夹逼准则得 $\lim\limits_{x\to0}f(x)\sin\frac{1}{x}=0$。

② 错误。构造
$$f(x)=\begin{cases}1,& x=\frac{1}{n\pi}\ (n=1,2,\cdots),\\0,& \text{其他 }x\ne0,\end{cases}$$
则当 $x=\frac{1}{n\pi}$ 时，$\sin\frac{1}{x}=\sin n\pi=0$，故 $f(x)\sin\frac{1}{x}\equiv0$，极限为 $0$；但 $f\left(\frac{1}{n\pi}\right)=1$，所以 $\lim\limits_{x\to0}f(x)$ 不存在，更不等于 $0$。②为假。

③ 错误。构造
$$f(x)=\begin{cases}\dfrac{1}{\sin\frac{1}{x}},& \sin\frac{1}{x}\ne0,\\0,& \sin\frac{1}{x}=0.\end{cases}$$
此时 $f$ 无界，例如取 $\frac{1}{x}=2n\pi+\frac{1}{n}$，则 $\sin\frac{1}{x}=\sin\frac{1}{n}\sim\frac{1}{n}$，$|f|\sim n\to\infty$。但
$$f(x)\sin\frac{1}{x}=\begin{cases}1,& \sin\frac{1}{x}\ne0,\\0,& \sin\frac{1}{x}=0,\end{cases}$$
显然有界，所以③为假。

④ 正确。若 $f(x)\sin\frac{1}{x}$ 在 $0$ 的去心邻域内无界，则对任意 $M>0$，在该邻域内可找到 $x$ 使 $|f(x)\sin\frac{1}{x}|>M$。而
$$|f(x)\sin\frac{1}{x}|=|f(x)|\cdot|\sin\frac{1}{x}|\le |f(x)|,$$
故 $|f(x)|>M$。由 $M$ 的任意性，$f(x)$ 无界。④为真。

【答案】正确的命题为①④，共 $2$ 个，选 **B**。A(1个)、C(3个)、D(4个)均为干扰项。

【易错点】
- 有界量乘无穷小仍是无穷小，但“乘积极限为 0”不能推出任一因子极限为 0；利用 $\sin\frac{1}{x}$ 的零点可构造反例。
- 无界函数乘有界函数不一定无界（如③），但乘积无界则原函数必无界（因为 $|f\sin|\le |f|$）。
- 注意区分“无界”与“极限为无穷”，二者不是一回事；本题无需额外处理 OCR 疑误。

【命题规律】这类题常以“下列说法正确个数”出现，考查极限、有界/无界的概念及反例积累。复习时重点掌握 $\sin\frac{1}{x}$、$x\sin\frac{1}{x}$ 等经典振荡函数，以及“有界量乘无穷小”与“局部有界/无界”的传递关系。

> AI 生成，仅供参考。

