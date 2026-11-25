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
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        let dfs = (node): number => {
            if (!node) {
                return 0;
            }

            let left = dfs(node.left);
            let right = dfs(node.right);
            // lets say we have have 1 node
            // it will be 0 + 0 and +1 for root
            return 1+ Math.max(left, right);
        }

        return dfs(root);
    }

    
}
