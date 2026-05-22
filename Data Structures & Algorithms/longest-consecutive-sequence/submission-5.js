
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let set = new Set(nums.sort((a, b) => a - b));
        let sorted = [...set];

        let result = [];
        let temp = new Set();

        for (let i = 0; i < sorted.length; i++) {
            if (i != sorted.length - 1) {
                if (sorted[i] == (sorted[i + 1] - 1)) {
                    temp.add(sorted[i]);
                    temp.add(sorted[i + 1]);

                    if (result.length < temp.size) {
                        result = [...temp];
                    }
                } else {
                    temp.clear();
                }
            }
        }

        // ✅ FIX: handle edge case (no sequence found but array not empty)
        if (result.length === 0 && sorted.length > 0) {
            return 1;
        }

        return result.length;
    }
}
