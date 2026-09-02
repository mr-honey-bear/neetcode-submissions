class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        if (n <= 1) {
            return n;
        }

        let graph = {};
        let visited = new Set();
        let num = 0;
    
        for (let i = 0; i < n; i++) {
            graph[i] = []
        }

    for (let edge of edges) {
        let currentNode = edge[0];
        let nextNode = edge[1];

        graph[currentNode].push(nextNode);
        graph[nextNode].push(currentNode);
    }

        console.log(graph)

        for (let node = 0; node < n; node++) {
            if (visited.has(node)) {
                continue;
            }
            num++;

            // let queue =[node];
            // visited.add(node); 
            // while (queue.length > 0) {
            //     let curr = queue.shift();

            //     for (let el of graph[curr] || []) {
            //         if (!visited.has(el)) {
            //             visited.add(el);
            //             queue.push(el); 
            //         }
            //     }
            // }
            let dfs = (node) => {
                visited.add(node);

                for (let el of graph[node] || []) {
                    if (!visited.has(el)) {
                        dfs(el)
                    }
                }
            }

            visited.add(node);
            dfs(node)
        }

        return num;
    }
};