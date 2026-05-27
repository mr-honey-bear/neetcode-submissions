class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr: number[], k: number, x: number): number[] {
        let l = 0,
            r = arr.length - 1;
        while (r - l >= k) {
            if (Math.abs(x - arr[l]) <= Math.abs(x - arr[r])) {
                r--;
            } else {
                l++;
            }
        }
        return arr.slice(l, r + 1);
    }
}
