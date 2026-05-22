class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) {
            return false;
        }
        let hashS = {};
        for (let char of s) {
            if (hashS[char]) {
                hashS[char] += 1
            } else {
                hashS[char] = 1
            }
        }
        for (let char of t) {
            if (hashS[char]) {
                hashS[char] -= 1
            } else {
                return false
            }
        }
        return true;
    }
}
