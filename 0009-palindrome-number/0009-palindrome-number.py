class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x<0:
            return False
        a=str(x)
        b=list(a)
        c=b[::-1]
        return a=="".join(c)
