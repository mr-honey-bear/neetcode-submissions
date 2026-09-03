class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        let map = [];

        for (let point of points) {
            let distance = this.distance(point[0],point[1]);
            let key = JSON.stringify(point);

            if( map[key] ==  undefined) {
                map[key] = distance;
            } 

        }

        let keys = Object.keys(map).sort((a,b) => map[a] - map[b]).map((e) => JSON.parse(e));

        return keys.slice(0,k);
    }

    distance(x:number, y:number): number {
        return Math.sqrt((Math.pow(-x,2)+Math.pow(-y,2)));
    }
}
