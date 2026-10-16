class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        return s.trim().split(" ").pop().length;
    }
}
