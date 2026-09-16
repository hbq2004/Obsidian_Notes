---
ctime: 2026-08-24 08:43:18
mtime: 2026-08-24 08:43:18
tags:
  - AM
  - 26_李林六套卷/卷三/FRQ
  - 计算题
  - 复合函数偏导
  - 变量替换
  - 偏微分方程化常微分方程
  - 待定常数
  - 齐次函数
points:
level:
---

# 解答题 第 18 题

![[_Attachments/题目识别/LL6T/LL6T-S3-Q18_题目.png|题目]]

设 $f(u)$ 在 $(0,+\infty)$ 内具有二阶导数, $z = xf(\frac{y}{x}) + yf(\frac{y}{x})$ 满足

$$x\frac{\partial^2 z}{\partial x \partial y} + 2y\frac{\partial^2 z}{\partial y^2} = \frac{y}{x}, z(x,x)=x, \frac{\partial z}{\partial x}\bigg|_{(x,x)}=-\frac{3}{2},$$

求 $f(u).$

![[_Attachments/题目识别/LL6T-答案/LL6T-S3-Q18_答案.png|答案]]


## DeepSeek V4 Flash Max 解析

**答案**

最终结论：
$$f(u)=\frac{u^{2}+3u-2}{2(u+1)}\quad(u>0).$$

关键给分点：
1. 令 $u=\frac{y}{x}$，$g(u)=(1+u)f(u)$，则 $z=xg(u)$；
2. 求导得 $z_{xy}=-\frac{u}{x}g''(u)$，$z_{yy}=\frac{1}{x}g''(u)$；
3. 代入方程得 $ug''(u)=u$，故 $g''(u)=1$，积分 $g(u)=\frac12u^2+C_1u+C_2$；
4. 由条件 $z(x,x)=x$、$z_x|_{(x,x)}=-\frac32$ 得 $g(1)=1$，$g(1)-g'(1)=-\frac32$，解出 $C_1=\frac32,C_2=-1$；
5. 回代 $f(u)=g(u)/(1+u)$。

**解题切入点**

令 $u=y/x$ 相当于把二元函数“降维”成一元函数；与算法竞赛中的换元简化类似，关键是找出 $z=xg(u)$ 的结构，使偏导数都只含 $g''(u)$，偏微分方程就化为常微分方程。

**推演**

设 $u=\frac{y}{x}$，$g(u)=(1+u)f(u)$，则 $z=xg(u)$。

由复合函数求导：
$$u_x=-\frac{u}{x},\qquad u_y=\frac1x.$$
$$z_x=g(u)-ug'(u),\qquad z_y=g'(u).$$
继续求导：
$$z_{xy}=\frac{\partial}{\partial y}[g(u)-ug'(u)]=-ug''(u)\cdot\frac1x=-\frac{u}{x}g''(u),$$
$$z_{yy}=g''(u)\cdot\frac1x=\frac1x g''(u).$$

代入已知方程：
$$xz_{xy}+2yz_{yy}=x\left(-\frac{u}{x}g''(u)\right)+2y\left(\frac1x g''(u)\right)$$
$$=-ug''(u)+2\frac{y}{x}g''(u)=-ug''(u)+2ug''(u)=ug''(u).$$

右端为 $\frac{y}{x}=u$，所以
$$ug''(u)=u.$$
因 $u>0$，得 $g''(u)=1$。积分两次：
$$g'(u)=u+C_1,\qquad g(u)=\frac12u^2+C_1u+C_2.$$

由 $z(x,x)=x$：
$$z(x,x)=xg(1)=x\Rightarrow g(1)=1.$$
由 $\left.\frac{\partial z}{\partial x}\right|_{(x,x)}=-\frac32$：
$$g(1)-g'(1)=-\frac32.$$
故 $g'(1)=1+\frac32=\frac52$。又 $g'(u)=u+C_1$，所以 $C_1=\frac32$。
由 $g(1)=\frac12+C_1+C_2=1$，得 $C_2=-1$。

因此
$$g(u)=\frac12u^2+\frac32u-1=\frac{u^2+3u-2}{2},$$
$$f(u)=\frac{g(u)}{1+u}=\frac{u^2+3u-2}{2(u+1)}.$$

代回验证：$f(1)=\frac12$，$g(1)=1$，$g''(u)=1$，所有条件均满足。

**易错点**

- 不要直接展开 $(x+y)f(y/x)$ 后硬算，应先用 $u=y/x$ 换元；
- 求 $z_x$ 时注意 $u_x=-u/x$，漏掉会导致 $z_{xy}$ 错误；
- 方程得出的是 $g''(u)=1$，不是 $f''(u)=1$，要先把 $g$ 求出再除以 $1+u$；
- 两个常数需用题目给出的两个条件联立，不能只用一个条件。

**命题规律**

这类题常以“含 $f(y/x)$ 的二元函数 + 偏导方程”的形式出现，核心是换元降维化为 ODE，再用边界/初值条件定常数。复习时应熟练掌握复合函数偏导公式，并注意计算细节。


> 来源：《26_李林六套卷（数一）》卷三 第 18 题
