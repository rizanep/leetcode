class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        c = set(list1) & set(list2)
        res=[]
        a=list(c)
        for i in a:
            res.append(list1.index(i)+list2.index(i))
        min_val=min(res)
        mi = [j for j, k in enumerate(res) if k == min_val]
        res2=[]
        for x in range(0,len(mi)):
            res2.append(a[mi[x]])
        return res2

