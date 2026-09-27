class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    // isPalindrome(x: number): boolean {
    //     if (x < 0) {
    //         return false;
    //     }

    //     let s = JSON.stringify(x);

    //     let p1 = 0;
    //     let p2 = s.length -1;

    //     while (p1 < p2) {
    //         let el1= s[p1];
    //         let el2 = s[p2];

    //         if (el1 != el2) {
    //             return false;
    //         }

    //         p1++;
    //         p2--;
    //     }

    //     return true;
    // }

    isPalindrome(x) {
        if (x < 0) {
            return false;
        }

        let div = 1;
        while (x >= 10 * div) {
            div *= 10;
        }

        while (x !== 0) {
            if (Math.floor(x / div) !== x % 10) {
                return false;
            }
            x = Math.floor((x % div) / 10);
            // first one removes left, /10 removes right digit
            div = Math.floor(div / 100);
            // decreases by 2 cuz we removed 2 digits.
        }

        return true;
    }
}
