class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let hash = {}
        for (let [i,num] of nums.entries()) {
            let res = target - num;

            if (hash[res] == undefined) {
                hash[num] = i;
            } else {
                return [i, hash[res]];
            }
        }
        return [];
    }
}
