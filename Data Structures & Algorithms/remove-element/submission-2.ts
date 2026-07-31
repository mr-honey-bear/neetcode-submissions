class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let p1= 0;
        let p2= nums.length-1; 

        while (p1 <= p2) {
            if (nums[p1] === val) {
                nums[p1] = nums[p2];
                p2--; // Shrink the window from the right
            } else {
                p1++; // Move forward if current element is valid
            }
        }

    return p1;
    }
}
