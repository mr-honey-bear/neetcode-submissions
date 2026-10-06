class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack = new Stack();
        let map = new Map([
            [']','['],
            [')', '('],
            ['}', '{']
        ])
        for (let c of s) {
            if (map.has(c)) {
                let el= stack.pop()
                if (map.get(c) != el) {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        if (stack.size > 0) {
            return false;
        }

        return true;

    }
}

class Stack {
    stack: string[];

    constructor() {
        this.stack = [];
    }

    push(el:string) {
        this.stack.push(el)
    }

    pop(): string {
        return this.stack.pop();
    }

    get size(): number {
        return this.stack.length;
    }
}