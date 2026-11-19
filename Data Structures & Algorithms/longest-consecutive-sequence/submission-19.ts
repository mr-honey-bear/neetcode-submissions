class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        let set = new Set(nums);
        let res = 0;

        for (let num of nums) {
            if (!set.has(num-1)) {
                let count = 0;
                let n = num;

                while(set.has(n)) {
                    count++
                    n++;
                }
                res = Math.max(res, count);
            }
        }

        return res;
    }
}
