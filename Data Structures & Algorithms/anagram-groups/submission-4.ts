class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        let hash = {};

        for (let el of strs) {
            let key = el.split('').sort().join('');

            if (hash[key]) {
                hash[key].push(el);
            } else {
                hash[key] = [el];
            }
        }

        return Object.values(hash);
    }
}
