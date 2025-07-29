class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        a=s1.split()+s2.split()
        res=[]
        for i in a:
            if a.count(i)==1:
                res.append(i)

        return res