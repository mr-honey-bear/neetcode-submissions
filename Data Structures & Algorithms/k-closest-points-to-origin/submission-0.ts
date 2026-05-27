class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        let map = {};

        for (let point of points) {
            let dis = this.distance(point[0],point[1]);

            let key = JSON.stringify(point)
            if (map[key] == undefined) {
                map[key] = dis;
            }
        }

        let minHeap = Object.keys(map).sort((k1, k2) => map[k1] - map[k2]).map((e) => JSON.parse(e));

        let results = [];

        while (k > 0) {
            results.push(minHeap.shift())
            k--;
        }

        return results;
    }

    distance(x:number, y:number): number {
        return Math.sqrt((Math.pow(-x,2)+Math.pow(-y,2)));
    }
}
