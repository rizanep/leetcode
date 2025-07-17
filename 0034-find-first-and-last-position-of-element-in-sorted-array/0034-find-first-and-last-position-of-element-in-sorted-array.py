class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        res=[0]
        nums.sort()
        if nums.count(target)==0:
            return [-1,-1]
        if nums.count(target)==1:
            return [nums.index(target), nums.index(target)]
        return [nums.index(target),len(nums) - 1 - nums[::-1].index(target)]