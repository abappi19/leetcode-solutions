/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    // † = 0
     //[1,2,2,3|,0,0,0]
     //[2,5|,6]
    let i =0,j=0, ins = 0;
    let k = n;
    while(k>0){
        nums1.pop();
        k--;
    }
    while(j<n){
        if(nums2[j]<nums1[i] || i>=m+ins){
            nums1.splice(i, 0, nums2[j]);
            i++, j++, ins++;
        }else i++;
    }
};
