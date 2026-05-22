class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let p1 = 0; 
        let p2 = 0; 
        let set= new Set();
        let max = 0;

        while (p2 < s.length) {
            if (set.has(s[p2])) {
                set.delete(s[p1])
                p1++; 
            } else {
                set.add(s[p2]);
                p2++;
            }
            if (set.size > max) {
                max = set.size
            }
        }
        return max; 
    }
}
