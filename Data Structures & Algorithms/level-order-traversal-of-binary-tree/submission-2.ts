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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        let res = [];

        if (!root) {
            return [];
        }

        let queue = [root];

        while (queue.length) {
            let level = queue.length;
            res.push([[...queue].map(e=>e.val)]);

            for (let i = 0; i < level; i++) {
                let el = queue.shift();

                if (el.left) {
                    queue.push(el.left);
                } 

                if (el.right) {
                    queue.push(el.right);
                }
            } 
        }

        return res;
    }
}
