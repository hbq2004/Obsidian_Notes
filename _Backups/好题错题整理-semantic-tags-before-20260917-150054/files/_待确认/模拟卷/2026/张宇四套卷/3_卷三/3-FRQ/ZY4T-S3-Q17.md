---
ctime: 2026-08-24 07:13:14
mtime: 2026-08-24 07:13:14
tags:
  - AM
  - 26_张宇四套卷/卷三/FRQ
  - 计算题
  - 条件极值
  - 拉格朗日乘数法
  - 三角恒等变换
  - 消元法
points:
level:
---

# 解答题 第 17 题

![[_Attachments/题目识别/ZY4T/ZY4T-S3-Q17_题目.png|题目]]

求函数 $z = \cos^2 x + \cos^2 y$ 在条件 $x - y = \frac{\pi}{4}$ 下的极值.

![[_Attachments/题目识别/ZY4T-答案/ZY4T-S3-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**  
函数 $z=\cos^2 x+\cos^2 y$ 在条件 $x-y=\frac{\pi}{4}$ 下的"极值"为：  
- 极大值 $z_{\max}=1+\frac{\sqrt{2}}{2}$，在点 $\left(\frac{\pi}{8}+k\pi,\ -\frac{\pi}{8}+k\pi\right)\ (k\in\mathbb{Z})$ 取得；  
- 极小值 $z_{\min}=1-\frac{\sqrt{2}}{2}$，在点 $\left(\frac{5\pi}{8}+k\pi,\ \frac{3\pi}{8}+k\pi\right)\ (k\in\mathbb{Z})$ 取得。  
关键给分点：①消元或拉格朗日乘数法正确；②化简与求极值计算正确；③极值点与极值表达完整。  

**解题切入点**  
条件简单，直接代入消元化为一元函数，再利用三角恒等变换求极值。类似算法中“降维”处理，将约束条件代入目标函数，将问题化为单变量优化。  

**推演**  
由条件 $x-y=\frac{\pi}{4}$，得 $y=x-\frac{\pi}{4}$，代入 $z$：  
$$z=\cos^2 x+\cos^2\left(x-\frac{\pi}{4}\right)$$  
利用 $\cos^2\theta=\frac{1+\cos2\theta}{2}$，有  
$$\cos^2\left(x-\frac{\pi}{4}\right)=\frac{1+\cos\left(2x-\frac{\pi}{2}\right)}{2}=\frac{1+\sin2x}{2}$$  
故  
$$z=\frac{1+\cos2x}{2}+\frac{1+\sin2x}{2}=1+\frac{1}{2}(\cos2x+\sin2x)$$  
而 $\cos2x+\sin2x=\sqrt2\sin\left(2x+\frac{\pi}{4}\right)$，所以  
$$z=1+\frac{\sqrt2}{2}\sin\left(2x+\frac{\pi}{4}\right)$$  
由于 $-1\le\sin(\cdot)\le1$：  
- 当 $\sin\left(2x+\frac{\pi}{4}\right)=1$ 时，$z_{\max}=1+\frac{\sqrt2}{2}$，此时 $2x+\frac{\pi}{4}=\frac{\pi}{2}+2k\pi$，解得 $x=\frac{\pi}{8}+k\pi$，$y=x-\frac{\pi}{4}=-\frac{\pi}{8}+k\pi$；  
- 当 $\sin\left(2x+\frac{\pi}{4}\right)=-1$ 时，$z_{\min}=1-\frac{\sqrt2}{2}$，此时 $2x+\frac{\pi}{4}=-\frac{\pi}{2}+2k\pi$ 或 $\frac{3\pi}{2}+2k\pi$，取 $2x+\frac{\pi}{4}=\frac{3\pi}{2}+2k\pi$，解得 $x=\frac{5\pi}{8}+k\pi$，$y=\frac{3\pi}{8}+k\pi$（或 $2x+\frac{\pi}{4}=-\frac{\pi}{2}+2k\pi$ 可得等价形式）。  
因此极值如答案所示。  
（也可用拉格朗日乘数法验证：设 $L=\cos^2x+\cos^2y+\lambda(x-y-\frac{\pi}{4})$，令偏导为零，得 $\sin2x=-\sin2y$，结合 $x-y=\frac{\pi}{4}$，得 $x+y=m\pi$，再解出驻点，与上述结果一致。）  

**易错点**  
1. 忘记条件约束，直接对 $x,y$ 求偏导；  
2. 拉格朗日乘数法求驻点时，遗漏周期解；  
3. 化简 $\cos^2\left(x-\frac{\pi}{4}\right)$ 时符号错误；  
4. 极值点表达不完整，缺少 $k\in\mathbb{Z}$。  

**命题规律**  
条件极值是考研数学高频考点，常与三角、指数函数结合。复习时熟练掌握拉格朗日乘数法和代入消元法，注意周期性。


> 来源：《26_张宇四套卷（数一）》卷三 第 17 题
