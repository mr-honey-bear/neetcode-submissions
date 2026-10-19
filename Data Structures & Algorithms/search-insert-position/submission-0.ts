class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            let n = Math.floor((l+r)/2);

            if (nums[n] < target) {
                l = n + 1;
            } else {
                r = n - 1;
            }
        }

        return l;
    }
}
