class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        
        let p1 = 0;
        let p2 = 0;

        let res = []

        while (p1 < word1.length || p2 < word1.length) {
            res.push(word1[p1]);
            res.push(word2[p2]);
            p1++;
            p2++;
        }

        if (p1 < word1.length) {
            for (p1; p1 < word1.length; p1++) {
                res.push(word1[p1]);
            }
        }

        if (p2 < word2.length) {
            for (p2; p2 < word2.length; p2++) {
                res.push(word2[p2]);
            }
        }

        return res.join('');
    }
}
