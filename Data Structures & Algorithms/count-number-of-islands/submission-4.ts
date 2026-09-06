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
        let count = 0;
        let dfs = (current: number[]) => {
            for (let dir of dirs) {
                let nextRow= current[0] + dir[0];
                let nextCol= current[1] + dir[1];

                if (nextRow >= 0 && 
                    nextRow < grid.length &&
                    nextCol >= 0 &&
                    nextCol < grid[0].length &&
                    grid[nextRow][nextCol] == "1") {
                        grid[nextRow][nextCol] = "0";
                        dfs([nextRow,nextCol]);
                    }
            }
        }

        for (let row =0; row < grid.length ; row++) {
            for (let col =0; col < grid[0].length ; col++) {
                if (grid[row][col] == "1") {
                    grid[row][col] = "0";
                    count++;
                    dfs([row,col]);
                }
            
            }
        }

        return count;
    }
}
