class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        let start = null;
        let end = null;

        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] !== " ") {
                if (!end) {
                    end = i;
                    break;
                }
            }
        }

        for (let i = end; i >= 0; i--) {
            if (s[i] !== " ") {
                start=i;
            } else {
                break;
            }
        }

        return end - start + 1;
    }
}
