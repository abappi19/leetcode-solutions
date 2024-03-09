class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer
     */
    function getCommon($nums1, $nums2) {

        if($nums1[count($nums1)-1] < $nums2[0] || $nums2[count($nums2)-1] < $nums1[0])return -1;

        $i =0;
        $j = 0;
        while($i < count($nums1) && $j < count($nums2)){
            if($nums1[$i] == $nums2[$j]){
                 return $nums1[$i];
            }else if($nums1[$i] < $nums2[$j]){
                $i = $i+1;
            } else {
                $j = $j+1;
            }
        }

        return -1;

        
    }
}
