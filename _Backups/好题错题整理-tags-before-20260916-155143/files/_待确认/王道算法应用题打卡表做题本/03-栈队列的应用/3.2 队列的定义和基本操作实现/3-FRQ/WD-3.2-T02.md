---
ctime: 2026-08-20 16:49:50
mtime: 2026-08-21 00:28:44
tags:
  - DS
  - 王道算法应用题打卡表做题本/栈队列的应用/队列的定义和基本操作实现
  - 综合题
  - 循环队列
  - 顺序存储
  - 判空判满
  - 入队操作
  - 出队操作
  - 取模运算
points:
level:
---

# FRQ 第 2.2.2 题

![[_Attachments/题目识别/王道算法应用题打卡表做题本-题目/WD-3.2-T02_题目.png|题目]]

任务 2：(中优先级) 2.2.2 写代码：基于上述定义，实现“出队、入队、判空、判满”四个基本操作.

---

## 答案

![[_Attachments/题目识别/王道算法应用题打卡表做题本-答案/WD-3.2-T02_答案.png|答案]]

## DeepSeek V4 Flash Max 解析

**答案**：题目中的“上述定义”未在题面中复现，本题按 408/王道最常用的**顺序存储循环队列（牺牲一个存储单元）**定义给出实现。约定：`front` 指向队头元素，`rear` 指向队尾元素的下一个位置，初始时 `front = rear = 0`。四个基本操作如下：

```c
#include <stdbool.h>               // C 语言中使用 bool 类型
#define MaxSize 10                 // 队列最多能存 MaxSize-1 个元素
typedef int ElemType;              // 元素类型，可按需修改

typedef struct {
    ElemType data[MaxSize];
    int front, rear;               // front 指向队头元素，rear 指向队尾元素的下一个位置
} SqQueue;

// 判空
bool QueueEmpty(SqQueue *Q) {
    return Q->front == Q->rear;
}

// 判满
bool QueueFull(SqQueue *Q) {
    return (Q->rear + 1) % MaxSize == Q->front;
}

// 入队
bool EnQueue(SqQueue *Q, ElemType x) {
    if (QueueFull(Q))
        return false;                     // 队满，入队失败
    Q->data[Q->rear] = x;                 // 先放入元素
    Q->rear = (Q->rear + 1) % MaxSize;    // rear 循环后移
    return true;
}

// 出队
bool DeQueue(SqQueue *Q, ElemType *x) {
    if (QueueEmpty(Q))
        return false;                     // 队空，出队失败
    *x = Q->data[Q->front];               // 取出队头元素
    Q->front = (Q->front + 1) % MaxSize;  // front 循环后移
    return true;
}
```

核心结论：**判空**条件为 $front = rear$；**判满**条件为 $(rear+1) \bmod MaxSize = front$；入队、出队都要用 $\bmod MaxSize$ 实现环形移动。

---

**解题切入点**：看到“入队、出队、判空、判满”四个操作，立刻定位到**队列的基本操作**。看到“判满”就要警觉，因为链队列一般不用判满，只有顺序存储的循环队列才需要。做题时先抓住两点：一是看题目定义里 `front`、`rear` 的指向含义；二是想清楚怎么区分“空”和“满”。可以打个比方：循环队列就像一个环形跑道，`front` 是队首观众，`rear` 是新观众入场的闸机口；闸机口再往前走一步就撞上观众时，场地就满了。理解了“环形 + 追及”的模型，代码就不容易写错。

---

**推演**：

1. 用一维数组 `data[0..MaxSize-1]` 存储元素，`front` 指向队头元素，`rear` 指向队尾元素的下一个位置。初始队空：
   $$
   front = rear = 0
   $$

2. 入队操作：把元素放入 `rear` 指向的位置，然后 `rear` 循环后移：
   $$
   data[rear] = x,\qquad rear = (rear + 1) \bmod MaxSize
   $$

3. 出队操作：取出 `front` 指向的元素，然后 `front` 循环后移：
   $$
   x = data[front],\qquad front = (front + 1) \bmod MaxSize
   $$

4. 判空：队列中没有任何元素时，两个指针相遇：
   $$
   front = rear
   $$

5. 判满：如果用 $front = rear$ 判满，则满队和空队无法区分。因此**牺牲一个存储单元**，规定队列最多只能存 $MaxSize-1$ 个元素。此时队满的条件是“`rear` 再走一步就追上 `front`”：
   $$
   (rear + 1) \bmod MaxSize = front
   $$

6. 用队列长度公式验证：队列中元素个数为
   $$
   len = (rear - front + MaxSize) \bmod MaxSize
   $$
   队空时 $len = 0$，即 $front = rear$；队满时 $len = MaxSize - 1$，等价于 $(rear+1) \bmod MaxSize = front$。

7. 因此“先判断、再操作、指针取模”就是四个操作的完整逻辑。

---

**易错点**：

1. **忘记取模**：`rear++` 到 `MaxSize-1` 后会越界，必须写成 `(rear + 1) % MaxSize`。
2. **取模表达式加括号**：`(Q->rear + 1) % MaxSize` 的括号不能省；写成 `Q->rear + 1 % MaxSize` 会按运算符优先级先算 `1 % MaxSize`，在边界处出错。
3. **判空判满混淆**：判空是 `front == rear`，判满是 `(rear+1)%MaxSize == front`，不要把二者都写成相等判断。
4. **不判断就操作**：入队前必须判满，出队前必须判空，否则造成数组越界或读到错误数据。
5. **容量理解错误**：牺牲一个存储单元后，队列的实际容量是 $MaxSize-1$，不是 $MaxSize$。如果题目要求存满 $MaxSize$ 个元素，需要改用带 `size` 或 `tag` 字段的定义。
6. **C 语言形参问题**：出队要带回元素，必须用 `ElemType *x` 指针传参；严格 C 中不能写 `SqQueue &Q` 这种 C++ 引用，应使用 `SqQueue *Q`。若使用 `bool`，要包含 `<stdbool.h>`。
7. **指针语义不一致**：有的教材定义 `front` 指向队头元素的前一个位置，此时判空判满公式仍是 $front=rear$ 和 $(rear+1)\bmod MaxSize=front$，但取队头元素要先让 `front` 后移一步。务必先确认题目中的指针指向。

---

**命题规律**：

- **考点定位**：循环队列的顺序存储及入队、出队、判空、判满操作，是 408 中“栈和队列”部分的重点，也是后续 BFS、层次遍历等算法的基础工具。
- **常见变式**：
  1. 给定 `front`、`rear` 和 `MaxSize`，求队中元素个数，公式为 $len = (rear - front + MaxSize) \bmod MaxSize$；
  2. 三种区分空/满的方案对比：牺牲一个存储单元、设置 `size` 计数、设置 `tag` 标志；
  3. 链队列（带头结点/不带头结点）的入队、出队、判空操作；
  4. 循环队列与“假溢出”现象结合的综合分析题。
- **复习建议**：把三种判空/判满写法都手写一遍，特别注意牺牲单元方案中实际容量为 $MaxSize-1$；做题时先圈出结构体有哪些字段，再决定判空判满策略；写代码时养成“先判断、后操作、指针取模”的固定思路。

---

**知识点**：循环队列、入队操作、出队操作、判空判满

---

> 来源：王道算法应用题打卡表做题本 · 考点 3.2 · 队列的定义和基本操作实现
