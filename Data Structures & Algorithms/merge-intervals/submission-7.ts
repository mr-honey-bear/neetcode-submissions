class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        if (intervals.length < 1) {
            return intervals;
        }

        intervals = intervals.sort((a,b) => a[0] - b[0]);

        let start = intervals[0][0];
        let end = intervals[0][1];
        let res= [];

        for (let interval of intervals) {
            if(interval[0] <= end) {
                end = Math.max(end,interval[1]);
            } else {
                res.push([start,end])
                start =  interval[0];
                end = interval[1];               
            }
        }

        res.push([start,end]);

        return res;
    }
}
