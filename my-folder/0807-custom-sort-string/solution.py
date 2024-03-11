class Solution(object):
    def customSortString(self, order, s):
        """
        :type order: str
        :type s: str
        :rtype: str
        """
        m = {}

        r = ""

        for o in order:
            m[o] = 0
        for c in s:
            if c in m:
                m[c] = m[c] + 1
            else:
                r = r+c
        for c in order:
            for i in range(m[c]) :
                r = r+c

        return r
