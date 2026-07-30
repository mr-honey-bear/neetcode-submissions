class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if (!strs.length) {
            return ""
        } else if (strs.length == 1) {
            return strs[0];
        }

        let result = ""
        let sorted = strs.sort((a,b) => a.localeCompare(b));
        
        let first = sorted[0];
        let last = sorted[sorted.length - 1]; // Compare against the last element
        
        for (let i = 0; i < first.length; i++) {
            if (first[i] === last[i]) {
                result += first[i];
            } else {
                return result;
            }
        }

        return result;
    }
}
