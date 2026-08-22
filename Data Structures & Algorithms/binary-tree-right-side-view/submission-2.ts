/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        let res = [];

        if (!root) {
            return res;
        }

        let queue = [root];

        while(queue.length > 0) {
            let size = queue.length;

            res.push(queue[size-1].val);

            for (let i = 0; i < size; i++) {
                let el = queue.shift();

                if (el.left) {
                    queue.push(el.left)
                } 

                if (el.right) {
                    queue.push(el.right)
                }
            }

            console.log(res);
        }

        return res;
    }
}
