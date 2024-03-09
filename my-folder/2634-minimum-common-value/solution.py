class Solution(object):
    def getCommon(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: int
        """

        if(nums1[len(nums1)-1] < nums2[0] or nums2[len(nums2)-1] < nums1[0]):
            return -1
        i=0
        j=0
        while i<len(nums1) and j<len(nums2):
            if nums1[i] == nums2[j]:
                return nums1[i]
            elif nums1[i]<nums2[j]:
                i = i+1
            else:
                j = j+1 

        return -1
        
