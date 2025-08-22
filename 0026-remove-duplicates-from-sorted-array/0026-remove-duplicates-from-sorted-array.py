class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0
        a=1
        for b in range(1,len(nums)):
            if nums[b]!=nums[a-1]:
                nums[a]=nums[b]
                a+=1
        return a    
    