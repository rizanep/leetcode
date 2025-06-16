class Solution:
    def isValid(self, word: str) -> bool:
        vowels = "aeiouAEIOU"
        cons = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
        dig = "0123456789"
        v_count=0
        c_count=0
        if len(word)>2:
            for i in word:
                if i in vowels:
                    v_count+=1
                elif i in cons:
                    c_count+=1
                elif i not in dig:
                    return False
            if v_count>0 and c_count>0:
                return True 
        return False