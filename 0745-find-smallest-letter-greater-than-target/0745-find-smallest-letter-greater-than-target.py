class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        letters.append(target)
        letters.sort()
        a= len(letters) - 1 - letters[::-1].index(target)
        if a==len(letters)-1:
            return letters[0]
        return letters[a+1]