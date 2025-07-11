class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k=nums.count(val)
        for i in range(k):
            nums.remove(val)
            nums.append(("_"))
        return len([x for x in nums if x != "_"])
    
