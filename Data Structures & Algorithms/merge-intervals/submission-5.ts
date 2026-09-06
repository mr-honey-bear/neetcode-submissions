class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        if (intervals.length == 1) {
            return intervals;
        }

        let sorted = intervals.sort((a,b) => a[0] - b[0]);

        let res = [];
        let start = sorted[0][0];
        let end = sorted[0][1];

       for (let interval of intervals) {
        if (interval[0] >= start && interval[0] <= end) {
            end = Math.max(end, interval[1]);
        } else {
            res.push([start,end]);
            start = interval[0];
            end = interval[1];
        }
       }

       res.push([start,end]);

       return res;
    }
}
