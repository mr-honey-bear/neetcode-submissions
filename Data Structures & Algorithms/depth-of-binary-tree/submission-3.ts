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
        if (!root) return 0;

        // DFS
        let max = 0;
        let dfs = (node: TreeNode, level = 1) => {

            if (!node.left && !node.right) {
                console.log(max, level, node.val);
                max = Math.max(level, max);
                console.log(max)
            }
            
            if(node.left) {
                dfs(node.left, level + 1);
            }  
            
            if (node.right) {
                dfs(node.right, level+1);
            }
        }

        dfs(root);

        return max;
    }

    
}
