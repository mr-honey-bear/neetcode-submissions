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
            
            let left = dfs(node.left, level++);
            let right = dfs(node.right,level++);

            return 1 + Math.max(left, right)
        }

        return dfs(root, 1);
    }

    
}
