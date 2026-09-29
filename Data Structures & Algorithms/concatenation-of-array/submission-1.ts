class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let arr = [];
        
        let size = nums.length;
        
        for (let i = 0; i < size*2; i++) {
            let mod = i % size;
            arr.push(nums[mod]);
        }

        return arr;
    }
}
