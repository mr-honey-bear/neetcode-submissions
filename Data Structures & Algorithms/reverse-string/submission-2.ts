class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        let p1 = 0;
        let p2 = s.length - 1;
        while (p1 < p2) {
            let c1 = s[p1];
            let c2 = s[p2];

            s[p1] = c2;
            s[p2] = c1;

            p1++;
            p2--;
        }
    }
}
