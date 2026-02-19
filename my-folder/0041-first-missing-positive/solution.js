/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {

    for(let i=0; i<nums.length; i++){
        const num = nums[i];
        if(num>0 && num<=nums.length && num !== i+1 && num !== nums[num-1]){
            const temp = nums[num-1];
            nums[num-1] = num;
            nums[i] = temp;
            i--;
        }
    }

    for(let i=0; i<nums.length; i++){
        if(nums[i] !== i+1) return i+1;
    }

    return nums.length + 1;
    
};
