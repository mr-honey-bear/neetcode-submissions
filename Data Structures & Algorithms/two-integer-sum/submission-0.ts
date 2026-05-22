class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
    let hashMap = {};
    for (let i=0; i < nums.length; i++) {
        let targetNumber = target - nums[i];
		// or hashMap[targetNumber) !== undefined
        if (targetNumber in hashMap) {
            return [i, hashMap[targetNumber]]
        } else {
            hashMap[nums[i]] = i
        }
    }
    return [];
    };
}
