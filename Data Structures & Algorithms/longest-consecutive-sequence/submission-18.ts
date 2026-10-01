class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        let set = new Set(nums);
        let max = 0;

        for (let num of [...set]) {
            if (!set.has(num - 1)) {
                let n = num;
                let sequnce = 0;
                while(set.has(n)) {
                    sequnce++;
                    n++
                }
                max = Math.max(max, sequnce);
            }
        }

        return max;
    }
}
