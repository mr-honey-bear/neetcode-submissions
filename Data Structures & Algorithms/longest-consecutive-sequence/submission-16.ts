class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        let set = new Set(nums);
        let max = 1;

        if (nums.length == 1) {
            return 1;
        }

        if (!nums.length) {
            return 0;
        }

        for (let num of [...set]) {
            if (!set.has(num - 1) && set.has(num + 1)) {
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
