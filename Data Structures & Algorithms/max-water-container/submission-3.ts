class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {

        let start = 0;
        let end = heights.length-1;

        let max = 0

        while (start < end) {
            
            let leftBar = heights[start];
            let rightBar = heights[end];
            
            let amountOfWater = (end - start) * Math.min(leftBar, rightBar);

            if (amountOfWater> max) {
                max = amountOfWater;
            }

            if (leftBar <= rightBar ) {
                start++;
            } else {
                end--;
            }
        }
        return max;
    }
}
