
class Solution {
    public int[] twoSum(int[] nums, int target) {

        Map<Integer, Integer> mp = new HashMap<>();
        // int complement = 0;
        int n = nums.length;
        for(int i = 0; i<n; i++){

            if(mp.containsKey(target-nums[i])){
                return new int[]{i, mp.get(target-nums[i])};
            }

            mp.put(nums[i], i);
        }
        

        return null;
    }
}
