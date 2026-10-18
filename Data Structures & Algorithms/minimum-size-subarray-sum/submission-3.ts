class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let p1 = 0;
        let p2 = 0;

        let sum = 0;
        let minLen = Infinity;

        while (p2 < nums.length) {
            sum += nums[p2]

            while(sum >= target ) {
                minLen = Math.min(minLen, p2-p1+1);
                sum -= nums[p1];
                p1++;
            }

            p2++;
        }

        return minLen == Infinity ? 0 : minLen;
    }
}
