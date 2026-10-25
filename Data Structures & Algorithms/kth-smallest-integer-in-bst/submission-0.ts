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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let res = [];
        // in order traversal, numbers are sorted
        let dfs = (node) => {
            if (!node) {
                return;
            }  
            dfs(node.left);
            res.push(node.val);
            dfs(node.right);
        }

        dfs(root);
        
        console.log(res);
        return res[k-1];
    }
}
