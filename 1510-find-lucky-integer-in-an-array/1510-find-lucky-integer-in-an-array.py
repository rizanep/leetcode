class Solution:
    def findLucky(self, arr: List[int]) -> int:
        x=len(arr)
        res=[-1]
        for i in range(x):
            if arr.count(arr[i])== arr[i]:
                res.append(arr[i])
        res.sort()
        return res[-1]