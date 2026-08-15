class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

        let p1 = 0;
        let p2 = str.length - 1;

        while (p1 < p2) {
            if(str[p1] !== str[p2]) {
                return false;
            }

            p1++;
            p2--;
        }

        return true;
    }
}
