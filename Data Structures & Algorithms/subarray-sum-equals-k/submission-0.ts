class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        let res = 0,
            curSum = 0;
            
        const prefixSums = {};
        prefixSums[0] = 1;

        for (let num of nums) {
            curSum += num;
            let diff = curSum - k;

            if (prefixSums[diff] != undefined) {
                res += prefixSums[diff]
            }
            
            if (prefixSums[curSum] == undefined) {
                prefixSums[curSum] = 1;
            } else {
                prefixSums[curSum] += 1;
            }
            // a way to initialize if element is undefinied
            //prefixSums[curSum] = (prefixSums[curSum] || 0) + 1;
        }

        return res;
    }
}
