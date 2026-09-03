/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        let sorted = intervals.sort((a,b) => a.start - b.start);
        let prev = -Infinity;

        for (let interval of intervals) {
            if (interval.start < prev) {
                return false;
            }

            prev = interval.end;
        }
        console.log(sorted);

        return true;
    }
}
