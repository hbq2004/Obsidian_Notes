---
ctime: 2026-08-20 16:49:50
mtime: 2026-08-20 17:47:32
tags:
  - DS
  - 王道算法应用题打卡表做题本/树的应用/4.2-二叉树的顺序存储和基本操作实现
  - 综合题
  - 顺序存储二叉树
  - 完全二叉树
  - 双亲孩子下标关系
  - isEmpty空标记
points:
level:
---

# FRQ 第 3.1.7 题

![[_Attachments/题目识别/王道算法应用题打卡表做题本-题目/WD-4.2-T07_题目.png|题目]]

任务6：(高优先级)3.1.7 写代码：定义顺序存储的二叉树(数组实现，树的结点从数组下标0开始存储).

---

## 答案

![[_Attachments/题目识别/王道算法应用题打卡表做题本-答案/WD-4.2-T07_答案.png|答案]]

## DeepSeek V4 Flash Max 解析

**答案**：
顺序存储的二叉树仍按“完全二叉树编号”的思想存入一维数组，根结点放在数组下标 0 的位置。对任意结点下标 $i$：

$$左孩子下标 = 2i+1,\qquad 右孩子下标 = 2i+2,\qquad 双亲下标 = \left\lfloor\frac{i-1}{2}\right\rfloor\ (i>0)$$

一般二叉树会有空位置，所以用一个 `isEmpty` 标记区分“空结点”和“有值结点”。

```c
#include <stdbool.h>

#define MAX_TREE_SIZE 100

typedef int ElemType;

typedef struct {
    ElemType data[MAX_TREE_SIZE];   // 按完全二叉树编号存入数组
    bool isEmpty[MAX_TREE_SIZE];    // true 表示该位置无结点
    int lastIndex;                  // 当前已使用的最大数组下标，空树为 -1
} SqBiTree;

// 初始化：所有位置都置为空
void InitSqBiTree(SqBiTree *T) {
    T->lastIndex = -1;
    for (int i = 0; i < MAX_TREE_SIZE; i++) {
        T->isEmpty[i] = true;
    }
}

// 判断下标 i 处是否有结点
bool IsEmptyNode(SqBiTree T, int i) {
    if (i < 0 || i > T.lastIndex) return true;
    return T.isEmpty[i];
}

// 在数组下标 i 处放入一个结点值
bool SetNode(SqBiTree *T, int i, ElemType value) {
    if (i < 0 || i >= MAX_TREE_SIZE) return false;
    T->data[i] = value;
    T->isEmpty[i] = false;
    if (i > T->lastIndex) T->lastIndex = i;
    return true;
}

// 求下标 i 的结点的双亲下标，不存在返回 -1
int Parent(SqBiTree T, int i) {
    if (i <= 0 || i > T.lastIndex || T.isEmpty[i]) {
        return -1;
    }
    int p = (i - 1) / 2;
    if (T.isEmpty[p]) return -1;
    return p;
}

// 求下标 i 的结点的左孩子下标，不存在返回 -1
int LeftChild(SqBiTree T, int i) {
    if (i < 0 || i > T.lastIndex || T.isEmpty[i]) {
        return -1;
    }
    int child = 2 * i + 1;
    if (child > T.lastIndex || T.isEmpty[child]) {
        return -1;
    }
    return child;
}

// 求下标 i 的结点的右孩子下标，不存在返回 -1
int RightChild(SqBiTree T, int i) {
    if (i < 0 || i > T.lastIndex || T.isEmpty[i]) {
        return -1;
    }
    int child = 2 * i + 2;
    if (child > T.lastIndex || T.isEmpty[child]) {
        return -1;
    }
    return child;
}
```

如果题目明确限定为“完全二叉树”，可以省去 `isEmpty`，只用 `data[0..lastIndex]` 连续存储即可。

**解题切入点**：
拿到题目先抓两个关键词：“数组实现”和“下标从 0 开始”。顺序存储二叉树的核心不是链表指针，而是数组下标的数学关系。先写出三个公式：

$$左孩子=2i+1,\quad 右孩子=2i+2,\quad 双亲=(i-1)/2$$

然后定义结构体时，必须考虑“空位置”怎么表示：用 `isEmpty` 标记，或者用特殊值 `EMPTY`。如果题目默认是完全二叉树，则不需要空标记。

**推演**：
顺序存储二叉树本质上是把一棵二叉树补成完全二叉树，再按“从上到下、从左到右”编号存入数组。

设结点在数组中的下标为 $i$，则在完全二叉树编号中，它对应的编号是 $i+1$。

- 左孩子的编号为 $2(i+1)$，对应数组下标为：

$$2(i+1)-1=2i+1$$

- 右孩子的编号为 $2(i+1)+1$，对应数组下标为：

$$2(i+1)+1-1=2i+2$$

- 双亲的编号为 $\lfloor (i+1)/2 \rfloor$，对应数组下标为：

$$\left\lfloor\frac{i+1}{2}\right\rfloor-1=\left\lfloor\frac{i-1}{2}\right\rfloor$$

所以：

$$L(i)=2i+1,\quad R(i)=2i+2,\quad P(i)=\left\lfloor\frac{i-1}{2}\right\rfloor\ (i>0)$$

根结点下标为 $0$，它没有双亲。

**易错点**：
1. 直接套用“根从 1 开始”的公式。  
   常见错误：根从 1 存储时左孩子是 $2i$，根从 0 存储时左孩子是 $2i+1$，不能混用。

2. 忽略空结点。  
   普通二叉树顺序存储时，数组中间可能有空位置，不能只靠数组下标判断孩子是否存在，必须有 `isEmpty` 或特殊标记。

3. 忘记检查数组越界。  
   计算孩子下标后应先判断是否超过 `lastIndex`，再访问数组。

4. 初始化不完整。  
   `lastIndex` 必须初始化为 $-1$，所有 `isEmpty` 必须置为 `true`。

**命题规律**：
这是二叉树的“顺序存储”高优先级考点。选择题常给一棵完全二叉树及其数组存储，问某个下标结点的左孩子、右孩子、双亲；也会把 1-based 和 0-based 下标混合起来考查。大题可能要求手写结构体定义、初始化或求父子下标的函数。复习时要把 0-based 的三条公式背熟，并能和链式存储结构对比，理解顺序存储适合完全二叉树，不适合普通斜树。

**知识点**：
二叉树的顺序存储、完全二叉树、双亲与孩子下标关系

---

> 来源：王道算法应用题打卡表做题本 · 考点 4.2 · 二叉树的顺序存储和基本操作实现
