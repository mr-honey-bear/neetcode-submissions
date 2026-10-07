class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        let maj = nums.length / 3;
        let map = new Map();
        let set = new Set();

        for (let num of nums) {
            if (!map.has(num)) {
                map.set(num, 1);
            } else {
                let x = map.get(num);
                map.set(num, x + 1);
            }

            if (map.get(num) > maj) {
                set.add(num);
            }
        }
        return [...set] as number[];
    }
}
