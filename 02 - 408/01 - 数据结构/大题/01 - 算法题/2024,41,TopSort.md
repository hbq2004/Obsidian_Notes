---
mtime: 2026-07-25 03:06:58
ctime: 2026-07-24 21:12:52
tags:
  - DS
  - 拓扑排序
  - 代码题
points:
level:
---


![[Pasted image 20260724222456.png|题目]]



> [!note]
> 1. 顺序表、**邻接矩阵**、循环队列下标默认从 $0$ 开始





```cpp
int uniquely(MGraph G)
{
    int indegree[MAXV] = {0};
    int n = G.numVertices;
    int i, j, k;

    /* 根据邻接矩阵计算各顶点的入度 */
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            if (G.Edge[i][j] != 0)
                indegree[j]++;
        }
    }

    /* 依次确定拓扑序列中的每一个顶点 */
    for (k = 0; k < n; k++)
    {
        int count = 0;
        int v = -1;

        /* 统计当前尚未删除的零入度顶点 */
        for (i = 0; i < n; i++)
        {
            if (indegree[i] == 0)
            {
                count++;
                v = i;
            }
        }

        /*
         * count == 0：图中存在环，不存在拓扑序列；
         * count > 1 ：当前有多个顶点可选，拓扑序列不唯一。
         */
        if (count != 1)
            return 0;

        /* 删除唯一的零入度顶点 */
        indegree[v] = -1;

        /* 删除顶点 v 的所有出边 */
        for (j = 0; j < n; j++)
        {
            if (G.Edge[v][j] != 0)
                indegree[j]--;
        }
    }

    return 1;
}
```

