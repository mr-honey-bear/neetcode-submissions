class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0;

        let p1 = 0;
        let p2 = 1;

        while (p2 < prices.length) {
            let profit = prices[p2] - prices[p1];
            max = Math.max(max, profit);

            if (profit > 0) {
                p2++;
            } else {
                p1 = p2;
                p2++;
            }
        }

        return max ;
    }
}
