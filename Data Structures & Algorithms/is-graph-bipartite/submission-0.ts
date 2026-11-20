class Solution {
    /**
     * @param {number[][]} graph
     * @return {boolean}
     */
    isBipartite(graph: number[][]): boolean {
        let n = graph.length;
        let color = new Array(n).fill(0); // Map node i -> odd=1, even=-1

        for (let i = 0; i < n; i++) {
            if (color[i] !== 0) continue;
            color[i] = -1;
            let queue = [i];

            while (queue.length > 0) {
                let node = queue.shift();

                for (let child of graph[node]) {
                    if (color[child] == color[node]) {
                        return false;
                    } else if (color[child] == 0) {
                        color[child] = -1 * color[node];
                        queue.push(child);
                    }
                }
            }
        }
        return true;
    }
}
