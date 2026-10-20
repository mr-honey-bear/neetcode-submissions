class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNonDuplicate(nums: number[]): number {
        let l = 0,
            r = nums.length - 1;

        while (l <= r) {
            let m = l + Math.floor((r - l) / 2);
            if (
                (m - 1 < 0 || nums[m - 1] !== nums[m]) &&
                (m + 1 === nums.length || nums[m] !== nums[m + 1])
            ) {
                return nums[m];
            }

            let leftSize = m - 1 >= 0 && nums[m - 1] === nums[m] ? m - 1 : m;
            if (leftSize % 2 === 1) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
    }
}
