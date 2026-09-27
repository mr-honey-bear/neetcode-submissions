class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x: number): boolean {
        if (x < 0) {
            return false;
        }

        let s = JSON.stringify(x);

        let p1 = 0;
        let p2 = s.length -1;

        while (p1 < p2) {
            let el1= s[p1];
            let el2 = s[p2];

            if (el1 != el2) {
                return false;
            }
            
            p1++;
            p2--;
        }

        return true;
    }
}
