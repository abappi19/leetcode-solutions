class Solution(object):
    def maxFrequencyElements(self, nums):
        freq = {}

        for num in nums:
            freq[num] = (freq.get(num, 0) ) + 1
        
        maxf = 0
        countMaxf = 0
        for key in freq:
            v = freq[key]
            if v>maxf:
                countMaxf = 1
                maxf = v
            elif v==maxf:
                countMaxf = countMaxf + 1
        
        return maxf* countMaxf
        
