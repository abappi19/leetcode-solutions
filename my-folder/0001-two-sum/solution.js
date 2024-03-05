/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}

    if(nums.length===2){
        if(nums[0] + nums[1] === target) return [0,1];
        return null;
    }

    for(let i=0; i<nums.length; i++){
        if(map[target-nums[i]] !== undefined){
            return [ map[target-nums[i]], i ]
        }else{
            map[nums[i]] =  i
        }
    }
};
