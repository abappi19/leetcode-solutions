class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        int N = 1001;
        int[] set = new int[N];

        for(int i:nums1) set[i] = 1;

        int count = 0;
        for(int i:nums2){
            if(set[i] == 1){
                set[i] = 2;
                count++;
            }
        }

        int[] res = new int[count];
        int[] minarr = minArr(nums1, nums2);
        int index = 0;
        for(int i : minarr){
            if(set[i] == 2){
                res[index++] = i;
                set[i] = 1;
            }
        }

    return res;
        

    }

    public int[] minArr(int[] i, int[] j){
        return i.length<=j.length?i:j;
    }
}
