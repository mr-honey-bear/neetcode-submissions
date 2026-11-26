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
        res.push([root.val])
        while (queue.length) {
            let level = queue.length;
            let temp = [];

            for (let i = 0; i < level; i++) {
                let el = queue.shift();

                if (el.left) {
                    temp.push(el.left.val);
                    queue.push(el.left);
                } 

                if (el.right) {
                    temp.push(el.right.val);
                    queue.push(el.right);
                }
            }

            if (temp.length > 0) {
                res.push(temp);
            }
        }

        return res;
    }
}
