class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // num[a] + num[b] = target -> num[a] = target - num[a] 
        let hash = {};

        for (let i = 0; i < nums.length; i++) {
            let el = nums[i];
            let num = target - el;

            if (hash[num] == undefined) {
                hash[el] = i;
            } else {
                return [i, hash[num]]
            }

        }

        return [];
    }
}
