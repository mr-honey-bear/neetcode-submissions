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
        let queue: [number,number][]= [];
        let minutes = 0;
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] == 1) {
                    freshOranges++;
                }

                if (grid[row][col] == 2) {
                    queue.push([row,col]);
                }
            }
        }


        while (queue.length > 0 && freshOranges > 0) {
            let level = queue.length;
            for (let i = 0; i < level; i++) {
                let point = queue.shift();
                for (let dir of dirs) {
                    let nextRow = point[0] + dir[0];
                    let nextCol = point[1] + dir[1];

                    if (nextRow >= 0 && nextRow < grid.length && nextCol >= 0 && nextCol < grid[0].length && grid[nextRow][nextCol] == 1) {
                        grid[nextRow][nextCol] = 2;
                        freshOranges--;
                        queue.push([nextRow,nextCol]);
                    }
                }
            }

            minutes++;
        }

        if (freshOranges > 0) {
            return -1;
        }

        return minutes;
    };
}
