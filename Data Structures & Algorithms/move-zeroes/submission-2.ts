class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let l = 0;
        let r = 0;

        for (let l=0, r=0; r< nums.length; r++) {
            if (nums[r] !== 0) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                l++;
            }
        }
    }
}

/*
 L   R              L   R              L   R            L     R           L   R
[0,0,1,2,0,5] => [1,0,0,2,0,5] => [1,2,0,0,0,5] => [1,2,0,0,0,5] =>[1,2,5,0,0,0]
*/
