---
ctime: 2026-08-20 16:49:50
mtime: 2026-08-21 00:28:44
tags:
  - DS
  - 王道算法应用题打卡表做题本/栈队列的应用/队列的定义和基本操作实现
  - 综合题
  - 循环队列
  - 顺序存储
  - 队列基本操作
  - 模运算
points:
level:
---

# FRQ 第 2.2.1 题

![[_Attachments/题目识别/王道算法应用题打卡表做题本-题目/WD-3.2-T01_题目.png|题目]]

任务1：(中优先级) 2.2.1 写代码：定义顺序存储的队列(数组实现)，要求数组空间可以被循环利用.

---

## 答案

![[_Attachments/题目识别/王道算法应用题打卡表做题本-答案/WD-3.2-T01_答案.png|答案]]

## DeepSeek V4 Flash Max 解析

**答案**：循环队列的C语言实现如下（采用牺牲一个存储单元的方法区分队空队满）：
```c
#define MAXSIZE 100  // 定义队列最大容量

typedef struct {
    int data[MAXSIZE];
    int front;  // 队头指针，指向队头元素
    int rear;   // 队尾指针，指向队尾元素的下一个位置
} CircularQueue;

// 初始化队列
void InitQueue(CircularQueue *Q) {
    Q->front = 0;
    Q->rear = 0;
}

// 判断队列是否为空
int IsEmpty(CircularQueue *Q) {
    return Q->front == Q->rear;
}

// 判断队列是否为满
int IsFull(CircularQueue *Q) {
    return (Q->rear + 1) % MAXSIZE == Q->front;
}

// 入队操作
int EnQueue(CircularQueue *Q, int x) {
    if (IsFull(Q)) {
        return 0;  // 队列满，入队失败
    }
    Q->data[Q->rear] = x;
    Q->rear = (Q->rear + 1) % MAXSIZE;
    return 1;
}

// 出队操作
int DeQueue(CircularQueue *Q, int *x) {
    if (IsEmpty(Q)) {
        return 0;  // 队列空，出队失败
    }
    *x = Q->data[Q->front];
    Q->front = (Q->front + 1) % MAXSIZE;
    return 1;
}

// 获取队头元素
int GetFront(CircularQueue *Q, int *x) {
    if (IsEmpty(Q)) {
        return 0;
    }
    *x = Q->data[Q->front];
    return 1;
}

// 获取队列长度（实际元素个数）
int QueueLength(CircularQueue *Q) {
    return (Q->rear - Q->front + MAXSIZE) % MAXSIZE;
}
```
**解题切入点**：拿到题目，首先要明确“数组空间可以被循环利用”意味着需要使用循环队列。循环队列的核心问题是如何在循环使用数组空间时区分队空和队满。常见的解决方案有三种：牺牲一个存储单元、设置计数变量size、设置标志位tag。本题无特殊要求，一般采用牺牲一个单元的方法，即规定队尾指针rear指向队尾元素的下一个位置，队满时 $(rear+1) \bmod MAXSIZE = front$，队空时 $rear = front$。这样，队列实际可用的最大容量为 $MAXSIZE-1$。解题时，先定义结构体，再逐个实现基本操作，注意模运算的运用。
**推演**：
1. **结构体定义**：使用一个数组data存储元素，两个整型指针front和rear。front指向队头元素，rear指向队尾元素的下一个位置。初始时，front=rear=0，队列为空。
2. **入队操作**：在数组data[rear]处放入新元素，然后rear后移一位。由于是循环队列，后移时需对MAXSIZE取模，即 $rear = (rear+1) \bmod MAXSIZE$。入队前需检查队列是否已满，而队满条件为 $(rear+1) \bmod MAXSIZE = front$。这是因为牺牲了一个存储单元，当rear再前进一位就会追上front时，认为队列满。
3. **出队操作**：取出data[front]的值，然后front后移一位，同样取模，即 $front = (front+1) \bmod MAXSIZE$。出队前需检查队列是否为空，即 $front = rear$。
4. **队列长度计算**：由于队列是循环的，长度公式为 $(rear - front + MAXSIZE) \bmod MAXSIZE$。该公式考虑了rear小于front的情况。
5. **时间复杂度**：所有基本操作的时间复杂度均为 $O(1)$，因为只涉及简单的赋值、比较和移动指针，没有循环。
**易错点**：
- 入队时忘记取模：若rear一直增加，会超出数组范围，导致数组越界。
- 出队时忘记取模：同样会导致front越界。
- 队满条件混淆：有些同学可能误用 $rear = front$ 作为队满，但 $rear = front$ 是队空条件，无法区分。采用牺牲一个单元时，队满条件应为 $(rear+1) \bmod MAXSIZE = front$。
- 初始化时，front和rear一般设为0，但要注意如果定义指针，需要分配空间。
- 获取队头元素时，应返回队头元素，但需先判空，否则可能返回无效数据。
- 队列最大容量为MAXSIZE，但实际最多存储MAXSIZE-1个元素，若需要存储MAXSIZE个元素，则需使用其他方法（如设置size计数）。
**命题规律**：循环队列是数据结构中队列的常见考查形式，在408中曾多次出现。考查方式包括：选择题中判断队空队满条件、计算队列长度、出队入队后指针变化；应用题中要求实现循环队列的基本操作（如本题），或结合其他算法（如层次遍历）使用队列。变式可能包括：设置size变量或tag标志位来区分队空队满，此时队列最大容量可达到MAXSIZE；或者使用静态数组但改变指针移动方式。复习建议：熟练掌握循环队列的上述实现，并理解不同判空判满条件的优缺点，能够灵活运用模运算解决循环问题。
**知识点**：队列、循环队列、顺序存储、模运算

---

> 来源：王道算法应用题打卡表做题本 · 考点 3.2 · 队列的定义和基本操作实现
