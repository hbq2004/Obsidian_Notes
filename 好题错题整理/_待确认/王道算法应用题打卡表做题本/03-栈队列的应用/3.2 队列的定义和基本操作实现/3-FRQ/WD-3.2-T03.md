---
ctime: 2026-08-20 16:49:50
mtime: 2026-08-21 00:28:44
tags:
  - DS
  - 王道算法应用题打卡表做题本/栈队列的应用/2-队列的定义和基本操作实现
  - 综合题
  - 链式队列
  - 单链表
  - 入队操作
  - 出队操作
  - 判空条件
points:
level:
---

# FRQ 第 2.2.3 题

![[_Attachments/题目识别/王道算法应用题打卡表做题本-题目/WD-3.2-T03_题目.png|题目]]

任务 3：(中优先级) 2.2.3 写代码：定义链式存储的队列(单链表实现).

---

## 答案

![[_Attachments/题目识别/王道算法应用题打卡表做题本-答案/WD-3.2-T03_答案.png|答案]]

## DeepSeek V4 Flash Max 解析

**答案**：

链式存储的队列用单链表实现，需要两个指针：队头指针 `front` 和队尾指针 `rear`。为简化边界处理，通常采用带头结点的单链表，`front` 始终指向头结点，`rear` 指向队尾结点。初始化时 `front == rear` 指向头结点；入队在 `rear` 后插入新结点并更新 `rear`；出队删除 `front->next` 结点，若队列变空，需将 `rear` 置回 `front`。

完整 C 代码定义如下：

```c
#include <stdio.h>
#include <stdlib.h>

// 结点定义
typedef struct LinkNode {
    int data;                        // 数据域
    struct LinkNode *next;           // 指针域
} LinkNode;

// 链式队列定义
typedef struct {
    LinkNode *front, *rear;          // 队头指针、队尾指针
} LinkQueue;

// 初始化队列（带头结点）
void InitQueue(LinkQueue *Q) {
    Q->front = Q->rear = (LinkNode*)malloc(sizeof(LinkNode));
    Q->front->next = NULL;
}

// 判空
int IsEmpty(LinkQueue Q) {
    return Q.front == Q.rear;
}

// 入队
void EnQueue(LinkQueue *Q, int x) {
    LinkNode *s = (LinkNode*)malloc(sizeof(LinkNode));
    s->data = x;
    s->next = NULL;
    Q->rear->next = s;   // 新结点链到队尾之后
    Q->rear = s;         // 更新队尾指针
}

// 出队
int DeQueue(LinkQueue *Q, int *x) {
    if (IsEmpty(*Q)) {
        return 0;        // 队列为空，出队失败
    }
    LinkNode *p = Q->front->next;   // p 指向队首结点
    *x = p->data;
    Q->front->next = p->next;       // 头结点指向下一个结点
    if (Q->rear == p) {
        Q->rear = Q->front;         // 若队列中只有一个结点，删除后队尾指针要回指头结点
    }
    free(p);
    return 1;
}

// 读取队首元素（不删除）
int GetHead(LinkQueue Q, int *x) {
    if (IsEmpty(Q)) {
        return 0;
    }
    *x = Q.front->next->data;
    return 1;
}
```

---

**解题切入点**：

拿到题目先明确两个关键词：**“链式存储”**和**“队列”**。队列的核心约束是“先进先出（FIFO）”，链式存储则需要用单链表结点承载数据。单链表天然适合做队列：队首出队需要 $O(1)$ 删除头结点，队尾入队需要 $O(1)$ 插入尾结点。但如果只保留一个头指针，入队必须遍历到表尾，复杂度变成 $O(n)$。因此必须同时维护 `front` 和 `rear` 两个指针。这一步就锁定了数据结构设计：`LinkNode` 结点 + `front`/`rear` 结构体。

编程实现时还要考虑边界条件：空队列、只有一个元素的队列、入队后队列由空变非空、出队后队列由非空变空。建议先用带头结点的方法，让 `front` 始终指向头结点，这样出队和判空的代码更统一。可以类比“带头结点单链表”的写法，将头结点看作哨兵，能减少很多 `if` 判断。

---

**推演**：

1. **结点结构设计**

   单链表队列的每个结点需要存放数据 `data` 和指向下一个结点的指针 `next`：

   $$
   \text{LinkNode} = \{ \text{data}, \text{next} \}
   $$

   队列结构体保存队头和队尾指针：

   $$
   \text{LinkQueue} = \{ \text{front}, \text{rear} \}
   $$

2. **初始化**

   带头结点时，`front` 和 `rear` 都指向新建的头结点，头结点的 `next` 置空：

   ```c
   Q->front = Q->rear = (LinkNode*)malloc(sizeof(LinkNode));
   Q->front->next = NULL;
   ```

   此时：

   $$
   front == rear
   $$

   表示空队列。

3. **入队操作**

   新结点 `s`：

   ```
   s->data = x;
   s->next = NULL;
   ```

   将原队尾结点 `rear` 的 next 指向 `s`，再让 `rear` 指向 `s`：

   ```c
   Q->rear->next = s;
   Q->rear = s;
   ```

   这一过程的时间复杂度为 $O(1)$。

4. **出队操作**

   先判空，若 `front == rear` 则无法出队。否则让 `p` 指向队首结点 `front->next`：

   ```c
   p = Q->front->next;
   *x = p->data;
   Q->front->next = p->next;
   free(p);
   ```

   如果出队前队列只有一个结点，即 `p == Q->rear`，则删除后 `Q->front->next` 为 `NULL`，但 `rear` 仍指向已释放的 `p`，必须将 `rear` 改回 `front`：

   ```c
   if (Q->rear == p) {
       Q->rear = Q->front;
   }
   ```

   这样才能保持空队列判据 `front == rear` 成立。

5. **判空与取队首**

   判空：`front == rear`。

   取队首：取 `front->next->data`，因为头结点不存数据。

6. **为什么带头结点？**

   如果不带头结点，初始时 `front = rear = NULL`，入队时需判断是否为空：

   ```c
   if (Q->rear == NULL) {
       Q->front = Q->rear = s;
   } else {
       Q->rear->next = s;
       Q->rear = s;
   }
   ```

   出队时也要特殊处理。带头结点后，空队列和非空队列的操作可以统一，代码更简洁，所以考试中推荐带头结点的写法。

---

**易错点**：

1. **忘记处理 `rear` 指针**  
   出队删除最后一个元素后，如果不把 `rear` 置回 `front`，`rear` 会变成野指针，后续入队会访问非法内存。

2. **入队时未将新结点 `next` 置空**  
   `s->next` 必须初始化为 `NULL`，否则队尾结点的 next 指向未知位置，遍历或后续操作会出错。

3. **判空条件写错**  
   带头结点时，空条件必须是 `front == rear`，而不是 `front == NULL`。因为 `front` 始终指向头结点，非空。

4. **出队时未判断队列为空**  
   若队列为空仍执行 `front->next`，会访问到头结点但 `front->next == NULL`，解引用空指针导致程序崩溃。

5. **函数参数传递错误**  
   入队、出队需要修改 `front` 或 `rear`，因此必须传结构体指针 `LinkQueue *Q`，不能只传 `LinkQueue Q`。否则修改不会回传。

6. **内存泄漏或重复释放**  
   出队时 `free(p)` 是必须的，但 `free` 后不能再通过 `p` 访问结点。初始化时 `malloc` 的头结点在程序结束前也要释放。

7. **混淆带头结点和不带头结点的写法**  
   两种写法都正确，但判空、入队、出队的细节不同。考试时最好统一用一种，推荐带头结点，并明确说明。

---

**命题规律**：

- **考点定位**：本题属于“栈和队列”章节中的基础代码题，重点考查链式队列的结构定义和基本操作，特别是 `front` 和 `rear` 指针的同步更新。
- **常见变式**：
  1. 要求用不带头结点的单链表实现队列，并写出初始化、入队、出队。
  2. 将链式队列与循环队列对比，分析各自优缺点。
  3. 用两个栈模拟队列，或用一个队列模拟栈。
  4. 在链式队列基础上实现双端队列（两端均可插入删除）。
  5. 结合“约瑟夫环”或“层次遍历”考查队列的实际应用。
- **复习建议**：  
  首先要掌握队列的“先进先出”逻辑，然后动手画出单链表结点连接图，逐步推演指针变化。写代码时重点验证三种状态：空队列、只有一个元素的队列、一般队列。建议将带头结点与不带头结点两种写法都写一遍，理解它们的差异。平时多练习类似的“定义结构体 + 基本操作”题，考试时才能快速准确地完成。

---

**知识点**：

链式队列、单链表、入队出队操作、判空。

---

> 来源：王道算法应用题打卡表做题本 · 考点 3.2 · 队列的定义和基本操作实现
