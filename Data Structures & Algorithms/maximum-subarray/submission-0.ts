class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        // if the running sum becomes negative, keeping it will only reduce the sum of any future subarray
        // So whenever the current sum drops below zero, we reset it and start a new subarray from the next element.
        
        let max = nums[0];
        let cursum = 0;

        for (let n of nums) {
            if (cursum < 0) {
                cursum = 0;
            }

            cursum += n;

            max = Math.max(max, cursum);
        }

        return max;
    }
}
