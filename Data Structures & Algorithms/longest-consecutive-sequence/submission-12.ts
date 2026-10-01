class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        let set = new Set(nums);
        let max = 0;

        for (let num of nums) {
            if (!set.has(num - 1)) {
                let n = num;
                let sequnce = 0;
                while(set.has(n)) {
                    sequnce++;
                    max = Math.max(max, sequnce);
                    n++
                }
            }
        }

        return max;
    }
}
