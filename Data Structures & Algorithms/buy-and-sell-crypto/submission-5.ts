class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let p1 = 0;
        let p2 = 1;

        let profit = 0;

        while (p2 < prices.length) {
            let diff = prices[p2] - prices[p1];

            if (diff > 0) {
                profit = Math.max(profit, diff);
            } else {
                p1 = p2;
            }

            p2++;
        }

        return profit
    }
}
