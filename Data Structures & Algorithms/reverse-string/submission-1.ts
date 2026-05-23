class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        let l = 0;
        let r = s.length -1; 

        while (l < r) {
            let leftnum = s[l];
            let rightnum = s[r];
            s[l] = rightnum;
            s[r] = leftnum;

            l++;
            r--;
        }
    }
}
