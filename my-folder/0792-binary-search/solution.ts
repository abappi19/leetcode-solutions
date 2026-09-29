
function search(nums: number[], target: number): number {
    let min = 0, max = nums.length - 1;
    while (min <= max) {
        const middle = Math.floor((max - min) / 2) + min;
        if (nums[middle] === target) return middle;
        if (target > nums[middle]) min = middle + 1;
        else max = middle - 1;
    }
    return -1;
};
