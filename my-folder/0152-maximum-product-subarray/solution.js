/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length===1)return nums[0];
     let prod=1;
     let mx1=0,mx2=0;
     for(let i =0; i<nums.length; i++){
         prod*=nums[i];
         mx1 = Math.max(mx1,prod);
         if(prod===0)prod= 1;
     }
     
     prod=1;
  
  for(let i =nums.length-1; i>=0; i--){
         prod*=nums[i];
         mx2 = Math.max(mx2,prod);
         if(prod===0)prod= 1;
     }
    return Math.max(mx1,mx2);
};
