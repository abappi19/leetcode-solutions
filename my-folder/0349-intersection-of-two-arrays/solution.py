class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        set = [None] * 1001

        for i in nums1:
            set[i] = 1;
        
        count = 0
        for i in nums2:
            if set[i] == 1:
                set[i] = 2
                count = count + 1
        
        res = []
        m = nums1 if len(nums1) <= len(nums2) else nums2

        for i in m:
            if set[i] == 2:
                set[i] = 1
                res.append(i)
        
        return res
