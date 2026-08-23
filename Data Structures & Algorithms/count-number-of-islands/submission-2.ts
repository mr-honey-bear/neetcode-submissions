class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let directions = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1]
        ];

        let islands = 0;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === "1") {
                    islands++;
                    grid[row][col] = "0"; // Mark as visited

                    let queue = [[row, col]];

                    while (queue.length > 0) {
                        // Using ! for TypeScript strict mode since length > 0 guarantees a value
                        let point = queue.shift(); 
                        let currentRow = point[0];
                        let currentCol = point[1];

                        for (let i = 0; i < directions.length; i++) {
                            let nextRow = currentRow + directions[i][0];
                            let nextCol = currentCol + directions[i][1];

                            // FIXED: Strict less-than for boundaries and check if it is "1"
                            if (
                                nextRow >= 0 && 
                                nextRow < grid.length && 
                                nextCol >= 0 && 
                                nextCol < grid[0].length &&
                                grid[nextRow][nextCol] === "1"
                            ) {
                                queue.push([nextRow, nextCol]);
                                grid[nextRow][nextCol] = "0"; // Mark as visited
                            }
                        }
                    }
                }
            }
        }
        
        return islands;
    }
}
