function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let listed = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if(i>k) listed.delete(nums[i-k-1]);
        if (listed.has(nums[i])) return true;
        listed.add(nums[i]);
    }

    return false;

};
