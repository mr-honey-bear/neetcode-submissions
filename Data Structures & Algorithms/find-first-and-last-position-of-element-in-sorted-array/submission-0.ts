class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums: number[], target: number): number[] {
        let left = this.binarySearch(nums, target, true);
        let right = this.binarySearch(nums, target, false);
        return [left, right];
    }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @param {boolean} leftBias
     * @return {number}
     */
    binarySearch(nums, target, leftBias) {
        let l = 0,
            r = nums.length - 1,
            i = -1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (target > nums[m]) {
                l = m + 1;
            } else if (target < nums[m]) {
                r = m - 1;
            } else {
                i = m;
                if (leftBias) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
        }
        return i;
    }
}
