class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        // k (rate) is between 1 and max pile
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            let k = Math.floor((l+r)/2);
            let totalTime = 0

            for(let pile of piles) {
                totalTime += Math.ceil(pile/k);
            }

            if (totalTime <= h) {
                r = k - 1;
                res = Math.min(res, k)
            } else {
                l = k + 1;
            }

        }

        return res;
        
    }
}
