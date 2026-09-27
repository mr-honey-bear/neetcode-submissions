class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // x + y = target 
        // target - x = y

        let map = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            let el = nums[i];

            if (map.has(el)) {
                return [map.get(el), i]
            }

            let x = target - el;
            map.set(x,i);
        }

        return [];
    }
}
