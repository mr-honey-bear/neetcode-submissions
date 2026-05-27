class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */

    // {'
    //     let l = 0,
    //         total = 0;
    //     let res = Infinity;

    //     for (let r = 0; r < nums.length; r++) {
    //         total += nums[r];
    //         while (total >= target) {
    //             res = Math.min(r - l + 1, res);
    //             total -= nums[l];
    //             l++;
    //         }
    //     }

    //     return res === Infinity ? 0 : res;
    // }


    minSubArrayLen(target: number, nums: number[]): number {
        
        let p1 = 0;
        let sum = 0;
        let minLen = Infinity;

        for (let p2 = 0; p2 < nums.length; p2++) {
            sum += nums[p2];

            while (sum >= target) {
                minLen = Math.min(minLen, p2 - p1 + 1);
                sum -= nums[p1];
                p1++;
            }
        }

        return minLen === Infinity ? 0 : minLen;
    }
}