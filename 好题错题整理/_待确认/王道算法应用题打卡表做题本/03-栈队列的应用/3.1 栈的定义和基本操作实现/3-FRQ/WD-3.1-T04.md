---
ctime: 2026-08-20 16:49:50
mtime: 2026-08-21 00:28:44
tags:
  - DS
  - 王道算法应用题打卡表做题本/栈队列的应用/3-1-栈的定义和基本操作实现
  - 综合题
  - 链栈
  - 入栈
  - 出栈
  - 判空判满
  - 头插法
points:
level:
---

# FRQ 第 2.1.4 题

![[_Attachments/题目识别/王道算法应用题打卡表做题本-题目/WD-3.1-T04_题目.png|题目]]

任务4：(必做)2.1.4 写代码：基于上述定义，栈顶在链头，实现“出栈、入栈、判空、判满”四个基本操作.

---

## 答案

![[_Attachments/题目识别/王道算法应用题打卡表做题本-答案/WD-3.1-T04_答案.png|答案]]

## DeepSeek V4 Flash Max 解析

**答案**：  
基于链式栈的定义（`top` 指向链头结点，即栈顶），四个基本操作实现如下：

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef int ElemType;

// 链栈结点定义
typedef struct LinkNode {
    ElemType data;              // 数据域
    struct LinkNode *next;      // 指针域
} LinkNode, *LinkStack;

// 初始化栈
void InitStack(LinkStack &top) {
    top = NULL;                 // 空栈，栈顶指针置为 NULL
}

// 判空
bool IsEmpty(LinkStack top) {
    return top == NULL;
}

// 判满：链栈动态分配内存，一般不会满；若内存分配失败则返回 true
bool IsFull(LinkStack top) {
    return false;               // 链式存储无固定容量，认为永远不满
}

// 入栈：在链头插入新结点
bool Push(LinkStack &top, ElemType x) {
    LinkNode *s = (LinkNode *)malloc(sizeof(LinkNode));
    if (s == NULL)              // 内存分配失败，无法入栈
        return false;
    s->data = x;
    s->next = top;              // 新结点指向原栈顶
    top = s;                    // 栈顶指针指向新结点
    return true;
}

// 出栈：删除链头结点并返回值
bool Pop(LinkStack &top, ElemType &x) {
    if (top == NULL)            // 栈空不能出栈
        return false;
    LinkNode *p = top;          // p 指向待删除的栈顶结点
    x = p->data;                // 取出数据
    top = p->next;              // 栈顶指针后移
    free(p);                    // 释放原栈顶结点
    return true;
}
```

**解题切入点**：  
看到“栈顶在链头”，应立即定位到“链栈”这一考点。链栈的本质是限制为只能在表头插入/删除的单链表，因此入栈就是链表的“头插法”，出栈就是“删除头结点”。判空只需判断栈顶指针是否为 `NULL`；判满则要与顺序栈区分——链栈动态申请内存，一般没有最大容量，所以判满函数通常返回 `false`。

**推演**：  

1. **结构设计**  
   每个结点包含数据域 `data` 和指针域 `next`，用 `top` 指向栈顶结点。栈顶在链头，所以 `top` 即首元结点指针。

2. **判空**  
   空栈时 `top == NULL`，因此返回 `top == NULL`。

3. **判满**  
   链栈的空间来自堆内存的动态分配，只要系统还能分配内存，栈就不满。所以直接返回 `false`。如果 `malloc` 失败，`Push` 返回 `false`，可看作“满”导致入栈失败。

4. **入栈 Push**  
   - 申请新结点 `s`；  
   - 将 `x` 存入 `s->data`；  
   - 令 `s->next = top`，使新结点指向原栈顶；  
   - 令 `top = s`，新结点成为新的栈顶。  
   时间复杂度为 \(O(1)\)。

5. **出栈 Pop**  
   - 若 `top == NULL`，栈空，直接返回 `false`；  
   - 用 `p` 暂存当前栈顶结点；  
   - 取出 `p->data` 给 `x`；  
   - 令 `top = p->next`，即栈顶指针指向下一个结点；  
   - `free(p)` 释放原栈顶结点。  
   时间复杂度为 \(O(1)\)。

**易错点**：  
- **判满照搬顺序栈写法**：顺序栈判满用 `top == MaxSize`，链栈没有固定容量，不能这样写。  
- **入栈忘记让 `s->next = top`**：导致新结点没有链接到原链栈上。  
- **出栈先 `free(p)` 再取 `p->next`**：这是非法访问已释放内存，应该先用 `next = p->next` 或直接 `top = p->next` 再释放。  
- **参数传值导致栈顶指针无法修改**：`Push` 和 `Pop` 需要修改 `top`，必须使用引用 `LinkStack &top` 或二级指针（`LinkStack *top`），只读函数如 `IsEmpty` 可以直接传值。  
- **`malloc` 后未判空**：内存分配可能失败，不判空会解引用空指针。

**命题规律**：  
本题是“栈和队列”章节的常考基础题，核心是链式存储下栈操作的实现。常见变式有：  
- 将栈顶设在链尾，实现入栈/出栈（此时需要尾指针）；  
- 增加 `GetTop` 读取栈顶元素；  
- 实现链栈的销毁操作；  
- 结合“括号匹配”“表达式求值”等应用考查栈的操作。  
复习时应将顺序栈和链栈的基本操作对照记忆，重点理解引用参数修改指针、动态内存管理等细节。

**知识点**：  
链栈、入栈、出栈、判空判满

---

> 来源：王道算法应用题打卡表做题本 · 考点 3.1 · 栈的定义和基本操作实现
