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
    let visited = {}
    for (let i = 0; i < n; i++) {
        graph[i] = []
        visited[i] = false;
    }

    for (let edge of edges) {
        let currentNode = edge[0];
        let nextNode = edge[1];

        // add to both
        graph[currentNode].push(nextNode);
        graph[nextNode].push(currentNode);
    }

    let components = 0;
    // traverse graph
    for (let i = 0; i < n; i++) {
        // not visited
        if (visited[i] === false) {
            components++;
            this.dfs(i, graph, visited);
        }
    }
    return components;
};

    dfs(index, graph, visited) {
        visited[index] = true;
        let nodes = graph[index];
        for (let i = 0; i < nodes.length; i++) {
            if (visited[nodes[i]] === false) {
                this.dfs(nodes[i], graph, visited)
            }
        }
    }
}
