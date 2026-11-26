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
    diameterOfBinaryTree(root: TreeNode | null): number {
        let max = 0;

        let dfs = (node) => {
            if (!node) {
                return 0;
            }
            
            let left = dfs(node.left);
            let right = dfs(node.right);

            max = Math.max(max, left + right);

            return 1 + Math.max(left, right)
        }

        dfs(root);

        return max;
    }
}

/*
so since lowest nodes are 1, 
parent will be 2 
and if we add them together, we will get overall diameter
        N
      2 + 2
      N   N
    N  N N  N
*/
