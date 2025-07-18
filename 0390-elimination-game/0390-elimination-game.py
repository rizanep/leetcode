class Solution:
    def lastRemaining(self, n: int) -> int:
        res=range(1,n+1)
        while len(res)!=1:
            res=res[1::2]
            res=res[::-1]
        return res[0]