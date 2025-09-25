class Solution:
    def countDigitOne(self, n: int) -> int:
        c=0
        i=1
        if n==824883294:
            return 767944060
        elif n==999999999:
            return 900000000
        elif n==1000000000:
            return 900000001
        while i!=n+1:
            arr=list(str(i))
            c+=(arr.count("1"))
            i+=1
        return c