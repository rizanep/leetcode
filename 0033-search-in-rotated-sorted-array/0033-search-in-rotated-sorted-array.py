class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if nums.count(target)>=1:
            return nums.index(target)
        else:
            return -1