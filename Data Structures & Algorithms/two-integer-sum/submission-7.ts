class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // x + y = target 
        // target - x = y
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let num = target - nums[i];

            if (map.has(nums[i])) {
                return [map.get(nums[i]), i];
            } else {
                map.set(num, i);
            }
        }

        return [];
    }
}
