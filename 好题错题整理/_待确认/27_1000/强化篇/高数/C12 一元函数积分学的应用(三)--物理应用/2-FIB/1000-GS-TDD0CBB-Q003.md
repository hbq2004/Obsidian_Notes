---
ctime: 2026-08-16 21:50:52
mtime: 2026-08-16 21:50:52
tags:
  - AM
  - 27_1000/C12/b/FIB
  - 计算题
  - 积分的物理应用
  - 变力做功
  - 浮力
points:
level:
---

# FIB 第 3 题

![[_Attachments/题目识别/1000-GS/1000-GS-TDD0CBB-Q003_题目.png|题目]]

3. 半径为 $a$ 的球浸没在与其密度 $\rho$ 相同的某液体中，球与水面相切，$g$ 为重力加速度.若将球取出，所做的功至少为 \_\_\_\_\_\_.

---

## 答案

![[_Attachments/题目识别/1000-答案/1000-GS-TDD0CBB-Q003_答案.png|答案]]

## V4 Pro Max 解析

**答案**：$\dfrac{4}{3}\pi\rho g a^{4}$

**切入点**：同密度（中性浮力）球取出时，外力 = 重力 − 浮力；球心从深 $a$ 升到高 $a$，浮力随露出体积减小，积分求功。

**推演**

球重 $mg=\rho g\cdot\frac43\pi a^3$。设球心距水面高度为 $z$（$-a\le z\le a$），淹没体积为下半球冠，高 $h=a-z$，体积

$$V_{\text{sub}}(z)=\frac{\pi h^2(3a-h)}3=\frac{\pi(a-z)^2(2a+z)}3.$$

外力 $F(z)=mg-\rho g V_{\text{sub}}(z)=\rho g\Bigl[\frac43\pi a^3-\frac{\pi(a-z)^2(2a+z)}3\Bigr]$。功：

$$W=\int_{-a}^{a}F(z)dz=\rho g\Bigl[\frac83\pi a^4-\frac\pi3\int_{-a}^a(a-z)^2(2a+z)dz\Bigr].$$

$(a-z)^2(2a+z)=2a^3-3a^2z+z^3$，$\int_{-a}^a(2a^3-3a^2z+z^3)dz=4a^4$，故

$$W=\rho g\Bigl[\frac83\pi a^4-\frac{4\pi a^4}{3}\Bigr]=\frac43\pi\rho g a^4.$$

**易错点**：同密度意味着重力 = 全浮力，起步净外力为 0；淹没体积用球冠公式（不是整个半球）；功对 $z$ 从 $-a$ 积到 $a$。

**命题规律**：做功 = $\int(\text{重力}-\text{浮力})dz$，核心是随位置变化的淹没体积（球冠）；等效于"重心升 $2a$ 减浮力做的功"。
