class Solution {
    fun maxFrequencyElements(nums: IntArray): Int {
        var freq  = HashMap<Int, Int>()

        var mf = 0
        var cmf = 0

        for(n in nums){
            freq.put(n, freq.getOrElse(n){0} +1)
        }

        for(f in freq.values){
            if(f>mf){
                mf = f
                cmf = 1
            }else if(f == mf){
                ++cmf
            }
        }


        return mf*cmf
        
    }
}
