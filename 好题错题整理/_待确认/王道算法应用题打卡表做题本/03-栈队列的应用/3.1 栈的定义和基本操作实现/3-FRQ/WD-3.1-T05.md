---
ctime: 2026-08-20 16:49:50
mtime: 2026-08-21 00:28:44
tags:
  - DS
  - 王道算法应用题打卡表做题本/栈队列的应用/3-1-栈的定义和基本操作实现
  - 综合题
  - 链式栈
  - 双向链表
  - 栈的LIFO特性
  - 入栈出栈操作
  - 时间复杂度
points:
level:
---

# FRQ 第 2.1.5 题

![[_Attachments/题目识别/王道算法应用题打卡表做题本-题目/WD-3.1-T05_题目.png|题目]]

任务 5：(必做)2.1.5 写代码：定义链式存储的栈(双向链表实现)

---

## 答案

![[_Attachments/题目识别/王道算法应用题打卡表做题本-答案/WD-3.1-T05_答案.png|答案]]

## DeepSeek V4 Flash Max 解析

**答案**：
```c
// 双向链表结点定义
typedef struct DNode {
    int data;
    struct DNode *prior, *next;
} DNode;

// 链式栈定义
typedef struct {
    DNode *top;  // 栈顶指针
    int size;    // 栈中元素个数（可选）
} LinkedStack;

// 初始化栈
void InitStack(LinkedStack *S) {
    S->top = NULL;
    S->size = 0;
}

// 判断栈空
int IsEmpty(LinkedStack *S) {
    return S->top == NULL;
}

// 入栈
void Push(LinkedStack *S, int x) {
    DNode *s = (DNode *)malloc(sizeof(DNode));
    s->data = x;
    s->prior = NULL;          // 新结点成为栈顶，其prior指向NULL
    s->next = S->top;         // 新结点的next指向原栈顶
    if (S->top != NULL)       // 如果原栈顶非空，将其prior指向新结点
        S->top->prior = s;
    S->top = s;               // 更新栈顶指针
    S->size++;
}

// 出栈
int Pop(LinkedStack *S, int *x) {
    if (IsEmpty(S)) return 0; // 栈空
    DNode *p = S->top;
    *x = p->data;
    S->top = p->next;         // 栈顶指针下移
    if (S->top != NULL)       // 如果新栈顶非空，将其prior置为NULL
        S->top->prior = NULL;
    free(p);
    S->size--;
    return 1;
}

// 取栈顶元素
int GetTop(LinkedStack *S, int *x) {
    if (IsEmpty(S)) return 0;
    *x = S->top->data;
    return 1;
}
```

**解题切入点**：  
拿到题目，首先明确栈的“后进先出”特性，链式存储适合动态数据，双向链表提供两个方向的指针，但栈只在一端操作，通常用单链表即可。本题要求双向链表实现，需注意维护两个指针的正确性。切入点：定位为链式栈的基本操作实现，重点在于链表插入、删除时指针的修改顺序，避免断链。

**推演**：  
1. **结点结构**：双向链表结点包含数据域 `data` 和两个指针 `prior`、`next`。  
2. **栈结构**：包含栈顶指针 `top`（指向栈顶结点），可选 `size` 记录元素个数。  
3. **初始化**：`top` 置 `NULL`，`size` 置 0。  
4. **入栈**：创建新结点，赋值；新结点的 `prior` 置 `NULL`，`next` 指向当前栈顶；若当前栈顶非空，将其 `prior` 指向新结点；更新栈顶指针为新结点；`size++`。时间复杂度 $O(1)$。  
5. **出栈**：判空；保存栈顶结点数据；栈顶指针下移（`top = top->next`）；若新栈顶非空，将其 `prior` 置 `NULL`；释放原栈顶结点；`size--`。时间复杂度 $O(1)$。  
6. **取栈顶**：直接返回栈顶结点数据，判空。时间复杂度 $O(1)$。  
所有操作均只涉及栈顶，符合栈的 LIFO 特性，且利用了双向链表便于修改前驱指针的特点。

**易错点**：  
1. 入栈时忘记更新原栈顶结点的 `prior` 指针，导致双向链表链断裂。  
2. 出栈时未将新栈顶的 `prior` 置 `NULL`，使其指向已释放的结点，产生野指针。  
3. 出栈后未 `free` 结点，造成内存泄漏。  
4. 栈空时进行出栈或取栈顶操作，未判空导致错误。  
5. 双向链表指针修改顺序不当（如先修改 `top` 再操作原结点），导致断链。  
6. 使用 `malloc` 后未检查是否分配成功（考试中通常隐式忽略，但实际应检查）。

**命题规律**：  
考点定位：链式栈的实现，特别是双向链表在栈中的应用。常见变式：用单链表实现栈、用循环链表实现队列、用双向链表实现双端队列等。复习建议：熟练掌握链表的基本操作（插入、删除、遍历），深入理解栈的 LIFO 特性，注意指针修改的细节，能快速写出无错误的代码。该知识点在 408 中常以代码题或应用题出现，分值约 10-15 分。

**知识点**：栈、链式存储、双向链表、时间复杂度

---

> 来源：王道算法应用题打卡表做题本 · 考点 3.1 · 栈的定义和基本操作实现
