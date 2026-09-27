class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let p1 = 0;
        let p2 = numbers.length - 1;


        while (p1 < p2) {
            let el1 = numbers[p1];
            let el2 = numbers[p2];
            let sum = el1 + el2;
            if ((el1 + el2) == target) {
                return [p1+1,p2+1];
            } 

            if(sum < target) {
                p1++;
            } else {
                p2--;
            }
        }

        return [];
    }
}
