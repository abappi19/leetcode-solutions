class Solution:
    def customSortString(self, order: str, s: str) -> str:
        
        m = {}

        r = []

        for o in order:
            m[o] = 0
        for c in s:
            if c in m:
                m[c] = m[c] + 1
            else:
                r.append(c)
        for c in order:
            for i in range(m[c]) :
                r.append(c)

        return ''.join(r)
