class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
            a=(Counter(nums1)&Counter(nums2)).elements()
            return list(a)