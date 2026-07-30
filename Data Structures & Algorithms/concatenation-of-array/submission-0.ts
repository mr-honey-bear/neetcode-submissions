class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let arr = [];

        for (let i = 0; i < 2; i++) {
            for (let el of nums) {
                arr.push(el);
            }
        }

        return arr;
    }
}
