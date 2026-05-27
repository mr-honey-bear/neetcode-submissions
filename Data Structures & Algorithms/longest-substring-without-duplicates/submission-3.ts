class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let set = new Set();

        let p1= 0;
        let p2= 0
        let max = 0
        while (p2 < s.length) {
            if (!set.has(s[p2])) {
                set.add(s[p2])
                let distance = (p2-p1) + 1;
                max = Math.max(max, distance)
                p2++;
            } else {
                set.delete(s[p1]);
                p1++;
            }
        }

        return max;
    }
}
