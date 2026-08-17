class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        let p1 =0;
        let p2=0;
        let set = new Set();
        while (p2< nums.length) {
            // 1. Maintain the window size FIRST
            if (p2 - p1 > k) {
                set.delete(nums[p1]);
                p1++;
            }

            // 2. THEN check for the duplicate
            if (set.has(nums[p2])) {
                return true;
            } 
            
            // 3. Add current element to the set and advance
            set.add(nums[p2]);
            p2++;
        }

        return false;
    }
}
