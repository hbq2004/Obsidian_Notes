---
ctime: 2026-08-20 16:49:50
mtime: 2026-08-20 17:47:32
tags:
  - DS
  - 王道算法应用题打卡表做题本/真题训练
  - 综合题
  - 链式存储
  - 空闲结点链表
  - 队空队满条件
  - 入队出队操作
  - 时间复杂度
points:
level:
---

# FRQ 第 ZT-11 题

![[_Attachments/题目识别/王道算法应用题打卡表做题本-题目/WD-ZT-T11_题目.png|题目]]

任务 11：(必做) 2019 应用题： 42 题 王道书 3.2.5_大题_4 (页码 84)
【2019 统考真题】请设计一个队列，要求满足：① 初始时队列为空；② 入队时，允许增加队列占用空间；③ 出队后，出队元素所占用的空间可重复使用，即整个队列所占用的空间只增不减；④ 入队操作和出队操作的时间复杂度始终保持为 $O(1)$。请回答：
1) 该队列是应选择链式存储结构，还是应选择顺序存储结构？
2) 画出队列的初始状态，并给出判断队空和队满的条件。
3) 画出第一个元素入队后的队列状态。
4) 给出入队操作和出队操作的基本过程.

---

## 答案

![[_Attachments/题目识别/王道算法应用题打卡表做题本-答案/WD-ZT-T11_答案.png|答案]]

## DeepSeek V4 Flash Max 解析

**答案**：应选择链式存储结构。采用“不带头结点的单链表队列 + 空闲结点链表”实现。  
队空条件：`front == NULL`。  
队满条件：链式队列没有固定队满；只有内存不足、申请新结点失败时才无法入队，可视为队满。  
初始状态：`front = NULL`，`rear = NULL`，`avail = NULL`。  
第一个元素入队后：`front = rear = p`，且 `p->next = NULL`，`avail = NULL`。

**解题切入点**：先抓条件④“入队、出队始终保持 $O(1)$”。顺序存储一旦扩容，就要复制已有元素，单次操作最坏为 $O(n)$，所以应优先排除顺序存储。条件③“空间只增不减”提示出队结点不能直接 `free`，而应放入“空闲结点链表”中复用，类似内存池/对象池思想。

**推演**：

1）存储结构选择：

顺序存储若容量固定，则无法满足②“入队时允许增加队列占用空间”；若采用动态扩容的顺序表，则扩容时需要复制旧数组中全部元素，单次入队最坏为 $O(n)$，不满足④。链式存储中，入队、出队只修改指针，不搬移元素，因此应选链式存储结构。

2）队列设计：

用 `front` 指向队首结点，`rear` 指向队尾结点，并用 `avail` 指向空闲结点链表，专门存放出队结点以便复用。

```text
初始状态：
front -> NULL
rear  -> NULL
avail -> NULL
```

队空条件：`front == NULL`。  
队满条件：逻辑上不存在固定队满；只有 `avail == NULL` 且申请新结点失败时才无法入队。

3）空间只增不减的证明：

记 $L$ 为当前队内结点数，$F$ 为空闲链表中结点数，则队列结构已分配结点总数 $N = L + F$。

- 入队时，若 $F > 0$，则从空闲链取一个结点，$F \leftarrow F - 1$，$L \leftarrow L + 1$，$N$ 不变；
- 入队时，若 $F = 0$，则新建一个结点，$L \leftarrow L + 1$，$N \leftarrow N + 1$；
- 出队时，$L \leftarrow L - 1$，$F \leftarrow F + 1$，$N$ 不变。

因此 $N$ 只增不减，满足“整个队列所占用的空间只增不减”。

第一个元素入队后：

```text
front = rear = p = [ x | NULL ]
avail = NULL
```

4）入队操作基本过程：

1. 若 `avail` 非空，则从 `avail` 中取一个空闲结点；
2. 否则新建一个结点；
3. 给结点赋值 `x`，令其 `next = NULL`；
4. 若队列为空，则 `front = rear = p`；
5. 否则 `rear->next = p`，`rear = p`。

出队操作基本过程：

1. 若 `front == NULL`，队空，出队失败；
2. 令 `p = front`，取出 `p->data`；
3. `front = front->next`；
4. 若 `front == NULL`，说明原队列只有一个元素，令 `rear = NULL`；
5. 将 `p` 插入空闲链表 `avail` 头部，不释放空间，以便复用。

C 语言风格代码如下：

```c
#include <stdbool.h>
#include <stdlib.h>

// ElemType 为元素类型，例如 int
typedef struct LNode {
    ElemType data;
    struct LNode *next;
} LNode;

typedef struct {
    LNode *front, *rear; // 队首、队尾
    LNode *avail;        // 空闲结点链表
} Queue;

void InitQueue(Queue *Q) {
    Q->front = Q->rear = NULL;
    Q->avail = NULL;
}

bool QueueEmpty(Queue *Q) {
    return Q->front == NULL;
}

bool EnQueue(Queue *Q, ElemType x) {
    LNode *p = Q->avail;

    if (p != NULL) {          // 优先复用出队结点
        Q->avail = p->next;
    } else {                  // 没有空闲结点时才新建
        p = (LNode *)malloc(sizeof(LNode));
        if (p == NULL)        // 队满/内存不足
            return false;
    }

    p->data = x;
    p->next = NULL;

    if (Q->front == NULL) {   // 原队列为空
        Q->front = Q->rear = p;
    } else {
        Q->rear->next = p;
        Q->rear = p;
    }
    return true;
}

bool DeQueue(Queue *Q, ElemType *x) {
    if (Q->front == NULL)     // 队空
        return false;

    LNode *p = Q->front;
    *x = p->data;
    Q->front = p->next;

    if (Q->front == NULL)     // 删除的是最后一个元素
        Q->rear = NULL;

    // 出队结点不释放，放入空闲链表，供后续入队复用
    p->next = Q->avail;
    Q->avail = p;

    return true;
}
```

入队和出队都只进行常数次指针修改，因此时间复杂度始终为 $O(1)$。

**易错点**：

1. 误选顺序存储。动态扩容需要复制元素，单次入队不是 $O(1)$。
2. 不带头结点时用 `front == rear` 判空。队列只有一个元素时 `front == rear`，但队列非空；应使用 `front == NULL`。
3. 出队后直接 `free(p)`。这样会使队列占用空间减少，不满足“空间只增不减”。应把 `p` 放入空闲链表。
4. 最后一个元素出队后忘记将 `rear` 置为 `NULL`，导致尾指针悬空。
5. 把 `avail == NULL` 当成队满。`avail == NULL` 只表示没有可复用的空闲结点，此时仍可申请新结点；只有申请失败才算队满。

**命题规律**：该题考查队列的存储结构选择、队空与队满判断、链式队列指针修改和空间复用思想。常见变式包括：循环队列的判空/判满、带头结点与不带头结点的链式队列、双端队列、用两个栈模拟队列、动态扩容的均摊时间复杂度分析。复习时应重点掌握 `front`、`rear` 的初始状态和修改边界，理解对象池/空闲链表这一空间复用技巧。

**知识点**：队列、链式存储、空闲结点链表、时间复杂度

---

> 来源：王道算法应用题打卡表做题本 · 真题训练
