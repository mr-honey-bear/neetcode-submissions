class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x: number): number {
        let string = [...JSON.stringify(x)];
        let p1 = 0;
        if (x < 0) {
            p1 = 1;
        }
        let p2 = string.length - 1;

        while (p1 < p2) {
            [string[p1], string[p2]] = [string[p2], string[p1]];
            p1++;
            p2--;
        }

        let res = parseInt(string.join(""));

        if (res < -(2 ** 31) || res > 2 ** 31 - 1) {
            return 0;
        } else {
            return res;
        }
    }
}
