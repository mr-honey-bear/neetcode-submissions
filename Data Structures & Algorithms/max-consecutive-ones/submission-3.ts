class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let max = 0;
        let curr = 0;
        for (let num of nums) {
            if (num == 1) {
                curr++;
                max = Math.max(max, curr);
            } else {
                curr = 0;
            }
        }

        return max;
    }
}
