class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let majority = nums.length / 2;
        let hash = {}

        for (let num of nums) {
            if (hash[num]) {
                hash[num] += 1;
            } else {
                hash[num] = 1;
            }

            if(hash[num] > majority) {
                return num
            }
        }
    }
}
