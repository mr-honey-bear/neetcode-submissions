class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        let hash = {};

        for (let str of strs) {
            let key = str.split("").sort().join("");

            if (hash[key] !== undefined) {
                hash[key].push(str);
            } else {
                hash[key] = [str];
            }
        }
        return Object.values(hash);
    }
}
