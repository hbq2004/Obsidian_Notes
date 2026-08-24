---
ctime: 2026-08-24 17:34:56
mtime: 2026-08-24 17:34:56
tags:
  - AM
  - 26_张宇八套卷/卷八/FRQ
  - 计算题
  - 偏微分方程
  - 变量分离
  - 反三角函数求导
  - 不定积分
  - 待定常数
points:
level:
---

# FRQ 第 17 题

![[_Attachments/题目识别/ZYT8T/ZYT8T-S8-Q17_题目.png|题目]]

设 $u(x,y) = f(x) + g(y)$ 具有二阶连续偏导数，且满足
$$ \left[ 1 + \left( \frac{\partial u}{\partial y} \right)^2 \right] \frac{\partial^2 u}{\partial x^2} - 2 \frac{\partial u}{\partial x} \frac{\partial u}{\partial y} \frac{\partial^2 u}{\partial x \partial y} + \left[ 1 + \left( \frac{\partial u}{\partial x} \right)^2 \right] \frac{\partial^2 u}{\partial y^2} = 0 $$
又已知 $f''(x) \neq 0$，求 $u = u(x,y)$ 的表达式.

![[_Attachments/题目识别/ZYT8T-答案/ZYT8T-S8-Q17_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终

$$u(x,y)=\frac{1}{a}\ln\left|\frac{\cos(ay+b)}{\cos(ax+c)}\right|+C,\quad a\ne0,$$

其中 $b,c,C$ 为任意常数。等价地，

$$f(x)=-\frac{1}{a}\ln|\cos(ax+c)|+C_1,\quad g(y)=\frac{1}{a}\ln|\cos(ay+b)|+C_2,\quad C_1+C_2=C.$$

定义域取使 $\cos(ax+c)\cos(ay+b)\ne0$ 的连通区域。关键给分点：正确求偏导并代入；由相加式得两端的公共常值；积分得到含非零参数 $a$ 的表达式。

**解题切入点**

$u=f(x)+g(y)$ 使 $u_{xy}=0$，原方程变成“只含 $x$ 的项 + 只含 $y$ 的项 = 0”。这就像两个独立数组求和恒为零，只能各自为常数；再通过 $(\arctan f')'=f''/(1+f'^2)$ 把一阶导平方项化为可积形式。

**推演**

1. 由 $u=f(x)+g(y)$，有
$$u_x=f'(x),\ u_{xx}=f''(x),\ u_y=g'(y),\ u_{yy}=g''(y),\ u_{xy}=0.$$
代入原方程得
$$(1+g'^2)f''+(1+f'^2)g''=0.$$

2. 两边除以正数 $(1+f'^2)(1+g'^2)$，得
$$\frac{f''}{1+f'^2}+\frac{g''}{1+g'^2}=0.$$
令
$$A(x)=\frac{f''}{1+f'^2},\quad B(y)=\frac{g''}{1+g'^2}.$$
则 $A(x)+B(y)=0$。因 $A$ 只依赖 $x$，$B$ 只依赖 $y$，故二者同为常数；设 $A=a$，则 $B=-a$，即
$$\frac{f''}{1+f'^2}=a,\quad \frac{g''}{1+g'^2}=-a.$$

3. 因 $f''(x)\ne0$ 且 $1+f'^2>0$，所以 $a\ne0$。于是
$$(\arctan f')'=a,\quad (\arctan g')'=-a.$$
积分得
$$\arctan f'=ax+c,\quad \arctan g'=-ay+d.$$
故
$$f'=\tan(ax+c),\quad g'=\tan(-ay+d).$$

4. 再积分：
$$f(x)=-\frac{1}{a}\ln|\cos(ax+c)|+C_1,$$
$$g(y)=\frac{1}{a}\ln|\cos(-ay+d)|+C_2.$$
合并常数，令 $b=-d$，$C=C_1+C_2$，得
$$u=-\frac{1}{a}\ln|\cos(ax+c)|+\frac{1}{a}\ln|\cos(ay+b)|+C,$$
即
$$u(x,y)=\frac{1}{a}\ln\left|\frac{\cos(ay+b)}{\cos(ax+c)}\right|+C.$$

回代检验：$u_x=\tan(ax+c)$，$u_y=-\tan(ay+b)$，于是 $u_{xx}=a(1+u_x^2)$，$u_{yy}=-a(1+u_y^2)$，且 $u_{xy}=0$，原式成立。

**易错点**

- 不要由 $A(x)+B(y)=0$ 直接写 $\arctan f'+\arctan g'=$ 常数；应先推出 $A,B$ 分别为常数，再积分。
- 不要漏掉 $a\ne0$；若 $a=0$，则 $f''=0$，与题设矛盾。
- 对数必须加绝对值，并注意定义域要避开 $\cos=0$ 的点；实际解在这些点附近可能有奇性。
- 常数合并时不要少掉整体常数 $C$。

**命题规律**

本题属于“叠加结构代入偏微分方程”的典型题：先消去 $u_{xy}$，再把二元方程拆成两个一元常微分方程。见到 $\frac{\phi''}{1+\phi'^2}$，优先想到 $(\arctan \phi')'$。复习时应重视变量分离、反三角函数凑微分和待定常数回代验证。


> 来源：《26_张宇八套卷（数一）》卷八 第 17 题
