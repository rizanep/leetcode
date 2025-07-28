class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        a=max(nums)
        k=nums.index(a)
        nums.remove(a)
        for i in nums:
            if a<(i*2):
                return -1
        return k     