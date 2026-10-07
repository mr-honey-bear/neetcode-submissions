class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let p1 = m-1;
        let p2 = n-1;
        let last = nums1.length -1;

        let res = [];
        // since nums1 = [1,2,3,0,0,0] and it's (n+m) so we can merge from the back
        while (p2 >= 0 && p1 >= 0) {
            if(p1 >= 0 && nums1[p1] > nums2[p2]) {
                nums1[last--] = nums1[p1--];
            } else {
                nums1[last--] = nums2[p2--]; 
            }
        }

        while (p2 >= 0) {
            nums1[last--] = nums2[p2--];
        }
    }

    // cleaner version, once we merge n, 1st one should be correctly placed.
    // merge(nums1, m, nums2, n) {
    //     let last = m + n - 1;
    //     let i = m - 1,
    //         j = n - 1;

    //     while (j >= 0) {
    //         if (i >= 0 && nums1[i] > nums2[j]) {
    //             nums1[last--] = nums1[i--];
    //         } else {
    //             nums1[last--] = nums2[j--];
    //         }
    //     }
    // }
}
