class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

        let pars = {
        "]": "[",
        "}": "{",
        ")": "("
        }

        let stack = []
        for (let c of s) {
            if(!pars[c]){
                stack.push(c);
            } else {
                let last = stack.pop();

                if (last !== pars[c]) {
                    return false
                }
            }
        }

        if (stack.length > 0) {
            return false;
        } 

        return true;
    }
}