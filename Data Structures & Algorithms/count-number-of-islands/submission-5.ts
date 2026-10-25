class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let dirs = [
            [-1,0],
            [0,1],
            [1,0],
            [0,-1]
        ]

        let res = 0;

        let dfs = (row,col) => {
            if (row < 0 ||
                row >= grid.length ||
                col < 0 ||
                col >= grid[0].length ||
                grid[row][col] == "0") {
                    return;
                }

            grid[row][col] = "0"

            for (let dir of dirs) {
                let nextRow = row + dir[0];
                let nextCol = col + dir[1];
                dfs(nextRow,nextCol);
            }
        }

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++){
                if (grid[row][col] == "1") {
                    dfs(row,col);
                    res++;
                }
            }
        }

        return res;
    }
}
