---
ctime: 2026-08-20 16:49:50
mtime: 2026-08-20 17:47:32
tags:
  - DS
  - 王道算法应用题打卡表做题本/树的应用/4.2-二叉树的顺序存储和基本操作实现
  - 综合题
  - 二叉树遍历
  - 栈应用
  - 非递归遍历
  - 递归转非递归
  - 时间复杂度分析
points:
level:
---

# FRQ 第 3.1.6 题

![[_Attachments/题目识别/王道算法应用题打卡表做题本-题目/WD-4.2-T06_题目.png|题目]]

任务 5： (高优先级) 3.1.6 利用上述三个函数，实现先/中/后序遍历.

---

## 答案

![[_Attachments/题目识别/王道算法应用题打卡表做题本-答案/WD-4.2-T06_答案.png|答案]]

## DeepSeek V4 Flash Max 解析

**答案**：

本题常见的“上述三个函数”指栈的基本操作：`InitStack`、`Push`、`Pop`。用显式栈模拟系统递归调用栈即可实现三种遍历。代码如下（若题目已给出栈函数，前几行辅助定义可省略）：

```c
#include <stdio.h>
#define MaxSize 100

typedef int ElemType;

typedef struct BiTNode {
    ElemType data;
    struct BiTNode *lchild, *rchild;
} BiTNode, *BiTree;

typedef struct {
    BiTree data[MaxSize];
    int top;
} SqStack;

void InitStack(SqStack *S) {
    S->top = -1;
}

int StackEmpty(SqStack S) {
    return S.top == -1;
}

int Push(SqStack *S, BiTree x) {
    if (S->top == MaxSize - 1) return 0;
    S->data[++S->top] = x;
    return 1;
}

int Pop(SqStack *S, BiTree *x) {
    if (S->top == -1) return 0;
    *x = S->data[S->top--];
    return 1;
}

void visit(BiTree p) {
    printf("%d ", p->data);
}

// 先序遍历：根 -> 左 -> 右
void PreOrder(BiTree T) {
    SqStack S;
    InitStack(&S);
    BiTree p = T;

    while (p != NULL || !StackEmpty(S)) {
        if (p != NULL) {
            visit(p);          // 入栈前访问
            Push(&S, p);
            p = p->lchild;
        } else {
            Pop(&S, &p);
            p = p->rchild;
        }
    }
}

// 中序遍历：左 -> 根 -> 右
void InOrder(BiTree T) {
    SqStack S;
    InitStack(&S);
    BiTree p = T;

    while (p != NULL || !StackEmpty(S)) {
        if (p != NULL) {
            Push(&S, p);
            p = p->lchild;
        } else {
            Pop(&S, &p);
            visit(p);          // 出栈后访问
            p = p->rchild;
        }
    }
}

// 后序遍历：左 -> 右 -> 根
void PostOrder(BiTree T) {
    SqStack S;
    InitStack(&S);
    BiTree p = T;
    BiTree r = NULL;           // r 记录上一个被访问的结点

    while (p != NULL || !StackEmpty(S)) {
        if (p != NULL) {
            Push(&S, p);
            p = p->lchild;
        } else {
            p = S.data[S.top]; // 取栈顶，不弹出
            if (p->rchild != NULL && p->rchild != r) {
                p = p->rchild; // 右子树还没处理，先处理右子树
            } else {
                Pop(&S, &p);
                visit(p);
                r = p;
                p = NULL;
            }
        }
    }
}
```

时间复杂度：$O(n)$，每个结点入栈、出栈各一次。  
空间复杂度：最坏 $O(n)$，对应单支树；平衡二叉树时为 $O(\log n)$。

---

**解题切入点**：

拿到“先/中/后序遍历”，先抓一个核心：`visit` 这个访问操作放在哪里。

- 先序：先访问根，再左，再右。
- 中序：先左，再访问根，再右。
- 后序：先左，再右，最后访问根。

如果题目要求用栈函数实现，本质是：把系统递归调用栈“手动化”。用栈保存“还没处理完的结点”，也就是回溯路径。可以类比写 DFS：先一路向左走到底，走不动了再弹栈回头走右边。

---

**推演**：

设当前子树为 $T$，空树时什么都不做。则三种遍历的递归定义为：

$$
\text{Pre}(T)=\big(T,\ \text{Pre}(T\to lchild),\ \text{Pre}(T\to rchild)\big)
$$

$$
\text{In}(T)=\big(\text{In}(T\to lchild),\ T,\ \text{In}(T\to rchild)\big)
$$

$$
\text{Post}(T)=\big(\text{Post}(T\to lchild),\ \text{Post}(T\to rchild),\ T\big)
$$

非递归化时，用栈模拟“递归返回现场”：

1. **先序**：遇到结点就先访问，然后入栈，继续向左走；左子树为空时出栈，转向右子树。
2. **中序**：遇到结点先入栈，不访问，继续向左走；左子树为空时出栈并访问，然后转向右子树。
3. **后序**：必须先处理完左、右子树，才能访问根。所以需要记录“上一次访问的结点” `r`。当栈顶结点的右子树为空，或者右子树刚刚被访问完，才能弹出并访问该结点；否则先转向右子树。

后序最关键的一点：

$$
\text{栈顶结点的右子树已经处理完} \iff p\to rchild == NULL \ \text{或} \ p\to rchild == r
$$

其中 $r$ 是上一个被访问的结点。

---

**易错点**：

1. **先序和中序的位置写反**：先序是入栈前访问，中序是出栈后访问。如果中序在入栈前访问，会变成先序。
2. **后序死循环**：只判断“右子树非空”就转右子树，会导致右子树被反复处理。必须用 `r` 记录上一次访问的结点。
3. **空树未处理**：`T == NULL` 时，循环条件不成立，直接返回即可，不能访问 `T->data`。
4. **栈空/栈满判断遗漏**：`Pop` 前要保证栈非空；`Push` 前要考虑栈满。
5. **后序弹出后忘记把 `p` 置空**：否则可能再次进入左子树，造成重复遍历。

---

**命题规律**：

本题是“二叉树遍历 + 栈应用”的典型结合点，408 中常以选择题或代码题形式出现。

常见变式：

- 已知先序和中序序列，还原二叉树；
- 已知中序和后序序列，还原二叉树；
- 非递归中序遍历过程中，栈的变化分析；
- 利用栈求二叉树深度、叶子结点数等。

复习建议：先默写递归三序遍历，再理解非递归先序、中序的“入栈/出栈时机”，后序重点理解 `r` 指针的作用。考试时建议画一棵小树手动模拟栈变化，避免死记硬背。

---

**知识点**：

二叉树遍历、栈、递归与非递归、时间复杂度

---

> 来源：王道算法应用题打卡表做题本 · 考点 4.2 · 二叉树的顺序存储和基本操作实现
