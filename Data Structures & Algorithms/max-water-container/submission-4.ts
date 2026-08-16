class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let p1 = 0;
        let p2 = heights.length - 1;

        let max = 0;

        while (p1 < p2) {
            let perimeter = (p2 - p1) * Math.min(heights[p1], heights[p2]);
            max = Math.max(max, perimeter);

            if(heights[p1] < heights[p2]) {
                p1++
            } else {
                p2--;
            }
        }
        return max;
    }
}
