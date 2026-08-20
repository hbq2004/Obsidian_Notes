---
ctime: 2026-08-20 16:49:50
mtime: 2026-08-20 17:47:32
tags:
  - DS
  - 王道算法应用题打卡表做题本/栈队列的应用/3.1-栈的定义和基本操作实现
  - 综合题
  - 链栈
  - 单链表
  - 尾插尾删
  - 边界条件
  - 时间复杂度
points:
level:
---

# FRQ 第 2.1.6 题

![[_Attachments/题目识别/王道算法应用题打卡表做题本-题目/WD-3.1-T06_题目.png|题目]]

任务6：(必做) 2.1.6 写代码：基于上述定义，栈顶在链尾，实现“出栈、入栈、判空、判满”四个基本操作

---

## 答案

![[_Attachments/题目识别/王道算法应用题打卡表做题本-答案/WD-3.1-T06_答案.png|答案]]

## DeepSeek V4 Flash Max 解析

**答案**：  
沿用通常的链栈结点定义（每个结点含 `data` 和 `next`），**栈顶在链尾**，所以额外维护两个指针：`bottom` 指向链首（栈底），`top` 指向链尾（栈顶）。四个基本操作实现如下：

```c
#include <stdlib.h>
#include <stdbool.h>

typedef int ElemType;

typedef struct LNode {
    ElemType data;
    struct LNode *next;
} LNode;

typedef struct {
    LNode *bottom;   // 栈底：链表第一个结点
    LNode *top;      // 栈顶：链表最后一个结点
} LiStack;

void InitStack(LiStack *S) {
    S->bottom = NULL;
    S->top = NULL;
}

// 入栈：在链尾插入新结点
bool Push(LiStack *S, ElemType x) {
    LNode *s = (LNode *)malloc(sizeof(LNode));
    if (s == NULL)
        return false;          // 内存不足，入栈失败

    s->data = x;
    s->next = NULL;

    if (S->top == NULL) {      // 空栈
        S->bottom = s;
        S->top = s;
    } else {                   // 挂在当前栈顶之后
        S->top->next = s;
        S->top = s;
    }
    return true;
}

// 出栈：删除链尾结点，并用 *x 返回栈顶元素
bool Pop(LiStack *S, ElemType *x) {
    if (S->top == NULL)        // 空栈
        return false;

    *x = S->top->data;

    if (S->bottom == S->top) { // 只有一个结点
        free(S->top);
        S->bottom = NULL;
        S->top = NULL;
    } else {                   // 找栈顶结点的前驱
        LNode *p = S->bottom;
        while (p->next != S->top)
            p = p->next;

        p->next = NULL;
        free(S->top);
        S->top = p;            // 前驱成为新栈顶
    }
    return true;
}

// 判空
bool IsEmpty(LiStack *S) {
    return S->top == NULL;
}

// 判满：链栈动态申请结点，没有固定容量上限，通常不为满
bool IsFull(LiStack *S) {
    return false;
}
```

**解题切入点**：  
题目要求“栈顶在链尾”，本质是**单链表的尾插和尾删**。看到“链尾”先画一条链：

$$
\text{bottom} \to n_1 \to n_2 \to \cdots \to n_k=\text{top}
$$

入栈就是在 `top` 后面接新结点；出栈要删除 `top`，必须找到它的前驱。链栈没有顺序栈中的 `MaxSize`，所以判满一般直接返回 `false`。

**推演**：  

1. **入栈**  
   新建结点 $s$，令 $s\to next = NULL$。  
   - 若栈空，则 $bottom=top=s$；  
   - 否则令 $top\to next=s$，再更新 $top=s$。  

   时间复杂度：$O(1)$。

2. **出栈**  
   若栈空，返回 `false`。  
   - 若栈中只有一个结点，即 $bottom=top$，释放该结点，令 $bottom=top=NULL$；  
   - 否则从 $bottom$ 开始向后扫描，找到满足 $p\to next=top$ 的前驱 $p$，令 $p\to next=NULL$，释放 $top$，再令 $top=p$。  

   因为需要找前驱，最坏时间复杂度：$O(n)$。

3. **判空**  
   只需判断 $top==NULL$，时间复杂度 $O(1)$。

4. **判满**  
   链栈空间由 `malloc` 动态分配，没有固定容量，因此常规实现返回 `false`；若 `malloc` 失败，由 `Push` 返回 `false` 表示入栈失败。

**易错点**：  
- 只用一个 `top` 指针指向链尾，在单链表中无法找到其前驱，出栈无法完成，必须保留 `bottom` 指针；若改用双向链表或循环链表，处理方式会不同。  
- 空栈入栈时不能写 `top->next = s`，否则会解引用空指针。  
- 出栈时若只有一个结点，释放后必须把 `bottom` 和 `top` 都置为 `NULL`。  
- 出栈时找到前驱 $p$ 后，要记得把 $p\to next$ 置为 `NULL`，否则链表尾部会残留已释放结点的指针。  
- 不要用顺序栈的 `top-bottom` 或 `top==MaxSize` 来判断链栈是否满，链栈没有数组容量概念。

**命题规律**：  
该题属于“链栈基本操作”代码设计题。核心考点是链表的尾插、尾删以及边界条件处理。常见变式有：栈顶在链头（头插头删，入栈出栈均为 $O(1)$）、带头结点的链栈、双向链表实现链栈、循环链表实现链栈等。复习时建议先画图，明确指针变化，再写代码，尤其注意空栈和单结点两种边界。

**知识点**：  
链栈、单链表、尾插尾删、时间复杂度

---

> 来源：王道算法应用题打卡表做题本 · 考点 3.1 · 栈的定义和基本操作实现
