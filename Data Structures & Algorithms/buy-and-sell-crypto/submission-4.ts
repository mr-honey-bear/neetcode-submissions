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
            let start = prices[p1];
            let end = prices[p2];

            profit = Math.max(profit, end - start);

            if (end < start) {
                p1 = p2;
            }

            p2++;
        }

        return profit;
    }
}
