class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let n = nums.length,
        l = 0,
        r = 0;
        while (r < n) {
            nums[l] = nums[r];
            while (r < n && nums[r] === nums[l]) {
                r++;
            }
            l++;
        }
        return l;
    }

    removeDuplicates2(nums) {
        let l = 1;
        for (let r = 1; r < nums.length; r++) {
            if (nums[r] !== nums[r - 1]) {
                nums[l++] = nums[r];
            }
        }
        return l;
    }
}
