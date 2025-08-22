class Solution:
    def isPalindrome(self, s: str) -> bool:
        cl= "".join(a.lower() for a in s if a.isalnum())
        return cl==cl[::-1]