---
ctime: 2026-08-20 16:49:50
mtime: 2026-08-20 16:49:50
tags:
  - DS
  - 王道算法应用题打卡表做题本/真题训练
points:
level:
---

# FRQ 第 ZT-13 题

![[_Attachments/题目识别/王道算法应用题打卡表做题本-题目/WD-ZT-T13_题目.png|题目]]

任务 13: (必做) 2021 应用题: 42 题 王道书 8.5.4_大题_3 (页码 369)
【2021统考真题】已知某排序算法如下：
```c
void cmpCountSort(int a[], int b[], int n){
    int i, j, *count;
    count=(int *)malloc(sizeof(int)*n);//C++语言: count=new int[n];
    for(i=0;i<n;i++)    count[i]=0;
    for(i=0;i<n-1;i++)
        for(j=i+1;j<n;j++)
            if(a[i]<a[j])    count[j]++;
            else              count[i]++;
    for(i=0;i<n;i++)    b[count[i]]= a[i];
    free(count);        //C++语言: delete count;
}
```
请回答下列问题.
1) 若有 `int a[]={25, -10, 25, 10, 11, 19}, b[6];`，则调用 `cmpCountSort(a,b,6)` 后数组 b 中的内容是什么?
2) 若 a 中含有 n 个元素，则算法执行过程中，元素之间的比较次数是多少?
3) 该算法是稳定的吗？若是，阐述理由；否则，修改为稳定排序算法.

---

## 答案

![[_Attachments/题目识别/王道算法应用题打卡表做题本-答案/WD-ZT-T13_答案.png|答案]]

---

> 来源：王道算法应用题打卡表做题本 · 真题训练
