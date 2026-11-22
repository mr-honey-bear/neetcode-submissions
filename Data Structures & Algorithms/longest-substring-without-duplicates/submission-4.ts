class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let p1 = 0;
        let p2 = 0;
        let set = new Set();
        let max = 0;

        while (p2 < s.length) {
            if (!set.has(s[p2])) {
                set.add(s[p2]);
                max = Math.max(set.size, max);
                p2++;
            } else {
                while(set.has((s[p2]))) {
                    set.delete(s[p1]);
                    p1++;
                }
            }
        }

        return max;
    }
}
