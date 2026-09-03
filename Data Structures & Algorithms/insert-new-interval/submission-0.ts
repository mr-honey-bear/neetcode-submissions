class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        if (!intervals.length) {
            return [newInterval];
        }
        intervals.push(newInterval);
        let sorted = intervals.sort((a,b) => a[0] - b[0]);

        let res = [];
        let start = sorted[0][0];
        let end = sorted[0][1];

        for (let i = 1; i < intervals.length; i++) {
            let element = sorted[i]

            if (element[0] >= start && element[0] <= end) {
                end = Math.max(end, element[1])
            } else {
                res.push([start,end])
                start = element[0];
                end = element[1];
            }
        }

        res.push([start,end]); // adds last one.

        return res;
    }
}
