class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let half = Math.ceil(nums.length/2);
        let map = {};
        if (nums.length == 1) {
            return nums[0];
        }
        for (let num of nums) {{
            if (map[num] == undefined) {
                map[num] = 1;
            } else {
                map[num]++;
                if (map[num] == half) 
                {
                    return num;
                }
            }
        }}
    }
}
