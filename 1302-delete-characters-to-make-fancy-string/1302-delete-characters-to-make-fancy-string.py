class Solution:
    def makeFancyString(self, s: str) -> str:
        res=[]
        if len(s)<=2:
            return s
        res.append(s[0])
        res.append(s[1])

        for i in range(2,len(s)):
            if s[i]==res[-1] and s[i]==res[-2]:
                continue
            else:
                res.append(s[i])

        
        return "".join(res)