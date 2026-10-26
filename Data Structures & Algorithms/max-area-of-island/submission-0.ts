class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let dirs = [
            [-1,0],
            [0,1],
            [1,0],
            [0,-1]
        ]
        let max = 0;

        let dfs = (row,col) => {
            if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == 0) {
                return 0;
            }

            grid[row][col] = 0;
            let res = 1;
            for (let dir of dirs) {
                let [r,c] = dir;
                let nextRow = row + r;
                let nextCol = col + c;

                res += dfs(nextRow,nextCol)
            }

            return res;

        }

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col]) {
                    max = Math.max(dfs(row,col), max);
                }
            }
        }
        
        return max;
    }
}
