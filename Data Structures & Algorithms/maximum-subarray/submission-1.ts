class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        // if the running sum becomes negative, keeping it will only reduce the sum of any future subarray
        // So whenever the current sum drops below zero, we reset it and start a new subarray from the next element.
        
        let max = nums[0];
        let cursum = 0;

        for (let n of nums) {
            if (cursum < 0) {
                cursum = 0;
            }

            cursum += n;

            max = Math.max(max, cursum);
        }

        return max;
    }
}
// 2 pointer  
/*
function maxSubArray(nums: number[]): number {
    let p1 = 0;
    let p2 = 0;
    let sum = 0;
    let max = -Infinity;

    if (nums.length == 1) {
        return nums[0];
    }

    while (p2 < nums.length) {

        if (sum < 0){
            while (p1 < p2) {
                sum -= nums[p1];
                p1++;
            }
        }
        
        sum += nums[p2];
        p2++;
        max = Math.max(sum,max)

    }

    return max;
};

or 

function maxSubArray(nums: number[]): number {
    let p1 = 0;
    let sum = 0;
    let max = -Infinity;

    for (let p2 = 0; p2 < nums.length; p2++) {
        // If running sum is negative, reset window to start at p2
        if (sum < 0) {
            sum = 0;
            p1 = p2;
        }

        sum += nums[p2];
        max = Math.max(max, sum);
    }

    return max;
}
*/
