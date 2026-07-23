---
mtime: 2026-07-23 00:20:20
ctime: 2026-07-22 21:01:04
tags:
  - "#DS"
  - "#真题/2026"
  - "#代码题"
  - "#BST"
  - "#剪枝"
points:
level: 3
---

```cpp
int minD = INT_MAX; // 最小差值
int pre = INT_MIN, suf = INT_MAX; // 小于 k 的最大节点, 大于 k 的最小节点

void searchX(BTree root, int k) {
	if (root == NULL) return;
	if (minD == 0) return;
	int val = root->data;
	minD = min(minD, abs(val - k)); // 更新最小差值
	if (k < val) { // 递归左子树
		suf = val; // 更新后缀
		searchX(root->left, k);
	} else if (k > val) { // 递归右子树
		pre = val; // 更新前缀
		searchX(root->right, k);
	} else { // val == k, 找到唯一答案
		minD = 0;
		return;
	}
}

void solve(BTree root, int k) {
	searchX(root, k);
	cout << minD << endl;
	if (minD == 0) cout << k << endl;
	else {
		if (pre + minD == k) cout << pre << endl;
		if (suf - minD == k) cout << suf << endl;
	}
}
```


