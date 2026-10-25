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
        let max = 0;

        let dfs = (node, level) => {
            if (!node) {
                return 0;
            }

            return 1+Math.max(dfs(node.left, level++), dfs(node.right,level++))
        }

        return dfs(root, 1);
    }

    
}
