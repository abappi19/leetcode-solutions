class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] output = new int[n];
        int[] left = new int[n];
        int[] right = new int[n];

        left[0] = 1;
        right[n-1] = 1;

        int leftSum = 1;
        int rightSum = 1;

        for(int i = 0; i < n-1; i++){
            left[i+1] = left[i] * nums[i];
        }

        for(int i = n - 1; i>0; i--){
            right[i-1] = right[i] * nums[i];
        }

        for(int i = 0; i<n; i++){
            output[i] = left[i] * right[i];
        }

        return output;
        
    }
}
