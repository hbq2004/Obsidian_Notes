---
ctime: 2026-08-20 16:49:50
mtime: 2026-08-21 00:28:44
tags:
  - DS
  - 王道算法应用题打卡表做题本/图的应用/图的数据结构定义
  - 综合题
  - 邻接表
  - 图的存储
  - 链式存储
  - 结构体定义
points:
level:
---

# FRQ 第 4.2.2 题

![[_Attachments/题目识别/王道算法应用题打卡表做题本-题目/WD-5.2-T02_题目.png|题目]]

任务 2：(高优先级) 4.2.2 写代码：定义一个链式存储的图(邻接表实现)

---

## 答案

![[_Attachments/题目识别/王道算法应用题打卡表做题本-答案/WD-5.2-T02_答案.png|答案]]

## DeepSeek V4 Flash Max 解析

**答案**：

邻接表是“顶点表顺序存储 + 边表链式存储”的图存储结构。核心定义如下：

```c
#include <stdlib.h>          // 若建边时用到 malloc

#define MaxVertexNum 100     // 最大顶点数

typedef char VertexType;     // 顶点数据类型，可改为 int 等
typedef int InfoType;        // 边上附加信息类型，如权值

// 边表结点
typedef struct ArcNode {
    int adjvex;              // 该边指向的顶点在 vertices[] 中的下标
    InfoType info;           // 边的权值/附加信息，不加权可删除
    struct ArcNode *nextarc; // 指向下一条边
} ArcNode;

// 顶点表结点
typedef struct VNode {
    VertexType data;         // 顶点数据
    ArcNode *firstarc;       // 指向该顶点的第一条边
} VNode, AdjList[MaxVertexNum];

// 图的邻接表类型
typedef struct {
    AdjList vertices;        // 顶点表，等价于 VNode vertices[MaxVertexNum]
    int vexnum, arcnum;      // 当前顶点数、边/弧数
} ALGraph;
```

使用时直接声明 `ALGraph G;` 即可。

**解题切入点**：

拿到“定义邻接表”的题目，先不要急着写遍历或算法。要抓住邻接表的本质：**顶点用数组顺序存，边用单链表链式存**。可以把顶点表想象成“通讯录”，每个顶点后面挂一条“朋友链表”，链表中的每个结点就是一条边。抓住“顶点数组 + 边链表”这个模型，结构体就能写对。

**推演**：

设图有 $n$ 个顶点、$e$ 条边。

1. 顶点需要随机访问，所以用一维数组 `vertices[]` 保存顶点信息。
2. 每个顶点的邻接点数量不确定，适合用单链表保存，因此顶点结构 `VNode` 中要有 `firstarc` 指针。
3. 每条边至少要记录“邻接顶点是谁”，所以边结点 `ArcNode` 中用 `adjvex` 存邻接点在顶点数组中的下标。
4. 边结点之间用 `nextarc` 串联，形成链表。
5. 最后用 `ALGraph` 封装整个图：顶点表 + 顶点数 + 边数。

因此得到邻接表的整体模型：

$$
\text{ALGraph} = \text{顶点表（顺序存储）} + \text{边表（单链表）}
$$

其空间复杂度为：

$$
O(n+e)
$$

对有向图，弧 $<v_i,v_j>$ 只挂在起点 $v_i$ 的链表中；对无向图，边 $(v_i,v_j)$ 会同时挂在 $v_i$ 和 $v_j$ 两个顶点的链表中。

以头插法插入边结点时，核心操作如下：

```c
// 在顶点 from 的链表中插入一个边结点，不修改 arcnum
void InsertArcNode(ALGraph *G, int from, int to) {
    ArcNode *p = (ArcNode *)malloc(sizeof(ArcNode));
    p->adjvex = to;
    p->nextarc = G->vertices[from].firstarc;
    G->vertices[from].firstarc = p;
}

// 有向图加一条弧
void AddArc(ALGraph *G, int from, int to) {
    InsertArcNode(G, from, to);
    G->arcnum++;
}

// 无向图加一条边：要插入两个方向的边结点，但 arcnum 只加 1
void AddEdge(ALGraph *G, int u, int v) {
    InsertArcNode(G, u, v);
    InsertArcNode(G, v, u);
    G->arcnum++;
}
```

注意：建图前需要把所有 `vertices[i].firstarc` 初始化为 `NULL`。

**易错点**：

- `adjvex` 存的是顶点在数组中的下标，不是顶点数据本身。
- 建图前不把 `firstarc` 置 `NULL`，遍历时会访问野指针。
- 头插法顺序写反：应先把 `p->nextarc` 指向当前 `firstarc`，再更新 `firstarc`；否则链表会断。
- 无向图插入一条边时，要生成两个边结点，但 `arcnum` 只能加 1；不能直接调用有向图的 `AddArc` 两次。
- 混淆“边结点总数”和“边数”：无向图 $e$ 条边会产生 $2e$ 个边结点，但 `arcnum` 仍记录为 $e$。

**命题规律**：

这是图的存储结构中的高频考点。邻接表常与邻接矩阵对比考查，例如空间复杂度、适合稀疏图还是稠密图、求顶点的度等。常见变式有：给出图写邻接表、根据邻接表判断有向/无向图、带权图结构定义、逆邻接表，以及基于邻接表实现 DFS、BFS、拓扑排序、Dijkstra 等算法。复习时应先默写结构体定义，再结合遍历算法理解邻接表的优势。

**知识点**：

邻接表、图的存储、链式存储、结构体定义

---

> 来源：王道算法应用题打卡表做题本 · 考点 5.2 · 图的数据结构定义
