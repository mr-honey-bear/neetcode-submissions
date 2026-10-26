class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        let map = {};
        let res = 0;
        for (let i = 0; i < n; i++) {
            map[i] = [];
        }

        for (let edge of edges) {
            map[edge[0]].push(edge[1]);
            map[edge[1]].push(edge[0]);
        }

        let set = new Set()

        let dfs = (node) => {
            if (set.has(node)) {
                return;
            }

            set.add(node);

            for (let nextNode of map[node]) {
                dfs(nextNode);
            }

        }

        for (let node=0; node < n; node++) {
            if (!set.has(node)) {
                res++
                dfs(node);
            }
        }

        return res;
    }

    // bfs 
    /* 
    countComponents(n: number, edges: number[][]): number {
        let map = {};
        let res = 0;
        for (let i = 0; i < n; i++) {
            map[i] = [];
        }

        for (let edge of edges) {
            map[edge[0]].push(edge[1]);
            map[edge[1]].push(edge[0]);
        }

        let set = new Set()

        let queue = [];
        for (let node =0; node < n; node++) {
            if (!set.has(node)) {
                set.add(node);
                queue.push(node);
                res++;
            }

            while(queue.length > 0) {
                let node = queue.shift();

                for (let el of map[node]) {
                    if (!set.has(el)) {
                        set.add(el);
                        queue.push(el);
                    }
                }
            }
        }

        return res;
    }
    */
}
