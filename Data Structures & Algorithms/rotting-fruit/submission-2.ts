class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        let dirs = [
            [-1,0],
            [0,1],
            [1,0],
            [0,-1]
        ]

        if (!grid.length) {
            return 0;
        }

        let freshOranges = 0;
        let queue = [];

        for (let row = 0; row < grid.length; row++) {
            for (let column = 0; column < grid[0].length; column++) {
                if (grid[row][column] === 1) {
                    freshOranges++;
                }

                if (grid[row][column] === 2) {
                    queue.push([row, column]);
                }
            }
        }

        let currentQueueSize = queue.length;
        let minutes = 0;

        while (queue.length) {
            if (currentQueueSize === 0) {
                currentQueueSize = queue.length;
                minutes++;
            }

            let current = queue.shift();
            currentQueueSize--;

            for (let direction of dirs) {
                let nextRow = current[0] + direction[0];
                let nextCol = current[1] + direction[1];

                if (nextRow >= 0 && nextRow < grid.length && nextCol >= 0 && nextCol < grid[0].length && grid[nextRow][nextCol] === 1) {
                    grid[nextRow][nextCol] = 2
                    freshOranges--;
                    queue.push([nextRow, nextCol]);
                }
            }
        }

        if (freshOranges !== 0) {
            return -1;
        }

        return minutes;
    };
}
