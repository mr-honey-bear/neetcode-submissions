class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let map = new Map();

        for (let c of s) {
            if(map.has(c)) {
                let i = map.get(c)+1
                map.set(c, i);
            } else {
                map.set(c, 1);
            }
        }

        for (let c of t) {
            if (!map.has(c)) {
                return false;
            } else {
                let i = map.get(c) - 1;

                if (i < 0) {
                    return false;
                } else if (i == 0) {
                    map.delete(c)
                } else {
                    map.set(c,i);
                }
            }
        }

        if([...map.keys()].length > 0) {
            return false;
        }

        return true;
    }
}
