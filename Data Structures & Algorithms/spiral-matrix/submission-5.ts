class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix: number[][]): number[] {
        const res = [];
        if (!matrix || matrix.length === 0) return res;

        const rows = matrix.length;
        const cols = matrix[0].length;

        const VISITED = 200; 

        const directions = [
            [0, 1],   // Right
            [1, 0],   // Down
            [0, -1],  // Left
            [-1, 0]   // Up
        ];

        const dfs = (r, c, dirIndex) => {
            // Base case: out of bounds or already visited
            if (r < 0 || r >= rows || c < 0 || c >= cols || matrix[r][c] === VISITED) {
                return;
            }

            res.push(matrix[r][c]);
            matrix[r][c] = VISITED;

            let nextR = r + directions[dirIndex][0];
            let nextC = c + directions[dirIndex][1];

            if (nextR < 0 || nextR >= rows || nextC < 0 || nextC >= cols || matrix[nextR][nextC] === VISITED) {
                // once a wall is hit, change direction
                dirIndex = (dirIndex + 1) % 4; // Cycles 0 -> 1 -> 2 -> 3 -> 0
                nextR = r + directions[dirIndex][0];
                nextC = c + directions[dirIndex][1];
            }

            // Move to the next cell
            dfs(nextR, nextC, dirIndex);
        };

        // Start at top-left (0, 0) moving Right (index 0)
        dfs(0, 0, 0);

        return res;
    }
}