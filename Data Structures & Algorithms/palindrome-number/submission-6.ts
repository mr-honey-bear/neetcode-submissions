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
        if (x < 0 || (x !== 0 && x % 10 === 0)) {
            return false;
        }

        let rev = 0;
        while (x > rev) {
            rev = rev * 10 + (x % 10);
            x = Math.floor(x / 10);
        }

        return x === rev || x === Math.floor(rev / 10);
    }
}
