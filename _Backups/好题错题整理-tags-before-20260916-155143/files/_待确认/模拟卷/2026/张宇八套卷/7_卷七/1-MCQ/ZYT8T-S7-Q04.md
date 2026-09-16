---
ctime: 2026-08-24 17:34:55
mtime: 2026-08-24 17:34:55
tags:
  - AM
  - 26_张宇八套卷/卷七/MCQ
  - 计算题
  - 区间再现公式
  - 定积分换元法
  - 部分分式分解
  - 积分大小比较
  - 正弦函数符号
points:
level:
---

# MCQ 第 4 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S7-Q04_题目.png|题目]]

$$ I_1 = \int_{0}^{2\pi} \frac{\sin x}{x} \mathrm{d}x, I_2 = \int_{0}^{2\pi} \frac{\sin x}{2\pi - x} \mathrm{d}x, I_3 = \int_{0}^{2\pi} \frac{\sin x}{x(2\pi - x)} \mathrm{d}x, $$ 则

(A) $I_3 < I_1 < I_2$ .
(B) $I_3 < I_2 < I_1$ .
(C) $I_2 < I_3 < I_1$ .
(D) $I_1 < I_2 < I_3$ .

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S7-Q04_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

三个积分在端点处均为有限极限的广义积分，按可去奇点补充定义即可。令 $x=2\pi-t$，则
$$
I_2=\int_{2\pi}^{0}\frac{\sin(2\pi-t)}{t}(-\mathrm{d}t)
=\int_0^{2\pi}\frac{-\sin t}{t}\,\mathrm{d}t=-I_1.
$$
又
$$
\frac{1}{x(2\pi-x)}=\frac{1}{2\pi}\left(\frac{1}{x}+\frac{1}{2\pi-x}\right),
$$
故
$$
I_3=\frac{1}{2\pi}\int_0^{2\pi}\sin x\left(\frac{1}{x}+\frac{1}{2\pi-x}\right)\mathrm{d}x
=\frac{1}{2\pi}(I_1+I_2)=0.
$$
为判断 $I_1$ 的符号，拆分 $[0,\pi]$ 与 $[\pi,2\pi]$：
$$
I_1=\int_0^\pi\frac{\sin x}{x}\,\mathrm{d}x
+\int_\pi^{2\pi}\frac{\sin x}{x}\,\mathrm{d}x.
$$
第二项令 $x=\pi+t$，得
$$
\int_\pi^{2\pi}\frac{\sin x}{x}\,\mathrm{d}x
=\int_0^\pi\frac{-\sin t}{\pi+t}\,\mathrm{d}t.
$$
所以
$$
I_1=\int_0^\pi\sin t\left(\frac{1}{t}-\frac{1}{\pi+t}\right)\mathrm{d}t
=\int_0^\pi\frac{\pi\sin t}{t(\pi+t)}\,\mathrm{d}t>0.
$$
因此 $I_2=-I_1<0$，$I_3=0$，$I_1>0$，即 $I_2<I_3<I_1$。

选择题【答案】: (C)。

**解题切入点**

考查区间再现与积分大小比较。核心不是精算 $I_1$，而是用对称换元 $x\mapsto 2\pi-x$ 把 $I_2$ 化为 $-I_1$，再用部分分式把 $I_3$ 写成 $I_1,I_2$ 的线性组合；类似算法竞赛中“环上对称/逆序变换”消去无关量。

**推演**

（1）由上述换元得 $I_2=-I_1$，因此两数异号且绝对值相等。
（2）由部分分式得 $I_3=\frac{1}{2\pi}(I_1+I_2)=0$。
（3）判断 $I_1>0$：上面的合并式说明 $I_1$ 是 $(0,\pi)$ 上正值函数的积分，故严格大于 $0$。

回代检查：由 $I_3=\frac{1}{2\pi}(I_1+I_2)$ 和 $I_2=-I_1$ 得 $I_3=0$，与直接区间再现 $I_3=-I_3$ 一致。

逐一分析选项：

- (A) $I_3<I_1<I_2$：错误。因为 $I_1>0$ 而 $I_2<0$，不可能 $I_1<I_2$。
- (B) $I_3<I_2<I_1$：错误。因为 $I_3=0>I_2$，应 $I_2<I_3$。
- (C) $I_2<I_3<I_1$：正确。
- (D) $I_1<I_2<I_3$：错误。因为 $I_1>0>I_2$，应 $I_2<I_1$；且 $I_3=0$。

**易错点**

1. 不能只凭 $\sin x$ 的正负判断 $I_1$：它在 $(\pi,2\pi)$ 为负，但正的部分更大，需合并为 $\int_0^\pi \frac{\pi\sin x}{x(x+\pi)}\mathrm{d}x$ 判断。
2. 换元时 $\sin(2\pi-t)=-\sin t$ 易漏负号；同时积分上下限反转也要处理，否则 $I_2$ 的符号容易搞反。
3. $I_3=\frac{I_1+I_2}{2\pi}$ 中的分母是 $2\pi$，它是线性组合系数，不要与算术平均的 $\frac{1}{2}$ 混淆；本题恰好为零。

**命题规律**

考研数学一常通过“区间再现”和对称性考积分大小比较，关键是寻找变换关系，而不是硬算原函数。复习时熟练掌握 $x=a+b-t$ 换元、部分分式分解和 $\sin$ 的区间符号；遇到形如 $\int_0^{2\pi}\frac{\sin x}{x(2\pi-x)}\mathrm{d}x$ 的对称结构，可直接判断为零积分。


> 来源：《26_张宇八套卷（数一）》卷七 第 4 题
