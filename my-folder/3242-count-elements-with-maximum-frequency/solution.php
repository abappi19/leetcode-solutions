class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxFrequencyElements($nums) {
        
    $freq = [];

    foreach($nums as $num){
        $freq[$num] = ($freq[$num] ?? 0) + 1;
    }

    $mf = 0;
    $cmf = 0;

    foreach($freq as $key=>$f){

        if($f>$mf){
            $cmf = 1;
            $mf = $f;
        }
        else if($f==$mf){
            ++$cmf;
        }

    }

    return $mf * $cmf;
    
        
    }
}
