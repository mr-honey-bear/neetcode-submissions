class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        if (nums.length <= 1) {
            return false; 
        }
        let set = new Set()
        for (let num of nums) {
            if (set.has(num)) {
                return true;
            } else {
                set.add(num)
            }
        }
        return false
    }
}
