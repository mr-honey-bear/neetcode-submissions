class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let hashMap = {}
    
        for (let num of nums) {
            if (num in hashMap) {
                hashMap[num] += 1; 
            } else {
                hashMap[num] = 1; 
            }
        }
        let arr = Object.keys(hashMap).sort((a,b) => hashMap[b] - hashMap[a])
        return arr.slice(0, k).map(Number);
    }
}
