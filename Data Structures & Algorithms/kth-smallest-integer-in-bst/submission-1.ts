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
        let arr = []

        let dfs = (node) => {
            if (!node) {
                return null;
            }
            
            let left = dfs(node.left);
            arr.push(node.val);
            let rigtht= dfs(node.right)
        }

        dfs(root);

        return arr[k-1];
    }
}
