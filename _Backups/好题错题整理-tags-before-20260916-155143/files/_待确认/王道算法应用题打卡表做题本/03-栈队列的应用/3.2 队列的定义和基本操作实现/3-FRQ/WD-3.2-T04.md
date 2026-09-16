---
ctime: 2026-08-20 16:49:50
mtime: 2026-08-21 00:28:44
tags:
  - DS
  - 王道算法应用题打卡表做题本/栈队列的应用/队列的定义和基本操作实现
  - 综合题
  - 循环队列
  - 入队操作
  - 出队操作
  - 队空队满判断
  - 取模运算
points:
level:
---

# FRQ 第 2.2.4 题

![[_Attachments/题目识别/王道算法应用题打卡表做题本-题目/WD-3.2-T04_题目.png|题目]]

任务 4：(中优先级)2.2.4 写代码：基于上述定义，实现“出队、入队、判空、判满”四个基本操作.

---

## 答案

![[_Attachments/题目识别/王道算法应用题打卡表做题本-答案/WD-3.2-T04_答案.png|答案]]

## DeepSeek V4 Flash Max 解析

**答案**：采用循环顺序队列，按王道常用定义：`front` 指向队头元素，`rear` 指向队尾元素的下一个位置，初始 `front=rear=0`。牺牲一个存储单元来区分队空与队满，因此队列最多容纳 `MaxSize-1` 个元素。

```c
#include <stdbool.h>

#define MaxSize 50
typedef int ElemType;   // 按题目要求替换

typedef struct {
    ElemType data[MaxSize];
    int front, rear;    // front 指向队头元素，rear 指向队尾元素的下一个位置
} SqQueue;

void InitQueue(SqQueue *Q) {
    Q->front = Q->rear = 0;
}

bool isEmpty(SqQueue Q) {
    return Q.front == Q.rear;
}

bool isFull(SqQueue Q) {
    return (Q.rear + 1) % MaxSize == Q.front;
}

bool EnQueue(SqQueue *Q, ElemType x) {
    if (isFull(*Q)) {
        return false;           // 队满，入队失败
    }
    Q->data[Q->rear] = x;       // 先写入 rear 指向的位置
    Q->rear = (Q->rear + 1) % MaxSize; // 循环后移
    return true;
}

bool DeQueue(SqQueue *Q, ElemType *x) {
    if (isEmpty(*Q)) {
        return false;           // 队空，出队失败
    }
    *x = Q->data[Q->front];     // 取出队头元素
    Q->front = (Q->front + 1) % MaxSize; // 循环后移
    return true;
}
```

**解题切入点**：先识别这题考的是“顺序存储的循环队列”。顺序队列在出队后容易产生“假溢出”，所以必须用取模运算把数组看成环形结构。可以类比环形跑道：`front` 和 `rear` 是两个指针，入队是 `rear` 向前走一格后放数据，出队是 `front` 向前走一格后取数据。核心难点在于区分“队空”和“队满”：如果全部装满，`front == rear`，和队空无法区分，因此牺牲一个存储单元，令队满条件为：

$$
(rear+1)\bmod MaxSize = front
$$

**推演**：设数组长度为 $M=MaxSize$。由于 `rear` 指向队尾元素的下一个位置，队列元素存放在循环区间 $[front, rear)$ 内，所以当前队列长度为：

$$
len = (rear - front + M) \bmod M
$$

队空时 $len=0$，即：

$$
front = rear
$$

若允许队列装满 $M$ 个元素，则 $front=rear$ 会再次成立，无法与队空区分。因此本方案最多存放 $M-1$ 个元素。队满时 $len=M-1$，等价于：

$$
(rear + 1) \bmod M = front
$$

所以四个操作的逻辑为：

- 入队：先判满；不队满则写入 `data[rear]`，再令 `rear` 循环后移；
- 出队：先判空；不队空则取出 `data[front]`，再令 `front` 循环后移；
- 判空：`front == rear`；
- 判满：`(rear + 1) % MaxSize == front`。

**易错点**：

1. 入队时先移动 `rear` 再写数据，容易造成首元素位置错误；应采用“先写，再移动”。
2. 忘记取模：`rear++` 会导致数组越界，必须写 `rear = (rear + 1) % MaxSize`。
3. 把 `front == rear` 误判为队满；它实际是队空条件。
4. 判满公式写成 `rear + 1 % MaxSize == front` 是错的，因为运算符优先级问题，应写 `(rear + 1) % MaxSize == front`。
5. C 语言中若用指针传参，不要忘了用 `Q->front`、`Q->rear` 修改原队列；若直接用值传递，外部队列不会被更新。

**命题规律**：该考点属于“栈和队列”中的基础必考内容。常见变式有：给定 `front`、`rear` 和 `MaxSize` 求队列长度；判断循环队列空/满；设计不牺牲存储空间的循环队列（可增加 `size` 或 `tag` 成员）；以及直接要求写出入队、出队操作。复习时应重点掌握取模运算、队空队满条件，以及三种区分队空队满的方法。

**知识点**：循环队列、入队与出队、队空与队满判断、取模运算

---

> 来源：王道算法应用题打卡表做题本 · 考点 3.2 · 队列的定义和基本操作实现
