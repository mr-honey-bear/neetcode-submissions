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
        let res = 0
        let dfs = (node, level): number => {
            if (!node) {
                return;
            }
            level++;

            res = Math.max(res, level)

            dfs(node.left, level);
            dfs(node.right, level);
        }
        dfs(root,0);
        return res;
    }

    
}
