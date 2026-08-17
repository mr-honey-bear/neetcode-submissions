class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {

        let p1=0;
        let p2 = 0;

        let windowArr = []; 
        const target = s1.split("").sort().join("");
    
        while (p2 < s2.length) {
            if ((p2 - p1) < s1.length) {
                windowArr.push(s2[p2]); 
                p2++;
            } else {
                windowArr.shift(); 
                p1++;

                windowArr.push(s2[p2]);
                p2++;
            }

            // FIX 4: Check if the sorted window exactly matches the sorted s1
            const containsAll = windowArr.slice().sort().join("") === target;

            if (windowArr.length === s1.length && containsAll) {
                return true;
            }
        }

        return false;
    }
}
