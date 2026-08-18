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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let curr1 = list1;
        let curr2 = list2;
        
        const dummy = { val: 0, next: null };
        let node = dummy;
        while(curr1 && curr2) {
            if (curr1.val < curr2.val) {
                node.next = curr1;
                curr1 = curr1.next;
            } else {
                node.next = curr2;
                curr2 = curr2.next
            }

            node = node.next;
        }

        while(curr1) {
            node.next = curr1;
            curr1 = curr1.next;
            node = node.next;        

        }

        while(curr2) {
            node.next = curr2;
            curr2 = curr2.next
            node = node.next;
        }

        return dummy.next; 
    }
}
