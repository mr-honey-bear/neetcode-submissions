class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let l = 1;
        // we always move r and check if previous is same
        // if not same, it's a new number, we swap.
        // so we will swap with a new number in sequence
        // or if numbers 1,2,3,4,5 l and r will be moving and swappin on the same spot
        // it also will move L forward correctly
        for (let r = 1; r < nums.length; r++) {
            if (nums[r] != nums[r-1]) {
                nums[l] = nums[r];
                l++;
            }
        }
        
        return l;
    }
}