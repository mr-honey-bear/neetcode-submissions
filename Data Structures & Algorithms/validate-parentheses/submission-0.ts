class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s == "") {
            return true;
        } else if (s.length == 1) {
            return false;
        }

        let closePar = {
            "]": "[",
            "}": "{",
            ")" : "("
        };

        let stack = [];

        let openPar = new Set(Object.values(closePar));

        let arr = s.split("");

        for (let el of arr) {
            if (openPar.has(el)) {
                stack.push(el)
            } else {
                let par = stack.pop();
                if (closePar[el] !== par) {
                    return false;
                }
            }
        }

        if (stack.length >= 1) {
            return false;
        }

        return true
    }
}
