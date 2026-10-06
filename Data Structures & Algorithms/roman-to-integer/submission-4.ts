class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s: string): number {
        let map = new Map([
            ["I", 1],
            ["V", 5],
            ["X", 10],
            ["L", 50],
            ["C", 100],
            ["D", 500],
            ["M", 1000]
        ]);

        let sum = 0;

        if (s.length == 1 ) {
            return map.get(s);
        }
 
        let p1 = 0;
        let p2 = 1;

        // check if we are lower than next one, then we deduct it 
        // once we reach last element, we will add it
        for (let i = 0; i < s.length; i++) {
            if ( i + 1 < s.length && map.get(s[i+1]) > map.get(s[i])) {
                sum -= map.get(s[i])
            } else {
                sum += map.get(s[i])
            }
        }

        return sum;
    }
}
