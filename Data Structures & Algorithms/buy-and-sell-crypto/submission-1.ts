class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let p1=0;
        let p2=0;

        let max = 0;

        while (p2 < prices.length) {
            let profit = prices[p2]- prices[p1];
            if (profit >= 0) {
                max = Math.max(profit, max);
                p2++;
            } else {
                p1++;
            }
            
        }

        return max;
    }
}
