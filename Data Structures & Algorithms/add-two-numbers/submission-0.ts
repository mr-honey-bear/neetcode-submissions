/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let dummy = new ListNode();
        let cur = dummy;

        let carry = 0;

        while (l1 || l2 || carry) {
            let sum = carry;

            if(l1) {
                sum += l1.val;
                l1 = l1.next;
            }

            if(l2) {
                sum += l2.val;
                l2 = l2.next;
            }

            carry = Math.floor(sum/10);
            //lets say sum is 12. We keep 2 and carry over 1.
            // using math floor, we will get the carry number

            let val = sum %10;

            // create next el and move pointer to new current
            cur.next = new ListNode(val);
            cur = cur.next;
        }

        return dummy.next;
    }
}
