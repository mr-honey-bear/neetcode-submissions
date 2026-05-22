class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

        let end = str.length -1; 

        for (let start = 0; start <= end; start++) {
            if (str[start] === str[end]) {
                end--;
            } else {
                return false; 
            }
        }

        return true; 
    }
}
