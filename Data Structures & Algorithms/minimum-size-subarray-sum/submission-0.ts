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
        let l = 0,
            total = 0;
        let res = Infinity;

        for (let r = 0; r < nums.length; r++) {
            total += nums[r];
            while (total >= target) {
                res = Math.min(r - l + 1, res);
                total -= nums[l];
                l++;
            }
        }

        return res === Infinity ? 0 : res;
    }
}
