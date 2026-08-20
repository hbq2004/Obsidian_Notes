---
ctime: 2026-08-20 16:49:50
mtime: 2026-08-20 17:47:32
tags:
  - DS
  - 王道算法应用题打卡表做题本/树的应用/4.4-树（森林）的定义和画图
  - 综合题
  - 孩子兄弟表示法
  - 树的存储结构
  - 森林与二叉树的转换
  - 二叉链表
  - 空指针数
points:
level:
---

# FRQ 第 3.3.4 题

![[_Attachments/题目识别/王道算法应用题打卡表做题本-题目/WD-4.4-T04_题目.png|题目]]

任务4：(必做) 3.3.4 写代码：使用“孩子兄弟表示法”，定义链式存储的树(以及森林).

---

## 答案

![[_Attachments/题目识别/王道算法应用题打卡表做题本-答案/WD-4.4-T04_答案.png|答案]]

## DeepSeek V4 Flash Max 解析

**答案**：使用“孩子兄弟表示法”（左孩子右兄弟表示法、树的二叉链表表示法）定义树和森林。每个结点有两个指针域：`firstchild` 指向第一个孩子，`nextsibling` 指向下一个兄弟；森林中每棵树的根结点也通过 `nextsibling` 依次相连。C 语言定义为：

```c
#include <stdio.h>
#include <stdlib.h>

typedef char ElemType;   // 若元素为 int，可改为 typedef int ElemType;

typedef struct CSNode {
    ElemType data;                // 数据域
    struct CSNode *firstchild;    // 第一个孩子
    struct CSNode *nextsibling;   // 下一个兄弟
} CSNode, *CSTree, *CSForest;     // CSForest 表示森林

// 初始化一个孩子兄弟链表的结点
CSTree CSNodeCreate(ElemType x) {
    CSTree p = (CSTree)malloc(sizeof(CSNode));
    p->data = x;
    p->firstchild = NULL;
    p->nextsibling = NULL;
    return p;
}
```

例如，创建一棵树：根为 A，A 有孩子 B、C，B 有孩子 D。

```c
CSTree T = CSNodeCreate('A');
T->firstchild = CSNodeCreate('B');
T->firstchild->nextsibling = CSNodeCreate('C');
T->firstchild->firstchild = CSNodeCreate('D');
```

例如，创建森林：A、B 分别是两棵树的根。

```c
CSForest F = CSNodeCreate('A');
F->nextsibling = CSNodeCreate('B');
```

空树、空森林均用 `NULL` 表示。

---

**解题切入点**：看到“孩子兄弟表示法”，先想到“左孩子右兄弟”这个核心：把多叉树/森林“拍扁”成二叉树来存储。树的每个结点可能有多个孩子，但每个结点只需要记住“第一个孩子”和“下一个兄弟”。这就像算法竞赛中先用“第一条边”作为入口，再用 `next` 指针串起同一条链上的其他元素；孩子兄弟表示法就是用 `firstchild` 找到孩子链的头，用 `nextsibling` 串起所有兄弟。

---

**推演**：

设树中结点可能有任意多个孩子。若直接在结点中保存所有孩子指针，结点大小必须按最大度设计，空间浪费大；而孩子兄弟表示法固定用两个指针：

- `firstchild`：指向该结点的第一个孩子，即长子；
- `nextsibling`：指向该结点的下一个兄弟。

因此，某结点的孩子链为：

$$p \to firstchild \to nextsibling \to nextsibling \to \cdots$$

其中第一个结点是长子，后面依次是次子、三子……

森林也可以使用同样结构：将第一棵树的根作为入口，第二棵树的根作为第一棵树根的 `nextsibling`，第三棵树的根作为第二棵树根的 `nextsibling`，以此类推。所以树和森林共用同一个结构体类型，只是根结点的 `nextsibling` 是否为空不同。

进一步，设树/森林有 $n$ 个结点，则孩子兄弟表示法中每个结点有 $2$ 个指针，总指针数为 $2n$。除第一个根结点外，其余每个结点都恰好被一个指针指向，因此非空指针数为 $n-1$，空指针数为：

$$
2n-(n-1)=n+1
$$

这与普通二叉链表有 $n$ 个结点时的空指针数一致。

---

**易错点**：

- 不要把多个孩子都直接挂到 `firstchild` 上。`firstchild` 只能指向长子，其余孩子必须通过 `nextsibling` 依次串起来。
- 不要把 `nextsibling` 当作普通二叉树的“右孩子”。存储形式相同，但语义不同：右指针表示“下一个兄弟”，不是“右孩子”。
- 表示森林时，树根之间要用 `nextsibling` 相连，不能写成 `root1->firstchild = root2`，否则第二棵树会变成第一棵树的子树。
- 使用 `malloc` 动态申请结点后，必须把 `firstchild` 和 `nextsibling` 初始化为 `NULL`，否则会变成野指针。

---

**命题规律**：该考点属于“树和森林的存储结构”。408 中常以选择题考查孩子兄弟表示法的空指针数、树/森林与二叉树的转换、遍历序列对应关系；也可能以代码题形式要求定义 `CSNode`、写出求树高或统计叶子结点的递归算法。复习时要能默写孩子兄弟链表结点定义，并能手画“树/森林 → 二叉树”的转换过程。

---

**知识点**：树的存储结构、孩子兄弟表示法、森林与二叉树的转换、二叉链表

---

> 来源：王道算法应用题打卡表做题本 · 考点 4.4 · 树（森林）的定义和画图
